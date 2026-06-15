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
        "web_message_list_a11y_redesign",
      );
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_abprop_media_links_docs_search",
      );
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue("graphql_locale_remapping");
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_message_plugin_frontend_registration_enabled",
      );
    }
    function C() {
      return !o("WAWebMobilePlatforms").isSMB();
    }
    function b() {
      return o("WAWebPrimaryFeatures").primaryFeatureEnabled("ddm_settings");
    }
    function v() {
      var e;
      return (e = o("WAWebABProps").getABPropConfigValue("drop_last_name")) !=
        null
        ? e
        : !1;
    }
    function S() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("smb_rambutan_enabled")
      );
    }
    function R() {
      return o("WAWebABProps").getABPropConfigValue("group_suspend_v2_enabled");
    }
    function L() {
      return o("WAWebABProps").getABPropConfigValue("blue_enabled");
    }
    function E() {
      return o("WAWebABProps").getABPropConfigValue("blue_education_enabled");
    }
    function k() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebABProps").getABPropConfigValue(
            "blue_profile_locked_ui_enabled",
          )
        : !1;
    }
    function I() {
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
      (l.messageListA11yRedesignEnabled = f),
      (l.mediaLinksDocsFilteringEnabled = g),
      (l.getGraphqlLocaleRemapping = h),
      (l.messagePluginFrontendRegistrationEnabled = y),
      (l.isPrivacyNarrativeV1Enabled = C),
      (l.isDefaultDisappearingMessagesEnabled = b),
      (l.isDropLastNameEnabled = v),
      (l.isRambutanEnabled = S),
      (l.isGroupSuspendV2Enabled = R),
      (l.isBlueEnabled = L),
      (l.isBlueEducationEnabled = E),
      (l.isBlueLockingEnabled = k),
      (l.checkDeviceIdTestAbProp = I));
  },
  98,
);
