__d(
  "WAWebNux",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = {
      SAFARI_LIMITED_SUPPORT: "safari_limited_support",
      EPHEMERAL: "ephemeral",
      EPHEMERAL_VIEW_ONCE: "ephemeral_view_once",
      EPHEMERAL_VIEW_ONCE_RECEIVER: "ephemeral_view_once_receiver",
      COMMUNITY: "community",
      COMMUNITY_HOME: "community_home",
      STATUS_QUICK_REPLIES: "status_quick_replies",
      KEEP_IN_CHAT: "keep_in_chat",
      CHAT_ASSIGNMENT: "chat_assignment",
      TOOLTIP_AD_CREATION: "tooltip_ad_creation",
      DESKTOP_UPSELL: "desktop_upsell",
      FORWARD_MEDIA_WITH_CAPTION: "forward_media_with_caption",
      ORDER_REQUEST_EDUCATION: "order_request_education",
      NEWSLETTER_MULTI_ADMIN: "newsletter_multi_admin",
      SUPPORT_AI: "support_ai",
      TOOLTIP_STATUS_ENTRY_POINT: "tooltip_status_entry_point",
      CAPI_GROUP_ABOUT_MODAL: "capi_group_about_modal",
      STATUS_PRIVATE_MENTIONS: "status_private_mentions",
      MESSAGE_LABEL_DEPRECATION_MIGRATED_PERMANENT:
        "message_label_deprecation_migrated_permanent",
      CAG_EVENTS_AWARENESS_BANNER: "cag_events_awareness_banner",
      ADD_TO_LISTS: "add_to_lists",
      SMB_LISTS_INTRO: "smb_lists_intro",
      WEB_UI_REFRESH: "web_ui_refresh",
      DO_AUTOMATIC_LABEL: "do_automatic_label",
      META_AI_CTA_BANNER: "meta_ai_cta_banner",
      FEEDBACK_INTRO: "feedback_intro",
      NEWSLETTER_QUESTIONS_RESPONSE_PRIVACY_BANNER:
        "newsletter_questions_response_privacy_banner",
      NEWSLETTER_QUESTIONS_PRIVACY_BANNER:
        "newsletter_questions_privacy_banner",
      BUSINESS_BROADCAST_AUDIENCE_UPLOAD: "business_broadcast_audience_upload",
      NOTIFICATION_GRANULARITY_AWARENESS_BANNER:
        "notification_granularity_awareness_banner",
      BRAZIL_CONTACTS_RESTRICTION_BANNER: "brazil_contacts_restriction_banner",
      WEB_CALLING_1_1_NUX: "web_calling_1_1_nux",
      WEB_CALLING_GROUP_NUX: "web_calling_group_nux",
      NEWSLETTER_ADMIN_NOTIFICATION_SETTINGS_BANNER:
        "newsletter_admin_notification_settings_banner",
      BUSINESS_BROADCAST_CHAT_LIST_UPSELL:
        "business_broadcast_chat_list_upsell",
      BUSINESS_BROADCAST_HOME_UPSELL: "business_broadcast_home_upsell",
      BUSINESS_BROADCAST_GENAI_TOOLTIP: "business_broadcast_genai_tooltip",
      EPHEMERAL_AFTER_READ: "ephemeral_after_read",
    };
    function l(e) {
      return "community_admin_promote_" + e;
    }
    function s(e) {
      return e.startsWith("community_admin_promote_");
    }
    function u(e) {
      return "chat_auto_muted_" + e;
    }
    function c(e) {
      return e.startsWith("chat_auto_muted_");
    }
    function d(e) {
      return "membership_approval_requests_banner_" + e;
    }
    function m(e) {
      return "newsletter_alerts_" + e;
    }
    function p(e) {
      return "subgroup_suggestions_banner_" + e;
    }
    var _ = n("$InternalEnum")({
        EPHEMERAL: "ephemeral",
        EPHEMERAL_VIEW_ONCE: "ephemeral_view_once",
        EPHEMERAL_VIEW_ONCE_RECEIVER: "ephemeral_view_once_receiver",
        ARCHIVE: "archive",
        STATUS_QUICK_REPLIES: "status_quick_replies",
        COMMUNITY: "community",
        COMMUNITY_HOME: "community_home",
        KEEP_IN_CHAT: "keep_in_chat",
        FORWARD_MEDIA_WITH_CAPTION: "forward_media_with_caption",
        NEWSLETTER_MULTI_ADMIN: "newsletter_multi_admin",
        SUPPORT_AI: "support_ai",
        TOOLTIP_STATUS_ENTRY_POINT: "tooltip_status_entry_point",
        STATUS_PRIVATE_MENTIONS: "status_private_mentions",
        MESSAGE_LABEL_DEPRECATION_MIGRATED:
          "message_label_deprecation_migrated",
        ADD_TO_LISTS: "add_to_lists",
        WEB_UI_REFRESH: "web_ui_refresh",
        DO_AUTOMATIC_LABEL: "do_automatic_label",
        LAST_DATE_DIALOG_OPENED: "last_date_dialog_opened",
        META_AI_CTA_BANNER: "meta_ai_cta_banner",
        FEEDBACK_INTRO: "feedback_intro",
        NEWSLETTER_QUESTIONS_PRIVACY_BANNER:
          "newsletter_questions_privacy_banner",
        NEWSLETTER_QUESTIONS_RESPONSE_PRIVACY_BANNER:
          "newsletter_questions_response_privacy_banner",
        NOTIFICATION_GRANULARITY_AWARENESS_BANNER:
          "notification_granularity_awareness_banner",
        EPHEMERAL_AFTER_READ: "ephemeral_after_read",
      }),
      f = {
        COOL_OFF_NUX: {
          INCOMPLETE_BUSINESS_PROFILE_BANNER:
            "incomplete_business_profile_banner",
          PRODUCT_CATALOG_BANNER: "product_catalog_banner",
          COLLECTIONS: "collections_banner",
          CTWA_SUGGESTION: "ctwa_suggestion",
          ORDER_EXPANSION: "order_expansion",
          MESSAGE_LABEL_DEPRECATION_MIGRATED_CHAT_LIST:
            "message_label_deprecation_migrated_chat_list",
          WHATS_NEW: "whats_new",
        },
        VIEW_COUNT_NUX: {
          SAFARI_LIMITED_SUPPORT: "safari_limited_support",
          EPHEMERAL: "ephemeral",
          EPHEMERAL_VIEW_ONCE: "ephemeral_view_once",
          EPHEMERAL_VIEW_ONCE_RECEIVER: "ephemeral_view_once_receiver",
          COMMUNITY: "community",
          COMMUNITY_HOME: "community_home",
          KEEP_IN_CHAT: "keep_in_chat",
          CHAT_ASSIGNMENT: "chat_assignment",
          TOOLTIP_AD_CREATION: "tooltip_ad_creation",
          DESKTOP_UPSELL: "desktop_upsell",
          FORWARD_MEDIA_WITH_CAPTION: "forward_media_with_caption",
          ORDER_REQUEST_EDUCATION: "order_request_education",
          NEWSLETTER_MULTI_ADMIN: "newsletter_multi_admin",
          SUPPORT_AI: "support_ai",
          TOOLTIP_STATUS_ENTRY_POINT: "tooltip_status_entry_point",
          CAPI_GROUP_ABOUT_MODAL: "capi_group_about_modal",
          STATUS_PRIVATE_MENTIONS: "status_private_mentions",
          MESSAGE_LABEL_DEPRECATION_MIGRATED_PERMANENT:
            "message_label_deprecation_migrated_permanent",
          CAG_EVENTS_AWARENESS_BANNER: "cag_events_awareness_banner",
          ADD_TO_LISTS: "add_to_lists",
          SMB_LISTS_INTRO: "smb_lists_intro",
          WEB_UI_REFRESH: "web_ui_refresh",
          DO_AUTOMATIC_LABEL: "do_automatic_label",
          META_AI_CTA_BANNER: "meta_ai_cta_banner",
          NEWSLETTER_QUESTIONS_RESPONSE_PRIVACY_BANNER:
            "newsletter_questions_response_privacy_banner",
          NEWSLETTER_QUESTIONS_PRIVACY_BANNER:
            "newsletter_questions_privacy_banner",
          BUSINESS_BROADCAST_AUDIENCE_UPLOAD:
            "business_broadcast_audience_upload",
          WEB_CALLING_1_1_NUX: "web_calling_1_1_nux",
          WEB_CALLING_GROUP_NUX: "web_calling_group_nux",
          NEWSLETTER_ADMIN_NOTIFICATION_SETTINGS_BANNER:
            "newsletter_admin_notification_settings_banner",
          BUSINESS_BROADCAST_CHAT_LIST_UPSELL:
            "business_broadcast_chat_list_upsell",
          BUSINESS_BROADCAST_HOME_UPSELL: "business_broadcast_home_upsell",
          BUSINESS_BROADCAST_GENAI_TOOLTIP: "business_broadcast_genai_tooltip",
          EPHEMERAL_AFTER_READ: "ephemeral_after_read",
        },
      },
      g = {
        DEFAULT: "default_cool_off_banners_key",
        CATALOG: "catalog_banners_key",
        CTWA_SUGGESTION: "ctwa_suggestion_banners_key",
        ORDER_EXPANSION: "order_expansion_banner_key",
        MESSAGE_LABEL_DEPRECATION_MIGRATED_CHAT_LIST:
          "message_label_deprecation_migrated_chat_list_key",
        WHATS_NEW: "whats_new_cool_off_key",
      };
    function h(e) {
      return e + "_cool_off";
    }
    ((i.NUX = e),
      (i.getCommunityAdminPromotionNuxKey = l),
      (i.isCommunityAdminPromotionNuxKey = s),
      (i.getChatAutoMutedNuxKey = u),
      (i.isChatAutoMutedNuxKey = c),
      (i.getMembershipApprovalRequestsBannerNuxKey = d),
      (i.getNewsletterAlertsBannerNuxKey = m),
      (i.getSubgroupSuggestionsBannerNuxKey = p),
      (i.NuxSyncKey = _),
      (i.NuxKeyTypes = f),
      (i.CoolOffPeriodKeys = g),
      (i.asCoolOffNuxType = h));
  },
  66,
);
