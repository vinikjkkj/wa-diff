__d(
  "WASmaxOutVoipWaitingRoomToggleCallLinkRequest",
  ["WASmaxJsx", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.waitingRoomToggleEnabled,
        r = e.waitingRoomToggleLinkToken,
        a = e.waitingRoomToggleMedia,
        i = o("WASmaxJsx").smax(
          "call",
          { id: (t = o("WAWap")).generateId(), to: t.JID("call") },
          o("WASmaxJsx").smax("waiting_room_toggle", {
            enabled: t.CUSTOM_STRING(n),
            "link-token": t.CUSTOM_STRING(r),
            media: t.CUSTOM_STRING(a),
          }),
        );
      return i;
    }
    l.makeWaitingRoomToggleCallLinkRequest = e;
  },
  98,
);
