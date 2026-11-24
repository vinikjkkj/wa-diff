__d(
  "WAWebTrustedNodeProto",
  ["WAProtoConst", "decodeProtobuf", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 0,
      u = 2,
      c = {},
      d = {},
      m = {};
    ((c.name = "AttestPolicy$NodeIdentity"),
      (c.internalSpec = {
        nodeIdentityType: [1, (e = o("WAProtoConst")).TYPES.INT32],
        nodeIdentity: [2, e.TYPES.BYTES],
      }),
      (d.name = "AttestPolicy$NodeToken"),
      (d.internalSpec = { nodeToken: [1, e.TYPES.BYTES] }),
      (m.name = "AttestPolicy$TrustedNode"),
      (m.internalSpec = {
        nodeServiceName: [1, e.TYPES.STRING],
        nodeIdentity: [2, e.TYPES.MESSAGE, c],
        nodeToken: [3, e.TYPES.MESSAGE, d],
      }));
    function p(e) {
      var t,
        n = o("decodeProtobuf").decodeProtobuf(m, e),
        a = (t = n.nodeToken) == null ? void 0 : t.nodeToken;
      if (a == null || a.byteLength === 0)
        throw r("err")("TrustedNode: missing node_token");
      return {
        chipId: _(n.nodeIdentity),
        nodeToken: new Uint8Array(a),
        serializedTrustedNode: e,
      };
    }
    function _(e) {
      var t,
        n = e == null ? void 0 : e.nodeIdentity;
      if (n == null || n.byteLength === 0) return null;
      var r = (t = e == null ? void 0 : e.nodeIdentityType) != null ? t : s;
      return r !== s && r !== u ? null : new Uint8Array(n);
    }
    l.parseTrustedNode = p;
  },
  98,
);
