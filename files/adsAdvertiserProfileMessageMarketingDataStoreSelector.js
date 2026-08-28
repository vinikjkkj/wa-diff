__d(
  "adsAdvertiserProfileMessageMarketingDataStoreSelector",
  ["AdvertiserProfileMessageMarketingDataStore", "adsCreateStoreThunkSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreThunkSelector")(
        r("AdvertiserProfileMessageMarketingDataStore"),
        function (e) {
          return r("AdvertiserProfileMessageMarketingDataStore").get(e);
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
