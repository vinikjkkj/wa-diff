__d(
  "FDSGlimmer.react",
  ["BaseGlimmer.react", "MetaConfig", "react", "useCurrentDisplayMode"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["xstyle"],
      s,
      u = s || (s = o("react")),
      c = "xvfaeil-B",
      d = "x6lyuyf-B",
      m = {
        dark_DEPRECATED: { backgroundColor: "xhzw6zf", $$css: !0 },
        glimmer: { backgroundColor: "x113zjs7 xwyycs4", $$css: !0 },
        glimmerAnimation: { animationName: "x43zylw xzvp1bk", $$css: !0 },
        light_DEPRECATED: { backgroundColor: "x1vtvx1t", $$css: !0 },
      };
    function p(t) {
      "use no forget";
      var n = t.xstyle,
        o = babelHelpers.objectWithoutPropertiesLoose(t, e),
        a = r("useCurrentDisplayMode")(),
        i = a === "dark" ? m.dark_DEPRECATED : m.light_DEPRECATED,
        l = [m.glimmer, m.glimmerAnimation];
      return u.jsx(
        r("BaseGlimmer.react"),
        babelHelpers.extends(
          { xstyle: [r("MetaConfig")._("73") ? l : i, n] },
          o,
        ),
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
