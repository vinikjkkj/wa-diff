__d(
  "PolarisUA",
  [
    "ExecutionEnvironment",
    "InstagramUserAgent",
    "UserAgent",
    "UserAgentDataTyped",
    "justknobx",
    "once",
    "polarisGetAppPlatform",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u() {
      var e = r("UserAgentDataTyped").browserFullVersion,
        t = r("UserAgentDataTyped").browserName;
      return e == null ? t : t + " " + e;
    }
    function c() {
      return r("InstagramUserAgent").is_mobile;
    }
    function d() {
      return !c();
    }
    var m = (s = r("once"))(function () {
      if (
        !(e || (e = r("ExecutionEnvironment"))).canUseDOM ||
        p() ||
        navigator.maxTouchPoints === 0 ||
        /Windows|CrOS|Macintosh|Android TV|BRAVIA|Android Auto/.test(
          navigator.userAgent,
        )
      )
        return !1;
      if (/Mobi/.test(navigator.userAgent)) {
        var t = Math.min(window.screen.width, window.screen.height);
        return t >= 600;
      }
      return !0;
    });
    function p() {
      if (r("InstagramUserAgent").is_ipad) return !0;
      if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
        var t = navigator.userAgent,
          n =
            t.includes("Macintosh") &&
            t.includes("Safari") &&
            !t.includes("Chrome") &&
            !t.includes("Edge");
        return n && navigator.maxTouchPoints > 1;
      }
      return !1;
    }
    function _() {
      return r("justknobx")._("3052")
        ? r("InstagramUserAgent").is_android_tablet || m()
        : !1;
    }
    function f() {
      return p() || _();
    }
    function g() {
      return r("InstagramUserAgent").is_ig_carbon;
    }
    var h = s(function () {
        return C() && R();
      }),
      y = s(function () {
        return (e || (e = r("ExecutionEnvironment"))).canUseDOM
          ? r("InstagramUserAgent").user_agent.includes("Windows NT") &&
              window.matchMedia("(display-mode: standalone)").matches
          : !1;
      }),
      C = s(function () {
        return (e || (e = r("ExecutionEnvironment"))).canUseDOM
          ? window.matchMedia("(display-mode: standalone)").matches || y()
          : !1;
      }),
      b = s(function () {
        return d() && C();
      });
    function v() {
      return r("InstagramUserAgent").is_edge;
    }
    function S() {
      return r("InstagramUserAgent").is_edge_chromium_based;
    }
    function R() {
      return r("InstagramUserAgent").is_oculus_browser;
    }
    function L() {
      return r("InstagramUserAgent").is_opera;
    }
    function E() {
      return r("UserAgent").isBrowser("Opera < 50");
    }
    function k() {
      return r("InstagramUserAgent").is_ig_webview;
    }
    function I() {
      return r("InstagramUserAgent").is_barcelona_webview;
    }
    function T() {
      return r("InstagramUserAgent").is_twitter_webview;
    }
    function D() {
      return r("InstagramUserAgent").is_webview;
    }
    function x() {
      return r("InstagramUserAgent").is_in_app_browser;
    }
    function $() {
      return c() && o("polarisGetAppPlatform").isAndroid()
        ? r("InstagramUserAgent").user_agent.includes("Pinterest") ||
            (r("InstagramUserAgent").user_agent.includes("Snapchat") &&
              !r("justknobx")._("2928"))
        : c() && o("polarisGetAppPlatform").isIOS()
          ? r("InstagramUserAgent").user_agent.includes("Pinterest")
          : !1;
    }
    function P() {
      return r("InstagramUserAgent").is_uc_browser;
    }
    function N() {
      return r("UserAgent").isBrowser("UCBrowser < 12");
    }
    function M() {
      return r("InstagramUserAgent").is_chrome;
    }
    function w() {
      return r("InstagramUserAgent").is_firefox;
    }
    function A() {
      return r("InstagramUserAgent").is_safari;
    }
    var F = s(function () {
      var t =
        "(touch-enabled),(-webkit-touch-enabled),(-moz-touch-enabled),(-o-touch-enabled),(-ms-touch-enabled),(heartz)";
      return "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)
        ? !0
        : (e || (e = r("ExecutionEnvironment"))).canUseDOM
          ? window.matchMedia(t).matches
          : !1;
    });
    function O() {
      var e;
      return !!(
        r("UserAgent").isPlatform("Android") &&
        r("UserAgent").isBrowser("Chrome") &&
        ((e = r("UserAgentDataTyped").browserFullVersion) == null
          ? void 0
          : e.startsWith("66.0.")) === !0
      );
    }
    function B() {
      return (
        r("UserAgent").isPlatform("Android < 6") ||
        r("UserAgent").isPlatform("iOS < 11")
      );
    }
    function W() {
      return r("InstagramUserAgent").is_vapid_eligible;
    }
    function q() {
      return r("InstagramUserAgent").is_mobile_safari;
    }
    function U() {
      return r("InstagramUserAgent").is_supported_browser;
    }
    function V() {
      return r("InstagramUserAgent").is_macos;
    }
    ((l.getBrowserString = u),
      (l.isMobile = c),
      (l.isDesktop = d),
      (l.isIpad = p),
      (l.isAndroidTablet = _),
      (l.isTablet = f),
      (l.isIgCarbon = g),
      (l.isOculusPWA = h),
      (l.isWindowsPWA = y),
      (l.isPWA = C),
      (l.isDesktopPWA = b),
      (l.isEdge = v),
      (l.isEdgeChromiumBased = S),
      (l.isOculusBrowser = R),
      (l.isOpera = L),
      (l.isOperaWithUnsupportedFullscreen = E),
      (l.isIGWebview = k),
      (l.isBarcelonaWebview = I),
      (l.isTwitterWebview = T),
      (l.isWebview = D),
      (l.isInAppBrowser = x),
      (l.isBrokenDeeplinkingInAppBrowser = $),
      (l.isUCBrowser = P),
      (l.isUCBrowserWithUnsupportedFullscreen = N),
      (l.isChrome = M),
      (l.isFirefox = w),
      (l.isSafari = A),
      (l.isTouchDevice = F),
      (l.isChromeWithBuggyInputFile = O),
      (l.isBrowserWithFlexboxRelativeHeightIssue = B),
      (l.isVapidEligible = W),
      (l.isMobileSafari = q),
      (l.isSupportedBrowser = U),
      (l.isMacOS = V));
  },
  98,
);
