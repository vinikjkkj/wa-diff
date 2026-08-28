__d(
  "RTWebIncomingRingConfiguration",
  [
    "MWSCastingCenterUtils",
    "OCCastingZenonUtils",
    "UserAgent",
    "ZenonAppProvider",
    "ZenonRTWebBrowserFeatureSupport",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
        return function () {
          return r("UserAgent").isBrowser(t) && (n == null || n);
        };
      },
      s = [
        e("Chrome >= 77"),
        e("Edge (Chromium Based) >= 79"),
        e("Edge PWA (Chromium Based) >= 79"),
        e("Opera >= 67"),
        e("Firefox >= 70"),
        e("Safari >= 16", !0),
        e("Oculus Browser >= 7", r("gkx")("24228")),
        o("OCCastingZenonUtils").isBrowserSupportedForMobileWebCasting,
        o("MWSCastingCenterUtils").isBrowserSupportedForMobileManagedCasting,
      ];
    (o("ZenonAppProvider").isMetaAI() ||
      o("ZenonAppProvider").isMDCApp() ||
      o("ZenonAppProvider").isWidgetLiveChatApp() ||
      o("ZenonAppProvider").isInternApp()) &&
      (s.push(e("Mobile Safari >= 16")),
      s.push(e("Chrome for iOS >= 130")),
      s.push(e("Facebook for iOS >= 400")),
      s.push(e("Facebook for Android")));
    var u = s.some(function (e) {
        return e();
      }),
      c = [].concat(s);
    o("ZenonAppProvider").isMAISAVoice() &&
      (c.push(function () {
        return r("UserAgent").isPlatform("iOS");
      }),
      c.push(function () {
        return r("UserAgent").isPlatform("Android");
      }));
    var d = c.some(function (e) {
      return e();
    });
    function m() {
      return s.some(function (e) {
        return e();
      });
    }
    function p() {
      return u;
    }
    function _() {
      return d;
    }
    function f() {
      return (
        r("gkx")("23430") &&
        o("ZenonRTWebBrowserFeatureSupport").isInsertableStreamsSupported()
      );
    }
    ((l.isSupportedClient_TEST_ONLY = m),
      (l.isSupportedClient = p),
      (l.isSupportedOutboundClient = _),
      (l.isE2EESupportedClient = f));
  },
  98,
);
