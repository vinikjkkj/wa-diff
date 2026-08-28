__d(
  "AdsWhatsAppConnectAccountDialogOpenDialogDataAction",
  [
    "AdsConnectWhatsAppToPageHistoryProvider",
    "AdsConnectWhatsAppToPageHistoryReducerPlugins",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsConnectWhatsAppToPageHistoryReducerPlugins").onReset,
            n("AdsConnectWhatsAppToPageHistoryProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "WhatsAppConnectAccountDialog.OPEN_DIALOG",
    );
    a.exports = e;
  },
  null,
);
