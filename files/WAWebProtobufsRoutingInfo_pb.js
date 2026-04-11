__d(
  "WAWebProtobufsRoutingInfo.pb",
  ["WAProtoConst"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {};
    ((s.internalDefaults = {
      taskId: -1,
      debug: !1,
      tcpBbr: !1,
      tcpKeepalive: !1,
    }),
      (s.name = "RoutingInfo"),
      (s.internalSpec = {
        regionId: [1, (e = o("WAProtoConst")).FLAGS.REPEATED | e.TYPES.INT32],
        clusterId: [2, e.FLAGS.REPEATED | e.TYPES.INT32],
        taskId: [3, e.TYPES.INT32],
        debug: [4, e.TYPES.BOOL],
        tcpBbr: [5, e.TYPES.BOOL],
        tcpKeepalive: [6, e.TYPES.BOOL],
      }),
      (l.RoutingInfoSpec = s));
  },
  98,
);
