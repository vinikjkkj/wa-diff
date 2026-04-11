__d(
  "XMDSDialogHeaderContainer.react",
  [
    "CDSDialogHeaderFooterContainerContext",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useContext,
      d = {
        background: { backgroundColor: "x1jx94hy", $$css: !0 },
        header: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          flexShrink: "x2lah0s",
          insetInlineEnd: "xtijo5x",
          insetInlineStart: "x1o0tod",
          justifyContent: "x1qughib",
          minHeight: "x8nclml",
          position: "x1n2onr6 xv7j57z",
          top: "x13vifvy",
          zIndex: "x1vjfegm",
          $$css: !0,
        },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(8),
        a = t.addOnBottom,
        i = t.children,
        l = t.xstyle,
        s = c(r("CDSDialogHeaderFooterContainerContext")),
        m = s.showBackground,
        p = s.xstyle,
        _;
      n[0] !== p || n[1] !== m || n[2] !== l
        ? ((_ = (e || (e = r("stylex"))).props(
            d.header,
            m === !0 && d.background,
            p,
            l,
          )),
          (n[0] = p),
          (n[1] = m),
          (n[2] = l),
          (n[3] = _))
        : (_ = n[3]);
      var f;
      return (
        n[4] !== a || n[5] !== i || n[6] !== _
          ? ((f = u.jsxs(
              "div",
              babelHelpers.extends({}, _, { children: [i, a] }),
            )),
            (n[4] = a),
            (n[5] = i),
            (n[6] = _),
            (n[7] = f))
          : (f = n[7]),
        f
      );
    }
    l.default = m;
  },
  98,
);
