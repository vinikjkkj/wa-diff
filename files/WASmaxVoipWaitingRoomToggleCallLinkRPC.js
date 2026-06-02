__d(
  "WASmaxVoipWaitingRoomToggleCallLinkRPC",
  [
    "WAComms",
    "WASmaxInVoipWaitingRoomToggleCallLinkResponseWaitingRoomToggleCallLinkAck",
    "WASmaxInVoipWaitingRoomToggleCallLinkResponseWaitingRoomToggleCallLinkNack",
    "WASmaxOutVoipWaitingRoomToggleCallLinkRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o(
          "WASmaxOutVoipWaitingRoomToggleCallLinkRequest",
        ).makeWaitingRoomToggleCallLinkRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInVoipWaitingRoomToggleCallLinkResponseWaitingRoomToggleCallLinkAck",
        ).parseWaitingRoomToggleCallLinkResponseWaitingRoomToggleCallLinkAck(
          r,
          n,
        );
      if (a.success)
        return {
          name: "WaitingRoomToggleCallLinkResponseWaitingRoomToggleCallLinkAck",
          value: a.value,
        };
      var i = o(
        "WASmaxInVoipWaitingRoomToggleCallLinkResponseWaitingRoomToggleCallLinkNack",
      ).parseWaitingRoomToggleCallLinkResponseWaitingRoomToggleCallLinkNack(
        r,
        n,
      );
      if (i.success)
        return {
          name: "WaitingRoomToggleCallLinkResponseWaitingRoomToggleCallLinkNack",
          value: i.value,
        };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing(
          "WaitingRoomToggleCallLink",
          { WaitingRoomToggleCallLinkAck: a, WaitingRoomToggleCallLinkNack: i },
        ),
      );
    }
    l.sendWaitingRoomToggleCallLinkRPC = e;
  },
  98,
);
