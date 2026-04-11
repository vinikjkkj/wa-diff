__d(
  "WAWebQuickPromotionGating",
  ["WATimeUtils", "WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return !o("WAWebABProps").getABPropConfigValue("privacy_tips_killswitch");
    }
    function s() {
      return (
        e() &&
        o("WAWebABProps").getABPropConfigValue("privacy_tips_groups_build")
      );
    }
    function u() {
      return (
        e() &&
        o("WAWebABProps").getABPropConfigValue("privacy_tips_profile_build")
      );
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "updates_quick_promotion_banner_enabled",
      );
    }
    function d() {
      return o("WATimeUtils").castToUnixTime(
        o("WAWebABProps").getABPropConfigValue(
          "updates_privacy_notice_rollout_date",
        ),
      );
    }
    ((l.groupsPrivacyTipsEnabled = s),
      (l.profilePrivacyTipsEnabled = u),
      (l.updatesTabQuickPromotionBannerEnabled = c),
      (l.getUpdatesTabPrivacyNoticeRolloutDate = d));
  },
  98,
);
