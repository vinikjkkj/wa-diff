__d(
  "webTableGetNextSortableState",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.sort,
        n = e.sortKey,
        r = e.defaultDirection,
        o = e.allowUnsortedState,
        a = e.allowedDirections,
        i = a === void 0 ? ["ascending", "descending"] : a;
      if (t == null || t.sortKey !== n) return { sortKey: n, direction: r };
      if (t.direction === r) {
        var l = r === "ascending" ? "descending" : "ascending";
        return i != null && i.includes(l)
          ? { sortKey: n, direction: l }
          : o
            ? null
            : { sortKey: n, direction: r };
      }
      return o === !1 ? { sortKey: n, direction: r } : null;
    }
    i.default = e;
  },
  66,
);
