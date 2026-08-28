__d(
  "AdsPlacementAdvancedOptionsUtils",
  [
    "AdsAppUrlUtils",
    "AdsAppUtils",
    "AdsBulkValueUtils",
    "AdsMixedValue",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementTokenizerUtils",
    "AdsPlacementUIUtils",
    "AdsUniformValue",
    "AdsUserDeviceTypeLabels",
    "AdsUserDeviceTypes",
    "AdsUserOSUtils",
    "AdsWirelessCarriers",
    "AppAdsConfig.experimental",
    "IOS14Utils",
    "SKAdNetworkCampaignGroupSitevarsUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r(
        "SKAdNetworkCampaignGroupSitevarsUtils",
      ).getMaxNonSKANCampaignIOSVersion(),
      u = "none",
      c = [
        (e = r("AdsUserDeviceTypes")).ALL,
        e.ANDROID,
        e.IOS,
        e.FEATURE_PHONE,
      ];
    function d(e, t) {
      var n = e.reduce(function (e, n) {
        var o = n.objectStoreURL;
        if (o != null && r("AdsAppUrlUtils").isGooglePlayURL(o)) {
          var a = [r("AdsUserDeviceTypes").ANDROID];
          return (
            t === !0 && a.push(r("AdsUserDeviceTypes").DIRECT_INSTALL),
            a
          );
        }
        return e;
      }, c);
      return n;
    }
    function m(e, t) {
      var n = e.reduce(function (e, n) {
        return e.union(
          o("AdsPlacementAPISpecReaderUtils").getDisabledDeviceTypes(n, t),
        );
      }, r("immutable").Set([]));
      return n;
    }
    function p(e) {
      if (e == null) return !1;
      var t = e.split("_");
      return t.length === 1 || e.includes("2.0_and_above");
    }
    function _(e, t) {
      var n = o("AdsBulkValueUtils").aggregate(
        e.map(function (e) {
          return o("AdsPlacementUIUtils").getDeviceType(
            e.spec,
            e.directInstallDevices,
          );
        }),
      );
      if (!(n instanceof r("AdsUniformValue"))) return null;
      var a = n.getValue(),
        i =
          a === r("AdsUserDeviceTypes").IOS ||
          a === r("AdsUserDeviceTypes").ANDROID
            ? r("AppAdsConfig.experimental").mobileOsVersionNames[a]
            : null;
      if (!i) return null;
      var l = e[0].spec.user_os || [],
        c = p(l[0]),
        d = e.some(function (e) {
          return (
            e.spec.user_os &&
            (e.spec.user_os.length !== l.length ||
              (e.spec.user_os[0] !== l[0] && !(c && p(e.spec.user_os[0]))))
          );
        }),
        m = r("IOS14Utils").shouldLimitIOSTargeting({
          objective: e[0].objective,
          deviceType: n.getValue(),
          promotedObjectType: e[0].promotedObjectType,
          isSKANCampaignGroup: t,
          optimizationGoal: e[0].optimizationGoal,
          objectStoreURL: e[0].objectStoreURL,
        });
      (m || t) && (i = r("IOS14Utils").getRestrictedIOSVersions(i, t));
      var _ = m ? s : u,
        f = o("AdsUserOSUtils").splitUserOS(l[0]),
        g = f.max_version != null && f.max_version !== "" ? f.max_version : u,
        h =
          f.min_version != null && f.min_version !== ""
            ? f.min_version
            : Object.keys(i)[0];
      return {
        hasAdvancedOSVersion: e.some(function (e) {
          return e.spec.user_os && e.spec.user_os.length > 1;
        }),
        isMixed: d,
        maxVersion: g,
        minVersion: h,
        noMaxVersionValue: _,
        versionNames: i,
      };
    }
    function f(e) {
      var t = e.objective,
        n = e.objectStoreURL,
        o = e.promotedObjectType,
        a = r("AdsAppUtils").isAppObjective(t, o),
        i = n != null && r("AdsAppUrlUtils").isInstantGameURL(n),
        l = r("AdsAppUtils").hasUnifiedAppStoreForTrafficObjective(t, o);
      return a && !i && !l;
    }
    function g(e, t, n) {
      var a = m(e, t),
        i = e.every(function (e) {
          return f(e);
        }),
        l = d(e, n);
      return {
        disabled: i,
        options: l.map(function (e) {
          return {
            disabled: a.has(e),
            label: r("AdsUserDeviceTypeLabels")[e],
            value: e,
          };
        }),
        value: o("AdsBulkValueUtils").aggregate(
          e.map(function (e) {
            return o("AdsPlacementUIUtils").getDeviceType(
              e.spec,
              e.directInstallDevices,
            );
          }),
        ),
      };
    }
    function h(e) {
      return {
        value: o("AdsBulkValueUtils").aggregate(
          e.map(function (e) {
            return (
              e.spec.wireless_carrier != null &&
              e.spec.wireless_carrier.length === 1 &&
              e.spec.wireless_carrier[0] === r("AdsWirelessCarriers").WIFI
            );
          }),
        ),
      };
    }
    function y(e, t) {
      var n = e.map(function (e) {
          return r("immutable").Set(e.spec.user_device);
        }),
        a = o("AdsPlacementTokenizerUtils").composeCampaignMap(n, t),
        i =
          o("AdsBulkValueUtils").aggregate(
            Array.from(e.values()).map(function (e) {
              return e.spec.user_device;
            }),
          ) instanceof r("AdsMixedValue"),
        l = a.withMutations(function (n) {
          e.forEach(function (e, a) {
            var i =
              e.spec.user_device != null
                ? e.spec.user_device.length === 0
                : e.spec.user_os != null && e.spec.user_os.length > 0;
            if (i) {
              var l = o("AdsPlacementUIUtils").getDeviceType(
                e.spec,
                e.directInstallDevices,
              );
              r("AdsAppUtils")
                .getSupportedDevicesByDeviceType(l)
                .forEach(function (e) {
                  o("AdsPlacementTokenizerUtils").setCampaignsInfo(n, e, a, t);
                });
            }
          });
        }),
        s = Array.from(l.keys());
      return {
        values: s,
        deviceToCampaignMap: l,
        isMixed: i,
        numCampaigns: e.size,
      };
    }
    function C(e, t) {
      var n = e.map(function (e) {
          return r("immutable").Set(e.spec.excluded_user_device);
        }),
        a = o("AdsPlacementTokenizerUtils").composeCampaignMap(n, t),
        i = Array.from(a.keys()),
        l =
          o("AdsBulkValueUtils").aggregate(
            Array.from(e.values()).map(function (e) {
              return e.spec.excluded_user_device;
            }),
          ) instanceof r("AdsMixedValue");
      return {
        values: i,
        deviceToCampaignMap: a,
        isMixed: l,
        numCampaigns: e.size,
      };
    }
    ((l.NO_MAX_VERSION = u),
      (l.getMobileDeviceTypesOrder = d),
      (l.getDisabledMobileDeviceTypes = m),
      (l.getMobileDeviceTypeVersionConfig = _),
      (l.isMobileAdvancedOptionsDeviceTypesDisabled = f),
      (l.getMobileDeviceTypes = g),
      (l.getMobileWifiOnly = h),
      (l.getMobileGranularDevices = y),
      (l.getMobileExcludedGranularDevices = C));
  },
  98,
);
