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
      P = 8,
      N = new Map(),
      M = new Map(),
      w = new Map(),
      A = !1,
      F = {
        aborted: o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Aborted,
        handshake_timeout: o("WAWebVoipWebTransportCallSummary").WtRelayOutcome
          .Timeout,
        connection_timeout: o("WAWebVoipWebTransportCallSummary").WtRelayOutcome
          .Timeout,
      },
      O = null,
      B = !1,
      W = !1,
      q = null;
    function U(t) {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Fallback handler registered",
          ])),
      ),
        (O = t));
    }
    function V() {
      (Y(),
        (B = !1),
        (W = !1),
        o("WAWebVoipGatingUtils").resetWebTransportFallbackState());
    }
    var H = null,
      G = !1,
      z = null,
      j = !1;
    function K() {
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
    function Q() {
      if (!(G || H != null)) {
        j || ((j = !0), (z = K()));
        var e = z;
        e != null &&
          (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] WebTransport SCTP-fallback timeout armed at ",
                "ms",
              ])),
            e,
          ),
          (H = window.setTimeout(function () {
            return J(e);
          }, e)));
      }
    }
    function X() {
      H != null && (window.clearTimeout(H), (H = null));
    }
    function Y() {
      (X(), (G = !1), (j = !1), (z = null));
    }
    function J(e) {
      H = null;
      var t = [];
      for (var n of N) {
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
        !!ee())
      )
        for (var i of t)
          o("WAWebVoipWebTransportCallSummary").recordWtRelayAttemptComplete(
            i,
            o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Timeout,
            "handshake_timeout",
          );
    }
    function Z() {
      for (var e of N.values())
        if (e.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open)
          return !0;
      return !1;
    }
    function ee() {
      if (A)
        return (
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Skipping fallback: tearing down",
              ])),
          ),
          !1
        );
      if (B)
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
      if (Z())
        return (
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [WebTransportConnectionManager] Skipping fallback: another WT connection still open",
              ])),
          ),
          !1
        );
      var t = O;
      if (t == null)
        return (
          W ||
            ((W = !0),
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
      ((B = !0),
        o("WAWebCoreActionsODS").logCallWebtransportFallbackToSctpTriggered(),
        o("WALogger").LOG(
          g ||
            (g = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] Triggering SCTP fallback",
            ])),
        ));
      try {
        t(q);
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
    function te(e) {}
    function ne(e, t) {
      var n;
      return {
        state: o("WAWebVoipRelayConnectionUtils").ConnectionState.None,
        workerConnectionCreated: !1,
        cleanupRequested: !1,
        packetBuffer: o("WAWebVoipRelayConnectionUtils").createPacketBuffer(),
        id: e,
        connectionTimeout: null,
        stats: o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats(),
        connectionStartTime: 0,
        relayId: t.relayId,
        relayIp: t.ip,
        relayPort: t.port,
        clusterDomain: (n = t.clusterDomain) != null ? n : null,
        relayConnectionInfo: t,
      };
    }
    function re(e) {
      var t,
        n = M.get(e);
      return n != null
        ? n
        : (t = N.get(e)) == null
          ? void 0
          : t.relayConnectionInfo;
    }
    function oe(e) {
      e.connectionTimeout != null &&
        (window.clearTimeout(e.connectionTimeout),
        (e.connectionTimeout = null));
    }
    function ae(e, t) {
      var n;
      if (
        (oe(e),
        (n = o(
          "WAWebVoipWebTransportDataChannelThreadManager",
        ).getWebTransportDataChannelThread()) == null || n.close(t),
        (e.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed),
        !A)
      ) {
        o("WAWebCoreActionsODS").logCallWebtransportConnectFailed();
        var r = e.clusterDomain;
        r != null &&
          o("WAWebVoipTsLogger").logWebtransportConnectionFailed(
            "https://" + r + "/webtransport",
          );
      }
      var a = e.clusterDomain;
      (a != null && w.get(a) === t && w.delete(a), N.delete(t), ee());
    }
    function ie(e) {
      var t = e.authToken,
        n = e.clusterDomain,
        r = e.token;
      if (n == null || !n.endsWith(".whatsapp.com"))
        return (
          o("WALogger")
            .ERROR(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
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
    function le(e) {
      var t = N.get(e.connectionId);
      if (t != null) {
        if (e.event === "first_datagram") {
          G || ((G = !0), X());
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
          (n != null && w.get(n) === e.connectionId && w.delete(n),
          e.event === "closed")
        ) {
          ((t.state = o(
            "WAWebVoipRelayConnectionUtils",
          ).ConnectionState.Closed),
            o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransportConnectionManager] Worker connection closed for ",
                  "",
                ])),
              e.connectionId,
            ),
            t.cleanupRequested && ge(e.connectionId));
          return;
        }
        if (e.event === "error") {
          var r, a;
          ((t.state = o(
            "WAWebVoipRelayConnectionUtils",
          ).ConnectionState.Failed),
            o("WALogger").WARN(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [WebTransportConnectionManager] Worker connection failed for ",
                  ": ",
                  "",
                ])),
              e.connectionId,
              (r = (a = e.error) == null ? void 0 : a.message) != null
                ? r
                : "unknown",
            ),
            ee());
        }
      }
    }
    var se = "WebTransport connect aborted";
    function ue(e) {
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
    function ce(e, t) {
      var n = e.errorMessage,
        r = e.errorName,
        o = e.wtHasStreamErrorCode,
        a = e.wtSource;
      return r === "NotSupportedError"
        ? "invalid_config"
        : r !== "WebTransportError" && n === se
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
    function de() {
      var e = o("WAWebVoipLocalCallStateStore").getLocalCallState();
      return (
        !o("WAWebVoipCallStateUtils").isCallTerminal(e) &&
        !o("WAWebVoipCallStateUtils").isCallIncoming(e)
      );
    }
    function me(e, t, n) {
      var r = t != null && t > 0 ? Date.now() - t : -1,
        o = ue(e),
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
        likelyCause: ce(o, r),
      };
    }
    function pe(e) {
      return _e.apply(this, arguments);
    }
    function _e() {
      return (
        (_e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.id,
            n = e.clusterDomain;
          if (!(n != null && w.has(n))) {
            (n != null && w.set(n, t),
              Q(),
              o("WALogger").LOG(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
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
            var a = N.get(t);
            (a == null && ((a = ne(t, e)), N.set(t, a)),
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
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [WebTransportConnectionManager] Connection timeout for ",
                        "",
                      ])),
                    t,
                  ),
                  A ||
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
                  ae(a, t));
              }, o("WAWebVoipRelayConnectionUtils").CONNECTION_TIMEOUT_MS)));
            try {
              var i = ie(e);
              if (i == null) {
                (A ||
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
                  ae(a, t));
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
              (s.registerStateHandler(le),
                (a.workerConnectionCreated = !0),
                yield s.connect(t, i, e.ip, e.port));
              var c = N.get(t);
              if (
                c == null ||
                c !== a ||
                c.state !==
                  o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting
              ) {
                (o("WALogger").WARN(
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [WebTransportConnectionManager] Connection ",
                      " was cleaned up during establishment, closing worker connection",
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
                  ),
                  s.close(t));
                return;
              }
              (oe(a),
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
                  T ||
                    (T = babelHelpers.taggedTemplateLiteralLoose([
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
                fe(t));
            } catch (e) {
              var m,
                p = me(e, a.connectionStartTime, a.workerConnectionCreated);
              if (N.get(t) !== a && p.likelyCause === "aborted") return;
              (o(
                "WAWebVoipWebTransportCallSummary",
              ).recordWtRelayAttemptComplete(
                t,
                (m = F[p.likelyCause]) != null
                  ? m
                  : o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Failed,
                p.likelyCause,
              ),
                A ||
                  o(
                    "WAWebCoreActionsODS",
                  ).logCallWebtransportConnectFailByCategory(p.likelyCause));
              var _ = o("WALogger").ERROR(
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
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
              (de() &&
                !Z() &&
                p.likelyCause !== "aborted" &&
                _.sendLogs("webtransport-connect-fail"),
                ae(a, t));
            }
          }
        })),
        _e.apply(this, arguments)
      );
    }
    function fe(e) {
      var t = N.get(e);
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
          ((n == null || !n.send(e, r)) && t.stats.droppedPackets++,
            (r = o("WAWebVoipRelayConnectionUtils").shiftPacket(
              t.packetBuffer,
            )));
    }
    function ge(e) {
      var t = N.get(e);
      if (t != null) {
        (oe(t),
          o("WAWebVoipRelayConnectionUtils").clearPacketBuffer(t.packetBuffer),
          o("WALogger").LOG(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
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
        (n != null && w.get(n) === e && w.delete(n), N.delete(e));
      }
    }
    function he(e) {
      var t = N.get(e);
      if (!(t == null || t.cleanupRequested)) {
        (o("WALogger").LOG(
          S ||
            (S = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [WebTransportConnectionManager] Cleaning up connection ",
              "",
            ])),
          e,
        ),
          oe(t),
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
        ge(e);
      }
    }
    function ye(e, t, n) {
      return Ce.apply(this, arguments);
    }
    function Ce() {
      return (
        (Ce = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            if (!A) {
              var r = o(
                  "WAWebVoipRelayConnectionUtils",
                ).getConnectionIdentifier(t, n),
                a = N.get(r),
                i = re(r);
              if (a == null) {
                if (i == null) {
                  var l = Array.from(M.keys()).join(",");
                  o("WALogger").LOG(
                    x ||
                      (x = babelHelpers.taggedTemplateLiteralLoose([
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
                  u = s != null ? w.get(s) : void 0,
                  c = u != null ? N.get(u) : void 0;
                c != null ? (a = c) : ((a = ne(r, i)), N.set(r, a));
              }
              if (
                (a.stats.firstSendRequestTime === 0 &&
                  (a.stats.firstSendRequestTime = Date.now()),
                a.state ===
                  o("WAWebVoipRelayConnectionUtils").ConnectionState.Open)
              ) {
                var d,
                  m =
                    (d = o(
                      "WAWebVoipWebTransportDataChannelThreadManager",
                    ).getWebTransportDataChannelThread()) == null
                      ? void 0
                      : d.send(
                          a.id,
                          o("WAWebVoipRelayConnectionUtils").copyArrayBuffer(e),
                        );
                m !== !0 && a.stats.droppedPackets++;
                return;
              }
              if (!be(e, a)) {
                var p = o("WAWebVoipRelayConnectionUtils").bufferPacket(
                  a.packetBuffer,
                  o("WAWebVoipRelayConnectionUtils").copyArrayBuffer(e),
                  a.stats,
                );
                (p ||
                  o("WALogger").WARN(
                    $ ||
                      ($ = babelHelpers.taggedTemplateLiteralLoose([
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
                    pe(i));
              }
            }
          },
        )),
        Ce.apply(this, arguments)
      );
    }
    function be(e, t) {
      return t.state ===
        o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed ||
        o("WAWebVoipRelayConnectionUtils").inspectPacketType(e) ===
          o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN
        ? (t.stats.droppedPackets++, !0)
        : !1;
    }
    function ve(e) {
      (o("WALogger").LOG(
        R ||
          (R = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Received relay list update",
          ])),
      ),
        (q = e));
      var t = o("WAWebVoipRelayConnectionUtils").extractRelayConnectionMap(e);
      Re(t) && o("WAWebCoreActionsODS").logCallWebtransportRelaysIpv6Only();
      var n = Se(t),
        r = 0;
      for (var a of N) {
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
      M = n;
    }
    function Se(e) {
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
    function Re(e) {
      if (e.size === 0) return !1;
      for (var t of e.values()) if (!t.isIPv6) return !1;
      return !0;
    }
    function Le() {
      A = !0;
    }
    function Ee() {
      var e = Array.from(N.values()),
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
        n = t.slice(0, P).map(function (e) {
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
                String(e.stats.droppedPackets) +
                ")"
            : n +
                ",stats=offthread,droppedPackets=" +
                String(e.stats.droppedPackets) +
                ")";
        });
      return "total=" + String(e.length) + ";" + (n.join("|") || "none");
    }
    function ke() {
      o("WALogger").LOG(
        L ||
          (L = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [WebTransportConnectionManager] Closing all connections",
          ])),
      );
      for (var e of Array.from(N.keys())) he(e);
      var t = o(
        "WAWebVoipWebTransportDataChannelThreadManager",
      ).stopWebTransportDataChannelWorker();
      (t.finally(function () {
        for (var e of N) {
          var t = e[0],
            n = e[1];
          n.cleanupRequested && ge(t);
        }
      }),
        M.clear(),
        w.clear(),
        X(),
        A && (Y(), (B = !1), (W = !1), (q = null)),
        o("WAWebVoipWebTransportCallSummary").markWtCallSummaryClosed(),
        o("WAWebVoipTsLogger").cleanup(),
        (A = !1));
    }
    ((l.registerFallbackHandler = U),
      (l.resetFallbackStateForNewCall = V),
      (l.registerPacketHandler = te),
      (l.sendData = ye),
      (l.handleRelayListUpdate = ve),
      (l.prepareForEndCall = Le),
      (l.getWebTransportRelayDebugSummary = Ee),
      (l.closeAllConnections = ke));
  },
  98,
);
