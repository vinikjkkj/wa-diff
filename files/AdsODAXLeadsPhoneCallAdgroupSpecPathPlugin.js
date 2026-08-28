__d(
  "AdsODAXLeadsPhoneCallAdgroupSpecPathPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIObjectives",
    "AdsLeadGenerationAdgroupSpecPathPlugin",
    "AdsPromotedObjectTypes",
    "AdsWebsiteAdgroupSpecPathPluginCommon",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsLeadGenerationAdgroupSpecPathPlugin"),
        {
          type: "adgroup/spec-path",
          key: "outcome-leads/phone-call",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_LEADS,
            promotedObjectType: r("AdsPromotedObjectTypes").PHONE_CALL,
          },
          getDefaultCallToActionType: function (t) {
            return "CALL_NOW";
          },
          getCombinedFieldMappings: function (t) {
            return o("AdsAPIAdgroupRecordUtils").isTemplateCreative(t)
              ? r(
                  "AdsWebsiteAdgroupSpecPathPluginCommon",
                ).getCombinedFieldMappings(t)
              : r(
                  "AdsLeadGenerationAdgroupSpecPathPlugin",
                ).getCombinedFieldMappings(t);
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
