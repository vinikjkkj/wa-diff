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
      p = 1e3;
    function _(e) {
      return e != null ? String(e) : "N/A";
    }
    function f(e) {
      return e != null ? Math.round(e * 1e3) + "ms" : "N/A";
    }
    function g(e) {
      var t, n, r;
      if (e == null) return "N/A";
      var o = (t = e.address) != null ? t : "N/A",
        a = _(e.port),
        i = (n = e.protocol) != null ? n : "N/A",
        l = (r = e.candidateType) != null ? r : "N/A";
      return o + ":" + a + "/" + i + "/" + l;
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.connectionId,
            a = t.errorReason,
            i = t.peerConnection,
            l = t.workerStats,
            h = yield new (m || (m = n("Promise")))(function (t) {
              var n = !1,
                l = window.setTimeout(function () {
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
                      p,
                      r,
                      a,
                    ),
                    t(null));
                }, p);
              i.getStats()
                .then(function (e) {
                  n || ((n = !0), window.clearTimeout(l), t(e));
                })
                .catch(function (e) {
                  n ||
                    ((n = !0),
                    window.clearTimeout(l),
                    o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [SCTP] getStats snapshot failed for ",
                          ", reason=",
                          ": ",
                          "",
                        ])),
                      r,
                      a,
                      e,
                    ),
                    t(null));
                });
            });
          if (h != null) {
            var y = null,
              C = null,
              b = "N/A",
              v = "N/A",
              S = [];
            if (
              (h.forEach(function (e) {
                if (e.type === "transport") {
                  var t = e;
                  (t.selectedCandidatePairId != null &&
                    (C = t.selectedCandidatePairId),
                    (b =
                      "dtls=" +
                      _(t.dtlsState) +
                      " " +
                      ("tx=" + _(t.bytesSent) + " ") +
                      ("rx=" + _(t.bytesReceived) + " ") +
                      ("pair=" + _(t.selectedCandidatePairId))));
                } else if (e.type === "candidate-pair" && e.nominated === !0)
                  y = e;
                else if (e.type === "sctp-transport") {
                  var n = e;
                  v =
                    "srtt=" +
                    f(n.smoothedRoundTripTime) +
                    " " +
                    ("cwnd=" + _(n.congestionWindow) + " ") +
                    ("rwnd=" + _(n.receiverWindow) + " ") +
                    ("mtu=" + _(n.mtu) + " ") +
                    ("unack=" + _(n.unackData));
                } else if (e.type === "data-channel") {
                  var r,
                    o = e;
                  S.push(
                    "id=" +
                      _((r = o.dataChannelIdentifier) != null ? r : e.id) +
                      " " +
                      ("label=" + _(o.label) + " ") +
                      ("state=" + _(o.state) + " ") +
                      ("msgTx=" + _(o.messagesSent) + " ") +
                      ("msgRx=" + _(o.messagesReceived) + " ") +
                      ("bytesTx=" + _(o.bytesSent) + " ") +
                      ("bytesRx=" + _(o.bytesReceived)),
                  );
                }
              }),
              y == null && C != null)
            ) {
              var R = h.get(C);
              R != null && R.type === "candidate-pair" && (y = R);
            }
            var L = "N/A",
              E = y;
            if (E != null) {
              var k =
                  E.localCandidateId != null ? h.get(E.localCandidateId) : null,
                I =
                  E.remoteCandidateId != null
                    ? h.get(E.remoteCandidateId)
                    : null,
                T =
                  k != null &&
                  (k.type === "local-candidate" ||
                    k.type === "remote-candidate")
                    ? k
                    : null,
                D =
                  I != null &&
                  (I.type === "local-candidate" ||
                    I.type === "remote-candidate")
                    ? I
                    : null;
              L =
                "state=" +
                _(E.state) +
                " " +
                ("nominated=" + _(E.nominated) + " ") +
                ("rtt=" + f(E.currentRoundTripTime) + " ") +
                ("tx=" + _(E.bytesSent) + " ") +
                ("rx=" + _(E.bytesReceived) + " ") +
                ("local=" + g(T) + " ") +
                ("remote=" + g(D));
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
              r,
              a,
              i.connectionState,
              i.iceConnectionState,
              l.sentPackets,
              l.receivedPackets,
              b,
              v,
            ),
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] getStats datachannel ",
                    " reason=",
                    " ",
                    "",
                  ])),
                r,
                a,
                S.length > 0 ? S.join(" ; ") : "N/A",
              ),
              o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [SCTP] getStats pair ",
                    " reason=",
                    " ",
                    "",
                  ])),
                r,
                a,
                L,
              ));
          }
        })),
        y.apply(this, arguments)
      );
    }
    l.logPeerConnectionStatsForError = h;
  },
  98,
);
