__d(
  "AdsSBGMEEngagementDetailsDialogShowAction",
  [
    "AdsPELazyDialogDataProvider",
    "AdsSBGMEEngagementDetailsDialogShowReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsSBGMEEngagementDetailsDialogShowReducerPlugin"),
            n("AdsPELazyDialogDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsSBGMEEngagementDetailsDialogShowActionPlugin",
    );
    a.exports = e;
  },
  null,
);
