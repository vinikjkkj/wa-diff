__d(
  "WAWebAndroidTabletDetectionUtils",
  ["WAWebUA"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = /^Linux armv8[l1]$/,
      s =
        /^Mozilla\/5\.0 \(X11; Linux x86_64\) AppleWebKit\/537\.36 \(KHTML, like Gecko\) Chrome\/\d+(?:\.\d+){3} Safari\/537\.36$/,
      u =
        /^Mozilla\/5\.0 \(X11; CrOS [^)]+\) AppleWebKit\/537\.36 \(KHTML, like Gecko\) Chrome\/\d+(?:\.\d+){3} Safari\/537\.36$/,
      c = /\(X11; Linux x86_64[;)]/,
      d = 6,
      m = 600,
      p = new Set(["", "k", "mobile", "tablet"]),
      _ =
        /\b(?:aft[a-z0-9]*|bntv[a-z0-9]*|kf[a-z0-9]{2,}|mibox[0-9]*|sd4930ur|shield|(?:ags|bah|btv|cmr|dby|jdn|kob|mrx|wgr)[a-z0-9]*[-_][a-z0-9]+)\b/i,
      f =
        /^(?:(?:ws)?t9[5-8]2(?:_[a-z0-9]+)?|c[a-z]?-(?:a1516|t9[5-8]2)-.+|mtk?[59]\d{3}|sbid-.+|ifp\d{4}(?:-.+)?|teachmint.*|lt-ir[a-z0-9]+|logic_lt_[a-z0-9]+|maxhub.*|[a-z]{1,2}\d{2}[a-z]{2}-cs\d{4}[a-z]?-.+|hidb.*|.*a311d2.*|taishan|(?:.*[^a-z])?(?:tv|display|projector)(?:[^a-z].*)?)$/i,
      g = new Set(["amazon", "barnes & noble", "honor", "huawei"]),
      h = [
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
    function y() {
      var e;
      return {
        clientHintPlatform:
          (e = self.navigator.userAgentData) == null ? void 0 : e.platform,
        maxTouchPoints: self.navigator.maxTouchPoints,
        navigatorPlatform: self.navigator.platform,
        screenSize: self.screen,
      };
    }
    function C() {
      return T(o("WAWebUA").UA.parser.getUA(), y());
    }
    function b(e) {
      return !e && C();
    }
    function v(e, t) {
      return (
        s.test(e) &&
        (t == null ? void 0 : t.clientHintPlatform) === "Linux" &&
        D(t)
      );
    }
    function S(t, n) {
      var r, o;
      return (
        c.test(t) &&
        e.test(
          (r = n == null ? void 0 : n.navigatorPlatform) != null ? r : "",
        ) &&
        ((o = n == null ? void 0 : n.maxTouchPoints) != null ? o : 0) > 0
      );
    }
    function R(e, t, n, r) {
      return (
        u.test(e) &&
        t === !1 &&
        (n == null ? void 0 : n.length) === 1 &&
        n[0].toLowerCase() === "desktop" &&
        (r == null ? void 0 : r.clientHintPlatform) === "Android" &&
        k(r.screenSize)
      );
    }
    function L(e) {
      var t = e == null ? void 0 : e.trim().toLowerCase();
      return t != null && !p.has(t);
    }
    function E(e) {
      return parseInt(e, 10) >= d;
    }
    function k(e) {
      return e != null && Math.min(e.height, e.width) >= m;
    }
    function I(e, t, n) {
      var r,
        o = e.toLowerCase(),
        a = (r = t == null ? void 0 : t.toLowerCase()) != null ? r : "",
        i = h.some(function (e) {
          return o.includes(e);
        });
      return g.has(a) || i || (n != null && (_.test(n) || f.test(n)));
    }
    function T(e, t) {
      var n = self.navigator.userAgentData;
      return (
        (n == null ? void 0 : n.getHighEntropyValues) != null &&
        n.mobile === !1 &&
        u.test(e) &&
        t.clientHintPlatform === "Android" &&
        k(t.screenSize)
      );
    }
    function D(t) {
      var n, r;
      return (
        e.test(
          (n = t == null ? void 0 : t.navigatorPlatform) != null ? n : "",
        ) &&
        ((r = t == null ? void 0 : t.maxTouchPoints) != null ? r : 0) > 0 &&
        k(t == null ? void 0 : t.screenSize)
      );
    }
    ((l.MINIMUM_TABLET_SCREEN_SIZE = m),
      (l.getWAWebAndroidTabletRuntimeSignals = y),
      (l.isWAWebGooglebookCandidate = C),
      (l.isWAWebGooglebookClientHintResolutionRequired = b),
      (l.isAndroidDesktopModeRuntimeCandidate = v),
      (l.isAndroidDesktopSiteRuntime = S),
      (l.isGooglebookClientHintRuntime = R),
      (l.isResolvedAndroidModel = L),
      (l.isSupportedAndroidVersion = E),
      (l.isTabletScreenSize = k),
      (l.isUnsupportedAndroidDevice = I),
      (l.isTabletClassArmTouchDevice = D));
  },
  98,
);
