__d(
  "isWAWebFeatureDetectionAndroidTablet",
  ["WAPromiseTimeout", "WAWebUA", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "android",
      s = 2,
      u = 500,
      c = 6,
      d = "tablet",
      m = /^(?:(?:lg-)?v(?:4|5|7|9)\d{2}|(?:lm-)?t\d{3})$/i,
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
      _ = new Set(["", "k", "mobile", "tablet"]),
      f =
        /\b(?:aft[a-z0-9]*|bntv[a-z0-9]*|kf[a-z0-9]{2,}|mibox[0-9]*|sd4930ur|shield|(?:agm|ags|bah|btv|cmr|dby|eln|hey|jdn|kob|mrx|wgr)[a-z0-9]*[-_][a-z0-9]+)\b/i,
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
      ],
      y,
      C,
      b = !1;
    function v(e, t, n, r) {
      return S(e, t, n, r) != null;
    }
    function S(t, n, r, a) {
      var i = o("WAWebUA").parseUA(t);
      if (i.os !== e || !F(i.osVersion)) return null;
      var l = i.parser.getDevice();
      return P(
        l.type,
        i.isOculusBrowser,
        i.parser.getUA(),
        l.vendor,
        l.model,
        n,
        r,
        a,
      );
    }
    function R() {
      return L() != null;
    }
    function L() {
      var e;
      return S(
        o("WAWebUA").UA.parser.getUA(),
        C,
        (e = self.navigator.userAgentData) == null ? void 0 : e.mobile,
        y,
      );
    }
    function E() {
      var t, n, r;
      if (
        b ||
        o("WAWebUA").UA.os !== e ||
        !F(o("WAWebUA").UA.osVersion) ||
        ((t = self.navigator.userAgentData) == null ? void 0 : t.mobile) === !0
      )
        return !1;
      var a = o("WAWebUA").UA.parser.getDevice(),
        i =
          ((n = self.navigator.userAgentData) == null
            ? void 0
            : n.getHighEntropyValues) != null,
        l = N(
          a.type,
          o("WAWebUA").UA.parser.getUA(),
          a.model,
          (r = self.navigator.userAgentData) == null ? void 0 : r.mobile,
          void 0,
        );
      return (
        i &&
        l &&
        !o("WAWebUA").UA.isOculusBrowser &&
        !B(o("WAWebUA").UA.parser.getUA(), a.vendor, a.model)
      );
    }
    function k() {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (yield T()) != null;
        })),
        I.apply(this, arguments)
      );
    }
    function T() {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (E()) {
            var e = self.navigator.userAgentData;
            if (e == null) return null;
            var t = yield x(e);
            if (t == null) return null;
            ((y = t.formFactors), (C = t.model), (b = !0));
          }
          return L();
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return e.getHighEntropyValues == null
            ? null
            : o("WAPromiseTimeout").promiseTimeout(
                e.getHighEntropyValues(["formFactors", "model"]),
                u,
              );
        })),
        $.apply(this, arguments)
      );
    }
    function P(e, t, n, r, o, a, i, l) {
      var u = O(o),
        c = u ? o : a == null ? void 0 : a.trim(),
        d = M(e, n, c, i, l);
      return d == null || t || !O(c) || B(n, r, c)
        ? null
        : {
            detectionSource: d,
            detectorVersion: s,
            modelSource: u ? "user_agent" : "ua_ch",
          };
    }
    function N(e, t, n, r, o) {
      return M(e, t, n, r, o) != null;
    }
    function M(e, t, n, r, o) {
      if (r === !0 || /\bmobile\b/i.test(t)) return null;
      var a = w(o);
      return a !== "unavailable"
        ? A(a, r)
        : r === !1
          ? "ua_ch_mobile_false"
          : e === d
            ? "ua_parser_device_type"
            : n != null && m.test(n)
              ? "known_model_pattern"
              : null;
    }
    function w(e) {
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
    function A(e, t) {
      return e === "tablet"
        ? "ua_ch_form_factor"
        : e === "desktop" && t === !1
          ? "ua_ch_mobile_false"
          : null;
    }
    function F(e) {
      return parseInt(e, 10) >= c;
    }
    function O(e) {
      var t = e == null ? void 0 : e.trim().toLowerCase();
      return t != null && !_.has(t);
    }
    function B(e, t, n) {
      var r,
        o = e.toLowerCase(),
        a = (r = t == null ? void 0 : t.toLowerCase()) != null ? r : "",
        i = h.some(function (e) {
          return o.includes(e);
        });
      return g.has(a) || i || (n != null && f.test(n));
    }
    ((l.isWAWebFeatureDetectionAndroidTabletUserAgent = v),
      (l.getWAWebFeatureDetectionAndroidTabletInfoUserAgent = S),
      (l.isWAWebFeatureDetectionAndroidTablet = R),
      (l.getWAWebFeatureDetectionAndroidTabletInfo = L),
      (l.isWAWebFeatureDetectionAndroidTabletClientHintResolutionRequired = E),
      (l.isWAWebFeatureDetectionAndroidTabletWithClientHints = k),
      (l.getWAWebFeatureDetectionAndroidTabletInfoWithClientHints = T),
      (l.getWAWebAndroidClientHintValues = x));
  },
  98,
);
