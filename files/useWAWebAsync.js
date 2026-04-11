__d(
  "useWAWebAsync",
  ["react", "useWAWebStableCallback"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState,
      d = { loading: !0, error: null, value: null };
    function m(e, t, n) {
      n === void 0 && (n = !0);
      var o = r("useWAWebStableCallback")(e),
        a = c(d),
        i = a[0],
        l = a[1];
      return (
        u(function () {
          if (n) {
            var e = new AbortController();
            return (
              l(d),
              o(e.signal)
                .then(function (t) {
                  e.signal.aborted || l({ loading: !1, error: null, value: t });
                })
                .catch(function (e) {
                  l({ loading: !1, error: e, value: null });
                }),
              function () {
                e.abort();
              }
            );
          }
        }, [o].concat(t)),
        i
      );
    }
    l.default = m;
  },
  98,
);
