__d(
  "GeoPrivateVirtualListScrollTo",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      try {
        e.scrollTo(t);
      } catch (n) {
        if (n instanceof TypeError)
          t.left != null
            ? (e.scrollLeft = t.left)
            : t.top != null && (e.scrollTop = t.top);
        else throw n;
      }
    }
    i.default = e;
  },
  66,
);
