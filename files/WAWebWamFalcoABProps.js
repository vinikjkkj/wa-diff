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
    "WAWebUserPrefsGeneral",
    "WAWebWamFalcoModes",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 5e3,
      d = null,
      m = null,
      p = null;
    function _(e) {
      var t = new Set();
      for (var n of e.split(",")) {
        var r = n.trim();
        r !== "" && t.add(r);
      }
      return t;
    }
    function f(e) {
      var t = new Set();
      for (var n of _(e)) {
        var r = parseInt(n, 10);
        Number.isNaN(r) || t.add(r);
      }
      return t;
    }
    function g() {
      return r("justknobx")._("2716");
    }
    function h() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "wa_web_canonical_wam_falco_buffer_size",
      );
      return e > 0 ? e : 2e3;
    }
    function y() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "wa_web_wam_falco_flush_interval_ms",
      );
      return e > 0 ? e : c;
    }
    function C() {
      return !v() || !g() || !o("WAWebCanonicalGating").isCanonicalEnabled()
        ? !1
        : !r("WAWebNetworkStatus").online;
    }
    function b() {
      return (
        R() === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING &&
        r("MetaConfig")._("609")
      );
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
        return I(E());
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
        return I(k());
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
    function E() {
      return o("WAWebUserPrefsGeneral").getWhatsAppWebExternalBetaJoinedIdb()
        ? r("MetaConfig")._("596", !0)
        : r("MetaConfig")._("371", !0);
    }
    function k() {
      return o("WAWebUserPrefsGeneral").getWhatsAppWebExternalBetaJoinedIdb()
        ? r("MetaConfig")._("597")
        : r("MetaConfig")._("410");
    }
    function I(e) {
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
    function T() {
      if (d != null) return d;
      if (!o("WAWebABPropsCache").isABPropConfigsReady()) return new Set();
      try {
        d = f(
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
          (d = new Set()));
      }
      return d;
    }
    function D() {
      var e = r("MetaConfig")._("632", !0),
        t = m;
      if (t != null && t.raw === e) return t.eventIds;
      var n = f(e);
      return ((m = { raw: e, eventIds: n }), n);
    }
    function x(e) {
      return D().has(e);
    }
    function $() {
      var e = r("MetaConfig")._("565", !0),
        t = p;
      if (t != null && t.raw === e) return t.eventNames;
      var n = _(e);
      return ((p = { raw: e, eventNames: n }), n);
    }
    ((l.getCanonicalWamFalcoMaxBufferSize = h),
      (l.getWamFalcoFlushIntervalMs = y),
      (l.shouldBufferFalcoEvent = C),
      (l.shouldUseBanzaiOfflineQueue = b),
      (l.isFalcoLoggingEnabled = v),
      (l.isWamLoggingDisabled = S),
      (l.getWamFalcoMode = R),
      (l.getShadowLoggingEventIds = T),
      (l.isCriticalEvent = x),
      (l.getWamFalcoBlocklistEventNames = $));
  },
  98,
);
