__d(
  "adsExperimentsNavigateToCreationPackageEditor",
  ["adsCrepeNavigateToCPFlow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.creationPackageConfigID,
        n = e.fragments;
      r("adsCrepeNavigateToCPFlow")({
        packageConfigID: t,
        campaignGroupIDs: n
          .filter(function (e) {
            return e.ad_object_type === "campaign";
          })
          .map(function (e) {
            return e.ad_object_id;
          }),
        campaignIDs: n
          .filter(function (e) {
            return e.ad_object_type === "ad_set";
          })
          .map(function (e) {
            return e.ad_object_id;
          }),
        adgroupIDs: n
          .filter(function (e) {
            return e.ad_object_type === "ad";
          })
          .map(function (e) {
            return e.ad_object_id;
          }),
      });
    }
    l.default = e;
  },
  98,
);
