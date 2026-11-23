__d(
  "AdsPlacementAPISpecDefaultsUtils",
  [
    "AdsAPIDevicePlatform",
    "AdsAPITargetFields",
    "AdsAccountLevelPlacementExclusionsUtils",
    "AdsMobileDeviceTypes",
    "AdsPlacementPluginList",
    "AdsReduceImmutableCPUExperiment",
    "AdsUserDeviceTypes",
    "AdsWhatsAppPlacementUtils",
    "gkx",
    "immutable",
    "qex",
    "unsafeCast",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "facebook/feed",
      s = new Set([e, "instagram/stream"]);
    function u() {
      return r("gkx")("2554") && r("qex")._("832") === !0;
    }
    function c(e) {
      var t,
        n,
        o,
        a,
        i = m(e),
        l = babelHelpers.extends({}, e, {
          spec: babelHelpers.extends(
            {},
            e.spec,
            ((t = {}),
            (t[(o = r("AdsAPITargetFields")).DEVICE_PLATFORMS] = i),
            t),
          ),
        }),
        s = babelHelpers.extends(
          {},
          e.spec,
          ((n = {}),
          (n[o.PUBLISHER_PLATFORMS] = _(l).toArray()),
          (n[o.FACEBOOK_POSITIONS] = (a = r("unsafeCast"))(
            y("facebook", l).toArray(),
          )),
          (n[o.INSTAGRAM_POSITIONS] = a(y("instagram", l).toArray())),
          (n[o.AUDIENCE_NETWORK_POSITIONS] = a(
            y("audience_network", l).toArray(),
          )),
          (n[o.MESSENGER_POSITIONS] = a(y("messenger", l).toArray())),
          (n[o.OCULUS_POSITIONS] = a(y("oculus", l).toArray())),
          (n[o.STREAMING_SERVICES_POSITIONS] = a(
            y("streaming_services", l).toArray(),
          )),
          (n[o.DEVICE_PLATFORMS] = i),
          n),
        ),
        u = a(y("whatsapp", l).toArray());
      if (
        (u.length > 0 && (s[r("AdsAPITargetFields").WHATSAPP_POSITIONS] = u),
        r("gkx")("5403"))
      ) {
        var c = r("unsafeCast")(y("threads", l).toArray());
        c.length > 0 && (s[r("AdsAPITargetFields").THREADS_POSITIONS] = c);
      }
      return s;
    }
    function d(e) {
      return r("immutable").Set(m(e));
    }
    function m(e) {
      var t = o("AdsPlacementPluginList")
        .getPositions(e)
        .filter(function (t) {
          var n = t.isInactiveByDefault;
          return !n || !n(e);
        });
      return p(t, e);
    }
    function p(e, t) {
      var n = r("unsafeCast")(Object.values(r("AdsAPIDevicePlatform"))),
        o = function (n, r) {
          return !n.getIneligibilityReason(
            babelHelpers.extends({}, t, {
              spec: babelHelpers.extends({}, t.spec, { device_platforms: [r] }),
            }),
          );
        };
      return u()
        ? n.filter(function (t) {
            return e.some(function (e) {
              return o(e, t);
            });
          })
        : e
            .map(function (e) {
              return r("immutable").Set(
                n.filter(function (t) {
                  return o(e, t);
                }),
              );
            })
            .reduce(function (e, t) {
              return e.union(t);
            }, r("immutable").Set())
            .toArray();
    }
    function _(e) {
      return f(e).map(function (e) {
        var t = e.apiPublisherPlatform;
        return t;
      });
    }
    function f(e) {
      return o("AdsPlacementPluginList")
        .getAllPlatforms()
        .filter(function (t) {
          var n = t.isEnabled;
          return n(e.capabilities);
        })
        .filter(function (t) {
          return g(t, e);
        });
    }
    function g(e, t) {
      return e.key === "facebook" &&
        o("AdsWhatsAppPlacementUtils").isWhatsAppDestinationEnabledAndSelected(
          t,
        )
        ? y(e.key, t).some(function (e) {
            return e != null;
          })
        : e.positions.some(function (e) {
            return L(e, t);
          });
    }
    function h(e, t) {
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
    function y(e, t) {
      var n = h(t.accountPlacementExclusions, e);
      if (o("AdsReduceImmutableCPUExperiment").isReduceImmutableCPUEnabled())
        return b(e, t, C(e, t, n))
          .map(function (e) {
            var t = e.apiPosition;
            return t;
          })
          .filter(Boolean);
      var r = o("AdsPlacementPluginList")
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
          return !n.has(e.apiPosition) && L(e, t);
        })
        .filter(function (e) {
          return !t.isReelsTrendingAds || e.getIneligibilityReason(t) == null;
        });
      return b(e, t, r)
        .map(function (e) {
          var t = e.apiPosition;
          return t;
        })
        .filter(function (e) {
          return !!e;
        });
    }
    function C(e, t, n) {
      var a = o("AdsPlacementPluginList")
        .getAllPlatforms()
        .find(function (t) {
          var n = t.key;
          return n === e;
        });
      return a == null || !a.isEnabled(t.capabilities)
        ? r("immutable").OrderedSet()
        : a.positions.filter(function (e) {
            return (
              e.isEnabled(t.capabilities, t.account) &&
              !n.has(e.apiPosition) &&
              L(e, t) &&
              (!t.isReelsTrendingAds || e.getIneligibilityReason(t) == null)
            );
          });
    }
    function b(e, t, n) {
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
    function v(e, t) {
      var n = h(t.accountPlacementExclusions, e),
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
            return !n.has(e.apiPosition) && L(e, t);
          });
      return b(e, t, r)
        .map(function (e) {
          var t = e.apiPosition;
          return t;
        })
        .filter(function (e) {
          return !!e;
        });
    }
    function S(e, t) {
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
              E(e, t) &&
              e.apiPosition != null
            );
          });
    }
    function R(e) {
      return o("AdsPlacementPluginList")
        .getPositions(e)
        .filter(function (t) {
          return E(t, e);
        })
        .map(function (e) {
          var t = e.key;
          return t;
        })
        .toArray();
    }
    function L(t, n) {
      return n.isHp1 === !0
        ? t.key === e && E(t, n)
        : t.isEnabled(n.capabilities, n.account) &&
            !t.getIneligibilityReason(n) &&
            (!t.isInactiveByDefault || !t.isInactiveByDefault(n));
    }
    function E(e, t) {
      return (
        e.isEnabled(t.capabilities, t.account) && !e.getIneligibilityReason(t)
      );
    }
    function k(e) {
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
    ((l.HP1_SELECTABLE_POSITION_PLUGIN_KEYS = s),
      (l.getPlacementSpecWithDefaults = c),
      (l.getDevicePlatforms = d),
      (l.getPublisherPlatforms = _),
      (l.getPublisherPlatformPlugins = f),
      (l.getExcludedAPIPositionsForPlatform = h),
      (l.getPositionsForPlatform = y),
      (l.getPositionsForPlatformWithEligibility = v),
      (l.getEligiblePositionPluginsForPlatform = S),
      (l.getAllEligibleGroupsKeySet = R),
      (l.getUserDeviceAndOS = k));
  },
  98,
);
