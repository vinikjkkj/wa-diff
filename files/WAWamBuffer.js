__d(
  "WAWamBuffer",
  ["WABinary", "WAWamTypes", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 5,
      s = 47,
      u = 0,
      c = 1,
      d = 2,
      m = 1,
      p = 2,
      _ = 0,
      f = 4,
      g = 8,
      h = (function () {
        function t(t, n, r, a) {
          var i = this;
          ((this.$5 = !1), (this.$6 = !1));
          var l = new (o("WABinary").Binary)(void 0, !0);
          switch (
            (l.writeString("WAM"),
            l.writeUint8(e),
            l.writeUint8(n),
            l.writeUint16(r),
            t)
          ) {
            case "regular":
              l.writeUint8(u);
              break;
            case "realtime":
              l.writeUint8(c);
              break;
            default:
              l.writeUint8(d);
          }
          ((this.$1 = t),
            (this.$2 = l),
            (this.$3 = r),
            (this.$4 = n),
            a.forEach(function (e, t) {
              return void i.writeGlobal(t, e);
            }));
        }
        var n = t.prototype;
        return (
          (n.writeGlobal = function (t, n) {
            if (n == null) {
              v(this.$2, t, _);
              return;
            }
            if (typeof n == "string") b(this.$2, t, _, n);
            else if (typeof n == "number") y(this.$2, t, _, n);
            else if (typeof n == "boolean") y(this.$2, t, _, n ? 1 : 0);
            else throw r("err")("Incorrect value type " + typeof n);
          }),
          (n.writeEvent = function (t, n, r, a) {
            var e = this.$2;
            y(e, s, _, Math.floor(t / 1e3));
            var i = S(r),
              l = i === -1 ? m | f : m;
            y(e, n, l, a);
            for (var u = 0; u <= i; u += 3) {
              var c = r[u + 2];
              if (c != null) {
                var d = r[u],
                  g = r[u + 1],
                  h = u === i ? p | f : p;
                g === o("WAWamTypes").TYPES.INT
                  ? y(e, d, h, c)
                  : g === o("WAWamTypes").TYPES.BOOL
                    ? y(e, d, h, c ? 1 : 0)
                    : g === o("WAWamTypes").TYPES.STRING
                      ? b(e, d, h, c)
                      : C(e, d, h, c);
              }
            }
            this.$6 = !0;
          }),
          (n.getKey = function () {
            return {
              streamId: this.$4,
              sequenceNumber: this.$3,
              channel: this.$1,
            };
          }),
          (n.getSize = function () {
            return this.$2.size();
          }),
          (n.peek = function () {
            return this.$2.peek(function (e) {
              return e.readByteArrayView();
            });
          }),
          (n.getBuffer__INTERNAL = function () {
            return this.$2;
          }),
          (n.isFinalized = function () {
            return this.$5;
          }),
          (n.finalize = function () {
            this.$5 = !0;
          }),
          (n.hasEvents = function () {
            return this.$6;
          }),
          t
        );
      })();
    function y(e, t, n, r) {
      r === 0
        ? v(e, t, n | 16)
        : r === 1
          ? v(e, t, n | 32)
          : -128 <= r && r < 128
            ? (v(e, t, n | 48), e.writeInt8(r))
            : -32768 <= r && r < 32768
              ? (v(e, t, n | 64), e.writeInt16(r))
              : -2147483648 <= r && r < 2147483648
                ? (v(e, t, n | 80), e.writeInt32(r))
                : (v(e, t, n | 96), e.writeInt64(r));
    }
    function C(e, t, n, r) {
      (v(e, t, n | 112), e.writeFloat64(r));
    }
    function b(e, t, n, r) {
      var a = o("WABinary").numUtf8Bytes(r);
      (a < 256
        ? (v(e, t, n | 128), e.writeUint8(a))
        : a < 65536
          ? (v(e, t, n | 144), e.writeUint16(a))
          : (v(e, t, n | 160), e.writeUint32(a)),
        e.writeString(r));
    }
    function v(e, t, n) {
      t < 256
        ? (e.writeUint8(n), e.writeUint8(t))
        : (e.writeUint8(n | g), e.writeUint16(t));
    }
    function S(e) {
      for (var t = -1, n = 0; n < e.length; n += 3) e[n + 2] != null && (t = n);
      return t;
    }
    function R(e) {
      for (var t = S(e), n = 0; n <= t; n += 3) {
        var r = e[n + 2];
        if (r != null) {
          var a = e[n + 1];
          if (a === o("WAWamTypes").TYPES.INT && isNaN(r)) return !1;
        }
      }
      return !0;
    }
    function L(e) {
      return typeof e == "number" ? !isNaN(e) : !0;
    }
    ((l.WamBuffer = h), (l.canWriteEvent = R), (l.canWriteGlobal = L));
  },
  98,
);
