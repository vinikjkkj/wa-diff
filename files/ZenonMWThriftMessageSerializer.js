__d(
  "ZenonMWThriftMessageSerializer",
  [
    "CompactSerializer",
    "MqttThriftHeaderSerializers",
    "MultiwayCommonSerializers",
    "TCompactProtocol",
    "TReadBuffer",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      t === void 0 && (t = !1);
      var n = o("CompactSerializer").serialize(
          e.messageHeader,
          o("MultiwayCommonSerializers").serializeRtcMessageHeader,
        ),
        r = o("CompactSerializer").serialize(
          e.messageBody,
          o("MultiwayCommonSerializers").serializeRtcMessageBody,
        );
      if (t) {
        var a = new Uint8Array(n.length + r.length);
        return (a.set(n), a.set(r, n.length), a);
      }
      var i = {},
        l = o("CompactSerializer").serialize(
          i,
          o("MqttThriftHeaderSerializers").serializeMqttThriftHeader,
        ),
        s = new Uint8Array(l.length + n.length + r.length);
      return (s.set(l), s.set(n, l.length), s.set(r, l.length + n.length), s);
    }
    function s(e, t) {
      t === void 0 && (t = !1);
      var n = new (r("TReadBuffer"))(e),
        a = new (r("TCompactProtocol"))(n);
      t || o("MqttThriftHeaderSerializers").deserializeMqttThriftHeader(a);
      var i = o("MultiwayCommonSerializers").deserializeRtcMessageHeader(a),
        l = o("MultiwayCommonSerializers").deserializeRtcMessageBody(a);
      return { messageBody: l, messageHeader: i };
    }
    ((l.serializeMWThriftMessage = e), (l.deserializeMWThriftMessage = s));
  },
  98,
);
