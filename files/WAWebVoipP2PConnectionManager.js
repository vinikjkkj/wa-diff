__d(
  "WAWebVoipP2PConnectionManager",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebVoipRelayConnectionUtils",
    "WAWebVoipSctpDataChannelThreadManager",
    "WAWebVoipSctpStatsInstrumentation",
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
      J = { urls: "stun:edge-stun.facebook.com:3478" },
      Z = null,
      ee = null,
      te = null,
      ne = !1,
      re = {
        DATA_CHANNEL_LABEL: "wa-web-p2p",
        DATA_CHANNEL_ID: 0,
        CONNECTION_TIMEOUT_MS: 3e4,
      },
      oe = null,
      ae = null,
      ie = o("WAWebVoipRelayConnectionUtils").ConnectionState.None,
      le = !1,
      se = !1,
      ue = !1,
      ce = null,
      de = !1,
      me = null,
      pe = null,
      _e = null,
      fe = null,
      ge = null,
      he = null,
      ye = null,
      Ce = [],
      be = [],
      ve = !1,
      Se = !1,
      Re = null,
      Le = null,
      Ee = o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats(),
      ke = 0,
      Ie = null,
      Te = null,
      De = null,
      xe = null;
    function $e() {
      return oe != null &&
        ie === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open
        ? [{ connectionId: "p2p", peerConnection: oe }]
        : [];
    }
    function Pe(e) {
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
    function Ne(e) {
      var t = e.priority * Math.pow(2, 24);
      return "candidate:1 1 UDP " + t + " " + e.ip + " " + e.port + " typ host";
    }
    function Me(t, n, r, a, i, l, u) {
      var c = t;
      ((c = o("WAWebVoipRelayConnectionUtils").replaceIceCredentials(c, n, r)),
        (c = o("WAWebVoipRelayConnectionUtils").replaceDtlsFingerprint(
          c,
          a,
          i,
        )),
        u
          ? (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [P2PConnectionManager] SDP: setting remote setup=passive (caller, local DTLS role=active/client)",
                ])),
            ),
            (c = c.replace(/a=setup:[^\r\n]+/g, "a=setup:passive")))
          : (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [P2PConnectionManager] SDP: setting remote setup=active (callee, local DTLS role=passive/server)",
                ])),
            ),
            (c = c.replace(/a=setup:[^\r\n]+/g, "a=setup:active"))),
        (c = o("WAWebVoipRelayConnectionUtils").removeIceCandidates(c)));
      var d = l
          .map(function (e) {
            return "a=" + e.candidate + "\r\n";
          })
          .join(""),
        m = c.replace(/\s+$/, "\r\n");
      return m + d;
    }
    function we(e) {
      ((ie = e), Te != null && Te(e));
    }
    function Ae() {
      if (
        (Re != null && (window.clearTimeout(Re), (Re = null)),
        !se && ae != null)
      )
        try {
          ae.close();
        } catch (e) {
          o("WALogger").ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [P2PConnectionManager] Error closing data channel: ",
                "",
              ])),
            e,
          );
        }
      if (((ae = null), oe != null)) {
        try {
          oe.close();
        } catch (e) {
          o("WALogger").ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [P2PConnectionManager] Error closing peer connection: ",
                "",
              ])),
            e,
          );
        }
        oe = null;
      }
    }
    function Fe(e) {
      ie !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
        ie !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed &&
        (o("WALogger").ERROR(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [P2PConnectionManager] Connection failed, reason: ",
              "",
            ])),
          e,
        ),
        we(o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed),
        Oe(),
        Ae());
    }
    function Oe() {
      if (se && ce != null) {
        var e = ce,
          t = o("WAWebVoipSctpDataChannelThreadManager").getDataChannelThread();
        (t != null && t.closeChannel(e), (se = !1), (ce = null));
      }
    }
    function Be() {
      if (!(oe == null || !Se)) {
        var e = oe,
          t = be;
        be = [];
        for (var n of t) {
          var r = Ne(n);
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
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
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
    function We() {
      return qe.apply(this, arguments);
    }
    function qe() {
      return (
        (qe = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            !(
              fe == null ||
              ge == null ||
              he == null ||
              ye == null ||
              oe == null ||
              Le == null
            ) &&
            !(Se || ve)
          ) {
            var e = oe;
            ve = !0;
            try {
              if (le) {
                var t = Me(Le, fe, ge, he, ye, [], !0);
                (o("WALogger").LOG(
                  x ||
                    (x = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Applying synthetic answer SDP (caller, ICE role=controlling, DTLS=active)",
                    ])),
                ),
                  yield e.setRemoteDescription({ sdp: t, type: "answer" }));
              } else {
                var n,
                  r = Me(Le, fe, ge, he, ye, [], !1);
                (o("WALogger").LOG(
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Applying synthetic offer SDP (callee, ICE role=controlled, DTLS=passive)",
                    ])),
                ),
                  yield e.setRemoteDescription({ sdp: r, type: "offer" }));
                var a = yield e.createAnswer();
                yield e.setLocalDescription(a);
                var i = (n = a.sdp) != null ? n : "";
                if (
                  ((pe = o(
                    "WAWebVoipRelayConnectionUtils",
                  ).extractIceCredentials(i)),
                  (_e = o(
                    "WAWebVoipRelayConnectionUtils",
                  ).extractDtlsFingerprint(i)),
                  pe == null || _e == null)
                ) {
                  (o("WALogger").ERROR(
                    P ||
                      (P = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [P2PConnectionManager] Failed to extract credentials from answer SDP",
                      ])),
                  ),
                    (ve = !1),
                    Fe("credential_extraction_failed"));
                  return;
                }
                o("WALogger").LOG(
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Callee local credentials extracted from answer",
                    ])),
                );
                var l = xe;
                if (l != null)
                  try {
                    l(pe.ufrag, pe.pwd, _e.algorithm, _e.fingerprint, []);
                  } catch (e) {
                    o("WALogger").ERROR(
                      M ||
                        (M = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [P2PConnectionManager] Failed to send callee transport: ",
                          "",
                        ])),
                      e,
                    );
                  }
              }
              (o("WALogger").LOG(
                w ||
                  (w = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] Remote description applied successfully",
                  ])),
              ),
                (Se = !0),
                (ve = !1),
                Be());
            } catch (e) {
              ((ve = !1),
                (Se = !1),
                o("WALogger").ERROR(
                  A ||
                    (A = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Failed to apply remote description: ",
                      "",
                    ])),
                  e,
                ),
                Fe("remote_description_failed"));
            }
          }
        })),
        qe.apply(this, arguments)
      );
    }
    function Ue(e) {
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
        (Ce.push(a), De != null && De(a));
        var i = xe;
        if (i != null) {
          var l = pe,
            s = _e;
          if (l != null && s != null) {
            var u = Pe(a.candidate);
            if (u != null)
              try {
                i(l.ufrag, l.pwd, s.algorithm, s.fingerprint, [u]);
              } catch (e) {
                o("WALogger").ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
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
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [P2PConnectionManager] ICE gathering complete",
            ])),
        );
    }
    function Ve() {
      if (oe != null) {
        var e = oe,
          t = e.iceConnectionState;
        (o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [P2PConnectionManager] ICE connection state: ",
              " (isCaller=",
              ", gathering=",
              ", signaling=",
              ")",
            ])),
          t,
          String(le),
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
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
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
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
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
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
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
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [P2PConnectionManager] getStats failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("p2p-getstats-failed");
              }),
          t === "failed" && Fe("ice_connection_failed"));
      }
    }
    function He() {
      var e,
        t = "N/A";
      (Ee.connectionReadyTime !== 0 &&
        ke > 0 &&
        (t = (Ee.connectionReadyTime - ke).toString()),
        o("WALogger").LOG(
          b ||
            (b = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [P2PConnectionManager] Connection stats:\n    ConnectionId: ",
              ",\n    Sent: ",
              " packets,\n    Received: ",
              " packets,\n    Sent Bytes: ",
              " bytes,\n    Received Bytes: ",
              " bytes,\n    Connection Setup Time: ",
              " ms,\n    Transferred to worker: ",
              "",
            ])),
          (e = ce != null ? ce : me) != null ? e : "N/A",
          Ee.sentPackets,
          Ee.receivedPackets,
          Ee.sentBytes,
          Ee.receivedBytes,
          t,
          String(ue),
        ));
    }
    function Ge() {
      (o("WALogger").LOG(
        v ||
          (v = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [P2PConnectionManager] Data channel opened",
          ])),
      ),
        we(o("WAWebVoipRelayConnectionUtils").ConnectionState.Open),
        (Ee.connectionReadyTime = Date.now()),
        se ||
          o("WAWebVoipSctpStatsInstrumentation").addConnectionSource("p2p", $e),
        Re != null && (window.clearTimeout(Re), (Re = null)));
    }
    function ze() {
      (o("WALogger").LOG(
        S ||
          (S = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [P2PConnectionManager] Data channel closed",
          ])),
      ),
        ie !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
          ie !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed &&
          (we(o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed),
          Ae()));
    }
    function je(e) {
      Ie != null &&
        o("WAWebVoipRelayConnectionUtils")
          .dataToArrayBuffer(e.data)
          .then(function (e) {
            e != null &&
              Ie != null &&
              (Ee.receivedPackets++, (Ee.receivedBytes += e.byteLength), Ie(e));
          });
    }
    function Ke(e) {
      (o("WALogger").ERROR(
        R ||
          (R = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [P2PConnectionManager] Data channel error",
          ])),
      ),
        Fe("data_channel_error"));
    }
    function Qe(e) {
      ((e.onopen = function () {
        Ge();
      }),
        (e.onclose = function () {
          ze();
        }),
        (e.onmessage = function (e) {
          je(e);
        }),
        (e.onerror = function (e) {
          Ke(e);
        }));
    }
    function Xe(e, t, n) {
      return Ye.apply(this, arguments);
    }
    function Ye() {
      return (
        (Ye = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            (oe != null &&
              (o("WALogger").WARN(
                F ||
                  (F = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] initP2PConnection called while already initialized, cleaning up",
                  ])),
              ),
              Je()),
              o("WALogger").LOG(
                O ||
                  (O = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] Initializing P2P connection, caller=",
                    "",
                  ])),
                String(e),
              ),
              (le = e),
              (xe = n != null ? n : null),
              (ne =
                o("WAWebABProps").getABPropConfigValue(
                  "enable_web_voip_p2p",
                ) === !0));
            var a = new RTCPeerConnection({ iceServers: [].concat(t, [J]) });
            ((oe = a),
              (a.onicecandidate = function (e) {
                Ue(e);
              }),
              (a.oniceconnectionstatechange = function () {
                Ve();
              }),
              (a.onconnectionstatechange = function () {
                o("WALogger").LOG(
                  B ||
                    (B = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] PeerConnection state: ",
                      "",
                    ])),
                  a.connectionState,
                );
              }),
              (a.onicegatheringstatechange = function () {
                o("WALogger").LOG(
                  W ||
                    (W = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] ICE gathering state: ",
                      "",
                    ])),
                  a.iceGatheringState,
                );
              }),
              (a.onsignalingstatechange = function () {
                o("WALogger").LOG(
                  q ||
                    (q = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Signaling state: ",
                      "",
                    ])),
                  a.signalingState,
                );
              }));
            var i = a.createDataChannel(
              re.DATA_CHANNEL_LABEL,
              babelHelpers.extends(
                {},
                o("WAWebVoipRelayConnectionUtils").BASE_DATA_CHANNEL_OPTIONS,
              ),
            );
            ((i.binaryType = "arraybuffer"), (ae = i));
            var l = o("WAWebVoipRelayConnectionUtils").isDcTransferDisabled(),
              s = l
                ? null
                : o(
                    "WAWebVoipSctpDataChannelThreadManager",
                  ).getDataChannelThread();
            if (
              (l &&
                o("WALogger").LOG(
                  U ||
                    (U = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] DC transfer disabled for current browser, using main-thread path",
                    ])),
                ),
              s != null && Z != null && te != null)
            ) {
              var u = Z,
                c = te,
                d = u + ":" + c,
                m =
                  o("WAWebABProps").getABPropConfigValue(
                    "voip_enable_webrtc_stats_polling",
                  ) === !0,
                p = s.transferChannel(i, d, u, c, m);
              p
                ? ((se = !0),
                  (ue = !0),
                  (ce = d),
                  o("WALogger").LOG(
                    V ||
                      (V = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [P2PConnectionManager] DataChannel transferred to worker thread as ",
                        "",
                      ])),
                    d,
                  ))
                : o("WALogger").WARN(
                    H ||
                      (H = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [P2PConnectionManager] DataChannel transfer failed, using main-thread path",
                      ])),
                  );
            }
            if ((se || Qe(i), e)) {
              var _,
                f = yield a.createOffer();
              yield a.setLocalDescription(f);
              var g = (_ = f.sdp) != null ? _ : "";
              if (
                ((Le = g),
                (pe = o("WAWebVoipRelayConnectionUtils").extractIceCredentials(
                  g,
                )),
                (_e = o("WAWebVoipRelayConnectionUtils").extractDtlsFingerprint(
                  g,
                )),
                pe == null || _e == null)
              ) {
                (o("WALogger").ERROR(
                  G ||
                    (G = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Failed to extract local credentials from offer SDP",
                    ])),
                ),
                  Fe("credential_extraction_failed"));
                return;
              }
              o("WALogger").LOG(
                z ||
                  (z = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] Caller offer created, local credentials extracted",
                  ])),
              );
              var h = xe;
              if (h != null && pe != null && _e != null) {
                o("WALogger").LOG(
                  j ||
                    (j = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Sending initial credentials to remote peer",
                    ])),
                );
                try {
                  h(pe.ufrag, pe.pwd, _e.algorithm, _e.fingerprint, []);
                } catch (e) {
                  o("WALogger")
                    .ERROR(
                      K ||
                        (K = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [P2PConnectionManager] Failed to send initial transport",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("p2p-caller-send-initial-transport-failed");
                }
              }
            } else {
              var y,
                C = yield a.createOffer(),
                b = (y = C.sdp) != null ? y : "";
              if (
                ((Le = b),
                (pe = o("WAWebVoipRelayConnectionUtils").extractIceCredentials(
                  b,
                )),
                (_e = o("WAWebVoipRelayConnectionUtils").extractDtlsFingerprint(
                  b,
                )),
                pe == null || _e == null)
              ) {
                (o("WALogger")
                  .ERROR(
                    Q ||
                      (Q = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [P2PConnectionManager] Failed to extract local credentials from callee template SDP",
                      ])),
                  )
                  .sendLogs("p2p-callee-credential-extraction-failed"),
                  Fe("credential_extraction_failed"));
                return;
              }
              o("WALogger").LOG(
                X ||
                  (X = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] Callee template SDP generated, sending proactive credentials",
                  ])),
              );
              var v = xe;
              if (v != null)
                try {
                  v(pe.ufrag, pe.pwd, _e.algorithm, _e.fingerprint, []);
                } catch (e) {
                  o("WALogger")
                    .ERROR(
                      Y ||
                        (Y = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [P2PConnectionManager] Failed to send callee initial transport",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("p2p-callee-send-initial-transport-failed");
                }
            }
            (We(),
              (ke = Date.now()),
              we(o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting),
              (Re = window.setTimeout(function () {
                ie ===
                  o("WAWebVoipRelayConnectionUtils").ConnectionState
                    .Connecting && Fe("connection_timeout");
              }, re.CONNECTION_TIMEOUT_MS)));
          },
        )),
        Ye.apply(this, arguments)
      );
    }
    function Je() {
      ie !== o("WAWebVoipRelayConnectionUtils").ConnectionState.None &&
        (o("WALogger").LOG(
          L ||
            (L = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [P2PConnectionManager] Cleaning up P2P connection",
            ])),
        ),
        se ? ((de = !0), (me = ce)) : ke > 0 && He(),
        o("WAWebVoipSctpStatsInstrumentation").removeConnectionSource("p2p"),
        Oe(),
        Ae(),
        we(o("WAWebVoipRelayConnectionUtils").ConnectionState.None),
        (le = !1),
        (pe = null),
        (_e = null),
        (fe = null),
        (ge = null),
        (he = null),
        (ye = null),
        (Ce = []),
        (be = []),
        (ve = !1),
        (Se = !1),
        (Le = null),
        (xe = null),
        de ||
          ((Ee = o(
            "WAWebVoipRelayConnectionUtils",
          ).createEmptyConnectionStats()),
          (ke = 0),
          (ue = !1)));
    }
    function Ze() {
      return pe;
    }
    function et() {
      return _e;
    }
    function tt(e) {
      (o("WALogger").LOG(
        E ||
          (E = babelHelpers.taggedTemplateLiteralLoose([
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
        String(le),
      ),
        (fe = e.ufrag),
        (ge = e.pwd),
        (he = e.algorithm),
        (ye = e.fingerprint),
        We());
    }
    function nt() {
      return [].concat(Ce);
    }
    function rt(e) {
      if (Se && oe != null) {
        var t = oe,
          n = Ne(e);
        t.addIceCandidate(
          new RTCIceCandidate({ sdpMLineIndex: 0, sdpMid: "0", candidate: n }),
        ).then(
          function () {},
          function (e) {
            o("WALogger").WARN(
              k ||
                (k = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [P2PConnectionManager] Failed to add remote candidate: ",
                  "",
                ])),
              e,
            );
          },
        );
      } else be.push(e);
    }
    function ot(e) {
      if (se) return !0;
      if (
        ie === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open &&
        ae != null &&
        ae.readyState === "open"
      )
        try {
          return (
            ae.send(e),
            Ee.sentPackets++,
            (Ee.sentBytes += e.byteLength),
            !0
          );
        } catch (e) {
          return (
            o("WALogger").ERROR(
              I ||
                (I = babelHelpers.taggedTemplateLiteralLoose([
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
    function at(e) {
      Ie = e;
    }
    function it(e) {
      Te = e;
    }
    function lt(e) {
      De = e;
    }
    function st() {
      return ie;
    }
    function ut() {
      return ne;
    }
    function ct(e, t, n) {
      ((Z = e),
        (ee = t),
        (te = n),
        (ne =
          o("WAWebABProps").getABPropConfigValue("enable_web_voip_p2p") ===
          !0));
    }
    function dt(e, t) {
      return t === te && (e === Z || e === ee);
    }
    function mt() {
      return ce;
    }
    function pt(e) {
      return e === ce || (de && e === me);
    }
    function _t() {
      se &&
        (o("WALogger").LOG(
          T ||
            (T = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [P2PConnectionManager] Worker reported P2P channel opened",
            ])),
        ),
        Ge());
    }
    function ft(e) {
      var t = se || de;
      t &&
        (o("WALogger").LOG(
          D ||
            (D = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [P2PConnectionManager] Worker reported P2P channel closed",
            ])),
        ),
        e != null &&
          ((Ee.sentPackets += e.sentPackets),
          (Ee.sentBytes += e.sentBytes),
          (Ee.receivedPackets += e.receivedPackets),
          (Ee.receivedBytes += e.receivedBytes),
          e.firstSendTime > 0 &&
            Ee.firstSendRequestTime === 0 &&
            (Ee.firstSendRequestTime = e.firstSendTime),
          e.firstResponseRecvTime > 0 &&
            Ee.firstResponseRecvTime === 0 &&
            (Ee.firstResponseRecvTime = e.firstResponseRecvTime)),
        He(),
        (de = !1),
        (me = null),
        (Ee = o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats()),
        (ke = 0),
        (ue = !1),
        se &&
          (ie !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
            ie !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed &&
            we(o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed),
          (se = !1),
          (ce = null),
          Ae()));
    }
    ((l.parseSdpCandidateToTransport = Pe),
      (l.initP2PConnection = Xe),
      (l.cleanupP2PConnection = Je),
      (l.getLocalIceCredentials = Ze),
      (l.getLocalDtlsFingerprint = et),
      (l.handleRemoteCredentials = tt),
      (l.getLocalCandidates = nt),
      (l.handleRemoteCandidate = rt),
      (l.sendP2PData = ot),
      (l.registerOnDataChannelMessage = at),
      (l.registerOnDataChannelStateChange = it),
      (l.registerOnIceCandidate = lt),
      (l.getP2PConnectionState = st),
      (l.isP2PEnabled = ut),
      (l.initP2PVirtualAddresses = ct),
      (l.isP2PVirtualAddress = dt),
      (l.getP2PConnectionId = mt),
      (l.isP2PConnectionId = pt),
      (l.handleWorkerP2PChannelOpened = _t),
      (l.handleWorkerP2PChannelClosed = ft));
  },
  98,
);
