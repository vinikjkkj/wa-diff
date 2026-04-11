__d(
  "WABlobToImage",
  ["Promise"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e;
    function l(t) {
      var r;
      return new (e || (e = n("Promise")))(function (e, n) {
        r = new Image();
        var o = URL.createObjectURL(t),
          a = function () {
            return URL.revokeObjectURL(o);
          };
        ((r.onload = function () {
          e({ image: r, releaseImageMemory: a });
        }),
          (r.onerror = function () {
            (a(), n("loadBlobToImage error"));
          }),
          (r.src = o));
      });
    }
    i.blobToImage = l;
  },
  66,
);
