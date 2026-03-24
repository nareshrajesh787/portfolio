# Contact Form Setup Instructions

The Contact page is currently set up to use a third-party form service called **Formspree** (or similar services like Formkeep, Getform). This allows you to receive contact submissions directly to your email without needing to host a custom backend.

Here's how to configure it in 3 easy steps:

### 1. Create a Formspree Account
1. Go to [Formspree.io](https://formspree.io) and create a free account.
2. In your dashboard, click **"New Form"**.
3. Name it something like "Portfolio Contact Form" and set the destination email to your preferred email address.
4. Click **"Create Form"**.

### 2. Get Your Endpoint URL
1. Once the form is created, Formspree will provide you with an endpoint URL. 
2. It should look something like: `https://formspree.io/f/xabcdefg` (where `xabcdefg` is your unique form ID).
3. Copy this URL.

### 3. Update the Code
1. Open the `/app/contact/ContactForm.tsx` file in your code editor.
2. Find the fetch request around line 17:
   ```typescript
   const response = await fetch("FORM_ENDPOINT_HERE", {
   ```
3. Replace `"FORM_ENDPOINT_HERE"` with the URL you copied from Formspree.

### That's it!
Your contact form will now securely send messages directly to your email, complete with validation, loading states, and success messages built directly into your site.
