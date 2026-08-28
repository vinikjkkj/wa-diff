__d(
  "AdsCampaignGroupDerivedPaths",
  ["generatePaths"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = Object.freeze({
        ACTIVITY_STATUS: "activity_status",
        ALLOWED_STATUSES: "allowedStatuses",
        BOOSTED_COMPONENT_CLIENT_APP_ID: "boostedComponentClientAppID",
        BOOSTED_COMPONENT_PRODUCT: "boostedComponentProduct",
      }),
      s = [
        { pathKeys: [], expandsTo: e },
        {
          pathKeys: ["ACTIVITY_STATUS"],
          expandsTo: { LABEL: "label", STATUS: "status", SUB_TEXT: "subText" },
        },
      ],
      u = r("generatePaths")(s),
      c = u;
    l.default = c;
  },
  98,
);
