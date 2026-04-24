__d(
  "WAWebVoipWebTransportConnectionManager",
  [
    "Promise",
    "WALogger",
    "WAWebVoipRelayConnectionUtils",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L;
    function E() {
      var e;
      return (e = self.WebTransport) != null ? e : null;
    }
    var k = new Map(),
      I = null;
    function T() {
      return (I == null && (I = new AbortController()), I.signal);
    }
    var D = new Map();
    function x(e, t) {
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
    function $(e) {
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
    function P(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.transport;
          if (n != null)
            try {
              var r = n.datagrams.readable.getReader();
              for (e.datagramReader = r; ; ) {
                var a = yield r.read(),
                  i = a.done,
                  l = a.value;
                if (i) break;
                l != null && (yield M(t, l));
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
        N.apply(this, arguments)
      );
    }
    function M(e, t) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = k.get(e);
          if (n != null) {
            (n.stats.receivedPackets++,
              (n.stats.receivedBytes += t.byteLength),
              n.hasReceivedFirstPacket ||
                ((n.hasReceivedFirstPacket = !0),
                (n.stats.firstResponseRecvTime = Date.now())));
            var r = D.get(e);
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
        w.apply(this, arguments)
      );
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.id;
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Connecting to ",
                "",
              ])),
            t,
          );
          var a = k.get(t);
          (a == null && ((a = x(t, e)), k.set(t, a)),
            (a.state = o(
              "WAWebVoipRelayConnectionUtils",
            ).ConnectionState.Connecting),
            (a.connectionStartTime = Date.now()),
            (a.connectionTimeout = window.setTimeout(function () {
              a != null &&
                a.state ===
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
                (a.state = o(
                  "WAWebVoipRelayConnectionUtils",
                ).ConnectionState.Failed),
                W(t));
            }, o("WAWebVoipRelayConnectionUtils").CONNECTION_TIMEOUT_MS)));
          var i = null;
          try {
            var l = $(e),
              s = E();
            if (s == null) {
              (o("WALogger").ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportConnectionManager] WebTransport not supported",
                  ])),
              ),
                (a.state = o(
                  "WAWebVoipRelayConnectionUtils",
                ).ConnectionState.Failed),
                W(t));
              return;
            }
            i = new s(l, { serverCertificateHashes: [] });
            var u = T(),
              c = new (L || (L = n("Promise")))(function (e, t) {
                if (u.aborted) {
                  t(r("err")("WebTransport connect aborted"));
                  return;
                }
                u.addEventListener(
                  "abort",
                  function () {
                    return t(r("err")("WebTransport connect aborted"));
                  },
                  { once: !0 },
                );
              });
            yield L.race([i.ready, c]);
            var d = k.get(t);
            if (
              d == null ||
              d !== a ||
              d.state !==
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
            (a.connectionTimeout != null &&
              (window.clearTimeout(a.connectionTimeout),
              (a.connectionTimeout = null)),
              (a.transport = i),
              (a.state = o(
                "WAWebVoipRelayConnectionUtils",
              ).ConnectionState.Open),
              (a.stats.connectionReadyTime = Date.now()),
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportConnectionManager] Connection opened for ",
                    "",
                  ])),
                t,
              ),
              (a.datagramWriter = i.datagrams.writable.getWriter()),
              P(a, t),
              yield O(t),
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
                    a != null &&
                      (a.state = o(
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
                    a != null &&
                      (a.state = o(
                        "WAWebVoipRelayConnectionUtils",
                      ).ConnectionState.Failed));
                }));
          } catch (e) {
            if (
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
              (a.state = o(
                "WAWebVoipRelayConnectionUtils",
              ).ConnectionState.Failed),
              a.connectionTimeout != null &&
                (window.clearTimeout(a.connectionTimeout),
                (a.connectionTimeout = null)),
              i != null)
            )
              try {
                i.close();
              } catch (e) {}
            W(t);
          }
        })),
        F.apply(this, arguments)
      );
    }
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = k.get(e);
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
        B.apply(this, arguments)
      );
    }
    function W(t) {
      var n = k.get(t);
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
          k.delete(t));
      }
    }
    function q(e, t, n) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = o("WAWebVoipRelayConnectionUtils").getConnectionIdentifier(
              t,
              n,
            ),
            a = k.get(r),
            i = D.get(r);
          if (a == null) {
            if (i == null) return;
            ((a = x(r, i)), k.set(r, a));
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
              A(i));
        })),
        U.apply(this, arguments)
      );
    }
    function V(e) {
      (o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Received relay list update",
          ])),
      ),
        (D = o("WAWebVoipRelayConnectionUtils").extractRelayConnectionMap(e)));
    }
    function H() {
      (o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Closing all connections",
          ])),
      ),
        I != null && (I.abort(), (I = null)));
      for (var e of k.keys()) W(e);
      D.clear();
    }
    ((l.sendData = q),
      (l.handleRelayListUpdate = V),
      (l.closeAllConnections = H));
  },
  98,
);
