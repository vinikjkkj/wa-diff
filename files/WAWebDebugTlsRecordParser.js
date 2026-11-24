__d(
  "WAWebDebugTlsRecordParser",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 5,
      l = 3,
      s = 20,
      u = 24,
      c = 16,
      d = Object.freeze({
        20: "CHANGE_CIPHER_SPEC",
        21: "ALERT",
        22: "HANDSHAKE",
        23: "APPLICATION_DATA",
        24: "HEARTBEAT",
      });
    function m(t) {
      for (var n = [], r = 0; r + e <= t.length && n.length < c; ) {
        var o,
          a = t[r],
          i = t[r + 1],
          m = t[r + 2];
        if (i !== l || a < s || a > u) break;
        var _ = t[r + 3] * 256 + t[r + 4],
          f = Math.min(_, t.length - r - e),
          g = f === _;
        if (
          (n.push({
            availablePayloadBytes: f,
            complete: g,
            contentType: a,
            contentTypeName: (o = d[a]) != null ? o : "UNKNOWN",
            legacyVersion: p(i, m),
            offset: r,
            payloadLength: _,
          }),
          (r += e + f),
          !g)
        )
          break;
      }
      return { records: n, unparsedBytes: t.length - r };
    }
    function p(e, t) {
      return "0x" + _(e) + _(t);
    }
    function _(e) {
      return e.toString(16).padStart(2, "0");
    }
    i.parseTLSRecords = m;
  },
  66,
);
