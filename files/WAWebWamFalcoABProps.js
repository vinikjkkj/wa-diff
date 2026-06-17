__d(
  "WAWebWamFalcoABProps",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebABPropsCache",
    "WAWebCanonicalGating",
    "WAWebCanonicalUtils",
    "WAWebNetworkStatus",
    "WAWebWamFalcoModes",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = null;
    function u() {
      return r("justknobx")._("2716");
    }
    function c() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "wa_web_canonical_wam_falco_buffer_size",
      );
      return e > 0 ? e : 2e3;
    }
    function d() {
      return !m() || !u() || !o("WAWebCanonicalGating").isCanonicalEnabled()
        ? !1
        : !r("WAWebNetworkStatus").online;
    }
    function m() {
      return (
        o("WAWebABPropsCache").isABPropConfigsReady() &&
        r("justknobx")._("1600") &&
        _() !== o("WAWebWamFalcoModes").FALCO_MODE_WAM_ONLY &&
        o("WAWebCanonicalUtils").isCanonicalPresent()
      );
    }
    function p() {
      return (
        o("WAWebABPropsCache").isABPropConfigsReady() &&
        _() === o("WAWebWamFalcoModes").FALCO_MODE_FALCO_ONLY
      );
    }
    function _() {
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
                : e ===
                    o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING_SAMPLED
                  ? o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING_SAMPLED
                  : e === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING_FULL
                    ? o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING_FULL
                    : o("WAWebWamFalcoModes").FALCO_MODE_WAM_ONLY;
    }
    function f() {
      if (s != null) return s;
      if (!o("WAWebABPropsCache").isABPropConfigsReady()) return new Set();
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
    ((l.isCanonicalWamFalcoBufferEnabled = u),
      (l.getCanonicalWamFalcoMaxBufferSize = c),
      (l.shouldBufferFalcoEvent = d),
      (l.isFalcoLoggingEnabled = m),
      (l.isWamLoggingDisabled = p),
      (l.getWamFalcoMode = _),
      (l.getShadowLoggingEventIds = f));
  },
  98,
);
