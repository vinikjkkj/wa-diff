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
    function h(e, t, n, r) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, r, a, i) {
            var l = yield new (m || (m = n("Promise")))(function (n) {
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
                      p,
                      t,
                      a,
                    ),
                    n(null));
                }, p);
              r.getStats()
                .then(function (e) {
                  i || ((i = !0), window.clearTimeout(l), n(e));
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
                      a,
                      e,
                    ),
                    n(null));
                });
            });
            if (l != null) {
              var h = null,
                y = null,
                C = "N/A",
                b = "N/A",
                v = [];
              if (
                (l.forEach(function (e) {
                  if (e.type === "transport") {
                    var t = e;
                    (t.selectedCandidatePairId != null &&
                      (y = t.selectedCandidatePairId),
                      (C =
                        "dtls=" +
                        _(t.dtlsState) +
                        " " +
                        ("tx=" + _(t.bytesSent) + " ") +
                        ("rx=" + _(t.bytesReceived) + " ") +
                        ("pair=" + _(t.selectedCandidatePairId))));
                  } else if (e.type === "candidate-pair" && e.nominated === !0)
                    h = e;
                  else if (e.type === "sctp-transport") {
                    var n = e;
                    b =
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
                    v.push(
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
                h == null && y != null)
              ) {
                var S = l.get(y);
                S != null && S.type === "candidate-pair" && (h = S);
              }
              var R = "N/A",
                L = h;
              if (L != null) {
                var E =
                    L.localCandidateId != null
                      ? l.get(L.localCandidateId)
                      : null,
                  k =
                    L.remoteCandidateId != null
                      ? l.get(L.remoteCandidateId)
                      : null,
                  I =
                    E != null &&
                    (E.type === "local-candidate" ||
                      E.type === "remote-candidate")
                      ? E
                      : null,
                  T =
                    k != null &&
                    (k.type === "local-candidate" ||
                      k.type === "remote-candidate")
                      ? k
                      : null;
                R =
                  "state=" +
                  _(L.state) +
                  " " +
                  ("nominated=" + _(L.nominated) + " ") +
                  ("rtt=" + f(L.currentRoundTripTime) + " ") +
                  ("tx=" + _(L.bytesSent) + " ") +
                  ("rx=" + _(L.bytesReceived) + " ") +
                  ("local=" + g(I) + " ") +
                  ("remote=" + g(T));
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
                a,
                r.connectionState,
                r.iceConnectionState,
                i.sentPackets,
                i.receivedPackets,
                C,
                b,
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
                  a,
                  v.length > 0 ? v.join(" ; ") : "N/A",
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
                  a,
                  R,
                ));
            }
          },
        )),
        y.apply(this, arguments)
      );
    }
    l.logPeerConnectionStatsForError = h;
  },
  98,
);
