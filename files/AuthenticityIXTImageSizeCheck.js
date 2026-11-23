__d(
  "AuthenticityIXTImageSizeCheck",
  ["Promise"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = 1e3,
      s = 17e6;
    function u(e, t) {
      return { tooLarge: e * t > s, tooSmall: Math.max(e, t) < l };
    }
    function c(t) {
      return new (e || (e = n("Promise")))(function (e) {
        if (t.type.split("/")[0] !== "image") {
          e({ tooLarge: !1, tooSmall: !1 });
          return;
        }
        var n = URL.createObjectURL(t),
          r = new Image();
        ((r.onload = function () {
          URL.revokeObjectURL(n);
          var t = r.height,
            o = r.width,
            a = u(o, t),
            i = a.tooLarge,
            l = a.tooSmall;
          e({ height: t, tooLarge: i, tooSmall: l, width: o });
        }),
          (r.onerror = function () {
            (URL.revokeObjectURL(n), e({ tooLarge: !1, tooSmall: !1 }));
          }),
          (r.src = n));
      });
    }
    ((i.MIN_IMAGE_SIDE_PX = l),
      (i.evaluateIdImageSize = u),
      (i.checkIdImageSize = c));
  },
  66,
);
