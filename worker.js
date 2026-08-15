export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Route only the contact API endpoint through the Worker
    if (url.pathname === "/api/contact") {
      const corsHeaders = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      };

      // Handle CORS preflight
      if (request.method === "OPTIONS") {
        return new Response(null, {
          status: 204,
          headers: corsHeaders,
        });
      }

      if (request.method !== "POST") {
        return new Response(JSON.stringify({ error: "Method not allowed" }), {
          status: 405,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        });
      }

      try {
        // Read the Google Script URL from environment variable. Do NOT fallback or duplicate.
        const googleScriptUrl = env.GOOGLE_SCRIPT_URL;
        if (!googleScriptUrl) {
          throw new Error("GOOGLE_SCRIPT_URL environment variable is not configured.");
        }

        const bodyText = await request.text();

        // Forward payload to Google Script
        const response = await fetch(googleScriptUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: bodyText,
        });

        const responseText = await response.text();

        return new Response(
          JSON.stringify({
            success: true,
            response: responseText,
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
              ...corsHeaders,
            },
          }
        );
      } catch (err) {
        console.error("Worker error handling contact enquiry:", err);
        return new Response(
          JSON.stringify({
            success: false,
            error: err.message,
          }),
          {
            status: 500,
            headers: {
              "Content-Type": "application/json",
              ...corsHeaders,
            },
          }
        );
      }
    }

    // Serve static files via Pages/Workers Assets
    return env.ASSETS.fetch(request);
  },
};
