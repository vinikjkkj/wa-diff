__d(
  "AdsGuidanceOutcomeForecasterPFRBudgetPostPublishReducerPlugin",
  ["AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          if (t.showPostPublishBudgetDialog && !n.showPostPublishBudgetDialog) {
            var e;
            r("AdsInterfacesLogger").logOnce({
              eventName: "outcome_forecaster_post_publish_reliability",
              data:
                ((e = {}),
                (e.event_source = "fragments_qualification_attempt_terminate"),
                e),
            });
          }
          return babelHelpers.extends({}, t, {
            showPostPublishBudgetDialog: n.showPostPublishBudgetDialog,
            fragmentSpec: n.fragmentSpec,
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
