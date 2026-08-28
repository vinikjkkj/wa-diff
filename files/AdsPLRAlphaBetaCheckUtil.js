__d(
  "AdsPLRAlphaBetaCheckUtil",
  ["CurrentAdAccount", "ProductLevelReportingEventsLoggerFalcoEvent", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("gkx")("1923");
      return (
        r("ProductLevelReportingEventsLoggerFalcoEvent").log(function () {
          return {
            ad_account_id: r("CurrentAdAccount").getID(),
            event_severity: "info",
            event: "ui_plr_alpha_beta_check",
            action_data: { callsite: e, result: String(t) },
          };
        }),
        t
      );
    }
    function s() {
      return r("gkx")("16991");
    }
    function u() {
      return r("gkx")("23966");
    }
    ((l.isAllowedForPlrWithAlphaBetaCheck = e),
      (l.isAllowedForPlrAlphaPlusFeature = s),
      (l.isAllowedForPlrBetaFeature = u));
  },
  98,
);
