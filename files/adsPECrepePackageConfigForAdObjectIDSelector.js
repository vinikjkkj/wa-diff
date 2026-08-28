__d(
  "adsPECrepePackageConfigForAdObjectIDSelector",
  [
    "AdsPEAdgroupSelectors",
    "AdsPECampaignSelectors",
    "AdsSelectionLevelSelectors",
    "adsCreateDynamicSelector",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "adsPECrepePackageConfigForCampaignGroupIDSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateDynamicSelector")(
        r("adsCreateSelector")(
          [
            r("adsCreateStoreSelector")(
              [],
              function (t) {
                var e = t.objectID;
                return e;
              },
              { name: i.id },
            ),
            r("adsCreateStoreSelector")(
              [],
              function (t) {
                var e = t.objectLevel;
                return e;
              },
              { name: i.id },
            ),
            o("AdsSelectionLevelSelectors").adsEditorLevelSelector,
            r("adsPECrepePackageConfigForCampaignGroupIDSelector"),
            o("AdsPECampaignSelectors").getCachedByFieldsSelector,
            o("AdsPEAdgroupSelectors").getCachedByFieldsSelector,
          ],
          function (t, n, r, o, a, i) {
            var e, l;
            if (r == null || t == null) return null;
            var s;
            switch (n != null ? n : r) {
              case "campaign":
                s = t;
                break;
              case "ad_set":
                s =
                  (e = a(t, { campaign_id: null }).getValue()) == null
                    ? void 0
                    : e.campaign_id;
                break;
              case "ad":
                s =
                  (l = i(t, { campaign_id: null }).getValue()) == null
                    ? void 0
                    : l.campaign_id;
                break;
            }
            return s == null ? null : o(s);
          },
          { name: i.id },
        ),
      ),
      s = e;
    l.default = s;
  },
  98,
);
