__d(
  "WAWebVoipSctpConnectionStats",
  ["WAWebVoipRelayConnectionUtils", "WAWebVoipSctpConnectionState"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 8;
    function s(e, t) {
      var n = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
      n != null &&
        ((n.stats.sentPackets += t.sentPackets),
        (n.stats.sentBytes += t.sentBytes),
        (n.stats.receivedPackets += t.receivedPackets),
        (n.stats.receivedBytes += t.receivedBytes),
        t.firstSendTime > 0 &&
          n.stats.firstSendRequestTime === 0 &&
          (n.stats.firstSendRequestTime = t.firstSendTime),
        t.firstResponseRecvTime > 0 &&
          n.stats.firstResponseRecvTime === 0 &&
          (n.stats.firstResponseRecvTime = t.firstResponseRecvTime));
    }
    function u() {
      var t = Date.now(),
        n = Array.from(
          o("WAWebVoipSctpConnectionState").sctpConnections.values(),
        ),
        r = [].concat(
          n.filter(function (e) {
            return (
              e.state ===
              o("WAWebVoipRelayConnectionUtils").ConnectionState.Open
            );
          }),
          n.filter(function (e) {
            return (
              e.state !==
              o("WAWebVoipRelayConnectionUtils").ConnectionState.Open
            );
          }),
        ),
        a = r.slice(0, e).map(function (e) {
          var n,
            r,
            a =
              (n = (r = e.relayConnectionInfo) == null ? void 0 : r.name) !=
              null
                ? n
                : "unknown",
            i =
              a +
              "@" +
              e.id +
              "(state=" +
              String(e.state) +
              ",open=" +
              String(
                e.state ===
                  o("WAWebVoipRelayConnectionUtils").ConnectionState.Open,
              ) +
              ",reconnecting=" +
              String(e.isReconnecting === !0);
          if (e.channelTransferred)
            return (
              i +
              ",stats=offthread,droppedPackets=" +
              String(e.stats.droppedPackets) +
              ")"
            );
          var l =
            e.lastRxPacketTime > 0 ? Math.max(0, t - e.lastRxPacketTime) : -1;
          return (
            i +
            ",stats=mainthread,rxAgeMs=" +
            String(l) +
            ",txPackets=" +
            String(e.stats.sentPackets) +
            ",rxPackets=" +
            String(e.stats.receivedPackets) +
            ",droppedPackets=" +
            String(e.stats.droppedPackets) +
            ")"
          );
        });
      return "total=" + String(n.length) + ";" + (a.join("|") || "none");
    }
    ((l.mergeWorkerStats = s), (l.getSctpRelayDebugSummary = u));
  },
  98,
);
