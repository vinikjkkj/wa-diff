__d(
  "AdsCrepeAdObjectUtils",
  ["AdsObjectTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      return (
        ((t = e.ad_creation_package_config) == null ? void 0 : t.id) != null
      );
    }
    function s(e) {
      switch (e) {
        case "campaign":
          return r("AdsObjectTypes").CAMPAIGN_GROUP;
        case "ad_set":
          return r("AdsObjectTypes").CAMPAIGN;
        case "ad":
          return r("AdsObjectTypes").ADGROUP;
        default:
          return r("AdsObjectTypes").CAMPAIGN_GROUP;
      }
    }
    ((l.isCampaignGroupFromCreationPackage = e),
      (l.getAdObjectTypeFromLevel = s));
  },
  98,
);
