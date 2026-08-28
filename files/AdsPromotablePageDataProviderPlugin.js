__d(
  "AdsPromotablePageDataProviderPlugin",
  ["AdsPromotablePageListDataManager", "LoadObjectMap"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: function (t) {
          return r("LoadObjectMap").create(function (e) {
            (t(function (t) {
              return t.setLoading(e);
            }),
              e.forEach(function (e) {
                return r("AdsPromotablePageListDataManager").loadFor(e);
              }));
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
