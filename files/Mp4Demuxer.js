__d(
  "Mp4Demuxer",
  ["DataViewReader", "Mp4Box", "Mp4FullBox"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        this.$1 = new (r("DataViewReader"))(e);
      }
      var t = e.prototype;
      return (
        (t.parseBox = function () {
          return new (r("Mp4Box"))(this.$1);
        }),
        (t.parseFullBox = function (t) {
          return new (r("Mp4FullBox"))(this.$1, t);
        }),
        (t.parseCanonicalBox = function (t, n) {
          return new t(this.$1, n);
        }),
        (t.skipBox = function (t) {
          this.$1.seek(t.getStart() + t.getSize());
        }),
        (t.withinBox = function (t) {
          var e = this.$1.getCursor();
          return e >= t.getStart() && e < t.getStart() + t.getSize();
        }),
        (t.atEnd = function () {
          return this.$1.getCursor() >= this.$1.getDataView().byteLength;
        }),
        (t.reset = function () {
          this.$1.seek(0);
        }),
        (t.readBoxBodyText = function (t) {
          this.$1.seek(t.getBodyStart());
          var e = new TextDecoder(),
            n = new Uint8Array(this.$1.readBytes(t.getBodySize()));
          return e.decode(n);
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
