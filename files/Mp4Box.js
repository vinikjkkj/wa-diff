__d(
  "Mp4Box",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.$4 = e.getCursor()),
          (this.$1 = e.readUint32()),
          (this.$2 = e.readChars(4)),
          this.$1 === 1
            ? (this.$1 = e.readUint64())
            : this.$1 === 0 && (this.$1 = e.getDataView().byteLength - this.$4),
          this.$2 === "uuid" && (this.$3 = e.readChars(16)),
          (this.$5 = e.getCursor()));
      }
      var t = e.prototype;
      return (
        (t.getBodyStart = function () {
          return this.$5;
        }),
        (t.getBodySize = function () {
          var e = this.$5 - this.$4;
          return this.getSize() - e;
        }),
        (t.getSize = function () {
          return this.$1;
        }),
        (t.getType = function () {
          return this.$2;
        }),
        (t.getUuid = function () {
          return this.$3;
        }),
        (t.getStart = function () {
          return this.$4;
        }),
        (t.inspect = function () {
          return "{ size: " + this.$1 + ", type: " + this.$2 + " }";
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
