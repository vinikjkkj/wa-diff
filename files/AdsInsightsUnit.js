__d(
  "AdsInsightsUnit",
  [],
  function (t, n, r, o, a, i) {
    var e = Object.freeze({
      CLICK: "click",
      ESTIMATED_AD_RECALL: "estimatedAdRecall",
      IMPRESSION: "impression",
      KILO_IMPRESSION: "kiloImpression",
      REACH: "reach",
      KILO_REACH: "kiloReach",
      RESULT: "result",
      VIDEO_CONTINUOUS_2_SEC_WATCHED_ACTIONS:
        "video_continuous_2_sec_watched_actions",
      VIDEO_10_SEC_WATCHED_ACTIONS: "video_10_sec_watched_actions",
      VIDEO_6_SEC_WATCHED_ACTIONS: "video_6_sec_watched_actions",
      KILO_DWELL: "kiloDwell",
      VIDEO_THRUPLAY_WATCHED_ACTIONS: "video_thruplay_watched_actions",
      PROFILE_VISIT_VIEW: "profile_visit_view",
      PAGE_VISIT_VIEW: "page_visit_view",
      TOTAL_PROFILE_VISITS: "total_profile_visits",
      PROFILE_AND_PAGE_ENGAGEMENT: "profile_and_page_engagement",
      APP_CUSTOM_EVENT_FB_MOBILE_PURCHASE:
        "app_custom_event.fb_mobile_purchase",
      AR_EFFECT_SHARE: "ar_effect_share",
      CONTACT: "contact",
      CUSTOMIZE_PRODUCT: "customize_product",
      DONATE: "donate",
      FIND_LOCATION: "find_location",
      LINK_CLICK: "link_click",
      OFFSITE_CONVERSION_FB_PIXEL_PURCHASE:
        "offsite_conversion.fb_pixel_purchase",
      OUTBOUND_CLICK: "outbound_click",
      SCHEDULE: "schedule",
      START_TRIAL: "start_trial",
      SUBMIT_APPLICATION: "submit_application",
      SUBSCRIBE: "subscribe",
      VIDEO_VIEW: "video_view",
      APP_CUSTOM_EVENT: "app_custom_event",
      APP_CUSTOM_EVENT_FB_MOBILE_ACHIEVEMENT_UNLOCKED:
        "app_custom_event.fb_mobile_achievement_unlocked",
      APP_CUSTOM_EVENT_FB_MOBILE_ACTIVATE_APP:
        "app_custom_event.fb_mobile_activate_app",
      APP_CUSTOM_EVENT_FB_MOBILE_ADD_PAYMENT_INFO:
        "app_custom_event.fb_mobile_add_payment_info",
      APP_CUSTOM_EVENT_FB_MOBILE_ADD_TO_CART:
        "app_custom_event.fb_mobile_add_to_cart",
      APP_CUSTOM_EVENT_FB_MOBILE_ADD_TO_WISHLIST:
        "app_custom_event.fb_mobile_add_to_wishlist",
      APP_CUSTOM_EVENT_FB_MOBILE_COMPLETE_REGISTRATION:
        "app_custom_event.fb_mobile_complete_registration",
      APP_CUSTOM_EVENT_FB_MOBILE_CONTENT_VIEW:
        "app_custom_event.fb_mobile_content_view",
      APP_CUSTOM_EVENT_FB_MOBILE_INITIATED_CHECKOUT:
        "app_custom_event.fb_mobile_initiated_checkout",
      APP_CUSTOM_EVENT_FB_MOBILE_LEVEL_ACHIEVED:
        "app_custom_event.fb_mobile_level_achieved",
      APP_CUSTOM_EVENT_FB_MOBILE_D2_RETENTION:
        "app_custom_event.fb_mobile_d2_retention",
      APP_CUSTOM_EVENT_FB_MOBILE_D7_RETENTION:
        "app_custom_event.fb_mobile_d7_retention",
      APP_CUSTOM_EVENT_FB_MOBILE_RATE: "app_custom_event.fb_mobile_rate",
      APP_CUSTOM_EVENT_FB_MOBILE_SEARCH: "app_custom_event.fb_mobile_search",
      APP_CUSTOM_EVENT_FB_MOBILE_SPENT_CREDITS:
        "app_custom_event.fb_mobile_spent_credits",
      APP_CUSTOM_EVENT_FB_MOBILE_TUTORIAL_COMPLETION:
        "app_custom_event.fb_mobile_tutorial_completion",
      APP_CUSTOM_EVENT_OTHER: "app_custom_event.other",
      APP_CUSTOM_EVENT_SUBSCRIBE: "app_custom_event.subscribe",
      APP_ENGAGEMENT: "app_engagement",
      APP_INSTALL: "app_install",
      APP_STORY: "app_story",
      APP_USE: "app_use",
      ATTENTION_EVENT: "attention_event",
      CHECKIN: "checkin",
      CANVAS_VIEW: "canvas_view",
      CAROUSEL_VIEW: "carousel_view",
      COMMERCE_EVENT: "commerce_event",
      COMMERCE_EVENT_ADD_TO_CART: "commerce_event.add_to_cart",
      COMMERCE_EVENT_MESSAGE_TO_BUY: "commerce_event.message_to_buy",
      COMMERCE_EVENT_OTHER: "commerce_event.other",
      COMMERCE_EVENT_PURCHASE: "commerce_event.purchase",
      COMMERCE_EVENT_VIEW_CONTENT: "commerce_event.view_content",
      COUPON_CLAIM: "receive_offer",
      CREDIT_SPENT: "credit_spent",
      DWELL: "dwell",
      FOLLOW: "follow",
      GAME_PLAYS: "games.plays",
      GIFT_SALE: "gift_sale",
      GROUP_JOIN: "group_join",
      INTERACTIVE_COMPONENT_TAP: "interactive_component_tap",
      INSTANT_EXPERIENCE_ELEMENT_IMPRESSION:
        "instant_experience_element_impression",
      CARD_VIEW: "card_view",
      LEADGEN: "leadgen.other",
      LIKE: "like",
      MENTION: "mention",
      MOBILE_APP_INSTALL: "mobile_app_install",
      MOBILE_APP_CONTACT: "contact_mobile_app",
      MOBILE_APP_DONATE: "donate_mobile_app",
      MOBILE_APP_FIND_LOCATION: "find_location_mobile_app",
      MOBILE_APP_CUSTOMIZE_PRODUCT: "customize_product_mobile_app",
      MOBILE_APP_START_TRIAL: "start_trial_mobile_app",
      MOBILE_APP_SUBSCRIBE: "subscribe_mobile_app",
      MOBILE_APP_SCHEDULE: "schedule_mobile_app",
      MOBILE_APP_SUBMIT_APPLICATION: "submit_application_mobile_app",
      MESSENGER_BLOCK: "messenger.block",
      MESSENGER_REPLY: "messenger.reply",
      MOBILE_APP_RETENTION: "mobile_app_retention",
      MOBILE_APP_ROAS: "mobile_app_roas",
      MOBILE_APP_EVENT_CONVERSION: "offsite_mobile_app_conversion",
      MOBILE_APP_INSTALL_CONVERSION: "mobile_app_install_conversion",
      MOBILE_APP_AD_IMPRESSION: "ad_impression_mobile_app",
      NEW_MOBILE: "new_mobile",
      CONVERSION_LEAD: "conversion_lead",
      LEADGEN_QUALIFYING_QUESTION_ANSWER: "leadgen_qualifying_question_answer",
      LEADGEN_QUALITY_CONVERSION: "leadgen_quality_conversion",
      CLICK_TO_CALL_CALL_CONFIRM: "click_to_call_call_confirm",
      CLICK_TO_CALL_CALLBACK_REQUEST_SUBMITTED:
        "click_to_call_callback_request_submitted",
      CLICK_TO_CALL_NATIVE_CALL_PLACED: "click_to_call_native_call_placed",
      CLICK_TO_CALL_NATIVE_CALL_CONNECT: "click_to_call_native_call_connect",
      CLICK_TO_CALL_NATIVE_20S_CALL_CONNECT:
        "click_to_call_native_20s_call_connect",
      CLICK_TO_CALL_NATIVE_60S_CALL_CONNECT:
        "click_to_call_native_60s_call_connect",
      OFFLINE_CONVERSION: "offline_conversion",
      OFFLINE_CONVERSION_ADD_PAYMENT_INFO:
        "offline_conversion.add_payment_info",
      OFFLINE_CONVERSION_ADD_TO_CART: "offline_conversion.add_to_cart",
      OFFLINE_CONVERSION_ADD_TO_WISHLIST: "offline_conversion.add_to_wishlist",
      OFFLINE_CONVERSION_CONTACT: "offline_conversion.contact",
      OFFLINE_CONVERSION_COMPLETE_REGISTRATION:
        "offline_conversion.complete_registration",
      OFFLINE_CONVERSION_INITIATE_CHECKOUT:
        "offline_conversion.initiate_checkout",
      OFFLINE_CONVERSION_LEAD: "offline_conversion.lead",
      OFFLINE_CONVERSION_OTHER: "offline_conversion.other",
      OFFLINE_CONVERSION_PURCHASE: "offline_conversion.purchase",
      OFFLINE_CONVERSION_SEARCH: "offline_conversion.search",
      OFFLINE_CONVERSION_VIEW_CONTENT: "offline_conversion.view_content",
      OFFLINE_CONVERSION_SUBSCRIBE: "offline_conversion.subscribe",
      OFFSITE_CONVERSION: "offsite_conversion",
      OFFSITE_CONVERSION_ADD_TO_CART: "offsite_conversion.add_to_cart",
      OFFSITE_CONVERSION_CHECKOUT: "offsite_conversion.checkout",
      OFFSITE_CONVERSION_CUSTOM: "offsite_conversion.custom",
      OFFSITE_CONVERSION_FB_PIXEL_ADD_PAYMENT_INFO:
        "offsite_conversion.fb_pixel_add_payment_info",
      OFFSITE_CONVERSION_FB_PIXEL_ADD_TO_CART:
        "offsite_conversion.fb_pixel_add_to_cart",
      OFFSITE_CONVERSION_FB_PIXEL_ADD_TO_WISHLIST:
        "offsite_conversion.fb_pixel_add_to_wishlist",
      OFFSITE_CONVERSION_FB_PIXEL_COMPLETE_REGISTRATION:
        "offsite_conversion.fb_pixel_complete_registration",
      OFFSITE_CONVERSION_FB_PIXEL_CUSTOM: "offsite_conversion.fb_pixel_custom",
      OFFSITE_CONVERSION_FB_PIXEL_CUSTOM_PLTV:
        "offsite_conversion.fb_pixel_custom_pltv",
      OFFSITE_CONVERSION_FB_PIXEL_INITIATE_CHECKOUT:
        "offsite_conversion.fb_pixel_initiate_checkout",
      OFFSITE_CONVERSION_FB_PIXEL_LEAD: "offsite_conversion.fb_pixel_lead",
      OFFSITE_CONVERSION_FB_PIXEL_OTHER: "offsite_conversion.fb_pixel_other",
      OFFSITE_CONVERSION_FB_PIXEL_SEARCH: "offsite_conversion.fb_pixel_search",
      OFFSITE_CONVERSION_FB_PIXEL_VIEW_CONTENT:
        "offsite_conversion.fb_pixel_view_content",
      OFFSITE_CONVERSION_KEY_PAGE_VIEW: "offsite_conversion.key_page_view",
      OFFSITE_CONVERSION_LEAD: "offsite_conversion.lead",
      OFFSITE_CONVERSION_OTHER: "offsite_conversion.other",
      OFFSITE_CONVERSION_PURCHASE: "offsite_conversion.purchase",
      OFFSITE_CONVERSION_REGISTRATION: "offsite_conversion.registration",
      OFFSITE_CONVERSION_VIEWCONTENT: "offsite_conversion.viewcontent",
      OFFSITE_CONVERSION_SHOPS_TO_WEBSITE_PURCHASE:
        "offsite_conversion.shops_to_website_purchase",
      OFFSITE_CONVERSION_MARGIN: "offsite_conversion.margin",
      OFFSITE_CONVERSION_PREDICTIVE_LIFE_TIME_VALUE:
        "offsite_conversion.predictive_life_time_value",
      OFFSITE_CONVERSION_FB_PIXEL_PRIORITIZED_PRODUCT_SET_PURCHASES:
        "offsite_conversion.fb_pixel_prioritized_product_set_purchases",
      OFFSITE_CONVERSION_FB_PIXEL_OTHER_PRODUCT_SET_PURCHASES:
        "offsite_conversion.fb_pixel_other_product_set_purchases",
      OFFSITE_COMPLETE_REGISTRATION_ADD_META_LEADS:
        "offsite_complete_registration_add_meta_leads",
      OFFSITE_SEARCH_ADD_META_LEADS: "offsite_search_add_meta_leads",
      OFFSITE_CONTENT_VIEW_ADD_META_LEADS:
        "offsite_content_view_add_meta_leads",
      OFFSITE_SUBMIT_APPLICATION_ADD_META_LEADS:
        "offsite_submit_application_add_meta_leads",
      OFFSITE_CONTACT_WEBSITE_ADD_META_LEADS:
        "offsite_contact_website_add_meta_leads",
      OFFSITE_COMPLETE_REGISTRATION_ADD_META_LEADS_MULTI_LABEL:
        "offsite_complete_registration_add_meta_leads_multi_label",
      OFFSITE_SUBMIT_APPLICATION_ADD_META_LEADS_MULTI_LABEL:
        "offsite_submit_application_add_meta_leads_multi_label",
      OFFSITE_CONTACT_WEBSITE_ADD_META_LEADS_MULTI_LABEL:
        "offsite_contact_website_add_meta_leads_multi_label",
      OFFSITE_SEARCH_ADD_META_LEADS_MULTI_LABEL:
        "offsite_search_add_meta_leads_multi_label",
      OFFSITE_CONTENT_VIEW_ADD_META_LEADS_MULTI_LABEL:
        "offsite_content_view_add_meta_leads_multi_label",
      CUSTOM_EVENT_ACTIONS_ADD_META_LEADS:
        "custom_event_actions_add_meta_leads",
      CUSTOM_EVENT_ACTIONS_ADD_META_LEADS_MULTI_LABEL:
        "custom_event_actions_add_meta_leads_multi_label",
      GROUPED_PIXEL_CUSTOM_CONVERSIONS_META_LEADS:
        "grouped_pixel_custom_conversions_meta_leads",
      GROUPED_PIXEL_CUSTOM_CONVERSIONS_META_LEADS_MULTI_LABEL:
        "grouped_pixel_custom_conversions_meta_leads_multi_label",
      OFFSITE_PURCHASE_ADD_20S_CALLS: "offsite_purchase_add_20_s_calls",
      OFFSITE_PURCHASE_ADD_20S_CALLS_MULTI_LABEL:
        "offsite_purchase_add_20_s_calls_multi_label",
      OFFSITE_LEAD_ADD_20S_CALLS: "offsite_lead_add_20_s_calls",
      OFFSITE_LEAD_ADD_20S_CALLS_MULTI_LABEL:
        "offsite_lead_add_20_s_calls_multi_label",
      OFFSITE_CONTENT_VIEW_ADD_20S_CALLS: "offsite_content_view_add_20_s_calls",
      OFFSITE_CONTENT_VIEW_ADD_20S_CALLS_MULTI_LABEL:
        "offsite_content_view_add_20_s_calls_multi_label",
      OFFSITE_COMPLETE_REGISTRATION_ADD_20S_CALLS:
        "offsite_complete_registration_add_20_s_calls",
      OFFSITE_COMPLETE_REGISTRATION_ADD_20S_CALLS_MULTI_LABEL:
        "offsite_complete_registration_add_20_s_calls_multi_label",
      OFFSITE_INITIATE_CHECKOUT_ADD_20S_CALLS:
        "offsite_initiate_checkout_add_20_s_calls",
      OFFSITE_INITIATE_CHECKOUT_ADD_20S_CALLS_MULTI_LABEL:
        "offsite_initiate_checkout_add_20_s_calls_multi_label",
      OFFSITE_ADD_TO_CART_ADD_20S_CALLS: "offsite_add_to_cart_add_20_s_calls",
      OFFSITE_ADD_TO_CART_ADD_20S_CALLS_MULTI_LABEL:
        "offsite_add_to_cart_add_20_s_calls_multi_label",
      OFFSITE_ENGAGEMENT: "offsite_engagement",
      ONSITE_CONVERSION: "onsite_conversion",
      ONSITE_CONVERSION_MESSAGING_ACCEPT: "onsite_conversion.messaging_accept",
      ONSITE_CONVERSION_MESSAGING_BLOCK: "onsite_conversion.messaging_block",
      ONSITE_CONVERSION_MESSAGING_CONVERSATION_STARTED_7D:
        "onsite_conversion.messaging_conversation_started_7d",
      ONSITE_CONVERSION_MESSAGING_DELETE_MESSAGE:
        "onsite_conversion.messaging_delete_message",
      ONSITE_CONVERSION_MESSAGING_DELIVERY_RECEIPT:
        "onsite_conversion.messaging_delivery_receipt",
      ONSITE_CONVERSION_MESSAGING_DELETE_THREAD:
        "onsite_conversion.messaging_delete_thread",
      ONSITE_CONVERSION_MESSAGING_FRX_FEEDBACK:
        "onsite_conversion.messaging_frx_feedback",
      ONSITE_CONVERSION_MESSAGING_SCAM_PROACTIVE_WARNING_LEARN_MORE:
        "onsite_conversion.messaging_scam_proactive_warning_learn_more",
      ONSITE_CONVERSION_MESSAGING_SCAM_PROACTIVE_WARNING_LEARN_MORE_EXPERIMENTAL:
        "onsite_conversion.messaging_scam_proactive_warning_learn_more_experimental",
      ONSITE_CONVERSION_MESSAGING_IN_THREAD_FEEDBACK_SATISFIED:
        "onsite_conversion.messaging_in_thread_feedback_satisfied",
      ONSITE_CONVERSION_MESSAGING_IN_THREAD_FEEDBACK_DISSATISFIED:
        "onsite_conversion.messaging_in_thread_feedback_dissatisfied",
      ONSITE_CONVERSION_MESSAGING_IN_THREAD_FEEDBACK_DISSATISFIED_CONFUSING_PROCESS:
        "onsite_conversion.messaging_in_thread_feedback_dissatisfied_confusing_process",
      ONSITE_CONVERSION_MESSAGING_IN_THREAD_FEEDBACK_DISSATISFIED_NOT_HELPFUL:
        "onsite_conversion.messaging_in_thread_feedback_dissatisfied_not_helpful",
      ONSITE_CONVERSION_MESSAGING_IN_THREAD_FEEDBACK_DISSATISFIED_SLOW_RESPONSES:
        "onsite_conversion.messaging_in_thread_feedback_dissatisfied_slow_responses",
      ONSITE_CONVERSION_MESSAGING_IN_THREAD_FEEDBACK_DISSATISFIED_SUSPICIOUS_BEHAVIOR:
        "onsite_conversion.messaging_in_thread_feedback_dissatisfied_suspicious_behavior",
      ONSITE_CONVERSION_MESSAGING_IN_THREAD_FEEDBACK_DISSATISFIED_TOO_MANY_MESSAGES:
        "onsite_conversion.messaging_in_thread_feedback_dissatisfied_too_many_messages",
      ONSITE_CONVERSION_MESSAGING_IN_THREAD_FEEDBACK_DISSATISFIED_OTHER:
        "onsite_conversion.messaging_in_thread_feedback_dissatisfied_other",
      ONSITE_CONVERSION_MESSAGING_IN_THREAD_DXMA_FEEDBACK_SATISFIED:
        "onsite_conversion.messaging_in_thread_dxma_feedback_satisfied",
      ONSITE_CONVERSION_MESSAGING_IN_THREAD_DXMA_FEEDBACK_DISSATISFIED:
        "onsite_conversion.messaging_in_thread_dxma_feedback_dissatisfied",
      ONSITE_CONVERSION_MESSAGING_MSGR_BUYER_SATISFIED_WITH_PURCHASE:
        "onsite_conversion.messaging_msgr_buyer_satisfied_with_purchase",
      ONSITE_CONVERSION_MESSAGING_MSGR_BUYER_DISSATISFIED_WITH_PURCHASE:
        "onsite_conversion.messaging_msgr_buyer_dissatisfied_with_purchase",
      ONSITE_CONVERSION_MESSAGING_IG_BUYER_SATISFIED_WITH_CONVERSATION:
        "onsite_conversion.messaging_ig_buyer_satisfied_with_conversation",
      ONSITE_CONVERSION_MESSAGING_IG_BUYER_DISSATISFIED_WITH_CONVERSATION:
        "onsite_conversion.messaging_ig_buyer_dissatisfied_with_conversation",
      ONSITE_CONVERSION_MESSAGING_CONVERSATION_SELLER_FEEDBACK_SATISFIED:
        "onsite_conversion.messaging_conversation_seller_feedback_satisfied",
      ONSITE_CONVERSION_MESSAGING_CONVERSATION_SELLER_FEEDBACK_DISSATISFIED:
        "onsite_conversion.messaging_conversation_seller_feedback_dissatisfied",
      ONSITE_CONVERSION_MESSAGING_IGNORE_REQUEST:
        "onsite_conversion.messaging_ignore_request",
      ONSITE_CONVERSION_MESSAGING_MARK_SPAM:
        "onsite_conversion.messaging_mark_spam",
      ONSITE_CONVERSION_MESSAGING_OPEN_THREAD:
        "onsite_conversion.messaging_open_thread",
      ONSITE_CONVERSION_MESSAGING_PROMOTIONAL_OFF:
        "onsite_conversion.messaging_promotional_off",
      ONSITE_CONVERSION_MESSAGING_READ_RECEIPT:
        "onsite_conversion.messaging_read_receipt",
      ONSITE_CONVERSION_MESSAGING_REPLY: "onsite_conversion.messaging_reply",
      ONSITE_CONVERSION_MESSAGING_FIRST_REPLY:
        "onsite_conversion.messaging_first_reply",
      ONSITE_CONVERSION_MESSAGING_FIRST_REPLY_CONTINUATION:
        "onsite_conversion.messaging_first_reply_continuation",
      ONSITE_CONVERSION_TOTAL_MESSAGING_CONNECTION:
        "onsite_conversion.total_messaging_connection",
      ONSITE_CONVERSION_MESSAGING_DEEP_CONVERSATION:
        "onsite_conversion.messaging_deep_conversation",
      ONSITE_CONVERSION_MESSAGING_DEEP_CONVERSATION_SHADOW:
        "onsite_conversion.messaging_deep_conversation_shadow",
      ONSITE_CONVERSION_MESSAGING_DEDUP_DEEP_CONVERSATION:
        "onsite_conversion.messaging_dedup_deep_conversation",
      ONSITE_CONVERSION_MESSAGING_FIRST_BIZ_REPLY:
        "onsite_conversion.messaging_first_biz_reply",
      ONSITE_CONVERSION_MESSAGING_FIRST_BIZ_REPLY_CONTINUATION:
        "onsite_conversion.messaging_first_biz_reply_continuation",
      ONSITE_CONVERSION_MESSAGING_FIRST_CALL:
        "onsite_conversion.messaging_first_call",
      ONSITE_CONVERSION_MESSAGING_FIRST_LONG_CALL:
        "onsite_conversion.messaging_first_long_call",
      ONSITE_CONVERSION_MESSAGING_AUTOMATED_FLOW_COMPLETE:
        "onsite_conversion.messaging_automated_flow_complete",
      ONSITE_CONVERSION_MESSAGING_PAGE_SEND:
        "onsite_conversion.messaging_page_send",
      ONSITE_CONVERSION_MESSAGING_PAGE_SEND_AFTER_USER_SEND:
        "onsite_conversion.messaging_page_send_after_user_send",
      ONSITE_CONVERSION_MESSAGING_USER_DEPTH_2_MESSAGE_SEND:
        "onsite_conversion.messaging_user_depth_2_message_send",
      ONSITE_CONVERSION_MESSAGING_USER_DEPTH_2_MESSAGE_SEND_CONTINUATION:
        "onsite_conversion.messaging_user_depth_2_message_send_continuation",
      ONSITE_CONVERSION_MESSAGING_USER_DEPTH_3_MESSAGE_SEND:
        "onsite_conversion.messaging_user_depth_3_message_send",
      ONSITE_CONVERSION_MESSAGING_USER_DEPTH_3_MESSAGE_SEND_CONTINUATION:
        "onsite_conversion.messaging_user_depth_3_message_send_continuation",
      ONSITE_CONVERSION_MESSAGING_USER_DEPTH_5_MESSAGE_SEND:
        "onsite_conversion.messaging_user_depth_5_message_send",
      ONSITE_CONVERSION_MESSAGING_PAGE_DEPTH_2_MESSAGE_SEND:
        "onsite_conversion.messaging_page_depth_2_message_send",
      ONSITE_CONVERSION_MESSAGING_PAGE_DEPTH_2_MESSAGE_SEND_CONTINUATION:
        "onsite_conversion.messaging_page_depth_2_message_send_continuation",
      ONSITE_CONVERSION_MESSAGING_CONVERSATION_DEPTH:
        "onsite_conversion.messaging_conversation_depth",
      ONSITE_CONVERSION_MESSAGING_QUALIFIED_LEAD:
        "onsite_conversion.messaging_qualified_lead",
      ONSITE_CONVERSION_MESSAGING_APPOINTMENT_BOOKED:
        "onsite_conversion.messaging_appointment_booked",
      ONSITE_CONVERSION_MESSAGING_PAGE_SEND_NUM_SAME_CONVERSATION:
        "onsite_conversion.messaging_page_send_num_same_conversation",
      ONSITE_CONVERSION_MESSAGING_USER_SEND_NUM_SAME_CONVERSATION:
        "onsite_conversion.messaging_user_send_num_same_conversation",
      ONSITE_CONVERSION_MESSAGING_BUSINESS_CALLING_OPT_IN_SENT:
        "onsite_conversion.messaging_business_calling_opt_in_sent",
      ONSITE_CONVERSION_MESSAGING_BUSINESS_CALLING_OPT_IN_ACCEPTED:
        "onsite_conversion.messaging_business_calling_opt_in_accepted",
      ONSITE_CONVERSION_MESSAGING_BUSINESS_CALLING_OPT_IN_DENIED:
        "onsite_conversion.messaging_business_calling_opt_in_denied",
      ONSITE_CONVERSION_MESSAGING_BUSINESS_CALLING_CALL_INITIATED:
        "onsite_conversion.messaging_business_calling_call_initiated",
      ONSITE_CONVERSION_MESSAGING_BUSINESS_CALLING_CALL_ANSWERED:
        "onsite_conversion.messaging_business_calling_call_answered",
      ONSITE_CONVERSION_MESSAGING_BUSINESS_CALLING_CALL_MISSED:
        "onsite_conversion.messaging_business_calling_call_missed",
      ONSITE_CONVERSION_MESSAGING_BUSINESS_CALLING_CALL_DENIED:
        "onsite_conversion.messaging_business_calling_call_denied",
      ONSITE_CONVERSION_MESSAGING_USER_PHONE_CALL_DIALOG_CONFIRM_CLICKED:
        "onsite_conversion.messaging_user_phone_call_dialog_confirm_clicked",
      ONSITE_CONVERSION_MESSAGING_USER_CALL_ATTEMPTED:
        "onsite_conversion.messaging_user_call_attempted",
      ONSITE_CONVERSION_MESSAGING_PAGE_CALL_ATTEMPTED:
        "onsite_conversion.messaging_page_call_attempted",
      ONSITE_CONVERSION_MESSAGING_MISSED_CALL:
        "onsite_conversion.messaging_missed_call",
      ONSITE_CONVERSION_MESSAGING_EVENT_OPTIMIZATION_LEAD:
        "onsite_conversion.messaging_event_optimization_lead",
      ONSITE_CONVERSION_MESSAGING_DOWN_FUNNEL_PURCHASE:
        "onsite_conversion.onsite_conversion_messaging_down_funnel_purchase",
      ONSITE_CONVERSION_DOWN_FUNNEL_PURCHASE:
        "onsite_conversion.onsite_conversion_down_funnel_purchase",
      ONSITE_CONVERSION_MESSAGING_DOWN_FUNNEL_PURCHASE_VALUE:
        "onsite_conversion.onsite_conversion_messaging_down_funnel_purchase_value",
      ONSITE_CONVERSION_MESSAGING_USER_SUBSCRIBED:
        "onsite_conversion.messaging_user_subscribed",
      ONSITE_CONVERSION_MESSAGING_CONVERSATION_ENGAGED:
        "onsite_conversion.messaging_conversation_engaged",
      ONSITE_CONVERSION_MESSAGING_WELCOME_MESSAGE_VIEW:
        "onsite_conversion.messaging_welcome_message_view",
      ONSITE_CONVERSION_MESSAGING_CONVERSATION_REPLIED_7D:
        "onsite_conversion.messaging_conversation_replied_7d",
      ONSITE_CONVERSION_FLOW_COMPLETE: "onsite_conversion.flow_complete",
      ONSITE_CONVERSION_ADD_TO_CART: "onsite_conversion.add_to_cart",
      ONSITE_CONVERSION_VIEW_CONTENT: "onsite_conversion.view_content",
      ONSITE_CONVERSION_PURCHASE: "onsite_conversion.purchase",
      ONSITE_CONVERSION_CREATOR_LINK_CLICK:
        "onsite_conversion.creator_link_click",
      ONSITE_CONVERSION_CREATOR_MEDIA_IMPRESSION:
        "onsite_conversion.creator_media_impression",
      ONSITE_CONVERSION_LEAD: "onsite_conversion.lead",
      ONSITE_CONVERSION_LEAD_CUSTOM_EVENT:
        "onsite_conversion.lead_custom_event",
      ONSITE_CONVERSION_LEADS_CENTER_LEAD_DISQUALIFIED:
        "onsite_conversion.leads_center_lead_disqualified",
      ONSITE_CONVERSION_MESSAGE_TO_BUY: "onsite_conversion.message_to_buy",
      ONSITE_CONVERSION_OTHER: "onsite_conversion.other",
      ONSITE_CONVERSION_REFERRAL_SENDER_INVITES_SENT:
        "onsite_conversion.referral_sender_invites_sent",
      ONSITE_CONVERSION_REFERRAL_SENDER_MESSAGE_SENT:
        "onsite_conversion.referral_sender_message_sent",
      ONSITE_CONVERSION_REFERRAL_RECEIVER_IMPRESSION:
        "onsite_conversion.referral_receiver_impression",
      ONSITE_CONVERSION_REFERRAL_RECEIVER_CLICK:
        "onsite_conversion.referral_receiver_click",
      ONSITE_CONVERSION_POST_SAVE: "onsite_conversion.post_save",
      ONSITE_CONVERSION_SEARCH: "onsite_conversion.search",
      ONSITE_CONVERSION_SERVICE_BOOKING_REQUEST:
        "onsite_conversion.service_booking_request",
      ONSITE_CONVERSION_INITIATE_CHECKOUT:
        "onsite_conversion.initiate_checkout",
      ONSITE_CONVERSION_INITIATE_OFFSITE_CHECKOUT:
        "onsite_conversion.initiate_offsite_checkout",
      ONSITE_CONVERSION_RATE: "onsite_conversion.rate",
      ONSITE_CONVERSION_ADD_TO_WISHLIST: "onsite_conversion.add_to_wishlist",
      ONSITE_CONVERSION_SUBMIT_APPLICATION:
        "onsite_conversion.submit_application",
      ONSITE_CONVERSION_CLICK_TO_CALL: "onsite_conversion.click_to_call",
      ONSITE_CONVERSION_FIND_LOCATION: "onsite_conversion.find_location",
      ONSITE_CONVERSION_PDP_CLICK_TO_OFFSITE:
        "onsite_conversion.pdp_click_to_offsite",
      ONSITE_CONVERSION_PDP_CLICK_VIEW_IN_CART:
        "onsite_conversion.pdp_click_view_in_cart",
      ONSITE_CONVERSION_CART_IMPRESSION: "onsite_conversion.cart_impression",
      ONSITE_CONVERSION_PDP_CLICK_TO_CHECKOUT:
        "onsite_conversion.pdp_click_to_checkout",
      ONSITE_CONVERSION_SHOPS_COLLECTION_VIEW:
        "onsite_conversion.shops_collection_view",
      ONSITE_CONVERSION_SHOPS_PAGE_VIEW: "onsite_conversion.shops_page_view",
      ONSITE_CONVERSION_ADD_PAYMENT_INFO: "onsite_conversion.add_payment_info",
      ONSITE_CONVERSION_COMPLETE_REGISTRATION:
        "onsite_conversion.complete_registration",
      ONSITE_CONVERSION_LEVEL_ACHIEVED: "onsite_conversion.level_achieved",
      ONSITE_CONVERSION_ORDER_CREATE: "onsite_conversion.order_creation",
      ONSITE_CONVERSION_MESSAGING_ORDER_CREATED_V2:
        "onsite_conversion.messaging_order_created_v2",
      ONSITE_CONVERSION_MESSAGING_ORDER_SHIPPED_V2:
        "onsite_conversion.messaging_order_shipped_v2",
      ONSITE_CONVERSION_MESSAGING_USER_CALL_PLACED:
        "onsite_conversion.messaging_user_call_placed",
      ONSITE_CONVERSION_MESSAGING_20S_CALL_CONNECT:
        "onsite_conversion.messaging_20s_call_connect",
      ONSITE_CONVERSION_MESSAGING_60S_CALL_CONNECT:
        "onsite_conversion.messaging_60s_call_connect",
      ONSITE_CONVERSION_WA_PROMO_CHANNEL_FOLLOW: "wa_promo_channel_follow",
      ONSITE_CONVERSION_MESSAGING_BUSINESS_LLAMA_CONVERSION_POSITIVE:
        "onsite_conversion.messaging_business_llama_conversion_positive",
      ONSITE_CONVERSION_MESSAGING_BUSINESS_LLAMA_CONVERSION_NEGATIVE:
        "onsite_conversion.messaging_business_llama_conversion_negative",
      OTHER: "other",
      THIRD_PARTY_AD_CLICK: "ad_click",
      THIRD_PARTY_AD_IMPRESSION: "ad_impression",
      VISIT_LOCATION: "visit_location",
      DONATE_VALUE: "donate_value",
      CUSTOMIZE_PRODUCT_VALUE: "customize_product_value",
      FIND_LOCATION_VALUE: "find_location_value",
      SCHEDULE_VALUE: "schedule_value",
      START_TRIAL_VALUE: "start_trial_value",
      SUBMIT_APPLICATION_VALUE: "submit_application_value",
      SUBSCRIBE_VALUE: "subscribe_value",
      VISIT_LOCATION_VALUE: "visit_location_value",
      CONTACT_VALUE: "contact_value",
      RECURRING_SUBSCRIPTION_PAYMENT: "recurring_subscription_payment",
      CANCEL_SUBSCRIPTION: "cancel_subscription",
      PAGE_ENGAGEMENT: "page_engagement",
      PAGE_STORY: "page_story",
      PHOTO_VIEW: "photo_view",
      POST: "post",
      POST_COMMENT: "comment",
      POST_ENGAGEMENT: "post_engagement",
      POST_INTERACTION_GROSS: "post_interaction_gross",
      INSTAGRAM_PROFILE_ENGAGEMENT: "instagram_profile_engagement",
      VISIT_INSTAGRAM_PROFILE: "visit_instagram_profile",
      POST_LIKE: "post_like",
      POST_REACTION: "post_reaction",
      POST_SAVE: "post_save",
      POST_STORY: "post_story",
      RSVP: "rsvp",
      STORE_VISIT: "store_visit",
      TAB_VIEW: "tab_view",
      TOTAL_ACTIONS: "total_actions",
      ADD_TO_CART: "add_to_cart",
      ONSITE_APP_ADD_TO_CART: "onsite_app_add_to_cart",
      ONSITE_WEB_ADD_TO_CART: "onsite_web_add_to_cart",
      ONSITE_WEB_APP_ADD_TO_CART: "onsite_web_app_add_to_cart",
      COMPLETE_REGISTRATION: "complete_registration",
      PURCHASE: "purchase",
      ONSITE_APP_PURCHASE: "onsite_app_purchase",
      ONSITE_WEB_PURCHASE: "onsite_web_purchase",
      ONSITE_WEB_APP_PURCHASE: "onsite_web_app_purchase",
      WEB_IN_STORE_PURCHASE: "web_in_store_purchase",
      WEB_APP_IN_STORE_PURCHASE: "web_app_in_store_purchase",
      SEARCH: "search",
      VIEW_CONTENT: "view_content",
      ONSITE_APP_VIEW_CONTENT: "onsite_app_view_content",
      ONSITE_WEB_VIEW_CONTENT: "onsite_web_view_content",
      ONSITE_WEB_APP_VIEW_CONTENT: "onsite_web_app_view_content",
      VIDEO_PLAY: "video_play",
      VOTE: "vote",
      INITIATE_CHECKOUT: "initiate_checkout",
      ONSITE_WEB_INITIATE_CHECKOUT: "onsite_web_initiate_checkout",
      ADD_PAYMENT_INFO: "add_payment_info",
      ADD_TO_WISHLIST: "add_to_wishlist",
      LEAD: "lead",
      ONSITE_CONVERSION_LEAD_GROUPED: "onsite_conversion.lead_grouped",
      LEADGEN_GROUPED: "leadgen_grouped",
      OMNI_ADD_TO_CART: "omni_add_to_cart",
      OMNI_ADD_TO_WISHLIST: "omni_add_to_wishlist",
      OMNI_COMPLETE_REGISTRATION: "omni_complete_registration",
      OMNI_COMPLETE_REGISTRATION_PLTV: "omni_complete_registration_pltv",
      OMNI_PURCHASE: "omni_purchase",
      OMNI_PURCHASE_PLTV: "omni_purchase_pltv",
      OMNI_PURCHASE_MARGIN: "omni_purchase_margin",
      OMNI_SEARCH: "omni_search",
      OMNI_VIEW_CONTENT: "omni_view_content",
      OMNI_INITIATED_CHECKOUT: "omni_initiated_checkout",
      OMNI_ACHIEVEMENT_UNLOCKED: "omni_achievement_unlocked",
      OMNI_ACTIVATE_APP: "omni_activate_app",
      OMNI_APP_INSTALL: "omni_app_install",
      OMNI_APP_INSTALL_PLTV: "omni_app_install_pltv",
      OMNI_ADD_PAYMENT_INFO_PLTV: "omni_add_payment_info_pltv",
      OMNI_LEVEL_ACHIEVED: "omni_level_achieved",
      OMNI_RATE: "omni_rate",
      OMNI_SPEND_CREDITS: "omni_spend_credits",
      OMNI_TUTORIAL_COMPLETION: "omni_tutorial_completion",
      OMNI_CUSTOM: "omni_custom",
      ONSITE_WEB_LEAD: "onsite_web_lead",
      CLICK_TO_ALBUM: "click_to_album",
      VIDEO_CLICK: "video_click",
      CLICK_TO_PERMALINK: "click_to_permalink",
      CLICK_TO_FLYOUT: "click_to_flyout",
      CLICK_TO_PAGE: "click_to_page",
      CLICK_TO_OTHERS: "click_to_others",
      CLICK_TO_PROFILE: "click_to_profile",
      CLICK_TO_PROFILE_ATTEMPT: "click_to_profile_attempt",
      CLICK_TO_MARKETPLACE: "click_to_marketplace",
      CLICK_TO_EVENT: "click_to_event",
      CLICK_TO_GROUP: "click_to_group",
      CLICK_TO_HASHTAG: "click_to_hashtag",
      CLICK_TO_HASHTAG_ATTEMPT: "click_to_hashtag_attempt",
      CLICK_TO_CAMERA_EFFECTS: "click_to_camera_effects",
      CLICK_TO_STORY: "click_to_story",
      CLICK_TO_LOCATION_ATTEMPT: "click_to_location_attempt",
      CLICK_TO_LINK_ATTEMPT: "click_to_link_attempt",
      DONATE_TOTAL: "donate_total",
      ONSITE_CONVERSION_DONATE: "donate_on_facebook",
      INSTAGRAM_UPCOMING_EVENT_REMINDER_TOGGLE_ON:
        "instagram_upcoming_event_reminder_toggle_on",
      LANDING_PAGE_VIEW: "landing_page_view",
      APP_SITE_VISIT: "app_site_visit",
      APP_STORE_VISIT: "app_store_visit",
      OMNI_LANDING_PAGE_VIEW: "omni_landing_page_view",
      ONE_PD_LANDING_PAGE_VIEW: "one_pd_landing_page_view",
      ONE_PD_LANDING_PAGE_VIEW_IN_APP_BROWSER:
        "one_pd_landing_page_view.in_app_browser",
      ONE_PD_LANDING_PAGE_VIEW_SYSTEM_BROWSER:
        "one_pd_landing_page_view.system_browser",
      ENGAGED_PAGE_VIEW: "engaged_page_view",
      ENGAGED_PAGE_VIEW_IN_APP_BROWSER: "engaged_page_view.in_app_browser",
      ENGAGED_PAGE_VIEW_SYSTEM_BROWSER: "engaged_page_view.system_browser",
      ONSITE_CONVERSION_ENGAGED_PAGE_VIEW:
        "onsite_conversion.engaged_page_view",
      PRODUCT_LEVEL_REPORTING: "product_level_reporting",
      START_TRIAL_PLTV: "start_trial_pltv",
      START_TRIAL_PLTV_TOTAL: "start_trial_pltv_total",
      SUBSCRIBE_PLTV: "subscribe_pltv",
      SUBSCRIBE_PLTV_TOTAL: "subscribe_pltv_total",
    });
    i.default = e;
  },
  66,
);
