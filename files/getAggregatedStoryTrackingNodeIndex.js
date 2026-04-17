__d(
  "getAggregatedStoryTrackingNodeIndex",
  ["TrackingNodes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      for (
        var t = r("TrackingNodes").parseTrackingNodeString(e.join("")),
          n = 0,
          o = 0;
        o < t.length;
        o++
      )
        if (t[o][0] === 340 && t[o].length > 1) return ((n = t[o][1]), n);
      return n;
    }
    l.default = e;
  },
  98,
);
