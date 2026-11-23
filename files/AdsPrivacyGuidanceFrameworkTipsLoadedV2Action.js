__d(
  "AdsPrivacyGuidanceFrameworkTipsLoadedV2Action",
  [
    "AdsPrivacyGuidanceFrameworkAYMTChannelV2Provider",
    "AdsPrivacyGuidanceFrameworkTipsLoadedV2ReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsPrivacyGuidanceFrameworkTipsLoadedV2ReducerPlugin"),
            n("AdsPrivacyGuidanceFrameworkAYMTChannelV2Provider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsPrivacyGuidanceFrameworkTipsLoadedV2ActionPlugin",
      void 0,
      void 0,
      function (e) {
        return function (n, r) {
          e(n, r);
        };
      },
    );
    a.exports = e;
  },
  null,
);
