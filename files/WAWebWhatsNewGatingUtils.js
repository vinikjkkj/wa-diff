__d(
  "WAWebWhatsNewGatingUtils",
  [
    "WAPromiseDelays",
    "WAWebABProps",
    "WAWebBizAiLargeScreensGateModel",
    "WAWebColdLaunchDeeplink",
    "WAWebMobilePlatforms",
    "WAWebWhatsNewContent",
    "WAWebWhatsNewNux",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebColdLaunchDeeplink").wasLaunchedFromDeeplink()
        ? !1
        : s() && o("WAWebWhatsNewNux").shouldShowWhatsNewNux(e);
    }
    function s() {
      return !(
        o("WAWebABProps").getABPropConfigValue("web_whats_new_auto_modal") !==
          !0 ||
        !o("WAWebWhatsNewContent").hasWhatsNewContent() ||
        (o("WAWebMobilePlatforms").isSMB() &&
          !o("WAWebWhatsNewContent").hasSmbWhatsNewContent())
      );
    }
    var u = 3e3;
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return !o("WAWebMobilePlatforms").isSMB() ||
            !o("WAWebWhatsNewContent").hasBizAgentWhatsNewHighlight() ||
            o(
              "WAWebBizAiLargeScreensGateModel",
            ).isBizAiLargeScreensGateEnabled()
            ? !0
            : (yield o("WAPromiseDelays").delayMs(u),
              o(
                "WAWebBizAiLargeScreensGateModel",
              ).isBizAiLargeScreensGateEnabled());
        })),
        d.apply(this, arguments)
      );
    }
    var m = 30,
      p = 15;
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_whats_new_auto_modal_short_cooldown",
      ) === !0
        ? p
        : m;
    }
    ((l.shouldShowWhatsNewAutoModalOnLaunch = e),
      (l.isWhatsNewAutoModalEnabled = s),
      (l.resolveWhatsNewBizAgentEligible = c),
      (l.getWhatsNewAutoModalCooldownDays = _));
  },
  98,
);
