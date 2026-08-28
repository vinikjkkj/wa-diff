__d(
  "AdsGuidanceNarrowWebsiteCustomAudiencePostPublishAction",
  [
    "AdsGuidanceNarrowWebsiteCustomAudienceDataProvider",
    "AdsGuidanceNarrowWebsiteCustomAudienceDataReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsGuidanceNarrowWebsiteCustomAudienceDataReducerPlugin"),
            n("AdsGuidanceNarrowWebsiteCustomAudienceDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsGuidanceNarrowWebsiteCustomAudiencePostPublishActionPlugin",
    );
    a.exports = e;
  },
  null,
);
