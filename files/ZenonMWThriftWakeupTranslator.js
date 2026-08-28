__d(
  "ZenonMWThriftWakeupTranslator",
  ["MultiwayCommonTypes", "ZenonMWThriftTranslatorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = [],
        n = e.messageHeader,
        r = { ackMessageId: n.transactionId, eventName: "wakeupRequest" };
      return (t.push(r), t);
    }
    function s(e) {
      return o("ZenonMWThriftTranslatorUtils").createMWThriftResponse({
        header: e,
        rtcMessageBody: {},
        type: o("MultiwayCommonTypes").MessageType.WAKEUP,
      });
    }
    ((l.fromThriftWakeupRequest = e), (l.toThriftWakeupResponse = s));
  },
  98,
);
