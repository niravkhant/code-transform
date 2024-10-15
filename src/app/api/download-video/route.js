import ytdl from "ytdl-core";
import { PassThrough } from "stream";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!ytdl.validateURL(url)) {
    return new Response(JSON.stringify({ error: "Invalid YouTube URL" }), { status: 400 });
  }

  try {
    const stream = ytdl(url, { quality: "highestvideo" });
    const passThrough = new PassThrough();

    stream.pipe(passThrough);

    return new Response(passThrough, {
      headers: {
        "Content-Disposition": 'attachment; filename="video.mp4"',
        "Content-Type": "video/mp4",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};
