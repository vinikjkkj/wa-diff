__d(
  "AdsLinkClicksUnifiedProfileVisitsAdgroupSpecPathPlugin",
  [
    "AdsAPIObjectives",
    "AdsDefaultAdgroupSpecPathPlugin",
    "AdsPromotedObjectTypes",
    "AdsWebsiteAdgroupSpecPathPluginCommon",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsDefaultAdgroupSpecPathPlugin"),
        r("AdsWebsiteAdgroupSpecPathPluginCommon"),
        {
          type: "adgroup/spec-path",
          key: "link-clicks/unified_profile_visits",
          pivots: {
            objective: r("AdsAPIObjectives").LINK_CLICKS,
            promotedObjectType: r("AdsPromotedObjectTypes")
              .IG_PROFILE_AND_FB_PAGE,
          },
          getDefaultCallToActionType: function (t) {
            return "VISIT_PROFILE";
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
