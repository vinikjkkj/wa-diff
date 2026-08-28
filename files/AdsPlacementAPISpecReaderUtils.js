__d(
  "AdsPlacementAPISpecReaderUtils",
  [
    "AdsAPIDevicePlatform",
    "AdsAPIObjectives",
    "AdsAPIPublisherPlatform",
    "AdsAPITargetFields",
    "AdsAccountUtils",
    "AdsAppUtils",
    "AdsBrandSafetyUtils",
    "AdsBuyingTypes",
    "AdsPageTypes",
    "AdsPlacementAPISpecDefaultsUtils",
    "AdsPlacementAPISpecReaderUtilsShared",
    "AdsPlacementConstants",
    "AdsPlacementDependentPlatformGatingUtils",
    "AdsPlacementPluginList",
    "AdsPlacementPositionGroupPluginList",
    "AdsPlacementPositionPlugins",
    "AdsPlacementSOOBundleGatingUtils",
    "AdsUserDeviceTypes",
    "adsContainsAssetCustomizationPlacement",
    "adsConvertAdObjectRecordToPlainJS",
    "adsPlacementAPISpecReaderIsActiveFacebookPosition",
    "adsPlacementAPISpecReaderIsActivePosition",
    "adsPlacementAPISpecReaderIsActivePublisherPlatform",
    "adsPlacementAPISpecReaderIsActiveThreadsPosition",
    "getByPath",
    "immutable",
    "mapObject",
    "memoizeWithArgsByKey",
    "objectKeys",
    "whitelistObjectKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = {
        device_platforms: null,
        brand_safety_content_filter_levels: null,
        contextual_targeting_categories: null,
        excluded_brand_safety_content_types: null,
        excluded_publisher_list_ids: null,
        facebook_positions: null,
        instagram_positions: null,
        instream_video_skippable_excluded: null,
        messenger_positions: null,
        audience_network_positions: null,
        whatsapp_positions: null,
        publisher_platforms: null,
        streaming_services_positions: null,
        user_device: null,
        excluded_user_device: null,
        user_os: null,
        wireless_carrier: null,
      };
    function c(e) {
      return r("objectKeys")(r("AdsAPIPublisherPlatform")).reduce(function (
        t,
        n,
      ) {
        return r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
          e,
          r("AdsAPIPublisherPlatform")[n],
        )
          ? t + 1
          : t;
      }, 0);
    }
    function d(e) {
      return r("objectKeys")(r("AdsAPIDevicePlatform")).reduce(function (t, n) {
        return ne(e, r("AdsAPIDevicePlatform")[n]) ? t + 1 : t;
      }, 0);
    }
    function m(e) {
      var t = function (n) {
          if (
            !e.every(function (e) {
              return _(e, r("AdsAPIPublisherPlatform")[n]);
            })
          )
            return { v: !1 };
        },
        n;
      for (var o of Object.keys(r("AdsAPIPublisherPlatform")))
        if (((n = t(o)), n)) return n.v;
      return !0;
    }
    function p(e, t) {
      var n = e.device_platforms;
      return !!n && d(e) === 1 && n.includes(t);
    }
    function _(e, t) {
      var n = o("AdsPlacementPluginList")
        .getAllPlatforms()
        .filter(function (e) {
          var n = e.apiPublisherPlatform;
          return n === t;
        })
        .first();
      return n
        ? r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
            e,
            n.apiPublisherPlatform,
          ) && c(e) === 1
        : !1;
    }
    function f(e, t) {
      var n = o("AdsPlacementPluginList")
        .getAllPlatforms()
        .filter(function (e) {
          var n = e.apiPublisherPlatform;
          return t.contains(n);
        });
      if (!n) return !1;
      var a = n.map(function (t) {
        var n = t.apiPublisherPlatform;
        return r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(e, n);
      });
      return (
        !a.some(function (e) {
          return e === !1;
        }) && c(e) === t.count()
      );
    }
    function g(e, t, n) {
      var r = le(e),
        a = o("AdsPlacementPluginList")
          .getAllPlatforms()
          .filter(function (e) {
            var n = e.apiPublisherPlatform;
            return n === t;
          })
          .flatMap(function (e) {
            var t = e.positions;
            return t;
          })
          .filter(function (e) {
            var t = e.isActive;
            return t(r);
          });
      return a.size === 1 && a.first().key === n;
    }
    function h(e, t, n) {
      var r = o("AdsPlacementPluginList")
        .getAllPlatforms()
        .find(function (e) {
          var n = e.apiPublisherPlatform;
          return n === t;
        });
      if (r == null) return !1;
      var a = r.positions
        .filter(function (t) {
          var n = t.isActive;
          return n(e);
        })
        .map(function (e) {
          var t = e.key;
          return t;
        });
      return a.equals(n);
    }
    function y(e, t) {
      return (
        t.isEnabled(e.capabilities, e.account) && !t.getIneligibilityReason(e)
      );
    }
    function C(e, t, n, a) {
      var i = r("adsPlacementAPISpecReaderIsActivePosition")(
          e,
          a,
          n.apiPosition,
        ),
        l = t.softOptOutSpec,
        s =
          l != null &&
          r("adsPlacementAPISpecReaderIsActivePosition")(l, a, n.apiPosition);
      if (
        o(
          "AdsPlacementSOOBundleGatingUtils",
        ).isAccountEligibleForSOOExpansionBundle(t.objective)
      ) {
        var u,
          c =
            n == null || (u = n.parentPlacements) == null ? void 0 : u.first();
        if (
          c == null ||
          o(
            "AdsPlacementDependentPlatformGatingUtils",
          ).shouldSkipPlacementParentDependency(n.key, c, t.capabilities)
        )
          return i || s;
        var d = r("AdsPlacementPositionPlugins").get(c),
          m =
            d != null &&
            r("adsPlacementAPISpecReaderIsActivePosition")(
              e,
              d.platformKey,
              d.apiPosition,
            ),
          p =
            l != null &&
            d != null &&
            r("adsPlacementAPISpecReaderIsActivePosition")(
              l,
              d.platformKey,
              d.apiPosition,
            );
        return (i || s) && (m || p);
      }
      return (
        r("adsPlacementAPISpecReaderIsActivePosition")(e, a, n.apiPosition) ||
        !y(t, n)
      );
    }
    function b(e, t, n) {
      return C(e, t, n, "instagram");
    }
    function v(e, t) {
      var n;
      return (
        !!e.facebook_positions &&
        e.facebook_positions.includes(t) &&
        ((n = e.facebook_positions) == null ? void 0 : n.length) === 1
      );
    }
    function S(e, t) {
      var n;
      return (
        !!e.audience_network_positions &&
        e.audience_network_positions.includes(t) &&
        ((n = e.audience_network_positions) == null ? void 0 : n.length) === 1
      );
    }
    function R(e, t) {
      var n;
      return (
        !!e.instagram_positions &&
        e.instagram_positions.includes(t) &&
        ((n = e.instagram_positions) == null ? void 0 : n.length) === 1
      );
    }
    function L(e, t) {
      return (
        r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
          { publisher_platforms: e.publisher_platforms },
          "instagram",
        ) &&
        e.instagram_positions != null &&
        e.instagram_positions.includes(t)
      );
    }
    function E(e, t) {
      var n;
      return (
        e.whatsapp_positions != null &&
        e.whatsapp_positions.includes(t) &&
        ((n = e.whatsapp_positions) == null ? void 0 : n.length) === 1
      );
    }
    function k(e, t) {
      var n;
      return (
        e.messenger_positions != null &&
        e.messenger_positions.includes(t) &&
        ((n = e.messenger_positions) == null ? void 0 : n.length) === 1
      );
    }
    function I(e) {
      return _(e, "audience_network") && S(e, "instream_video");
    }
    function T(e) {
      return _(e, "facebook") && v(e, "feed");
    }
    function D(e) {
      return _(e, "facebook") && v(e, "instream_video");
    }
    function x(e) {
      return _(e, "oculus");
    }
    function $(e) {
      var t = r("immutable").Set(["audience_network", "facebook"]);
      return f(e, t) && S(e, "instream_video") && v(e, "instream_video");
    }
    function P(e) {
      return (
        _(e, "facebook") &&
        !!e.facebook_positions &&
        e.facebook_positions.length === 2 &&
        r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
          e,
          "instream_video",
        ) &&
        r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
          e,
          "facebook_reels_overlay",
        )
      );
    }
    function N(e) {
      return _(e, "instagram") && R(e, "story");
    }
    function M(e) {
      return _(e, "instagram") && R(e, "reels");
    }
    function w(e) {
      return _(e, "messenger") && k(e, "marketing_messages");
    }
    function A(e) {
      return _(e, "whatsapp") && E(e, "marketing_messages");
    }
    function F(e) {
      var t = c(e);
      if (t === 0) return !1;
      var n =
          r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
            e,
            "whatsapp",
          ) && E(e, "marketing_messages"),
        o =
          r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
            e,
            "messenger",
          ) && k(e, "marketing_messages"),
        a = (n ? 1 : 0) + (o ? 1 : 0);
      return t === a;
    }
    function O(e, t) {
      var n = new Map();
      t.forEach(function (e) {
        var t = n.get(e.platform);
        t
          ? (t.add(e.position), n.set(e.platform, t))
          : n.set(e.platform, new Set([e.position]));
      });
      var r = n.get("facebook");
      if (
        !B(
          e.facebook_positions
            ? e.facebook_positions.map(function (e) {
                return String(e);
              })
            : null,
          r,
        )
      )
        return !1;
      var o = n.get("instagram");
      if (
        !B(
          e.instagram_positions
            ? e.instagram_positions.map(function (e) {
                return String(e);
              })
            : null,
          o,
        )
      )
        return !1;
      var a = n.get("audience_network");
      if (
        !B(
          e.audience_network_positions
            ? e.audience_network_positions.map(function (e) {
                return String(e);
              })
            : null,
          a,
        )
      )
        return !1;
      var i = n.get("messenger");
      if (
        !B(
          e.messenger_positions
            ? e.messenger_positions.map(function (e) {
                return String(e);
              })
            : null,
          i,
        )
      )
        return !1;
      var l = n.get("whatsapp");
      return !!B(
        e.whatsapp_positions
          ? e.whatsapp_positions.map(function (e) {
              return String(e);
            })
          : null,
        l,
      );
    }
    function B(e, t) {
      if (e) {
        if (t) {
          if (
            !e.every(function (e) {
              return t.has(e);
            })
          )
            return !1;
        } else if (e.length > 0) return !1;
      }
      return !0;
    }
    function W(e) {
      return I(e) || D(e) || $(e);
    }
    function q(e) {
      return _(e, "facebook") && v(e, "story");
    }
    function U(e) {
      return _(e, "facebook") && v(e, "facebook_reels");
    }
    function V(e, t) {
      return (
        !!e.audience_network_positions &&
        e.audience_network_positions.includes(t)
      );
    }
    function H(e, t) {
      var n = e.whatsapp_positions;
      return !!n && n.includes(t);
    }
    function G(e) {
      return (
        r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
          e,
          "instagram",
        ) && L(e, "story")
      );
    }
    function z(e) {
      return (
        r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
          e,
          "instagram",
        ) && L(e, "stream")
      );
    }
    function j(e) {
      return (
        r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
          e,
          "instagram",
        ) && L(e, "reels")
      );
    }
    function K(e) {
      return (
        r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
          e,
          "instagram",
        ) && L(e, "explore")
      );
    }
    function Q(e) {
      return (
        r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
          e,
          "facebook",
        ) && r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(e, "story")
      );
    }
    function X(e) {
      return (
        r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
          e,
          "facebook",
        ) && r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(e, "feed")
      );
    }
    function Y(e) {
      return (
        r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
          e,
          "facebook",
        ) &&
        r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(e, "video_feeds")
      );
    }
    function J(e) {
      return (
        r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
          e,
          "facebook",
        ) &&
        r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
          e,
          "facebook_reels",
        )
      );
    }
    function Z(e) {
      return (
        r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
          e,
          "facebook",
        ) &&
        r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
          e,
          "profile_feed",
        )
      );
    }
    function ee(e) {
      return (
        r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
          e,
          "facebook",
        ) &&
        r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
          e,
          "instream_video",
        )
      );
    }
    function te(e) {
      return (
        r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
          e,
          "whatsapp",
        ) && H(e, "marketing_messages")
      );
    }
    function ne(e, t) {
      return !!e.device_platforms && e.device_platforms.includes(t);
    }
    function re(e) {
      var t = e.spec,
        n = o("AdsPlacementAPISpecDefaultsUtils").getPublisherPlatforms(e),
        a = o("AdsPlacementAPISpecDefaultsUtils").getDevicePlatforms(e),
        i =
          t.excluded_publisher_list_ids &&
          t.excluded_publisher_list_ids.length > 0,
        l = t.user_os && t.user_os.length > 0,
        s = r("AdsAppUtils").isAppObjective(e.objective, e.promotedObjectType),
        u = r("AdsAccountUtils").hasCapabilityFromList(
          e.capabilities,
          "CAN_SEE_FEED_IF",
        ),
        c = r("AdsBrandSafetyUtils").getHasChangedContentSeverityLevels(t, u);
      return (
        !!t.publisher_platforms &&
        t.publisher_platforms.length === n.size &&
        !!t.device_platforms &&
        t.device_platforms.length === a.size &&
        !o("AdsPlacementAPISpecDefaultsUtils")
          .getPublisherPlatformPlugins(e)
          .some(function (t) {
            return ae(e, t);
          }) &&
        i !== !0 &&
        !(l === !0 && !s) &&
        !c
      );
    }
    function oe(e, t, n) {
      return (
        !r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(t, e) &&
        r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(n, e)
      );
    }
    function ae(e, t) {
      var n = e.spec,
        r = t.apiPositionsTargetField
          ? t.apiPositionsTargetField(e.capabilities)
          : null;
      return (
        !!r &&
        !!n[r] &&
        n[r].length > 0 &&
        n[r].length !==
          o("AdsPlacementAPISpecDefaultsUtils").getPositionsForPlatform(
            t.key,
            e,
          ).size
      );
    }
    var ie = [
      (s = r("AdsAPITargetFields")).AUDIENCE_NETWORK_POSITIONS,
      s.BRAND_SAFETY_CONTENT_FILTER_LEVELS,
      s.CONTEXTUAL_TARGETING_CATEGORIES,
      s.DEVICE_PLATFORMS,
      s.EXCLUDED_BRAND_SAFETY_CONTENT_TYPES,
      s.EXCLUDED_PUBLISHER_LIST_IDS,
      s.EXCLUDED_USER_DEVICE,
      s.FACEBOOK_POSITIONS,
      s.INSTAGRAM_POSITIONS,
      s.INSTREAM_VIDEO_SKIPPABLE_EXCLUDED,
      s.MESSENGER_POSITIONS,
      s.WHATSAPP_POSITIONS,
      s.PUBLISHER_PLATFORMS,
      s.USER_DEVICE,
      s.USER_OS,
      s.WIRELESS_CARRIER,
      s.THREADS_POSITIONS,
      s.STREAMING_SERVICES_POSITIONS,
    ];
    function le(e) {
      return r("whitelistObjectKeys")(e, ie);
    }
    function se(t) {
      var n = r("whitelistObjectKeys")(t, ie);
      return n.publisher_platforms
        ? n.publisher_platforms.getValues().map(function (t, o) {
            return (e || (e = r("mapObject"))).untyped(n, function (e) {
              return e.getValueForIndex(o);
            });
          })
        : [];
    }
    function ue(e) {
      var t = {};
      return (
        o("AdsPlacementConstants").PLACEMENT_FIELD_TO_AD_SET_PATHS.forEach(
          function (n, o) {
            var a = r("getByPath")(e, n);
            t[o] = (a && a.toJS ? a.toJS() : a) || void 0;
          },
        ),
        t
      );
    }
    function ce(e, t) {
      var n,
        a = (n = r("adsPlacementAPISpecReaderIsActiveFacebookPosition"))(
          t,
          "feed",
        ),
        i = n(t, "right_hand_column"),
        l = L(t, "stream"),
        s = L(t, "story"),
        u = L(t, "explore"),
        c = L(t, "explore_home"),
        d = L(t, "profile_feed"),
        m = L(t, "profile_reels"),
        p = L(t, "ig_search"),
        _ = L(t, "igtv"),
        f = L(t, "reels"),
        g = L(t, "reels_overlay"),
        h = L(t, "shop"),
        y = r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
          t,
          "messenger",
        ),
        C = r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
          t,
          "audience_network",
        ),
        b = ne(t, r("AdsAPIDevicePlatform").DESKTOP),
        v = ne(t, r("AdsAPIDevicePlatform").MOBILE),
        S = n(t, "story"),
        R = n(t, "facebook_reels_overlay"),
        E = n(t, "instream_video"),
        k = n(t, "instant_article"),
        I = n(t, "marketplace"),
        T = n(t, "search"),
        D = n(t, "groups_feed"),
        x = n(t, "biz_disco_feed"),
        $ = n(t, "profile_feed"),
        P = n(t, "facebook_reels"),
        N = n(t, "profile_reels"),
        M = H(t, "marketing_messages"),
        w = o("AdsPlacementAPISpecReaderUtilsShared").isActiveMessengerPosition(
          t,
          "marketing_messages",
        ),
        A = H(t, "status"),
        F = H(t, "channel"),
        O = r("adsPlacementAPISpecReaderIsActiveThreadsPosition")(
          t,
          "threads_stream",
        );
      switch (e) {
        case r("AdsPageTypes").DESKTOP_FEED:
          return a && b;
        case r("AdsPageTypes").MOBILE_FEED:
          return a && v;
        case r("AdsPageTypes").RIGHT_COLUMN:
          return i;
        case r("AdsPageTypes").MOBILE_EXTERNAL:
          return C && v;
        case r("AdsPageTypes").INSTAGRAM_STREAM:
          return l;
        case r("AdsPageTypes").INSTAGRAM_STORY:
          return s;
        case r("AdsPageTypes").INSTAGRAM_EXPLORE:
          return u;
        case r("AdsPageTypes").INSTAGRAM_EXPLORE_HOME:
          return c;
        case r("AdsPageTypes").INSTAGRAM_PROFILE_FEED:
          return d;
        case r("AdsPageTypes").INSTAGRAM_PROFILE_REELS:
          return m;
        case r("AdsPageTypes").INSTAGRAM_SEARCH:
          return p;
        case r("AdsPageTypes").INSTAGRAM_IGTV:
          return _;
        case r("AdsPageTypes").INSTAGRAM_REELS:
          return f;
        case r("AdsPageTypes").INSTAGRAM_REELS_OVERLAY:
          return g;
        case r("AdsPageTypes").INSTAGRAM_SHOP:
          return h;
        case r("AdsPageTypes").MESSENGER:
          return y;
        case r("AdsPageTypes").MESSENGER_INBOX:
          return y;
        case r("AdsPageTypes").MOBILE_FB_STORY:
          return S && v;
        case r("AdsPageTypes").MOBILE_FB_STORY_STICKER:
          return R && v;
        case r("AdsPageTypes").MOBILE_INSTREAM_VIDEO:
          return E && v;
        case r("AdsPageTypes").INSTANT_ARTICLE:
          return k;
        case r("AdsPageTypes").MARKETPLACE_MOBILE:
          return I && v;
        case r("AdsPageTypes").MOBILE_MARKETPLACE_SEARCH_ADS:
          return T && v;
        case r("AdsPageTypes").MOBILE_SEARCH_SERP_ADS:
          return T && v;
        case r("AdsPageTypes").MOBILE_GROUPS_FEED:
          return D && v;
        case r("AdsPageTypes").MOBILE_BIZ_DISCO_FEED:
          return x && v;
        case r("AdsPageTypes").MOBILE_PROFILE_FEED:
          return $ && v;
        case r("AdsPageTypes").MOBILE_REELS:
          return P && v;
        case r("AdsPageTypes").MOBILE_PROFILE_REELS:
          return N && v;
        case r("AdsPageTypes").WHATSAPP_MARKETING_MESSAGES:
          return M;
        case r("AdsPageTypes").MESSENGER_MARKETING_MESSAGES:
          return w;
        case r("AdsPageTypes").WHATSAPP_STATUS:
          return A;
        case r("AdsPageTypes").WHATSAPP_CHANNEL:
          return F;
        case r("AdsPageTypes").THREADS_STREAM:
          return O;
        case r("AdsPageTypes").LOGOUT:
        case r("AdsPageTypes").HOME:
        default:
          return !1;
      }
    }
    function de(e, t, n) {
      var o,
        a = (o = r("adsContainsAssetCustomizationPlacement"))(t, {
          platform: "facebook",
          position: "feed",
        }),
        i = o(t, { platform: "facebook", position: "right_hand_column" }),
        l = o(t, { platform: "facebook", position: "story" }),
        s = o(t, { platform: "facebook", position: "facebook_reels_overlay" }),
        u = o(t, { platform: "instagram", position: "stream" }),
        c = o(t, { platform: "instagram", position: "story" }),
        d = t.toArray().some(function (e) {
          return e.platform === "messenger" && e.position !== "story";
        }),
        m = o(t, { platform: "messenger", position: "story" }),
        p = t.toArray().some(function (e) {
          return e.platform === "audience_network";
        }),
        _ = n.includes(r("AdsAPIDevicePlatform").DESKTOP),
        f = n.includes(r("AdsAPIDevicePlatform").MOBILE),
        g = o(t, { platform: "facebook", position: "instream_video" }),
        h = o(t, { platform: "facebook", position: "instant_article" }),
        y = o(t, { platform: "facebook", position: "marketplace" }),
        C = o(t, { platform: "facebook", position: "search" }),
        b = o(t, { platform: "threads", position: "threads_stream" }),
        v = o(t, { platform: "whatsapp", position: "status" });
      switch (e) {
        case r("AdsPageTypes").DESKTOP_FEED:
          return a && _;
        case r("AdsPageTypes").MOBILE_FEED:
          return a && f;
        case r("AdsPageTypes").RIGHT_COLUMN:
          return i;
        case r("AdsPageTypes").MOBILE_FB_STORY:
          return l;
        case r("AdsPageTypes").MOBILE_FB_STORY_STICKER:
          return s;
        case r("AdsPageTypes").MOBILE_EXTERNAL:
          return p && f;
        case r("AdsPageTypes").INSTAGRAM_STREAM:
          return u;
        case r("AdsPageTypes").INSTAGRAM_STORY:
          return c;
        case r("AdsPageTypes").MESSENGER:
        case r("AdsPageTypes").MESSENGER_INBOX:
          return d;
        case r("AdsPageTypes").MESSENGER_STORY:
          return m;
        case r("AdsPageTypes").MOBILE_INSTREAM_VIDEO:
          return g;
        case r("AdsPageTypes").INSTANT_ARTICLE:
          return h;
        case r("AdsPageTypes").MARKETPLACE_MOBILE:
          return y;
        case r("AdsPageTypes").MOBILE_MARKETPLACE_SEARCH_ADS:
        case r("AdsPageTypes").MOBILE_SEARCH_SERP_ADS:
          return C;
        case r("AdsPageTypes").THREADS_STREAM:
          return b;
        case r("AdsPageTypes").WHATSAPP_STATUS:
          return v;
        case r("AdsPageTypes").LOGOUT:
        case r("AdsPageTypes").HOME:
        default:
          return !1;
      }
    }
    function me(e, t) {
      var n,
        o = (n = r("adsContainsAssetCustomizationPlacement"))(e, {
          platform: "facebook",
          position: "feed",
        }),
        a = n(e, { platform: "facebook", position: "right_hand_column" }),
        i = n(e, { platform: "facebook", position: "story" }),
        l = n(e, { platform: "facebook", position: "facebook_reels_overlay" }),
        s = n(e, { platform: "instagram", position: "stream" }),
        u = n(e, { platform: "instagram", position: "story" }),
        c = n(e, { platform: "facebook", position: "instant_article" }),
        d = e.toArray().some(function (e) {
          return e.platform === "messenger";
        }),
        m = e.toArray().some(function (e) {
          return e.platform === "audience_network";
        }),
        p = t.includes(r("AdsAPIDevicePlatform").DESKTOP),
        _ = t.includes(r("AdsAPIDevicePlatform").MOBILE),
        f = n(e, { platform: "threads", position: "threads_stream" }),
        g = n(e, { platform: "whatsapp", position: "status" }),
        h = [];
      return (
        o && p && h.push(r("AdsPageTypes").DESKTOP_FEED),
        o && _ && h.push(r("AdsPageTypes").MOBILE_FEED),
        a && h.push(r("AdsPageTypes").RIGHT_COLUMN),
        i && h.push(r("AdsPageTypes").MOBILE_FB_STORY),
        l && h.push(r("AdsPageTypes").MOBILE_FB_STORY_STICKER),
        m && _ && h.push(r("AdsPageTypes").MOBILE_EXTERNAL),
        s && h.push(r("AdsPageTypes").INSTAGRAM_STREAM),
        u && h.push(r("AdsPageTypes").INSTAGRAM_STORY),
        d &&
          h.push(
            r("AdsPageTypes").MESSENGER,
            r("AdsPageTypes").MESSENGER_INBOX,
          ),
        c && h.push(r("AdsPageTypes").INSTANT_ARTICLE),
        f && h.push(r("AdsPageTypes").THREADS_STREAM),
        g && h.push(r("AdsPageTypes").WHATSAPP_STATUS),
        h
      );
    }
    function pe(e, t) {
      var n = e.containsOffer,
        o = e.objective,
        a = e.promotedObjectType,
        i = e.spec,
        l = r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
          i,
          "instagram",
        ),
        s = r("adsPlacementAPISpecReaderIsActiveFacebookPosition")(
          i,
          "marketplace",
        ),
        u = !1;
      return (
        o === r("AdsAPIObjectives").BRAND_AWARENESS && (u = !0),
        s && (u = !0),
        (o === r("AdsAPIObjectives").OFFER_CLAIMS || n === !0) && (u = !0),
        e.buyingType === r("AdsBuyingTypes").RESERVED && t && (u = !0),
        r("AdsAppUtils").isMobileAppObjective(o, a) ||
          ((l || o === r("AdsAPIObjectives").LEAD_GENERATION) && (u = !0)),
        u
          ? r("immutable").Set([r("AdsUserDeviceTypes").FEATURE_PHONE])
          : r("immutable").Set([])
      );
    }
    function _e(e, t) {
      var n = t.positions
        .filter(function (t) {
          return t.isEnabled(e.capabilities, e.account);
        })
        .filter(function (t) {
          return (
            t.isEnabled(e.capabilities, e.account) &&
            !t.getIneligibilityReason(e)
          );
        });
      return n;
    }
    function fe(e) {
      var t = o("AdsPlacementPluginList").getOrderedPlatforms(e);
      return t
        .filter(function (t) {
          var n = t.apiPublisherPlatform;
          return r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
            e.spec,
            n,
          );
        })
        .flatMap(function (e) {
          var t = e.positions;
          return t;
        })
        .filter(function (t) {
          var n = t.getIneligibilityReason,
            r = t.isActive;
          return r(e.spec) && !n(e);
        })
        .map(function (e) {
          var t = e.key;
          return t;
        })
        .toArray();
    }
    function ge(e) {
      return he(e ? e.id : void 0, e);
    }
    var he = r("memoizeWithArgsByKey")(ue),
      ye = r("memoizeWithArgsByKey")(
        o("AdsPlacementAPISpecReaderUtilsShared")
          .convertCampaignToPlacementSpec_LEGACY,
      );
    function Ce(e) {
      return ye(
        e ? e.id : void 0,
        e ? r("adsConvertAdObjectRecordToPlainJS")(e) : null,
      );
    }
    function be(e) {
      return e.platformKey === "audience_network"
        ? r("AdsAPITargetFields").AUDIENCE_NETWORK_POSITIONS
        : e.platformKey === "facebook"
          ? r("AdsAPITargetFields").FACEBOOK_POSITIONS
          : e.platformKey === "instagram"
            ? r("AdsAPITargetFields").INSTAGRAM_POSITIONS
            : e.platformKey === "messenger"
              ? r("AdsAPITargetFields").MESSENGER_POSITIONS
              : e.platformKey === "oculus"
                ? r("AdsAPITargetFields").OCULUS_POSITIONS
                : e.platformKey === "streaming_services"
                  ? r("AdsAPITargetFields").STREAMING_SERVICES_POSITIONS
                  : e.platformKey === "whatsapp"
                    ? r("AdsAPITargetFields").WHATSAPP_POSITIONS
                    : e.platformKey === "threads"
                      ? r("AdsAPITargetFields").THREADS_POSITIONS
                      : (function () {
                          throw Error(
                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                              e.platformKey,
                          );
                        })();
    }
    function ve(e) {
      return e.platformKey === "audience_network"
        ? "audience_network"
        : e.platformKey === "facebook"
          ? "facebook"
          : e.platformKey === "instagram"
            ? "instagram"
            : e.platformKey === "messenger"
              ? "messenger"
              : e.platformKey === "oculus"
                ? "oculus"
                : e.platformKey === "streaming_services"
                  ? "streaming_services"
                  : e.platformKey === "whatsapp"
                    ? "whatsapp"
                    : e.platformKey === "threads"
                      ? "threads"
                      : (function () {
                          throw Error(
                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                              e.platformKey,
                          );
                        })();
    }
    function Se(e) {
      var t, n, o, a, i, l;
      return r("immutable")
        .List()
        .concat(
          (t = e[r("AdsAPITargetFields").FACEBOOK_POSITIONS]) == null
            ? void 0
            : t.map(function (e) {
                return { platform: "facebook", position: e };
              }),
        )
        .concat(
          (n = e[r("AdsAPITargetFields").INSTAGRAM_POSITIONS]) == null
            ? void 0
            : n.map(function (e) {
                return { platform: "instagram", position: e };
              }),
        )
        .concat(
          (o = e[r("AdsAPITargetFields").AUDIENCE_NETWORK_POSITIONS]) == null
            ? void 0
            : o.map(function (e) {
                return { platform: "audience_network", position: e };
              }),
        )
        .concat(
          (a = e[r("AdsAPITargetFields").MESSENGER_POSITIONS]) == null
            ? void 0
            : a.map(function (e) {
                return { platform: "messenger", position: e };
              }),
        )
        .concat(
          (i = e[r("AdsAPITargetFields").WHATSAPP_POSITIONS]) == null
            ? void 0
            : i.map(function (e) {
                return { platform: "whatsapp", position: e };
              }),
        )
        .concat(
          (l = e[r("AdsAPITargetFields").THREADS_POSITIONS]) == null
            ? void 0
            : l.map(function (e) {
                return { platform: "threads", position: e };
              }),
        )
        .filter(Boolean);
    }
    function Re(e) {
      var t,
        n,
        o,
        a = (n = r("immutable")).Set(),
        i = n.Set(),
        l = n.Set(),
        s = n.Set(),
        u = n.Set(),
        c = n.Set();
      return (
        e.forEach(function (e) {
          var t, n;
          ((a = a.concat(
            (t = r("immutable")).Set(
              e[(n = r("AdsAPITargetFields")).FACEBOOK_POSITIONS],
            ),
          )),
            (i = i.concat(t.Set(e[n.INSTAGRAM_POSITIONS]))),
            (l = l.concat(t.Set(e[n.MESSENGER_POSITIONS]))),
            (s = s.concat(t.Set(e[n.WHATSAPP_POSITIONS]))),
            (u = u.concat(t.Set(e[n.AUDIENCE_NETWORK_POSITIONS]))),
            (c = c.concat(t.Set(e[n.THREADS_POSITIONS]))));
        }),
        Se(
          ((t = {}),
          (t[(o = r("AdsAPITargetFields")).FACEBOOK_POSITIONS] = a.toArray()),
          (t[o.INSTAGRAM_POSITIONS] = i.toArray()),
          (t[o.MESSENGER_POSITIONS] = l.toArray()),
          (t[o.WHATSAPP_POSITIONS] = s.toArray()),
          (t[o.AUDIENCE_NETWORK_POSITIONS] = u.toArray()),
          (t[o.THREADS_POSITIONS] = c.toArray()),
          t),
        )
      );
    }
    function Le(e, t, n, a) {
      var i = r("immutable").Set([]);
      a &&
        (i = o(
          "AdsPlacementPositionGroupPluginList",
        ).getEligiblePositionKeysFromPositionGroup(a, e));
      var l = o("AdsPlacementPluginList")
        .getAllPlatforms()
        .filter(function (e) {
          var n = e.apiPublisherPlatform;
          return t === null || n !== t;
        })
        .flatMap(function (e) {
          var t = e.positions;
          return t;
        })
        .filter(function (e) {
          var t = e.key;
          return n === null || t !== n;
        })
        .filter(function (e) {
          var t = e.key;
          return a === null || !i.contains(t);
        })
        .filter(function (t) {
          var n = t.isActive;
          return n(e.spec);
        });
      return l.size === 1 && l.first().key === "facebook/instream_video";
    }
    i.exports = {
      convertBulkTargetingSpecToPlacementSpecs: se,
      convertCampaignToPlacementSpec_LEGACY: Ce,
      convertCampaignToPlacementSpec: ge,
      convertTargetingSpecToPlacementSpec: le,
      getAllActiveEligiblePositions: fe,
      getAssetCustomizationPlacementsFromPlacementSpec: Se,
      getAssetCustomizationPlacementsFromPlacementSpecs: Re,
      getDisabledDeviceTypes: pe,
      getPageTypesFromAssetCustomizationPlacement: me,
      getPlatformEligiblePositions: _e,
      getPositionFieldFromPositionPlugin: be,
      getPublisherPlatformFromPositionPlugin: ve,
      haveTheSameActivePublisherPlatform: m,
      isEligiblePosition: y,
      isActiveOrIneligiblePosition: C,
      isActiveOrIneligibleInstagramPosition: b,
      isOnlyActiveAudienceNetworkInstreamPlacement: I,
      isOnlyActiveDevicePlatform: p,
      isOnlyActiveFacebookFeedPlacement: T,
      isOnlyActiveFacebookInstreamAndReelsOverlayPlacements: P,
      isOnlyActiveFacebookInstreamVideosPlacement: D,
      isOnlyActiveFacebookInstreamVideosPlacementAfterRemoval: Le,
      isOnlyActiveOculusRewardedVideoPlacement: x,
      isOnlyActiveFacebookPosition: v,
      isOnlyActiveFacebookStoriesPlacement: q,
      isOnlyActiveFacebookReelsPlacement: U,
      isOnlyActiveInstagramStoryPlacement: N,
      isOnlyActiveInstagramReelsPlacement: M,
      isOnlyActiveSelectedPlacements: O,
      isOnlyActiveInstagramPosition: R,
      isOnlyActiveInstreamPlacements: W,
      isOnlyActiveWhatsAppMarketingMessagePlacement: A,
      isOnlyActiveMessengerMarketingMessagePlacement: w,
      isOnlyActiveMarketingMessagePlacement: F,
      isOnlyActivePublisherPlatform: _,
      isOnlyActivePublisherPlatformGroup: g,
      isOnlyActivePublisherPlatformPositions: h,
      isOnlyActivePublisherPlatformSet: f,
      isActiveDevicePlatform: ne,
      isActiveFacebookFeedPosition: X,
      isActiveFacebookVideoFeedPosition: Y,
      isActiveFacebookReelsPosition: J,
      isActiveFacebookStoryPosition: Q,
      isActiveWhatsAppMessageMarketingPosition: te,
      isActiveInstagramReelPosition: j,
      isActiveInstagramStoryPosition: G,
      isActiveInstagramFeedPosition: z,
      isActiveInstagramExplorePosition: K,
      isActivePosition: r("adsPlacementAPISpecReaderIsActivePosition"),
      isActiveInstagramPosition: L,
      isActiveAudienceNetworkPosition: V,
      isActiveWhatsAppPosition: H,
      isDefaultPlacements: re,
      isPageTypeSupportedByPlacement: ce,
      isPageTypeSupportedByAssetCustomizationPlacement: de,
      isPublisherPlatformAdded: oe,
      PLACEMENT_FIELDS_TARGETING_KEYMAP: u,
      isActiveThreadsPosition: r(
        "adsPlacementAPISpecReaderIsActiveThreadsPosition",
      ),
      isActiveFacebookProfileFeedPosition: Z,
      isActiveFacebookInstreamVideoPosition: ee,
    };
  },
  34,
);
