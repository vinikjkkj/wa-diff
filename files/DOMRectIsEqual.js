__d(
  "DOMRectIsEqual",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return !e && !t
        ? !0
        : !e || !t
          ? !1
          : e.x === t.x &&
            e.y === t.y &&
            e.width === t.width &&
            e.height === t.height;
    }
    i.default = e;
  },
  66,
);
