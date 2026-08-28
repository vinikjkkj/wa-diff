__d(
  "VideoEventLogger",
  ["MediaUploadFalcoLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        this.$1 = new (r("MediaUploadFalcoLogger"))(e, t);
      }
      var t = e.prototype;
      return (
        (t.subscribe = function (t, n) {
          this.$1.subscribe(t, n);
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
