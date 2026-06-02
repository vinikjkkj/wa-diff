__d(
  "WAWebSharableEventInviteGatingUtils",
  ["$InternalEnum", "WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
      Futureproof: 0,
      FutureproofCustomText: 1,
      FullBubble: 2,
    });
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "events_v2_invitation_message_version",
      );
    }
    function u() {
      return s() > Number(e.Futureproof);
    }
    function c() {
      return s() >= Number(e.FullBubble);
    }
    ((l.SharableEventInviteReceivingVersion = e),
      (l.getSharableEventInviteReceivingVersion = s),
      (l.isSharableEventInviteReceiveEnabled = u),
      (l.shouldRenderSharableEventInviteBubble = c));
  },
  98,
);
