__d(
  "WAWebBizBroadcastGenAIQPLLogger",
  [
    "$InternalEnum",
    "WAWebBizBroadcastProOnboardingStatus",
    "WAWebQplFlowWrapper",
    "qpl",
  ],
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
      s = r("qpl")._(183051802, "3521"),
      u = "web";
    function c(e) {
      o("WAWebQplFlowWrapper").QPL.markerStart(s, {
        annotations: babelHelpers.extends({}, e, {
          string: babelHelpers.extends({}, e == null ? void 0 : e.string, {
            bb_tier: String(
              o(
                "WAWebBizBroadcastProOnboardingStatus",
              ).getBizBroadcastProductTier(),
            ),
            platform: u,
          }),
        }),
      });
    }
    function d(e) {
      o("WAWebQplFlowWrapper").QPL.markerPoint(s, e);
    }
    function m(e) {
      o("WAWebQplFlowWrapper").QPL.markerAnnotate(s, e);
    }
    function p(e) {
      o("WAWebQplFlowWrapper").QPL.markerEnd(s, e);
    }
    function _() {
      o("WAWebQplFlowWrapper").QPL.markerDrop(s);
    }
    ((l.GenAIQPLPoints = e),
      (l.qplGenAIStart = c),
      (l.qplGenAIPoint = d),
      (l.qplGenAIAnnotate = m),
      (l.qplGenAIEnd = p),
      (l.qplGenAIDrop = _));
  },
  98,
);
