__d(
  "WAWebVoipSctpDiagnostics",
  ["Promise", "WALogger", "asyncToGeneratorRuntime"],
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
      f = 1e3;
    function g(e) {
      return e != null ? String(e) : "N/A";
    }
    function h(e) {
      return e != null ? Math.round(e * 1e3) + "ms" : "N/A";
    }
    function y(e) {
      var t, n, r;
      if (e == null) return "N/A";
      var o = (t = e.address) != null ? t : "N/A",
        a = g(e.port),
        i = (n = e.protocol) != null ? n : "N/A",
        l = (r = e.candidateType) != null ? r : "N/A",
        s = e.tcpType != null ? "/" + e.tcpType : "";
      return o + ":" + a + "/" + i + "/" + l + s;
    }
    function C(e) {
      var t, n;
      if (e == null) return "N/A";
      var r = (t = e.protocol) != null ? t : "N/A",
        o = (n = e.candidateType) != null ? n : "N/A",
        a = e.tcpType != null ? "/" + e.tcpType : "";
      return r + "/" + o + a;
    }
    function b(e, t) {
      var n = t != null ? e.get(t) : null;
      return n != null && n.type === "candidate-pair" ? n : null;
    }
    function v(e) {
      var t,
        n = null,
        r = null;
      return (
        e.forEach(function (e) {
          if (e.type === "transport") {
            var t,
              o = e;
            n = (t = o.selectedCandidatePairId) != null ? t : n;
          } else e.type === "candidate-pair" && e.nominated === !0 && (r = e);
        }),
        (t = b(e, n)) != null ? t : r
      );
    }
    function S(e, t) {
      var n = t != null ? e.get(t) : null;
      return n != null &&
        (n.type === "local-candidate" || n.type === "remote-candidate")
        ? n
        : null;
    }
    function R(e, t) {
      if (t == null) return "N/A";
      var n = S(e, t.localCandidateId),
        r = S(e, t.remoteCandidateId);
      return (
        "state=" +
        g(t.state) +
        " " +
        ("nominated=" + g(t.nominated) + " ") +
        ("rtt=" + h(t.currentRoundTripTime) + " ") +
        ("tx=" + g(t.bytesSent) + " ") +
        ("rx=" + g(t.bytesReceived) + " ") +
        ("local=" + y(n) + " ") +
        ("remote=" + y(r))
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.connectionId,
            n = e.peerConnection;
          try {
            var r = yield T({
              connectionId: t,
              peerConnection: n,
              reason: "pc_connected",
            });
            if (r == null) return;
            var a = v(r),
              i = S(r, a == null ? void 0 : a.localCandidateId),
              l = S(r, a == null ? void 0 : a.remoteCandidateId);
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SCTP] selected pair ",
                  " local=",
                  " remote=",
                  "",
                ])),
              t,
              C(i),
              y(l),
            );
          } catch (e) {
            o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SCTP] selected pair lookup failed for ",
                  ": ",
                  "",
                ])),
              t,
              e,
            );
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.connectionId,
            n = e.errorReason,
            r = e.peerConnection,
            a = e.workerStats,
            i = yield T({ connectionId: t, peerConnection: r, reason: n });
          if (i != null) {
            var l = "N/A",
              s = "N/A",
              u = [];
            i.forEach(function (e) {
              if (e.type === "transport") {
                var t = e;
                l =
                  "dtls=" +
                  g(t.dtlsState) +
                  " " +
                  ("tx=" + g(t.bytesSent) + " ") +
                  ("rx=" + g(t.bytesReceived) + " ") +
                  ("pair=" + g(t.selectedCandidatePairId));
              } else if (e.type === "sctp-transport") {
                var n = e;
                s =
                  "srtt=" +
                  h(n.smoothedRoundTripTime) +
                  " " +
                  ("cwnd=" + g(n.congestionWindow) + " ") +
                  ("rwnd=" + g(n.receiverWindow) + " ") +
                  ("mtu=" + g(n.mtu) + " ") +
                  ("unack=" + g(n.unackData));
              } else if (e.type === "data-channel") {
                var r,
                  o = e;
                u.push(
                  "id=" +
                    g((r = o.dataChannelIdentifier) != null ? r : e.id) +
                    " " +
                    ("label=" + g(o.label) + " ") +
                    ("state=" + g(o.state) + " ") +
                    ("msgTx=" + g(o.messagesSent) + " ") +
                    ("msgRx=" + g(o.messagesReceived) + " ") +
                    ("bytesTx=" + g(o.bytesSent) + " ") +
                    ("bytesRx=" + g(o.bytesReceived)),
                );
              }
            });
            var c = R(i, v(i));
            (o("WALogger").WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SCTP] getStats snapshot ",
                  " reason=",
                  " pc=",
                  " ice=",
                  " workerTxPkt=",
                  " workerRxPkt=",
                  " transport=",
                  " sctp=",
                  "",
                ])),
              t,
              n,
              r.connectionState,
              r.iceConnectionState,
              a.sentPackets,
              a.receivedPackets,
              l,
              s,
            ),
              o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] getStats datachannel ",
                    " reason=",
                    " ",
                    "",
                  ])),
                t,
                n,
                u.length > 0 ? u.join(" ; ") : "N/A",
              ),
              o("WALogger").WARN(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] getStats pair ",
                    " reason=",
                    " ",
                    "",
                  ])),
                t,
                n,
                c,
              ));
          }
        })),
        I.apply(this, arguments)
      );
    }
    function T(t) {
      var r = t.connectionId,
        a = t.peerConnection,
        i = t.reason,
        l = a.getStats();
      return new (_ || (_ = n("Promise")))(function (t) {
        var n = !1,
          a = window.setTimeout(function () {
            n ||
              ((n = !0),
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] getStats snapshot timed out after ",
                    "ms for ",
                    ", reason=",
                    "",
                  ])),
                f,
                r,
                i,
              ),
              t(null));
          }, f);
        l.then(function (e) {
          n || ((n = !0), window.clearTimeout(a), t(e));
        }).catch(function (e) {
          n ||
            ((n = !0),
            window.clearTimeout(a),
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SCTP] getStats snapshot failed for ",
                  ", reason=",
                  ": ",
                  "",
                ])),
              r,
              i,
              e,
            ),
            t(null));
        });
      });
    }
    ((l.findSelectedCandidatePair = v),
      (l.logSelectedCandidatePair = L),
      (l.logPeerConnectionStatsForError = k));
  },
  98,
);
