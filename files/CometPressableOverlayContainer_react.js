__d(
  "CometPressableOverlayContainer.react",
  ["react", "stylex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["children", "role", "style", "xstyle"],
      s,
      u,
      c = u || (u = o("react"));
    function d(t) {
      "use no forget";
      var n = t.children,
        o = t.role,
        a = t.style,
        i = t.xstyle,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return c.jsx(
        "div",
        babelHelpers.extends(
          { className: (s || (s = r("stylex")))(i), role: o, style: a },
          l,
          { children: n },
        ),
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
