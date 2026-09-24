__d(
  "isWAWebFeatureDetectionAndroidTablet",
  ["WAPromiseTimeout", "WAWebUA", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "android",
      s = 3,
      u =
        /^Mozilla\/5\.0 \(X11; Linux x86_64\) AppleWebKit\/537\.36 \(KHTML, like Gecko\) Chrome\/\d+(?:\.\d+){3} Safari\/537\.36$/,
      c = 500,
      d = 6,
      m = 600,
      p = "tablet",
      _ =
        /^(?:pixel tablet|sm-(?:t|x)\d+[a-z]*|lenovo tb[-_a-z0-9]*|23043rp34g|opd\d+|pa2473|(?:nokia|hmd) t\d+|moto tab\b.*|8491x|zte k\d+|asus_p\w+|b\d+-a\d+|sgp\d+|(?:lg-)?v(?:4|5|7|9)\d{2}|(?:lm-)?t\d{3})$/i,
      f = new Set([
        "automotive",
        "desktop",
        "mobile",
        "tablet",
        "tv",
        "watch",
        "wearable",
        "xr",
      ]),
      g = new Set(["", "k", "mobile", "tablet"]),
      h =
        /\b(?:aft[a-z0-9]*|bntv[a-z0-9]*|kf[a-z0-9]{2,}|mibox[0-9]*|sd4930ur|shield|(?:agm|ags|bah|btv|cmr|dby|eln|hey|jdn|kob|mrx|wgr)[a-z0-9]*[-_][a-z0-9]+)\b/i,
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
      ],
      b,
      v,
      S = !1;
    function R(e, t, n, r, o) {
      return L(e, t, n, r, o) != null;
    }
    function L(t, n, r, a, i) {
      var l = o("WAWebUA").parseUA(t),
        s = l.os === e && J(l.osVersion),
        u = V(t, r, a, i);
      if (!s && !u) return null;
      var c = l.parser.getDevice();
      return M(
        c.type,
        l.isOculusBrowser,
        l.parser.getUA(),
        c.vendor,
        c.model,
        n,
        r,
        a,
        i,
        u,
      );
    }
    function E() {
      return k() != null;
    }
    function k() {
      var e;
      return L(
        o("WAWebUA").UA.parser.getUA(),
        v,
        (e = self.navigator.userAgentData) == null ? void 0 : e.mobile,
        b,
        U(),
      );
    }
    function I() {
      var t, n, r, a;
      if (
        S ||
        ((t = self.navigator.userAgentData) == null ? void 0 : t.mobile) === !0
      )
        return !1;
      var i = o("WAWebUA").UA.parser.getDevice(),
        l =
          ((n = self.navigator.userAgentData) == null
            ? void 0
            : n.getHighEntropyValues) != null,
        s = o("WAWebUA").UA.os === e && J(o("WAWebUA").UA.osVersion),
        u = U(),
        c = s
          ? K(
              i.type,
              o("WAWebUA").UA.parser.getUA(),
              i.model,
              (r = self.navigator.userAgentData) == null ? void 0 : r.mobile,
              void 0,
            )
          : ((a = self.navigator.userAgentData) == null ? void 0 : a.mobile) ===
              !1 && H(o("WAWebUA").UA.parser.getUA(), u);
      return (
        l &&
        c &&
        !o("WAWebUA").UA.isOculusBrowser &&
        !ee(o("WAWebUA").UA.parser.getUA(), i.vendor, i.model)
      );
    }
    function T() {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (yield x()) != null;
        })),
        D.apply(this, arguments)
      );
    }
    function x() {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (I()) {
            var e = self.navigator.userAgentData;
            if (e == null) return null;
            var t = yield P(e);
            if (t == null) return null;
            ((b = t.formFactors), (v = t.model), (S = !0));
          }
          return k();
        })),
        $.apply(this, arguments)
      );
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return e.getHighEntropyValues == null
            ? null
            : o("WAPromiseTimeout").promiseTimeout(
                e.getHighEntropyValues(["formFactors", "model"]),
                c,
              );
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t, n, r, o, a, i, l, u, c) {
      var d = j(o, a),
        m = w(o, a, d),
        p = A(e, n, m, i, l, c),
        _ = X(l),
        f = F(_, c, u),
        g = B(c, d, i, _, u, f);
      if (p == null || t) return null;
      var h = q(p, g);
      return !f || !O(_, d, m) || !W(h, d) || ee(n, r, m)
        ? null
        : { detectionSource: h, detectorVersion: s, modelSource: d };
    }
    function w(e, t, n) {
      return n === "user_agent" ? e : t == null ? void 0 : t.trim();
    }
    function A(e, t, n, r, o, a) {
      return a ? "desktop_mode_signals" : Q(e, t, n, r, o);
    }
    function F(e, t, n) {
      if (e !== "desktop") return !0;
      var r = t ? "Linux" : "Android";
      return (n == null ? void 0 : n.clientHintPlatform) === r && G(n);
    }
    function O(e, t, n) {
      return e !== "desktop" || t === "unavailable"
        ? !0
        : n != null && _.test(n);
    }
    function B(e, t, n, r, o, a) {
      return (
        !e &&
        t === "unavailable" &&
        n === !1 &&
        r === "desktop" &&
        (o == null ? void 0 : o.clientHintPlatform) === "Android" &&
        a
      );
    }
    function W(e, t) {
      return (
        t !== "unavailable" ||
        e === "desktop_mode_signals" ||
        e === "screen_size"
      );
    }
    function q(e, t) {
      return t ? "screen_size" : e;
    }
    function U() {
      var e;
      return {
        clientHintPlatform:
          (e = self.navigator.userAgentData) == null ? void 0 : e.platform,
        maxTouchPoints: self.navigator.maxTouchPoints,
        navigatorPlatform: self.navigator.platform,
        screenSize: self.screen,
      };
    }
    function V(e, t, n, r) {
      return t === !1 && X(n) === "desktop" && H(e, r);
    }
    function H(e, t) {
      return (
        u.test(e) &&
        (t == null ? void 0 : t.clientHintPlatform) === "Linux" &&
        G(t)
      );
    }
    function G(e) {
      var t, n;
      return (
        /^Linux armv8[l1]$/.test(
          (t = e == null ? void 0 : e.navigatorPlatform) != null ? t : "",
        ) &&
        ((n = e == null ? void 0 : e.maxTouchPoints) != null ? n : 0) > 0 &&
        z(e == null ? void 0 : e.screenSize)
      );
    }
    function z(e) {
      return e != null && Math.min(e.height, e.width) >= m;
    }
    function j(e, t) {
      return Z(e) ? "user_agent" : Z(t) ? "ua_ch" : "unavailable";
    }
    function K(e, t, n, r, o) {
      return Q(e, t, n, r, o) != null;
    }
    function Q(e, t, n, r, o) {
      if (r === !0 || /\bmobile\b/i.test(t)) return null;
      var a = X(o);
      return a !== "unavailable"
        ? Y(a, r)
        : r === !1
          ? "ua_ch_mobile_false"
          : e === p
            ? "ua_parser_device_type"
            : n != null && _.test(n)
              ? "known_model_pattern"
              : null;
    }
    function X(e) {
      if (e == null || e.length === 0) return "unavailable";
      var t = new Set(
        e.map(function (e) {
          return e.toLowerCase();
        }),
      );
      return t.size !== 1 ||
        Array.from(t).some(function (e) {
          return !f.has(e);
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
    function Y(e, t) {
      return e === "tablet"
        ? "ua_ch_form_factor"
        : e === "desktop" && t === !1
          ? "ua_ch_mobile_false"
          : null;
    }
    function J(e) {
      return parseInt(e, 10) >= d;
    }
    function Z(e) {
      var t = e == null ? void 0 : e.trim().toLowerCase();
      return t != null && !g.has(t);
    }
    function ee(e, t, n) {
      var r,
        o = e.toLowerCase(),
        a = (r = t == null ? void 0 : t.toLowerCase()) != null ? r : "",
        i = C.some(function (e) {
          return o.includes(e);
        });
      return y.has(a) || i || (n != null && h.test(n));
    }
    ((l.isWAWebFeatureDetectionAndroidTabletUserAgent = R),
      (l.getWAWebFeatureDetectionAndroidTabletInfoUserAgent = L),
      (l.isWAWebFeatureDetectionAndroidTablet = E),
      (l.getWAWebFeatureDetectionAndroidTabletInfo = k),
      (l.isWAWebFeatureDetectionAndroidTabletClientHintResolutionRequired = I),
      (l.isWAWebFeatureDetectionAndroidTabletWithClientHints = T),
      (l.getWAWebFeatureDetectionAndroidTabletInfoWithClientHints = x),
      (l.getWAWebAndroidClientHintValues = P));
  },
  98,
);
