import express from "express";
import cors from "cors";
const app = express();
const p = 6000;
app.use(cors());
app.use(express.json());

const sh= {};
function gen() {
    return Math.random().toString(36).substring(2, 8);
}

function val(lin) {
    try {
        new URL(lin);
        return true;
    } catch {
        return false;
    }
}

app.post("/shorturls", (req, res) => {
    const { ul } = req.body;
    if (!url || !isValidUrl(ur)) {
        return res.status(400).json({ error: "Invalid URL" });
    }
    const c = gen();
    sh[c] = ur;
    res.status(201).json({
        shortUrl: `http://localhost:${p}/${code}`,
        shortcode: code
    });
});


app.listen(p, () => {
    console.log(`Server is running on port ${p}`);
});