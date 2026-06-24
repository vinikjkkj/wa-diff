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
      ee,
      te = { urls: "stun:edge-stun.facebook.com:3478" },
      ne = null,
      re = null,
      oe = null,
      ae = !1,
      ie = {
        DATA_CHANNEL_LABEL: "wa-web-p2p",
        DATA_CHANNEL_ID: 0,
        CONNECTION_TIMEOUT_MS: 3e4,
        MAX_BUFFERED_CANDIDATES: 20,
      },
      le = null,
      se = null,
      ue = o("WAWebVoipRelayConnectionUtils").ConnectionState.None,
      ce = !1,
      de = !1,
      me = !1,
      pe = !1,
      _e = null,
      fe = !1,
      ge = null,
      he = null,
      ye = null,
      Ce = null,
      be = null,
      ve = null,
      Se = null,
      Re = [],
      Le = [],
      Ee = !1,
      ke = !1,
      Ie = null,
      Te = null,
      De = o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats(),
      xe = 0,
      $e = null,
      Pe = null,
      Ne = null,
      Me = null;
    function we() {
      return le != null &&
        ue === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open
        ? [{ connectionId: "p2p", peerConnection: le }]
        : [];
    }
    function Ae(e) {
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
    function Fe(e) {
      var t = e.priority * Math.pow(2, 24);
      return "candidate:1 1 UDP " + t + " " + e.ip + " " + e.port + " typ host";
    }
    function Oe(t, n, r, a, i, l, c, d) {
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
    function Be(e) {
      ((ue = e), Pe != null && Pe(e));
    }
    function We() {
      if (
        (Ie != null && (window.clearTimeout(Ie), (Ie = null)),
        !me && se != null)
      )
        try {
          se.close();
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
      if (((se = null), le != null)) {
        try {
          le.close();
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
        le = null;
      }
    }
    function qe(e) {
      ue !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
        ue !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed &&
        (o("WALogger").ERROR(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [P2PConnectionManager] Connection failed, reason: ",
              "",
            ])),
          e,
        ),
        Be(o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed),
        Ue(),
        We());
    }
    function Ue() {
      if (me && _e != null) {
        var e = _e,
          t = o("WAWebVoipSctpDataChannelThreadManager").getDataChannelThread();
        (t != null && t.closeChannel(e), (me = !1), (_e = null));
      }
    }
    function Ve() {
      if (!(le == null || !ke)) {
        var e = le,
          t = Le;
        Le = [];
        for (var n of t) {
          var r = Fe(n);
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
    function He() {
      return Ge.apply(this, arguments);
    }
    function Ge() {
      return (
        (Ge = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            !(
              Ce == null ||
              be == null ||
              ve == null ||
              Se == null ||
              le == null ||
              Te == null
            ) &&
            !(ke || Ee)
          ) {
            var e = le;
            Ee = !0;
            try {
              if (ce) {
                var t = Oe(Te, Ce, be, ve, Se, [], !0, de);
                (o("WALogger").LOG(
                  P ||
                    (P = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Applying synthetic answer SDP (caller, ICE role=controlling)",
                    ])),
                ),
                  yield e.setRemoteDescription({ sdp: t, type: "answer" }));
              } else {
                var n,
                  r = Oe(Te, Ce, be, ve, Se, [], !1, de);
                (o("WALogger").LOG(
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Applying synthetic offer SDP (callee, ICE role=controlled)",
                    ])),
                ),
                  yield e.setRemoteDescription({ sdp: r, type: "offer" }));
                var a = yield e.createAnswer(),
                  i = (n = a.sdp) != null ? n : "",
                  l = he;
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
                  (he = o(
                    "WAWebVoipRelayConnectionUtils",
                  ).extractIceCredentials(i)),
                  (ye = o(
                    "WAWebVoipRelayConnectionUtils",
                  ).extractDtlsFingerprint(i)),
                  he == null || ye == null)
                ) {
                  (o("WALogger").ERROR(
                    w ||
                      (w = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [P2PConnectionManager] Failed to extract credentials from answer SDP",
                      ])),
                  ),
                    (Ee = !1),
                    qe("credential_extraction_failed"));
                  return;
                }
                o("WALogger").LOG(
                  A ||
                    (A = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Callee local credentials extracted from answer",
                    ])),
                );
                var u = Me;
                if (u != null)
                  try {
                    u(he.ufrag, he.pwd, ye.algorithm, ye.fingerprint, []);
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
                (ke = !0),
                (Ee = !1),
                Ve());
            } catch (e) {
              ((Ee = !1),
                (ke = !1),
                o("WALogger").ERROR(
                  B ||
                    (B = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Failed to apply remote description: ",
                      "",
                    ])),
                  e,
                ),
                qe("remote_description_failed"));
            }
          }
        })),
        Ge.apply(this, arguments)
      );
    }
    function ze(e) {
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
        (Re.push(a), Ne != null && Ne(a));
        var i = Me;
        if (i != null) {
          var l = he,
            s = ye;
          if (l != null && s != null) {
            var u = Ae(a.candidate);
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
    function je() {
      if (le != null) {
        var e = le,
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
          String(ce),
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
          t === "failed" && qe("ice_connection_failed"));
      }
    }
    function Ke() {
      var e,
        t = "N/A";
      (De.connectionReadyTime !== 0 &&
        xe > 0 &&
        (t = (De.connectionReadyTime - xe).toString()),
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
          (e = _e != null ? _e : ge) != null ? e : "N/A",
          De.sentPackets,
          De.receivedPackets,
          De.sentBytes,
          De.receivedBytes,
          t,
          String(pe),
        ));
    }
    function Qe() {
      (o("WALogger").LOG(
        S ||
          (S = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [P2PConnectionManager] Data channel opened",
          ])),
      ),
        Be(o("WAWebVoipRelayConnectionUtils").ConnectionState.Open),
        (De.connectionReadyTime = Date.now()),
        me ||
          o("WAWebVoipSctpStatsInstrumentation").addConnectionSource("p2p", we),
        Ie != null && (window.clearTimeout(Ie), (Ie = null)));
    }
    function Xe() {
      (o("WALogger").LOG(
        R ||
          (R = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [P2PConnectionManager] Data channel closed",
          ])),
      ),
        ue !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
          ue !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed &&
          (Be(o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed),
          We()));
    }
    function Ye(e) {
      $e != null &&
        o("WAWebVoipRelayConnectionUtils")
          .dataToArrayBuffer(e.data)
          .then(function (e) {
            e != null &&
              $e != null &&
              (De.receivedPackets++, (De.receivedBytes += e.byteLength), $e(e));
          });
    }
    function Je(e) {
      (o("WALogger").ERROR(
        L ||
          (L = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [P2PConnectionManager] Data channel error",
          ])),
      ),
        qe("data_channel_error"));
    }
    function Ze(e) {
      ((e.onopen = function () {
        Qe();
      }),
        (e.onclose = function () {
          Xe();
        }),
        (e.onmessage = function (e) {
          Ye(e);
        }),
        (e.onerror = function (e) {
          Je(e);
        }));
    }
    function et(e, t, n, r) {
      return tt.apply(this, arguments);
    }
    function tt() {
      return (
        (tt = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            (le != null &&
              (o("WALogger").WARN(
                W ||
                  (W = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] initP2PConnection called while already initialized, cleaning up",
                  ])),
              ),
              nt()),
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
              (ce = e),
              (de = t),
              (Me = a != null ? a : null),
              (ae =
                o("WAWebABProps").getABPropConfigValue(
                  "enable_web_voip_p2p",
                ) === !0));
            var i = new RTCPeerConnection({ iceServers: [].concat(n, [te]) });
            ((le = i),
              (i.onicecandidate = function (e) {
                ze(e);
              }),
              (i.oniceconnectionstatechange = function () {
                je();
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
              ie.DATA_CHANNEL_LABEL,
              babelHelpers.extends(
                {},
                o("WAWebVoipRelayConnectionUtils").BASE_DATA_CHANNEL_OPTIONS,
              ),
            );
            ((l.binaryType = "arraybuffer"), (se = l));
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
              u != null && ne != null && oe != null)
            ) {
              var c = ne,
                d = oe,
                m = c + ":" + d,
                p =
                  o("WAWebABProps").getABPropConfigValue(
                    "voip_enable_webrtc_stats_polling",
                  ) === !0,
                _ = u.transferChannel(l, m, c, d, p);
              _
                ? ((me = !0),
                  (pe = !0),
                  (_e = m),
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
            if ((me || Ze(l), e)) {
              var f,
                g = yield i.createOffer();
              yield i.setLocalDescription(g);
              var h = (f = g.sdp) != null ? f : "";
              if (
                ((Te = h),
                (he = o("WAWebVoipRelayConnectionUtils").extractIceCredentials(
                  h,
                )),
                (ye = o("WAWebVoipRelayConnectionUtils").extractDtlsFingerprint(
                  h,
                )),
                he == null || ye == null)
              ) {
                (o("WALogger").ERROR(
                  K ||
                    (K = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Failed to extract local credentials from offer SDP",
                    ])),
                ),
                  qe("credential_extraction_failed"));
                return;
              }
              o("WALogger").LOG(
                Q ||
                  (Q = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] Caller offer created, local credentials extracted",
                  ])),
              );
              var y = Me;
              if (y != null && he != null && ye != null) {
                o("WALogger").LOG(
                  X ||
                    (X = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Sending initial credentials to remote peer",
                    ])),
                );
                try {
                  y(he.ufrag, he.pwd, ye.algorithm, ye.fingerprint, []);
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
              var C,
                b = yield i.createOffer(),
                v = (C = b.sdp) != null ? C : "";
              if (
                ((Te = v),
                (he = o("WAWebVoipRelayConnectionUtils").extractIceCredentials(
                  v,
                )),
                (ye = o("WAWebVoipRelayConnectionUtils").extractDtlsFingerprint(
                  v,
                )),
                he == null || ye == null)
              ) {
                (o("WALogger")
                  .ERROR(
                    J ||
                      (J = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [P2PConnectionManager] Failed to extract local credentials from callee template SDP",
                      ])),
                  )
                  .sendLogs("p2p-callee-credential-extraction-failed"),
                  qe("credential_extraction_failed"));
                return;
              }
              o("WALogger").LOG(
                Z ||
                  (Z = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] Callee template SDP generated, sending proactive credentials",
                  ])),
              );
              var S = Me;
              if (S != null)
                try {
                  S(he.ufrag, he.pwd, ye.algorithm, ye.fingerprint, []);
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
            (He(),
              (xe = Date.now()),
              Be(o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting),
              (Ie = window.setTimeout(function () {
                ue ===
                  o("WAWebVoipRelayConnectionUtils").ConnectionState
                    .Connecting && qe("connection_timeout");
              }, ie.CONNECTION_TIMEOUT_MS)));
          },
        )),
        tt.apply(this, arguments)
      );
    }
    function nt() {
      ue !== o("WAWebVoipRelayConnectionUtils").ConnectionState.None &&
        (o("WALogger").LOG(
          E ||
            (E = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [P2PConnectionManager] Cleaning up P2P connection",
            ])),
        ),
        me ? ((fe = !0), (ge = _e)) : xe > 0 && Ke(),
        o("WAWebVoipSctpStatsInstrumentation").removeConnectionSource("p2p"),
        Ue(),
        We(),
        Be(o("WAWebVoipRelayConnectionUtils").ConnectionState.None),
        (ce = !1),
        (he = null),
        (ye = null),
        (Ce = null),
        (be = null),
        (ve = null),
        (Se = null),
        (Re = []),
        (Le = []),
        (Ee = !1),
        (ke = !1),
        (Te = null),
        (Me = null),
        fe ||
          ((De = o(
            "WAWebVoipRelayConnectionUtils",
          ).createEmptyConnectionStats()),
          (xe = 0),
          (pe = !1)));
    }
    function rt() {
      return he;
    }
    function ot() {
      return ye;
    }
    function at(e) {
      (le == null && !_t()) ||
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
          String(ce),
        ),
        (Ce = e.ufrag),
        (be = e.pwd),
        (ve = e.algorithm),
        (Se = e.fingerprint),
        He());
    }
    function it() {
      return [].concat(Re);
    }
    function lt(e) {
      if (!(le == null && !_t()))
        if (ke && le != null) {
          var t = le,
            n = Fe(e);
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
          Le.length < ie.MAX_BUFFERED_CANDIDATES
            ? Le.push(e)
            : o("WALogger").WARN(
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] Dropping remote ICE candidate, buffer full (",
                    ")",
                  ])),
                Le.length,
              );
    }
    function st(e) {
      if (me) return !0;
      if (
        ue === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open &&
        se != null &&
        se.readyState === "open"
      )
        try {
          return (
            se.send(e),
            De.sentPackets++,
            (De.sentBytes += e.byteLength),
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
      $e = e;
    }
    function ct(e) {
      Pe = e;
    }
    function dt(e) {
      Ne = e;
    }
    function mt() {
      return ue;
    }
    function pt() {
      return ae;
    }
    function _t() {
      return o("WAWebUserPrefsGeneral").getUserPrivacySettings()
        .disallowAllP2p === !0
        ? !1
        : o("WAWebABProps").getABPropConfigValue("enable_web_voip_p2p") === !0;
    }
    function ft(e, t, n) {
      ((ne = e), (re = t), (oe = n));
    }
    function gt(e, t) {
      return t === oe && (e === ne || e === re);
    }
    function ht() {
      return _e;
    }
    function yt(e) {
      return e === _e || (fe && e === ge);
    }
    function Ct() {
      me &&
        (o("WALogger").LOG(
          x ||
            (x = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [P2PConnectionManager] Worker reported P2P channel opened",
            ])),
        ),
        Qe());
    }
    function bt(e) {
      var t = me || fe;
      t &&
        (o("WALogger").LOG(
          $ ||
            ($ = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [P2PConnectionManager] Worker reported P2P channel closed",
            ])),
        ),
        e != null &&
          ((De.sentPackets += e.sentPackets),
          (De.sentBytes += e.sentBytes),
          (De.receivedPackets += e.receivedPackets),
          (De.receivedBytes += e.receivedBytes),
          e.firstSendTime > 0 &&
            De.firstSendRequestTime === 0 &&
            (De.firstSendRequestTime = e.firstSendTime),
          e.firstResponseRecvTime > 0 &&
            De.firstResponseRecvTime === 0 &&
            (De.firstResponseRecvTime = e.firstResponseRecvTime)),
        Ke(),
        (fe = !1),
        (ge = null),
        (De = o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats()),
        (xe = 0),
        (pe = !1),
        me &&
          (ue !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
            ue !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed &&
            Be(o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed),
          (me = !1),
          (_e = null),
          We()));
    }
    ((l.parseSdpCandidateToTransport = Ae),
      (l.initP2PConnection = et),
      (l.cleanupP2PConnection = nt),
      (l.getLocalIceCredentials = rt),
      (l.getLocalDtlsFingerprint = ot),
      (l.handleRemoteCredentials = at),
      (l.getLocalCandidates = it),
      (l.handleRemoteCandidate = lt),
      (l.sendP2PData = st),
      (l.registerOnDataChannelMessage = ut),
      (l.registerOnDataChannelStateChange = ct),
      (l.registerOnIceCandidate = dt),
      (l.getP2PConnectionState = mt),
      (l.isP2PEnabled = pt),
      (l.isP2PEnabledLive = _t),
      (l.initP2PVirtualAddresses = ft),
      (l.isP2PVirtualAddress = gt),
      (l.getP2PConnectionId = ht),
      (l.isP2PConnectionId = yt),
      (l.handleWorkerP2PChannelOpened = Ct),
      (l.handleWorkerP2PChannelClosed = bt));
  },
  98,
);
