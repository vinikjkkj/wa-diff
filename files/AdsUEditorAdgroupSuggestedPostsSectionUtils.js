__d(
  "AdsUEditorAdgroupSuggestedPostsSectionUtils",
  ["AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        IMPRESSIONS: "client_side_suggested_posts_impression",
        FETCHED_POSTS: "client_side_posts_fetched_from_server",
        ELIGIBLE_COUNT: "client_side_eligible_media_total_count",
        POST_FIRST_CLICK: "client_side_post_first_click",
        POST_CLICK: "client_side_post_click",
        POST_PRESELECTED: "client_side_preselected",
        CTX_IGFA_OVERLAP: "ctx_igfa_overlap_suggested_posts_events",
        CTX_LVA_OVERLAP: "ctx_lva_overlap",
        WTWA_EXPANSION_ELIGIBLE_PAGE_POSTS:
          "wtwa_expansion_eligible_page_posts",
        WTWA_EXPANSION_PAGE_POSTS: "wtwa_expansion_page_posts",
        WTWA_LOGGING_AD_POSTS: "wtwa_logging_ad_posts",
        PARTNERSHIP_ADS_LOGGING: "partnership_ads_logging",
        DEFAULT_POST_APPLIED: "default_suggested_post_applied",
        DEFAULT_POST_CHANGED_TO_OTHER_SUGGESTION:
          "default_suggested_post_changed_to_other_suggestion",
        DEFAULT_POST_SWITCHED_TO_MODAL:
          "default_suggested_post_switched_to_modal",
        MULTI_POST_SECTION_ADD: "client_side_multi_post_section_add",
        MULTI_POST_SECTION_TOGGLE: "client_side_multi_post_section_toggle",
        MULTI_POST_PICKER_SELECT: "client_side_multi_post_picker_select",
        DEFAULT_POST_DATA_AVAILABLE: "default_suggested_post_data_available",
        DEFAULT_POST_DATA_NOT_AVAILABLE:
          "default_suggested_post_data_not_available",
        DEFAULT_POST_CONTAINER_HIDDEN:
          "default_suggested_post_container_hidden",
        DEFAULT_POST_CONTAINER_EXPANDED:
          "default_suggested_post_container_expanded",
        EXISTING_POST_CONTAINER_SHOWN: "existing_post_container_shown",
        EXISTING_POST_ADDED_MANUAL: "existing_post_added_manual",
        DEBUG_EMPTY_POSTS: "debug_empty_posts",
        DEBUG_CAS_EXCLUDED: "debug_cas_excluded",
        DEBUG_POST_FILTERED: "debug_post_filtered",
        POST_AVAILABLE_BEFORE_FILTER: "post_available_before_filter",
        NO_POST_AVAILABLE_AFTER_FILTER: "no_post_available_after_filter",
        POST_AVAILABLE_AFTER_FILTER: "post_available_after_filter",
        EXPANSION_ENTRY_NOT_ELIGIBLE: "expansion_entry_not_eligible",
        EXPANSION_ENTRY_OLDER_MODEL: "expansion_entry_older_model",
      },
      s = {
        DEFAULT: "ctwa_suggested_posts_events",
        IGFA: "igfa_suggested_posts_events",
        LWI: "lwi_suggested_posts_events",
        LVA: "lva_suggested_posts_events",
        MULTI_POST_PV: "multi_post_pv_suggested_posts_events",
      };
    function u(e, t, n, o, a, i, l) {
      r("AdsInterfacesLogger").logOnce({
        eventName: t,
        data: {
          campaign_destination_type: o,
          event_source: n,
          optimization_goal: a,
          objective: l,
          message: i,
          ad_account_id: e != null ? e : "",
        },
      });
    }
    function c(e) {
      if (e == null) return null;
      var t = e.is_instagram_post === !0 ? "IG" : "FB";
      if (e.is_fb_reels === !0 || e.media_source_type === "REEL")
        return t + "_REEL";
      if (e.is_story === !0 || e.media_source_type === "STORY")
        return t + "_STORY";
      var n = e.type;
      return typeof n == "string" && n !== "" ? t + "_" + n.toUpperCase() : t;
    }
    function d(e, t, n, o, a, i, l) {
      var s;
      (l === void 0 && (l = null),
        r("AdsInterfacesLogger").log({
          eventName: "ctx_default_suggested_post_events",
          data:
            ((s = {}),
            (s.campaign_destination_type = n),
            (s.event_source = t),
            (s.optimization_goal = o),
            (s.objective = i),
            (s.message = a),
            (s.media_format = l),
            (s.accountid = e != null ? e : ""),
            s),
        }));
    }
    function m(e, t, n, o, a, i, l, s) {
      var u;
      r("AdsInterfacesLogger").log({
        eventName: "existing_post_flow_funnel",
        data:
          ((u = {}),
          (u.campaign_destination_type = n),
          (u.event_source = t),
          (u.optimization_goal = o),
          (u.objective = i),
          (u.message = a),
          (u.media_format = l),
          (u.adgroup_id = s),
          (u.accountid = e != null ? e : ""),
          u),
      });
    }
    function p(e, t, n, o, a, i, l) {
      var s;
      (l === void 0 && (l = null),
        r("AdsInterfacesLogger").log({
          eventName: "ctx_suggested_post_impression",
          data:
            ((s = {}),
            (s.campaign_destination_type = n),
            (s.event_source = t),
            (s.optimization_goal = o),
            (s.objective = i),
            (s.message = a),
            (s.media_format = l),
            (s.accountid = e != null ? e : ""),
            s),
        }));
    }
    var _ = {
      POST_DATA_NOT_FOUND: "POST_DATA_NOT_FOUND",
      IG_PROFILE_FB_POST: "IG_PROFILE_FB_POST",
      ON_VIDEO_NON_VIDEO: "ON_VIDEO_NON_VIDEO",
      PARTNERSHIP_AD: "PARTNERSHIP_AD",
      CTA_INCOMPATIBLE: "CTA_INCOMPATIBLE",
      LEAD_FROM_IG_DIRECT: "LEAD_FROM_IG_DIRECT",
      IG_ELIGIBILITY_ERROR: "IG_ELIGIBILITY_ERROR",
      FB_FILTER_ERROR: "FB_FILTER_ERROR",
      POST_NOT_BOOSTABLE: "POST_NOT_BOOSTABLE",
    };
    function f(e, t, n, o, a, i, l) {
      var s;
      (l === void 0 && (l = null),
        r("AdsInterfacesLogger").log({
          eventName: "ctx_default_suggested_post_debug",
          data:
            ((s = {}),
            (s.campaign_destination_type = n),
            (s.event_source = t),
            (s.page_post_id = o),
            (s.message = a),
            (s.media_format = l),
            (s.objective = i),
            (s.accountid = e != null ? e : ""),
            s),
        }));
    }
    function g(e) {
      if (e == null) return s.DEFAULT;
      switch (e) {
        case "CTWA":
          return s.DEFAULT;
        case "IGFA":
          return s.IGFA;
        case "CTX_NEW_MODEL":
          return s.DEFAULT;
        case "LWI":
          return s.LWI;
        default:
          return s.DEFAULT;
      }
    }
    ((l.SuggestedPostsEventSources = e),
      (l.SuggestedPostsEventNames = s),
      (l.suggestedPostsLogEvent = u),
      (l.getPostFormat = c),
      (l.logCTXDefaultSuggestedPostEvent = d),
      (l.logExistingPostFunnelEvent = m),
      (l.logCTXSuggestedPostImpressionEvent = p),
      (l.DebugFilterReasons = _),
      (l.logCTXDefaultSuggestedPostDebugEvent = f),
      (l.getEventNameFromAudienceType = g));
  },
  98,
);
