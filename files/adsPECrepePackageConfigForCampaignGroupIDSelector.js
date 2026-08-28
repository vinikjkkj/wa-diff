__d(
  "adsPECrepePackageConfigForCampaignGroupIDSelector",
  [
    "AdsPECampaignGroupSelectors",
    "adsCreateDynamicSelector",
    "adsCreateSelector",
    "adsCreateStoreSelector",
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
            o("AdsPECampaignGroupSelectors").getByFieldsSelector,
          ],
          function (t, n) {
            var e = n(t, { ad_creation_package_config: null });
            return e.hasValueWithoutError()
              ? e.getValueEnforcing().ad_creation_package_config
              : null;
          },
          { name: i.id },
        ),
      ),
      s = e;
    l.default = s;
  },
  98,
);
