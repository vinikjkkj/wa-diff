__d(
  "MAWChatSocketPlatformDetails",
  [
    "FBLogger",
    "MAWClientPayload",
    "MAWQplProxy",
    "MAWWAComms",
    "Promise",
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
    "asyncToGeneratorRuntime",
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
      f,
      g = "wss://web-chat-e2ee.facebook.com/ws/chat",
      h = "wss://web-chat-e2ee.instagram.com/ws/chat",
      y = 3,
      C = null,
      b = 0,
      v = !0,
      S = r("gkx")("3577") ? h : g,
      R = r("qpl")._(1056839232, "112");
    function L(e) {
      return o("encodeProtobuf")
        .encodeProtobuf(o("WAWa5.pb").HandshakeMessageSpec, { clientHello: e })
        .readByteArrayView();
    }
    function E(e) {
      return o("encodeProtobuf")
        .encodeProtobuf(o("WAWa5.pb").HandshakeMessageSpec, { clientFinish: e })
        .readByteArrayView();
    }
    function k(e) {
      return o("decodeProtobuf").decodeProtobuf(
        o("WAWa5.pb").HandshakeMessageSpec,
        e,
      ).serverHello;
    }
    function I(t) {
      var a = t.certificate,
        i = t.serverStatic;
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "processCertificate start",
          ])),
      );
      var l = o("WAVerifyChainCertificateWA6").verifyChainCertificateWA6(a, i);
      if (!l.success)
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "processCertificate error: " + l.error,
        );
      var s = l.value,
        u = s.intermediate,
        c = s.leaf;
      return (
        c &&
          u &&
          o("WASetCertificateChain")
            .setCertificateChain({
              intermediate: {
                key: u.key,
                notAfter: Number(u.notAfter),
                notBefore: Number(u.notBefore),
              },
              leaf: {
                key: c.key,
                notAfter: Number(c.notAfter),
                notBefore: Number(c.notBefore),
              },
            })
            .catch(function (e) {
              r("FBLogger")("messenger_web")
                .catching(r("getErrorSafe")(e))
                .warn("Error storing certificate chain");
            }),
        (f || (f = n("Promise"))).resolve()
      );
    }
    function T(e) {
      var t = e != null ? e : {},
        n = t.intermediate,
        r = t.leaf;
      return function () {
        return r && n
          ? (o("MAWQplProxy").sendQPLStringAnnotationThroughBridge(
              R,
              "expectedHandshakeType",
              "resume",
            ),
            r.key)
          : (o("MAWQplProxy").sendQPLStringAnnotationThroughBridge(
              R,
              "expectedHandshakeType",
              "full",
            ),
            null);
      };
    }
    function D() {
      o("WALogger").DEV(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose(["openSocketWithLoop"])),
      );
      var e = [],
        t = [];
      return o("WATreasureHunt")
        .treasureHunt(a, y, 15e3, function (e) {
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
      function a(a) {
        function i(n, a) {
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
        var l = new (p || (p = r("URI")))(S).toString(),
          s = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield o("WAGetRoutingInfoApi").getRoutingInfo(),
                t = e.edgeInfo,
                n = null,
                s = "";
              (t && (s = "ED=" + o("WABase64").encodeB64UrlSafe(t)),
                a === 2 &&
                  v &&
                  ((n = "msgr" + r("pageID") + Date.now()),
                  (s += (s ? "&" : "") + "_nc_e2e=messenger_websocket:" + n)),
                o("MAWQplProxy").sendQPLBoolAnnotationThroughBridge(
                  r("qpl")._(1056839232, "112"),
                  "websocket_has_edge_info",
                  !!t,
                ));
              var u = "" + l + (s ? "?" + s : ""),
                c = Date.now();
              return o("WASocketTransport").openWebSocket(
                u,
                function (e) {
                  (i(c, !1),
                    n != null &&
                      o("MAWQplProxy").sendQPLStringAnnotationThroughBridge(
                        r("qpl")._(1056839232, "112"),
                        "ws_1006_request_ids",
                        n,
                      ),
                    P(e, a));
                },
                function (e, t) {
                  o("WAConnectivityReports").onWebSocketCloseEvent(e, t);
                },
                function () {
                  i(c, !0);
                },
              );
            });
            return function () {
              return e.apply(this, arguments);
            };
          })();
        return (
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "openSocketWithLoop (round ",
                ") connecting to ",
                "",
              ])),
            a,
            l,
          ),
          s()
            .then(function (e) {
              return (
                (v = !1),
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "openSocketWithLoop (round ",
                      ") to ",
                      " succeeded",
                    ])),
                  a,
                  l,
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
                    a,
                    e,
                  )
                  .devConsole(e),
                e
              );
            })
        );
      }
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.authKeyPair,
            n = yield o(
              "WAGetInitialChatSocketDetails",
            ).getInitialChatSocketDetails(),
            r =
              n.edgeInfo == null ? null : o("WAHex").bytesToBuffer(n.edgeInfo),
            a = new Uint8Array([87, 65, 6, o("WAWapDict").DICT_VERSION]);
          return {
            curveSignalDependencies: o("WACryptoCurve25519Dependencies")
              .CURVE25519_SIGNAL_DEPENDENCIES,
            decodeServerHello: k,
            edgeInfo: r,
            encodeHandshakeFinish: E,
            encodeHandshakeHello: L,
            getClientPayload: o("MAWClientPayload").getClientPayload,
            openSocket: D,
            processCertificate: I,
            protoHeader: a,
            serverStaticKeyIfKnown: T(n.certificateChain),
            staticKeyPair: new (o("WACryptoCurve25519").Curve25519)(
              o("WACryptoCurve25519Dependencies")
                .CURVE25519_SIGNAL_DEPENDENCIES,
              t,
            ),
          };
        })),
        $.apply(this, arguments)
      );
    }
    function P(e, t) {
      var n = (_ || (_ = r("performanceAbsoluteNow")))(),
        a = C == null || n - C > 100;
      (a && (b = 0),
        b++,
        (C = n),
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
          b,
        ));
      var i = y;
      b > i - 1 &&
        o("MAWWAComms").rejectCommsSetup(
          r("err")(
            "WA Websocket repeatedly closed: " + e.code + " " + e.reason,
          ),
        );
    }
    l.getChatSocketPlatformDetails = x;
  },
  98,
);
