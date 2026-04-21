__d(
  "RequestStreamSingleChannelSingleChannelRequestStreamTypes",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum")({
        Ignored: 100,
        Success: 200,
        Queued: 250,
        UnknownStream: 400,
        HandledUnknownResult: 450,
        Failure: 500,
      }),
      l = n("$InternalEnum")({
        Request_body: "request_body",
        Amend: "amend",
        Ack: "ack",
        Response: "response",
        Ping: "ping",
        Pong: "pong",
      });
    a.exports = { Ack: e, Payload$Types: l };
  },
  null,
);
