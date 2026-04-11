__d(
  "WAWebWamFalcoABProps",
  [
    "CurrentUser",
    "WALogger",
    "WAWebABProps",
    "WAWebWamFalcoModes",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = null;
    function u() {
      return (
        r("CurrentUser").isLoggedIn() &&
        r("justknobx")._("1600") &&
        c() !== o("WAWebWamFalcoModes").FALCO_MODE_WAM_ONLY
      );
    }
    function c() {
      var e = o("WAWebABProps").getABPropConfigValue("wa_web_wam_falco_mode");
      return e === o("WAWebWamFalcoModes").FALCO_MODE_WAM_ONLY
        ? o("WAWebWamFalcoModes").FALCO_MODE_WAM_ONLY
        : e === o("WAWebWamFalcoModes").FALCO_MODE_DOUBLE_LOGGING_WAM_SAMPLING
          ? o("WAWebWamFalcoModes").FALCO_MODE_DOUBLE_LOGGING_WAM_SAMPLING
          : e ===
              o("WAWebWamFalcoModes").FALCO_MODE_DOUBLE_LOGGING_FALCO_SAMPLING
            ? o("WAWebWamFalcoModes").FALCO_MODE_DOUBLE_LOGGING_FALCO_SAMPLING
            : e === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING
              ? o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING
              : e === o("WAWebWamFalcoModes").FALCO_MODE_FALCO_ONLY
                ? o("WAWebWamFalcoModes").FALCO_MODE_FALCO_ONLY
                : o("WAWebWamFalcoModes").FALCO_MODE_WAM_ONLY;
    }
    function d() {
      if (s != null) return s;
      try {
        var t = o("WAWebABProps").getABPropConfigValue(
          "wa_web_wam_falco_shadow_event_ids",
        );
        if (t.trim() === "") return ((s = new Set()), s);
        var n = new Set(),
          r = t.split(",");
        for (var a of r) {
          var i = a.trim();
          if (i !== "") {
            var l = parseInt(i, 10);
            Number.isNaN(l) || n.add(l);
          }
        }
        return ((s = n), n);
      } catch (t) {
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to parse wa_web_wam_falco_shadow_event_ids: ",
                "",
              ])),
            t,
          ),
          (s = new Set()),
          s
        );
      }
    }
    ((l.isFalcoLoggingEnabled = u),
      (l.getWamFalcoMode = c),
      (l.getShadowLoggingEventIds = d));
  },
  98,
);
