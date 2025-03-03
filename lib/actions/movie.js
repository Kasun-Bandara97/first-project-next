"use server";
import { clientPromise } from "@/lib/mongodb";

export const createMovie= async (movie)=> {
  try{
    const client = await clientPromise();
    const db = client.db("sample_mflix");
    const result = await db.collection("movies_n").insertOne(movie);

    console.log(`A movie was inserted with the _id: ${result.insertedId}`);


  }catch{
    console.log("Mongodb Insert failed");
  }
};
