__d(
  "EndianAwareDataView",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e, t, n) {
        (n === void 0 && (n = 0),
          (this.$2 = new DataView(e, n)),
          (this.$1 = t));
      }
      var t = e.prototype;
      return (
        (t.getByteLength = function () {
          return this.$2.byteLength;
        }),
        (t.getU8 = function (t) {
          return this.$2.getUint8(t);
        }),
        (t.getI8 = function (t) {
          return this.$2.getInt8(t);
        }),
        (t.getU16 = function (t) {
          return this.$2.getUint16(t, this.$1);
        }),
        (t.getI16 = function (t) {
          return this.$2.getInt16(t, this.$1);
        }),
        (t.getU32 = function (t) {
          return this.$2.getUint32(t, this.$1);
        }),
        (t.getI32 = function (t) {
          return this.$2.getInt32(t, this.$1);
        }),
        (t.getF32 = function (t) {
          return this.$2.getFloat32(t, this.$1);
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
