import sharp from "sharp";
import { NextResponse } from "next/server";

export const config = {
  api: {
    bodyParser: false,
  },
};

// const getRawBody = async (req) => {
//   return new Promise((resolve, reject) => {
//     const chunks = [];
//     req.on("data", (chunk) => {
//       chunks.push(chunk);
//     });
//     req.on("end", () => {
//       resolve(Buffer.concat(chunks));
//     });
//     req.on("error", reject);
//   });
// };

export const POST = async (req) => {
  const formData = await req.formData();
  const file = formData.get("file");

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  try {
    const image = sharp(buffer);
    const processedImage = await image.grayscale().threshold(128).resize(500).toBuffer();

    return new NextResponse(processedImage, {
      headers: {
        "Content-Type": "image/png",
      },
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to process image" }, { status: 500 });
  }
};
