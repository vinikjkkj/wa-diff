__d(
  "userSettingsSelector",
  ["AdsUserSettingsProvider", "adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        [r("AdsUserSettingsProvider").toFluxStore()],
        function () {
          return r("AdsUserSettingsProvider")().getData().first();
        },
        { name: i.id + ".userSettingsSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
