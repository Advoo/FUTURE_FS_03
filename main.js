/* ================================================
   AUTION MOBILITY — MAIN JS
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---- NAVBAR SCROLL ----
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  // ---- MOBILE MENU ----
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    const spans = burger.querySelectorAll('span');
    if (mobileMenu.classList.contains('open')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      burger.querySelectorAll('span').forEach(s => {
        s.style.transform = '';
        s.style.opacity = '';
      });
    });
  });

  // ---- FAQ ACCORDION ----
  document.querySelectorAll('.faq__q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq__item');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq__item.open').forEach(el => {
        el.classList.remove('open');
        el.querySelector('.faq__q').setAttribute('aria-expanded', 'false');
      });

      // Toggle clicked
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ---- BOOKING FORM ----
  const bookingForm = document.getElementById('bookingForm');
  const bookingSuccess = document.getElementById('bookingSuccess');

  const dateInput = document.getElementById('date');
  if (dateInput) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    dateInput.min = `${yyyy}-${mm}-${dd}`;
  }

  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const date = document.getElementById('date').value;
    if (!date) { alert('Please select a date for your trip.'); return; }

    const selectedDate = new Date(date);
    const dayOfWeek = selectedDate.getDay();

    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      const ok = confirm('Aution primarily operates on weekends (Sat & Sun). Your date is a weekday. Submit an enquiry anyway?');
      if (!ok) return;
    }

    const fname = document.getElementById('fname').value;
    const phone = document.getElementById('phone').value;
    const pickup = document.getElementById('pickup').value;
    const dropoff = document.getElementById('dropoff').value;
    const time = document.getElementById('time').value;
    const tripType = document.getElementById('trip-type').value;
    const passengers = document.getElementById('passengers').value;
    const notes = document.getElementById('notes').value;

    const msg = encodeURIComponent(
      `*AUTION MOBILITY — BOOKING REQUEST*\n\n` +
      `Name: ${fname}\n` +
      `Phone: ${phone}\n` +
      `Date: ${date}\n` +
      `Pickup Time: ${time}\n` +
      `Pickup: ${pickup}\n` +
      `Drop-off: ${dropoff}\n` +
      `Trip Type: ${tripType === 'two-way' ? 'Two-Way (Return)' : 'One Way'}\n` +
      `Passengers: ${passengers}\n` +
      `Notes: ${notes || 'None'}`
    );

    bookingForm.style.display = 'none';
    bookingSuccess.style.display = 'block';

    // Open WhatsApp with pre-filled booking message
    setTimeout(() => {
      window.open(`https://wa.me/27846681513?text=${msg}`, '_blank');
    }, 600);
  });

  // ---- SMOOTH SCROLL ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ---- SCROLL REVEAL ----
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.service-card, .fleet__card, .booking__form-wrap, .hours__table, .faq__item, .media-card, .contact-btn').forEach(el => {
    el.classList.add('reveal-target');
    revealObserver.observe(el);
  });

  // ---- ACTIVE NAV ON SCROLL ----
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 130) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
    });
  });

});

function resetForm() {
  const bookingForm = document.getElementById('bookingForm');
  const bookingSuccess = document.getElementById('bookingSuccess');
  bookingForm.reset();
  bookingForm.style.display = 'flex';
  bookingSuccess.style.display = 'none';
}
