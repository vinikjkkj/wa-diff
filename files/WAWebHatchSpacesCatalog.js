__d(
  "WAWebHatchSpacesCatalog",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return {
        spaces: Array.from(e.spaces.values()).sort(l),
        iconMedia: e.icons,
      };
    }
    function l(e, t) {
      if (e.isFavorite !== t.isFavorite) return e.isFavorite ? -1 : 1;
      var n = s(
        e.isFavorite ? e.favoriteOrder : null,
        t.isFavorite ? t.favoriteOrder : null,
      );
      if (n !== 0) return n;
      var r = u(e.accessedAtMs, t.accessedAtMs);
      if (r !== 0) return r;
      var o = c(e.displayName.toLowerCase(), t.displayName.toLowerCase());
      return o !== 0 ? o : c(e.itemKey, t.itemKey);
    }
    function s(e, t) {
      return e == null ? (t == null ? 0 : 1) : t == null ? -1 : e - t;
    }
    function u(e, t) {
      return e == null ? (t == null ? 0 : 1) : t == null ? -1 : t - e;
    }
    function c(e, t) {
      return e < t ? -1 : e > t ? 1 : 0;
    }
    i.hatchSpacesCatalog = e;
  },
  66,
);
