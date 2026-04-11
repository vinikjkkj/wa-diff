__d(
  "FDSDialogFooterContainer.react",
  [
    "CometColumn.react",
    "XPlatReactEnvironment",
    "react",
    "react-compiler-runtime",
    "react-strict-dom",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        container: {
          backgroundColor: "x1jx94hy",
          borderBottomLeftRadius: "x190bdop",
          borderBottomRightRadius: "xp3hrpj",
          bottom: "x1ey2m1c",
          boxShadow: "x13xjmei",
          position: "xv7j57z",
          width: "xh8yej3",
          $$css: !0,
        },
        containerNative: { flexShrink: "x2lah0s", $$css: !0 },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.children,
        a = e.ref,
        i = e.testid,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [
            [u.container],
            !o("XPlatReactEnvironment").isWeb() && u.containerNative,
          ]),
          (t[0] = l))
        : (l = t[0]);
      var c;
      t[1] !== n
        ? ((c = s.jsx(r("CometColumn.react"), {
            paddingHorizontal: 16,
            children: n,
          })),
          (t[1] = n),
          (t[2] = c))
        : (c = t[2]);
      var d;
      return (
        t[3] !== a || t[4] !== c || t[5] !== i
          ? ((d = s.jsx(o("react-strict-dom").html.div, {
              "data-testid": void 0,
              ref: a,
              style: l,
              children: c,
            })),
            (t[3] = a),
            (t[4] = c),
            (t[5] = i),
            (t[6] = d))
          : (d = t[6]),
        d
      );
    }
    l.default = c;
  },
  98,
);
