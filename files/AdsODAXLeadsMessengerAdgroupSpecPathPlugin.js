__d(
  "AdsODAXLeadsMessengerAdgroupSpecPathPlugin",
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
          key: "outcome-leads/messenger",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_LEADS,
            promotedObjectType: r("AdsPromotedObjectTypes").MESSENGER,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
