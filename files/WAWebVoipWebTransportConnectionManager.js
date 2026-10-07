__d(
  "WAWebVoipWebTransportConnectionManager",
  [
    "WALogger",
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
      F,
      O = 8,
      B = 3,
      W = 500,
      q = 8,
      U = 32,
      V = 32 * 1024,
      H = 1e3,
      G = new Map(),
      z = o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats(),
      j = 0,
      K = 0,
      Q = null,
      X = new Map(),
      Y = new Map(),
      J = 0,
      Z = new Map(),
      ee = new Set(),
      te = new Set(),
      ne = !1,
      re = !1,
      oe = !1,
      ae = !1,
      ie = !1,
      le = !1,
      se = null,
      ue = {
        aborted: o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Aborted,
        handshake_timeout: o("WAWebVoipWebTransportCallSummary").WtRelayOutcome
          .Timeout,
        connection_timeout: o("WAWebVoipWebTransportCallSummary").WtRelayOutcome
          .Timeout,
      },
      ce = null,
      de = null,
      me = !1,
      pe = !1,
      _e = null;
    function fe(t) {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Fallback handler registered",
          ])),
      ),
        (ce = t));
    }
    function ge(e) {
      de = e;
    }
    function he() {
      ($e(),
        Te(),
        dt(),
        ye(),
        (oe = !0),
        ee.clear(),
        te.clear(),
        (le = !1),
        (se = null),
        (me = !1),
        (Ee = !1),
        (pe = !1),
        o("WAWebVoipGatingUtils").resetWebTransportFallbackState());
    }
    function ye() {
      if (X.size > 0) {
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
        for (var e of Array.from(X.keys())) at(e);
      }
      (Z.clear(), ee.clear(), te.clear(), ae || (Y.clear(), (_e = null)));
    }
    function Ce(e) {
      if (ae) {
        if (((ae = !1), !e)) {
          (Y.clear(), (_e = null));
          return;
        }
        ve();
      }
    }
    function be() {
      if (((le = !0), !Me())) {
        if (we()) {
          De();
          return;
        }
        var e = se;
        e != null && Fe(e, !0);
      }
    }
    function ve() {
      ne ||
        !oe ||
        me ||
        !o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() ||
        (pt(), mt(), De());
    }
    var Se = null,
      Re = null,
      Le = !1,
      Ee = !1;
    function ke() {
      if (!(Le || Se != null)) {
        var e = W;
        (o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] WebTransport SCTP-fallback timeout armed at ",
              "ms",
            ])),
          e,
        ),
          (Se = window.setTimeout(function () {
            return Ne(e);
          }, e)));
      }
    }
    function Ie() {
      Se != null && (window.clearTimeout(Se), (Se = null));
    }
    function Te() {
      Re != null && (window.clearTimeout(Re), (Re = null));
    }
    function De() {
      if (
        !(
          !o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() ||
          me ||
          Me() ||
          !we()
        )
      ) {
        var e = W;
        Re == null &&
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] WebTransport readiness timeout armed at ",
                "ms",
              ])),
            e,
          ),
          (Re = window.setTimeout(function () {
            ((Re = null),
              xe(
                e,
                le
                  ? o("WAWebVoipWebTransportCallSummary").WtFallbackReason
                      .NoReadyAfterAcceptTimeout
                  : o("WAWebVoipWebTransportCallSummary").WtFallbackReason
                      .NoReadyDuringRingingTimeout,
              ));
          }, e)));
      }
    }
    function xe(e, t) {
      if (!Me()) {
        var n = [];
        for (var r of X) {
          var a = r[0],
            i = r[1];
          Y.has(a) &&
            i.state ===
              o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting &&
            n.push(a);
        }
        (o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] WebTransport readiness budget expired with no current connection open (budget=",
              "ms)",
            ])),
          e,
        ),
          Fe(t, !0, function () {
            for (var e of n)
              o(
                "WAWebVoipWebTransportCallSummary",
              ).recordWtRelayAttemptComplete(
                e,
                o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Timeout,
                "connection_timeout",
              );
          }));
      }
    }
    function $e() {
      Pe();
    }
    function Pe() {
      (Ie(), (Le = !1), (ie = !1));
    }
    function Ne(e) {
      Se = null;
      var t = [];
      for (var n of X) {
        var r = n[0],
          a = n[1];
        a.state ===
          o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting &&
          t.push(r);
      }
      (o("WALogger").LOG(
        m ||
          (m = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] WebTransport SCTP-fallback timeout expired: no inbound datagram in ",
            "ms",
          ])),
        e,
      ),
        Fe(
          o("WAWebVoipWebTransportCallSummary").WtFallbackReason
            .NoInboundDatagramTimeout,
          !0,
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
    function Me() {
      for (var e of X) {
        var t = e[0],
          n = e[1];
        if (
          Y.has(t) &&
          n.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open
        )
          return !0;
      }
      return !1;
    }
    function we() {
      for (var e of X) {
        var t = e[0],
          n = e[1];
        if (
          Y.has(t) &&
          n.state ===
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting &&
          !n.cleanupRequested
        )
          return !0;
      }
      return !1;
    }
    function Ae(e) {
      return e
        ? !1
        : re
          ? (o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransportConnectionManager] Skipping fallback: current relay preconnect pass is still starting sibling attempts",
                ])),
            ),
            !0)
          : Me()
            ? (o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportConnectionManager] Skipping fallback: another current WT connection still open",
                  ])),
              ),
              !0)
            : o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() &&
                !Le &&
                we()
              ? (o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WebTransportConnectionManager] Skipping fallback: another current WT connection still connecting",
                    ])),
                ),
                !0)
              : !1;
    }
    function Fe(e, t, n) {
      if ((t === void 0 && (t = !1), ne))
        return (
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Skipping fallback: tearing down",
              ])),
          ),
          !1
        );
      if (me)
        return (
          o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Skipping fallback: already fell back this call",
              ])),
          ),
          !1
        );
      var r = o("WAWebVoipLocalCallStateStore").getLocalCallState();
      if (
        r === o("WAWebVoipWaCallEnums").CallState.CallStateEnding ||
        r === o("WAWebVoipWaCallEnums").CallState.CallActiveElseWhere
      )
        return (
          o("WALogger").LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Skipping fallback: call ended or resolved elsewhere (state=",
                ")",
              ])),
            String(r),
          ),
          !1
        );
      if (Ae(t)) return !1;
      var a = ce;
      if (a == null)
        return (
          pe ||
            ((pe = !0),
            o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransportConnectionManager] Skipping fallback: no handler registered (fallback abprop off)",
                ])),
            ),
            o(
              "WAWebCoreActionsODS",
            ).logCallWebtransportFallbackToSctpSkippedDisabled()),
          !1
        );
      ((me = !0),
        o("WAWebVoipWebTransportCallSummary").recordWtFallbackTriggered(r, e),
        n == null || n(),
        o("WAWebCoreActionsODS").logCallWebtransportFallbackToSctpTriggered(),
        o("WALogger").LOG(
          b ||
            (b = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] Triggering SCTP fallback",
            ])),
        ));
      try {
        a(_e);
      } catch (e) {
        o("WALogger")
          .ERROR(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Fallback handler threw: ",
                "",
              ])),
            e,
          )
          .sendLogs("webtransport-fallback-handler-fail");
      }
      return !0;
    }
    function Oe(e) {}
    function Be(e, t) {
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
    function We(e) {
      var t,
        n = Y.get(e);
      return n != null
        ? n
        : (t = X.get(e)) == null
          ? void 0
          : t.relayConnectionInfo;
    }
    function qe(e) {
      e.connectionTimeout != null &&
        (window.clearTimeout(e.connectionTimeout),
        (e.connectionTimeout = null));
    }
    function Ue(e, t, n) {
      var r,
        a = Y.has(t);
      if (
        (qe(e),
        (r = o(
          "WAWebVoipWebTransportDataChannelThreadManager",
        ).getWebTransportDataChannelThread()) == null || r.close(t),
        (e.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed),
        !ne)
      ) {
        o("WAWebCoreActionsODS").logCallWebtransportConnectFailed();
        var i = e.clusterDomain;
        i != null &&
          o("WAWebVoipTsLogger").logWebtransportConnectionFailed(
            "https://" + i + "/webtransport",
          );
      }
      var l = e.clusterDomain;
      l != null && Z.get(l) === t && Z.delete(l);
      var s = X.get(t) === e;
      (s && X.delete(t), a && s && ((se = n), Fe(n)));
    }
    var Ve = /^wt\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.fna\.whatsapp\.net$/i;
    function He(e) {
      var t = e.authToken,
        n = e.clusterDomain,
        r = e.token;
      if (n == null || !Ge(n))
        return (
          o("WALogger")
            .ERROR(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
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
    function Ge(e) {
      return e.endsWith(".whatsapp.com") || Ve.test(e);
    }
    function ze(e) {
      var t = X.get(e.connectionId);
      if (t != null) {
        if (e.event === "first_stun_datagram_sent") {
          Y.has(e.connectionId) && e.relayGeneration === J && st();
          return;
        }
        if (e.event === "first_relay_datagram_sent") {
          Y.has(e.connectionId) &&
            e.relayGeneration === J &&
            o("WAWebVoipWebTransportCallSummary").recordWtRelayTrafficSent();
          return;
        }
        if (e.event === "first_datagram") {
          Y.has(e.connectionId) &&
            e.relayGeneration === J &&
            !Le &&
            ((Le = !0),
            Te(),
            Ie(),
            !me && !Ee && ((Ee = !0), de == null || de()));
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
          (n != null && Z.get(n) === e.connectionId && Z.delete(n),
          e.event === "closed")
        ) {
          ((t.state = o(
            "WAWebVoipRelayConnectionUtils",
          ).ConnectionState.Closed),
            o("WALogger").LOG(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransportConnectionManager] Worker connection closed for ",
                  "",
                ])),
              e.connectionId,
            ),
            t.cleanupRequested && nt(e.connectionId));
          return;
        }
        if (e.event === "error") {
          var r, a;
          if (
            ((t.state = o(
              "WAWebVoipRelayConnectionUtils",
            ).ConnectionState.Failed),
            o("WALogger").WARN(
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransportConnectionManager] Worker connection failed for ",
                  ": ",
                  "",
                ])),
              e.connectionId,
              (r = (a = e.error) == null ? void 0 : a.message) != null
                ? r
                : "unknown",
            ),
            Y.has(e.connectionId))
          ) {
            var i,
              l = je((i = e.error) == null ? void 0 : i.source);
            ((se = l), Fe(l));
          } else nt(e.connectionId);
        }
      }
    }
    function je(e) {
      return e === "session"
        ? o("WAWebVoipWebTransportCallSummary").WtFallbackReason.SessionError
        : e === "stream"
          ? o("WAWebVoipWebTransportCallSummary").WtFallbackReason.StreamError
          : o("WAWebVoipWebTransportCallSummary").WtFallbackReason.WorkerError;
    }
    var Ke = "WebTransport connect aborted";
    function Qe(e) {
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
    function Xe(e, t) {
      var n = e.errorMessage,
        r = e.errorName,
        o = e.wtHasStreamErrorCode,
        a = e.wtSource;
      return r === "NotSupportedError"
        ? "invalid_config"
        : r !== "WebTransportError" && n === Ke
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
    function Ye(e, t, n) {
      var r = t != null && t > 0 ? Date.now() - t : -1,
        o = Qe(e),
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
        likelyCause: Xe(o, r),
      };
    }
    function Je(e) {
      return Ze.apply(this, arguments);
    }
    function Ze() {
      return (
        (Ze = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.id,
            n = e.clusterDomain;
          if (!(n != null && Z.has(n))) {
            (n != null && Z.set(n, t),
              o("WALogger").LOG(
                $ ||
                  ($ = babelHelpers.taggedTemplateLiteralLoose([
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
            var a = X.get(t);
            (a == null && ((a = Be(t, e)), X.set(t, a)),
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
                    P ||
                      (P = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [WebTransportConnectionManager] Connection timeout for ",
                        "",
                      ])),
                    t,
                  ),
                  ne ||
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
                  Ue(
                    a,
                    t,
                    o("WAWebVoipWebTransportCallSummary").WtFallbackReason
                      .ConnectionTimeout,
                  ));
              }, o("WAWebVoipRelayConnectionUtils").CONNECTION_TIMEOUT_MS)));
            try {
              var i = He(e);
              if (i == null) {
                (ne ||
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
                  Ue(
                    a,
                    t,
                    o("WAWebVoipWebTransportCallSummary").WtFallbackReason
                      .InvalidConfig,
                  ));
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
              (s.registerStateHandler(ze),
                (a.workerConnectionCreated = !0),
                yield s.connect(t, i, e.ip, e.port, J));
              var c = X.get(t);
              if (
                c == null ||
                c !== a ||
                c.state !==
                  o("WAWebVoipRelayConnectionUtils").ConnectionState
                    .Connecting ||
                c.cleanupRequested ||
                me
              ) {
                (o("WALogger").WARN(
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WebTransportConnectionManager] Connection ",
                      " was cleaned up during establishment, closing worker connection",
                    ])),
                  t,
                ),
                  me ||
                    o(
                      "WAWebVoipWebTransportCallSummary",
                    ).recordWtRelayAttemptComplete(
                      t,
                      o("WAWebVoipWebTransportCallSummary").WtRelayOutcome
                        .Aborted,
                      "cleaned_up",
                    ),
                  me && c === a && !a.cleanupRequested && nt(t),
                  s.close(t));
                return;
              }
              (qe(a),
                (a.state = o(
                  "WAWebVoipRelayConnectionUtils",
                ).ConnectionState.Open),
                (a.stats.connectionReadyTime = Date.now()),
                Y.has(t) && ((se = null), Te()),
                o(
                  "WAWebVoipWebTransportCallSummary",
                ).recordWtRelayAttemptComplete(
                  t,
                  o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Opened,
                  null,
                ),
                o("WALogger").LOG(
                  M ||
                    (M = babelHelpers.taggedTemplateLiteralLoose([
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
                tt(t));
            } catch (e) {
              var m,
                p = Ye(e, a.connectionStartTime, a.workerConnectionCreated);
              if (X.get(t) !== a && p.likelyCause === "aborted") return;
              (o(
                "WAWebVoipWebTransportCallSummary",
              ).recordWtRelayAttemptComplete(
                t,
                (m = ue[p.likelyCause]) != null
                  ? m
                  : o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Failed,
                p.likelyCause,
              ),
                ne ||
                  o(
                    "WAWebCoreActionsODS",
                  ).logCallWebtransportConnectFailByCategory(p.likelyCause));
              var _ = o("WALogger").ERROR(
                w ||
                  (w = babelHelpers.taggedTemplateLiteralLoose([
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
              (!o("WAWebVoipCallStateUtils").isCallTerminal(
                o("WAWebVoipLocalCallStateStore").getLocalCallState(),
              ) &&
                !Me() &&
                p.likelyCause !== "aborted" &&
                _.sendLogs("webtransport-connect-fail"),
                Ue(a, t, et(p.likelyCause)));
            }
          }
        })),
        Ze.apply(this, arguments)
      );
    }
    function et(e) {
      return e === "aborted"
        ? o("WAWebVoipWebTransportCallSummary").WtFallbackReason.Aborted
        : e === "connection_timeout"
          ? o("WAWebVoipWebTransportCallSummary").WtFallbackReason
              .ConnectionTimeout
          : e === "handshake_timeout"
            ? o("WAWebVoipWebTransportCallSummary").WtFallbackReason
                .HandshakeTimeout
            : e === "immediate_reject"
              ? o("WAWebVoipWebTransportCallSummary").WtFallbackReason
                  .ImmediateReject
              : e === "invalid_config"
                ? o("WAWebVoipWebTransportCallSummary").WtFallbackReason
                    .InvalidConfig
                : e === "session_error"
                  ? o("WAWebVoipWebTransportCallSummary").WtFallbackReason
                      .SessionError
                  : e === "stream_error"
                    ? o("WAWebVoipWebTransportCallSummary").WtFallbackReason
                        .StreamError
                    : e === "unknown"
                      ? o("WAWebVoipWebTransportCallSummary").WtFallbackReason
                          .Unknown
                      : (function () {
                          throw Error(
                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                              e,
                          );
                        })();
    }
    function tt(e) {
      var t = X.get(e);
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
    function nt(e) {
      var t = X.get(e);
      if (t != null) {
        (qe(t),
          o("WAWebVoipRelayConnectionUtils").clearPacketBuffer(t.packetBuffer),
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
            rt(t),
          ));
        var n = t.clusterDomain;
        (n != null && Z.get(n) === e && Z.delete(n), X.delete(e));
      }
    }
    function rt(e) {
      return e.stats.droppedPackets + e.localDroppedPackets;
    }
    function ot(e, t) {
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
    function at(e) {
      var t = X.get(e);
      if (!(t == null || t.cleanupRequested)) {
        (o("WALogger").LOG(
          k ||
            (k = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] Cleaning up connection ",
              "",
            ])),
          e,
        ),
          qe(t),
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
        nt(e);
      }
    }
    function it(e, t, n) {
      return lt.apply(this, arguments);
    }
    function lt() {
      return (
        (lt = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            if (!ne) {
              var r = o(
                  "WAWebVoipRelayConnectionUtils",
                ).getConnectionIdentifier(t, n),
                a = X.get(r),
                i = We(r);
              if (a == null) {
                if (i == null) {
                  if (ut(r, e)) return;
                  var l = Array.from(Y.keys()).join(",");
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
                  u = s != null ? Z.get(s) : void 0,
                  c = u != null ? X.get(u) : void 0;
                c != null ? (a = c) : ((a = Be(r, i)), X.set(r, a));
              }
              a.stats.firstSendRequestTime === 0 &&
                (a.stats.firstSendRequestTime = Date.now());
              var d =
                o("WAWebVoipRelayConnectionUtils").inspectPacketType(e) !==
                o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN;
              if (
                (d &&
                  Y.has(r) &&
                  a.state !==
                    o("WAWebVoipRelayConnectionUtils").ConnectionState.Open &&
                  !o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() &&
                  st(),
                a.state ===
                  o("WAWebVoipRelayConnectionUtils").ConnectionState.Open)
              ) {
                var m,
                  p =
                    (m = o(
                      "WAWebVoipWebTransportDataChannelThreadManager",
                    ).getWebTransportDataChannelThread()) == null
                      ? void 0
                      : m.send(
                          a.id,
                          o("WAWebVoipRelayConnectionUtils").copyArrayBuffer(e),
                        );
                p !== !0 && a.localDroppedPackets++;
                return;
              }
              if (!_t(d, a)) {
                var _ = ot(
                  a,
                  o("WAWebVoipRelayConnectionUtils").copyArrayBuffer(e),
                );
                (_ ||
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
                  (a.state ===
                    o("WAWebVoipRelayConnectionUtils").ConnectionState.None ||
                    a.state ===
                      o("WAWebVoipRelayConnectionUtils").ConnectionState
                        .Closed) &&
                    i != null &&
                    Y.has(r) &&
                    Je(i));
              }
            }
          },
        )),
        lt.apply(this, arguments)
      );
    }
    function st() {
      ie || ((ie = !0), ke());
    }
    function ut(e, t) {
      return Y.size > 0 ||
        !o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() ||
        o("WAWebVoipRelayConnectionUtils").inspectPacketType(t) ===
          o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN
        ? !1
        : ct(e, t);
    }
    function ct(e, t) {
      if (j >= U || K + t.byteLength > V) return !1;
      var n = G.get(e),
        r = n == null;
      if (n == null) {
        if (G.size >= q) return !1;
        ((n = o("WAWebVoipRelayConnectionUtils").createPacketBuffer()),
          G.set(e, n));
      }
      var a = n.packets.length,
        i = n.bufferedBytes,
        l = z.droppedPackets;
      return o("WAWebVoipRelayConnectionUtils").bufferPacket(
        n,
        o("WAWebVoipRelayConnectionUtils").copyArrayBuffer(t),
        z,
      )
        ? (z.droppedPackets > l &&
            o("WALogger").WARN(
              T ||
                (T = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransportConnectionManager] Dropped oldest early STUN packet at per-relay limit",
                ])),
            ),
          (j += n.packets.length - a),
          (K += n.bufferedBytes - i),
          Q == null && (Q = window.setTimeout(dt, H)),
          !0)
        : (r && G.delete(e),
          o("WALogger").WARN(
            I ||
              (I = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Dropped oversized early STUN packet",
              ])),
          ),
          !1);
    }
    function dt() {
      (Q != null && (window.clearTimeout(Q), (Q = null)),
        G.clear(),
        (z = o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats()),
        (j = 0),
        (K = 0));
    }
    function mt() {
      for (var e of G) {
        var t = e[0],
          n = e[1],
          r = Y.get(t);
        if (r != null) {
          ((j -= n.packets.length), (K -= n.bufferedBytes));
          for (
            var a = o("WAWebVoipRelayConnectionUtils").shiftPacket(n);
            a != null;
          )
            (it(a, r.ip, r.port),
              (a = o("WAWebVoipRelayConnectionUtils").shiftPacket(n)));
          G.delete(t);
        }
      }
      G.size === 0 && Q != null && (window.clearTimeout(Q), (Q = null));
    }
    function pt() {
      var e = !1;
      re = !0;
      try {
        for (var t of Y.values()) {
          var n = t.clusterDomain,
            r = n != null && Ge(n) ? n : null,
            o = n != null ? n : t.id;
          ee.has(o) ||
            (r != null && te.size >= B) ||
            (ee.add(o), r != null && te.add(r), (e = !0), Je(t));
        }
      } finally {
        re = !1;
      }
      var a = se;
      !e || a == null || Me() || we() || Fe(a);
    }
    function _t(e, t) {
      return t.state ===
        o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed
        ? (e &&
            Fe(
              o("WAWebVoipWebTransportCallSummary").WtFallbackReason
                .SendOnFailedConnection,
            ),
          t.localDroppedPackets++,
          !0)
        : e
          ? !1
          : (t.localDroppedPackets++, !0);
    }
    function ft(e) {
      var t;
      (o("WALogger").LOG(
        D ||
          (D = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Received relay list update",
          ])),
      ),
        (_e = e));
      var n = o("WAWebVoipRelayConnectionUtils").extractRelayConnectionMap(e);
      ht(n) && o("WAWebCoreActionsODS").logCallWebtransportRelaysIpv6Only();
      var r = gt(n),
        a = new Set();
      for (var i of r.values()) {
        var l = i.clusterDomain;
        l != null && a.add(l);
      }
      var s = 0;
      for (var u of X) {
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
            (Z.get(p) === c && Z.delete(p), at(c));
            continue;
          }
          s++;
        }
      }
      (J++,
        (Y = r),
        Pe(),
        (t = o(
          "WAWebVoipWebTransportDataChannelThreadManager",
        ).getWebTransportDataChannelThread()) == null ||
          t.resetDatagramHealth(J),
        o("WAWebVoipCallStateUtils").isCallTerminal(
          o("WAWebVoipLocalCallStateStore").getLocalCallState(),
        )
          ? (ae = !0)
          : ve());
    }
    function gt(e) {
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
    function ht(e) {
      if (e.size === 0) return !1;
      for (var t of e.values()) if (!t.isIPv6) return !1;
      return !0;
    }
    function yt() {
      ((oe = !1), Te(), (ne = !0));
    }
    function Ct() {
      var e = Array.from(X.values()),
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
        n = t.slice(0, O).map(function (e) {
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
                String(rt(e)) +
                ")"
            : n + ",stats=offthread,droppedPackets=" + String(rt(e)) + ")";
        });
      return "total=" + String(e.length) + ";" + (n.join("|") || "none");
    }
    function bt(e) {
      (e === void 0 && (e = !0),
        o("WALogger").LOG(
          x ||
            (x = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] Closing all connections",
            ])),
        ));
      for (var t of Array.from(X.keys())) at(t);
      var n = o(
        "WAWebVoipWebTransportDataChannelThreadManager",
      ).stopWebTransportDataChannelWorker();
      (n.finally(function () {
        for (var e of X) {
          var t = e[0],
            n = e[1];
          n.cleanupRequested && nt(t);
        }
      }),
        Y.clear(),
        (ae = !1),
        ee.clear(),
        te.clear(),
        dt(),
        Z.clear(),
        Ie(),
        Te(),
        ne && ($e(), (me = !1), (pe = !1), (_e = null)),
        e && o("WAWebVoipWebTransportCallSummary").markWtCallSummaryClosed(),
        o("WAWebVoipTsLogger").cleanup(),
        (ne = !1));
    }
    ((l.registerFallbackHandler = fe),
      (l.registerHealthyHandler = ge),
      (l.resetFallbackStateForNewCall = he),
      (l.resolvePendingFastSetupForNewCall = Ce),
      (l.handleCallAccepted = be),
      (l.registerPacketHandler = Oe),
      (l.sendData = it),
      (l.handleRelayListUpdate = ft),
      (l.prepareForEndCall = yt),
      (l.getWebTransportRelayDebugSummary = Ct),
      (l.closeAllConnections = bt));
  },
  98,
);
