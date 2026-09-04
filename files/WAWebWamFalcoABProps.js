__d(
  "WAWebWamFalcoABProps",
  [
    "MetaConfig",
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
      d = null,
      m = null;
    function p(e) {
      var t = new Set();
      for (var n of e.split(",")) {
        var r = n.trim();
        r !== "" && t.add(r);
      }
      return t;
    }
    function _(e) {
      var t = new Set();
      for (var n of p(e)) {
        var r = parseInt(n, 10);
        Number.isNaN(r) || t.add(r);
      }
      return t;
    }
    function f() {
      return r("justknobx")._("2716");
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
      return !C() || !f() || !o("WAWebCanonicalGating").isCanonicalEnabled()
        ? !1
        : !r("WAWebNetworkStatus").online;
    }
    function C() {
      return (
        o("WAWebABPropsCache").isABPropConfigsReady() &&
        r("justknobx")._("1600") &&
        v() !== o("WAWebWamFalcoModes").FALCO_MODE_WAM_ONLY &&
        o("WAWebCanonicalUtils").isCanonicalPresent()
      );
    }
    function b() {
      return (
        o("WAWebABPropsCache").isABPropConfigsReady() &&
        v() === o("WAWebWamFalcoModes").FALCO_MODE_FALCO_ONLY
      );
    }
    function v() {
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
                    : e === o("WAWebWamFalcoModes").FALCO_MODE_WAM_OR_FALCO
                      ? o("WAWebWamFalcoModes").FALCO_MODE_WAM_OR_FALCO
                      : o("WAWebWamFalcoModes").FALCO_MODE_WAM_ONLY;
    }
    function S() {
      if (c != null) return c;
      if (!o("WAWebABPropsCache").isABPropConfigsReady()) return new Set();
      try {
        c = _(
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
    function R() {
      if (d != null) return d;
      if (!o("WAWebABPropsCache").isABPropConfigsReady()) return new Set();
      try {
        d = _(
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
    function L(e) {
      return o("WAWebABPropsCache").isABPropConfigsReady() && R().has(e);
    }
    function E() {
      var e = r("MetaConfig")._("565", !0),
        t = m;
      if (t != null && t.raw === e) return t.eventNames;
      var n = p(e);
      return ((m = { raw: e, eventNames: n }), n);
    }
    ((l.getCanonicalWamFalcoMaxBufferSize = g),
      (l.getWamFalcoFlushIntervalMs = h),
      (l.shouldBufferFalcoEvent = y),
      (l.isFalcoLoggingEnabled = C),
      (l.isWamLoggingDisabled = b),
      (l.getWamFalcoMode = v),
      (l.getShadowLoggingEventIds = S),
      (l.isCriticalEvent = L),
      (l.getWamFalcoBlocklistEventNames = E));
  },
  98,
);
