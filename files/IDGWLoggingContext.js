__d(
  "IDGWLoggingContext",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum")({
        STREAM_GROUP_COMPONENT: "WebStreamGroup",
        GROUPED_STREAM_COMPONENT: "GroupedWebStream",
        WEBSOCKET_TRANSPORT_COMPONENT: "WebSocketTransport",
        ACK_MANAGER_COMPONENT: "WebStreamAckManager",
        CODEC_COMPONENT: "WebCodec",
        RAW_CLIENT: "RAWDGWClient",
        PINGER: "DGWPinger",
      }),
      l = n("$InternalEnum")({
        STREAM_LIFECYCLE: "stream_lifecycle",
        STREAM_GROUP_TRANSPORT: "stream_group_transport",
      }),
      s = n("$InternalEnum")({ SUCCESS: "success", FAIL: "fail" });
    ((i.DGWLoggingComponent = e), (i.QPLEvent = l), (i.QPLResult = s));
  },
  66,
);
