__d(
  "WAWebHatchNoiseTransportFrameCodec",
  ["WABinary", "WAHex", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("WAHex").createHexLongFrom32Bits(0, 0);
    function s(e) {
      return e.readVarInt(function (e, t) {
        if (e !== 0)
          throw r("err")("WAWebHatchNoiseTransportFrameCodec: uint32 overflow");
        return t < 0 ? 4294967296 + t : t;
      });
    }
    function u(e, t) {
      e: {
        if (t === 0) {
          e.readVarInt(function () {
            return 0;
          });
          break e;
        }
        if (t === 1) {
          e.advance(8);
          break e;
        }
        if (t === 2) {
          e.advance(s(e));
          break e;
        }
        if (t === 3 || t === 4)
          throw r("err")(
            "WAWebHatchNoiseTransportFrameCodec: groups are unsupported",
          );
        if (t === 5) {
          e.advance(4);
          break e;
        }
        throw r("err")(
          "WAWebHatchNoiseTransportFrameCodec: unsupported wire type",
        );
      }
    }
    function c(e, t) {
      if (!Number.isInteger(e) || e < 0 || e > 4294967295)
        throw r("err")("WAWebHatchNoiseTransportFrameCodec: invalid " + t);
    }
    function d(e) {
      var t = e % 8;
      return { field: (e - t) / 8, wire: t };
    }
    function m(t) {
      if (
        (c(t.chunkIndex, "chunkIndex"),
        c(t.totalChunks, "totalChunks"),
        o("WAHex").hexLongIsNegative(t.chunkId))
      )
        throw r("err")("WAWebHatchNoiseTransportFrameCodec: invalid chunkId");
      var n = new (o("WABinary").Binary)();
      return (
        o("WAHex").isBiggerHexLong(t.chunkId, e) &&
          (n.writeVarInt(8), n.writeVarIntFromHexLong(t.chunkId)),
        t.chunkIndex !== 0 && (n.writeVarInt(16), n.writeVarInt(t.chunkIndex)),
        t.totalChunks !== 0 &&
          (n.writeVarInt(24), n.writeVarInt(t.totalChunks)),
        t.payload.length !== 0 &&
          (n.writeVarInt(34),
          n.writeVarInt(t.payload.length),
          n.writeByteArray(t.payload)),
        n.readByteArrayView().slice()
      );
    }
    function p(t) {
      for (
        var n = new (o("WABinary").Binary)(t),
          a = e,
          i = 0,
          l = 0,
          c = new Uint8Array(0);
        n.size() !== 0;
      ) {
        var m = d(s(n)),
          p = m.field,
          _ = m.wire;
        e: {
          if (p === 1 && _ !== 0)
            throw r("err")(
              "WAWebHatchNoiseTransportFrameCodec: invalid wire for field 1",
            );
          if (p === 1) {
            a = n.readVarInt(o("WAHex").createHexLongFrom32Bits);
            break e;
          }
          if (p === 2 && _ !== 0)
            throw r("err")(
              "WAWebHatchNoiseTransportFrameCodec: invalid wire for field 2",
            );
          if (p === 2) {
            i = s(n);
            break e;
          }
          if (p === 3 && _ !== 0)
            throw r("err")(
              "WAWebHatchNoiseTransportFrameCodec: invalid wire for field 3",
            );
          if (p === 3) {
            l = s(n);
            break e;
          }
          if (p === 4 && _ !== 2)
            throw r("err")(
              "WAWebHatchNoiseTransportFrameCodec: invalid wire for field 4",
            );
          if (p === 4) {
            c = n.readByteArrayView(s(n)).slice();
            break e;
          }
          if (p === 0)
            throw r("err")(
              "WAWebHatchNoiseTransportFrameCodec: invalid field zero",
            );
          {
            u(n, _);
            break e;
          }
        }
      }
      return { chunkId: a, chunkIndex: i, payload: c, totalChunks: l };
    }
    ((l.encodeTransportFrame = m), (l.decodeTransportFrame = p));
  },
  98,
);
