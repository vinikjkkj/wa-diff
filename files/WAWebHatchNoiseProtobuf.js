__d(
  "WAWebHatchNoiseProtobuf",
  ["WABinary", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 536870911;
    function s(e, t) {
      if (!Number.isSafeInteger(e) || e < 0)
        throw r("err")("WAWebHatchNoiseProtobuf: invalid " + t);
    }
    function u(t) {
      if (!Number.isSafeInteger(t) || t < 1 || t > e)
        throw r("err")("WAWebHatchNoiseProtobuf: invalid field number");
    }
    function c(e, t) {
      var n = e < 0 ? 4294967296 + e : e,
        r = t < 0 ? 4294967296 + t : t,
        o = n * 4294967296 + r;
      return (s(o, "varint"), o);
    }
    var d = (function () {
        function e() {
          this.$1 = new (o("WABinary").Binary)();
        }
        var t = e.prototype;
        return (
          (t.writeVarint = function (t, n, r) {
            (r === void 0 && (r = !1),
              u(t),
              s(n, "varint"),
              (n !== 0 || r) &&
                (this.$1.writeVarInt(t * 8), this.$1.writeVarInt(n)));
          }),
          (t.writeBytes = function (t, n, r) {
            (r === void 0 && (r = !1),
              u(t),
              (n.length !== 0 || r) &&
                (this.$1.writeVarInt(t * 8 + 2),
                this.$1.writeVarInt(n.length),
                this.$1.writeByteArray(n)));
          }),
          (t.writeString = function (t, n, r) {
            (r === void 0 && (r = !1),
              this.writeBytes(t, new TextEncoder().encode(n), r));
          }),
          (t.finish = function () {
            return this.$1.peek(
              function (e) {
                return e.readByteArrayView().slice();
              },
              void 0,
            );
          }),
          e
        );
      })(),
      m = (function () {
        function e(e) {
          this.$1 = new (o("WABinary").Binary)(e);
        }
        var t = e.prototype;
        return (
          (t.nextField = function () {
            if (this.$1.size() === 0) return null;
            var e = this.$1.readVarInt(c),
              t = Math.floor(e / 8),
              n = e % 8;
            if ((u(t), n !== 0 && n !== 1 && n !== 2 && n !== 5))
              throw r("err")("WAWebHatchNoiseProtobuf: unsupported wire type");
            return { number: t, wireType: n };
          }),
          (t.readVarint = function (t) {
            if (t !== 0)
              throw r("err")("WAWebHatchNoiseProtobuf: expected varint");
            return this.$1.readVarInt(c);
          }),
          (t.readBytes = function (t) {
            if (t !== 2)
              throw r("err")(
                "WAWebHatchNoiseProtobuf: expected length-delimited field",
              );
            var e = this.$1.readVarInt(c);
            return this.$1.readByteArrayView(e).slice();
          }),
          (t.readString = function (t) {
            return new TextDecoder("utf-8", { fatal: !0 }).decode(
              this.readBytes(t),
            );
          }),
          (t.skip = function (t) {
            e: {
              if (t === 0) {
                this.$1.readVarInt(c);
                break e;
              }
              if (t === 1) {
                this.$1.advance(8);
                break e;
              }
              if (t === 2) {
                this.$1.advance(this.$1.readVarInt(c));
                break e;
              }
              if (t === 5) {
                this.$1.advance(4);
                break e;
              }
              throw r("err")("WAWebHatchNoiseProtobuf: unsupported wire type");
            }
          }),
          e
        );
      })();
    ((l.WAWebHatchNoiseProtoWriter = d), (l.WAWebHatchNoiseProtoReader = m));
  },
  98,
);
