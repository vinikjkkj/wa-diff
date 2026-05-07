__d(
  "WAWebABPropsWamGlobals",
  ["AnalyticsCoreData", "WAWebABProps", "WAWebWamGlobals"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 256,
      u = 512;
    function c() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "service_improvement_opt_out_flag",
      );
      return e ? s : s + u;
    }
    function d() {
      o("WAWebWamGlobals").Global.set({
        serviceImprovementOptOut: o("WAWebABProps").getABPropConfigValue(
          "service_improvement_opt_out_flag",
        ),
      });
      try {
        var t = e || (e = n("AnalyticsCoreData"));
        t.consent_state = c();
      } catch (e) {}
    }
    ((l.getServiceImprovementConsentStateBits = c),
      (l.setAbPropDependingGlobalWamAttributes = d));
  },
  98,
);
