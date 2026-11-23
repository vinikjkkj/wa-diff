__d(
  "MAWClientPayload",
  [
    "MAWAppVersion",
    "MAWDeviceInfo",
    "MAWFbCat",
    "WAArrayBufferUtils",
    "WADanglingQueue",
    "WAGlobals",
    "WAJids",
    "WALogger",
    "WALongInt",
    "WAWa5.pb",
    "encodeProtobuf",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s() {
      var e = o("WAGlobals").getMyDeviceJid(),
        t = o("WAJids").extractDeviceIDParts(e),
        n = t.deviceID,
        r = t.userId,
        a = babelHelpers.extends({}, await c(), {
          device: n,
          fbCat: o("MAWFbCat").getFbCat(),
          fbUserAgent: o("WAArrayBufferUtils").stringToArrayBuffer(
            navigator.userAgent,
          ),
          product: o("WAWa5.pb").ClientPayload$Product.MESSENGER,
          username: o("WALongInt").decimalStringToLongInt(r),
        });
      return o("encodeProtobuf")
        .encodeProtobuf(o("WAWa5.pb").ClientPayloadSpec, a)
        .readByteArrayView();
    }
    async function u() {
      if (!o("WAGlobals").getConfig().waDanglingQueue())
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Passive mode is not active",
              ])),
          ),
          !1
        );
      var t = o("WAGlobals").getWaOneQueue();
      if (t && !t.isPendingAcksEmpty()) return !0;
      var n = await o("WADanglingQueue").isDanglingQueueEmpty();
      return !n;
    }
    async function c() {
      return {
        connectReason: o("WAWa5.pb").ClientPayload$ConnectReason.USER_ACTIVATED,
        connectType: o("WAWa5.pb").ClientPayload$ConnectType.WIFI_UNKNOWN,
        passive: await u(),
        pull: !0,
        userAgent: d(),
      };
    }
    function d() {
      var e = o("MAWDeviceInfo").deviceInfo.get(),
        t = o("MAWAppVersion").getAppVersionParts();
      return {
        appVersion: t,
        device: e.device,
        localeCountryIso31661Alpha2: e.lc,
        localeLanguageIso6391: e.lg,
        manufacturer: e.manufacturer,
        mcc: e.mcc,
        mnc: e.mnc,
        osBuildNumber: e.osBuild,
        osVersion: e.osVersion,
        platform: r("gkx")("23941")
          ? o("WAWa5.pb").ClientPayload$UserAgent$Platform.WEB
          : o("WAWa5.pb").ClientPayload$UserAgent$Platform.BLUE_WEB,
        releaseChannel:
          o("WAWa5.pb").ClientPayload$UserAgent$ReleaseChannel.RELEASE,
      };
    }
    l.getClientPayload = s;
  },
  98,
);
