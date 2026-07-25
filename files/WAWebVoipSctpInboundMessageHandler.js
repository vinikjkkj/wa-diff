__d(
  "WAWebVoipSctpInboundMessageHandler",
  [
    "WALogger",
    "WAWebVoipGatingUtils",
    "WAWebVoipRelayConnectionUtils",
    "WAWebVoipSctpConnectionManagerConstants",
    "WAWebVoipSctpConnectionState",
    "WAWebVoipStackInterface",
    "asyncToGeneratorRuntime",
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
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = o("WAWebVoipSctpConnectionState").sctpConnections.get(n.id),
            i = r("nullthrows")(
              yield o("WAWebVoipStackInterface").getVoipStackInterface(),
            );
          if (i.type === "web" && a) {
            var l = yield o("WAWebVoipRelayConnectionUtils").dataToArrayBuffer(
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
              yield i.handleOnTransportMessage(l, n.ip, u(n)));
          } else
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SctpConnectionManager] conn not found for ",
                  "",
                ])),
              n.id,
            );
        })),
        d.apply(this, arguments)
      );
    }
    l.handleSctpChannelMessage = c;
  },
  98,
);
