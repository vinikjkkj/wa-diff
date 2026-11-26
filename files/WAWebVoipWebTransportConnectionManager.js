__d(
  "WAWebVoipWebTransportConnectionManager",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebCoreActionsODS",
    "WAWebNoop",
    "WAWebODS",
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
      V,
      H,
      G,
      z,
      j,
      K = 8,
      Q = 3,
      X = 8,
      Y = 32,
      J = 32 * 1024,
      Z = 1e3,
      ee = new Map(),
      te = o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats(),
      ne = 0,
      re = 0,
      oe = null,
      ae = new Map(),
      ie = new Map(),
      le = 0,
      se = new Map(),
      ue = new Set(),
      ce = new Set(),
      de = !1,
      me = !1,
      pe = !1,
      _e = !1,
      fe = !1,
      ge = !1,
      he = null,
      ye = {
        aborted: o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Aborted,
        handshake_timeout: o("WAWebVoipWebTransportCallSummary").WtRelayOutcome
          .Timeout,
        connection_timeout: o("WAWebVoipWebTransportCallSummary").WtRelayOutcome
          .Timeout,
      },
      Ce = null,
      be = null,
      ve = !1,
      Se = !1,
      Re = null;
    function Le(t) {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Fallback handler registered",
          ])),
      ),
        (Ce = t));
    }
    function Ee(e) {
      be = e;
    }
    function ke() {
      (je(),
        He(),
        _e || cn(),
        Ie(),
        (pe = !0),
        ue.clear(),
        ce.clear(),
        (ge = !1),
        (he = null),
        (ve = !1),
        (We = !1),
        (Se = !1),
        (qe = !1),
        gt.clear(),
        (ht = 0),
        It(),
        o("WAWebVoipGatingUtils").resetWebTransportFallbackState());
    }
    function Ie() {
      var e = Te();
      if (ae.size > e.size) {
        e.size === 0 && Ne();
        for (var t of Array.from(ae.keys())) e.has(t) || rn(t);
      }
      (se.clear(),
        ue.clear(),
        ce.clear(),
        _e || (ie.clear(), (Re = null)),
        e.size > 0 && xe(e));
    }
    function Te() {
      var e = new Set();
      if (!_e) return e;
      for (var t of ae) {
        var n = t[0],
          r = t[1];
        De(r, ie.get(n)) && e.add(n);
      }
      return e;
    }
    function De(e, t) {
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
    function xe(e) {
      var t;
      for (var n of e) {
        var r,
          a = (r = ae.get(n)) == null ? void 0 : r.clusterDomain;
        a != null && se.set(a, n);
      }
      (le++,
        (t = o(
          "WAWebVoipWebTransportDataChannelThreadManager",
        ).getWebTransportDataChannelThread()) == null ||
          t.resetDatagramHealth(le));
    }
    function $e(e) {
      if (_e) {
        if (((_e = !1), !e)) {
          (Pe(), ie.clear(), (Re = null), cn());
          return;
        }
        Ae();
      }
    }
    function Pe() {
      if (ae.size !== 0) {
        Ne();
        for (var e of Array.from(ae.keys())) rn(e);
        (se.clear(), Gt());
      }
    }
    function Ne() {
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
    function Me() {
      if (((ge = !0), !Xe())) {
        if (Ye()) {
          if (o("WAWebVoipGatingUtils").isWebTransportUntilAcceptEnabled()) {
            ze(
              0,
              o("WAWebVoipWebTransportCallSummary").WtFallbackReason
                .NoReadyAfterAcceptTimeout,
            );
            return;
          }
          Ge();
          return;
        }
        var e = he;
        e != null && Ze(e, !0);
      }
    }
    function we(e, t) {
      !o("WAWebVoipCallStateUtils").isCallRinging(e) ||
        o("WAWebVoipCallStateUtils").isCallRinging(t) ||
        o("WAWebVoipCallStateUtils").isCallTerminal(t) ||
        Xe() ||
        !Ye() ||
        !o("WAWebVoipGatingUtils").isWebTransportUntilAcceptEnabled() ||
        ze(
          0,
          o("WAWebVoipWebTransportCallSummary").WtFallbackReason
            .NoReadyDuringRingingTimeout,
        );
    }
    function Ae() {
      de ||
        !pe ||
        ve ||
        !o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() ||
        (mn(), dn(), Ge());
    }
    var Fe = null,
      Oe = null,
      Be = !1,
      We = !1,
      qe = !1;
    function Ue() {
      if (!(Be || Fe != null)) {
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
          (Fe = window.setTimeout(function () {
            return Qe(e);
          }, e)));
      }
    }
    function Ve() {
      Fe != null && (window.clearTimeout(Fe), (Fe = null));
    }
    function He() {
      Oe != null && (window.clearTimeout(Oe), (Oe = null));
    }
    function Ge() {
      if (
        !(
          !o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() ||
          ve ||
          Xe() ||
          !Ye() ||
          (o("WAWebVoipCallStateUtils").isCallRinging(
            o("WAWebVoipLocalCallStateStore").getLocalCallState(),
          ) &&
            o("WAWebVoipGatingUtils").isWebTransportUntilAcceptEnabled())
        ) &&
        Oe == null
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
          (Oe = window.setTimeout(function () {
            ((Oe = null),
              ze(
                e,
                ge
                  ? o("WAWebVoipWebTransportCallSummary").WtFallbackReason
                      .NoReadyAfterAcceptTimeout
                  : o("WAWebVoipWebTransportCallSummary").WtFallbackReason
                      .NoReadyDuringRingingTimeout,
              ));
          }, e)));
      }
    }
    function ze(e, t) {
      if (!Xe()) {
        var n = [];
        for (var r of ae) {
          var a = r[0],
            i = r[1];
          ie.has(a) &&
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
          Ze(t, !0, function () {
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
    function je() {
      Ke();
    }
    function Ke() {
      (Ve(), (Be = !1), (fe = !1));
    }
    function Qe(e) {
      Fe = null;
      var t = [];
      for (var n of ae) {
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
        Ze(
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
    function Xe() {
      for (var e of ae) {
        var t = e[0],
          n = e[1];
        if (
          ie.has(t) &&
          n.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open
        )
          return !0;
      }
      return !1;
    }
    function Ye() {
      for (var e of ae) {
        var t = e[0],
          n = e[1];
        if (
          ie.has(t) &&
          n.state ===
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting &&
          !n.cleanupRequested
        )
          return !0;
      }
      return !1;
    }
    function Je(e) {
      return e
        ? !1
        : me
          ? (o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransportConnectionManager] Skipping fallback: current relay preconnect pass is still starting sibling attempts",
                ])),
            ),
            !0)
          : Xe()
            ? (o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportConnectionManager] Skipping fallback: another current WT connection still open",
                  ])),
              ),
              !0)
            : o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() &&
                !Be &&
                Ye()
              ? (o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WebTransportConnectionManager] Skipping fallback: another current WT connection still connecting",
                    ])),
                ),
                !0)
              : !1;
    }
    function Ze(e, t, n) {
      if ((t === void 0 && (t = !1), de))
        return (
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Skipping fallback: tearing down",
              ])),
          ),
          !1
        );
      if (ve)
        return (
          o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Skipping fallback: already fell back this call",
              ])),
          ),
          !1
        );
      var a = o("WAWebVoipLocalCallStateStore").getLocalCallState();
      if (
        a === o("WAWebVoipWaCallEnums").CallState.CallStateEnding ||
        a === o("WAWebVoipWaCallEnums").CallState.CallActiveElseWhere
      )
        return (
          o("WALogger").LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Skipping fallback: call ended or resolved elsewhere (state=",
                ")",
              ])),
            String(a),
          ),
          !1
        );
      if (Je(t)) return !1;
      var i = Ce;
      if (i == null)
        return (
          Se ||
            ((Se = !0),
            o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransportConnectionManager] Skipping fallback: no handler registered (fallback abprop off)",
                ])),
            ),
            r("WAWebODS").incr(
              "web.call.webtransport.fallback_to_sctp.skipped_disabled",
            )),
          !1
        );
      ((ve = !0),
        o("WAWebVoipWebTransportCallSummary").recordWtFallbackTriggered(a, e),
        n == null || n(),
        r("WAWebODS").incr("web.call.webtransport.fallback_to_sctp.triggered"),
        o("WALogger").LOG(
          b ||
            (b = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] Triggering SCTP fallback",
            ])),
        ));
      try {
        i(Re);
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
    function et(e) {}
    function tt(e, t) {
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
    function nt(e) {
      var t,
        n = ie.get(e);
      return n != null
        ? n
        : (t = ae.get(e)) == null
          ? void 0
          : t.relayConnectionInfo;
    }
    function rt(e) {
      e.connectionTimeout != null &&
        (window.clearTimeout(e.connectionTimeout),
        (e.connectionTimeout = null));
    }
    function ot(e, t, n) {
      var a,
        i = ie.has(t);
      if (
        (rt(e),
        (a = o(
          "WAWebVoipWebTransportDataChannelThreadManager",
        ).getWebTransportDataChannelThread()) == null || a.close(t),
        (e.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed),
        !de)
      ) {
        r("WAWebODS").incr("web.call.webtransport.connect.failed");
        var l = e.clusterDomain;
        l != null &&
          o("WAWebVoipTsLogger").logWebtransportConnectionFailed(
            "https://" + l + "/webtransport",
          );
      }
      var s = e.clusterDomain;
      s != null && se.get(s) === t && se.delete(s);
      var u = ae.get(t) === e;
      (u && (ae.delete(t), kt(t)), i && u && ((he = n), Ze(n)));
    }
    var at = /^wt\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.fna\.whatsapp\.net$/i;
    function it(e) {
      var t = e.authToken,
        n = e.clusterDomain,
        r = e.token;
      if (n == null || !lt(n))
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
    function lt(e) {
      return e.endsWith(".whatsapp.com") || at.test(e);
    }
    function st(e) {
      qe ||
        e == null ||
        !at.test(e) ||
        ((qe = !0),
        o("WAWebCoreActionsODS").logCallWebtransportFnaRelayTrafficSent());
    }
    function ut(e) {
      var t = ae.get(e.connectionId);
      if (t != null) {
        if (e.event === "first_stun_datagram_sent") {
          ie.has(e.connectionId) && e.relayGeneration === le && ln();
          return;
        }
        if (e.event === "first_relay_datagram_sent") {
          ie.has(e.connectionId) &&
            e.relayGeneration === le &&
            (o("WAWebVoipWebTransportCallSummary").recordWtRelayTrafficSent(),
            st(t.clusterDomain));
          return;
        }
        if (e.event === "first_datagram") {
          (Lt(e.connectionId),
            ie.has(e.connectionId) &&
              e.relayGeneration === le &&
              !Be &&
              ((Be = !0),
              He(),
              Ve(),
              !ve && !We && ((We = !0), be == null || be())));
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
        (u != null && se.get(u) === e.connectionId && se.delete(u), ct(e, t));
      }
    }
    function ct(e, t) {
      if ((kt(e.connectionId), !Ct(e, t))) {
        if (e.event === "closed") {
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
            t.cleanupRequested && en(e.connectionId));
          return;
        }
        if (e.event === "error") {
          var n,
            r,
            a =
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
              (n = (r = e.error) == null ? void 0 : r.message) != null
                ? n
                : "unknown",
            ),
            a &&
              ie.has(e.connectionId) &&
              $t(o("WAWebVoipLocalCallStateStore").getLocalCallState()))
          ) {
            var i, l, s;
            o(
              "WAWebVoipWebTransportSessionEndODS",
            ).logCallWebtransportSessionEnd(
              o(
                "WAWebVoipWebTransportSessionEndODS",
              ).classifyWebtransportSessionEnd(
                (i = e.error) == null ? void 0 : i.source,
                (l = e.error) == null ? void 0 : l.message,
              ),
              (s = e.error) == null ? void 0 : s.sinceLastDatagramMs,
            );
          }
          if (ie.has(e.connectionId)) {
            var u,
              c = Pt((u = e.error) == null ? void 0 : u.source);
            ((he = c), Ze(c));
          } else en(e.connectionId);
        }
      }
    }
    var dt = 18241,
      mt = 2,
      pt = 10,
      _t = 2e3,
      ft = new Map(),
      gt = new Map(),
      ht = 0;
    function yt(e) {
      return e.closeCode !== dt || !ie.has(e.connectionId)
        ? !1
        : (o(
            "WAWebVoipWebTransportSessionEndODS",
          ).logCallWebtransportSessionEndRelayDraining(),
          !0);
    }
    function Ct(e, t) {
      var n;
      if (!yt(e) || t.cleanupRequested) return !1;
      var r = nt(e.connectionId);
      return r == null ||
        !o("WAWebVoipGatingUtils").isWebTransportReconnectOnRelayDrainEnabled()
        ? !1
        : Tt()
          ? Dt(e.connectionId)
            ? (xt(e, t),
              gt.set(
                e.connectionId,
                ((n = gt.get(e.connectionId)) != null ? n : 0) + 1,
              ),
              ht++,
              o("WALogger").LOG(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportConnectionManager] Relay ",
                    " is draining, reconnecting",
                  ])),
                e.connectionId,
              ),
              en(e.connectionId),
              St(e.connectionId),
              Xt(r),
              o(
                "WAWebVoipWebTransportSessionEndODS",
              ).logCallWebtransportRelayDrainReconnect("started"),
              !0)
            : (o(
                "WAWebVoipWebTransportSessionEndODS",
              ).logCallWebtransportRelayDrainReconnect("limit_reached"),
              bt(e, t))
          : vt(
              e,
              t,
              o("WAWebVoipWebTransportCallSummary").WtFallbackReason
                .SessionError,
            );
    }
    function bt(e, t) {
      var n, r;
      return e.event !== "error"
        ? vt(
            e,
            t,
            o("WAWebVoipWebTransportCallSummary").WtFallbackReason
              .RelayDrainReconnectLimit,
          )
        : (xt(e, t),
          (t.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed),
          o("WALogger").WARN(
            k ||
              (k = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Worker connection failed for ",
                ": ",
                "",
              ])),
            e.connectionId,
            (n = (r = e.error) == null ? void 0 : r.message) != null
              ? n
              : "unknown",
          ),
          (he = o("WAWebVoipWebTransportCallSummary").WtFallbackReason
            .RelayDrainReconnectLimit),
          Ze(
            o("WAWebVoipWebTransportCallSummary").WtFallbackReason
              .RelayDrainReconnectLimit,
          ),
          !0);
    }
    function vt(e, t, n) {
      return e.event !== "closed"
        ? !1
        : ((t.state = o(
            "WAWebVoipRelayConnectionUtils",
          ).ConnectionState.Failed),
          (he = n),
          Ze(n));
    }
    function St(e) {
      (kt(e),
        Be &&
          ft.set(e, {
            startedAtMs: Date.now(),
            timeoutId: window.setTimeout(function () {
              return Rt(e);
            }, _t),
          }));
    }
    function Rt(e) {
      var t;
      if ((ft.delete(e), !!ie.has(e))) {
        if (Et(e)) {
          o("WALogger").LOG(
            I ||
              (I = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Drain reconnect to ",
                " got no datagram, but another relay is open",
              ])),
            e,
          );
          return;
        }
        o("WALogger").LOG(
          T ||
            (T = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] Drain reconnect to ",
              " got no datagram in ",
              "ms",
            ])),
          e,
          _t,
        );
        var n =
          ((t = ae.get(e)) == null ? void 0 : t.state) ===
          o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting;
        Ze(
          o("WAWebVoipWebTransportCallSummary").WtFallbackReason
            .RelayDrainReconnectTimeout,
          !0,
          function () {
            (o(
              "WAWebVoipWebTransportSessionEndODS",
            ).logCallWebtransportRelayDrainReconnect("deadline_fallback"),
              n &&
                o(
                  "WAWebVoipWebTransportCallSummary",
                ).recordWtRelayAttemptComplete(
                  e,
                  o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Timeout,
                  "handshake_timeout",
                ));
          },
        );
      }
    }
    function Lt(e) {
      var t = ft.get(e);
      (t != null &&
        (o(
          "WAWebVoipWebTransportSessionEndODS",
        ).logCallWebtransportRelayDrainReconnect("healthy"),
        o("WALogger").LOG(
          D ||
            (D = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] Drain reconnect to ",
              " got its first datagram after ",
              "ms",
            ])),
          e,
          Date.now() - t.startedAtMs,
        )),
        kt(e),
        gt.delete(e));
    }
    function Et(e) {
      for (var t of ae) {
        var n = t[0],
          r = t[1];
        if (
          n !== e &&
          !ft.has(n) &&
          ie.has(n) &&
          r.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open
        )
          return !0;
      }
      return !1;
    }
    function kt(e) {
      var t = ft.get(e);
      t != null && (window.clearTimeout(t.timeoutId), ft.delete(e));
    }
    function It() {
      for (var e of ft.values()) window.clearTimeout(e.timeoutId);
      ft.clear();
    }
    function Tt() {
      return (
        !de &&
        !ve &&
        !o("WAWebVoipCallStateUtils").isCallTerminal(
          o("WAWebVoipLocalCallStateStore").getLocalCallState(),
        )
      );
    }
    function Dt(e) {
      var t;
      return ((t = gt.get(e)) != null ? t : 0) < mt && ht < pt;
    }
    function xt(e, t) {
      if (
        e.event === "error" &&
        t.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open &&
        $t(o("WAWebVoipLocalCallStateStore").getLocalCallState())
      ) {
        var n, r, a;
        o("WAWebVoipWebTransportSessionEndODS").logCallWebtransportSessionEnd(
          o(
            "WAWebVoipWebTransportSessionEndODS",
          ).classifyWebtransportSessionEnd(
            (n = e.error) == null ? void 0 : n.source,
            (r = e.error) == null ? void 0 : r.message,
          ),
          (a = e.error) == null ? void 0 : a.sinceLastDatagramMs,
        );
      }
    }
    function $t(e) {
      return (
        e === o("WAWebVoipWaCallEnums").CallState.CallActive ||
        e === o("WAWebVoipWaCallEnums").CallState.ConnectedLonely
      );
    }
    function Pt(e) {
      return e === "session"
        ? o("WAWebVoipWebTransportCallSummary").WtFallbackReason.SessionError
        : e === "stream"
          ? o("WAWebVoipWebTransportCallSummary").WtFallbackReason.StreamError
          : o("WAWebVoipWebTransportCallSummary").WtFallbackReason.WorkerError;
    }
    var Nt = "WebTransport connect aborted";
    function Mt(e) {
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
    function wt(e, t) {
      var n = e.errorMessage,
        r = e.errorName,
        o = e.wtHasStreamErrorCode,
        a = e.wtSource;
      return r === "NotSupportedError"
        ? "invalid_config"
        : r !== "WebTransportError" && n === Nt
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
    function At(e, t, n) {
      var r = t != null && t > 0 ? Date.now() - t : -1,
        o = Mt(e),
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
        likelyCause: wt(o, r),
      };
    }
    var Ft = 512,
      Ot = 64;
    function Bt(e, t) {
      return e > 0 ? e : t;
    }
    function Wt() {
      return {
        rejectOversizedDatagrams: Qt(),
        incomingMaxBufferedDatagrams: Bt(r("justknobx")._("6438"), Ft),
        outgoingMaxBufferedDatagrams: Bt(r("justknobx")._("6439"), Ot),
        outgoingMaxAgeMs: Math.max(0, r("justknobx")._("6440")),
        nativeSendRing: Kt(),
        awaitSessionCloseCode: !0,
      };
    }
    var qt = null,
      Ut = null;
    function Vt() {
      if (!(qt != null || Ut != null)) {
        var e =
          o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm");
        ((Ut = e),
          e
            .then(function (t) {
              Ut === e && ((qt = t), (Ut = null));
            })
            .catch(function (t) {
              (Ut === e && (Ut = null),
                o("WALogger").WARN(
                  x ||
                    (x = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WebTransportConnectionManager] native send ring module unavailable: ",
                      "",
                    ])),
                  r("getErrorSafe")(t).message,
                ));
            }));
      }
    }
    function Ht(e, t, n) {
      if (e.nativeSendRing !== !0 || n == null) return e;
      var r = Array.from(ie.values())
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
    function Gt() {
      var e = qt,
        t = Ut;
      ((qt = null),
        (Ut = null),
        e != null ? zt(e) : t != null && t.then(zt, r("WAWebNoop")));
    }
    function zt(e) {
      try {
        e.shutdownAnyWebTransportRingBuffer == null ||
          e.shutdownAnyWebTransportRingBuffer();
      } catch (e) {
        o("WALogger").WARN(
          $ ||
            ($ = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] native send ring shutdown failed: ",
              "",
            ])),
          r("getErrorSafe")(e).message,
        );
      }
    }
    function jt(e) {
      return e.workerNativeRingPackets === 0 &&
        e.workerNativeRingDroppedPackets === 0
        ? ""
        : ",nativeRingPackets=" +
            String(e.workerNativeRingPackets) +
            ",nativeRingDroppedPackets=" +
            String(e.workerNativeRingDroppedPackets);
    }
    function Kt() {
      try {
        return r("justknobx")._("6832");
      } catch (e) {
        return (
          o("WALogger").WARN(
            P ||
              (P = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] native-send-ring JK unavailable, using fallback=false: ",
                "",
              ])),
            r("getErrorSafe")(e).message,
          ),
          !1
        );
      }
    }
    function Qt() {
      try {
        return r("justknobx")._("3387");
      } catch (e) {
        return (
          o("WALogger").WARN(
            N ||
              (N = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] oversized-datagram JK unavailable, using fallback=true: ",
                "",
              ])),
            r("getErrorSafe")(e).message,
          ),
          !0
        );
      }
    }
    async function Xt(e) {
      var t = e.id,
        n = e.clusterDomain;
      if (!(n != null && se.has(n))) {
        (n != null && se.set(n, t),
          o("WALogger").LOG(
            M ||
              (M = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Connecting to ",
                "",
              ])),
            t,
          ),
          r("WAWebODS").incr("web.call.webtransport.connect.attempted"),
          n != null &&
            o("WAWebVoipTsLogger").logWebtransportConnectionStart(
              "https://" + n + "/webtransport",
            ));
        var a = ae.get(t);
        (a == null && ((a = tt(t, e)), ae.set(t, a)),
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
                w ||
                  (w = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportConnectionManager] Connection timeout for ",
                    "",
                  ])),
                t,
              ),
              de ||
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
              ot(
                a,
                t,
                o("WAWebVoipWebTransportCallSummary").WtFallbackReason
                  .ConnectionTimeout,
              ));
          }, o("WAWebVoipRelayConnectionUtils").CONNECTION_TIMEOUT_MS)));
        try {
          var i = it(e);
          if (i == null) {
            (de ||
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
              ot(
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
          if (Yt(t, a)) return;
          if (!l || s == null) {
            var u = r("err")("WebTransport worker is unavailable");
            throw ((u.name = "NotSupportedError"), u);
          }
          (s.registerStateHandler(ut), (a.workerConnectionCreated = !0));
          var c = Wt();
          (c.nativeSendRing === !0 && Vt(),
            await s.connect(t, i, e.ip, e.port, le, Ht(c, t, n)));
          var d = ae.get(t);
          if (
            d == null ||
            d !== a ||
            d.state !==
              o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting ||
            d.cleanupRequested ||
            ve
          ) {
            (o("WALogger").WARN(
              A ||
                (A = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransportConnectionManager] Connection ",
                  " was cleaned up during establishment, closing worker connection",
                ])),
              t,
            ),
              ve ||
                o(
                  "WAWebVoipWebTransportCallSummary",
                ).recordWtRelayAttemptComplete(
                  t,
                  o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Aborted,
                  "cleaned_up",
                ),
              ve && d === a && !a.cleanupRequested && en(t),
              s.close(t));
            return;
          }
          (rt(a),
            (a.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Open),
            (a.stats.connectionReadyTime = Date.now()),
            ie.has(t) && ((he = null), He()),
            o("WAWebVoipWebTransportCallSummary").recordWtRelayAttemptComplete(
              t,
              o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Opened,
              null,
            ),
            o("WALogger").LOG(
              F ||
                (F = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransportConnectionManager] Connection opened for ",
                  "",
                ])),
              t,
            ),
            r("WAWebODS").incr("web.call.webtransport.connect.succeeded"));
          var m = a.clusterDomain;
          (m != null &&
            o("WAWebVoipTsLogger").logWebtransportConnectionComplete(
              "https://" + m + "/webtransport",
            ),
            Zt(t));
        } catch (e) {
          var p,
            _ = At(e, a.connectionStartTime, a.workerConnectionCreated);
          if (ae.get(t) !== a && _.likelyCause === "aborted") return;
          (o("WAWebVoipWebTransportCallSummary").recordWtRelayAttemptComplete(
            t,
            (p = ye[_.likelyCause]) != null
              ? p
              : o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Failed,
            _.likelyCause,
          ),
            de ||
              o("WAWebCoreActionsODS").logCallWebtransportConnectFailByCategory(
                _.likelyCause,
              ));
          var f = o("WALogger").ERROR(
            O ||
              (O = babelHelpers.taggedTemplateLiteralLoose([
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
            !Xe() &&
            _.likelyCause !== "aborted" &&
            f.sendLogs("webtransport-connect-fail"),
            ot(a, t, Jt(_.likelyCause)));
        }
      }
    }
    function Yt(e, t) {
      return ae.get(e) !== t || t.cleanupRequested;
    }
    function Jt(e) {
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
    function Zt(e) {
      var t = ae.get(e);
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
    function en(e) {
      var t = ae.get(e);
      if (t != null) {
        (rt(t),
          o("WAWebVoipRelayConnectionUtils").clearPacketBuffer(t.packetBuffer),
          o("WALogger").LOG(
            B ||
              (B = babelHelpers.taggedTemplateLiteralLoose([
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
            tn(t),
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
        (n != null && se.get(n) === e && se.delete(n), ae.delete(e), kt(e));
      }
    }
    function tn(e) {
      return e.stats.droppedPackets + e.localDroppedPackets;
    }
    function nn(e, t) {
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
    function rn(e) {
      var t = ae.get(e);
      if (!(t == null || t.cleanupRequested)) {
        (o("WALogger").LOG(
          W ||
            (W = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] Cleaning up connection ",
              "",
            ])),
          e,
        ),
          rt(t),
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
        en(e);
      }
    }
    async function on(e, t, n) {
      if (!de) {
        var r = o("WAWebVoipRelayConnectionUtils").getConnectionIdentifier(
            t,
            n,
          ),
          a = ae.get(r),
          i = nt(r);
        if (a == null) {
          if (i == null) {
            if (sn(r, e)) return;
            an(e, "no_relay_info");
            var l = Array.from(ie.keys()).join(",");
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
            u = s != null ? se.get(s) : void 0,
            c = u != null ? ae.get(u) : void 0;
          c != null ? (a = c) : ((a = tt(r, i)), ae.set(r, a));
        }
        a.stats.firstSendRequestTime === 0 &&
          (a.stats.firstSendRequestTime = Date.now());
        var d =
          o("WAWebVoipRelayConnectionUtils").inspectPacketType(e) !==
          o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN;
        if (
          (d &&
            ie.has(r) &&
            a.state !==
              o("WAWebVoipRelayConnectionUtils").ConnectionState.Open &&
            !o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() &&
            ln(),
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
        if (pn(d, a)) {
          an(e, "dropped");
          return;
        }
        var _ = nn(a, o("WAWebVoipRelayConnectionUtils").copyArrayBuffer(e));
        (_
          ? an(e, "buffered")
          : (an(e, "dropped"),
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
              o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed) &&
            i != null &&
            ie.has(r) &&
            Xt(i));
      }
    }
    function an(e, t) {
      o("WAWebVoipRelayConnectionUtils").inspectPacketType(e) ===
        o("WAWebVoipRelayConnectionUtils").PacketType.STUN_STATEFUL_PING &&
        o(
          "WAWebVoipWebTransportDlProbeODS",
        ).logCallWebtransportStatefulPingBeforeOpen(t);
    }
    function ln() {
      fe || ((fe = !0), Ue());
    }
    function sn(e, t) {
      return ie.size > 0 ||
        !o("WAWebVoipGatingUtils").isWebTransportFastSetupEnabled() ||
        o("WAWebVoipRelayConnectionUtils").inspectPacketType(t) ===
          o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN
        ? !1
        : un(e, t);
    }
    function un(e, t) {
      if (ne >= Y || re + t.byteLength > J) return !1;
      var n = ee.get(e),
        r = n == null;
      if (n == null) {
        if (ee.size >= X) return !1;
        ((n = o("WAWebVoipRelayConnectionUtils").createPacketBuffer()),
          ee.set(e, n));
      }
      var a = n.packets.length,
        i = n.bufferedBytes,
        l = te.droppedPackets;
      return o("WAWebVoipRelayConnectionUtils").bufferPacket(
        n,
        o("WAWebVoipRelayConnectionUtils").copyArrayBuffer(t),
        te,
      )
        ? (te.droppedPackets > l &&
            o("WALogger").WARN(
              H ||
                (H = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransportConnectionManager] Dropped oldest early STUN packet at per-relay limit",
                ])),
            ),
          (ne += n.packets.length - a),
          (re += n.bufferedBytes - i),
          oe == null && (oe = window.setTimeout(cn, Z)),
          !0)
        : (r && ee.delete(e),
          o("WALogger").WARN(
            V ||
              (V = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Dropped oversized early STUN packet",
              ])),
          ),
          !1);
    }
    function cn() {
      (oe != null && (window.clearTimeout(oe), (oe = null)),
        ee.clear(),
        (te = o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats()),
        (ne = 0),
        (re = 0));
    }
    function dn() {
      for (var e of ee) {
        var t = e[0],
          n = e[1],
          r = ie.get(t);
        if (r != null) {
          ((ne -= n.packets.length), (re -= n.bufferedBytes));
          for (
            var a = o("WAWebVoipRelayConnectionUtils").shiftPacket(n);
            a != null;
          )
            (on(a, r.ip, r.port),
              (a = o("WAWebVoipRelayConnectionUtils").shiftPacket(n)));
          ee.delete(t);
        }
      }
      ee.size === 0 && oe != null && (window.clearTimeout(oe), (oe = null));
    }
    function mn() {
      var e = !1;
      me = !0;
      try {
        for (var t of ie.values()) {
          var n = t.clusterDomain,
            r = n != null && lt(n) ? n : null,
            o = n != null ? n : t.id;
          ue.has(o) ||
            (r != null && ce.size >= Q) ||
            (ue.add(o), r != null && ce.add(r), (e = !0), Xt(t));
        }
      } finally {
        me = !1;
      }
      var a = he;
      !e || a == null || Xe() || Ye() || Ze(a);
    }
    function pn(e, t) {
      return t.state ===
        o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed
        ? (e &&
            Ze(
              o("WAWebVoipWebTransportCallSummary").WtFallbackReason
                .SendOnFailedConnection,
            ),
          t.localDroppedPackets++,
          !0)
        : e
          ? !1
          : (t.localDroppedPackets++, !0);
    }
    function _n(e) {
      var t;
      (o("WALogger").LOG(
        G ||
          (G = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Received relay list update",
          ])),
      ),
        (Re = e));
      var n = o("WAWebVoipRelayConnectionUtils").extractRelayConnectionMap(e);
      yn(n) && r("WAWebODS").incr("web.call.webtransport.relays.ipv6_only");
      var a = hn(n),
        i = new Set();
      for (var l of a.values()) {
        var s = l.clusterDomain;
        s != null && i.add(s);
      }
      var u = 0;
      for (var c of ae) {
        var d = c[0],
          m = c[1],
          p = a.get(d);
        if (p != null) {
          fn(d, m, p);
          continue;
        }
        if (
          m.state !==
            o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
          m.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed
        ) {
          var _ = m.clusterDomain;
          if (_ != null && i.has(_)) {
            (se.get(_) === d && se.delete(_), rn(d));
            continue;
          }
          u++;
        }
      }
      (le++,
        (ie = a),
        Ke(),
        (t = o(
          "WAWebVoipWebTransportDataChannelThreadManager",
        ).getWebTransportDataChannelThread()) == null ||
          t.resetDatagramHealth(le),
        o("WAWebVoipCallStateUtils").isCallTerminal(
          o("WAWebVoipLocalCallStateStore").getLocalCallState(),
        )
          ? (_e = !0)
          : Ae());
    }
    function fn(e, t, n) {
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
      gn(e, t);
    }
    function gn(e, t) {
      var n, r;
      o("WALogger").LOG(
        z ||
          (z = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Reopening ",
            " for new relay tokens",
          ])),
        e,
      );
      var a = (n = t.clusterDomain) != null ? n : e;
      (ue.delete(a),
        ce.delete(a),
        (t.cleanupRequested = !0),
        (r = o(
          "WAWebVoipWebTransportDataChannelThreadManager",
        ).getWebTransportDataChannelThread()) == null || r.close(e),
        en(e));
    }
    function hn(e) {
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
    function yn(e) {
      if (e.size === 0) return !1;
      for (var t of e.values()) if (!t.isIPv6) return !1;
      return !0;
    }
    function Cn() {
      ((pe = !1), He(), It(), (de = !0));
    }
    function bn() {
      var e = Array.from(ae.values()),
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
        n = t.slice(0, K).map(function (e) {
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
                String(tn(e)) +
                jt(e) +
                ")"
            : n + ",stats=offthread,droppedPackets=" + String(tn(e)) + ")";
        });
      return "total=" + String(e.length) + ";" + (n.join("|") || "none");
    }
    function vn(e) {
      (e === void 0 && (e = !0),
        o("WALogger").LOG(
          j ||
            (j = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] Closing all connections",
            ])),
        ));
      for (var t of Array.from(ae.keys())) rn(t);
      Gt();
      var n = o(
        "WAWebVoipWebTransportDataChannelThreadManager",
      ).stopWebTransportDataChannelWorker();
      (n.finally(function () {
        for (var e of ae) {
          var t = e[0],
            n = e[1];
          n.cleanupRequested && en(t);
        }
      }),
        ie.clear(),
        (_e = !1),
        ue.clear(),
        ce.clear(),
        cn(),
        se.clear(),
        (We = !1),
        Ve(),
        He(),
        It(),
        gt.clear(),
        de && (je(), (ht = 0), (ve = !1), (Se = !1), (qe = !1), (Re = null)),
        e && o("WAWebVoipWebTransportCallSummary").markWtCallSummaryClosed(),
        o("WAWebVoipTsLogger").cleanup(),
        (de = !1));
    }
    ((l.registerFallbackHandler = Le),
      (l.registerHealthyHandler = Ee),
      (l.resetFallbackStateForNewCall = ke),
      (l.resolvePendingFastSetupForNewCall = $e),
      (l.handleCallAccepted = Me),
      (l.handleCallLeftRinging = we),
      (l.registerPacketHandler = et),
      (l.sendData = on),
      (l.handleRelayListUpdate = _n),
      (l.prepareForEndCall = Cn),
      (l.getWebTransportRelayDebugSummary = bn),
      (l.closeAllConnections = vn));
  },
  98,
);
