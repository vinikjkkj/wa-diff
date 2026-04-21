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
          var e = new Error("operation not supported");
          throw (e.stack, e);
        }),
        (t.currentSize = function () {
          return this.$1;
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
    i.default = e;
  },
  66,
);
