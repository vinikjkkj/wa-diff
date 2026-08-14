__d(
  "WAWebVoipCallsTabResolveCallInfo",
  [
    "WAWebCallLogUtils",
    "WAWebMsgQueryUtils",
    "WAWebVoipCallsTabCallInfoRequest",
    "WAWebVoipCallsTabCallInfoUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 200;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield o("WAWebMsgQueryUtils").getVoipCallLogMsgs(e, null),
            r = o("WAWebCallLogUtils")
              .mergeCallRecords(
                n.filter(
                  o("WAWebVoipCallsTabCallInfoUtils")
                    .getShouldShowInCallsTabCallLog,
                ),
              )
              .find(function (e) {
                var n = e.mergedMsgs;
                return n.some(function (e) {
                  return e.id.id === t;
                });
              });
          r != null &&
            o("WAWebVoipCallsTabCallInfoRequest").requestOpenCallLogInfoPanel(
              r.mergedMsgs,
            );
        })),
        u.apply(this, arguments)
      );
    }
    l.openCallLogInfoPanelForCallId = s;
  },
  98,
);
