__d(
  "genDimensionsFromImageFile",
  ["Promise"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e;
    function l(t) {
      var r = new Image(),
        o = new (e || (e = n("Promise")))(function (e, t) {
          ((r.onload = function () {
            e({ height: r.height, width: r.width });
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
