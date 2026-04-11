__d(
  "WAWebNewsletterGatingUtils",
  [
    "$InternalEnum",
    "WAWebABProps",
    "WAWebCommonNewsletterEnums",
    "WAWebMobilePlatforms",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebPtvGatingUtils",
    "WAWebStateUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({ Disabled: 0, NeedsUpgrade: 1, Enabled: 2 }),
      s = n("$InternalEnum")({
        Disabled: 0,
        EnabledAdminsOnly: 1,
        EnabledAdminsAndFollowers: 2,
        EnabledEveryone: 3,
      }),
      u = 5e3;
    function c() {
      return u;
    }
    function d() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "dsa_information_for_eu_only_enabled",
      );
    }
    function m() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "dsa_channels_report_unlawful_content_enabled",
      );
    }
    function p() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_osa_reporting_enabled",
      );
    }
    function _() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_uk_osa_enabled",
      );
    }
    function f() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_us_ncii_reporting_enabled",
      );
    }
    function g() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "dsa_21_channel_reporting_enabled",
      );
    }
    function h() {
      return (
        (o("WAWebABProps").getABPropConfigValue(
          "channels_question_admin_enabled",
        ) ||
          o("WAWebABProps").getABPropConfigValue(
            "channels_question_follower_enabled",
          )) &&
        o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
          "channels_questions_integrity_m1_enabled",
        )
      );
    }
    function y() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_questions_search_enabled",
      );
    }
    function C() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_enforcement_policy_education_enabled",
      );
    }
    function b(e) {
      var t = !1;
      if (e == null) return !1;
      switch (e) {
        case o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner:
        case o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin:
          t =
            o("WAWebABProps").getABPropConfigValue(
              "channel_view_counts_enabled",
            ) >= s.EnabledAdminsOnly;
          break;
        case o("WAWebCommonNewsletterEnums").NewsletterMembershipType
          .Subscriber:
          t =
            o("WAWebABProps").getABPropConfigValue(
              "channel_view_counts_enabled",
            ) >= s.EnabledAdminsAndFollowers;
          break;
        case o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Guest:
          t =
            o("WAWebABProps").getABPropConfigValue(
              "channel_view_counts_enabled",
            ) === s.EnabledEveryone;
          break;
      }
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() && t;
    }
    function v() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_send_view_receipt_enabled",
      );
    }
    function S() {
      return (
        o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
        o("WAWebABProps").getABPropConfigValue("channels_creation_enabled") ===
          o("WAWebNewsletterCommonGatingUtils").NewsletterCompanionGating
            .Enabled
      );
    }
    function R(e) {
      var t;
      return (
        ((t = e.newsletterMetadata) == null
          ? void 0
          : t.reactionCodesSetting) ===
          o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.All &&
        L()
      );
    }
    function L() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_reactions_settings_enabled",
      );
    }
    function E() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebABProps").getABPropConfigValue(
            "newsletter_tos_notice_id_smb_web",
          )
        : o("WAWebABProps").getABPropConfigValue("newsletter_tos_notice_id");
    }
    function k() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebABProps").getABPropConfigValue(
            "newsletter_creation_tos_id_smb_web",
          )
        : o("WAWebABProps").getABPropConfigValue("newsletter_creation_tos_id");
    }
    function I() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebABProps").getABPropConfigValue(
            "newsletter_admin_invite_tos_id_smb_web",
          )
        : o("WAWebABProps").getABPropConfigValue(
            "newsletter_admin_invite_tos_id",
          );
    }
    function T() {
      return o("WAWebABProps").getABPropConfigValue(
        "newsletter_creation_nux_id",
      );
    }
    function D() {
      return !1;
    }
    function x() {
      return (
        o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
        o("WAWebABProps").getABPropConfigValue("channels_directory_enabled") ===
          e.Enabled
      );
    }
    function $() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_directory_page_size",
      );
    }
    function P() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_directory_search_debounce_ms",
      );
    }
    function N() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_filter_out_subscribed_in_directory_null_state",
      );
    }
    function M() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_directory_v2_cache_refresh_interval_ms",
      );
    }
    function w() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_directory_categories_enabled",
      );
    }
    function A() {
      return o("WAWebABProps").getABPropConfigValue(
        "directory_categories_newsletters_per_category_limit",
      );
    }
    function F() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_directory_categories_cache_refresh_interval_ms",
      );
    }
    function O() {
      return o("WAWebABProps").getABPropConfigValue(
        "directory_categories_display_newsletters_per_category_limit",
      );
    }
    function B() {
      return (
        w() &&
        o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
          "channels_directory_categories_logging_enabled",
        )
      );
    }
    function W() {
      return o("WAWebABProps").getABPropConfigValue(
        "recommended_channels_background_refresh",
      );
    }
    function q() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_followers_list_cache_refresh_milliseconds",
      );
    }
    function U() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_forward_to_chat_enabled",
      );
    }
    function V() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_forward_logging_v2_enabled",
      );
    }
    function H() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_to_channel_forwarding_logging_enabled",
      );
    }
    function G() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_forward_to_chat_v2_message_navigation_enabled",
      );
    }
    function z() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled();
    }
    function j() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_forward_bottom_button_enabled",
      );
    }
    function K() {
      return o("WAWebABProps").getABPropConfigValue(
        "newsletter_forward_counter_ui_enabled",
      );
    }
    function Q() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "newsletter_forward_counter_infra_enabled",
      );
    }
    function X() {
      return o("WAWebABProps").getABPropConfigValue(
        "newsletter_forward_counter_max_send_after_random_time",
      );
    }
    function Y() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "newsletter_forward_counter_bump_own_channel_updates_fowards",
      );
    }
    function J() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "newsletter_forward_counter_bump_forwards_to_self",
      );
    }
    function Z() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "newsletter_forward_counter_bump_second_order_forwards",
      );
    }
    var ee = 10;
    function te() {
      return !0;
    }
    function ne() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_hide_news_url_preview",
      );
    }
    function re() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_max_messages_batch_pull",
      );
    }
    function oe() {
      return o("WAWebABProps").getABPropConfigValue(
        "channel_pull_message_updates_threshold_seconds",
      );
    }
    function ae() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_recommended_v3_ui_limit",
      );
    }
    function ie() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_share_link_logging_enabled",
      );
    }
    function le(e) {
      return (
        e === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner ||
        e === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin
      );
    }
    function se() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_send_album_enabled",
      );
    }
    function ue() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_proactive_message_gap_handling_enabled",
      );
    }
    function ce() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_ptt_receiver_enabled",
      );
    }
    function de() {
      return (
        ce() &&
        o("WAWebABProps").getABPropConfigValue("channels_ptt_sender_enabled")
      );
    }
    function me() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_ptt_logging_enabled",
      );
    }
    function pe() {
      return (
        _e() &&
        o("WAWebABProps").getABPropConfigValue(
          "channels_ptv_forwarding_enabled",
        )
      );
    }
    function _e() {
      return (
        o("WAWebPtvGatingUtils").isPtvReceivingEnabled() &&
        o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
          "channels_ptv_receiving_enabled",
        )
      );
    }
    function fe() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_poll_receive_enabled",
      );
    }
    function ge() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_poll_voter_list_enabled",
      );
    }
    function he() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_poll_forwarding_enabled",
      );
    }
    function ye() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_quiz_receiving_enabled",
      );
    }
    function Ce() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_quiz_sending_enabled",
      );
    }
    function be() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_sticker_forwarded_attribution_ui_enabled",
      );
    }
    function ve() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_sticker_pack_forwarded_attribution_ui_enabled",
      );
    }
    function Se() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_sticker_pack_rendering",
      );
    }
    function Re() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_sticker_pack_forwarding",
      );
    }
    function Le() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_multi_admin_max_admin_count",
      );
    }
    function Ee() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_audio_files_receiver_enabled",
      );
    }
    function ke() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_audio_files_sender_enabled",
      );
    }
    function Ie() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_audio_files_sender_waveform_enabled",
      );
    }
    function Te() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_audio_files_display_waveform_enabled",
      );
    }
    function De() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_status_updates_consumption_enabled",
      );
    }
    function xe() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_admin_reply_enabled",
      );
    }
    function $e() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_admin_reply_receiver_enabled",
      );
    }
    function Pe() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "similar_channels_in_thread_on_follow_enabled",
      );
    }
    function Ne() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "similar_channels_in_channel_details_enabled",
      );
    }
    function Me() {
      return o("WAWebABProps").getABPropConfigValue(
        "similar_channels_max_limit",
      );
    }
    function we() {
      return o("WAWebABProps").getABPropConfigValue(
        "similar_channels_min_limit",
      );
    }
    function Ae() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_qpl_logging",
      );
    }
    function Fe() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_reactions_bottomsheet_tap_to_react_enabled",
      );
    }
    function Oe(e) {
      var t,
        n = o("WAWebStateUtils").unproxy(e);
      return (t = n.newsletterMetadata) != null && t.isSuspendedOrTerminated
        ? !1
        : o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
            "channels_updates_tab_swipe_actions_enabled",
          );
    }
    function Be(e) {
      if (e == null) return !1;
      var t = o("WAWebStateUtils").unproxy(e),
        n = t.size;
      return (
        n >=
        o("WAWebABProps").getABPropConfigValue(
          "channels_producer_insights_min_followers",
        )
      );
    }
    function We() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_producer_insights_hide_deltas",
      );
    }
    function qe() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_fetch_and_log_capabilities",
      );
    }
    function Ue() {
      return o("WAWebABProps").getABPropConfigValue(
        "whatsapp_vpv_logging_enabled",
      );
    }
    function Ve() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_vpv_logging_enabled",
      );
    }
    function He() {
      return Ue() && Ve();
    }
    function Ge() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_view_counts_vpv_logging_enabled",
      );
    }
    function ze() {
      return Ue() && Ge();
    }
    function je(e) {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        e,
      );
    }
    function Ke() {
      return je("wamo_sub_process_message_kill_switch");
    }
    function Qe() {
      return je("wamo_sub_messages_supported");
    }
    function Xe() {
      return je("wamo_sub_consumer_enabled_v2");
    }
    function Ye() {
      return je("wamo_sub_admin_enabled_v2");
    }
    function Je() {
      return Xe() || Ye();
    }
    function Ze() {
      return je("wamo_sub_logging_enabled_v2");
    }
    function et() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_album_v2_receiving_enabled",
      );
    }
    function tt() {
      return o("WAWebABProps").getABPropConfigValue(
        "snapl_newsletter_logging_media_id_placeholder_string",
      );
    }
    function nt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "newsletters_video_playback_wabba_logging_enabled",
      );
    }
    function rt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_video_play_logging_enabled",
      );
    }
    function ot() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "wa_web_channels_comet_video_player_enabled_v2",
      );
    }
    function at() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "channels_quick_forwarding_button_mode",
        ) === 1
      );
    }
    function it() {
      return (
        Ae() &&
        o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
          "channels_open_qpl_improvements_enabled",
        )
      );
    }
    function lt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_open_qpl_user_rid_logging_enabled",
      );
    }
    function st() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_is_multi_admin_lid_migration_enabled",
      );
    }
    function ut() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "newsletter_rcat_field_generating_enabled",
      );
    }
    function ct() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "channels_creation_entrypoint_in_updates_tab_enabled",
        ) === 1
      );
    }
    function dt() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_creation_entrypoint_in_directory_enabled",
      );
    }
    function mt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_invite_contacts_to_follow_consumer_enabled",
      );
    }
    function pt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_invite_contacts_to_follow_producer_enabled",
      );
    }
    function _t() {
      return (
        pt() &&
        o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
          "channels_invite_contacts_to_follow_sender_logging_enabled",
        )
      );
    }
    function ft() {
      return (
        mt() &&
        o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
          "channels_invite_contacts_to_follow_receiver_logging_enabled",
        )
      );
    }
    function gt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_invite_contacts_to_follow_receiver_invalid_message_drop_endabled",
      );
    }
    function ht() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_follower_invite_creation_modal_enabled",
      );
    }
    var yt = 64;
    function Ct() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_enforcement_logging_enabled",
      );
    }
    function bt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "dsa_26_receiver_enabled",
      );
    }
    function vt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "dsa_26_sender_enabled",
      );
    }
    function St() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "wa_web_channels_migrate_subscribers_to_followers_enabled",
      );
    }
    function Rt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_admin_profiles_receiver_enabled",
      );
    }
    function Lt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_admin_profiles_forwarding_to_chats_enabled",
      );
    }
    function Et() {
      return (
        o("WAWebABProps").getABPropConfigValue("channels_t_enabled") === !0
      );
    }
    function kt() {
      return o("WAWebABProps").getABPropConfigValue(
        "newsletter_status_receiver_enabled",
      );
    }
    function It() {
      return o("WAWebABProps").getABPropConfigValue(
        "newsletter_status_creation_enabled",
      );
    }
    function Tt() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_pulse_on_unread_badge_enabled",
      );
    }
    ((l.NewsletterABPropConfig = e),
      (l.getMaxSubscriberNumber = c),
      (l.isDSAEUOnlyNoticeEnabled = d),
      (l.isNewsletterReportUnlawfulContentEnabled = m),
      (l.isNewsletterAusOSAReportingEnabled = p),
      (l.isNewsletterUKOSAReportingEnabled = _),
      (l.isNewsletterUSNCIIReportingEnabled = f),
      (l.isDSA21ChannelReportingEnabled = g),
      (l.isNewsletterIntegrityQuestionsM1Enabled = h),
      (l.isChannelsQuestionsSearchEnabled = y),
      (l.isNewsletterEnforcementPolicyEducationEnabled = C),
      (l.isNewsletterViewCountEnabled = b),
      (l.isNewsletterViewCountSendEnabled = v),
      (l.isNewsletterCreationEnabled = S),
      (l.shouldShowAllReactionsForNewsletter = R),
      (l.isNewsletterReactionSettingsEnabled = L),
      (l.getNewsletterConsumerTos = E),
      (l.getNewsletterProducerTos = k),
      (l.getNewsletterAdminInviteTos = I),
      (l.getNewsletterProducerNux = T),
      (l.shouldHideProducerNewsletterDisclosure = D),
      (l.isNewsletterDirectoryEnabled = x),
      (l.getNewsletterDirectoryPageSize = $),
      (l.getNewsletterDirectorySearchDebounce = P),
      (l.isFilteringOutSubscribedNewslettersFromDirectoryListEnabled = N),
      (l.getNewsletterDirectoryPageRefreshInterval = M),
      (l.isNewsletterDirectoryCategoriesEnabled = w),
      (l.getNewslettersPerDirectoryCategoryLimit = A),
      (l.getNewsletterDirectoryCategoriesPreviewRefreshIntervalMs = F),
      (l.getDisplayNewsletterPerCategoryLimit = O),
      (l.isDirectoryCategoriesLoggingEnabled = B),
      (l.getRecommendedNewslettersRefreshInterval = W),
      (l.getNewsletterSubscriberListCacheRefreshMs = q),
      (l.isNewsletterMessageForwardSendingEnabled = U),
      (l.isNewsletterMessageForwardLoggingEnabled = V),
      (l.isNewsletterForwardToChannelLoggingEnabled = H),
      (l.isNavigationToForwardedNewsletterMessageEnabled = G),
      (l.isForwardToNewsletterEnabled = z),
      (l.isNewsletterForwardBottomButtonEnabled = j),
      (l.isNewsletterForwardCounterUIEnabled = K),
      (l.isNewsletterForwardCounterInfraEnabled = Q),
      (l.newsletterForwardCounterMaxSendAfterRandomTime = X),
      (l.isNewsletterForwardCounterBumpOwnChannelUpdatesForwardsEnabled = Y),
      (l.isNewsletterForwardCounterBumpForwardsToSelfEnabled = J),
      (l.isNewsletterForwardCounterBumpSecondOrderForwardsEnabled = Z),
      (l.NEWSLETTER_FORWARD_COUNTER_MAX_RETRIES = ee),
      (l.isNewsletterMessageEditingEnabled = te),
      (l.isNewsletterHideNewsUrlPreviewEnabled = ne),
      (l.getMaxMsgCountFromServer = re),
      (l.getPullMessageUpdatesThresholdSeconds = oe),
      (l.getRecommendedUnitRowCount = ae),
      (l.isNewsletterLinkShareLoggingEnabled = ie),
      (l.isNewsletterAdminContextCardEnabled = le),
      (l.isNewsletterMediaAlbumUploadEnabled = se),
      (l.isProactiveGapFillingEnabled = ue),
      (l.isNewsletterPTTReceivingEnabled = ce),
      (l.isNewsletterPTTSendingEnabled = de),
      (l.isNewsletterPTTLoggingEnabled = me),
      (l.isNewsletterPTVForwardingEnabled = pe),
      (l.isNewsletterPTVReceivingEnabled = _e),
      (l.isNewsletterPollsReceivingEnabled = fe),
      (l.isNewsletterPollsVotersEnabled = ge),
      (l.isNewsletterPollForwardingEnabled = he),
      (l.isNewsletterQuizReceiverEnabled = ye),
      (l.isNewsletterQuizSenderEnabled = Ce),
      (l.isStickerForwardedAttributionEnabled = be),
      (l.isStickerPackForwardedAttributionEnabled = ve),
      (l.isStickerPackMsgTypeRenderingEnabled = Se),
      (l.isStickerPackMsgTypeForwardingEnabled = Re),
      (l.getMaxNumberOfAdmins = Le),
      (l.isNewsletterAudioFileReceivingEnabled = Ee),
      (l.isNewsletterAudioFileSendingEnabled = ke),
      (l.isAudioFileWaveformSenderEnabled = Ie),
      (l.isAudioFileWaveformDisplayInNewslettersEnabled = Te),
      (l.isNewsletterLinksOnStatusConsumptionEnabled = De),
      (l.isNewsletterSendingAdminRepliesEnabled = xe),
      (l.isNewsletterReceivingAdminRepliesEnabled = $e),
      (l.isSimilarNewsletterInThreadEnabled = Pe),
      (l.isSimilarNewsletterInInfoDrawersEnabled = Ne),
      (l.getSimilarNewslettersMaxFetchLimit = Me),
      (l.getSimilarNewslettersMinDisplayLimit = we),
      (l.isNewsletterQPLLoggingEnabled = Ae),
      (l.isNewsletterQuickReactionsEnabled = Fe),
      (l.isNewsletterContextMenuEnabled = Oe),
      (l.canFetchProducerInsights = Be),
      (l.shouldHideProducerInsightsDeltas = We),
      (l.shouldFetchAndLogCapabilities = qe),
      (l.isVPVLoggingEnabled = Ue),
      (l.isNewsletterVPVLoggingEnabled = Ve),
      (l.isNewsletterDiscoveryVisibilityLoggingEnabled = He),
      (l.isChannelsViewCountsVPVLoggingEnabled = Ge),
      (l.isNewsletterVPVMessageVisibilityLoggingEnabled = ze),
      (l.isWamoSubMessagesProcessingEnabled = Ke),
      (l.isWamoSubMessagesSupported = Qe),
      (l.isWamoSubConsumerExperienceEnabled = Xe),
      (l.isWamoSubCreatorExperienceSupported = Ye),
      (l.isWamoSubExperienceEnabled = Je),
      (l.isWamoSubLoggingEnabled = Ze),
      (l.isNewsletterAlbumsV2ReceiverEnabled = et),
      (l.getNewsletterLoggingMediaID = tt),
      (l.isNewsletterVideoPlaybackLoggingEnabled = nt),
      (l.isNewsletterVideoPlayLoggingEnabled = rt),
      (l.isCometVideoPlayerEnabled = ot),
      (l.isNewsletterQuickForwardingEnabled = at),
      (l.isNewsletterOpenQPLImprovementsEnabled = it),
      (l.isNewsletterOpenQPLUserRidLoggingEnabled = lt),
      (l.isNewsletterMultiAdminLidMigrationEnabled = st),
      (l.isRCATFieldGenerationEnabled = ut),
      (l.isChannelCreationFromUpdatesTabEnabled = ct),
      (l.getChannelCreationFromDirectoryMode = dt),
      (l.isChannelInviteContactsToFollowConsumerEnabled = mt),
      (l.isChannelInviteContactsToFollowProducerEnabled = pt),
      (l.isChannelInviteContactsToFollowSenderLoggingEnabled = _t),
      (l.isChannelInviteContactsToFollowReceiverLoggingEnabled = ft),
      (l.isChannelInviteContactsToFollowInvalidDroppingEnabled = gt),
      (l.isChannelInviteContactsToFollowCreationModalEnabled = ht),
      (l.MAX_FOLLOWER_INVITES = yt),
      (l.isChannelEnforcementLoggingEnabled = Ct),
      (l.isChannelDSA26ReceiverEnabled = bt),
      (l.isChannelDSA26SenderEnabled = vt),
      (l.isNewsletterSubscriberMigrationEnabled = St),
      (l.isNewsletterAdminProfilesReceiverEnabled = Rt),
      (l.isNewsletterAdminProfilesForwardingEnabled = Lt),
      (l.isChannelsInChatListEnabled = Et),
      (l.isNewsletterStatusReceiverEnabled = kt),
      (l.isNewsletterStatusCreationEnabled = It),
      (l.isNewsletterTabPulseEnabled = Tt));
  },
  98,
);
