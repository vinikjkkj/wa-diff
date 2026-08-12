__d(
  "WAWebVoipP2PConnectionManager",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebVoipRelayConnectionUtils",
    "WAWebVoipSctpDataChannelThreadManager",
    "WAWebVoipSctpStatsInstrumentation",
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
      ne,
      re,
      oe = { urls: "stun:edge-stun.facebook.com:3478" },
      ae = null,
      ie = null,
      le = null,
      se = !1,
      ue = 0,
      ce = {
        DATA_CHANNEL_LABEL: "wa-web-p2p",
        DATA_CHANNEL_ID: 0,
        CONNECTION_TIMEOUT_MS: 3e4,
        MAX_BUFFERED_CANDIDATES: 20,
      },
      de = null,
      me = null,
      pe = o("WAWebVoipRelayConnectionUtils").ConnectionState.None,
      _e = !1,
      fe = !1,
      ge = !1,
      he = !1,
      ye = null,
      Ce = !1,
      be = null,
      ve = 0,
      Se = null,
      Re = null,
      Le = null,
      Ee = null,
      ke = null,
      Ie = null,
      Te = null,
      De = [],
      xe = [],
      $e = !1,
      Pe = !1,
      Ne = null,
      Me = null,
      we = o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats(),
      Ae = 0,
      Fe = null,
      Oe = null,
      Be = null,
      We = null,
      qe = null;
    function Ue() {
      return de != null &&
        pe === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open
        ? [{ connectionId: "p2p", peerConnection: de }]
        : [];
    }
    function Ve(e) {
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
    function He(e) {
      var t = e.priority * Math.pow(2, 24);
      return "candidate:1 1 UDP " + t + " " + e.ip + " " + e.port + " typ host";
    }
    function Ge(t, n, r, a, i, l, c, d) {
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
    function ze(e) {
      ((pe = e), Oe != null && Oe(e));
    }
    function je() {
      if (
        (Ne != null && (window.clearTimeout(Ne), (Ne = null)),
        !ge && me != null)
      )
        try {
          me.close();
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
      if (((me = null), de != null)) {
        try {
          de.close();
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
        de = null;
      }
    }
    function Ke(e) {
      pe !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
        pe !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed &&
        (o("WALogger").ERROR(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [P2PConnectionManager] Connection failed, reason: ",
              "",
            ])),
          e,
        ),
        ze(o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed),
        Qe(),
        je());
    }
    function Qe() {
      if (ge && ye != null) {
        var e = ye,
          t = o("WAWebVoipSctpDataChannelThreadManager").getDataChannelThread();
        (t != null && t.closeChannel(e), (Se = ve), (ge = !1), (ye = null));
      }
    }
    function Xe() {
      if (!(de == null || !Pe)) {
        var e = de,
          t = xe;
        xe = [];
        for (var n of t) {
          var r = He(n);
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
    function Ye() {
      return Je.apply(this, arguments);
    }
    function Je() {
      return (
        (Je = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            !(
              Ee == null ||
              ke == null ||
              Ie == null ||
              Te == null ||
              de == null ||
              Me == null
            ) &&
            !(Pe || $e)
          ) {
            var e = de;
            $e = !0;
            try {
              if (_e) {
                var t = Ge(Me, Ee, ke, Ie, Te, [], !0, fe);
                (o("WALogger").LOG(
                  M ||
                    (M = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Applying synthetic answer SDP (caller, ICE role=controlling)",
                    ])),
                ),
                  yield e.setRemoteDescription({ sdp: t, type: "answer" }));
              } else {
                var n,
                  r = Ge(Me, Ee, ke, Ie, Te, [], !1, fe);
                (o("WALogger").LOG(
                  w ||
                    (w = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Applying synthetic offer SDP (callee, ICE role=controlled)",
                    ])),
                ),
                  yield e.setRemoteDescription({ sdp: r, type: "offer" }));
                var a = yield e.createAnswer(),
                  i = (n = a.sdp) != null ? n : "",
                  l = Re;
                if (l != null) {
                  var s = o(
                    "WAWebVoipRelayConnectionUtils",
                  ).extractIceCredentials(i);
                  s != null &&
                    s.ufrag !== l.ufrag &&
                    (o("WALogger").LOG(
                      A ||
                        (A = babelHelpers.taggedTemplateLiteralLoose([
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
                  (Re = o(
                    "WAWebVoipRelayConnectionUtils",
                  ).extractIceCredentials(i)),
                  (Le = o(
                    "WAWebVoipRelayConnectionUtils",
                  ).extractDtlsFingerprint(i)),
                  Re == null || Le == null)
                ) {
                  (o("WALogger").ERROR(
                    F ||
                      (F = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [P2PConnectionManager] Failed to extract credentials from answer SDP",
                      ])),
                  ),
                    ($e = !1),
                    Ke("credential_extraction_failed"));
                  return;
                }
                o("WALogger").LOG(
                  O ||
                    (O = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Callee local credentials extracted from answer",
                    ])),
                );
                var u = We;
                if (u != null)
                  try {
                    u(Re.ufrag, Re.pwd, Le.algorithm, Le.fingerprint, []);
                  } catch (e) {
                    o("WALogger").ERROR(
                      B ||
                        (B = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [P2PConnectionManager] Failed to send callee transport: ",
                          "",
                        ])),
                      e,
                    );
                  }
              }
              (o("WALogger").LOG(
                W ||
                  (W = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] Remote description applied successfully",
                  ])),
              ),
                (Pe = !0),
                ($e = !1),
                Xe());
            } catch (e) {
              (($e = !1),
                (Pe = !1),
                o("WALogger").ERROR(
                  q ||
                    (q = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Failed to apply remote description: ",
                      "",
                    ])),
                  e,
                ),
                Ke("remote_description_failed"));
            }
          }
        })),
        Je.apply(this, arguments)
      );
    }
    function Ze(e) {
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
        (De.push(a), Be != null && Be(a));
        var i = We;
        if (i != null) {
          var l = Re,
            s = Le;
          if (l != null && s != null) {
            var u = Ve(a.candidate);
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
    function et() {
      if (de != null) {
        var e = de,
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
          String(_e),
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
          t === "failed" && Ke("ice_connection_failed"));
      }
    }
    function tt() {
      var e,
        t = "N/A";
      (we.connectionReadyTime !== 0 &&
        Ae > 0 &&
        (t = (we.connectionReadyTime - Ae).toString()),
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
          (e = ye != null ? ye : be) != null ? e : "N/A",
          we.sentPackets,
          we.receivedPackets,
          we.sentBytes,
          we.receivedBytes,
          t,
          String(he),
        ));
    }
    function nt() {
      (o("WALogger").LOG(
        S ||
          (S = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [P2PConnectionManager] Data channel opened",
          ])),
      ),
        ze(o("WAWebVoipRelayConnectionUtils").ConnectionState.Open),
        (we.connectionReadyTime = Date.now()),
        ge ||
          o("WAWebVoipSctpStatsInstrumentation").addConnectionSource("p2p", Ue),
        Ne != null && (window.clearTimeout(Ne), (Ne = null)));
    }
    function rt() {
      (o("WALogger").LOG(
        R ||
          (R = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [P2PConnectionManager] Data channel closed",
          ])),
      ),
        pe !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
          pe !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed &&
          (ze(o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed),
          je()));
    }
    function ot(e) {
      Fe != null &&
        o("WAWebVoipRelayConnectionUtils")
          .dataToArrayBuffer(e.data)
          .then(function (e) {
            e != null &&
              Fe != null &&
              (we.receivedPackets++, (we.receivedBytes += e.byteLength), Fe(e));
          });
    }
    function at(e) {
      (o("WALogger").ERROR(
        L ||
          (L = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [P2PConnectionManager] Data channel error",
          ])),
      ),
        Ke("data_channel_error"));
    }
    function it(e) {
      ((e.onopen = function () {
        nt();
      }),
        (e.onclose = function () {
          rt();
        }),
        (e.onmessage = function (e) {
          ot(e);
        }),
        (e.onerror = function (e) {
          at(e);
        }));
    }
    function lt(e, t, n, r) {
      return st.apply(this, arguments);
    }
    function st() {
      return (
        (st = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            (de != null &&
              (o("WALogger").WARN(
                U ||
                  (U = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] initP2PConnection called while already initialized, cleaning up",
                  ])),
              ),
              ut()),
              (se = !0),
              o("WALogger").LOG(
                V ||
                  (V = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] Initializing P2P connection, caller=",
                    ", peerIsWebBrowser=",
                    "",
                  ])),
                String(e),
                String(t),
              ),
              (_e = e),
              (fe = t),
              (We = a != null ? a : null));
            var i = new RTCPeerConnection({ iceServers: [].concat(n, [oe]) });
            ((de = i),
              (i.onicecandidate = function (e) {
                Ze(e);
              }),
              (i.oniceconnectionstatechange = function () {
                et();
              }),
              (i.onconnectionstatechange = function () {
                o("WALogger").LOG(
                  H ||
                    (H = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] PeerConnection state: ",
                      "",
                    ])),
                  i.connectionState,
                );
              }),
              (i.onicegatheringstatechange = function () {
                o("WALogger").LOG(
                  G ||
                    (G = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] ICE gathering state: ",
                      "",
                    ])),
                  i.iceGatheringState,
                );
              }),
              (i.onsignalingstatechange = function () {
                o("WALogger").LOG(
                  z ||
                    (z = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Signaling state: ",
                      "",
                    ])),
                  i.signalingState,
                );
              }));
            var l = i.createDataChannel(
              ce.DATA_CHANNEL_LABEL,
              babelHelpers.extends(
                {},
                o("WAWebVoipRelayConnectionUtils").BASE_DATA_CHANNEL_OPTIONS,
              ),
            );
            ((l.binaryType = "arraybuffer"), (me = l));
            var s = o("WAWebVoipRelayConnectionUtils").isDcTransferDisabled(),
              u = s
                ? null
                : o(
                    "WAWebVoipSctpDataChannelThreadManager",
                  ).getDataChannelThread();
            if (
              (s &&
                o("WALogger").LOG(
                  j ||
                    (j = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] DC transfer disabled for current browser, using main-thread path",
                    ])),
                ),
              u != null && ae != null && le != null)
            ) {
              var c = ae,
                d = le,
                m = c + ":" + d,
                p =
                  o("WAWebABProps").getABPropConfigValue(
                    "voip_enable_webrtc_stats_polling",
                  ) === !0,
                _ = u.transferChannel(l, m, c, d, p);
              _
                ? ((ge = !0),
                  (he = !0),
                  (ye = m),
                  (ve += 1),
                  o("WALogger").LOG(
                    K ||
                      (K = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [P2PConnectionManager] DataChannel transferred to worker thread as ",
                        "",
                      ])),
                    m,
                  ))
                : o("WALogger").WARN(
                    Q ||
                      (Q = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [P2PConnectionManager] DataChannel transfer failed, using main-thread path",
                      ])),
                  );
            }
            if ((ge || it(l), e)) {
              var f,
                g = yield i.createOffer();
              yield i.setLocalDescription(g);
              var h = (f = g.sdp) != null ? f : "";
              if (
                ((Me = h),
                (Re = o("WAWebVoipRelayConnectionUtils").extractIceCredentials(
                  h,
                )),
                (Le = o("WAWebVoipRelayConnectionUtils").extractDtlsFingerprint(
                  h,
                )),
                Re == null || Le == null)
              ) {
                (o("WALogger").ERROR(
                  X ||
                    (X = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Failed to extract local credentials from offer SDP",
                    ])),
                ),
                  Ke("credential_extraction_failed"));
                return;
              }
              o("WALogger").LOG(
                Y ||
                  (Y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] Caller offer created, local credentials extracted",
                  ])),
              );
              var y = We;
              if (y != null && Re != null && Le != null) {
                o("WALogger").LOG(
                  J ||
                    (J = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Sending initial credentials to remote peer",
                    ])),
                );
                try {
                  y(Re.ufrag, Re.pwd, Le.algorithm, Le.fingerprint, []);
                } catch (e) {
                  o("WALogger")
                    .ERROR(
                      Z ||
                        (Z = babelHelpers.taggedTemplateLiteralLoose([
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
                ((Me = v),
                (Re = o("WAWebVoipRelayConnectionUtils").extractIceCredentials(
                  v,
                )),
                (Le = o("WAWebVoipRelayConnectionUtils").extractDtlsFingerprint(
                  v,
                )),
                Re == null || Le == null)
              ) {
                (o("WALogger")
                  .ERROR(
                    ee ||
                      (ee = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [P2PConnectionManager] Failed to extract local credentials from callee template SDP",
                      ])),
                  )
                  .sendLogs("p2p-callee-credential-extraction-failed"),
                  Ke("credential_extraction_failed"));
                return;
              }
              o("WALogger").LOG(
                te ||
                  (te = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] Callee template SDP generated, sending proactive credentials",
                  ])),
              );
              var S = We;
              if (S != null)
                try {
                  S(Re.ufrag, Re.pwd, Le.algorithm, Le.fingerprint, []);
                } catch (e) {
                  o("WALogger")
                    .ERROR(
                      ne ||
                        (ne = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [P2PConnectionManager] Failed to send callee initial transport",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("p2p-callee-send-initial-transport-failed");
                }
            }
            (Ye(),
              (Ae = Date.now()),
              ze(o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting),
              (Ne = window.setTimeout(function () {
                pe ===
                  o("WAWebVoipRelayConnectionUtils").ConnectionState
                    .Connecting && Ke("connection_timeout");
              }, ce.CONNECTION_TIMEOUT_MS)));
          },
        )),
        st.apply(this, arguments)
      );
    }
    function ut() {
      ((Ee = null),
        (ke = null),
        (Ie = null),
        (Te = null),
        (xe = []),
        ($e = !1),
        (Pe = !1),
        (se = !1),
        ue++,
        pe !== o("WAWebVoipRelayConnectionUtils").ConnectionState.None &&
          (o("WALogger").LOG(
            E ||
              (E = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [P2PConnectionManager] Cleaning up P2P connection",
              ])),
          ),
          ge ? ((Ce = !0), (be = ye)) : Ae > 0 && tt(),
          o("WAWebVoipSctpStatsInstrumentation").removeConnectionSource("p2p"),
          Qe(),
          je(),
          ze(o("WAWebVoipRelayConnectionUtils").ConnectionState.None),
          (_e = !1),
          (Re = null),
          (Le = null),
          (De = []),
          (Me = null),
          (We = null),
          Ce ||
            ((we = o(
              "WAWebVoipRelayConnectionUtils",
            ).createEmptyConnectionStats()),
            (Ae = 0),
            (he = !1))));
    }
    function ct() {
      return Re;
    }
    function dt() {
      return Le;
    }
    function mt(e) {
      qe = e;
    }
    function pt(e) {
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
        String(_e),
      ),
        Pe &&
          Ee != null &&
          Ee !== e.ufrag &&
          (o("WALogger").LOG(
            I ||
              (I = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [P2PConnectionManager] Peer ICE restart (ufrag ",
                " -> ",
                ")",
              ])),
            Ee,
            e.ufrag,
          ),
          qe != null && qe()),
        (Ee = e.ufrag),
        (ke = e.pwd),
        (Ie = e.algorithm),
        (Te = e.fingerprint),
        Ye());
    }
    function _t(e) {
      if (Pe && de != null) {
        var t = de,
          n = He(e);
        t.addIceCandidate(
          new RTCIceCandidate({ sdpMLineIndex: 0, sdpMid: "0", candidate: n }),
        ).then(
          function () {},
          function (e) {
            o("WALogger").WARN(
              T ||
                (T = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [P2PConnectionManager] Failed to add remote candidate: ",
                  "",
                ])),
              e,
            );
          },
        );
      } else
        xe.length < ce.MAX_BUFFERED_CANDIDATES
          ? xe.push(e)
          : o("WALogger").WARN(
              D ||
                (D = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [P2PConnectionManager] Dropping remote ICE candidate, buffer full (",
                  ")",
                ])),
              xe.length,
            );
    }
    function ft(e) {
      if (ge) return !0;
      if (
        pe === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open &&
        me != null &&
        me.readyState === "open"
      )
        try {
          return (
            me.send(e),
            we.sentPackets++,
            (we.sentBytes += e.byteLength),
            !0
          );
        } catch (e) {
          return (
            o("WALogger").ERROR(
              x ||
                (x = babelHelpers.taggedTemplateLiteralLoose([
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
    function gt(e) {
      Fe = e;
    }
    function ht(e) {
      Oe = e;
    }
    function yt(e) {
      Be = e;
    }
    function Ct() {
      return se;
    }
    function bt(e) {
      return vt.apply(this, arguments);
    }
    function vt() {
      return (
        (vt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = ue;
          try {
            var n = yield o("WAWebVoipStackInterface").getVoipStackInterface(),
              a =
                n != null && n.type === "web" ? yield n.isWebP2PEnabled(e) : !1;
            t === ue && (se = a);
          } catch (e) {
            (o("WALogger")
              .ERROR(
                re ||
                  (re = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] refreshP2PEnablement failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e)),
              t === ue && (se = !1));
          }
        })),
        vt.apply(this, arguments)
      );
    }
    function St(e, t, n) {
      ((ae = e), (ie = t), (le = n));
    }
    function Rt(e, t) {
      return t === le && (e === ae || e === ie);
    }
    function Lt() {
      return ye;
    }
    function Et(e) {
      return e === ye || (Ce && e === be);
    }
    function kt() {
      ge &&
        (o("WALogger").LOG(
          $ ||
            ($ = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [P2PConnectionManager] Worker reported P2P channel opened",
            ])),
        ),
        nt());
    }
    function It(e) {
      var t = ge || Ce;
      if (t) {
        var n = Se != null && Se !== ve;
        if (
          ((Se = null),
          o("WALogger").LOG(
            P ||
              (P = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [P2PConnectionManager] Worker reported P2P channel closed",
              ])),
          ),
          e != null &&
            ((we.sentPackets += e.sentPackets),
            (we.sentBytes += e.sentBytes),
            (we.receivedPackets += e.receivedPackets),
            (we.receivedBytes += e.receivedBytes),
            e.firstSendTime > 0 &&
              we.firstSendRequestTime === 0 &&
              (we.firstSendRequestTime = e.firstSendTime),
            e.firstResponseRecvTime > 0 &&
              we.firstResponseRecvTime === 0 &&
              (we.firstResponseRecvTime = e.firstResponseRecvTime)),
          tt(),
          (Ce = !1),
          (be = null),
          (we = o(
            "WAWebVoipRelayConnectionUtils",
          ).createEmptyConnectionStats()),
          n)
        ) {
          o("WALogger").LOG(
            N ||
              (N = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [P2PConnectionManager] Close was for a superseded worker P2P channel, keeping the rebuilt connection",
              ])),
          );
          return;
        }
        ((Ae = 0),
          (he = !1),
          ge &&
            (pe !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
              pe !==
                o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed &&
              ze(o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed),
            (ge = !1),
            (ye = null),
            je()));
      }
    }
    ((l.parseSdpCandidateToTransport = Ve),
      (l.initP2PConnection = lt),
      (l.cleanupP2PConnection = ut),
      (l.getLocalIceCredentials = ct),
      (l.getLocalDtlsFingerprint = dt),
      (l.registerOnPeerIceRestart = mt),
      (l.handleRemoteCredentials = pt),
      (l.handleRemoteCandidate = _t),
      (l.sendP2PData = ft),
      (l.registerOnDataChannelMessage = gt),
      (l.registerOnDataChannelStateChange = ht),
      (l.registerOnIceCandidate = yt),
      (l.isP2PEnabled = Ct),
      (l.refreshP2PEnablement = bt),
      (l.initP2PVirtualAddresses = St),
      (l.isP2PVirtualAddress = Rt),
      (l.getP2PConnectionId = Lt),
      (l.isP2PConnectionId = Et),
      (l.handleWorkerP2PChannelOpened = kt),
      (l.handleWorkerP2PChannelClosed = It));
  },
  98,
);
