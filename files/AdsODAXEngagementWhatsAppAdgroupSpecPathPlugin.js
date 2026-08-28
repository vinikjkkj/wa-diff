__d(
  "AdsODAXEngagementWhatsAppAdgroupSpecPathPlugin",
  [
    "AdsAPIObjectives",
    "AdsMessagesWhatsAppAdgroupSpecPathPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsMessagesWhatsAppAdgroupSpecPathPlugin"),
        {
          type: "adgroup/spec-path",
          key: "outcome-engagement/whatsapp",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
            promotedObjectType: r("AdsPromotedObjectTypes").WHATSAPP,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
