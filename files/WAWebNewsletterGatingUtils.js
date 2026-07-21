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
        A() &&
        o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
          "channels_directory_categories_logging_enabled",
        )
      );
    }
    function W() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_followers_list_cache_refresh_milliseconds",
      );
    }
    function q() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_forward_to_chat_enabled",
      );
    }
    function U() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_forward_logging_v2_enabled",
      );
    }
    function V() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_to_channel_forwarding_logging_enabled",
      );
    }
    function H() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_forward_to_chat_v2_message_navigation_enabled",
      );
    }
    function G() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled();
    }
    function z() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_forward_bottom_button_enabled",
      );
    }
    function j() {
      return o("WAWebABProps").getABPropConfigValue(
        "newsletter_forward_counter_ui_enabled",
      );
    }
    function K() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "newsletter_forward_counter_infra_enabled",
      );
    }
    function Q() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "newsletter_forward_counter_bump_own_channel_updates_fowards",
      );
    }
    function X() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "newsletter_forward_counter_bump_forwards_to_self",
      );
    }
    function Y() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "newsletter_forward_counter_bump_second_order_forwards",
      );
    }
    var J = 10;
    function Z() {
      return !0;
    }
    function ee() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_hide_news_url_preview",
      );
    }
    function te() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_max_messages_batch_pull",
      );
    }
    function ne() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_recommended_v3_ui_limit",
      );
    }
    function re() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_share_link_logging_enabled",
      );
    }
    function oe() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_web_embedding_enabled",
      );
    }
    function ae(e) {
      return e == null ||
        e.inviteCode == null ||
        e.isSuspendedOrTerminated ||
        !e.iAmAdminOrOwner()
        ? !1
        : oe();
    }
    function ie(e) {
      return (
        e === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner ||
        e === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin
      );
    }
    function le() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_send_album_enabled",
      );
    }
    function se() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_proactive_message_gap_handling_enabled",
      );
    }
    function ue() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_ptt_receiver_enabled",
      );
    }
    function ce() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_ptt_logging_enabled",
      );
    }
    function de() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_ptv_forwarding_enabled",
      );
    }
    function me() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_poll_receive_enabled",
      );
    }
    function pe() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_poll_voter_list_enabled",
      );
    }
    function _e() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_poll_forwarding_enabled",
      );
    }
    function fe() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_quiz_receiving_enabled",
      );
    }
    function ge() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_quiz_sending_enabled",
      );
    }
    function he() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_sticker_forwarded_attribution_ui_enabled",
      );
    }
    function ye() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_sticker_pack_forwarded_attribution_ui_enabled",
      );
    }
    function Ce() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_sticker_pack_rendering",
      );
    }
    function be() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_audio_files_receiver_enabled",
      );
    }
    function ve() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_audio_files_sender_enabled",
      );
    }
    function Se() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_audio_files_sender_waveform_enabled",
      );
    }
    function Re() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_audio_files_display_waveform_enabled",
      );
    }
    function Le() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_status_updates_consumption_enabled",
      );
    }
    function Ee() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_admin_reply_enabled",
      );
    }
    function ke() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_admin_reply_receiver_enabled",
      );
    }
    function Ie() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "similar_channels_in_thread_on_follow_enabled",
      );
    }
    function Te() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "similar_channels_in_channel_details_enabled",
      );
    }
    function De() {
      return o("WAWebABProps").getABPropConfigValue(
        "similar_channels_min_limit",
      );
    }
    function xe() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_qpl_logging",
      );
    }
    function $e() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_reactions_bottomsheet_tap_to_react_enabled",
      );
    }
    function Pe(e) {
      var t,
        n = o("WAWebStateUtils").unproxy(e);
      return (t = n.newsletterMetadata) != null && t.isSuspendedOrTerminated
        ? !1
        : o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
            "channels_updates_tab_swipe_actions_enabled",
          );
    }
    function Ne(e) {
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
    function Me() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_producer_insights_hide_deltas",
      );
    }
    function we() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_fetch_and_log_capabilities",
      );
    }
    function Ae() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_vpv_logging_enabled",
      );
    }
    function Fe() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_views_vpv_definition_enabled",
      );
    }
    function Oe() {
      return Ae();
    }
    function Be() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_view_counts_vpv_logging_enabled",
      );
    }
    function We() {
      return Be();
    }
    function qe(e) {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        e,
      );
    }
    function Ue() {
      return qe("wamo_sub_process_message_kill_switch");
    }
    function Ve() {
      return qe("wamo_sub_messages_supported");
    }
    function He() {
      return qe("wamo_sub_consumer_enabled_v2");
    }
    function Ge() {
      return qe("wamo_sub_admin_enabled_v2");
    }
    function ze() {
      return He() || Ge();
    }
    function je() {
      return qe("wamo_sub_logging_enabled_v2");
    }
    function Ke() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_album_v2_receiving_enabled",
      );
    }
    function Qe() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_album_sender_enabled",
      );
    }
    function Xe(e) {
      return e
        ? o("WAWebABProps").getABPropConfigValue(
            "album_v2_min_items_to_send_album_with_caption",
          )
        : o("WAWebABProps").getABPropConfigValue(
            "album_v2_min_items_to_send_as_album_enabled",
          );
    }
    function Ye() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "newsletters_video_playback_wabba_logging_enabled",
      );
    }
    function Je() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_video_play_logging_enabled",
      );
    }
    function Ze() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "wa_web_channels_comet_video_player_enabled_v2",
      );
    }
    function et() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "channels_quick_forwarding_button_mode",
        ) === 1
      );
    }
    function tt() {
      return (
        xe() &&
        o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
          "channels_open_qpl_improvements_enabled",
        )
      );
    }
    function nt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_open_qpl_user_rid_logging_enabled",
      );
    }
    function rt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "newsletter_rcat_field_generating_enabled",
      );
    }
    function ot() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_creation_entrypoint_in_directory_enabled",
      );
    }
    function at() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_invite_contacts_to_follow_consumer_enabled",
      );
    }
    function it() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_invite_contacts_to_follow_producer_enabled",
      );
    }
    function lt() {
      return (
        it() &&
        o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
          "channels_invite_contacts_to_follow_sender_logging_enabled",
        )
      );
    }
    function st() {
      return (
        at() &&
        o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
          "channels_invite_contacts_to_follow_receiver_logging_enabled",
        )
      );
    }
    function ut() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_invite_contacts_to_follow_receiver_invalid_message_drop_endabled",
      );
    }
    function ct() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_follower_invite_creation_modal_enabled",
      );
    }
    var dt = 64;
    function mt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_enforcement_logging_enabled",
      );
    }
    function pt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "dsa_26_receiver_enabled",
      );
    }
    function _t() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "dsa_26_sender_enabled",
      );
    }
    function ft() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_sgi_receiver_enabled",
      );
    }
    function gt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_sgi_sender_enabled",
      );
    }
    function ht() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_sgi_ui_label_enabled",
      );
    }
    function yt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_sgi_sender_self_disclosure_enabled",
      );
    }
    function Ct() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_admin_profiles_receiver_enabled",
      );
    }
    function bt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_admin_profiles_forwarding_to_chats_enabled",
      );
    }
    function vt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_status_consumption",
      );
    }
    function St() {
      return (
        o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
          "channel_status_deeplink_enabled",
        ) && vt()
      );
    }
    function Rt() {
      return (
        vt() &&
        o("WAWebABProps").getABPropConfigValue(
          "channel_status_resharing_enabled",
        )
      );
    }
    function Lt() {
      return (
        vt() &&
        o("WAWebABProps").getABPropConfigValue(
          "channel_status_forwarding_enabled",
        )
      );
    }
    function Et(e) {
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
    var kt = n("$InternalEnum")({
      Disabled: 0,
      ProfileRing: 1,
      ThreadRing: 2,
      AllEntrypoints: 3,
    });
    function It(e) {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "channels_status_consumption_entrypoints",
        ) >= e
      );
    }
    function Tt(e) {
      var t = vt(),
        n = It(e);
      return t && n;
    }
    function Dt() {
      return Tt(kt.ProfileRing);
    }
    function xt() {
      return Tt(kt.ThreadRing);
    }
    function $t() {
      return Tt(kt.AllEntrypoints);
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
      (l.getNewsletterDirectorySearchDebounce = N),
      (l.isFilteringOutSubscribedNewslettersFromDirectoryListEnabled = M),
      (l.getNewsletterDirectoryPageRefreshInterval = w),
      (l.isNewsletterDirectoryCategoriesEnabled = A),
      (l.getNewsletterDirectoryCategoriesPreviewRefreshIntervalMs = F),
      (l.getDisplayNewsletterPerCategoryLimit = O),
      (l.isDirectoryCategoriesLoggingEnabled = B),
      (l.getNewsletterSubscriberListCacheRefreshMs = W),
      (l.isNewsletterMessageForwardSendingEnabled = q),
      (l.isNewsletterMessageForwardLoggingEnabled = U),
      (l.isNewsletterForwardToChannelLoggingEnabled = V),
      (l.isNavigationToForwardedNewsletterMessageEnabled = H),
      (l.isForwardToNewsletterEnabled = G),
      (l.isNewsletterForwardBottomButtonEnabled = z),
      (l.isNewsletterForwardCounterUIEnabled = j),
      (l.isNewsletterForwardCounterInfraEnabled = K),
      (l.isNewsletterForwardCounterBumpOwnChannelUpdatesForwardsEnabled = Q),
      (l.isNewsletterForwardCounterBumpForwardsToSelfEnabled = X),
      (l.isNewsletterForwardCounterBumpSecondOrderForwardsEnabled = Y),
      (l.NEWSLETTER_FORWARD_COUNTER_MAX_RETRIES = J),
      (l.isNewsletterMessageEditingEnabled = Z),
      (l.isNewsletterHideNewsUrlPreviewEnabled = ee),
      (l.getMaxMsgCountFromServer = te),
      (l.getRecommendedUnitRowCount = ne),
      (l.isNewsletterLinkShareLoggingEnabled = re),
      (l.isChannelWebEmbeddingEnabled = oe),
      (l.canEmbedNewsletterChannel = ae),
      (l.isNewsletterAdminContextCardEnabled = ie),
      (l.isNewsletterMediaAlbumUploadEnabled = le),
      (l.isProactiveGapFillingEnabled = se),
      (l.isNewsletterPTTReceivingEnabled = ue),
      (l.isNewsletterPTTLoggingEnabled = ce),
      (l.isNewsletterPTVForwardingEnabled = de),
      (l.isNewsletterPollsReceivingEnabled = me),
      (l.isNewsletterPollsVotersEnabled = pe),
      (l.isNewsletterPollForwardingEnabled = _e),
      (l.isNewsletterQuizReceiverEnabled = fe),
      (l.isNewsletterQuizSenderEnabled = ge),
      (l.isStickerForwardedAttributionEnabled = he),
      (l.isStickerPackForwardedAttributionEnabled = ye),
      (l.isStickerPackMsgTypeRenderingEnabled = Ce),
      (l.isNewsletterAudioFileReceivingEnabled = be),
      (l.isNewsletterAudioFileSendingEnabled = ve),
      (l.isAudioFileWaveformSenderEnabled = Se),
      (l.isAudioFileWaveformDisplayInNewslettersEnabled = Re),
      (l.isNewsletterLinksOnStatusConsumptionEnabled = Le),
      (l.isNewsletterSendingAdminRepliesEnabled = Ee),
      (l.isNewsletterReceivingAdminRepliesEnabled = ke),
      (l.isSimilarNewsletterInThreadEnabled = Ie),
      (l.isSimilarNewsletterInInfoDrawersEnabled = Te),
      (l.getSimilarNewslettersMinDisplayLimit = De),
      (l.isNewsletterQPLLoggingEnabled = xe),
      (l.isNewsletterQuickReactionsEnabled = $e),
      (l.isNewsletterContextMenuEnabled = Pe),
      (l.canFetchProducerInsights = Ne),
      (l.shouldHideProducerInsightsDeltas = Me),
      (l.shouldFetchAndLogCapabilities = we),
      (l.isNewsletterVPVLoggingEnabled = Ae),
      (l.isNewsletterViewsVPVDefinitionEnabled = Fe),
      (l.isNewsletterDiscoveryVisibilityLoggingEnabled = Oe),
      (l.isChannelsViewCountsVPVLoggingEnabled = Be),
      (l.isNewsletterVPVMessageVisibilityLoggingEnabled = We),
      (l.isWamoSubMessagesProcessingEnabled = Ue),
      (l.isWamoSubMessagesSupported = Ve),
      (l.isWamoSubConsumerExperienceEnabled = He),
      (l.isWamoSubCreatorExperienceSupported = Ge),
      (l.isWamoSubExperienceEnabled = ze),
      (l.isWamoSubLoggingEnabled = je),
      (l.isNewsletterAlbumsV2ReceiverEnabled = Ke),
      (l.isNewsletterAlbumsV2SenderEnabled = Qe),
      (l.getNewsletterAlbumsV2MinItemsToSend = Xe),
      (l.isNewsletterVideoPlaybackLoggingEnabled = Ye),
      (l.isNewsletterVideoPlayLoggingEnabled = Je),
      (l.isCometVideoPlayerEnabled = Ze),
      (l.isNewsletterQuickForwardingEnabled = et),
      (l.isNewsletterOpenQPLImprovementsEnabled = tt),
      (l.isNewsletterOpenQPLUserRidLoggingEnabled = nt),
      (l.isRCATFieldGenerationEnabled = rt),
      (l.getChannelCreationFromDirectoryMode = ot),
      (l.isChannelInviteContactsToFollowConsumerEnabled = at),
      (l.isChannelInviteContactsToFollowProducerEnabled = it),
      (l.isChannelInviteContactsToFollowSenderLoggingEnabled = lt),
      (l.isChannelInviteContactsToFollowReceiverLoggingEnabled = st),
      (l.isChannelInviteContactsToFollowInvalidDroppingEnabled = ut),
      (l.isChannelInviteContactsToFollowCreationModalEnabled = ct),
      (l.MAX_FOLLOWER_INVITES = dt),
      (l.isChannelEnforcementLoggingEnabled = mt),
      (l.isChannelDSA26ReceiverEnabled = pt),
      (l.isChannelDSA26SenderEnabled = _t),
      (l.isChannelSGIReceiverEnabled = ft),
      (l.isChannelSGISenderEnabled = gt),
      (l.isChannelSGIUiLabelEnabled = ht),
      (l.isChannelSGISenderSelfDisclosureEnabled = yt),
      (l.isNewsletterAdminProfilesReceiverEnabled = Ct),
      (l.isNewsletterAdminProfilesForwardingEnabled = bt),
      (l.isNewsletterStatusReceiverEnabled = vt),
      (l.isNewsletterStatusDeeplinkEnabled = St),
      (l.isNewsletterStatusReshareEnabled = Rt),
      (l.isNewsletterStatusForwardEnabled = Lt),
      (l.isNewsletterStatusCreationEnabled = Et),
      (l.isNewsletterStatusProfileRingEnabled = Dt),
      (l.isNewsletterStatusThreadRingEnabled = xt),
      (l.isNewsletterStatusAllEntrypointsEnabled = $t));
  },
  98,
);
