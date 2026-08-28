__d(
  "AdsPromotablePageReducerPlugin",
  ["LoadObject"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.accountID,
            o = n.promotablePages,
            a = t.get(e).getValue();
          if (a == null)
            return t.set(
              e,
              r("LoadObject").withValue(o, { creatorModuleID: i.id }),
            );
          var l = a.concat(o);
          return t.set(
            e,
            r("LoadObject").withValue(l, { creatorModuleID: i.id }),
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
