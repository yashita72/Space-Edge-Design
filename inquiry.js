async function submitEnquiry(enquiry) {

    const response = await fetch("/api/contact", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(enquiry)

    });

    if (!response.ok) {
        throw new Error("Submission failed");
    }

    return true;
}