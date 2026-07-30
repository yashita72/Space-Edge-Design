// ====================================================
// SHARED ENQUIRY SUBMISSION SERVICE
// Google Apps Script Integration
// ====================================================

const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx76YHs7vArLLZUt12-eBT-EletqYtcjwBm-cDXk7hN2NDKVzMZc-ujaAjiDsvLPDRiRw/exec";

/**
 * Handles the unified submission payload for Google Sheets using Google Apps Script
 * @param {Object} enquiry - The validated enquiry object
 * @returns {Promise<boolean>} Resolves to true if successful, throws an error if failed
 */
async function submitEnquiry(enquiry) {
  console.log("Enquiry payload prepared for submission:", enquiry);

  try {
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(enquiry)
    });

    if (response.ok) {
      return true;
    } else {
      throw new Error("Submission failed");
    }
  } catch (error) {
    console.error("Submission error details:", error);
    throw new Error("Submission failed");
  }
}
