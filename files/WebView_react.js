__d(
  "WebView.react",
  ["react", "stylex", "testID"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s = ["children", "suppressHydrationWarning", "testid", "xstyle"],
      u,
      c,
      d = c || (c = o("react")),
      m = {
        root: {
          boxSizing: "x9f619",
          position: "x1n2onr6",
          zIndex: "x1ja2u2z",
          $$css: !0,
        },
      };
    function p(t) {
      var n = t.ref,
        o = babelHelpers.objectWithoutPropertiesLoose(t, e),
        a = o.children,
        i = o.suppressHydrationWarning,
        l = o.testid,
        c = o.xstyle,
        p = babelHelpers.objectWithoutPropertiesLoose(o, s);
      return d.jsx(
        "div",
        babelHelpers.extends(
          {},
          p,
          r("testID")(l),
          (u || (u = r("stylex"))).props(m.root, c),
          { ref: n, suppressHydrationWarning: i, children: a },
        ),
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
