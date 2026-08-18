__d(
  "WAWebVoipLobbyHeightUtils",
  ["WAWebTypedEventEmitter"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        VIDEO_LOBBY_HEIGHT: 452,
        AUDIO_LOBBY_COLLAPSED_HEIGHT: 174,
        CONNECTED_PARTICIPANTS_SECTION_HEIGHT: 58,
        VIDEO_LOBBY_COLLAPSED_PANEL_SLACK: 26,
        LOBBY_CONTENT_ROW_GAP: 8,
        PADDING_BLOCK_START: 8,
        PARTICIPANT_INFO_HEIGHT: 72,
        CALL_CONTROLS_HEIGHT: 48,
        SELF_PREVIEW_PADDING: 16,
        MAX_SELF_PREVIEW_HEIGHT: 272,
        SELF_PREVIEW_ASPECT_RATIO: 1.7777777777777777,
        PARTICIPANT_ROW_HEIGHT: 61,
        MAX_FULLY_VISIBLE_PARTICIPANTS: 3,
        PARTIAL_ROW_VISIBILITY: 0.5,
      },
      s = new (r("WAWebTypedEventEmitter"))();
    function u(t, n, r) {
      var o = e.MAX_FULLY_VISIBLE_PARTICIPANTS,
        a = e.PARTIAL_ROW_VISIBILITY,
        i = e.PARTICIPANT_ROW_HEIGHT;
      if (!r) return t;
      var l = n <= o ? n * i : o * i + i * a;
      return t + l;
    }
    function c(t) {
      var n = t.connectedParticipantCount,
        r = t.hasNoParticipants,
        o = t.isParticipantPanelExpanded,
        a =
          r === !0
            ? e.AUDIO_LOBBY_COLLAPSED_HEIGHT -
              e.CONNECTED_PARTICIPANTS_SECTION_HEIGHT
            : e.AUDIO_LOBBY_COLLAPSED_HEIGHT;
      return u(a, n, o);
    }
    function d(t, n, r, o) {
      var a = e.CALL_CONTROLS_HEIGHT,
        i = e.CONNECTED_PARTICIPANTS_SECTION_HEIGHT,
        l = e.LOBBY_CONTENT_ROW_GAP,
        s = e.MAX_SELF_PREVIEW_HEIGHT,
        c = e.PADDING_BLOCK_START,
        d = e.PARTICIPANT_INFO_HEIGHT,
        m = e.SELF_PREVIEW_ASPECT_RATIO,
        p = e.SELF_PREVIEW_PADDING,
        _ = e.VIDEO_LOBBY_COLLAPSED_PANEL_SLACK,
        f = e.VIDEO_LOBBY_HEIGHT,
        g;
      if (o != null && o > 0) {
        var h = Math.min(s, Math.max(0, o - p) / m);
        ((g = Math.round(c + d + l + h + l + i + a)), r === !0 && (g -= i + l));
      } else ((g = f), r === !0 ? (g -= i) : t > 0 && (g -= _));
      var y = u(g, t, n);
      return (n && r !== !0 && t > 0 && (y += l), y);
    }
    ((l.WAWebVoipLobbyPanelStateEmitter = s),
      (l.calculateIncomingGroupAudioLobbyHeight = c),
      (l.calculateIncomingGroupVideoLobbyHeight = d));
  },
  98,
);
