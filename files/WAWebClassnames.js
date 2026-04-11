__d(
  "WAWebClassnames",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t = [];
      return (
        e.forEach(function (e) {
          e != null && typeof e == "object"
            ? Object.keys(e).forEach(function (n) {
                e[n] && t.push(n);
              })
            : t.push(e);
        }),
        t.join(" ")
      );
    }
    function l() {
      for (
        var t = [], n = arguments.length, r = new Array(n), o = 0;
        o < n;
        o++
      )
        r[o] = arguments[o];
      return (
        r.forEach(function (n) {
          Array.isArray(n)
            ? t.push(e(n))
            : n != null && typeof n == "object"
              ? Object.keys(n).forEach(function (e) {
                  n[e] && t.push(e);
                })
              : t.push(n);
        }),
        t.join(" ").trim()
      );
    }
    i.classnamesConvertMeToStylexPlease = l;
  },
  66,
);
