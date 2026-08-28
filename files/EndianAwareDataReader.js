__d(
  "EndianAwareDataReader",
  ["EndianAwareDataView"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.$2 = new (r("EndianAwareDataView"))(e, t)), (this.$1 = 0));
      }
      var t = e.prototype;
      return (
        (t.canReadU8 = function () {
          return this.$1 < this.$2.getByteLength();
        }),
        (t.canReadU16 = function () {
          return this.$1 < this.$2.getByteLength() - 1;
        }),
        (t.canReadU32 = function () {
          return this.$1 < this.$2.getByteLength() - 3;
        }),
        (t.seekTo = function (t) {
          this.$1 = t;
        }),
        (t.seekRelative = function (t) {
          this.$1 += t;
        }),
        (t.readU8 = function () {
          var e = this.$2.getU8(this.$1);
          return ((this.$1 += 1), e);
        }),
        (t.peekU8 = function () {
          return this.$2.getU8(this.$1);
        }),
        (t.readI8 = function () {
          var e = this.$2.getI8(this.$1);
          return ((this.$1 += 1), e);
        }),
        (t.peekI8 = function () {
          return this.$2.getI8(this.$1);
        }),
        (t.readU16 = function () {
          var e = this.$2.getU16(this.$1);
          return ((this.$1 += 2), e);
        }),
        (t.peekU16 = function () {
          return this.$2.getU16(this.$1);
        }),
        (t.readI16 = function () {
          var e = this.$2.getI16(this.$1);
          return ((this.$1 += 2), e);
        }),
        (t.peekI16 = function () {
          return this.$2.getI16(this.$1);
        }),
        (t.readU32 = function () {
          var e = this.$2.getU32(this.$1);
          return ((this.$1 += 4), e);
        }),
        (t.peekU32 = function () {
          return this.$2.getU32(this.$1);
        }),
        (t.readI32 = function () {
          var e = this.$2.getI32(this.$1);
          return ((this.$1 += 4), e);
        }),
        (t.peekI32 = function () {
          return this.$2.getI32(this.$1);
        }),
        (t.readF32 = function () {
          var e = this.$2.getF32(this.$1);
          return ((this.$1 += 4), e);
        }),
        (t.peekF32 = function () {
          return this.$2.getF32(this.$1);
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
