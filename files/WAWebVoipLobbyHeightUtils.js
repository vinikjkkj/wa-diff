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
        a = e.VIDEO_LOBBY_COLLAPSED_PANEL_SLACK,
        i = e.VIDEO_LOBBY_HEIGHT,
        l = i;
      return (r === !0 ? (l -= o) : !n && t > 0 && (l -= a), u(l, t, n));
    }
    ((l.WAWebVoipLobbyPanelStateEmitter = s),
      (l.calculateIncomingGroupAudioLobbyHeight = c),
      (l.calculateIncomingGroupVideoLobbyHeight = d));
  },
  98,
);
