import { MongoClient, ObjectId } from 'mongodb';

const uri = "mongodb+srv://fqtugs19_db_user:bywdCW1otOgnoKuK@backend-lesson.hs8srsx.mongodb.net/sample_mflix?appName=backend-lesson";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const db = client.db("sample_mflix");
const movie = await db.collection("movie").findOne({year:"1999"})

console.log(movie);
console.log("-----------");

    const comment = await db
      .collection("comments")
      .findOne({
        movie_id: new ObjectId("573a1390f29313caabcd4323")
      });

    console.log(comment);

  } finally {
    await client.close();
  }
}

run().catch(console.dir);
