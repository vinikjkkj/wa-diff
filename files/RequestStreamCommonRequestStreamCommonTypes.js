__d(
  "RequestStreamCommonRequestStreamCommonTypes",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = (e = n("$InternalEnum"))({ Accepted: 1, Started: 2, Stopped: 3 }),
      s = e({ Rejected: 40, Error: 50, TryAgain: 80, Closed: 99 }),
      u = e({ BestEffort: 0, Socket: 10, Device: 20 }),
      c = e({
        Flow_status: "flow_status",
        Log: "log",
        Rewrite: "rewrite",
        Data: "data",
        Termination: "termination",
        Amend_ack: "amend_ack",
      });
    a.exports = {
      AckLevel: u,
      FlowStatus: l,
      StreamResponseDelta$Types: c,
      TerminationReason: s,
    };
  },
  null,
);
