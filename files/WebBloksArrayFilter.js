__d(
  "WebBloksArrayFilter",
  ["WebBloksBooleanUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      for (var r = [], a = 0; a < t.length; a++) {
        var i = n(e, t[a]);
        o("WebBloksBooleanUtils").isTrue(i) && r.push(t[a]);
      }
      return r;
    }
    l.default = e;
  },
  98,
);
