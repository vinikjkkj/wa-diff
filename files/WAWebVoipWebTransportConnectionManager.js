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
    "getErrorSafe",
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
      F = 8,
      O = 3,
      B = 4e3,
      W = 8,
      q = 32,
      U = 32 * 1024,
      V = 1e3,
      H = new Map(),
      G = o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats(),
      z = 0,
      j = 0,
      K = null,
      Q = new Map(),
      X = new Map(),
      Y = 0,
      J = new Map(),
      Z = new Set(),
      ee = !1,
      te = !1,
      ne = !1,
      re = !1,
      oe = !1,
      ae = {
        aborted: o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Aborted,
        handshake_timeout: o("WAWebVoipWebTransportCallSummary").WtRelayOutcome
          .Timeout,
        connection_timeout: o("WAWebVoipWebTransportCallSummary").WtRelayOutcome
          .Timeout,
      },
      ie = null,
      le = !1,
      se = !1,
      ue = null;
    function ce(t) {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Fallback handler registered",
          ])),
      ),
        (ie = t));
    }
    function de() {
      (Se(),
        nt(),
        me(),
        (te = !0),
        Z.clear(),
        (re = !1),
        (le = !1),
        (se = !1),
        o("WAWebVoipGatingUtils").resetWebTransportFallbackState());
    }
    function me() {
      if (Q.size > 0) {
        o("WAWebVoipWebTransportDataChannelThreadManager")
          .stopWebTransportDataChannelWorker()
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportConnectionManager] Failed to stop stale worker",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("webtransport-stale-worker-stop-failed");
          });
        for (var e of Array.from(Q.keys())) Qe(e);
      }
      (J.clear(), Z.clear(), ne || (X.clear(), (ue = null)));
    }
    function pe(e) {
      if (ne) {
        if (((ne = !1), !e)) {
          (X.clear(), (ue = null));
          return;
        }
        _e();
      }
    }
    function _e() {
      ee ||
        !te ||
        le ||
        !o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() ||
        (ot(), rt());
    }
    var fe = null,
      ge = !1,
      he = null,
      ye = !1;
    function Ce() {
      var e = 0;
      try {
        e = o("WAWebABProps").getABPropConfigValue(
          "web_voip_webtransport_timeout_before_sctp_fallback_ms",
        );
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
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
          ? B
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
    function be() {
      if (!(ge || fe != null)) {
        ye || ((ye = !0), (he = Ce()));
        var e = he;
        e != null &&
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] WebTransport SCTP-fallback timeout armed at ",
                "ms",
              ])),
            e,
          ),
          (fe = window.setTimeout(function () {
            return Le(e);
          }, e)));
      }
    }
    function ve() {
      fe != null && (window.clearTimeout(fe), (fe = null));
    }
    function Se() {
      (Re(), (ye = !1), (he = null));
    }
    function Re() {
      (ve(), (ge = !1), (oe = !1));
    }
    function Le(e) {
      fe = null;
      var t = [];
      for (var n of Q) {
        var r = n[0],
          a = n[1];
        a.state ===
          o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting &&
          t.push(r);
      }
      (o("WALogger").LOG(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] WebTransport SCTP-fallback timeout expired: no inbound datagram in ",
            "ms",
          ])),
        e,
      ),
        Te(!0, function () {
          for (var e of t)
            o("WAWebVoipWebTransportCallSummary").recordWtRelayAttemptComplete(
              e,
              o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Timeout,
              "handshake_timeout",
            );
        }));
    }
    function Ee() {
      for (var e of Q) {
        var t = e[0],
          n = e[1];
        if (
          X.has(t) &&
          n.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open
        )
          return !0;
      }
      return !1;
    }
    function ke() {
      for (var e of Q) {
        var t = e[0],
          n = e[1];
        if (
          X.has(t) &&
          n.state ===
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting &&
          !n.cleanupRequested
        )
          return !0;
      }
      return !1;
    }
    function Ie(e) {
      return e
        ? !1
        : o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() && !re
          ? (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransportConnectionManager] Skipping fallback: speculative preconnect only",
                ])),
            ),
            !0)
          : Ee()
            ? (o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportConnectionManager] Skipping fallback: another current WT connection still open",
                  ])),
              ),
              !0)
            : o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() &&
                fe != null &&
                ke()
              ? (o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WebTransportConnectionManager] Skipping fallback: another current WT connection still connecting",
                    ])),
                ),
                !0)
              : !1;
    }
    function Te(e, t) {
      if ((e === void 0 && (e = !1), ee))
        return (
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Skipping fallback: tearing down",
              ])),
          ),
          !1
        );
      if (le)
        return (
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
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
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Skipping fallback: call ended or resolved elsewhere (state=",
                ")",
              ])),
            String(n),
          ),
          !1
        );
      if (Ie(e)) return !1;
      var r = ie;
      if (r == null)
        return (
          se ||
            ((se = !0),
            o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransportConnectionManager] Skipping fallback: no handler registered (fallback abprop off)",
                ])),
            ),
            o(
              "WAWebCoreActionsODS",
            ).logCallWebtransportFallbackToSctpSkippedDisabled()),
          !1
        );
      ((le = !0),
        o("WAWebVoipWebTransportCallSummary").recordWtFallbackTriggered(),
        t == null || t(),
        o("WAWebCoreActionsODS").logCallWebtransportFallbackToSctpTriggered(),
        o("WALogger").LOG(
          C ||
            (C = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] Triggering SCTP fallback",
            ])),
        ));
      try {
        r(ue);
      } catch (e) {
        o("WALogger")
          .ERROR(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Fallback handler threw: ",
                "",
              ])),
            e,
          )
          .sendLogs("webtransport-fallback-handler-fail");
      }
      return !0;
    }
    function De(e) {}
    function xe(e, t) {
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
    function $e(e) {
      var t,
        n = X.get(e);
      return n != null
        ? n
        : (t = Q.get(e)) == null
          ? void 0
          : t.relayConnectionInfo;
    }
    function Pe(e) {
      e.connectionTimeout != null &&
        (window.clearTimeout(e.connectionTimeout),
        (e.connectionTimeout = null));
    }
    function Ne(e, t) {
      var n,
        r = X.has(t);
      if (
        (Pe(e),
        (n = o(
          "WAWebVoipWebTransportDataChannelThreadManager",
        ).getWebTransportDataChannelThread()) == null || n.close(t),
        (e.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed),
        !ee)
      ) {
        o("WAWebCoreActionsODS").logCallWebtransportConnectFailed();
        var a = e.clusterDomain;
        a != null &&
          o("WAWebVoipTsLogger").logWebtransportConnectionFailed(
            "https://" + a + "/webtransport",
          );
      }
      var i = e.clusterDomain;
      i != null && J.get(i) === t && J.delete(i);
      var l = Q.get(t) === e;
      (l && Q.delete(t), r && l && Te());
    }
    var Me = /^wt\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.fna\.whatsapp\.net$/i;
    function we(e) {
      var t = e.authToken,
        n = e.clusterDomain,
        r = e.token;
      if (n == null || !Ae(n))
        return (
          o("WALogger")
            .ERROR(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
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
    function Ae(e) {
      return e.endsWith(".whatsapp.com") || Me.test(e);
    }
    function Fe(e) {
      var t = Q.get(e.connectionId);
      if (t != null) {
        if (e.event === "first_relay_datagram_sent") {
          X.has(e.connectionId) &&
            e.relayGeneration === Y &&
            o("WAWebVoipWebTransportCallSummary").recordWtRelayTrafficSent();
          return;
        }
        if (e.event === "first_datagram") {
          X.has(e.connectionId) &&
            e.relayGeneration === Y &&
            !ge &&
            ((ge = !0), ve());
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
          (n != null && J.get(n) === e.connectionId && J.delete(n),
          e.event === "closed")
        ) {
          ((t.state = o(
            "WAWebVoipRelayConnectionUtils",
          ).ConnectionState.Closed),
            o("WALogger").LOG(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransportConnectionManager] Worker connection closed for ",
                  "",
                ])),
              e.connectionId,
            ),
            t.cleanupRequested && ze(e.connectionId));
          return;
        }
        if (e.event === "error") {
          var r, a;
          ((t.state = o(
            "WAWebVoipRelayConnectionUtils",
          ).ConnectionState.Failed),
            o("WALogger").WARN(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransportConnectionManager] Worker connection failed for ",
                  ": ",
                  "",
                ])),
              e.connectionId,
              (r = (a = e.error) == null ? void 0 : a.message) != null
                ? r
                : "unknown",
            ),
            X.has(e.connectionId) ? Te() : ze(e.connectionId));
        }
      }
    }
    var Oe = "WebTransport connect aborted";
    function Be(e) {
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
    function We(e, t) {
      var n = e.errorMessage,
        r = e.errorName,
        o = e.wtHasStreamErrorCode,
        a = e.wtSource;
      return r === "NotSupportedError"
        ? "invalid_config"
        : r !== "WebTransportError" && n === Oe
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
    function qe() {
      var e = o("WAWebVoipLocalCallStateStore").getLocalCallState();
      return (
        !o("WAWebVoipCallStateUtils").isCallTerminal(e) &&
        !o("WAWebVoipCallStateUtils").isCallIncoming(e)
      );
    }
    function Ue(e, t, n) {
      var r = t != null && t > 0 ? Date.now() - t : -1,
        o = Be(e),
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
        likelyCause: We(o, r),
      };
    }
    function Ve(e) {
      return He.apply(this, arguments);
    }
    function He() {
      return (
        (He = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.id,
            n = e.clusterDomain;
          if (!(n != null && J.has(n))) {
            (n != null && J.set(n, t),
              o("WALogger").LOG(
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
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
            var a = Q.get(t);
            (a == null && ((a = xe(t, e)), Q.set(t, a)),
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
                    $ ||
                      ($ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [WebTransportConnectionManager] Connection timeout for ",
                        "",
                      ])),
                    t,
                  ),
                  ee ||
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
                  Ne(a, t));
              }, o("WAWebVoipRelayConnectionUtils").CONNECTION_TIMEOUT_MS)));
            try {
              var i = we(e);
              if (i == null) {
                (ee ||
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
                  Ne(a, t));
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
              (s.registerStateHandler(Fe),
                (a.workerConnectionCreated = !0),
                yield s.connect(t, i, e.ip, e.port, Y));
              var c = Q.get(t);
              if (
                c == null ||
                c !== a ||
                c.state !==
                  o("WAWebVoipRelayConnectionUtils").ConnectionState
                    .Connecting ||
                c.cleanupRequested ||
                le
              ) {
                (o("WALogger").WARN(
                  P ||
                    (P = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WebTransportConnectionManager] Connection ",
                      " was cleaned up during establishment, closing worker connection",
                    ])),
                  t,
                ),
                  le ||
                    o(
                      "WAWebVoipWebTransportCallSummary",
                    ).recordWtRelayAttemptComplete(
                      t,
                      o("WAWebVoipWebTransportCallSummary").WtRelayOutcome
                        .Aborted,
                      "cleaned_up",
                    ),
                  le && c === a && !a.cleanupRequested && ze(t),
                  s.close(t));
                return;
              }
              (Pe(a),
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
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
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
                Ge(t));
            } catch (e) {
              var m,
                p = Ue(e, a.connectionStartTime, a.workerConnectionCreated);
              if (Q.get(t) !== a && p.likelyCause === "aborted") return;
              (o(
                "WAWebVoipWebTransportCallSummary",
              ).recordWtRelayAttemptComplete(
                t,
                (m = ae[p.likelyCause]) != null
                  ? m
                  : o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Failed,
                p.likelyCause,
              ),
                ee ||
                  o(
                    "WAWebCoreActionsODS",
                  ).logCallWebtransportConnectFailByCategory(p.likelyCause));
              var _ = o("WALogger").ERROR(
                M ||
                  (M = babelHelpers.taggedTemplateLiteralLoose([
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
              (qe() &&
                !Ee() &&
                p.likelyCause !== "aborted" &&
                _.sendLogs("webtransport-connect-fail"),
                Ne(a, t));
            }
          }
        })),
        He.apply(this, arguments)
      );
    }
    function Ge(e) {
      var t = Q.get(e);
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
    function ze(e) {
      var t = Q.get(e);
      if (t != null) {
        (Pe(t),
          o("WAWebVoipRelayConnectionUtils").clearPacketBuffer(t.packetBuffer),
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
            je(t),
          ));
        var n = t.clusterDomain;
        (n != null && J.get(n) === e && J.delete(n), Q.delete(e));
      }
    }
    function je(e) {
      return e.stats.droppedPackets + e.localDroppedPackets;
    }
    function Ke(e, t) {
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
    function Qe(e) {
      var t = Q.get(e);
      if (!(t == null || t.cleanupRequested)) {
        (o("WALogger").LOG(
          E ||
            (E = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] Cleaning up connection ",
              "",
            ])),
          e,
        ),
          Pe(t),
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
        ze(e);
      }
    }
    function Xe(e, t, n) {
      return Ye.apply(this, arguments);
    }
    function Ye() {
      return (
        (Ye = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            if (!ee) {
              var r = o(
                  "WAWebVoipRelayConnectionUtils",
                ).getConnectionIdentifier(t, n),
                a = Q.get(r),
                i = $e(r);
              if (a == null) {
                if (i == null) {
                  if (et(r, e)) return;
                  var l = Array.from(X.keys()).join(",");
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
                  u = s != null ? J.get(s) : void 0,
                  c = u != null ? Q.get(u) : void 0;
                c != null ? (a = c) : ((a = xe(r, i)), Q.set(r, a));
              }
              if (
                (a.stats.firstSendRequestTime === 0 &&
                  (a.stats.firstSendRequestTime = Date.now()),
                a.state ===
                  o("WAWebVoipRelayConnectionUtils").ConnectionState.Open)
              ) {
                var d;
                Je(e, r);
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
              if (!at(p, a)) {
                p && X.has(r) && Ze();
                var _ = Ke(
                  a,
                  o("WAWebVoipRelayConnectionUtils").copyArrayBuffer(e),
                );
                (_ ||
                  o("WALogger").WARN(
                    A ||
                      (A = babelHelpers.taggedTemplateLiteralLoose([
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
                    X.has(r) &&
                    Ve(i));
              }
            }
          },
        )),
        Ye.apply(this, arguments)
      );
    }
    function Je(e, t) {
      X.has(t) &&
        !oe &&
        o("WAWebVoipRelayConnectionUtils").inspectPacketType(e) !==
          o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN &&
        Ze();
    }
    function Ze() {
      ((re = !0), (oe = !0), be());
    }
    function et(e, t) {
      return X.size > 0 ||
        !o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() ||
        o("WAWebVoipRelayConnectionUtils").inspectPacketType(t) ===
          o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN
        ? !1
        : tt(e, t);
    }
    function tt(e, t) {
      if (z >= q || j + t.byteLength > U) return !1;
      var n = H.get(e),
        r = n == null;
      if (n == null) {
        if (H.size >= W) return !1;
        ((n = o("WAWebVoipRelayConnectionUtils").createPacketBuffer()),
          H.set(e, n));
      }
      var a = n.packets.length,
        i = n.bufferedBytes,
        l = G.droppedPackets;
      return o("WAWebVoipRelayConnectionUtils").bufferPacket(
        n,
        o("WAWebVoipRelayConnectionUtils").copyArrayBuffer(t),
        G,
      )
        ? (G.droppedPackets > l &&
            o("WALogger").WARN(
              I ||
                (I = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransportConnectionManager] Dropped oldest early STUN packet at per-relay limit",
                ])),
            ),
          (z += n.packets.length - a),
          (j += n.bufferedBytes - i),
          K == null && (K = window.setTimeout(nt, V)),
          !0)
        : (r && H.delete(e),
          o("WALogger").WARN(
            k ||
              (k = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Dropped oversized early STUN packet",
              ])),
          ),
          !1);
    }
    function nt() {
      (K != null && (window.clearTimeout(K), (K = null)),
        H.clear(),
        (G = o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats()),
        (z = 0),
        (j = 0));
    }
    function rt() {
      for (var e of H) {
        var t = e[0],
          n = e[1],
          r = X.get(t);
        if (r != null) {
          ((z -= n.packets.length), (j -= n.bufferedBytes));
          for (
            var a = o("WAWebVoipRelayConnectionUtils").shiftPacket(n);
            a != null;
          )
            (Xe(a, r.ip, r.port),
              (a = o("WAWebVoipRelayConnectionUtils").shiftPacket(n)));
          H.delete(t);
        }
      }
      H.size === 0 && K != null && (window.clearTimeout(K), (K = null));
    }
    function ot() {
      for (var e of X.values()) {
        var t = e.clusterDomain;
        t == null || Z.has(t) || Z.size >= O || (Z.add(t), Ve(e));
      }
    }
    function at(e, t) {
      return t.state ===
        o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed
        ? (e && (Ze(), Te()), t.localDroppedPackets++, !0)
        : e
          ? !1
          : (t.localDroppedPackets++, !0);
    }
    function it(e) {
      var t;
      (o("WALogger").LOG(
        T ||
          (T = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Received relay list update",
          ])),
      ),
        (ue = e));
      var n = o("WAWebVoipRelayConnectionUtils").extractRelayConnectionMap(e);
      st(n) && o("WAWebCoreActionsODS").logCallWebtransportRelaysIpv6Only();
      var r = lt(n),
        a = new Set();
      for (var i of r.values()) {
        var l = i.clusterDomain;
        l != null && a.add(l);
      }
      var s = 0;
      for (var u of Q) {
        var c = u[0],
          d = u[1],
          m = r.get(c);
        if (m != null) {
          d.relayConnectionInfo = m;
          continue;
        }
        if (
          d.state !==
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
          d.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed
        ) {
          var p = d.clusterDomain;
          if (p != null && a.has(p)) {
            (J.get(p) === c && J.delete(p), Qe(c));
            continue;
          }
          s++;
        }
      }
      (Y++,
        (X = r),
        Re(),
        (t = o(
          "WAWebVoipWebTransportDataChannelThreadManager",
        ).getWebTransportDataChannelThread()) == null ||
          t.resetDatagramHealth(Y),
        o("WAWebVoipCallStateUtils").isCallTerminal(
          o("WAWebVoipLocalCallStateStore").getLocalCallState(),
        )
          ? (ne = !0)
          : _e());
    }
    function lt(e) {
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
    function st(e) {
      if (e.size === 0) return !1;
      for (var t of e.values()) if (!t.isIPv6) return !1;
      return !0;
    }
    function ut() {
      ((te = !1), (ee = !0));
    }
    function ct() {
      var e = Array.from(Q.values()),
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
        n = t.slice(0, F).map(function (e) {
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
                String(je(e)) +
                ")"
            : n + ",stats=offthread,droppedPackets=" + String(je(e)) + ")";
        });
      return "total=" + String(e.length) + ";" + (n.join("|") || "none");
    }
    function dt(e) {
      (e === void 0 && (e = !0),
        o("WALogger").LOG(
          D ||
            (D = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] Closing all connections",
            ])),
        ));
      for (var t of Array.from(Q.keys())) Qe(t);
      var n = o(
        "WAWebVoipWebTransportDataChannelThreadManager",
      ).stopWebTransportDataChannelWorker();
      (n.finally(function () {
        for (var e of Q) {
          var t = e[0],
            n = e[1];
          n.cleanupRequested && ze(t);
        }
      }),
        X.clear(),
        (ne = !1),
        Z.clear(),
        nt(),
        J.clear(),
        ve(),
        ee && (Se(), (re = !1), (le = !1), (se = !1), (ue = null)),
        e && o("WAWebVoipWebTransportCallSummary").markWtCallSummaryClosed(),
        o("WAWebVoipTsLogger").cleanup(),
        (ee = !1));
    }
    ((l.registerFallbackHandler = ce),
      (l.resetFallbackStateForNewCall = de),
      (l.resolvePendingFastSetupForNewCall = pe),
      (l.registerPacketHandler = De),
      (l.sendData = Xe),
      (l.handleRelayListUpdate = it),
      (l.prepareForEndCall = ut),
      (l.getWebTransportRelayDebugSummary = ct),
      (l.closeAllConnections = dt));
  },
  98,
);
