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
    "gkx",
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
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_search_category_icons_enabled",
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
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "newsletter_forward_counter_infra_enabled",
      );
    }
    function z() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "newsletter_forward_counter_bump_own_channel_updates_fowards",
      );
    }
    function j() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "newsletter_forward_counter_bump_forwards_to_self",
      );
    }
    function K() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "newsletter_forward_counter_bump_second_order_forwards",
      );
    }
    var Q = 10;
    function X() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_hide_news_url_preview",
      );
    }
    function Y() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_max_messages_batch_pull",
      );
    }
    function J() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_recommended_v3_ui_limit",
      );
    }
    function Z() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_share_link_logging_enabled",
      );
    }
    function ee() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_web_embedding_enabled",
      );
    }
    function te(e) {
      return e == null ||
        e.inviteCode == null ||
        o("WAWebNewsletterMetadataGetters").getIsSuspendedOrTerminated(e) ||
        !e.iAmAdminOrOwner()
        ? !1
        : ee();
    }
    function ne(e) {
      return (
        e === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner ||
        e === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin
      );
    }
    function re() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_send_album_enabled",
      );
    }
    function oe() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_proactive_message_gap_handling_enabled",
      );
    }
    function ae() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_ptt_receiver_enabled",
      );
    }
    function ie() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_ptt_logging_enabled",
      );
    }
    function le() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_ptv_forwarding_enabled",
      );
    }
    function se() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_ptv_forwarding_to_status_enabled",
      );
    }
    function ue() {
      return o("WAWebABProps").getABPropConfigValue(
        "channel_ptt_status_card_enabled",
      );
    }
    function ce() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_poll_receive_enabled",
      );
    }
    function de() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_poll_voter_list_enabled",
      );
    }
    function me() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_poll_forwarding_enabled",
      );
    }
    function pe() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_quiz_receiving_enabled",
      );
    }
    function _e() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_quiz_sending_enabled",
      );
    }
    function fe() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_quiz_option_reshuffle_notice_enabled",
      );
    }
    function ge() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_quiz_option_reshuffle_enabled",
      );
    }
    function he() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_quiz_option_reshuffle_enabled_no_exposure",
      );
    }
    function ye() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_sticker_forwarded_attribution_ui_enabled",
      );
    }
    function Ce() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_sticker_pack_forwarded_attribution_ui_enabled",
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
        "channels_quick_share_to_status_ui_enabled",
      );
    }
    function ke() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_forward_to_my_status_web_enabled",
      );
    }
    function Ie() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_post_status_card_web_enabled",
      );
    }
    function Te() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_albums_v2_forwarding_to_status_enabled",
      );
    }
    function De() {
      return (
        Ie() &&
        o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
          "channels_post_status_video_card_web_enabled",
        )
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
      return o("WAWebABProps").getABPropConfigValue(
        "web_channels_follow_offline_fail_fast_enabled",
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
        "similar_channels_min_limit",
      );
    }
    function Ae() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_qpl_logging",
      );
    }
    function Fe(e) {
      var t = o("WAWebStateUtils").unproxy(e),
        n = t.newsletterMetadata;
      return n != null &&
        o("WAWebNewsletterMetadataGetters").getIsSuspendedOrTerminated(n)
        ? !1
        : o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
            "channels_updates_tab_swipe_actions_enabled",
          );
    }
    function Oe(e) {
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
    function Be() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_producer_insights_hide_deltas",
      );
    }
    function We() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_fetch_and_log_capabilities",
      );
    }
    function qe() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_vpv_logging_enabled",
      );
    }
    function Ue() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_views_vpv_definition_enabled",
      );
    }
    function Ve() {
      return qe();
    }
    function He() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_view_counts_vpv_logging_enabled",
      );
    }
    function Ge() {
      return He();
    }
    function ze(e) {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        e,
      );
    }
    function je() {
      return ze("wamo_sub_process_message_kill_switch");
    }
    function Ke() {
      return ze("wamo_sub_messages_supported");
    }
    function Qe() {
      return ze("wamo_sub_consumer_enabled_v2");
    }
    function Xe() {
      return ze("wamo_sub_admin_enabled_v2");
    }
    function Ye() {
      return Qe() || Xe();
    }
    function Je() {
      return ze("wamo_sub_logging_enabled_v2");
    }
    function Ze() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_album_v2_receiving_enabled",
      );
    }
    function et() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_album_sender_enabled",
      );
    }
    function tt(e) {
      return e
        ? o("WAWebABProps").getABPropConfigValue(
            "album_v2_min_items_to_send_album_with_caption",
          )
        : o("WAWebABProps").getABPropConfigValue(
            "album_v2_min_items_to_send_as_album_enabled",
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
      return r("gkx")("13983") && r("gkx")("20694");
    }
    function at() {
      return r("gkx")("29869");
    }
    function it() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "channels_quick_forwarding_button_mode",
        ) === 1
      );
    }
    function lt() {
      return (
        Ae() &&
        o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
          "channels_open_qpl_improvements_enabled",
        )
      );
    }
    function st() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_open_qpl_user_rid_logging_enabled",
      );
    }
    function ut() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "newsletter_rcat_field_generating_enabled",
      );
    }
    function ct() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_creation_entrypoint_in_directory_enabled",
      );
    }
    function dt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_invite_contacts_to_follow_consumer_enabled",
      );
    }
    function mt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_invite_contacts_to_follow_producer_enabled",
      );
    }
    function pt() {
      return (
        dt() &&
        o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
          "channels_invite_contacts_to_follow_receiver_logging_enabled",
        )
      );
    }
    function _t() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_invite_contacts_to_follow_receiver_invalid_message_drop_endabled",
      );
    }
    function ft() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_follower_invite_creation_modal_enabled",
      );
    }
    var gt = 64;
    function ht() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channel_enforcement_logging_enabled",
      );
    }
    function yt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "dsa_26_receiver_enabled",
      );
    }
    function Ct() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "dsa_26_sender_enabled",
      );
    }
    function bt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_sgi_receiver_enabled",
      );
    }
    function vt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_sgi_sender_enabled",
      );
    }
    function St() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_sgi_ui_label_enabled",
      );
    }
    function Rt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_ai_at_enabled",
      );
    }
    function Lt() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_sgi_sender_self_disclosure_enabled",
      );
    }
    function Et() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "channels_scheduling_updates_receiver_enabled",
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
        "channels_admin_profiles_forwarding_to_status_enabled",
      );
    }
    function Dt() {
      return (
        o(
          "WAWebNewsletterChatsMigrationCapability",
        ).getPrimaryHasMigratedNewsletterChats() &&
        o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()
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
        o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
          "channel_status_fetch_on_join_notification_enabled",
        )
      );
    }
    function Pt() {
      return (
        o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
          "channel_status_deeplink_enabled",
        ) && xt()
      );
    }
    function Nt() {
      return (
        xt() &&
        o("WAWebABProps").getABPropConfigValue(
          "channel_status_resharing_enabled",
        )
      );
    }
    function Mt() {
      return (
        xt() &&
        o("WAWebABProps").getABPropConfigValue(
          "channel_status_forwarding_enabled",
        )
      );
    }
    function wt(e) {
      return e == null
        ? !1
        : At(
            e.membershipType,
            o("WAWebNewsletterMetadataGetters").getIsSuspendedOrTerminated(e),
            e.capabilities,
          );
    }
    function At(e, t, n) {
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
    var Ft = n("$InternalEnum")({
      Disabled: 0,
      ProfileRing: 1,
      ThreadRing: 2,
      AllEntrypoints: 3,
    });
    function Ot(e) {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "channels_status_consumption_entrypoints",
        ) >= e
      );
    }
    function Bt(e) {
      var t = xt(),
        n = Ot(e);
      return t && n;
    }
    function Wt() {
      return Bt(Ft.ProfileRing);
    }
    function qt() {
      return Bt(Ft.ThreadRing);
    }
    function Ut() {
      return Bt(Ft.AllEntrypoints);
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
      (l.isNewsletterDirectoryCategoryIconsEnabled = A),
      (l.getDisplayNewsletterPerCategoryLimit = F),
      (l.isDirectoryCategoriesLoggingEnabled = O),
      (l.isNewsletterMessageForwardSendingEnabled = B),
      (l.isNewsletterMessageForwardLoggingEnabled = W),
      (l.isNewsletterForwardToChannelLoggingEnabled = q),
      (l.isNavigationToForwardedNewsletterMessageEnabled = U),
      (l.isForwardToNewsletterEnabled = V),
      (l.isNewsletterForwardBottomButtonEnabled = H),
      (l.isNewsletterForwardCounterInfraEnabled = G),
      (l.isNewsletterForwardCounterBumpOwnChannelUpdatesForwardsEnabled = z),
      (l.isNewsletterForwardCounterBumpForwardsToSelfEnabled = j),
      (l.isNewsletterForwardCounterBumpSecondOrderForwardsEnabled = K),
      (l.NEWSLETTER_FORWARD_COUNTER_MAX_RETRIES = Q),
      (l.isNewsletterHideNewsUrlPreviewEnabled = X),
      (l.getMaxMsgCountFromServer = Y),
      (l.getRecommendedUnitRowCount = J),
      (l.isNewsletterLinkShareLoggingEnabled = Z),
      (l.isChannelWebEmbeddingEnabled = ee),
      (l.canEmbedNewsletterChannel = te),
      (l.isNewsletterAdminContextCardEnabled = ne),
      (l.isNewsletterMediaAlbumUploadEnabled = re),
      (l.isProactiveGapFillingEnabled = oe),
      (l.isNewsletterPTTReceivingEnabled = ae),
      (l.isNewsletterPTTLoggingEnabled = ie),
      (l.isNewsletterPTVForwardingEnabled = le),
      (l.isNewsletterPTVForwardingToStatusEnabled = se),
      (l.isNewsletterPTTStatusCardEnabled = ue),
      (l.isNewsletterPollsReceivingEnabled = ce),
      (l.isNewsletterPollsVotersEnabled = de),
      (l.isNewsletterPollForwardingEnabled = me),
      (l.isNewsletterQuizReceiverEnabled = pe),
      (l.isNewsletterQuizSenderEnabled = _e),
      (l.isQuizOptionOrderNoticeEnabled = fe),
      (l.isQuizOptionReshuffleEnabled = ge),
      (l.isQuizOptionReshuffleEnabledWithoutExposure = he),
      (l.isStickerForwardedAttributionEnabled = ye),
      (l.isStickerPackForwardedAttributionEnabled = Ce),
      (l.isNewsletterAudioFileReceivingEnabled = be),
      (l.isNewsletterAudioFileSendingEnabled = ve),
      (l.isAudioFileWaveformSenderEnabled = Se),
      (l.isAudioFileWaveformDisplayInNewslettersEnabled = Re),
      (l.isNewsletterLinksOnStatusConsumptionEnabled = Le),
      (l.isChannelsQuickShareToStatusEnabled = Ee),
      (l.isChannelsForwardToMyStatusEnabled = ke),
      (l.isChannelsPostStatusCardEnabled = Ie),
      (l.isChannelsAlbumsForwardingToStatusEnabled = Te),
      (l.isChannelsPostStatusVideoCardEnabled = De),
      (l.isNewsletterSendingAdminRepliesEnabled = xe),
      (l.isNewsletterReceivingAdminRepliesEnabled = $e),
      (l.isNewsletterFollowOfflineFailFastEnabled = Pe),
      (l.isSimilarNewsletterInThreadEnabled = Ne),
      (l.isSimilarNewsletterInInfoDrawersEnabled = Me),
      (l.getSimilarNewslettersMinDisplayLimit = we),
      (l.isNewsletterQPLLoggingEnabled = Ae),
      (l.isNewsletterContextMenuEnabled = Fe),
      (l.canFetchProducerInsights = Oe),
      (l.shouldHideProducerInsightsDeltas = Be),
      (l.shouldFetchAndLogCapabilities = We),
      (l.isNewsletterVPVLoggingEnabled = qe),
      (l.isNewsletterViewsVPVDefinitionEnabled = Ue),
      (l.isNewsletterDiscoveryVisibilityLoggingEnabled = Ve),
      (l.isChannelsViewCountsVPVLoggingEnabled = He),
      (l.isNewsletterVPVMessageVisibilityLoggingEnabled = Ge),
      (l.isWamoSubMessagesProcessingEnabled = je),
      (l.isWamoSubMessagesSupported = Ke),
      (l.isWamoSubConsumerExperienceEnabled = Qe),
      (l.isWamoSubCreatorExperienceSupported = Xe),
      (l.isWamoSubExperienceEnabled = Ye),
      (l.isWamoSubLoggingEnabled = Je),
      (l.isNewsletterAlbumsV2ReceiverEnabled = Ze),
      (l.isNewsletterAlbumsV2SenderEnabled = et),
      (l.getNewsletterAlbumsV2MinItemsToSend = tt),
      (l.isNewsletterVideoPlaybackLoggingEnabled = nt),
      (l.isNewsletterVideoPlayLoggingEnabled = rt),
      (l.isChannelVideoDashPlaybackEnabled = ot),
      (l.isChannelVideoDashManifestAtClickEnabled = at),
      (l.isNewsletterQuickForwardingEnabled = it),
      (l.isNewsletterOpenQPLImprovementsEnabled = lt),
      (l.isNewsletterOpenQPLUserRidLoggingEnabled = st),
      (l.isRCATFieldGenerationEnabled = ut),
      (l.getChannelCreationFromDirectoryMode = ct),
      (l.isChannelInviteContactsToFollowConsumerEnabled = dt),
      (l.isChannelInviteContactsToFollowProducerEnabled = mt),
      (l.isChannelInviteContactsToFollowReceiverLoggingEnabled = pt),
      (l.isChannelInviteContactsToFollowInvalidDroppingEnabled = _t),
      (l.isChannelInviteContactsToFollowCreationModalEnabled = ft),
      (l.MAX_FOLLOWER_INVITES = gt),
      (l.isChannelEnforcementLoggingEnabled = ht),
      (l.isChannelDSA26ReceiverEnabled = yt),
      (l.isChannelDSA26SenderEnabled = Ct),
      (l.isChannelSGIReceiverEnabled = bt),
      (l.isChannelSGISenderEnabled = vt),
      (l.isChannelSGIUiLabelEnabled = St),
      (l.isChannelAIAntiTamperingEnabled = Rt),
      (l.isChannelSGISenderSelfDisclosureEnabled = Lt),
      (l.isSchedulingUpdatesReceiverEnabled = Et),
      (l.isNewsletterAdminProfilesReceiverEnabled = kt),
      (l.isNewsletterAdminProfilesForwardingEnabled = It),
      (l.isNewsletterAdminProfilesForwardingToStatusEnabled = Tt),
      (l.isChannelsInChatListEnabled = Dt),
      (l.isNewsletterStatusReceiverEnabled = xt),
      (l.isNewsletterStatusFetchOnJoinNotificationEnabled = $t),
      (l.isNewsletterStatusDeeplinkEnabled = Pt),
      (l.isNewsletterStatusReshareEnabled = Nt),
      (l.isNewsletterStatusForwardEnabled = Mt),
      (l.isNewsletterStatusCreationEnabled = wt),
      (l.isNewsletterStatusCreationEnabledForValues = At),
      (l.isNewsletterStatusProfileRingEnabled = Wt),
      (l.isNewsletterStatusThreadRingEnabled = qt),
      (l.isNewsletterStatusAllEntrypointsEnabled = Ut));
  },
  98,
);
