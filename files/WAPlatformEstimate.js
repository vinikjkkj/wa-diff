__d(
  "WAPlatformEstimate",
  [
    "WAFPUtils",
    "WAWebWamEnumBrowserEngineName",
    "WAWebWamEnumPlatformName",
    "countWhere",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e, t, n, a, i, l, s;
      if (
        o("WAFPUtils").DETECTED_BROWSER_ENGINE !==
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
        g =
          "downlinkMax" in
          (((i = navigator.connection) == null ? void 0 : i.prototype) || {}),
        h = "setAppBadge" in Navigator.prototype,
        y = function (t) {
          return t in window;
        },
        C = function (t, n) {
          return t ? n : !1;
        },
        b =
          ((l = {}),
          (l[o("WAFPUtils").Platforms.ANDROID] = [
            C(p, y("BarcodeDetector")),
            C(d, y("ContentIndex")),
            C(u, y("ContactsManager")),
            g,
            C(f, !y("EyeDropper")),
            C(m, !y("FileSystemWritableFileStream")),
            C(_, !(y("HID") && y("HIDDevice"))),
            C(_, !(y("Serial") && y("SerialPort"))),
            !y("SharedWorker"),
            y("ontouchstart") && y("TouchEvent"),
            C(c, !h),
          ]),
          (l[o("WAFPUtils").Platforms.CHROME_OS] = [
            C(p, y("BarcodeDetector")),
            C(d, !y("ContentIndex")),
            C(u, !y("ContactsManager")),
            g,
            C(f, y("EyeDropper")),
            C(m, y("FileSystemWritableFileStream")),
            C(_, y("HID") && y("HIDDevice")),
            C(_, y("Serial") && y("SerialPort")),
            y("SharedWorker"),
            C(c, !h),
          ]),
          (l[o("WAFPUtils").Platforms.WINDOWS] = [
            C(p, !y("BarcodeDetector")),
            C(d, !y("ContentIndex")),
            C(u, !y("ContactsManager")),
            !g,
            C(f, y("EyeDropper")),
            C(m, y("FileSystemWritableFileStream")),
            C(_, y("HID") && y("HIDDevice")),
            C(_, y("Serial") && y("SerialPort")),
            y("SharedWorker"),
            C(c, h),
          ]),
          (l[o("WAFPUtils").Platforms.MAC] = [
            C(p, y("BarcodeDetector")),
            C(d, !y("ContentIndex")),
            C(u, !y("ContactsManager")),
            !g,
            C(f, y("EyeDropper")),
            C(m, y("FileSystemWritableFileStream")),
            C(_, y("HID") && y("HIDDevice")),
            C(_, y("Serial") && y("SerialPort")),
            y("SharedWorker"),
            !(y("ontouchstart") && y("TouchEvent")),
            C(c, h),
          ]),
          (l[o("WAFPUtils").Platforms.LINUX] = [
            C(p, !y("BarcodeDetector")),
            C(d, !y("ContentIndex")),
            C(u, !y("ContactsManager")),
            !g,
            C(f, y("EyeDropper")),
            C(m, y("FileSystemWritableFileStream")),
            C(_, y("HID") && y("HIDDevice")),
            C(_, y("Serial") && y("SerialPort")),
            y("SharedWorker"),
            !(y("ontouchstart") && y("TouchEvent")),
            C(c, !h),
          ]),
          (l[o("WAFPUtils").Platforms.UNKNOWN] = [!1]),
          l),
        v = Object.keys(b).reduce(function (e, t) {
          var n,
            a =
              b[
                (n = o("WAFPUtils").Platforms.cast(t)) != null
                  ? n
                  : o("WAFPUtils").Platforms.UNKNOWN
              ],
            i = +(
              r("countWhere")(a, function (e) {
                return e;
              }) / a.length
            ).toFixed(2);
          return ((e[t] = i), e);
        }, {}),
        S = Object.keys(v).reduce(function (e, t) {
          return v[e] > v[t] ? e : t;
        });
      return o("WAFPUtils").castPlatformNameToWamEnum(
        (s = o("WAFPUtils").Platforms.cast(S)) != null
          ? s
          : o("WAFPUtils").Platforms.UNKNOWN,
      );
    }
    l.default = e;
  },
  98,
);
