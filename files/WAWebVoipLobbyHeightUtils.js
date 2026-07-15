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
    function c(t, n, r) {
      var o =
        r === !0
          ? e.AUDIO_LOBBY_COLLAPSED_HEIGHT -
            e.CONNECTED_PARTICIPANTS_SECTION_HEIGHT
          : e.AUDIO_LOBBY_COLLAPSED_HEIGHT;
      return u(o, t, n);
    }
    function d(t, n, r) {
      var o = e.CONNECTED_PARTICIPANTS_SECTION_HEIGHT,
        a = e.LOBBY_CONTENT_ROW_GAP,
        i = e.VIDEO_LOBBY_COLLAPSED_PANEL_SLACK,
        l = e.VIDEO_LOBBY_HEIGHT,
        s = l;
      r === !0 ? (s -= o) : t > 0 && (s -= i);
      var c = u(s, t, n);
      return (n && r !== !0 && t > 0 && (c += a), c);
    }
    ((l.WAWebVoipLobbyPanelStateEmitter = s),
      (l.calculateIncomingGroupAudioLobbyHeight = c),
      (l.calculateIncomingGroupVideoLobbyHeight = d));
  },
  98,
);
