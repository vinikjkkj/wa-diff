__d(
  "WAWebBizBroadcastGenAIQPLLogger",
  ["$InternalEnum", "WAWebQplFlowWrapper", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
        CUSTOMIZE_BACK: "customize_back",
        CUSTOMIZE_OPEN: "customize_open",
        CUSTOMIZE_USE_MESSAGE: "customize_use_message",
        FETCH_END: "fetch_end",
        FETCH_START: "fetch_start",
        REFINEMENT_ERROR: "refinement_error",
        REFINEMENT_START: "refinement_start",
        REFINEMENT_SUCCESS: "refinement_success",
        SUGGESTION_SELECTED: "suggestion_selected",
        TOS_ACCEPTED: "tos_accepted",
        TOS_SHOWN: "tos_shown",
      }),
      s = r("qpl")._(183051802, "3521");
    function u(e) {
      o("WAWebQplFlowWrapper").QPL.markerStart(
        s,
        e != null ? { annotations: e } : void 0,
      );
    }
    function c(e) {
      o("WAWebQplFlowWrapper").QPL.markerPoint(s, e);
    }
    function d(e) {
      o("WAWebQplFlowWrapper").QPL.markerAnnotate(s, e);
    }
    function m(e) {
      o("WAWebQplFlowWrapper").QPL.markerEnd(s, e);
    }
    function p() {
      o("WAWebQplFlowWrapper").QPL.markerDrop(s);
    }
    ((l.GenAIQPLPoints = e),
      (l.qplGenAIStart = u),
      (l.qplGenAIPoint = c),
      (l.qplGenAIAnnotate = d),
      (l.qplGenAIEnd = m),
      (l.qplGenAIDrop = p));
  },
  98,
);
