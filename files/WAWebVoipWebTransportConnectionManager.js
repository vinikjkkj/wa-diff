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
      U,
      V = 8,
      H = 3,
      G = 500,
      z = 8,
      j = 32,
      K = 32 * 1024,
      Q = 1e3,
      X = new Map(),
      Y = o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats(),
      J = 0,
      Z = 0,
      ee = null,
      te = new Map(),
      ne = new Map(),
      re = 0,
      oe = new Map(),
      ae = new Set(),
      ie = new Set(),
      le = !1,
      se = !1,
      ue = !1,
      ce = !1,
      de = !1,
      me = !1,
      pe = null,
      _e = {
        aborted: o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Aborted,
        handshake_timeout: o("WAWebVoipWebTransportCallSummary").WtRelayOutcome
          .Timeout,
        connection_timeout: o("WAWebVoipWebTransportCallSummary").WtRelayOutcome
          .Timeout,
      },
      fe = null,
      ge = null,
      he = !1,
      ye = !1,
      Ce = null;
    function be(t) {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Fallback handler registered",
          ])),
      ),
        (fe = t));
    }
    function ve(e) {
      ge = e;
    }
    function Se() {
      (Ve(),
        We(),
        ce || Wt(),
        Re(),
        (ue = !0),
        ae.clear(),
        ie.clear(),
        (me = !1),
        (pe = null),
        (he = !1),
        (Ae = !1),
        (ye = !1),
        (Fe = !1),
        o("WAWebVoipGatingUtils").resetWebTransportFallbackState());
    }
    function Re() {
      var e = Le();
      if (te.size > e.size) {
        e.size === 0 && De();
        for (var t of Array.from(te.keys())) e.has(t) || Nt(t);
      }
      (oe.clear(),
        ae.clear(),
        ie.clear(),
        ce || (ne.clear(), (Ce = null)),
        e.size > 0 && ke(e));
    }
    function Le() {
      var e = new Set();
      if (!ce) return e;
      for (var t of te) {
        var n = t[0],
          r = t[1];
        Ee(r, ne.get(n)) && e.add(n);
      }
      return e;
    }
    function Ee(e, t) {
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
    function ke(e) {
      var t;
      for (var n of e) {
        var r,
          a = (r = te.get(n)) == null ? void 0 : r.clusterDomain;
        a != null && oe.set(a, n);
      }
      (re++,
        (t = o(
          "WAWebVoipWebTransportDataChannelThreadManager",
        ).getWebTransportDataChannelThread()) == null ||
          t.resetDatagramHealth(re));
    }
    function Ie(e) {
      if (ce) {
        if (((ce = !1), !e)) {
          (Te(), ne.clear(), (Ce = null), Wt());
          return;
        }
        Pe();
      }
    }
    function Te() {
      if (te.size !== 0) {
        De();
        for (var e of Array.from(te.keys())) Nt(e);
        (oe.clear(), bt());
      }
    }
    function De() {
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
    function xe() {
      if (((me = !0), !ze())) {
        if (je()) {
          if (o("WAWebVoipGatingUtils").isWebTransportUntilAcceptEnabled()) {
            Ue(
              0,
              o("WAWebVoipWebTransportCallSummary").WtFallbackReason
                .NoReadyAfterAcceptTimeout,
            );
            return;
          }
          qe();
          return;
        }
        var e = pe;
        e != null && Qe(e, !0);
      }
    }
    function $e(e, t) {
      !o("WAWebVoipCallStateUtils").isCallRinging(e) ||
        o("WAWebVoipCallStateUtils").isCallRinging(t) ||
        o("WAWebVoipCallStateUtils").isCallTerminal(t) ||
        ze() ||
        !je() ||
        !o("WAWebVoipGatingUtils").isWebTransportUntilAcceptEnabled() ||
        Ue(
          0,
          o("WAWebVoipWebTransportCallSummary").WtFallbackReason
            .NoReadyDuringRingingTimeout,
        );
    }
    function Pe() {
      le ||
        !ue ||
        he ||
        !o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() ||
        (Ut(), qt(), qe());
    }
    var Ne = null,
      Me = null,
      we = !1,
      Ae = !1,
      Fe = !1;
    function Oe() {
      if (!(we || Ne != null)) {
        var e = G;
        (o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] WebTransport SCTP-fallback timeout armed at ",
              "ms",
            ])),
          e,
        ),
          (Ne = window.setTimeout(function () {
            return Ge(e);
          }, e)));
      }
    }
    function Be() {
      Ne != null && (window.clearTimeout(Ne), (Ne = null));
    }
    function We() {
      Me != null && (window.clearTimeout(Me), (Me = null));
    }
    function qe() {
      if (
        !(
          !o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() ||
          he ||
          ze() ||
          !je() ||
          (o("WAWebVoipCallStateUtils").isCallRinging(
            o("WAWebVoipLocalCallStateStore").getLocalCallState(),
          ) &&
            o("WAWebVoipGatingUtils").isWebTransportUntilAcceptEnabled())
        )
      ) {
        var e = G;
        Me == null &&
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] WebTransport readiness timeout armed at ",
                "ms",
              ])),
            e,
          ),
          (Me = window.setTimeout(function () {
            ((Me = null),
              Ue(
                e,
                me
                  ? o("WAWebVoipWebTransportCallSummary").WtFallbackReason
                      .NoReadyAfterAcceptTimeout
                  : o("WAWebVoipWebTransportCallSummary").WtFallbackReason
                      .NoReadyDuringRingingTimeout,
              ));
          }, e)));
      }
    }
    function Ue(e, t) {
      if (!ze()) {
        var n = [];
        for (var r of te) {
          var a = r[0],
            i = r[1];
          ne.has(a) &&
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
          Qe(t, !0, function () {
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
    function Ve() {
      He();
    }
    function He() {
      (Be(), (we = !1), (de = !1));
    }
    function Ge(e) {
      Ne = null;
      var t = [];
      for (var n of te) {
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
        Qe(
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
    function ze() {
      for (var e of te) {
        var t = e[0],
          n = e[1];
        if (
          ne.has(t) &&
          n.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open
        )
          return !0;
      }
      return !1;
    }
    function je() {
      for (var e of te) {
        var t = e[0],
          n = e[1];
        if (
          ne.has(t) &&
          n.state ===
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting &&
          !n.cleanupRequested
        )
          return !0;
      }
      return !1;
    }
    function Ke(e) {
      return e
        ? !1
        : se
          ? (o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransportConnectionManager] Skipping fallback: current relay preconnect pass is still starting sibling attempts",
                ])),
            ),
            !0)
          : ze()
            ? (o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportConnectionManager] Skipping fallback: another current WT connection still open",
                  ])),
              ),
              !0)
            : o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() &&
                !we &&
                je()
              ? (o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WebTransportConnectionManager] Skipping fallback: another current WT connection still connecting",
                    ])),
                ),
                !0)
              : !1;
    }
    function Qe(e, t, n) {
      if ((t === void 0 && (t = !1), le))
        return (
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Skipping fallback: tearing down",
              ])),
          ),
          !1
        );
      if (he)
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
      if (Ke(t)) return !1;
      var a = fe;
      if (a == null)
        return (
          ye ||
            ((ye = !0),
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
      ((he = !0),
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
        a(Ce);
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
    function Xe(e) {}
    function Ye(e, t) {
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
    function Je(e) {
      var t,
        n = ne.get(e);
      return n != null
        ? n
        : (t = te.get(e)) == null
          ? void 0
          : t.relayConnectionInfo;
    }
    function Ze(e) {
      e.connectionTimeout != null &&
        (window.clearTimeout(e.connectionTimeout),
        (e.connectionTimeout = null));
    }
    function et(e, t, n) {
      var r,
        a = ne.has(t);
      if (
        (Ze(e),
        (r = o(
          "WAWebVoipWebTransportDataChannelThreadManager",
        ).getWebTransportDataChannelThread()) == null || r.close(t),
        (e.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed),
        !le)
      ) {
        o("WAWebCoreActionsODS").logCallWebtransportConnectFailed();
        var i = e.clusterDomain;
        i != null &&
          o("WAWebVoipTsLogger").logWebtransportConnectionFailed(
            "https://" + i + "/webtransport",
          );
      }
      var l = e.clusterDomain;
      l != null && oe.get(l) === t && oe.delete(l);
      var s = te.get(t) === e;
      (s && te.delete(t), a && s && ((pe = n), Qe(n)));
    }
    var tt = /^wt\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.fna\.whatsapp\.net$/i;
    function nt(e) {
      var t = e.authToken,
        n = e.clusterDomain,
        r = e.token;
      if (n == null || !rt(n))
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
    function rt(e) {
      return e.endsWith(".whatsapp.com") || tt.test(e);
    }
    function ot(e) {
      Fe ||
        e == null ||
        !tt.test(e) ||
        ((Fe = !0),
        o("WAWebCoreActionsODS").logCallWebtransportFnaRelayTrafficSent());
    }
    function at(e) {
      var t = te.get(e.connectionId);
      if (t != null) {
        if (e.event === "first_stun_datagram_sent") {
          ne.has(e.connectionId) && e.relayGeneration === re && Ft();
          return;
        }
        if (e.event === "first_relay_datagram_sent") {
          ne.has(e.connectionId) &&
            e.relayGeneration === re &&
            (o("WAWebVoipWebTransportCallSummary").recordWtRelayTrafficSent(),
            ot(t.clusterDomain));
          return;
        }
        if (e.event === "first_datagram") {
          ne.has(e.connectionId) &&
            e.relayGeneration === re &&
            !we &&
            ((we = !0),
            We(),
            Be(),
            !he && !Ae && ((Ae = !0), ge == null || ge()));
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
          (u != null && oe.get(u) === e.connectionId && oe.delete(u),
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
            t.cleanupRequested && xt(e.connectionId));
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
              ne.has(e.connectionId) &&
              it(o("WAWebVoipLocalCallStateStore").getLocalCallState()))
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
          if (ne.has(e.connectionId)) {
            var g,
              h = lt((g = e.error) == null ? void 0 : g.source);
            ((pe = h), Qe(h));
          } else xt(e.connectionId);
        }
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
      var r = Array.from(ne.values())
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
    function Et(e) {
      return kt.apply(this, arguments);
    }
    function kt() {
      return (
        (kt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.id,
            n = e.clusterDomain;
          if (!(n != null && oe.has(n))) {
            (n != null && oe.set(n, t),
              o("WALogger").LOG(
                A ||
                  (A = babelHelpers.taggedTemplateLiteralLoose([
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
            var a = te.get(t);
            (a == null && ((a = Ye(t, e)), te.set(t, a)),
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
                    F ||
                      (F = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [WebTransportConnectionManager] Connection timeout for ",
                        "",
                      ])),
                    t,
                  ),
                  le ||
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
                  et(
                    a,
                    t,
                    o("WAWebVoipWebTransportCallSummary").WtFallbackReason
                      .ConnectionTimeout,
                  ));
              }, o("WAWebVoipRelayConnectionUtils").CONNECTION_TIMEOUT_MS)));
            try {
              var i = nt(e);
              if (i == null) {
                (le ||
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
                  et(
                    a,
                    t,
                    o("WAWebVoipWebTransportCallSummary").WtFallbackReason
                      .InvalidConfig,
                  ));
                return;
              }
              var l = yield o(
                  "WAWebVoipWebTransportDataChannelThreadManager",
                ).initWebTransportDataChannelWorker("wt_connect"),
                s = o(
                  "WAWebVoipWebTransportDataChannelThreadManager",
                ).getWebTransportDataChannelThread();
              if (It(t, a)) return;
              if (!l || s == null) {
                var u = r("err")("WebTransport worker is unavailable");
                throw ((u.name = "NotSupportedError"), u);
              }
              (s.registerStateHandler(at), (a.workerConnectionCreated = !0));
              var c = ft();
              (c.nativeSendRing === !0 && yt(),
                yield s.connect(t, i, e.ip, e.port, re, Ct(c, t, n)));
              var d = te.get(t);
              if (
                d == null ||
                d !== a ||
                d.state !==
                  o("WAWebVoipRelayConnectionUtils").ConnectionState
                    .Connecting ||
                d.cleanupRequested ||
                he
              ) {
                (o("WALogger").WARN(
                  O ||
                    (O = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WebTransportConnectionManager] Connection ",
                      " was cleaned up during establishment, closing worker connection",
                    ])),
                  t,
                ),
                  he ||
                    o(
                      "WAWebVoipWebTransportCallSummary",
                    ).recordWtRelayAttemptComplete(
                      t,
                      o("WAWebVoipWebTransportCallSummary").WtRelayOutcome
                        .Aborted,
                      "cleaned_up",
                    ),
                  he && d === a && !a.cleanupRequested && xt(t),
                  s.close(t));
                return;
              }
              (Ze(a),
                (a.state = o(
                  "WAWebVoipRelayConnectionUtils",
                ).ConnectionState.Open),
                (a.stats.connectionReadyTime = Date.now()),
                ne.has(t) && ((pe = null), We()),
                o(
                  "WAWebVoipWebTransportCallSummary",
                ).recordWtRelayAttemptComplete(
                  t,
                  o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Opened,
                  null,
                ),
                o("WALogger").LOG(
                  B ||
                    (B = babelHelpers.taggedTemplateLiteralLoose([
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
                Dt(t));
            } catch (e) {
              var p,
                _ = dt(e, a.connectionStartTime, a.workerConnectionCreated);
              if (te.get(t) !== a && _.likelyCause === "aborted") return;
              (o(
                "WAWebVoipWebTransportCallSummary",
              ).recordWtRelayAttemptComplete(
                t,
                (p = _e[_.likelyCause]) != null
                  ? p
                  : o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Failed,
                _.likelyCause,
              ),
                le ||
                  o(
                    "WAWebCoreActionsODS",
                  ).logCallWebtransportConnectFailByCategory(_.likelyCause));
              var f = o("WALogger").ERROR(
                W ||
                  (W = babelHelpers.taggedTemplateLiteralLoose([
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
                !ze() &&
                _.likelyCause !== "aborted" &&
                f.sendLogs("webtransport-connect-fail"),
                et(a, t, Tt(_.likelyCause)));
            }
          }
        })),
        kt.apply(this, arguments)
      );
    }
    function It(e, t) {
      return te.get(e) !== t || t.cleanupRequested;
    }
    function Tt(e) {
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
    function Dt(e) {
      var t = te.get(e);
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
    function xt(e) {
      var t = te.get(e);
      if (t != null) {
        (Ze(t),
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
            $t(t),
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
        (n != null && oe.get(n) === e && oe.delete(n), te.delete(e));
      }
    }
    function $t(e) {
      return e.stats.droppedPackets + e.localDroppedPackets;
    }
    function Pt(e, t) {
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
    function Nt(e) {
      var t = te.get(e);
      if (!(t == null || t.cleanupRequested)) {
        (o("WALogger").LOG(
          x ||
            (x = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] Cleaning up connection ",
              "",
            ])),
          e,
        ),
          Ze(t),
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
        xt(e);
      }
    }
    function Mt(e, t, n) {
      return wt.apply(this, arguments);
    }
    function wt() {
      return (
        (wt = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            if (!le) {
              var r = o(
                  "WAWebVoipRelayConnectionUtils",
                ).getConnectionIdentifier(t, n),
                a = te.get(r),
                i = Je(r);
              if (a == null) {
                if (i == null) {
                  if (Ot(r, e)) return;
                  At(e, "no_relay_info");
                  var l = Array.from(ne.keys()).join(",");
                  o("WALogger").LOG(
                    q ||
                      (q = babelHelpers.taggedTemplateLiteralLoose([
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
                  u = s != null ? oe.get(s) : void 0,
                  c = u != null ? te.get(u) : void 0;
                c != null ? (a = c) : ((a = Ye(r, i)), te.set(r, a));
              }
              a.stats.firstSendRequestTime === 0 &&
                (a.stats.firstSendRequestTime = Date.now());
              var d =
                o("WAWebVoipRelayConnectionUtils").inspectPacketType(e) !==
                o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN;
              if (
                (d &&
                  ne.has(r) &&
                  a.state !==
                    o("WAWebVoipRelayConnectionUtils").ConnectionState.Open &&
                  !o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() &&
                  Ft(),
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
              if (Vt(d, a)) {
                At(e, "dropped");
                return;
              }
              var _ = Pt(
                a,
                o("WAWebVoipRelayConnectionUtils").copyArrayBuffer(e),
              );
              (_
                ? At(e, "buffered")
                : (At(e, "dropped"),
                  o("WALogger").WARN(
                    U ||
                      (U = babelHelpers.taggedTemplateLiteralLoose([
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
                  ne.has(r) &&
                  Et(i));
            }
          },
        )),
        wt.apply(this, arguments)
      );
    }
    function At(e, t) {
      o("WAWebVoipRelayConnectionUtils").inspectPacketType(e) ===
        o("WAWebVoipRelayConnectionUtils").PacketType.STUN_STATEFUL_PING &&
        o(
          "WAWebVoipWebTransportDlProbeODS",
        ).logCallWebtransportStatefulPingBeforeOpen(t);
    }
    function Ft() {
      de || ((de = !0), Oe());
    }
    function Ot(e, t) {
      return ne.size > 0 ||
        !o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() ||
        o("WAWebVoipRelayConnectionUtils").inspectPacketType(t) ===
          o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN
        ? !1
        : Bt(e, t);
    }
    function Bt(e, t) {
      if (J >= j || Z + t.byteLength > K) return !1;
      var n = X.get(e),
        r = n == null;
      if (n == null) {
        if (X.size >= z) return !1;
        ((n = o("WAWebVoipRelayConnectionUtils").createPacketBuffer()),
          X.set(e, n));
      }
      var a = n.packets.length,
        i = n.bufferedBytes,
        l = Y.droppedPackets;
      return o("WAWebVoipRelayConnectionUtils").bufferPacket(
        n,
        o("WAWebVoipRelayConnectionUtils").copyArrayBuffer(t),
        Y,
      )
        ? (Y.droppedPackets > l &&
            o("WALogger").WARN(
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransportConnectionManager] Dropped oldest early STUN packet at per-relay limit",
                ])),
            ),
          (J += n.packets.length - a),
          (Z += n.bufferedBytes - i),
          ee == null && (ee = window.setTimeout(Wt, Q)),
          !0)
        : (r && X.delete(e),
          o("WALogger").WARN(
            $ ||
              ($ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Dropped oversized early STUN packet",
              ])),
          ),
          !1);
    }
    function Wt() {
      (ee != null && (window.clearTimeout(ee), (ee = null)),
        X.clear(),
        (Y = o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats()),
        (J = 0),
        (Z = 0));
    }
    function qt() {
      for (var e of X) {
        var t = e[0],
          n = e[1],
          r = ne.get(t);
        if (r != null) {
          ((J -= n.packets.length), (Z -= n.bufferedBytes));
          for (
            var a = o("WAWebVoipRelayConnectionUtils").shiftPacket(n);
            a != null;
          )
            (Mt(a, r.ip, r.port),
              (a = o("WAWebVoipRelayConnectionUtils").shiftPacket(n)));
          X.delete(t);
        }
      }
      X.size === 0 && ee != null && (window.clearTimeout(ee), (ee = null));
    }
    function Ut() {
      var e = !1;
      se = !0;
      try {
        for (var t of ne.values()) {
          var n = t.clusterDomain,
            r = n != null && rt(n) ? n : null,
            o = n != null ? n : t.id;
          ae.has(o) ||
            (r != null && ie.size >= H) ||
            (ae.add(o), r != null && ie.add(r), (e = !0), Et(t));
        }
      } finally {
        se = !1;
      }
      var a = pe;
      !e || a == null || ze() || je() || Qe(a);
    }
    function Vt(e, t) {
      return t.state ===
        o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed
        ? (e &&
            Qe(
              o("WAWebVoipWebTransportCallSummary").WtFallbackReason
                .SendOnFailedConnection,
            ),
          t.localDroppedPackets++,
          !0)
        : e
          ? !1
          : (t.localDroppedPackets++, !0);
    }
    function Ht(e) {
      var t;
      (o("WALogger").LOG(
        N ||
          (N = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Received relay list update",
          ])),
      ),
        (Ce = e));
      var n = o("WAWebVoipRelayConnectionUtils").extractRelayConnectionMap(e);
      Kt(n) && o("WAWebCoreActionsODS").logCallWebtransportRelaysIpv6Only();
      var r = jt(n),
        a = new Set();
      for (var i of r.values()) {
        var l = i.clusterDomain;
        l != null && a.add(l);
      }
      var s = 0;
      for (var u of te) {
        var c = u[0],
          d = u[1],
          m = r.get(c);
        if (m != null) {
          Gt(c, d, m);
          continue;
        }
        if (
          d.state !==
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
          d.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed
        ) {
          var p = d.clusterDomain;
          if (p != null && a.has(p)) {
            (oe.get(p) === c && oe.delete(p), Nt(c));
            continue;
          }
          s++;
        }
      }
      (re++,
        (ne = r),
        He(),
        (t = o(
          "WAWebVoipWebTransportDataChannelThreadManager",
        ).getWebTransportDataChannelThread()) == null ||
          t.resetDatagramHealth(re),
        o("WAWebVoipCallStateUtils").isCallTerminal(
          o("WAWebVoipLocalCallStateStore").getLocalCallState(),
        )
          ? (ce = !0)
          : Pe());
    }
    function Gt(e, t, n) {
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
      zt(e, t);
    }
    function zt(e, t) {
      var n, r;
      o("WALogger").LOG(
        M ||
          (M = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Reopening ",
            " for new relay tokens",
          ])),
        e,
      );
      var a = (n = t.clusterDomain) != null ? n : e;
      (ae.delete(a),
        ie.delete(a),
        (t.cleanupRequested = !0),
        (r = o(
          "WAWebVoipWebTransportDataChannelThreadManager",
        ).getWebTransportDataChannelThread()) == null || r.close(e),
        xt(e));
    }
    function jt(e) {
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
    function Kt(e) {
      if (e.size === 0) return !1;
      for (var t of e.values()) if (!t.isIPv6) return !1;
      return !0;
    }
    function Qt() {
      ((ue = !1), We(), (le = !0));
    }
    function Xt() {
      var e = Array.from(te.values()),
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
                String($t(e)) +
                St(e) +
                ")"
            : n + ",stats=offthread,droppedPackets=" + String($t(e)) + ")";
        });
      return "total=" + String(e.length) + ";" + (n.join("|") || "none");
    }
    function Yt(e) {
      (e === void 0 && (e = !0),
        o("WALogger").LOG(
          w ||
            (w = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] Closing all connections",
            ])),
        ));
      for (var t of Array.from(te.keys())) Nt(t);
      bt();
      var n = o(
        "WAWebVoipWebTransportDataChannelThreadManager",
      ).stopWebTransportDataChannelWorker();
      (n.finally(function () {
        for (var e of te) {
          var t = e[0],
            n = e[1];
          n.cleanupRequested && xt(t);
        }
      }),
        ne.clear(),
        (ce = !1),
        ae.clear(),
        ie.clear(),
        Wt(),
        oe.clear(),
        (Ae = !1),
        Be(),
        We(),
        le && (Ve(), (he = !1), (ye = !1), (Fe = !1), (Ce = null)),
        e && o("WAWebVoipWebTransportCallSummary").markWtCallSummaryClosed(),
        o("WAWebVoipTsLogger").cleanup(),
        (le = !1));
    }
    ((l.registerFallbackHandler = be),
      (l.registerHealthyHandler = ve),
      (l.resetFallbackStateForNewCall = Se),
      (l.resolvePendingFastSetupForNewCall = Ie),
      (l.handleCallAccepted = xe),
      (l.handleCallLeftRinging = $e),
      (l.registerPacketHandler = Xe),
      (l.sendData = Mt),
      (l.handleRelayListUpdate = Ht),
      (l.prepareForEndCall = Qt),
      (l.getWebTransportRelayDebugSummary = Xt),
      (l.closeAllConnections = Yt));
  },
  98,
);
