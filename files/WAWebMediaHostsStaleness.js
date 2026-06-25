__d(
  "WAWebMediaHostsStaleness",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      return e == null ? !0 : new Date() >= e.authExpirationTime;
    }
    function l(e) {
      if (e == null || new Date() >= e.hostsRefreshTime) return !0;
      var t = e.authTTL,
        n = e.queryStartTime,
        r = Math.floor(t * 0.8),
        o = new Date(n.getTime() + r);
      return new Date() >= o;
    }
    ((i.isExpiredOrMissing = e), (i.needsRefresh = l));
  },
  66,
);
