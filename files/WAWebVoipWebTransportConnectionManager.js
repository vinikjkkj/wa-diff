__d(
  "WAWebVoipWebTransportConnectionManager",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebCoreActionsODS",
    "WAWebNoop",
    "WAWebVoipCallStateUtils",
    "WAWebVoipGatingUtils",
    "WAWebVoipLocalCallStateStore",
    "WAWebVoipRelayConnectionUtils",
    "WAWebVoipTsLogger",
    "WAWebVoipWaCallEnums",
    "WAWebVoipWebTransportCallSummary",
    "WAWebVoipWebTransportDataChannelThreadManager",
    "WAWebVoipWebTransportDlProbeODS",
    "WAWebVoipWebTransportSessionEndODS",
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
      W,
      q,
      U = 8,
      V = 3,
      H = 500,
      G = 8,
      z = 32,
      j = 32 * 1024,
      K = 1e3,
      Q = new Map(),
      X = o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats(),
      Y = 0,
      J = 0,
      Z = null,
      ee = new Map(),
      te = new Map(),
      ne = 0,
      re = new Map(),
      oe = new Set(),
      ae = new Set(),
      ie = !1,
      le = !1,
      se = !1,
      ue = !1,
      ce = !1,
      de = !1,
      me = null,
      pe = {
        aborted: o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Aborted,
        handshake_timeout: o("WAWebVoipWebTransportCallSummary").WtRelayOutcome
          .Timeout,
        connection_timeout: o("WAWebVoipWebTransportCallSummary").WtRelayOutcome
          .Timeout,
      },
      _e = null,
      fe = null,
      ge = !1,
      he = !1,
      ye = null;
    function Ce(t) {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Fallback handler registered",
          ])),
      ),
        (_e = t));
    }
    function be(e) {
      fe = e;
    }
    function ve() {
      (we(),
        Pe(),
        xt(),
        Se(),
        (se = !0),
        oe.clear(),
        ae.clear(),
        (de = !1),
        (me = null),
        (ge = !1),
        (De = !1),
        (he = !1),
        o("WAWebVoipGatingUtils").resetWebTransportFallbackState());
    }
    function Se() {
      if (ee.size > 0) {
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
        for (var e of Array.from(ee.keys())) Rt(e);
      }
      (re.clear(), oe.clear(), ae.clear(), ue || (te.clear(), (ye = null)));
    }
    function Re(e) {
      if (ue) {
        if (((ue = !1), !e)) {
          (te.clear(), (ye = null));
          return;
        }
        Ee();
      }
    }
    function Le() {
      if (((de = !0), !Oe())) {
        if (Be()) {
          Ne();
          return;
        }
        var e = me;
        e != null && qe(e, !0);
      }
    }
    function Ee() {
      ie ||
        !se ||
        ge ||
        !o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() ||
        (Pt(), $t(), Ne());
    }
    var ke = null,
      Ie = null,
      Te = !1,
      De = !1;
    function xe() {
      if (!(Te || ke != null)) {
        var e = H;
        (o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] WebTransport SCTP-fallback timeout armed at ",
              "ms",
            ])),
          e,
        ),
          (ke = window.setTimeout(function () {
            return Fe(e);
          }, e)));
      }
    }
    function $e() {
      ke != null && (window.clearTimeout(ke), (ke = null));
    }
    function Pe() {
      Ie != null && (window.clearTimeout(Ie), (Ie = null));
    }
    function Ne() {
      if (
        !(
          !o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() ||
          ge ||
          Oe() ||
          !Be()
        )
      ) {
        var e = H;
        Ie == null &&
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] WebTransport readiness timeout armed at ",
                "ms",
              ])),
            e,
          ),
          (Ie = window.setTimeout(function () {
            ((Ie = null),
              Me(
                e,
                de
                  ? o("WAWebVoipWebTransportCallSummary").WtFallbackReason
                      .NoReadyAfterAcceptTimeout
                  : o("WAWebVoipWebTransportCallSummary").WtFallbackReason
                      .NoReadyDuringRingingTimeout,
              ));
          }, e)));
      }
    }
    function Me(e, t) {
      if (!Oe()) {
        var n = [];
        for (var r of ee) {
          var a = r[0],
            i = r[1];
          te.has(a) &&
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
          qe(t, !0, function () {
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
    function we() {
      Ae();
    }
    function Ae() {
      ($e(), (Te = !1), (ce = !1));
    }
    function Fe(e) {
      ke = null;
      var t = [];
      for (var n of ee) {
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
        qe(
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
    function Oe() {
      for (var e of ee) {
        var t = e[0],
          n = e[1];
        if (
          te.has(t) &&
          n.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open
        )
          return !0;
      }
      return !1;
    }
    function Be() {
      for (var e of ee) {
        var t = e[0],
          n = e[1];
        if (
          te.has(t) &&
          n.state ===
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting &&
          !n.cleanupRequested
        )
          return !0;
      }
      return !1;
    }
    function We(e) {
      return e
        ? !1
        : le
          ? (o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransportConnectionManager] Skipping fallback: current relay preconnect pass is still starting sibling attempts",
                ])),
            ),
            !0)
          : Oe()
            ? (o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportConnectionManager] Skipping fallback: another current WT connection still open",
                  ])),
              ),
              !0)
            : o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() &&
                !Te &&
                Be()
              ? (o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WebTransportConnectionManager] Skipping fallback: another current WT connection still connecting",
                    ])),
                ),
                !0)
              : !1;
    }
    function qe(e, t, n) {
      if ((t === void 0 && (t = !1), ie))
        return (
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Skipping fallback: tearing down",
              ])),
          ),
          !1
        );
      if (ge)
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
      if (We(t)) return !1;
      var a = _e;
      if (a == null)
        return (
          he ||
            ((he = !0),
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
      ((ge = !0),
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
        a(ye);
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
    function Ue(e) {}
    function Ve(e, t) {
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
        workerOversizedMediaPackets: 0,
        workerOversizedStunPackets: 0,
        workerOversizedStunBeforeFirstStun: 0,
        workerNativeRingPackets: 0,
        workerNativeRingDroppedPackets: 0,
        workerMaxDatagramSize: null,
        workerStats: null,
        connectionStartTime: 0,
        relayId: t.relayId,
        relayIp: t.ip,
        relayPort: t.port,
        clusterDomain: (n = t.clusterDomain) != null ? n : null,
        relayConnectionInfo: t,
      };
    }
    function He(e) {
      var t,
        n = te.get(e);
      return n != null
        ? n
        : (t = ee.get(e)) == null
          ? void 0
          : t.relayConnectionInfo;
    }
    function Ge(e) {
      e.connectionTimeout != null &&
        (window.clearTimeout(e.connectionTimeout),
        (e.connectionTimeout = null));
    }
    function ze(e, t, n) {
      var r,
        a = te.has(t);
      if (
        (Ge(e),
        (r = o(
          "WAWebVoipWebTransportDataChannelThreadManager",
        ).getWebTransportDataChannelThread()) == null || r.close(t),
        (e.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed),
        !ie)
      ) {
        o("WAWebCoreActionsODS").logCallWebtransportConnectFailed();
        var i = e.clusterDomain;
        i != null &&
          o("WAWebVoipTsLogger").logWebtransportConnectionFailed(
            "https://" + i + "/webtransport",
          );
      }
      var l = e.clusterDomain;
      l != null && re.get(l) === t && re.delete(l);
      var s = ee.get(t) === e;
      (s && ee.delete(t), a && s && ((me = n), qe(n)));
    }
    var je = /^wt\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.fna\.whatsapp\.net$/i;
    function Ke(e) {
      var t = e.authToken,
        n = e.clusterDomain,
        r = e.token;
      if (n == null || !Qe(n))
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
    function Qe(e) {
      return e.endsWith(".whatsapp.com") || je.test(e);
    }
    function Xe(e) {
      var t = ee.get(e.connectionId);
      if (t != null) {
        if (e.event === "first_stun_datagram_sent") {
          te.has(e.connectionId) && e.relayGeneration === ne && It();
          return;
        }
        if (e.event === "first_relay_datagram_sent") {
          te.has(e.connectionId) &&
            e.relayGeneration === ne &&
            o("WAWebVoipWebTransportCallSummary").recordWtRelayTrafficSent();
          return;
        }
        if (e.event === "first_datagram") {
          te.has(e.connectionId) &&
            e.relayGeneration === ne &&
            !Te &&
            ((Te = !0),
            Pe(),
            $e(),
            !ge && !De && ((De = !0), fe == null || fe()));
          return;
        }
        if (e.stats != null) {
          var n, r, a, i, l, s;
          ((t.stats.sentPackets = e.stats.sentPackets),
            (t.stats.sentBytes = e.stats.sentBytes),
            (t.stats.receivedPackets = e.stats.receivedPackets),
            (t.stats.receivedBytes = e.stats.receivedBytes),
            (t.stats.droppedPackets = e.stats.droppedPackets),
            (t.workerOversizedMediaPackets =
              (n = e.stats.oversizedMediaPackets) != null ? n : 0),
            (t.workerOversizedStunPackets =
              (r = e.stats.oversizedStunPackets) != null ? r : 0),
            (t.workerOversizedStunBeforeFirstStun =
              (a = e.stats.oversizedStunBeforeFirstStun) != null ? a : 0),
            (t.workerNativeRingPackets =
              (i = e.stats.nativeRingPackets) != null ? i : 0),
            (t.workerNativeRingDroppedPackets =
              (l = e.stats.nativeRingDroppedPackets) != null ? l : 0),
            (t.workerMaxDatagramSize =
              (s = e.stats.maxDatagramSize) != null ? s : null),
            (t.workerStats = e.stats));
        }
        var u = t.clusterDomain;
        if (
          (u != null && re.get(u) === e.connectionId && re.delete(u),
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
            t.cleanupRequested && bt(e.connectionId));
          return;
        }
        if (e.event === "error") {
          var c,
            d,
            m =
              t.state ===
              o("WAWebVoipRelayConnectionUtils").ConnectionState.Open;
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
              (c = (d = e.error) == null ? void 0 : d.message) != null
                ? c
                : "unknown",
            ),
            m &&
              te.has(e.connectionId) &&
              Ye(o("WAWebVoipLocalCallStateStore").getLocalCallState()))
          ) {
            var p, _, f;
            o(
              "WAWebVoipWebTransportSessionEndODS",
            ).logCallWebtransportSessionEnd(
              o(
                "WAWebVoipWebTransportSessionEndODS",
              ).classifyWebtransportSessionEnd(
                (p = e.error) == null ? void 0 : p.source,
                (_ = e.error) == null ? void 0 : _.message,
              ),
              (f = e.error) == null ? void 0 : f.sinceLastDatagramMs,
            );
          }
          if (te.has(e.connectionId)) {
            var g,
              h = Je((g = e.error) == null ? void 0 : g.source);
            ((me = h), qe(h));
          } else bt(e.connectionId);
        }
      }
    }
    function Ye(e) {
      return (
        e === o("WAWebVoipWaCallEnums").CallState.CallActive ||
        e === o("WAWebVoipWaCallEnums").CallState.ConnectedLonely
      );
    }
    function Je(e) {
      return e === "session"
        ? o("WAWebVoipWebTransportCallSummary").WtFallbackReason.SessionError
        : e === "stream"
          ? o("WAWebVoipWebTransportCallSummary").WtFallbackReason.StreamError
          : o("WAWebVoipWebTransportCallSummary").WtFallbackReason.WorkerError;
    }
    var Ze = "WebTransport connect aborted";
    function et(e) {
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
    function tt(e, t) {
      var n = e.errorMessage,
        r = e.errorName,
        o = e.wtHasStreamErrorCode,
        a = e.wtSource;
      return r === "NotSupportedError"
        ? "invalid_config"
        : r !== "WebTransportError" && n === Ze
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
    function nt(e, t, n) {
      var r = t != null && t > 0 ? Date.now() - t : -1,
        o = et(e),
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
        likelyCause: tt(o, r),
      };
    }
    var rt = 512,
      ot = 64;
    function at(e, t) {
      return e > 0 ? e : t;
    }
    function it() {
      return {
        rejectOversizedDatagrams: ft(),
        incomingMaxBufferedDatagrams: at(r("justknobx")._("6438"), rt),
        outgoingMaxBufferedDatagrams: at(r("justknobx")._("6439"), ot),
        outgoingMaxAgeMs: Math.max(0, r("justknobx")._("6440")),
        nativeSendRing: _t(),
      };
    }
    var lt = null,
      st = null;
    function ut() {
      if (!(lt != null || st != null)) {
        var e =
          o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm");
        ((st = e),
          e
            .then(function (t) {
              st === e && ((lt = t), (st = null));
            })
            .catch(function (t) {
              (st === e && (st = null),
                o("WALogger").WARN(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WebTransportConnectionManager] native send ring module unavailable: ",
                      "",
                    ])),
                  r("getErrorSafe")(t).message,
                ));
            }));
      }
    }
    function ct(e, t, n) {
      if (e.nativeSendRing !== !0 || n == null) return e;
      var r = Array.from(te.values())
        .filter(function (e) {
          return e.clusterDomain === n && e.id !== t;
        })
        .map(function (e) {
          return { ip: e.ip, port: e.port };
        });
      return r.length > 0
        ? babelHelpers.extends({}, e, { nativeSendRingAliases: r })
        : e;
    }
    function dt() {
      var e = lt,
        t = st;
      ((lt = null),
        (st = null),
        e != null ? mt(e) : t != null && t.then(mt, r("WAWebNoop")));
    }
    function mt(e) {
      try {
        e.shutdownAnyWebTransportRingBuffer == null ||
          e.shutdownAnyWebTransportRingBuffer();
      } catch (e) {
        o("WALogger").WARN(
          k ||
            (k = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] native send ring shutdown failed: ",
              "",
            ])),
          r("getErrorSafe")(e).message,
        );
      }
    }
    function pt(e) {
      return e.workerNativeRingPackets === 0 &&
        e.workerNativeRingDroppedPackets === 0
        ? ""
        : ",nativeRingPackets=" +
            String(e.workerNativeRingPackets) +
            ",nativeRingDroppedPackets=" +
            String(e.workerNativeRingDroppedPackets);
    }
    function _t() {
      try {
        return r("justknobx")._("6832");
      } catch (e) {
        return (
          o("WALogger").WARN(
            I ||
              (I = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] native-send-ring JK unavailable, using fallback=false: ",
                "",
              ])),
            r("getErrorSafe")(e).message,
          ),
          !1
        );
      }
    }
    function ft() {
      try {
        return r("justknobx")._("3387");
      } catch (e) {
        return (
          o("WALogger").WARN(
            T ||
              (T = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] oversized-datagram JK unavailable, using fallback=true: ",
                "",
              ])),
            r("getErrorSafe")(e).message,
          ),
          !0
        );
      }
    }
    function gt(e) {
      return ht.apply(this, arguments);
    }
    function ht() {
      return (
        (ht = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.id,
            n = e.clusterDomain;
          if (!(n != null && re.has(n))) {
            (n != null && re.set(n, t),
              o("WALogger").LOG(
                w ||
                  (w = babelHelpers.taggedTemplateLiteralLoose([
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
            var a = ee.get(t);
            (a == null && ((a = Ve(t, e)), ee.set(t, a)),
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
                    A ||
                      (A = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [WebTransportConnectionManager] Connection timeout for ",
                        "",
                      ])),
                    t,
                  ),
                  ie ||
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
                  ze(
                    a,
                    t,
                    o("WAWebVoipWebTransportCallSummary").WtFallbackReason
                      .ConnectionTimeout,
                  ));
              }, o("WAWebVoipRelayConnectionUtils").CONNECTION_TIMEOUT_MS)));
            try {
              var i = Ke(e);
              if (i == null) {
                (ie ||
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
                  ze(
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
              (s.registerStateHandler(Xe), (a.workerConnectionCreated = !0));
              var c = it();
              (c.nativeSendRing === !0 && ut(),
                yield s.connect(t, i, e.ip, e.port, ne, ct(c, t, n)));
              var d = ee.get(t);
              if (
                d == null ||
                d !== a ||
                d.state !==
                  o("WAWebVoipRelayConnectionUtils").ConnectionState
                    .Connecting ||
                d.cleanupRequested ||
                ge
              ) {
                (o("WALogger").WARN(
                  F ||
                    (F = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WebTransportConnectionManager] Connection ",
                      " was cleaned up during establishment, closing worker connection",
                    ])),
                  t,
                ),
                  ge ||
                    o(
                      "WAWebVoipWebTransportCallSummary",
                    ).recordWtRelayAttemptComplete(
                      t,
                      o("WAWebVoipWebTransportCallSummary").WtRelayOutcome
                        .Aborted,
                      "cleaned_up",
                    ),
                  ge && d === a && !a.cleanupRequested && bt(t),
                  s.close(t));
                return;
              }
              (Ge(a),
                (a.state = o(
                  "WAWebVoipRelayConnectionUtils",
                ).ConnectionState.Open),
                (a.stats.connectionReadyTime = Date.now()),
                te.has(t) && ((me = null), Pe()),
                o(
                  "WAWebVoipWebTransportCallSummary",
                ).recordWtRelayAttemptComplete(
                  t,
                  o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Opened,
                  null,
                ),
                o("WALogger").LOG(
                  O ||
                    (O = babelHelpers.taggedTemplateLiteralLoose([
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
                Ct(t));
            } catch (e) {
              var p,
                _ = nt(e, a.connectionStartTime, a.workerConnectionCreated);
              if (ee.get(t) !== a && _.likelyCause === "aborted") return;
              (o(
                "WAWebVoipWebTransportCallSummary",
              ).recordWtRelayAttemptComplete(
                t,
                (p = pe[_.likelyCause]) != null
                  ? p
                  : o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Failed,
                _.likelyCause,
              ),
                ie ||
                  o(
                    "WAWebCoreActionsODS",
                  ).logCallWebtransportConnectFailByCategory(_.likelyCause));
              var f = o("WALogger").ERROR(
                B ||
                  (B = babelHelpers.taggedTemplateLiteralLoose([
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
              (!o("WAWebVoipCallStateUtils").isCallTerminal(
                o("WAWebVoipLocalCallStateStore").getLocalCallState(),
              ) &&
                !Oe() &&
                _.likelyCause !== "aborted" &&
                f.sendLogs("webtransport-connect-fail"),
                ze(a, t, yt(_.likelyCause)));
            }
          }
        })),
        ht.apply(this, arguments)
      );
    }
    function yt(e) {
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
    function Ct(e) {
      var t = ee.get(e);
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
    function bt(e) {
      var t = ee.get(e);
      if (t != null) {
        (Ge(t),
          o("WAWebVoipRelayConnectionUtils").clearPacketBuffer(t.packetBuffer),
          o("WALogger").LOG(
            D ||
              (D = babelHelpers.taggedTemplateLiteralLoose([
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
            vt(t),
          ),
          t.workerMaxDatagramSize != null &&
            o("WAWebCoreActionsODS").logCallWebtransportMaxDatagramSize(
              t.workerMaxDatagramSize,
            ),
          o("WAWebCoreActionsODS").logCallWebtransportOversizedDatagrams(
            t.workerOversizedMediaPackets,
            t.workerOversizedStunPackets,
            t.workerOversizedStunBeforeFirstStun,
          ),
          o("WAWebVoipWebTransportDlProbeODS").logCallWebtransportDlProbe(
            t.workerStats,
          ));
        var n = t.clusterDomain;
        (n != null && re.get(n) === e && re.delete(n), ee.delete(e));
      }
    }
    function vt(e) {
      return e.stats.droppedPackets + e.localDroppedPackets;
    }
    function St(e, t) {
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
    function Rt(e) {
      var t = ee.get(e);
      if (!(t == null || t.cleanupRequested)) {
        (o("WALogger").LOG(
          x ||
            (x = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] Cleaning up connection ",
              "",
            ])),
          e,
        ),
          Ge(t),
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
        bt(e);
      }
    }
    function Lt(e, t, n) {
      return Et.apply(this, arguments);
    }
    function Et() {
      return (
        (Et = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            if (!ie) {
              var r = o(
                  "WAWebVoipRelayConnectionUtils",
                ).getConnectionIdentifier(t, n),
                a = ee.get(r),
                i = He(r);
              if (a == null) {
                if (i == null) {
                  if (Tt(r, e)) return;
                  kt(e, "no_relay_info");
                  var l = Array.from(te.keys()).join(",");
                  o("WALogger").LOG(
                    W ||
                      (W = babelHelpers.taggedTemplateLiteralLoose([
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
                  u = s != null ? re.get(s) : void 0,
                  c = u != null ? ee.get(u) : void 0;
                c != null ? (a = c) : ((a = Ve(r, i)), ee.set(r, a));
              }
              a.stats.firstSendRequestTime === 0 &&
                (a.stats.firstSendRequestTime = Date.now());
              var d =
                o("WAWebVoipRelayConnectionUtils").inspectPacketType(e) !==
                o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN;
              if (
                (d &&
                  te.has(r) &&
                  a.state !==
                    o("WAWebVoipRelayConnectionUtils").ConnectionState.Open &&
                  !o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() &&
                  It(),
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
              if (Nt(d, a)) {
                kt(e, "dropped");
                return;
              }
              var _ = St(
                a,
                o("WAWebVoipRelayConnectionUtils").copyArrayBuffer(e),
              );
              (_
                ? kt(e, "buffered")
                : (kt(e, "dropped"),
                  o("WALogger").WARN(
                    q ||
                      (q = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [WebTransportConnectionManager] Dropping packet for ",
                        ": size ",
                        " exceeds max buffer size",
                      ])),
                    r,
                    e.byteLength,
                  )),
                (a.state ===
                  o("WAWebVoipRelayConnectionUtils").ConnectionState.None ||
                  a.state ===
                    o("WAWebVoipRelayConnectionUtils").ConnectionState
                      .Closed) &&
                  i != null &&
                  te.has(r) &&
                  gt(i));
            }
          },
        )),
        Et.apply(this, arguments)
      );
    }
    function kt(e, t) {
      o("WAWebVoipRelayConnectionUtils").inspectPacketType(e) ===
        o("WAWebVoipRelayConnectionUtils").PacketType.STUN_STATEFUL_PING &&
        o(
          "WAWebVoipWebTransportDlProbeODS",
        ).logCallWebtransportStatefulPingBeforeOpen(t);
    }
    function It() {
      ce || ((ce = !0), xe());
    }
    function Tt(e, t) {
      return te.size > 0 ||
        !o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() ||
        o("WAWebVoipRelayConnectionUtils").inspectPacketType(t) ===
          o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN
        ? !1
        : Dt(e, t);
    }
    function Dt(e, t) {
      if (Y >= z || J + t.byteLength > j) return !1;
      var n = Q.get(e),
        r = n == null;
      if (n == null) {
        if (Q.size >= G) return !1;
        ((n = o("WAWebVoipRelayConnectionUtils").createPacketBuffer()),
          Q.set(e, n));
      }
      var a = n.packets.length,
        i = n.bufferedBytes,
        l = X.droppedPackets;
      return o("WAWebVoipRelayConnectionUtils").bufferPacket(
        n,
        o("WAWebVoipRelayConnectionUtils").copyArrayBuffer(t),
        X,
      )
        ? (X.droppedPackets > l &&
            o("WALogger").WARN(
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransportConnectionManager] Dropped oldest early STUN packet at per-relay limit",
                ])),
            ),
          (Y += n.packets.length - a),
          (J += n.bufferedBytes - i),
          Z == null && (Z = window.setTimeout(xt, K)),
          !0)
        : (r && Q.delete(e),
          o("WALogger").WARN(
            $ ||
              ($ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Dropped oversized early STUN packet",
              ])),
          ),
          !1);
    }
    function xt() {
      (Z != null && (window.clearTimeout(Z), (Z = null)),
        Q.clear(),
        (X = o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats()),
        (Y = 0),
        (J = 0));
    }
    function $t() {
      for (var e of Q) {
        var t = e[0],
          n = e[1],
          r = te.get(t);
        if (r != null) {
          ((Y -= n.packets.length), (J -= n.bufferedBytes));
          for (
            var a = o("WAWebVoipRelayConnectionUtils").shiftPacket(n);
            a != null;
          )
            (Lt(a, r.ip, r.port),
              (a = o("WAWebVoipRelayConnectionUtils").shiftPacket(n)));
          Q.delete(t);
        }
      }
      Q.size === 0 && Z != null && (window.clearTimeout(Z), (Z = null));
    }
    function Pt() {
      var e = !1;
      le = !0;
      try {
        for (var t of te.values()) {
          var n = t.clusterDomain,
            r = n != null && Qe(n) ? n : null,
            o = n != null ? n : t.id;
          oe.has(o) ||
            (r != null && ae.size >= V) ||
            (oe.add(o), r != null && ae.add(r), (e = !0), gt(t));
        }
      } finally {
        le = !1;
      }
      var a = me;
      !e || a == null || Oe() || Be() || qe(a);
    }
    function Nt(e, t) {
      return t.state ===
        o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed
        ? (e &&
            qe(
              o("WAWebVoipWebTransportCallSummary").WtFallbackReason
                .SendOnFailedConnection,
            ),
          t.localDroppedPackets++,
          !0)
        : e
          ? !1
          : (t.localDroppedPackets++, !0);
    }
    function Mt(e) {
      var t;
      (o("WALogger").LOG(
        N ||
          (N = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Received relay list update",
          ])),
      ),
        (ye = e));
      var n = o("WAWebVoipRelayConnectionUtils").extractRelayConnectionMap(e);
      At(n) && o("WAWebCoreActionsODS").logCallWebtransportRelaysIpv6Only();
      var r = wt(n),
        a = new Set();
      for (var i of r.values()) {
        var l = i.clusterDomain;
        l != null && a.add(l);
      }
      var s = 0;
      for (var u of ee) {
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
            (re.get(p) === c && re.delete(p), Rt(c));
            continue;
          }
          s++;
        }
      }
      (ne++,
        (te = r),
        Ae(),
        (t = o(
          "WAWebVoipWebTransportDataChannelThreadManager",
        ).getWebTransportDataChannelThread()) == null ||
          t.resetDatagramHealth(ne),
        o("WAWebVoipCallStateUtils").isCallTerminal(
          o("WAWebVoipLocalCallStateStore").getLocalCallState(),
        )
          ? (ue = !0)
          : Ee());
    }
    function wt(e) {
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
    function At(e) {
      if (e.size === 0) return !1;
      for (var t of e.values()) if (!t.isIPv6) return !1;
      return !0;
    }
    function Ft() {
      ((se = !1), Pe(), (ie = !0));
    }
    function Ot() {
      var e = Array.from(ee.values()),
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
        n = t.slice(0, U).map(function (e) {
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
                String(vt(e)) +
                pt(e) +
                ")"
            : n + ",stats=offthread,droppedPackets=" + String(vt(e)) + ")";
        });
      return "total=" + String(e.length) + ";" + (n.join("|") || "none");
    }
    function Bt(e) {
      (e === void 0 && (e = !0),
        o("WALogger").LOG(
          M ||
            (M = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] Closing all connections",
            ])),
        ));
      for (var t of Array.from(ee.keys())) Rt(t);
      dt();
      var n = o(
        "WAWebVoipWebTransportDataChannelThreadManager",
      ).stopWebTransportDataChannelWorker();
      (n.finally(function () {
        for (var e of ee) {
          var t = e[0],
            n = e[1];
          n.cleanupRequested && bt(t);
        }
      }),
        te.clear(),
        (ue = !1),
        oe.clear(),
        ae.clear(),
        xt(),
        re.clear(),
        (De = !1),
        $e(),
        Pe(),
        ie && (we(), (ge = !1), (he = !1), (ye = null)),
        e && o("WAWebVoipWebTransportCallSummary").markWtCallSummaryClosed(),
        o("WAWebVoipTsLogger").cleanup(),
        (ie = !1));
    }
    ((l.registerFallbackHandler = Ce),
      (l.registerHealthyHandler = be),
      (l.resetFallbackStateForNewCall = ve),
      (l.resolvePendingFastSetupForNewCall = Re),
      (l.handleCallAccepted = Le),
      (l.registerPacketHandler = Ue),
      (l.sendData = Lt),
      (l.handleRelayListUpdate = Mt),
      (l.prepareForEndCall = Ft),
      (l.getWebTransportRelayDebugSummary = Ot),
      (l.closeAllConnections = Bt));
  },
  98,
);
