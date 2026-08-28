__d(
  "ALFlowChannel",
  ["$InternalEnum", "hyperionChannel"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
        "UNKNOWN",
        "STARTED",
        "SUCCEEDED",
        "CANCELLED",
        "FAILED",
        "TIMEDOUT",
      ]),
      s = new (o("hyperionChannel").Channel)();
    ((l.ALFlowStatus = e), (l.ALFlowChannel = s));
  },
  98,
);
