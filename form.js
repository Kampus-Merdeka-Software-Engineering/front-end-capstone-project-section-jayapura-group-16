function postContactFormData(event) {
  event.preventDefault();

  // Ambil data dari form
  const form = event.target;
  const name = form.querySelector('[name="name"]').value;
  const email = form.querySelector('[name="email"]').value;
  const message = form.querySelector('[name="message"]').value;

  // Buat objek data
  const data = {
      name: name,
      email: email,
      message: message
  };

  // Kirim data sebagai JSON
  fetch('http://localhost:3000/form', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
      if (data.success) {
          alert('Terima kasih! Pesan Anda telah terkirim.');
          form.reset();
      } else {
          alert('Maaf, terjadi kesalahan. Silakan coba lagi.');
      }
  })
  .catch(error => console.error('Error sending contact data:', error));
}


// Event listener untuk form submission
document.querySelector('form').addEventListener('submit', postContactFormData);