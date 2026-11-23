__d(
  "WAWebWorkerClientPayload",
  [
    "WAWebClientPayloadLoginShared",
    "WAWebProtobufsWa6.pb",
    "WAWebRegisterPassiveTasksForConnectWorkerCompatible",
    "encodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      mcc: "000",
      mnc: "000",
      osVersion: "0.1",
      manufacturer: "",
      device: "Desktop",
      osBuildNumber: "0.1",
      localeLanguageIso6391: "en",
      localeCountryIso31661Alpha2: "US",
    };
    async function s(e) {
      var t = babelHelpers.extends(
        {},
        await u(e),
        o("WAWebClientPayloadLoginShared").getLoginClientPayloadFields(),
      );
      return o("encodeProtobuf")
        .encodeProtobuf(o("WAWebProtobufsWa6.pb").ClientPayloadSpec, t)
        .readByteArrayView();
    }
    async function u(t) {
      return {
        passive: t ? t.passive : await c(),
        pull: !0,
        connectType: o("WAWebProtobufsWa6.pb").ClientPayload$ConnectType
          .WIFI_UNKNOWN,
        connectReason: o("WAWebProtobufsWa6.pb").ClientPayload$ConnectReason
          .PUSH,
        userAgent: await o("WAWebClientPayloadLoginShared").getWebUserAgent(e),
        webInfo: {
          webSubPlatform: o(
            "WAWebClientPayloadLoginShared",
          ).getWebSubPlatform(),
        },
      };
    }
    async function c() {
      return (
        await o(
          "WAWebRegisterPassiveTasksForConnectWorkerCompatible",
        ).registerPassiveTasksForConnect(),
        o(
          "WAWebRegisterPassiveTasksForConnectWorkerCompatible",
        ).shouldConnectAsPassiveMode()
      );
    }
    l.getClientPayloadForLogin = s;
  },
  98,
);
