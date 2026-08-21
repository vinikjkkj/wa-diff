__d(
  "WAWebVoipWebTransportConnectionManager",
  [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebCoreActionsODS",
    "WAWebNoop",
    "WAWebVoipCallStateUtils",
    "WAWebVoipGatingUtils",
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
      B,
      W,
      q,
      U;
    function V() {
      var e;
      return (e = self.WebTransport) != null ? e : null;
    }
    var H = new Map(),
      G = null;
    function z() {
      return (G == null && (G = new AbortController()), G.signal);
    }
    var j = new Map(),
      K = new Map(),
      Q = !1,
      X = {
        aborted: o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Aborted,
        handshake_timeout: o("WAWebVoipWebTransportCallSummary").WtRelayOutcome
          .Timeout,
        connection_timeout: o("WAWebVoipWebTransportCallSummary").WtRelayOutcome
          .Timeout,
      },
      Y = null,
      J = 100,
      Z = [],
      ee = null,
      te = !1,
      ne = !1,
      re = null;
    function oe(t) {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Fallback handler registered",
          ])),
      ),
        (ee = t));
    }
    function ae() {
      (pe(),
        (te = !1),
        (ne = !1),
        o("WAWebVoipGatingUtils").resetWebTransportFallbackState());
    }
    var ie = null,
      le = !1,
      se = null,
      ue = !1;
    function ce() {
      var e = 0;
      try {
        e = o("WAWebABProps").getABPropConfigValue(
          "web_voip_webtransport_timeout_before_sctp_fallback_ms",
        );
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransportConnectionManager] WebTransport SCTP-fallback timeout ABProp unavailable, arming no timer: ",
                  "",
                ])),
              String(e),
            )
            .sendLogs("webtransport-sctp-fallback-timeout-abprop-unavailable"),
          null
        );
      }
      return !Number.isFinite(e) || e <= 0
        ? null
        : Math.min(
            Math.max(
              e,
              o("WAWebVoipRelayConnectionUtils")
                .WEBTRANSPORT_SCTP_FALLBACK_TIMEOUT_MIN_MS,
            ),
            o("WAWebVoipRelayConnectionUtils")
              .WEBTRANSPORT_SCTP_FALLBACK_TIMEOUT_MAX_MS,
          );
    }
    function de() {
      if (!(le || ie != null)) {
        ue || ((ue = !0), (se = ce()));
        var e = se;
        e != null &&
          (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] WebTransport SCTP-fallback timeout armed at ",
                "ms",
              ])),
            e,
          ),
          (ie = window.setTimeout(function () {
            return _e(e);
          }, e)));
      }
    }
    function me() {
      ie != null && (window.clearTimeout(ie), (ie = null));
    }
    function pe() {
      (me(), (le = !1), (ue = !1), (se = null));
    }
    function _e(e) {
      ie = null;
      var t = [];
      for (var n of H) {
        var r = n[0],
          a = n[1];
        a.state ===
          o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting &&
          t.push(r);
      }
      if (
        (o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] WebTransport SCTP-fallback timeout expired: no inbound datagram in ",
              "ms",
            ])),
          e,
        ),
        !!ge())
      )
        for (var i of t)
          o("WAWebVoipWebTransportCallSummary").recordWtRelayAttemptComplete(
            i,
            o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Timeout,
            "handshake_timeout",
          );
    }
    function fe() {
      for (var e of H.values())
        if (e.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open)
          return !0;
      return !1;
    }
    function ge() {
      if (Q)
        return (
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Skipping fallback: tearing down",
              ])),
          ),
          !1
        );
      if (te)
        return (
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Skipping fallback: already fell back this call",
              ])),
          ),
          !1
        );
      var e = o("WAWebVoipLocalCallStateStore").getLocalCallState();
      if (
        e === o("WAWebVoipWaCallEnums").CallState.CallStateEnding ||
        e === o("WAWebVoipWaCallEnums").CallState.CallActiveElseWhere
      )
        return (
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Skipping fallback: call ended or resolved elsewhere (state=",
                ")",
              ])),
            String(e),
          ),
          !1
        );
      if (fe())
        return (
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Skipping fallback: another WT connection still open",
              ])),
          ),
          !1
        );
      var t = ee;
      if (t == null)
        return (
          ne ||
            ((ne = !0),
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransportConnectionManager] Skipping fallback: no handler registered (fallback abprop off)",
                ])),
            ),
            o(
              "WAWebCoreActionsODS",
            ).logCallWebtransportFallbackToSctpSkippedDisabled()),
          !1
        );
      ((te = !0),
        o("WAWebCoreActionsODS").logCallWebtransportFallbackToSctpTriggered(),
        o("WALogger").LOG(
          g ||
            (g = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] Triggering SCTP fallback",
            ])),
        ));
      try {
        t(re);
      } catch (e) {
        o("WALogger")
          .ERROR(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Fallback handler threw: ",
                "",
              ])),
            e,
          )
          .sendLogs("webtransport-fallback-handler-fail");
      }
      return !0;
    }
    function he(e) {
      (o("WALogger").LOG(
        y ||
          (y = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Packet handler registered, draining ",
            " pending packets",
          ])),
        Z.length,
      ),
        (Y = e));
      for (var t of Z)
        try {
          e(t.packet, t.ip, t.port);
        } catch (e) {
          o("WALogger").WARN(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Error draining pending packet: ",
                "",
              ])),
            e,
          );
        }
      Z = [];
    }
    function ye(e, t) {
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
        relayConnectionInfo: t,
      };
    }
    function Ce(e) {
      var t,
        n = j.get(e);
      return n != null
        ? n
        : (t = H.get(e)) == null
          ? void 0
          : t.relayConnectionInfo;
    }
    function be(e) {
      e.connectionTimeout != null &&
        (window.clearTimeout(e.connectionTimeout),
        (e.connectionTimeout = null));
    }
    function ve(e, t) {
      if (
        (be(e),
        (e.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed),
        !Q)
      ) {
        o("WAWebCoreActionsODS").logCallWebtransportConnectFailed();
        var n = e.clusterDomain;
        n != null &&
          o("WAWebVoipTsLogger").logWebtransportConnectionFailed(
            "https://" + n + "/webtransport",
          );
      }
      var r = e.clusterDomain;
      (r != null && K.get(r) === t && K.delete(r), H.delete(t), ge());
    }
    function Se(e) {
      var t = e.authToken,
        n = e.clusterDomain,
        r = e.token;
      if (n == null || !n.endsWith(".whatsapp.com"))
        return (
          o("WALogger")
            .ERROR(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
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
    function Re(e, t) {
      return Le.apply(this, arguments);
    }
    function Le() {
      return (
        (Le = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.transport;
          if (n != null)
            try {
              var r = n.datagrams.readable.getReader();
              for (e.datagramReader = r; ; ) {
                var a = yield r.read(),
                  i = a.done,
                  l = a.value;
                if (i) break;
                l != null && Ee(t, l);
              }
            } catch (e) {
              H.has(t) &&
                o("WALogger").WARN(
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WebTransportConnectionManager] Datagram reader error for ",
                      ": ",
                      "",
                    ])),
                  t,
                  e,
                );
            }
        })),
        Le.apply(this, arguments)
      );
    }
    function Ee(e, t) {
      var n = H.get(e);
      if (n != null) {
        (le || ((le = !0), me()),
          n.stats.receivedPackets++,
          (n.stats.receivedBytes += t.byteLength),
          n.hasReceivedFirstPacket ||
            ((n.hasReceivedFirstPacket = !0),
            (n.stats.firstResponseRecvTime = Date.now())));
        var r = Ce(e);
        if (r == null) {
          o("WALogger").WARN(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] No relay info found for ",
                "",
              ])),
            e,
          );
          return;
        }
        var a = t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength),
          i = Y;
        if (i == null) {
          (Z.length >= J && Z.shift(),
            Z.push({ packet: a, ip: r.ip, port: r.port }));
          return;
        }
        try {
          i(a, r.ip, r.port);
        } catch (t) {
          o("WALogger")
            .ERROR(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
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
    var ke = "WebTransport connect aborted";
    function Ie(e) {
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
    function Te(e, t) {
      var n = e.errorMessage,
        r = e.errorName,
        o = e.wtHasStreamErrorCode,
        a = e.wtSource;
      return r !== "WebTransportError" && n === ke
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
    function De() {
      var e = o("WAWebVoipLocalCallStateStore").getLocalCallState();
      return (
        !o("WAWebVoipCallStateUtils").isCallTerminal(e) &&
        !o("WAWebVoipCallStateUtils").isCallIncoming(e)
      );
    }
    function xe(e, t, n) {
      var r = t != null && t > 0 ? Date.now() - t : -1,
        o = Ie(e),
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
        likelyCause: Te(o, r),
      };
    }
    function $e(e) {
      return Pe.apply(this, arguments);
    }
    function Pe() {
      return (
        (Pe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.id,
            a = e.clusterDomain;
          if (!(a != null && K.has(a))) {
            (a != null && K.set(a, t),
              de(),
              o("WALogger").LOG(
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
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
            var i = H.get(t);
            (i == null && ((i = ye(t, e)), H.set(t, i)),
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
                    D ||
                      (D = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [WebTransportConnectionManager] Connection timeout for ",
                        "",
                      ])),
                    t,
                  ),
                  Q ||
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
                  ve(i, t));
              }, o("WAWebVoipRelayConnectionUtils").CONNECTION_TIMEOUT_MS)));
            var l = null;
            try {
              var s = Se(e);
              if (s == null) {
                (Q ||
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
                  ve(i, t));
                return;
              }
              var u = V();
              if (u == null) {
                (o("WALogger")
                  .ERROR(
                    x ||
                      (x = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [WebTransportConnectionManager] WebTransport not supported",
                      ])),
                  )
                  .sendLogs("webtransport-not-supported"),
                  Q ||
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
                  ve(i, t));
                return;
              }
              ((l = new u(s)),
                l.ready.catch(r("WAWebNoop")),
                l.closed.catch(r("WAWebNoop")));
              var c = z(),
                d = new (U || (U = n("Promise")))(function (e, t) {
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
              yield U.race([l.ready, d]);
              var m = H.get(t);
              if (
                m == null ||
                m !== i ||
                m.state !==
                  o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting
              ) {
                (o("WALogger").WARN(
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
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
                    P ||
                      (P = babelHelpers.taggedTemplateLiteralLoose([
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
              (be(i),
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
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
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
                Re(i, t),
                yield Ne(t),
                l.closed
                  .then(function () {
                    if (
                      (o("WALogger").LOG(
                        M ||
                          (M = babelHelpers.taggedTemplateLiteralLoose([
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
                      e != null && K.get(e) === t && K.delete(e);
                    }
                  })
                  .catch(function (e) {
                    if (
                      (o("WALogger").WARN(
                        w ||
                          (w = babelHelpers.taggedTemplateLiteralLoose([
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
                      n != null && K.get(n) === t && K.delete(n);
                    }
                    ge();
                  }));
            } catch (e) {
              var _,
                f = xe(e, i.connectionStartTime, l);
              (o(
                "WAWebVoipWebTransportCallSummary",
              ).recordWtRelayAttemptComplete(
                t,
                (_ = X[f.likelyCause]) != null
                  ? _
                  : o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Failed,
                f.likelyCause,
              ),
                Q ||
                  o(
                    "WAWebCoreActionsODS",
                  ).logCallWebtransportConnectFailByCategory(f.likelyCause));
              var g = o("WALogger").ERROR(
                A ||
                  (A = babelHelpers.taggedTemplateLiteralLoose([
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
                (De() &&
                  !fe() &&
                  f.likelyCause !== "aborted" &&
                  g.sendLogs("webtransport-connect-fail"),
                ve(i, t),
                l != null)
              )
                try {
                  l.close();
                } catch (e) {
                  o("WALogger").WARN(
                    F ||
                      (F = babelHelpers.taggedTemplateLiteralLoose([
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
        Pe.apply(this, arguments)
      );
    }
    function Ne(e) {
      return Me.apply(this, arguments);
    }
    function Me() {
      return (
        (Me = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = H.get(e);
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
                    O ||
                      (O = babelHelpers.taggedTemplateLiteralLoose([
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
        Me.apply(this, arguments)
      );
    }
    function we(e) {
      var t = H.get(e);
      if (t != null) {
        if (
          (o("WALogger").LOG(
            R ||
              (R = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Cleaning up connection ",
                "",
              ])),
            e,
          ),
          be(t),
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
            L ||
              (L = babelHelpers.taggedTemplateLiteralLoose([
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
        (n != null && K.get(n) === e && K.delete(n), H.delete(e));
      }
    }
    function Ae(e, t, n) {
      return Fe.apply(this, arguments);
    }
    function Fe() {
      return (
        (Fe = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            if (!Q) {
              var r = o(
                  "WAWebVoipRelayConnectionUtils",
                ).getConnectionIdentifier(t, n),
                a = H.get(r),
                i = Ce(r);
              if (a == null) {
                if (i == null) {
                  var l = Array.from(j.keys()).join(",");
                  o("WALogger").LOG(
                    B ||
                      (B = babelHelpers.taggedTemplateLiteralLoose([
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
                  u = s != null ? K.get(s) : void 0,
                  c = u != null ? H.get(u) : void 0;
                c != null ? (a = c) : ((a = ye(r, i)), H.set(r, a));
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
                    W ||
                      (W = babelHelpers.taggedTemplateLiteralLoose([
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
              if (!Oe(e, a)) {
                var d = o("WAWebVoipRelayConnectionUtils").bufferPacket(
                  a.packetBuffer,
                  o("WAWebVoipRelayConnectionUtils").copyArrayBuffer(e),
                  a.stats,
                );
                (d ||
                  o("WALogger").WARN(
                    q ||
                      (q = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [WebTransportConnectionManager] Dropping packet for ",
                        ": size ",
                        " exceeds max buffer size",
                      ])),
                    r,
                    e.byteLength,
                  ),
                  (a.state ===
                    o("WAWebVoipRelayConnectionUtils").ConnectionState.None ||
                    a.state ===
                      o("WAWebVoipRelayConnectionUtils").ConnectionState
                        .Closed) &&
                    i != null &&
                    $e(i));
              }
            }
          },
        )),
        Fe.apply(this, arguments)
      );
    }
    function Oe(e, t) {
      return t.state ===
        o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed ||
        o("WAWebVoipRelayConnectionUtils").inspectPacketType(e) ===
          o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN
        ? (t.stats.droppedPackets++, !0)
        : !1;
    }
    function Be(e) {
      (o("WALogger").LOG(
        E ||
          (E = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Received relay list update",
          ])),
      ),
        (re = e));
      var t = o("WAWebVoipRelayConnectionUtils").extractRelayConnectionMap(e);
      qe(t) && o("WAWebCoreActionsODS").logCallWebtransportRelaysIpv6Only();
      var n = We(t),
        r = 0;
      for (var a of H) {
        var i = a[0],
          l = a[1],
          s = n.get(i);
        if (s != null) {
          l.relayConnectionInfo = s;
          continue;
        }
        l.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
          l.state !==
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed &&
          r++;
      }
      j = n;
    }
    function We(e) {
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
    function qe(e) {
      if (e.size === 0) return !1;
      for (var t of e.values()) if (!t.isIPv6) return !1;
      return !0;
    }
    function Ue() {
      Q = !0;
    }
    function Ve() {
      (o("WALogger").LOG(
        k ||
          (k = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Closing all connections",
          ])),
      ),
        G != null && (G.abort(), (G = null)));
      for (var e of H.keys()) {
        var t = H.get(e);
        if (
          t != null &&
          t.state ===
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting
        ) {
          (be(t), H.delete(e));
          continue;
        }
        we(e);
      }
      (j.clear(),
        K.clear(),
        (Z = []),
        me(),
        Q && (pe(), (te = !1), (ne = !1), (re = null)),
        o("WAWebVoipWebTransportCallSummary").markWtCallSummaryClosed(),
        o("WAWebVoipTsLogger").cleanup(),
        (Q = !1));
    }
    ((l.registerFallbackHandler = oe),
      (l.resetFallbackStateForNewCall = ae),
      (l.registerPacketHandler = he),
      (l.sendData = Ae),
      (l.handleRelayListUpdate = Be),
      (l.prepareForEndCall = Ue),
      (l.closeAllConnections = Ve));
  },
  98,
);
