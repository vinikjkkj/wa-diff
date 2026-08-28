__d(
  "AdsHelpTrayOpenChatThreadAction",
  [
    "AdsHelpTrayAdsAISaveConsentReducerPlugin",
    "AdsHelpTrayOpenChatThreadDataActionReducerPlugin",
    "AdsHelpTrayUIProvider",
    "AdsMarketingExpertWidgetCallStatusProvider",
    "AdsMarketingExpertWidgetCallStatusReducerPlugin",
    "AdsOsmipCloseProactivePromptUponCTAClickReducerPlugin",
    "AdsOsmipProvider",
    "AdsUserSettingsProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsHelpTrayAdsAISaveConsentReducerPlugin"),
            n("AdsUserSettingsProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsHelpTrayOpenChatThreadDataActionReducerPlugin"),
            n("AdsHelpTrayUIProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsMarketingExpertWidgetCallStatusReducerPlugin"),
            n("AdsMarketingExpertWidgetCallStatusProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsOsmipCloseProactivePromptUponCTAClickReducerPlugin"),
            n("AdsOsmipProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "ADS_HELP_TRAY_OPEN_CHAT_THREAD",
    );
    a.exports = e;
  },
  null,
);
