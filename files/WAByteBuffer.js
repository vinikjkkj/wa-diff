__d(
  "WAByteBuffer",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 16,
      s = new ArrayBuffer(0),
      u = (function () {
        function t(t) {
          if (
            ((this.offset = 0),
            (this.limit = 0),
            (this.capacity = t != null ? t : e),
            t == null || t < 0)
          )
            throw r("err")("RangeError: Illegal capacity");
          ((this.buffer =
            this.capacity === 0 ? s : new ArrayBuffer(this.capacity)),
            (this.view =
              this.capacity === 0 ? null : new DataView(this.buffer)));
        }
        var n = t.prototype;
        return (
          (n.toArrayBuffer = function (t) {
            t === void 0 && (t = !1);
            var e = this.offset,
              n = this.limit;
            if (e > n) {
              var o = e;
              ((e = n), (n = o));
            }
            if (e == null || e % 1 !== 0)
              throw r("err")("TypeError: Illegal offset: Not a valid integer");
            if (((e >>>= 0), n == null || n % 1 !== 0))
              throw r("err")("TypeError: Illegal limit: Not a valid integer");
            if (((n >>>= 0), e < 0 || e > n || n > this.buffer.byteLength))
              throw r("err")(
                "RangeError: Illegal range: 0 <= " +
                  e +
                  " <= " +
                  n +
                  " <= " +
                  this.buffer.byteLength,
              );
            if (!t && e === 0 && n === this.buffer.byteLength)
              return this.buffer;
            if (e === n) return s;
            var a = new ArrayBuffer(n - e);
            return (
              new Uint8Array(a).set(
                new Uint8Array(this.buffer).subarray(e, n),
                0,
              ),
              a
            );
          }),
          (n.toBinaryString = function (t, n) {
            var e = t != null ? t : this.offset,
              o = n != null ? n : this.limit;
            if (e == null || e % 1 !== 0)
              throw r("err")("TypeError: Illegal begin: Not a valid integer");
            if (((e >>>= 0), o == null || o % 1 !== 0))
              throw r("err")("TypeError: Illegal end: Not a valid integer");
            if (((o >>>= 0), e < 0 || e > o || o > this.buffer.byteLength))
              throw r("err")(
                "RangeError: Illegal range: 0 <= " +
                  e +
                  " <= " +
                  o +
                  " <= " +
                  this.buffer.byteLength,
              );
            if (e === o) return "";
            for (var a = [], i = []; e < o; ) {
              var l;
              (a.push((l = this.view) == null ? void 0 : l.getUint8(e++)),
                a.length >= 1024 &&
                  (i.push(String.fromCharCode.apply(String, a)), (a = [])));
            }
            return i.join("") + String.fromCharCode.apply(String, a);
          }),
          t
        );
      })();
    function c(e) {
      if (typeof e != "string")
        throw r("err")("TypedError: Illegal input => not a string");
      for (var t = e.length, n = new u(t), o = 0; o < t; o++) {
        var a,
          i = e.charCodeAt(o);
        if (i > 255)
          throw r("err")(
            "RangeError: Illegal charCode at " + o + ": 0 <= " + i + " <= 255",
          );
        (a = n.view) == null || a.setUint8(o, i);
      }
      return ((n.limit = t), n.toArrayBuffer());
    }
    function d(e) {
      var t = new u(0);
      return (
        e.byteLength > 0 &&
          ((t.buffer = e),
          (t.offset = 0),
          (t.limit = e.byteLength),
          (t.view = e.byteLength > 0 ? new DataView(e) : null)),
        t.toBinaryString()
      );
    }
    function m(e) {
      if (e instanceof Uint8Array) {
        var t = new u(0);
        return (
          e.length > 0 &&
            ((t.buffer = e.buffer),
            (t.offset = e.byteOffset),
            (t.limit = e.byteOffset + e.length),
            (t.view = e.length > 0 ? new DataView(e.buffer) : null)),
          t.toArrayBuffer()
        );
      } else
        throw r("err")(
          "TypeError: Illegal input => not an Uint8Array but " + typeof e,
        );
    }
    function p(e) {
      if (e instanceof ArrayBuffer) {
        var t = new u(0);
        return (
          e.byteLength > 0 &&
            ((t.buffer = e),
            (t.offset = 0),
            (t.limit = e.byteLength),
            (t.view = e.byteLength > 0 ? new DataView(e) : null)),
          t.toArrayBuffer()
        );
      } else
        throw r("err")(
          "TypeError: Illegal input => not an ArrayBuffer but " + typeof e,
        );
    }
    ((l.wrapString = c),
      (l.wrapBufferToString = d),
      (l.wrapUint8Array = m),
      (l.wrapArrayBuffer = p));
  },
  98,
);
