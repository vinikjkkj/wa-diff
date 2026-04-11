__d(
  "WASmaxVoipWaitingRoomToggleCallLinkRPC",
  [
    "WAComms",
    "WASmaxInVoipWaitingRoomToggleCallLinkResponseWaitingRoomToggleCallLinkAck",
    "WASmaxInVoipWaitingRoomToggleCallLinkResponseWaitingRoomToggleCallLinkNack",
    "WASmaxOutVoipWaitingRoomToggleCallLinkRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o(
              "WASmaxOutVoipWaitingRoomToggleCallLinkRequest",
            ).makeWaitingRoomToggleCallLinkRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
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
              {
                WaitingRoomToggleCallLinkAck: a,
                WaitingRoomToggleCallLinkNack: i,
              },
            ),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendWaitingRoomToggleCallLinkRPC = e;
  },
  98,
);
