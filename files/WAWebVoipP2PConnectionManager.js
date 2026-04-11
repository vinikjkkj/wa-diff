__d(
  "WAWebVoipP2PConnectionManager",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebVoipRelayConnectionUtils",
    "WAWebVoipSctpConnectionManager",
    "WAWebVoipSctpStatsInstrumentation",
    "asyncToGeneratorRuntime",
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
      W = { urls: "stun:edge-stun.facebook.com:3478" },
      q = null,
      U = null,
      V = null,
      H = !1,
      G = {
        DATA_CHANNEL_LABEL: "wa-web-p2p",
        DATA_CHANNEL_ID: 0,
        CONNECTION_TIMEOUT_MS: 3e4,
      },
      z = null,
      j = null,
      K = o("WAWebVoipRelayConnectionUtils").ConnectionState.None,
      Q = !1,
      X = !1,
      Y = !1,
      J = null,
      Z = !1,
      ee = null,
      te = null,
      ne = null,
      re = null,
      oe = null,
      ae = null,
      ie = null,
      le = [],
      se = [],
      ue = !1,
      ce = !1,
      de = null,
      me = null,
      pe = o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats(),
      _e = 0,
      fe = null,
      ge = null,
      he = null,
      ye = null;
    function Ce() {
      return z != null &&
        K === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open
        ? [{ connectionId: "p2p", peerConnection: z }]
        : [];
    }
    function be(e) {
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
    function ve(e) {
      var t = e.priority * Math.pow(2, 24);
      return "candidate:1 1 UDP " + t + " " + e.ip + " " + e.port + " typ host";
    }
    function Se(e, t, n, r, a, i, l) {
      var s = e;
      ((s = o("WAWebVoipRelayConnectionUtils").replaceIceCredentials(s, t, n)),
        (s = o("WAWebVoipRelayConnectionUtils").replaceDtlsFingerprint(
          s,
          r,
          a,
        )),
        l
          ? (s = s.replace(/a=setup:[^\r\n]+/g, "a=setup:passive"))
          : (s = s.replace(/a=setup:[^\r\n]+/g, "a=setup:active")),
        (s = o("WAWebVoipRelayConnectionUtils").removeIceCandidates(s)));
      var u = i
          .map(function (e) {
            return "a=" + e.candidate + "\r\n";
          })
          .join(""),
        c = s.replace(/\s+$/, "\r\n");
      return c + u;
    }
    function Re(e) {
      ((K = e), ge != null && ge(e));
    }
    function Le() {
      if (
        (de != null && (window.clearTimeout(de), (de = null)), !X && j != null)
      )
        try {
          j.close();
        } catch (t) {
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [P2PConnectionManager] Error closing data channel: ",
                "",
              ])),
            t,
          );
        }
      if (((j = null), z != null)) {
        try {
          z.close();
        } catch (e) {
          o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [P2PConnectionManager] Error closing peer connection: ",
                "",
              ])),
            e,
          );
        }
        z = null;
      }
    }
    function Ee(e) {
      K !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
        K !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed &&
        (o("WALogger").ERROR(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [P2PConnectionManager] Connection failed, reason: ",
              "",
            ])),
          e,
        ),
        Re(o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed),
        ke(),
        Le());
    }
    function ke() {
      if (X && J != null) {
        var e = J,
          t = o("WAWebVoipSctpConnectionManager").getDataChannelThread();
        (t != null && t.closeChannel(e), (X = !1), (J = null));
      }
    }
    function Ie() {
      if (!(z == null || !ce)) {
        var e = z,
          t = se;
        se = [];
        for (var n of t) {
          var r = ve(n);
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
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
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
    function Te() {
      return De.apply(this, arguments);
    }
    function De() {
      return (
        (De = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            !(
              re == null ||
              oe == null ||
              ae == null ||
              ie == null ||
              z == null ||
              me == null
            ) &&
            !(ce || ue)
          ) {
            var e = z;
            ue = !0;
            try {
              if (Q) {
                var t = Se(me, re, oe, ae, ie, [], !0);
                yield e.setRemoteDescription({ sdp: t, type: "answer" });
              } else {
                var n,
                  r = Se(me, re, oe, ae, ie, [], !1);
                yield e.setRemoteDescription({ sdp: r, type: "offer" });
                var a = yield e.createAnswer();
                yield e.setLocalDescription(a);
                var i = (n = a.sdp) != null ? n : "";
                if (
                  ((te = o(
                    "WAWebVoipRelayConnectionUtils",
                  ).extractIceCredentials(i)),
                  (ne = o(
                    "WAWebVoipRelayConnectionUtils",
                  ).extractDtlsFingerprint(i)),
                  te == null || ne == null)
                ) {
                  (o("WALogger").ERROR(
                    L ||
                      (L = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [P2PConnectionManager] Failed to extract credentials from answer SDP",
                      ])),
                  ),
                    (ue = !1),
                    Ee("credential_extraction_failed"));
                  return;
                }
                o("WALogger").LOG(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Callee local credentials extracted from answer",
                    ])),
                );
                var l = ye;
                if (l != null)
                  try {
                    l(te.ufrag, te.pwd, ne.algorithm, ne.fingerprint, []);
                  } catch (e) {
                    o("WALogger").ERROR(
                      k ||
                        (k = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [P2PConnectionManager] Failed to send callee transport: ",
                          "",
                        ])),
                      e,
                    );
                  }
              }
              (o("WALogger").LOG(
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] Remote description applied successfully",
                  ])),
              ),
                (ce = !0),
                (ue = !1),
                Ie());
            } catch (e) {
              ((ue = !1),
                (ce = !1),
                o("WALogger").ERROR(
                  T ||
                    (T = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Failed to apply remote description: ",
                      "",
                    ])),
                  e,
                ),
                Ee("remote_description_failed"));
            }
          }
        })),
        De.apply(this, arguments)
      );
    }
    function xe(e) {
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
        (le.push(a), he != null && he(a));
        var i = ye;
        if (i != null) {
          var l = te,
            s = ne;
          if (l != null && s != null) {
            var u = be(a.candidate);
            if (u != null)
              try {
                i(l.ufrag, l.pwd, s.algorithm, s.fingerprint, [u]);
              } catch (e) {
                o("WALogger").ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
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
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [P2PConnectionManager] ICE gathering complete",
            ])),
        );
    }
    function $e() {
      if (z != null) {
        var e = z.iceConnectionState;
        (o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [P2PConnectionManager] ICE connection state: ",
              "",
            ])),
          e,
        ),
          e === "failed" && Ee("ice_connection_failed"));
      }
    }
    function Pe() {
      var e,
        t = "N/A";
      (pe.connectionReadyTime !== 0 &&
        _e > 0 &&
        (t = (pe.connectionReadyTime - _e).toString()),
        o("WALogger").LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [P2PConnectionManager] Connection stats:\n    ConnectionId: ",
              ",\n    Sent: ",
              " packets,\n    Received: ",
              " packets,\n    Sent Bytes: ",
              " bytes,\n    Received Bytes: ",
              " bytes,\n    Connection Setup Time: ",
              " ms,\n    Transferred to worker: ",
              "",
            ])),
          (e = J != null ? J : ee) != null ? e : "N/A",
          pe.sentPackets,
          pe.receivedPackets,
          pe.sentBytes,
          pe.receivedBytes,
          t,
          String(Y),
        ));
    }
    function Ne() {
      (o("WALogger").LOG(
        f ||
          (f = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [P2PConnectionManager] Data channel opened",
          ])),
      ),
        Re(o("WAWebVoipRelayConnectionUtils").ConnectionState.Open),
        (pe.connectionReadyTime = Date.now()),
        X ||
          o("WAWebVoipSctpStatsInstrumentation").addConnectionSource("p2p", Ce),
        de != null && (window.clearTimeout(de), (de = null)));
    }
    function Me() {
      (o("WALogger").LOG(
        g ||
          (g = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [P2PConnectionManager] Data channel closed",
          ])),
      ),
        K !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
          K !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed &&
          (Re(o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed),
          Le()));
    }
    function we(e) {
      fe != null &&
        o("WAWebVoipRelayConnectionUtils")
          .dataToArrayBuffer(e.data)
          .then(function (e) {
            e != null &&
              fe != null &&
              (pe.receivedPackets++, (pe.receivedBytes += e.byteLength), fe(e));
          });
    }
    function Ae(e) {
      (o("WALogger").ERROR(
        h ||
          (h = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [P2PConnectionManager] Data channel error",
          ])),
      ),
        Ee("data_channel_error"));
    }
    function Fe(e) {
      ((e.onopen = function () {
        Ne();
      }),
        (e.onclose = function () {
          Me();
        }),
        (e.onmessage = function (e) {
          we(e);
        }),
        (e.onerror = function (e) {
          Ae(e);
        }));
    }
    function Oe(e, t, n) {
      return Be.apply(this, arguments);
    }
    function Be() {
      return (
        (Be = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            (z != null &&
              (o("WALogger").WARN(
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] initP2PConnection called while already initialized, cleaning up",
                  ])),
              ),
              We()),
              o("WALogger").LOG(
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] Initializing P2P connection, caller=",
                    "",
                  ])),
                String(e),
              ),
              (Q = e),
              (ye = n != null ? n : null),
              (H =
                o("WAWebABProps").getABPropConfigValue(
                  "enable_web_voip_p2p",
                ) === !0));
            var r = new RTCPeerConnection({ iceServers: [].concat(t, [W]) });
            ((z = r),
              (r.onicecandidate = function (e) {
                xe(e);
              }),
              (r.oniceconnectionstatechange = function () {
                $e();
              }),
              (r.onconnectionstatechange = function () {
                o("WALogger").LOG(
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] PeerConnection state: ",
                      "",
                    ])),
                  r.connectionState,
                );
              }));
            var a = r.createDataChannel(
              G.DATA_CHANNEL_LABEL,
              babelHelpers.extends(
                {},
                o("WAWebVoipRelayConnectionUtils").BASE_DATA_CHANNEL_OPTIONS,
              ),
            );
            ((a.binaryType = "arraybuffer"), (j = a));
            var i = o("WAWebVoipRelayConnectionUtils").isDcTransferDisabled(),
              l = i
                ? null
                : o("WAWebVoipSctpConnectionManager").getDataChannelThread();
            if (
              (i &&
                o("WALogger").LOG(
                  P ||
                    (P = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] DC transfer disabled for current browser, using main-thread path",
                    ])),
                ),
              l != null && q != null && V != null)
            ) {
              var s = q,
                u = V,
                c = s + ":" + u,
                d =
                  o("WAWebABProps").getABPropConfigValue(
                    "voip_enable_webrtc_stats_polling",
                  ) === !0,
                m = l.transferChannel(a, c, s, u, d);
              m
                ? ((X = !0),
                  (Y = !0),
                  (J = c),
                  o("WALogger").LOG(
                    N ||
                      (N = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [P2PConnectionManager] DataChannel transferred to worker thread as ",
                        "",
                      ])),
                    c,
                  ))
                : o("WALogger").WARN(
                    M ||
                      (M = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [P2PConnectionManager] DataChannel transfer failed, using main-thread path",
                      ])),
                  );
            }
            if ((X || Fe(a), e)) {
              var p,
                _ = yield r.createOffer();
              yield r.setLocalDescription(_);
              var f = (p = _.sdp) != null ? p : "";
              if (
                ((me = f),
                (te = o("WAWebVoipRelayConnectionUtils").extractIceCredentials(
                  f,
                )),
                (ne = o("WAWebVoipRelayConnectionUtils").extractDtlsFingerprint(
                  f,
                )),
                te == null || ne == null)
              ) {
                (o("WALogger").ERROR(
                  w ||
                    (w = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Failed to extract local credentials from offer SDP",
                    ])),
                ),
                  Ee("credential_extraction_failed"));
                return;
              }
              o("WALogger").LOG(
                A ||
                  (A = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] Caller offer created, local credentials extracted",
                  ])),
              );
              var g = ye;
              if (g != null && te != null && ne != null) {
                o("WALogger").LOG(
                  F ||
                    (F = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Sending initial credentials to remote peer",
                    ])),
                );
                try {
                  g(te.ufrag, te.pwd, ne.algorithm, ne.fingerprint, []);
                } catch (e) {
                  o("WALogger").ERROR(
                    O ||
                      (O = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [P2PConnectionManager] Failed to send initial transport: ",
                        "",
                      ])),
                    e,
                  );
                }
              }
            } else {
              var h,
                y = yield r.createOffer();
              ((me = (h = y.sdp) != null ? h : ""),
                o("WALogger").LOG(
                  B ||
                    (B = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Callee template SDP generated, waiting for remote credentials",
                    ])),
                ));
            }
            ((_e = Date.now()),
              Re(o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting),
              (de = window.setTimeout(function () {
                K ===
                  o("WAWebVoipRelayConnectionUtils").ConnectionState
                    .Connecting && Ee("connection_timeout");
              }, G.CONNECTION_TIMEOUT_MS)));
          },
        )),
        Be.apply(this, arguments)
      );
    }
    function We() {
      K !== o("WAWebVoipRelayConnectionUtils").ConnectionState.None &&
        (o("WALogger").LOG(
          y ||
            (y = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [P2PConnectionManager] Cleaning up P2P connection",
            ])),
        ),
        X ? ((Z = !0), (ee = J)) : _e > 0 && Pe(),
        o("WAWebVoipSctpStatsInstrumentation").removeConnectionSource("p2p"),
        ke(),
        Le(),
        Re(o("WAWebVoipRelayConnectionUtils").ConnectionState.None),
        (Q = !1),
        (te = null),
        (ne = null),
        (re = null),
        (oe = null),
        (ae = null),
        (ie = null),
        (le = []),
        (se = []),
        (ue = !1),
        (ce = !1),
        (me = null),
        (ye = null),
        Z ||
          ((pe = o(
            "WAWebVoipRelayConnectionUtils",
          ).createEmptyConnectionStats()),
          (_e = 0),
          (Y = !1)));
    }
    function qe() {
      return te;
    }
    function Ue() {
      return ne;
    }
    function Ve(e) {
      (o("WALogger").LOG(
        C ||
          (C = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [P2PConnectionManager] Received remote credentials",
          ])),
      ),
        (re = e.ufrag),
        (oe = e.pwd),
        (ae = e.algorithm),
        (ie = e.fingerprint),
        Te());
    }
    function He() {
      return [].concat(le);
    }
    function Ge(e) {
      if (ce && z != null) {
        var t = z,
          n = ve(e);
        t.addIceCandidate(
          new RTCIceCandidate({ sdpMLineIndex: 0, sdpMid: "0", candidate: n }),
        ).then(
          function () {},
          function (e) {
            o("WALogger").WARN(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [P2PConnectionManager] Failed to add remote candidate: ",
                  "",
                ])),
              e,
            );
          },
        );
      } else se.push(e);
    }
    function ze(e) {
      if (X) return !0;
      if (
        K === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open &&
        j != null &&
        j.readyState === "open"
      )
        try {
          return (
            j.send(e),
            pe.sentPackets++,
            (pe.sentBytes += e.byteLength),
            !0
          );
        } catch (e) {
          return (
            o("WALogger").ERROR(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
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
    function je(e) {
      fe = e;
    }
    function Ke(e) {
      ge = e;
    }
    function Qe(e) {
      he = e;
    }
    function Xe() {
      return K;
    }
    function Ye() {
      return H;
    }
    function Je(e, t, n) {
      ((q = e),
        (U = t),
        (V = n),
        (H =
          o("WAWebABProps").getABPropConfigValue("enable_web_voip_p2p") ===
          !0));
    }
    function Ze(e, t) {
      return t === V && (e === q || e === U);
    }
    function et() {
      return J;
    }
    function tt(e) {
      return e === J || (Z && e === ee);
    }
    function nt() {
      X &&
        (o("WALogger").LOG(
          S ||
            (S = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [P2PConnectionManager] Worker reported P2P channel opened",
            ])),
        ),
        Ne());
    }
    function rt(e) {
      var t = X || Z;
      t &&
        (o("WALogger").LOG(
          R ||
            (R = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [P2PConnectionManager] Worker reported P2P channel closed",
            ])),
        ),
        e != null &&
          ((pe.sentPackets += e.sentPackets),
          (pe.sentBytes += e.sentBytes),
          (pe.receivedPackets += e.receivedPackets),
          (pe.receivedBytes += e.receivedBytes),
          e.firstSendTime > 0 &&
            pe.firstSendRequestTime === 0 &&
            (pe.firstSendRequestTime = e.firstSendTime),
          e.firstResponseRecvTime > 0 &&
            pe.firstResponseRecvTime === 0 &&
            (pe.firstResponseRecvTime = e.firstResponseRecvTime)),
        Pe(),
        (Z = !1),
        (ee = null),
        (pe = o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats()),
        (_e = 0),
        (Y = !1),
        X &&
          (K !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
            K !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed &&
            Re(o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed),
          (X = !1),
          (J = null),
          Le()));
    }
    ((l.parseSdpCandidateToTransport = be),
      (l.initP2PConnection = Oe),
      (l.cleanupP2PConnection = We),
      (l.getLocalIceCredentials = qe),
      (l.getLocalDtlsFingerprint = Ue),
      (l.handleRemoteCredentials = Ve),
      (l.getLocalCandidates = He),
      (l.handleRemoteCandidate = Ge),
      (l.sendP2PData = ze),
      (l.registerOnDataChannelMessage = je),
      (l.registerOnDataChannelStateChange = Ke),
      (l.registerOnIceCandidate = Qe),
      (l.getP2PConnectionState = Xe),
      (l.isP2PEnabled = Ye),
      (l.initP2PVirtualAddresses = Je),
      (l.isP2PVirtualAddress = Ze),
      (l.getP2PConnectionId = et),
      (l.isP2PConnectionId = tt),
      (l.handleWorkerP2PChannelOpened = nt),
      (l.handleWorkerP2PChannelClosed = rt));
  },
  98,
);
