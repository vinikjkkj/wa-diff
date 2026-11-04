__d(
  "WAWebVoipP2PConnectionManager",
  [
    "WALogger",
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
      We = null;
    function qe() {
      return de != null &&
        pe === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open
        ? [{ connectionId: "p2p", peerConnection: de }]
        : [];
    }
    function Ue(e) {
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
    function Ve(e) {
      var t = e.split(" ");
      return t.length < 8 || !t[0].startsWith("candidate:") || t[6] !== "typ"
        ? "unparsed"
        : t
            .map(function (e, n) {
              return n === 4 || t[n - 1] === "raddr" ? Ge(e) : e;
            })
            .join(" ");
    }
    function He(e) {
      var t = e.split("::");
      if (t.length > 2) return null;
      var n = t[0] === "" ? [] : t[0].split(":"),
        r = t.length === 1 || t[1] === "" ? [] : t[1].split(":"),
        o = n;
      if (t.length === 2) {
        var a = 8 - n.length - r.length;
        if (a < 1) return null;
        var i = new Array(a).fill("0");
        o = [].concat(n, i, r);
      }
      return o.length !== 8 ||
        o.some(function (e) {
          return !/^[0-9a-fA-F]{1,4}$/.test(e);
        })
        ? null
        : o;
    }
    function Ge(e) {
      if (/^\d{1,3}(\.\d{1,3}){3}$/.test(e)) return e.replace(/\d{1,3}$/, "0");
      if (e.includes(":")) {
        var t = He(e);
        return t == null
          ? "<ipv6>"
          : [].concat(t.slice(0, 6), ["0", "0"]).join(":");
      }
      return e;
    }
    function ze(e) {
      var t = e.priority * Math.pow(2, 24);
      return "candidate:1 1 UDP " + t + " " + e.ip + " " + e.port + " typ host";
    }
    function je(t) {
      var n = t.asCaller,
        r = t.localTemplate,
        a = t.peerIsWebBrowser,
        i = t.remoteAlgo,
        l = t.remoteCandidates,
        c = t.remoteFp,
        d = t.remotePwd,
        m = t.remoteUfrag,
        p = r;
      ((p = o("WAWebVoipRelayConnectionUtils").replaceIceCredentials(p, m, d)),
        (p = o("WAWebVoipRelayConnectionUtils").replaceDtlsFingerprint(
          p,
          i,
          c,
        )),
        a
          ? n
            ? (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] SDP: setting remote setup=passive (caller, local DTLS role=active/client)",
                  ])),
              ),
              (p = p.replace(/a=setup:[^\r\n]+/g, "a=setup:passive")))
            : (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] SDP: setting remote setup=active (callee, local DTLS role=passive/server)",
                  ])),
              ),
              (p = p.replace(/a=setup:[^\r\n]+/g, "a=setup:active")))
          : (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [P2PConnectionManager] SDP: setting remote setup=active (peer is native, local DTLS role=passive/server)",
                ])),
            ),
            (p = p.replace(/a=setup:[^\r\n]+/g, "a=setup:active"))),
        (p = o("WAWebVoipRelayConnectionUtils").removeIceCandidates(p)));
      var _ = l
          .map(function (e) {
            return "a=" + e.candidate + "\r\n";
          })
          .join(""),
        f = p.replace(/\s+$/, "\r\n");
      return f + _;
    }
    function Ke(e) {
      ((pe = e), Oe != null && Oe(e));
    }
    function Qe() {
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
    function Xe(e) {
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
        Ke(o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed),
        Ye(),
        Qe());
    }
    function Ye() {
      if (ge && ye != null) {
        var e = ye,
          t = o("WAWebVoipSctpDataChannelThreadManager").getDataChannelThread();
        (t != null && t.closeChannel(e), (Se = ve), (ge = !1), (ye = null));
      }
    }
    function Je() {
      if (!(de == null || !Pe)) {
        var e = de,
          t = xe;
        xe = [];
        for (var n of t) {
          var r = ze(n);
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
    function Ze() {
      return et.apply(this, arguments);
    }
    function et() {
      return (
        (et = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
                var t = je({
                  asCaller: !0,
                  localTemplate: Me,
                  peerIsWebBrowser: fe,
                  remoteAlgo: Ie,
                  remoteCandidates: [],
                  remoteFp: Te,
                  remotePwd: ke,
                  remoteUfrag: Ee,
                });
                (o("WALogger").LOG(
                  M ||
                    (M = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Applying synthetic answer SDP (caller, ICE role=controlling)",
                    ])),
                ),
                  yield e.setRemoteDescription({ sdp: t, type: "answer" }));
              } else {
                var n,
                  r = je({
                    asCaller: !1,
                    localTemplate: Me,
                    peerIsWebBrowser: fe,
                    remoteAlgo: Ie,
                    remoteCandidates: [],
                    remoteFp: Te,
                    remotePwd: ke,
                    remoteUfrag: Ee,
                  });
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
                    Xe("credential_extraction_failed"));
                  return;
                }
                o("WALogger").LOG(
                  O ||
                    (O = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Callee local credentials extracted from answer",
                    ])),
                );
                var u = Be;
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
                Je());
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
                Xe("remote_description_failed"));
            }
          }
        })),
        et.apply(this, arguments)
      );
    }
    function tt(e) {
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
        De.push(a);
        var i = Be;
        if (i != null) {
          var l = Re,
            s = Le;
          if (l != null && s != null) {
            var u = Ue(a.candidate);
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
    function nt() {
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
          t === "failed" && Xe("ice_connection_failed"));
      }
    }
    function rt() {
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
    function ot() {
      (o("WALogger").LOG(
        S ||
          (S = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [P2PConnectionManager] Data channel opened",
          ])),
      ),
        Ke(o("WAWebVoipRelayConnectionUtils").ConnectionState.Open),
        (we.connectionReadyTime = Date.now()),
        ge ||
          o("WAWebVoipSctpStatsInstrumentation").addConnectionSource("p2p", qe),
        Ne != null && (window.clearTimeout(Ne), (Ne = null)));
    }
    function at() {
      (o("WALogger").LOG(
        R ||
          (R = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [P2PConnectionManager] Data channel closed",
          ])),
      ),
        pe !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed &&
          pe !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed &&
          (Ke(o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed),
          Qe()));
    }
    function it(e) {
      Fe != null &&
        o("WAWebVoipRelayConnectionUtils")
          .dataToArrayBuffer(e.data)
          .then(function (e) {
            e != null &&
              Fe != null &&
              (we.receivedPackets++, (we.receivedBytes += e.byteLength), Fe(e));
          });
    }
    function lt(e) {
      (o("WALogger").ERROR(
        L ||
          (L = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [P2PConnectionManager] Data channel error",
          ])),
      ),
        Xe("data_channel_error"));
    }
    function st(e) {
      ((e.onopen = function () {
        ot();
      }),
        (e.onclose = function () {
          at();
        }),
        (e.onmessage = function (e) {
          it(e);
        }),
        (e.onerror = function (e) {
          lt(e);
        }));
    }
    function ut(e, t, n, r) {
      return ct.apply(this, arguments);
    }
    function ct() {
      return (
        (ct = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            (de != null &&
              (o("WALogger").WARN(
                U ||
                  (U = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] initP2PConnection called while already initialized, cleaning up",
                  ])),
              ),
              dt()),
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
              (Be = a != null ? a : null));
            var i = new RTCPeerConnection({ iceServers: [].concat(n, [oe]) });
            ((de = i),
              (i.onicecandidate = function (e) {
                tt(e);
              }),
              (i.oniceconnectionstatechange = function () {
                nt();
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
                p = u.transferChannel({
                  channel: l,
                  connectionId: m,
                  ip: c,
                  port: d,
                });
              p
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
            if ((ge || st(l), e)) {
              var _,
                f = yield i.createOffer();
              yield i.setLocalDescription(f);
              var g = (_ = f.sdp) != null ? _ : "";
              if (
                ((Me = g),
                (Re = o("WAWebVoipRelayConnectionUtils").extractIceCredentials(
                  g,
                )),
                (Le = o("WAWebVoipRelayConnectionUtils").extractDtlsFingerprint(
                  g,
                )),
                Re == null || Le == null)
              ) {
                (o("WALogger").ERROR(
                  X ||
                    (X = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Failed to extract local credentials from offer SDP",
                    ])),
                ),
                  Xe("credential_extraction_failed"));
                return;
              }
              o("WALogger").LOG(
                Y ||
                  (Y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] Caller offer created, local credentials extracted",
                  ])),
              );
              var h = Be;
              if (h != null && Re != null && Le != null) {
                o("WALogger").LOG(
                  J ||
                    (J = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [P2PConnectionManager] Sending initial credentials to remote peer",
                    ])),
                );
                try {
                  h(Re.ufrag, Re.pwd, Le.algorithm, Le.fingerprint, []);
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
              var y,
                C = yield i.createOffer(),
                b = (y = C.sdp) != null ? y : "";
              if (
                ((Me = b),
                (Re = o("WAWebVoipRelayConnectionUtils").extractIceCredentials(
                  b,
                )),
                (Le = o("WAWebVoipRelayConnectionUtils").extractDtlsFingerprint(
                  b,
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
                  Xe("credential_extraction_failed"));
                return;
              }
              o("WALogger").LOG(
                te ||
                  (te = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [P2PConnectionManager] Callee template SDP generated, sending proactive credentials",
                  ])),
              );
              var v = Be;
              if (v != null)
                try {
                  v(Re.ufrag, Re.pwd, Le.algorithm, Le.fingerprint, []);
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
            (Ze(),
              (Ae = Date.now()),
              Ke(o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting),
              (Ne = window.setTimeout(function () {
                pe ===
                  o("WAWebVoipRelayConnectionUtils").ConnectionState
                    .Connecting && Xe("connection_timeout");
              }, ce.CONNECTION_TIMEOUT_MS)));
          },
        )),
        ct.apply(this, arguments)
      );
    }
    function dt() {
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
          ge ? ((Ce = !0), (be = ye)) : Ae > 0 && rt(),
          o("WAWebVoipSctpStatsInstrumentation").removeConnectionSource("p2p"),
          Ye(),
          Qe(),
          Ke(o("WAWebVoipRelayConnectionUtils").ConnectionState.None),
          (_e = !1),
          (Re = null),
          (Le = null),
          (De = []),
          (Me = null),
          (Be = null),
          Ce ||
            ((we = o(
              "WAWebVoipRelayConnectionUtils",
            ).createEmptyConnectionStats()),
            (Ae = 0),
            (he = !1))));
    }
    function mt(e) {
      We = e;
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
          We != null && We()),
        (Ee = e.ufrag),
        (ke = e.pwd),
        (Ie = e.algorithm),
        (Te = e.fingerprint),
        Ze());
    }
    function _t(e) {
      if (Pe && de != null) {
        var t = de,
          n = ze(e);
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
    function yt() {
      return se;
    }
    function Ct(e) {
      return bt.apply(this, arguments);
    }
    function bt() {
      return (
        (bt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        bt.apply(this, arguments)
      );
    }
    function vt(e, t, n) {
      ((ae = e), (ie = t), (le = n));
    }
    function St(e, t) {
      return t === le && (e === ae || e === ie);
    }
    function Rt() {
      return ye;
    }
    function Lt(e) {
      return e === ye || (Ce && e === be);
    }
    function Et() {
      ge &&
        (o("WALogger").LOG(
          $ ||
            ($ = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [P2PConnectionManager] Worker reported P2P channel opened",
            ])),
        ),
        ot());
    }
    function kt(e) {
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
          rt(),
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
              Ke(o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed),
            (ge = !1),
            (ye = null),
            Qe()));
      }
    }
    ((l.parseSdpCandidateToTransport = Ue),
      (l.redactCandidateForLog = Ve),
      (l.initP2PConnection = ut),
      (l.cleanupP2PConnection = dt),
      (l.registerOnPeerIceRestart = mt),
      (l.handleRemoteCredentials = pt),
      (l.handleRemoteCandidate = _t),
      (l.sendP2PData = ft),
      (l.registerOnDataChannelMessage = gt),
      (l.registerOnDataChannelStateChange = ht),
      (l.isP2PEnabled = yt),
      (l.refreshP2PEnablement = Ct),
      (l.initP2PVirtualAddresses = vt),
      (l.isP2PVirtualAddress = St),
      (l.getP2PConnectionId = Rt),
      (l.isP2PConnectionId = Lt),
      (l.handleWorkerP2PChannelOpened = Et),
      (l.handleWorkerP2PChannelClosed = kt));
  },
  98,
);
