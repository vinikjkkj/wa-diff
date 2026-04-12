__d(
  "useWAWebToggle",
  ["react", "useWAWebStableCallback"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useState;
    function d(e, t) {
      var n = r("useWAWebStableCallback")(t),
        o = c(e),
        a = o[0],
        i = o[1],
        l = u(
          function () {
            return i(function (e) {
              var t = !e;
              return (n(t), t);
            });
          },
          [n],
        );
      return [a, l];
    }
    l.default = d;
  },
  98,
);
