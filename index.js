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
  transactions.push({
    transactionId,
    email,
    name,
    item: item || 'client-onboarding',
    date: new Date().toISOString()
  });

  // Redirect to success page with query parameters
  res.redirect(`/success?item=${encodeURIComponent(item || 'client-onboarding')}&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&txn=${transactionId}`);
});

app.get('/success', (req, res) => {
  res.sendFile(path.join(__dirname, 'success.html'));
});

// Dynamic download endpoint
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

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`TinyOps Web Server running on port ${PORT}`);
});
