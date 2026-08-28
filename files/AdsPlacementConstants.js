__d(
  "AdsPlacementConstants",
  [
    "invariant",
    "AdsAPICampaignPaths",
    "AdsAPITargetFields",
    "AdsBrandSafetyContentFilterLevel",
    "getByPath",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m,
      p =
        ((e = {}),
        (e[(d = r("AdsAPITargetFields")).DEVICE_PLATFORMS] = (m = r(
          "AdsAPICampaignPaths",
        )).TARGETING.DEVICE_PLATFORMS),
        (e[d.BRAND_SAFETY_CONTENT_FILTER_LEVELS] =
          m.TARGETING.BRAND_SAFETY_CONTENT_FILTER_LEVELS),
        (e[d.EXCLUDED_BRAND_SAFETY_CONTENT_TYPES] =
          m.TARGETING.EXCLUDED_BRAND_SAFETY_CONTENT_TYPES),
        (e[d.EXCLUDED_PUBLISHER_LIST_IDS] =
          m.TARGETING.EXCLUDED_PUBLISHER_LIST_IDS),
        (e[d.FACEBOOK_POSITIONS] = m.TARGETING.FACEBOOK_POSITIONS),
        (e[d.INSTAGRAM_POSITIONS] = m.TARGETING.INSTAGRAM_POSITIONS),
        (e[d.MESSENGER_POSITIONS] = m.TARGETING.MESSENGER_POSITIONS),
        (e[d.AUDIENCE_NETWORK_POSITIONS] =
          m.TARGETING.AUDIENCE_NETWORK_POSITIONS),
        (e[d.WHATSAPP_POSITIONS] = m.TARGETING.WHATSAPP_POSITIONS),
        (e[d.OCULUS_POSITIONS] = m.TARGETING.OCULUS_POSITIONS),
        (e[d.THREADS_POSITIONS] = m.TARGETING.THREADS_POSITIONS),
        (e[d.STREAMING_SERVICES_POSITIONS] =
          m.TARGETING.STREAMING_SERVICES_POSITIONS),
        (e[d.PUBLISHER_PLATFORMS] = m.TARGETING.PUBLISHER_PLATFORMS),
        (e[d.USER_DEVICE] = m.TARGETING.USER_DEVICE),
        (e[d.EXCLUDED_USER_DEVICE] = m.TARGETING.EXCLUDED_USER_DEVICE),
        (e[d.USER_OS] = m.TARGETING.USER_OS),
        (e[d.WIRELESS_CARRIER] = m.TARGETING.WIRELESS_CARRIER),
        (e[d.DIRECT_INSTALL_DEVICES] = m.TARGETING.DIRECT_INSTALL_DEVICES),
        (e[d.INSTREAM_VIDEO_SKIPPABLE_EXCLUDED] =
          m.TARGETING.INSTREAM_VIDEO_SKIPPABLE_EXCLUDED),
        (e[d.CONTEXTUAL_TARGETING_CATEGORIES] =
          m.TARGETING.CONTEXTUAL_TARGETING_CATEGORIES),
        e),
      _ = r("immutable").Map(p),
      f = { targeting: Object.keys(p) },
      g = {
        targeting: Object.keys(p).reduce(function (e, t) {
          var n;
          return babelHelpers.extends({}, e, ((n = {}), (n[t] = !0), n));
        }, {}),
      };
    _.forEach(function (e, t) {
      r("getByPath")(g, e) === !0 || s(0, 77470, t, e.join("."));
    });
    var h = [
        d.USER_OS,
        d.USER_DEVICE,
        d.EXCLUDED_USER_DEVICE,
        d.WIRELESS_CARRIER,
      ],
      y = [
        d.USER_OS,
        d.USER_DEVICE,
        d.EXCLUDED_USER_DEVICE,
        d.WIRELESS_CARRIER,
        d.DIRECT_INSTALL_DEVICES,
        d.EXCLUDED_PUBLISHER_LIST_IDS,
        d.BRAND_SAFETY_CONTENT_FILTER_LEVELS,
        d.EXCLUDED_BRAND_SAFETY_CONTENT_TYPES,
        d.INSTREAM_VIDEO_SKIPPABLE_EXCLUDED,
        d.CONTEXTUAL_TARGETING_CATEGORIES,
      ],
      C = [
        m.TARGETING.EXCLUDED_PUBLISHER_LIST_IDS,
        m.TARGETING.USER_DEVICE,
        m.TARGETING.EXCLUDED_USER_DEVICE,
        m.TARGETING.DIRECT_INSTALL_DEVICES,
        m.TARGETING.BRAND_SAFETY_CONTENT_FILTER_LEVELS,
        m.TARGETING.EXCLUDED_BRAND_SAFETY_CONTENT_TYPES,
        m.TARGETING.INSTREAM_VIDEO_SKIPPABLE_EXCLUDED,
        m.TARGETING.CONTEXTUAL_TARGETING_CATEGORIES,
      ],
      b = r("immutable").Map(
        ((u = {}),
        (u.facebook = d.FACEBOOK_POSITIONS),
        (u.instagram = d.INSTAGRAM_POSITIONS),
        (u.messenger = d.MESSENGER_POSITIONS),
        (u.audience_network = d.AUDIENCE_NETWORK_POSITIONS),
        (u.whatsapp = d.WHATSAPP_POSITIONS),
        (u.oculus = d.OCULUS_POSITIONS),
        (u.threads = d.THREADS_POSITIONS),
        u),
      ),
      v = [
        (c = o(
          "AdsBrandSafetyContentFilterLevel",
        )).getFBDefaultContextualContentFilterLevel(),
        c.getANDefaultContextualContentFilterLevel(),
      ],
      S = [
        c.getFBDefaultContextualContentFilterLevel(),
        c.getANDefaultContextualContentFilterLevel(),
        c.DEFAULT_ADS_BRAND_SAFETY_INVENTORY_FILTER_FEED_LEVEL,
      ];
    ((l.PLACEMENT_FIELD_TO_AD_SET_PATHS = _),
      (l.PLACEMENT_CAMPAIGN_SPEC_DEPENDENCIES = f),
      (l.PLACEMENT_MOBILE_OPTIONS_FIELDS = h),
      (l.PLACEMENT_NON_EFFECTIVE_FIELDS = y),
      (l.PLACEMENT_BULK_EDIT_DENYLIST_PATHS = C),
      (l.PLACEMENT_PLATFORM_TO_POSITION_FIELDS = b),
      (l.PLACEMENT_DEFAULT_BRAND_SAFETY_CONTENT_FILTER_LEVELS = v),
      (l.PLACEMENT_DEFAULT_BRAND_SAFETY_CONTENT_FILTER_LEVELS_WITH_FEED = S));
  },
  98,
);
