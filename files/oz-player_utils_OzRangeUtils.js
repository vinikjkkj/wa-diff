__d(
  "oz-player/utils/OzRangeUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = t.filter(function (t) {
        return t.startTime <= e && t.endTime >= e;
      });
      return n != null && n.length > 0 ? n[0] : null;
    }
    i.getRangeForTime = e;
  },
  66,
);
