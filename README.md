# Work Autofill

A lightweight Chrome extension that fills out a repetitive work form with one click.

At work, I enter the same billing details into the same form on findhelp.com over and over. This extension adds a **FILL** button to the page that fills every field at once: dropdowns, text boxes, and date ranges. A task that took a minute of clicking and typing now takes a second.

<!-- Add a screenshot of the FILL button on the page here -->
<!-- ![FILL button](docs/fill-button.png) -->

## Features

- **One-click fill:** a floating FILL button in the bottom-right corner of the page fills the whole form
- **Handles every field type:** dropdowns (matched by option text or value), text inputs, and date inputs
- **Works with modern web apps:** sets values the way React and Angular expect, so the site registers the change instead of ignoring it
- **Clear error messages:** if a field or dropdown option can't be found, an alert tells you exactly which one
- **Easy to customize:** all fields and values live in one list at the top of `content.js`
- **Runs only where it's needed:** the extension activates only on findhelp.com pages

## How It Works

1. Chrome loads `content.js` on any findhelp.com page.
2. The script adds the FILL button to the page.
3. When you click it, the script finds each field from its CSS selector and sets the value you chose.
4. It fires `input` and `change` events after each value, so the page's framework knows the field was updated.

## Installation

This extension isn't on the Chrome Web Store. You load it yourself:

1. Download or clone this repo.
2. Open Chrome and go to `chrome://extensions`.
3. Turn on **Developer mode** in the top-right corner.
4. Click **Load unpacked** and select this folder.
5. Open the form on findhelp.com. The FILL button appears in the bottom-right corner.

## Customizing the Fields

Open `content.js` and edit the `FIELDS` list at the top:

```js
const FIELDS = [
  { selector: "#dropdown",   value: "Option text or value" },
  { selector: "#textbox",    value: "12345" },
  { selector: "#start-date", value: "2026-11-01" }, // date fields use YYYY-MM-DD
  { selector: "#end-date",   value: "2026-11-30" },
];
```

**To find a field's selector:**
1. Right-click the field on the page and choose **Inspect**.
2. Right-click the highlighted HTML.
3. Choose **Copy** > **Copy selector**.
4. Paste it into `selector`.

After you save your changes, go back to `chrome://extensions` and click the reload icon on the extension.

**To use it on a different site,** change the `matches` URL in `manifest.json`.

## Tech Stack

- JavaScript
- Chrome Extensions (Manifest V3, content scripts)

## Project Structure

```
manifest.json   Extension settings and which sites it runs on
content.js      The FILL button and the form-filling logic
```
