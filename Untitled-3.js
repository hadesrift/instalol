const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

// Allow cross-origin requests
app.use(require("cors")());
app.use(express.json());

// Handle video download
app.get("/download", async (req, res) => {
    const videoURL = req.query.video;
    if (!videoURL) {
        return res.status(400).send("Video URL is required.");
    }

    // Logic to download Instagram video (replace with a real API or scraping logic)
    try {
        // Simulating video download (replace with actual logic)
        const videoContent = await axios.get(videoURL, { responseType: "stream" });
        res.setHeader("Content-Disposition", "attachment; filename=video.mp4");
        videoContent.data.pipe(res);
    } catch (error) {
        console.error("Error downloading video:", error.message);
        res.status(500).send("Failed to download the video.");
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
