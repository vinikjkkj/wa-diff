__d(
  "AdsCampaignGroupPromotedPageIDSelector",
  [
    "AdsPECampaignGroupSelectors",
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
        { name: i.id + ".idSelector" },
      ),
      s = r("adsCreateSelector")(
        [o("AdsPECampaignGroupSelectors").getCachedByFieldsSelector, e],
        function (t, n) {
          var e,
            r = t(n, { promoted_object: null }).getValueEnforcing();
          return r == null || (e = r.promoted_object) == null
            ? void 0
            : e.page_id;
        },
        { name: i.id + ".AdsCampaignGroupPromotedPageIDSelector" },
      ),
      u = s;
    l.default = u;
  },
  98,
);
