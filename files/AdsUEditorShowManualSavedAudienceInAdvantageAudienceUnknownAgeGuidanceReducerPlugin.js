__d(
  "AdsUEditorShowManualSavedAudienceInAdvantageAudienceUnknownAgeGuidanceReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = new Set(
            [].concat(
              Array.from(t.campaignIDsWithVisibleUnknownAgeGuidance),
              n.campaignIDs,
            ),
          );
          return babelHelpers.extends({}, t, {
            campaignIDsWithVisibleUnknownAgeGuidance: e,
          });
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
