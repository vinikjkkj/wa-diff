__d(
  "WAWebNewsletterGatingUtils",
  [
    "$InternalEnum",
    "WAWebABProps",
    "WAWebCommonNewsletterEnums",
    "WAWebMobilePlatforms",
    "WAWebNewsletterChatsMigrationCapability",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterDirectoryCategoryUtils",
    "WAWebNewsletterMetadataGetters",
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
      return (
        o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
        o("WAWebABProps").getABPropConfigValue("channels_directory_enabled") ===
          e.Enabled
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
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_directory_categories_enabled",
      );
    }
    function w(e) {
      return (
        M() &&
        !o("WAWebNewsletterDirectoryCategoryUtils").isSpecialEventsCategory(
          e,
        ) &&
        o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
          "channels_directory_flat_categories_list_enabled",
        )
      );
    }
    function A() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_directory_categories_cache_refresh_interval_ms",
      );
    }
    function F() {
      return o("WAWebABProps").getABPropConfigValue(
        "directory_categories_display_newsletters_per_category_limit",
      );
    }
    function O() {
      return (
        M() &&
        o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
          "channels_directory_categories_logging_enabled",
        )
      );
    }
    function B() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_forward_to_chat_enabled",
      );
    }
    function W() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_forward_logging_v2_enabled",
      );
    }
    function q() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_to_channel_forwarding_logging_enabled",
      );
    }
    function U() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_forward_to_chat_v2_message_navigation_enabled",
      );
    }
    function V() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled();
    }
    function H() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_forward_bottom_button_enabled",
      );
    }
    function G() {
      return o("WAWebABProps").getABPropConfigValue(
        "newsletter_forward_counter_ui_enabled",
      );
    }
    function z() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "newsletter_forward_counter_infra_enabled",
      );
    }
    function j() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "newsletter_forward_counter_bump_own_channel_updates_fowards",
      );
    }
    function K() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "newsletter_forward_counter_bump_forwards_to_self",
      );
    }
    function Q() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "newsletter_forward_counter_bump_second_order_forwards",
      );
    }
    var X = 10;
    function Y() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_hide_news_url_preview",
      );
    }
    function J() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_max_messages_batch_pull",
      );
    }
    function Z() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_recommended_v3_ui_limit",
      );
    }
    function ee() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_share_link_logging_enabled",
      );
    }
    function te() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_web_embedding_enabled",
      );
    }
    function ne(e) {
      return e == null ||
        e.inviteCode == null ||
        o("WAWebNewsletterMetadataGetters").getIsSuspendedOrTerminated(e) ||
        !e.iAmAdminOrOwner()
        ? !1
        : te();
    }
    function re(e) {
      return (
        e === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner ||
        e === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin
      );
    }
    function oe() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_send_album_enabled",
      );
    }
    function ae() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_proactive_message_gap_handling_enabled",
      );
    }
    function ie() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_ptt_receiver_enabled",
      );
    }
    function le() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_ptt_logging_enabled",
      );
    }
    function se() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_ptv_forwarding_enabled",
      );
    }
    function ue() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_poll_receive_enabled",
      );
    }
    function ce() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_poll_voter_list_enabled",
      );
    }
    function de() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_poll_forwarding_enabled",
      );
    }
    function me() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_quiz_receiving_enabled",
      );
    }
    function pe() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_quiz_sending_enabled",
      );
    }
    function _e() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_quiz_option_reshuffle_notice_enabled",
      );
    }
    function fe() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_quiz_option_reshuffle_enabled",
      );
    }
    function ge() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_quiz_option_reshuffle_enabled_no_exposure",
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
        "channels_audio_files_receiver_enabled",
      );
    }
    function be() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_audio_files_sender_enabled",
      );
    }
    function ve() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_audio_files_sender_waveform_enabled",
      );
    }
    function Se() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_audio_files_display_waveform_enabled",
      );
    }
    function Re() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_status_updates_consumption_enabled",
      );
    }
    function Le() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_admin_reply_enabled",
      );
    }
    function Ee() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_admin_reply_receiver_enabled",
      );
    }
    function ke() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "similar_channels_in_thread_on_follow_enabled",
      );
    }
    function Ie() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "similar_channels_in_channel_details_enabled",
      );
    }
    function Te() {
      return o("WAWebABProps").getABPropConfigValue(
        "similar_channels_min_limit",
      );
    }
    function De() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_qpl_logging",
      );
    }
    function xe() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_reactions_bottomsheet_tap_to_react_enabled",
      );
    }
    function $e(e) {
      var t = o("WAWebStateUtils").unproxy(e),
        n = t.newsletterMetadata;
      return n != null &&
        o("WAWebNewsletterMetadataGetters").getIsSuspendedOrTerminated(n)
        ? !1
        : o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
            "channels_updates_tab_swipe_actions_enabled",
          );
    }
    function Pe(e) {
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
    function Ne() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_producer_insights_hide_deltas",
      );
    }
    function Me() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_fetch_and_log_capabilities",
      );
    }
    function we() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_vpv_logging_enabled",
      );
    }
    function Ae() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_views_vpv_definition_enabled",
      );
    }
    function Fe() {
      return we();
    }
    function Oe() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_view_counts_vpv_logging_enabled",
      );
    }
    function Be() {
      return Oe();
    }
    function We(e) {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        e,
      );
    }
    function qe() {
      return We("wamo_sub_process_message_kill_switch");
    }
    function Ue() {
      return We("wamo_sub_messages_supported");
    }
    function Ve() {
      return We("wamo_sub_consumer_enabled_v2");
    }
    function He() {
      return We("wamo_sub_admin_enabled_v2");
    }
    function Ge() {
      return Ve() || He();
    }
    function ze() {
      return We("wamo_sub_logging_enabled_v2");
    }
    function je() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_album_v2_receiving_enabled",
      );
    }
    function Ke() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_album_sender_enabled",
      );
    }
    function Qe(e) {
      return e
        ? o("WAWebABProps").getABPropConfigValue(
            "album_v2_min_items_to_send_album_with_caption",
          )
        : o("WAWebABProps").getABPropConfigValue(
            "album_v2_min_items_to_send_as_album_enabled",
          );
    }
    function Xe() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "newsletters_video_playback_wabba_logging_enabled",
      );
    }
    function Ye() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_video_play_logging_enabled",
      );
    }
    function Je() {
      return !1;
    }
    function Ze() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "channels_quick_forwarding_button_mode",
        ) === 1
      );
    }
    function et() {
      return (
        De() &&
        o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
          "channels_open_qpl_improvements_enabled",
        )
      );
    }
    function tt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_open_qpl_user_rid_logging_enabled",
      );
    }
    function nt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "newsletter_rcat_field_generating_enabled",
      );
    }
    function rt() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_creation_entrypoint_in_directory_enabled",
      );
    }
    function ot() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_invite_contacts_to_follow_consumer_enabled",
      );
    }
    function at() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_invite_contacts_to_follow_producer_enabled",
      );
    }
    function it() {
      return (
        ot() &&
        o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
          "channels_invite_contacts_to_follow_receiver_logging_enabled",
        )
      );
    }
    function lt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_invite_contacts_to_follow_receiver_invalid_message_drop_endabled",
      );
    }
    function st() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_follower_invite_creation_modal_enabled",
      );
    }
    var ut = 64;
    function ct() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_enforcement_logging_enabled",
      );
    }
    function dt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "dsa_26_receiver_enabled",
      );
    }
    function mt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "dsa_26_sender_enabled",
      );
    }
    function pt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_sgi_receiver_enabled",
      );
    }
    function _t() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_sgi_sender_enabled",
      );
    }
    function ft() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_sgi_ui_label_enabled",
      );
    }
    function gt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_sgi_sender_self_disclosure_enabled",
      );
    }
    function ht() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_scheduling_updates_receiver_enabled",
      );
    }
    function yt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_admin_profiles_receiver_enabled",
      );
    }
    function Ct() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_admin_profiles_forwarding_to_chats_enabled",
      );
    }
    function bt() {
      return (
        o(
          "WAWebNewsletterChatsMigrationCapability",
        ).getPrimaryHasMigratedNewsletterChats() &&
        o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()
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
      return e == null
        ? !1
        : kt(
            e.membershipType,
            o("WAWebNewsletterMetadataGetters").getIsSuspendedOrTerminated(e),
            e.capabilities,
          );
    }
    function kt(e, t, n) {
      var r;
      return !o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_status_creation",
      ) ||
        (e !== o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin &&
          e !==
            o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner) ||
        t
        ? !1
        : ((r =
            n == null
              ? void 0
              : n.has(
                  o("WAWebCommonNewsletterEnums").NewsletterCapability
                    .CHANNEL_STATUS_PRODUCER,
                )) != null
            ? r
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
      var t = vt(),
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
      (l.isNewsletterDirectoryEnabled = $),
      (l.getNewsletterDirectorySearchDebounce = P),
      (l.isFilteringOutSubscribedNewslettersFromDirectoryListEnabled = N),
      (l.isNewsletterDirectoryCategoriesEnabled = M),
      (l.shouldUseFlatCategoriesList = w),
      (l.getNewsletterDirectoryCategoriesPreviewRefreshIntervalMs = A),
      (l.getDisplayNewsletterPerCategoryLimit = F),
      (l.isDirectoryCategoriesLoggingEnabled = O),
      (l.isNewsletterMessageForwardSendingEnabled = B),
      (l.isNewsletterMessageForwardLoggingEnabled = W),
      (l.isNewsletterForwardToChannelLoggingEnabled = q),
      (l.isNavigationToForwardedNewsletterMessageEnabled = U),
      (l.isForwardToNewsletterEnabled = V),
      (l.isNewsletterForwardBottomButtonEnabled = H),
      (l.isNewsletterForwardCounterUIEnabled = G),
      (l.isNewsletterForwardCounterInfraEnabled = z),
      (l.isNewsletterForwardCounterBumpOwnChannelUpdatesForwardsEnabled = j),
      (l.isNewsletterForwardCounterBumpForwardsToSelfEnabled = K),
      (l.isNewsletterForwardCounterBumpSecondOrderForwardsEnabled = Q),
      (l.NEWSLETTER_FORWARD_COUNTER_MAX_RETRIES = X),
      (l.isNewsletterHideNewsUrlPreviewEnabled = Y),
      (l.getMaxMsgCountFromServer = J),
      (l.getRecommendedUnitRowCount = Z),
      (l.isNewsletterLinkShareLoggingEnabled = ee),
      (l.isChannelWebEmbeddingEnabled = te),
      (l.canEmbedNewsletterChannel = ne),
      (l.isNewsletterAdminContextCardEnabled = re),
      (l.isNewsletterMediaAlbumUploadEnabled = oe),
      (l.isProactiveGapFillingEnabled = ae),
      (l.isNewsletterPTTReceivingEnabled = ie),
      (l.isNewsletterPTTLoggingEnabled = le),
      (l.isNewsletterPTVForwardingEnabled = se),
      (l.isNewsletterPollsReceivingEnabled = ue),
      (l.isNewsletterPollsVotersEnabled = ce),
      (l.isNewsletterPollForwardingEnabled = de),
      (l.isNewsletterQuizReceiverEnabled = me),
      (l.isNewsletterQuizSenderEnabled = pe),
      (l.isQuizOptionOrderNoticeEnabled = _e),
      (l.isQuizOptionReshuffleEnabled = fe),
      (l.isQuizOptionReshuffleEnabledWithoutExposure = ge),
      (l.isStickerForwardedAttributionEnabled = he),
      (l.isStickerPackForwardedAttributionEnabled = ye),
      (l.isNewsletterAudioFileReceivingEnabled = Ce),
      (l.isNewsletterAudioFileSendingEnabled = be),
      (l.isAudioFileWaveformSenderEnabled = ve),
      (l.isAudioFileWaveformDisplayInNewslettersEnabled = Se),
      (l.isNewsletterLinksOnStatusConsumptionEnabled = Re),
      (l.isNewsletterSendingAdminRepliesEnabled = Le),
      (l.isNewsletterReceivingAdminRepliesEnabled = Ee),
      (l.isSimilarNewsletterInThreadEnabled = ke),
      (l.isSimilarNewsletterInInfoDrawersEnabled = Ie),
      (l.getSimilarNewslettersMinDisplayLimit = Te),
      (l.isNewsletterQPLLoggingEnabled = De),
      (l.isNewsletterQuickReactionsEnabled = xe),
      (l.isNewsletterContextMenuEnabled = $e),
      (l.canFetchProducerInsights = Pe),
      (l.shouldHideProducerInsightsDeltas = Ne),
      (l.shouldFetchAndLogCapabilities = Me),
      (l.isNewsletterVPVLoggingEnabled = we),
      (l.isNewsletterViewsVPVDefinitionEnabled = Ae),
      (l.isNewsletterDiscoveryVisibilityLoggingEnabled = Fe),
      (l.isChannelsViewCountsVPVLoggingEnabled = Oe),
      (l.isNewsletterVPVMessageVisibilityLoggingEnabled = Be),
      (l.isWamoSubMessagesProcessingEnabled = qe),
      (l.isWamoSubMessagesSupported = Ue),
      (l.isWamoSubConsumerExperienceEnabled = Ve),
      (l.isWamoSubCreatorExperienceSupported = He),
      (l.isWamoSubExperienceEnabled = Ge),
      (l.isWamoSubLoggingEnabled = ze),
      (l.isNewsletterAlbumsV2ReceiverEnabled = je),
      (l.isNewsletterAlbumsV2SenderEnabled = Ke),
      (l.getNewsletterAlbumsV2MinItemsToSend = Qe),
      (l.isNewsletterVideoPlaybackLoggingEnabled = Xe),
      (l.isNewsletterVideoPlayLoggingEnabled = Ye),
      (l.isChannelVideoDashPlaybackEnabled = Je),
      (l.isNewsletterQuickForwardingEnabled = Ze),
      (l.isNewsletterOpenQPLImprovementsEnabled = et),
      (l.isNewsletterOpenQPLUserRidLoggingEnabled = tt),
      (l.isRCATFieldGenerationEnabled = nt),
      (l.getChannelCreationFromDirectoryMode = rt),
      (l.isChannelInviteContactsToFollowConsumerEnabled = ot),
      (l.isChannelInviteContactsToFollowProducerEnabled = at),
      (l.isChannelInviteContactsToFollowReceiverLoggingEnabled = it),
      (l.isChannelInviteContactsToFollowInvalidDroppingEnabled = lt),
      (l.isChannelInviteContactsToFollowCreationModalEnabled = st),
      (l.MAX_FOLLOWER_INVITES = ut),
      (l.isChannelEnforcementLoggingEnabled = ct),
      (l.isChannelDSA26ReceiverEnabled = dt),
      (l.isChannelDSA26SenderEnabled = mt),
      (l.isChannelSGIReceiverEnabled = pt),
      (l.isChannelSGISenderEnabled = _t),
      (l.isChannelSGIUiLabelEnabled = ft),
      (l.isChannelSGISenderSelfDisclosureEnabled = gt),
      (l.isSchedulingUpdatesReceiverEnabled = ht),
      (l.isNewsletterAdminProfilesReceiverEnabled = yt),
      (l.isNewsletterAdminProfilesForwardingEnabled = Ct),
      (l.isChannelsInChatListEnabled = bt),
      (l.isNewsletterStatusReceiverEnabled = vt),
      (l.isNewsletterStatusDeeplinkEnabled = St),
      (l.isNewsletterStatusReshareEnabled = Rt),
      (l.isNewsletterStatusForwardEnabled = Lt),
      (l.isNewsletterStatusCreationEnabled = Et),
      (l.isNewsletterStatusCreationEnabledForValues = kt),
      (l.isNewsletterStatusProfileRingEnabled = xt),
      (l.isNewsletterStatusThreadRingEnabled = $t),
      (l.isNewsletterStatusAllEntrypointsEnabled = Pt));
  },
  98,
);
