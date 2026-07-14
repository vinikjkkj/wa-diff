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
    function S(e) {
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
    function R() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_send_view_receipt_enabled",
      );
    }
    function L() {
      return (
        o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
        o("WAWebABProps").getABPropConfigValue("channels_creation_enabled") ===
          o("WAWebNewsletterCommonGatingUtils").NewsletterCompanionGating
            .Enabled
      );
    }
    function E(e) {
      var t;
      return (
        ((t = e.newsletterMetadata) == null
          ? void 0
          : t.reactionCodesSetting) ===
          o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.All &&
        k()
      );
    }
    function k() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_reactions_settings_enabled",
      );
    }
    function I() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebABProps").getABPropConfigValue(
            "newsletter_tos_notice_id_smb_web",
          )
        : o("WAWebABProps").getABPropConfigValue("newsletter_tos_notice_id");
    }
    function T() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebABProps").getABPropConfigValue(
            "newsletter_creation_tos_id_smb_web",
          )
        : o("WAWebABProps").getABPropConfigValue("newsletter_creation_tos_id");
    }
    function D() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebABProps").getABPropConfigValue(
            "newsletter_admin_invite_tos_id_smb_web",
          )
        : o("WAWebABProps").getABPropConfigValue(
            "newsletter_admin_invite_tos_id",
          );
    }
    function x() {
      return o("WAWebABProps").getABPropConfigValue(
        "newsletter_creation_nux_id",
      );
    }
    function $() {
      return !1;
    }
    function P() {
      return (
        o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
        o("WAWebABProps").getABPropConfigValue("channels_directory_enabled") ===
          e.Enabled
      );
    }
    function N() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_directory_page_size",
      );
    }
    function M() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_directory_search_debounce_ms",
      );
    }
    function w() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_filter_out_subscribed_in_directory_null_state",
      );
    }
    function A() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_directory_v2_cache_refresh_interval_ms",
      );
    }
    function F() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_directory_categories_enabled",
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
        F() &&
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
        "channels_recommended_v3_ui_limit",
      );
    }
    function ie() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_share_link_logging_enabled",
      );
    }
    function le() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_web_embedding_enabled",
      );
    }
    function se(e) {
      return e == null ||
        e.inviteCode == null ||
        e.isSuspendedOrTerminated ||
        !e.iAmAdminOrOwner()
        ? !1
        : le();
    }
    function ue(e) {
      return (
        e === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner ||
        e === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin
      );
    }
    function ce() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_send_album_enabled",
      );
    }
    function de() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_proactive_message_gap_handling_enabled",
      );
    }
    function me() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_ptt_receiver_enabled",
      );
    }
    function pe() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_ptt_logging_enabled",
      );
    }
    function _e() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_ptv_forwarding_enabled",
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
        "channels_audio_files_receiver_enabled",
      );
    }
    function Le() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_audio_files_sender_enabled",
      );
    }
    function Ee() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_audio_files_sender_waveform_enabled",
      );
    }
    function ke() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_audio_files_display_waveform_enabled",
      );
    }
    function Ie() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_status_updates_consumption_enabled",
      );
    }
    function Te() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_admin_reply_enabled",
      );
    }
    function De() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_admin_reply_receiver_enabled",
      );
    }
    function xe() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "similar_channels_in_thread_on_follow_enabled",
      );
    }
    function $e() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "similar_channels_in_channel_details_enabled",
      );
    }
    function Pe() {
      return o("WAWebABProps").getABPropConfigValue(
        "similar_channels_min_limit",
      );
    }
    function Ne() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_qpl_logging",
      );
    }
    function Me() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_reactions_bottomsheet_tap_to_react_enabled",
      );
    }
    function we(e) {
      var t,
        n = o("WAWebStateUtils").unproxy(e);
      return (t = n.newsletterMetadata) != null && t.isSuspendedOrTerminated
        ? !1
        : o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
            "channels_updates_tab_swipe_actions_enabled",
          );
    }
    function Ae(e) {
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
    function Fe() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_producer_insights_hide_deltas",
      );
    }
    function Oe() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_fetch_and_log_capabilities",
      );
    }
    function Be() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_vpv_logging_enabled",
      );
    }
    function We() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_views_vpv_definition_enabled",
      );
    }
    function qe() {
      return Be();
    }
    function Ue() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_view_counts_vpv_logging_enabled",
      );
    }
    function Ve() {
      return Ue();
    }
    function He(e) {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        e,
      );
    }
    function Ge() {
      return He("wamo_sub_process_message_kill_switch");
    }
    function ze() {
      return He("wamo_sub_messages_supported");
    }
    function je() {
      return He("wamo_sub_consumer_enabled_v2");
    }
    function Ke() {
      return He("wamo_sub_admin_enabled_v2");
    }
    function Qe() {
      return je() || Ke();
    }
    function Xe() {
      return He("wamo_sub_logging_enabled_v2");
    }
    function Ye() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_album_v2_receiving_enabled",
      );
    }
    function Je() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_album_sender_enabled",
      );
    }
    function Ze(e) {
      return e
        ? o("WAWebABProps").getABPropConfigValue(
            "album_v2_min_items_to_send_album_with_caption",
          )
        : o("WAWebABProps").getABPropConfigValue(
            "album_v2_min_items_to_send_as_album_enabled",
          );
    }
    function et() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "newsletters_video_playback_wabba_logging_enabled",
      );
    }
    function tt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_video_play_logging_enabled",
      );
    }
    function nt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "wa_web_channels_comet_video_player_enabled_v2",
      );
    }
    function rt() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "channels_quick_forwarding_button_mode",
        ) === 1
      );
    }
    function ot() {
      return (
        Ne() &&
        o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
          "channels_open_qpl_improvements_enabled",
        )
      );
    }
    function at() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_open_qpl_user_rid_logging_enabled",
      );
    }
    function it() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "newsletter_rcat_field_generating_enabled",
      );
    }
    function lt() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_creation_entrypoint_in_directory_enabled",
      );
    }
    function st() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_invite_contacts_to_follow_consumer_enabled",
      );
    }
    function ut() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_invite_contacts_to_follow_producer_enabled",
      );
    }
    function ct() {
      return (
        ut() &&
        o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
          "channels_invite_contacts_to_follow_sender_logging_enabled",
        )
      );
    }
    function dt() {
      return (
        st() &&
        o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
          "channels_invite_contacts_to_follow_receiver_logging_enabled",
        )
      );
    }
    function mt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_invite_contacts_to_follow_receiver_invalid_message_drop_endabled",
      );
    }
    function pt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_follower_invite_creation_modal_enabled",
      );
    }
    var _t = 64;
    function ft() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_enforcement_logging_enabled",
      );
    }
    function gt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "dsa_26_receiver_enabled",
      );
    }
    function ht() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "dsa_26_sender_enabled",
      );
    }
    function yt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_sgi_receiver_enabled",
      );
    }
    function Ct() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_sgi_sender_enabled",
      );
    }
    function bt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_admin_profiles_receiver_enabled",
      );
    }
    function vt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_admin_profiles_forwarding_to_chats_enabled",
      );
    }
    function St() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_status_consumption",
      );
    }
    function Rt() {
      return (
        o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
          "channel_status_deeplink_enabled",
        ) && St()
      );
    }
    function Lt() {
      return (
        St() &&
        o("WAWebABProps").getABPropConfigValue(
          "channel_status_resharing_enabled",
        )
      );
    }
    function Et() {
      return (
        St() &&
        o("WAWebABProps").getABPropConfigValue(
          "channel_status_forwarding_enabled",
        )
      );
    }
    function kt(e) {
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
    var It = n("$InternalEnum")({
      Disabled: 0,
      ProfileRing: 1,
      ThreadRing: 2,
      AllEntrypoints: 3,
    });
    function Tt(e) {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "channels_status_consumption_entrypoints",
        ) >= e
      );
    }
    function Dt(e) {
      var t = St(),
        n = Tt(e);
      return t && n;
    }
    function xt() {
      return Dt(It.ProfileRing);
    }
    function $t() {
      return Dt(It.ThreadRing);
    }
    function Pt() {
      return Dt(It.AllEntrypoints);
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
      (l.isNewsletterViewCountEnabled = S),
      (l.isNewsletterViewCountSendEnabled = R),
      (l.isNewsletterCreationEnabled = L),
      (l.shouldShowAllReactionsForNewsletter = E),
      (l.isNewsletterReactionSettingsEnabled = k),
      (l.getNewsletterConsumerTos = I),
      (l.getNewsletterProducerTos = T),
      (l.getNewsletterAdminInviteTos = D),
      (l.getNewsletterProducerNux = x),
      (l.shouldHideProducerNewsletterDisclosure = $),
      (l.isNewsletterDirectoryEnabled = P),
      (l.getNewsletterDirectoryPageSize = N),
      (l.getNewsletterDirectorySearchDebounce = M),
      (l.isFilteringOutSubscribedNewslettersFromDirectoryListEnabled = w),
      (l.getNewsletterDirectoryPageRefreshInterval = A),
      (l.isNewsletterDirectoryCategoriesEnabled = F),
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
      (l.getRecommendedUnitRowCount = ae),
      (l.isNewsletterLinkShareLoggingEnabled = ie),
      (l.isChannelWebEmbeddingEnabled = le),
      (l.canEmbedNewsletterChannel = se),
      (l.isNewsletterAdminContextCardEnabled = ue),
      (l.isNewsletterMediaAlbumUploadEnabled = ce),
      (l.isProactiveGapFillingEnabled = de),
      (l.isNewsletterPTTReceivingEnabled = me),
      (l.isNewsletterPTTLoggingEnabled = pe),
      (l.isNewsletterPTVForwardingEnabled = _e),
      (l.isNewsletterPollsReceivingEnabled = fe),
      (l.isNewsletterPollsVotersEnabled = ge),
      (l.isNewsletterPollForwardingEnabled = he),
      (l.isNewsletterQuizReceiverEnabled = ye),
      (l.isNewsletterQuizSenderEnabled = Ce),
      (l.isStickerForwardedAttributionEnabled = be),
      (l.isStickerPackForwardedAttributionEnabled = ve),
      (l.isStickerPackMsgTypeRenderingEnabled = Se),
      (l.isNewsletterAudioFileReceivingEnabled = Re),
      (l.isNewsletterAudioFileSendingEnabled = Le),
      (l.isAudioFileWaveformSenderEnabled = Ee),
      (l.isAudioFileWaveformDisplayInNewslettersEnabled = ke),
      (l.isNewsletterLinksOnStatusConsumptionEnabled = Ie),
      (l.isNewsletterSendingAdminRepliesEnabled = Te),
      (l.isNewsletterReceivingAdminRepliesEnabled = De),
      (l.isSimilarNewsletterInThreadEnabled = xe),
      (l.isSimilarNewsletterInInfoDrawersEnabled = $e),
      (l.getSimilarNewslettersMinDisplayLimit = Pe),
      (l.isNewsletterQPLLoggingEnabled = Ne),
      (l.isNewsletterQuickReactionsEnabled = Me),
      (l.isNewsletterContextMenuEnabled = we),
      (l.canFetchProducerInsights = Ae),
      (l.shouldHideProducerInsightsDeltas = Fe),
      (l.shouldFetchAndLogCapabilities = Oe),
      (l.isNewsletterVPVLoggingEnabled = Be),
      (l.isNewsletterViewsVPVDefinitionEnabled = We),
      (l.isNewsletterDiscoveryVisibilityLoggingEnabled = qe),
      (l.isChannelsViewCountsVPVLoggingEnabled = Ue),
      (l.isNewsletterVPVMessageVisibilityLoggingEnabled = Ve),
      (l.isWamoSubMessagesProcessingEnabled = Ge),
      (l.isWamoSubMessagesSupported = ze),
      (l.isWamoSubConsumerExperienceEnabled = je),
      (l.isWamoSubCreatorExperienceSupported = Ke),
      (l.isWamoSubExperienceEnabled = Qe),
      (l.isWamoSubLoggingEnabled = Xe),
      (l.isNewsletterAlbumsV2ReceiverEnabled = Ye),
      (l.isNewsletterAlbumsV2SenderEnabled = Je),
      (l.getNewsletterAlbumsV2MinItemsToSend = Ze),
      (l.isNewsletterVideoPlaybackLoggingEnabled = et),
      (l.isNewsletterVideoPlayLoggingEnabled = tt),
      (l.isCometVideoPlayerEnabled = nt),
      (l.isNewsletterQuickForwardingEnabled = rt),
      (l.isNewsletterOpenQPLImprovementsEnabled = ot),
      (l.isNewsletterOpenQPLUserRidLoggingEnabled = at),
      (l.isRCATFieldGenerationEnabled = it),
      (l.getChannelCreationFromDirectoryMode = lt),
      (l.isChannelInviteContactsToFollowConsumerEnabled = st),
      (l.isChannelInviteContactsToFollowProducerEnabled = ut),
      (l.isChannelInviteContactsToFollowSenderLoggingEnabled = ct),
      (l.isChannelInviteContactsToFollowReceiverLoggingEnabled = dt),
      (l.isChannelInviteContactsToFollowInvalidDroppingEnabled = mt),
      (l.isChannelInviteContactsToFollowCreationModalEnabled = pt),
      (l.MAX_FOLLOWER_INVITES = _t),
      (l.isChannelEnforcementLoggingEnabled = ft),
      (l.isChannelDSA26ReceiverEnabled = gt),
      (l.isChannelDSA26SenderEnabled = ht),
      (l.isChannelSGIReceiverEnabled = yt),
      (l.isChannelSGISenderEnabled = Ct),
      (l.isNewsletterAdminProfilesReceiverEnabled = bt),
      (l.isNewsletterAdminProfilesForwardingEnabled = vt),
      (l.isNewsletterStatusReceiverEnabled = St),
      (l.isNewsletterStatusDeeplinkEnabled = Rt),
      (l.isNewsletterStatusReshareEnabled = Lt),
      (l.isNewsletterStatusForwardEnabled = Et),
      (l.isNewsletterStatusCreationEnabled = kt),
      (l.isNewsletterStatusProfileRingEnabled = xt),
      (l.isNewsletterStatusThreadRingEnabled = $t),
      (l.isNewsletterStatusAllEntrypointsEnabled = Pt));
  },
  98,
);
