__d(
  "withWAWebBizAdCreationTargetingSpecPart.react",
  ["WAWebBizAdCreationTargetingSpecContext", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s.useContext;
    function d(t, n) {
      var o = u.memo(t);
      function a(t) {
        var a = t.ref,
          i = babelHelpers.objectWithoutPropertiesLoose(t, e),
          l = c(r("WAWebBizAdCreationTargetingSpecContext")),
          s = n(l);
        return u.jsx(o, babelHelpers.extends({}, i, s, { ref: a }));
      }
      return ((a.displayName = a.name + " [from " + i.id + "]"), a);
    }
    l.default = d;
  },
  98,
);
