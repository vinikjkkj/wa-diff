__d(
  "AdsLeadOptimizationWhatsAppAdgroupSpecPathPlugin",
  [
    "AdsAPIObjectives",
    "AdsDefaultAdgroupSpecPathPlugin",
    "AdsPromotedObjectTypes",
    "AdsWhatsAppAdgroupSpecPathPluginCommon",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsDefaultAdgroupSpecPathPlugin"),
        r("AdsWhatsAppAdgroupSpecPathPluginCommon"),
        {
          type: "adgroup/spec-path",
          key: "lead-generation/whatsapp",
          pivots: {
            objective: r("AdsAPIObjectives").LEAD_GENERATION,
            promotedObjectType: r("AdsPromotedObjectTypes").WHATSAPP,
          },
          getDefaultCallToActionType: function (t) {
            return "WHATSAPP_MESSAGE";
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
