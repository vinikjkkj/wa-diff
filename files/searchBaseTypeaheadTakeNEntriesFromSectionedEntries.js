__d(
  "searchBaseTypeaheadTakeNEntriesFromSectionedEntries",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      if (t === 0) return [];
      var n = l(e, t),
        r = n.entryIndex,
        o = n.entryUnionIndex;
      if (o === void 0) return e;
      var a = e.slice(0, o + 1);
      if (r !== void 0 && o !== void 0) {
        var i = a[o];
        i.type === "section" && (i.entries = i.entries.slice(0, r + 1));
      }
      return a;
    }
    function l(e, t) {
      for (var n = t, r = 0; r < e.length; r++) {
        var o = e[r];
        if (o.type !== "section") {
          if ((n--, n === 0)) return { entryUnionIndex: r };
        } else {
          if (n <= o.entries.length)
            return { entryIndex: n - 1, entryUnionIndex: r };
          n -= o.entries.length;
        }
      }
      return {};
    }
    i.default = e;
  },
  66,
);
