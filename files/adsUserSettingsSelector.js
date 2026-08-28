__d(
  "adsUserSettingsSelector",
  ["AdsUserSettingsProvider", "adsCreateStoreThunkSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreThunkSelector")(
      r("AdsUserSettingsProvider").toFluxStore(),
      function (e) {
        return r("AdsUserSettingsProvider")().get(e);
      },
    );
    l.adsUserSettingsSelector = e;
  },
  98,
);
