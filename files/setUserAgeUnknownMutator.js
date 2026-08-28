__d(
  "setUserAgeUnknownMutator",
  ["AdsCampaignRecordAccessors"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return t == null
        ? r("AdsCampaignRecordAccessors").targeting.user_age_unknown.delete(e)
        : r("AdsCampaignRecordAccessors").targeting.user_age_unknown.set(t, e);
    }
    l.default = e;
  },
  98,
);
