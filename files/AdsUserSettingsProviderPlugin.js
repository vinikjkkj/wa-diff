__d(
  "AdsUserSettingsProviderPlugin",
  ["AdsUserSettingsDataManager", "LoadObjectMap"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: function (t) {
          return r("LoadObjectMap").create(function (e) {
            (t(function (t) {
              return t.setLoading(e);
            }),
              e.forEach(function (e) {
                r("AdsUserSettingsDataManager").load(e);
              }));
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
