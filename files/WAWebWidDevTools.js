__d(
  "WAWebWidDevTools",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      if (e == null || !e.isLid()) return !1;
      var t = Math.pow(2, 16),
        n = parseInt(e.user, 10);
      return isNaN(n) ? !1 : (n & t) !== 0;
    }
    i.isWidClientAssigned = e;
  },
  66,
);
