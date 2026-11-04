__d(
  "WAWebPostCallNotificationsUpsellGating",
  [
    "WAWebABProps",
    "WAWebCallCollection",
    "WAWebNotificationPermission",
    "WAWebNux",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsNuxPreferences",
    "WAWebVoipCallsTabNotificationsOffBannerGating",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null;
    function s() {
      var t, n;
      if (r("WAWebCallCollection").activeCall != null) return !1;
      var a = o("WAWebUserPrefsMeUser").getMaybeMeLidUser(),
        i = r("WAWebCallCollection").lastActiveCall;
      return (
        (i == null ? void 0 : i.wasEverConnected) === !0 &&
          i !== ((t = e) == null ? void 0 : t.call) &&
          (e = { account: a, call: i }),
        a == null ||
        !a.equals((n = e) == null ? void 0 : n.account) ||
        !o(
          "WAWebVoipCallsTabNotificationsOffBannerGating",
        ).areCallNotificationsOff()
          ? !1
          : o(
              "WAWebNotificationPermission",
            ).isNotificationPermissionGranted() ||
            o(
              "WAWebVoipCallsTabNotificationsOffBannerGating",
            ).canCtaFixPermission()
      );
    }
    function u() {
      return (
        s() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_post_call_notifications_upsell_enabled",
        ) &&
        o("WAWebUserPrefsNuxPreferences").shouldShowNUX(
          o("WAWebNux").NUX.POST_CALL_NOTIFICATIONS_UPSELL,
        )
      );
    }
    function c() {
      e = null;
    }
    ((l.isPostCallNotificationsUpsellApplicable = s),
      (l.shouldShowPostCallNotificationsUpsell = u),
      (l.resetPostCallNotificationsUpsellForTesting = c));
  },
  98,
);
