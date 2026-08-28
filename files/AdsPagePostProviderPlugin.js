__d(
  "AdsPagePostProviderPlugin",
  ["AdsPagePostDataManager", "LoadObjectMap"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: function (t) {
          return r("LoadObjectMap").create(function (e) {
            (t(function (t) {
              return t.setLoading(e);
            }),
              r("AdsPagePostDataManager").loadAll(Array.from(e)));
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
