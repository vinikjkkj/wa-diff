__d(
  "AdsLinkClicksWhatsAppAdgroupSpecPathPlugin",
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
          key: "link-clicks/whatsapp",
          pivots: {
            objective: r("AdsAPIObjectives").LINK_CLICKS,
            promotedObjectType: r("AdsPromotedObjectTypes").WHATSAPP,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
