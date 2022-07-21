import { connectToDatabase } from "../../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  if (req.method === "GET") {
    const submissions = await db.collection("submissions").find({}).toArray();

    res.statusCode = 200;
    res.json(submissions);
  } else if (req.method === "POST") {
    var submissionParams = req.body;
    if (!submissionParams.hasOwnProperty("timestamp")) {
        submissionParams["timestamp"] = new Date(Date.now());
    }
    const submissionResult = await db
      .collection("submissions")
      .insertOne(submissionParams);

    res.json({
      "Created new submission with ID": submissionResult["insertedId"],
    });
  }
};
