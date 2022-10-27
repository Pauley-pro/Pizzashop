import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
    cookies
  } = req;
  const token = cookies.token

  dbConnect();

  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "PUT") {
    /*if(!token || token !== process.env.token){
      return res.status(401).json("Not authenticated!")
    }*/
    try {
      const product = await Product.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "DELETE") {
    /*if(!token || token !== process.env.token){
      return res.status(401).json("Not authenticated!")
    }*/
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json("The product has been deleted!");
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

/*
 This file is to be created alongside [id].js as both deal with single product
 The conditional statement in Lines 24 and 38 is If there is no token or token is not equal to process.env.token, return.....
*/