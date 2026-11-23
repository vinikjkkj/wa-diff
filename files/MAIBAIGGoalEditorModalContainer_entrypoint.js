__d(
  "MAIBAIGGoalEditorModalContainer.entrypoint",
  [
    "JSResourceForInteraction",
    "PolarisBoostCanvasMessagingQuery$Parameters",
    "PolarisBoostCanvasPurchaseObjectiveQuery$Parameters",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        var e = t.flowID,
          n = t.mediaIDs,
          o = t.shouldLoadMessaging;
        return {
          queries: {
            purchaseObjective: {
              parameters: r(
                "PolarisBoostCanvasPurchaseObjectiveQuery$Parameters",
              ),
              variables: { flowID: e, mediaIDs: n },
            },
            messaging: {
              parameters: r("PolarisBoostCanvasMessagingQuery$Parameters"),
              variables: { loadMessaging: o },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "MAIBAIGGoalEditorModalContainer.react",
      ).__setRef("MAIBAIGGoalEditorModalContainer.entrypoint"),
    };
    l.default = e;
  },
  98,
);
