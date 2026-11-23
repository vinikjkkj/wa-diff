__d(
  "PreviewPublishProcessor",
  [
    "MAIBAPreviewPublishEnrichmentStatusStore",
    "MAIBAPreviewPublishReviewStepContent.react",
    "actionabilityProcessorShared",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("actionabilityProcessorShared").statusOf(e);
      return {
        content:
          t ===
            o("actionabilityProcessorShared").MAIBAToolCallStatus.COMPLETED &&
          typeof e.tool_result == "string"
            ? s.jsx(r("MAIBAPreviewPublishReviewStepContent.react"), {
                rawResult: e.tool_result,
                toolCallId: e.tool_call_id,
              })
            : null,
        isInitiallyExpanded: !0,
        key: o("actionabilityProcessorShared").keyOf(e),
        status: t,
        title: o(
          "MAIBAPreviewPublishEnrichmentStatusStore",
        ).getMAIBAPreviewPublishStatusTitle(t),
      };
    }
    var c = {
        getSteps: function (t) {
          return t.map(u);
        },
      },
      d = c;
    l.default = d;
  },
  98,
);
