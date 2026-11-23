__d(
  "WAWebVoipSctpInboundMessageHandler",
  [
    "WALogger",
    "WAWebVoipGatingUtils",
    "WAWebVoipRelayConnectionUtils",
    "WAWebVoipSctpConnectionManagerConstants",
    "WAWebVoipSctpConnectionState",
    "WAWebVoipStackInterface",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      var t;
      if (o("WAWebVoipGatingUtils").shouldUseOriginalRelayPort()) {
        var n;
        return (n = e.originalPort) != null ? n : e.port;
      }
      return ((t = e.originalPort) != null ? t : e.port) ===
        o("WAWebVoipSctpConnectionManagerConstants").SctpConnectionConfig
          .TRUE_WEB_CLIENT_RELAY_PORT
        ? o("WAWebVoipSctpConnectionManagerConstants").SctpConnectionConfig
            .TRUE_WEB_CLIENT_RELAY_PORT
        : o("WAWebVoipSctpConnectionManagerConstants").SctpConnectionConfig
            .FAUX_WEB_CLIENT_RELAY_PORT;
    }
    async function c(t, n) {
      var a = o("WAWebVoipSctpConnectionState").sctpConnections.get(n.id);
      if ((a == null ? void 0 : a.isWebTransportWarmStandby) !== !0) {
        var i = r("nullthrows")(
          await o("WAWebVoipStackInterface").getVoipStackInterface(),
        );
        if (i.type === "web" && a) {
          var l = await o("WAWebVoipRelayConnectionUtils").dataToArrayBuffer(
            t.data,
          );
          if (l == null) {
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] Unexpected data type: ",
                  "",
                ])),
              typeof t.data,
            );
            return;
          }
          (a.stats.receivedPackets++,
            (a.stats.receivedBytes += l.byteLength),
            a.stats.firstResponseRecvTime === 0 &&
              (a.stats.firstResponseRecvTime = Date.now()),
            (a.lastRxPacketTime = Date.now()),
            a.hasReceivedFirstPacket || (a.hasReceivedFirstPacket = !0),
            await i.handleOnTransportMessage(l, n.ip, u(n)));
        } else
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SctpConnectionManager] conn not found for ",
                "",
              ])),
            n.id,
          );
      }
    }
    l.handleSctpChannelMessage = c;
  },
  98,
);
