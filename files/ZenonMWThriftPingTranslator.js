__d(
  "ZenonMWThriftPingTranslator",
  ["MultiwayCommonTypes", "ZenonMWThriftTranslatorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = [],
        n = e.messageHeader,
        r = { ackMessageId: n.transactionId, eventName: "pingResponse" };
      return (t.push(r), t);
    }
    function s(e) {
      return o("ZenonMWThriftTranslatorUtils").createMWThriftRequest({
        header: e,
        rtcMessageBody: {},
        type: o("MultiwayCommonTypes").MessageType.PING,
      });
    }
    ((l.fromThriftPingResponse = e), (l.toThriftPingRequest = s));
  },
  98,
);
