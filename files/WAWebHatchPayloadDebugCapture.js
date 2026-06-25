__d(
  "WAWebHatchPayloadDebugCapture",
  ["WAWebHatchPayloadDebugStore"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      r("WAWebHatchPayloadDebugStore").record({
        direction: "inbound",
        action: e,
        msgId: n,
        rawBytes: t,
      });
    }
    function s(e, t, n) {
      r("WAWebHatchPayloadDebugStore").record({
        direction: "outbound",
        action: { type: "req", requestId: t, request: e },
        rawBytes: n,
      });
    }
    function u(e, t) {
      r("WAWebHatchPayloadDebugStore").noteOutboundMsgId(e, t);
    }
    var c = { recordInbound: e, recordOutbound: s, noteOutboundMsgId: u };
    l.default = c;
  },
  98,
);
