__d(
  "WebBloksViewpointProvider",
  ["WebBloksViewpointContext", "WebBloksViewpointManager", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useState;
    function m(e) {
      var t = e.children,
        n = d(null),
        o = n[0],
        a = n[1];
      return (
        c(
          function () {
            var e = document.body;
            return (
              e != null &&
                e instanceof HTMLElement &&
                o === null &&
                a(function () {
                  return new (r("WebBloksViewpointManager"))();
                }),
              function () {
                o == null || o.untrackAll();
              }
            );
          },
          [o],
        ),
        s.jsx(r("WebBloksViewpointContext").Provider, { value: o, children: t })
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
