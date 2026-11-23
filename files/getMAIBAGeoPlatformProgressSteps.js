__d(
  "getMAIBAGeoPlatformProgressSteps",
  ["MAIBAProgressPhaseRuns"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      t === void 0 && (t = null);
      var n = [];
      return (
        (e != null ? e : []).forEach(function (e) {
          var t = e.tool_call_id,
            r = e.progress_title,
            o = e.progress_summary;
          t != null &&
            r != null &&
            o != null &&
            n.push({
              isCompleted: e.is_completed === !0,
              isRenderedByToolCall: !0,
              isServerCompleted: e.is_completed === !0,
              kind: "tool_update",
              progressPhase: e.progress_phase,
              toolCallId: t,
              toolName: e.tool_name,
              toolSummary: o,
              toolTitle: r,
            });
        }),
        r("MAIBAProgressPhaseRuns")(n, t)
      );
    }
    l.default = e;
  },
  98,
);
