__d(
  "cometFeedMesssageOrderedListItemBlockUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (e == null) return null;
      try {
        var t = JSON.parse(e),
          n = t.marker;
        if (n != null) return n;
      } catch (e) {}
      return null;
    }
    i.parseListItemMarker = e;
  },
  66,
);
