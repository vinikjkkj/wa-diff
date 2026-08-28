__d(
  "ZenonMWThriftHangupTranslator",
  ["MultiwayCommonTypes", "ZenonMWThriftTranslatorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = [],
        n = e.messageHeader,
        r = { ackMessageId: n.transactionId, eventName: "hangupResponse" };
      return (t.push(r), t);
    }
    function s(e, t) {
      var n = t.reason,
        r = {
          detailedReasonString: "",
          reason: o("ZenonMWThriftTranslatorUtils").toMWThriftHangupReason(n),
        };
      return o("ZenonMWThriftTranslatorUtils").createMWThriftRequest({
        header: e,
        rtcMessageBody: { hangupRequest: r },
        type: o("MultiwayCommonTypes").MessageType.HANGUP,
      });
    }
    ((l.fromThriftHangupResponse = e), (l.toThriftHangupRequest = s));
  },
  98,
);
