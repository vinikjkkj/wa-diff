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
      Y = new Map(),
      J = new Set(),
      Z = !1,
      ee = !1,
      te = !1,
      ne = !1,
      re = {
        aborted: o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Aborted,
        handshake_timeout: o("WAWebVoipWebTransportCallSummary").WtRelayOutcome
          .Timeout,
        connection_timeout: o("WAWebVoipWebTransportCallSummary").WtRelayOutcome
          .Timeout,
      },
      oe = null,
      ae = !1,
      ie = !1,
      le = null;
    function se(t) {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Fallback handler registered",
          ])),
      ),
        (oe = t));
    }
    function ue() {
      (be(),
        Ze(),
        ce(),
        (ee = !0),
        J.clear(),
        (ne = !1),
        (ae = !1),
        (ie = !1),
        o("WAWebVoipGatingUtils").resetWebTransportFallbackState());
    }
    function ce() {
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
        for (var e of Array.from(Q.keys())) ze(e);
      }
      (Y.clear(), J.clear(), te || (X.clear(), (le = null)));
    }
    function de(e) {
      if (te) {
        if (((te = !1), !e)) {
          (X.clear(), (le = null));
          return;
        }
        me();
      }
    }
    function me() {
      Z ||
        !ee ||
        ae ||
        !o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() ||
        (tt(), et());
    }
    var pe = null,
      _e = !1,
      fe = null,
      ge = !1;
    function he() {
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
    function ye() {
      if (!(_e || pe != null)) {
        ge || ((ge = !0), (fe = he()));
        var e = fe;
        e != null &&
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] WebTransport SCTP-fallback timeout armed at ",
                "ms",
              ])),
            e,
          ),
          (pe = window.setTimeout(function () {
            return ve(e);
          }, e)));
      }
    }
    function Ce() {
      pe != null && (window.clearTimeout(pe), (pe = null));
    }
    function be() {
      (Ce(), (_e = !1), (ge = !1), (fe = null));
    }
    function ve(e) {
      pe = null;
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
        Ee(
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
    function Se() {
      for (var e of Q.values())
        if (e.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open)
          return !0;
      return !1;
    }
    function Re() {
      for (var e of Q.values())
        if (
          e.state ===
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting &&
          !e.cleanupRequested
        )
          return !0;
      return !1;
    }
    function Le(e) {
      return e
        ? !1
        : o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() && !ne
          ? (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransportConnectionManager] Skipping fallback: speculative preconnect only",
                ])),
            ),
            !0)
          : Se()
            ? (o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportConnectionManager] Skipping fallback: another WT connection still open",
                  ])),
              ),
              !0)
            : o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() &&
                pe != null &&
                Re()
              ? (o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WebTransportConnectionManager] Skipping fallback: another WT connection still connecting",
                    ])),
                ),
                !0)
              : !1;
    }
    function Ee(e, t) {
      if ((e === void 0 && (e = !1), Z))
        return (
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Skipping fallback: tearing down",
              ])),
          ),
          !1
        );
      if (ae)
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
      if (Le(e)) return !1;
      var r = oe;
      if (r == null)
        return (
          ie ||
            ((ie = !0),
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
      ((ae = !0),
        t == null || t(),
        o("WAWebCoreActionsODS").logCallWebtransportFallbackToSctpTriggered(),
        o("WALogger").LOG(
          C ||
            (C = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] Triggering SCTP fallback",
            ])),
        ));
      try {
        r(le);
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
    function ke(e) {}
    function Ie(e, t) {
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
    function Te(e) {
      var t,
        n = X.get(e);
      return n != null
        ? n
        : (t = Q.get(e)) == null
          ? void 0
          : t.relayConnectionInfo;
    }
    function De(e) {
      e.connectionTimeout != null &&
        (window.clearTimeout(e.connectionTimeout),
        (e.connectionTimeout = null));
    }
    function xe(e, t) {
      var n;
      if (
        (De(e),
        (n = o(
          "WAWebVoipWebTransportDataChannelThreadManager",
        ).getWebTransportDataChannelThread()) == null || n.close(t),
        (e.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed),
        !Z)
      ) {
        o("WAWebCoreActionsODS").logCallWebtransportConnectFailed();
        var r = e.clusterDomain;
        r != null &&
          o("WAWebVoipTsLogger").logWebtransportConnectionFailed(
            "https://" + r + "/webtransport",
          );
      }
      var a = e.clusterDomain;
      (a != null && Y.get(a) === t && Y.delete(a), Q.delete(t), Ee());
    }
    var $e = /^wt\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.fna\.whatsapp\.net$/i;
    function Pe(e) {
      var t = e.authToken,
        n = e.clusterDomain,
        r = e.token;
      if (n == null || !Ne(n))
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
    function Ne(e) {
      return e.endsWith(".whatsapp.com") || $e.test(e);
    }
    function Me(e) {
      var t = Q.get(e.connectionId);
      if (t != null) {
        if (e.event === "first_datagram") {
          _e || ((_e = !0), Ce());
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
          (n != null && Y.get(n) === e.connectionId && Y.delete(n),
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
            t.cleanupRequested && Ve(e.connectionId));
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
            Ee());
        }
      }
    }
    var we = "WebTransport connect aborted";
    function Ae(e) {
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
    function Fe(e, t) {
      var n = e.errorMessage,
        r = e.errorName,
        o = e.wtHasStreamErrorCode,
        a = e.wtSource;
      return r === "NotSupportedError"
        ? "invalid_config"
        : r !== "WebTransportError" && n === we
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
    function Oe() {
      var e = o("WAWebVoipLocalCallStateStore").getLocalCallState();
      return (
        !o("WAWebVoipCallStateUtils").isCallTerminal(e) &&
        !o("WAWebVoipCallStateUtils").isCallIncoming(e)
      );
    }
    function Be(e, t, n) {
      var r = t != null && t > 0 ? Date.now() - t : -1,
        o = Ae(e),
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
        likelyCause: Fe(o, r),
      };
    }
    function We(e) {
      return qe.apply(this, arguments);
    }
    function qe() {
      return (
        (qe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.id,
            n = e.clusterDomain;
          if (!(n != null && Y.has(n))) {
            (n != null && Y.set(n, t),
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
            (a == null && ((a = Ie(t, e)), Q.set(t, a)),
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
                  Z ||
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
                  xe(a, t));
              }, o("WAWebVoipRelayConnectionUtils").CONNECTION_TIMEOUT_MS)));
            try {
              var i = Pe(e);
              if (i == null) {
                (Z ||
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
                  xe(a, t));
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
              (s.registerStateHandler(Me),
                (a.workerConnectionCreated = !0),
                yield s.connect(t, i, e.ip, e.port));
              var c = Q.get(t);
              if (
                c == null ||
                c !== a ||
                c.state !==
                  o("WAWebVoipRelayConnectionUtils").ConnectionState
                    .Connecting ||
                c.cleanupRequested ||
                ae
              ) {
                (o("WALogger").WARN(
                  P ||
                    (P = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WebTransportConnectionManager] Connection ",
                      " was cleaned up during establishment, closing worker connection",
                    ])),
                  t,
                ),
                  ae ||
                    o(
                      "WAWebVoipWebTransportCallSummary",
                    ).recordWtRelayAttemptComplete(
                      t,
                      o("WAWebVoipWebTransportCallSummary").WtRelayOutcome
                        .Aborted,
                      "cleaned_up",
                    ),
                  ae && c === a && !a.cleanupRequested && Ve(t),
                  s.close(t));
                return;
              }
              (De(a),
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
                Ue(t));
            } catch (e) {
              var m,
                p = Be(e, a.connectionStartTime, a.workerConnectionCreated);
              if (Q.get(t) !== a && p.likelyCause === "aborted") return;
              (o(
                "WAWebVoipWebTransportCallSummary",
              ).recordWtRelayAttemptComplete(
                t,
                (m = re[p.likelyCause]) != null
                  ? m
                  : o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Failed,
                p.likelyCause,
              ),
                Z ||
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
              (Oe() &&
                !Se() &&
                p.likelyCause !== "aborted" &&
                _.sendLogs("webtransport-connect-fail"),
                xe(a, t));
            }
          }
        })),
        qe.apply(this, arguments)
      );
    }
    function Ue(e) {
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
    function Ve(e) {
      var t = Q.get(e);
      if (t != null) {
        (De(t),
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
            He(t),
          ));
        var n = t.clusterDomain;
        (n != null && Y.get(n) === e && Y.delete(n), Q.delete(e));
      }
    }
    function He(e) {
      return e.stats.droppedPackets + e.localDroppedPackets;
    }
    function Ge(e, t) {
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
    function ze(e) {
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
          De(t),
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
        Ve(e);
      }
    }
    function je(e, t, n) {
      return Ke.apply(this, arguments);
    }
    function Ke() {
      return (
        (Ke = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            if (!Z) {
              var r = o(
                  "WAWebVoipRelayConnectionUtils",
                ).getConnectionIdentifier(t, n),
                a = Q.get(r),
                i = Te(r);
              if (a == null) {
                if (i == null) {
                  if (Ye(r, e)) return;
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
                  u = s != null ? Y.get(s) : void 0,
                  c = u != null ? Q.get(u) : void 0;
                c != null ? (a = c) : ((a = Ie(r, i)), Q.set(r, a));
              }
              if (
                (a.stats.firstSendRequestTime === 0 &&
                  (a.stats.firstSendRequestTime = Date.now()),
                a.state ===
                  o("WAWebVoipRelayConnectionUtils").ConnectionState.Open)
              ) {
                var d;
                Qe(e);
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
              if (!nt(p, a)) {
                p && Xe();
                var _ = Ge(
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
                    We(i));
              }
            }
          },
        )),
        Ke.apply(this, arguments)
      );
    }
    function Qe(e) {
      !ne &&
        o("WAWebVoipRelayConnectionUtils").inspectPacketType(e) !==
          o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN &&
        Xe();
    }
    function Xe() {
      ((ne = !0), ye());
    }
    function Ye(e, t) {
      return X.size > 0 ||
        !o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() ||
        o("WAWebVoipRelayConnectionUtils").inspectPacketType(t) ===
          o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN
        ? !1
        : Je(e, t);
    }
    function Je(e, t) {
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
          K == null && (K = window.setTimeout(Ze, V)),
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
    function Ze() {
      (K != null && (window.clearTimeout(K), (K = null)),
        H.clear(),
        (G = o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats()),
        (z = 0),
        (j = 0));
    }
    function et() {
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
            (je(a, r.ip, r.port),
              (a = o("WAWebVoipRelayConnectionUtils").shiftPacket(n)));
          H.delete(t);
        }
      }
      H.size === 0 && K != null && (window.clearTimeout(K), (K = null));
    }
    function tt() {
      for (var e of X.values()) {
        var t = e.clusterDomain;
        t == null || J.has(t) || J.size >= O || (J.add(t), We(e));
      }
    }
    function nt(e, t) {
      return t.state ===
        o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed
        ? (e && (Xe(), Ee()), t.localDroppedPackets++, !0)
        : e
          ? !1
          : (t.localDroppedPackets++, !0);
    }
    function rt(e) {
      (o("WALogger").LOG(
        T ||
          (T = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Received relay list update",
          ])),
      ),
        (le = e));
      var t = o("WAWebVoipRelayConnectionUtils").extractRelayConnectionMap(e);
      at(t) && o("WAWebCoreActionsODS").logCallWebtransportRelaysIpv6Only();
      var n = ot(t),
        r = 0;
      for (var a of Q) {
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
      ((X = n),
        o("WAWebVoipCallStateUtils").isCallTerminal(
          o("WAWebVoipLocalCallStateStore").getLocalCallState(),
        )
          ? (te = !0)
          : me());
    }
    function ot(e) {
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
    function at(e) {
      if (e.size === 0) return !1;
      for (var t of e.values()) if (!t.isIPv6) return !1;
      return !0;
    }
    function it() {
      ((ee = !1), (Z = !0));
    }
    function lt() {
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
                String(He(e)) +
                ")"
            : n + ",stats=offthread,droppedPackets=" + String(He(e)) + ")";
        });
      return "total=" + String(e.length) + ";" + (n.join("|") || "none");
    }
    function st() {
      o("WALogger").LOG(
        D ||
          (D = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Closing all connections",
          ])),
      );
      for (var e of Array.from(Q.keys())) ze(e);
      var t = o(
        "WAWebVoipWebTransportDataChannelThreadManager",
      ).stopWebTransportDataChannelWorker();
      (t.finally(function () {
        for (var e of Q) {
          var t = e[0],
            n = e[1];
          n.cleanupRequested && Ve(t);
        }
      }),
        X.clear(),
        (te = !1),
        J.clear(),
        Ze(),
        Y.clear(),
        Ce(),
        Z && (be(), (ne = !1), (ae = !1), (ie = !1), (le = null)),
        o("WAWebVoipWebTransportCallSummary").markWtCallSummaryClosed(),
        o("WAWebVoipTsLogger").cleanup(),
        (Z = !1));
    }
    ((l.registerFallbackHandler = se),
      (l.resetFallbackStateForNewCall = ue),
      (l.resolvePendingFastSetupForNewCall = de),
      (l.registerPacketHandler = ke),
      (l.sendData = je),
      (l.handleRelayListUpdate = rt),
      (l.prepareForEndCall = it),
      (l.getWebTransportRelayDebugSummary = lt),
      (l.closeAllConnections = st));
  },
  98,
);
