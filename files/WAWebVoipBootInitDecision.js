__d(
  "WAWebVoipBootInitDecision",
  [
    "WAWebABProps",
    "WAWebABPropsCache",
    "WAWebEnvironment",
    "WAWebVoipGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = null,
      s = !1;
    function u() {
      if (!o("WAWebABPropsCache").isABPropConfigsReady())
        return ((e = null), (s = !1), null);
      if (e != null) return (s && !f() && (e = "eager"), e);
      var t = _();
      return (t !== "skip" && (e = t), t);
    }
    function c() {
      return u() === "deferred";
    }
    function d() {
      return (
        c() &&
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_deferred_boot_early_module_prefetch",
        ) === !0
      );
    }
    function m() {
      return (
        c() &&
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_deferred_boot_init_max_delay_ms",
        ) <= 0 &&
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_deferred_boot_hidden_prewarm",
        ) === !0
      );
    }
    function p() {
      ((e = null), (s = !1));
    }
    function _() {
      return o("WAWebVoipGatingUtils").isVoipDownloadEnabled()
        ? r("WAWebEnvironment").isWindows ||
          o("WAWebVoipGatingUtils").isGuestViewer()
          ? "eager"
          : ((s = !0), f() ? "deferred" : "eager")
        : "skip";
    }
    function f() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_deferred_boot_init",
        ) === !0
      );
    }
    ((l.getVoipBootInitDecision = u),
      (l.isDeferredVoipBootInitEnabled = c),
      (l.isDeferredVoipBootEarlyModulePrefetchEnabled = d),
      (l.isDeferredVoipBootHiddenPrewarmEnabled = m),
      (l.resetVoipBootInitDecisionForTesting = p));
  },
  98,
);
