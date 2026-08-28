__d(
  "AdsPrivacyGuidanceFrameworkTipsLoadedAction",
  [
    "AdsPrivacyGuidanceFrameworkAYMTChannelProvider",
    "AdsPrivacyGuidanceFrameworkTipsLoadedReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsPrivacyGuidanceFrameworkTipsLoadedReducerPlugin"),
            n("AdsPrivacyGuidanceFrameworkAYMTChannelProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsPrivacyGuidanceFrameworkTipsLoadedActionPlugin",
    );
    a.exports = e;
  },
  null,
);
