__d(
  "WAWebReportingTokenProtobufUtils",
  ["WABinary", "WAProtoConst", "err"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e & 7;
    }
    function s(e) {
      return e >>> 3;
    }
    function u(e) {
      var t = new (o("WABinary").Binary)();
      return (t.writeVarInt(e), t.readByteArrayView());
    }
    function c(t, n, a) {
      var i = d(t, n, a);
      if (i.value >= 4294967296)
        throw r("err")("Invalid tag value, out of bound: " + i.value);
      var l = e(i.value),
        u = i.end,
        c;
      if (l === o("WAProtoConst").ENC.VARINT) c = m(t, u, a);
      else if (l === o("WAProtoConst").ENC.BINARY) {
        var p = d(t, u, a);
        ((u = p.end), (c = u + p.value));
      } else if (l === o("WAProtoConst").ENC.BIT64) c = u + 8;
      else if (l === o("WAProtoConst").ENC.BIT32) c = u + 4;
      else throw r("err")("Unsupported wire type " + l);
      if (c > a)
        throw r("err")("Protobuf field extends beyond the provided bytes");
      return {
        bytes: t.subarray(n, c),
        end: c,
        fieldNumber: s(i.value),
        tagBytes: t.subarray(n, i.end),
        valueEnd: c,
        valueStart: u,
        wireType: l,
      };
    }
    function d(e, t, n) {
      for (var o = m(e, t, n), a = 1, i = 0, l = t; l < o; l++) {
        if (((i += (e[l] % 128) * a), !Number.isSafeInteger(i)))
          throw r("err")("Protobuf varint exceeds the safe integer range");
        a *= 128;
      }
      return { end: o, value: i };
    }
    function m(e, t, n) {
      for (var o = Math.min(t + 10, n), a = t; a < o; a++) {
        if (a === t + 9 && e[a] > 1) throw r("err")("Invalid protobuf varint");
        if (e[a] < 128) return a + 1;
      }
      throw r("err")("Invalid protobuf varint");
    }
    ((l.getWireTypeFromTag = e),
      (l.getFieldNumberFromTag = s),
      (l.convertToVarInt = u),
      (l.parseRawProtobufField = c));
  },
  98,
);
