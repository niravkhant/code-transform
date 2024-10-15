import ytpl from "ytpl";
import ytdl from "ytdl-core";
import { PassThrough } from "stream";
import archiver from "archiver";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');

  try {
    const playlist = await ytpl(url);
    const archive = archiver('zip', { zlib: { level: 9 } });
    const archiveStream = new PassThrough();

    const headers = new Headers();
    headers.append('Content-Disposition', `attachment; filename="${playlist.title}.zip"`);
    headers.append('Content-Type', 'application/zip');

    archive.pipe(archiveStream);

    playlist.items.forEach(item => {
      const videoStream = ytdl(item.url, { quality: 'highestvideo' });
      archive.append(videoStream, { name: `${item.title}.mp4` });
    });

    archive.finalize();

    return new Response(archiveStream, { headers });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};
