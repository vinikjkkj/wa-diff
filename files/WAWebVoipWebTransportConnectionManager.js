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
      O,
      B;
    function W() {
      var e;
      return (e = self.WebTransport) != null ? e : null;
    }
    var q = new Map(),
      U = null;
    function V() {
      return (U == null && (U = new AbortController()), U.signal);
    }
    var H = new Map(),
      G = new Map(),
      z = !1,
      j = null,
      K = 100,
      Q = [],
      X = null,
      Y = !1,
      J = !1,
      Z = null;
    function ee(t) {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Fallback handler registered",
          ])),
      ),
        (X = t));
    }
    function te() {
      if (z) {
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] Skipping fallback: tearing down",
            ])),
        );
        return;
      }
      if (Y) {
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] Skipping fallback: already fell back this call",
            ])),
        );
        return;
      }
      if (!pe()) {
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
      for (var e of q.values())
        if (
          e.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open
        ) {
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Skipping fallback: another WT connection still open",
              ])),
          );
          return;
        }
      var t = X;
      if (t == null) {
        J ||
          ((J = !0),
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Skipping fallback: no handler registered (fallback abprop off)",
              ])),
          ),
          o(
            "WAWebCoreActionsODS",
          ).logCallWebtransportFallbackToSctpSkippedDisabled());
        return;
      }
      ((Y = !0),
        o("WAWebCoreActionsODS").logCallWebtransportFallbackToSctpTriggered(),
        o("WALogger")
          .LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Triggering SCTP fallback",
              ])),
          )
          .sendLogs("webtransport-fallback-to-sctp-triggered"));
      try {
        t(Z);
      } catch (e) {
        o("WALogger")
          .ERROR(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Fallback handler threw: ",
                "",
              ])),
            e,
          )
          .sendLogs("webtransport-fallback-handler-fail");
      }
    }
    function ne(e) {
      (o("WALogger").LOG(
        f ||
          (f = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Packet handler registered, draining ",
            " pending packets",
          ])),
        Q.length,
      ),
        (j = e));
      for (var t of Q)
        try {
          e(t.packet, t.ip, t.port);
        } catch (e) {
          o("WALogger").WARN(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Error draining pending packet: ",
                "",
              ])),
            e,
          );
        }
      Q = [];
    }
    function re(e, t) {
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
    function oe(e) {
      e.connectionTimeout != null &&
        (window.clearTimeout(e.connectionTimeout),
        (e.connectionTimeout = null));
    }
    function ae(e, t) {
      if (
        (oe(e),
        (e.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed),
        !z)
      ) {
        o("WAWebCoreActionsODS").logCallWebtransportConnectFailed();
        var n = e.clusterDomain;
        n != null &&
          o("WAWebVoipTsLogger").logWebtransportConnectionFailed(
            "https://" + n + "/webtransport",
          );
      }
      var r = e.clusterDomain;
      (r != null && G.get(r) === t && G.delete(r), q.delete(t), te());
    }
    function ie(e) {
      var t = e.authToken,
        n = e.clusterDomain,
        r = e.token;
      if (n == null || !n.endsWith(".whatsapp.com"))
        return (
          o("WALogger")
            .ERROR(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
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
    function le(e, t) {
      return se.apply(this, arguments);
    }
    function se() {
      return (
        (se = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.transport;
          if (n != null)
            try {
              var r = n.datagrams.readable.getReader();
              for (e.datagramReader = r; ; ) {
                var a = yield r.read(),
                  i = a.done,
                  l = a.value;
                if (i) break;
                l != null && ue(t, l);
              }
            } catch (e) {
              q.has(t) &&
                o("WALogger").WARN(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WebTransportConnectionManager] Datagram reader error for ",
                      ": ",
                      "",
                    ])),
                  t,
                  e,
                );
            }
        })),
        se.apply(this, arguments)
      );
    }
    function ue(e, t) {
      var n = q.get(e);
      if (n != null) {
        (n.stats.receivedPackets++,
          (n.stats.receivedBytes += t.byteLength),
          n.hasReceivedFirstPacket ||
            ((n.hasReceivedFirstPacket = !0),
            (n.stats.firstResponseRecvTime = Date.now())));
        var r = H.get(e);
        if (r == null) {
          o("WALogger").WARN(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] No relay info found for ",
                "",
              ])),
            e,
          );
          return;
        }
        var a = t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength),
          i = j;
        if (i == null) {
          (Q.length >= K && Q.shift(),
            Q.push({ packet: a, ip: r.ip, port: r.port }));
          return;
        }
        try {
          i(a, r.ip, r.port);
        } catch (t) {
          o("WALogger")
            .ERROR(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
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
    var ce = "WebTransport connect aborted";
    function de(e) {
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
    function me(e, t) {
      var n = e.errorMessage,
        r = e.errorName,
        o = e.wtHasStreamErrorCode,
        a = e.wtSource;
      return r !== "WebTransportError" && n === ce
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
    function pe() {
      var e = o("WAWebVoipLocalCallStateStore").getLocalCallState();
      return (
        !o("WAWebVoipCallStateUtils").isCallTerminal(e) &&
        !o("WAWebVoipCallStateUtils").isCallIncoming(e)
      );
    }
    function _e(e, t, n) {
      var r = t != null && t > 0 ? Date.now() - t : -1,
        o = de(e),
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
        likelyCause: me(o, r),
      };
    }
    function fe(e) {
      return ge.apply(this, arguments);
    }
    function ge() {
      return (
        (ge = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.id,
            a = e.clusterDomain;
          if (!(a != null && G.has(a))) {
            (a != null && G.set(a, t),
              o("WALogger").LOG(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
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
            var i = q.get(t);
            (i == null && ((i = re(t, e)), q.set(t, i)),
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
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [WebTransportConnectionManager] Connection timeout for ",
                        "",
                      ])),
                    t,
                  ),
                  z ||
                    o(
                      "WAWebCoreActionsODS",
                    ).logCallWebtransportConnectFailByCategory(
                      "connection_timeout",
                    ),
                  ae(i, t));
              }, o("WAWebVoipRelayConnectionUtils").CONNECTION_TIMEOUT_MS)));
            var l = null;
            try {
              var s = ie(e);
              if (s == null) {
                (z ||
                  o(
                    "WAWebCoreActionsODS",
                  ).logCallWebtransportConnectFailByCategory("invalid_config"),
                  ae(i, t));
                return;
              }
              var u = W();
              if (u == null) {
                (o("WALogger")
                  .ERROR(
                    I ||
                      (I = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [WebTransportConnectionManager] WebTransport not supported",
                      ])),
                  )
                  .sendLogs("webtransport-not-supported"),
                  z ||
                    o(
                      "WAWebCoreActionsODS",
                    ).logCallWebtransportConnectFailByCategory(
                      "invalid_config",
                    ),
                  ae(i, t));
                return;
              }
              l = new u(s);
              var c = V(),
                d = new (B || (B = n("Promise")))(function (e, t) {
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
              yield B.race([l.ready, d]);
              var m = q.get(t);
              if (
                m == null ||
                m !== i ||
                m.state !==
                  o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting
              ) {
                o("WALogger").WARN(
                  T ||
                    (T = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WebTransportConnectionManager] Connection ",
                      " was cleaned up during establishment, closing transport",
                    ])),
                  t,
                );
                try {
                  l.close();
                } catch (e) {
                  o("WALogger").WARN(
                    D ||
                      (D = babelHelpers.taggedTemplateLiteralLoose([
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
              (oe(i),
                (i.transport = l),
                (i.state = o(
                  "WAWebVoipRelayConnectionUtils",
                ).ConnectionState.Open),
                (i.stats.connectionReadyTime = Date.now()),
                o("WALogger").LOG(
                  x ||
                    (x = babelHelpers.taggedTemplateLiteralLoose([
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
                le(i, t),
                yield he(t),
                l.closed
                  .then(function () {
                    if (
                      (o("WALogger").LOG(
                        $ ||
                          ($ = babelHelpers.taggedTemplateLiteralLoose([
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
                      e != null && G.get(e) === t && G.delete(e);
                    }
                  })
                  .catch(function (e) {
                    if (
                      (o("WALogger").WARN(
                        P ||
                          (P = babelHelpers.taggedTemplateLiteralLoose([
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
                      n != null && G.get(n) === t && G.delete(n);
                    }
                    te();
                  }));
            } catch (e) {
              var _ = _e(e, i.connectionStartTime, l);
              z ||
                o(
                  "WAWebCoreActionsODS",
                ).logCallWebtransportConnectFailByCategory(_.likelyCause);
              var f = o("WALogger").ERROR(
                N ||
                  (N = babelHelpers.taggedTemplateLiteralLoose([
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
                (pe() && f.sendLogs("webtransport-connect-fail"),
                ae(i, t),
                l != null)
              )
                try {
                  l.close();
                } catch (e) {
                  o("WALogger").WARN(
                    M ||
                      (M = babelHelpers.taggedTemplateLiteralLoose([
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
        ge.apply(this, arguments)
      );
    }
    function he(e) {
      return ye.apply(this, arguments);
    }
    function ye() {
      return (
        (ye = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = q.get(e);
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
                    w ||
                      (w = babelHelpers.taggedTemplateLiteralLoose([
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
        ye.apply(this, arguments)
      );
    }
    function Ce(e) {
      var t = q.get(e);
      if (t != null) {
        if (
          (o("WALogger").LOG(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Cleaning up connection ",
                "",
              ])),
            e,
          ),
          oe(t),
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
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
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
        (n != null && G.get(n) === e && G.delete(n), q.delete(e));
      }
    }
    function be(e, t, n) {
      return ve.apply(this, arguments);
    }
    function ve() {
      return (
        (ve = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            if (!z) {
              var r = o(
                  "WAWebVoipRelayConnectionUtils",
                ).getConnectionIdentifier(t, n),
                a = q.get(r),
                i = H.get(r);
              if (a == null) {
                if (i == null) {
                  var l = Array.from(H.keys()).join(",");
                  o("WALogger").LOG(
                    A ||
                      (A = babelHelpers.taggedTemplateLiteralLoose([
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
                  u = s != null ? G.get(s) : void 0,
                  c = u != null ? q.get(u) : void 0;
                c != null ? (a = c) : ((a = re(r, i)), q.set(r, a));
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
                    F ||
                      (F = babelHelpers.taggedTemplateLiteralLoose([
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
              if (!Se(e, a)) {
                var d = o("WAWebVoipRelayConnectionUtils").bufferPacket(
                  a.packetBuffer,
                  o("WAWebVoipRelayConnectionUtils").copyArrayBuffer(e),
                  a.stats,
                );
                (d ||
                  o("WALogger").WARN(
                    O ||
                      (O = babelHelpers.taggedTemplateLiteralLoose([
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
                    fe(i));
              }
            }
          },
        )),
        ve.apply(this, arguments)
      );
    }
    function Se(e, t) {
      return t.state ===
        o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed ||
        o("WAWebVoipRelayConnectionUtils").inspectPacketType(e) ===
          o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN
        ? (t.stats.droppedPackets++, !0)
        : !1;
    }
    function Re(e) {
      (o("WALogger").LOG(
        S ||
          (S = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Received relay list update",
          ])),
      ),
        (Z = e));
      var t = o("WAWebVoipRelayConnectionUtils").extractRelayConnectionMap(e);
      (Ee(t) && o("WAWebCoreActionsODS").logCallWebtransportRelaysIpv6Only(),
        (H = Le(t)));
    }
    function Le(e) {
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
    function Ee(e) {
      if (e.size === 0) return !1;
      for (var t of e.values()) if (!t.isIPv6) return !1;
      return !0;
    }
    function ke() {
      z = !0;
    }
    function Ie() {
      (o("WALogger").LOG(
        R ||
          (R = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Closing all connections",
          ])),
      ),
        U != null && (U.abort(), (U = null)));
      for (var e of q.keys()) {
        var t = q.get(e);
        if (
          t != null &&
          t.state ===
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting
        ) {
          (oe(t), q.delete(e));
          continue;
        }
        Ce(e);
      }
      (H.clear(),
        G.clear(),
        (Q = []),
        z && ((Y = !1), (J = !1), (Z = null)),
        o("WAWebVoipTsLogger").cleanup(),
        (z = !1));
    }
    ((l.registerFallbackHandler = ee),
      (l.registerPacketHandler = ne),
      (l.sendData = be),
      (l.handleRelayListUpdate = Re),
      (l.prepareForEndCall = ke),
      (l.closeAllConnections = Ie));
  },
  98,
);
