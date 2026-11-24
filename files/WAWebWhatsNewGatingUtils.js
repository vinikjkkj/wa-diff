__d(
  "WAWebWhatsNewGatingUtils",
  [
    "WAWebABProps",
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
    var u = 30,
      c = 15;
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_whats_new_auto_modal_short_cooldown",
      ) === !0
        ? c
        : u;
    }
    ((l.shouldShowWhatsNewAutoModalOnLaunch = e),
      (l.isWhatsNewAutoModalEnabled = s),
      (l.getWhatsNewAutoModalCooldownDays = d));
  },
  98,
);
