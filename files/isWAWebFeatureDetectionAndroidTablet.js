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
      u = 5,
      c =
        /^Mozilla\/5\.0 \(X11; Linux x86_64\) AppleWebKit\/537\.36 \(KHTML, like Gecko\) Chrome\/\d+(?:\.\d+){3} Safari\/537\.36$/,
      d = /\(X11; Linux x86_64[;)]/,
      m = 500,
      p = 6,
      _ = 600,
      f = [_, 720, 840],
      g = "tablet",
      h =
        /^(?:pixel tablet|(?:samsung )?sm-[ptx]\d+[a-z]*|(?:lenovo )?tb[-_a-z0-9]*|(?:lenovo )?yt\d?-[a-z0-9]+|\d{4}[0-9a-z]rp[0-9a-z]{3}|21051182[cg]|22081283[cg]|opd\d+[a-z]*|rmp\d{4}|(?:agm|bky|btkr?|cga|eln|hey|ndl|rod|rol|txz|yag|yle)\d*-[a-z]\d{2}[a-z]*|infinix x11\d{2}[a-z]*|tecno t1[01]\d{2}|itel p100\d{2}[a-z]?|pa2473|(?:nokia|hmd) t\d+|moto tab\b.*|8491x|zte k\d+|asus_p\w+|b\d+-a\d+|sgp\d+|(?:lg-)?v(?:4|5|7|9)\d{2}|(?:lm-)?t\d{3}|.*googlebook.*)$/i,
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
        /\b(?:aft[a-z0-9]*|bntv[a-z0-9]*|kf[a-z0-9]{2,}|mibox[0-9]*|sd4930ur|shield|(?:ags|bah|btv|cmr|dby|jdn|kob|mrx|wgr)[a-z0-9]*[-_][a-z0-9]+)\b/i,
      v =
        /^(?:(?:ws)?t9[5-8]2(?:_[a-z0-9]+)?|c[a-z]?-(?:a1516|t9[5-8]2)-.+|mtk?[59]\d{3}|sbid-.+|ifp\d{4}(?:-.+)?|teachmint.*|lt-ir[a-z0-9]+|logic_lt_[a-z0-9]+|maxhub.*|[a-z]{1,2}\d{2}[a-z]{2}-cs\d{4}[a-z]?-.+|hidb.*|.*a311d2.*|taishan|(?:.*[^a-z])?(?:tv|display|projector)(?:[^a-z].*)?)$/i,
      S = new Set(["amazon", "barnes & noble", "honor", "huawei"]),
      R = [
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
      L,
      E,
      k = null,
      I = !1;
    function T(e, t, n, r, o) {
      return D(e, t, n, r, o) != null;
    }
    function D(e, t, n, r, a) {
      var i = o("WAWebUA").parseUA(e),
        l = i.os === s && ce(i.osVersion),
        u = ee(e, n, r, a);
      if (!l && !u) return null;
      var c = i.parser.getDevice();
      return G(
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
    function x() {
      return $() != null;
    }
    function $() {
      var e;
      return D(
        o("WAWebUA").UA.parser.getUA(),
        E,
        (e = self.navigator.userAgentData) == null ? void 0 : e.mobile,
        L,
        Z(),
      );
    }
    function P() {
      return N(o("WAWebUA").UA.parser.getUA(), Z());
    }
    function N(e, t) {
      return o("WAWebUA").parseUA(e).os === s || re(e, t);
    }
    function M() {
      return w(self.screen);
    }
    function w(e) {
      var t = e == null ? NaN : Math.min(e.height, e.width);
      return Number.isNaN(t) || t <= 0
        ? null
        : f.filter(function (e) {
            return t >= e;
          }).length;
    }
    function A() {
      var e, t, n, r;
      if (
        I ||
        ((e = self.navigator.userAgentData) == null ? void 0 : e.mobile) === !0
      )
        return !1;
      var a = o("WAWebUA").UA.parser.getDevice(),
        i =
          ((t = self.navigator.userAgentData) == null
            ? void 0
            : t.getHighEntropyValues) != null,
        l = o("WAWebUA").UA.os === s && ce(o("WAWebUA").UA.osVersion),
        u = Z(),
        c = l
          ? ie(
              a.type,
              o("WAWebUA").UA.parser.getUA(),
              a.model,
              (n = self.navigator.userAgentData) == null ? void 0 : n.mobile,
              void 0,
            )
          : ((r = self.navigator.userAgentData) == null ? void 0 : r.mobile) ===
              !1 && te(o("WAWebUA").UA.parser.getUA(), u);
      return (
        i &&
        c &&
        !o("WAWebUA").UA.isOculusBrowser &&
        !me(o("WAWebUA").UA.parser.getUA(), a.vendor, a.model)
      );
    }
    function F() {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (yield B()) != null;
        })),
        O.apply(this, arguments)
      );
    }
    function B() {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (A()) {
            var e = self.navigator.userAgentData;
            if (e == null) return null;
            var t = yield q(e);
            if (t == null) return null;
            ((L = t.formFactors), (E = t.model), (I = !0));
          }
          return $();
        })),
        W.apply(this, arguments)
      );
    }
    function q(e) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WATimeUtils").unixTimeMs();
          if (e.getHighEntropyValues == null) return null;
          try {
            var n = yield o("WAPromiseTimeout").promiseTimeout(
              e.getHighEntropyValues(["formFactors", "model"]),
              m,
            );
            return (H("resolved", t), n);
          } catch (e) {
            throw (
              H(
                e instanceof o("WACustomError").TimeoutError
                  ? "timed_out"
                  : "failed",
                t,
              ),
              e
            );
          }
        })),
        U.apply(this, arguments)
      );
    }
    function V() {
      return k;
    }
    function H(e, t) {
      k = {
        durationMs: Math.max(0, o("WATimeUtils").unixTimeMs() - t),
        outcome: e,
      };
    }
    function G(e, t, n, r, o, a, i, l, s, c) {
      var d = ae(o, a),
        m = z(o, a, d),
        p = j(e, n, m, i, l, c),
        _ = se(l),
        f = K(_, c, s),
        g = X(c, d, i, _, s, f);
      if (p == null || t) return null;
      var h = J(p, g);
      return !f || !Q(_, d, m) || !Y(h, d) || me(n, r, m)
        ? null
        : { detectionSource: h, detectorVersion: u, modelSource: d };
    }
    function z(e, t, n) {
      return n === "user_agent" ? e : t == null ? void 0 : t.trim();
    }
    function j(e, t, n, r, o, a) {
      return a ? "desktop_mode_signals" : le(e, t, n, r, o);
    }
    function K(e, t, n) {
      if (e !== "desktop") return !0;
      var r = t ? "Linux" : "Android";
      return (n == null ? void 0 : n.clientHintPlatform) === r && ne(n);
    }
    function Q(e, t, n) {
      return e !== "desktop" || t === "unavailable"
        ? !0
        : n != null && h.test(n);
    }
    function X(e, t, n, r, o, a) {
      return (
        !e &&
        t === "unavailable" &&
        n === !1 &&
        r === "desktop" &&
        (o == null ? void 0 : o.clientHintPlatform) === "Android" &&
        a
      );
    }
    function Y(e, t) {
      return (
        t !== "unavailable" ||
        e === "desktop_mode_signals" ||
        e === "screen_size"
      );
    }
    function J(e, t) {
      return t ? "screen_size" : e;
    }
    function Z() {
      var e;
      return {
        clientHintPlatform:
          (e = self.navigator.userAgentData) == null ? void 0 : e.platform,
        maxTouchPoints: self.navigator.maxTouchPoints,
        navigatorPlatform: self.navigator.platform,
        screenSize: self.screen,
      };
    }
    function ee(e, t, n, r) {
      return t === !1 && se(n) === "desktop" && te(e, r);
    }
    function te(e, t) {
      return (
        c.test(e) &&
        (t == null ? void 0 : t.clientHintPlatform) === "Linux" &&
        ne(t)
      );
    }
    function ne(t) {
      var n, r;
      return (
        e.test(
          (n = t == null ? void 0 : t.navigatorPlatform) != null ? n : "",
        ) &&
        ((r = t == null ? void 0 : t.maxTouchPoints) != null ? r : 0) > 0 &&
        oe(t == null ? void 0 : t.screenSize)
      );
    }
    function re(t, n) {
      var r, o;
      return (
        d.test(t) &&
        e.test(
          (r = n == null ? void 0 : n.navigatorPlatform) != null ? r : "",
        ) &&
        ((o = n == null ? void 0 : n.maxTouchPoints) != null ? o : 0) > 0
      );
    }
    function oe(e) {
      return e != null && Math.min(e.height, e.width) >= _;
    }
    function ae(e, t) {
      return de(e) ? "user_agent" : de(t) ? "ua_ch" : "unavailable";
    }
    function ie(e, t, n, r, o) {
      return le(e, t, n, r, o) != null;
    }
    function le(e, t, n, r, o) {
      if (r === !0 || /\bmobile\b/i.test(t)) return null;
      var a = se(o);
      return a !== "unavailable"
        ? ue(a, r)
        : r === !1
          ? "ua_ch_mobile_false"
          : e === g
            ? "ua_parser_device_type"
            : n != null && h.test(n)
              ? "known_model_pattern"
              : null;
    }
    function se(e) {
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
    function ue(e, t) {
      return e === "tablet"
        ? "ua_ch_form_factor"
        : e === "desktop" && t === !1
          ? "ua_ch_mobile_false"
          : null;
    }
    function ce(e) {
      return parseInt(e, 10) >= p;
    }
    function de(e) {
      var t = e == null ? void 0 : e.trim().toLowerCase();
      return t != null && !C.has(t);
    }
    function me(e, t, n) {
      var r,
        o = e.toLowerCase(),
        a = (r = t == null ? void 0 : t.toLowerCase()) != null ? r : "",
        i = R.some(function (e) {
          return o.includes(e);
        });
      return S.has(a) || i || (n != null && (b.test(n) || v.test(n)));
    }
    ((l.ANDROID_TABLET_DETECTOR_VERSION = u),
      (l.isWAWebFeatureDetectionAndroidTabletUserAgent = T),
      (l.getWAWebFeatureDetectionAndroidTabletInfoUserAgent = D),
      (l.isWAWebFeatureDetectionAndroidTablet = x),
      (l.getWAWebFeatureDetectionAndroidTabletInfo = $),
      (l.isWAWebFeatureDetectionAndroidOS = P),
      (l.isWAWebFeatureDetectionAndroidOSUserAgent = N),
      (l.getWAWebFeatureDetectionAndroidTabletScreenClass = M),
      (l.getWAWebFeatureDetectionAndroidTabletScreenClassForSize = w),
      (l.isWAWebFeatureDetectionAndroidTabletClientHintResolutionRequired = A),
      (l.isWAWebFeatureDetectionAndroidTabletWithClientHints = F),
      (l.getWAWebFeatureDetectionAndroidTabletInfoWithClientHints = B),
      (l.getWAWebAndroidClientHintValues = q),
      (l.getWAWebFeatureDetectionAndroidTabletClientHintResult = V));
  },
  98,
);
