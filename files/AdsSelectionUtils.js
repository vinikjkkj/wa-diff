__d(
  "AdsSelectionUtils",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e = r("immutable")).Map([
        [
          "ad",
          {
            ancestorIDFields: e.Map([
              ["ad_set", "adset_id"],
              ["campaign", "campaign_id"],
            ]),
          },
        ],
        [
          "ad_set",
          {
            ancestorIDFields: e.Map([
              ["campaign", "campaign_id"],
              ["topline", "topline_id"],
            ]),
          },
        ],
        ["campaign", { ancestorIDFields: e.Map([["topline", "topline_id"]]) }],
      ]);
    l.currentLevelToAncestorIDFields = s;
  },
  98,
);
