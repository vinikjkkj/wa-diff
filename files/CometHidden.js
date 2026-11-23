__d(
  "CometHidden",
  ["CometHiddenAPIContext", "LegacyHidden", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.unstable_Activity,
      m = c.useContext;
    function p(t) {
      var n = t.ref,
        o = babelHelpers.objectWithoutPropertiesLoose(t, e),
        a = o.children,
        i = o.htmlAttributes,
        l = o.mode,
        s = o.suppressHydrationWarning,
        c = m(r("CometHiddenAPIContext"));
      if (c)
        return u.jsx(r("LegacyHidden"), {
          htmlAttributes: i,
          mode: l,
          ref: n,
          suppressHydrationWarning: s,
          children: a,
        });
      var p = l === "hidden" ? "hidden" : "visible";
      return u.jsx(d, {
        mode: p,
        children: u.jsx(
          "div",
          babelHelpers.extends({}, i, {
            ref: n,
            suppressHydrationWarning: s,
            children: a,
          }),
        ),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (p.displayName = "CometHidden"),
      (l.default = p));
  },
  98,
);
