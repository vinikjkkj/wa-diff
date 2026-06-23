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
      return o("WAWebABProps").getABPropConfigValue(
        "favorite_sticker_sync_after_pairing_enabled_web",
      );
    }
    function p() {
      var e = o("WAWebModernizr").getModernizr();
      return !(o("WAWebUA").UA.isGecko && !(e != null && e.exiforientation));
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_multi_skin_toned_emoji_picker",
      );
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_abprop_media_links_docs_search",
      );
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue("graphql_locale_remapping");
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_message_plugin_frontend_registration_enabled",
      );
    }
    function y() {
      return !o("WAWebMobilePlatforms").isSMB();
    }
    function C() {
      return o("WAWebPrimaryFeatures").primaryFeatureEnabled("ddm_settings");
    }
    function b() {
      var e;
      return (e = o("WAWebABProps").getABPropConfigValue("drop_last_name")) !=
        null
        ? e
        : !1;
    }
    function v() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("smb_rambutan_enabled")
      );
    }
    function S() {
      return o("WAWebABProps").getABPropConfigValue("group_suspend_v2_enabled");
    }
    function R() {
      return o("WAWebABProps").getABPropConfigValue("blue_enabled");
    }
    function L() {
      return o("WAWebABProps").getABPropConfigValue("blue_education_enabled");
    }
    function E() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebABProps").getABPropConfigValue(
            "blue_profile_locked_ui_enabled",
          )
        : !1;
    }
    function k() {
      o("WAWebABProps").getABPropConfigValue("wa_web_pre_chat_device_id_test");
    }
    ((l.webMediaAutoDownloadEnabled = e),
      (l.cagReactionsSend = s),
      (l.getGroupSizeLimit = u),
      (l.isRecentStickersMDEnabled = c),
      (l.isFavoriteStickersEnabled = d),
      (l.isFavoriteStickerSyncAfterPairingEnabled = m),
      (l.isHighQualityVideoThumbnailsEnabled = p),
      (l.multiSkinToneEmojiPickerEnabled = _),
      (l.mediaLinksDocsFilteringEnabled = f),
      (l.getGraphqlLocaleRemapping = g),
      (l.messagePluginFrontendRegistrationEnabled = h),
      (l.isPrivacyNarrativeV1Enabled = y),
      (l.isDefaultDisappearingMessagesEnabled = C),
      (l.isDropLastNameEnabled = b),
      (l.isRambutanEnabled = v),
      (l.isGroupSuspendV2Enabled = S),
      (l.isBlueEnabled = R),
      (l.isBlueEducationEnabled = L),
      (l.isBlueLockingEnabled = E),
      (l.checkDeviceIdTestAbProp = k));
  },
  98,
);
