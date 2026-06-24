/* HarmonyOS 6 Showcase — main.js */
"use strict";

/* ── Scroll Reveal ── */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

/* ── Active Nav on Scroll ── */
function initNavSpy() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => io.observe(s));
}

/* ── Mobile Nav Toggle ── */
function initMobileNav() {
  const btn = document.getElementById('nav-hamburger');
  const links = document.getElementById('nav-links');
  if (!btn || !links) return;
  btn.addEventListener('click', () => {
    links.classList.toggle('open');
    btn.textContent = links.classList.contains('open') ? '✕' : '☰';
  });
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => { links.classList.remove('open'); btn.textContent = '☰'; });
  });
}

/* ── UI Demo Tabs ── */
function initTabs() {
  const tabs = document.querySelectorAll('.ui-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      document.querySelectorAll('.ui-panel').forEach(p => p.classList.remove('active'));
      const panel = document.getElementById(`panel-${target}`);
      if (panel) panel.classList.add('active');
    });
  });
}

/* ── Control Center Tiles Toggle ── */
function initControlCenter() {
  document.querySelectorAll('.cc-tile').forEach(tile => {
    tile.addEventListener('click', () => tile.classList.toggle('on'));
  });
}

/* ── Animated Clock on Lockscreen ── */
function initClock() {
  function update() {
    const el = document.getElementById('ls-time');
    if (!el) return;
    const now = new Date();
    let h = now.getHours(), m = now.getMinutes();
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    el.textContent = `${h}:${String(m).padStart(2,'0')}`;
    const dateEl = document.getElementById('ls-date');
    if (dateEl) {
      const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
      const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
      dateEl.textContent = `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}`;
    }
    const phoneTime = document.getElementById('phone-time');
    if (phoneTime) phoneTime.textContent = `${h}:${String(m).padStart(2,'0')}`;
    const phoneTimeBig = document.getElementById('phone-time-big');
    if (phoneTimeBig) phoneTimeBig.textContent = `${h}:${String(m).padStart(2,'0')}`;
  }
  update();
  setInterval(update, 1000);
}

/* ── Counter Animation ── */
function initCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseFloat(el.dataset.target);
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      const duration = 2000;
      const step = 16;
      const increment = target / (duration / step);
      let current = 0;
      const isFloat = !Number.isInteger(target);
      const timer = setInterval(() => {
        current = Math.min(current + increment, target);
        el.textContent = prefix + (isFloat ? current.toFixed(1) : Math.floor(current).toLocaleString()) + suffix;
        if (current >= target) clearInterval(timer);
      }, step);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => io.observe(c));
}

/* ── Home Screen App Click ── */
function initAppGrid() {
  document.querySelectorAll('.hs-app, .hs-dock-app').forEach(app => {
    app.addEventListener('click', () => {
      app.style.transform = 'scale(0.85)';
      setTimeout(() => { app.style.transform = ''; }, 200);
    });
  });
}

/* ── AI Chat Typing Animation ── */
function initAIChat() {
  const messages = [
    { type: 'user', text: 'Set a reminder for my meeting at 3 PM' },
    { type: 'ai', text: '✅ Reminder set for 3:00 PM today. I\'ll also prepare your meeting notes from past emails.' },
    { type: 'user', text: 'Translate the street sign in this photo' },
    { type: 'ai', text: '🔍 Using "Sees the World" mode... The sign reads: "No Entry — Construction Zone".' },
  ];
  let idx = 0;
  const container = document.getElementById('ai-chat');
  if (!container) return;

  function addMessage() {
    if (idx >= messages.length) { idx = 0; container.innerHTML = ''; }
    const msg = messages[idx++];
    const div = document.createElement('div');
    div.className = `ai-bubble ai-bubble-${msg.type}`;
    div.style.opacity = '0'; div.style.transform = 'translateY(10px)';
    if (msg.type === 'ai') {
      const typing = document.createElement('div');
      typing.className = 'ai-bubble ai-bubble-ai ai-typing';
      typing.innerHTML = '<span class="ai-dot"></span><span class="ai-dot"></span><span class="ai-dot"></span>';
      container.appendChild(typing);
      setTimeout(() => {
        container.removeChild(typing);
        div.textContent = msg.text;
        container.appendChild(div);
        requestAnimationFrame(() => { div.style.transition = 'all 0.3s'; div.style.opacity = '1'; div.style.transform = ''; });
        setTimeout(addMessage, 2800);
      }, 1200);
    } else {
      div.textContent = msg.text;
      container.appendChild(div);
      requestAnimationFrame(() => { div.style.transition = 'all 0.3s'; div.style.opacity = '1'; div.style.transform = ''; });
      setTimeout(addMessage, 600);
    }
    container.scrollTop = container.scrollHeight;
  }
  setTimeout(addMessage, 1000);
}

/* ── Smooth scroll for anchor links ── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
}

/* ── Init All ── */
document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initNavSpy();
  initMobileNav();
  initTabs();
  initControlCenter();
  initClock();
  initCounters();
  initAppGrid();
  initAIChat();
  initSmoothScroll();
});
