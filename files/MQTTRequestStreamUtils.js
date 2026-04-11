__d(
  "MQTTRequestStreamUtils",
  [
    "BladeRunnerStreamHandler",
    "BladeRunnerStreamStatus",
    "RequestStreamCommonRequestStreamCommonTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "Stream closed",
      s = "Stream rejected";
    function u(t) {
      var n = function (r) {
        switch (r) {
          case o("BladeRunnerStreamStatus").StreamStatus.ACCEPTED:
            t.onFlowStatus(
              o("RequestStreamCommonRequestStreamCommonTypes").FlowStatus
                .Accepted,
            );
            break;
          case o("BladeRunnerStreamStatus").StreamStatus.STARTED:
            t.onFlowStatus(
              o("RequestStreamCommonRequestStreamCommonTypes").FlowStatus
                .Started,
            );
            break;
          case o("BladeRunnerStreamStatus").StreamStatus.STOPPED:
            t.onFlowStatus(
              o("RequestStreamCommonRequestStreamCommonTypes").FlowStatus
                .Stopped,
            );
            break;
          case o("BladeRunnerStreamStatus").StreamStatus.CLOSED:
            t.onTermination(e);
            break;
          case o("BladeRunnerStreamStatus").StreamStatus.REJECTED:
            t.onTermination(s);
            break;
        }
      };
      return new (r("BladeRunnerStreamHandler"))(
        function (e) {
          return t.onData(e);
        },
        null,
        n,
        function (e) {
          return t.onLog(e);
        },
        null,
        function () {
          return t.onRetryUpdateRequestBody();
        },
      );
    }
    ((l.TERMINATION_REASON_CLOSED = e),
      (l.TERMINATION_REASON_REJECTED = s),
      (l.convertToBRHandler = u));
  },
  98,
);
