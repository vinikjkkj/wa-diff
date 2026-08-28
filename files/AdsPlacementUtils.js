__d(
  "AdsPlacementUtils",
  [
    "AdsAPIDevicePlatform",
    "AdsAPIObjectives",
    "AdsAPITargetFields",
    "AdsAccountUtils",
    "AdsAppUrlUtils",
    "AdsAppUtils",
    "AdsBrandSafetyUtils",
    "AdsBulkValueUtils",
    "AdsBuyingTypes",
    "AdsCommonTargetingApiTransformer",
    "AdsODAXUtils",
    "AdsPlacementAPISpecDefaultsUtils",
    "AdsPlacementBrandSafetyUtils",
    "AdsPlacementConstants",
    "AdsPlacementDevicePlatformMultiSelectLabels",
    "AdsPlacementPositionGroupPlugins",
    "AdsPlacementPositionPlugins",
    "AdsPlacementRawSpecUtils",
    "AdsPlacementTargetingFields",
    "AdsPlacementUIUtils",
    "AdsPlacementValues",
    "AdsReachFrequencyAdFormatsConstants",
    "AdsUniformValue",
    "AppAdsConfig.experimental",
    "IOS14Utils",
    "SKAdNetworkCampaignGroupSitevarsUtils",
    "ads-app-platforms",
    "ads-mobile-operating-systems",
    "isTruthy",
    "whitelistObjectKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        r("AdsAPIDevicePlatform").MOBILE,
        r("AdsAPIDevicePlatform").DESKTOP,
      ],
      s = r(
        "SKAdNetworkCampaignGroupSitevarsUtils",
      ).getMinSKANCampaignIOSVersion(),
      u = r(
        "SKAdNetworkCampaignGroupSitevarsUtils",
      ).getMaxNonSKANCampaignIOSVersion(),
      c = {
        refreshPlacements: function (t, n) {
          var e,
            a = t.spec;
          if (
            !a ||
            o("AdsPlacementRawSpecUtils").isRawPlacementSpecAutomatic(a)
          )
            return a;
          var i = o(
              "AdsPlacementAPISpecDefaultsUtils",
            ).getPlacementSpecWithDefaults(
              babelHelpers.extends({}, t, {
                spec:
                  ((e = {}),
                  (e[r("AdsAPITargetFields").USER_OS] =
                    a[r("AdsAPITargetFields").USER_OS]),
                  (e[r("AdsAPITargetFields").USER_DEVICE] =
                    a[r("AdsAPITargetFields").USER_DEVICE]),
                  (e[r("AdsAPITargetFields").EXCLUDED_USER_DEVICE] =
                    a[r("AdsAPITargetFields").EXCLUDED_USER_DEVICE]),
                  (e[r("AdsAPITargetFields").WIRELESS_CARRIER] =
                    a[r("AdsAPITargetFields").WIRELESS_CARRIER]),
                  (e[r("AdsAPITargetFields").EXCLUDED_PUBLISHER_LIST_IDS] =
                    a[r("AdsAPITargetFields").EXCLUDED_PUBLISHER_LIST_IDS]),
                  (e[
                    r("AdsAPITargetFields").BRAND_SAFETY_CONTENT_FILTER_LEVELS
                  ] =
                    a[
                      r("AdsAPITargetFields").BRAND_SAFETY_CONTENT_FILTER_LEVELS
                    ]),
                  (e[
                    r("AdsAPITargetFields").EXCLUDED_BRAND_SAFETY_CONTENT_TYPES
                  ] =
                    a[
                      r(
                        "AdsAPITargetFields",
                      ).EXCLUDED_BRAND_SAFETY_CONTENT_TYPES
                    ]),
                  e),
                optimizationGoal: n,
              }),
            ),
            l = o(
              "AdsPlacementConstants",
            ).PLACEMENT_FIELD_TO_AD_SET_PATHS.reduce(function (e, t, n) {
              return (
                a[n] &&
                  (e[n] = a[n].filter(function (e) {
                    return i[n].includes(e);
                  })),
                e
              );
            }, {});
          return l;
        },
        getDefaultCampaignPlacementNonEffectiveFields: function (t) {
          var e = [],
            n = [],
            a = t.objectStoreURL,
            i = [],
            l = [],
            c = [],
            d = t.isSKANAttribution === !0;
          if (r("isTruthy")(a)) {
            var m = r("AdsAppUrlUtils").getMobileAppStoreNameFromUrl(a);
            if (r("isTruthy")(m)) {
              var p = r("AdsAppUtils").getPlatformFromStoreName(m),
                _ = o("ads-app-platforms").getMobileOSForPlatform(p),
                f = r("IOS14Utils").shouldLimitIOSTargeting({
                  objective: t.objective,
                  deviceType: _,
                  promotedObjectType: t.promotedObjectType,
                  isSKANCampaignGroup: d,
                  optimizationGoal: t.optimizationGoal,
                  objectStoreURL: a,
                });
              if (f) {
                var g = r("AppAdsConfig.experimental").mobileOsVersionNames.iOS;
                e = o("AdsCommonTargetingApiTransformer").getUserOs(
                  _,
                  Object.keys(g)[0],
                  u,
                );
              } else
                d
                  ? (e = o("AdsCommonTargetingApiTransformer").getUserOs(
                      _,
                      s,
                      null,
                    ))
                  : _ !== void 0 &&
                      _ !==
                        o("ads-mobile-operating-systems").operatingSystems
                          .WINDOWS
                    ? (e = [_])
                    : (e = o("AdsCommonTargetingApiTransformer").getUserOs(
                        _,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                      ));
              m === o("ads-app-platforms").MOBILE_STORE.GALAXY_STORE ||
              m === o("ads-app-platforms").MOBILE_STORE.XIAOMI
                ? (n = r("AdsAppUtils").getDefaultUserDevices(m))
                : (n = r("AdsAppUtils").getSupportedDevicesByDeviceType(_));
            }
          }
          var h = {
              user_os: e,
              user_device: n,
              excluded_user_device: i,
              wireless_carrier: l,
              excluded_publisher_list_ids: c,
              brand_safety_content_filter_levels: [],
              excluded_brand_safety_content_types: [],
            },
            y = o(
              "AdsPlacementAPISpecDefaultsUtils",
            ).getPlacementSpecWithDefaults(
              babelHelpers.extends({}, t, { spec: h }),
            ),
            C = r("AdsAccountUtils").hasCapabilityFromList(
              t.capabilities,
              "CAN_SEE_FEED_IF",
            ),
            b = o("AdsPlacementBrandSafetyUtils").isThreadsFeedIfAdAccount();
          return (
            (h.brand_safety_content_filter_levels = r(
              "AdsBrandSafetyUtils",
            ).getDefaultContentFilterLevels(y, t.account, C, b)),
            h
          );
        },
        _getDevicePlatformValues: function (n) {
          var t = n
            .map(function (e) {
              return e.spec.device_platforms;
            })
            .filter(Boolean)
            .filter(function (e) {
              return Array.isArray(e) && e.length;
            })
            .map(function (e) {
              return e.concat().sort();
            });
          return t.length === 0 || t[0].length === 0
            ? new (r("AdsUniformValue"))(e)
            : o("AdsBulkValueUtils").aggregate(t);
        },
        _getDevicePlatformOptions: function (t) {
          var e = Object.values(r("AdsAPIDevicePlatform")),
            n = e
              .filter(function (e) {
                return t.every(function (t) {
                  return o("AdsPlacementUIUtils").isDevicePlatformAvailable(
                    e,
                    t,
                  );
                });
              })
              .map(function (e) {
                return {
                  label: r("AdsPlacementDevicePlatformMultiSelectLabels").get(
                    e,
                  ),
                  value: e,
                };
              });
          return n;
        },
        getDevicePlatformsSpec: function (n) {
          var t = n.every(function (e) {
            return o("AdsPlacementUIUtils").isOnlyMessengerPlatformActive(e);
          });
          if (t) return null;
          var a = n.every(function (t) {
              return e.every(function (e) {
                return o("AdsPlacementUIUtils").isDevicePlatformAvailable(e, t);
              });
            }),
            i = n.every(function (e) {
              return o("AdsPlacementUIUtils").isDevicePlatformAvailable(
                r("AdsAPIDevicePlatform").CONNECTED_TV,
                e,
              );
            });
          if (!a && !i) return null;
          var l = n.every(function (e) {
            if (e.adFormats != null)
              return e.adFormats.some(function (e) {
                return (
                  e.formatType === "canvas" ||
                  e.formatType === "spherical_image"
                );
              });
          });
          if (l) return null;
          var s,
            u = c._getDevicePlatformValues(n),
            d = c._getDevicePlatformOptions(n);
          if (d.length <= 1) return null;
          if (u instanceof r("AdsUniformValue")) {
            var m = o("AdsBulkValueUtils").getUniformValueOrDefault(u, []);
            (o("AdsPlacementUIUtils").setDevicePlatformMultiSelectTooltips(
              m,
              d,
            ),
              (s = o("AdsPlacementUIUtils").getDevicePlatformMultiSelectLabel(
                m,
                d,
              )));
          }
          return { label: s, options: d, value: u };
        },
        getDefaultCampaignPlacement: function (t, n) {
          var e;
          if (n == null) {
            var a = c.getDefaultCampaignPlacementNonEffectiveFields(t);
            e = babelHelpers.extends({}, t, { spec: a });
          } else e = babelHelpers.extends({}, t, { spec: n });
          return (
            e.adFormats == null &&
              (e.adFormats =
                o("AdsODAXUtils").maybeTranslateObjective(
                  t.objective,
                  t.promotedObjectType,
                  t.optimizationGoal,
                ) === r("AdsAPIObjectives").VIDEO_VIEWS
                  ? [
                      o("AdsReachFrequencyAdFormatsConstants")
                        .DEFAULT_VIDEO_AD_FORMAT,
                    ]
                  : [
                      o("AdsReachFrequencyAdFormatsConstants")
                        .DEFAULT_IMAGE_AD_FORMAT,
                    ]),
            o("AdsPlacementAPISpecDefaultsUtils").getPlacementSpecWithDefaults(
              e,
            )
          );
        },
        removePlacementFields: function (t) {
          var e = babelHelpers.extends({}, t);
          return (
            r("AdsPlacementTargetingFields").forEach(function (t) {
              return delete e[t];
            }),
            e
          );
        },
        getPlacementFields: function (t) {
          return r("whitelistObjectKeys")(t, r("AdsPlacementTargetingFields"));
        },
        getAutomaticCampaignPlacement: function (t) {
          return t.buyingType !== r("AdsBuyingTypes").RESERVED
            ? c.getDefaultCampaignPlacementNonEffectiveFields(t)
            : c.getDefaultCampaignPlacement(babelHelpers.extends({}, t));
        },
        getAutomaticCampaignPlacementWithEligibilityInformation: function (t) {
          return c.getAutomaticCampaignPlacement(t);
        },
        isManualPlacement: function (t) {
          return t === r("AdsPlacementValues").MANUAL;
        },
        castStringToAdsPlacementPositionGroupPluginKey: function (t) {
          var e,
            n,
            o =
              (e = r("AdsPlacementPositionGroupPlugins")
                .filter(function (e) {
                  return e.key === t;
                })
                .getArray()) != null
                ? e
                : [];
          return o == null || (n = o[0]) == null ? void 0 : n.key;
        },
        castStringToAdsPlacementPositionPluginKey: function (t) {
          var e,
            n,
            o =
              (e = r("AdsPlacementPositionPlugins")
                .filter(function (e) {
                  return e.key === t;
                })
                .getArray()) != null
                ? e
                : [];
          return o == null || (n = o[0]) == null ? void 0 : n.key;
        },
      },
      d = c;
    l.default = d;
  },
  98,
);
