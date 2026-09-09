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
      u,
      c,
      d = 5e3,
      m = null,
      p = null,
      _ = null;
    function f(e) {
      var t = new Set();
      for (var n of e.split(",")) {
        var r = n.trim();
        r !== "" && t.add(r);
      }
      return t;
    }
    function g(e) {
      var t = new Set();
      for (var n of f(e)) {
        var r = parseInt(n, 10);
        Number.isNaN(r) || t.add(r);
      }
      return t;
    }
    function h() {
      return r("justknobx")._("2716");
    }
    function y() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "wa_web_canonical_wam_falco_buffer_size",
      );
      return e > 0 ? e : 2e3;
    }
    function C() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "wa_web_wam_falco_flush_interval_ms",
      );
      return e > 0 ? e : d;
    }
    function b() {
      return !v() || !h() || !o("WAWebCanonicalGating").isCanonicalEnabled()
        ? !1
        : !r("WAWebNetworkStatus").online;
    }
    function v() {
      return (
        o("WAWebABPropsCache").isABPropConfigsReady() &&
        r("justknobx")._("1600") &&
        o("WAWebCanonicalUtils").isCanonicalPresent() &&
        L() !== o("WAWebWamFalcoModes").FALCO_MODE_WAM_ONLY
      );
    }
    function S() {
      return (
        o("WAWebABPropsCache").isABPropConfigsReady() &&
        R() === o("WAWebWamFalcoModes").FALCO_MODE_FALCO_ONLY
      );
    }
    function R() {
      try {
        return E(r("MetaConfig")._("371", !0));
      } catch (t) {
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to read wa_web_wam_falco_mode from MetaConfig: ",
                "",
              ])),
            t,
          ),
          o("WAWebWamFalcoModes").FALCO_MODE_WAM_ONLY
        );
      }
    }
    function L() {
      try {
        return E(r("MetaConfig")._("410"));
      } catch (e) {
        return (
          o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to read wa_web_wam_falco_mode from MetaConfig: ",
                "",
              ])),
            e,
          ),
          o("WAWebWamFalcoModes").FALCO_MODE_WAM_ONLY
        );
      }
    }
    function E(e) {
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
    function k() {
      if (m != null) return m;
      if (!o("WAWebABPropsCache").isABPropConfigsReady()) return new Set();
      try {
        m = g(
          o("WAWebABProps").getABPropConfigValue(
            "wa_web_wam_falco_shadow_event_ids",
          ),
        );
      } catch (e) {
        (o("WALogger").ERROR(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "Failed to parse wa_web_wam_falco_shadow_event_ids: ",
              "",
            ])),
          e,
        ),
          (m = new Set()));
      }
      return m;
    }
    function I() {
      if (p != null) return p;
      if (!o("WAWebABPropsCache").isABPropConfigsReady()) return new Set();
      try {
        p = g(
          o("WAWebABProps").getABPropConfigValue(
            "wa_web_wam_falco_critical_event_ids",
          ),
        );
      } catch (e) {
        (o("WALogger").ERROR(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "Failed to parse wa_web_wam_falco_critical_event_ids: ",
              "",
            ])),
          e,
        ),
          (p = new Set()));
      }
      return p;
    }
    function T(e) {
      return o("WAWebABPropsCache").isABPropConfigsReady() && I().has(e);
    }
    function D() {
      var e = r("MetaConfig")._("565", !0),
        t = _;
      if (t != null && t.raw === e) return t.eventNames;
      var n = f(e);
      return ((_ = { raw: e, eventNames: n }), n);
    }
    ((l.getCanonicalWamFalcoMaxBufferSize = y),
      (l.getWamFalcoFlushIntervalMs = C),
      (l.shouldBufferFalcoEvent = b),
      (l.isFalcoLoggingEnabled = v),
      (l.isWamLoggingDisabled = S),
      (l.getWamFalcoMode = R),
      (l.getShadowLoggingEventIds = k),
      (l.isCriticalEvent = T),
      (l.getWamFalcoBlocklistEventNames = D));
  },
  98,
);
