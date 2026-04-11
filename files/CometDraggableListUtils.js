__d(
  "CometDraggableListUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      if (n >= 0 && t >= 0 && n !== t) {
        var r = Array.from(e),
          o = r.splice(t, 1)[0];
        return (r.splice(n, 0, o), r);
      }
      return e;
    }
    function l(e, t, n) {
      var r = 0;
      if (e === "vertical") {
        var o;
        r = t.pageY - ((o = n == null ? void 0 : n.y) != null ? o : 0);
      } else {
        var a;
        r = t.pageX - ((a = n == null ? void 0 : n.x) != null ? a : 0);
      }
      return r;
    }
    function s(e, t, n) {
      switch (n) {
        case "NEXT_ITEM":
          return Math.min(t + 1, e.length - 1);
        case "PREV_ITEM":
          return Math.max(t - 1, 0);
        default:
          return t;
      }
    }
    ((i.reorderList = e),
      (i.getDistance = l),
      (i.getTargetIndexByNavigationType = s));
  },
  66,
);
