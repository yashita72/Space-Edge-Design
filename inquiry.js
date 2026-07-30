// ====================================================
// SHARED ENQUIRY SUBMISSION SERVICE
// Google Apps Script Integration
// ====================================================

const GOOGLE_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx76YHs7vArLLZUt12-eBT-EletqYtcjwBm-cDXk7hN2NDKVzMZc-ujaAjiDsvLPDRiRw/exec";

async function submitEnquiry(enquiry) {
  console.log("Submitting enquiry:", enquiry);

  try {
    await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(enquiry)
    });

    return true;

  } catch (err) {
    console.error(err);
    throw err;
  }
}