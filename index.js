const express = require('express');
const path = require('path');
const fs = require('fs');
const AdmZip = require('adm-zip');

const app = express();
const PORT = 3000;

// Body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static assets from brand folder
app.use('/brand', express.static(path.join(__dirname, 'brand')));

// Simulated database
const transactions = [];

// Helper to zip client-onboarding-kit
function createKitZip() {
  const zip = new AdmZip();
  const kitPath = '/home/team/shared/client-onboarding-kit';
  if (fs.existsSync(kitPath)) {
    zip.addLocalFolder(kitPath);
    return zip.toBuffer();
  }
  return null;
}

// Helper to zip invoice-follow-up-kit
function createInvoiceKitZip() {
  const zip = new AdmZip();
  const kitPath = '/home/team/shared/invoice-follow-up-kit';
  if (fs.existsSync(kitPath)) {
    zip.addLocalFolder(kitPath);
    return zip.toBuffer();
  }
  return null;
}

// Helper to zip all-access-bundle
function createAllAccessZip() {
  const zip = new AdmZip();
  const onboardingPath = '/home/team/shared/client-onboarding-kit';
  const invoicePath = '/home/team/shared/invoice-follow-up-kit';
  let added = false;
  
  if (fs.existsSync(onboardingPath)) {
    zip.addLocalFolder(onboardingPath, 'client-onboarding-kit');
    added = true;
  }
  if (fs.existsSync(invoicePath)) {
    zip.addLocalFolder(invoicePath, 'invoice-follow-up-kit');
    added = true;
  }
  
  // Add welcoming documentation
  const welcomeText = `# ★ Welcome to TinyOps All-Access Bundle!

Thank you for purchasing the TinyOps All-Access Bundle. You now have lifetime access to every operational automation kit we build.

## Your Premium Deliverables:

1. **Client Onboarding Kit** — Located in the \`/client-onboarding-kit\` folder of this ZIP.
2. **Invoice Follow-Up Kit** — Located in the \`/invoice-follow-up-kit\` folder of this ZIP.
3. **Central Notion Member Hub** — Your direct central station for duplicating Notion templates and downloading future kits automatically!
   👉 Link to duplicate: https://notion.so/tinyops/all-access-member-dashboard-duplicate
4. **Private Slack Community Invite** — Connect with other automated service providers and freelancers.
   👉 Invite link: https://slack.com/tinyops-community-invite
5. **12-Hour Priority Support** — Email us directly at priority-support@tinyops.com for instant developer-level assistance.

To your productivity,
The TinyOps Team
`;
  zip.addFile('WELCOME-ALL-ACCESS.md', Buffer.from(welcomeText, 'utf8'));
  
  if (added) {
    return zip.toBuffer();
  }
  return null;
}

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/kits/client-onboarding', (req, res) => {
  res.sendFile(path.join(__dirname, 'product-page.html'));
});

app.get('/kits/invoice-follow-up', (req, res) => {
  res.sendFile(path.join(__dirname, 'invoice-follow-up.html'));
});

app.get('/kits/all-access', (req, res) => {
  res.sendFile(path.join(__dirname, 'all-access.html'));
});

app.get('/setup-service', (req, res) => {
  res.sendFile(path.join(__dirname, 'setup-service.html'));
});

app.get('/catalog', (req, res) => {
  res.sendFile(path.join(__dirname, 'catalog.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/faq', (req, res) => {
  res.sendFile(path.join(__dirname, 'faq.html'));
});

app.get('/checkout', (req, res) => {
  res.sendFile(path.join(__dirname, 'checkout.html'));
});

app.post('/api/pay', (req, res) => {
  const { email, name, item, cardNumber, expiry, cvc } = req.body;
  if (!email || !name) {
    return res.status(400).send('Email and Name are required');
  }

  const transactionId = 'txn_' + Math.random().toString(36).substr(2, 9);
  const selectedItem = item || 'client-onboarding';
  transactions.push({
    transactionId,
    email,
    name,
    item: selectedItem,
    date: new Date().toISOString()
  });

  // Redirect to success page with query parameters
  res.redirect(`/success?item=${encodeURIComponent(selectedItem)}&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&txn=${transactionId}`);
});

app.get('/success', (req, res) => {
  res.sendFile(path.join(__dirname, 'success.html'));
});

// Dynamic download endpoints
app.get('/api/download/client-onboarding-kit', (req, res) => {
  const buffer = createKitZip();
  if (buffer) {
    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', 'attachment; filename=tinyops-client-onboarding-kit.zip');
    res.send(buffer);
  } else {
    res.status(404).send('Kit files not found on server');
  }
});

app.get('/api/download/invoice-follow-up-kit', (req, res) => {
  const buffer = createInvoiceKitZip();
  if (buffer) {
    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', 'attachment; filename=tinyops-invoice-follow-up-kit.zip');
    res.send(buffer);
  } else {
    res.status(404).send('Kit files not found on server');
  }
});

app.get('/api/download/all-access-bundle', (req, res) => {
  const buffer = createAllAccessZip();
  if (buffer) {
    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', 'attachment; filename=tinyops-all-access-bundle.zip');
    res.send(buffer);
  } else {
    res.status(404).send('Kit files not found on server');
  }
});

// 404 Fallback
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`TinyOps Web Server running on port ${PORT}`);
});
