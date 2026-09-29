__d(
  "WAWebBizBroadcastProOpenInsightsDefinitionsModal",
  [
    "WAWebBizBroadcastProInsightsDefinitionsModalLoadable",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      (o(
        "WAWebBusinessBroadcastUserJourneyLogger",
      ).BusinessBroadcastUserJourneyLogger.performanceExplainedClicked(e),
        o("WAWebModalManager").ModalManager.open(
          s.jsx(
            o("WAWebBizBroadcastProInsightsDefinitionsModalLoadable")
              .WAWebBizBroadcastProInsightsDefinitionsModalLoadable,
            { onClose: o("WAWebModalManager").closeModalManager },
          ),
        ));
    }
    l.openBizBroadcastProInsightsDefinitionsModal = u;
  },
  98,
);
