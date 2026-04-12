__d(
  "useWAWebUnmountSignal",
  ["react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d() {
      var e = c(function () {
          return new AbortController();
        }),
        t = e[0];
      return (
        u(
          function () {
            return function () {
              return t.abort();
            };
          },
          [t],
        ),
        t.signal
      );
    }
    l.default = d;
  },
  98,
);
