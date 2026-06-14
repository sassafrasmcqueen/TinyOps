# TinyOps — Brand Guidelines & Identity
*Version 1.0 • Ratified June 2026*

Welcome to the brand book for **TinyOps**. This document defines our visual identity, typography, color systems, voice, and design principles. 

TinyOps provides pre-assembled AI workflow kits that automate time-consuming small business operations. We design for non-technical solo service providers (coaches, consultants, freelancers, local tradespeople). Our brand must feel **warm, trustworthy, simple, and professional.**

---

## 1. Brand Essence & Core Values

TinyOps sits at the intersection of **sophisticated automation** and **extreme accessibility**.

*   **Trust over Hype:** We avoid flashy "AI revolution" or "hustle culture" aesthetics. No neon colors, no hyper-futuristic robot illustrations. We use warm, grounding colors that feel stable.
*   **Extreme Simplicity:** If it looks complicated, our target customer won't buy. Layouts must have generous white space, clean lines, and an easy-to-read hierarchy.
*   **A "Done-with-You" Feel:** We are friendly, approachable, and human. We use real words, not tech jargon.
*   **High Value / Instant ROI:** Our design elements should feel polished and premium (like Stripe or Notion), proving that a $67 kit is worth 100x its price in saved hours.

---

## 2. Color Palette

Our color palette is inspired by **Notion's clean minimalism** and **Stripe's professional trust**, using a warm cream paper base to feel welcoming and human.

### Primary Brand Colors
*   **TinyOps Ink (Deep Slate Charcoal):** `#18181B` (RGB: `24, 24, 27`)
    *   *Usage:* Body text, headings, dark backgrounds, primary UI borders.
    *   *Rationale:* Grounding, high contrast, readable, softer than pure black.
*   **TinyOps Indigo (Trust & Automation):** `#4F46E5` (RGB: `79, 70, 229`)
    *   *Usage:* Primary call-to-action buttons, links, primary icons, branding highlights.
    *   *Rationale:* Professional and modern, representing the "magic" of automation.

### Accent & Status Colors
*   **TinyOps Emerald (Success & ROI):** `#059669` (RGB: `5, 150, 105`)
    *   *Usage:* Pricing badges, "save time/money" metrics, purchase buttons, success states.
    *   *Rationale:* Denotes growth, savings, and financial clarity.
*   **TinyOps Amber (Warm Highlight):** `#D97706` (RGB: `217, 119, 6`)
    *   *Usage:* "15-minute install" badges, tips, warnings, high-priority callouts.
    *   *Rationale:* Friendly, alert, warm.

### Supporting Backgrounds & Neutrals
*   **TinyOps Warm Cream (Page Background):** `#FFFDF9` (RGB: `255, 253, 249`)
    *   *Usage:* Primary page background.
    *   *Rationale:* Warm and welcoming, much less sterile than stark `#FFFFFF`. Feels like high-quality paper.
*   **TinyOps Sand (Section Background):** `#F4F3EF` (RGB: `244, 243, 239`)
    *   *Usage:* Secondary sections, card backgrounds, alternating table rows, footer.
    *   *Rationale:* Adds subtle depth and texture.
*   **TinyOps Muted Gray (Borders & Secondary Text):** `#71717A` (RGB: `113, 113, 122`) for text; `#E4E4E7` (RGB: `228, 228, 231`) for lines.
    *   *Usage:* Captions, borders, placeholder text, dividers.

---

## 3. Typography

We use highly readable, clean sans-serif typography that feels modern yet established.

### Font Family
*   **Primary Font:** `Inter` (Sans-serif)
    *   *Fallback Stack:* `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`
    *   *Implementation:* Imported via Google Fonts. Used for headings, body, and interface elements.

### Type Scale & Hierarchy
*   **Hero Heading (H1):** `40px` (or `2.5rem`) | Bold (`700` or `800`) | Tracking `-0.02em` | Line height `1.2`
*   **Section Heading (H2):** `28px` (or `1.75rem`) | Semi-Bold (`600` or `700`) | Tracking `-0.01em` | Line height `1.3`
*   **Subsection Heading (H3):** `20px` (or `1.25rem`) | Medium (`500` or `600`) | Line height `1.4`
*   **Body Text (Regular):** `16px` (or `1rem`) | Regular (`400`) | Line height `1.6` | Color `#3F3F46`
*   **Secondary/Muted Text:** `14px` (or `0.875rem`) | Regular (`400`) | Color `#71717A`
*   **Badge/UI Labels:** `12px` (or `0.75rem`) | Bold (`700`) | Uppercase | Tracking `0.05em`

---

## 4. Logo Design

The **TinyOps** logo represents pre-assembled simplicity. It consists of a **Sleek Symmetrical Gear + Spark ✦** icon, paired with high-legibility typography.

### Logo Concept
1.  **The Gear:** Represents "operations", "workflows", and "machinery" running in the background.
2.  **The Spark (✦):** Represents "AI", "speed", and the "magic" of automating away manual labor.
3.  **The Wordmark:** Clean, solid geometry with "Tiny" in Medium weight and "Ops" in Heavy Bold weight, visually balancing the brand name.

### Logo Files
*   **Standalone Icon SVG:** `/home/team/shared/brand/logo-icon.svg`
*   **Horizontal Logo SVG:** `/home/team/shared/brand/logo-full.svg`

*For high-resolution embedding in HTML mockups, use the SVG source code directly.*

---

## 5. Visual Motifs & UI Components

*   **Borders & Radii:** 
    *   Card borders should be `1px solid #E4E4E7` (or slightly darker `#D4D4D8` for active states).
    *   Border radius should be `12px` for main cards, and `8px` for buttons/badges (yielding a friendly, modern "soft-corner" aesthetic).
*   **Shadows:** 
    *   Use very soft, elegant shadows to elevate cards from the warm cream background:
    *   `box-shadow: 0 4px 6px -1px rgba(24, 24, 27, 0.05), 0 2px 4px -1px rgba(24, 24, 27, 0.03);`
*   **Before/After Comparisons:**
    *   When showing "Before" (manual, painful), use a subtle background tint of soft red (`#FEF2F2`) and muted slate text.
    *   When showing "After" (automated, joyous), use a subtle background tint of soft emerald (`#ECFDF5`) and vibrant slate text.
*   **Badges:**
    *   Badges are critical for callouts. Use uppercase bold text with 8px radius and a light background color matching the text color (e.g., Indigo text on light Indigo tint).

---

## 6. Voice & Tone Guidelines

We write for small business owners who are overwhelmed, not developers. 

| Instead of... | We say... | Why? |
| :--- | :--- | :--- |
| "Integrate APIs via Webhooks" | "Connect your tools automatically" | No technical barriers. |
| "High-throughput Make.com scenario" | "An automated system that runs while you sleep" | Focuses on benefits, not jargon. |
| "Optimize administrative overhead" | "Save 10+ hours of paperwork every single week" | Concrete, tangible, and highly desirable. |
| "Proprietary AI onboarding algorithms" | "Pre-written emails and forms that work instantly" | Practical, believable, and transparent. |
