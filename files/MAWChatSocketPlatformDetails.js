__d(
  "MAWChatSocketPlatformDetails",
  [
    "FBLogger",
    "MAWClientPayload",
    "MAWQplProxy",
    "MAWWAComms",
    "URI",
    "WABase64",
    "WAConnectivityReports",
    "WACryptoCurve25519",
    "WACryptoCurve25519Dependencies",
    "WAErrors",
    "WAGetInitialChatSocketDetails",
    "WAGetRoutingInfoApi",
    "WAHex",
    "WALogger",
    "WASetCertificateChain",
    "WASocketTransport",
    "WATreasureHunt",
    "WAVerifyChainCertificateWA6",
    "WAWa5.pb",
    "WAWapDict",
    "decodeProtobuf",
    "encodeProtobuf",
    "err",
    "getErrorSafe",
    "gkx",
    "pageID",
    "performanceAbsoluteNow",
    "qpl",
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
      f = "wss://web-chat-e2ee.facebook.com/ws/chat",
      g = "wss://web-chat-e2ee.instagram.com/ws/chat",
      h = 3,
      y = null,
      C = 0,
      b = !0,
      v = r("gkx")("3577") ? g : f,
      S = r("qpl")._(1056839232, "112");
    function R(e) {
      return o("encodeProtobuf")
        .encodeProtobuf(o("WAWa5.pb").HandshakeMessageSpec, { clientHello: e })
        .readByteArrayView();
    }
    function L(e) {
      return o("encodeProtobuf")
        .encodeProtobuf(o("WAWa5.pb").HandshakeMessageSpec, { clientFinish: e })
        .readByteArrayView();
    }
    function E(e) {
      return o("decodeProtobuf").decodeProtobuf(
        o("WAWa5.pb").HandshakeMessageSpec,
        e,
      ).serverHello;
    }
    function k(t) {
      var n = t.certificate,
        a = t.serverStatic;
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "processCertificate start",
          ])),
      );
      var i = o("WAVerifyChainCertificateWA6").verifyChainCertificateWA6(n, a);
      if (!i.success)
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "processCertificate error: " + i.error,
        );
      var l = i.value,
        s = l.intermediate,
        u = l.leaf;
      return (
        u &&
          s &&
          o("WASetCertificateChain")
            .setCertificateChain({
              intermediate: {
                key: s.key,
                notAfter: Number(s.notAfter),
                notBefore: Number(s.notBefore),
              },
              leaf: {
                key: u.key,
                notAfter: Number(u.notAfter),
                notBefore: Number(u.notBefore),
              },
            })
            .catch(function (e) {
              r("FBLogger")("messenger_web")
                .catching(r("getErrorSafe")(e))
                .warn("Error storing certificate chain");
            }),
        Promise.resolve()
      );
    }
    function I(e) {
      var t = e != null ? e : {},
        n = t.intermediate,
        r = t.leaf;
      return function () {
        return r && n
          ? (o("MAWQplProxy").sendQPLStringAnnotationThroughBridge(
              S,
              "expectedHandshakeType",
              "resume",
            ),
            r.key)
          : (o("MAWQplProxy").sendQPLStringAnnotationThroughBridge(
              S,
              "expectedHandshakeType",
              "full",
            ),
            null);
      };
    }
    function T() {
      o("WALogger").DEV(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose(["openSocketWithLoop"])),
      );
      var e = [],
        t = [];
      return o("WATreasureHunt")
        .treasureHunt(n, h, 15e3, function (e) {
          (o("MAWQplProxy").sendQplPointThroughBridge(
            r("qpl")._(1056839232, "112"),
            "wai_connection_close_socket",
          ),
            e.close());
        })
        .catch(function (e) {
          throw navigator.onLine
            ? e
            : new (o("WAErrors").Offline)(
                "offline when openSocketWithLoop treasureHunt failed",
              );
        });
      function n(n) {
        function a(n, a) {
          (e.push(Date.now() - n),
            t.push(a),
            o("MAWQplProxy").sendQPLStringAnnotationThroughBridge(
              r("qpl")._(1056839232, "112"),
              "ws_socket_open_duration",
              e.join("-"),
            ),
            o("MAWQplProxy").sendQPLStringAnnotationThroughBridge(
              r("qpl")._(1056839232, "112"),
              "ws_socket_open_status",
              t.join("-"),
            ));
        }
        var i = new (p || (p = r("URI")))(v).toString(),
          l = async function () {
            var e = await o("WAGetRoutingInfoApi").getRoutingInfo(),
              t = e.edgeInfo,
              l = null,
              s = "";
            (t && (s = "ED=" + o("WABase64").encodeB64UrlSafe(t)),
              n === 2 &&
                b &&
                ((l = "msgr" + r("pageID") + Date.now()),
                (s += (s ? "&" : "") + "_nc_e2e=messenger_websocket:" + l)),
              o("MAWQplProxy").sendQPLBoolAnnotationThroughBridge(
                r("qpl")._(1056839232, "112"),
                "websocket_has_edge_info",
                !!t,
              ));
            var u = "" + i + (s ? "?" + s : ""),
              c = Date.now();
            return o("WASocketTransport").openWebSocket(
              u,
              function (e) {
                (a(c, !1),
                  l != null &&
                    o("MAWQplProxy").sendQPLStringAnnotationThroughBridge(
                      r("qpl")._(1056839232, "112"),
                      "ws_1006_request_ids",
                      l,
                    ),
                  x(e, n));
              },
              function (e, t) {
                o("WAConnectivityReports").onWebSocketCloseEvent(e, t);
              },
              function () {
                a(c, !0);
              },
            );
          };
        return (
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "openSocketWithLoop (round ",
                ") connecting to ",
                "",
              ])),
            n,
            i,
          ),
          l()
            .then(function (e) {
              return (
                (b = !1),
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "openSocketWithLoop (round ",
                      ") to ",
                      " succeeded",
                    ])),
                  n,
                  i,
                ),
                e
              );
            })
            .catch(function (e) {
              throw (
                o("WALogger")
                  .WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "openSocketWithLoop (round ",
                        ") failed: ",
                        "",
                      ])),
                    n,
                    e,
                  )
                  .devConsole(e),
                e
              );
            })
        );
      }
    }
    async function D(e) {
      var t = e.authKeyPair,
        n = await o(
          "WAGetInitialChatSocketDetails",
        ).getInitialChatSocketDetails(),
        r = n.edgeInfo == null ? null : o("WAHex").bytesToBuffer(n.edgeInfo),
        a = new Uint8Array([87, 65, 6, o("WAWapDict").DICT_VERSION]);
      return {
        curveSignalDependencies: o("WACryptoCurve25519Dependencies")
          .CURVE25519_SIGNAL_DEPENDENCIES,
        decodeServerHello: E,
        edgeInfo: r,
        encodeHandshakeFinish: L,
        encodeHandshakeHello: R,
        getClientPayload: o("MAWClientPayload").getClientPayload,
        openSocket: T,
        processCertificate: k,
        protoHeader: a,
        serverStaticKeyIfKnown: I(n.certificateChain),
        staticKeyPair: new (o("WACryptoCurve25519").Curve25519)(
          o("WACryptoCurve25519Dependencies").CURVE25519_SIGNAL_DEPENDENCIES,
          t,
        ),
      };
    }
    function x(e, t) {
      var n = (_ || (_ = r("performanceAbsoluteNow")))(),
        a = y == null || n - y > 100;
      (a && (C = 0),
        C++,
        (y = n),
        o("WALogger").DEV(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "Immediate socket closure: (round ",
              ") closed: ",
              " ",
              "",
            ])),
          t,
          e.code,
          e.reason,
        ),
        o("MAWQplProxy").sendQPLIntAnnotationThroughBridge(
          r("qpl")._(1056839232, "112"),
          "socket_immediate_closure_count",
          C,
        ));
      var i = h;
      C > i - 1 &&
        o("MAWWAComms").rejectCommsSetup(
          r("err")(
            "WA Websocket repeatedly closed: " + e.code + " " + e.reason,
          ),
        );
    }
    l.getChatSocketPlatformDetails = D;
  },
  98,
);
