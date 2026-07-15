__d(
  "WAWebMiscGatingUtils",
  [
    "WAWebABProps",
    "WAWebGroupType",
    "WAWebMobilePlatforms",
    "WAWebModernizr",
    "WAWebPrimaryFeatures",
    "WAWebUA",
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
      var e = o("WAWebModernizr").getModernizr();
      return !(o("WAWebUA").UA.isGecko && !(e != null && e.exiforientation));
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_multi_skin_toned_emoji_picker",
      );
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_abprop_media_links_docs_search",
      );
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue("graphql_locale_remapping");
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_message_plugin_frontend_registration_enabled",
      );
    }
    function h() {
      return !o("WAWebMobilePlatforms").isSMB();
    }
    function y() {
      return o("WAWebPrimaryFeatures").primaryFeatureEnabled("ddm_settings");
    }
    function C() {
      var e;
      return (e = o("WAWebABProps").getABPropConfigValue("drop_last_name")) !=
        null
        ? e
        : !1;
    }
    function b() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("smb_rambutan_enabled")
      );
    }
    function v() {
      return o("WAWebABProps").getABPropConfigValue("group_suspend_v2_enabled");
    }
    function S() {
      return o("WAWebABProps").getABPropConfigValue("blue_enabled");
    }
    function R() {
      return o("WAWebABProps").getABPropConfigValue("blue_education_enabled");
    }
    function L() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebABProps").getABPropConfigValue(
            "blue_profile_locked_ui_enabled",
          )
        : !1;
    }
    function E() {
      o("WAWebABProps").getABPropConfigValue("wa_web_pre_chat_device_id_test");
    }
    ((l.webMediaAutoDownloadEnabled = e),
      (l.cagReactionsSend = s),
      (l.getGroupSizeLimit = u),
      (l.isRecentStickersMDEnabled = c),
      (l.isFavoriteStickersEnabled = d),
      (l.isHighQualityVideoThumbnailsEnabled = m),
      (l.multiSkinToneEmojiPickerEnabled = p),
      (l.mediaLinksDocsFilteringEnabled = _),
      (l.getGraphqlLocaleRemapping = f),
      (l.messagePluginFrontendRegistrationEnabled = g),
      (l.isPrivacyNarrativeV1Enabled = h),
      (l.isDefaultDisappearingMessagesEnabled = y),
      (l.isDropLastNameEnabled = C),
      (l.isRambutanEnabled = b),
      (l.isGroupSuspendV2Enabled = v),
      (l.isBlueEnabled = S),
      (l.isBlueEducationEnabled = R),
      (l.isBlueLockingEnabled = L),
      (l.checkDeviceIdTestAbProp = E));
  },
  98,
);
