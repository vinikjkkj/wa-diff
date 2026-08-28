__d(
  "AdsPlacementUIUtils",
  [
    "fbt",
    "AdsAPIDevicePlatform",
    "AdsAPITargetFields",
    "AdsAccountUtils",
    "AdsBrandSafetyContentFilterLevelConstants",
    "AdsBuyingTypes",
    "AdsPlacementAPISpecDefaultsUtils",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementBrandSafetyUtils",
    "AdsPlacementCopy",
    "AdsPlacementDevicePlatformMultiSelectLabels",
    "AdsPlacementDevicePlatformMultiSelectStrings",
    "AdsPlacementMobileFeedOptions",
    "AdsPlacementPluginList",
    "AdsUserDeviceTypes",
    "AdsUserOSUtils",
    "BUIThreeStateCheckboxEnum",
    "ads-app-platforms",
    "adsPlacementAPISpecReaderIsActiveFacebookPosition",
    "adsPlacementAPISpecReaderIsActiveInstagramPosition",
    "adsPlacementAPISpecReaderIsActivePublisherPlatform",
    "gkx",
    "immutable",
    "intlList",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      return e.length === t.length
        ? r("AdsPlacementDevicePlatformMultiSelectLabels").get(null) ||
            r("AdsPlacementCopy").DEFAULT_PLACEMENT_DEVICE_PLATFORM_LABEL
        : r("intlList")(
            e.map(function (e) {
              return (
                r("AdsPlacementDevicePlatformMultiSelectLabels").get(e) ||
                r("AdsPlacementCopy").DEFAULT_PLACEMENT_DEVICE_PLATFORM_LABEL
              );
            }),
            r("intlList").CONJUNCTIONS.AND,
          );
    }
    function u(e, t) {
      if (e.length === 1) {
        var n = t.filter(function (t) {
          return t.value === e[0];
        })[0];
        ((n.disabled = !0),
          (n.tooltip = o(
            "AdsPlacementDevicePlatformMultiSelectStrings",
          ).MIN_SELECT));
      }
    }
    function c(e) {
      return I(r("AdsAPIDevicePlatform").MOBILE, e) && !T(e);
    }
    function d(e) {
      return !D(e);
    }
    function m(e, t, n) {
      var o = r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
          e.spec,
          "instream_video",
        ),
        a = r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
          e.spec,
          "audience_network",
        ),
        i = r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
          e.spec,
          "facebook_reels_overlay",
        ),
        l =
          r("gkx")("2379") && n
            ? r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
                e.spec,
                "profile_feed",
              )
            : !1,
        s = t
          ? r("adsPlacementAPISpecReaderIsActiveInstagramPosition")(
              e.spec,
              "profile_feed",
            )
          : !1;
      return !o && !a && !i && !l && !s;
    }
    function p(e) {
      var t = r("AdsAccountUtils").hasCapabilityFromList(
          e.capabilities,
          "CAN_SEE_FEED_IF",
        ),
        n = o("AdsPlacementBrandSafetyUtils").isThreadsFeedIfAdAccount(),
        a =
          t &&
          r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
            e.spec,
            "feed",
          ),
        i =
          t &&
          r("adsPlacementAPISpecReaderIsActiveInstagramPosition")(
            e.spec,
            "stream",
          ),
        l =
          t &&
          r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
            e.spec,
            "facebook_reels",
          ),
        s =
          t &&
          r("adsPlacementAPISpecReaderIsActiveInstagramPosition")(
            e.spec,
            "reels",
          ),
        u =
          n &&
          o("AdsPlacementAPISpecReaderUtils").isActiveThreadsPosition(
            e.spec,
            "threads_stream",
          );
      return !a && !i && !l && !s && !u;
    }
    function _(e, t) {
      return r("isTruthy")(t) && (S(e) || R(e) || L(e) || E(e) || k(e));
    }
    function f(e) {
      return m(e, !0, !0);
    }
    function g(e) {
      return m(e, !1, !1);
    }
    function h(e) {
      return p(e);
    }
    function y(e) {
      return (
        !!e.spec.brand_safety_content_filter_levels &&
        !!e.spec.brand_safety_content_filter_levels.find(function (e) {
          return (
            e ===
            o("AdsBrandSafetyContentFilterLevelConstants")
              .ADS_BRAND_SAFETY_CONTENT_FILTER_LEVEL.FACEBOOK_STRICT
          );
        })
      );
    }
    function C(e) {
      var t = r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
        e.spec,
        "instream_video",
      );
      return !t || y(e);
    }
    function b(e) {
      var t = r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
        e.spec,
        "instream_video",
      );
      return !t;
    }
    function v(e) {
      var t = r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
          e.spec,
          "instream_video",
        ),
        n = o(
          "AdsPlacementAPISpecReaderUtils",
        ).isOnlyActiveFacebookInstreamVideosPlacement(e.spec);
      return !t || !n || y(e);
    }
    function S(e) {
      var t,
        n = babelHelpers.extends({}, e, {
          spec: babelHelpers.extends(
            {},
            e.spec,
            ((t = {}),
            (t[r("AdsAPITargetFields").DEVICE_PLATFORMS] = o(
              "AdsPlacementAPISpecDefaultsUtils",
            )
              .getDevicePlatforms(e)
              .toJS()),
            t),
          ),
        });
      return o("AdsPlacementPluginList")
        .getOrderedPlatforms(e)
        .filter(function (e) {
          return e.apiPublisherPlatform === "audience_network";
        })
        .flatMap(function (e) {
          return e.positions;
        })
        .filter(function (t) {
          return t.isEnabled(e.capabilities, e.account);
        })
        .some(function (t) {
          return (
            t.isEnabled(e.capabilities, e.account) &&
            !t.getIneligibilityReason(n)
          );
        });
    }
    function R(e) {
      var t,
        n = babelHelpers.extends({}, e, {
          spec: babelHelpers.extends(
            {},
            e.spec,
            ((t = {}),
            (t[r("AdsAPITargetFields").DEVICE_PLATFORMS] = o(
              "AdsPlacementAPISpecDefaultsUtils",
            )
              .getDevicePlatforms(e)
              .toJS()),
            t),
          ),
        });
      return o("AdsPlacementPluginList")
        .getPositions(e)
        .filter(function (e) {
          return e.apiPosition === "instream_video";
        })
        .some(function (t) {
          return (
            t.isEnabled(e.capabilities, e.account) &&
            !t.getIneligibilityReason(n)
          );
        });
    }
    function L(e) {
      var t,
        n = babelHelpers.extends({}, e, {
          spec: babelHelpers.extends(
            {},
            e.spec,
            ((t = {}),
            (t[r("AdsAPITargetFields").DEVICE_PLATFORMS] = o(
              "AdsPlacementAPISpecDefaultsUtils",
            )
              .getDevicePlatforms(e)
              .toJS()),
            t),
          ),
        });
      return o("AdsPlacementPluginList")
        .getPositions(e)
        .filter(function (e) {
          return e.apiPosition === "facebook_reels_overlay";
        })
        .some(function (t) {
          return (
            t.isEnabled(e.capabilities, e.account) &&
            !t.getIneligibilityReason(n)
          );
        });
    }
    function E(e) {
      var t,
        n = babelHelpers.extends({}, e, {
          spec: babelHelpers.extends(
            {},
            e.spec,
            ((t = {}),
            (t[r("AdsAPITargetFields").DEVICE_PLATFORMS] = o(
              "AdsPlacementAPISpecDefaultsUtils",
            )
              .getDevicePlatforms(e)
              .toJS()),
            t),
          ),
        });
      return o("AdsPlacementPluginList")
        .getPositions(e)
        .filter(function (e) {
          return e.apiPosition === "profile_feed";
        })
        .some(function (t) {
          return (
            t.isEnabled(e.capabilities, e.account) &&
            !t.getIneligibilityReason(n)
          );
        });
    }
    function k(e) {
      var t,
        n = babelHelpers.extends({}, e, {
          spec: babelHelpers.extends(
            {},
            e.spec,
            ((t = {}),
            (t[r("AdsAPITargetFields").DEVICE_PLATFORMS] = o(
              "AdsPlacementAPISpecDefaultsUtils",
            )
              .getDevicePlatforms(e)
              .toJS()),
            t),
          ),
        });
      return o("AdsPlacementPluginList")
        .getPositions(e)
        .filter(function (e) {
          return e.apiPosition === "profile_feed";
        })
        .some(function (t) {
          return (
            t.isEnabled(e.capabilities, e.account) &&
            !t.getIneligibilityReason(n)
          );
        });
    }
    function I(e, t) {
      var n = babelHelpers.extends({}, t, {
        spec: babelHelpers.extends({}, t.spec, { device_platforms: [e] }),
      });
      return o("AdsPlacementPluginList")
        .getPositions(t)
        .some(function (e) {
          return !e.getIneligibilityReason(n);
        });
    }
    function T(e) {
      return o("AdsPlacementAPISpecReaderUtils").isOnlyActivePublisherPlatform(
        e.spec,
        "messenger",
      );
    }
    function D(e) {
      if (
        o("AdsPlacementAPISpecReaderUtils").isOnlyActiveDevicePlatform(
          e.spec,
          r("AdsAPIDevicePlatform").DESKTOP,
        )
      )
        return !1;
      var t = babelHelpers.extends({}, e, {
        spec: babelHelpers.extends({}, e.spec, {
          device_platforms: [r("AdsAPIDevicePlatform").MOBILE],
        }),
      });
      return o("AdsPlacementPluginList")
        .getPositions(e)
        .some(function (e) {
          return e.isActive(t.spec) && !e.getIneligibilityReason(t);
        });
    }
    function x(e) {
      var t = e.buyingType;
      return t === r("AdsBuyingTypes").RESERVED
        ? r("AdsPlacementMobileFeedOptions").SIMPLE
        : r("AdsPlacementMobileFeedOptions").ADVANCED;
    }
    function $(e, t) {
      var n = o("AdsUserOSUtils").splitUserOS((e.user_os || [])[0]);
      if (t === !0) return r("AdsUserDeviceTypes").DIRECT_INSTALL;
      if (n.os) return n.os;
      var a = e.user_device;
      return a &&
        a.length === 1 &&
        a[0] === r("AdsUserDeviceTypes").FEATURE_PHONE
        ? r("AdsUserDeviceTypes").FEATURE_PHONE
        : r("AdsUserDeviceTypes").ALL;
    }
    function P(e) {
      var t = r("immutable").Set.of(
        o("ads-app-platforms").MOBILE_STORE.GALAXY_STORE,
        o("ads-app-platforms").MOBILE_STORE.XIAOMI,
      );
      return e != null && t.contains(e);
    }
    function N(e) {
      var t = e
        .filter(function (e) {
          return (
            e.selectionStatus === r("BUIThreeStateCheckboxEnum").CHECKED ||
            e.selectionStatus === r("BUIThreeStateCheckboxEnum").PARTIAL
          );
        })
        .keySeq()
        .toSet();
      return t.size === 1 ? t : r("immutable").Set();
    }
    function M(e, t, n) {
      var o = e.filter(function (e) {
          return (
            e.selectionStatus === r("BUIThreeStateCheckboxEnum").CHECKED ||
            e.selectionStatus === r("BUIThreeStateCheckboxEnum").PARTIAL
          );
        }),
        a = w(t, n, o);
      if (a.size > 0) return a;
      if (r("gkx")("22154") === !1) {
        var i = o.keySeq().toSet();
        return i.size === 1 ? i : r("immutable").Set();
      } else {
        var l = o.keySeq().toSet(),
          s = e
            .filter(function (e) {
              return (
                e.selectionStatus === r("BUIThreeStateCheckboxEnum").CHECKED
              );
            })
            .keySeq()
            .toSet();
        return l.size === 1 && s.size === 1 ? s : r("immutable").Set();
      }
    }
    function w(e, t, n) {
      var o = r("immutable").Set();
      if (r("isTruthy")(e)) {
        var a = A("instagram", n);
        a.size === 1 && (o = o.union(a));
      }
      if (r("isTruthy")(t)) {
        var i = A("facebook", n);
        i.size === 1 && (o = o.union(i));
      }
      return o;
    }
    function A(e, t) {
      var n = t
        .map(function (e) {
          return e.positions;
        })
        .map(function (t) {
          var n = t
              .map(function (e) {
                return (
                  e.selectionStatus === r("BUIThreeStateCheckboxEnum").CHECKED
                );
              })
              .filter(function (e) {
                return e === !0;
              })
              .keySeq()
              .toSet(),
            o = n.filter(function (t) {
              return t.includes(e);
            });
          return !o.isEmpty();
        })
        .filter(function (e) {
          return e === !0;
        })
        .keySeq()
        .toSet();
      return n;
    }
    function F(e, t, n, o) {
      var a = N(e);
      return (
        r("isTruthy")(n) && t === "instagram" && (a = a.add(t)),
        r("isTruthy")(o) && t === "facebook" && (a = a.add(t)),
        a
      );
    }
    function O(e) {
      return e.platforms
        .filter(function (e) {
          return e.selectionStatus === r("BUIThreeStateCheckboxEnum").UNCHECKED;
        })
        .keySeq()
        .toSet();
    }
    function B(e) {
      var t = o("AdsPlacementAPISpecDefaultsUtils").getPublisherPlatformPlugins(
        e,
      );
      return t.map(function (e) {
        var t = e.name;
        return t;
      });
    }
    function W(e) {
      return o("AdsPlacementPluginList")
        .getAllPlatforms()
        .flatMap(function (t) {
          return r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
            e.spec,
            t.apiPublisherPlatform,
          )
            ? !t.apiPositionsTargetField ||
              !t.apiPositionsTargetField(e.capabilities)
              ? r("immutable").Set([t.name])
              : t.positions
                  .filter(function (n) {
                    return (
                      n.apiPosition &&
                      o("AdsPlacementAPISpecReaderUtils").isActivePosition(
                        e.spec,
                        t.apiPublisherPlatform,
                        n.apiPosition,
                      )
                    );
                  })
                  .map(function (e) {
                    return s._(/*BTDS*/ "{platformName} {groupName}", [
                      s._param("platformName", t.name),
                      s._param("groupName", e.name),
                    ]);
                  })
            : r("immutable").Set();
        });
    }
    function q(e, t) {
      var n = new Map();
      return (
        o("AdsPlacementPluginList")
          .getAllPlatforms()
          .forEach(function (a) {
            if (
              !r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
                e.spec,
                a.apiPublisherPlatform,
              )
            )
              return null;
            var i = a.name;
            if (
              !a.apiPositionsTargetField ||
              !a.apiPositionsTargetField(e.capabilities)
            )
              return (n.set(i, r("immutable").OrderedSet()), null);
            var l = a.positions
              .filter(function (n) {
                return (
                  n.apiPosition &&
                  o("AdsPlacementAPISpecReaderUtils").isActivePosition(
                    e.spec,
                    a.apiPublisherPlatform,
                    n.apiPosition,
                  ) &&
                  (t === !0 || n.getIneligibilityReason(e) == null)
                );
              })
              .map(function (e) {
                return e.name;
              });
            return (n.set(i, l), null);
          }),
        r("immutable").Map(n)
      );
    }
    ((l.CHECKBOX_STATES = r("BUIThreeStateCheckboxEnum")),
      (l.getDevicePlatformMultiSelectLabel = e),
      (l.setDevicePlatformMultiSelectTooltips = u),
      (l.shouldSurfaceMobileOptions = c),
      (l.isMobileOptionsDisabled = d),
      (l.shouldSurfaceBlockList = _),
      (l.isBlockListDisabled = f),
      (l.isContentFilteringDisabled = g),
      (l.isFeedInventoryFilterDisabled = h),
      (l.isContentFilteringSetToFacebookStrict = y),
      (l.isContentTypeExclusionDisabled = C),
      (l.isInstreamVideoSkippableExclusionDisabled = b),
      (l.isInstreamContextualTargetingCategoriesDisabled = v),
      (l.isDevicePlatformAvailable = I),
      (l.isOnlyMessengerPlatformActive = T),
      (l.getMobileOptionsDisplayMode = x),
      (l.getDeviceType = $),
      (l.isGrowthAppStoreValue = P),
      (l.getDisabledGroupingsFromUISpec = N),
      (l.getDisabledPositionGroupings = M),
      (l.getDisabledPlatforms = F),
      (l.getUncheckedPlatformsFromUISpec = O),
      (l.getFriendlyPublisherPlatformListing = B),
      (l.getFriendlyPlacementListing = W),
      (l.getFriendlyPlacementsMap = q));
  },
  226,
);
