__d(
  "ZenonMWThriftIceCandidateTranslator",
  ["MultiwayCommonTypes", "ZenonMWThriftTranslatorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = [],
        n = e.messageBody.iceCandidateRequest;
      if (n) {
        var r = {
          eventName: "iceCandidateRequest",
          iceCandidates: n.iceCandidateSdps.map(function (e) {
            var t;
            return {
              candidateSdpString: (t = e.candidateSdpString) != null ? t : "",
              sdpMid: e.sdpMid,
              sdpMLineIndex: parseInt(e.sdpMLineIndex, 10),
            };
          }),
        };
        t.push(r);
      }
      return t;
    }
    function s(e) {
      var t = [],
        n = e.messageHeader,
        r = {
          ackMessageId: n.transactionId,
          eventName: "iceCandidateResponse",
        };
      return (t.push(r), t);
    }
    function u(e) {
      return o("ZenonMWThriftTranslatorUtils").createMWThriftResponse({
        header: e,
        rtcMessageBody: {},
        type: o("MultiwayCommonTypes").MessageType.ICE_CANDIDATE,
      });
    }
    function c(e, t) {
      var n = t.iceCandidates,
        r = n.map(function (e) {
          return {
            candidateSdpString: e.candidateSdpString,
            sdpMid: e.sdpMid,
            sdpMLineIndex: e.sdpMLineIndex.toString(),
          };
        }),
        a = { iceCandidateSdps: r };
      return o("ZenonMWThriftTranslatorUtils").createMWThriftRequest({
        header: e,
        rtcMessageBody: { iceCandidateRequest: a },
        type: o("MultiwayCommonTypes").MessageType.ICE_CANDIDATE,
      });
    }
    ((l.fromThriftIceCandidateRequest = e),
      (l.fromThriftIceCandidateResponse = s),
      (l.toThriftIceCandidateResponse = u),
      (l.toThriftIceCandidateRequest = c));
  },
  98,
);
