__d(
  "WAWebStatusGatingUtils",
  ["WAWebABProps", "WAWebNewsletterCommonGatingUtils"],
  function (t, n, r, o, a, i, l) {
    var e = [
        "\uD83D\uDE0D",
        "\uD83D\uDE02",
        "\uD83D\uDE2E",
        "\uD83D\uDE22",
        "\uD83D\uDE4F",
        "\uD83D\uDC4F",
        "\uD83C\uDF89",
        "\uD83D\uDCAF",
      ],
      s = new Set([
        "\uD83D\uDE0D",
        "\uD83D\uDE02",
        "\uD83D\uDE2E",
        "\uD83D\uDE22",
        "\uD83D\uDE4F",
        "\uD83D\uDC4F",
        "\uD83C\uDF89",
        "\uD83D\uDCAF",
        "\uD83D\uDC4D",
        "\u2764",
        "\uD83D\uDE0A",
        "\uD83E\uDD70",
        "\uD83E\uDD29",
        "\uD83D\uDC9A",
        "\uD83E\uDD23",
        "\uD83D\uDE06",
        "\uD83D\uDD25",
        "\uD83D\uDE4C",
        "\uD83E\uDD73",
        "\uD83D\uDE2D",
        "\uD83D\uDE14",
        "\uD83E\uDD7A",
        "\uD83D\uDE32",
        "\uD83E\uDD2F",
        "\uD83D\uDE21",
        "\uD83D\uDE24",
      ]);
    function u() {
      try {
        var t = JSON.parse(
            o("WAWebABProps").getABPropConfigValue("status_reaction_emojis"),
          ),
          n = t
            .map(function (e) {
              return String.fromCodePoint(e);
            })
            .filter(function (e) {
              return s.has(e);
            });
        return n.length === 0 ? e : n;
      } catch (t) {
        return e;
      }
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_status_likes_send_v2_enabled",
      );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_status_likes_poster_counter_enabled",
      );
    }
    function m() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "web_channel_status_likes_sending_enabled",
      );
    }
    function p() {
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "web_channel_status_likes_sending_enabled_no_exposure",
      );
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue("status_mentions_receiver");
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_enable_mention_message",
      );
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "status_pog_id_rotation_window_days",
      );
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_status_viewer_side_poster_identifiers_enabled",
      );
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue(
        "status_viewer_action_psa_link_click_logging_enabled",
      );
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue(
        "waweb_status_close_friends_viewer_side_enabled",
      );
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue(
        "waweb_status_close_friends_poster_side_enabled",
      );
    }
    function v() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_status_resharer_flow_enabled",
      );
    }
    function S() {
      return o("WAWebABProps").getABPropConfigValue(
        "status_notify_broadcast_addressing_enabled",
      );
    }
    var R = 5;
    function L() {
      return o("WAWebABProps").getABPropConfigValue(
        "status_e2ee_send_over_status_stanza",
      );
    }
    function E() {
      return L() && k();
    }
    function k() {
      return o("WAWebABProps").getABPropConfigValue("web_status_send_via_smax");
    }
    function I() {
      return o("WAWebABProps").getABPropConfigValue("web_status_recv_via_smax");
    }
    function T() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_batched_status_sending_enabled",
      );
    }
    function D() {
      return o("WAWebABProps").getABPropConfigValue(
        "status_player_avatar_status_creation_entrypoint",
      );
    }
    function x() {
      return o("WAWebABProps").getABPropConfigValue(
        "status_full_my_status_header_is_posting_entrypoint_enabled",
      );
    }
    function $() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_status_chain_new_at_end",
      );
    }
    function P() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_status_chain_unseen_min_pog",
      );
    }
    function N() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_chaining_from_my_status",
      );
    }
    function M() {
      return o("WAWebABProps").getABPropConfigValue(
        "status_chain_from_my_interaction_limit",
      );
    }
    function w() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_status_chain_from_chatlist",
      );
    }
    function A() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_status_drag_and_drop_enabled",
      );
    }
    function F() {
      return o("WAWebABProps").getABPropConfigValue(
        "status_companion_read_sync_fix_enabled",
      );
    }
    function O() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_status_unread_dot_prefetch",
      );
    }
    function B() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_status_list_prefetch_depth",
      );
    }
    function W() {
      return q() > 0;
    }
    function q() {
      return 0;
    }
    function U() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_status_hover_prefetch",
      );
    }
    function V() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_status_hover_prefetch_dwell_ms",
      );
    }
    function H() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_status_bad_ux_logging_parity_enabled",
      );
    }
    function G() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_status_composer_quick_replies_enabled",
      );
    }
    function z() {
      return o("WAWebABProps").getABPropConfigValue(
        "status_viewer_header_gradient_darker_enabled",
      );
    }
    function j() {
      return o("WAWebABProps").getABPropConfigValue(
        "status_viewer_header_gradient_darker_alpha",
      );
    }
    function K() {
      return J(1);
    }
    function Q() {
      return J(2);
    }
    function X() {
      return J(3);
    }
    function Y() {
      return J(4);
    }
    function J(e) {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_status_viewer_refresh_level",
        ) >= e
      );
    }
    function Z() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_status_progressive_decrypt",
      );
    }
    ((l.statusQuickReplyEmojis = u),
      (l.isStatusLikesSendEnabled = c),
      (l.isStatusLikesPosterCounterEnabled = d),
      (l.isChannelStatusLikesSendEnabled = m),
      (l.isChannelStatusLikesSendEnabledNoExposure = p),
      (l.isStatusPrivateMentionsReceiveEnabled = _),
      (l.isStatusMentionMessageEnabled = f),
      (l.statusPogIdRotationWindowDays = g),
      (l.isStatusViewerSidePosterIdentifiersEnabled = h),
      (l.isStatusViewerActionPsaLinkClickLoggingEnabled = y),
      (l.isStatusCloseFriendsViewerSideEnabled = C),
      (l.isStatusCloseFriendsPosterSideEnabled = b),
      (l.isStatusReshareViewerFlowEnabled = v),
      (l.isStatusNotifyBroadcastAddressingEnabled = S),
      (l.STATUS_RESHARING_VIEWER_DEGSEP_LIMIT = R),
      (l.isStatusStanzaSendEnabled = L),
      (l.isStatusPublishViaSmaxEnabled = E),
      (l.isStatusDeliverViaSmaxEnabled = I),
      (l.isBatchedStatusSendingEnabled = T),
      (l.isStatusPlayerAvatarStatusCreationEntrypointEnabled = D),
      (l.isFullMyStatusHeaderPostingEntrypointEnabled = x),
      (l.isStatusAddUnseenAtEndEnabled = $),
      (l.statusChainUnseenMinPog = P),
      (l.isChainingFromMyStatusEnabled = N),
      (l.getStatusChainFromMyInteractionLimit = M),
      (l.isChainFromChatListEnabled = w),
      (l.isStatusFileDropEnabled = A),
      (l.isStatusCompanionReadSyncEnabled = F),
      (l.isStatusUnreadDotPrefetchEnabled = O),
      (l.getStatusListPrefetchDepth = B),
      (l.isStatusListOpenPrefetchEnabled = W),
      (l.getStatusListOpenPrefetchDepth = q),
      (l.isStatusHoverPrefetchEnabled = U),
      (l.getStatusHoverPrefetchDwellMs = V),
      (l.isStatusBadUxLoggingParityEnabled = H),
      (l.isStatusComposerQuickRepliesEnabled = G),
      (l.isStatusViewerHeaderGradientDarkerEnabled = z),
      (l.getStatusViewerHeaderGradientDarkerAlpha = j),
      (l.isStatusViewerRefreshM1Enabled = K),
      (l.isStatusViewerRefreshM2Enabled = Q),
      (l.isStatusViewerRefreshM3Enabled = X),
      (l.isStatusViewerRefreshM4Enabled = Y),
      (l.isStatusChunkDecryptEnabled = Z));
  },
  98,
);
