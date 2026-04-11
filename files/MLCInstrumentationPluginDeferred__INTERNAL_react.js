__d(
  "MLCInstrumentationPluginDeferred__INTERNAL.react",
  ["react", "requireDeferred", "useDeferredModuleOnReady"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("requireDeferred")(
        "MLCInstrumentationPlugin__INTERNAL.react",
      ).__setRef("MLCInstrumentationPluginDeferred__INTERNAL.react");
    function c(e) {
      var t = r("useDeferredModuleOnReady")(u);
      return t == null ? null : s.jsx(t, babelHelpers.extends({}, e));
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
