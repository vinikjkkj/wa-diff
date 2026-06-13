__d(
  "WAWebVoipSctpSendData",
  [
    "WALogger",
    "WAWebVoipRelayConnectionUtils",
    "WAWebVoipSctpConnectionManagerConstants",
    "WAWebVoipSctpConnectionState",
    "WAWebVoipSctpDataChannelThreadManager",
    "WAWebVoipSctpPacketBuffering",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d;
    function m(t, n, r, a) {
      var i = o("WAWebVoipRelayConnectionUtils").getConnectionIdentifier(n, r),
        l = o("WAWebVoipSctpConnectionState").sctpConnections.get(i);
      (l == null &&
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SCTP] conn not found, creating early ",
              "",
            ])),
          i,
        ),
        (l = p(i, a))),
        l.stats.firstSendRequestTime === 0 &&
          (l.stats.firstSendRequestTime = Date.now()));
      var d =
          t instanceof SharedArrayBuffer ? new Uint8Array(t).slice().buffer : t,
        m = d.byteLength,
        _ = o("WAWebVoipRelayConnectionUtils").inspectPacketType(d);
      if (
        _ === o("WAWebVoipRelayConnectionUtils").PacketType.STUN_ALLOC &&
        l.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open &&
        l.sentMedia === !0 &&
        !l.channelTransferred
      ) {
        var f = a.getIceRestartRxInactivityMs(),
          g = Date.now() - l.lastRxPacketTime;
        if (g > f) {
          (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] STUN_ALLOC no rx ",
                "ms>",
                "ms, ICE restart ",
                "",
              ])),
            g,
            f,
            i,
          ),
            o("WAWebVoipRelayConnectionUtils").clearPacketBuffer(
              l.packetBuffer,
            ),
            o("WAWebVoipRelayConnectionUtils").bufferPacket(
              l.packetBuffer,
              d,
              l.stats,
              o("WAWebVoipSctpConnectionManagerConstants").MAX_BUFFER_BYTES,
            ),
            a.restartIceProcess(l));
          return;
        }
      }
      if (l.channelTransferred) {
        var h = o(
          "WAWebVoipSctpDataChannelThreadManager",
        ).getDataChannelThread();
        if (h == null || !h.isActive())
          (o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DCThread] transferred but inactive ",
                ", legacy path",
              ])),
            i,
          ),
            (l.channelTransferred = !1));
        else if (
          l.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open
        ) {
          var y = h.sendPacket(i, d);
          (y ||
            (l.stats.droppedPackets++,
            o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] send failed ",
                  ", pthread shutting down",
                ])),
              i,
            )),
            _ === o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN &&
              (l.hasNonStunPacketSent || (l.hasNonStunPacketSent = !0),
              l.sentMedia !== !0 && (l.sentMedia = !0)));
          return;
        }
        o("WAWebVoipSctpPacketBuffering").bufferPacketForConnection(l, d);
        return;
      }
      if (
        l.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open &&
        l.channel != null
      ) {
        try {
          (l.channel.send(d),
            l.stats.sentPackets++,
            (l.stats.sentBytes += m),
            _ === o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN &&
              (l.hasNonStunPacketSent || (l.hasNonStunPacketSent = !0),
              l.sentMedia !== !0 && (l.sentMedia = !0)));
        } catch (e) {}
        return;
      }
      o("WAWebVoipSctpPacketBuffering").bufferPacketForConnection(l, d);
    }
    function p(e, t) {
      var n = {
        state: o("WAWebVoipRelayConnectionUtils").ConnectionState.None,
        channel: null,
        peerConnection: null,
        packetBuffer: o("WAWebVoipRelayConnectionUtils").createPacketBuffer(),
        id: e,
        connectionTimeout: null,
        hasReceivedFirstPacket: !1,
        hasNonStunPacketSent: !1,
        lastRxPacketTime: 0,
        stats: o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats(),
        isReconnecting: !1,
        sentMedia: !1,
        channelTransferred: !1,
        connectionStartTime: 0,
        relayId: 0,
        relayIp: "",
        relayPort: 0,
        iceConnectedTime: 0,
        dtlsStallTimeout: null,
      };
      return (
        (n.connectionTimeout = window.setTimeout(function () {
          if (
            n.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.None
          ) {
            var r = t.getSctpConnectionTimeoutMs();
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] early packet timeout (",
                  "ms) ",
                  "",
                ])),
              r,
              e,
            ),
              t.failConnection(n, "early_packet_timeout"));
          }
        }, t.getSctpConnectionTimeoutMs())),
        o("WAWebVoipSctpConnectionState").sctpConnections.set(e, n),
        n
      );
    }
    l.sendData = m;
  },
  98,
);
