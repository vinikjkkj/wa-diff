__d(
  "WebBloksMapFilter",
  ["WebBloksBooleanUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r = {};
      for (var a of Object.entries(t)) {
        var i = a[0],
          l = a[1],
          s = n(e, i, l);
        o("WebBloksBooleanUtils").isTrue(s) && (r[i] = l);
      }
      return r;
    }
    l.default = e;
  },
  98,
);
