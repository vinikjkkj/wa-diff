__d(
  "adsUEditorSelectedPackageConfigIDSelector",
  ["AdsUEditorSelectors", "adsGetUniformValueSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsGetUniformValueSelector")(
        o("AdsUEditorSelectors").campaignGroup.bulkByAccessorToJS(function (e) {
          var t;
          return (t = e.ad_creation_package_config) == null ? void 0 : t.id;
        }),
        null,
      ),
      s = e;
    l.default = s;
  },
  98,
);
