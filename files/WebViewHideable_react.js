__d(
  "WebViewHideable.react",
  ["cr:35629", "react", "stylex", "testID"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s = ["children", "suppressHydrationWarning", "testid", "xstyle"],
      u,
      c,
      d = c || (c = o("react")),
      m = {
        hidden: { display: "x1s85apg", $$css: !0 },
        root: {
          boxSizing: "x9f619",
          position: "x1n2onr6",
          zIndex: "x1ja2u2z",
          $$css: !0,
        },
      };
    function p(t) {
      var o = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.children,
        l = a.suppressHydrationWarning,
        c = a.testid,
        p = a.xstyle,
        _ = babelHelpers.objectWithoutPropertiesLoose(a, s),
        f = _.hidden === !0;
      return d.jsx(n("cr:35629"), {
        htmlAttributes: babelHelpers.extends(
          {},
          _,
          r("testID")(c),
          (u || (u = r("stylex"))).props(m.root, p, f && m.hidden),
        ),
        mode: f ? "hidden" : "visible",
        ref: o,
        suppressHydrationWarning: l,
        children: i,
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
