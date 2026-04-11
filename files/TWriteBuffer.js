__d(
  "TWriteBuffer",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
      function e(t) {
        (t === void 0 && (t = e.DEFAULT_BYTE_BUFFER_SIZE),
          (this.$1 = new DataView(new ArrayBuffer(t))),
          (this.$2 = 0));
      }
      var t = e.prototype;
      return (
        (t.write = function (t) {
          this.$2 + t.length > this.$1.byteLength &&
            this.$3(this.$2 + t.length);
          for (var e = 0; e < t.length; e++)
            this.$1.setUint8(this.$2 + e, t[e]);
          return ((this.$2 += t.length), t.length);
        }),
        (t.writeByte = function (t) {
          return (
            this.$2 + 1 > this.$1.byteLength && this.$3(this.$2 + 1),
            this.$1.setUint8(this.$2, t),
            this.$2++,
            1
          );
        }),
        (t.writeFloatBE = function (t) {
          return (
            this.$2 + Float32Array.BYTES_PER_ELEMENT > this.$1.byteLength &&
              this.$3(this.$2 + Float32Array.BYTES_PER_ELEMENT),
            this.$1.setFloat32(this.$2, t),
            (this.$2 += Float32Array.BYTES_PER_ELEMENT),
            Float32Array.BYTES_PER_ELEMENT
          );
        }),
        (t.writeDoubleBE = function (t) {
          return (
            this.$2 + Float64Array.BYTES_PER_ELEMENT > this.$1.byteLength &&
              this.$3(this.$2 + Float64Array.BYTES_PER_ELEMENT),
            this.$1.setFloat64(this.$2, t),
            (this.$2 += Float64Array.BYTES_PER_ELEMENT),
            Float64Array.BYTES_PER_ELEMENT
          );
        }),
        (t.toByteArray = function () {
          var e = new Uint8Array(this.$1.buffer, 0, this.$2);
          return e;
        }),
        (t.currentSize = function () {
          return this.$2;
        }),
        (t.getUnderlyingDataView = function () {
          return this.$1;
        }),
        (t.$3 = function (t) {
          var e = t * 2;
          if (!Number.isSafeInteger(e)) {
            var n = new Error("unable to resize");
            throw (n.stack, n);
          }
          for (
            var r = new DataView(new ArrayBuffer(e)), o = 0;
            o < this.$2;
            o++
          )
            r.setUint8(o, this.$1.getUint8(o));
          this.$1 = r;
        }),
        (t.readByte = function () {
          var e = new Error("operation not supported");
          throw (e.stack, e);
        }),
        (t.readBytes = function (t) {
          var e = new Error("operation not supported");
          throw (e.stack, e);
        }),
        (t.readFloatBE = function () {
          var e = new Error("operation not supported");
          throw (e.stack, e);
        }),
        (t.readDoubleBE = function () {
          var e = new Error("operation not supported");
          throw (e.stack, e);
        }),
        e
      );
    })();
    ((e.DEFAULT_BYTE_BUFFER_SIZE = 16), (i.default = e));
  },
  66,
);
