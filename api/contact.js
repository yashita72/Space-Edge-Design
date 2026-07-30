export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const GOOGLE_SCRIPT =
      "https://script.google.com/macros/s/AKfycbx76YHs7vArLLZUt12-eBT-EletqYtcjwBm-cDXk7hN2NDKVzMZc-ujaAjiDsvLPDRiRw/exec";

    const response = await fetch(GOOGLE_SCRIPT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    const text = await response.text();

    return res.status(200).json({
      success: true,
      response: text,
    });

  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
}