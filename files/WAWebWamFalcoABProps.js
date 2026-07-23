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
      s,
      u = 5e3,
      c = null,
      d = null;
    function m(e) {
      var t = new Set();
      for (var n of e.split(",")) {
        var r = n.trim();
        r !== "" && t.add(r);
      }
      return t;
    }
    function p(e) {
      var t = new Set();
      for (var n of m(e)) {
        var r = parseInt(n, 10);
        Number.isNaN(r) || t.add(r);
      }
      return t;
    }
    function _() {
      return r("justknobx")._("2716");
    }
    function f() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "wa_web_canonical_wam_falco_buffer_size",
      );
      return e > 0 ? e : 2e3;
    }
    function g() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "wa_web_wam_falco_flush_interval_ms",
      );
      return e > 0 ? e : u;
    }
    function h() {
      return !y() || !_() || !o("WAWebCanonicalGating").isCanonicalEnabled()
        ? !1
        : !r("WAWebNetworkStatus").online;
    }
    function y() {
      return (
        o("WAWebABPropsCache").isABPropConfigsReady() &&
        r("justknobx")._("1600") &&
        b() !== o("WAWebWamFalcoModes").FALCO_MODE_WAM_ONLY &&
        o("WAWebCanonicalUtils").isCanonicalPresent()
      );
    }
    function C() {
      return (
        o("WAWebABPropsCache").isABPropConfigsReady() &&
        b() === o("WAWebWamFalcoModes").FALCO_MODE_FALCO_ONLY
      );
    }
    function b() {
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
    function v() {
      if (c != null) return c;
      if (!o("WAWebABPropsCache").isABPropConfigsReady()) return new Set();
      try {
        c = p(
          o("WAWebABProps").getABPropConfigValue(
            "wa_web_wam_falco_shadow_event_ids",
          ),
        );
      } catch (t) {
        (o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "Failed to parse wa_web_wam_falco_shadow_event_ids: ",
              "",
            ])),
          t,
        ),
          (c = new Set()));
      }
      return c;
    }
    function S() {
      if (d != null) return d;
      if (!o("WAWebABPropsCache").isABPropConfigsReady()) return new Set();
      try {
        d = p(
          o("WAWebABProps").getABPropConfigValue(
            "wa_web_wam_falco_critical_event_ids",
          ),
        );
      } catch (e) {
        (o("WALogger").ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "Failed to parse wa_web_wam_falco_critical_event_ids: ",
              "",
            ])),
          e,
        ),
          (d = new Set()));
      }
      return d;
    }
    function R(e) {
      return o("WAWebABPropsCache").isABPropConfigsReady() && S().has(e);
    }
    ((l.isCanonicalWamFalcoBufferEnabled = _),
      (l.getCanonicalWamFalcoMaxBufferSize = f),
      (l.getWamFalcoFlushIntervalMs = g),
      (l.shouldBufferFalcoEvent = h),
      (l.isFalcoLoggingEnabled = y),
      (l.isWamLoggingDisabled = C),
      (l.getWamFalcoMode = b),
      (l.getShadowLoggingEventIds = v),
      (l.getCriticalLoggingEventIds = S),
      (l.isCriticalEvent = R));
  },
  98,
);
