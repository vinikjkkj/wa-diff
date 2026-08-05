__d(
  "WAWebVoipWebTransportConnectionManager",
  [
    "Promise",
    "WALogger",
    "WAWebCoreActionsODS",
    "WAWebNoop",
    "WAWebVoipCallStateUtils",
    "WAWebVoipLocalCallStateStore",
    "WAWebVoipRelayConnectionUtils",
    "WAWebVoipTsLogger",
    "WAWebVoipWaCallEnums",
    "WAWebVoipWebTransportCallSummary",
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
      j = {
        aborted: o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Aborted,
        handshake_timeout: o("WAWebVoipWebTransportCallSummary").WtRelayOutcome
          .Timeout,
        connection_timeout: o("WAWebVoipWebTransportCallSummary").WtRelayOutcome
          .Timeout,
      },
      K = null,
      Q = 100,
      X = [],
      Y = null,
      J = !1,
      Z = !1,
      ee = null;
    function te(t) {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Fallback handler registered",
          ])),
      ),
        (Y = t));
    }
    function ne() {
      for (var e of q.values())
        if (e.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open)
          return !0;
      return !1;
    }
    function re() {
      if (z) {
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] Skipping fallback: tearing down",
            ])),
        );
        return;
      }
      if (J) {
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] Skipping fallback: already fell back this call",
            ])),
        );
        return;
      }
      var e = o("WAWebVoipLocalCallStateStore").getLocalCallState();
      if (
        e === o("WAWebVoipWaCallEnums").CallState.CallStateEnding ||
        e === o("WAWebVoipWaCallEnums").CallState.CallActiveElseWhere
      ) {
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] Skipping fallback: call ended or resolved elsewhere (state=",
              ")",
            ])),
          String(e),
        );
        return;
      }
      if (ne()) {
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] Skipping fallback: another WT connection still open",
            ])),
        );
        return;
      }
      var t = Y;
      if (t == null) {
        Z ||
          ((Z = !0),
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
      ((J = !0),
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
        t(ee);
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
    function oe(e) {
      (o("WALogger").LOG(
        f ||
          (f = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Packet handler registered, draining ",
            " pending packets",
          ])),
        X.length,
      ),
        (K = e));
      for (var t of X)
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
      X = [];
    }
    function ae(e, t) {
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
    function ie(e) {
      e.connectionTimeout != null &&
        (window.clearTimeout(e.connectionTimeout),
        (e.connectionTimeout = null));
    }
    function le(e, t) {
      if (
        (ie(e),
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
      (r != null && G.get(r) === t && G.delete(r), q.delete(t), re());
    }
    function se(e) {
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
    function ue(e, t) {
      return ce.apply(this, arguments);
    }
    function ce() {
      return (
        (ce = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.transport;
          if (n != null)
            try {
              var r = n.datagrams.readable.getReader();
              for (e.datagramReader = r; ; ) {
                var a = yield r.read(),
                  i = a.done,
                  l = a.value;
                if (i) break;
                l != null && de(t, l);
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
        ce.apply(this, arguments)
      );
    }
    function de(e, t) {
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
          i = K;
        if (i == null) {
          (X.length >= Q && X.shift(),
            X.push({ packet: a, ip: r.ip, port: r.port }));
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
    var me = "WebTransport connect aborted";
    function pe(e) {
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
    function _e(e, t) {
      var n = e.errorMessage,
        r = e.errorName,
        o = e.wtHasStreamErrorCode,
        a = e.wtSource;
      return r !== "WebTransportError" && n === me
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
    function fe() {
      var e = o("WAWebVoipLocalCallStateStore").getLocalCallState();
      return (
        !o("WAWebVoipCallStateUtils").isCallTerminal(e) &&
        !o("WAWebVoipCallStateUtils").isCallIncoming(e)
      );
    }
    function ge(e, t, n) {
      var r = t != null && t > 0 ? Date.now() - t : -1,
        o = pe(e),
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
        likelyCause: _e(o, r),
      };
    }
    function he(e) {
      return ye.apply(this, arguments);
    }
    function ye() {
      return (
        (ye = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            (i == null && ((i = ae(t, e)), q.set(t, i)),
              (i.state = o(
                "WAWebVoipRelayConnectionUtils",
              ).ConnectionState.Connecting),
              (i.connectionStartTime = Date.now()),
              o("WAWebVoipWebTransportCallSummary").recordWtRelayAttemptStart(
                t,
              ),
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
                  o(
                    "WAWebVoipWebTransportCallSummary",
                  ).recordWtRelayAttemptComplete(
                    t,
                    o("WAWebVoipWebTransportCallSummary").WtRelayOutcome
                      .Timeout,
                    "connection_timeout",
                  ),
                  le(i, t));
              }, o("WAWebVoipRelayConnectionUtils").CONNECTION_TIMEOUT_MS)));
            var l = null;
            try {
              var s = se(e);
              if (s == null) {
                (z ||
                  o(
                    "WAWebCoreActionsODS",
                  ).logCallWebtransportConnectFailByCategory("invalid_config"),
                  o(
                    "WAWebVoipWebTransportCallSummary",
                  ).recordWtRelayAttemptComplete(
                    t,
                    o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Failed,
                    "invalid_config",
                  ),
                  le(i, t));
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
                  o(
                    "WAWebVoipWebTransportCallSummary",
                  ).recordWtRelayAttemptComplete(
                    t,
                    o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Failed,
                    "invalid_config",
                  ),
                  le(i, t));
                return;
              }
              ((l = new u(s)),
                l.ready.catch(r("WAWebNoop")),
                l.closed.catch(r("WAWebNoop")));
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
                (o("WALogger").WARN(
                  T ||
                    (T = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WebTransportConnectionManager] Connection ",
                      " was cleaned up during establishment, closing transport",
                    ])),
                  t,
                ),
                  o(
                    "WAWebVoipWebTransportCallSummary",
                  ).recordWtRelayAttemptComplete(
                    t,
                    o("WAWebVoipWebTransportCallSummary").WtRelayOutcome
                      .Aborted,
                    "cleaned_up",
                  ));
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
              (ie(i),
                (i.transport = l),
                (i.state = o(
                  "WAWebVoipRelayConnectionUtils",
                ).ConnectionState.Open),
                (i.stats.connectionReadyTime = Date.now()),
                o(
                  "WAWebVoipWebTransportCallSummary",
                ).recordWtRelayAttemptComplete(
                  t,
                  o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Opened,
                  null,
                ),
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
                ue(i, t),
                yield Ce(t),
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
                    re();
                  }));
            } catch (e) {
              var _,
                f = ge(e, i.connectionStartTime, l);
              (o(
                "WAWebVoipWebTransportCallSummary",
              ).recordWtRelayAttemptComplete(
                t,
                (_ = j[f.likelyCause]) != null
                  ? _
                  : o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Failed,
                f.likelyCause,
              ),
                z ||
                  o(
                    "WAWebCoreActionsODS",
                  ).logCallWebtransportConnectFailByCategory(f.likelyCause));
              var g = o("WALogger").ERROR(
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
                f.elapsedMs,
                f.likelyCause,
                f.errorName,
                f.errorMessage,
                f.wtSource,
                f.wtStreamErrorCode,
                f.transportState,
                f.errorStack,
              );
              if (
                (fe() &&
                  !ne() &&
                  f.likelyCause !== "aborted" &&
                  g.sendLogs("webtransport-connect-fail"),
                le(i, t),
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
        ye.apply(this, arguments)
      );
    }
    function Ce(e) {
      return be.apply(this, arguments);
    }
    function be() {
      return (
        (be = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        be.apply(this, arguments)
      );
    }
    function ve(e) {
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
          ie(t),
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
    function Se(e, t, n) {
      return Re.apply(this, arguments);
    }
    function Re() {
      return (
        (Re = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                c != null ? (a = c) : ((a = ae(r, i)), q.set(r, a));
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
              if (!Le(e, a)) {
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
                    he(i));
              }
            }
          },
        )),
        Re.apply(this, arguments)
      );
    }
    function Le(e, t) {
      return t.state ===
        o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed ||
        o("WAWebVoipRelayConnectionUtils").inspectPacketType(e) ===
          o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN
        ? (t.stats.droppedPackets++, !0)
        : !1;
    }
    function Ee(e) {
      (o("WALogger").LOG(
        S ||
          (S = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Received relay list update",
          ])),
      ),
        (ee = e));
      var t = o("WAWebVoipRelayConnectionUtils").extractRelayConnectionMap(e);
      (Ie(t) && o("WAWebCoreActionsODS").logCallWebtransportRelaysIpv6Only(),
        (H = ke(t)));
    }
    function ke(e) {
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
    function Ie(e) {
      if (e.size === 0) return !1;
      for (var t of e.values()) if (!t.isIPv6) return !1;
      return !0;
    }
    function Te() {
      z = !0;
    }
    function De() {
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
          (ie(t), q.delete(e));
          continue;
        }
        ve(e);
      }
      (H.clear(),
        G.clear(),
        (X = []),
        z && ((J = !1), (Z = !1), (ee = null)),
        o("WAWebVoipWebTransportCallSummary").markWtCallSummaryClosed(),
        o("WAWebVoipTsLogger").cleanup(),
        (z = !1));
    }
    ((l.registerFallbackHandler = te),
      (l.registerPacketHandler = oe),
      (l.sendData = Se),
      (l.handleRelayListUpdate = Ee),
      (l.prepareForEndCall = Te),
      (l.closeAllConnections = De));
  },
  98,
);
