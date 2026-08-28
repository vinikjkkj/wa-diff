__d(
  "AdsMessagesWhatsAppAdgroupSpecPathPlugin",
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
          key: "messages/whatsapp",
          pivots: {
            objective: r("AdsAPIObjectives").MESSAGES,
            promotedObjectType: r("AdsPromotedObjectTypes").WHATSAPP,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
