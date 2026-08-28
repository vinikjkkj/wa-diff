__d(
  "fakeProgress",
  ["DateConsts"],
  function (t, n, r, o, a, i, l) {
    var e = 0.98,
      s = 150,
      u = 500;
    function c(t, n) {
      var r,
        a = 0;
      function i() {
        var r = 1 - Math.exp(-a / (2 * t * o("DateConsts").MS_PER_SEC));
        ((r *= e), n(r, a), l());
      }
      function l() {
        var e = Math.random() * (u - s) + s;
        ((a += e), (r = window.setTimeout(i, e)));
      }
      function c() {
        window.clearTimeout(r);
      }
      return (l(), { stop: c });
    }
    l.default = c;
  },
  98,
);
