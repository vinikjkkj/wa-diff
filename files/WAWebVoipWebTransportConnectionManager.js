__d(
  "WAWebVoipWebTransportConnectionManager",
  [
    "WALogger",
    "WAWebCoreActionsODS",
    "WAWebVoipRelayConnectionUtils",
    "WAWebVoipTsLogger",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D;
    function x() {
      var e;
      return (e = self.WebTransport) != null ? e : null;
    }
    var $ = new Map(),
      P = null;
    function N() {
      return (P == null && (P = new AbortController()), P.signal);
    }
    var M = new Map(),
      w = new Map(),
      A = !1,
      F = null,
      O = 100,
      B = [];
    function W(t) {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Packet handler registered, draining ",
            " pending packets",
          ])),
        B.length,
      ),
        (F = t));
      for (var n of B)
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
      B = [];
    }
    function q(e, t) {
      var n;
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
        clusterDomain: (n = t.clusterDomain) != null ? n : null,
      };
    }
    function U(e) {
      e.connectionTimeout != null &&
        (window.clearTimeout(e.connectionTimeout),
        (e.connectionTimeout = null));
    }
    function V(e, t) {
      if (
        (U(e),
        (e.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed),
        !A)
      ) {
        o("WAWebCoreActionsODS").logCallWebtransportConnectFailed();
        var n = e.clusterDomain;
        n != null &&
          o("WAWebVoipTsLogger").logWebtransportConnectionFailed(
            "https://" + n + "/webtransport",
          );
      }
      var r = e.clusterDomain;
      (r != null && w.get(r) === t && w.delete(r), $.delete(t));
    }
    function H(e) {
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
    async function G(e, t) {
      var n = e.transport;
      if (n != null)
        try {
          var r = n.datagrams.readable.getReader();
          for (e.datagramReader = r; ; ) {
            var a = await r.read(),
              i = a.done,
              l = a.value;
            if (i) break;
            l != null && z(t, l);
          }
        } catch (e) {
          $.has(t) &&
            o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransportConnectionManager] Datagram reader error for ",
                  ": ",
                  "",
                ])),
              t,
              e,
            );
        }
    }
    function z(e, t) {
      var n = $.get(e);
      if (n != null) {
        (n.stats.receivedPackets++,
          (n.stats.receivedBytes += t.byteLength),
          n.hasReceivedFirstPacket ||
            ((n.hasReceivedFirstPacket = !0),
            (n.stats.firstResponseRecvTime = Date.now())));
        var r = M.get(e);
        if (r == null) {
          o("WALogger").WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] No relay info found for ",
                "",
              ])),
            e,
          );
          return;
        }
        var a = t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength),
          i = F;
        if (i == null) {
          (B.length >= O && B.shift(),
            B.push({ packet: a, ip: r.ip, port: r.port }));
          return;
        }
        try {
          i(a, r.ip, r.port);
        } catch (t) {
          o("WALogger")
            .ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
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
    async function j(e) {
      var t = e.id,
        n = e.clusterDomain;
      if (!(n != null && w.has(n))) {
        (n != null && w.set(n, t),
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Connecting to ",
                "",
              ])),
            t,
          ),
          o("WAWebCoreActionsODS").logCallWebtransportConnectAttempted(),
          n != null &&
            o("WAWebVoipTsLogger").logWebtransportConnectionStart(
              "https://" + n + "/webtransport",
            ));
        var a = $.get(t);
        (a == null && ((a = q(t, e)), $.set(t, a)),
          (a.state = o(
            "WAWebVoipRelayConnectionUtils",
          ).ConnectionState.Connecting),
          (a.connectionStartTime = Date.now()),
          (a.connectionTimeout = window.setTimeout(function () {
            a != null &&
              a.state ===
                o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting &&
              (o("WALogger").WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportConnectionManager] Connection timeout for ",
                    "",
                  ])),
                t,
              ),
              V(a, t));
          }, o("WAWebVoipRelayConnectionUtils").CONNECTION_TIMEOUT_MS)));
        var i = null;
        try {
          var l = H(e);
          if (l == null) {
            V(a, t);
            return;
          }
          var s = x();
          if (s == null) {
            (o("WALogger")
              .ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportConnectionManager] WebTransport not supported",
                  ])),
              )
              .sendLogs("webtransport-not-supported"),
              V(a, t));
            return;
          }
          i = new s(l, { serverCertificateHashes: [] });
          var u = N(),
            c = new Promise(function (e, t) {
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
          await Promise.race([i.ready, c]);
          var d = $.get(t);
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
            } catch (e) {
              o("WALogger").WARN(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
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
          (U(a),
            (a.transport = i),
            (a.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Open),
            (a.stats.connectionReadyTime = Date.now()),
            o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransportConnectionManager] Connection opened for ",
                  "",
                ])),
              t,
            ),
            o("WAWebCoreActionsODS").logCallWebtransportConnectSucceeded());
          var m = a.clusterDomain;
          (m != null &&
            o("WAWebVoipTsLogger").logWebtransportConnectionComplete(
              "https://" + m + "/webtransport",
            ),
            (a.datagramWriter = i.datagrams.writable.getWriter()),
            G(a, t),
            await K(t),
            i.closed
              .then(function () {
                if (
                  (o("WALogger").LOG(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [WebTransportConnectionManager] Connection closed for ",
                        "",
                      ])),
                    t,
                  ),
                  a != null)
                ) {
                  a.state = o(
                    "WAWebVoipRelayConnectionUtils",
                  ).ConnectionState.Closed;
                  var e = a.clusterDomain;
                  e != null && w.get(e) === t && w.delete(e);
                }
              })
              .catch(function (e) {
                if (
                  (o("WALogger").WARN(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [WebTransportConnectionManager] Connection closed with error for ",
                        ": ",
                        "",
                      ])),
                    t,
                    e,
                  ),
                  a != null)
                ) {
                  a.state = o(
                    "WAWebVoipRelayConnectionUtils",
                  ).ConnectionState.Failed;
                  var n = a.clusterDomain;
                  n != null && w.get(n) === t && w.delete(n);
                }
              }));
        } catch (e) {
          if (
            (o("WALogger")
              .ERROR(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportConnectionManager] Failed to connect to ",
                    ": ",
                    "",
                  ])),
                t,
                e,
              )
              .sendLogs("webtransport-connect-fail"),
            V(a, t),
            i != null)
          )
            try {
              i.close();
            } catch (e) {
              o("WALogger").WARN(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportConnectionManager] Error closing transport during cleanup for ",
                    ": ",
                    "",
                  ])),
                t,
                e,
              );
            }
        }
      }
    }
    async function K(e) {
      var t = $.get(e);
      if (
        !(
          t == null ||
          t.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Open
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
              (await n.write(new Uint8Array(r)),
                t.stats.sentPackets++,
                (t.stats.sentBytes += r.byteLength));
            } catch (n) {
              (o("WALogger").WARN(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportConnectionManager] Failed to send buffered packet for ",
                    ": ",
                    "",
                  ])),
                e,
                n,
              ),
                t.stats.droppedPackets++);
            }
            r = o("WAWebVoipRelayConnectionUtils").shiftPacket(t.packetBuffer);
          }
      }
    }
    function Q(e) {
      var t = $.get(e);
      if (t != null) {
        if (
          (o("WALogger").LOG(
            L ||
              (L = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Cleaning up connection ",
                "",
              ])),
            e,
          ),
          U(t),
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
            E ||
              (E = babelHelpers.taggedTemplateLiteralLoose([
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
          ));
        var n = t.clusterDomain;
        (n != null && w.get(n) === e && w.delete(n), $.delete(e));
      }
    }
    async function X(e, t, n) {
      if (!A) {
        var r = o("WAWebVoipRelayConnectionUtils").getConnectionIdentifier(
            t,
            n,
          ),
          a = $.get(r),
          i = M.get(r);
        if (a == null) {
          if (i == null) return;
          var l = i.clusterDomain,
            s = l != null ? w.get(l) : void 0,
            u = s != null ? $.get(s) : void 0;
          u != null ? (a = u) : ((a = q(r, i)), $.set(r, a));
        }
        if (
          (a.stats.firstSendRequestTime === 0 &&
            (a.stats.firstSendRequestTime = Date.now()),
          a.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open &&
            a.datagramWriter != null)
        ) {
          try {
            (await a.datagramWriter.write(
              new Uint8Array(
                o("WAWebVoipRelayConnectionUtils").copyArrayBuffer(e),
              ),
            ),
              a.stats.sentPackets++,
              (a.stats.sentBytes += e.byteLength));
          } catch (e) {
            (o("WALogger").WARN(
              k ||
                (k = babelHelpers.taggedTemplateLiteralLoose([
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
        if (!Y(e, a)) {
          var c = o("WAWebVoipRelayConnectionUtils").bufferPacket(
            a.packetBuffer,
            o("WAWebVoipRelayConnectionUtils").copyArrayBuffer(e),
            a.stats,
          );
          (c ||
            o("WALogger").WARN(
              I ||
                (I = babelHelpers.taggedTemplateLiteralLoose([
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
        }
      }
    }
    function Y(e, t) {
      return t.state ===
        o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed ||
        o("WAWebVoipRelayConnectionUtils").inspectPacketType(e) ===
          o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN
        ? (t.stats.droppedPackets++, !0)
        : !1;
    }
    function J(e) {
      (o("WALogger").LOG(
        T ||
          (T = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Received relay list update",
          ])),
      ),
        (M = o("WAWebVoipRelayConnectionUtils").extractRelayConnectionMap(e)));
    }
    function Z() {
      A = !0;
    }
    function ee() {
      (o("WALogger").LOG(
        D ||
          (D = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Closing all connections",
          ])),
      ),
        P != null && (P.abort(), (P = null)));
      for (var e of $.keys()) {
        var t = $.get(e);
        if (
          t != null &&
          t.state ===
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting
        ) {
          (U(t), $.delete(e));
          continue;
        }
        Q(e);
      }
      (M.clear(),
        w.clear(),
        (B = []),
        o("WAWebVoipTsLogger").cleanup(),
        (A = !1));
    }
    ((l.registerPacketHandler = W),
      (l.sendData = X),
      (l.handleRelayListUpdate = J),
      (l.prepareForEndCall = Z),
      (l.closeAllConnections = ee));
  },
  98,
);
