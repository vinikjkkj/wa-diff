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
    function b() {
      return (
        C() &&
        o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
          "channels_in_app_policy_detail_enabled",
        )
      );
    }
    function v(e) {
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
    function S() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_send_view_receipt_enabled",
      );
    }
    function R() {
      return (
        o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
        o("WAWebABProps").getABPropConfigValue("channels_creation_enabled") ===
          o("WAWebNewsletterCommonGatingUtils").NewsletterCompanionGating
            .Enabled
      );
    }
    function L(e) {
      var t;
      return (
        ((t = e.newsletterMetadata) == null
          ? void 0
          : t.reactionCodesSetting) ===
          o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.All &&
        E()
      );
    }
    function E() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_reactions_settings_enabled",
      );
    }
    function k() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebABProps").getABPropConfigValue(
            "newsletter_tos_notice_id_smb_web",
          )
        : o("WAWebABProps").getABPropConfigValue("newsletter_tos_notice_id");
    }
    function I() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebABProps").getABPropConfigValue(
            "newsletter_creation_tos_id_smb_web",
          )
        : o("WAWebABProps").getABPropConfigValue("newsletter_creation_tos_id");
    }
    function T() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebABProps").getABPropConfigValue(
            "newsletter_admin_invite_tos_id_smb_web",
          )
        : o("WAWebABProps").getABPropConfigValue(
            "newsletter_admin_invite_tos_id",
          );
    }
    function D() {
      return o("WAWebABProps").getABPropConfigValue(
        "newsletter_creation_nux_id",
      );
    }
    function x() {
      return !1;
    }
    function $() {
      return (
        o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
        o("WAWebABProps").getABPropConfigValue("channels_directory_enabled") ===
          e.Enabled
      );
    }
    function P() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_directory_page_size",
      );
    }
    function N() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_directory_search_debounce_ms",
      );
    }
    function M() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_filter_out_subscribed_in_directory_null_state",
      );
    }
    function w() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_directory_v2_cache_refresh_interval_ms",
      );
    }
    function A() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_directory_categories_enabled",
      );
    }
    function F() {
      return o("WAWebABProps").getABPropConfigValue(
        "directory_categories_newsletters_per_category_limit",
      );
    }
    function O() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_directory_categories_cache_refresh_interval_ms",
      );
    }
    function B() {
      return o("WAWebABProps").getABPropConfigValue(
        "directory_categories_display_newsletters_per_category_limit",
      );
    }
    function W() {
      return (
        A() &&
        o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
          "channels_directory_categories_logging_enabled",
        )
      );
    }
    function q() {
      return o("WAWebABProps").getABPropConfigValue(
        "recommended_channels_background_refresh",
      );
    }
    function U() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_followers_list_cache_refresh_milliseconds",
      );
    }
    function V() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_forward_to_chat_enabled",
      );
    }
    function H() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_forward_logging_v2_enabled",
      );
    }
    function G() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_to_channel_forwarding_logging_enabled",
      );
    }
    function z() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_forward_to_chat_v2_message_navigation_enabled",
      );
    }
    function j() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled();
    }
    function K() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_forward_bottom_button_enabled",
      );
    }
    function Q() {
      return o("WAWebABProps").getABPropConfigValue(
        "newsletter_forward_counter_ui_enabled",
      );
    }
    function X() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "newsletter_forward_counter_infra_enabled",
      );
    }
    function Y() {
      return o("WAWebABProps").getABPropConfigValue(
        "newsletter_forward_counter_max_send_after_random_time",
      );
    }
    function J() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "newsletter_forward_counter_bump_own_channel_updates_fowards",
      );
    }
    function Z() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "newsletter_forward_counter_bump_forwards_to_self",
      );
    }
    function ee() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "newsletter_forward_counter_bump_second_order_forwards",
      );
    }
    var te = 10;
    function ne() {
      return !0;
    }
    function re() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_hide_news_url_preview",
      );
    }
    function oe() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_max_messages_batch_pull",
      );
    }
    function ae() {
      return o("WAWebABProps").getABPropConfigValue(
        "channel_pull_message_updates_threshold_seconds",
      );
    }
    function ie() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_recommended_v3_ui_limit",
      );
    }
    function le() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_share_link_logging_enabled",
      );
    }
    function se(e) {
      return (
        e === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner ||
        e === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin
      );
    }
    function ue() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_send_album_enabled",
      );
    }
    function ce() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_proactive_message_gap_handling_enabled",
      );
    }
    function de() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_ptt_receiver_enabled",
      );
    }
    function me() {
      return (
        de() &&
        o("WAWebABProps").getABPropConfigValue("channels_ptt_sender_enabled")
      );
    }
    function pe() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_ptt_logging_enabled",
      );
    }
    function _e() {
      return (
        fe() &&
        o("WAWebABProps").getABPropConfigValue(
          "channels_ptv_forwarding_enabled",
        )
      );
    }
    function fe() {
      return (
        o("WAWebPtvGatingUtils").isPtvReceivingEnabled() &&
        o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
          "channels_ptv_receiving_enabled",
        )
      );
    }
    function ge() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_poll_receive_enabled",
      );
    }
    function he() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_poll_voter_list_enabled",
      );
    }
    function ye() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_poll_forwarding_enabled",
      );
    }
    function Ce() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_quiz_receiving_enabled",
      );
    }
    function be() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_quiz_sending_enabled",
      );
    }
    function ve() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_sticker_forwarded_attribution_ui_enabled",
      );
    }
    function Se() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_sticker_pack_forwarded_attribution_ui_enabled",
      );
    }
    function Re() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_sticker_pack_rendering",
      );
    }
    function Le() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_sticker_pack_forwarding",
      );
    }
    function Ee() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_multi_admin_max_admin_count",
      );
    }
    function ke() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_audio_files_receiver_enabled",
      );
    }
    function Ie() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_audio_files_sender_enabled",
      );
    }
    function Te() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_audio_files_sender_waveform_enabled",
      );
    }
    function De() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_audio_files_display_waveform_enabled",
      );
    }
    function xe() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_status_updates_consumption_enabled",
      );
    }
    function $e() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_admin_reply_enabled",
      );
    }
    function Pe() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_admin_reply_receiver_enabled",
      );
    }
    function Ne() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "similar_channels_in_thread_on_follow_enabled",
      );
    }
    function Me() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "similar_channels_in_channel_details_enabled",
      );
    }
    function we() {
      return o("WAWebABProps").getABPropConfigValue(
        "similar_channels_max_limit",
      );
    }
    function Ae() {
      return o("WAWebABProps").getABPropConfigValue(
        "similar_channels_min_limit",
      );
    }
    function Fe() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_qpl_logging",
      );
    }
    function Oe() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_reactions_bottomsheet_tap_to_react_enabled",
      );
    }
    function Be(e) {
      var t,
        n = o("WAWebStateUtils").unproxy(e);
      return (t = n.newsletterMetadata) != null && t.isSuspendedOrTerminated
        ? !1
        : o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
            "channels_updates_tab_swipe_actions_enabled",
          );
    }
    function We(e) {
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
    function qe() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_producer_insights_hide_deltas",
      );
    }
    function Ue() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_fetch_and_log_capabilities",
      );
    }
    function Ve() {
      return o("WAWebABProps").getABPropConfigValue(
        "whatsapp_vpv_logging_enabled",
      );
    }
    function He() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_vpv_logging_enabled",
      );
    }
    function Ge() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_views_vpv_definition_enabled",
      );
    }
    function ze() {
      return Ve() && He();
    }
    function je() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_view_counts_vpv_logging_enabled",
      );
    }
    function Ke() {
      return Ve() && je();
    }
    function Qe(e) {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        e,
      );
    }
    function Xe() {
      return Qe("wamo_sub_process_message_kill_switch");
    }
    function Ye() {
      return Qe("wamo_sub_messages_supported");
    }
    function Je() {
      return Qe("wamo_sub_consumer_enabled_v2");
    }
    function Ze() {
      return Qe("wamo_sub_admin_enabled_v2");
    }
    function et() {
      return Je() || Ze();
    }
    function tt() {
      return Qe("wamo_sub_logging_enabled_v2");
    }
    function nt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_album_v2_receiving_enabled",
      );
    }
    function rt() {
      return o("WAWebABProps").getABPropConfigValue(
        "snapl_newsletter_logging_media_id_placeholder_string",
      );
    }
    function ot() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "newsletters_video_playback_wabba_logging_enabled",
      );
    }
    function at() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_video_play_logging_enabled",
      );
    }
    function it() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "wa_web_channels_comet_video_player_enabled_v2",
      );
    }
    function lt() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "channels_quick_forwarding_button_mode",
        ) === 1
      );
    }
    function st() {
      return (
        Fe() &&
        o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
          "channels_open_qpl_improvements_enabled",
        )
      );
    }
    function ut() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_open_qpl_user_rid_logging_enabled",
      );
    }
    function ct() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_is_multi_admin_lid_migration_enabled",
      );
    }
    function dt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "newsletter_rcat_field_generating_enabled",
      );
    }
    function mt() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "channels_creation_entrypoint_in_updates_tab_enabled",
        ) === 1
      );
    }
    function pt() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_creation_entrypoint_in_directory_enabled",
      );
    }
    function _t() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_invite_contacts_to_follow_consumer_enabled",
      );
    }
    function ft() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_invite_contacts_to_follow_producer_enabled",
      );
    }
    function gt() {
      return (
        ft() &&
        o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
          "channels_invite_contacts_to_follow_sender_logging_enabled",
        )
      );
    }
    function ht() {
      return (
        _t() &&
        o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
          "channels_invite_contacts_to_follow_receiver_logging_enabled",
        )
      );
    }
    function yt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_invite_contacts_to_follow_receiver_invalid_message_drop_endabled",
      );
    }
    function Ct() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_follower_invite_creation_modal_enabled",
      );
    }
    var bt = 64;
    function vt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_enforcement_logging_enabled",
      );
    }
    function St() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "dsa_26_receiver_enabled",
      );
    }
    function Rt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "dsa_26_sender_enabled",
      );
    }
    function Lt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_admin_profiles_receiver_enabled",
      );
    }
    function Et() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_admin_profiles_forwarding_to_chats_enabled",
      );
    }
    function kt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_admin_profiles_list_enabled",
      );
    }
    function It() {
      return (
        o("WAWebABProps").getABPropConfigValue("channels_t_enabled") === !0
      );
    }
    function Tt() {
      return o("WAWebABProps").getABPropConfigValue(
        "newsletter_status_receiver_enabled",
      );
    }
    function Dt() {
      return o("WAWebABProps").getABPropConfigValue(
        "newsletter_status_creation_enabled",
      );
    }
    function xt() {
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
      (l.isNewsletterQuestionsSearchEnabled = y),
      (l.isNewsletterEnforcementPolicyEducationEnabled = C),
      (l.isNewsletterEnforcementPolicyBottomSheetEnabled = b),
      (l.isNewsletterViewCountEnabled = v),
      (l.isNewsletterViewCountSendEnabled = S),
      (l.isNewsletterCreationEnabled = R),
      (l.shouldShowAllReactionsForNewsletter = L),
      (l.isNewsletterReactionSettingsEnabled = E),
      (l.getNewsletterConsumerTos = k),
      (l.getNewsletterProducerTos = I),
      (l.getNewsletterAdminInviteTos = T),
      (l.getNewsletterProducerNux = D),
      (l.shouldHideProducerNewsletterDisclosure = x),
      (l.isNewsletterDirectoryEnabled = $),
      (l.getNewsletterDirectoryPageSize = P),
      (l.getNewsletterDirectorySearchDebounce = N),
      (l.isFilteringOutSubscribedNewslettersFromDirectoryListEnabled = M),
      (l.getNewsletterDirectoryPageRefreshInterval = w),
      (l.isNewsletterDirectoryCategoriesEnabled = A),
      (l.getNewslettersPerDirectoryCategoryLimit = F),
      (l.getNewsletterDirectoryCategoriesPreviewRefreshIntervalMs = O),
      (l.getDisplayNewsletterPerCategoryLimit = B),
      (l.isDirectoryCategoriesLoggingEnabled = W),
      (l.getRecommendedNewslettersRefreshInterval = q),
      (l.getNewsletterSubscriberListCacheRefreshMs = U),
      (l.isNewsletterMessageForwardSendingEnabled = V),
      (l.isNewsletterMessageForwardLoggingEnabled = H),
      (l.isNewsletterForwardToChannelLoggingEnabled = G),
      (l.isNavigationToForwardedNewsletterMessageEnabled = z),
      (l.isForwardToNewsletterEnabled = j),
      (l.isNewsletterForwardBottomButtonEnabled = K),
      (l.isNewsletterForwardCounterUIEnabled = Q),
      (l.isNewsletterForwardCounterInfraEnabled = X),
      (l.newsletterForwardCounterMaxSendAfterRandomTime = Y),
      (l.isNewsletterForwardCounterBumpOwnChannelUpdatesForwardsEnabled = J),
      (l.isNewsletterForwardCounterBumpForwardsToSelfEnabled = Z),
      (l.isNewsletterForwardCounterBumpSecondOrderForwardsEnabled = ee),
      (l.NEWSLETTER_FORWARD_COUNTER_MAX_RETRIES = te),
      (l.isNewsletterMessageEditingEnabled = ne),
      (l.isNewsletterHideNewsUrlPreviewEnabled = re),
      (l.getMaxMsgCountFromServer = oe),
      (l.getPullMessageUpdatesThresholdSeconds = ae),
      (l.getRecommendedUnitRowCount = ie),
      (l.isNewsletterLinkShareLoggingEnabled = le),
      (l.isNewsletterAdminContextCardEnabled = se),
      (l.isNewsletterMediaAlbumUploadEnabled = ue),
      (l.isProactiveGapFillingEnabled = ce),
      (l.isNewsletterPTTReceivingEnabled = de),
      (l.isNewsletterPTTSendingEnabled = me),
      (l.isNewsletterPTTLoggingEnabled = pe),
      (l.isNewsletterPTVForwardingEnabled = _e),
      (l.isNewsletterPTVReceivingEnabled = fe),
      (l.isNewsletterPollsReceivingEnabled = ge),
      (l.isNewsletterPollsVotersEnabled = he),
      (l.isNewsletterPollForwardingEnabled = ye),
      (l.isNewsletterQuizReceiverEnabled = Ce),
      (l.isNewsletterQuizSenderEnabled = be),
      (l.isStickerForwardedAttributionEnabled = ve),
      (l.isStickerPackForwardedAttributionEnabled = Se),
      (l.isStickerPackMsgTypeRenderingEnabled = Re),
      (l.isStickerPackMsgTypeForwardingEnabled = Le),
      (l.getMaxNumberOfAdmins = Ee),
      (l.isNewsletterAudioFileReceivingEnabled = ke),
      (l.isNewsletterAudioFileSendingEnabled = Ie),
      (l.isAudioFileWaveformSenderEnabled = Te),
      (l.isAudioFileWaveformDisplayInNewslettersEnabled = De),
      (l.isNewsletterLinksOnStatusConsumptionEnabled = xe),
      (l.isNewsletterSendingAdminRepliesEnabled = $e),
      (l.isNewsletterReceivingAdminRepliesEnabled = Pe),
      (l.isSimilarNewsletterInThreadEnabled = Ne),
      (l.isSimilarNewsletterInInfoDrawersEnabled = Me),
      (l.getSimilarNewslettersMaxFetchLimit = we),
      (l.getSimilarNewslettersMinDisplayLimit = Ae),
      (l.isNewsletterQPLLoggingEnabled = Fe),
      (l.isNewsletterQuickReactionsEnabled = Oe),
      (l.isNewsletterContextMenuEnabled = Be),
      (l.canFetchProducerInsights = We),
      (l.shouldHideProducerInsightsDeltas = qe),
      (l.shouldFetchAndLogCapabilities = Ue),
      (l.isVPVLoggingEnabled = Ve),
      (l.isNewsletterVPVLoggingEnabled = He),
      (l.isNewsletterViewsVPVDefinitionEnabled = Ge),
      (l.isNewsletterDiscoveryVisibilityLoggingEnabled = ze),
      (l.isChannelsViewCountsVPVLoggingEnabled = je),
      (l.isNewsletterVPVMessageVisibilityLoggingEnabled = Ke),
      (l.isWamoSubMessagesProcessingEnabled = Xe),
      (l.isWamoSubMessagesSupported = Ye),
      (l.isWamoSubConsumerExperienceEnabled = Je),
      (l.isWamoSubCreatorExperienceSupported = Ze),
      (l.isWamoSubExperienceEnabled = et),
      (l.isWamoSubLoggingEnabled = tt),
      (l.isNewsletterAlbumsV2ReceiverEnabled = nt),
      (l.getNewsletterLoggingMediaID = rt),
      (l.isNewsletterVideoPlaybackLoggingEnabled = ot),
      (l.isNewsletterVideoPlayLoggingEnabled = at),
      (l.isCometVideoPlayerEnabled = it),
      (l.isNewsletterQuickForwardingEnabled = lt),
      (l.isNewsletterOpenQPLImprovementsEnabled = st),
      (l.isNewsletterOpenQPLUserRidLoggingEnabled = ut),
      (l.isNewsletterMultiAdminLidMigrationEnabled = ct),
      (l.isRCATFieldGenerationEnabled = dt),
      (l.isChannelCreationFromUpdatesTabEnabled = mt),
      (l.getChannelCreationFromDirectoryMode = pt),
      (l.isChannelInviteContactsToFollowConsumerEnabled = _t),
      (l.isChannelInviteContactsToFollowProducerEnabled = ft),
      (l.isChannelInviteContactsToFollowSenderLoggingEnabled = gt),
      (l.isChannelInviteContactsToFollowReceiverLoggingEnabled = ht),
      (l.isChannelInviteContactsToFollowInvalidDroppingEnabled = yt),
      (l.isChannelInviteContactsToFollowCreationModalEnabled = Ct),
      (l.MAX_FOLLOWER_INVITES = bt),
      (l.isChannelEnforcementLoggingEnabled = vt),
      (l.isChannelDSA26ReceiverEnabled = St),
      (l.isChannelDSA26SenderEnabled = Rt),
      (l.isNewsletterAdminProfilesReceiverEnabled = Lt),
      (l.isNewsletterAdminProfilesForwardingEnabled = Et),
      (l.isNewsletterAdminProfilesListEnabled = kt),
      (l.isChannelsInChatListEnabled = It),
      (l.isNewsletterStatusReceiverEnabled = Tt),
      (l.isNewsletterStatusCreationEnabled = Dt),
      (l.isNewsletterTabPulseEnabled = xt));
  },
  98,
);
