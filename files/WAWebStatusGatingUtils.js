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
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterFeatureEnabled(
        "web_channel_status_likes_sending_enabled",
      );
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue("status_mentions_receiver");
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_enable_mention_message",
      );
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "status_pog_id_rotation_window_days",
      );
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue("web_show_to_hide_enabled");
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_status_comet_video_player_enabled",
      );
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_status_viewer_side_poster_identifiers_enabled",
      );
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue(
        "waweb_status_close_friends_viewer_side_enabled",
      );
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_status_reshare_attribution_enabled",
      );
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_reshare_poster_side_enabled",
      );
    }
    function v() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_status_resharer_flow_enabled",
      );
    }
    function S() {
      return o("WAWebABProps").getABPropConfigValue(
        "status_e2ee_send_over_status_stanza",
      );
    }
    function R() {
      return o("WAWebABProps").getABPropConfigValue(
        "status_e2ee_recv_over_status_stanza",
      );
    }
    function L() {
      return S() && E();
    }
    function E() {
      return o("WAWebABProps").getABPropConfigValue("web_status_send_via_smax");
    }
    function k() {
      return o("WAWebABProps").getABPropConfigValue("web_status_recv_via_smax");
    }
    function I() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_batched_status_sending_enabled",
      );
    }
    function T() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_enable_chat_thread_and_info_status_ring",
      );
    }
    function D() {
      return o("WAWebABProps").getABPropConfigValue(
        "status_player_avatar_status_creation_entrypoint",
      );
    }
    function x() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_status_chain_new_at_end",
      );
    }
    function $() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_status_chain_unseen_min_pog",
      );
    }
    function P() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_chaining_from_my_status",
      );
    }
    function N() {
      return o("WAWebABProps").getABPropConfigValue(
        "status_chain_from_my_interaction_limit",
      );
    }
    function M() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_status_chain_from_chatlist",
      );
    }
    ((l.statusQuickReplyEmojis = u),
      (l.isStatusLikesSendEnabled = c),
      (l.isChannelStatusLikesSendEnabled = d),
      (l.isStatusPrivateMentionsReceiveEnabled = m),
      (l.isStatusMentionMessageEnabled = p),
      (l.statusPogIdRotationWindowDays = _),
      (l.isStatusHideStringEnabled = f),
      (l.isStatusCometVideoPlayerEnabled = g),
      (l.isStatusViewerSidePosterIdentifiersEnabled = h),
      (l.isStatusCloseFriendsViewerSideEnabled = y),
      (l.isStatusReshareAttributionEnabled = C),
      (l.isStatusResharePosterSideEnabled = b),
      (l.isStatusReshareViewerFlowEnabled = v),
      (l.isStatusStanzaSendEnabled = S),
      (l.isStatusStanzaReceiveEnabled = R),
      (l.isStatusPublishViaSmaxEnabled = L),
      (l.isStatusReceiveViaSmaxEnabled = k),
      (l.isBatchedStatusSendingEnabled = I),
      (l.isStatusRingOutsideChatlistEnabled = T),
      (l.isStatusPlayerAvatarStatusCreationEntrypointEnabled = D),
      (l.isStatusAddUnseenAtEndEnabled = x),
      (l.statusChainUnseenMinPog = $),
      (l.isChainingFromMyStatusEnabled = P),
      (l.getStatusChainFromMyInteractionLimit = N),
      (l.isChainFromChatListEnabled = M));
  },
  98,
);
