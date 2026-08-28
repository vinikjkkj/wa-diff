__d(
  "adsPECrepePackageConfigForAdObjectIDAndLevelSelector",
  [
    "AdsPEAdgroupSelectors",
    "AdsPECampaignSelectors",
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
                return t;
              },
              { name: i.id },
            ),
            r("adsPECrepePackageConfigForCampaignGroupIDSelector"),
            o("AdsPECampaignSelectors").getCachedByFieldsSelector,
            o("AdsPEAdgroupSelectors").getCachedByFieldsSelector,
          ],
          function (t, n, r, o) {
            var e,
              a,
              i = t.objectID,
              l = t.objectLevel;
            if (l == null || i == null) return null;
            var s;
            switch (l) {
              case "campaign":
                s = i;
                break;
              case "ad_set":
                s =
                  (e = r(i, { campaign_id: null }).getValue()) == null
                    ? void 0
                    : e.campaign_id;
                break;
              case "ad":
                s =
                  (a = o(i, { campaign_id: null }).getValue()) == null
                    ? void 0
                    : a.campaign_id;
                break;
            }
            return s == null ? null : n(s);
          },
          { name: i.id },
        ),
      ),
      s = e;
    l.default = s;
  },
  98,
);
