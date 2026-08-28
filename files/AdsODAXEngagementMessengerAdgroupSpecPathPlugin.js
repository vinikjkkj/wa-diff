__d(
  "AdsODAXEngagementMessengerAdgroupSpecPathPlugin",
  [
    "AdsAPIObjectives",
    "AdsMessagesMessengerAdgroupSpecPathPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsMessagesMessengerAdgroupSpecPathPlugin"),
        {
          type: "adgroup/spec-path",
          key: "outcome-engagement/messenger",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_ENGAGEMENT,
            promotedObjectType: r("AdsPromotedObjectTypes").MESSENGER,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
