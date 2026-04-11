__d(
  "getIntersectionMarginFromViewportMargin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Map();
    function l(t) {
      var n =
          "bottom:" +
          t.bottom +
          "|top:" +
          t.top +
          "|left:" +
          t.left +
          "|right:" +
          t.right,
        r = e.get(n);
      return (
        r == null &&
          ((r = {
            bottom: t.bottom * -1,
            left: t.left * -1,
            right: t.right * -1,
            top: t.top * -1,
          }),
          e.set(n, r)),
        r
      );
    }
    i.default = l;
  },
  66,
);
