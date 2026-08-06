__d(
  "WAWebVoipP2PConnectionManager",
  [
    "WALogger",
    "WAWebVoipRelayConnectionUtils",
    "WAWebVoipSctpDataChannelThreadManager",
    "WAWebVoipStackInterface",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
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
      K,
      Q,
      X,
      Y,
      J,
      Z,
      ee,
      te,
      ne = { urls: "stun:edge-stun.facebook.com:3478" },
      re = null,
      oe = null,
      ae = null,
      ie = !1,
      le = 0,
      se = {
        DATA_CHANNEL_LABEL: "wa-web-p2p",
        DATA_CHANNEL_ID: 0,
        CONNECTION_TIMEOUT_MS: 3e4,
        MAX_BUFFERED_CANDIDATES: 20,
      },
      ue = null,
      ce = null,
      de = o("WAWebVoipRelayConnectionUtils").ConnectionState.None,
      me = !1,
      pe = !1,
      _e = !1,
      fe = !1,
      ge = null,
      he = !1,
      ye = null,
      Ce = null,
      be = null,
      ve = null,
      Se = null,
      Re = null,
      Le = null,
      Ee = [],
      ke = [],
      Ie = !1,
      Te = !1,
      De = null,
      xe = null,
      $e = o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats(),
      Pe = 0,
      Ne = null,
      Me = null,
      we = null,
      Ae = null;
    function Fe(e) {
      var t = e.match(
        /candidate:\S+\s+\d+\s+\S+\s+(\d+)\s+(\S+)\s+(\d+)\s+typ\s+\S+/,
      );
      if (t == null) return null;
      var n = parseInt(t[1], 10),
        r = t[2],
        o = parseInt(t[3], 10);
      if (r.endsWith(".local")) return null;
      var a = Math.min(255, Math.floor(n / Math.pow(2, 24)));
      return { ip: r, port: o, priority: a };
    }
    function Oe(e) {
      var t = e.priority * Math.pow(2, 24);
      return "candidate:1 1 UDP " + t + " " + e.ip + " " + e.port + " typ host";
    }
    function Be(t, n, r, a, i, l, c, d) {
      var m = t;
      ((m = o("WAWebVoipRelayConnectionUtils").replaceIceCredentials(m, n, r)),
        (m = o("WAWebVoipRelayConnectionUtils").replaceDtlsFingerprint(
          m,
          a,
          i,
        )),
        d
          ? c
            ? (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] SDP: setting remote setup=passive (caller, local DTLS role=active/client)",
                  ])),
              ),
              (m = m.replace(/a=setup:[^\r\n]+/g, "a=setup:passive")))
            : (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] SDP: setting remote setup=active (callee, local DTLS role=passive/server)",
                  ])),
              ),
              (m = m.replace(/a=setup:[^\r\n]+/g, "a=setup:active")))
          : (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [P2PConnectionManager] SDP: setting remote setup=active (peer is native, local DTLS role=passive/server)",
                ])),
            ),
            (m = m.replace(/a=setup:[^\r\n]+/g, "a=setup:active"))),
        (m = o("WAWebVoipRelayConnectionUtils").removeIceCandidates(m)));
      var p = l
          .map(function (e) {
            return "a=" + e.candidate + "\r\n";
          })
          .join(""),
        _ = m.replace(/\s+$/, "\r\n");
      return _ + p;
    }
    function We(e) {
      ((de = e), Me != null && Me(e));
    }
    function qe() {
      if (
        (De != null && (window.clearTimeout(De), (De = null)),
        !_e && ce != null)
      )
        try {
          ce.close();
        } catch (e) {
          o("WALogger").ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [P2PConnectionManager] Error closing data channel: ",
                "",
              ])),
            e,
          );
        }
      if (((ce = null), ue != null)) {
        try {
          ue.close();
        } catch (e) {
          o("WALogger").ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [P2PConnectionManager] Error closing peer connection: ",
                "",
              ])),
            e,
          );
        }
        ue = null;
      }
    }
    function Ue(e) {
      de !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
        de !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed &&
        (o("WALogger").ERROR(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [P2PConnectionManager] Connection failed, reason: ",
              "",
            ])),
          e,
        ),
        We(o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed),
        Ve(),
        qe());
    }
    function Ve() {
      if (_e && ge != null) {
        var e = ge,
          t = o("WAWebVoipSctpDataChannelThreadManager").getDataChannelThread();
        (t != null && t.closeChannel(e), (_e = !1), (ge = null));
      }
    }
    function He() {
      if (!(ue == null || !Te)) {
        var e = ue,
          t = ke;
        ke = [];
        for (var n of t) {
          var r = Oe(n);
          e.addIceCandidate(
            new RTCIceCandidate({
              sdpMLineIndex: 0,
              sdpMid: "0",
              candidate: r,
            }),
          ).then(
            function () {},
            function (e) {
              o("WALogger").WARN(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] Failed to add buffered remote candidate: ",
                    "",
                  ])),
                e,
              );
            },
          );
        }
      }
    }
    function Ge() {
      return ze.apply(this, arguments);
    }
    function ze() {
      return (
        (ze = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            !(
              ve == null ||
              Se == null ||
              Re == null ||
              Le == null ||
              ue == null ||
              xe == null
            ) &&
            !(Te || Ie)
          ) {
            var e = ue;
            Ie = !0;
            try {
              if (me) {
                var t = Be(xe, ve, Se, Re, Le, [], !0, pe);
                (o("WALogger").LOG(
                  P ||
                    (P = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Applying synthetic answer SDP (caller, ICE role=controlling)",
                    ])),
                ),
                  yield e.setRemoteDescription({ sdp: t, type: "answer" }));
              } else {
                var n,
                  r = Be(xe, ve, Se, Re, Le, [], !1, pe);
                (o("WALogger").LOG(
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Applying synthetic offer SDP (callee, ICE role=controlled)",
                    ])),
                ),
                  yield e.setRemoteDescription({ sdp: r, type: "offer" }));
                var a = yield e.createAnswer(),
                  i = (n = a.sdp) != null ? n : "",
                  l = Ce;
                if (l != null) {
                  var s = o(
                    "WAWebVoipRelayConnectionUtils",
                  ).extractIceCredentials(i);
                  s != null &&
                    s.ufrag !== l.ufrag &&
                    (o("WALogger").LOG(
                      M ||
                        (M = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [P2PConnectionManager] Answer ufrag ",
                          " differs from proactive ufrag ",
                          ", forcing match",
                        ])),
                      s.ufrag,
                      l.ufrag,
                    ),
                    (i = o(
                      "WAWebVoipRelayConnectionUtils",
                    ).replaceIceCredentials(i, l.ufrag, l.pwd)));
                }
                if (
                  (yield e.setLocalDescription({ type: "answer", sdp: i }),
                  (Ce = o(
                    "WAWebVoipRelayConnectionUtils",
                  ).extractIceCredentials(i)),
                  (be = o(
                    "WAWebVoipRelayConnectionUtils",
                  ).extractDtlsFingerprint(i)),
                  Ce == null || be == null)
                ) {
                  (o("WALogger").ERROR(
                    w ||
                      (w = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [P2PConnectionManager] Failed to extract credentials from answer SDP",
                      ])),
                  ),
                    (Ie = !1),
                    Ue("credential_extraction_failed"));
                  return;
                }
                o("WALogger").LOG(
                  A ||
                    (A = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Callee local credentials extracted from answer",
                    ])),
                );
                var u = Ae;
                if (u != null)
                  try {
                    u(Ce.ufrag, Ce.pwd, be.algorithm, be.fingerprint, []);
                  } catch (e) {
                    o("WALogger").ERROR(
                      F ||
                        (F = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [P2PConnectionManager] Failed to send callee transport: ",
                          "",
                        ])),
                      e,
                    );
                  }
              }
              (o("WALogger").LOG(
                O ||
                  (O = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] Remote description applied successfully",
                  ])),
              ),
                (Te = !0),
                (Ie = !1),
                He());
            } catch (e) {
              ((Ie = !1),
                (Te = !1),
                o("WALogger").ERROR(
                  B ||
                    (B = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Failed to apply remote description: ",
                      "",
                    ])),
                  e,
                ),
                Ue("remote_description_failed"));
            }
          }
        })),
        ze.apply(this, arguments)
      );
    }
    function je(e) {
      if (e.candidate != null) {
        var t,
          n,
          r = e.candidate;
        if (r.protocol === "tcp") return;
        var a = {
          sdpMLineIndex: (t = r.sdpMLineIndex) != null ? t : 0,
          sdpMid: (n = r.sdpMid) != null ? n : "0",
          candidate: r.candidate,
        };
        (Ee.push(a), we != null && we(a));
        var i = Ae;
        if (i != null) {
          var l = Ce,
            s = be;
          if (l != null && s != null) {
            var u = Fe(a.candidate);
            if (u != null)
              try {
                i(l.ufrag, l.pwd, s.algorithm, s.fingerprint, [u]);
              } catch (e) {
                o("WALogger").ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Failed to send candidate transport: ",
                      "",
                    ])),
                  e,
                );
              }
          }
        }
      } else
        o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [P2PConnectionManager] ICE gathering complete",
            ])),
        );
    }
    function Ke() {
      if (ue != null) {
        var e = ue,
          t = e.iceConnectionState;
        (o("WALogger").LOG(
          g ||
            (g = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [P2PConnectionManager] ICE connection state: ",
              " (isCaller=",
              ", gathering=",
              ", signaling=",
              ")",
            ])),
          t,
          String(me),
          e.iceGatheringState,
          e.signalingState,
        ),
          (t === "failed" || t === "disconnected") &&
            e
              .getStats()
              .then(function (e) {
                e.forEach(function (e) {
                  if (e.type === "candidate-pair") {
                    var t = e;
                    o("WALogger").LOG(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [P2PConnectionManager] candidate-pair: state=",
                          ", nominated=",
                          ", local=",
                          ", remote=",
                          "",
                        ])),
                      String(t.state),
                      String(t.nominated),
                      String(t.localCandidateId),
                      String(t.remoteCandidateId),
                    );
                  } else if (e.type === "local-candidate") {
                    var n = e;
                    o("WALogger").LOG(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [P2PConnectionManager] local-candidate: ",
                          " ",
                          " port=",
                          "",
                        ])),
                      String(n.candidateType),
                      String(n.protocol),
                      String(n.port),
                    );
                  } else if (e.type === "remote-candidate") {
                    var r = e;
                    o("WALogger").LOG(
                      C ||
                        (C = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [P2PConnectionManager] remote-candidate: ",
                          " ",
                          " port=",
                          "",
                        ])),
                      String(r.candidateType),
                      String(r.protocol),
                      String(r.port),
                    );
                  }
                });
              })
              .catch(function (e) {
                o("WALogger")
                  .WARN(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [P2PConnectionManager] getStats failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("p2p-getstats-failed");
              }),
          t === "failed" && Ue("ice_connection_failed"));
      }
    }
    function Qe() {
      var e,
        t = "N/A";
      ($e.connectionReadyTime !== 0 &&
        Pe > 0 &&
        (t = ($e.connectionReadyTime - Pe).toString()),
        o("WALogger").LOG(
          v ||
            (v = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [P2PConnectionManager] Connection stats:\n    ConnectionId: ",
              ",\n    Sent: ",
              " packets,\n    Received: ",
              " packets,\n    Sent Bytes: ",
              " bytes,\n    Received Bytes: ",
              " bytes,\n    Connection Setup Time: ",
              " ms,\n    Transferred to worker: ",
              "",
            ])),
          (e = ge != null ? ge : ye) != null ? e : "N/A",
          $e.sentPackets,
          $e.receivedPackets,
          $e.sentBytes,
          $e.receivedBytes,
          t,
          String(fe),
        ));
    }
    function Xe() {
      (o("WALogger").LOG(
        S ||
          (S = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [P2PConnectionManager] Data channel opened",
          ])),
      ),
        We(o("WAWebVoipRelayConnectionUtils").ConnectionState.Open),
        ($e.connectionReadyTime = Date.now()),
        De != null && (window.clearTimeout(De), (De = null)));
    }
    function Ye() {
      (o("WALogger").LOG(
        R ||
          (R = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [P2PConnectionManager] Data channel closed",
          ])),
      ),
        de !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
          de !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed &&
          (We(o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed),
          qe()));
    }
    function Je(e) {
      Ne != null &&
        o("WAWebVoipRelayConnectionUtils")
          .dataToArrayBuffer(e.data)
          .then(function (e) {
            e != null &&
              Ne != null &&
              ($e.receivedPackets++, ($e.receivedBytes += e.byteLength), Ne(e));
          });
    }
    function Ze(e) {
      (o("WALogger").ERROR(
        L ||
          (L = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [P2PConnectionManager] Data channel error",
          ])),
      ),
        Ue("data_channel_error"));
    }
    function et(e) {
      ((e.onopen = function () {
        Xe();
      }),
        (e.onclose = function () {
          Ye();
        }),
        (e.onmessage = function (e) {
          Je(e);
        }),
        (e.onerror = function (e) {
          Ze(e);
        }));
    }
    function tt(e, t, n, r) {
      return nt.apply(this, arguments);
    }
    function nt() {
      return (
        (nt = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            (ue != null &&
              (o("WALogger").WARN(
                W ||
                  (W = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] initP2PConnection called while already initialized, cleaning up",
                  ])),
              ),
              rt()),
              (ie = !0),
              o("WALogger").LOG(
                q ||
                  (q = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] Initializing P2P connection, caller=",
                    ", peerIsWebBrowser=",
                    "",
                  ])),
                String(e),
                String(t),
              ),
              (me = e),
              (pe = t),
              (Ae = a != null ? a : null));
            var i = new RTCPeerConnection({ iceServers: [].concat(n, [ne]) });
            ((ue = i),
              (i.onicecandidate = function (e) {
                je(e);
              }),
              (i.oniceconnectionstatechange = function () {
                Ke();
              }),
              (i.onconnectionstatechange = function () {
                o("WALogger").LOG(
                  U ||
                    (U = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] PeerConnection state: ",
                      "",
                    ])),
                  i.connectionState,
                );
              }),
              (i.onicegatheringstatechange = function () {
                o("WALogger").LOG(
                  V ||
                    (V = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] ICE gathering state: ",
                      "",
                    ])),
                  i.iceGatheringState,
                );
              }),
              (i.onsignalingstatechange = function () {
                o("WALogger").LOG(
                  H ||
                    (H = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Signaling state: ",
                      "",
                    ])),
                  i.signalingState,
                );
              }));
            var l = i.createDataChannel(
              se.DATA_CHANNEL_LABEL,
              babelHelpers.extends(
                {},
                o("WAWebVoipRelayConnectionUtils").BASE_DATA_CHANNEL_OPTIONS,
              ),
            );
            ((l.binaryType = "arraybuffer"), (ce = l));
            var s = o("WAWebVoipRelayConnectionUtils").isDcTransferDisabled(),
              u = s
                ? null
                : o(
                    "WAWebVoipSctpDataChannelThreadManager",
                  ).getDataChannelThread();
            if (
              (s &&
                o("WALogger").LOG(
                  G ||
                    (G = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] DC transfer disabled for current browser, using main-thread path",
                    ])),
                ),
              u != null && re != null && ae != null)
            ) {
              var c = re,
                d = ae,
                m = c + ":" + d,
                p = u.transferChannel(l, m, c, d, !1);
              p
                ? ((_e = !0),
                  (fe = !0),
                  (ge = m),
                  o("WALogger").LOG(
                    z ||
                      (z = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [P2PConnectionManager] DataChannel transferred to worker thread as ",
                        "",
                      ])),
                    m,
                  ))
                : o("WALogger").WARN(
                    j ||
                      (j = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [P2PConnectionManager] DataChannel transfer failed, using main-thread path",
                      ])),
                  );
            }
            if ((_e || et(l), e)) {
              var _,
                f = yield i.createOffer();
              yield i.setLocalDescription(f);
              var g = (_ = f.sdp) != null ? _ : "";
              if (
                ((xe = g),
                (Ce = o("WAWebVoipRelayConnectionUtils").extractIceCredentials(
                  g,
                )),
                (be = o("WAWebVoipRelayConnectionUtils").extractDtlsFingerprint(
                  g,
                )),
                Ce == null || be == null)
              ) {
                (o("WALogger").ERROR(
                  K ||
                    (K = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Failed to extract local credentials from offer SDP",
                    ])),
                ),
                  Ue("credential_extraction_failed"));
                return;
              }
              o("WALogger").LOG(
                Q ||
                  (Q = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] Caller offer created, local credentials extracted",
                  ])),
              );
              var h = Ae;
              if (h != null && Ce != null && be != null) {
                o("WALogger").LOG(
                  X ||
                    (X = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Sending initial credentials to remote peer",
                    ])),
                );
                try {
                  h(Ce.ufrag, Ce.pwd, be.algorithm, be.fingerprint, []);
                } catch (e) {
                  o("WALogger")
                    .ERROR(
                      Y ||
                        (Y = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [P2PConnectionManager] Failed to send initial transport",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("p2p-caller-send-initial-transport-failed");
                }
              }
            } else {
              var y,
                C = yield i.createOffer(),
                b = (y = C.sdp) != null ? y : "";
              if (
                ((xe = b),
                (Ce = o("WAWebVoipRelayConnectionUtils").extractIceCredentials(
                  b,
                )),
                (be = o("WAWebVoipRelayConnectionUtils").extractDtlsFingerprint(
                  b,
                )),
                Ce == null || be == null)
              ) {
                (o("WALogger")
                  .ERROR(
                    J ||
                      (J = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [P2PConnectionManager] Failed to extract local credentials from callee template SDP",
                      ])),
                  )
                  .sendLogs("p2p-callee-credential-extraction-failed"),
                  Ue("credential_extraction_failed"));
                return;
              }
              o("WALogger").LOG(
                Z ||
                  (Z = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] Callee template SDP generated, sending proactive credentials",
                  ])),
              );
              var v = Ae;
              if (v != null)
                try {
                  v(Ce.ufrag, Ce.pwd, be.algorithm, be.fingerprint, []);
                } catch (e) {
                  o("WALogger")
                    .ERROR(
                      ee ||
                        (ee = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [P2PConnectionManager] Failed to send callee initial transport",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("p2p-callee-send-initial-transport-failed");
                }
            }
            (Ge(),
              (Pe = Date.now()),
              We(o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting),
              (De = window.setTimeout(function () {
                de ===
                  o("WAWebVoipRelayConnectionUtils").ConnectionState
                    .Connecting && Ue("connection_timeout");
              }, se.CONNECTION_TIMEOUT_MS)));
          },
        )),
        nt.apply(this, arguments)
      );
    }
    function rt() {
      ((ve = null),
        (Se = null),
        (Re = null),
        (Le = null),
        (ke = []),
        (Ie = !1),
        (Te = !1),
        (ie = !1),
        le++,
        de !== o("WAWebVoipRelayConnectionUtils").ConnectionState.None &&
          (o("WALogger").LOG(
            E ||
              (E = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [P2PConnectionManager] Cleaning up P2P connection",
              ])),
          ),
          _e ? ((he = !0), (ye = ge)) : Pe > 0 && Qe(),
          Ve(),
          qe(),
          We(o("WAWebVoipRelayConnectionUtils").ConnectionState.None),
          (me = !1),
          (Ce = null),
          (be = null),
          (Ee = []),
          (xe = null),
          (Ae = null),
          he ||
            (($e = o(
              "WAWebVoipRelayConnectionUtils",
            ).createEmptyConnectionStats()),
            (Pe = 0),
            (fe = !1))));
    }
    function ot() {
      return Ce;
    }
    function at() {
      return be;
    }
    function it(e) {
      (o("WALogger").LOG(
        k ||
          (k = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [P2PConnectionManager] Received remote credentials (ufrag=",
            ", pwd_len=",
            ", algo=",
            ", fp_len=",
            ", isCaller=",
            ")",
          ])),
        e.ufrag,
        String(e.pwd.length),
        e.algorithm,
        String(e.fingerprint.length),
        String(me),
      ),
        (ve = e.ufrag),
        (Se = e.pwd),
        (Re = e.algorithm),
        (Le = e.fingerprint),
        Ge());
    }
    function lt(e) {
      if (Te && ue != null) {
        var t = ue,
          n = Oe(e);
        t.addIceCandidate(
          new RTCIceCandidate({ sdpMLineIndex: 0, sdpMid: "0", candidate: n }),
        ).then(
          function () {},
          function (e) {
            o("WALogger").WARN(
              I ||
                (I = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [P2PConnectionManager] Failed to add remote candidate: ",
                  "",
                ])),
              e,
            );
          },
        );
      } else
        ke.length < se.MAX_BUFFERED_CANDIDATES
          ? ke.push(e)
          : o("WALogger").WARN(
              T ||
                (T = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [P2PConnectionManager] Dropping remote ICE candidate, buffer full (",
                  ")",
                ])),
              ke.length,
            );
    }
    function st(e) {
      if (_e) return !0;
      if (
        de === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open &&
        ce != null &&
        ce.readyState === "open"
      )
        try {
          return (
            ce.send(e),
            $e.sentPackets++,
            ($e.sentBytes += e.byteLength),
            !0
          );
        } catch (e) {
          return (
            o("WALogger").ERROR(
              D ||
                (D = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [P2PConnectionManager] Failed to send P2P data: ",
                  "",
                ])),
              e,
            ),
            !1
          );
        }
      return !1;
    }
    function ut(e) {
      Ne = e;
    }
    function ct(e) {
      Me = e;
    }
    function dt(e) {
      we = e;
    }
    function mt() {
      return ie;
    }
    function pt(e) {
      return _t.apply(this, arguments);
    }
    function _t() {
      return (
        (_t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = le;
          try {
            var n = yield o("WAWebVoipStackInterface").getVoipStackInterface(),
              a =
                n != null && n.type === "web" ? yield n.isWebP2PEnabled(e) : !1;
            t === le && (ie = a);
          } catch (e) {
            (o("WALogger")
              .ERROR(
                te ||
                  (te = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] refreshP2PEnablement failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e)),
              t === le && (ie = !1));
          }
        })),
        _t.apply(this, arguments)
      );
    }
    function ft(e, t, n) {
      ((re = e), (oe = t), (ae = n));
    }
    function gt(e, t) {
      return t === ae && (e === re || e === oe);
    }
    function ht() {
      return ge;
    }
    function yt(e) {
      return e === ge || (he && e === ye);
    }
    function Ct() {
      _e &&
        (o("WALogger").LOG(
          x ||
            (x = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [P2PConnectionManager] Worker reported P2P channel opened",
            ])),
        ),
        Xe());
    }
    function bt(e) {
      var t = _e || he;
      t &&
        (o("WALogger").LOG(
          $ ||
            ($ = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [P2PConnectionManager] Worker reported P2P channel closed",
            ])),
        ),
        e != null &&
          (($e.sentPackets += e.sentPackets),
          ($e.sentBytes += e.sentBytes),
          ($e.receivedPackets += e.receivedPackets),
          ($e.receivedBytes += e.receivedBytes),
          e.firstSendTime > 0 &&
            $e.firstSendRequestTime === 0 &&
            ($e.firstSendRequestTime = e.firstSendTime),
          e.firstResponseRecvTime > 0 &&
            $e.firstResponseRecvTime === 0 &&
            ($e.firstResponseRecvTime = e.firstResponseRecvTime)),
        Qe(),
        (he = !1),
        (ye = null),
        ($e = o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats()),
        (Pe = 0),
        (fe = !1),
        _e &&
          (de !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
            de !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed &&
            We(o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed),
          (_e = !1),
          (ge = null),
          qe()));
    }
    ((l.parseSdpCandidateToTransport = Fe),
      (l.initP2PConnection = tt),
      (l.cleanupP2PConnection = rt),
      (l.getLocalIceCredentials = ot),
      (l.getLocalDtlsFingerprint = at),
      (l.handleRemoteCredentials = it),
      (l.handleRemoteCandidate = lt),
      (l.sendP2PData = st),
      (l.registerOnDataChannelMessage = ut),
      (l.registerOnDataChannelStateChange = ct),
      (l.registerOnIceCandidate = dt),
      (l.isP2PEnabled = mt),
      (l.refreshP2PEnablement = pt),
      (l.initP2PVirtualAddresses = ft),
      (l.isP2PVirtualAddress = gt),
      (l.getP2PConnectionId = ht),
      (l.isP2PConnectionId = yt),
      (l.handleWorkerP2PChannelOpened = Ct),
      (l.handleWorkerP2PChannelClosed = bt));
  },
  98,
);
