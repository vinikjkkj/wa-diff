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
      U,
      V = 8,
      H = 3,
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
      (Ue(),
        Be(),
        ue || Ot(),
        Se(),
        (se = !0),
        oe.clear(),
        ae.clear(),
        (de = !1),
        (me = null),
        (ge = !1),
        (we = !1),
        (he = !1),
        (Ae = !1),
        o("WAWebVoipGatingUtils").resetWebTransportFallbackState());
    }
    function Se() {
      var e = Re();
      if (ee.size > e.size) {
        e.size === 0 && Te();
        for (var t of Array.from(ee.keys())) e.has(t) || Pt(t);
      }
      (re.clear(),
        oe.clear(),
        ae.clear(),
        ue || (te.clear(), (ye = null)),
        e.size > 0 && Ee(e));
    }
    function Re() {
      var e = new Set();
      if (!ue) return e;
      for (var t of ee) {
        var n = t[0],
          r = t[1];
        Le(r, te.get(n)) && e.add(n);
      }
      return e;
    }
    function Le(e, t) {
      return (
        t != null &&
        !e.cleanupRequested &&
        (e.state ===
          o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting ||
          e.state ===
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Open) &&
        e.relayConnectionInfo.token === t.token &&
        e.relayConnectionInfo.authToken === t.authToken
      );
    }
    function Ee(e) {
      var t;
      for (var n of e) {
        var r,
          a = (r = ee.get(n)) == null ? void 0 : r.clusterDomain;
        a != null && re.set(a, n);
      }
      (ne++,
        (t = o(
          "WAWebVoipWebTransportDataChannelThreadManager",
        ).getWebTransportDataChannelThread()) == null ||
          t.resetDatagramHealth(ne));
    }
    function ke(e) {
      if (ue) {
        if (((ue = !1), !e)) {
          (Ie(), te.clear(), (ye = null), Ot());
          return;
        }
        $e();
      }
    }
    function Ie() {
      if (ee.size !== 0) {
        Te();
        for (var e of Array.from(ee.keys())) Pt(e);
        (re.clear(), bt());
      }
    }
    function Te() {
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
    }
    function De() {
      if (((de = !0), !Ge())) {
        if (ze()) {
          if (o("WAWebVoipGatingUtils").isWebTransportUntilAcceptEnabled()) {
            qe(
              0,
              o("WAWebVoipWebTransportCallSummary").WtFallbackReason
                .NoReadyAfterAcceptTimeout,
            );
            return;
          }
          We();
          return;
        }
        var e = me;
        e != null && Ke(e, !0);
      }
    }
    function xe(e, t) {
      !o("WAWebVoipCallStateUtils").isCallRinging(e) ||
        o("WAWebVoipCallStateUtils").isCallRinging(t) ||
        o("WAWebVoipCallStateUtils").isCallTerminal(t) ||
        Ge() ||
        !ze() ||
        !o("WAWebVoipGatingUtils").isWebTransportUntilAcceptEnabled() ||
        qe(
          0,
          o("WAWebVoipWebTransportCallSummary").WtFallbackReason
            .NoReadyDuringRingingTimeout,
        );
    }
    function $e() {
      ie ||
        !se ||
        ge ||
        !o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() ||
        (Wt(), Bt(), We());
    }
    var Pe = null,
      Ne = null,
      Me = !1,
      we = !1,
      Ae = !1;
    function Fe() {
      if (!(Me || Pe != null)) {
        var e = o(
          "WAWebVoipGatingUtils",
        ).getWebTransportSctpFallbackTimeoutMs();
        (o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] WebTransport SCTP-fallback timeout armed at ",
              "ms",
            ])),
          e,
        ),
          (Pe = window.setTimeout(function () {
            return He(e);
          }, e)));
      }
    }
    function Oe() {
      Pe != null && (window.clearTimeout(Pe), (Pe = null));
    }
    function Be() {
      Ne != null && (window.clearTimeout(Ne), (Ne = null));
    }
    function We() {
      if (
        !(
          !o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() ||
          ge ||
          Ge() ||
          !ze() ||
          (o("WAWebVoipCallStateUtils").isCallRinging(
            o("WAWebVoipLocalCallStateStore").getLocalCallState(),
          ) &&
            o("WAWebVoipGatingUtils").isWebTransportUntilAcceptEnabled())
        ) &&
        Ne == null
      ) {
        var e = o(
          "WAWebVoipGatingUtils",
        ).getWebTransportSctpFallbackTimeoutMs();
        (o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] WebTransport readiness timeout armed at ",
              "ms",
            ])),
          e,
        ),
          (Ne = window.setTimeout(function () {
            ((Ne = null),
              qe(
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
    function qe(e, t) {
      if (!Ge()) {
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
          Ke(t, !0, function () {
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
    function Ue() {
      Ve();
    }
    function Ve() {
      (Oe(), (Me = !1), (ce = !1));
    }
    function He(e) {
      Pe = null;
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
        Ke(
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
    function Ge() {
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
    function ze() {
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
    function je(e) {
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
          : Ge()
            ? (o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportConnectionManager] Skipping fallback: another current WT connection still open",
                  ])),
              ),
              !0)
            : o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() &&
                !Me &&
                ze()
              ? (o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WebTransportConnectionManager] Skipping fallback: another current WT connection still connecting",
                    ])),
                ),
                !0)
              : !1;
    }
    function Ke(e, t, n) {
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
      if (je(t)) return !1;
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
    function Qe(e) {}
    function Xe(e, t) {
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
    function Ye(e) {
      var t,
        n = te.get(e);
      return n != null
        ? n
        : (t = ee.get(e)) == null
          ? void 0
          : t.relayConnectionInfo;
    }
    function Je(e) {
      e.connectionTimeout != null &&
        (window.clearTimeout(e.connectionTimeout),
        (e.connectionTimeout = null));
    }
    function Ze(e, t, n) {
      var r,
        a = te.has(t);
      if (
        (Je(e),
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
      (s && ee.delete(t), a && s && ((me = n), Ke(n)));
    }
    var et = /^wt\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.fna\.whatsapp\.net$/i;
    function tt(e) {
      var t = e.authToken,
        n = e.clusterDomain,
        r = e.token;
      if (n == null || !nt(n))
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
    function nt(e) {
      return e.endsWith(".whatsapp.com") || et.test(e);
    }
    function rt(e) {
      Ae ||
        e == null ||
        !et.test(e) ||
        ((Ae = !0),
        o("WAWebCoreActionsODS").logCallWebtransportFnaRelayTrafficSent());
    }
    function ot(e) {
      var t = ee.get(e.connectionId);
      if (t != null) {
        if (e.event === "first_stun_datagram_sent") {
          te.has(e.connectionId) && e.relayGeneration === ne && wt();
          return;
        }
        if (e.event === "first_relay_datagram_sent") {
          te.has(e.connectionId) &&
            e.relayGeneration === ne &&
            (o("WAWebVoipWebTransportCallSummary").recordWtRelayTrafficSent(),
            rt(t.clusterDomain));
          return;
        }
        if (e.event === "first_datagram") {
          te.has(e.connectionId) &&
            e.relayGeneration === ne &&
            !Me &&
            ((Me = !0),
            Be(),
            Oe(),
            !ge && !we && ((we = !0), fe == null || fe()));
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
        (u != null && re.get(u) === e.connectionId && re.delete(u), at(e, t));
      }
    }
    function at(e, t) {
      if (e.event === "closed") {
        ((t.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed),
          o("WALogger").LOG(
            R ||
              (R = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Worker connection closed for ",
                "",
              ])),
            e.connectionId,
          ),
          t.cleanupRequested && Dt(e.connectionId));
        return;
      }
      if (e.event === "error") {
        var n,
          r,
          a =
            t.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open;
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
            (n = (r = e.error) == null ? void 0 : r.message) != null
              ? n
              : "unknown",
          ),
          a &&
            te.has(e.connectionId) &&
            it(o("WAWebVoipLocalCallStateStore").getLocalCallState()))
        ) {
          var i, l, s;
          o("WAWebVoipWebTransportSessionEndODS").logCallWebtransportSessionEnd(
            o(
              "WAWebVoipWebTransportSessionEndODS",
            ).classifyWebtransportSessionEnd(
              (i = e.error) == null ? void 0 : i.source,
              (l = e.error) == null ? void 0 : l.message,
            ),
            (s = e.error) == null ? void 0 : s.sinceLastDatagramMs,
          );
        }
        if (te.has(e.connectionId)) {
          var u,
            c = lt((u = e.error) == null ? void 0 : u.source);
          ((me = c), Ke(c));
        } else Dt(e.connectionId);
      }
    }
    function it(e) {
      return (
        e === o("WAWebVoipWaCallEnums").CallState.CallActive ||
        e === o("WAWebVoipWaCallEnums").CallState.ConnectedLonely
      );
    }
    function lt(e) {
      return e === "session"
        ? o("WAWebVoipWebTransportCallSummary").WtFallbackReason.SessionError
        : e === "stream"
          ? o("WAWebVoipWebTransportCallSummary").WtFallbackReason.StreamError
          : o("WAWebVoipWebTransportCallSummary").WtFallbackReason.WorkerError;
    }
    var st = "WebTransport connect aborted";
    function ut(e) {
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
    function ct(e, t) {
      var n = e.errorMessage,
        r = e.errorName,
        o = e.wtHasStreamErrorCode,
        a = e.wtSource;
      return r === "NotSupportedError"
        ? "invalid_config"
        : r !== "WebTransportError" && n === st
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
    function dt(e, t, n) {
      var r = t != null && t > 0 ? Date.now() - t : -1,
        o = ut(e),
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
        likelyCause: ct(o, r),
      };
    }
    var mt = 512,
      pt = 64;
    function _t(e, t) {
      return e > 0 ? e : t;
    }
    function ft() {
      return {
        rejectOversizedDatagrams: Lt(),
        incomingMaxBufferedDatagrams: _t(r("justknobx")._("6438"), mt),
        outgoingMaxBufferedDatagrams: _t(r("justknobx")._("6439"), pt),
        outgoingMaxAgeMs: Math.max(0, r("justknobx")._("6440")),
        nativeSendRing: Rt(),
      };
    }
    var gt = null,
      ht = null;
    function yt() {
      if (!(gt != null || ht != null)) {
        var e =
          o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm");
        ((ht = e),
          e
            .then(function (t) {
              ht === e && ((gt = t), (ht = null));
            })
            .catch(function (t) {
              (ht === e && (ht = null),
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
    function Ct(e, t, n) {
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
    function bt() {
      var e = gt,
        t = ht;
      ((gt = null),
        (ht = null),
        e != null ? vt(e) : t != null && t.then(vt, r("WAWebNoop")));
    }
    function vt(e) {
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
    function St(e) {
      return e.workerNativeRingPackets === 0 &&
        e.workerNativeRingDroppedPackets === 0
        ? ""
        : ",nativeRingPackets=" +
            String(e.workerNativeRingPackets) +
            ",nativeRingDroppedPackets=" +
            String(e.workerNativeRingDroppedPackets);
    }
    function Rt() {
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
    function Lt() {
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
    async function Et(e) {
      var t = e.id,
        n = e.clusterDomain;
      if (!(n != null && re.has(n))) {
        (n != null && re.set(n, t),
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
        var a = ee.get(t);
        (a == null && ((a = Xe(t, e)), ee.set(t, a)),
          (a.state = o(
            "WAWebVoipRelayConnectionUtils",
          ).ConnectionState.Connecting),
          (a.connectionStartTime = Date.now()),
          o("WAWebVoipWebTransportCallSummary").recordWtRelayAttemptStart(t),
          (a.connectionTimeout = window.setTimeout(function () {
            a != null &&
              a.state ===
                o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting &&
              (o("WALogger").WARN(
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
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
                o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Timeout,
                "connection_timeout",
              ),
              Ze(
                a,
                t,
                o("WAWebVoipWebTransportCallSummary").WtFallbackReason
                  .ConnectionTimeout,
              ));
          }, o("WAWebVoipRelayConnectionUtils").CONNECTION_TIMEOUT_MS)));
        try {
          var i = tt(e);
          if (i == null) {
            (ie ||
              o("WAWebCoreActionsODS").logCallWebtransportConnectFailByCategory(
                "invalid_config",
              ),
              o(
                "WAWebVoipWebTransportCallSummary",
              ).recordWtRelayAttemptComplete(
                t,
                o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Failed,
                "invalid_config",
              ),
              Ze(
                a,
                t,
                o("WAWebVoipWebTransportCallSummary").WtFallbackReason
                  .InvalidConfig,
              ));
            return;
          }
          var l = await o(
              "WAWebVoipWebTransportDataChannelThreadManager",
            ).initWebTransportDataChannelWorker("wt_connect"),
            s = o(
              "WAWebVoipWebTransportDataChannelThreadManager",
            ).getWebTransportDataChannelThread();
          if (kt(t, a)) return;
          if (!l || s == null) {
            var u = r("err")("WebTransport worker is unavailable");
            throw ((u.name = "NotSupportedError"), u);
          }
          (s.registerStateHandler(ot), (a.workerConnectionCreated = !0));
          var c = ft();
          (c.nativeSendRing === !0 && yt(),
            await s.connect(t, i, e.ip, e.port, ne, Ct(c, t, n)));
          var d = ee.get(t);
          if (
            d == null ||
            d !== a ||
            d.state !==
              o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting ||
            d.cleanupRequested ||
            ge
          ) {
            (o("WALogger").WARN(
              $ ||
                ($ = babelHelpers.taggedTemplateLiteralLoose([
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
                  o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Aborted,
                  "cleaned_up",
                ),
              ge && d === a && !a.cleanupRequested && Dt(t),
              s.close(t));
            return;
          }
          (Je(a),
            (a.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Open),
            (a.stats.connectionReadyTime = Date.now()),
            te.has(t) && ((me = null), Be()),
            o("WAWebVoipWebTransportCallSummary").recordWtRelayAttemptComplete(
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
          var m = a.clusterDomain;
          (m != null &&
            o("WAWebVoipTsLogger").logWebtransportConnectionComplete(
              "https://" + m + "/webtransport",
            ),
            Tt(t));
        } catch (e) {
          var p,
            _ = dt(e, a.connectionStartTime, a.workerConnectionCreated);
          if (ee.get(t) !== a && _.likelyCause === "aborted") return;
          (o("WAWebVoipWebTransportCallSummary").recordWtRelayAttemptComplete(
            t,
            (p = pe[_.likelyCause]) != null
              ? p
              : o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Failed,
            _.likelyCause,
          ),
            ie ||
              o("WAWebCoreActionsODS").logCallWebtransportConnectFailByCategory(
                _.likelyCause,
              ));
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
          (!o("WAWebVoipCallStateUtils").isCallTerminal(
            o("WAWebVoipLocalCallStateStore").getLocalCallState(),
          ) &&
            !Ge() &&
            _.likelyCause !== "aborted" &&
            f.sendLogs("webtransport-connect-fail"),
            Ze(a, t, It(_.likelyCause)));
        }
      }
    }
    function kt(e, t) {
      return ee.get(e) !== t || t.cleanupRequested;
    }
    function It(e) {
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
    function Tt(e) {
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
    function Dt(e) {
      var t = ee.get(e);
      if (t != null) {
        (Je(t),
          o("WAWebVoipRelayConnectionUtils").clearPacketBuffer(t.packetBuffer),
          o("WALogger").LOG(
            M ||
              (M = babelHelpers.taggedTemplateLiteralLoose([
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
            xt(t),
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
    function xt(e) {
      return e.stats.droppedPackets + e.localDroppedPackets;
    }
    function $t(e, t) {
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
    function Pt(e) {
      var t = ee.get(e);
      if (!(t == null || t.cleanupRequested)) {
        (o("WALogger").LOG(
          w ||
            (w = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] Cleaning up connection ",
              "",
            ])),
          e,
        ),
          Je(t),
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
        Dt(e);
      }
    }
    async function Nt(e, t, n) {
      if (!ie) {
        var r = o("WAWebVoipRelayConnectionUtils").getConnectionIdentifier(
            t,
            n,
          ),
          a = ee.get(r),
          i = Ye(r);
        if (a == null) {
          if (i == null) {
            if (At(r, e)) return;
            Mt(e, "no_relay_info");
            var l = Array.from(te.keys()).join(",");
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
            u = s != null ? re.get(s) : void 0,
            c = u != null ? ee.get(u) : void 0;
          c != null ? (a = c) : ((a = Xe(r, i)), ee.set(r, a));
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
            wt(),
          a.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open)
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
        if (qt(d, a)) {
          Mt(e, "dropped");
          return;
        }
        var _ = $t(a, o("WAWebVoipRelayConnectionUtils").copyArrayBuffer(e));
        (_
          ? Mt(e, "buffered")
          : (Mt(e, "dropped"),
            o("WALogger").WARN(
              F ||
                (F = babelHelpers.taggedTemplateLiteralLoose([
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
              o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed) &&
            i != null &&
            te.has(r) &&
            Et(i));
      }
    }
    function Mt(e, t) {
      o("WAWebVoipRelayConnectionUtils").inspectPacketType(e) ===
        o("WAWebVoipRelayConnectionUtils").PacketType.STUN_STATEFUL_PING &&
        o(
          "WAWebVoipWebTransportDlProbeODS",
        ).logCallWebtransportStatefulPingBeforeOpen(t);
    }
    function wt() {
      ce || ((ce = !0), Fe());
    }
    function At(e, t) {
      return te.size > 0 ||
        !o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() ||
        o("WAWebVoipRelayConnectionUtils").inspectPacketType(t) ===
          o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN
        ? !1
        : Ft(e, t);
    }
    function Ft(e, t) {
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
              B ||
                (B = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransportConnectionManager] Dropped oldest early STUN packet at per-relay limit",
                ])),
            ),
          (Y += n.packets.length - a),
          (J += n.bufferedBytes - i),
          Z == null && (Z = window.setTimeout(Ot, K)),
          !0)
        : (r && Q.delete(e),
          o("WALogger").WARN(
            O ||
              (O = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Dropped oversized early STUN packet",
              ])),
          ),
          !1);
    }
    function Ot() {
      (Z != null && (window.clearTimeout(Z), (Z = null)),
        Q.clear(),
        (X = o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats()),
        (Y = 0),
        (J = 0));
    }
    function Bt() {
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
            (Nt(a, r.ip, r.port),
              (a = o("WAWebVoipRelayConnectionUtils").shiftPacket(n)));
          Q.delete(t);
        }
      }
      Q.size === 0 && Z != null && (window.clearTimeout(Z), (Z = null));
    }
    function Wt() {
      var e = !1;
      le = !0;
      try {
        for (var t of te.values()) {
          var n = t.clusterDomain,
            r = n != null && nt(n) ? n : null,
            o = n != null ? n : t.id;
          oe.has(o) ||
            (r != null && ae.size >= H) ||
            (oe.add(o), r != null && ae.add(r), (e = !0), Et(t));
        }
      } finally {
        le = !1;
      }
      var a = me;
      !e || a == null || Ge() || ze() || Ke(a);
    }
    function qt(e, t) {
      return t.state ===
        o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed
        ? (e &&
            Ke(
              o("WAWebVoipWebTransportCallSummary").WtFallbackReason
                .SendOnFailedConnection,
            ),
          t.localDroppedPackets++,
          !0)
        : e
          ? !1
          : (t.localDroppedPackets++, !0);
    }
    function Ut(e) {
      var t;
      (o("WALogger").LOG(
        W ||
          (W = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Received relay list update",
          ])),
      ),
        (ye = e));
      var n = o("WAWebVoipRelayConnectionUtils").extractRelayConnectionMap(e);
      zt(n) && o("WAWebCoreActionsODS").logCallWebtransportRelaysIpv6Only();
      var r = Gt(n),
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
          Vt(c, d, m);
          continue;
        }
        if (
          d.state !==
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
          d.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed
        ) {
          var p = d.clusterDomain;
          if (p != null && a.has(p)) {
            (re.get(p) === c && re.delete(p), Pt(c));
            continue;
          }
          s++;
        }
      }
      (ne++,
        (te = r),
        Ve(),
        (t = o(
          "WAWebVoipWebTransportDataChannelThreadManager",
        ).getWebTransportDataChannelThread()) == null ||
          t.resetDatagramHealth(ne),
        o("WAWebVoipCallStateUtils").isCallTerminal(
          o("WAWebVoipLocalCallStateStore").getLocalCallState(),
        )
          ? (ue = !0)
          : $e());
    }
    function Vt(e, t, n) {
      var r = t.relayConnectionInfo,
        a =
          t.state !==
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
          t.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed;
      if (
        (o("WAWebVoipGatingUtils").isCurrentCallGroup() && a) ||
        (r.token === n.token && r.authToken === n.authToken)
      ) {
        t.relayConnectionInfo = n;
        return;
      }
      Ht(e, t);
    }
    function Ht(e, t) {
      var n, r;
      o("WALogger").LOG(
        q ||
          (q = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Reopening ",
            " for new relay tokens",
          ])),
        e,
      );
      var a = (n = t.clusterDomain) != null ? n : e;
      (oe.delete(a),
        ae.delete(a),
        (t.cleanupRequested = !0),
        (r = o(
          "WAWebVoipWebTransportDataChannelThreadManager",
        ).getWebTransportDataChannelThread()) == null || r.close(e),
        Dt(e));
    }
    function Gt(e) {
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
    function zt(e) {
      if (e.size === 0) return !1;
      for (var t of e.values()) if (!t.isIPv6) return !1;
      return !0;
    }
    function jt() {
      ((se = !1), Be(), (ie = !0));
    }
    function Kt() {
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
        n = t.slice(0, V).map(function (e) {
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
                String(xt(e)) +
                St(e) +
                ")"
            : n + ",stats=offthread,droppedPackets=" + String(xt(e)) + ")";
        });
      return "total=" + String(e.length) + ";" + (n.join("|") || "none");
    }
    function Qt(e) {
      (e === void 0 && (e = !0),
        o("WALogger").LOG(
          U ||
            (U = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] Closing all connections",
            ])),
        ));
      for (var t of Array.from(ee.keys())) Pt(t);
      bt();
      var n = o(
        "WAWebVoipWebTransportDataChannelThreadManager",
      ).stopWebTransportDataChannelWorker();
      (n.finally(function () {
        for (var e of ee) {
          var t = e[0],
            n = e[1];
          n.cleanupRequested && Dt(t);
        }
      }),
        te.clear(),
        (ue = !1),
        oe.clear(),
        ae.clear(),
        Ot(),
        re.clear(),
        (we = !1),
        Oe(),
        Be(),
        ie && (Ue(), (ge = !1), (he = !1), (Ae = !1), (ye = null)),
        e && o("WAWebVoipWebTransportCallSummary").markWtCallSummaryClosed(),
        o("WAWebVoipTsLogger").cleanup(),
        (ie = !1));
    }
    ((l.registerFallbackHandler = Ce),
      (l.registerHealthyHandler = be),
      (l.resetFallbackStateForNewCall = ve),
      (l.resolvePendingFastSetupForNewCall = ke),
      (l.handleCallAccepted = De),
      (l.handleCallLeftRinging = xe),
      (l.registerPacketHandler = Qe),
      (l.sendData = Nt),
      (l.handleRelayListUpdate = Ut),
      (l.prepareForEndCall = jt),
      (l.getWebTransportRelayDebugSummary = Kt),
      (l.closeAllConnections = Qt));
  },
  98,
);
