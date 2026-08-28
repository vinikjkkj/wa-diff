__d(
  "AdsALPEEV2Extension",
  ["AdsALFlowletManager", "hyperionUtil", "ifRequired"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("ifRequired")(
        "hyperionAutoLogging",
        function (t) {
          return function () {
            var n, a;
            return (
              (a = {}),
              (a.al_event_index = t.ALEventIndex.getNextEventIndex()),
              (a.browser_session_id = (
                s || (s = o("hyperionUtil"))
              ).ClientSessionID),
              (a.trigger_flowlet =
                (n = (e || (e = r("AdsALFlowletManager"))).top().data
                  .triggerFlowlet) == null
                  ? void 0
                  : n.getFullName()),
              a
            );
          };
        },
        function () {
          return function () {
            return {
              al_event_index: -1,
              browser_session_id: (s || (s = o("hyperionUtil")))
                .ClientSessionID,
              trigger_flowlet: null,
            };
          };
        },
      );
    l.getALEventData = u;
  },
  98,
);
