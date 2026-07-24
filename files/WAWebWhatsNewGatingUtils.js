__d(
  "WAWebWhatsNewGatingUtils",
  [
    "WAPromiseDelays",
    "WAWebABProps",
    "WAWebBizAiLargeScreensGateModel",
    "WAWebMobilePlatforms",
    "WAWebWhatsNewContent",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return !(
        o("WAWebABProps").getABPropConfigValue("web_whats_new_auto_modal") !==
          !0 ||
        !o("WAWebWhatsNewContent").hasWhatsNewContent() ||
        (o("WAWebMobilePlatforms").isSMB() &&
          !o("WAWebWhatsNewContent").hasSmbWhatsNewContent())
      );
    }
    var s = 3e3;
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return !o("WAWebMobilePlatforms").isSMB() ||
            o(
              "WAWebBizAiLargeScreensGateModel",
            ).isBizAiLargeScreensGateEnabled()
            ? !0
            : (yield o("WAPromiseDelays").delayMs(s),
              o(
                "WAWebBizAiLargeScreensGateModel",
              ).isBizAiLargeScreensGateEnabled());
        })),
        c.apply(this, arguments)
      );
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
    ((l.isWhatsNewAutoModalEnabled = e),
      (l.resolveWhatsNewBizAgentEligible = u),
      (l.getWhatsNewAutoModalCooldownDays = p));
  },
  98,
);
