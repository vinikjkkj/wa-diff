__d(
  "AdsExperimentsCreativeDeliveryPushPublishCompletedAction",
  [
    "AdsExperimentsDeliveryPushStateProvider",
    "AdsExperimentsDeliveryPushStateReducerPlugins",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsExperimentsDeliveryPushStateReducerPlugins")
              .AdsExperimentsCreativeDeliveryPushPublishCompletedReducerPlugin,
            n("AdsExperimentsDeliveryPushStateProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsExperimentsCreativeDeliveryPushPublishCompletedActionPlugin",
    );
    a.exports = e;
  },
  null,
);
