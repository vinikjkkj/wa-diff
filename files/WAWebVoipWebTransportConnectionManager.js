__d(
  "WAWebVoipWebTransportConnectionManager",
  [
    "Promise",
    "WALogger",
    "WAWebCoreActionsODS",
    "WAWebVoipCallStateUtils",
    "WAWebVoipLocalCallStateStore",
    "WAWebVoipRelayConnectionUtils",
    "WAWebVoipTsLogger",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E,
      k,
      I,
      T,
      D,
      x,
      $,
      P,
      N,
      M,
      w,
      A,
      F,
      O;
    function B() {
      var e;
      return (e = self.WebTransport) != null ? e : null;
    }
    var W = new Map(),
      q = null;
    function U() {
      return (q == null && (q = new AbortController()), q.signal);
    }
    var V = new Map(),
      H = new Map(),
      G = !1,
      z = null,
      j = 100,
      K = [],
      Q = null,
      X = !1,
      Y = !1,
      J = null;
    function Z(t) {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Fallback handler registered",
          ])),
      ),
        (Q = t));
    }
    function ee() {
      if (G) {
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] Skipping fallback: tearing down",
            ])),
        );
        return;
      }
      if (X) {
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] Skipping fallback: already fell back this call",
            ])),
        );
        return;
      }
      if (!me()) {
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] Skipping fallback: call not engaged locally (state=",
              ")",
            ])),
          String(o("WAWebVoipLocalCallStateStore").getLocalCallState()),
        );
        return;
      }
      var e = Q;
      if (e == null) {
        Y ||
          ((Y = !0),
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Skipping fallback: no handler registered (fallback abprop off)",
              ])),
          ),
          o(
            "WAWebCoreActionsODS",
          ).logCallWebtransportFallbackToSctpSkippedDisabled());
        return;
      }
      ((X = !0),
        o("WAWebCoreActionsODS").logCallWebtransportFallbackToSctpTriggered(),
        o("WALogger")
          .LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Triggering SCTP fallback",
              ])),
          )
          .sendLogs("webtransport-fallback-to-sctp-triggered"));
      try {
        e(J);
      } catch (e) {
        o("WALogger")
          .ERROR(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Fallback handler threw: ",
                "",
              ])),
            e,
          )
          .sendLogs("webtransport-fallback-handler-fail");
      }
    }
    function te(e) {
      (o("WALogger").LOG(
        _ ||
          (_ = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Packet handler registered, draining ",
            " pending packets",
          ])),
        K.length,
      ),
        (z = e));
      for (var t of K)
        try {
          e(t.packet, t.ip, t.port);
        } catch (e) {
          o("WALogger").WARN(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Error draining pending packet: ",
                "",
              ])),
            e,
          );
        }
      K = [];
    }
    function ne(e, t) {
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
    function re(e) {
      e.connectionTimeout != null &&
        (window.clearTimeout(e.connectionTimeout),
        (e.connectionTimeout = null));
    }
    function oe(e, t) {
      if (
        (re(e),
        (e.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed),
        !G)
      ) {
        o("WAWebCoreActionsODS").logCallWebtransportConnectFailed();
        var n = e.clusterDomain;
        n != null &&
          o("WAWebVoipTsLogger").logWebtransportConnectionFailed(
            "https://" + n + "/webtransport",
          );
      }
      var r = e.clusterDomain;
      (r != null && H.get(r) === t && H.delete(r), W.delete(t), ee());
    }
    function ae(e) {
      var t = e.authToken,
        n = e.clusterDomain,
        r = e.token;
      if (n == null || !n.endsWith(".whatsapp.com"))
        return (
          o("WALogger")
            .ERROR(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
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
    function ie(e, t) {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.transport;
          if (n != null)
            try {
              var r = n.datagrams.readable.getReader();
              for (e.datagramReader = r; ; ) {
                var a = yield r.read(),
                  i = a.done,
                  l = a.value;
                if (i) break;
                l != null && se(t, l);
              }
            } catch (e) {
              W.has(t) &&
                o("WALogger").WARN(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WebTransportConnectionManager] Datagram reader error for ",
                      ": ",
                      "",
                    ])),
                  t,
                  e,
                );
            }
        })),
        le.apply(this, arguments)
      );
    }
    function se(e, t) {
      var n = W.get(e);
      if (n != null) {
        (n.stats.receivedPackets++,
          (n.stats.receivedBytes += t.byteLength),
          n.hasReceivedFirstPacket ||
            ((n.hasReceivedFirstPacket = !0),
            (n.stats.firstResponseRecvTime = Date.now())));
        var r = V.get(e);
        if (r == null) {
          o("WALogger").WARN(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] No relay info found for ",
                "",
              ])),
            e,
          );
          return;
        }
        var a = t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength),
          i = z;
        if (i == null) {
          (K.length >= j && K.shift(),
            K.push({ packet: a, ip: r.ip, port: r.port }));
          return;
        }
        try {
          i(a, r.ip, r.port);
        } catch (t) {
          o("WALogger")
            .ERROR(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
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
    var ue = "WebTransport connect aborted";
    function ce(e) {
      var t = function (n) {
          if (e != null && typeof e == "object" && n in e) return e[n];
        },
        n = t("name"),
        r = t("message"),
        o = t("stack"),
        a = t("source"),
        i = t("streamErrorCode"),
        l = i != null;
      return {
        errorName: n != null ? String(n) : "unknown",
        errorMessage: r != null ? String(r) : String(e),
        errorStack: o != null ? String(o) : "no-stack",
        wtSource: a != null ? String(a) : "n/a",
        wtStreamErrorCode: l ? String(i) : "n/a",
        wtHasStreamErrorCode: l,
      };
    }
    function de(e, t) {
      var n = e.errorMessage,
        r = e.errorName,
        o = e.wtHasStreamErrorCode,
        a = e.wtSource;
      return r !== "WebTransportError" && n === ue
        ? "aborted"
        : r === "WebTransportError" && a === "session"
          ? !o && t >= 3e3 && t <= 6e3
            ? "handshake_timeout"
            : t >= 0 && t < 100
              ? "immediate_reject"
              : "session_error"
          : r === "WebTransportError" && a === "stream"
            ? "stream_error"
            : "unknown";
    }
    function me() {
      var e = o("WAWebVoipLocalCallStateStore").getLocalCallState();
      return (
        !o("WAWebVoipCallStateUtils").isCallTerminal(e) &&
        !o("WAWebVoipCallStateUtils").isCallIncoming(e)
      );
    }
    function pe(e, t, n) {
      var r = t != null && t > 0 ? Date.now() - t : -1,
        o = ce(e),
        a = o.errorMessage,
        i = o.errorName,
        l = o.errorStack,
        s = o.wtSource,
        u = o.wtStreamErrorCode;
      return {
        errorName: i,
        errorMessage: a,
        errorStack: l,
        wtSource: s,
        wtStreamErrorCode: u,
        elapsedMs: r,
        transportState: n != null ? "constructed" : "null",
        likelyCause: de(o, r),
      };
    }
    function _e(e) {
      return fe.apply(this, arguments);
    }
    function fe() {
      return (
        (fe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.id,
            a = e.clusterDomain;
          if (!(a != null && H.has(a))) {
            (a != null && H.set(a, t),
              o("WALogger").LOG(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportConnectionManager] Connecting to ",
                    "",
                  ])),
                t,
              ),
              o("WAWebCoreActionsODS").logCallWebtransportConnectAttempted(),
              a != null &&
                o("WAWebVoipTsLogger").logWebtransportConnectionStart(
                  "https://" + a + "/webtransport",
                ));
            var i = W.get(t);
            (i == null && ((i = ne(t, e)), W.set(t, i)),
              (i.state = o(
                "WAWebVoipRelayConnectionUtils",
              ).ConnectionState.Connecting),
              (i.connectionStartTime = Date.now()),
              (i.connectionTimeout = window.setTimeout(function () {
                i != null &&
                  i.state ===
                    o("WAWebVoipRelayConnectionUtils").ConnectionState
                      .Connecting &&
                  (o("WALogger").WARN(
                    E ||
                      (E = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [WebTransportConnectionManager] Connection timeout for ",
                        "",
                      ])),
                    t,
                  ),
                  G ||
                    o(
                      "WAWebCoreActionsODS",
                    ).logCallWebtransportConnectFailByCategory(
                      "connection_timeout",
                    ),
                  oe(i, t));
              }, o("WAWebVoipRelayConnectionUtils").CONNECTION_TIMEOUT_MS)));
            var l = null;
            try {
              var s = ae(e);
              if (s == null) {
                (G ||
                  o(
                    "WAWebCoreActionsODS",
                  ).logCallWebtransportConnectFailByCategory("invalid_config"),
                  oe(i, t));
                return;
              }
              var u = B();
              if (u == null) {
                (o("WALogger")
                  .ERROR(
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [WebTransportConnectionManager] WebTransport not supported",
                      ])),
                  )
                  .sendLogs("webtransport-not-supported"),
                  G ||
                    o(
                      "WAWebCoreActionsODS",
                    ).logCallWebtransportConnectFailByCategory(
                      "invalid_config",
                    ),
                  oe(i, t));
                return;
              }
              l = new u(s);
              var c = U(),
                d = new (O || (O = n("Promise")))(function (e, t) {
                  if (c.aborted) {
                    t(r("err")("WebTransport connect aborted"));
                    return;
                  }
                  c.addEventListener(
                    "abort",
                    function () {
                      return t(r("err")("WebTransport connect aborted"));
                    },
                    { once: !0 },
                  );
                });
              yield O.race([l.ready, d]);
              var m = W.get(t);
              if (
                m == null ||
                m !== i ||
                m.state !==
                  o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting
              ) {
                o("WALogger").WARN(
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WebTransportConnectionManager] Connection ",
                      " was cleaned up during establishment, closing transport",
                    ])),
                  t,
                );
                try {
                  l.close();
                } catch (e) {
                  o("WALogger").WARN(
                    T ||
                      (T = babelHelpers.taggedTemplateLiteralLoose([
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
              (re(i),
                (i.transport = l),
                (i.state = o(
                  "WAWebVoipRelayConnectionUtils",
                ).ConnectionState.Open),
                (i.stats.connectionReadyTime = Date.now()),
                o("WALogger").LOG(
                  D ||
                    (D = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WebTransportConnectionManager] Connection opened for ",
                      "",
                    ])),
                  t,
                ),
                o("WAWebCoreActionsODS").logCallWebtransportConnectSucceeded());
              var p = i.clusterDomain;
              (p != null &&
                o("WAWebVoipTsLogger").logWebtransportConnectionComplete(
                  "https://" + p + "/webtransport",
                ),
                (i.datagramWriter = l.datagrams.writable.getWriter()),
                ie(i, t),
                yield ge(t),
                l.closed
                  .then(function () {
                    if (
                      (o("WALogger").LOG(
                        x ||
                          (x = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [WebTransportConnectionManager] Connection closed for ",
                            "",
                          ])),
                        t,
                      ),
                      i != null)
                    ) {
                      i.state = o(
                        "WAWebVoipRelayConnectionUtils",
                      ).ConnectionState.Closed;
                      var e = i.clusterDomain;
                      e != null && H.get(e) === t && H.delete(e);
                    }
                  })
                  .catch(function (e) {
                    if (
                      (o("WALogger").WARN(
                        $ ||
                          ($ = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [WebTransportConnectionManager] Connection closed with error for ",
                            ": ",
                            "",
                          ])),
                        t,
                        e,
                      ),
                      i != null)
                    ) {
                      i.state = o(
                        "WAWebVoipRelayConnectionUtils",
                      ).ConnectionState.Failed;
                      var n = i.clusterDomain;
                      n != null && H.get(n) === t && H.delete(n);
                    }
                    ee();
                  }));
            } catch (e) {
              var _ = pe(e, i.connectionStartTime, l);
              G ||
                o(
                  "WAWebCoreActionsODS",
                ).logCallWebtransportConnectFailByCategory(_.likelyCause);
              var f = o("WALogger").ERROR(
                P ||
                  (P = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportConnectionManager] Failed to connect to ",
                    " after ",
                    "ms: likelyCause=",
                    " name=",
                    " message=",
                    " wtSource=",
                    " wtStreamErrorCode=",
                    " transport=",
                    " stack=",
                    "",
                  ])),
                t,
                _.elapsedMs,
                _.likelyCause,
                _.errorName,
                _.errorMessage,
                _.wtSource,
                _.wtStreamErrorCode,
                _.transportState,
                _.errorStack,
              );
              if (
                (me() && f.sendLogs("webtransport-connect-fail"),
                oe(i, t),
                l != null)
              )
                try {
                  l.close();
                } catch (e) {
                  o("WALogger").WARN(
                    N ||
                      (N = babelHelpers.taggedTemplateLiteralLoose([
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
        })),
        fe.apply(this, arguments)
      );
    }
    function ge(e) {
      return he.apply(this, arguments);
    }
    function he() {
      return (
        (he = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = W.get(e);
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
                    M ||
                      (M = babelHelpers.taggedTemplateLiteralLoose([
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
        he.apply(this, arguments)
      );
    }
    function ye(e) {
      var t = W.get(e);
      if (t != null) {
        if (
          (o("WALogger").LOG(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Cleaning up connection ",
                "",
              ])),
            e,
          ),
          re(t),
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
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
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
        (n != null && H.get(n) === e && H.delete(n), W.delete(e));
      }
    }
    function Ce(e, t, n) {
      return be.apply(this, arguments);
    }
    function be() {
      return (
        (be = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            if (!G) {
              var r = o(
                  "WAWebVoipRelayConnectionUtils",
                ).getConnectionIdentifier(t, n),
                a = W.get(r),
                i = V.get(r);
              if (a == null) {
                if (i == null) {
                  var l = Array.from(V.keys()).join(",");
                  o("WALogger").LOG(
                    w ||
                      (w = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [WebTransportConnectionManager] No relay info for ",
                        ", skipping send (pruned candidate). knownRelays=[",
                        "]",
                      ])),
                    r,
                    l,
                  );
                  return;
                }
                var s = i.clusterDomain,
                  u = s != null ? H.get(s) : void 0,
                  c = u != null ? W.get(u) : void 0;
                c != null ? (a = c) : ((a = ne(r, i)), W.set(r, a));
              }
              if (
                (a.stats.firstSendRequestTime === 0 &&
                  (a.stats.firstSendRequestTime = Date.now()),
                a.state ===
                  o("WAWebVoipRelayConnectionUtils").ConnectionState.Open &&
                  a.datagramWriter != null)
              ) {
                try {
                  (yield a.datagramWriter.write(
                    new Uint8Array(
                      o("WAWebVoipRelayConnectionUtils").copyArrayBuffer(e),
                    ),
                  ),
                    a.stats.sentPackets++,
                    (a.stats.sentBytes += e.byteLength));
                } catch (e) {
                  (o("WALogger").WARN(
                    A ||
                      (A = babelHelpers.taggedTemplateLiteralLoose([
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
              if (!ve(e, a)) {
                var d = o("WAWebVoipRelayConnectionUtils").bufferPacket(
                  a.packetBuffer,
                  o("WAWebVoipRelayConnectionUtils").copyArrayBuffer(e),
                  a.stats,
                );
                (d ||
                  o("WALogger").WARN(
                    F ||
                      (F = babelHelpers.taggedTemplateLiteralLoose([
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
                    _e(i));
              }
            }
          },
        )),
        be.apply(this, arguments)
      );
    }
    function ve(e, t) {
      return t.state ===
        o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed ||
        o("WAWebVoipRelayConnectionUtils").inspectPacketType(e) ===
          o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN
        ? (t.stats.droppedPackets++, !0)
        : !1;
    }
    function Se(e) {
      (o("WALogger").LOG(
        v ||
          (v = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Received relay list update",
          ])),
      ),
        (J = e));
      var t = o("WAWebVoipRelayConnectionUtils").extractRelayConnectionMap(e);
      (Le(t) && o("WAWebCoreActionsODS").logCallWebtransportRelaysIpv6Only(),
        (V = Re(t)));
    }
    function Re(e) {
      var t = new Set();
      for (var n of e.values()) n.isIPv6 || t.add(n.relayId);
      var r = new Map();
      for (var o of e) {
        var a = o[0],
          i = o[1];
        (i.isIPv6 && t.has(i.relayId)) || r.set(a, i);
      }
      return r;
    }
    function Le(e) {
      if (e.size === 0) return !1;
      for (var t of e.values()) if (!t.isIPv6) return !1;
      return !0;
    }
    function Ee() {
      G = !0;
    }
    function ke() {
      (o("WALogger").LOG(
        S ||
          (S = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Closing all connections",
          ])),
      ),
        q != null && (q.abort(), (q = null)));
      for (var e of W.keys()) {
        var t = W.get(e);
        if (
          t != null &&
          t.state ===
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting
        ) {
          (re(t), W.delete(e));
          continue;
        }
        ye(e);
      }
      (V.clear(),
        H.clear(),
        (K = []),
        G && ((X = !1), (Y = !1), (J = null)),
        o("WAWebVoipTsLogger").cleanup(),
        (G = !1));
    }
    ((l.registerFallbackHandler = Z),
      (l.registerPacketHandler = te),
      (l.sendData = Ce),
      (l.handleRelayListUpdate = Se),
      (l.prepareForEndCall = Ee),
      (l.closeAllConnections = ke));
  },
  98,
);
