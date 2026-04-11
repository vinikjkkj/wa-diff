__d(
  "TReadBuffer",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
      function e(e) {
        ((this.$1 = e), (this.$2 = 0));
      }
      var t = e.prototype;
      return (
        (t.readByte = function () {
          if (this.$2 < this.$1.length) return this.$1[this.$2++];
          var e = new Error("no available byte to read");
          throw (e.stack, e);
        }),
        (t.readBytes = function (t) {
          if (t < 0) {
            var e = new Error("cannot readBytes of negative length: " + t);
            throw (e.stack, e);
          }
          if (t + this.$2 > this.$1.length) {
            var n = new Error("not enough bytes to read");
            throw (n.stack, n);
          }
          var r = new Uint8Array(this.$1.buffer, this.$3(), t);
          return ((this.$2 += t), r);
        }),
        (t.readFloatBE = function () {
          if (Float32Array.BYTES_PER_ELEMENT + this.$2 > this.$1.length) {
            var e = new Error("not enough bytes to read");
            throw (e.stack, e);
          }
          var t = new DataView(this.$1.buffer).getFloat32(this.$3());
          return ((this.$2 += Float32Array.BYTES_PER_ELEMENT), t);
        }),
        (t.readDoubleBE = function () {
          if (Float64Array.BYTES_PER_ELEMENT + this.$2 > this.$1.length) {
            var e = new Error("not enough bytes to read");
            throw (e.stack, e);
          }
          var t = new DataView(this.$1.buffer).getFloat64(this.$3());
          return ((this.$2 += Float64Array.BYTES_PER_ELEMENT), t);
        }),
        (t.$3 = function () {
          return this.$2 + this.$1.byteOffset;
        }),
        (t.getCurrentCursor = function () {
          return this.$2;
        }),
        (t.writeByte = function (t) {
          var e = new Error("operation not supported");
          throw (e.stack, e);
        }),
        (t.write = function (t) {
          var e = new Error("operation not supported");
          throw (e.stack, e);
        }),
        (t.toByteArray = function () {
          var e = new Error("operation not supported");
          throw (e.stack, e);
        }),
        (t.writeFloatBE = function (t) {
          var e = new Error("operation not supported");
          throw (e.stack, e);
        }),
        (t.writeDoubleBE = function (t) {
          var e = new Error("operation not supported");
          throw (e.stack, e);
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
