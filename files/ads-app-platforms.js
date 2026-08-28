__d(
  "ads-app-platforms",
  ["fbt", "invariant", "ads-mobile-operating-systems", "isFalsey"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = {
        WEB: 1,
        CANVAS: 2,
        MOBILE_WEB: 3,
        IPHONE: 4,
        IPAD: 5,
        ANDROID: 6,
        IOS: 7,
        DESKTOP_CANVAS: 8,
        WINDOWS: 9,
        AMAZON: 10,
        GAMEROOM: 11,
        INSTANT_GAME: 12,
        OCULUS: 13,
        SAMSUNG: 14,
        APKPURE: 15,
        APKMONK: 18,
        XIAOMI: 19,
        HORIZON_WORLD: 22,
      },
      d = {
        INVALID: 0,
        CANVAS: 1,
        MOBILE_CANVAS: 2,
        MOBILE_NATIVE: 3,
        GAMEROOM: 4,
        INSTANT_GAME: 5,
        OCULUS: 6,
      },
      m = Object.freeze({
        ALL_APP_STORES_FOR_ANDROID_AND_IOS:
          "all_app_stores_for_android_and_ios",
        GOOGLE_PLAY: "google_play",
        GALAXY_STORE: "galaxy_store",
        ITUNES: "itunes",
        ITUNES_IPAD: "itunes_ipad",
        WINDOWS_10_STORE: "windows_10_store",
        FB_CANVAS: "fb_canvas",
        AMAZON: "amazon_app_store",
        FB_GAMEROOM: "fb_gameroom",
        INSTANT_GAME: "instant_game",
        OCULUS_APP_STORE: "oculus_app_store",
        XIAOMI: "xiaomi",
        NEON_ANDROID_STORE: "neon_android_store",
        DIGITAL_TURBINE_STORE: "digital_turbine_store",
        HORIZON_WORLD: "horizon_world",
      }),
      p = {
        FB_APPLICATION_ONLY: "application",
        FB_MOBILE_STORE_ONLY: "mobile_store",
        FB_MOBILE_STORE_WITH_BACKING_APP:
          "mobile_store_with_matching_application",
      },
      _ = {};
    ((_[c.IOS] = s._(/*BTDS*/ "Apple App Store")),
      (_[c.IPAD] = s._(/*BTDS*/ "Apple App Store for iPad")),
      (_[c.ANDROID] = s._(/*BTDS*/ "Google Play Store")),
      (_[c.DESKTOP_CANVAS] = s._(/*BTDS*/ "Facebook Canvas")),
      (_[c.AMAZON] = s._(/*BTDS*/ "Amazon Appstore")),
      (_[c.WINDOWS] = s._(/*BTDS*/ "Windows Store")),
      (_[c.GAMEROOM] = s._(/*BTDS*/ "Facebook Gameroom")),
      (_[c.INSTANT_GAME] = s._(/*BTDS*/ "Games")),
      (_[c.OCULUS] = s._(/*BTDS*/ "Oculus App Store")),
      (_[c.SAMSUNG] = s._(/*BTDS*/ "Samsung Galaxy Store")),
      (_[c.XIAOMI] = s._(/*BTDS*/ "Xiaomi GetApps Store")),
      (_[c.HORIZON_WORLD] = s._(/*BTDS*/ "Worlds in Meta Horizon")));
    var f = {};
    ((f[m.ITUNES] = s._(/*BTDS*/ "Apple App Store")),
      (f[m.ITUNES_IPAD] = s._(/*BTDS*/ "Apple App Store for iPad")),
      (f[m.GOOGLE_PLAY] = s._(/*BTDS*/ "Google Play Store")),
      (f[m.FB_CANVAS] = s._(/*BTDS*/ "Facebook Canvas")),
      (f[m.AMAZON] = s._(/*BTDS*/ "Amazon Appstore")),
      (f[m.WINDOWS_10_STORE] = s._(/*BTDS*/ "Windows Store")),
      (f[m.FB_GAMEROOM] = s._(/*BTDS*/ "Facebook Gameroom")),
      (f[m.INSTANT_GAME] = s._(/*BTDS*/ "Games")),
      (f[m.OCULUS_APP_STORE] = s._(/*BTDS*/ "Oculus App Store")),
      (f[m.GALAXY_STORE] = s._(/*BTDS*/ "Samsung Galaxy Store")),
      (f[m.XIAOMI] = s._(/*BTDS*/ "Xiaomi GetApps Store")),
      (f[m.NEON_ANDROID_STORE] = s._(/*BTDS*/ "Neon Android Store")),
      (f[m.DIGITAL_TURBINE_STORE] = s._(/*BTDS*/ "Mobile App Hub")),
      (f[m.ALL_APP_STORES_FOR_ANDROID_AND_IOS] = s._(
        /*BTDS*/ "All app stores for Android and iOS",
      )),
      (f[m.HORIZON_WORLD] = s._(/*BTDS*/ "Worlds in Meta Horizon")));
    var g = {};
    ((g[d.INVALID] = s._(
      /*BTDS*/ "The app does not support any native mobile platforms",
    )),
      (g[c.IPHONE] = s._(/*BTDS*/ "iPhone")),
      (g[c.IPAD] = s._(/*BTDS*/ "iPad")),
      (g[c.ANDROID] = s._(/*BTDS*/ "Android")),
      (g[c.IOS] = s._(/*BTDS*/ "iOS")),
      (g[c.CANVAS] = s._(/*BTDS*/ "Canvas")),
      (g[c.WINDOWS] = s._(/*BTDS*/ "Windows")),
      (g[c.AMAZON] = s._(/*BTDS*/ "Amazon")),
      (g[c.SAMSUNG] = s._(/*BTDS*/ "Samsung")),
      (g[c.XIAOMI] = s._(/*BTDS*/ "Xiaomi")));
    var h = {};
    ((h[c.IPHONE] = "iPhone"),
      (h[c.IPAD] = "iPad"),
      (h[c.ANDROID] = "Android"),
      (h[c.IOS] = "iOS"),
      (h[c.CANVAS] = "Canvas"),
      (h[c.WINDOWS] = "Windows"),
      (h[c.AMAZON] = "Amazon"),
      (h[c.SAMSUNG] = "Samsung"),
      (h[c.XIAOMI] = "Xiaomi"));
    var y = {};
    ((y[c.ANDROID] = m.GOOGLE_PLAY),
      (y[c.CANVAS] = m.FB_CANVAS),
      (y[c.DESKTOP_CANVAS] = m.FB_CANVAS),
      (y[c.IOS] = m.ITUNES),
      (y[c.IPAD] = m.ITUNES_IPAD),
      (y[c.IPHONE] = m.ITUNES),
      (y[c.WINDOWS] = m.WINDOWS_10_STORE),
      (y[d.INVALID] = ""),
      (y[c.AMAZON] = m.AMAZON),
      (y[c.GAMEROOM] = m.FB_GAMEROOM),
      (y[c.SAMSUNG] = m.GALAXY_STORE),
      (y[c.XIAOMI] = m.XIAOMI));
    var C = {};
    ((C[m.ITUNES] = c.IPHONE),
      (C[m.ITUNES_IPAD] = c.IPAD),
      (C[m.GOOGLE_PLAY] = c.ANDROID),
      (C[m.FB_CANVAS] = c.CANVAS),
      (C[m.WINDOWS_10_STORE] = c.WINDOWS),
      (C[m.AMAZON] = c.AMAZON),
      (C[m.FB_GAMEROOM] = c.GAMEROOM),
      (C[m.GALAXY_STORE] = c.SAMSUNG),
      (C[m.XIAOMI] = c.XIAOMI),
      (C[m.NEON_ANDROID_STORE] = c.ANDROID),
      (C[m.DIGITAL_TURBINE_STORE] = c.ANDROID));
    var b = {};
    ((b[(e = o("ads-mobile-operating-systems")).operatingSystems.ANDROID] =
      c.ANDROID),
      (b[e.operatingSystems.IOS] = c.IOS),
      (b[e.operatingSystems.WINDOWS] = c.WINDOWS));
    var v = {};
    ((v[e.operatingSystems.ANDROID] = m.GOOGLE_PLAY),
      (v[e.operatingSystems.IOS] = m.ITUNES));
    function S(e) {
      return !e || !e.length
        ? !1
        : e.some(function (e) {
            return (
              e === c.CANVAS ||
              e === c.DESKTOP_CANVAS ||
              e === c.GAMEROOM ||
              e === c.INSTANT_GAME ||
              e === c.OCULUS
            );
          });
    }
    function R(e) {
      if (!r("isFalsey")(e))
        switch (e) {
          case m.ITUNES:
          case m.ITUNES_IPAD:
            return o("ads-mobile-operating-systems").operatingSystems.IOS;
          case m.AMAZON:
          case m.GOOGLE_PLAY:
          case m.GALAXY_STORE:
          case m.XIAOMI:
          case m.NEON_ANDROID_STORE:
          case m.DIGITAL_TURBINE_STORE:
            return o("ads-mobile-operating-systems").operatingSystems.ANDROID;
          case m.FB_GAMEROOM:
          case m.WINDOWS_10_STORE:
            return o("ads-mobile-operating-systems").operatingSystems.WINDOWS;
          case m.FB_CANVAS:
            return o("ads-mobile-operating-systems").operatingSystems.FB_CANVAS;
          case m.INSTANT_GAME:
            return o("ads-mobile-operating-systems").operatingSystems.ALL;
          case m.HORIZON_WORLD:
          case m.OCULUS_APP_STORE:
          case m.ALL_APP_STORES_FOR_ANDROID_AND_IOS:
            return o("ads-mobile-operating-systems").operatingSystems.ALL;
          default:
            u(0, 3249, e);
        }
    }
    function L(e) {
      if (!r("isFalsey")(e))
        switch (e) {
          case c.IOS:
          case c.IPAD:
          case c.IPHONE:
            return o("ads-mobile-operating-systems").operatingSystems.IOS;
          case c.ANDROID:
          case c.AMAZON:
          case c.SAMSUNG:
          case c.XIAOMI:
            return o("ads-mobile-operating-systems").operatingSystems.ANDROID;
          case c.WINDOWS:
            return o("ads-mobile-operating-systems").operatingSystems.WINDOWS;
          default:
            u(0, 3250, e);
        }
    }
    function E(e, t) {
      return m.ITUNES === e && t;
    }
    function k(e) {
      return m.OCULUS_APP_STORE === e;
    }
    function I(e, t) {
      return (
        t === void 0 && (t = !1),
        k(e)
          ? s._(/*BTDS*/ "Meta Quest App Store")
          : E(e, t)
            ? s._(/*BTDS*/ "Apple App Store (iOS 13.7 or earlier)")
            : f[e] || e
      );
    }
    function T(e) {
      var t = function (t, n) {
        var e = t.toLowerCase();
        return e.indexOf(n.toLowerCase()) >= 0;
      };
      return t(e, o("ads-mobile-operating-systems").operatingSystems.IOS)
        ? o("ads-mobile-operating-systems").operatingSystems.IOS
        : t(e, o("ads-mobile-operating-systems").operatingSystems.ANDROID)
          ? o("ads-mobile-operating-systems").operatingSystems.ANDROID
          : t(e, o("ads-mobile-operating-systems").operatingSystems.WINDOWS)
            ? o("ads-mobile-operating-systems").operatingSystems.WINDOWS
            : null;
    }
    ((l.APP_PLATFORM = c),
      (l.MOBILE_STORE = m),
      (l.MOBILE_STORE_DESTINATION_TYPE = p),
      (l.MOBILE_STORE_TO_NATIVE_APP_MAP = C),
      (l.supportsDesktop = S),
      (l.getOSForMobileStore = R),
      (l.getMobileOSForPlatform = L),
      (l.getStoreName = I),
      (l.getMobileOperatingSystemFromUserOS = T));
  },
  226,
);
