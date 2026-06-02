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
      m = 1e3;
    function p(e) {
      return e != null ? String(e) : "N/A";
    }
    function _(e) {
      return e != null ? Math.round(e * 1e3) + "ms" : "N/A";
    }
    function f(e) {
      var t, n, r;
      if (e == null) return "N/A";
      var o = (t = e.address) != null ? t : "N/A",
        a = p(e.port),
        i = (n = e.protocol) != null ? n : "N/A",
        l = (r = e.candidateType) != null ? r : "N/A";
      return o + ":" + a + "/" + i + "/" + l;
    }
    async function g(t, n, r, a) {
      var i = await new Promise(function (a) {
        var i = !1,
          l = window.setTimeout(function () {
            i ||
              ((i = !0),
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] getStats snapshot timed out after ",
                    "ms for ",
                    ", reason=",
                    "",
                  ])),
                m,
                t,
                r,
              ),
              a(null));
          }, m);
        n.getStats()
          .then(function (e) {
            i || ((i = !0), window.clearTimeout(l), a(e));
          })
          .catch(function (e) {
            i ||
              ((i = !0),
              window.clearTimeout(l),
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] getStats snapshot failed for ",
                    ", reason=",
                    ": ",
                    "",
                  ])),
                t,
                r,
                e,
              ),
              a(null));
          });
      });
      if (i != null) {
        var l = null,
          g = null,
          h = "N/A",
          y = "N/A",
          C = [];
        if (
          (i.forEach(function (e) {
            if (e.type === "transport") {
              var t = e;
              (t.selectedCandidatePairId != null &&
                (g = t.selectedCandidatePairId),
                (h =
                  "dtls=" +
                  p(t.dtlsState) +
                  " " +
                  ("tx=" + p(t.bytesSent) + " ") +
                  ("rx=" + p(t.bytesReceived) + " ") +
                  ("pair=" + p(t.selectedCandidatePairId))));
            } else if (e.type === "candidate-pair" && e.nominated === !0) l = e;
            else if (e.type === "sctp-transport") {
              var n = e;
              y =
                "srtt=" +
                _(n.smoothedRoundTripTime) +
                " " +
                ("cwnd=" + p(n.congestionWindow) + " ") +
                ("rwnd=" + p(n.receiverWindow) + " ") +
                ("mtu=" + p(n.mtu) + " ") +
                ("unack=" + p(n.unackData));
            } else if (e.type === "data-channel") {
              var r,
                o = e;
              C.push(
                "id=" +
                  p((r = o.dataChannelIdentifier) != null ? r : e.id) +
                  " " +
                  ("label=" + p(o.label) + " ") +
                  ("state=" + p(o.state) + " ") +
                  ("msgTx=" + p(o.messagesSent) + " ") +
                  ("msgRx=" + p(o.messagesReceived) + " ") +
                  ("bytesTx=" + p(o.bytesSent) + " ") +
                  ("bytesRx=" + p(o.bytesReceived)),
              );
            }
          }),
          l == null && g != null)
        ) {
          var b = i.get(g);
          b != null && b.type === "candidate-pair" && (l = b);
        }
        var v = "N/A",
          S = l;
        if (S != null) {
          var R = S.localCandidateId != null ? i.get(S.localCandidateId) : null,
            L = S.remoteCandidateId != null ? i.get(S.remoteCandidateId) : null,
            E =
              R != null &&
              (R.type === "local-candidate" || R.type === "remote-candidate")
                ? R
                : null,
            k =
              L != null &&
              (L.type === "local-candidate" || L.type === "remote-candidate")
                ? L
                : null;
          v =
            "state=" +
            p(S.state) +
            " " +
            ("nominated=" + p(S.nominated) + " ") +
            ("rtt=" + _(S.currentRoundTripTime) + " ") +
            ("tx=" + p(S.bytesSent) + " ") +
            ("rx=" + p(S.bytesReceived) + " ") +
            ("local=" + f(E) + " ") +
            ("remote=" + f(k));
        }
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
          r,
          n.connectionState,
          n.iceConnectionState,
          a.sentPackets,
          a.receivedPackets,
          h,
          y,
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
            r,
            C.length > 0 ? C.join(" ; ") : "N/A",
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
            r,
            v,
          ));
      }
    }
    l.logPeerConnectionStatsForError = g;
  },
  98,
);
