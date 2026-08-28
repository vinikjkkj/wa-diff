__d(
  "mapPull",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t, n) {
      var r = new Map();
      for (var o of e) r.set(n(o), t(o));
      return r;
    }
    i.default = e;
  },
  66,
);
