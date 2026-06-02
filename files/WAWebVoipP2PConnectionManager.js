__d(
  "WAWebVoipP2PConnectionManager",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebVoipRelayConnectionUtils",
    "WAWebVoipSctpConnectionManager",
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
      U = { urls: "stun:edge-stun.facebook.com:3478" },
      V = null,
      H = null,
      G = null,
      z = !1,
      j = {
        DATA_CHANNEL_LABEL: "wa-web-p2p",
        DATA_CHANNEL_ID: 0,
        CONNECTION_TIMEOUT_MS: 3e4,
      },
      K = null,
      Q = null,
      X = o("WAWebVoipRelayConnectionUtils").ConnectionState.None,
      Y = !1,
      J = !1,
      Z = !1,
      ee = null,
      te = !1,
      ne = null,
      re = null,
      oe = null,
      ae = null,
      ie = null,
      le = null,
      se = null,
      ue = [],
      ce = [],
      de = !1,
      me = !1,
      pe = null,
      _e = null,
      fe = o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats(),
      ge = 0,
      he = null,
      ye = null,
      Ce = null,
      be = null;
    function ve() {
      return K != null &&
        X === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open
        ? [{ connectionId: "p2p", peerConnection: K }]
        : [];
    }
    function Se(e) {
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
    function Re(e) {
      var t = e.priority * Math.pow(2, 24);
      return "candidate:1 1 UDP " + t + " " + e.ip + " " + e.port + " typ host";
    }
    function Le(e, t, n, r, a, i, l) {
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
    function Ee(e) {
      ((X = e), ye != null && ye(e));
    }
    function ke() {
      if (
        (pe != null && (window.clearTimeout(pe), (pe = null)), !J && Q != null)
      )
        try {
          Q.close();
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
      if (((Q = null), K != null)) {
        try {
          K.close();
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
        K = null;
      }
    }
    function Ie(e) {
      X !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
        X !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed &&
        (o("WALogger").ERROR(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [P2PConnectionManager] Connection failed, reason: ",
              "",
            ])),
          e,
        ),
        Ee(o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed),
        Te(),
        ke());
    }
    function Te() {
      if (J && ee != null) {
        var e = ee,
          t = o("WAWebVoipSctpConnectionManager").getDataChannelThread();
        (t != null && t.closeChannel(e), (J = !1), (ee = null));
      }
    }
    function De() {
      if (!(K == null || !me)) {
        var e = K,
          t = ce;
        ce = [];
        for (var n of t) {
          var r = Re(n);
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
    function xe() {
      return $e.apply(this, arguments);
    }
    function $e() {
      return (
        ($e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            !(
              ae == null ||
              ie == null ||
              le == null ||
              se == null ||
              K == null ||
              _e == null
            ) &&
            !(me || de)
          ) {
            var e = K;
            de = !0;
            try {
              if (Y) {
                var t = Le(_e, ae, ie, le, se, [], !0);
                yield e.setRemoteDescription({ sdp: t, type: "answer" });
              } else {
                var n,
                  r = Le(_e, ae, ie, le, se, [], !1);
                yield e.setRemoteDescription({ sdp: r, type: "offer" });
                var a = yield e.createAnswer();
                yield e.setLocalDescription(a);
                var i = (n = a.sdp) != null ? n : "";
                if (
                  ((re = o(
                    "WAWebVoipRelayConnectionUtils",
                  ).extractIceCredentials(i)),
                  (oe = o(
                    "WAWebVoipRelayConnectionUtils",
                  ).extractDtlsFingerprint(i)),
                  re == null || oe == null)
                ) {
                  (o("WALogger").ERROR(
                    L ||
                      (L = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [P2PConnectionManager] Failed to extract credentials from answer SDP",
                      ])),
                  ),
                    (de = !1),
                    Ie("credential_extraction_failed"));
                  return;
                }
                o("WALogger").LOG(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Callee local credentials extracted from answer",
                    ])),
                );
                var l = be;
                if (l != null)
                  try {
                    l(re.ufrag, re.pwd, oe.algorithm, oe.fingerprint, []);
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
                (me = !0),
                (de = !1),
                De());
            } catch (e) {
              ((de = !1),
                (me = !1),
                o("WALogger").ERROR(
                  T ||
                    (T = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Failed to apply remote description: ",
                      "",
                    ])),
                  e,
                ),
                Ie("remote_description_failed"));
            }
          }
        })),
        $e.apply(this, arguments)
      );
    }
    function Pe(e) {
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
        (ue.push(a), Ce != null && Ce(a));
        var i = be;
        if (i != null) {
          var l = re,
            s = oe;
          if (l != null && s != null) {
            var u = Se(a.candidate);
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
    function Ne() {
      if (K != null) {
        var e = K.iceConnectionState;
        (o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [P2PConnectionManager] ICE connection state: ",
              "",
            ])),
          e,
        ),
          e === "failed" && Ie("ice_connection_failed"));
      }
    }
    function Me() {
      var e,
        t = "N/A";
      (fe.connectionReadyTime !== 0 &&
        ge > 0 &&
        (t = (fe.connectionReadyTime - ge).toString()),
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
          (e = ee != null ? ee : ne) != null ? e : "N/A",
          fe.sentPackets,
          fe.receivedPackets,
          fe.sentBytes,
          fe.receivedBytes,
          t,
          String(Z),
        ));
    }
    function we() {
      (o("WALogger").LOG(
        f ||
          (f = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [P2PConnectionManager] Data channel opened",
          ])),
      ),
        Ee(o("WAWebVoipRelayConnectionUtils").ConnectionState.Open),
        (fe.connectionReadyTime = Date.now()),
        J ||
          o("WAWebVoipSctpStatsInstrumentation").addConnectionSource("p2p", ve),
        pe != null && (window.clearTimeout(pe), (pe = null)));
    }
    function Ae() {
      (o("WALogger").LOG(
        g ||
          (g = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [P2PConnectionManager] Data channel closed",
          ])),
      ),
        X !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
          X !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed &&
          (Ee(o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed),
          ke()));
    }
    function Fe(e) {
      he != null &&
        o("WAWebVoipRelayConnectionUtils")
          .dataToArrayBuffer(e.data)
          .then(function (e) {
            e != null &&
              he != null &&
              (fe.receivedPackets++, (fe.receivedBytes += e.byteLength), he(e));
          });
    }
    function Oe(e) {
      (o("WALogger").ERROR(
        h ||
          (h = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [P2PConnectionManager] Data channel error",
          ])),
      ),
        Ie("data_channel_error"));
    }
    function Be(e) {
      ((e.onopen = function () {
        we();
      }),
        (e.onclose = function () {
          Ae();
        }),
        (e.onmessage = function (e) {
          Fe(e);
        }),
        (e.onerror = function (e) {
          Oe(e);
        }));
    }
    function We(e, t, n) {
      return qe.apply(this, arguments);
    }
    function qe() {
      return (
        (qe = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            (K != null &&
              (o("WALogger").WARN(
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] initP2PConnection called while already initialized, cleaning up",
                  ])),
              ),
              Ue()),
              o("WALogger").LOG(
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] Initializing P2P connection, caller=",
                    "",
                  ])),
                String(e),
              ),
              (Y = e),
              (be = n != null ? n : null),
              (z =
                o("WAWebABProps").getABPropConfigValue(
                  "enable_web_voip_p2p",
                ) === !0));
            var a = new RTCPeerConnection({ iceServers: [].concat(t, [U]) });
            ((K = a),
              (a.onicecandidate = function (e) {
                Pe(e);
              }),
              (a.oniceconnectionstatechange = function () {
                Ne();
              }),
              (a.onconnectionstatechange = function () {
                o("WALogger").LOG(
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] PeerConnection state: ",
                      "",
                    ])),
                  a.connectionState,
                );
              }));
            var i = a.createDataChannel(
              j.DATA_CHANNEL_LABEL,
              babelHelpers.extends(
                {},
                o("WAWebVoipRelayConnectionUtils").BASE_DATA_CHANNEL_OPTIONS,
              ),
            );
            ((i.binaryType = "arraybuffer"), (Q = i));
            var l = o("WAWebVoipRelayConnectionUtils").isDcTransferDisabled(),
              s = l
                ? null
                : o("WAWebVoipSctpConnectionManager").getDataChannelThread();
            if (
              (l &&
                o("WALogger").LOG(
                  P ||
                    (P = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] DC transfer disabled for current browser, using main-thread path",
                    ])),
                ),
              s != null && V != null && G != null)
            ) {
              var u = V,
                c = G,
                d = u + ":" + c,
                m =
                  o("WAWebABProps").getABPropConfigValue(
                    "voip_enable_webrtc_stats_polling",
                  ) === !0,
                p = s.transferChannel(i, d, u, c, m);
              p
                ? ((J = !0),
                  (Z = !0),
                  (ee = d),
                  o("WALogger").LOG(
                    N ||
                      (N = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [P2PConnectionManager] DataChannel transferred to worker thread as ",
                        "",
                      ])),
                    d,
                  ))
                : o("WALogger").WARN(
                    M ||
                      (M = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [P2PConnectionManager] DataChannel transfer failed, using main-thread path",
                      ])),
                  );
            }
            if ((J || Be(i), e)) {
              var _,
                f = yield a.createOffer();
              yield a.setLocalDescription(f);
              var g = (_ = f.sdp) != null ? _ : "";
              if (
                ((_e = g),
                (re = o("WAWebVoipRelayConnectionUtils").extractIceCredentials(
                  g,
                )),
                (oe = o("WAWebVoipRelayConnectionUtils").extractDtlsFingerprint(
                  g,
                )),
                re == null || oe == null)
              ) {
                (o("WALogger").ERROR(
                  w ||
                    (w = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Failed to extract local credentials from offer SDP",
                    ])),
                ),
                  Ie("credential_extraction_failed"));
                return;
              }
              o("WALogger").LOG(
                A ||
                  (A = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] Caller offer created, local credentials extracted",
                  ])),
              );
              var h = be;
              if (h != null && re != null && oe != null) {
                o("WALogger").LOG(
                  F ||
                    (F = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Sending initial credentials to remote peer",
                    ])),
                );
                try {
                  h(re.ufrag, re.pwd, oe.algorithm, oe.fingerprint, []);
                } catch (e) {
                  o("WALogger")
                    .ERROR(
                      O ||
                        (O = babelHelpers.taggedTemplateLiteralLoose([
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
                ((_e = b),
                (re = o("WAWebVoipRelayConnectionUtils").extractIceCredentials(
                  b,
                )),
                (oe = o("WAWebVoipRelayConnectionUtils").extractDtlsFingerprint(
                  b,
                )),
                re == null || oe == null)
              ) {
                (o("WALogger")
                  .ERROR(
                    B ||
                      (B = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [P2PConnectionManager] Failed to extract local credentials from callee template SDP",
                      ])),
                  )
                  .sendLogs("p2p-callee-credential-extraction-failed"),
                  Ie("credential_extraction_failed"));
                return;
              }
              o("WALogger").LOG(
                W ||
                  (W = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] Callee template SDP generated, sending proactive credentials",
                  ])),
              );
              var v = be;
              if (v != null)
                try {
                  v(re.ufrag, re.pwd, oe.algorithm, oe.fingerprint, []);
                } catch (e) {
                  o("WALogger")
                    .ERROR(
                      q ||
                        (q = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [P2PConnectionManager] Failed to send callee initial transport",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("p2p-callee-send-initial-transport-failed");
                }
            }
            ((ge = Date.now()),
              Ee(o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting),
              (pe = window.setTimeout(function () {
                X ===
                  o("WAWebVoipRelayConnectionUtils").ConnectionState
                    .Connecting && Ie("connection_timeout");
              }, j.CONNECTION_TIMEOUT_MS)));
          },
        )),
        qe.apply(this, arguments)
      );
    }
    function Ue() {
      X !== o("WAWebVoipRelayConnectionUtils").ConnectionState.None &&
        (o("WALogger").LOG(
          y ||
            (y = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [P2PConnectionManager] Cleaning up P2P connection",
            ])),
        ),
        J ? ((te = !0), (ne = ee)) : ge > 0 && Me(),
        o("WAWebVoipSctpStatsInstrumentation").removeConnectionSource("p2p"),
        Te(),
        ke(),
        Ee(o("WAWebVoipRelayConnectionUtils").ConnectionState.None),
        (Y = !1),
        (re = null),
        (oe = null),
        (ae = null),
        (ie = null),
        (le = null),
        (se = null),
        (ue = []),
        (ce = []),
        (de = !1),
        (me = !1),
        (_e = null),
        (be = null),
        te ||
          ((fe = o(
            "WAWebVoipRelayConnectionUtils",
          ).createEmptyConnectionStats()),
          (ge = 0),
          (Z = !1)));
    }
    function Ve() {
      return re;
    }
    function He() {
      return oe;
    }
    function Ge(e) {
      (o("WALogger").LOG(
        C ||
          (C = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [P2PConnectionManager] Received remote credentials",
          ])),
      ),
        (ae = e.ufrag),
        (ie = e.pwd),
        (le = e.algorithm),
        (se = e.fingerprint),
        xe());
    }
    function ze() {
      return [].concat(ue);
    }
    function je(e) {
      if (me && K != null) {
        var t = K,
          n = Re(e);
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
      } else ce.push(e);
    }
    function Ke(e) {
      if (J) return !0;
      if (
        X === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open &&
        Q != null &&
        Q.readyState === "open"
      )
        try {
          return (
            Q.send(e),
            fe.sentPackets++,
            (fe.sentBytes += e.byteLength),
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
    function Qe(e) {
      he = e;
    }
    function Xe(e) {
      ye = e;
    }
    function Ye(e) {
      Ce = e;
    }
    function Je() {
      return X;
    }
    function Ze() {
      return z;
    }
    function et(e, t, n) {
      ((V = e),
        (H = t),
        (G = n),
        (z =
          o("WAWebABProps").getABPropConfigValue("enable_web_voip_p2p") ===
          !0));
    }
    function tt(e, t) {
      return t === G && (e === V || e === H);
    }
    function nt() {
      return ee;
    }
    function rt(e) {
      return e === ee || (te && e === ne);
    }
    function ot() {
      J &&
        (o("WALogger").LOG(
          S ||
            (S = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [P2PConnectionManager] Worker reported P2P channel opened",
            ])),
        ),
        we());
    }
    function at(e) {
      var t = J || te;
      t &&
        (o("WALogger").LOG(
          R ||
            (R = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [P2PConnectionManager] Worker reported P2P channel closed",
            ])),
        ),
        e != null &&
          ((fe.sentPackets += e.sentPackets),
          (fe.sentBytes += e.sentBytes),
          (fe.receivedPackets += e.receivedPackets),
          (fe.receivedBytes += e.receivedBytes),
          e.firstSendTime > 0 &&
            fe.firstSendRequestTime === 0 &&
            (fe.firstSendRequestTime = e.firstSendTime),
          e.firstResponseRecvTime > 0 &&
            fe.firstResponseRecvTime === 0 &&
            (fe.firstResponseRecvTime = e.firstResponseRecvTime)),
        Me(),
        (te = !1),
        (ne = null),
        (fe = o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats()),
        (ge = 0),
        (Z = !1),
        J &&
          (X !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
            X !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed &&
            Ee(o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed),
          (J = !1),
          (ee = null),
          ke()));
    }
    ((l.parseSdpCandidateToTransport = Se),
      (l.initP2PConnection = We),
      (l.cleanupP2PConnection = Ue),
      (l.getLocalIceCredentials = Ve),
      (l.getLocalDtlsFingerprint = He),
      (l.handleRemoteCredentials = Ge),
      (l.getLocalCandidates = ze),
      (l.handleRemoteCandidate = je),
      (l.sendP2PData = Ke),
      (l.registerOnDataChannelMessage = Qe),
      (l.registerOnDataChannelStateChange = Xe),
      (l.registerOnIceCandidate = Ye),
      (l.getP2PConnectionState = Je),
      (l.isP2PEnabled = Ze),
      (l.initP2PVirtualAddresses = et),
      (l.isP2PVirtualAddress = tt),
      (l.getP2PConnectionId = nt),
      (l.isP2PConnectionId = rt),
      (l.handleWorkerP2PChannelOpened = ot),
      (l.handleWorkerP2PChannelClosed = at));
  },
  98,
);
