__d(
  "AdsGetAvailableIDsSelectors",
  [
    "AdsPENavSectionToAvailableIDStoreMap",
    "adsCreateSelector",
    "adsCreateStoreSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        [],
        function (t) {
          return t;
        },
        { name: i.id + ".getNavSection" },
      ),
      s = r("adsCreateSelector")(
        [e],
        function (t) {
          var e = t ? o("AdsPENavSectionToAvailableIDStoreMap").get(t) : null;
          return e ? e.getAvailableIDs() : [];
        },
        { name: i.id + ".adsGetAvailableIDsSelector" },
      );
    l.adsGetAvailableIDsSelector = s;
  },
  98,
);
