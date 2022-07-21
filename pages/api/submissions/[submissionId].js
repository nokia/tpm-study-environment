import { connectToDatabase } from "../../../util/mongodb";
import { ObjectID } from "mongodb";

export default async (req, res) => {
  const {
    query: { submissionId },
  } = req;
  const { db } = await connectToDatabase();
  if (req.method === 'GET') {
    const submission = await db
      .collection("submissions")
      .findOne({ _id: new ObjectID(submissionId) });

    res.json(submission);
  }
};
