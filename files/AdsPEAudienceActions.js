__d(
  "AdsPEAudienceActions",
  [
    "AdsConvergenceReminderDialogUtils",
    "AdsPEFluxCreateAudienceAction",
    "AdsPERouterHelper",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = function () {
        var t = function () {
          r("AdsPEFluxCreateAudienceAction").dispatch(
            { audienceSpecs: e },
            { line: "24", module: "AdsPEAudienceActions.js", moduleID: i.id },
          );
        };
        r("AdsPERouterHelper")
          .getRouteBuilder()
          .tool("AUDIENCES")
          .navSource("create_from_manage_ads")
          .action(t)
          .navigate();
      };
      o("AdsConvergenceReminderDialogUtils").executeCallbackOnEditorClosed(t);
    }
    l.createAudience = e;
  },
  98,
);
