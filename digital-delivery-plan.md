# TinyOps — Digital Delivery Plan
*Version 1.0 • Ratified June 2026*

This document outlines the strategic plan and customer experience flow for delivering digital products to TinyOps purchasers. 

Our core KPI is **Time-to-Install (< 15 minutes)**. If the delivery process is confusing, slow, or requires technical skills, the customer will request a refund. This plan ensures a frictionless, instant, and high-trust delivery experience.

---

## 1. Checkout Platform Selection: Lemon Squeezy

We recommend **Lemon Squeezy** as our primary checkout and merchant of record (MoR), with **Gumroad** as a secondary option. 

### Why Lemon Squeezy?
1.  **Merchant of Record:** They handle global sales tax and EU VAT compliance automatically. This is essential for a tiny team with zero tax overhead.
2.  **Stripe/PayPal Backend:** Supports credit card and Apple Pay natively, which increases conversions on mobile.
3.  **Affiliate Program Built-In:** Allows us to easily recruit affiliates (other coaches, Notion consultants, SaaS creators) and pay them commissions.
4.  **No-Code Checkout Overlays:** We can embed a beautiful, clean checkout modal right on our website on port 3000, preventing customers from leaving our site.
5.  **Clean, Modern UI:** Fits perfectly with our "Notion meets Stripe" aesthetic.

---

## 2. The Customer Purchase Journey (Frictionless Flow)

We map the step-by-step journey of a buyer purchasing the **Client Onboarding Kit ($67)**:

```
[Sales Page] ──► [Lemon Squeezy Overlay] ──► [Instant Redirect to Success Page]
                                                    │
                                                    ├──► [Access Notion Delivery Portal]
                                                    └──► [Affiliate Links (Make, Calendly)]
```

### Step 1: Click CTA on Sales Page
*   The user clicks the "Get Instant Access ($67)" button.
*   A clean checkout modal slides over the landing page. It is branded with our `logo-icon.svg` and utilizes our brand color (`#4F46E5`).

### Step 2: Checkout Completion
*   The customer inputs their email and payment info (Apple Pay allows a 1-click checkout).
*   *Friction reduction:* We only ask for **Email, Name, and Payment details**. No billing address fields are required for digital goods in most jurisdictions under Lemon Squeezy, speeding up checkout.

### Step 3: Instant Redirection (The Success Page)
*   Immediately upon successful payment, the checkout modal redirects the user to our hosted success page: `tinyops.com/success/client-onboarding`.
*   **The goal of this page is immediate momentum and reassurance.**
*   *Sections on the Success Page:*
    1.  **Warm Congratulatory Banner:** "You're in! Let's save you 10 hours this week."
    2.  **The "Big Green Button":** A prominent CTA: **"Access Your Onboarding Hub (Notion)"**.
    3.  **Preparation Checklist (While they wait for the emails):**
        *   "Step 1: Sign up for a free **Make.com** account [Our Affiliate Link]."
        *   "Step 2: Ensure you have a **Notion** account [Our Affiliate Link]."
        *   "Step 3: Log in to your **Gmail** and **Google Drive**."

### Step 4: Automated Email Delivery
*   Within 60 seconds, Lemon Squeezy sends a branded HTML receipt email containing:
    *   Their invoice.
    *   A permanent button: **"Access Your Purchase"**.
    *   This button links to the same **TinyOps Onboarding Hub** in Notion, ensuring they can never lose access.

---

## 3. Product Delivery Asset: The "Notion Hub" Strategy

We do **not** deliver ZIP files containing raw text or code. ZIP files confuse non-technical users and look low-value. Instead, we deliver a **Premium Notion Portal** that acts as the "Gateway Hub" for the product.

### The Gateway Hub structure
Upon purchase, the customer is given a link to the read-only **TinyOps Onboarding Gateway Hub** in Notion. They are instructed to duplicate this page into their own workspace, or simply use the links inside.

The Gateway Hub contains:
1.  **Welcome Video:** A friendly 2-minute Loom video walking them through the hub.
2.  **1-Click Template Duplications:**
    *   `[Button]` **Duplicate Notion CRM Template** (links to our master public Notion template, ready to "Duplicate" with 1-click).
    *   `[Button]` **Download Intake Google Form** (links to a Google Form template that makes a copy directly into their Google Drive).
    *   `[Button]` **Download Proposal Google Doc** (links to a Google Doc template that copies to their Drive).
3.  **Step-by-Step Installation Guides (The 15-Minute Blueprint):**
    *   Instead of reading raw markdown files, the user reads beautifully formatted Notion docs with embedded screenshots.
4.  **Make.com Scenario Blueprint:**
    *   A link to download the JSON blueprint of the Make.com scenario, which they can import into their Make.com account with 2 clicks.
5.  **"Done-for-You" (DFY) Safety Net:**
    *   An embedded banner: *"Stuck? Or just want us to do it for you? Upgrade to our Done-For-You Setup for $180 (usually $247) and we'll handle the entire installation on your accounts."*
    *   This converts frustrated users into high-margin service clients.

---

## 4. Affiliate Commission Engine (Passive Revenue)

Our secondary revenue stream comes from partner commissions. Since our users must create accounts with Make.com, Calendly, and Notion, we embed our affiliate tracking links directly into the onboarding steps.

| Resource | Customer Need | Our Affiliate Action | Passive Yield |
| :--- | :--- | :--- | :--- |
| **Make.com** | Needed to run the automation glue | Referral link to sign up | 20% lifetime recurring commission |
| **Notion** | Holds their CRM and Client portal | Referral link to create account | 20% recurring for paid plan upgrades |
| **Calendly** | Client booking and appointment scheduling | Calendly Partner program link | Recurring commission on paid seats |

By weaving these links organically into the setup guide (e.g., *"Step 1: Sign up for your free Make.com account here"*), we capture highly qualified recurring affiliates without aggressive sales tactics.

---

## 5. All-Access Bundle Delivery

For the **All-Access Bundle ($297)**, the flow is identical, but the gateway hub is the **TinyOps All-Access Portal**.
*   This portal displays a card grid of all current kits (Client Onboarding, Invoice Follow-up, etc.).
*   Each card opens the respective kit's delivery portal.
*   "Locked" cards show upcoming kits with release dates, building anticipation and increasing retention of annual members.
