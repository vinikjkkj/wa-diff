__d(
  "VultureJSDeadComponent.react",
  ["RecoverableViolationWithComponentStack.react", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["name"],
      s,
      u = s || (s = r("react")),
      c =
        "VultureJSDeadComponent was hit. This should never happen as this component is intended to be used to replace dead components, as a stub. this being hit indicates that a component may have been cleaned up in error.";
    function d(t) {
      var n = t.name,
        o = babelHelpers.objectWithoutPropertiesLoose(t, e),
        a = n != null ? c + " Expected component " + n : c;
      return u.jsx(r("RecoverableViolationWithComponentStack.react"), {
        categoryKey: n != null ? n : "VultureJSDeadComponent",
        errorMessage: a,
        projectName: "vulture_js",
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
