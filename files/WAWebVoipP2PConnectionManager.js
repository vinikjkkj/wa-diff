__d(
  "WAWebVoipP2PConnectionManager",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebUserPrefsGeneral",
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
      J,
      Z,
      ee = { urls: "stun:edge-stun.facebook.com:3478" },
      te = null,
      ne = null,
      re = null,
      oe = !1,
      ae = {
        DATA_CHANNEL_LABEL: "wa-web-p2p",
        DATA_CHANNEL_ID: 0,
        CONNECTION_TIMEOUT_MS: 3e4,
        MAX_BUFFERED_CANDIDATES: 20,
      },
      ie = null,
      le = null,
      se = o("WAWebVoipRelayConnectionUtils").ConnectionState.None,
      ue = !1,
      ce = !1,
      de = !1,
      me = null,
      pe = !1,
      _e = null,
      fe = null,
      ge = null,
      he = null,
      ye = null,
      Ce = null,
      be = null,
      ve = [],
      Se = [],
      Re = !1,
      Le = !1,
      Ee = null,
      ke = null,
      Ie = o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats(),
      Te = 0,
      De = null,
      xe = null,
      $e = null,
      Pe = null;
    function Ne() {
      return ie != null &&
        se === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open
        ? [{ connectionId: "p2p", peerConnection: ie }]
        : [];
    }
    function Me(e) {
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
    function we(e) {
      var t = e.priority * Math.pow(2, 24);
      return "candidate:1 1 UDP " + t + " " + e.ip + " " + e.port + " typ host";
    }
    function Ae(t, n, r, a, i, l, u) {
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
    function Fe(e) {
      ((se = e), xe != null && xe(e));
    }
    function Oe() {
      if (
        (Ee != null && (window.clearTimeout(Ee), (Ee = null)),
        !ce && le != null)
      )
        try {
          le.close();
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
      if (((le = null), ie != null)) {
        try {
          ie.close();
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
        ie = null;
      }
    }
    function Be(e) {
      se !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
        se !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed &&
        (o("WALogger").ERROR(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [P2PConnectionManager] Connection failed, reason: ",
              "",
            ])),
          e,
        ),
        Fe(o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed),
        We(),
        Oe());
    }
    function We() {
      if (ce && me != null) {
        var e = me,
          t = o("WAWebVoipSctpDataChannelThreadManager").getDataChannelThread();
        (t != null && t.closeChannel(e), (ce = !1), (me = null));
      }
    }
    function qe() {
      if (!(ie == null || !Le)) {
        var e = ie,
          t = Se;
        Se = [];
        for (var n of t) {
          var r = we(n);
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
    function Ue() {
      return Ve.apply(this, arguments);
    }
    function Ve() {
      return (
        (Ve = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            !(
              he == null ||
              ye == null ||
              Ce == null ||
              be == null ||
              ie == null ||
              ke == null
            ) &&
            !(Le || Re)
          ) {
            var e = ie;
            Re = !0;
            try {
              if (ue) {
                var t = Ae(ke, he, ye, Ce, be, [], !0);
                (o("WALogger").LOG(
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Applying synthetic answer SDP (caller, ICE role=controlling, DTLS=active)",
                    ])),
                ),
                  yield e.setRemoteDescription({ sdp: t, type: "answer" }));
              } else {
                var n,
                  r = Ae(ke, he, ye, Ce, be, [], !1);
                (o("WALogger").LOG(
                  P ||
                    (P = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Applying synthetic offer SDP (callee, ICE role=controlled, DTLS=passive)",
                    ])),
                ),
                  yield e.setRemoteDescription({ sdp: r, type: "offer" }));
                var a = yield e.createAnswer(),
                  i = (n = a.sdp) != null ? n : "",
                  l = fe;
                if (l != null) {
                  var s = o(
                    "WAWebVoipRelayConnectionUtils",
                  ).extractIceCredentials(i);
                  s != null &&
                    s.ufrag !== l.ufrag &&
                    (o("WALogger").LOG(
                      N ||
                        (N = babelHelpers.taggedTemplateLiteralLoose([
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
                  (fe = o(
                    "WAWebVoipRelayConnectionUtils",
                  ).extractIceCredentials(i)),
                  (ge = o(
                    "WAWebVoipRelayConnectionUtils",
                  ).extractDtlsFingerprint(i)),
                  fe == null || ge == null)
                ) {
                  (o("WALogger").ERROR(
                    M ||
                      (M = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [P2PConnectionManager] Failed to extract credentials from answer SDP",
                      ])),
                  ),
                    (Re = !1),
                    Be("credential_extraction_failed"));
                  return;
                }
                o("WALogger").LOG(
                  w ||
                    (w = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Callee local credentials extracted from answer",
                    ])),
                );
                var u = Pe;
                if (u != null)
                  try {
                    u(fe.ufrag, fe.pwd, ge.algorithm, ge.fingerprint, []);
                  } catch (e) {
                    o("WALogger").ERROR(
                      A ||
                        (A = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [P2PConnectionManager] Failed to send callee transport: ",
                          "",
                        ])),
                      e,
                    );
                  }
              }
              (o("WALogger").LOG(
                F ||
                  (F = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] Remote description applied successfully",
                  ])),
              ),
                (Le = !0),
                (Re = !1),
                qe());
            } catch (e) {
              ((Re = !1),
                (Le = !1),
                o("WALogger").ERROR(
                  O ||
                    (O = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Failed to apply remote description: ",
                      "",
                    ])),
                  e,
                ),
                Be("remote_description_failed"));
            }
          }
        })),
        Ve.apply(this, arguments)
      );
    }
    function He(e) {
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
        (ve.push(a), $e != null && $e(a));
        var i = Pe;
        if (i != null) {
          var l = fe,
            s = ge;
          if (l != null && s != null) {
            var u = Me(a.candidate);
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
    function Ge() {
      if (ie != null) {
        var e = ie,
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
          String(ue),
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
          t === "failed" && Be("ice_connection_failed"));
      }
    }
    function ze() {
      var e,
        t = "N/A";
      (Ie.connectionReadyTime !== 0 &&
        Te > 0 &&
        (t = (Ie.connectionReadyTime - Te).toString()),
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
          (e = me != null ? me : _e) != null ? e : "N/A",
          Ie.sentPackets,
          Ie.receivedPackets,
          Ie.sentBytes,
          Ie.receivedBytes,
          t,
          String(de),
        ));
    }
    function je() {
      (o("WALogger").LOG(
        v ||
          (v = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [P2PConnectionManager] Data channel opened",
          ])),
      ),
        Fe(o("WAWebVoipRelayConnectionUtils").ConnectionState.Open),
        (Ie.connectionReadyTime = Date.now()),
        ce ||
          o("WAWebVoipSctpStatsInstrumentation").addConnectionSource("p2p", Ne),
        Ee != null && (window.clearTimeout(Ee), (Ee = null)));
    }
    function Ke() {
      (o("WALogger").LOG(
        S ||
          (S = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [P2PConnectionManager] Data channel closed",
          ])),
      ),
        se !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
          se !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed &&
          (Fe(o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed),
          Oe()));
    }
    function Qe(e) {
      De != null &&
        o("WAWebVoipRelayConnectionUtils")
          .dataToArrayBuffer(e.data)
          .then(function (e) {
            e != null &&
              De != null &&
              (Ie.receivedPackets++, (Ie.receivedBytes += e.byteLength), De(e));
          });
    }
    function Xe(e) {
      (o("WALogger").ERROR(
        R ||
          (R = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [P2PConnectionManager] Data channel error",
          ])),
      ),
        Be("data_channel_error"));
    }
    function Ye(e) {
      ((e.onopen = function () {
        je();
      }),
        (e.onclose = function () {
          Ke();
        }),
        (e.onmessage = function (e) {
          Qe(e);
        }),
        (e.onerror = function (e) {
          Xe(e);
        }));
    }
    function Je(e, t, n) {
      return Ze.apply(this, arguments);
    }
    function Ze() {
      return (
        (Ze = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            (ie != null &&
              (o("WALogger").WARN(
                B ||
                  (B = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] initP2PConnection called while already initialized, cleaning up",
                  ])),
              ),
              et()),
              o("WALogger").LOG(
                W ||
                  (W = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] Initializing P2P connection, caller=",
                    "",
                  ])),
                String(e),
              ),
              (ue = e),
              (Pe = n != null ? n : null),
              (oe =
                o("WAWebABProps").getABPropConfigValue(
                  "enable_web_voip_p2p",
                ) === !0));
            var a = new RTCPeerConnection({ iceServers: [].concat(t, [ee]) });
            ((ie = a),
              (a.onicecandidate = function (e) {
                He(e);
              }),
              (a.oniceconnectionstatechange = function () {
                Ge();
              }),
              (a.onconnectionstatechange = function () {
                o("WALogger").LOG(
                  q ||
                    (q = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] PeerConnection state: ",
                      "",
                    ])),
                  a.connectionState,
                );
              }),
              (a.onicegatheringstatechange = function () {
                o("WALogger").LOG(
                  U ||
                    (U = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] ICE gathering state: ",
                      "",
                    ])),
                  a.iceGatheringState,
                );
              }),
              (a.onsignalingstatechange = function () {
                o("WALogger").LOG(
                  V ||
                    (V = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Signaling state: ",
                      "",
                    ])),
                  a.signalingState,
                );
              }));
            var i = a.createDataChannel(
              ae.DATA_CHANNEL_LABEL,
              babelHelpers.extends(
                {},
                o("WAWebVoipRelayConnectionUtils").BASE_DATA_CHANNEL_OPTIONS,
              ),
            );
            ((i.binaryType = "arraybuffer"), (le = i));
            var l = o("WAWebVoipRelayConnectionUtils").isDcTransferDisabled(),
              s = l
                ? null
                : o(
                    "WAWebVoipSctpDataChannelThreadManager",
                  ).getDataChannelThread();
            if (
              (l &&
                o("WALogger").LOG(
                  H ||
                    (H = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] DC transfer disabled for current browser, using main-thread path",
                    ])),
                ),
              s != null && te != null && re != null)
            ) {
              var u = te,
                c = re,
                d = u + ":" + c,
                m =
                  o("WAWebABProps").getABPropConfigValue(
                    "voip_enable_webrtc_stats_polling",
                  ) === !0,
                p = s.transferChannel(i, d, u, c, m);
              p
                ? ((ce = !0),
                  (de = !0),
                  (me = d),
                  o("WALogger").LOG(
                    G ||
                      (G = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [P2PConnectionManager] DataChannel transferred to worker thread as ",
                        "",
                      ])),
                    d,
                  ))
                : o("WALogger").WARN(
                    z ||
                      (z = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [P2PConnectionManager] DataChannel transfer failed, using main-thread path",
                      ])),
                  );
            }
            if ((ce || Ye(i), e)) {
              var _,
                f = yield a.createOffer();
              yield a.setLocalDescription(f);
              var g = (_ = f.sdp) != null ? _ : "";
              if (
                ((ke = g),
                (fe = o("WAWebVoipRelayConnectionUtils").extractIceCredentials(
                  g,
                )),
                (ge = o("WAWebVoipRelayConnectionUtils").extractDtlsFingerprint(
                  g,
                )),
                fe == null || ge == null)
              ) {
                (o("WALogger").ERROR(
                  j ||
                    (j = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Failed to extract local credentials from offer SDP",
                    ])),
                ),
                  Be("credential_extraction_failed"));
                return;
              }
              o("WALogger").LOG(
                K ||
                  (K = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] Caller offer created, local credentials extracted",
                  ])),
              );
              var h = Pe;
              if (h != null && fe != null && ge != null) {
                o("WALogger").LOG(
                  Q ||
                    (Q = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Sending initial credentials to remote peer",
                    ])),
                );
                try {
                  h(fe.ufrag, fe.pwd, ge.algorithm, ge.fingerprint, []);
                } catch (e) {
                  o("WALogger")
                    .ERROR(
                      X ||
                        (X = babelHelpers.taggedTemplateLiteralLoose([
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
                ((ke = b),
                (fe = o("WAWebVoipRelayConnectionUtils").extractIceCredentials(
                  b,
                )),
                (ge = o("WAWebVoipRelayConnectionUtils").extractDtlsFingerprint(
                  b,
                )),
                fe == null || ge == null)
              ) {
                (o("WALogger")
                  .ERROR(
                    Y ||
                      (Y = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [P2PConnectionManager] Failed to extract local credentials from callee template SDP",
                      ])),
                  )
                  .sendLogs("p2p-callee-credential-extraction-failed"),
                  Be("credential_extraction_failed"));
                return;
              }
              o("WALogger").LOG(
                J ||
                  (J = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] Callee template SDP generated, sending proactive credentials",
                  ])),
              );
              var v = Pe;
              if (v != null)
                try {
                  v(fe.ufrag, fe.pwd, ge.algorithm, ge.fingerprint, []);
                } catch (e) {
                  o("WALogger")
                    .ERROR(
                      Z ||
                        (Z = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [P2PConnectionManager] Failed to send callee initial transport",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("p2p-callee-send-initial-transport-failed");
                }
            }
            (Ue(),
              (Te = Date.now()),
              Fe(o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting),
              (Ee = window.setTimeout(function () {
                se ===
                  o("WAWebVoipRelayConnectionUtils").ConnectionState
                    .Connecting && Be("connection_timeout");
              }, ae.CONNECTION_TIMEOUT_MS)));
          },
        )),
        Ze.apply(this, arguments)
      );
    }
    function et() {
      se !== o("WAWebVoipRelayConnectionUtils").ConnectionState.None &&
        (o("WALogger").LOG(
          L ||
            (L = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [P2PConnectionManager] Cleaning up P2P connection",
            ])),
        ),
        ce ? ((pe = !0), (_e = me)) : Te > 0 && ze(),
        o("WAWebVoipSctpStatsInstrumentation").removeConnectionSource("p2p"),
        We(),
        Oe(),
        Fe(o("WAWebVoipRelayConnectionUtils").ConnectionState.None),
        (ue = !1),
        (fe = null),
        (ge = null),
        (he = null),
        (ye = null),
        (Ce = null),
        (be = null),
        (ve = []),
        (Se = []),
        (Re = !1),
        (Le = !1),
        (ke = null),
        (Pe = null),
        pe ||
          ((Ie = o(
            "WAWebVoipRelayConnectionUtils",
          ).createEmptyConnectionStats()),
          (Te = 0),
          (de = !1)));
    }
    function tt() {
      return fe;
    }
    function nt() {
      return ge;
    }
    function rt(e) {
      (ie == null && !mt()) ||
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
          String(ue),
        ),
        (he = e.ufrag),
        (ye = e.pwd),
        (Ce = e.algorithm),
        (be = e.fingerprint),
        Ue());
    }
    function ot() {
      return [].concat(ve);
    }
    function at(e) {
      if (!(ie == null && !mt()))
        if (Le && ie != null) {
          var t = ie,
            n = we(e);
          t.addIceCandidate(
            new RTCIceCandidate({
              sdpMLineIndex: 0,
              sdpMid: "0",
              candidate: n,
            }),
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
        } else
          Se.length < ae.MAX_BUFFERED_CANDIDATES
            ? Se.push(e)
            : o("WALogger").WARN(
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] Dropping remote ICE candidate, buffer full (",
                    ")",
                  ])),
                Se.length,
              );
    }
    function it(e) {
      if (ce) return !0;
      if (
        se === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open &&
        le != null &&
        le.readyState === "open"
      )
        try {
          return (
            le.send(e),
            Ie.sentPackets++,
            (Ie.sentBytes += e.byteLength),
            !0
          );
        } catch (e) {
          return (
            o("WALogger").ERROR(
              T ||
                (T = babelHelpers.taggedTemplateLiteralLoose([
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
    function lt(e) {
      De = e;
    }
    function st(e) {
      xe = e;
    }
    function ut(e) {
      $e = e;
    }
    function ct() {
      return se;
    }
    function dt() {
      return oe;
    }
    function mt() {
      return o("WAWebUserPrefsGeneral").getUserPrivacySettings()
        .disallowAllP2p === !0
        ? !1
        : o("WAWebABProps").getABPropConfigValue("enable_web_voip_p2p") === !0;
    }
    function pt(e, t, n) {
      ((te = e), (ne = t), (re = n));
    }
    function _t(e, t) {
      return t === re && (e === te || e === ne);
    }
    function ft() {
      return me;
    }
    function gt(e) {
      return e === me || (pe && e === _e);
    }
    function ht() {
      ce &&
        (o("WALogger").LOG(
          D ||
            (D = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [P2PConnectionManager] Worker reported P2P channel opened",
            ])),
        ),
        je());
    }
    function yt(e) {
      var t = ce || pe;
      t &&
        (o("WALogger").LOG(
          x ||
            (x = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [P2PConnectionManager] Worker reported P2P channel closed",
            ])),
        ),
        e != null &&
          ((Ie.sentPackets += e.sentPackets),
          (Ie.sentBytes += e.sentBytes),
          (Ie.receivedPackets += e.receivedPackets),
          (Ie.receivedBytes += e.receivedBytes),
          e.firstSendTime > 0 &&
            Ie.firstSendRequestTime === 0 &&
            (Ie.firstSendRequestTime = e.firstSendTime),
          e.firstResponseRecvTime > 0 &&
            Ie.firstResponseRecvTime === 0 &&
            (Ie.firstResponseRecvTime = e.firstResponseRecvTime)),
        ze(),
        (pe = !1),
        (_e = null),
        (Ie = o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats()),
        (Te = 0),
        (de = !1),
        ce &&
          (se !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
            se !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed &&
            Fe(o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed),
          (ce = !1),
          (me = null),
          Oe()));
    }
    ((l.parseSdpCandidateToTransport = Me),
      (l.initP2PConnection = Je),
      (l.cleanupP2PConnection = et),
      (l.getLocalIceCredentials = tt),
      (l.getLocalDtlsFingerprint = nt),
      (l.handleRemoteCredentials = rt),
      (l.getLocalCandidates = ot),
      (l.handleRemoteCandidate = at),
      (l.sendP2PData = it),
      (l.registerOnDataChannelMessage = lt),
      (l.registerOnDataChannelStateChange = st),
      (l.registerOnIceCandidate = ut),
      (l.getP2PConnectionState = ct),
      (l.isP2PEnabled = dt),
      (l.isP2PEnabledLive = mt),
      (l.initP2PVirtualAddresses = pt),
      (l.isP2PVirtualAddress = _t),
      (l.getP2PConnectionId = ft),
      (l.isP2PConnectionId = gt),
      (l.handleWorkerP2PChannelOpened = ht),
      (l.handleWorkerP2PChannelClosed = yt));
  },
  98,
);
