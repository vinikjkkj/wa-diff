__d(
  "RequestStreamCloseReason",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
      "UserIntention",
      "StartStreamFailure",
      "StreamError",
      "RemoteTermination",
      "ServerDataEnd",
      "ServerDrain",
      "ReestablishError",
      "ClientError",
    ]);
    i.RequestStreamCloseReason = e;
  },
  66,
);
