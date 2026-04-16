__d(
  "WAWebVoipWebTransportConnectionManager",
  [
    "WALogger",
    "WAWebVoipRelayConnectionUtils",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R;
    function L() {
      var e;
      return (e = self.WebTransport) != null ? e : null;
    }
    var E = new Map(),
      k = new Map();
    function I(e, t) {
      return {
        state: o("WAWebVoipRelayConnectionUtils").ConnectionState.None,
        transport: null,
        datagramWriter: null,
        datagramReader: null,
        packetBuffer: o("WAWebVoipRelayConnectionUtils").createPacketBuffer(),
        id: e,
        connectionTimeout: null,
        hasReceivedFirstPacket: !1,
        stats: o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats(),
        connectionStartTime: 0,
        relayId: t.relayId,
        relayIp: t.ip,
        relayPort: t.port,
      };
    }
    function T(e) {
      var t = e.authToken,
        n = e.clusterDomain,
        o = e.token;
      if (n == null || !n.endsWith(".whatsapp.com"))
        throw r("err")(
          "Invalid clusterDomain for WebTransport connection: " +
            (n != null ? n : "null"),
        );
      var a = "https://" + n + "/webtransport",
        i = new URLSearchParams();
      return (
        i.set("token", o),
        t != null && i.set("auth", t),
        a + "?" + i.toString()
      );
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.transport;
          if (n != null)
            try {
              var r = n.datagrams.readable.getReader();
              for (e.datagramReader = r; ; ) {
                var a = yield r.read(),
                  i = a.done,
                  l = a.value;
                if (i) break;
                l != null && (yield $(t, l));
              }
            } catch (n) {
              e.state ===
                o("WAWebVoipRelayConnectionUtils").ConnectionState.Open &&
                o("WALogger").WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WebTransportConnectionManager] Datagram reader error for ",
                      ": ",
                      "",
                    ])),
                  t,
                  n,
                );
            }
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = E.get(e);
          if (n != null) {
            (n.stats.receivedPackets++,
              (n.stats.receivedBytes += t.byteLength),
              n.hasReceivedFirstPacket ||
                ((n.hasReceivedFirstPacket = !0),
                (n.stats.firstResponseRecvTime = Date.now())));
            var r = k.get(e);
            if (r == null) {
              o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportConnectionManager] No relay info found for ",
                    "",
                  ])),
                e,
              );
              return;
            }
          }
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.id;
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Connecting to ",
                "",
              ])),
            t,
          );
          var n = E.get(t);
          (n == null && ((n = I(t, e)), E.set(t, n)),
            (n.state = o(
              "WAWebVoipRelayConnectionUtils",
            ).ConnectionState.Connecting),
            (n.connectionStartTime = Date.now()),
            (n.connectionTimeout = window.setTimeout(function () {
              n != null &&
                n.state ===
                  o("WAWebVoipRelayConnectionUtils").ConnectionState
                    .Connecting &&
                (o("WALogger").WARN(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WebTransportConnectionManager] Connection timeout for ",
                      "",
                    ])),
                  t,
                ),
                (n.state = o(
                  "WAWebVoipRelayConnectionUtils",
                ).ConnectionState.Failed),
                F(t));
            }, o("WAWebVoipRelayConnectionUtils").CONNECTION_TIMEOUT_MS)));
          try {
            var r = T(e),
              a = L();
            if (a == null) {
              (o("WALogger").ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportConnectionManager] WebTransport not supported",
                  ])),
              ),
                (n.state = o(
                  "WAWebVoipRelayConnectionUtils",
                ).ConnectionState.Failed),
                F(t));
              return;
            }
            var i = new a(r, { serverCertificateHashes: [] });
            yield i.ready;
            var l = E.get(t);
            if (
              l == null ||
              l !== n ||
              l.state !==
                o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting
            ) {
              o("WALogger").WARN(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportConnectionManager] Connection ",
                    " was cleaned up during establishment, closing transport",
                  ])),
                t,
              );
              try {
                i.close();
              } catch (e) {}
              return;
            }
            (n.connectionTimeout != null &&
              (window.clearTimeout(n.connectionTimeout),
              (n.connectionTimeout = null)),
              (n.transport = i),
              (n.state = o(
                "WAWebVoipRelayConnectionUtils",
              ).ConnectionState.Open),
              (n.stats.connectionReadyTime = Date.now()),
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportConnectionManager] Connection opened for ",
                    "",
                  ])),
                t,
              ),
              (n.datagramWriter = i.datagrams.writable.getWriter()),
              D(n, t),
              yield w(t),
              i.closed
                .then(function () {
                  (o("WALogger").LOG(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [WebTransportConnectionManager] Connection closed for ",
                        "",
                      ])),
                    t,
                  ),
                    n != null &&
                      (n.state = o(
                        "WAWebVoipRelayConnectionUtils",
                      ).ConnectionState.Closed));
                })
                .catch(function (e) {
                  (o("WALogger").WARN(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [WebTransportConnectionManager] Connection closed with error for ",
                        ": ",
                        "",
                      ])),
                    t,
                    e,
                  ),
                    n != null &&
                      (n.state = o(
                        "WAWebVoipRelayConnectionUtils",
                      ).ConnectionState.Failed));
                }));
          } catch (e) {
            (o("WALogger").ERROR(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransportConnectionManager] Failed to connect to ",
                  ": ",
                  "",
                ])),
              t,
              e,
            ),
              (n.state = o(
                "WAWebVoipRelayConnectionUtils",
              ).ConnectionState.Failed),
              n.connectionTimeout != null &&
                (window.clearTimeout(n.connectionTimeout),
                (n.connectionTimeout = null)),
              F(t));
          }
        })),
        M.apply(this, arguments)
      );
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = E.get(e);
          if (
            !(
              t == null ||
              t.state !==
                o("WAWebVoipRelayConnectionUtils").ConnectionState.Open
            )
          ) {
            var n = t.datagramWriter;
            if (n != null)
              for (
                var r = o("WAWebVoipRelayConnectionUtils").shiftPacket(
                  t.packetBuffer,
                );
                r != null;
              ) {
                try {
                  (yield n.write(new Uint8Array(r)),
                    t.stats.sentPackets++,
                    (t.stats.sentBytes += r.byteLength));
                } catch (n) {
                  (o("WALogger").WARN(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [WebTransportConnectionManager] Failed to send buffered packet for ",
                        ": ",
                        "",
                      ])),
                    e,
                    n,
                  ),
                    t.stats.droppedPackets++);
                }
                r = o("WAWebVoipRelayConnectionUtils").shiftPacket(
                  t.packetBuffer,
                );
              }
          }
        })),
        A.apply(this, arguments)
      );
    }
    function F(t) {
      var n = E.get(t);
      if (n != null) {
        if (
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Cleaning up connection ",
                "",
              ])),
            t,
          ),
          n.connectionTimeout != null &&
            (window.clearTimeout(n.connectionTimeout),
            (n.connectionTimeout = null)),
          n.datagramWriter != null)
        ) {
          try {
            n.datagramWriter.releaseLock();
          } catch (e) {}
          n.datagramWriter = null;
        }
        if (n.datagramReader != null) {
          try {
            n.datagramReader.releaseLock();
          } catch (e) {}
          n.datagramReader = null;
        }
        if (n.transport != null) {
          try {
            n.transport.close();
          } catch (e) {}
          n.transport = null;
        }
        (o("WAWebVoipRelayConnectionUtils").clearPacketBuffer(n.packetBuffer),
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Connection ",
                " stats - sent: ",
                " (",
                " bytes), received: ",
                " (",
                " bytes), dropped: ",
                "",
              ])),
            t,
            n.stats.sentPackets,
            n.stats.sentBytes,
            n.stats.receivedPackets,
            n.stats.receivedBytes,
            n.stats.droppedPackets,
          ),
          E.delete(t));
      }
    }
    function O(e, t, n) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = o("WAWebVoipRelayConnectionUtils").getConnectionIdentifier(
              t,
              n,
            ),
            a = E.get(r),
            i = k.get(r);
          if (a == null) {
            if (i == null) return;
            ((a = I(r, i)), E.set(r, a));
          }
          if (
            (a.stats.firstSendRequestTime === 0 &&
              (a.stats.firstSendRequestTime = Date.now()),
            a.state ===
              o("WAWebVoipRelayConnectionUtils").ConnectionState.Open &&
              a.datagramWriter != null)
          ) {
            try {
              (yield a.datagramWriter.write(new Uint8Array(e)),
                a.stats.sentPackets++,
                (a.stats.sentBytes += e.byteLength));
            } catch (e) {
              (o("WALogger").WARN(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportConnectionManager] Failed to send packet for ",
                    ": ",
                    "",
                  ])),
                r,
                e,
              ),
                a.stats.droppedPackets++);
            }
            return;
          }
          var l = o("WAWebVoipRelayConnectionUtils").bufferPacket(
            a.packetBuffer,
            o("WAWebVoipRelayConnectionUtils").copyArrayBuffer(e),
            a.stats,
          );
          (l ||
            o("WALogger").WARN(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransportConnectionManager] Dropping packet for ",
                  ": size ",
                  " exceeds max buffer size",
                ])),
              r,
              e.byteLength,
            ),
            a.state ===
              o("WAWebVoipRelayConnectionUtils").ConnectionState.None &&
              i != null &&
              N(i));
        })),
        B.apply(this, arguments)
      );
    }
    function W(e) {
      (o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Received relay list update",
          ])),
      ),
        (k = o("WAWebVoipRelayConnectionUtils").extractRelayConnectionMap(e)));
    }
    function q() {
      o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Closing all connections",
          ])),
      );
      for (var e of E.keys()) F(e);
      k.clear();
    }
    ((l.sendData = O),
      (l.handleRelayListUpdate = W),
      (l.closeAllConnections = q));
  },
  98,
);
