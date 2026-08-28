__d(
  "AdsHelpTrayOpenMarketingProScheduleCallFlowReducerPlugin",
  ["AdsHelpTrayNavigationHelper", "CSS"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = t.navigationStack,
            r = o("AdsHelpTrayNavigationHelper").getCurrentNavigationState(t),
            a = r.contentType !== "SCHEDULE_MARKETING_CALL";
          if (a) {
            var i;
            e = o("AdsHelpTrayNavigationHelper").concatToNavigationStack(
              t.navigationStack,
              {
                contentType: "SCHEDULE_MARKETING_CALL",
                osmipExtraData: {
                  entryPoint: n.data.entryPoint,
                  experimentData: n.data.experimentData,
                  isLiveCallFlow: (i = n.data.isLiveCallFlow) != null ? i : !1,
                  isRescheduleCall: n.data.isRescheduleCall || !1,
                  leadSource: n.data.leadSource,
                  srtJobID: n.data.srtJobID,
                  surface: n.data.surface,
                },
              },
            );
          }
          return (
            document.body &&
              o("CSS").conditionClass(document.body, "has-helptray", !0),
            babelHelpers.extends({}, t, { isTrayOpen: !0, navigationStack: e })
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
