__d(
  "WAWebWhatsNewGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebABProps").getABPropConfigValue("web_whats_new_carousel") === !0
      );
    }
    function s() {
      return (
        o("WAWebABProps").getABPropConfigValue("web_whats_new_banner") === !0
      );
    }
    function u() {
      return (
        o("WAWebABProps").getABPropConfigValue("web_whats_new_auto_modal") ===
        !0
      );
    }
    var c = 30,
      d = 15;
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_whats_new_banner_short_cooldown_v2",
      ) === !0
        ? d
        : c;
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_whats_new_auto_modal_short_cooldown",
      ) === !0
        ? d
        : c;
    }
    ((l.isWhatsNewCarouselEnabled = e),
      (l.isWhatsNewBannerEnabled = s),
      (l.isWhatsNewAutoModalEnabled = u),
      (l.getWhatsNewBannerCooldownDays = m),
      (l.getWhatsNewAutoModalCooldownDays = p));
  },
  98,
);
