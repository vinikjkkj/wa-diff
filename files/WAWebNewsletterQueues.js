__d(
  "WAWebNewsletterQueues",
  ["WAWebPromiseQueue"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new (e = o("WAWebPromiseQueue")).PromiseQueue(),
      u = new e.PromiseQueue(),
      c = new e.PromiseQueue(),
      d = new e.PromiseQueue();
    ((l.newsletterCreationQueue = s),
      (l.newsletterSubscribeQueue = u),
      (l.newsletterDeleteQueue = c),
      (l.newsletterJoinNotificationQueue = d));
  },
  98,
);
