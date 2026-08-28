__d(
  "AdsGoalUtil",
  ["invariant", "StandardEventsStoreUtils", "flipObject", "isTruthy"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m,
      p =
        ((m = {}),
        (m.pixel =
          ((e = {}),
          (e.ADD_TO_CART = "offsite_conversion.fb_pixel_add_to_cart"),
          (e.ADD_PAYMENT_INFO = "offsite_conversion.fb_pixel_add_payment_info"),
          (e.ADD_TO_WISHLIST = "offsite_conversion.fb_pixel_add_to_wishlist"),
          (e.COMPLETE_REGISTRATION =
            "offsite_conversion.fb_pixel_complete_registration"),
          (e.CONTENT_VIEW = "offsite_conversion.fb_pixel_view_content"),
          (e.INITIATED_CHECKOUT =
            "offsite_conversion.fb_pixel_initiate_checkout"),
          (e.LEAD = "offsite_conversion.fb_pixel_lead"),
          (e.PURCHASE = "offsite_conversion.fb_pixel_purchase"),
          (e.SEARCH = "offsite_conversion.fb_pixel_search"),
          (e.OTHER = "offsite_conversion.other"),
          e)),
        (m.application =
          ((u = {}),
          (u.ADD_TO_CART = "app_custom_event.fb_mobile_add_to_cart"),
          (u.ADD_PAYMENT_INFO = "app_custom_event.fb_mobile_add_payment_info"),
          (u.ADD_TO_WISHLIST = "app_custom_event.fb_mobile_add_to_wishlist"),
          (u.COMPLETE_REGISTRATION =
            "app_custom_event.fb_mobile_complete_registration"),
          (u.CONTENT_VIEW = "app_custom_event.fb_mobile_content_view"),
          (u.INITIATED_CHECKOUT =
            "app_custom_event.fb_mobile_initiated_checkout"),
          (u.PURCHASE = "app_custom_event.fb_mobile_purchase"),
          (u.SEARCH = "app_custom_event.fb_mobile_search"),
          (u.ACHIEVEMENT_UNLOCKED =
            "app_custom_event.fb_mobile_achievement_unlocked"),
          (u.ACTIVATE_APP = "app_custom_event.fb_mobile_activate_app"),
          (u.LEVEL_ACHIEVED = "app_custom_event.fb_mobile_level_achieved"),
          (u.RATE = "app_custom_event.fb_mobile_rate"),
          (u.SPENT_CREDITS = "app_custom_event.fb_mobile_spent_credits"),
          (u.TUTORIAL_COMPLETION =
            "app_custom_event.fb_mobile_tutorial_completion"),
          (u.OTHER = "app_custom_event.other"),
          u)),
        (m.offline_conversion_data_set =
          ((c = {}),
          (c.ADD_TO_CART = "offline_conversion.add_to_cart"),
          (c.ADD_PAYMENT_INFO = "offline_conversion.add_payment_info"),
          (c.ADD_TO_WISHLIST = "offline_conversion.add_to_wishlist"),
          (c.COMPLETE_REGISTRATION =
            "offline_conversion.complete_registration"),
          (c.CONTENT_VIEW = "offline_conversion.view_content"),
          (c.INITIATED_CHECKOUT = "offline_conversion.initiate_checkout"),
          (c.LEAD = "offline_conversion.lead"),
          (c.PURCHASE = "offline_conversion.purchase"),
          (c.SEARCH = "offline_conversion.search"),
          (c.OTHER = "offline_conversion.other"),
          c)),
        (m.multiple_sources =
          ((d = {}),
          (d.ADD_TO_CART = "offsite_conversion.fb_pixel_add_to_cart"),
          (d.ADD_PAYMENT_INFO = "offsite_conversion.fb_pixel_add_payment_info"),
          (d.ADD_TO_WISHLIST = "offsite_conversion.fb_pixel_add_to_wishlist"),
          (d.COMPLETE_REGISTRATION =
            "offsite_conversion.fb_pixel_complete_registration"),
          (d.CONTENT_VIEW = "offsite_conversion.fb_pixel_view_content"),
          (d.INITIATED_CHECKOUT =
            "offsite_conversion.fb_pixel_initiate_checkout"),
          (d.LEAD = "offsite_conversion.fb_pixel_lead"),
          (d.PURCHASE = "offsite_conversion.fb_pixel_purchase"),
          (d.SEARCH = "offsite_conversion.fb_pixel_search"),
          (d.OTHER = "offsite_conversion.other"),
          (d.ACHIEVEMENT_UNLOCKED =
            "app_custom_event.fb_mobile_achievement_unlocked"),
          (d.ACTIVATE_APP = "app_custom_event.fb_mobile_activate_app"),
          (d.LEVEL_ACHIEVED = "app_custom_event.fb_mobile_level_achieved"),
          (d.RATE = "app_custom_event.fb_mobile_rate"),
          (d.SPENT_CREDITS = "app_custom_event.fb_mobile_spent_credits"),
          (d.TUTORIAL_COMPLETION =
            "app_custom_event.fb_mobile_tutorial_completion"),
          d)),
        m);
    function _(e) {
      return !!e.custom_event_type;
    }
    function f(e, t, n) {
      var r = null,
        a = g(e, n);
      return (
        Object.prototype.hasOwnProperty.call(p, t) &&
        Object.prototype.hasOwnProperty.call(p[t], e)
          ? (r = p[t][e])
          : Object.prototype.hasOwnProperty.call(
                o("StandardEventsStoreUtils").NEW_STANDARD_EVENT_MAP,
                e,
              )
            ? (r = o("StandardEventsStoreUtils").NEW_STANDARD_EVENT_MAP[e])
            : Object.prototype.hasOwnProperty.call(p.multiple_sources, e)
              ? (r = p.multiple_sources[e])
              : s(0, 1911, e, t),
        { nonCustomActionType: r, calculatedActionFieldType: a }
      );
    }
    function g(e, t) {
      return Object.prototype.hasOwnProperty.call(
        o("StandardEventsStoreUtils").NEW_STANDARD_EVENT_ACTION_FIELD_TYPE_MAP,
        e,
      )
        ? o("StandardEventsStoreUtils")
            .NEW_STANDARD_EVENT_ACTION_FIELD_TYPE_MAP[e][t]
        : t;
    }
    function h(e) {
      return e.startsWith("app_custom_event.custom")
        ? "app_custom_event"
        : e.startsWith("offline_conversion.custom")
          ? "offline_conversion"
          : "offsite_conversion";
    }
    function y(e) {
      switch (e) {
        case "application":
          return "app_custom_event.custom";
        case "offline_conversion_data_set":
          return "offline_conversion.custom";
        case "pixel":
        case "multiple_sources":
        case "page":
          return "offsite_conversion.custom";
        default:
          return "offsite_conversion.custom";
      }
    }
    var C = function (t) {
      var e = null;
      return (
        r("isTruthy")(t) &&
          Object.keys(p).find(function (n) {
            var o = r("flipObject")(p[n]);
            if (((e = o[t]), e != null)) return e;
          }),
        e
      );
    };
    ((l.isAdsGoal = _),
      (l.customEventTypeToInsightsActionType = f),
      (l.customEventTypeToInsightsActionFieldType = g),
      (l.mapCustomConversionPrefixToActionType = h),
      (l.getCustomConversionPrefixForEventSourceType = y),
      (l.getEventTypeFromActionType = C));
  },
  98,
);
