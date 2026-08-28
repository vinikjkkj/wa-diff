__d(
  "BackgroundImageDOMImageSizePool",
  ["CachedDOMImageSizePool"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (r("CachedDOMImageSizePool"))(50, 6e5);
    function s() {
      return e;
    }
    function u(t) {
      e = t;
    }
    ((l.getCache = s), (l.setCache = u));
  },
  98,
);
