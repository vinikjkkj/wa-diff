__d(
  "WAWebHatchPayloadDebugCapture",
  ["WAWebHatchPayloadDebugStore"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      r("WAWebHatchPayloadDebugStore").record({
        direction: "inbound",
        action: e,
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
    var u = { recordInbound: e, recordOutbound: s };
    l.default = u;
  },
  98,
);
