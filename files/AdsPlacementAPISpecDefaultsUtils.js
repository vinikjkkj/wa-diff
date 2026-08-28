__d(
  "AdsPlacementAPISpecDefaultsUtils",
  [
    "AdsAPIDevicePlatform",
    "AdsAPITargetFields",
    "AdsAccountLevelPlacementExclusionsUtils",
    "AdsMobileDeviceTypes",
    "AdsPlacementPluginList",
    "AdsUserDeviceTypes",
    "AdsWhatsAppPlacementUtils",
    "gkx",
    "immutable",
    "unsafeCast",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        o,
        a,
        i = s(e).toArray(),
        l = babelHelpers.extends({}, e, {
          spec: babelHelpers.extends(
            {},
            e.spec,
            ((t = {}),
            (t[(o = r("AdsAPITargetFields")).DEVICE_PLATFORMS] = i),
            t),
          ),
        }),
        u = babelHelpers.extends(
          {},
          e.spec,
          ((n = {}),
          (n[o.PUBLISHER_PLATFORMS] = d(l).toArray()),
          (n[o.FACEBOOK_POSITIONS] = (a = r("unsafeCast"))(
            f("facebook", l).toArray(),
          )),
          (n[o.INSTAGRAM_POSITIONS] = a(f("instagram", l).toArray())),
          (n[o.AUDIENCE_NETWORK_POSITIONS] = a(
            f("audience_network", l).toArray(),
          )),
          (n[o.MESSENGER_POSITIONS] = a(f("messenger", l).toArray())),
          (n[o.OCULUS_POSITIONS] = a(f("oculus", l).toArray())),
          (n[o.STREAMING_SERVICES_POSITIONS] = a(
            f("streaming_services", l).toArray(),
          )),
          (n[o.DEVICE_PLATFORMS] = i),
          n),
        ),
        c = a(f("whatsapp", l).toArray());
      if (
        (c.length > 0 && (u[r("AdsAPITargetFields").WHATSAPP_POSITIONS] = c),
        r("gkx")("5403"))
      ) {
        var m = r("unsafeCast")(f("threads", l).toArray());
        m.length > 0 && (u[r("AdsAPITargetFields").THREADS_POSITIONS] = m);
      }
      return u;
    }
    function s(e) {
      var t = o("AdsPlacementPluginList")
        .getPositions(e)
        .filter(function (t) {
          var n = t.isInactiveByDefault;
          return !n || !n(e);
        });
      return c(t, e);
    }
    function u(e) {
      return (
        r("vulture")("cGSZ0o99ewCidP-l-gJ8hldZmT0="),
        c(o("AdsPlacementPluginList").getPositions(e), e)
      );
    }
    function c(e, t) {
      var n = r("unsafeCast")(Object.values(r("AdsAPIDevicePlatform")));
      return e
        .map(function (e) {
          var o = e.getIneligibilityReason;
          return r("immutable").Set(
            n.filter(function (e) {
              return !o(
                babelHelpers.extends({}, t, {
                  spec: babelHelpers.extends({}, t.spec, {
                    device_platforms: [e],
                  }),
                }),
              );
            }),
          );
        })
        .reduce(function (e, t) {
          return e.union(t);
        }, r("immutable").Set());
    }
    function d(e) {
      return m(e).map(function (e) {
        var t = e.apiPublisherPlatform;
        return t;
      });
    }
    function m(e) {
      return o("AdsPlacementPluginList")
        .getAllPlatforms()
        .filter(function (t) {
          var n = t.isEnabled;
          return n(e.capabilities);
        })
        .filter(function (t) {
          return p(t, e);
        });
    }
    function p(e, t) {
      return e.key === "facebook" &&
        o("AdsWhatsAppPlacementUtils").isWhatsAppDestinationEnabledAndSelected(
          t,
        )
        ? f(e.key, t).some(function (e) {
            return e != null;
          })
        : e.positions.some(function (e) {
            return b(e, t);
          });
    }
    function _(e, t) {
      var n,
        r,
        a,
        i,
        l = o(
          "AdsAccountLevelPlacementExclusionsUtils",
        ).getAccountLevelPlacementExclusionsPerPlatform(e);
      return t === "facebook"
        ? new Set(
            (n =
              (r = l.get("facebook")) == null ? void 0 : r.excludedPositions) !=
              null
              ? n
              : [],
          )
        : t === "audience_network"
          ? new Set(
              (a =
                (i = l.get("audience_network")) == null
                  ? void 0
                  : i.excludedPositions) != null
                ? a
                : [],
            )
          : new Set();
    }
    function f(e, t) {
      var n = _(t.accountPlacementExclusions, e),
        r = o("AdsPlacementPluginList")
          .getAllPlatforms()
          .filter(function (n) {
            var r = n.isEnabled,
              o = n.key;
            return o === e && r(t.capabilities);
          })
          .flatMap(function (e) {
            var t = e.positions;
            return t;
          })
          .filter(function (e) {
            var n = e.isEnabled;
            return n(t.capabilities, t.account);
          })
          .filter(function (e) {
            return !n.has(e.apiPosition) && b(e, t);
          })
          .filter(function (e) {
            return !t.isReelsTrendingAds || e.getIneligibilityReason(t) == null;
          });
      return g(e, t, r)
        .map(function (e) {
          var t = e.apiPosition;
          return t;
        })
        .filter(function (e) {
          return !!e;
        });
    }
    function g(e, t, n) {
      if (
        e !== "facebook" ||
        !o("AdsWhatsAppPlacementUtils").isWhatsAppDestinationEnabledAndSelected(
          t,
        )
      )
        return n;
      var r = n.some(function (e) {
        var t = e.apiPosition;
        return t === "feed";
      });
      return r
        ? n
        : n.filter(function (e) {
            var t = e.apiPosition;
            return !o(
              "AdsWhatsAppPlacementUtils",
            ).isCTWAFacebookPositionRequiringFeed(t);
          });
    }
    function h(e, t) {
      var n = _(t.accountPlacementExclusions, e),
        r = o("AdsPlacementPluginList")
          .getAllPlatforms()
          .filter(function (n) {
            var r = n.isEnabled,
              o = n.key;
            return o === e && r(t.capabilities);
          })
          .flatMap(function (e) {
            var t = e.positions;
            return t;
          })
          .filter(function (e) {
            var n = e.isEnabled;
            return n(t.capabilities, t.account);
          })
          .filter(function (e) {
            return !n.has(e.apiPosition) && b(e, t);
          });
      return g(e, t, r)
        .map(function (e) {
          var t = e.apiPosition;
          return t;
        })
        .filter(function (e) {
          return !!e;
        });
    }
    function y(e, t) {
      var n = o("AdsPlacementPluginList")
        .getAllPlatforms()
        .find(function (n) {
          var r = n.isEnabled,
            o = n.key;
          return o === e && r(t.capabilities);
        });
      return n == null
        ? r("immutable").Set()
        : n.positions.filter(function (e) {
            return (
              e.isEnabled(t.capabilities, t.account) &&
              v(e, t) &&
              e.apiPosition != null
            );
          });
    }
    function C(e) {
      return o("AdsPlacementPluginList")
        .getPositions(e)
        .filter(function (t) {
          return v(t, e);
        })
        .map(function (e) {
          var t = e.key;
          return t;
        })
        .toArray();
    }
    function b(e, t) {
      return (
        e.isEnabled(t.capabilities, t.account) &&
        !e.getIneligibilityReason(t) &&
        (!e.isInactiveByDefault || !e.isInactiveByDefault(t))
      );
    }
    function v(e, t) {
      return (
        e.isEnabled(t.capabilities, t.account) && !e.getIneligibilityReason(t)
      );
    }
    function S(e) {
      switch (e) {
        case r("AdsUserDeviceTypes").ANDROID:
        case r("AdsUserDeviceTypes").IOS:
          return { userOS: [e], userDevices: [] };
        case r("AdsUserDeviceTypes").FEATURE_PHONE:
          return {
            userOS: [],
            userDevices: [r("AdsUserDeviceTypes").FEATURE_PHONE],
          };
        case r("AdsUserDeviceTypes").DIRECT_INSTALL:
          return {
            userOS: [r("AdsUserDeviceTypes").ANDROID],
            userDevices: [
              r("AdsMobileDeviceTypes").ANDROID_SMARTPHONE,
              r("AdsMobileDeviceTypes").ANDROID_TABLET,
            ],
          };
        default:
          return { userOS: [], userDevices: [] };
      }
    }
    ((l.getPlacementSpecWithDefaults = e),
      (l.getDevicePlatforms = s),
      (l.getAllEligibleDevicePlatforms = u),
      (l.getPublisherPlatforms = d),
      (l.getPublisherPlatformPlugins = m),
      (l.getExcludedAPIPositionsForPlatform = _),
      (l.getPositionsForPlatform = f),
      (l.getPositionsForPlatformWithEligibility = h),
      (l.getEligiblePositionPluginsForPlatform = y),
      (l.getAllEligibleGroupsKeySet = C),
      (l.getUserDeviceAndOS = S));
  },
  98,
);
