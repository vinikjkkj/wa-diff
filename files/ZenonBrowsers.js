__d(
  "ZenonBrowsers",
  ["UserAgent", "UserAgentData"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("UserAgent").isBrowser("Chrome");
    }
    function s() {
      return !!navigator.webkitGetUserMedia;
    }
    function u() {
      return (
        r("UserAgent").isBrowser("Edge (Chromium Based)") ||
        r("UserAgent").isBrowser("Edge PWA (Chromium Based)")
      );
    }
    function c() {
      return r("UserAgent").isBrowser("Safari");
    }
    function d() {
      return r("UserAgent").isBrowser("Firefox");
    }
    function m() {
      return r("UserAgent").isBrowser("Opera");
    }
    function p() {
      return r("UserAgent").isBrowser("Mobile Safari");
    }
    function _() {
      return r("UserAgent").isBrowser("Oculus Browser");
    }
    function f() {
      return r("UserAgent").isBrowser("Samsung Browser");
    }
    function g() {
      return p() || r("UserAgent").isPlatform("Android") || f();
    }
    function h() {
      return (
        r("UserAgent").isPlatform("Android") || r("UserAgent").isPlatform("iOS")
      );
    }
    function y() {
      if (d()) {
        var e;
        return (e = r("UserAgentData").browserVersion) != null ? e : 0;
      }
      if (s()) {
        var t = navigator.userAgent.match(/Chrom(e|ium)\/(\d+)\./);
        return t != null ? parseInt(t[2], 10) : 999;
      }
      return 0;
    }
    function C() {
      return (
        r("UserAgent").isBrowser("FBLite") ||
        r("UserAgent").isBrowser("Facebook for Android")
      );
    }
    function b() {
      return d();
    }
    function v() {
      return !_();
    }
    function S() {
      return !_();
    }
    function R() {
      return !p() && !c() && !((s() || e()) && y() < 80) && !(d() && y() < 70);
    }
    function L() {
      return (
        ((s() || e()) && y() >= 77) ||
        r("UserAgent").isBrowser("Firefox >= 70") ||
        r("UserAgent").isBrowser("Safari >= 14.1")
      );
    }
    function E() {
      return !(
        r("UserAgent").isBrowser("Chrome > 105") &&
        r("UserAgent").isBrowser("Chrome < 115")
      );
    }
    function k() {
      return (
        r("UserAgent").isBrowser("Chrome >= 89") ||
        r("UserAgent").isBrowser("Opera >= 75") ||
        r("UserAgent").isBrowser("Edge (Chromium Based) >= 89") ||
        r("UserAgent").isBrowser("Edge PWA (Chromium Based) >= 89")
      );
    }
    function I() {
      var e =
          r("UserAgent").isBrowser("Chrome >= 113") &&
          r("UserAgent").isBrowser("Chrome < 114"),
        t =
          (r("UserAgent").isBrowser("Edge (Chromium Based) >= 113") ||
            r("UserAgent").isBrowser("Edge PWA (Chromium Based) >= 113")) &&
          (r("UserAgent").isBrowser("Edge (Chromium Based) < 114") ||
            r("UserAgent").isBrowser("Edge PWA (Chromium Based) < 114")),
        n =
          r("UserAgent").isBrowser("Safari >= 16") &&
          r("UserAgent").isBrowser("Safari < 17");
      return e || t || n;
    }
    function T() {
      return !(
        r("UserAgent").isBrowser("Chrome <= 113") ||
        r("UserAgent").isBrowser("Edge (Chromium Based) <= 113") ||
        r("UserAgent").isBrowser("Edge PWA (Chromium Based) <= 113")
      );
    }
    ((l.isChrome = e),
      (l.isChromium = s),
      (l.isChromiumBasedEdge = u),
      (l.isDesktopSafari = c),
      (l.isFirefox = d),
      (l.isOpera = m),
      (l.isMobileSafari = p),
      (l.isOculusBrowser = _),
      (l.isSamsung = f),
      (l.isSupportedMobileBrowser = g),
      (l.isMobileDevice = h),
      (l.webrtcVersion = y),
      (l.isFBWebview = C),
      (l.noTransceiverForNegotiations = b),
      (l.supportsMWAVEscalation = v),
      (l.supportsVideoCalls = S),
      (l.supportsRollback = R),
      (l.supportsIceRestart = L),
      (l.supportsPranswer = E),
      (l.isVideoLayersAllocationSupported = k),
      (l.isSctpdataChannelDisabled = I),
      (l.isMidCallSCTPSupported = T));
  },
  98,
);
