__d(
  "WAHandleAppdataMessageProtocol",
  [
    "WAMsgTransport.pb",
    "WAParseMessageTransport",
    "WAResultOrError",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("decodeProtobuf").decodeProtobuf(
          o("WAMsgTransport.pb").MessageTransportSpec,
          e,
        ),
        n = o("WAParseMessageTransport").parseMessageTransport(t, null);
      switch (n.type) {
        case "error":
          return o("WAResultOrError").makeError(n.error);
        case "skdm":
          return o("WAResultOrError").makeError(
            "skdm appdata is not supported",
          );
        case "unknown":
          return o("WAResultOrError").makeError("unknown appdata");
        case "empty":
          return o("WAResultOrError").makeError("empty appdata");
        default:
          return (
            n.type,
            o("WAResultOrError").makeResult(n.applicationPayload)
          );
      }
    }
    l.decodeAppdata = e;
  },
  98,
);
