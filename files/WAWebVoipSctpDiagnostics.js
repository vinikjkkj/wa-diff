__d(
  "WAWebVoipSctpDiagnostics",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = 1e3;
    function f(e) {
      return e != null ? String(e) : "N/A";
    }
    function g(e) {
      return e != null ? Math.round(e * 1e3) + "ms" : "N/A";
    }
    function h(e) {
      var t, n, r;
      if (e == null) return "N/A";
      var o = (t = e.address) != null ? t : "N/A",
        a = f(e.port),
        i = (n = e.protocol) != null ? n : "N/A",
        l = (r = e.candidateType) != null ? r : "N/A",
        s = e.tcpType != null ? "/" + e.tcpType : "";
      return o + ":" + a + "/" + i + "/" + l + s;
    }
    function y(e) {
      var t, n;
      if (e == null) return "N/A";
      var r = (t = e.protocol) != null ? t : "N/A",
        o = (n = e.candidateType) != null ? n : "N/A",
        a = e.tcpType != null ? "/" + e.tcpType : "";
      return r + "/" + o + a;
    }
    function C(e, t) {
      var n = t != null ? e.get(t) : null;
      return n != null && n.type === "candidate-pair" ? n : null;
    }
    function b(e) {
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
        (t = C(e, n)) != null ? t : r
      );
    }
    function v(e, t) {
      var n = t != null ? e.get(t) : null;
      return n != null &&
        (n.type === "local-candidate" || n.type === "remote-candidate")
        ? n
        : null;
    }
    function S(e, t) {
      if (t == null) return "N/A";
      var n = v(e, t.localCandidateId),
        r = v(e, t.remoteCandidateId);
      return (
        "state=" +
        f(t.state) +
        " " +
        ("nominated=" + f(t.nominated) + " ") +
        ("rtt=" + g(t.currentRoundTripTime) + " ") +
        ("tx=" + f(t.bytesSent) + " ") +
        ("rx=" + f(t.bytesReceived) + " ") +
        ("local=" + h(n) + " ") +
        ("remote=" + h(r))
      );
    }
    async function R(t) {
      var n = t.connectionId,
        r = t.peerConnection;
      try {
        var a = await E({
          connectionId: n,
          peerConnection: r,
          reason: "pc_connected",
        });
        if (a == null) return;
        var i = b(a),
          l = v(a, i == null ? void 0 : i.localCandidateId),
          u = v(a, i == null ? void 0 : i.remoteCandidateId);
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SCTP] selected pair ",
              " local=",
              " remote=",
              "",
            ])),
          n,
          y(l),
          h(u),
        );
      } catch (e) {
        o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [SCTP] selected pair lookup failed for ",
              ": ",
              "",
            ])),
          n,
          e,
        );
      }
    }
    async function L(e) {
      var t = e.connectionId,
        n = e.errorReason,
        r = e.peerConnection,
        a = e.workerStats,
        i = await E({ connectionId: t, peerConnection: r, reason: n });
      if (i != null) {
        var l = "N/A",
          s = "N/A",
          m = [];
        i.forEach(function (e) {
          if (e.type === "transport") {
            var t = e;
            l =
              "dtls=" +
              f(t.dtlsState) +
              " " +
              ("tx=" + f(t.bytesSent) + " ") +
              ("rx=" + f(t.bytesReceived) + " ") +
              ("pair=" + f(t.selectedCandidatePairId));
          } else if (e.type === "sctp-transport") {
            var n = e;
            s =
              "srtt=" +
              g(n.smoothedRoundTripTime) +
              " " +
              ("cwnd=" + f(n.congestionWindow) + " ") +
              ("rwnd=" + f(n.receiverWindow) + " ") +
              ("mtu=" + f(n.mtu) + " ") +
              ("unack=" + f(n.unackData));
          } else if (e.type === "data-channel") {
            var r,
              o = e;
            m.push(
              "id=" +
                f((r = o.dataChannelIdentifier) != null ? r : e.id) +
                " " +
                ("label=" + f(o.label) + " ") +
                ("state=" + f(o.state) + " ") +
                ("msgTx=" + f(o.messagesSent) + " ") +
                ("msgRx=" + f(o.messagesReceived) + " ") +
                ("bytesTx=" + f(o.bytesSent) + " ") +
                ("bytesRx=" + f(o.bytesReceived)),
            );
          }
        });
        var p = S(i, b(i));
        (o("WALogger").WARN(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
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
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] getStats datachannel ",
                " reason=",
                " ",
                "",
              ])),
            t,
            n,
            m.length > 0 ? m.join(" ; ") : "N/A",
          ),
          o("WALogger").WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [SCTP] getStats pair ",
                " reason=",
                " ",
                "",
              ])),
            t,
            n,
            p,
          ));
      }
    }
    function E(e) {
      var t = e.connectionId,
        n = e.peerConnection,
        r = e.reason,
        a = n.getStats();
      return new Promise(function (e) {
        var n = !1,
          i = window.setTimeout(function () {
            n ||
              ((n = !0),
              o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] getStats snapshot timed out after ",
                    "ms for ",
                    ", reason=",
                    "",
                  ])),
                _,
                t,
                r,
              ),
              e(null));
          }, _);
        a.then(function (t) {
          n || ((n = !0), window.clearTimeout(i), e(t));
        }).catch(function (a) {
          n ||
            ((n = !0),
            window.clearTimeout(i),
            o("WALogger").WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [SCTP] getStats snapshot failed for ",
                  ", reason=",
                  ": ",
                  "",
                ])),
              t,
              r,
              a,
            ),
            e(null));
        });
      });
    }
    ((l.findSelectedCandidatePair = b),
      (l.logSelectedCandidatePair = R),
      (l.logPeerConnectionStatsForError = L));
  },
  98,
);
