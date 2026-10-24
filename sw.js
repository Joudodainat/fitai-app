self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

// استقبال أوامر إطلاق المنبه والتنبيهات
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SCHEDULE_ALARM') {
    const { title, body, delay } = event.data;
    setTimeout(() => {
      self.registration.showNotification(title, {
        body: body,
        icon: 'https://cdn-icons-png.flaticon.com/512/2964/2964514.png',
        vibrate: [500, 200, 500, 200, 500],
        tag: 'fitai-alarm',
        renotify: true,
        requireInteraction: true
      });
    }, delay);
  }
});
