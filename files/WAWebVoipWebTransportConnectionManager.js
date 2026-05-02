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
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x;
    function $() {
      var e;
      return (e = self.WebTransport) != null ? e : null;
    }
    var P = new Map(),
      N = null;
    function M() {
      return (N == null && (N = new AbortController()), N.signal);
    }
    var w = new Map(),
      A = null,
      F = 100,
      O = [];
    function B(t) {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Packet handler registered, draining ",
            " pending packets",
          ])),
        O.length,
      ),
        (A = t));
      for (var n of O)
        try {
          t(n.packet, n.ip, n.port);
        } catch (e) {
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Error draining pending packet: ",
                "",
              ])),
            e,
          );
        }
      O = [];
    }
    function W(e, t) {
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
    function q(e) {
      e.connectionTimeout != null &&
        (window.clearTimeout(e.connectionTimeout),
        (e.connectionTimeout = null));
    }
    function U(e, t) {
      (q(e),
        (e.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed),
        P.delete(t));
    }
    function V(e) {
      var t = e.authToken,
        n = e.clusterDomain,
        r = e.token;
      if (n == null || !n.endsWith(".whatsapp.com"))
        return (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransportConnectionManager] Invalid clusterDomain: ",
                  "",
                ])),
              n != null ? n : "null",
            )
            .sendLogs("webtransport-invalid-cluster-domain"),
          null
        );
      var a = "https://" + n + "/webtransport",
        i = new URLSearchParams();
      return (
        i.set("token", r),
        t != null && i.set("auth", t),
        a + "?" + i.toString()
      );
    }
    function H(e, t) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.transport;
          if (n != null)
            try {
              var r = n.datagrams.readable.getReader();
              for (e.datagramReader = r; ; ) {
                var a = yield r.read(),
                  i = a.done,
                  l = a.value;
                if (i) break;
                l != null && z(t, l);
              }
            } catch (e) {
              P.has(t) &&
                o("WALogger").WARN(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WebTransportConnectionManager] Datagram reader error for ",
                      ": ",
                      "",
                    ])),
                  t,
                  e,
                );
            }
        })),
        G.apply(this, arguments)
      );
    }
    function z(e, t) {
      var n = P.get(e);
      if (n != null) {
        (n.stats.receivedPackets++,
          (n.stats.receivedBytes += t.byteLength),
          n.hasReceivedFirstPacket ||
            ((n.hasReceivedFirstPacket = !0),
            (n.stats.firstResponseRecvTime = Date.now())));
        var r = w.get(e);
        if (r == null) {
          o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] No relay info found for ",
                "",
              ])),
            e,
          );
          return;
        }
        var a = t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength),
          i = A;
        if (i == null) {
          (O.length >= F && O.shift(),
            O.push({ packet: a, ip: r.ip, port: r.port }));
          return;
        }
        try {
          i(a, r.ip, r.port);
        } catch (t) {
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransportConnectionManager] Failed to handle received datagram for ",
                  ": ",
                  "",
                ])),
              e,
              t,
            )
            .sendLogs("webtransport-datagram-handle-fail");
        }
      }
    }
    function j(e) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.id;
          o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Connecting to ",
                "",
              ])),
            t,
          );
          var a = P.get(t);
          (a == null && ((a = W(t, e)), P.set(t, a)),
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
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WebTransportConnectionManager] Connection timeout for ",
                      "",
                    ])),
                  t,
                ),
                U(a, t));
            }, o("WAWebVoipRelayConnectionUtils").CONNECTION_TIMEOUT_MS)));
          var i = null;
          try {
            var l = V(e);
            if (l == null) {
              U(a, t);
              return;
            }
            var s = $();
            if (s == null) {
              (o("WALogger")
                .ERROR(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WebTransportConnectionManager] WebTransport not supported",
                    ])),
                )
                .sendLogs("webtransport-not-supported"),
                U(a, t));
              return;
            }
            i = new s(l, { serverCertificateHashes: [] });
            var u = M(),
              c = new (x || (x = n("Promise")))(function (e, t) {
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
            yield x.race([i.ready, c]);
            var d = P.get(t);
            if (
              d == null ||
              d !== a ||
              d.state !==
                o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting
            ) {
              o("WALogger").WARN(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportConnectionManager] Connection ",
                    " was cleaned up during establishment, closing transport",
                  ])),
                t,
              );
              try {
                i.close();
              } catch (e) {
                o("WALogger").WARN(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WebTransportConnectionManager] Error closing stale transport for ",
                      ": ",
                      "",
                    ])),
                  t,
                  e,
                );
              }
              return;
            }
            (q(a),
              (a.transport = i),
              (a.state = o(
                "WAWebVoipRelayConnectionUtils",
              ).ConnectionState.Open),
              (a.stats.connectionReadyTime = Date.now()),
              o("WALogger").LOG(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportConnectionManager] Connection opened for ",
                    "",
                  ])),
                t,
              ),
              (a.datagramWriter = i.datagrams.writable.getWriter()),
              H(a, t),
              yield Q(t),
              i.closed
                .then(function () {
                  (o("WALogger").LOG(
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
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
                    L ||
                      (L = babelHelpers.taggedTemplateLiteralLoose([
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
              (o("WALogger")
                .ERROR(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WebTransportConnectionManager] Failed to connect to ",
                      ": ",
                      "",
                    ])),
                  t,
                  e,
                )
                .sendLogs("webtransport-connect-fail"),
              U(a, t),
              i != null)
            )
              try {
                i.close();
              } catch (e) {
                o("WALogger").WARN(
                  k ||
                    (k = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WebTransportConnectionManager] Error closing transport during cleanup for ",
                      ": ",
                      "",
                    ])),
                  t,
                  e,
                );
              }
          }
        })),
        K.apply(this, arguments)
      );
    }
    function Q(e) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = P.get(e);
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
                    I ||
                      (I = babelHelpers.taggedTemplateLiteralLoose([
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
        X.apply(this, arguments)
      );
    }
    function Y(e) {
      var t = P.get(e);
      if (t != null) {
        if (
          (o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Cleaning up connection ",
                "",
              ])),
            e,
          ),
          q(t),
          t.datagramWriter != null)
        ) {
          try {
            t.datagramWriter.releaseLock();
          } catch (e) {}
          t.datagramWriter = null;
        }
        if (t.datagramReader != null) {
          try {
            t.datagramReader.releaseLock();
          } catch (e) {}
          t.datagramReader = null;
        }
        if (t.transport != null) {
          try {
            t.transport.close();
          } catch (e) {}
          t.transport = null;
        }
        (o("WAWebVoipRelayConnectionUtils").clearPacketBuffer(t.packetBuffer),
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Connection ",
                " stats - sent: ",
                " (",
                " bytes), received: ",
                " (",
                " bytes), dropped: ",
                "",
              ])),
            e,
            t.stats.sentPackets,
            t.stats.sentBytes,
            t.stats.receivedPackets,
            t.stats.receivedBytes,
            t.stats.droppedPackets,
          ),
          P.delete(e));
      }
    }
    function J(e, t, n) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = o("WAWebVoipRelayConnectionUtils").getConnectionIdentifier(
              t,
              n,
            ),
            a = P.get(r),
            i = w.get(r);
          if (a == null) {
            if (i == null) return;
            ((a = W(r, i)), P.set(r, a));
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
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
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
              D ||
                (D = babelHelpers.taggedTemplateLiteralLoose([
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
              j(i));
        })),
        Z.apply(this, arguments)
      );
    }
    function ee(e) {
      (o("WALogger").LOG(
        _ ||
          (_ = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Received relay list update",
          ])),
      ),
        (w = o("WAWebVoipRelayConnectionUtils").extractRelayConnectionMap(e)));
    }
    function te() {
      (o("WALogger").LOG(
        f ||
          (f = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Closing all connections",
          ])),
      ),
        N != null && (N.abort(), (N = null)));
      for (var e of P.keys()) Y(e);
      (w.clear(), (O = []));
    }
    ((l.registerPacketHandler = B),
      (l.sendData = J),
      (l.handleRelayListUpdate = ee),
      (l.closeAllConnections = te));
  },
  98,
);
