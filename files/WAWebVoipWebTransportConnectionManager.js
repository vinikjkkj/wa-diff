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
    "justknobx",
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
      W = 8,
      q = 3,
      U = 500,
      V = 8,
      H = 32,
      G = 32 * 1024,
      z = 1e3,
      j = new Map(),
      K = o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats(),
      Q = 0,
      X = 0,
      Y = null,
      J = new Map(),
      Z = new Map(),
      ee = 0,
      te = new Map(),
      ne = new Set(),
      re = new Set(),
      oe = !1,
      ae = !1,
      ie = !1,
      le = !1,
      se = !1,
      ue = !1,
      ce = null,
      de = {
        aborted: o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Aborted,
        handshake_timeout: o("WAWebVoipWebTransportCallSummary").WtRelayOutcome
          .Timeout,
        connection_timeout: o("WAWebVoipWebTransportCallSummary").WtRelayOutcome
          .Timeout,
      },
      me = null,
      pe = null,
      _e = !1,
      fe = !1,
      ge = null;
    function he(t) {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Fallback handler registered",
          ])),
      ),
        (me = t));
    }
    function ye(e) {
      pe = e;
    }
    function Ce() {
      (Ne(),
        xe(),
        yt(),
        be(),
        (ie = !0),
        ne.clear(),
        re.clear(),
        (ue = !1),
        (ce = null),
        (_e = !1),
        (Ie = !1),
        (fe = !1),
        o("WAWebVoipGatingUtils").resetWebTransportFallbackState());
    }
    function be() {
      if (J.size > 0) {
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
        for (var e of Array.from(J.keys())) mt(e);
      }
      (te.clear(), ne.clear(), re.clear(), le || (Z.clear(), (ge = null)));
    }
    function ve(e) {
      if (le) {
        if (((le = !1), !e)) {
          (Z.clear(), (ge = null));
          return;
        }
        Re();
      }
    }
    function Se() {
      if (((ue = !0), !Ae())) {
        if (Fe()) {
          $e();
          return;
        }
        var e = ce;
        e != null && Be(e, !0);
      }
    }
    function Re() {
      oe ||
        !ie ||
        _e ||
        !o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() ||
        (bt(), Ct(), $e());
    }
    var Le = null,
      Ee = null,
      ke = !1,
      Ie = !1;
    function Te() {
      if (!(ke || Le != null)) {
        var e = U;
        (o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] WebTransport SCTP-fallback timeout armed at ",
              "ms",
            ])),
          e,
        ),
          (Le = window.setTimeout(function () {
            return we(e);
          }, e)));
      }
    }
    function De() {
      Le != null && (window.clearTimeout(Le), (Le = null));
    }
    function xe() {
      Ee != null && (window.clearTimeout(Ee), (Ee = null));
    }
    function $e() {
      if (
        !(
          !o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() ||
          _e ||
          Ae() ||
          !Fe()
        )
      ) {
        var e = U;
        Ee == null &&
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] WebTransport readiness timeout armed at ",
                "ms",
              ])),
            e,
          ),
          (Ee = window.setTimeout(function () {
            ((Ee = null),
              Pe(
                e,
                ue
                  ? o("WAWebVoipWebTransportCallSummary").WtFallbackReason
                      .NoReadyAfterAcceptTimeout
                  : o("WAWebVoipWebTransportCallSummary").WtFallbackReason
                      .NoReadyDuringRingingTimeout,
              ));
          }, e)));
      }
    }
    function Pe(e, t) {
      if (!Ae()) {
        var n = [];
        for (var r of J) {
          var a = r[0],
            i = r[1];
          Z.has(a) &&
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
          Be(t, !0, function () {
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
    function Ne() {
      Me();
    }
    function Me() {
      (De(), (ke = !1), (se = !1));
    }
    function we(e) {
      Le = null;
      var t = [];
      for (var n of J) {
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
        Be(
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
    function Ae() {
      for (var e of J) {
        var t = e[0],
          n = e[1];
        if (
          Z.has(t) &&
          n.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open
        )
          return !0;
      }
      return !1;
    }
    function Fe() {
      for (var e of J) {
        var t = e[0],
          n = e[1];
        if (
          Z.has(t) &&
          n.state ===
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting &&
          !n.cleanupRequested
        )
          return !0;
      }
      return !1;
    }
    function Oe(e) {
      return e
        ? !1
        : ae
          ? (o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransportConnectionManager] Skipping fallback: current relay preconnect pass is still starting sibling attempts",
                ])),
            ),
            !0)
          : Ae()
            ? (o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportConnectionManager] Skipping fallback: another current WT connection still open",
                  ])),
              ),
              !0)
            : o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() &&
                !ke &&
                Fe()
              ? (o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WebTransportConnectionManager] Skipping fallback: another current WT connection still connecting",
                    ])),
                ),
                !0)
              : !1;
    }
    function Be(e, t, n) {
      if ((t === void 0 && (t = !1), oe))
        return (
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Skipping fallback: tearing down",
              ])),
          ),
          !1
        );
      if (_e)
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
      if (Oe(t)) return !1;
      var a = me;
      if (a == null)
        return (
          fe ||
            ((fe = !0),
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
      ((_e = !0),
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
        a(ge);
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
    function We(e) {}
    function qe(e, t) {
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
        workerOversizedPackets: 0,
        workerOversizedBytes: 0,
        workerMaxDatagramSize: null,
        connectionStartTime: 0,
        relayId: t.relayId,
        relayIp: t.ip,
        relayPort: t.port,
        clusterDomain: (n = t.clusterDomain) != null ? n : null,
        relayConnectionInfo: t,
      };
    }
    function Ue(e) {
      var t,
        n = Z.get(e);
      return n != null
        ? n
        : (t = J.get(e)) == null
          ? void 0
          : t.relayConnectionInfo;
    }
    function Ve(e) {
      e.connectionTimeout != null &&
        (window.clearTimeout(e.connectionTimeout),
        (e.connectionTimeout = null));
    }
    function He(e, t, n) {
      var r,
        a = Z.has(t);
      if (
        (Ve(e),
        (r = o(
          "WAWebVoipWebTransportDataChannelThreadManager",
        ).getWebTransportDataChannelThread()) == null || r.close(t),
        (e.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed),
        !oe)
      ) {
        o("WAWebCoreActionsODS").logCallWebtransportConnectFailed();
        var i = e.clusterDomain;
        i != null &&
          o("WAWebVoipTsLogger").logWebtransportConnectionFailed(
            "https://" + i + "/webtransport",
          );
      }
      var l = e.clusterDomain;
      l != null && te.get(l) === t && te.delete(l);
      var s = J.get(t) === e;
      (s && J.delete(t), a && s && ((ce = n), Be(n)));
    }
    var Ge = /^wt\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.fna\.whatsapp\.net$/i;
    function ze(e) {
      var t = e.authToken,
        n = e.clusterDomain,
        r = e.token;
      if (n == null || !je(n))
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
    function je(e) {
      return e.endsWith(".whatsapp.com") || Ge.test(e);
    }
    function Ke(e) {
      var t = J.get(e.connectionId);
      if (t != null) {
        if (e.event === "first_stun_datagram_sent") {
          Z.has(e.connectionId) && e.relayGeneration === ee && ft();
          return;
        }
        if (e.event === "first_relay_datagram_sent") {
          Z.has(e.connectionId) &&
            e.relayGeneration === ee &&
            o("WAWebVoipWebTransportCallSummary").recordWtRelayTrafficSent();
          return;
        }
        if (e.event === "first_datagram") {
          Z.has(e.connectionId) &&
            e.relayGeneration === ee &&
            !ke &&
            ((ke = !0),
            xe(),
            De(),
            !_e && !Ie && ((Ie = !0), pe == null || pe()));
          return;
        }
        if (e.stats != null) {
          var n, r, a;
          ((t.stats.sentPackets = e.stats.sentPackets),
            (t.stats.sentBytes = e.stats.sentBytes),
            (t.stats.receivedPackets = e.stats.receivedPackets),
            (t.stats.receivedBytes = e.stats.receivedBytes),
            (t.stats.droppedPackets = e.stats.droppedPackets),
            (t.workerOversizedPackets =
              (n = e.stats.oversizedPackets) != null ? n : 0),
            (t.workerOversizedBytes =
              (r = e.stats.oversizedBytes) != null ? r : 0),
            (t.workerMaxDatagramSize =
              (a = e.stats.maxDatagramSize) != null ? a : null));
        }
        var i = t.clusterDomain;
        if (
          (i != null && te.get(i) === e.connectionId && te.delete(i),
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
            t.cleanupRequested && ut(e.connectionId));
          return;
        }
        if (e.event === "error") {
          var l, s;
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
              (l = (s = e.error) == null ? void 0 : s.message) != null
                ? l
                : "unknown",
            ),
            Z.has(e.connectionId))
          ) {
            var u,
              c = Qe((u = e.error) == null ? void 0 : u.source);
            ((ce = c), Be(c));
          } else ut(e.connectionId);
        }
      }
    }
    function Qe(e) {
      return e === "session"
        ? o("WAWebVoipWebTransportCallSummary").WtFallbackReason.SessionError
        : e === "stream"
          ? o("WAWebVoipWebTransportCallSummary").WtFallbackReason.StreamError
          : o("WAWebVoipWebTransportCallSummary").WtFallbackReason.WorkerError;
    }
    var Xe = "WebTransport connect aborted";
    function Ye(e) {
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
    function Je(e, t) {
      var n = e.errorMessage,
        r = e.errorName,
        o = e.wtHasStreamErrorCode,
        a = e.wtSource;
      return r === "NotSupportedError"
        ? "invalid_config"
        : r !== "WebTransportError" && n === Xe
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
    function Ze(e, t, n) {
      var r = t != null && t > 0 ? Date.now() - t : -1,
        o = Ye(e),
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
        likelyCause: Je(o, r),
      };
    }
    var et = 512,
      tt = 64;
    function nt(e, t) {
      return e > 0 ? e : t;
    }
    function rt() {
      return {
        rejectOversizedDatagrams: ot(),
        incomingMaxBufferedDatagrams: nt(r("justknobx")._("6438"), et),
        outgoingMaxBufferedDatagrams: nt(r("justknobx")._("6439"), tt),
        outgoingMaxAgeMs: Math.max(0, r("justknobx")._("6440")),
      };
    }
    function ot() {
      try {
        return r("justknobx")._("3387");
      } catch (e) {
        return (
          o("WALogger").WARN(
            E ||
              (E = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] oversized-datagram JK unavailable, using fallback=true: ",
                "",
              ])),
            r("getErrorSafe")(e).message,
          ),
          !0
        );
      }
    }
    function at(e) {
      return it.apply(this, arguments);
    }
    function it() {
      return (
        (it = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.id,
            n = e.clusterDomain;
          if (!(n != null && te.has(n))) {
            (n != null && te.set(n, t),
              o("WALogger").LOG(
                N ||
                  (N = babelHelpers.taggedTemplateLiteralLoose([
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
            var a = J.get(t);
            (a == null && ((a = qe(t, e)), J.set(t, a)),
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
                    M ||
                      (M = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [WebTransportConnectionManager] Connection timeout for ",
                        "",
                      ])),
                    t,
                  ),
                  oe ||
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
                  He(
                    a,
                    t,
                    o("WAWebVoipWebTransportCallSummary").WtFallbackReason
                      .ConnectionTimeout,
                  ));
              }, o("WAWebVoipRelayConnectionUtils").CONNECTION_TIMEOUT_MS)));
            try {
              var i = ze(e);
              if (i == null) {
                (oe ||
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
                  He(
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
              (s.registerStateHandler(Ke),
                (a.workerConnectionCreated = !0),
                yield s.connect(t, i, e.ip, e.port, ee, rt()));
              var c = J.get(t);
              if (
                c == null ||
                c !== a ||
                c.state !==
                  o("WAWebVoipRelayConnectionUtils").ConnectionState
                    .Connecting ||
                c.cleanupRequested ||
                _e
              ) {
                (o("WALogger").WARN(
                  w ||
                    (w = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WebTransportConnectionManager] Connection ",
                      " was cleaned up during establishment, closing worker connection",
                    ])),
                  t,
                ),
                  _e ||
                    o(
                      "WAWebVoipWebTransportCallSummary",
                    ).recordWtRelayAttemptComplete(
                      t,
                      o("WAWebVoipWebTransportCallSummary").WtRelayOutcome
                        .Aborted,
                      "cleaned_up",
                    ),
                  _e && c === a && !a.cleanupRequested && ut(t),
                  s.close(t));
                return;
              }
              (Ve(a),
                (a.state = o(
                  "WAWebVoipRelayConnectionUtils",
                ).ConnectionState.Open),
                (a.stats.connectionReadyTime = Date.now()),
                Z.has(t) && ((ce = null), xe()),
                o(
                  "WAWebVoipWebTransportCallSummary",
                ).recordWtRelayAttemptComplete(
                  t,
                  o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Opened,
                  null,
                ),
                o("WALogger").LOG(
                  A ||
                    (A = babelHelpers.taggedTemplateLiteralLoose([
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
                st(t));
            } catch (e) {
              var m,
                p = Ze(e, a.connectionStartTime, a.workerConnectionCreated);
              if (J.get(t) !== a && p.likelyCause === "aborted") return;
              (o(
                "WAWebVoipWebTransportCallSummary",
              ).recordWtRelayAttemptComplete(
                t,
                (m = de[p.likelyCause]) != null
                  ? m
                  : o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Failed,
                p.likelyCause,
              ),
                oe ||
                  o(
                    "WAWebCoreActionsODS",
                  ).logCallWebtransportConnectFailByCategory(p.likelyCause));
              var _ = o("WALogger").ERROR(
                F ||
                  (F = babelHelpers.taggedTemplateLiteralLoose([
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
                !Ae() &&
                p.likelyCause !== "aborted" &&
                _.sendLogs("webtransport-connect-fail"),
                He(a, t, lt(p.likelyCause)));
            }
          }
        })),
        it.apply(this, arguments)
      );
    }
    function lt(e) {
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
    function st(e) {
      var t = J.get(e);
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
    function ut(e) {
      var t = J.get(e);
      if (t != null) {
        if (
          (Ve(t),
          o("WAWebVoipRelayConnectionUtils").clearPacketBuffer(t.packetBuffer),
          o("WALogger").LOG(
            k ||
              (k = babelHelpers.taggedTemplateLiteralLoose([
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
            ct(t),
          ),
          t.workerOversizedPackets > 0)
        ) {
          var n;
          o("WALogger").LOG(
            I ||
              (I = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Connection ",
                " oversized datagrams - dropped: ",
                " (",
                " bytes), max size: ",
                "",
              ])),
            e,
            t.workerOversizedPackets,
            t.workerOversizedBytes,
            (n = t.workerMaxDatagramSize) != null ? n : "unknown",
          );
        }
        var r = t.clusterDomain;
        (r != null && te.get(r) === e && te.delete(r), J.delete(e));
      }
    }
    function ct(e) {
      return e.stats.droppedPackets + e.localDroppedPackets;
    }
    function dt(e, t) {
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
    function mt(e) {
      var t = J.get(e);
      if (!(t == null || t.cleanupRequested)) {
        (o("WALogger").LOG(
          T ||
            (T = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] Cleaning up connection ",
              "",
            ])),
          e,
        ),
          Ve(t),
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
        ut(e);
      }
    }
    function pt(e, t, n) {
      return _t.apply(this, arguments);
    }
    function _t() {
      return (
        (_t = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            if (!oe) {
              var r = o(
                  "WAWebVoipRelayConnectionUtils",
                ).getConnectionIdentifier(t, n),
                a = J.get(r),
                i = Ue(r);
              if (a == null) {
                if (i == null) {
                  if (gt(r, e)) return;
                  var l = Array.from(Z.keys()).join(",");
                  o("WALogger").LOG(
                    O ||
                      (O = babelHelpers.taggedTemplateLiteralLoose([
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
                  u = s != null ? te.get(s) : void 0,
                  c = u != null ? J.get(u) : void 0;
                c != null ? (a = c) : ((a = qe(r, i)), J.set(r, a));
              }
              a.stats.firstSendRequestTime === 0 &&
                (a.stats.firstSendRequestTime = Date.now());
              var d =
                o("WAWebVoipRelayConnectionUtils").inspectPacketType(e) !==
                o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN;
              if (
                (d &&
                  Z.has(r) &&
                  a.state !==
                    o("WAWebVoipRelayConnectionUtils").ConnectionState.Open &&
                  !o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() &&
                  ft(),
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
              if (!vt(d, a)) {
                var _ = dt(
                  a,
                  o("WAWebVoipRelayConnectionUtils").copyArrayBuffer(e),
                );
                (_ ||
                  o("WALogger").WARN(
                    B ||
                      (B = babelHelpers.taggedTemplateLiteralLoose([
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
                    Z.has(r) &&
                    at(i));
              }
            }
          },
        )),
        _t.apply(this, arguments)
      );
    }
    function ft() {
      se || ((se = !0), Te());
    }
    function gt(e, t) {
      return Z.size > 0 ||
        !o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() ||
        o("WAWebVoipRelayConnectionUtils").inspectPacketType(t) ===
          o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN
        ? !1
        : ht(e, t);
    }
    function ht(e, t) {
      if (Q >= H || X + t.byteLength > G) return !1;
      var n = j.get(e),
        r = n == null;
      if (n == null) {
        if (j.size >= V) return !1;
        ((n = o("WAWebVoipRelayConnectionUtils").createPacketBuffer()),
          j.set(e, n));
      }
      var a = n.packets.length,
        i = n.bufferedBytes,
        l = K.droppedPackets;
      return o("WAWebVoipRelayConnectionUtils").bufferPacket(
        n,
        o("WAWebVoipRelayConnectionUtils").copyArrayBuffer(t),
        K,
      )
        ? (K.droppedPackets > l &&
            o("WALogger").WARN(
              x ||
                (x = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransportConnectionManager] Dropped oldest early STUN packet at per-relay limit",
                ])),
            ),
          (Q += n.packets.length - a),
          (X += n.bufferedBytes - i),
          Y == null && (Y = window.setTimeout(yt, z)),
          !0)
        : (r && j.delete(e),
          o("WALogger").WARN(
            D ||
              (D = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Dropped oversized early STUN packet",
              ])),
          ),
          !1);
    }
    function yt() {
      (Y != null && (window.clearTimeout(Y), (Y = null)),
        j.clear(),
        (K = o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats()),
        (Q = 0),
        (X = 0));
    }
    function Ct() {
      for (var e of j) {
        var t = e[0],
          n = e[1],
          r = Z.get(t);
        if (r != null) {
          ((Q -= n.packets.length), (X -= n.bufferedBytes));
          for (
            var a = o("WAWebVoipRelayConnectionUtils").shiftPacket(n);
            a != null;
          )
            (pt(a, r.ip, r.port),
              (a = o("WAWebVoipRelayConnectionUtils").shiftPacket(n)));
          j.delete(t);
        }
      }
      j.size === 0 && Y != null && (window.clearTimeout(Y), (Y = null));
    }
    function bt() {
      var e = !1;
      ae = !0;
      try {
        for (var t of Z.values()) {
          var n = t.clusterDomain,
            r = n != null && je(n) ? n : null,
            o = n != null ? n : t.id;
          ne.has(o) ||
            (r != null && re.size >= q) ||
            (ne.add(o), r != null && re.add(r), (e = !0), at(t));
        }
      } finally {
        ae = !1;
      }
      var a = ce;
      !e || a == null || Ae() || Fe() || Be(a);
    }
    function vt(e, t) {
      return t.state ===
        o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed
        ? (e &&
            Be(
              o("WAWebVoipWebTransportCallSummary").WtFallbackReason
                .SendOnFailedConnection,
            ),
          t.localDroppedPackets++,
          !0)
        : e
          ? !1
          : (t.localDroppedPackets++, !0);
    }
    function St(e) {
      var t;
      (o("WALogger").LOG(
        $ ||
          ($ = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Received relay list update",
          ])),
      ),
        (ge = e));
      var n = o("WAWebVoipRelayConnectionUtils").extractRelayConnectionMap(e);
      Lt(n) && o("WAWebCoreActionsODS").logCallWebtransportRelaysIpv6Only();
      var r = Rt(n),
        a = new Set();
      for (var i of r.values()) {
        var l = i.clusterDomain;
        l != null && a.add(l);
      }
      var s = 0;
      for (var u of J) {
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
            (te.get(p) === c && te.delete(p), mt(c));
            continue;
          }
          s++;
        }
      }
      (ee++,
        (Z = r),
        Me(),
        (t = o(
          "WAWebVoipWebTransportDataChannelThreadManager",
        ).getWebTransportDataChannelThread()) == null ||
          t.resetDatagramHealth(ee),
        o("WAWebVoipCallStateUtils").isCallTerminal(
          o("WAWebVoipLocalCallStateStore").getLocalCallState(),
        )
          ? (le = !0)
          : Re());
    }
    function Rt(e) {
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
    function Lt(e) {
      if (e.size === 0) return !1;
      for (var t of e.values()) if (!t.isIPv6) return !1;
      return !0;
    }
    function Et() {
      ((ie = !1), xe(), (oe = !0));
    }
    function kt() {
      var e = Array.from(J.values()),
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
        n = t.slice(0, W).map(function (e) {
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
                String(ct(e)) +
                ")"
            : n + ",stats=offthread,droppedPackets=" + String(ct(e)) + ")";
        });
      return "total=" + String(e.length) + ";" + (n.join("|") || "none");
    }
    function It(e) {
      (e === void 0 && (e = !0),
        o("WALogger").LOG(
          P ||
            (P = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] Closing all connections",
            ])),
        ));
      for (var t of Array.from(J.keys())) mt(t);
      var n = o(
        "WAWebVoipWebTransportDataChannelThreadManager",
      ).stopWebTransportDataChannelWorker();
      (n.finally(function () {
        for (var e of J) {
          var t = e[0],
            n = e[1];
          n.cleanupRequested && ut(t);
        }
      }),
        Z.clear(),
        (le = !1),
        ne.clear(),
        re.clear(),
        yt(),
        te.clear(),
        (Ie = !1),
        De(),
        xe(),
        oe && (Ne(), (_e = !1), (fe = !1), (ge = null)),
        e && o("WAWebVoipWebTransportCallSummary").markWtCallSummaryClosed(),
        o("WAWebVoipTsLogger").cleanup(),
        (oe = !1));
    }
    ((l.registerFallbackHandler = he),
      (l.registerHealthyHandler = ye),
      (l.resetFallbackStateForNewCall = Ce),
      (l.resolvePendingFastSetupForNewCall = ve),
      (l.handleCallAccepted = Se),
      (l.registerPacketHandler = We),
      (l.sendData = pt),
      (l.handleRelayListUpdate = St),
      (l.prepareForEndCall = Et),
      (l.getWebTransportRelayDebugSummary = kt),
      (l.closeAllConnections = It));
  },
  98,
);
