__d(
  "AdsUnifiedCreationSetMessagingPreviewDestinationAction",
  [
    "AdsUnifiedCreationSetMessagingPreviewDestinationProvider",
    "AdsUnifiedCreationSetMessagingPreviewDestinationReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsUnifiedCreationSetMessagingPreviewDestinationReducerPlugin"),
            n("AdsUnifiedCreationSetMessagingPreviewDestinationProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "UNIFIED_CREATION.SET_MESSAGING_PREVIEW_DESTINATION",
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
