__d(
  "MediaUploadAsset",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.mediaType = e.mediaType), (this.data = e.data));
      }
      var t = e.prototype;
      return (
        (t.dataAsFile = function () {
          var e = this.data;
          return e.mode === "File" ? e : null;
        }),
        (t.dataAsHTMLInput = function () {
          var e = this.data;
          return e.mode === "HTMLInput" ? e : null;
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
