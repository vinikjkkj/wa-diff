__d(
  "ZenonMWThriftDismissTranslator",
  ["MultiwayCommonTypes", "ZenonMWThriftTranslatorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = [],
        n = e.messageBody.dismissRequest;
      if (n) {
        var r = n.detailedReasonString,
          a = n.reason,
          i = {
            eventName: "terminateRequest",
            fromJoinResponse: !1,
            reason: o("ZenonMWThriftTranslatorUtils").fromMWThriftDismissReason(
              a,
            ),
            shouldInformPeer: !0,
            subreason: r,
          };
        t.push(i);
      }
      return t;
    }
    function s(e) {
      return o("ZenonMWThriftTranslatorUtils").createMWThriftResponse({
        header: e,
        rtcMessageBody: {},
        type: o("MultiwayCommonTypes").MessageType.DISMISS,
      });
    }
    ((l.fromThriftDismissRequest = e), (l.toThriftDismissResponse = s));
  },
  98,
);
