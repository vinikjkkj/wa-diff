__d(
  "StandardEventsStoreUtils",
  ["OffsiteCustomEventType", "StandardEventsDetails"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y =
        ((f = {}),
        (f.CONTACT =
          ((e = {}),
          (e.actions = "contact_actions"),
          (e.action_values = "contact_value"),
          (e.cost_per_action_type = "cost_per_contact"),
          e)),
        (f.CUSTOMIZE_PRODUCT =
          ((s = {}),
          (s.actions = "customize_product_actions"),
          (s.action_values = "customize_product_value"),
          (s.cost_per_action_type = "cost_per_customize_product"),
          s)),
        (f.DONATE =
          ((u = {}),
          (u.actions = "donate_actions"),
          (u.action_values = "donate_value"),
          (u.cost_per_action_type = "cost_per_donate"),
          u)),
        (f.FIND_LOCATION =
          ((c = {}),
          (c.actions = "find_location_actions"),
          (c.action_values = "find_location_value"),
          (c.cost_per_action_type = "cost_per_find_location"),
          c)),
        (f.SCHEDULE =
          ((d = {}),
          (d.actions = "schedule_actions"),
          (d.action_values = "schedule_value"),
          (d.cost_per_action_type = "cost_per_schedule"),
          d)),
        (f.START_TRIAL =
          ((m = {}),
          (m.actions = "start_trial_actions"),
          (m.action_values = "start_trial_value"),
          (m.cost_per_action_type = "cost_per_start_trial"),
          m)),
        (f.SUBMIT_APPLICATION =
          ((p = {}),
          (p.actions = "submit_application_actions"),
          (p.action_values = "submit_application_value"),
          (p.cost_per_action_type = "cost_per_submit_application"),
          p)),
        (f.SUBSCRIBE =
          ((_ = {}),
          (_.actions = "subscribe_actions"),
          (_.action_values = "subscribe_value"),
          (_.cost_per_action_type = "cost_per_subscribe"),
          _)),
        f),
      C =
        ((g = {}),
        (g.AD_CLICK = "ad_click"),
        (g.AD_IMPRESSION = "ad_impression"),
        (g.CONTACT = "contact"),
        (g.CUSTOMIZE_PRODUCT = "customize_product"),
        (g.DONATE = "donate"),
        (g.FIND_LOCATION = "find_location"),
        (g.SCHEDULE = "schedule"),
        (g.START_TRIAL = "start_trial"),
        (g.SUBMIT_APPLICATION = "submit_application"),
        (g.SUBSCRIBE = "subscribe"),
        (g.VISIT_LOCATION = "visit_location"),
        g),
      b =
        ((h = {}),
        (h.add_payment_info = {
          APPLICATION: "app_custom_event.fb_mobile_add_payment_info",
          FB_PIXEL: "offsite_conversion.fb_pixel_add_payment_info",
          OFFLINE_DATASET: "offline_conversion.add_payment_info",
        }),
        (h.omni_add_to_cart = {
          APPLICATION: "app_custom_event.fb_mobile_add_to_cart",
          FB_PIXEL: "offsite_conversion.fb_pixel_add_to_cart",
          OFFLINE_DATASET: "offline_conversion.add_to_cart",
          ON_FACEBOOK: "onsite_conversion.add_to_cart",
        }),
        (h.add_to_wishlist = {
          APPLICATION: "app_custom_event.fb_mobile_add_to_wishlist",
          FB_PIXEL: "offsite_conversion.fb_pixel_add_to_wishlist",
          OFFLINE_DATASET: "offline_conversion.add_to_wishlist",
          ON_FACEBOOK: "onsite_conversion.add_to_wishlist",
        }),
        (h.omni_add_to_wishlist = {
          APPLICATION: "app_custom_event.fb_mobile_add_to_wishlist",
          FB_PIXEL: "offsite_conversion.fb_pixel_add_to_wishlist",
          OFFLINE_DATASET: "offline_conversion.add_to_wishlist",
          ON_FACEBOOK: "onsite_conversion.add_to_wishlist",
        }),
        (h.lead = {
          FB_PIXEL: "offsite_conversion.fb_pixel_lead",
          OFFLINE_DATASET: "offline_conversion.lead",
          ON_FACEBOOK: "onsite_conversion.lead_grouped",
        }),
        (h.omni_view_content = {
          APPLICATION: "app_custom_event.fb_mobile_content_view",
          FB_PIXEL: "offsite_conversion.fb_pixel_view_content",
          OFFLINE_DATASET: "offline_conversion.view_content",
          ON_FACEBOOK: "onsite_conversion.view_content",
        }),
        (h.omni_complete_registration = {
          APPLICATION: "app_custom_event.fb_mobile_complete_registration",
          FB_PIXEL: "offsite_conversion.fb_pixel_complete_registration",
          OFFLINE_DATASET: "offline_conversion.complete_registration",
        }),
        (h.omni_purchase = {
          APPLICATION: "app_custom_event.fb_mobile_purchase",
          FB_PIXEL: "offsite_conversion.fb_pixel_purchase",
          OFFLINE_DATASET: "offline_conversion.purchase",
          ON_FACEBOOK: "onsite_conversion.purchase",
        }),
        (h.omni_search = {
          APPLICATION: "app_custom_event.fb_mobile_search",
          FB_PIXEL: "offsite_conversion.fb_pixel_search",
          OFFLINE_DATASET: "offline_conversion.search",
        }),
        (h.omni_initiated_checkout = {
          APPLICATION: "app_custom_event.fb_mobile_initiated_checkout",
          FB_PIXEL: "offsite_conversion.fb_pixel_initiate_checkout",
          OFFLINE_DATASET: "offline_conversion.initiate_checkout",
          ON_FACEBOOK: "onsite_conversion.initiate_checkout",
        }),
        (h.omni_achievement_unlocked = {
          APPLICATION: "app_custom_event.fb_mobile_achievement_unlocked",
        }),
        (h.omni_activate_app = {
          APPLICATION: "app_custom_event.fb_mobile_activate_app",
        }),
        (h.omni_landing_page_view = {
          APPLICATION: "app_site_visit",
          FB_PIXEL: "landing_page_view",
        }),
        (h.omni_level_achieved = {
          APPLICATION: "app_custom_event.fb_mobile_level_achieved",
        }),
        (h.omni_rate = { APPLICATION: "app_custom_event.fb_mobile_rate" }),
        (h.omni_tutorial_completion = {
          APPLICATION: "app_custom_event.fb_mobile_tutorial_completion",
        }),
        (h.omni_custom = { APPLICATION: "app_custom_event.other" }),
        h);
    function v() {
      return Object.keys(r("StandardEventsDetails"))
        .map(function (e) {
          return r("StandardEventsDetails")[e].custom_event_type;
        })
        .concat("OTHER");
    }
    function S() {
      return Object.keys(r("OffsiteCustomEventType"));
    }
    ((l.NEW_STANDARD_EVENT_ACTION_FIELD_TYPE_MAP = y),
      (l.NEW_STANDARD_EVENT_MAP = C),
      (l.CURRENT_STANDARD_EVENT_CHANNEL_MAP = b),
      (l.getPixelSupportedCustomEventTypes = v),
      (l.getAllSupportedCustomEventTypes = S));
  },
  98,
);
