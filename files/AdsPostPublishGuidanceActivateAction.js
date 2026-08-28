__d(
  "AdsPostPublishGuidanceActivateAction",
  [
    "AdsPostPublishGuidanceActivateReducerPlugin",
    "AdsPostPublishGuidanceCoordinatorDataProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsPostPublishGuidanceActivateReducerPlugin"),
            n("AdsPostPublishGuidanceCoordinatorDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsPostPublishGuidanceActivateActionPlugin",
    );
    a.exports = e;
  },
  null,
);
