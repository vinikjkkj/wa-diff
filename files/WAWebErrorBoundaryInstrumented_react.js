__d(
  "WAWebErrorBoundaryInstrumented.react",
  ["WAWebErrorBoundary.react", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s = ["children"],
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n = t.ref,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e),
        a = r.children,
        i = babelHelpers.objectWithoutPropertiesLoose(r, s);
      return c.jsx(
        o("WAWebErrorBoundary.react").ErrorBoundary,
        babelHelpers.extends({}, i, { children: a }),
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
