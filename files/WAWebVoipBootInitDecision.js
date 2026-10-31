__d(
  "WAWebVoipBootInitDecision",
  [
    "WAWebABProps",
    "WAWebABPropsCache",
    "WAWebEnvironment",
    "WAWebFeatureDetectionLongTaskSupport",
    "WAWebVoipGatingUtils",
    "WAWebVoipLastCallStore",
  ],
  function (t, n, r, o, a, i, l) {
    var e = { decision: "deferred", reason: "deferred" },
      s = { decision: "eager", reason: "eager_last_call_unreadable" },
      u = { decision: "eager", reason: "prop_off" },
      c = { decision: "eager", reason: "eager_recent_caller" },
      d = null,
      m = !1;
    function p() {
      var e, t;
      return o("WAWebABPropsCache").isABPropConfigsReady()
        ? (e = (t = C()) == null ? void 0 : t.decision) != null
          ? e
          : "skip"
        : (y(), null);
    }
    function _() {
      var e, t;
      return p() == null
        ? null
        : (e = (t = d) == null ? void 0 : t.reason) != null
          ? e
          : null;
    }
    function f() {
      return p() === "deferred";
    }
    function g() {
      return (
        f() &&
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_deferred_boot_early_module_prefetch",
        ) === !0
      );
    }
    function h() {
      return (
        f() &&
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_deferred_boot_init_max_delay_ms",
        ) <= 0 &&
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_deferred_boot_hidden_prewarm",
        ) === !0
      );
    }
    function y() {
      ((d = null), (m = !1));
    }
    function C() {
      var e = d;
      return e == null
        ? ((d = b()), d)
        : (m && !R() && e.decision === "deferred" && (d = u), d);
    }
    function b() {
      var t;
      if (!o("WAWebVoipGatingUtils").isVoipDownloadEnabled()) return null;
      var n = S();
      return n != null
        ? { decision: "eager", reason: n }
        : ((m = !0), R() ? ((t = v()) != null ? t : e) : u);
    }
    function v() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "web_voip_deferred_boot_recent_caller_eager_days",
      );
      if (e <= 0) return null;
      try {
        var t = o("WAWebVoipLastCallStore").getBootLastCall();
        if (t == null) return s;
        var n = o("WAWebVoipLastCallStore").getLastCallDays(t);
        return n != null && n < e ? c : null;
      } catch (e) {
        return s;
      }
    }
    function S() {
      return r("WAWebEnvironment").isWindows
        ? "windows"
        : o("WAWebVoipGatingUtils").isGuestViewer()
          ? "guest"
          : o("WAWebFeatureDetectionLongTaskSupport").isLongTaskSupported()
            ? null
            : "eager_no_longtask";
    }
    function R() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_deferred_boot_init",
        ) === !0
      );
    }
    ((l.getVoipBootInitDecision = p),
      (l.getVoipBootInitDecisionReason = _),
      (l.isDeferredVoipBootInitEnabled = f),
      (l.isDeferredVoipBootEarlyModulePrefetchEnabled = g),
      (l.isDeferredVoipBootHiddenPrewarmEnabled = h));
  },
  98,
);
