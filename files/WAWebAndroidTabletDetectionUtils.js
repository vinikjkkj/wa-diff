__d(
  "WAWebAndroidTabletDetectionUtils",
  ["WAWebUA"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = /^Linux armv8[l1]$/,
      s = "android",
      u =
        /^Mozilla\/5\.0 \(X11; Linux x86_64\) AppleWebKit\/537\.36 \(KHTML, like Gecko\) Chrome\/\d+(?:\.\d+){3} Safari\/537\.36$/,
      c = /\(X11; Linux x86_64[;)]/,
      d = 6,
      m = 600,
      p = "tablet",
      _ = /googlebook/i,
      f = new Set(["", "k", "mobile", "tablet"]),
      g =
        /\b(?:aft[a-z0-9]*|bntv[a-z0-9]*|kf[a-z0-9]{2,}|mibox[0-9]*|sd4930ur|shield|(?:ags|bah|btv|cmr|dby|jdn|kob|mrx|wgr)[a-z0-9]*[-_][a-z0-9]+)\b/i,
      h =
        /^(?:(?:ws)?t9[5-8]2(?:_[a-z0-9]+)?|c[a-z]?-(?:a1516|t9[5-8]2)-.+|mtk?[59]\d{3}|sbid-.+|ifp\d{4}(?:-.+)?|teachmint.*|lt-ir[a-z0-9]+|logic_lt_[a-z0-9]+|maxhub.*|[a-z]{1,2}\d{2}[a-z]{2}-cs\d{4}[a-z]?-.+|hidb.*|.*a311d2.*|taishan|(?:.*[^a-z])?(?:tv|display|projector)(?:[^a-z].*)?)$/i,
      y = new Set(["amazon", "barnes & noble", "honor", "huawei"]),
      C = [
        "huawei",
        "honor",
        "hmscore",
        "harmonyos",
        "kindle",
        "silk/",
        "nook",
        "android tv",
        "smart-tv",
        "smarttv",
        "googletv",
        "google tv",
        "crkey",
        "bravia",
        "mibox",
        "mobile vr",
        "oculusbrowser",
        "picobrowser",
        "; wv)",
      ];
    function b() {
      var e;
      return {
        clientHintPlatform:
          (e = self.navigator.userAgentData) == null ? void 0 : e.platform,
        maxTouchPoints: self.navigator.maxTouchPoints,
        navigatorPlatform: self.navigator.platform,
        screenSize: self.screen,
      };
    }
    function v() {
      return x() != null;
    }
    function S(e) {
      return !e && x() === "client_hint";
    }
    function R(e, t) {
      return (
        u.test(e) &&
        (t == null ? void 0 : t.clientHintPlatform) === "Linux" &&
        w(t)
      );
    }
    function L(t, n) {
      var r, o;
      return (
        c.test(t) &&
        e.test(
          (r = n == null ? void 0 : n.navigatorPlatform) != null ? r : "",
        ) &&
        ((o = n == null ? void 0 : n.maxTouchPoints) != null ? o : 0) > 0
      );
    }
    function E(e) {
      return e != null && _.test(e);
    }
    function k(e) {
      var t = e == null ? void 0 : e.trim().toLowerCase();
      return t != null && !f.has(t);
    }
    function I(e) {
      return parseInt(e, 10) >= d;
    }
    function T(e) {
      return e != null && Math.min(e.height, e.width) >= m;
    }
    function D(e, t, n) {
      var r,
        o = e.toLowerCase(),
        a = (r = t == null ? void 0 : t.toLowerCase()) != null ? r : "",
        i = C.some(function (e) {
          return o.includes(e);
        });
      return y.has(a) || i || (n != null && (g.test(n) || h.test(n)));
    }
    function x() {
      var e = o("WAWebUA").UA.parser.getDevice(),
        t = o("WAWebUA").UA.parser.getUA();
      return o("WAWebUA").UA.isOculusBrowser || D(t, e.vendor, e.model)
        ? null
        : $(e.model)
          ? "synchronous"
          : P(t, e.type, e.model, b())
            ? "client_hint"
            : null;
    }
    function $(e) {
      return o("WAWebUA").UA.os === s && I(o("WAWebUA").UA.osVersion) && E(e);
    }
    function P(e, t, n, r) {
      var a = self.navigator.userAgentData;
      return (a == null ? void 0 : a.getHighEntropyValues) == null ||
        a.mobile === !0
        ? !1
        : o("WAWebUA").UA.os === s && I(o("WAWebUA").UA.osVersion)
          ? !k(n) && T(r.screenSize) && N(t, e, a.mobile)
          : a.mobile === !1 && (R(e, r) || M(e, r));
    }
    function N(e, t, n) {
      return n === !0 || /\bmobile\b/i.test(t) ? !1 : n === !1 || e === p;
    }
    function M(e, t) {
      return (
        u.test(e) &&
        (t == null ? void 0 : t.clientHintPlatform) === "Android" &&
        T(t.screenSize)
      );
    }
    function w(t) {
      var n, r;
      return (
        e.test(
          (n = t == null ? void 0 : t.navigatorPlatform) != null ? n : "",
        ) &&
        ((r = t == null ? void 0 : t.maxTouchPoints) != null ? r : 0) > 0 &&
        T(t == null ? void 0 : t.screenSize)
      );
    }
    ((l.MINIMUM_TABLET_SCREEN_SIZE = m),
      (l.getWAWebAndroidTabletRuntimeSignals = b),
      (l.isWAWebGooglebookCandidate = v),
      (l.isWAWebGooglebookClientHintResolutionRequired = S),
      (l.isAndroidDesktopModeRuntimeCandidate = R),
      (l.isAndroidDesktopSiteRuntime = L),
      (l.isGooglebookModel = E),
      (l.isResolvedAndroidModel = k),
      (l.isSupportedAndroidVersion = I),
      (l.isTabletScreenSize = T),
      (l.isUnsupportedAndroidDevice = D),
      (l.isTabletClassArmTouchDevice = w));
  },
  98,
);
