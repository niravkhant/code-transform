"use client"
import TabChange from "@/Components/TabChange";
import { useState } from "react";

const pageYoutubeDownload = () => {
  const [url, setUrl] = useState("");

  const handleDownloadVideo = () => {
    window.location.href = `/api/download-video?url=${encodeURIComponent(url)}`;
  };

  const handleDownloadPlaylist = () => {
    window.location.href = `/api/download-playlist?url=${encodeURIComponent(url)}`;
  };

  return (
    <>
   
    <div>
      <h1>YouTube Downloader</h1>
      <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter YouTube video or playlist URL" />
      <button onClick={handleDownloadVideo}>Download Video</button>
      <button onClick={handleDownloadPlaylist}>Download Playlist</button>
    </div>
    <TabChange/>
    </>
  );
};

export default pageYoutubeDownload;
