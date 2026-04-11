__d(
  "DataViewReader",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.$1 = 0), (this.$2 = e));
      }
      var t = e.prototype;
      return (
        (t.seek = function (t) {
          this.$1 = t;
        }),
        (t.skip = function (t) {
          var e = this.$1;
          return ((this.$1 += t), e);
        }),
        (t.readUint8 = function () {
          return this.$2.getUint8(this.skip(1));
        }),
        (t.readUint16 = function (t) {
          return (t === void 0 && (t = !1), this.$2.getUint16(this.skip(2), t));
        }),
        (t.readUint32 = function (t) {
          return (t === void 0 && (t = !1), this.$2.getUint32(this.skip(4), t));
        }),
        (t.readUint64 = function (t) {
          t === void 0 && (t = !1);
          var e, n;
          if (
            (t
              ? ((n = this.$2.getUint32(this.skip(4), !0)),
                (e = this.$2.getUint32(this.skip(4), !0)))
              : ((e = this.$2.getUint32(this.skip(4))),
                (n = this.$2.getUint32(this.skip(4)))),
            e > 2097151)
          ) {
            var r = new RangeError("Overflow reading 64-bit value.");
            throw (r.stack, r);
          }
          return Math.pow(2, 32) * e + n;
        }),
        (t.readInt64 = function (t) {
          t === void 0 && (t = !1);
          var e, n;
          if (
            (t
              ? ((n = this.$2.getInt32(this.skip(4), !0)),
                (e = this.$2.getInt32(this.skip(4), !0)))
              : ((e = this.$2.getInt32(this.skip(4))),
                (n = this.$2.getInt32(this.skip(4)))),
            e > 2097151)
          ) {
            var r = new RangeError("Overflow reading 64-bit value.");
            throw (r.stack, r);
          }
          return Math.pow(2, 32) * (e | 0) + n;
        }),
        (t.readInt16 = function (t) {
          return (t === void 0 && (t = !1), this.$2.getInt16(this.skip(2), t));
        }),
        (t.readInt32 = function (t) {
          return (t === void 0 && (t = !1), this.$2.getInt32(this.skip(4), t));
        }),
        (t.readZeroTerminatedString = function (t) {
          for (var e = "", n = 0, r; n++ < t && (r = this.readUint8()); )
            e += String.fromCharCode(r);
          return e;
        }),
        (t.readChars = function (t) {
          for (var e = ""; t-- > 0; )
            e += String.fromCharCode(this.$2.getUint8(this.skip(1)));
          return e;
        }),
        (t.readBytes = function (t) {
          for (var e = []; t-- > 0; ) e.push(this.$2.getUint8(this.skip(1)));
          return e;
        }),
        (t.getDataView = function () {
          return this.$2;
        }),
        (t.getCursor = function () {
          return this.$1;
        }),
        (t.hasMoreData = function () {
          return this.$2.byteLength - this.getCursor() > 0;
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
