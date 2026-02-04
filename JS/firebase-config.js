// Firebase Configuration
// Replace these values with your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyC2EdUTYrI6uwpCMTweIYTtuZdmAlV6rXE",
  authDomain: "vtn-portfolio-b9c75.firebaseapp.com",
  projectId: "vtn-portfolio-b9c75",
  storageBucket: "vtn-portfolio-b9c75.firebasestorage.app",
  messagingSenderId: "1010732012640",
  appId: "1:1010732012640:web:c93f029338f7d203a39f05",
  measurementId: "G-617GVK3B7W"
};

// Initialize Firebase
console.log('Initializing Firebase...');
firebase.initializeApp(firebaseConfig);
  const getNextContactId = async () => {
    const counterRef = db.collection('counters').doc('contacts');

    const nextId = await db.runTransaction(async (transaction) => {
      const counterDoc = await transaction.get(counterRef);
      const current = counterDoc.exists ? counterDoc.data().value || 0 : 0;
      const updated = current + 1;
      transaction.set(counterRef, { value: updated }, { merge: true });
      return updated;
    });

    return nextId;
  };
const db = firebase.firestore();
console.log('Firebase initialized successfully!');

// Admin preview toggle (set to true to show the submissions table)
const enableAdminPreview = false;

// Contact Form Handler
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, looking for contact form...');
  const contactForm = document.getElementById('contactForm');
  const adminSection = document.getElementById('submissions');
  const adminBody = document.getElementById('adminSubmissionsBody');

  const addAdminRow = (data, prepend = false) => {
    if (!adminBody) return;

    const row = document.createElement('tr');
    const idCell = document.createElement('td');
    const nameCell = document.createElement('td');
    const emailCell = document.createElement('td');
    const subjectCell = document.createElement('td');
    const messageCell = document.createElement('td');

    idCell.textContent = data.contactId ?? data.id ?? '';
    nameCell.textContent = data.name || '';
    emailCell.textContent = data.email || '';
    subjectCell.textContent = data.subject || '';
    messageCell.textContent = data.message || '';

    row.appendChild(idCell);
    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(subjectCell);
    row.appendChild(messageCell);

    const emptyRow = adminBody.querySelector('.admin-empty-row');
    if (emptyRow) emptyRow.remove();

    if (prepend && adminBody.firstChild) {
      adminBody.insertBefore(row, adminBody.firstChild);
    } else {
      adminBody.appendChild(row);
    }
  };

  const setAdminEmptyState = (message) => {
    if (!adminBody) return;
    adminBody.innerHTML = '';
    const row = document.createElement('tr');
    row.className = 'admin-empty-row';
    const cell = document.createElement('td');
    cell.colSpan = 5;
    cell.textContent = message;
    row.appendChild(cell);
    adminBody.appendChild(row);
  };

  const loadAdminSubmissions = async () => {
    if (!adminBody) return;
    try {
      const snapshot = await db
        .collection('contacts')
        .orderBy('timestamp', 'desc')
        .limit(50)
        .get();

      if (snapshot.empty) {
        setAdminEmptyState('No submissions yet.');
        return;
      }

      adminBody.innerHTML = '';
      snapshot.forEach((doc) => addAdminRow(doc.data()));
    } catch (error) {
      console.warn('Admin preview blocked by Firestore rules:', error);
      setAdminEmptyState('Preview unavailable (check Firestore read rules).');
    }
  };

  if (enableAdminPreview && adminSection) {
    adminSection.style.display = 'block';
    adminSection.setAttribute('aria-hidden', 'false');
    loadAdminSubmissions();
  }
  
  if (contactForm) {
    console.log('Contact form found! Attaching event listener...');
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      console.log('Form submitted! Collecting data...');

      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      submitButton.textContent = 'Sending...';
      submitButton.disabled = true;

      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      };
      
      console.log('Sending data to Firestore:', formData);

      try {
        const nextId = await getNextContactId();
        const docId = String(nextId);
        const payload = { ...formData, contactId: nextId };

        await db.collection('contacts').doc(docId).set(payload);
        console.log('✅ Document written with ID:', docId);

        if (enableAdminPreview) {
          addAdminRow(payload, true);
        }

        // Success feedback
        alert('✅ Message sent successfully! I will get back to you soon.');
        contactForm.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      } catch (error) {
        console.error('❌ Error adding document:', error);
        console.error('Error code:', error.code);
        console.error('Error message:', error.message);
        alert('❌ Failed to send message: ' + error.message);
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      }
    });
  } else {
    console.error('❌ Contact form not found!');
  }
});
