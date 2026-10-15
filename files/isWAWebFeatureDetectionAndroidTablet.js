__d(
  "isWAWebFeatureDetectionAndroidTablet",
  [
    "WACustomError",
    "WAPromiseTimeout",
    "WATimeUtils",
    "WAWebUA",
    "asyncToGeneratorRuntime",
  ],
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
      E = null,
      k = !1;
    function I(e, t, n, r, o) {
      return T(e, t, n, r, o) != null;
    }
    function T(e, t, n, r, a) {
      var i = o("WAWebUA").parseUA(e),
        l = i.os === s && ue(i.osVersion),
        u = Z(e, n, r, a);
      if (!l && !u) return null;
      var c = i.parser.getDevice();
      return H(
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
    function D() {
      return x() != null;
    }
    function x() {
      var e;
      return T(
        o("WAWebUA").UA.parser.getUA(),
        L,
        (e = self.navigator.userAgentData) == null ? void 0 : e.mobile,
        R,
        J(),
      );
    }
    function $() {
      return P(o("WAWebUA").UA.parser.getUA(), J());
    }
    function P(e, t) {
      return o("WAWebUA").parseUA(e).os === s || ne(e, t);
    }
    function N() {
      return M(self.screen);
    }
    function M(e) {
      var t = e == null ? NaN : Math.min(e.height, e.width);
      return Number.isNaN(t) || t <= 0
        ? null
        : f.filter(function (e) {
            return t >= e;
          }).length;
    }
    function w() {
      var e, t, n, r;
      if (
        k ||
        ((e = self.navigator.userAgentData) == null ? void 0 : e.mobile) === !0
      )
        return !1;
      var a = o("WAWebUA").UA.parser.getDevice(),
        i =
          ((t = self.navigator.userAgentData) == null
            ? void 0
            : t.getHighEntropyValues) != null,
        l = o("WAWebUA").UA.os === s && ue(o("WAWebUA").UA.osVersion),
        u = J(),
        c = l
          ? ae(
              a.type,
              o("WAWebUA").UA.parser.getUA(),
              a.model,
              (n = self.navigator.userAgentData) == null ? void 0 : n.mobile,
              void 0,
            )
          : ((r = self.navigator.userAgentData) == null ? void 0 : r.mobile) ===
              !1 && ee(o("WAWebUA").UA.parser.getUA(), u);
      return (
        i &&
        c &&
        !o("WAWebUA").UA.isOculusBrowser &&
        !de(o("WAWebUA").UA.parser.getUA(), a.vendor, a.model)
      );
    }
    function A() {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (yield O()) != null;
        })),
        F.apply(this, arguments)
      );
    }
    function O() {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (w()) {
            var e = self.navigator.userAgentData;
            if (e == null) return null;
            var t = yield W(e);
            if (t == null) return null;
            ((R = t.formFactors), (L = t.model), (k = !0));
          }
          return x();
        })),
        B.apply(this, arguments)
      );
    }
    function W(e) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WATimeUtils").unixTimeMs();
          if (e.getHighEntropyValues == null) return null;
          try {
            var n = yield o("WAPromiseTimeout").promiseTimeout(
              e.getHighEntropyValues(["formFactors", "model"]),
              m,
            );
            return (V("resolved", t), n);
          } catch (e) {
            throw (
              V(
                e instanceof o("WACustomError").TimeoutError
                  ? "timed_out"
                  : "failed",
                t,
              ),
              e
            );
          }
        })),
        q.apply(this, arguments)
      );
    }
    function U() {
      return E;
    }
    function V(e, t) {
      E = {
        durationMs: Math.max(0, o("WATimeUtils").unixTimeMs() - t),
        outcome: e,
      };
    }
    function H(e, t, n, r, o, a, i, l, s, c) {
      var d = oe(o, a),
        m = G(o, a, d),
        p = z(e, n, m, i, l, c),
        _ = le(l),
        f = j(_, c, s),
        g = Q(c, d, i, _, s, f);
      if (p == null || t) return null;
      var h = Y(p, g);
      return !f || !K(_, d, m) || !X(h, d) || de(n, r, m)
        ? null
        : { detectionSource: h, detectorVersion: u, modelSource: d };
    }
    function G(e, t, n) {
      return n === "user_agent" ? e : t == null ? void 0 : t.trim();
    }
    function z(e, t, n, r, o, a) {
      return a ? "desktop_mode_signals" : ie(e, t, n, r, o);
    }
    function j(e, t, n) {
      if (e !== "desktop") return !0;
      var r = t ? "Linux" : "Android";
      return (n == null ? void 0 : n.clientHintPlatform) === r && te(n);
    }
    function K(e, t, n) {
      return e !== "desktop" || t === "unavailable"
        ? !0
        : n != null && h.test(n);
    }
    function Q(e, t, n, r, o, a) {
      return (
        !e &&
        t === "unavailable" &&
        n === !1 &&
        r === "desktop" &&
        (o == null ? void 0 : o.clientHintPlatform) === "Android" &&
        a
      );
    }
    function X(e, t) {
      return (
        t !== "unavailable" ||
        e === "desktop_mode_signals" ||
        e === "screen_size"
      );
    }
    function Y(e, t) {
      return t ? "screen_size" : e;
    }
    function J() {
      var e;
      return {
        clientHintPlatform:
          (e = self.navigator.userAgentData) == null ? void 0 : e.platform,
        maxTouchPoints: self.navigator.maxTouchPoints,
        navigatorPlatform: self.navigator.platform,
        screenSize: self.screen,
      };
    }
    function Z(e, t, n, r) {
      return t === !1 && le(n) === "desktop" && ee(e, r);
    }
    function ee(e, t) {
      return (
        c.test(e) &&
        (t == null ? void 0 : t.clientHintPlatform) === "Linux" &&
        te(t)
      );
    }
    function te(t) {
      var n, r;
      return (
        e.test(
          (n = t == null ? void 0 : t.navigatorPlatform) != null ? n : "",
        ) &&
        ((r = t == null ? void 0 : t.maxTouchPoints) != null ? r : 0) > 0 &&
        re(t == null ? void 0 : t.screenSize)
      );
    }
    function ne(t, n) {
      var r, o;
      return (
        d.test(t) &&
        e.test(
          (r = n == null ? void 0 : n.navigatorPlatform) != null ? r : "",
        ) &&
        ((o = n == null ? void 0 : n.maxTouchPoints) != null ? o : 0) > 0
      );
    }
    function re(e) {
      return e != null && Math.min(e.height, e.width) >= _;
    }
    function oe(e, t) {
      return ce(e) ? "user_agent" : ce(t) ? "ua_ch" : "unavailable";
    }
    function ae(e, t, n, r, o) {
      return ie(e, t, n, r, o) != null;
    }
    function ie(e, t, n, r, o) {
      if (r === !0 || /\bmobile\b/i.test(t)) return null;
      var a = le(o);
      return a !== "unavailable"
        ? se(a, r)
        : r === !1
          ? "ua_ch_mobile_false"
          : e === g
            ? "ua_parser_device_type"
            : n != null && h.test(n)
              ? "known_model_pattern"
              : null;
    }
    function le(e) {
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
    function se(e, t) {
      return e === "tablet"
        ? "ua_ch_form_factor"
        : e === "desktop" && t === !1
          ? "ua_ch_mobile_false"
          : null;
    }
    function ue(e) {
      return parseInt(e, 10) >= p;
    }
    function ce(e) {
      var t = e == null ? void 0 : e.trim().toLowerCase();
      return t != null && !C.has(t);
    }
    function de(e, t, n) {
      var r,
        o = e.toLowerCase(),
        a = (r = t == null ? void 0 : t.toLowerCase()) != null ? r : "",
        i = S.some(function (e) {
          return o.includes(e);
        });
      return v.has(a) || i || (n != null && b.test(n));
    }
    ((l.ANDROID_TABLET_DETECTOR_VERSION = u),
      (l.isWAWebFeatureDetectionAndroidTabletUserAgent = I),
      (l.getWAWebFeatureDetectionAndroidTabletInfoUserAgent = T),
      (l.isWAWebFeatureDetectionAndroidTablet = D),
      (l.getWAWebFeatureDetectionAndroidTabletInfo = x),
      (l.isWAWebFeatureDetectionAndroidOS = $),
      (l.isWAWebFeatureDetectionAndroidOSUserAgent = P),
      (l.getWAWebFeatureDetectionAndroidTabletScreenClass = N),
      (l.getWAWebFeatureDetectionAndroidTabletScreenClassForSize = M),
      (l.isWAWebFeatureDetectionAndroidTabletClientHintResolutionRequired = w),
      (l.isWAWebFeatureDetectionAndroidTabletWithClientHints = A),
      (l.getWAWebFeatureDetectionAndroidTabletInfoWithClientHints = O),
      (l.getWAWebAndroidClientHintValues = W),
      (l.getWAWebFeatureDetectionAndroidTabletClientHintResult = U));
  },
  98,
);
