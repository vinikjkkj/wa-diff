__d(
  "WAWebMiscGatingUtils",
  [
    "WAWebABProps",
    "WAWebGroupType",
    "WAWebMobilePlatforms",
    "WAWebPrimaryFeatures",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return !o("WAWebABProps").getABPropConfigValue("disable_auto_download");
    }
    function s(e) {
      return e >=
        o("WAWebABProps").getABPropConfigValue(
          "pnh_cag_disable_reactions_group_size",
        )
        ? !1
        : (o("WAWebMobilePlatforms").isSMB(), !0);
    }
    function u(e) {
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
    function c() {
      return o("WAWebPrimaryFeatures").primaryFeatureEnabled("recent_sticker");
    }
    function d() {
      return o("WAWebPrimaryFeatures").primaryFeatureEnabled(
        "favorite_sticker",
      );
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_multi_skin_toned_emoji_picker",
      );
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue("graphql_locale_remapping");
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_message_plugin_frontend_registration_enabled",
      );
    }
    function f() {
      return !o("WAWebMobilePlatforms").isSMB();
    }
    function g() {
      return o("WAWebPrimaryFeatures").primaryFeatureEnabled("ddm_settings");
    }
    function h() {
      var e;
      return (e = o("WAWebABProps").getABPropConfigValue("drop_last_name")) !=
        null
        ? e
        : !1;
    }
    function y() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("smb_rambutan_enabled")
      );
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue("group_suspend_v2_enabled");
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue("blue_enabled");
    }
    function v() {
      return o("WAWebABProps").getABPropConfigValue("blue_education_enabled");
    }
    function S() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebABProps").getABPropConfigValue(
            "blue_profile_locked_ui_enabled",
          )
        : !1;
    }
    function R() {
      o("WAWebABProps").getABPropConfigValue("wa_web_pre_chat_device_id_test");
    }
    ((l.webMediaAutoDownloadEnabled = e),
      (l.cagReactionsSend = s),
      (l.getGroupSizeLimit = u),
      (l.isRecentStickersMDEnabled = c),
      (l.isFavoriteStickersEnabled = d),
      (l.multiSkinToneEmojiPickerEnabled = m),
      (l.getGraphqlLocaleRemapping = p),
      (l.messagePluginFrontendRegistrationEnabled = _),
      (l.isPrivacyNarrativeV1Enabled = f),
      (l.isDefaultDisappearingMessagesEnabled = g),
      (l.isDropLastNameEnabled = h),
      (l.isRambutanEnabled = y),
      (l.isGroupSuspendV2Enabled = C),
      (l.isBlueEnabled = b),
      (l.isBlueEducationEnabled = v),
      (l.isBlueLockingEnabled = S),
      (l.checkDeviceIdTestAbProp = R));
  },
  98,
);
