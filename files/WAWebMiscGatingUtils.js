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
      return o("WAWebABProps").getABPropConfigValue(
        "web_abprop_media_links_docs_search",
      );
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue("graphql_locale_remapping");
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_message_plugin_frontend_registration_enabled",
      );
    }
    function g() {
      return !o("WAWebMobilePlatforms").isSMB();
    }
    function h() {
      return o("WAWebPrimaryFeatures").primaryFeatureEnabled("ddm_settings");
    }
    function y() {
      var e;
      return (e = o("WAWebABProps").getABPropConfigValue("drop_last_name")) !=
        null
        ? e
        : !1;
    }
    function C() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("smb_rambutan_enabled")
      );
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue("group_suspend_v2_enabled");
    }
    function v() {
      return o("WAWebABProps").getABPropConfigValue("blue_enabled");
    }
    function S() {
      return o("WAWebABProps").getABPropConfigValue("blue_education_enabled");
    }
    function R() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebABProps").getABPropConfigValue(
            "blue_profile_locked_ui_enabled",
          )
        : !1;
    }
    function L() {
      o("WAWebABProps").getABPropConfigValue("wa_web_pre_chat_device_id_test");
    }
    ((l.webMediaAutoDownloadEnabled = e),
      (l.cagReactionsSend = s),
      (l.getGroupSizeLimit = u),
      (l.isRecentStickersMDEnabled = c),
      (l.isFavoriteStickersEnabled = d),
      (l.multiSkinToneEmojiPickerEnabled = m),
      (l.mediaLinksDocsFilteringEnabled = p),
      (l.getGraphqlLocaleRemapping = _),
      (l.messagePluginFrontendRegistrationEnabled = f),
      (l.isPrivacyNarrativeV1Enabled = g),
      (l.isDefaultDisappearingMessagesEnabled = h),
      (l.isDropLastNameEnabled = y),
      (l.isRambutanEnabled = C),
      (l.isGroupSuspendV2Enabled = b),
      (l.isBlueEnabled = v),
      (l.isBlueEducationEnabled = S),
      (l.isBlueLockingEnabled = R),
      (l.checkDeviceIdTestAbProp = L));
  },
  98,
);
