__d(
  "adsUpdateSelectedAdObjectIDs",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = /^[0-9]+$/;
    function s(t, n) {
      var o = n.filter(function (t) {
          return t && e.test(t);
        }),
        a = r("immutable").OrderedSet(o);
      return a.equals(t.selection) ? t : { selection: a, cachedSelectedIDs: o };
    }
    l.default = s;
  },
  98,
);
