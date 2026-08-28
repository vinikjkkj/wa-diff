__d(
  "AdsPromotablePageListBatchLoadedReducerPlugin",
  ["AdsPromotablePageReducerPlugin", "emptyObject"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = t;
          for (var o of n.responses) {
            var a = o[0],
              i = o[1];
            e = r("AdsPromotablePageReducerPlugin").reduce(
              e,
              { accountID: a, promotablePages: i.data },
              r("emptyObject"),
            );
          }
          return e;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
