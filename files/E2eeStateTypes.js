__d(
  "E2eeStateTypes",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = (e = n("$InternalEnum"))({ NONE: 0, NEGOTIATED: 1, STATIC: 2 }),
      s = e({ NONE: 0, MEDIA_CHANNEL_KEY_PROTOCOL: 1 }),
      u = e({ SENDER_KEY: 0, SESSION_KEY: 1 }),
      c = e({ NOT_SET: 0, CONTROL: 1, TEST: 2 }),
      d = e({ ENABLED: 0, DISABLED: 1, FALLBACK: 2 });
    a.exports = {
      E2eeKeyNegotiationProtocolEnum: u,
      E2eeStateCapabilitiesEnum: s,
      InfraMandatedExpStatus: c,
      KeyNegotiationModeEnum: l,
      SignalingKeyMessageProtocolEnum: d,
    };
  },
  null,
);
