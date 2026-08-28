__d(
  "genDurationAndDimensionsFromVideoFile",
  ["Promise"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e;
    function l(t) {
      var r = document.createElement("video"),
        o = new (e || (e = n("Promise")))(function (e, t) {
          ((r.onloadedmetadata = function () {
            e({
              duration: r.duration,
              height: r.videoHeight,
              width: r.videoWidth,
            });
          }),
            (r.onerror = function () {
              t();
            }));
        });
      return (
        t instanceof File ? (r.src = URL.createObjectURL(t)) : (r.src = t),
        o
      );
    }
    i.default = l;
  },
  66,
);
