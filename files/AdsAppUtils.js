__d(
  "AdsAppUtils",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAdgroupDeepLinkFieldText",
    "AdsAppUrlUtils",
    "AdsAppUtilsShared",
    "AdsBulkValueUtils",
    "AdsMobileAppObjectivesUtils",
    "AdsMobileDeviceTypes",
    "AdsPromotedObjectAppUtils",
    "AdsPromotedObjectTypes",
    "AdsUserDeviceTypes",
    "ads-app-platforms",
    "ads-mobile-platforms",
    "dotAccess",
    "firstKeyWithValue",
    "getObjectValues",
    "gkx",
    "immutable",
    "isTruthy",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = [
        {
          isURL: (s = r("AdsAppUrlUtils")).isGooglePlayURL,
          store: (e = o("ads-app-platforms")).MOBILE_STORE.GOOGLE_PLAY,
        },
        { isURL: s.isAmazonURL, store: e.MOBILE_STORE.AMAZON },
        { isURL: s.isCanvasLink, store: e.MOBILE_STORE.FB_CANVAS },
        { isURL: s.isGameroomURL, store: e.MOBILE_STORE.FB_GAMEROOM },
        { isURL: s.isInstantGameURL, store: e.MOBILE_STORE.INSTANT_GAME },
        { isURL: s.isOculusURL, store: e.MOBILE_STORE.OCULUS_APP_STORE },
        { isURL: s.isItunesURL, store: e.MOBILE_STORE.ITUNES },
        { isURL: s.isWindowsURL, store: e.MOBILE_STORE.WINDOWS_10_STORE },
        { isURL: s.isGalaxyStoreURL, store: e.MOBILE_STORE.GALAXY_STORE },
        { isURL: s.isXiaomiMiStoreURL, store: e.MOBILE_STORE.XIAOMI },
      ],
      c = r("immutable").Set([
        r("AdsAPIObjectives").CANVAS_APP_INSTALLS,
        r("AdsAPIObjectives").CANVAS_APP_ENGAGEMENT,
      ]),
      d = {
        filterByPlatform: function (t, n) {
          var e = [];
          return (
            t.forEach(function (t) {
              var r = n.some(function (e) {
                return d.appHasPlatform(t, e);
              });
              r && e.push(t);
            }),
            e
          );
        },
        filterByMessengerProduct: function (t) {
          var e = [];
          return (
            t.forEach(function (t) {
              t.has_messenger_product && e.push(t);
            }),
            e
          );
        },
        filterAvailableAppsIncludingMessengerProduct: function (t, n) {
          var e = d.filterByPlatform(t, n),
            r = d.filterByMessengerProduct(t);
          return (
            r.forEach(function (t) {
              for (var n = 0; n < e.length; n++) if (t.id === e[n].id) return;
              e.push(t);
            }),
            e
          );
        },
        isAppObjective: function (t, n) {
          return (
            t === r("AdsAPIObjectives").APP_INSTALLS ||
            d.isMobileAppObjective(t, n) ||
            d.isCanvasAppObjective(t, n)
          );
        },
        areAnyMobileAppObjectives: function (t, n) {
          return t.some(function (e, t) {
            return d.isMobileAppObjective(e, n != null ? n[t] : null);
          });
        },
        areAnyDesktopAppObjectives: function (t, n) {
          return t.some(function (e, t) {
            return d.isCanvasAppObjective(e, n != null ? n[t] : null);
          });
        },
        isMobileAppObjective: o("AdsMobileAppObjectivesUtils")
          .isMobileAppObjective,
        isCanvasAppObjective: function (t, n) {
          return n === r("AdsPromotedObjectTypes").CANVAS_APP || c.has(t);
        },
        isCanvasApp: function (t) {
          return (
            !!t.object_store_urls &&
            !!t.object_store_urls[o("ads-app-platforms").MOBILE_STORE.FB_CANVAS]
          );
        },
        isMobileApp: function (t) {
          var e = t.object_store_urls || {};
          return (
            !!e[o("ads-app-platforms").MOBILE_STORE.GOOGLE_PLAY] ||
            !!e[o("ads-app-platforms").MOBILE_STORE.ITUNES] ||
            !!e[o("ads-app-platforms").MOBILE_STORE.ITUNES_IPAD] ||
            !!e[o("ads-app-platforms").MOBILE_STORE.AMAZON] ||
            !!e[o("ads-app-platforms").MOBILE_STORE.OCULUS_APP_STORE] ||
            (!!e[o("ads-app-platforms").MOBILE_STORE.HORIZON_WORLD] &&
              r("gkx")("18176")) ||
            !!e[o("ads-app-platforms").MOBILE_STORE.GALAXY_STORE] ||
            !!e[o("ads-app-platforms").MOBILE_STORE.XIAOMI]
          );
        },
        isAppEventOptimization: function (t, n, o) {
          return (
            n === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS &&
            (t === r("AdsAPIObjectives").MOBILE_APP_ENGAGEMENT ||
              d.isMobileAppInstall(t, o) ||
              d.isCanvasAppInstall(t, o))
          );
        },
        isRetentionOptimization: function (t, n, o) {
          return (
            n === r("AdsAPIOptimizationGoals").DERIVED_EVENTS &&
            d.isMobileAppInstall(t, o)
          );
        },
        isAppInstallsAndEventOptimization: function (t, n, o) {
          return (
            n ===
              r("AdsAPIOptimizationGoals")
                .APP_INSTALLS_AND_OFFSITE_CONVERSIONS &&
            (d.isMobileAppInstall(t, o) || d.isCanvasAppInstall(t, o))
          );
        },
        isPermissionCheckRequired: function (t, n) {
          return (
            o("AdsAppUtilsShared").isAppInstall(t) &&
            (n === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS ||
              n === r("AdsAPIOptimizationGoals").APP_INSTALLS)
          );
        },
        isRoasOptimization: function (t, n, o) {
          return (
            d.isMobileAppInstall(t, o) &&
            n === r("AdsAPIOptimizationGoals").VALUE
          );
        },
        isInAppValueOptimization: function (t, n, o) {
          return (
            d.isMobileAppInstall(t, o) &&
            n === r("AdsAPIOptimizationGoals").IN_APP_VALUE
          );
        },
        isMobileAppInstall: function (t, n) {
          return (
            t === r("AdsAPIObjectives").MOBILE_APP_INSTALLS ||
            (t === r("AdsAPIObjectives").APP_INSTALLS &&
              n === r("AdsPromotedObjectTypes").MOBILE_APP)
          );
        },
        isCanvasAppInstall: function (t, n) {
          return (
            t === r("AdsAPIObjectives").CANVAS_APP_INSTALLS ||
            (t === r("AdsAPIObjectives").APP_INSTALLS &&
              n === r("AdsPromotedObjectTypes").CANVAS_APP)
          );
        },
        isCanvasAppEngagement: function (t, n) {
          return (
            t === r("AdsAPIObjectives").CANVAS_APP_ENGAGEMENT ||
            (t === r("AdsAPIObjectives").LINK_CLICKS &&
              n === r("AdsPromotedObjectTypes").CANVAS_APP)
          );
        },
        areAllAppInstall: function (t) {
          return t.every(function (e) {
            return o("AdsAppUtilsShared").isAppInstall(e);
          });
        },
        getDeeplinkInputLabelForObjectives: function (t, n) {
          var e = o("AdsBulkValueUtils").getUniformValue(t, null);
          return o("AdsAppUtilsShared").isAppInstall(e)
            ? {
                helpText: o(
                  "AdsAdgroupDeepLinkFieldText",
                ).renderMAIDeepLinkMobileHelpText(n),
                label: o(
                  "AdsAdgroupDeepLinkFieldText",
                ).renderMAIDeepLinkMobileLabel(),
                placeholder: o(
                  "AdsAdgroupDeepLinkFieldText",
                ).renderMAIDeepLinkMobilePlaceholder(),
              }
            : {
                helpText: o(
                  "AdsAdgroupDeepLinkFieldText",
                ).renderMAEDeepLinkMobileHelpTextWithULNew(),
                label: o(
                  "AdsAdgroupDeepLinkFieldText",
                ).renderMAEDeepLinkMobileLabel(),
                placeholder: o(
                  "AdsAdgroupDeepLinkFieldText",
                ).renderMAEDeepLinkMobilePlaceholder(),
              };
        },
        areAllAppEngagementObjective: function (t, n) {
          return t.every(function (e, t) {
            return d.isAppEngagementObjective(e, n != null ? n[t] : null);
          });
        },
        getDeepLink: function (t) {
          var e = r("dotAccess")(
            t,
            "creative.object_story_spec.link_data.link",
          );
          if (e) return e;
          var n = r("dotAccess")(
            t,
            "creative.object_story_spec.video_data.call_to_action.value.link",
          );
          return n || null;
        },
        getAppStoreName: function (t, n, a) {
          var e = d.getDeepLink(t);
          if (!e) return null;
          var i = r("AdsAppUrlUtils").getMobileAppStoreNameFromUrl(e);
          return (
            i ||
            (d.isCanvasAppObjective(n, a)
              ? o("ads-app-platforms").MOBILE_STORE.FB_CANVAS
              : null)
          );
        },
        getMobilePlatforms: function () {
          return d.getPlatformsForObjectives([
            r("AdsAPIObjectives").MOBILE_APP_INSTALLS,
            r("AdsAPIObjectives").MOBILE_APP_ENGAGEMENT,
          ]);
        },
        getPlatformsForObjective: function (t) {
          var e;
          return (e = m.get(t)) != null ? e : [];
        },
        getPlatformsForObjectives: function (t) {
          var e = !1,
            n = !1;
          if (
            (t.forEach(function (t) {
              t === r("AdsAPIObjectives").NONE ||
                (d.isMobileAppObjective(t)
                  ? (e = !0)
                  : d.isCanvasAppObjective(t)
                    ? (n = !0)
                    : t === r("AdsAPIObjectives").CONVERSIONS && (e = !0));
            }),
            e && n)
          )
            return [];
          if (n)
            return [
              o("ads-app-platforms").MOBILE_STORE.FB_CANVAS,
              o("ads-app-platforms").MOBILE_STORE.FB_GAMEROOM,
            ];
          var a = r("getObjectValues")(o("ads-app-platforms").MOBILE_STORE);
          return e
            ? a.filter(function (e) {
                return (
                  e !== o("ads-app-platforms").MOBILE_STORE.FB_CANVAS &&
                  e !== o("ads-app-platforms").MOBILE_STORE.FB_GAMEROOM
                );
              })
            : a;
        },
        getPlatformFromStoreName: function (t) {
          if (t === o("ads-app-platforms").MOBILE_STORE.ITUNES)
            return o("ads-app-platforms").APP_PLATFORM.IOS;
          var e = o("ads-app-platforms").MOBILE_STORE_TO_NATIVE_APP_MAP;
          return e[t];
        },
        appHasPlatform: function (t, n) {
          return !!(t.object_store_urls && t.object_store_urls[n]);
        },
        getDefaultAppLink: function (t, n, r) {
          var e = d.getPlatformsForObjectives(n).filter(function (e) {
            return e in t.object_store_urls && r.has(e);
          });
          if (e.length === 1) return t.object_store_urls[e[0]];
          var a = e.find(function (e) {
            return e !== o("ads-app-platforms").MOBILE_STORE.INSTANT_GAME;
          });
          return t.object_store_urls[a];
        },
        getAppStoreFromUrl: function (t, n) {
          if (!n || !t) return null;
          var e = r("firstKeyWithValue")(t, n);
          if (e !== null) return e;
          for (var a of u) {
            var i = a.isURL,
              l = a.store;
            if (i(n))
              return l === o("ads-app-platforms").MOBILE_STORE.ITUNES
                ? d.getAppStoreNameFromITunesUrl(t, n)
                : t[l]
                  ? l
                  : null;
          }
          return null;
        },
        getAppStoreNameFromITunesUrl: function (t, n) {
          var e = !!t[o("ads-app-platforms").MOBILE_STORE.ITUNES],
            a = !!t[o("ads-app-platforms").MOBILE_STORE.ITUNES_IPAD];
          if (e && !a) return o("ads-app-platforms").MOBILE_STORE.ITUNES;
          if (a && !e) return o("ads-app-platforms").MOBILE_STORE.ITUNES_IPAD;
          if (!e && !a) return null;
          var i = r("AdsAppUrlUtils").getItunesContentId(n);
          if (i == null) return null;
          var l = r("AdsAppUrlUtils").getItunesContentId(
              t[o("ads-app-platforms").MOBILE_STORE.ITUNES],
            ),
            s = r("AdsAppUrlUtils").getItunesContentId(
              t[o("ads-app-platforms").MOBILE_STORE.ITUNES_IPAD],
            );
          return i === l
            ? o("ads-app-platforms").MOBILE_STORE.ITUNES
            : i === s
              ? o("ads-app-platforms").MOBILE_STORE.ITUNES_IPAD
              : null;
        },
        isValidDeviceForStore: function (t, n) {
          return t === o("ads-app-platforms").MOBILE_STORE.ITUNES ||
            t === o("ads-app-platforms").MOBILE_STORE.ITUNES_IPAD
            ? o("ads-mobile-platforms").isIosDevice(n)
            : t === o("ads-app-platforms").MOBILE_STORE.GOOGLE_PLAY
              ? o("ads-mobile-platforms").isAndroidDevice(n) &&
                n !== r("AdsMobileDeviceTypes").AMAZON
              : t === o("ads-app-platforms").MOBILE_STORE.AMAZON
                ? n === r("AdsMobileDeviceTypes").AMAZON
                : t === o("ads-app-platforms").MOBILE_STORE.OCULUS_APP_STORE ||
                  t === o("ads-app-platforms").MOBILE_STORE.GALAXY_STORE ||
                  t === o("ads-app-platforms").MOBILE_STORE.XIAOMI;
        },
        getDefaultUserDevices: function (t) {
          return t === o("ads-app-platforms").MOBILE_STORE.AMAZON
            ? [r("AdsMobileDeviceTypes").AMAZON]
            : t === o("ads-app-platforms").MOBILE_STORE.ITUNES_IPAD
              ? [r("AdsMobileDeviceTypes").IPAD]
              : t === o("ads-app-platforms").MOBILE_STORE.GALAXY_STORE
                ? [r("AdsMobileDeviceTypes").SAMSUNG]
                : t === o("ads-app-platforms").MOBILE_STORE.XIAOMI
                  ? [r("AdsMobileDeviceTypes").XIAOMI]
                  : [];
        },
        isBackedByFBApp: function (t) {
          return (
            t ===
              o("ads-app-platforms").MOBILE_STORE_DESTINATION_TYPE
                .FB_APPLICATION_ONLY ||
            t ===
              o("ads-app-platforms").MOBILE_STORE_DESTINATION_TYPE
                .FB_MOBILE_STORE_WITH_BACKING_APP
          );
        },
        hasBackingApplication: function (t, n) {
          return r("AdsAppUrlUtils").isCanvasLink(t) || d.isBackedByFBApp(n);
        },
        shouldDisableAppPlatformField: function (t, n, r) {
          return r.match({
            loading: function () {
              return t;
            },
            error: function () {
              return t;
            },
            loaded: function (r) {
              var e = r.find(function (e) {
                  return e.id === n;
                }),
                o = e == null ? void 0 : e.isFake;
              return t || !!o;
            },
          });
        },
        getSelectableAppPlatformOptions: function (t, n, a, i) {
          var e,
            l = function (n) {
              return n.find(function (e) {
                return e != null ? e.id === t : !1;
              });
            },
            s = n.match({
              loading: function () {
                var e = n.getValue();
                return e != null ? l(e) : null;
              },
              error: function () {
                return null;
              },
              loaded: l,
            }),
            u = s == null ? void 0 : s.isFake;
          if (s == null || u)
            return i.map(function (e) {
              return { url: e != null ? e : null, name: e };
            });
          var c = r("immutable")
            .Set(Object.keys((e = s.object_store_urls) != null ? e : {}))
            .intersect(a)
            .toArray();
          return c.map(function (e) {
            return {
              url: s.object_store_urls[e],
              name: o("ads-app-platforms").getStoreName(e),
              platform: e,
            };
          });
        },
        getDefaultUrlsPCAConversionLocation: function (t, n) {
          return Array.from(n)
            .filter(function (e) {
              return r("isTruthy")(t[e]);
            })
            .map(function (e) {
              return t[e];
            });
        },
        getSupportedDevicesByDeviceType: function (t) {
          return t === r("AdsUserDeviceTypes").IOS
            ? [
                r("AdsMobileDeviceTypes").IPAD,
                r("AdsMobileDeviceTypes").IPOD,
                r("AdsMobileDeviceTypes").IPHONE,
              ]
            : t === r("AdsUserDeviceTypes").ANDROID
              ? [
                  r("AdsMobileDeviceTypes").ANDROID_SMARTPHONE,
                  r("AdsMobileDeviceTypes").ANDROID_TABLET,
                ]
              : [];
        },
        isAppEngagementObjective: function (t, n) {
          var e =
            (t === r("AdsAPIObjectives").CONVERSIONS ||
              t === r("AdsAPIObjectives").LINK_CLICKS ||
              t === r("AdsAPIObjectives").OUTCOME_ENGAGEMENT ||
              t === r("AdsAPIObjectives").OUTCOME_SALES ||
              t === r("AdsAPIObjectives").OUTCOME_LEADS ||
              t === r("AdsAPIObjectives").OUTCOME_TRAFFIC) &&
            o("AdsPromotedObjectAppUtils").isAppType(n);
          return e || t === r("AdsAPIObjectives").MOBILE_APP_ENGAGEMENT;
        },
        storeRequiresUserLevelEntitledTargeting: function (t) {
          return t === o("ads-app-platforms").MOBILE_STORE.OCULUS_APP_STORE;
        },
        storeUrlRequiresUserLevelEntitledTargeting: function (t) {
          return t == null ? !1 : r("AdsAppUrlUtils").isOculusURL(t);
        },
        hasUnifiedAppStoreForSalesObjective: function (t, n) {
          return (
            t === r("AdsAPIObjectives").OUTCOME_SALES &&
            n === r("AdsPromotedObjectTypes").MOBILE_APP &&
            r("gkx")("15122")
          );
        },
        hasUnifiedAppStoreForTrafficObjective: function (t, n, o) {
          return (
            o === void 0 && (o = !1),
            t === r("AdsAPIObjectives").LINK_CLICKS &&
              n === r("AdsPromotedObjectTypes").MOBILE_APP
          );
        },
        hasUnifiedAppStoreForTrafficOrSalesObjective: function (t, n) {
          return (
            d.hasUnifiedAppStoreForTrafficObjective(t, n) ||
            (d.hasUnifiedAppStoreForSalesObjective(t, n) &&
              r("justknobx")._("2939"))
          );
        },
      },
      m = r("immutable").Map(
        Object.keys(r("AdsAPIObjectives"))
          .filter(function (e) {
            return (
              e === r("AdsAPIObjectives").CONVERSIONS || d.isAppObjective(e)
            );
          })
          .map(function (e) {
            return [e, d.getPlatformsForObjectives([e])];
          }),
      ),
      p = d;
    l.default = p;
  },
  98,
);
