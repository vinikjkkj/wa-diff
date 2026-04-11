__d(
  "TNoOpWriteBuffer",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
      function e() {
        this.$1 = 0;
      }
      var t = e.prototype;
      return (
        (t.write = function (t) {
          return ((this.$1 += t.length), t.length);
        }),
        (t.writeByte = function (t) {
          return (this.$1++, 1);
        }),
        (t.writeFloatBE = function (t) {
          return (
            (this.$1 += Float32Array.BYTES_PER_ELEMENT),
            Float32Array.BYTES_PER_ELEMENT
          );
        }),
        (t.writeDoubleBE = function (t) {
          return (
            (this.$1 += Float64Array.BYTES_PER_ELEMENT),
            Float64Array.BYTES_PER_ELEMENT
          );
        }),
        (t.toByteArray = function () {
          throw new Error("operation not supported");
        }),
        (t.currentSize = function () {
          return this.$1;
        }),
        (t.readByte = function () {
          throw new Error("operation not supported");
        }),
        (t.readBytes = function (t) {
          throw new Error("operation not supported");
        }),
        (t.readFloatBE = function () {
          throw new Error("operation not supported");
        }),
        (t.readDoubleBE = function () {
          throw new Error("operation not supported");
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
