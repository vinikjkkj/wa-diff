__d(
  "Mp4FullBox",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.$2 = e.readUint8()),
          (this.$1 = e.readUint8()),
          (this.$1 = e.readUint8() + (this.$1 << 8)),
          (this.$1 = e.readUint8() + (this.$1 << 8)),
          (this.$3 = t));
      }
      var t = e.prototype;
      return (
        (t.getVersion = function () {
          return this.$2;
        }),
        (t.getFlags = function () {
          return this.$1;
        }),
        (t.getBox = function () {
          return this.$3;
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
