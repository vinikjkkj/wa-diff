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
      f = "tablet",
      g =
        /^(?:pixel tablet|sm-(?:t|x)\d+[a-z]*|lenovo tb[-_a-z0-9]*|23043rp34g|opd\d+|pa2473|(?:nokia|hmd) t\d+|moto tab\b.*|8491x|zte k\d+|asus_p\w+|b\d+-a\d+|sgp\d+|(?:lg-)?v(?:4|5|7|9)\d{2}|(?:lm-)?t\d{3})$/i,
      h = new Set([
        "automotive",
        "desktop",
        "mobile",
        "tablet",
        "tv",
        "watch",
        "wearable",
        "xr",
      ]),
      y = new Set(["", "k", "mobile", "tablet"]),
      C =
        /\b(?:aft[a-z0-9]*|bntv[a-z0-9]*|kf[a-z0-9]{2,}|mibox[0-9]*|sd4930ur|shield|(?:agm|ags|bah|btv|cmr|dby|eln|hey|jdn|kob|mrx|wgr)[a-z0-9]*[-_][a-z0-9]+)\b/i,
      b = new Set(["amazon", "barnes & noble", "honor", "huawei"]),
      v = [
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
      S,
      R,
      L = !1;
    function E(e, t, n, r, o) {
      return k(e, t, n, r, o) != null;
    }
    function k(e, t, n, r, a) {
      var i = o("WAWebUA").parseUA(e),
        l = i.os === s && re(i.osVersion),
        u = j(e, n, r, a);
      if (!l && !u) return null;
      var c = i.parser.getDevice();
      return O(
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
    function I() {
      return T() != null;
    }
    function T() {
      var e;
      return k(
        o("WAWebUA").UA.parser.getUA(),
        R,
        (e = self.navigator.userAgentData) == null ? void 0 : e.mobile,
        S,
        z(),
      );
    }
    function D() {
      return x(o("WAWebUA").UA.parser.getUA(), z());
    }
    function x(e, t) {
      return o("WAWebUA").parseUA(e).os === s || X(e, t);
    }
    function $() {
      var e, t, n, r;
      if (
        L ||
        ((e = self.navigator.userAgentData) == null ? void 0 : e.mobile) === !0
      )
        return !1;
      var a = o("WAWebUA").UA.parser.getDevice(),
        i =
          ((t = self.navigator.userAgentData) == null
            ? void 0
            : t.getHighEntropyValues) != null,
        l = o("WAWebUA").UA.os === s && re(o("WAWebUA").UA.osVersion),
        u = z(),
        c = l
          ? Z(
              a.type,
              o("WAWebUA").UA.parser.getUA(),
              a.model,
              (n = self.navigator.userAgentData) == null ? void 0 : n.mobile,
              void 0,
            )
          : ((r = self.navigator.userAgentData) == null ? void 0 : r.mobile) ===
              !1 && K(o("WAWebUA").UA.parser.getUA(), u);
      return (
        i &&
        c &&
        !o("WAWebUA").UA.isOculusBrowser &&
        !ae(o("WAWebUA").UA.parser.getUA(), a.vendor, a.model)
      );
    }
    function P() {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (yield M()) != null;
        })),
        N.apply(this, arguments)
      );
    }
    function M() {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if ($()) {
            var e = self.navigator.userAgentData;
            if (e == null) return null;
            var t = yield A(e);
            if (t == null) return null;
            ((S = t.formFactors), (R = t.model), (L = !0));
          }
          return T();
        })),
        w.apply(this, arguments)
      );
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return e.getHighEntropyValues == null
            ? null
            : o("WAPromiseTimeout").promiseTimeout(
                e.getHighEntropyValues(["formFactors", "model"]),
                m,
              );
        })),
        F.apply(this, arguments)
      );
    }
    function O(e, t, n, r, o, a, i, l, s, c) {
      var d = J(o, a),
        m = B(o, a, d),
        p = W(e, n, m, i, l, c),
        _ = te(l),
        f = q(_, c, s),
        g = V(c, d, i, _, s, f);
      if (p == null || t) return null;
      var h = G(p, g);
      return !f || !U(_, d, m) || !H(h, d) || ae(n, r, m)
        ? null
        : { detectionSource: h, detectorVersion: u, modelSource: d };
    }
    function B(e, t, n) {
      return n === "user_agent" ? e : t == null ? void 0 : t.trim();
    }
    function W(e, t, n, r, o, a) {
      return a ? "desktop_mode_signals" : ee(e, t, n, r, o);
    }
    function q(e, t, n) {
      if (e !== "desktop") return !0;
      var r = t ? "Linux" : "Android";
      return (n == null ? void 0 : n.clientHintPlatform) === r && Q(n);
    }
    function U(e, t, n) {
      return e !== "desktop" || t === "unavailable"
        ? !0
        : n != null && g.test(n);
    }
    function V(e, t, n, r, o, a) {
      return (
        !e &&
        t === "unavailable" &&
        n === !1 &&
        r === "desktop" &&
        (o == null ? void 0 : o.clientHintPlatform) === "Android" &&
        a
      );
    }
    function H(e, t) {
      return (
        t !== "unavailable" ||
        e === "desktop_mode_signals" ||
        e === "screen_size"
      );
    }
    function G(e, t) {
      return t ? "screen_size" : e;
    }
    function z() {
      var e;
      return {
        clientHintPlatform:
          (e = self.navigator.userAgentData) == null ? void 0 : e.platform,
        maxTouchPoints: self.navigator.maxTouchPoints,
        navigatorPlatform: self.navigator.platform,
        screenSize: self.screen,
      };
    }
    function j(e, t, n, r) {
      return t === !1 && te(n) === "desktop" && K(e, r);
    }
    function K(e, t) {
      return (
        c.test(e) &&
        (t == null ? void 0 : t.clientHintPlatform) === "Linux" &&
        Q(t)
      );
    }
    function Q(t) {
      var n, r;
      return (
        e.test(
          (n = t == null ? void 0 : t.navigatorPlatform) != null ? n : "",
        ) &&
        ((r = t == null ? void 0 : t.maxTouchPoints) != null ? r : 0) > 0 &&
        Y(t == null ? void 0 : t.screenSize)
      );
    }
    function X(t, n) {
      var r, o;
      return (
        d.test(t) &&
        e.test(
          (r = n == null ? void 0 : n.navigatorPlatform) != null ? r : "",
        ) &&
        ((o = n == null ? void 0 : n.maxTouchPoints) != null ? o : 0) > 0
      );
    }
    function Y(e) {
      return e != null && Math.min(e.height, e.width) >= _;
    }
    function J(e, t) {
      return oe(e) ? "user_agent" : oe(t) ? "ua_ch" : "unavailable";
    }
    function Z(e, t, n, r, o) {
      return ee(e, t, n, r, o) != null;
    }
    function ee(e, t, n, r, o) {
      if (r === !0 || /\bmobile\b/i.test(t)) return null;
      var a = te(o);
      return a !== "unavailable"
        ? ne(a, r)
        : r === !1
          ? "ua_ch_mobile_false"
          : e === f
            ? "ua_parser_device_type"
            : n != null && g.test(n)
              ? "known_model_pattern"
              : null;
    }
    function te(e) {
      if (e == null || e.length === 0) return "unavailable";
      var t = new Set(
        e.map(function (e) {
          return e.toLowerCase();
        }),
      );
      return t.size !== 1 ||
        Array.from(t).some(function (e) {
          return !h.has(e);
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
    function ne(e, t) {
      return e === "tablet"
        ? "ua_ch_form_factor"
        : e === "desktop" && t === !1
          ? "ua_ch_mobile_false"
          : null;
    }
    function re(e) {
      return parseInt(e, 10) >= p;
    }
    function oe(e) {
      var t = e == null ? void 0 : e.trim().toLowerCase();
      return t != null && !y.has(t);
    }
    function ae(e, t, n) {
      var r,
        o = e.toLowerCase(),
        a = (r = t == null ? void 0 : t.toLowerCase()) != null ? r : "",
        i = v.some(function (e) {
          return o.includes(e);
        });
      return b.has(a) || i || (n != null && C.test(n));
    }
    ((l.isWAWebFeatureDetectionAndroidTabletUserAgent = E),
      (l.getWAWebFeatureDetectionAndroidTabletInfoUserAgent = k),
      (l.isWAWebFeatureDetectionAndroidTablet = I),
      (l.getWAWebFeatureDetectionAndroidTabletInfo = T),
      (l.isWAWebFeatureDetectionAndroidOS = D),
      (l.isWAWebFeatureDetectionAndroidOSUserAgent = x),
      (l.isWAWebFeatureDetectionAndroidTabletClientHintResolutionRequired = $),
      (l.isWAWebFeatureDetectionAndroidTabletWithClientHints = P),
      (l.getWAWebFeatureDetectionAndroidTabletInfoWithClientHints = M),
      (l.getWAWebAndroidClientHintValues = A));
  },
  98,
);
