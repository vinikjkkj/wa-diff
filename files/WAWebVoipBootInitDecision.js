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
      if (e != null) return (s && !_() && (e = "eager"), e);
      var t = p();
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
      ((e = null), (s = !1));
    }
    function p() {
      return o("WAWebVoipGatingUtils").isVoipDownloadEnabled()
        ? r("WAWebEnvironment").isWindows ||
          o("WAWebVoipGatingUtils").isGuestViewer()
          ? "eager"
          : ((s = !0), _() ? "deferred" : "eager")
        : "skip";
    }
    function _() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_deferred_boot_init",
        ) === !0
      );
    }
    ((l.getVoipBootInitDecision = u),
      (l.isDeferredVoipBootInitEnabled = c),
      (l.isDeferredVoipBootEarlyModulePrefetchEnabled = d),
      (l.resetVoipBootInitDecisionForTesting = m));
  },
  98,
);
