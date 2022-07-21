// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectToDatabase } from '../../util/mongodb'

export default (req, res) => {
  connectToDatabase()
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
