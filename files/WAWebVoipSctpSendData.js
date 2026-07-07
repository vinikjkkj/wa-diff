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
    function m(t) {
      var n = t.callbacks,
        r = t.data_,
        a = t.ip,
        i = t.port,
        l = o("WAWebVoipRelayConnectionUtils").getConnectionIdentifier(a, i),
        d = o("WAWebVoipSctpConnectionState").sctpConnections.get(l);
      (d == null &&
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SCTP] conn not found, creating early ",
              "",
            ])),
          l,
        ),
        (d = p(l, n))),
        d.stats.firstSendRequestTime === 0 &&
          (d.stats.firstSendRequestTime = Date.now()));
      var m =
          r instanceof SharedArrayBuffer ? new Uint8Array(r).slice().buffer : r,
        _ = m.byteLength,
        f = o("WAWebVoipRelayConnectionUtils").inspectPacketType(m);
      if (
        f === o("WAWebVoipRelayConnectionUtils").PacketType.STUN_ALLOC &&
        d.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open &&
        d.sentMedia === !0 &&
        !d.channelTransferred
      ) {
        var g = n.getIceRestartRxInactivityMs(),
          h = Date.now() - d.lastRxPacketTime;
        if (h > g) {
          (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] STUN_ALLOC no rx ",
                "ms>",
                "ms, ICE restart ",
                "",
              ])),
            h,
            g,
            l,
          ),
            o("WAWebVoipRelayConnectionUtils").clearPacketBuffer(
              d.packetBuffer,
            ),
            o("WAWebVoipRelayConnectionUtils").bufferPacket(
              d.packetBuffer,
              m,
              d.stats,
              o("WAWebVoipSctpConnectionManagerConstants").MAX_BUFFER_BYTES,
            ),
            n.restartIceProcess(d));
          return;
        }
      }
      if (d.channelTransferred) {
        var y = o(
          "WAWebVoipSctpDataChannelThreadManager",
        ).getDataChannelThread();
        if (y == null || !y.isActive())
          (o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [DCThread] transferred but inactive ",
                ", legacy path",
              ])),
            l,
          ),
            (d.channelTransferred = !1));
        else if (
          d.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open
        ) {
          var C = y.sendPacket(l, m);
          (C ||
            (d.stats.droppedPackets++,
            o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [DCThread] send failed ",
                  ", pthread shutting down",
                ])),
              l,
            )),
            f === o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN &&
              (d.hasNonStunPacketSent || (d.hasNonStunPacketSent = !0),
              d.sentMedia !== !0 && (d.sentMedia = !0)));
          return;
        }
        o("WAWebVoipSctpPacketBuffering").bufferPacketForConnection(d, m);
        return;
      }
      if (
        d.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open &&
        d.channel != null
      ) {
        try {
          (d.channel.send(m),
            d.stats.sentPackets++,
            (d.stats.sentBytes += _),
            f === o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN &&
              (d.hasNonStunPacketSent || (d.hasNonStunPacketSent = !0),
              d.sentMedia !== !0 && (d.sentMedia = !0)));
        } catch (e) {}
        return;
      }
      o("WAWebVoipSctpPacketBuffering").bufferPacketForConnection(d, m);
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
