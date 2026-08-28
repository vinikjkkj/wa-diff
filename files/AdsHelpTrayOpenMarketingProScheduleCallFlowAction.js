__d(
  "AdsHelpTrayOpenMarketingProScheduleCallFlowAction",
  [
    "AdsHelpTrayOpenMarketingProScheduleCallFlowReducerPlugin",
    "AdsHelpTrayUIProvider",
    "AdsOsmipCloseProactivePromptUponCTAClickReducerPlugin",
    "AdsOsmipProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsHelpTrayOpenMarketingProScheduleCallFlowReducerPlugin"),
            n("AdsHelpTrayUIProvider"),
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
      "ADS_HELP_TRAY_OPEN_MARKETING_PRO_SCHEDULE_CALL",
    );
    a.exports = e;
  },
  null,
);
