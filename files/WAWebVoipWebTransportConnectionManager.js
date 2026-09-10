__d(
  "WAWebVoipWebTransportConnectionManager",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebCoreActionsODS",
    "WAWebVoipCallStateUtils",
    "WAWebVoipGatingUtils",
    "WAWebVoipLocalCallStateStore",
    "WAWebVoipRelayConnectionUtils",
    "WAWebVoipTsLogger",
    "WAWebVoipWaCallEnums",
    "WAWebVoipWebTransportCallSummary",
    "WAWebVoipWebTransportDataChannelThreadManager",
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
      A = 8,
      F = 3,
      O = 4e3,
      B = 8,
      W = 32,
      q = 32 * 1024,
      U = 1e3,
      V = new Map(),
      H = o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats(),
      G = 0,
      z = 0,
      j = null,
      K = new Map(),
      Q = new Map(),
      X = new Map(),
      Y = new Set(),
      J = !1,
      Z = !1,
      ee = !1,
      te = {
        aborted: o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Aborted,
        handshake_timeout: o("WAWebVoipWebTransportCallSummary").WtRelayOutcome
          .Timeout,
        connection_timeout: o("WAWebVoipWebTransportCallSummary").WtRelayOutcome
          .Timeout,
      },
      ne = null,
      re = !1,
      oe = !1,
      ae = null;
    function ie(t) {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Fallback handler registered",
          ])),
      ),
        (ne = t));
    }
    function le() {
      (fe(),
        ze(),
        (Z = !0),
        Y.clear(),
        (ee = !1),
        (re = !1),
        (oe = !1),
        o("WAWebVoipGatingUtils").resetWebTransportFallbackState());
    }
    var se = null,
      ue = !1,
      ce = null,
      de = !1;
    function me() {
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
        ? o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled()
          ? O
          : null
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
    function pe() {
      if (!(ue || se != null)) {
        de || ((de = !0), (ce = me()));
        var e = ce;
        e != null &&
          (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] WebTransport SCTP-fallback timeout armed at ",
                "ms",
              ])),
            e,
          ),
          (se = window.setTimeout(function () {
            return ge(e);
          }, e)));
      }
    }
    function _e() {
      se != null && (window.clearTimeout(se), (se = null));
    }
    function fe() {
      (_e(), (ue = !1), (de = !1), (ce = null));
    }
    function ge(e) {
      se = null;
      var t = [];
      for (var n of K) {
        var r = n[0],
          a = n[1];
        a.state ===
          o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting &&
          t.push(r);
      }
      (o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] WebTransport SCTP-fallback timeout expired: no inbound datagram in ",
            "ms",
          ])),
        e,
      ),
        be(
          o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled(),
          function () {
            for (var e of t)
              o(
                "WAWebVoipWebTransportCallSummary",
              ).recordWtRelayAttemptComplete(
                e,
                o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Timeout,
                "handshake_timeout",
              );
          },
        ));
    }
    function he() {
      for (var e of K.values())
        if (e.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open)
          return !0;
      return !1;
    }
    function ye() {
      for (var e of K.values())
        if (
          e.state ===
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting &&
          !e.cleanupRequested
        )
          return !0;
      return !1;
    }
    function Ce(e) {
      return e
        ? !1
        : o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() && !ee
          ? (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransportConnectionManager] Skipping fallback: speculative preconnect only",
                ])),
            ),
            !0)
          : he()
            ? (o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportConnectionManager] Skipping fallback: another WT connection still open",
                  ])),
              ),
              !0)
            : o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() &&
                se != null &&
                ye()
              ? (o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WebTransportConnectionManager] Skipping fallback: another WT connection still connecting",
                    ])),
                ),
                !0)
              : !1;
    }
    function be(e, t) {
      if ((e === void 0 && (e = !1), J))
        return (
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Skipping fallback: tearing down",
              ])),
          ),
          !1
        );
      if (re)
        return (
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Skipping fallback: already fell back this call",
              ])),
          ),
          !1
        );
      var n = o("WAWebVoipLocalCallStateStore").getLocalCallState();
      if (
        n === o("WAWebVoipWaCallEnums").CallState.CallStateEnding ||
        n === o("WAWebVoipWaCallEnums").CallState.CallActiveElseWhere
      )
        return (
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Skipping fallback: call ended or resolved elsewhere (state=",
                ")",
              ])),
            String(n),
          ),
          !1
        );
      if (Ce(e)) return !1;
      var r = ne;
      if (r == null)
        return (
          oe ||
            ((oe = !0),
            o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransportConnectionManager] Skipping fallback: no handler registered (fallback abprop off)",
                ])),
            ),
            o(
              "WAWebCoreActionsODS",
            ).logCallWebtransportFallbackToSctpSkippedDisabled()),
          !1
        );
      ((re = !0),
        t == null || t(),
        o("WAWebCoreActionsODS").logCallWebtransportFallbackToSctpTriggered(),
        o("WALogger").LOG(
          y ||
            (y = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] Triggering SCTP fallback",
            ])),
        ));
      try {
        r(ae);
      } catch (e) {
        o("WALogger")
          .ERROR(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Fallback handler threw: ",
                "",
              ])),
            e,
          )
          .sendLogs("webtransport-fallback-handler-fail");
      }
      return !0;
    }
    function ve(e) {}
    function Se(e, t) {
      var n;
      return {
        state: o("WAWebVoipRelayConnectionUtils").ConnectionState.None,
        workerConnectionCreated: !1,
        cleanupRequested: !1,
        packetBuffer: o("WAWebVoipRelayConnectionUtils").createPacketBuffer(),
        id: e,
        connectionTimeout: null,
        stats: o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats(),
        localDroppedPackets: 0,
        connectionStartTime: 0,
        relayId: t.relayId,
        relayIp: t.ip,
        relayPort: t.port,
        clusterDomain: (n = t.clusterDomain) != null ? n : null,
        relayConnectionInfo: t,
      };
    }
    function Re(e) {
      var t,
        n = Q.get(e);
      return n != null
        ? n
        : (t = K.get(e)) == null
          ? void 0
          : t.relayConnectionInfo;
    }
    function Le(e) {
      e.connectionTimeout != null &&
        (window.clearTimeout(e.connectionTimeout),
        (e.connectionTimeout = null));
    }
    function Ee(e, t) {
      var n;
      if (
        (Le(e),
        (n = o(
          "WAWebVoipWebTransportDataChannelThreadManager",
        ).getWebTransportDataChannelThread()) == null || n.close(t),
        (e.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed),
        !J)
      ) {
        o("WAWebCoreActionsODS").logCallWebtransportConnectFailed();
        var r = e.clusterDomain;
        r != null &&
          o("WAWebVoipTsLogger").logWebtransportConnectionFailed(
            "https://" + r + "/webtransport",
          );
      }
      var a = e.clusterDomain;
      (a != null && X.get(a) === t && X.delete(a), K.delete(t), be());
    }
    function ke(e) {
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
    function Ie(e) {
      var t = K.get(e.connectionId);
      if (t != null) {
        if (e.event === "first_datagram") {
          ue || ((ue = !0), _e());
          return;
        }
        e.stats != null &&
          ((t.stats.sentPackets = e.stats.sentPackets),
          (t.stats.sentBytes = e.stats.sentBytes),
          (t.stats.receivedPackets = e.stats.receivedPackets),
          (t.stats.receivedBytes = e.stats.receivedBytes),
          (t.stats.droppedPackets = e.stats.droppedPackets));
        var n = t.clusterDomain;
        if (
          (n != null && X.get(n) === e.connectionId && X.delete(n),
          e.event === "closed")
        ) {
          ((t.state = o(
            "WAWebVoipRelayConnectionUtils",
          ).ConnectionState.Closed),
            o("WALogger").LOG(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransportConnectionManager] Worker connection closed for ",
                  "",
                ])),
              e.connectionId,
            ),
            t.cleanupRequested && Ae(e.connectionId));
          return;
        }
        if (e.event === "error") {
          var r, a;
          ((t.state = o(
            "WAWebVoipRelayConnectionUtils",
          ).ConnectionState.Failed),
            o("WALogger").WARN(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransportConnectionManager] Worker connection failed for ",
                  ": ",
                  "",
                ])),
              e.connectionId,
              (r = (a = e.error) == null ? void 0 : a.message) != null
                ? r
                : "unknown",
            ),
            be());
        }
      }
    }
    var Te = "WebTransport connect aborted";
    function De(e) {
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
    function xe(e, t) {
      var n = e.errorMessage,
        r = e.errorName,
        o = e.wtHasStreamErrorCode,
        a = e.wtSource;
      return r === "NotSupportedError"
        ? "invalid_config"
        : r !== "WebTransportError" && n === Te
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
    function $e() {
      var e = o("WAWebVoipLocalCallStateStore").getLocalCallState();
      return (
        !o("WAWebVoipCallStateUtils").isCallTerminal(e) &&
        !o("WAWebVoipCallStateUtils").isCallIncoming(e)
      );
    }
    function Pe(e, t, n) {
      var r = t != null && t > 0 ? Date.now() - t : -1,
        o = De(e),
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
        transportState: n ? "constructed" : "null",
        likelyCause: xe(o, r),
      };
    }
    function Ne(e) {
      return Me.apply(this, arguments);
    }
    function Me() {
      return (
        (Me = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.id,
            n = e.clusterDomain;
          if (!(n != null && X.has(n))) {
            (n != null && X.set(n, t),
              o("WALogger").LOG(
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
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
            var a = K.get(t);
            (a == null && ((a = Se(t, e)), K.set(t, a)),
              (a.state = o(
                "WAWebVoipRelayConnectionUtils",
              ).ConnectionState.Connecting),
              (a.connectionStartTime = Date.now()),
              o("WAWebVoipWebTransportCallSummary").recordWtRelayAttemptStart(
                t,
              ),
              (a.connectionTimeout = window.setTimeout(function () {
                a != null &&
                  a.state ===
                    o("WAWebVoipRelayConnectionUtils").ConnectionState
                      .Connecting &&
                  (o("WALogger").WARN(
                    x ||
                      (x = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [WebTransportConnectionManager] Connection timeout for ",
                        "",
                      ])),
                    t,
                  ),
                  J ||
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
                  Ee(a, t));
              }, o("WAWebVoipRelayConnectionUtils").CONNECTION_TIMEOUT_MS)));
            try {
              var i = ke(e);
              if (i == null) {
                (J ||
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
                  Ee(a, t));
                return;
              }
              var l = yield o(
                  "WAWebVoipWebTransportDataChannelThreadManager",
                ).initWebTransportDataChannelWorker(),
                s = o(
                  "WAWebVoipWebTransportDataChannelThreadManager",
                ).getWebTransportDataChannelThread();
              if (!l || s == null) {
                var u = r("err")("WebTransport worker is unavailable");
                throw ((u.name = "NotSupportedError"), u);
              }
              (s.registerStateHandler(Ie),
                (a.workerConnectionCreated = !0),
                yield s.connect(t, i, e.ip, e.port));
              var c = K.get(t);
              if (
                c == null ||
                c !== a ||
                c.state !==
                  o("WAWebVoipRelayConnectionUtils").ConnectionState
                    .Connecting ||
                c.cleanupRequested ||
                re
              ) {
                (o("WALogger").WARN(
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WebTransportConnectionManager] Connection ",
                      " was cleaned up during establishment, closing worker connection",
                    ])),
                  t,
                ),
                  re ||
                    o(
                      "WAWebVoipWebTransportCallSummary",
                    ).recordWtRelayAttemptComplete(
                      t,
                      o("WAWebVoipWebTransportCallSummary").WtRelayOutcome
                        .Aborted,
                      "cleaned_up",
                    ),
                  re && c === a && !a.cleanupRequested && Ae(t),
                  s.close(t));
                return;
              }
              (Le(a),
                (a.state = o(
                  "WAWebVoipRelayConnectionUtils",
                ).ConnectionState.Open),
                (a.stats.connectionReadyTime = Date.now()),
                o(
                  "WAWebVoipWebTransportCallSummary",
                ).recordWtRelayAttemptComplete(
                  t,
                  o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Opened,
                  null,
                ),
                o("WALogger").LOG(
                  P ||
                    (P = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WebTransportConnectionManager] Connection opened for ",
                      "",
                    ])),
                  t,
                ),
                o("WAWebCoreActionsODS").logCallWebtransportConnectSucceeded());
              var d = a.clusterDomain;
              (d != null &&
                o("WAWebVoipTsLogger").logWebtransportConnectionComplete(
                  "https://" + d + "/webtransport",
                ),
                we(t));
            } catch (e) {
              var m,
                p = Pe(e, a.connectionStartTime, a.workerConnectionCreated);
              if (K.get(t) !== a && p.likelyCause === "aborted") return;
              (o(
                "WAWebVoipWebTransportCallSummary",
              ).recordWtRelayAttemptComplete(
                t,
                (m = te[p.likelyCause]) != null
                  ? m
                  : o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Failed,
                p.likelyCause,
              ),
                J ||
                  o(
                    "WAWebCoreActionsODS",
                  ).logCallWebtransportConnectFailByCategory(p.likelyCause));
              var _ = o("WALogger").ERROR(
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
                p.elapsedMs,
                p.likelyCause,
                p.errorName,
                p.errorMessage,
                p.wtSource,
                p.wtStreamErrorCode,
                p.transportState,
                p.errorStack,
              );
              ($e() &&
                !he() &&
                p.likelyCause !== "aborted" &&
                _.sendLogs("webtransport-connect-fail"),
                Ee(a, t));
            }
          }
        })),
        Me.apply(this, arguments)
      );
    }
    function we(e) {
      var t = K.get(e);
      if (
        !(
          t == null ||
          t.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Open
        )
      )
        for (
          var n = o(
              "WAWebVoipWebTransportDataChannelThreadManager",
            ).getWebTransportDataChannelThread(),
            r = o("WAWebVoipRelayConnectionUtils").shiftPacket(t.packetBuffer);
          r != null;
        )
          ((n == null || !n.send(e, r)) && t.localDroppedPackets++,
            (r = o("WAWebVoipRelayConnectionUtils").shiftPacket(
              t.packetBuffer,
            )));
    }
    function Ae(e) {
      var t = K.get(e);
      if (t != null) {
        (Le(t),
          o("WAWebVoipRelayConnectionUtils").clearPacketBuffer(t.packetBuffer),
          o("WALogger").LOG(
            R ||
              (R = babelHelpers.taggedTemplateLiteralLoose([
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
            Fe(t),
          ));
        var n = t.clusterDomain;
        (n != null && X.get(n) === e && X.delete(n), K.delete(e));
      }
    }
    function Fe(e) {
      return e.stats.droppedPackets + e.localDroppedPackets;
    }
    function Oe(e, t) {
      var n = e.stats.droppedPackets,
        r = o("WAWebVoipRelayConnectionUtils").bufferPacket(
          e.packetBuffer,
          t,
          e.stats,
        ),
        a = e.stats.droppedPackets - n;
      return (
        a > 0 && ((e.stats.droppedPackets = n), (e.localDroppedPackets += a)),
        r
      );
    }
    function Be(e) {
      var t = K.get(e);
      if (!(t == null || t.cleanupRequested)) {
        (o("WALogger").LOG(
          L ||
            (L = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] Cleaning up connection ",
              "",
            ])),
          e,
        ),
          Le(t),
          o("WAWebVoipRelayConnectionUtils").clearPacketBuffer(t.packetBuffer));
        var n = o(
          "WAWebVoipWebTransportDataChannelThreadManager",
        ).getWebTransportDataChannelThread();
        if (
          t.workerConnectionCreated &&
          t.state !==
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed &&
          t.state !==
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
          n != null
        ) {
          ((t.cleanupRequested = !0), n.close(e));
          return;
        }
        Ae(e);
      }
    }
    function We(e, t, n) {
      return qe.apply(this, arguments);
    }
    function qe() {
      return (
        (qe = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            if (!J) {
              var r = o(
                  "WAWebVoipRelayConnectionUtils",
                ).getConnectionIdentifier(t, n),
                a = K.get(r),
                i = Re(r);
              if (a == null) {
                if (i == null) {
                  if (He(r, e)) return;
                  var l = Array.from(Q.keys()).join(",");
                  o("WALogger").LOG(
                    M ||
                      (M = babelHelpers.taggedTemplateLiteralLoose([
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
                  u = s != null ? X.get(s) : void 0,
                  c = u != null ? K.get(u) : void 0;
                c != null ? (a = c) : ((a = Se(r, i)), K.set(r, a));
              }
              if (
                (a.stats.firstSendRequestTime === 0 &&
                  (a.stats.firstSendRequestTime = Date.now()),
                a.state ===
                  o("WAWebVoipRelayConnectionUtils").ConnectionState.Open)
              ) {
                var d;
                Ue(e);
                var m =
                  (d = o(
                    "WAWebVoipWebTransportDataChannelThreadManager",
                  ).getWebTransportDataChannelThread()) == null
                    ? void 0
                    : d.send(
                        a.id,
                        o("WAWebVoipRelayConnectionUtils").copyArrayBuffer(e),
                      );
                m !== !0 && a.localDroppedPackets++;
                return;
              }
              var p =
                o("WAWebVoipRelayConnectionUtils").inspectPacketType(e) !==
                o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN;
              if (!Qe(p, a)) {
                p && Ve();
                var _ = Oe(
                  a,
                  o("WAWebVoipRelayConnectionUtils").copyArrayBuffer(e),
                );
                (_ ||
                  o("WALogger").WARN(
                    w ||
                      (w = babelHelpers.taggedTemplateLiteralLoose([
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
                    Ne(i));
              }
            }
          },
        )),
        qe.apply(this, arguments)
      );
    }
    function Ue(e) {
      !ee &&
        o("WAWebVoipRelayConnectionUtils").inspectPacketType(e) !==
          o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN &&
        Ve();
    }
    function Ve() {
      ((ee = !0), pe());
    }
    function He(e, t) {
      return Q.size > 0 ||
        !o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() ||
        o("WAWebVoipRelayConnectionUtils").inspectPacketType(t) ===
          o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN
        ? !1
        : Ge(e, t);
    }
    function Ge(e, t) {
      if (G >= W || z + t.byteLength > q) return !1;
      var n = V.get(e),
        r = n == null;
      if (n == null) {
        if (V.size >= B) return !1;
        ((n = o("WAWebVoipRelayConnectionUtils").createPacketBuffer()),
          V.set(e, n));
      }
      var a = n.packets.length,
        i = n.bufferedBytes,
        l = H.droppedPackets;
      return o("WAWebVoipRelayConnectionUtils").bufferPacket(
        n,
        o("WAWebVoipRelayConnectionUtils").copyArrayBuffer(t),
        H,
      )
        ? (H.droppedPackets > l &&
            o("WALogger").WARN(
              k ||
                (k = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransportConnectionManager] Dropped oldest early STUN packet at per-relay limit",
                ])),
            ),
          (G += n.packets.length - a),
          (z += n.bufferedBytes - i),
          j == null && (j = window.setTimeout(ze, U)),
          !0)
        : (r && V.delete(e),
          o("WALogger").WARN(
            E ||
              (E = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Dropped oversized early STUN packet",
              ])),
          ),
          !1);
    }
    function ze() {
      (j != null && (window.clearTimeout(j), (j = null)),
        V.clear(),
        (H = o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats()),
        (G = 0),
        (z = 0));
    }
    function je() {
      for (var e of V) {
        var t = e[0],
          n = e[1],
          r = Q.get(t);
        if (r != null) {
          ((G -= n.packets.length), (z -= n.bufferedBytes));
          for (
            var a = o("WAWebVoipRelayConnectionUtils").shiftPacket(n);
            a != null;
          )
            (We(a, r.ip, r.port),
              (a = o("WAWebVoipRelayConnectionUtils").shiftPacket(n)));
          V.delete(t);
        }
      }
      V.size === 0 && j != null && (window.clearTimeout(j), (j = null));
    }
    function Ke() {
      for (var e of Q.values()) {
        var t = e.clusterDomain;
        t == null || Y.has(t) || Y.size >= F || (Y.add(t), Ne(e));
      }
    }
    function Qe(e, t) {
      return t.state ===
        o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed
        ? (e && (Ve(), be()), t.localDroppedPackets++, !0)
        : e
          ? !1
          : (t.localDroppedPackets++, !0);
    }
    function Xe(e) {
      (o("WALogger").LOG(
        I ||
          (I = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Received relay list update",
          ])),
      ),
        (ae = e));
      var t = o("WAWebVoipRelayConnectionUtils").extractRelayConnectionMap(e);
      Je(t) && o("WAWebCoreActionsODS").logCallWebtransportRelaysIpv6Only();
      var n = Ye(t),
        r = 0;
      for (var a of K) {
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
      ((Q = n),
        Z &&
          !re &&
          o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() &&
          (Ke(), je()));
    }
    function Ye(e) {
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
    function Je(e) {
      if (e.size === 0) return !1;
      for (var t of e.values()) if (!t.isIPv6) return !1;
      return !0;
    }
    function Ze() {
      ((Z = !1), (J = !0));
    }
    function et() {
      var e = Array.from(K.values()),
        t = [].concat(
          e.filter(function (e) {
            return (
              e.state ===
              o("WAWebVoipRelayConnectionUtils").ConnectionState.Open
            );
          }),
          e.filter(function (e) {
            return (
              e.state !==
              o("WAWebVoipRelayConnectionUtils").ConnectionState.Open
            );
          }),
        ),
        n = t.slice(0, A).map(function (e) {
          var t = e.relayConnectionInfo.name,
            n =
              t +
              "@" +
              e.id +
              "(state=" +
              String(e.state) +
              ",open=" +
              String(
                e.state ===
                  o("WAWebVoipRelayConnectionUtils").ConnectionState.Open,
              ),
            r =
              e.state ===
                o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed ||
              e.state ===
                o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed;
          return r
            ? n +
                ",stats=final,txPackets=" +
                String(e.stats.sentPackets) +
                ",rxPackets=" +
                String(e.stats.receivedPackets) +
                ",droppedPackets=" +
                String(Fe(e)) +
                ")"
            : n + ",stats=offthread,droppedPackets=" + String(Fe(e)) + ")";
        });
      return "total=" + String(e.length) + ";" + (n.join("|") || "none");
    }
    function tt() {
      o("WALogger").LOG(
        T ||
          (T = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Closing all connections",
          ])),
      );
      for (var e of Array.from(K.keys())) Be(e);
      var t = o(
        "WAWebVoipWebTransportDataChannelThreadManager",
      ).stopWebTransportDataChannelWorker();
      (t.finally(function () {
        for (var e of K) {
          var t = e[0],
            n = e[1];
          n.cleanupRequested && Ae(t);
        }
      }),
        Q.clear(),
        Y.clear(),
        ze(),
        X.clear(),
        _e(),
        J && (fe(), (ee = !1), (re = !1), (oe = !1), (ae = null)),
        o("WAWebVoipWebTransportCallSummary").markWtCallSummaryClosed(),
        o("WAWebVoipTsLogger").cleanup(),
        (J = !1));
    }
    ((l.registerFallbackHandler = ie),
      (l.resetFallbackStateForNewCall = le),
      (l.registerPacketHandler = ve),
      (l.sendData = We),
      (l.handleRelayListUpdate = Xe),
      (l.prepareForEndCall = Ze),
      (l.getWebTransportRelayDebugSummary = et),
      (l.closeAllConnections = tt));
  },
  98,
);
