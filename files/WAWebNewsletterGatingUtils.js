__d(
  "WAWebNewsletterGatingUtils",
  [
    "$InternalEnum",
    "WAWebABProps",
    "WAWebCommonNewsletterEnums",
    "WAWebMobilePlatforms",
    "WAWebNewsletterCommonGatingUtils",
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
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_questions_integrity_m1_enabled",
      );
    }
    function y() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_questions_search_enabled",
      );
    }
    function C() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_questions_responses_drawer_loading_shimmer_enabled",
      );
    }
    function b() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_enforcement_policy_education_enabled",
      );
    }
    function v() {
      return (
        b() &&
        o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
          "channels_in_app_policy_detail_enabled",
        )
      );
    }
    function S() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "server_driven_copy_m2",
      );
    }
    function R(e) {
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
    function L() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_send_view_receipt_enabled",
      );
    }
    function E() {
      return (
        o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
        o("WAWebABProps").getABPropConfigValue("channels_creation_enabled") ===
          o("WAWebNewsletterCommonGatingUtils").NewsletterCompanionGating
            .Enabled
      );
    }
    function k(e) {
      var t;
      return (
        ((t = e.newsletterMetadata) == null
          ? void 0
          : t.reactionCodesSetting) ===
          o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.All &&
        I()
      );
    }
    function I() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_reactions_settings_enabled",
      );
    }
    function T() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebABProps").getABPropConfigValue(
            "newsletter_tos_notice_id_smb_web",
          )
        : o("WAWebABProps").getABPropConfigValue("newsletter_tos_notice_id");
    }
    function D() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebABProps").getABPropConfigValue(
            "newsletter_creation_tos_id_smb_web",
          )
        : o("WAWebABProps").getABPropConfigValue("newsletter_creation_tos_id");
    }
    function x() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebABProps").getABPropConfigValue(
            "newsletter_admin_invite_tos_id_smb_web",
          )
        : o("WAWebABProps").getABPropConfigValue(
            "newsletter_admin_invite_tos_id",
          );
    }
    function $() {
      return o("WAWebABProps").getABPropConfigValue(
        "newsletter_creation_nux_id",
      );
    }
    function P() {
      return !1;
    }
    function N() {
      return (
        o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
        o("WAWebABProps").getABPropConfigValue("channels_directory_enabled") ===
          e.Enabled
      );
    }
    function M() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_directory_page_size",
      );
    }
    function w() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_directory_search_debounce_ms",
      );
    }
    function A() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_filter_out_subscribed_in_directory_null_state",
      );
    }
    function F() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_directory_v2_cache_refresh_interval_ms",
      );
    }
    function O() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_directory_categories_enabled",
      );
    }
    function B() {
      return o("WAWebABProps").getABPropConfigValue(
        "directory_categories_newsletters_per_category_limit",
      );
    }
    function W() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_directory_categories_cache_refresh_interval_ms",
      );
    }
    function q() {
      return o("WAWebABProps").getABPropConfigValue(
        "directory_categories_display_newsletters_per_category_limit",
      );
    }
    function U() {
      return (
        O() &&
        o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
          "channels_directory_categories_logging_enabled",
        )
      );
    }
    function V() {
      return o("WAWebABProps").getABPropConfigValue(
        "recommended_channels_background_refresh",
      );
    }
    function H() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_followers_list_cache_refresh_milliseconds",
      );
    }
    function G() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_forward_to_chat_enabled",
      );
    }
    function z() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_forward_logging_v2_enabled",
      );
    }
    function j() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_to_channel_forwarding_logging_enabled",
      );
    }
    function K() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_forward_to_chat_v2_message_navigation_enabled",
      );
    }
    function Q() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled();
    }
    function X() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_forward_bottom_button_enabled",
      );
    }
    function Y() {
      return o("WAWebABProps").getABPropConfigValue(
        "newsletter_forward_counter_ui_enabled",
      );
    }
    function J() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "newsletter_forward_counter_infra_enabled",
      );
    }
    function Z() {
      return o("WAWebABProps").getABPropConfigValue(
        "newsletter_forward_counter_max_send_after_random_time",
      );
    }
    function ee() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "newsletter_forward_counter_bump_own_channel_updates_fowards",
      );
    }
    function te() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "newsletter_forward_counter_bump_forwards_to_self",
      );
    }
    function ne() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "newsletter_forward_counter_bump_second_order_forwards",
      );
    }
    var re = 10;
    function oe() {
      return !0;
    }
    function ae() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_hide_news_url_preview",
      );
    }
    function ie() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_max_messages_batch_pull",
      );
    }
    function le() {
      return o("WAWebABProps").getABPropConfigValue(
        "channel_pull_message_updates_threshold_seconds",
      );
    }
    function se() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_recommended_v3_ui_limit",
      );
    }
    function ue() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_share_link_logging_enabled",
      );
    }
    function ce(e) {
      return (
        e === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner ||
        e === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin
      );
    }
    function de() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_send_album_enabled",
      );
    }
    function me() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_proactive_message_gap_handling_enabled",
      );
    }
    function pe() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_ptt_receiver_enabled",
      );
    }
    function _e() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_ptt_logging_enabled",
      );
    }
    function fe() {
      return (
        ge() &&
        o("WAWebABProps").getABPropConfigValue(
          "channels_ptv_forwarding_enabled",
        )
      );
    }
    function ge() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_ptv_receiving_enabled",
      );
    }
    function he() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_poll_receive_enabled",
      );
    }
    function ye() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_poll_voter_list_enabled",
      );
    }
    function Ce() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_poll_forwarding_enabled",
      );
    }
    function be() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_quiz_receiving_enabled",
      );
    }
    function ve() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_quiz_sending_enabled",
      );
    }
    function Se() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_sticker_forwarded_attribution_ui_enabled",
      );
    }
    function Re() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_sticker_pack_forwarded_attribution_ui_enabled",
      );
    }
    function Le() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_sticker_pack_rendering",
      );
    }
    function Ee() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_sticker_pack_forwarding",
      );
    }
    function ke() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_multi_admin_max_admin_count",
      );
    }
    function Ie() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_audio_files_receiver_enabled",
      );
    }
    function Te() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_audio_files_sender_enabled",
      );
    }
    function De() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_audio_files_sender_waveform_enabled",
      );
    }
    function xe() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_audio_files_display_waveform_enabled",
      );
    }
    function $e() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_status_updates_consumption_enabled",
      );
    }
    function Pe() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_admin_reply_enabled",
      );
    }
    function Ne() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_admin_reply_receiver_enabled",
      );
    }
    function Me() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "similar_channels_in_thread_on_follow_enabled",
      );
    }
    function we() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "similar_channels_in_channel_details_enabled",
      );
    }
    function Ae() {
      return o("WAWebABProps").getABPropConfigValue(
        "similar_channels_max_limit",
      );
    }
    function Fe() {
      return o("WAWebABProps").getABPropConfigValue(
        "similar_channels_min_limit",
      );
    }
    function Oe() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_qpl_logging",
      );
    }
    function Be() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_reactions_bottomsheet_tap_to_react_enabled",
      );
    }
    function We(e) {
      var t,
        n = o("WAWebStateUtils").unproxy(e);
      return (t = n.newsletterMetadata) != null && t.isSuspendedOrTerminated
        ? !1
        : o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
            "channels_updates_tab_swipe_actions_enabled",
          );
    }
    function qe(e) {
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
    function Ue() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_producer_insights_hide_deltas",
      );
    }
    function Ve() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_fetch_and_log_capabilities",
      );
    }
    function He() {
      return o("WAWebABProps").getABPropConfigValue(
        "whatsapp_vpv_logging_enabled",
      );
    }
    function Ge() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_vpv_logging_enabled",
      );
    }
    function ze() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_views_vpv_definition_enabled",
      );
    }
    function je() {
      return He() && Ge();
    }
    function Ke() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_view_counts_vpv_logging_enabled",
      );
    }
    function Qe() {
      return He() && Ke();
    }
    function Xe(e) {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        e,
      );
    }
    function Ye() {
      return Xe("wamo_sub_process_message_kill_switch");
    }
    function Je() {
      return Xe("wamo_sub_messages_supported");
    }
    function Ze() {
      return Xe("wamo_sub_consumer_enabled_v2");
    }
    function et() {
      return Xe("wamo_sub_admin_enabled_v2");
    }
    function tt() {
      return Ze() || et();
    }
    function nt() {
      return Xe("wamo_sub_logging_enabled_v2");
    }
    function rt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_album_v2_receiving_enabled",
      );
    }
    function ot() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_album_sender_enabled",
      );
    }
    function at(e) {
      return e
        ? o("WAWebABProps").getABPropConfigValue(
            "album_v2_min_items_to_send_album_with_caption",
          )
        : o("WAWebABProps").getABPropConfigValue(
            "album_v2_min_items_to_send_as_album_enabled",
          );
    }
    function it() {
      return o("WAWebABProps").getABPropConfigValue(
        "snapl_newsletter_logging_media_id_placeholder_string",
      );
    }
    function lt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "newsletters_video_playback_wabba_logging_enabled",
      );
    }
    function st() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_video_play_logging_enabled",
      );
    }
    function ut() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "wa_web_channels_comet_video_player_enabled_v2",
      );
    }
    function ct() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "channels_quick_forwarding_button_mode",
        ) === 1
      );
    }
    function dt() {
      return (
        Oe() &&
        o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
          "channels_open_qpl_improvements_enabled",
        )
      );
    }
    function mt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_open_qpl_user_rid_logging_enabled",
      );
    }
    function pt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "newsletter_rcat_field_generating_enabled",
      );
    }
    function _t() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "channels_creation_entrypoint_in_updates_tab_enabled",
        ) === 1
      );
    }
    function ft() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_creation_entrypoint_in_directory_enabled",
      );
    }
    function gt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_invite_contacts_to_follow_consumer_enabled",
      );
    }
    function ht() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_invite_contacts_to_follow_producer_enabled",
      );
    }
    function yt() {
      return (
        ht() &&
        o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
          "channels_invite_contacts_to_follow_sender_logging_enabled",
        )
      );
    }
    function Ct() {
      return (
        gt() &&
        o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
          "channels_invite_contacts_to_follow_receiver_logging_enabled",
        )
      );
    }
    function bt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_invite_contacts_to_follow_receiver_invalid_message_drop_endabled",
      );
    }
    function vt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_follower_invite_creation_modal_enabled",
      );
    }
    var St = 64;
    function Rt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_enforcement_logging_enabled",
      );
    }
    function Lt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "dsa_26_receiver_enabled",
      );
    }
    function Et() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "dsa_26_sender_enabled",
      );
    }
    function kt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_admin_profiles_receiver_enabled",
      );
    }
    function It() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_admin_profiles_forwarding_to_chats_enabled",
      );
    }
    function Tt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_admin_profiles_list_enabled",
      );
    }
    function Dt() {
      return (
        o("WAWebABProps").getABPropConfigValue("channels_t_enabled") === !0
      );
    }
    function xt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_status_consumption",
      );
    }
    function $t() {
      return (
        xt() &&
        o("WAWebABProps").getABPropConfigValue(
          "channel_status_resharing_enabled",
        )
      );
    }
    function Pt() {
      return (
        xt() &&
        o("WAWebABProps").getABPropConfigValue(
          "channel_status_forwarding_enabled",
        )
      );
    }
    function Nt(e) {
      var t, n;
      return e == null ||
        !o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
          "channel_status_creation",
        ) ||
        !e.iAmAdminOrOwner() ||
        e.isSuspendedOrTerminated
        ? !1
        : ((t =
            (n = e.capabilities) == null
              ? void 0
              : n.has(
                  o("WAWebCommonNewsletterEnums").NewsletterCapability
                    .CHANNEL_STATUS_PRODUCER,
                )) != null
            ? t
            : !1) &&
            o("WAWebABProps").getABPropConfigValue(
              "channels_capabilities_enabled",
            );
    }
    var Mt = n("$InternalEnum")({
      Disabled: 0,
      ProfileRing: 1,
      ThreadRing: 2,
      AllEntrypoints: 3,
    });
    function wt(e) {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "channels_status_consumption_entrypoints",
        ) >= e
      );
    }
    function At() {
      return xt() && wt(Mt.ProfileRing);
    }
    function Ft() {
      return xt() && wt(Mt.ThreadRing);
    }
    function Ot() {
      return xt() && wt(Mt.AllEntrypoints);
    }
    function Bt() {
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
      (l.isNewsletterQuestionResponsesShimmerEnabled = C),
      (l.isNewsletterEnforcementPolicyEducationEnabled = b),
      (l.isNewsletterEnforcementPolicyBottomSheetEnabled = v),
      (l.isNewsletterServerDrivenCopyM2Enabled = S),
      (l.isNewsletterViewCountEnabled = R),
      (l.isNewsletterViewCountSendEnabled = L),
      (l.isNewsletterCreationEnabled = E),
      (l.shouldShowAllReactionsForNewsletter = k),
      (l.isNewsletterReactionSettingsEnabled = I),
      (l.getNewsletterConsumerTos = T),
      (l.getNewsletterProducerTos = D),
      (l.getNewsletterAdminInviteTos = x),
      (l.getNewsletterProducerNux = $),
      (l.shouldHideProducerNewsletterDisclosure = P),
      (l.isNewsletterDirectoryEnabled = N),
      (l.getNewsletterDirectoryPageSize = M),
      (l.getNewsletterDirectorySearchDebounce = w),
      (l.isFilteringOutSubscribedNewslettersFromDirectoryListEnabled = A),
      (l.getNewsletterDirectoryPageRefreshInterval = F),
      (l.isNewsletterDirectoryCategoriesEnabled = O),
      (l.getNewslettersPerDirectoryCategoryLimit = B),
      (l.getNewsletterDirectoryCategoriesPreviewRefreshIntervalMs = W),
      (l.getDisplayNewsletterPerCategoryLimit = q),
      (l.isDirectoryCategoriesLoggingEnabled = U),
      (l.getRecommendedNewslettersRefreshInterval = V),
      (l.getNewsletterSubscriberListCacheRefreshMs = H),
      (l.isNewsletterMessageForwardSendingEnabled = G),
      (l.isNewsletterMessageForwardLoggingEnabled = z),
      (l.isNewsletterForwardToChannelLoggingEnabled = j),
      (l.isNavigationToForwardedNewsletterMessageEnabled = K),
      (l.isForwardToNewsletterEnabled = Q),
      (l.isNewsletterForwardBottomButtonEnabled = X),
      (l.isNewsletterForwardCounterUIEnabled = Y),
      (l.isNewsletterForwardCounterInfraEnabled = J),
      (l.newsletterForwardCounterMaxSendAfterRandomTime = Z),
      (l.isNewsletterForwardCounterBumpOwnChannelUpdatesForwardsEnabled = ee),
      (l.isNewsletterForwardCounterBumpForwardsToSelfEnabled = te),
      (l.isNewsletterForwardCounterBumpSecondOrderForwardsEnabled = ne),
      (l.NEWSLETTER_FORWARD_COUNTER_MAX_RETRIES = re),
      (l.isNewsletterMessageEditingEnabled = oe),
      (l.isNewsletterHideNewsUrlPreviewEnabled = ae),
      (l.getMaxMsgCountFromServer = ie),
      (l.getPullMessageUpdatesThresholdSeconds = le),
      (l.getRecommendedUnitRowCount = se),
      (l.isNewsletterLinkShareLoggingEnabled = ue),
      (l.isNewsletterAdminContextCardEnabled = ce),
      (l.isNewsletterMediaAlbumUploadEnabled = de),
      (l.isProactiveGapFillingEnabled = me),
      (l.isNewsletterPTTReceivingEnabled = pe),
      (l.isNewsletterPTTLoggingEnabled = _e),
      (l.isNewsletterPTVForwardingEnabled = fe),
      (l.isNewsletterPTVReceivingEnabled = ge),
      (l.isNewsletterPollsReceivingEnabled = he),
      (l.isNewsletterPollsVotersEnabled = ye),
      (l.isNewsletterPollForwardingEnabled = Ce),
      (l.isNewsletterQuizReceiverEnabled = be),
      (l.isNewsletterQuizSenderEnabled = ve),
      (l.isStickerForwardedAttributionEnabled = Se),
      (l.isStickerPackForwardedAttributionEnabled = Re),
      (l.isStickerPackMsgTypeRenderingEnabled = Le),
      (l.isStickerPackMsgTypeForwardingEnabled = Ee),
      (l.getMaxNumberOfAdmins = ke),
      (l.isNewsletterAudioFileReceivingEnabled = Ie),
      (l.isNewsletterAudioFileSendingEnabled = Te),
      (l.isAudioFileWaveformSenderEnabled = De),
      (l.isAudioFileWaveformDisplayInNewslettersEnabled = xe),
      (l.isNewsletterLinksOnStatusConsumptionEnabled = $e),
      (l.isNewsletterSendingAdminRepliesEnabled = Pe),
      (l.isNewsletterReceivingAdminRepliesEnabled = Ne),
      (l.isSimilarNewsletterInThreadEnabled = Me),
      (l.isSimilarNewsletterInInfoDrawersEnabled = we),
      (l.getSimilarNewslettersMaxFetchLimit = Ae),
      (l.getSimilarNewslettersMinDisplayLimit = Fe),
      (l.isNewsletterQPLLoggingEnabled = Oe),
      (l.isNewsletterQuickReactionsEnabled = Be),
      (l.isNewsletterContextMenuEnabled = We),
      (l.canFetchProducerInsights = qe),
      (l.shouldHideProducerInsightsDeltas = Ue),
      (l.shouldFetchAndLogCapabilities = Ve),
      (l.isVPVLoggingEnabled = He),
      (l.isNewsletterVPVLoggingEnabled = Ge),
      (l.isNewsletterViewsVPVDefinitionEnabled = ze),
      (l.isNewsletterDiscoveryVisibilityLoggingEnabled = je),
      (l.isChannelsViewCountsVPVLoggingEnabled = Ke),
      (l.isNewsletterVPVMessageVisibilityLoggingEnabled = Qe),
      (l.isWamoSubMessagesProcessingEnabled = Ye),
      (l.isWamoSubMessagesSupported = Je),
      (l.isWamoSubConsumerExperienceEnabled = Ze),
      (l.isWamoSubCreatorExperienceSupported = et),
      (l.isWamoSubExperienceEnabled = tt),
      (l.isWamoSubLoggingEnabled = nt),
      (l.isNewsletterAlbumsV2ReceiverEnabled = rt),
      (l.isNewsletterAlbumsV2SenderEnabled = ot),
      (l.getNewsletterAlbumsV2MinItemsToSend = at),
      (l.getNewsletterLoggingMediaID = it),
      (l.isNewsletterVideoPlaybackLoggingEnabled = lt),
      (l.isNewsletterVideoPlayLoggingEnabled = st),
      (l.isCometVideoPlayerEnabled = ut),
      (l.isNewsletterQuickForwardingEnabled = ct),
      (l.isNewsletterOpenQPLImprovementsEnabled = dt),
      (l.isNewsletterOpenQPLUserRidLoggingEnabled = mt),
      (l.isRCATFieldGenerationEnabled = pt),
      (l.isChannelCreationFromUpdatesTabEnabled = _t),
      (l.getChannelCreationFromDirectoryMode = ft),
      (l.isChannelInviteContactsToFollowConsumerEnabled = gt),
      (l.isChannelInviteContactsToFollowProducerEnabled = ht),
      (l.isChannelInviteContactsToFollowSenderLoggingEnabled = yt),
      (l.isChannelInviteContactsToFollowReceiverLoggingEnabled = Ct),
      (l.isChannelInviteContactsToFollowInvalidDroppingEnabled = bt),
      (l.isChannelInviteContactsToFollowCreationModalEnabled = vt),
      (l.MAX_FOLLOWER_INVITES = St),
      (l.isChannelEnforcementLoggingEnabled = Rt),
      (l.isChannelDSA26ReceiverEnabled = Lt),
      (l.isChannelDSA26SenderEnabled = Et),
      (l.isNewsletterAdminProfilesReceiverEnabled = kt),
      (l.isNewsletterAdminProfilesForwardingEnabled = It),
      (l.isNewsletterAdminProfilesListEnabled = Tt),
      (l.isChannelsInChatListEnabled = Dt),
      (l.isNewsletterStatusReceiverEnabled = xt),
      (l.isNewsletterStatusReshareEnabled = $t),
      (l.isNewsletterStatusForwardEnabled = Pt),
      (l.isNewsletterStatusCreationEnabled = Nt),
      (l.isNewsletterStatusProfileRingEnabled = At),
      (l.isNewsletterStatusThreadRingEnabled = Ft),
      (l.isNewsletterStatusAllEntrypointsEnabled = Ot),
      (l.isNewsletterTabPulseEnabled = Bt));
  },
  98,
);
