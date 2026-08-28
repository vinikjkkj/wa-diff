__d(
  "baseTypeaheadDedupEntriesBuilder",
  ["baseTypeaheadFlattenEntries"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return function (t, n) {
        var o = new Set(
            r("baseTypeaheadFlattenEntries")(t).map(function (t) {
              return e(t);
            }),
          ),
          a = new Map();
        for (var i of t) i.type === "section" && a.set(i.key, i);
        var l = n
          .map(function (t) {
            if (t.type === "section") {
              var n = t.entries.filter(function (t) {
                return !o.has(e(t));
              });
              if (n.length === 0) return null;
              var r = a.get(t.key);
              return r != null
                ? ((r.entries = [].concat(r.entries, n)), null)
                : ((t.entries = n), t);
            } else return o.has(e(t)) ? null : t;
          })
          .filter(Boolean);
        return [].concat(t, l);
      };
    }
    l.default = e;
  },
  98,
);
