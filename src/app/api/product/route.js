import connectToDB from "@/config/db";
import productModel from "@/models/Product";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req) {
  try {
    await connectToDB();
    const formData = await req.formData();

    const name = formData.get("name");
    const price = formData.get("price");
    const category = formData.get("category");
    const size = formData.get("size");
    const materials = formData.get("materials");
    const img = formData.get("img");

    const buffer = Buffer.from(await img.arrayBuffer());
    const filename = Date.now() + img.name;
    await writeFile(
      path.join(process.cwd(), "public/uploads/" + filename),
      buffer
    );

    const product = await productModel.create({
      name,
      price,
      category,
      size,
      materials,
      img: `http://localhost:3000/uploads/${filename}`,
    });

    return Response.json({
      message: "Product created successfuly",
      data: product,
    });
  } catch (err) {
    return Response.json(
      {
        Error: err,
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDB();
    const allProducts = await productModel.find({});
    return Response.json(allProducts, { status: 200 });
  } catch (err) {
    return new Response(
      JSON.stringify({
        Error: err,
      }),
      {
        status: 500,
      }
    );
  }
}
