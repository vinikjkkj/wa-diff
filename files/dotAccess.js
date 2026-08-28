__d(
  "dotAccess",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t, n) {
      var r = t.split(".");
      do {
        var o = r.shift();
        e = e[o] || (n && (e[o] = {}));
      } while (r.length && e);
      return e;
    }
    i.default = e;
  },
  66,
);
