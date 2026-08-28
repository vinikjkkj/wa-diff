__d(
  "adsCreateVisibleIDsSelectors",
  ["adsCreateSelector", "adsCreateStoreSelector", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o,
        a = (o = r("adsCreateSelector"))(
          [e, t, n],
          function (t, n, r) {
            return t.slice(Math.max(0, n), Math.min(t.length, r + 1));
          },
          { name: i.id + ".visibleIDsSelector" },
        ),
        l = r("adsCreateStoreSelector")(
          [],
          function (t) {
            return t;
          },
          { name: i.id + ".indexSelector" },
        ),
        s = o(
          [l, a],
          function (t, n) {
            return n[t];
          },
          { name: i.id + ".idForIndexSelector" },
        ),
        u = o(
          [a],
          function (t) {
            var e = t.map(function (e, t) {
              return [e, t];
            });
            return r("immutable").Map(e);
          },
          { name: i.id + ".indexForIDsMapSelector" },
        ),
        c = r("adsCreateStoreSelector")(
          [],
          function (t) {
            return t;
          },
          { name: i.id + ".idSelector" },
        ),
        d = o(
          [c, u],
          function (t, n) {
            return n.get(t);
          },
          { name: i.id + ".indexForIDSelector" },
        );
      return {
        visibleIDsSelector: a,
        idForIndexSelector: s,
        indexForIDSelector: d,
      };
    }
    l.default = e;
  },
  98,
);
