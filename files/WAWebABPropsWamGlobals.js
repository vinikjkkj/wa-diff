__d(
  "WAWebABPropsWamGlobals",
  ["WAWebABProps", "WAWebWamGlobals"],
  function (t, n, r, o, a, i, l) {
    function e() {
      o("WAWebWamGlobals").Global.set({
        serviceImprovementOptOut: o("WAWebABProps").getABPropConfigValue(
          "service_improvement_opt_out_flag",
        ),
      });
    }
    l.setAbPropDependingGlobalWamAttributes = e;
  },
  98,
);
