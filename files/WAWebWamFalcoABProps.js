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
      s = 5e3,
      u = null;
    function c() {
      return r("justknobx")._("2716");
    }
    function d() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "wa_web_canonical_wam_falco_buffer_size",
      );
      return e > 0 ? e : 2e3;
    }
    function m() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "wa_web_wam_falco_flush_interval_ms",
      );
      return e > 0 ? e : s;
    }
    function p() {
      return !_() || !c() || !o("WAWebCanonicalGating").isCanonicalEnabled()
        ? !1
        : !r("WAWebNetworkStatus").online;
    }
    function _() {
      return (
        o("WAWebABPropsCache").isABPropConfigsReady() &&
        r("justknobx")._("1600") &&
        g() !== o("WAWebWamFalcoModes").FALCO_MODE_WAM_ONLY &&
        o("WAWebCanonicalUtils").isCanonicalPresent()
      );
    }
    function f() {
      return (
        o("WAWebABPropsCache").isABPropConfigsReady() &&
        g() === o("WAWebWamFalcoModes").FALCO_MODE_FALCO_ONLY
      );
    }
    function g() {
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
    function h() {
      if (u != null) return u;
      if (!o("WAWebABPropsCache").isABPropConfigsReady()) return new Set();
      try {
        var t = o("WAWebABProps").getABPropConfigValue(
          "wa_web_wam_falco_shadow_event_ids",
        );
        if (t.trim() === "") return ((u = new Set()), u);
        var n = new Set(),
          r = t.split(",");
        for (var a of r) {
          var i = a.trim();
          if (i !== "") {
            var l = parseInt(i, 10);
            Number.isNaN(l) || n.add(l);
          }
        }
        return ((u = n), n);
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
          (u = new Set()),
          u
        );
      }
    }
    ((l.isCanonicalWamFalcoBufferEnabled = c),
      (l.getCanonicalWamFalcoMaxBufferSize = d),
      (l.getWamFalcoFlushIntervalMs = m),
      (l.shouldBufferFalcoEvent = p),
      (l.isFalcoLoggingEnabled = _),
      (l.isWamLoggingDisabled = f),
      (l.getWamFalcoMode = g),
      (l.getShadowLoggingEventIds = h));
  },
  98,
);
