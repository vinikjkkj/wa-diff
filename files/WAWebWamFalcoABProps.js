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
      return r("justknobx")._("2367");
    }
    function g() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "wa_web_canonical_wam_falco_buffer_size",
      );
      return e > 0 ? e : 2e3;
    }
    function h() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "wa_web_wam_falco_flush_interval_ms",
      );
      return e > 0 ? e : u;
    }
    function y() {
      return !b() || !_() || !o("WAWebCanonicalGating").isCanonicalEnabled()
        ? !1
        : !r("WAWebNetworkStatus").online ||
            (f() && !o("WAWebCanonicalUtils").isCanonicalPresent());
    }
    function C() {
      return f() && _() && o("WAWebCanonicalGating").isCanonicalEnabled();
    }
    function b() {
      return (
        o("WAWebABPropsCache").isABPropConfigsReady() &&
        r("justknobx")._("1600") &&
        S() !== o("WAWebWamFalcoModes").FALCO_MODE_WAM_ONLY &&
        (o("WAWebCanonicalUtils").isCanonicalPresent() || C())
      );
    }
    function v() {
      return (
        o("WAWebABPropsCache").isABPropConfigsReady() &&
        S() === o("WAWebWamFalcoModes").FALCO_MODE_FALCO_ONLY
      );
    }
    function S() {
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
    function R() {
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
    function L() {
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
    function E(e) {
      return o("WAWebABPropsCache").isABPropConfigsReady() && L().has(e);
    }
    ((l.isCanonicalWamFalcoBufferEnabled = _),
      (l.isPreCanonicalBufferEnabled = f),
      (l.getCanonicalWamFalcoMaxBufferSize = g),
      (l.getWamFalcoFlushIntervalMs = h),
      (l.shouldBufferFalcoEvent = y),
      (l.isFalcoLoggingEnabled = b),
      (l.isWamLoggingDisabled = v),
      (l.getWamFalcoMode = S),
      (l.getShadowLoggingEventIds = R),
      (l.getCriticalLoggingEventIds = L),
      (l.isCriticalEvent = E));
  },
  98,
);
