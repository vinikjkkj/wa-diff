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
        : o("WAWebMobilePlatforms").isSMB()
          ? o("WAWebABProps").getABPropConfigValue(
              "parent_group_view_enabled_for_smb_on_web",
            )
          : !0;
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
      return o("WAWebABProps").getABPropConfigValue("web_group_profile_editor");
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_multi_skin_toned_emoji_picker",
      );
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_message_list_a11y_redesign",
      );
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_abprop_media_links_docs_search",
      );
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue("graphql_locale_remapping");
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_message_custom_aria_label",
      );
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue(
        "four_reactions_in_bubble_enabled",
      );
    }
    function v() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_message_plugin_frontend_registration_enabled",
      );
    }
    function S() {
      return !o("WAWebMobilePlatforms").isSMB();
    }
    function R() {
      return o("WAWebPrimaryFeatures").primaryFeatureEnabled("ddm_settings");
    }
    function L() {
      var e;
      return (e = o("WAWebABProps").getABPropConfigValue("drop_last_name")) !=
        null
        ? e
        : !1;
    }
    function E() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("smb_rambutan_enabled")
      );
    }
    function k() {
      return o("WAWebABProps").getABPropConfigValue("group_suspend_v2_enabled");
    }
    function I() {
      return o("WAWebABProps").getABPropConfigValue("blue_enabled");
    }
    function T() {
      return o("WAWebABProps").getABPropConfigValue("blue_education_enabled");
    }
    function D() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebABProps").getABPropConfigValue(
            "blue_profile_locked_ui_enabled",
          )
        : !1;
    }
    function x() {
      return o("WAWebABProps").getABPropConfigValue("blue_strings_enabled");
    }
    function $() {
      o("WAWebABProps").getABPropConfigValue("wa_web_pre_chat_device_id_test");
    }
    ((l.webMediaAutoDownloadEnabled = e),
      (l.cagReactionsSend = s),
      (l.getGroupSizeLimit = u),
      (l.isRecentStickersMDEnabled = c),
      (l.isFavoriteStickersEnabled = d),
      (l.isFavoriteStickerSyncAfterPairingEnabled = m),
      (l.isHighQualityVideoThumbnailsEnabled = p),
      (l.groupProfileEditorEnabled = _),
      (l.multiSkinToneEmojiPickerEnabled = f),
      (l.messageListA11yRedesignEnabled = g),
      (l.mediaLinksDocsFilteringEnabled = h),
      (l.getGraphqlLocaleRemapping = y),
      (l.messageCustomAriaLabelEnabled = C),
      (l.fourReactionsInBubbleEnabled = b),
      (l.messagePluginFrontendRegistrationEnabled = v),
      (l.isPrivacyNarrativeV1Enabled = S),
      (l.isDefaultDisappearingMessagesEnabled = R),
      (l.isDropLastNameEnabled = L),
      (l.isRambutanEnabled = E),
      (l.isGroupSuspendV2Enabled = k),
      (l.isBlueEnabled = I),
      (l.isBlueEducationEnabled = T),
      (l.isBlueLockingEnabled = D),
      (l.isBlueStringsEnabled = x),
      (l.checkDeviceIdTestAbProp = $));
  },
  98,
);
