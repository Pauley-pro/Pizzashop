import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const { method, cookies } = req;

  const token = cookies.token

  dbConnect();

  if (method === "GET") {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "POST") {
    /*if(!token || token !== process.env.token){
      return res.status(401).json("Not authenticated!")
    }*/
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json(err);
    }


  }
}


/*
The bracket in Line 13 is empty because all data will be gotten, however anything can be placed provided that there is a specific data that we want to get. It'd be written as ({title:"pizza1"})
The conditional statement in Line 21 is If there is no token or token is not equal to process.env.token, return....

NB: This is for the display of all products in the products' page.
 ON INSOMNIA
 url: localhost:3000/api/products
 method: POST
 Format: JSON
 
 {
    "title": "pizza1",
    "img": "/img/pizza.png",
    "desc": "desc1",
    "prices": [12,13,14],
    "extraOptions": [
        {
            "text":"Garlic sauce", 
            "price":2
        },
        {
            "text":"Garlic sauce", 
            "price":2
        }
    ]
 }

 The req.body in line 25 is making request to the entirety of the data which will be sent to the server. In this case, we're using Insomnia for API request, however, if it had been Postman, Body(and the raw) should selected

 NB: the token will not be there at first otherwise product will not be created. This is because we'd need to authenticate and authorise the admin
 */