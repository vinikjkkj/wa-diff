__d(
  "WAWebSwNotificationBannerRegistry",
  [],
  function (t, n, r, o, a, i) {
    var e = new Map(),
      l = Math.random().toString(36).slice(2),
      s = 0;
    function u(t) {
      var n = "swbanner:" + l + ":" + s++;
      return (e.set(n, t), n);
    }
    function c(t) {
      t != null && e.delete(t);
    }
    function d(t) {
      var n = t != null ? e.get(t) : null;
      return (n == null || n.onClick(), n != null);
    }
    function m(t) {
      var n = t != null ? e.get(t) : null;
      return (n == null || n.onClose(), n != null);
    }
    ((i.registerSwNotificationBanner = u),
      (i.unregisterSwNotificationBanner = c),
      (i.handleSwNotificationBannerClick = d),
      (i.handleSwNotificationBannerClose = m));
  },
  66,
);
