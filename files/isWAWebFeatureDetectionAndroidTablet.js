__d(
  "isWAWebFeatureDetectionAndroidTablet",
  [
    "WACustomError",
    "WAPromiseTimeout",
    "WATimeUtils",
    "WAWebAndroidTabletDetectionUtils",
    "WAWebUA",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "android",
      s = 7,
      u = 500,
      c = [
        o("WAWebAndroidTabletDetectionUtils").MINIMUM_TABLET_SCREEN_SIZE,
        720,
        840,
      ],
      d = "tablet",
      m =
        /^(?:pixel tablet|(?:samsung )?sm-[ptx]\d+[a-z]*|(?:lenovo )?tb[-_a-z0-9]*|(?:lenovo )?yt\d?-[a-z0-9]+|\d{4}[0-9a-z]rp[0-9a-z]{3}|21051182[cg]|22081283[cg]|opd\d+[a-z]*|rmp\d{4}|(?:agm|bky|btkr?|cga|eln|hey|ndl|rod|rol|txz|yag|yle)\d*-[a-z]\d{2}[a-z]*|infinix x11\d{2}[a-z]*|tecno t1[01]\d{2}|itel p100\d{2}[a-z]?|pa2473|(?:nokia|hmd) t\d+|moto tab\b.*|8491x|zte k\d+|asus_p\w+|b\d+-a\d+|sgp\d+|(?:lg-)?v(?:4|5|7|9)\d{2}|(?:lm-)?t\d{3})$/i,
      p = new Set([
        "automotive",
        "desktop",
        "mobile",
        "tablet",
        "tv",
        "watch",
        "wearable",
        "xr",
      ]),
      _ = new Set(["runtime", "unavailable"]),
      f,
      g,
      h = null,
      y = !1;
    function C(e, t, n, r, o) {
      var a;
      return (
        ((a = b(e, t, n, r, o)) == null ? void 0 : a.deviceClass) === "tablet"
      );
    }
    function b(t, n, r, a, i) {
      var l = o("WAWebUA").parseUA(t),
        s = l.parser.getDevice(),
        u = o("WAWebAndroidTabletDetectionUtils").isGooglebookClientHintRuntime(
          t,
          r,
          a,
          i,
        ),
        c =
          l.os === e
            ? o("WAWebAndroidTabletDetectionUtils").isSupportedAndroidVersion(
                l.osVersion,
              )
            : (i == null ? void 0 : i.clientHintPlatform) === "Android" && u,
        d = K(t, r, a, i);
      return !c && !d
        ? null
        : W(
            s.type,
            l.isOculusBrowser,
            l.parser.getUA(),
            s.vendor,
            s.model,
            n,
            r,
            a,
            i,
            d,
            u,
          );
    }
    function v() {
      var e;
      return ((e = S()) == null ? void 0 : e.deviceClass) === "tablet";
    }
    function S() {
      var e;
      return b(
        o("WAWebUA").UA.parser.getUA(),
        g,
        (e = self.navigator.userAgentData) == null ? void 0 : e.mobile,
        f,
        o(
          "WAWebAndroidTabletDetectionUtils",
        ).getWAWebAndroidTabletRuntimeSignals(),
      );
    }
    function R() {
      return L(
        o("WAWebUA").UA.parser.getUA(),
        o(
          "WAWebAndroidTabletDetectionUtils",
        ).getWAWebAndroidTabletRuntimeSignals(),
      );
    }
    function L(t, n) {
      return (
        o("WAWebUA").parseUA(t).os === e ||
        o("WAWebAndroidTabletDetectionUtils").isAndroidDesktopSiteRuntime(t, n)
      );
    }
    function E() {
      return k(self.screen);
    }
    function k(e) {
      var t = e == null ? NaN : Math.min(e.height, e.width);
      return Number.isNaN(t) || t <= 0
        ? null
        : c.filter(function (e) {
            return t >= e;
          }).length;
    }
    function I() {
      return !y && T();
    }
    function T() {
      var e;
      return (
        ((e = self.navigator.userAgentData) == null
          ? void 0
          : e.getHighEntropyValues) != null && D()
      );
    }
    function D() {
      var t,
        n,
        r,
        a = o("WAWebUA").UA.parser.getDevice();
      if (
        ((t = self.navigator.userAgentData) == null ? void 0 : t.mobile) === !0
      )
        return !1;
      var i =
          o("WAWebUA").UA.os === e &&
          o("WAWebAndroidTabletDetectionUtils").isSupportedAndroidVersion(
            o("WAWebUA").UA.osVersion,
          ),
        l = o(
          "WAWebAndroidTabletDetectionUtils",
        ).getWAWebAndroidTabletRuntimeSignals(),
        s = o("WAWebUA").UA.parser.getUA(),
        u = i
          ? Y(
              a.type,
              s,
              a.model,
              (n = self.navigator.userAgentData) == null ? void 0 : n.mobile,
              void 0,
            )
          : ((r = self.navigator.userAgentData) == null ? void 0 : r.mobile) ===
              !1 &&
            o(
              "WAWebAndroidTabletDetectionUtils",
            ).isAndroidDesktopModeRuntimeCandidate(s, l);
      return (
        u &&
        !o("WAWebUA").UA.isOculusBrowser &&
        !o("WAWebAndroidTabletDetectionUtils").isUnsupportedAndroidDevice(
          o("WAWebUA").UA.parser.getUA(),
          a.vendor,
          a.model,
        )
      );
    }
    function x() {
      return o("WAWebAndroidTabletDetectionUtils").isWAWebGooglebookCandidate();
    }
    function $() {
      return o(
        "WAWebAndroidTabletDetectionUtils",
      ).isWAWebGooglebookClientHintResolutionRequired(y);
    }
    function P() {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          return (
            ((e = yield M()) == null ? void 0 : e.deviceClass) === "tablet"
          );
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
          if (I() || $()) {
            var e = self.navigator.userAgentData;
            if (e == null) return null;
            var t = yield A(e);
            if (t == null) return null;
            ((f = t.formFactors), (g = t.model), (y = !0));
          }
          return S();
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
          var t = o("WATimeUtils").unixTimeMs();
          if (e.getHighEntropyValues == null) return null;
          try {
            var n = yield o("WAPromiseTimeout").promiseTimeout(
              e.getHighEntropyValues(["formFactors", "model"]),
              u,
            );
            return (B("resolved", t), n);
          } catch (e) {
            throw (
              B(
                e instanceof o("WACustomError").TimeoutError
                  ? "timed_out"
                  : "failed",
                t,
              ),
              e
            );
          }
        })),
        F.apply(this, arguments)
      );
    }
    function O() {
      return h;
    }
    function B(e, t) {
      h = {
        durationMs: Math.max(0, o("WATimeUtils").unixTimeMs() - t),
        outcome: e,
      };
    }
    function W(e, t, n, r, a, i, l, u, c, d, m) {
      var p = Q(a, i, m),
        _ = q(a, i, p),
        f = U(e, n, _, l, u, d),
        g = Z(u),
        h = V(g, d, m, c),
        y = G(d, p, l, g, c, h);
      if (f == null || t) return null;
      var C = j(f, y);
      return !h ||
        !H(g, p, _) ||
        !z(C, p) ||
        o("WAWebAndroidTabletDetectionUtils").isUnsupportedAndroidDevice(
          n,
          r,
          _,
        )
        ? null
        : {
            detectionSource: C,
            detectorVersion: s,
            deviceClass: m ? "googlebook" : "tablet",
            modelSource: p,
          };
    }
    function q(e, t, n) {
      return n === "user_agent" ? e : t == null ? void 0 : t.trim();
    }
    function U(e, t, n, r, o, a) {
      return a ? "desktop_mode_signals" : J(e, t, n, r, o);
    }
    function V(e, t, n, r) {
      if (e !== "desktop") return !0;
      if (n && !t)
        return (
          (r == null ? void 0 : r.clientHintPlatform) === "Android" &&
          o("WAWebAndroidTabletDetectionUtils").isTabletScreenSize(r.screenSize)
        );
      var a = t ? "Linux" : "Android";
      return (
        (r == null ? void 0 : r.clientHintPlatform) === a &&
        o("WAWebAndroidTabletDetectionUtils").isTabletClassArmTouchDevice(r)
      );
    }
    function H(e, t, n) {
      return e !== "desktop" || _.has(t) ? !0 : n != null && m.test(n);
    }
    function G(e, t, n, r, o, a) {
      return (
        !e &&
        t === "unavailable" &&
        n === !1 &&
        r === "desktop" &&
        (o == null ? void 0 : o.clientHintPlatform) === "Android" &&
        a
      );
    }
    function z(e, t) {
      return (
        t !== "unavailable" ||
        e === "desktop_mode_signals" ||
        e === "screen_size"
      );
    }
    function j(e, t) {
      return t ? "screen_size" : e;
    }
    function K(e, t, n, r) {
      return (
        t === !1 &&
        Z(n) === "desktop" &&
        o(
          "WAWebAndroidTabletDetectionUtils",
        ).isAndroidDesktopModeRuntimeCandidate(e, r)
      );
    }
    function Q(e, t, n) {
      return n ? "runtime" : X(e, t);
    }
    function X(e, t) {
      return o("WAWebAndroidTabletDetectionUtils").isResolvedAndroidModel(e)
        ? "user_agent"
        : o("WAWebAndroidTabletDetectionUtils").isResolvedAndroidModel(t)
          ? "ua_ch"
          : "unavailable";
    }
    function Y(e, t, n, r, o) {
      return J(e, t, n, r, o) != null;
    }
    function J(e, t, n, r, o) {
      if (r === !0 || /\bmobile\b/i.test(t)) return null;
      var a = Z(o);
      return a !== "unavailable"
        ? ee(a, r)
        : r === !1
          ? "ua_ch_mobile_false"
          : e === d
            ? "ua_parser_device_type"
            : n != null && m.test(n)
              ? "known_model_pattern"
              : null;
    }
    function Z(e) {
      if (e == null || e.length === 0) return "unavailable";
      var t = new Set(
        e.map(function (e) {
          return e.toLowerCase();
        }),
      );
      return t.size !== 1 ||
        Array.from(t).some(function (e) {
          return !p.has(e);
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
    function ee(e, t) {
      return e === "tablet"
        ? "ua_ch_form_factor"
        : e === "desktop" && t === !1
          ? "ua_ch_mobile_false"
          : null;
    }
    ((l.ANDROID_TABLET_DETECTOR_VERSION = s),
      (l.isWAWebFeatureDetectionAndroidTabletUserAgent = C),
      (l.getWAWebFeatureDetectionAndroidTabletInfoUserAgent = b),
      (l.isWAWebFeatureDetectionAndroidTablet = v),
      (l.getWAWebFeatureDetectionAndroidTabletInfo = S),
      (l.isWAWebFeatureDetectionAndroidOS = R),
      (l.isWAWebFeatureDetectionAndroidOSUserAgent = L),
      (l.getWAWebFeatureDetectionAndroidTabletScreenClass = E),
      (l.getWAWebFeatureDetectionAndroidTabletScreenClassForSize = k),
      (l.isWAWebFeatureDetectionAndroidTabletClientHintResolutionRequired = I),
      (l.isWAWebFeatureDetectionAndroidTabletClientHintCandidate = T),
      (l.isWAWebFeatureDetectionAndroidTabletCandidate = D),
      (l.isWAWebFeatureDetectionGooglebookCandidate = x),
      (l.isWAWebFeatureDetectionGooglebookClientHintResolutionRequired = $),
      (l.isWAWebFeatureDetectionAndroidTabletWithClientHints = P),
      (l.getWAWebFeatureDetectionAndroidTabletInfoWithClientHints = M),
      (l.getWAWebAndroidClientHintValues = A),
      (l.getWAWebFeatureDetectionAndroidTabletClientHintResult = O));
  },
  98,
);
