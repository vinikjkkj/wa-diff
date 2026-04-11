__d(
  "WAWebMaxPerGroup",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t, n) {
      var r = new Map();
      for (var o of e) {
        var a = n(o),
          i = r.get(a);
        (i == null || t(o) >= t(i)) && r.set(a, o);
      }
      return Array.from(r.values());
    }
    i.maxPerGroup = e;
  },
  66,
);
