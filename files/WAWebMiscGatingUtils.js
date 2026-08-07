__d(
  "WAWebMiscGatingUtils",
  [
    "WAWebABProps",
    "WAWebGroupType",
    "WAWebMobilePlatforms",
    "WAWebPrimaryFeatures",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e >=
        o("WAWebABProps").getABPropConfigValue(
          "pnh_cag_disable_reactions_group_size",
        )
        ? !1
        : (o("WAWebMobilePlatforms").isSMB(), !0);
    }
    function s(e) {
      var t;
      return (
        e === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
          ? (t = o("WAWebABProps").getABPropConfigValue(
              "community_announcement_group_size_limit",
            ))
          : (t = o("WAWebABProps").getABPropConfigValue("group_size_limit")),
        t
      );
    }
    function u() {
      return o("WAWebPrimaryFeatures").primaryFeatureEnabled("recent_sticker");
    }
    function c() {
      return o("WAWebPrimaryFeatures").primaryFeatureEnabled(
        "favorite_sticker",
      );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_multi_skin_toned_emoji_picker",
      );
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue("graphql_locale_remapping");
    }
    function p() {
      return !o("WAWebMobilePlatforms").isSMB();
    }
    function _() {
      return o("WAWebPrimaryFeatures").primaryFeatureEnabled("ddm_settings");
    }
    function f() {
      var e;
      return (e = o("WAWebABProps").getABPropConfigValue("drop_last_name")) !=
        null
        ? e
        : !1;
    }
    function g() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("smb_rambutan_enabled")
      );
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue("group_suspend_v2_enabled");
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue("blue_enabled");
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue("blue_education_enabled");
    }
    function b() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebABProps").getABPropConfigValue(
            "blue_profile_locked_ui_enabled",
          )
        : !1;
    }
    function v() {
      o("WAWebABProps").getABPropConfigValue("wa_web_pre_chat_device_id_test");
    }
    ((l.cagReactionsSend = e),
      (l.getGroupSizeLimit = s),
      (l.isRecentStickersMDEnabled = u),
      (l.isFavoriteStickersEnabled = c),
      (l.multiSkinToneEmojiPickerEnabled = d),
      (l.getGraphqlLocaleRemapping = m),
      (l.isPrivacyNarrativeV1Enabled = p),
      (l.isDefaultDisappearingMessagesEnabled = _),
      (l.isDropLastNameEnabled = f),
      (l.isRambutanEnabled = g),
      (l.isGroupSuspendV2Enabled = h),
      (l.isBlueEnabled = y),
      (l.isBlueEducationEnabled = C),
      (l.isBlueLockingEnabled = b),
      (l.checkDeviceIdTestAbProp = v));
  },
  98,
);
