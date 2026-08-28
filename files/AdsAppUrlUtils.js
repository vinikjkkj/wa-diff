__d(
  "AdsAppUrlUtils",
  ["AdsAppUtilsShared", "URI", "ads-app-platforms", "isFacebookURI"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        getMobileAppStoreNameFromUrl: function (t) {
          return t == null
            ? null
            : s.isItunesURL(t)
              ? o("ads-app-platforms").MOBILE_STORE.ITUNES
              : s.isGooglePlayURL(t)
                ? o("ads-app-platforms").MOBILE_STORE.GOOGLE_PLAY
                : s.isAmazonURL(t)
                  ? o("ads-app-platforms").MOBILE_STORE.AMAZON
                  : s.isWindowsURL(t)
                    ? o("ads-app-platforms").MOBILE_STORE.WINDOWS_10_STORE
                    : s.isGalaxyStoreURL(t)
                      ? o("ads-app-platforms").MOBILE_STORE.GALAXY_STORE
                      : s.isOculusURL(t)
                        ? o("ads-app-platforms").MOBILE_STORE.OCULUS_APP_STORE
                        : s.isXiaomiMiStoreURL(t)
                          ? o("ads-app-platforms").MOBILE_STORE.XIAOMI
                          : s.isHorizonWorldURL(t)
                            ? o("ads-app-platforms").MOBILE_STORE.HORIZON_WORLD
                            : null;
        },
        isItunesURL: function (t) {
          if (t == null) return !1;
          var e = o("AdsAppUtilsShared").safeParseURI(t);
          return (
            !!e &&
            (e.getDomain() === "itunes.apple.com" ||
              e.getDomain() === "apps.apple.com")
          );
        },
        isGooglePlayURL: function (t) {
          if (t == null) return !1;
          var e = o("AdsAppUtilsShared").safeParseURI(t);
          return !!e && e.getDomain() === "play.google.com";
        },
        isAmazonURL: function (t) {
          if (t == null) return !1;
          var e = o("AdsAppUtilsShared").safeParseURI(t);
          return !!e && e.getDomain() === "www.amazon.com";
        },
        isWindowsURL: function (t) {
          if (t == null) return !1;
          var e = o("AdsAppUtilsShared").safeParseURI(t);
          return !!e && e.getDomain() === "www.microsoft.com";
        },
        isOculusURL: function (t) {
          if (t == null) return !1;
          var e = o("AdsAppUtilsShared").safeParseURI(t);
          return e ? e.getDomain() === "www.oculus.com" : !1;
        },
        isHorizonWorldURL: function (t) {
          if (t == null) return !1;
          var e = o("AdsAppUtilsShared").safeParseURI(t);
          return (
            e != null &&
            e.getDomain() === "horizon.meta.com" &&
            e.getPath().startsWith("/world/")
          );
        },
        isGalaxyStoreURL: function (t) {
          if (t == null) return !1;
          var e = o("AdsAppUtilsShared").safeParseURI(t);
          return e ? e.getDomain() === "galaxystore.samsung.com" : !1;
        },
        isXiaomiMiStoreURL: function (t) {
          if (t == null) return !1;
          var e = o("AdsAppUtilsShared").safeParseURI(t);
          return (
            e != null &&
            (e.getDomain() === "global.app.mi.com" ||
              e.getDomain() === "app.mi.com")
          );
        },
        isXiaomiGetAppsURL: function (t) {
          if (t == null) return !1;
          var e = o("AdsAppUtilsShared").safeParseURI(t);
          return e
            ? e.getDomain() === "details" && e.getProtocol() === "mimarket"
            : !1;
        },
        isInstantGameURL: function (t) {
          if (t == null) return !1;
          var e = o("AdsAppUtilsShared").safeParseURI(t);
          return (
            !!e &&
            r("isFacebookURI")(e) &&
            (e.getPath().indexOf("/instantgames") === 0 ||
              e.getPath().indexOf("/gaming/play") === 0)
          );
        },
        getItunesContentId: function (t) {
          if (!s.isItunesURL(t)) return null;
          var e = /\/app\/id([0-9]+)/i.exec(t);
          return e && e[1] ? e[1] : null;
        },
        isAppStoreURL: function (t) {
          if (t == null) return !1;
          var e = o("AdsAppUtilsShared").safeParseURI(t);
          return (
            e != null &&
            (s.isItunesURL(e) ||
              s.isGooglePlayURL(e) ||
              s.isAmazonURL(e) ||
              s.isWindowsURL(e) ||
              s.isCanvasLink(e) ||
              s.isGameroomURL(e) ||
              s.isInstantGameURL(e) ||
              s.isOculusURL(e) ||
              s.isGalaxyStoreURL(e) ||
              s.isXiaomiMiStoreURL(e) ||
              s.isHorizonWorldURL(e))
          );
        },
        isAndroidStoreURL: function (t) {
          if (t == null) return !1;
          var e = o("AdsAppUtilsShared").safeParseURI(t);
          return (
            e != null &&
            (s.isGooglePlayURL(e) ||
              s.isAmazonURL(e) ||
              s.isGalaxyStoreURL(e) ||
              s.isXiaomiMiStoreURL(e) ||
              s.isXiaomiGetAppsURL(e))
          );
        },
        isCanvasLink: function (t) {
          return o("AdsAppUtilsShared").isCanvasLink(t);
        },
        isFacebookDesktopURL: function (t) {
          return o("AdsAppUtilsShared").isFacebookDesktopURL(t);
        },
        isGameroomURL: function (t) {
          return o("AdsAppUtilsShared").isGameroomURL(t);
        },
        removeReferrerTag: function (n) {
          if (n == null) return null;
          var t = (e || (e = r("URI"))).tryParseURI(n);
          return t == null
            ? null
            : (t.removeQueryData("referrer"), t.toString());
        },
        hasBothAndroidAndIOSPlatforms: function (t) {
          if (t == null) return !1;
          var e =
              t == null
                ? void 0
                : t.map(function (e) {
                    return s.getMobileAppStoreNameFromUrl(e);
                  }),
            n = [
              o("ads-app-platforms").MOBILE_STORE.GOOGLE_PLAY,
              o("ads-app-platforms").MOBILE_STORE.AMAZON,
              o("ads-app-platforms").MOBILE_STORE.XIAOMI,
              o("ads-app-platforms").MOBILE_STORE.GALAXY_STORE,
            ];
          return (
            e.includes(o("ads-app-platforms").MOBILE_STORE.ITUNES) &&
            n.some(function (t) {
              return e.includes(t);
            })
          );
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
