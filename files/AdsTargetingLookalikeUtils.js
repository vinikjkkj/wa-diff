__d(
  "AdsTargetingLookalikeUtils",
  ["AdsCampaignRecordAccessors"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e != null &&
        e.some(function (e) {
          return (
            e.lookalike_type === "lookalike" ||
            e.lookalike_type === "lookalike_container"
          );
        })
      );
    }
    function s(t) {
      var n;
      return e(
        (n = r("AdsCampaignRecordAccessors").targeting.custom_audiences.get(
          t,
        )) == null
          ? void 0
          : n.toJS(),
      );
    }
    ((l.hasLookalikeAudiences = e), (l.campaignHasLookalikeAudiences = s));
  },
  98,
);
