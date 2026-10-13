__d(
  "isWAWebFeatureDetectionAndroidTablet",
  ["WAPromiseTimeout", "WAWebUA", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = /^Linux armv8[l1]$/,
      s = "android",
      u = 3,
      c =
        /^Mozilla\/5\.0 \(X11; Linux x86_64\) AppleWebKit\/537\.36 \(KHTML, like Gecko\) Chrome\/\d+(?:\.\d+){3} Safari\/537\.36$/,
      d = /\(X11; Linux x86_64[;)]/,
      m = 500,
      p = 6,
      _ = 600,
      f = [_, 720, 840],
      g = "tablet",
      h =
        /^(?:pixel tablet|sm-(?:t|x)\d+[a-z]*|lenovo tb[-_a-z0-9]*|23043rp34g|opd\d+|pa2473|(?:nokia|hmd) t\d+|moto tab\b.*|8491x|zte k\d+|asus_p\w+|b\d+-a\d+|sgp\d+|(?:lg-)?v(?:4|5|7|9)\d{2}|(?:lm-)?t\d{3})$/i,
      y = new Set([
        "automotive",
        "desktop",
        "mobile",
        "tablet",
        "tv",
        "watch",
        "wearable",
        "xr",
      ]),
      C = new Set(["", "k", "mobile", "tablet"]),
      b =
        /\b(?:aft[a-z0-9]*|bntv[a-z0-9]*|kf[a-z0-9]{2,}|mibox[0-9]*|sd4930ur|shield|(?:agm|ags|bah|btv|cmr|dby|eln|hey|jdn|kob|mrx|wgr)[a-z0-9]*[-_][a-z0-9]+)\b/i,
      v = new Set(["amazon", "barnes & noble", "honor", "huawei"]),
      S = [
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
      ],
      R,
      L,
      E = !1;
    function k(e, t, n, r, o) {
      return I(e, t, n, r, o) != null;
    }
    function I(e, t, n, r, a) {
      var i = o("WAWebUA").parseUA(e),
        l = i.os === s && ie(i.osVersion),
        u = X(e, n, r, a);
      if (!l && !u) return null;
      var c = i.parser.getDevice();
      return q(
        c.type,
        i.isOculusBrowser,
        i.parser.getUA(),
        c.vendor,
        c.model,
        t,
        n,
        r,
        a,
        u,
      );
    }
    function T() {
      return D() != null;
    }
    function D() {
      var e;
      return I(
        o("WAWebUA").UA.parser.getUA(),
        L,
        (e = self.navigator.userAgentData) == null ? void 0 : e.mobile,
        R,
        Q(),
      );
    }
    function x() {
      return $(o("WAWebUA").UA.parser.getUA(), Q());
    }
    function $(e, t) {
      return o("WAWebUA").parseUA(e).os === s || Z(e, t);
    }
    function P() {
      return N(self.screen);
    }
    function N(e) {
      var t = e == null ? NaN : Math.min(e.height, e.width);
      return Number.isNaN(t) || t <= 0
        ? null
        : f.filter(function (e) {
            return t >= e;
          }).length;
    }
    function M() {
      var e, t, n, r;
      if (
        E ||
        ((e = self.navigator.userAgentData) == null ? void 0 : e.mobile) === !0
      )
        return !1;
      var a = o("WAWebUA").UA.parser.getDevice(),
        i =
          ((t = self.navigator.userAgentData) == null
            ? void 0
            : t.getHighEntropyValues) != null,
        l = o("WAWebUA").UA.os === s && ie(o("WAWebUA").UA.osVersion),
        u = Q(),
        c = l
          ? ne(
              a.type,
              o("WAWebUA").UA.parser.getUA(),
              a.model,
              (n = self.navigator.userAgentData) == null ? void 0 : n.mobile,
              void 0,
            )
          : ((r = self.navigator.userAgentData) == null ? void 0 : r.mobile) ===
              !1 && Y(o("WAWebUA").UA.parser.getUA(), u);
      return (
        i &&
        c &&
        !o("WAWebUA").UA.isOculusBrowser &&
        !se(o("WAWebUA").UA.parser.getUA(), a.vendor, a.model)
      );
    }
    function w() {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (yield F()) != null;
        })),
        A.apply(this, arguments)
      );
    }
    function F() {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (M()) {
            var e = self.navigator.userAgentData;
            if (e == null) return null;
            var t = yield B(e);
            if (t == null) return null;
            ((R = t.formFactors), (L = t.model), (E = !0));
          }
          return D();
        })),
        O.apply(this, arguments)
      );
    }
    function B(e) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return e.getHighEntropyValues == null
            ? null
            : o("WAPromiseTimeout").promiseTimeout(
                e.getHighEntropyValues(["formFactors", "model"]),
                m,
              );
        })),
        W.apply(this, arguments)
      );
    }
    function q(e, t, n, r, o, a, i, l, s, c) {
      var d = te(o, a),
        m = U(o, a, d),
        p = V(e, n, m, i, l, c),
        _ = oe(l),
        f = H(_, c, s),
        g = z(c, d, i, _, s, f);
      if (p == null || t) return null;
      var h = K(p, g);
      return !f || !G(_, d, m) || !j(h, d) || se(n, r, m)
        ? null
        : { detectionSource: h, detectorVersion: u, modelSource: d };
    }
    function U(e, t, n) {
      return n === "user_agent" ? e : t == null ? void 0 : t.trim();
    }
    function V(e, t, n, r, o, a) {
      return a ? "desktop_mode_signals" : re(e, t, n, r, o);
    }
    function H(e, t, n) {
      if (e !== "desktop") return !0;
      var r = t ? "Linux" : "Android";
      return (n == null ? void 0 : n.clientHintPlatform) === r && J(n);
    }
    function G(e, t, n) {
      return e !== "desktop" || t === "unavailable"
        ? !0
        : n != null && h.test(n);
    }
    function z(e, t, n, r, o, a) {
      return (
        !e &&
        t === "unavailable" &&
        n === !1 &&
        r === "desktop" &&
        (o == null ? void 0 : o.clientHintPlatform) === "Android" &&
        a
      );
    }
    function j(e, t) {
      return (
        t !== "unavailable" ||
        e === "desktop_mode_signals" ||
        e === "screen_size"
      );
    }
    function K(e, t) {
      return t ? "screen_size" : e;
    }
    function Q() {
      var e;
      return {
        clientHintPlatform:
          (e = self.navigator.userAgentData) == null ? void 0 : e.platform,
        maxTouchPoints: self.navigator.maxTouchPoints,
        navigatorPlatform: self.navigator.platform,
        screenSize: self.screen,
      };
    }
    function X(e, t, n, r) {
      return t === !1 && oe(n) === "desktop" && Y(e, r);
    }
    function Y(e, t) {
      return (
        c.test(e) &&
        (t == null ? void 0 : t.clientHintPlatform) === "Linux" &&
        J(t)
      );
    }
    function J(t) {
      var n, r;
      return (
        e.test(
          (n = t == null ? void 0 : t.navigatorPlatform) != null ? n : "",
        ) &&
        ((r = t == null ? void 0 : t.maxTouchPoints) != null ? r : 0) > 0 &&
        ee(t == null ? void 0 : t.screenSize)
      );
    }
    function Z(t, n) {
      var r, o;
      return (
        d.test(t) &&
        e.test(
          (r = n == null ? void 0 : n.navigatorPlatform) != null ? r : "",
        ) &&
        ((o = n == null ? void 0 : n.maxTouchPoints) != null ? o : 0) > 0
      );
    }
    function ee(e) {
      return e != null && Math.min(e.height, e.width) >= _;
    }
    function te(e, t) {
      return le(e) ? "user_agent" : le(t) ? "ua_ch" : "unavailable";
    }
    function ne(e, t, n, r, o) {
      return re(e, t, n, r, o) != null;
    }
    function re(e, t, n, r, o) {
      if (r === !0 || /\bmobile\b/i.test(t)) return null;
      var a = oe(o);
      return a !== "unavailable"
        ? ae(a, r)
        : r === !1
          ? "ua_ch_mobile_false"
          : e === g
            ? "ua_parser_device_type"
            : n != null && h.test(n)
              ? "known_model_pattern"
              : null;
    }
    function oe(e) {
      if (e == null || e.length === 0) return "unavailable";
      var t = new Set(
        e.map(function (e) {
          return e.toLowerCase();
        }),
      );
      return t.size !== 1 ||
        Array.from(t).some(function (e) {
          return !y.has(e);
        })
        ? "unknown"
        : t.has("mobile")
          ? "phone"
          : t.has("tablet")
            ? "tablet"
            : t.has("desktop")
              ? "desktop"
              : "non_handheld";
    }
    function ae(e, t) {
      return e === "tablet"
        ? "ua_ch_form_factor"
        : e === "desktop" && t === !1
          ? "ua_ch_mobile_false"
          : null;
    }
    function ie(e) {
      return parseInt(e, 10) >= p;
    }
    function le(e) {
      var t = e == null ? void 0 : e.trim().toLowerCase();
      return t != null && !C.has(t);
    }
    function se(e, t, n) {
      var r,
        o = e.toLowerCase(),
        a = (r = t == null ? void 0 : t.toLowerCase()) != null ? r : "",
        i = S.some(function (e) {
          return o.includes(e);
        });
      return v.has(a) || i || (n != null && b.test(n));
    }
    ((l.isWAWebFeatureDetectionAndroidTabletUserAgent = k),
      (l.getWAWebFeatureDetectionAndroidTabletInfoUserAgent = I),
      (l.isWAWebFeatureDetectionAndroidTablet = T),
      (l.getWAWebFeatureDetectionAndroidTabletInfo = D),
      (l.isWAWebFeatureDetectionAndroidOS = x),
      (l.isWAWebFeatureDetectionAndroidOSUserAgent = $),
      (l.getWAWebFeatureDetectionAndroidTabletScreenClass = P),
      (l.getWAWebFeatureDetectionAndroidTabletScreenClassForSize = N),
      (l.isWAWebFeatureDetectionAndroidTabletClientHintResolutionRequired = M),
      (l.isWAWebFeatureDetectionAndroidTabletWithClientHints = w),
      (l.getWAWebFeatureDetectionAndroidTabletInfoWithClientHints = F),
      (l.getWAWebAndroidClientHintValues = B));
  },
  98,
);
