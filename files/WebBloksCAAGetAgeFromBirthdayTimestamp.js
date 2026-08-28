__d(
  "WebBloksCAAGetAgeFromBirthdayTimestamp",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      var n = Number.isNaN(t) ? Date.now() : t,
        r = new Date(n * 1e3),
        o = new Date(),
        a = o.getUTCFullYear() - r.getUTCFullYear();
      return (
        (r.getUTCMonth() > o.getUTCMonth() ||
          (r.getUTCMonth() === o.getUTCMonth() &&
            r.getUTCDate() > o.getUTCDate())) &&
          --a,
        Math.max(a, 0)
      );
    }
    i.default = e;
  },
  66,
);
