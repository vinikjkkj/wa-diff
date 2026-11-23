__d(
  "WAWebWorkerChatSocketPlatformDetails",
  [
    "WACryptoCurve25519",
    "WACryptoCurve25519Dependencies",
    "WALogger",
    "WASocketTransport",
    "WATreasureHunt",
    "WAWebCommonSocketPlatformDetails",
    "WAWebUserPrefsMultiDevice",
    "WAWebWorkerClientPayload",
    "WAWebWorkerWaNoiseInfo",
    "gkx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d =
        r("gkx")("26258") || (r("gkx")("9092") && r("gkx")("28497"))
          ? "wss://web.whatsapp.com/ws/chat"
          : "wss://dev-web.whatsapp.com/ws/chat";
    function m() {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose(["openSocketWithLoop"])),
      );
      function t(e) {
        var t = d,
          n = function () {
            return o("WASocketTransport").openWebSocket(t);
          };
        return (
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "openSocketWithLoop (round ",
                ") connecting to ",
                "",
              ])),
            e,
            t,
          ),
          n()
            .then(function (n) {
              return (
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "openSocketWithLoop (round ",
                      ") to ",
                      " succeeded",
                    ])),
                  e,
                  t,
                ),
                n
              );
            })
            .catch(function (t) {
              throw (
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "openSocketWithLoop (round ",
                      ") failed: ",
                      "",
                    ])),
                  e,
                  t,
                ),
                t
              );
            })
        );
      }
      return o("WATreasureHunt").treasureHunt(t, 3, 15e3, function (e) {
        return void e.close();
      });
    }
    async function p() {
      var e = await o("WAWebUserPrefsMultiDevice").getRoutingInfo(),
        t = e == null ? void 0 : e.edgeRouting,
        n = r("nullthrows")(await o("WAWebWorkerWaNoiseInfo").getWaNoiseInfo());
      return {
        edgeInfo: t,
        getClientPayload: o("WAWebWorkerClientPayload")
          .getClientPayloadForLogin,
        protoHeader: o("WAWebCommonSocketPlatformDetails").WA_WEB_PROTO_HEADER,
        encodeHandshakeHello: o("WAWebCommonSocketPlatformDetails")
          .encodeHandshakeHello,
        decodeServerHello: o("WAWebCommonSocketPlatformDetails")
          .decodeServerHello,
        encodeHandshakeFinish: o("WAWebCommonSocketPlatformDetails")
          .encodeHandshakeFinish,
        processCertificate: o("WAWebCommonSocketPlatformDetails")
          .processCertificate,
        serverStaticKeyIfKnown: o("WAWebCommonSocketPlatformDetails")
          .serverInfoIfKnown,
        staticKeyPair: new (o("WACryptoCurve25519").Curve25519)(
          o("WACryptoCurve25519Dependencies").CURVE25519_SIGNAL_DEPENDENCIES,
          n,
        ),
        openSocket: m,
        curveSignalDependencies: o("WACryptoCurve25519Dependencies")
          .CURVE25519_SIGNAL_DEPENDENCIES,
      };
    }
    l.getChatSocketPlatformDetails = p;
  },
  98,
);
