// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: number;
  name: string;
  color: string;
  size: string;
  eta: string;
  quantity: number;
  price: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ convenienceFee: number; data: Data[] }>
) {
  res.status(200).json({
    convenienceFee: 100,
    data: [
      {
        id: 1,
        name: "Cool & Comfy Classics",
        color: "Blue & White",
        size: "M",
        eta: "Delivered in 2-3 working days",
        quantity: 1,
        price: 2500,
      },
      {
        id: 2,
        name: "Sarees",
        color: "Orange",
        size: "L",
        eta: "Delivered in 3-5 working days",
        quantity: 1,
        price: 5500,
      },
      {
        id: 3,
        name: "Jeans",
        color: "Blue",
        size: "L",
        eta: "Delivered in 1-2 working days",
        quantity: 1,
        price: 1500,
      },
    ],
  });
}
