__d(
  "adsMgmtAvailableIDsSelector",
  [
    "AdsInsightsTableViewStore",
    "AdsPENavSectionToAvailableIDStoreMap",
    "AdsPENavigationUtils",
    "adsCreateStoreSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
      [r("AdsInsightsTableViewStore")].concat(
        o("AdsPENavSectionToAvailableIDStoreMap").toArray(),
      ),
      function () {
        var e = r("AdsInsightsTableViewStore").getOrNull(),
          t = e
            ? r("AdsPENavigationUtils").getNavStateFromObjectType(e.objectType)
            : null,
          n =
            t && t.section
              ? o("AdsPENavSectionToAvailableIDStoreMap").get(t.section)
              : null;
        return n ? n.getAvailableIDs() : [];
      },
      { name: i.id + ".adsMgmtAvailableIDsSelector" },
    );
    l.adsMgmtAvailableIDsSelector = e;
  },
  98,
);
