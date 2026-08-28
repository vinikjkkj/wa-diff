__d(
  "AdsUEditorCampaignWhatsAppDestinationDefaultedAction",
  [
    "AdsWhatsAppDestinationDefaultedDataProvider",
    "AdsWhatsAppDestinationDefaultedReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsWhatsAppDestinationDefaultedReducerPlugin"),
            n("AdsWhatsAppDestinationDefaultedDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsUEditorCampaignWhatsAppDestinationDefaultedActionPlugin",
    );
    a.exports = e;
  },
  null,
);
