__d(
  "BaseTooltipMultilineContent.react",
  [
    "XPlatReactEnvironment",
    "react",
    "react-compiler-runtime",
    "react-strict-dom",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = o("XPlatReactEnvironment").isWeb()
        ? {
            visuallyHidden: {
              clip: "xzpqnlu",
              clipPath: "x1hyvwdk",
              height: "xjm9jq1",
              overflowX: "x6ikm8r",
              overflowY: "x10wlt62",
              position: "x10l6tqk",
              width: "x1i1rx1s",
              $$css: !0,
            },
          }
        : {
            visuallyHidden: { color: "x19co3pv", height: "xqtp20y", $$css: !0 },
          };
    function c(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.children;
      if (Array.isArray(n)) {
        var r;
        if (t[0] !== n) {
          var a;
          (t[2] !== n.length
            ? ((a = function (t, r) {
                return s.jsxs(
                  o("react-strict-dom").html.span,
                  {
                    children: [
                      t,
                      r < n.length - 1 &&
                        s.jsxs(s.Fragment, {
                          children: [
                            s.jsx(o("react-strict-dom").html.span, {
                              style: u.visuallyHidden,
                              children: ", ",
                            }),
                            s.jsx(o("react-strict-dom").html.br, {
                              "aria-hidden": !0,
                            }),
                          ],
                        }),
                    ],
                  },
                  r,
                );
              }),
              (t[2] = n.length),
              (t[3] = a))
            : (a = t[3]),
            (r = n.map(a)),
            (t[0] = n),
            (t[1] = r));
        } else r = t[1];
        var i;
        return (
          t[4] !== r
            ? ((i = s.jsx(s.Fragment, { children: r })), (t[4] = r), (t[5] = i))
            : (i = t[5]),
          i
        );
      }
      return n;
    }
    l.default = c;
  },
  98,
);
