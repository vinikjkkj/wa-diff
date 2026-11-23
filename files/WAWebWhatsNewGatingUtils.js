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
    "WAWebWorkFeature",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebColdLaunchDeeplink").wasLaunchedFromDeeplink()
        ? !1
        : s() && o("WAWebWhatsNewNux").shouldShowWhatsNewNux(e);
    }
    function s() {
      return !(
        o("WAWebWorkFeature").isWork() ||
        o("WAWebABProps").getABPropConfigValue("web_whats_new_auto_modal") !==
          !0 ||
        !o("WAWebWhatsNewContent").hasWhatsNewContent() ||
        (o("WAWebMobilePlatforms").isSMB() &&
          !o("WAWebWhatsNewContent").hasSmbWhatsNewContent())
      );
    }
    var u = 3e3;
    async function c() {
      return !o("WAWebMobilePlatforms").isSMB() ||
        !o("WAWebWhatsNewContent").hasBizAgentWhatsNewHighlight() ||
        o("WAWebBizAiLargeScreensGateModel").isBizAiLargeScreensGateEnabled()
        ? !0
        : (await o("WAPromiseDelays").delayMs(u),
          o(
            "WAWebBizAiLargeScreensGateModel",
          ).isBizAiLargeScreensGateEnabled());
    }
    var d = 30,
      m = 15;
    function p() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_whats_new_auto_modal_short_cooldown",
      ) === !0
        ? m
        : d;
    }
    ((l.shouldShowWhatsNewAutoModalOnLaunch = e),
      (l.isWhatsNewAutoModalEnabled = s),
      (l.resolveWhatsNewBizAgentEligible = c),
      (l.getWhatsNewAutoModalCooldownDays = p));
  },
  98,
);
