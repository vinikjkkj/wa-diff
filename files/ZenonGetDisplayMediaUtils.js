__d(
  "ZenonGetDisplayMediaUtils",
  ["Promise", "UserAgent", "ZenonMediaActionLogger", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = /\{\s*\[native code\]\s*\}/,
      u = "GetDisplayMedia";
    function c() {
      return (
        r("UserAgent").isBrowser("Edge >= 17") ||
        r("UserAgent").isBrowser("Firefox >= 33") ||
        r("UserAgent").isBrowser("Opera >= 60") ||
        r("UserAgent").isBrowser("Chrome") ||
        r("UserAgent").isBrowser("Edge (Chromium Based)") ||
        r("UserAgent").isBrowser("Edge PWA (Chromium Based)") ||
        r("UserAgent").isBrowser("Safari >= 13")
      );
    }
    function d() {
      var e,
        t =
          (e = navigator) == null || (e = e.mediaDevices) == null
            ? void 0
            : e.getDisplayMedia;
      return typeof t == "function" && s.test(t.toString());
    }
    function m(t) {
      if (!c()) {
        var o = r("err")("SCREEN_SHARING_NOT_SUPPORTED");
        return (
          r("ZenonMediaActionLogger").logErrorToFbLogger(
            "ZenonGetDisplayMediaUtils: Screen sharing not supported",
            u,
            o,
            "warn",
          ),
          (e || (e = n("Promise"))).reject(o)
        );
      }
      var a = navigator.mediaDevices;
      if (a == null || typeof a.getDisplayMedia != "function") {
        var i = r("err")("GET_DISPLAY_MEDIA_NOT_FOUND");
        return (
          r("ZenonMediaActionLogger").logErrorToFbLogger(
            "ZenonGetDisplayMediaUtils: Display media not found",
            u,
            i,
            "warn",
          ),
          (e || (e = n("Promise"))).reject(i)
        );
      }
      return a.getDisplayMedia(t).catch(function (e) {
        throw (
          r("ZenonMediaActionLogger").logErrorToFbLogger(
            "ZenonGetDisplayMediaUtils: Error while getting display media",
            u,
            e,
            "warn",
          ),
          e
        );
      });
    }
    function p() {
      return d();
    }
    ((l.getUserScreenMedia = m), (l.isNativeScreenSharingSupported = p));
  },
  98,
);
