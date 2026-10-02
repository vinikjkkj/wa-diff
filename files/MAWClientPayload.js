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
    "asyncToGeneratorRuntime",
    "encodeProtobuf",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAGlobals").getMyDeviceJid(),
            t = o("WAJids").extractDeviceIDParts(e),
            n = t.deviceID,
            r = t.userId,
            a = babelHelpers.extends({}, yield m(), {
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
        })),
        u.apply(this, arguments)
      );
    }
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
          var n = yield o("WADanglingQueue").isDanglingQueueEmpty();
          return !n;
        })),
        d.apply(this, arguments)
      );
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return {
            connectReason:
              o("WAWa5.pb").ClientPayload$ConnectReason.USER_ACTIVATED,
            connectType: o("WAWa5.pb").ClientPayload$ConnectType.WIFI_UNKNOWN,
            passive: yield c(),
            pull: !0,
            userAgent: _(),
          };
        })),
        p.apply(this, arguments)
      );
    }
    function _() {
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
