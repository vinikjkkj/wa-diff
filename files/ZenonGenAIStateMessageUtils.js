__d(
  "ZenonGenAIStateMessageUtils",
  [
    "RequestStreamBodyUtils",
    "RpGenaiSctpCaptionsGenAIBotStateSerializers",
    "TCompactProtocol",
    "TReadBuffer",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = new (r("TReadBuffer"))(
          o("RequestStreamBodyUtils").stringToUint8Array(e.message),
        ),
        n = new (r("TCompactProtocol"))(t),
        a = o(
          "RpGenaiSctpCaptionsGenAIBotStateSerializers",
        ).deserializeStateMessage(n);
      return a;
    }
    l.dataMessageToStateMessage = e;
  },
  98,
);
