__d(
  "WAWebWhatsNewGatingUtils",
  ["WAWebABProps", "WAWebMobilePlatforms"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebMobilePlatforms").isSMB()
        ? !1
        : o("WAWebABProps").getABPropConfigValue("web_whats_new_auto_modal") ===
            !0;
    }
    var s = 30,
      u = 15;
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_whats_new_auto_modal_short_cooldown",
      ) === !0
        ? u
        : s;
    }
    ((l.isWhatsNewAutoModalEnabled = e),
      (l.getWhatsNewAutoModalCooldownDays = c));
  },
  98,
);
