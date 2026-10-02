__d(
  "WAWebPlatformEstimate",
  [
    "WAWebFPUtils",
    "WAWebIdentityFunction",
    "WAWebWamEnumBrowserEngineName",
    "WAWebWamEnumPlatformName",
    "countWhere",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e, t, n, a, i, l, s;
      if (
        o("WAWebFPUtils").DETECTED_BROWSER_ENGINE !==
        o("WAWebWamEnumBrowserEngineName").BROWSER_ENGINE_NAME.BLINK
      )
        return o("WAWebWamEnumPlatformName").PLATFORM_NAME.UNKNOWN;
      var u = "getVideoPlaybackQuality" in HTMLVideoElement.prototype,
        c = (e = CSS) == null ? void 0 : e.supports("color-scheme: initial"),
        d = (t = CSS) == null ? void 0 : t.supports("appearance: initial"),
        m = "DisplayNames" in Intl,
        p = (n = CSS) == null ? void 0 : n.supports("aspect-ratio: initial"),
        _ =
          (a = CSS) == null
            ? void 0
            : a.supports("border-end-end-radius: initial"),
        f = "randomUUID" in crypto,
        g = navigator,
        h =
          "downlinkMax" in
          (((i = g.connection) == null ? void 0 : i.prototype) || {}),
        y = "setAppBadge" in Navigator.prototype,
        C = function (t) {
          return t in window;
        },
        b = function (t, n) {
          return t ? n : !1;
        },
        v =
          ((l = {}),
          (l[o("WAWebFPUtils").Platforms.ANDROID] = [
            b(p, C("BarcodeDetector")),
            b(d, C("ContentIndex")),
            b(u, C("ContactsManager")),
            h,
            b(f, !C("EyeDropper")),
            b(m, !C("FileSystemWritableFileStream")),
            b(_, !(C("HID") && C("HIDDevice"))),
            b(_, !(C("Serial") && C("SerialPort"))),
            !C("SharedWorker"),
            C("ontouchstart") && C("TouchEvent"),
            b(c, !y),
          ]),
          (l[o("WAWebFPUtils").Platforms.CHROME_OS] = [
            b(p, C("BarcodeDetector")),
            b(d, !C("ContentIndex")),
            b(u, !C("ContactsManager")),
            h,
            b(f, C("EyeDropper")),
            b(m, C("FileSystemWritableFileStream")),
            b(_, C("HID") && C("HIDDevice")),
            b(_, C("Serial") && C("SerialPort")),
            C("SharedWorker"),
            b(c, !y),
          ]),
          (l[o("WAWebFPUtils").Platforms.WINDOWS] = [
            b(p, !C("BarcodeDetector")),
            b(d, !C("ContentIndex")),
            b(u, !C("ContactsManager")),
            !h,
            b(f, C("EyeDropper")),
            b(m, C("FileSystemWritableFileStream")),
            b(_, C("HID") && C("HIDDevice")),
            b(_, C("Serial") && C("SerialPort")),
            C("SharedWorker"),
            b(c, y),
          ]),
          (l[o("WAWebFPUtils").Platforms.MAC] = [
            b(p, C("BarcodeDetector")),
            b(d, !C("ContentIndex")),
            b(u, !C("ContactsManager")),
            !h,
            b(f, C("EyeDropper")),
            b(m, C("FileSystemWritableFileStream")),
            b(_, C("HID") && C("HIDDevice")),
            b(_, C("Serial") && C("SerialPort")),
            C("SharedWorker"),
            !(C("ontouchstart") && C("TouchEvent")),
            b(c, y),
          ]),
          (l[o("WAWebFPUtils").Platforms.LINUX] = [
            b(p, !C("BarcodeDetector")),
            b(d, !C("ContentIndex")),
            b(u, !C("ContactsManager")),
            !h,
            b(f, C("EyeDropper")),
            b(m, C("FileSystemWritableFileStream")),
            b(_, C("HID") && C("HIDDevice")),
            b(_, C("Serial") && C("SerialPort")),
            C("SharedWorker"),
            !(C("ontouchstart") && C("TouchEvent")),
            b(c, !y),
          ]),
          (l[o("WAWebFPUtils").Platforms.UNKNOWN] = [!1]),
          l),
        S = Object.keys(v).reduce(function (e, t) {
          var n,
            a =
              v[
                (n = o("WAWebFPUtils").Platforms.cast(t)) != null
                  ? n
                  : o("WAWebFPUtils").Platforms.UNKNOWN
              ],
            i = +(
              r("countWhere")(a, o("WAWebIdentityFunction").identityFunction) /
              a.length
            ).toFixed(2);
          return ((e[t] = i), e);
        }, {}),
        R = Object.keys(S).reduce(function (e, t) {
          return S[e] > S[t] ? e : t;
        });
      return o("WAWebFPUtils").castPlatformNameToWamEnum(
        (s = o("WAWebFPUtils").Platforms.cast(R)) != null
          ? s
          : o("WAWebFPUtils").Platforms.UNKNOWN,
      );
    }
    l.default = e;
  },
  98,
);
