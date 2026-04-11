__d(
  "WAWebStatusGatingUtils",
  ["WAWebABProps", "gkx"],
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
      return o("WAWebABProps").getABPropConfigValue("status_mentions_receiver");
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_enable_mention_message",
      );
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue(
        "status_mentions_group_mention_receiver",
      );
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "status_ranking_poster_side_gating_enabled",
      );
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue("status_future_proofing");
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "status_save_to_camera_roll_enabled",
      );
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue(
        "whatsapp_vpv_logging_enabled",
      );
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue(
        "status_pog_id_rotation_window_days",
      );
    }
    function C() {
      return r("gkx")("26256")
        ? r("gkx")("10809")
        : o("WAWebABProps").getABPropConfigValue(
            "web_navigation_bar_updates_tab",
          );
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue("web_show_to_hide_enabled");
    }
    function v() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_status_comet_video_player_enabled",
      );
    }
    function S() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_status_first_upload_fix_enabled",
      );
    }
    function R() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_status_viewer_side_poster_identifiers_enabled",
      );
    }
    function L() {
      return o("WAWebABProps").getABPropConfigValue(
        "waweb_crossposting_attributions",
      );
    }
    function E() {
      return o("WAWebABProps").getABPropConfigValue(
        "waweb_status_close_friends_viewer_side_enabled",
      );
    }
    ((l.statusQuickReplyEmojis = u),
      (l.isStatusLikesSendEnabled = c),
      (l.isStatusPrivateMentionsReceiveEnabled = d),
      (l.isStatusMentionMessageEnabled = m),
      (l.isStatusPrivateGroupMentionsReceivingEnabled = p),
      (l.canCheckStatusRankingPosterGating = _),
      (l.isStatusEmbeddedContentFutureproofingEnabled = f),
      (l.isStatusSaveToDiskEnabled = g),
      (l.isStatusVPVLoggingEnabled = h),
      (l.statusPogIdRotationWindowDays = y),
      (l.isUpdatesTabInNavigationBarEnabled = C),
      (l.isStatusHideStringEnabled = b),
      (l.isStatusCometVideoPlayerEnabled = v),
      (l.isStatusFirstUploadFixEnabled = S),
      (l.isStatusViewerSidePosterIdentifiersEnabled = R),
      (l.isStatusCrosspostingAttributionsEnabled = L),
      (l.isStatusCloseFriendsViewerSideEnabled = E));
  },
  98,
);
