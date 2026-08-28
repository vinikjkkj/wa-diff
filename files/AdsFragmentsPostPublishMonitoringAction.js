__d(
  "AdsFragmentsPostPublishMonitoringAction",
  [
    "AdsFragmentsPostPublishMonitoringDataProvider",
    "AdsFragmentsPostPublishMonitoringReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsFragmentsPostPublishMonitoringReducerPlugin"),
            n("AdsFragmentsPostPublishMonitoringDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsFragmentsPostPublishMonitoringActionPlugin",
    );
    a.exports = e;
  },
  null,
);
