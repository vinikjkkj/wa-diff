__d(
  "intersectionObserverEntryIsIntersecting",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e.isIntersecting != null
        ? e.isIntersecting
        : e.intersectionRatio > 0 ||
            (e.intersectionRect &&
              (e.intersectionRect.height > 0 || e.intersectionRect.width > 0));
    }
    i.default = e;
  },
  66,
);
