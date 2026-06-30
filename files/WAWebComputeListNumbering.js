__d(
  "WAWebComputeListNumbering",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t = [],
        n = null;
      for (var r of e) {
        if (r == null) {
          (t.push(null), (n = null));
          continue;
        }
        var o = n != null ? n : r;
        (t.push(o), (n = o + 1));
      }
      return t;
    }
    i.computeListNumbering = e;
  },
  66,
);
