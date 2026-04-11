__d(
  "WAWebPersistedJob",
  ["cr:13545"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      s(e, n("cr:13545"));
    }
    function s(e, t) {
      Object.keys(t).forEach(function (n) {
        Object.prototype.hasOwnProperty.call(t, n) &&
          e.addPersistedJobImplementation(n, t[n]);
      });
    }
    l.default = e;
  },
  98,
);
