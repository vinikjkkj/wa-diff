__d(
  "oz-player/utils/OzPositionToViewportUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      var r = t
        .filter(function (e) {
          var t = e.position;
          if (t == null) return !1;
          var r = t.y - window.scrollY;
          return r >= 0 || (t.height + r) / t.height > n;
        })
        .sort(function (e, t) {
          return e.position == null || t.position == null
            ? 0
            : e.position.y - t.position.y;
        });
      return r.findIndex(function (t) {
        return t.video === e;
      });
    }
    function l(e) {
      return e.isIntersecting != null
        ? e.isIntersecting
        : e.intersectionRatio > 0 ||
            (e.intersectionRect &&
              (e.intersectionRect.height > 0 || e.intersectionRect.width > 0));
    }
    ((i.determinePositionIndexOfVideoFromViewportVertically = e),
      (i.intersectionObserverEntryIsIntersecting = l));
  },
  66,
);
