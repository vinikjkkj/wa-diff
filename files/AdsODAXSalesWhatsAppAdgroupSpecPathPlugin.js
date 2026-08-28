__d(
  "AdsODAXSalesWhatsAppAdgroupSpecPathPlugin",
  [
    "AdsAPIObjectives",
    "AdsConversionsWhatsAppAdgroupSpecPathPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsConversionsWhatsAppAdgroupSpecPathPlugin"),
        {
          type: "adgroup/spec-path",
          key: "outcome-sales/whatsapp",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_SALES,
            promotedObjectType: r("AdsPromotedObjectTypes").WHATSAPP,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
