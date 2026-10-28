__d(
  "WAWebProtobufSyncAction.pb",
  [
    "$InternalEnum",
    "WAProtoConst",
    "WAWebProtobufsChatLockSettings.pb",
    "WAWebProtobufsDeviceCapabilities.pb",
    "WAWebProtobufsProtocol.pb",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (s = n("$InternalEnum"))({
        COLLECTION_NAME_UNKNOWN: 0,
        REGULAR: 1,
        REGULAR_LOW: 2,
        REGULAR_HIGH: 3,
        CRITICAL_BLOCK: 4,
        CRITICAL_UNBLOCK_LOW: 5,
      }),
      c = s({
        STAR_ACTION: 2,
        CONTACT_ACTION: 3,
        MUTE_ACTION: 4,
        PIN_ACTION: 5,
        SECURITY_NOTIFICATION_SETTING: 6,
        PUSH_NAME_SETTING: 7,
        QUICK_REPLY_ACTION: 8,
        RECENT_EMOJI_WEIGHTS_ACTION: 11,
        LABEL_MESSAGE_ACTION: 13,
        LABEL_EDIT_ACTION: 14,
        LABEL_ASSOCIATION_ACTION: 15,
        LOCALE_SETTING: 16,
        ARCHIVE_CHAT_ACTION: 17,
        DELETE_MESSAGE_FOR_ME_ACTION: 18,
        KEY_EXPIRATION: 19,
        MARK_CHAT_AS_READ_ACTION: 20,
        CLEAR_CHAT_ACTION: 21,
        DELETE_CHAT_ACTION: 22,
        UNARCHIVE_CHATS_SETTING: 23,
        PRIMARY_FEATURE: 24,
        ANDROID_UNSUPPORTED_ACTIONS: 26,
        AGENT_ACTION: 27,
        SUBSCRIPTION_ACTION: 28,
        USER_STATUS_MUTE_ACTION: 29,
        TIME_FORMAT_ACTION: 30,
        NUX_ACTION: 31,
        PRIMARY_VERSION_ACTION: 32,
        STICKER_ACTION: 33,
        REMOVE_RECENT_STICKER_ACTION: 34,
        CHAT_ASSIGNMENT: 35,
        CHAT_ASSIGNMENT_OPENED_STATUS: 36,
        PN_FOR_LID_CHAT_ACTION: 37,
        MARKETING_MESSAGE_ACTION: 38,
        MARKETING_MESSAGE_BROADCAST_ACTION: 39,
        EXTERNAL_WEB_BETA_ACTION: 40,
        PRIVACY_SETTING_RELAY_ALL_CALLS: 41,
        CALL_LOG_ACTION: 42,
        UGC_BOT: 43,
        STATUS_PRIVACY: 44,
        BOT_WELCOME_REQUEST_ACTION: 45,
        DELETE_INDIVIDUAL_CALL_LOG: 46,
        LABEL_REORDERING_ACTION: 47,
        PAYMENT_INFO_ACTION: 48,
        CUSTOM_PAYMENT_METHODS_ACTION: 49,
        LOCK_CHAT_ACTION: 50,
        CHAT_LOCK_SETTINGS: 51,
        WAMO_USER_IDENTIFIER_ACTION: 52,
        PRIVACY_SETTING_DISABLE_LINK_PREVIEWS_ACTION: 53,
        DEVICE_CAPABILITIES: 54,
        NOTE_EDIT_ACTION: 55,
        FAVORITES_ACTION: 56,
        MERCHANT_PAYMENT_PARTNER_ACTION: 57,
        WAFFLE_ACCOUNT_LINK_STATE_ACTION: 58,
        USERNAME_CHAT_START_MODE: 59,
        NOTIFICATION_ACTIVITY_SETTING_ACTION: 60,
        LID_CONTACT_ACTION: 61,
        CTWA_PER_CUSTOMER_DATA_SHARING_ACTION: 62,
        PAYMENT_TOS_ACTION: 63,
        PRIVACY_SETTING_CHANNELS_PERSONALISED_RECOMMENDATION_ACTION: 64,
        BUSINESS_BROADCAST_ASSOCIATION_ACTION: 65,
        DETECTED_OUTCOMES_STATUS_ACTION: 66,
        MAIBA_AI_FEATURES_CONTROL_ACTION: 68,
        BUSINESS_BROADCAST_LIST_ACTION: 69,
        MUSIC_USER_ID_ACTION: 70,
        STATUS_POST_OPT_IN_NOTIFICATION_PREFERENCES_ACTION: 71,
        AVATAR_UPDATED_ACTION: 72,
        GALAXY_FLOW_ACTION: 73,
        PRIVATE_PROCESSING_SETTING_ACTION: 74,
        NEWSLETTER_SAVED_INTERESTS_ACTION: 75,
        AI_THREAD_RENAME_ACTION: 76,
        INTERACTIVE_MESSAGE_ACTION: 77,
        SETTINGS_SYNC_ACTION: 78,
        OUT_CONTACT_ACTION: 79,
        NCT_SALT_SYNC_ACTION: 80,
        BUSINESS_BROADCAST_CAMPAIGN_ACTION: 81,
        BUSINESS_BROADCAST_INSIGHTS_ACTION: 82,
        CUSTOMER_DATA_ACTION: 83,
        SUBSCRIPTIONS_SYNC_V2_ACTION: 84,
        THREAD_PIN_ACTION: 85,
        AUTO_ORGANIZE_BUSINESS_CHAT_SETTING: 86,
        BIZ_AI_SETTINGS_NUDGE_ACTION: 87,
        COEX_V2_VERSION_ACTION: 88,
        WASA_ROOT_SECRET_ACTION: 89,
        BUBBLE_LOCK_MESSAGE_ACTION: 90,
        LABEL_SUBLIST_ACTION: 91,
        DEVICE_CAPABILITIES_V2: 92,
        CTWA_MESSAGE_RECEIVED_ACTION: 93,
        SHARED_DEVICE_ALLOWLIST_ACTION: 94,
        CONTACT_MANAGER_METADATA_ACTION: 95,
        BUSINESS_FOLDER_ACTIVATION_ACTION: 96,
        GROUP_HISTORY_TOGGLE_ACTION: 97,
        BB_PRO_PENDING_CUSTOMER_BASE_ACTION: 98,
        COMMUNITY_NESTING_STATE_ACTION: 99,
        SHARED_DEVICE_SECRET_ACTION: 100,
        HATCH_CVM_SECRET_ACTION: 101,
        SHARE_OWN_PN: 10001,
        BUSINESS_BROADCAST_ACTION: 10002,
        AI_THREAD_DELETE_ACTION: 10003,
      }),
      d = s({ REGULAR: 0, SCHEDULED_CALL: 1, VOICE_CHAT: 2 }),
      m = s({ NONE: 0, SCHEDULED: 1, PRIVACY: 2, LIGHTWEIGHT: 3 }),
      p = s({
        CONNECTED: 0,
        REJECTED: 1,
        CANCELLED: 2,
        ACCEPTEDELSEWHERE: 3,
        MISSED: 4,
        INVALID: 5,
        UNAVAILABLE: 6,
        UPCOMING: 7,
        FAILED: 8,
        ABANDONED: 9,
        ONGOING: 10,
      }),
      _ = s({ PLATFORM_DEFAULT: 0, NESTED: 1, UNNESTED: 2 }),
      f = s({
        GROUP_HISTORY_TOGGLE_MODE_UNKNOWN: 0,
        GROUP_HISTORY_TOGGLE_MODE_ON: 1,
        GROUP_HISTORY_TOGGLE_MODE_OFF: 2,
      }),
      g = s({ INACTIVE: 0, ACTIVE: 1 }),
      h = s({
        MEDIA_AUTO_DOWNLOAD_QUALITY_UNKNOWN: 0,
        MEDIA_AUTO_DOWNLOAD_QUALITY_STANDARD: 1,
        MEDIA_AUTO_DOWNLOAD_QUALITY_HD: 2,
        MEDIA_AUTO_DOWNLOAD_QUALITY_AUTO: 3,
      }),
      y = s({ MEDIA_QUALITY_UNKNOWN: 0, STANDARD: 1, HD: 2 }),
      C = s({
        DISPLAY_MODE_UNKNOWN: 0,
        ALWAYS: 1,
        NEVER: 2,
        ONLY_WHEN_APP_IS_OPEN: 3,
      }),
      b = s({
        SETTING_KEY_UNKNOWN: 0,
        START_AT_LOGIN: 1,
        MINIMIZE_TO_TRAY: 2,
        LANGUAGE: 3,
        REPLACE_TEXT_WITH_EMOJI: 4,
        BANNER_NOTIFICATION_DISPLAY_MODE: 5,
        UNREAD_COUNTER_BADGE_DISPLAY_MODE: 6,
        IS_MESSAGES_NOTIFICATION_ENABLED: 7,
        IS_CALLS_NOTIFICATION_ENABLED: 8,
        IS_REACTIONS_NOTIFICATION_ENABLED: 9,
        IS_STATUS_REACTIONS_NOTIFICATION_ENABLED: 10,
        IS_TEXT_PREVIEW_FOR_NOTIFICATION_ENABLED: 11,
        DEFAULT_NOTIFICATION_TONE_ID: 12,
        GROUP_DEFAULT_NOTIFICATION_TONE_ID: 13,
        APP_THEME: 14,
        WALLPAPER_ID: 15,
        IS_DOODLE_WALLPAPER_ENABLED: 16,
        FONT_SIZE: 17,
        IS_PHOTOS_AUTODOWNLOAD_ENABLED: 18,
        IS_AUDIOS_AUTODOWNLOAD_ENABLED: 19,
        IS_VIDEOS_AUTODOWNLOAD_ENABLED: 20,
        IS_DOCUMENTS_AUTODOWNLOAD_ENABLED: 21,
        DISABLE_LINK_PREVIEWS: 22,
        NOTIFICATION_TONE_ID: 23,
        MEDIA_UPLOAD_QUALITY: 24,
        IS_SPELL_CHECK_ENABLED: 25,
        IS_ENTER_TO_SEND_ENABLED: 26,
        IS_GROUP_MESSAGE_NOTIFICATION_ENABLED: 27,
        IS_GROUP_REACTIONS_NOTIFICATION_ENABLED: 28,
        IS_STATUS_NOTIFICATION_ENABLED: 29,
        STATUS_NOTIFICATION_TONE_ID: 30,
        SHOULD_PLAY_SOUND_FOR_CALL_NOTIFICATION: 31,
        CHAT_THEME_ID: 32,
        COLOR_SCHEME_ID: 33,
        STOCK_WALLPAPER_IMAGE_ID: 34,
        MEDIA_AUTO_DOWNLOAD_QUALITY: 35,
      }),
      v = s({ PLATFORM_UNKNOWN: 0, WEB: 1, HYBRID: 2, WINDOWS: 3, MAC: 4 }),
      S = s({ DISABLE_CTA: 1 }),
      R = s({ UNDEFINED: 0, ENABLED: 1, DISABLED: 2 }),
      L = s({ UPDATED: 0, CREATED: 1, DELETED: 2 }),
      E = s({
        UNKNOWN: 0,
        INSTRUCTIONS: 1,
        RESPONSE_SETTINGS: 2,
        EXAMPLE_RESPONSES: 3,
        KNOWLEDGE: 4,
        LEAD_GEN: 5,
        HANDOFF_REMOVAL_TIMING: 6,
      }),
      k = s({ MUTED: 0, AI_AGENT: 1, SUGGESTIONS: 2 }),
      I = s({ ENABLED: 0, ENABLED_HAS_LEARNING: 1, DISABLED: 2 }),
      T = s({
        BB_PRO_ACTIVE: 1,
        BB_PRO_COMPLETED: 2,
        BB_PRO_IN_DRAFT: 3,
        BB_PRO_IN_REVIEW: 4,
        BB_PRO_NOT_SENDING: 5,
        BB_PRO_OFF: 6,
        BB_PRO_REJECTED: 7,
        BB_PRO_SCHEDULED: 8,
        BB_PRO_SENDING_LIMITED: 9,
        BB_PRO_PROCESSING: 10,
      }),
      D = s({ DRAFT: 1, SCHEDULED: 2, PROCESSING: 3, FAILED: 4, SENT: 5 }),
      x = s({ BR_PAY_PRIVACY_POLICY: 0 }),
      $ = s({
        DEFAULT_ALL_MESSAGES: 0,
        ALL_MESSAGES: 1,
        HIGHLIGHTS: 2,
        DEFAULT_HIGHLIGHTS: 3,
      }),
      P = s({ ACTIVE: 0, PAUSED: 1, UNLINKED: 2 }),
      N = s({ ACTIVE: 0, INACTIVE: 1 }),
      M = s({ UNSTRUCTURED: 1, STRUCTURED: 2 }),
      w = s({
        ALLOW_LIST: 0,
        DENY_LIST: 1,
        CONTACTS: 2,
        CLOSE_FRIENDS: 3,
        CUSTOM_LIST: 4,
      }),
      A = s({ PERSONALIZED: 0 }),
      F = s({ LID: 1, PN: 2 }),
      O = s({
        NONE: 0,
        UNREAD: 1,
        GROUPS: 2,
        FAVORITES: 3,
        PREDEFINED: 4,
        CUSTOM: 5,
        COMMUNITY: 6,
        SERVER_ASSIGNED: 7,
        DRAFTED: 8,
        AI_HANDOFF: 9,
        CHANNELS: 10,
        AI_RESPONDING: 11,
        ARCHIVED: 12,
        LOCKED: 13,
        INVITES: 14,
        THIRD_PARTY: 15,
        LEAD: 16,
        MENTIONS_AND_REPLIES: 17,
        REQUESTS: 18,
        BUSINESS: 19,
        ONE_ON_ONE: 20,
      }),
      B = s({
        ANDROID: 0,
        SMBA: 1,
        IPHONE: 2,
        SMBI: 3,
        WEB: 4,
        UWP: 5,
        DARWIN: 6,
        IPAD: 7,
        WEAROS: 8,
        WASG: 9,
        WEARM: 10,
        CAPI: 11,
      }),
      W = s({
        STAR_ACTION: "star",
        CONTACT_ACTION: "contact",
        MUTE_ACTION: "mute",
        PIN_ACTION: "pin_v1",
        SECURITY_NOTIFICATION_SETTING: "setting_securityNotification",
        PUSH_NAME_SETTING: "setting_pushName",
        QUICK_REPLY_ACTION: "quick_reply",
        RECENT_EMOJI_WEIGHTS_ACTION: "recent_emoji_weights_action",
        LABEL_MESSAGE_ACTION: "label_message",
        LABEL_EDIT_ACTION: "label_edit",
        LABEL_ASSOCIATION_ACTION: "label_jid",
        LOCALE_SETTING: "setting_locale",
        ARCHIVE_CHAT_ACTION: "archive",
        DELETE_MESSAGE_FOR_ME_ACTION: "deleteMessageForMe",
        KEY_EXPIRATION: "sentinel",
        MARK_CHAT_AS_READ_ACTION: "markChatAsRead",
        CLEAR_CHAT_ACTION: "clearChat",
        DELETE_CHAT_ACTION: "deleteChat",
        UNARCHIVE_CHATS_SETTING: "setting_unarchiveChats",
        PRIMARY_FEATURE: "primary_feature",
        ANDROID_UNSUPPORTED_ACTIONS: "android_unsupported_actions",
        AGENT_ACTION: "deviceAgent",
        SUBSCRIPTION_ACTION: "subscription",
        USER_STATUS_MUTE_ACTION: "userStatusMute",
        TIME_FORMAT_ACTION: "time_format",
        NUX_ACTION: "nux",
        PRIMARY_VERSION_ACTION: "primary_version",
        STICKER_ACTION: "favoriteSticker",
        REMOVE_RECENT_STICKER_ACTION: "removeRecentSticker",
        CHAT_ASSIGNMENT: "agentChatAssignment",
        CHAT_ASSIGNMENT_OPENED_STATUS: "agentChatAssignmentOpenedStatus",
        PN_FOR_LID_CHAT_ACTION: "pnForLidChat",
        MARKETING_MESSAGE_ACTION: "marketingMessage",
        MARKETING_MESSAGE_BROADCAST_ACTION: "marketingMessageBroadcast",
        EXTERNAL_WEB_BETA_ACTION: "external_web_beta",
        PRIVACY_SETTING_RELAY_ALL_CALLS: "setting_relayAllCalls",
        CALL_LOG_ACTION: "call_log",
        UGC_BOT: "ugc_bot",
        STATUS_PRIVACY: "status_privacy",
        BOT_WELCOME_REQUEST_ACTION: "bot_welcome_request",
        DELETE_INDIVIDUAL_CALL_LOG: "delete_individual_call_log",
        LABEL_REORDERING_ACTION: "label_reordering",
        PAYMENT_INFO_ACTION: "payment_info",
        CUSTOM_PAYMENT_METHODS_ACTION: "custom_payment_methods",
        LOCK_CHAT_ACTION: "lock",
        CHAT_LOCK_SETTINGS: "setting_chatLock",
        WAMO_USER_IDENTIFIER_ACTION: "generated_wui",
        PRIVACY_SETTING_DISABLE_LINK_PREVIEWS_ACTION:
          "setting_disableLinkPreviews",
        DEVICE_CAPABILITIES: "device_capabilities",
        NOTE_EDIT_ACTION: "note_edit",
        FAVORITES_ACTION: "favorites",
        MERCHANT_PAYMENT_PARTNER_ACTION: "merchant_payment_partner",
        WAFFLE_ACCOUNT_LINK_STATE_ACTION: "waffle_account_link_state",
        USERNAME_CHAT_START_MODE: "usernameChatStartMode",
        NOTIFICATION_ACTIVITY_SETTING_ACTION: "notificationActivitySetting",
        LID_CONTACT_ACTION: "lid_contact",
        CTWA_PER_CUSTOMER_DATA_SHARING_ACTION: "ctwaPerCustomerDataSharing",
        PAYMENT_TOS_ACTION: "payment_tos",
        PRIVACY_SETTING_CHANNELS_PERSONALISED_RECOMMENDATION_ACTION:
          "setting_channels_personalised_recommendation_optout",
        BUSINESS_BROADCAST_ASSOCIATION_ACTION: "broadcast_jid",
        DETECTED_OUTCOMES_STATUS_ACTION: "detected_outcomes_status_action",
        MAIBA_AI_FEATURES_CONTROL_ACTION: "maiba_ai_features_control",
        BUSINESS_BROADCAST_LIST_ACTION: "business_broadcast_list",
        MUSIC_USER_ID_ACTION: "music_user_id",
        STATUS_POST_OPT_IN_NOTIFICATION_PREFERENCES_ACTION:
          "status_post_opt_in_notification_preferences_action",
        AVATAR_UPDATED_ACTION: "avatar_updated_action",
        GALAXY_FLOW_ACTION: "galaxy_flow_action",
        PRIVATE_PROCESSING_SETTING_ACTION: "private_processing_setting",
        NEWSLETTER_SAVED_INTERESTS_ACTION: "newsletter_saved_interests",
        AI_THREAD_RENAME_ACTION: "ai_thread_rename",
        INTERACTIVE_MESSAGE_ACTION: "interactive_message_action",
        SETTINGS_SYNC_ACTION: "settings_sync",
        OUT_CONTACT_ACTION: "out_contact",
        NCT_SALT_SYNC_ACTION: "nct_salt_sync",
        BUSINESS_BROADCAST_CAMPAIGN_ACTION: "business_broadcast_campaign",
        BUSINESS_BROADCAST_INSIGHTS_ACTION: "business_broadcast_insights_sync",
        CUSTOMER_DATA_ACTION: "customer_data",
        SUBSCRIPTIONS_SYNC_V2_ACTION: "subscriptions_sync_v2",
        THREAD_PIN_ACTION: "thread_pin",
        AUTO_ORGANIZE_BUSINESS_CHAT_SETTING: "setting_autoOrganizeBusinessChat",
        BIZ_AI_SETTINGS_NUDGE_ACTION: "biz_ai_settings_nudge",
        COEX_V2_VERSION_ACTION: "coexV2Version",
        WASA_ROOT_SECRET_ACTION: "wasa_root_secret",
        BUBBLE_LOCK_MESSAGE_ACTION: "lock_message",
        LABEL_SUBLIST_ACTION: "label_sublist",
        DEVICE_CAPABILITIES_V2: "device_capabilities_v2",
        CTWA_MESSAGE_RECEIVED_ACTION: "ctwa_message_received",
        SHARED_DEVICE_ALLOWLIST_ACTION: "shared_device_allowlist",
        CONTACT_MANAGER_METADATA_ACTION: "contact_manager_metadata",
        BUSINESS_FOLDER_ACTIVATION_ACTION: "business_folder_activation",
        GROUP_HISTORY_TOGGLE_ACTION: "group_history_toggle",
        BB_PRO_PENDING_CUSTOMER_BASE_ACTION:
          "bb_pro_pending_customer_base_action",
        COMMUNITY_NESTING_STATE_ACTION: "community_nesting_state",
        SHARED_DEVICE_SECRET_ACTION: "shared_device_secret",
        HATCH_CVM_SECRET_ACTION: "hatch_cvm_secret",
        SHARE_OWN_PN: "shareOwnPn",
        BUSINESS_BROADCAST_ACTION: "broadcast",
        AI_THREAD_DELETE_ACTION: "ai_thread_delete",
      });
    function q(e) {
      return e === c.STAR_ACTION
        ? u.REGULAR_HIGH
        : e === c.CONTACT_ACTION
          ? u.CRITICAL_UNBLOCK_LOW
          : e === c.MUTE_ACTION
            ? u.REGULAR_HIGH
            : e === c.PIN_ACTION
              ? u.REGULAR_LOW
              : e === c.SECURITY_NOTIFICATION_SETTING ||
                  e === c.PUSH_NAME_SETTING
                ? u.CRITICAL_BLOCK
                : e === c.QUICK_REPLY_ACTION
                  ? u.REGULAR
                  : e === c.RECENT_EMOJI_WEIGHTS_ACTION
                    ? u.REGULAR_LOW
                    : e === c.LABEL_MESSAGE_ACTION ||
                        e === c.LABEL_EDIT_ACTION ||
                        e === c.LABEL_ASSOCIATION_ACTION
                      ? u.REGULAR
                      : e === c.LOCALE_SETTING
                        ? u.CRITICAL_BLOCK
                        : e === c.ARCHIVE_CHAT_ACTION
                          ? u.REGULAR_LOW
                          : e === c.DELETE_MESSAGE_FOR_ME_ACTION
                            ? u.REGULAR_HIGH
                            : e === c.KEY_EXPIRATION ||
                                e === c.MARK_CHAT_AS_READ_ACTION
                              ? u.REGULAR_LOW
                              : e === c.CLEAR_CHAT_ACTION ||
                                  e === c.DELETE_CHAT_ACTION
                                ? u.REGULAR_HIGH
                                : e === c.UNARCHIVE_CHATS_SETTING
                                  ? u.REGULAR_LOW
                                  : e === c.PRIMARY_FEATURE
                                    ? u.REGULAR
                                    : e === c.ANDROID_UNSUPPORTED_ACTIONS
                                      ? u.REGULAR_LOW
                                      : e === c.AGENT_ACTION ||
                                          e === c.SUBSCRIPTION_ACTION
                                        ? u.REGULAR
                                        : e === c.USER_STATUS_MUTE_ACTION
                                          ? u.REGULAR_HIGH
                                          : e === c.TIME_FORMAT_ACTION ||
                                              e === c.NUX_ACTION ||
                                              e === c.PRIMARY_VERSION_ACTION ||
                                              e === c.STICKER_ACTION ||
                                              e ===
                                                c.REMOVE_RECENT_STICKER_ACTION
                                            ? u.REGULAR_LOW
                                            : e === c.CHAT_ASSIGNMENT ||
                                                e ===
                                                  c.CHAT_ASSIGNMENT_OPENED_STATUS ||
                                                e ===
                                                  c.PN_FOR_LID_CHAT_ACTION ||
                                                e ===
                                                  c.MARKETING_MESSAGE_ACTION ||
                                                e ===
                                                  c.MARKETING_MESSAGE_BROADCAST_ACTION ||
                                                e ===
                                                  c.EXTERNAL_WEB_BETA_ACTION ||
                                                e ===
                                                  c.PRIVACY_SETTING_RELAY_ALL_CALLS ||
                                                e === c.CALL_LOG_ACTION
                                              ? u.REGULAR
                                              : e === c.UGC_BOT ||
                                                  e === c.STATUS_PRIVACY
                                                ? u.REGULAR_HIGH
                                                : e ===
                                                    c.BOT_WELCOME_REQUEST_ACTION
                                                  ? u.REGULAR_LOW
                                                  : e ===
                                                        c.DELETE_INDIVIDUAL_CALL_LOG ||
                                                      e ===
                                                        c.LABEL_REORDERING_ACTION
                                                    ? u.REGULAR
                                                    : e ===
                                                          c.PAYMENT_INFO_ACTION ||
                                                        e ===
                                                          c.CUSTOM_PAYMENT_METHODS_ACTION ||
                                                        e ===
                                                          c.LOCK_CHAT_ACTION ||
                                                        e ===
                                                          c.CHAT_LOCK_SETTINGS
                                                      ? u.REGULAR_LOW
                                                      : e ===
                                                          c.WAMO_USER_IDENTIFIER_ACTION
                                                        ? u.CRITICAL_BLOCK
                                                        : e ===
                                                            c.PRIVACY_SETTING_DISABLE_LINK_PREVIEWS_ACTION
                                                          ? u.REGULAR
                                                          : e ===
                                                                c.DEVICE_CAPABILITIES ||
                                                              e ===
                                                                c.NOTE_EDIT_ACTION
                                                            ? u.REGULAR_LOW
                                                            : e ===
                                                                c.FAVORITES_ACTION
                                                              ? u.REGULAR_HIGH
                                                              : e ===
                                                                  c.MERCHANT_PAYMENT_PARTNER_ACTION
                                                                ? u.REGULAR_LOW
                                                                : e ===
                                                                    c.WAFFLE_ACCOUNT_LINK_STATE_ACTION
                                                                  ? u.REGULAR_HIGH
                                                                  : e ===
                                                                        c.USERNAME_CHAT_START_MODE ||
                                                                      e ===
                                                                        c.NOTIFICATION_ACTIVITY_SETTING_ACTION
                                                                    ? u.REGULAR
                                                                    : e ===
                                                                        c.LID_CONTACT_ACTION
                                                                      ? u.CRITICAL_UNBLOCK_LOW
                                                                      : e ===
                                                                          c.CTWA_PER_CUSTOMER_DATA_SHARING_ACTION
                                                                        ? u.REGULAR_HIGH
                                                                        : e ===
                                                                            c.PAYMENT_TOS_ACTION
                                                                          ? u.REGULAR_LOW
                                                                          : e ===
                                                                                c.PRIVACY_SETTING_CHANNELS_PERSONALISED_RECOMMENDATION_ACTION ||
                                                                              e ===
                                                                                c.BUSINESS_BROADCAST_ASSOCIATION_ACTION ||
                                                                              e ===
                                                                                c.DETECTED_OUTCOMES_STATUS_ACTION
                                                                            ? u.REGULAR
                                                                            : e ===
                                                                                c.MAIBA_AI_FEATURES_CONTROL_ACTION
                                                                              ? u.REGULAR_HIGH
                                                                              : e ===
                                                                                    c.BUSINESS_BROADCAST_LIST_ACTION ||
                                                                                  e ===
                                                                                    c.MUSIC_USER_ID_ACTION
                                                                                ? u.REGULAR
                                                                                : e ===
                                                                                    c.STATUS_POST_OPT_IN_NOTIFICATION_PREFERENCES_ACTION
                                                                                  ? u.REGULAR_HIGH
                                                                                  : e ===
                                                                                        c.AVATAR_UPDATED_ACTION ||
                                                                                      e ===
                                                                                        c.GALAXY_FLOW_ACTION
                                                                                    ? u.REGULAR
                                                                                    : e ===
                                                                                        c.PRIVATE_PROCESSING_SETTING_ACTION
                                                                                      ? u.REGULAR_HIGH
                                                                                      : e ===
                                                                                          c.NEWSLETTER_SAVED_INTERESTS_ACTION
                                                                                        ? u.REGULAR
                                                                                        : e ===
                                                                                              c.AI_THREAD_RENAME_ACTION ||
                                                                                            e ===
                                                                                              c.INTERACTIVE_MESSAGE_ACTION ||
                                                                                            e ===
                                                                                              c.SETTINGS_SYNC_ACTION ||
                                                                                            e ===
                                                                                              c.OUT_CONTACT_ACTION
                                                                                          ? u.REGULAR_LOW
                                                                                          : e ===
                                                                                              c.NCT_SALT_SYNC_ACTION
                                                                                            ? u.REGULAR_HIGH
                                                                                            : e ===
                                                                                                  c.BUSINESS_BROADCAST_CAMPAIGN_ACTION ||
                                                                                                e ===
                                                                                                  c.BUSINESS_BROADCAST_INSIGHTS_ACTION
                                                                                              ? u.REGULAR
                                                                                              : e ===
                                                                                                  c.CUSTOMER_DATA_ACTION
                                                                                                ? u.REGULAR_LOW
                                                                                                : e ===
                                                                                                    c.SUBSCRIPTIONS_SYNC_V2_ACTION
                                                                                                  ? u.REGULAR
                                                                                                  : e ===
                                                                                                        c.THREAD_PIN_ACTION ||
                                                                                                      e ===
                                                                                                        c.AUTO_ORGANIZE_BUSINESS_CHAT_SETTING
                                                                                                    ? u.REGULAR_LOW
                                                                                                    : e ===
                                                                                                        c.BIZ_AI_SETTINGS_NUDGE_ACTION
                                                                                                      ? u.REGULAR_HIGH
                                                                                                      : e ===
                                                                                                          c.COEX_V2_VERSION_ACTION
                                                                                                        ? u.REGULAR_LOW
                                                                                                        : e ===
                                                                                                            c.WASA_ROOT_SECRET_ACTION
                                                                                                          ? u.REGULAR_HIGH
                                                                                                          : e ===
                                                                                                              c.BUBBLE_LOCK_MESSAGE_ACTION
                                                                                                            ? u.REGULAR_LOW
                                                                                                            : e ===
                                                                                                                c.LABEL_SUBLIST_ACTION
                                                                                                              ? u.REGULAR
                                                                                                              : e ===
                                                                                                                  c.DEVICE_CAPABILITIES_V2
                                                                                                                ? u.REGULAR_LOW
                                                                                                                : e ===
                                                                                                                    c.CTWA_MESSAGE_RECEIVED_ACTION
                                                                                                                  ? u.REGULAR
                                                                                                                  : e ===
                                                                                                                      c.SHARED_DEVICE_ALLOWLIST_ACTION
                                                                                                                    ? u.REGULAR_HIGH
                                                                                                                    : e ===
                                                                                                                          c.CONTACT_MANAGER_METADATA_ACTION ||
                                                                                                                        e ===
                                                                                                                          c.BUSINESS_FOLDER_ACTIVATION_ACTION ||
                                                                                                                        e ===
                                                                                                                          c.GROUP_HISTORY_TOGGLE_ACTION ||
                                                                                                                        e ===
                                                                                                                          c.BB_PRO_PENDING_CUSTOMER_BASE_ACTION ||
                                                                                                                        e ===
                                                                                                                          c.COMMUNITY_NESTING_STATE_ACTION
                                                                                                                      ? u.REGULAR_LOW
                                                                                                                      : e ===
                                                                                                                            c.SHARED_DEVICE_SECRET_ACTION ||
                                                                                                                          e ===
                                                                                                                            c.HATCH_CVM_SECRET_ACTION
                                                                                                                        ? u.REGULAR_HIGH
                                                                                                                        : e ===
                                                                                                                              c.SHARE_OWN_PN ||
                                                                                                                            e ===
                                                                                                                              c.BUSINESS_BROADCAST_ACTION
                                                                                                                          ? u.REGULAR
                                                                                                                          : e ===
                                                                                                                              c.AI_THREAD_DELETE_ACTION
                                                                                                                            ? u.REGULAR_HIGH
                                                                                                                            : (function () {
                                                                                                                                throw Error(
                                                                                                                                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                                                                                                                    e,
                                                                                                                                );
                                                                                                                              })();
    }
    var U = s({
        REGULAR: "regular",
        REGULAR_LOW: "regular_low",
        REGULAR_HIGH: "regular_high",
        CRITICAL_BLOCK: "critical_block",
        CRITICAL_UNBLOCK_LOW: "critical_unblock_low",
      }),
      V = {},
      H = {},
      G = {},
      z = {},
      j = {},
      K = {},
      Q = {},
      X = {},
      Y = {},
      J = {},
      Z = {},
      ee = {},
      te = {},
      ne = {},
      re = {},
      oe = {},
      ae = {},
      ie = {},
      le = {},
      se = {},
      ue = {},
      ce = {},
      de = {},
      me = {},
      pe = {},
      _e = {},
      fe = {},
      ge = {},
      he = {},
      ye = {},
      Ce = {},
      be = {},
      ve = {},
      Se = {},
      Re = {},
      Le = {},
      Ee = {},
      ke = {},
      Ie = {},
      Te = {},
      De = {},
      xe = {},
      $e = {},
      Pe = {},
      Ne = {},
      Me = {},
      we = {},
      Ae = {},
      Fe = {},
      Oe = {},
      Be = {},
      We = {},
      qe = {},
      Ue = {},
      Ve = {},
      He = {},
      Ge = {},
      ze = {},
      je = {},
      Ke = {},
      Qe = {},
      Xe = {},
      Ye = {},
      Je = {},
      Ze = {},
      et = {},
      tt = {},
      nt = {},
      rt = {},
      ot = {},
      at = {},
      it = {},
      lt = {},
      st = {},
      ut = {},
      ct = {},
      dt = {},
      mt = {},
      pt = {},
      _t = {},
      ft = {},
      gt = {},
      ht = {},
      yt = {},
      Ct = {},
      bt = {},
      vt = {},
      St = {},
      Rt = {},
      Lt = {},
      Et = {},
      kt = {},
      It = {},
      Tt = {},
      Dt = {},
      xt = {},
      $t = {},
      Pt = {},
      Nt = {},
      Mt = {},
      wt = {},
      At = {},
      Ft = {},
      Ot = {},
      Bt = {},
      Wt = {};
    ((V.name = "RecentEmojiWeight"),
      (V.internalSpec = {
        emoji: [1, (e = o("WAProtoConst")).TYPES.STRING],
        weight: [2, e.TYPES.FLOAT],
      }),
      (H.name = "CallLogRecord"),
      (H.internalSpec = {
        callResult: [1, e.TYPES.ENUM, p],
        isDndMode: [2, e.TYPES.BOOL],
        silenceReason: [3, e.TYPES.ENUM, m],
        duration: [4, e.TYPES.INT64],
        startTime: [5, e.TYPES.INT64],
        isIncoming: [6, e.TYPES.BOOL],
        isVideo: [7, e.TYPES.BOOL],
        isCallLink: [8, e.TYPES.BOOL],
        callLinkToken: [9, e.TYPES.STRING],
        scheduledCallId: [10, e.TYPES.STRING],
        callId: [11, e.TYPES.STRING],
        callCreatorJid: [12, e.TYPES.STRING],
        groupJid: [13, e.TYPES.STRING],
        participants: [14, e.FLAGS.REPEATED | e.TYPES.MESSAGE, G],
        callType: [15, e.TYPES.ENUM, d],
      }),
      (G.name = "CallLogRecord$ParticipantInfo"),
      (G.internalSpec = {
        userJid: [1, e.TYPES.STRING],
        callResult: [2, e.TYPES.ENUM, p],
        guestInfo: [3, e.TYPES.MESSAGE, z],
      }),
      (z.name = "CallLogRecord$GuestInfo"),
      (z.internalSpec = { pushName: [1, e.TYPES.STRING] }),
      (j.name = "SyncActionValue"),
      (j.internalSpec = {
        timestamp: [1, e.TYPES.INT64],
        starAction: [2, e.TYPES.MESSAGE, Ot],
        contactAction: [3, e.TYPES.MESSAGE, Ft],
        muteAction: [4, e.TYPES.MESSAGE, Mt],
        pinAction: [5, e.TYPES.MESSAGE, Nt],
        pushNameSetting: [7, e.TYPES.MESSAGE, Pt],
        quickReplyAction: [8, e.TYPES.MESSAGE, xt],
        recentEmojiWeightsAction: [11, e.TYPES.MESSAGE, kt],
        labelEditAction: [14, e.TYPES.MESSAGE, It],
        labelAssociationAction: [15, e.TYPES.MESSAGE, Dt],
        localeSetting: [16, e.TYPES.MESSAGE, $t],
        archiveChatAction: [17, e.TYPES.MESSAGE, Et],
        deleteMessageForMeAction: [18, e.TYPES.MESSAGE, Lt],
        keyExpiration: [19, e.TYPES.MESSAGE, ht],
        markChatAsReadAction: [20, e.TYPES.MESSAGE, Rt],
        clearChatAction: [21, e.TYPES.MESSAGE, St],
        deleteChatAction: [22, e.TYPES.MESSAGE, vt],
        unarchiveChatsSetting: [23, e.TYPES.MESSAGE, bt],
        primaryFeature: [24, e.TYPES.MESSAGE, gt],
        androidUnsupportedActions: [26, e.TYPES.MESSAGE, ft],
        agentAction: [27, e.TYPES.MESSAGE, _t],
        subscriptionAction: [28, e.TYPES.MESSAGE, pt],
        userStatusMuteAction: [29, e.TYPES.MESSAGE, mt],
        timeFormatAction: [30, e.TYPES.MESSAGE, dt],
        nuxAction: [31, e.TYPES.MESSAGE, ct],
        primaryVersionAction: [32, e.TYPES.MESSAGE, ut],
        stickerAction: [33, e.TYPES.MESSAGE, lt],
        removeRecentStickerAction: [34, e.TYPES.MESSAGE, st],
        chatAssignment: [35, e.TYPES.MESSAGE, it],
        chatAssignmentOpenedStatus: [36, e.TYPES.MESSAGE, at],
        pnForLidChatAction: [37, e.TYPES.MESSAGE, ot],
        marketingMessageAction: [38, e.TYPES.MESSAGE, nt],
        marketingMessageBroadcastAction: [39, e.TYPES.MESSAGE, tt],
        externalWebBetaAction: [40, e.TYPES.MESSAGE, et],
        privacySettingRelayAllCalls: [41, e.TYPES.MESSAGE, Je],
        callLogAction: [42, e.TYPES.MESSAGE, Ye],
        ugcBot: [43, e.TYPES.MESSAGE, Xe],
        statusPrivacy: [44, e.TYPES.MESSAGE, Ke],
        botWelcomeRequestAction: [45, e.TYPES.MESSAGE, Ge],
        deleteIndividualCallLog: [46, e.TYPES.MESSAGE, He],
        labelReorderingAction: [47, e.TYPES.MESSAGE, Ve],
        paymentInfoAction: [48, e.TYPES.MESSAGE, Ue],
        customPaymentMethodsAction: [49, e.TYPES.MESSAGE, Be],
        lockChatAction: [50, e.TYPES.MESSAGE, Oe],
        chatLockSettings: [
          51,
          e.TYPES.MESSAGE,
          o("WAWebProtobufsChatLockSettings.pb").ChatLockSettingsSpec,
        ],
        wamoUserIdentifierAction: [52, e.TYPES.MESSAGE, Ae],
        privacySettingDisableLinkPreviewsAction: [53, e.TYPES.MESSAGE, we],
        deviceCapabilities: [
          54,
          e.TYPES.MESSAGE,
          o("WAWebProtobufsDeviceCapabilities.pb").DeviceCapabilitiesSpec,
        ],
        noteEditAction: [55, e.TYPES.MESSAGE, Ne],
        favoritesAction: [56, e.TYPES.MESSAGE, $e],
        merchantPaymentPartnerAction: [57, e.TYPES.MESSAGE, xe],
        waffleAccountLinkStateAction: [58, e.TYPES.MESSAGE, De],
        usernameChatStartMode: [59, e.TYPES.MESSAGE, rt],
        notificationActivitySettingAction: [60, e.TYPES.MESSAGE, Te],
        lidContactAction: [61, e.TYPES.MESSAGE, Ie],
        ctwaPerCustomerDataSharingAction: [62, e.TYPES.MESSAGE, Ee],
        paymentTosAction: [63, e.TYPES.MESSAGE, Le],
        privacySettingChannelsPersonalisedRecommendationAction: [
          64,
          e.TYPES.MESSAGE,
          Me,
        ],
        detectedOutcomesStatusAction: [66, e.TYPES.MESSAGE, Ze],
        maibaAiFeaturesControlAction: [68, e.TYPES.MESSAGE, Ce],
        businessBroadcastListAction: [69, e.TYPES.MESSAGE, Se],
        musicUserIdAction: [70, e.TYPES.MESSAGE, je],
        statusPostOptInNotificationPreferencesAction: [71, e.TYPES.MESSAGE, he],
        avatarUpdatedAction: [72, e.TYPES.MESSAGE, ge],
        privateProcessingSettingAction: [74, e.TYPES.MESSAGE, fe],
        newsletterSavedInterestsAction: [75, e.TYPES.MESSAGE, ze],
        aiThreadRenameAction: [76, e.TYPES.MESSAGE, _e],
        interactiveMessageAction: [77, e.TYPES.MESSAGE, me],
        settingsSyncAction: [78, e.TYPES.MESSAGE, ue],
        outContactAction: [79, e.TYPES.MESSAGE, ke],
        nctSaltSyncAction: [80, e.TYPES.MESSAGE, de],
        businessBroadcastCampaignAction: [81, e.TYPES.MESSAGE, ve],
        businessBroadcastInsightsAction: [82, e.TYPES.MESSAGE, se],
        customerDataAction: [83, e.TYPES.MESSAGE, le],
        subscriptionsSyncV2Action: [84, e.TYPES.MESSAGE, re],
        threadPinAction: [85, e.TYPES.MESSAGE, pe],
        autoOrganizeBusinessChatSetting: [86, e.TYPES.MESSAGE, ce],
        bizAiSettingsNudgeAction: [87, e.TYPES.MESSAGE, ye],
        coexV2VersionAction: [88, e.TYPES.MESSAGE, ne],
        wasaRootSecretAction: [89, e.TYPES.MESSAGE, ee],
        bubbleLockMessageAction: [90, e.TYPES.MESSAGE, Fe],
        labelSublistAction: [91, e.TYPES.MESSAGE, Tt],
        deviceCapabilitiesV2: [
          92,
          e.TYPES.MESSAGE,
          o("WAWebProtobufsDeviceCapabilities.pb").DeviceCapabilitiesSpec,
        ],
        ctwaMessageReceivedAction: [93, e.TYPES.MESSAGE, J],
        sharedDeviceAllowlistAction: [94, e.TYPES.MESSAGE, At],
        contactManagerMetadataAction: [95, e.TYPES.MESSAGE, ie],
        businessFolderActivationAction: [96, e.TYPES.MESSAGE, Y],
        groupHistoryToggleAction: [97, e.TYPES.MESSAGE, X],
        bbProPendingCustomerBaseAction: [98, e.TYPES.MESSAGE, Q],
        communityNestingStateAction: [99, e.TYPES.MESSAGE, K],
        sharedDeviceSecretAction: [100, e.TYPES.MESSAGE, wt],
        hatchCvmSecretAction: [101, e.TYPES.MESSAGE, Z],
      }),
      (K.name = "SyncActionValue$CommunityNestingStateAction"),
      (K.internalSpec = { nestingState: [1, e.TYPES.ENUM, _] }),
      (Q.name = "SyncActionValue$BBProPendingCustomerBaseAction"),
      (Q.internalSpec = { pending: [1, e.TYPES.BOOL] }),
      (X.name = "SyncActionValue$GroupHistoryToggleAction"),
      (X.internalSpec = { groupHistoryToggleMode: [1, e.TYPES.ENUM, f] }),
      (Y.name = "SyncActionValue$BusinessFolderActivationAction"),
      (Y.internalSpec = { activated: [1, e.TYPES.BOOL] }),
      (J.name = "SyncActionValue$CtwaMessageReceivedAction"),
      (J.internalSpec = { isCtwaMessageReceived: [1, e.TYPES.BOOL] }),
      (Z.name = "SyncActionValue$HatchCVMSecretAction"),
      (Z.internalSpec = {
        secret: [1, e.TYPES.BYTES],
        generation: [2, e.TYPES.INT64],
      }),
      (ee.name = "SyncActionValue$WASARootSecretAction"),
      (ee.internalSpec = {
        secrets: [1, e.FLAGS.REPEATED | e.TYPES.MESSAGE, te],
      }),
      (te.name = "SyncActionValue$WASARootSecretAction$RootSecretEntry"),
      (te.internalSpec = {
        id: [1, e.TYPES.STRING],
        rootSecret: [2, e.TYPES.BYTES],
        epoch: [3, e.TYPES.INT64],
        status: [4, e.TYPES.ENUM, g],
      }),
      (ne.name = "SyncActionValue$CoexV2VersionAction"),
      (ne.internalSpec = { version: [1, e.TYPES.UINT64] }),
      (re.name = "SyncActionValue$SubscriptionsSyncV2Action"),
      (re.internalSpec = {
        subscriptions: [1, e.FLAGS.REPEATED | e.TYPES.MESSAGE, ae],
        paidFeature: [2, e.FLAGS.REPEATED | e.TYPES.MESSAGE, oe],
      }),
      (oe.name = "SyncActionValue$SubscriptionsSyncV2Action$PaidFeature"),
      (oe.internalSpec = {
        name: [1, e.TYPES.STRING],
        enabled: [2, e.TYPES.BOOL],
        limit: [3, e.TYPES.INT32],
        expirationTime: [4, e.TYPES.INT64],
      }),
      (ae.name = "SyncActionValue$SubscriptionsSyncV2Action$SubscriptionInfo"),
      (ae.internalSpec = {
        id: [1, e.TYPES.STRING],
        tier: [2, e.TYPES.INT32],
        status: [3, e.TYPES.STRING],
        startTime: [4, e.TYPES.INT64],
        endTime: [5, e.TYPES.INT64],
        isPlatformChanged: [6, e.TYPES.BOOL],
        source: [7, e.TYPES.STRING],
        creationTime: [8, e.TYPES.INT64],
      }),
      (ie.name = "SyncActionValue$ContactManagerMetadataAction"),
      (ie.internalSpec = { isHidden: [1, e.TYPES.BOOL] }),
      (le.name = "SyncActionValue$CustomerDataAction"),
      (le.internalSpec = {
        chatJid: [1, e.TYPES.STRING],
        contactType: [2, e.TYPES.INT32],
        email: [3, e.TYPES.STRING],
        altPhoneNumbers: [4, e.TYPES.STRING],
        birthday: [5, e.TYPES.INT64],
        address: [6, e.TYPES.STRING],
        acquisitionSource: [7, e.TYPES.INT32],
        leadStage: [8, e.TYPES.INT32],
        lastOrder: [9, e.TYPES.INT64],
        createdAt: [10, e.TYPES.INT64],
        modifiedAt: [11, e.TYPES.INT64],
      }),
      (se.name = "SyncActionValue$BusinessBroadcastInsightsAction"),
      (se.internalSpec = {
        recipientCount: [1, e.TYPES.INT32],
        deliveredCount: [2, e.TYPES.INT32],
        readCount: [3, e.TYPES.INT32],
        repliedCount: [4, e.TYPES.INT32],
        quickReplyCount: [5, e.TYPES.INT32],
      }),
      (ue.name = "SyncActionValue$SettingsSyncAction"),
      (ue.internalSpec = {
        startAtLogin: [1, e.TYPES.BOOL],
        minimizeToTray: [2, e.TYPES.BOOL],
        language: [3, e.TYPES.STRING],
        replaceTextWithEmoji: [4, e.TYPES.BOOL],
        bannerNotificationDisplayMode: [5, e.TYPES.ENUM, C],
        unreadCounterBadgeDisplayMode: [6, e.TYPES.ENUM, C],
        isMessagesNotificationEnabled: [7, e.TYPES.BOOL],
        isCallsNotificationEnabled: [8, e.TYPES.BOOL],
        isReactionsNotificationEnabled: [9, e.TYPES.BOOL],
        isStatusReactionsNotificationEnabled: [10, e.TYPES.BOOL],
        isTextPreviewForNotificationEnabled: [11, e.TYPES.BOOL],
        defaultNotificationToneId: [12, e.TYPES.INT32],
        groupDefaultNotificationToneId: [13, e.TYPES.INT32],
        appTheme: [14, e.TYPES.INT32],
        wallpaperId: [15, e.TYPES.INT32],
        isDoodleWallpaperEnabled: [16, e.TYPES.BOOL],
        fontSize: [17, e.TYPES.INT32],
        isPhotosAutodownloadEnabled: [18, e.TYPES.BOOL],
        isAudiosAutodownloadEnabled: [19, e.TYPES.BOOL],
        isVideosAutodownloadEnabled: [20, e.TYPES.BOOL],
        isDocumentsAutodownloadEnabled: [21, e.TYPES.BOOL],
        disableLinkPreviews: [22, e.TYPES.BOOL],
        notificationToneId: [23, e.TYPES.INT32],
        mediaUploadQuality: [24, e.TYPES.ENUM, y],
        isSpellCheckEnabled: [25, e.TYPES.BOOL],
        isEnterToSendEnabled: [26, e.TYPES.BOOL],
        isGroupMessageNotificationEnabled: [27, e.TYPES.BOOL],
        isGroupReactionsNotificationEnabled: [28, e.TYPES.BOOL],
        isStatusNotificationEnabled: [29, e.TYPES.BOOL],
        statusNotificationToneId: [30, e.TYPES.INT32],
        shouldPlaySoundForCallNotification: [31, e.TYPES.BOOL],
        chatThemeId: [32, e.TYPES.STRING],
        colorSchemeId: [33, e.TYPES.STRING],
        stockWallpaperImageId: [34, e.TYPES.STRING],
        mediaAutoDownloadQuality: [35, e.TYPES.ENUM, h],
      }),
      (ce.name = "SyncActionValue$AutoOrganizeBusinessChatSetting"),
      (ce.internalSpec = { autoOrganize: [1, e.TYPES.BOOL] }),
      (de.name = "SyncActionValue$NctSaltSyncAction"),
      (de.internalSpec = { salt: [1, e.TYPES.BYTES] }),
      (me.name = "SyncActionValue$InteractiveMessageAction"),
      (me.internalSpec = {
        type: [1, e.FLAGS.REQUIRED | e.TYPES.ENUM, S],
        agmId: [2, e.TYPES.STRING],
      }),
      (pe.name = "SyncActionValue$ThreadPinAction"),
      (pe.internalSpec = { pinned: [1, e.TYPES.BOOL] }),
      (_e.name = "SyncActionValue$AiThreadRenameAction"),
      (_e.internalSpec = { newTitle: [1, e.TYPES.STRING] }),
      (fe.name = "SyncActionValue$PrivateProcessingSettingAction"),
      (fe.internalSpec = { privateProcessingStatus: [1, e.TYPES.ENUM, R] }),
      (ge.name = "SyncActionValue$AvatarUpdatedAction"),
      (ge.internalSpec = {
        eventType: [1, e.TYPES.ENUM, L],
        recentAvatarStickers: [2, e.FLAGS.REPEATED | e.TYPES.MESSAGE, lt],
      }),
      (he.name =
        "SyncActionValue$StatusPostOptInNotificationPreferencesAction"),
      (he.internalSpec = { enabled: [1, e.TYPES.BOOL] }),
      (ye.name = "SyncActionValue$BizAISettingsNudgeAction"),
      (ye.internalSpec = {
        category: [1, e.TYPES.ENUM, E],
        version: [2, e.TYPES.INT64],
        updatedAtMs: [3, e.TYPES.INT64],
      }),
      (Ce.name = "SyncActionValue$MaibaAIFeaturesControlAction"),
      (Ce.internalSpec = {
        aiFeatureStatus: [1, e.TYPES.ENUM, I],
        aiReplyMode: [2, e.TYPES.ENUM, k],
      }),
      (be.name = "SyncActionValue$BroadcastListParticipant"),
      (be.internalSpec = {
        lidJid: [1, e.FLAGS.REQUIRED | e.TYPES.STRING],
        pnJid: [2, e.TYPES.STRING],
      }),
      (ve.name = "SyncActionValue$BusinessBroadcastCampaignAction"),
      (ve.internalSpec = {
        deviceId: [1, e.TYPES.INT32],
        adId: [2, e.TYPES.STRING],
        name: [3, e.TYPES.STRING],
        msgId: [4, e.TYPES.STRING],
        broadcastJid: [5, e.TYPES.STRING],
        reservedQuota: [6, e.TYPES.INT32],
        scheduledTimestamp: [7, e.TYPES.INT64],
        createTimestamp: [8, e.TYPES.INT64],
        status: [9, e.TYPES.ENUM, D],
        bbProStatus: [10, e.TYPES.ENUM, T],
        customAudienceFbid: [11, e.TYPES.STRING],
      }),
      (Se.name = "SyncActionValue$BusinessBroadcastListAction"),
      (Se.internalSpec = {
        deleted: [1, e.TYPES.BOOL],
        participants: [2, e.FLAGS.REPEATED | e.TYPES.MESSAGE, be],
        listName: [3, e.TYPES.STRING],
        labelIds: [4, e.FLAGS.REPEATED | e.TYPES.STRING],
        audienceExpression: [5, e.TYPES.STRING],
        customAudienceFbid: [6, e.TYPES.STRING],
      }),
      (Re.name = "SyncActionValue$BusinessBroadcastAssociationAction"),
      (Re.internalSpec = { deleted: [1, e.TYPES.BOOL] }),
      (Le.name = "SyncActionValue$PaymentTosAction"),
      (Le.internalSpec = {
        paymentNotice: [1, e.FLAGS.REQUIRED | e.TYPES.ENUM, x],
        accepted: [2, e.FLAGS.REQUIRED | e.TYPES.BOOL],
      }),
      (Ee.name = "SyncActionValue$CtwaPerCustomerDataSharingAction"),
      (Ee.internalSpec = {
        isCtwaPerCustomerDataSharingEnabled: [1, e.TYPES.BOOL],
      }),
      (ke.name = "SyncActionValue$OutContactAction"),
      (ke.internalSpec = {
        fullName: [1, e.TYPES.STRING],
        firstName: [2, e.TYPES.STRING],
      }),
      (Ie.name = "SyncActionValue$LidContactAction"),
      (Ie.internalSpec = {
        fullName: [1, e.TYPES.STRING],
        firstName: [2, e.TYPES.STRING],
        username: [3, e.TYPES.STRING],
        birthday: [4, e.TYPES.STRING],
      }),
      (Te.name = "SyncActionValue$NotificationActivitySettingAction"),
      (Te.internalSpec = { notificationActivitySetting: [1, e.TYPES.ENUM, $] }),
      (De.name = "SyncActionValue$WaffleAccountLinkStateAction"),
      (De.internalSpec = { linkState: [2, e.TYPES.ENUM, P] }),
      (xe.name = "SyncActionValue$MerchantPaymentPartnerAction"),
      (xe.internalSpec = {
        status: [1, e.FLAGS.REQUIRED | e.TYPES.ENUM, N],
        country: [2, e.FLAGS.REQUIRED | e.TYPES.STRING],
        gatewayName: [3, e.TYPES.STRING],
        credentialId: [4, e.TYPES.STRING],
      }),
      ($e.name = "SyncActionValue$FavoritesAction"),
      ($e.internalSpec = {
        favorites: [1, e.FLAGS.REPEATED | e.TYPES.MESSAGE, Pe],
      }),
      (Pe.name = "SyncActionValue$FavoritesAction$Favorite"),
      (Pe.internalSpec = { id: [1, e.TYPES.STRING] }),
      (Ne.name = "SyncActionValue$NoteEditAction"),
      (Ne.internalSpec = {
        type: [1, e.TYPES.ENUM, M],
        chatJid: [2, e.TYPES.STRING],
        createdAt: [3, e.TYPES.INT64],
        deleted: [4, e.TYPES.BOOL],
        unstructuredContent: [5, e.TYPES.STRING],
      }),
      (Me.name =
        "SyncActionValue$PrivacySettingChannelsPersonalisedRecommendationAction"),
      (Me.internalSpec = { isUserOptedOut: [1, e.TYPES.BOOL] }),
      (we.name = "SyncActionValue$PrivacySettingDisableLinkPreviewsAction"),
      (we.internalSpec = { isPreviewsDisabled: [1, e.TYPES.BOOL] }),
      (Ae.name = "SyncActionValue$WamoUserIdentifierAction"),
      (Ae.internalSpec = { identifier: [1, e.TYPES.STRING] }),
      (Fe.name = "SyncActionValue$BubbleLockMessageAction"),
      (Fe.internalSpec = { locked: [1, e.TYPES.BOOL] }),
      (Oe.name = "SyncActionValue$LockChatAction"),
      (Oe.internalSpec = { locked: [1, e.TYPES.BOOL] }),
      (Be.name = "SyncActionValue$CustomPaymentMethodsAction"),
      (Be.internalSpec = {
        customPaymentMethods: [1, e.FLAGS.REPEATED | e.TYPES.MESSAGE, We],
      }),
      (We.name = "SyncActionValue$CustomPaymentMethod"),
      (We.internalSpec = {
        credentialId: [1, e.FLAGS.REQUIRED | e.TYPES.STRING],
        country: [2, e.FLAGS.REQUIRED | e.TYPES.STRING],
        type: [3, e.FLAGS.REQUIRED | e.TYPES.STRING],
        metadata: [4, e.FLAGS.REPEATED | e.TYPES.MESSAGE, qe],
      }),
      (qe.name = "SyncActionValue$CustomPaymentMethodMetadata"),
      (qe.internalSpec = {
        key: [1, e.FLAGS.REQUIRED | e.TYPES.STRING],
        value: [2, e.FLAGS.REQUIRED | e.TYPES.STRING],
      }),
      (Ue.name = "SyncActionValue$PaymentInfoAction"),
      (Ue.internalSpec = { cpi: [1, e.TYPES.STRING] }),
      (Ve.name = "SyncActionValue$LabelReorderingAction"),
      (Ve.internalSpec = {
        sortedLabelIds: [1, e.FLAGS.REPEATED | e.TYPES.INT32],
      }),
      (He.name = "SyncActionValue$DeleteIndividualCallLogAction"),
      (He.internalSpec = {
        peerJid: [1, e.TYPES.STRING],
        isIncoming: [2, e.TYPES.BOOL],
      }),
      (Ge.name = "SyncActionValue$BotWelcomeRequestAction"),
      (Ge.internalSpec = { isSent: [1, e.TYPES.BOOL] }),
      (ze.name = "SyncActionValue$NewsletterSavedInterestsAction"),
      (ze.internalSpec = { newsletterSavedInterests: [1, e.TYPES.STRING] }),
      (je.name = "SyncActionValue$MusicUserIdAction"),
      (je.internalSpec = {
        musicUserId: [1, e.TYPES.STRING],
        music_user_id_map: [2, e.TYPES.MAP, [e.TYPES.STRING, e.TYPES.STRING]],
      }),
      (Ke.name = "SyncActionValue$StatusPrivacyAction"),
      (Ke.internalSpec = {
        mode: [1, e.TYPES.ENUM, w],
        userJid: [2, e.FLAGS.REPEATED | e.TYPES.STRING],
        shareToFb: [3, e.TYPES.BOOL],
        shareToIg: [4, e.TYPES.BOOL],
        customLists: [5, e.FLAGS.REPEATED | e.TYPES.MESSAGE, Qe],
        modes: [6, e.FLAGS.REPEATED | e.TYPES.ENUM, w],
      }),
      (Qe.name = "SyncActionValue$StatusPrivacyAction$CustomList"),
      (Qe.internalSpec = {
        listId: [1, e.TYPES.STRING],
        name: [2, e.TYPES.STRING],
        emoji: [3, e.TYPES.STRING],
        isSelected: [4, e.TYPES.BOOL],
        userJid: [5, e.FLAGS.REPEATED | e.TYPES.STRING],
      }),
      (Xe.name = "SyncActionValue$UGCBot"),
      (Xe.internalSpec = { definition: [1, e.TYPES.BYTES] }),
      (Ye.name = "SyncActionValue$CallLogAction"),
      (Ye.internalSpec = { callLogRecord: [1, e.TYPES.MESSAGE, H] }),
      (Je.name = "SyncActionValue$PrivacySettingRelayAllCalls"),
      (Je.internalSpec = { isEnabled: [1, e.TYPES.BOOL] }),
      (Ze.name = "SyncActionValue$DetectedOutcomesStatusAction"),
      (Ze.internalSpec = { isEnabled: [1, e.TYPES.BOOL] }),
      (et.name = "SyncActionValue$ExternalWebBetaAction"),
      (et.internalSpec = { isOptIn: [1, e.TYPES.BOOL] }),
      (tt.name = "SyncActionValue$MarketingMessageBroadcastAction"),
      (tt.internalSpec = { repliedCount: [1, e.TYPES.INT32] }),
      (nt.name = "SyncActionValue$MarketingMessageAction"),
      (nt.internalSpec = {
        name: [1, e.TYPES.STRING],
        message: [2, e.TYPES.STRING],
        type: [3, e.TYPES.ENUM, A],
        createdAt: [4, e.TYPES.INT64],
        lastSentAt: [5, e.TYPES.INT64],
        isDeleted: [6, e.TYPES.BOOL],
        mediaId: [7, e.TYPES.STRING],
      }),
      (rt.name = "SyncActionValue$UsernameChatStartModeAction"),
      (rt.internalSpec = { chatStartMode: [1, e.TYPES.ENUM, F] }),
      (ot.name = "SyncActionValue$PnForLidChatAction"),
      (ot.internalSpec = { pnJid: [1, e.TYPES.STRING] }),
      (at.name = "SyncActionValue$ChatAssignmentOpenedStatusAction"),
      (at.internalSpec = { chatOpened: [1, e.TYPES.BOOL] }),
      (it.name = "SyncActionValue$ChatAssignmentAction"),
      (it.internalSpec = { deviceAgentId: [1, e.TYPES.STRING] }),
      (lt.name = "SyncActionValue$StickerAction"),
      (lt.internalSpec = {
        url: [1, e.TYPES.STRING],
        fileEncSha256: [2, e.TYPES.BYTES],
        mediaKey: [3, e.TYPES.BYTES],
        mimetype: [4, e.TYPES.STRING],
        height: [5, e.TYPES.UINT32],
        width: [6, e.TYPES.UINT32],
        directPath: [7, e.TYPES.STRING],
        fileLength: [8, e.TYPES.UINT64],
        isFavorite: [9, e.TYPES.BOOL],
        deviceIdHint: [10, e.TYPES.UINT32],
        isLottie: [11, e.TYPES.BOOL],
        imageHash: [12, e.TYPES.STRING],
        isAvatarSticker: [13, e.TYPES.BOOL],
      }),
      (st.name = "SyncActionValue$RemoveRecentStickerAction"),
      (st.internalSpec = { lastStickerSentTs: [1, e.TYPES.INT64] }),
      (ut.name = "SyncActionValue$PrimaryVersionAction"),
      (ut.internalSpec = { version: [1, e.TYPES.STRING] }),
      (ct.name = "SyncActionValue$NuxAction"),
      (ct.internalSpec = { acknowledged: [1, e.TYPES.BOOL] }),
      (dt.name = "SyncActionValue$TimeFormatAction"),
      (dt.internalSpec = { isTwentyFourHourFormatEnabled: [1, e.TYPES.BOOL] }),
      (mt.name = "SyncActionValue$UserStatusMuteAction"),
      (mt.internalSpec = { muted: [1, e.TYPES.BOOL] }),
      (pt.name = "SyncActionValue$SubscriptionAction"),
      (pt.internalSpec = {
        isDeactivated: [1, e.TYPES.BOOL],
        isAutoRenewing: [2, e.TYPES.BOOL],
        expirationDate: [3, e.TYPES.INT64],
      }),
      (_t.name = "SyncActionValue$AgentAction"),
      (_t.internalSpec = {
        name: [1, e.TYPES.STRING],
        deviceId: [2, e.TYPES.INT32],
        isDeleted: [3, e.TYPES.BOOL],
      }),
      (ft.name = "SyncActionValue$AndroidUnsupportedActions"),
      (ft.internalSpec = { allowed: [1, e.TYPES.BOOL] }),
      (gt.name = "SyncActionValue$PrimaryFeature"),
      (gt.internalSpec = { flags: [1, e.FLAGS.REPEATED | e.TYPES.STRING] }),
      (ht.name = "SyncActionValue$KeyExpiration"),
      (ht.internalSpec = { expiredKeyEpoch: [1, e.TYPES.INT32] }),
      (yt.name = "SyncActionValue$SyncActionMessage"),
      (yt.internalSpec = {
        key: [
          1,
          e.TYPES.MESSAGE,
          o("WAWebProtobufsProtocol.pb").MessageKeySpec,
        ],
        timestamp: [2, e.TYPES.INT64],
      }),
      (Ct.name = "SyncActionValue$SyncActionMessageRange"),
      (Ct.internalSpec = {
        lastMessageTimestamp: [1, e.TYPES.INT64],
        lastSystemMessageTimestamp: [2, e.TYPES.INT64],
        messages: [3, e.FLAGS.REPEATED | e.TYPES.MESSAGE, yt],
      }),
      (bt.name = "SyncActionValue$UnarchiveChatsSetting"),
      (bt.internalSpec = { unarchiveChats: [1, e.TYPES.BOOL] }),
      (vt.name = "SyncActionValue$DeleteChatAction"),
      (vt.internalSpec = { messageRange: [1, e.TYPES.MESSAGE, Ct] }),
      (St.name = "SyncActionValue$ClearChatAction"),
      (St.internalSpec = { messageRange: [1, e.TYPES.MESSAGE, Ct] }),
      (Rt.name = "SyncActionValue$MarkChatAsReadAction"),
      (Rt.internalSpec = {
        read: [1, e.TYPES.BOOL],
        messageRange: [2, e.TYPES.MESSAGE, Ct],
      }),
      (Lt.name = "SyncActionValue$DeleteMessageForMeAction"),
      (Lt.internalSpec = {
        deleteMedia: [1, e.TYPES.BOOL],
        messageTimestamp: [2, e.TYPES.INT64],
      }),
      (Et.name = "SyncActionValue$ArchiveChatAction"),
      (Et.internalSpec = {
        archived: [1, e.TYPES.BOOL],
        messageRange: [2, e.TYPES.MESSAGE, Ct],
      }),
      (kt.name = "SyncActionValue$RecentEmojiWeightsAction"),
      (kt.internalSpec = {
        weights: [1, e.FLAGS.REPEATED | e.TYPES.MESSAGE, V],
      }),
      (It.name = "SyncActionValue$LabelEditAction"),
      (It.internalSpec = {
        name: [1, e.TYPES.STRING],
        color: [2, e.TYPES.INT32],
        predefinedId: [3, e.TYPES.INT32],
        deleted: [4, e.TYPES.BOOL],
        orderIndex: [5, e.TYPES.INT32],
        isActive: [6, e.TYPES.BOOL],
        type: [7, e.TYPES.ENUM, O],
        isImmutable: [8, e.TYPES.BOOL],
        muteEndTimeMs: [9, e.TYPES.INT64],
      }),
      (Tt.name = "SyncActionValue$LabelSublistAction"),
      (Tt.internalSpec = { subListId: [1, e.TYPES.INT32] }),
      (Dt.name = "SyncActionValue$LabelAssociationAction"),
      (Dt.internalSpec = {
        labeled: [1, e.TYPES.BOOL],
        modelMetaData: [2, e.TYPES.STRING],
      }),
      (xt.name = "SyncActionValue$QuickReplyAction"),
      (xt.internalSpec = {
        shortcut: [1, e.TYPES.STRING],
        message: [2, e.TYPES.STRING],
        keywords: [3, e.FLAGS.REPEATED | e.TYPES.STRING],
        count: [4, e.TYPES.INT32],
        deleted: [5, e.TYPES.BOOL],
        associatedLabelIds: [6, e.FLAGS.REPEATED | e.TYPES.STRING],
      }),
      ($t.name = "SyncActionValue$LocaleSetting"),
      ($t.internalSpec = { locale: [1, e.TYPES.STRING] }),
      (Pt.name = "SyncActionValue$PushNameSetting"),
      (Pt.internalSpec = { name: [1, e.TYPES.STRING] }),
      (Nt.name = "SyncActionValue$PinAction"),
      (Nt.internalSpec = { pinned: [1, e.TYPES.BOOL] }),
      (Mt.name = "SyncActionValue$MuteAction"),
      (Mt.internalSpec = {
        muted: [1, e.TYPES.BOOL],
        muteEndTimestamp: [2, e.TYPES.INT64],
        autoMuted: [3, e.TYPES.BOOL],
        muteEveryoneMentionEndTimestamp: [4, e.TYPES.INT64],
      }),
      (wt.name = "SyncActionValue$SharedDeviceSecretAction"),
      (wt.internalSpec = {
        secret: [1, e.TYPES.BYTES],
        ttlMs: [2, e.TYPES.INT64],
      }),
      (At.name = "SyncActionValue$SharedDeviceAllowlistAction"),
      (At.internalSpec = { allowed: [1, e.TYPES.BOOL] }),
      (Ft.name = "SyncActionValue$ContactAction"),
      (Ft.internalSpec = {
        fullName: [1, e.TYPES.STRING],
        firstName: [2, e.TYPES.STRING],
        lidJid: [3, e.TYPES.STRING],
        saveOnPrimaryAddressbook: [4, e.TYPES.BOOL],
        pnJid: [5, e.TYPES.STRING],
        username: [6, e.TYPES.STRING],
        birthday: [7, e.TYPES.STRING],
      }),
      (Ot.name = "SyncActionValue$StarAction"),
      (Ot.internalSpec = { starred: [1, e.TYPES.BOOL] }),
      (Bt.name = "SyncActionData"),
      (Bt.internalSpec = {
        index: [1, e.TYPES.BYTES],
        value: [2, e.TYPES.MESSAGE, j],
        padding: [3, e.TYPES.BYTES],
        version: [4, e.TYPES.INT32],
      }),
      (Wt.name = "PatchDebugData"),
      (Wt.internalSpec = {
        currentLthash: [1, e.TYPES.BYTES],
        newLthash: [2, e.TYPES.BYTES],
        patchVersion: [3, e.TYPES.BYTES],
        collectionName: [4, e.TYPES.BYTES],
        firstFourBytesFromAHashOfSnapshotMacKey: [5, e.TYPES.BYTES],
        newLthashSubtract: [6, e.TYPES.BYTES],
        numberAdd: [7, e.TYPES.INT32],
        numberRemove: [8, e.TYPES.INT32],
        numberOverride: [9, e.TYPES.INT32],
        senderPlatform: [10, e.TYPES.ENUM, B],
        isSenderPrimary: [11, e.TYPES.BOOL],
      }),
      (l.CollectionName = u),
      (l.MutationProps = c),
      (l.CallLogRecord$CallType = d),
      (l.CallLogRecord$SilenceReason = m),
      (l.CallLogRecord$CallResult = p),
      (l.SyncActionValue$CommunityNestingStateAction$NestingState = _),
      (l.SyncActionValue$GroupHistoryToggleAction$GroupHistoryToggleMode = f),
      (l.SyncActionValue$WASARootSecretAction$RootSecretEntry$Status = g),
      (l.SyncActionValue$SettingsSyncAction$MediaAutoDownloadQualitySetting =
        h),
      (l.SyncActionValue$SettingsSyncAction$MediaQualitySetting = y),
      (l.SyncActionValue$SettingsSyncAction$DisplayMode = C),
      (l.SyncActionValue$SettingsSyncAction$SettingKey = b),
      (l.SyncActionValue$SettingsSyncAction$SettingPlatform = v),
      (l.SyncActionValue$InteractiveMessageAction$InteractiveMessageActionMode =
        S),
      (l.SyncActionValue$PrivateProcessingSettingAction$PrivateProcessingStatus =
        R),
      (l.SyncActionValue$AvatarUpdatedAction$AvatarEventType = L),
      (l.SyncActionValue$BizAISettingsNudgeAction$BizAISettingsCategory = E),
      (l.SyncActionValue$MaibaAIFeaturesControlAction$MaibaAIReplyMode = k),
      (l.SyncActionValue$MaibaAIFeaturesControlAction$MaibaAIFeatureStatus = I),
      (l.SyncActionValue$BusinessBroadcastCampaignBBProStatus = T),
      (l.SyncActionValue$BusinessBroadcastCampaignStatus = D),
      (l.SyncActionValue$PaymentTosAction$PaymentNotice = x),
      (l.SyncActionValue$NotificationActivitySettingAction$NotificationActivitySetting =
        $),
      (l.SyncActionValue$WaffleAccountLinkStateAction$AccountLinkState = P),
      (l.SyncActionValue$MerchantPaymentPartnerAction$Status = N),
      (l.SyncActionValue$NoteEditAction$NoteType = M),
      (l.SyncActionValue$StatusPrivacyAction$StatusDistributionMode = w),
      (l.SyncActionValue$MarketingMessageAction$MarketingMessagePrototypeType =
        A),
      (l.SyncActionValue$UsernameChatStartModeAction$ChatStartMode = F),
      (l.SyncActionValue$LabelEditAction$ListType = O),
      (l.PatchDebugData$Platform = B),
      (l.MutationProps$MutationName = W),
      (l.getMutationProps$CollectionName = q),
      (l.CollectionName$CollectionNameStr = U),
      (l.RecentEmojiWeightSpec = V),
      (l.CallLogRecordSpec = H),
      (l.CallLogRecord$ParticipantInfoSpec = G),
      (l.CallLogRecord$GuestInfoSpec = z),
      (l.SyncActionValueSpec = j),
      (l.SyncActionValue$CommunityNestingStateActionSpec = K),
      (l.SyncActionValue$BBProPendingCustomerBaseActionSpec = Q),
      (l.SyncActionValue$GroupHistoryToggleActionSpec = X),
      (l.SyncActionValue$BusinessFolderActivationActionSpec = Y),
      (l.SyncActionValue$CtwaMessageReceivedActionSpec = J),
      (l.SyncActionValue$HatchCVMSecretActionSpec = Z),
      (l.SyncActionValue$WASARootSecretActionSpec = ee),
      (l.SyncActionValue$WASARootSecretAction$RootSecretEntrySpec = te),
      (l.SyncActionValue$CoexV2VersionActionSpec = ne),
      (l.SyncActionValue$SubscriptionsSyncV2ActionSpec = re),
      (l.SyncActionValue$SubscriptionsSyncV2Action$PaidFeatureSpec = oe),
      (l.SyncActionValue$SubscriptionsSyncV2Action$SubscriptionInfoSpec = ae),
      (l.SyncActionValue$ContactManagerMetadataActionSpec = ie),
      (l.SyncActionValue$CustomerDataActionSpec = le),
      (l.SyncActionValue$BusinessBroadcastInsightsActionSpec = se),
      (l.SyncActionValue$SettingsSyncActionSpec = ue),
      (l.SyncActionValue$AutoOrganizeBusinessChatSettingSpec = ce),
      (l.SyncActionValue$NctSaltSyncActionSpec = de),
      (l.SyncActionValue$InteractiveMessageActionSpec = me),
      (l.SyncActionValue$ThreadPinActionSpec = pe),
      (l.SyncActionValue$AiThreadRenameActionSpec = _e),
      (l.SyncActionValue$PrivateProcessingSettingActionSpec = fe),
      (l.SyncActionValue$AvatarUpdatedActionSpec = ge),
      (l.SyncActionValue$StatusPostOptInNotificationPreferencesActionSpec = he),
      (l.SyncActionValue$BizAISettingsNudgeActionSpec = ye),
      (l.SyncActionValue$MaibaAIFeaturesControlActionSpec = Ce),
      (l.SyncActionValue$BroadcastListParticipantSpec = be),
      (l.SyncActionValue$BusinessBroadcastCampaignActionSpec = ve),
      (l.SyncActionValue$BusinessBroadcastListActionSpec = Se),
      (l.SyncActionValue$BusinessBroadcastAssociationActionSpec = Re),
      (l.SyncActionValue$PaymentTosActionSpec = Le),
      (l.SyncActionValue$CtwaPerCustomerDataSharingActionSpec = Ee),
      (l.SyncActionValue$OutContactActionSpec = ke),
      (l.SyncActionValue$LidContactActionSpec = Ie),
      (l.SyncActionValue$NotificationActivitySettingActionSpec = Te),
      (l.SyncActionValue$WaffleAccountLinkStateActionSpec = De),
      (l.SyncActionValue$MerchantPaymentPartnerActionSpec = xe),
      (l.SyncActionValue$FavoritesActionSpec = $e),
      (l.SyncActionValue$FavoritesAction$FavoriteSpec = Pe),
      (l.SyncActionValue$NoteEditActionSpec = Ne),
      (l.SyncActionValue$PrivacySettingChannelsPersonalisedRecommendationActionSpec =
        Me),
      (l.SyncActionValue$PrivacySettingDisableLinkPreviewsActionSpec = we),
      (l.SyncActionValue$WamoUserIdentifierActionSpec = Ae),
      (l.SyncActionValue$BubbleLockMessageActionSpec = Fe),
      (l.SyncActionValue$LockChatActionSpec = Oe),
      (l.SyncActionValue$CustomPaymentMethodsActionSpec = Be),
      (l.SyncActionValue$CustomPaymentMethodSpec = We),
      (l.SyncActionValue$CustomPaymentMethodMetadataSpec = qe),
      (l.SyncActionValue$PaymentInfoActionSpec = Ue),
      (l.SyncActionValue$LabelReorderingActionSpec = Ve),
      (l.SyncActionValue$DeleteIndividualCallLogActionSpec = He),
      (l.SyncActionValue$BotWelcomeRequestActionSpec = Ge),
      (l.SyncActionValue$NewsletterSavedInterestsActionSpec = ze),
      (l.SyncActionValue$MusicUserIdActionSpec = je),
      (l.SyncActionValue$StatusPrivacyActionSpec = Ke),
      (l.SyncActionValue$StatusPrivacyAction$CustomListSpec = Qe),
      (l.SyncActionValue$UGCBotSpec = Xe),
      (l.SyncActionValue$CallLogActionSpec = Ye),
      (l.SyncActionValue$PrivacySettingRelayAllCallsSpec = Je),
      (l.SyncActionValue$DetectedOutcomesStatusActionSpec = Ze),
      (l.SyncActionValue$ExternalWebBetaActionSpec = et),
      (l.SyncActionValue$MarketingMessageBroadcastActionSpec = tt),
      (l.SyncActionValue$MarketingMessageActionSpec = nt),
      (l.SyncActionValue$UsernameChatStartModeActionSpec = rt),
      (l.SyncActionValue$PnForLidChatActionSpec = ot),
      (l.SyncActionValue$ChatAssignmentOpenedStatusActionSpec = at),
      (l.SyncActionValue$ChatAssignmentActionSpec = it),
      (l.SyncActionValue$StickerActionSpec = lt),
      (l.SyncActionValue$RemoveRecentStickerActionSpec = st),
      (l.SyncActionValue$PrimaryVersionActionSpec = ut),
      (l.SyncActionValue$NuxActionSpec = ct),
      (l.SyncActionValue$TimeFormatActionSpec = dt),
      (l.SyncActionValue$UserStatusMuteActionSpec = mt),
      (l.SyncActionValue$SubscriptionActionSpec = pt),
      (l.SyncActionValue$AgentActionSpec = _t),
      (l.SyncActionValue$AndroidUnsupportedActionsSpec = ft),
      (l.SyncActionValue$PrimaryFeatureSpec = gt),
      (l.SyncActionValue$KeyExpirationSpec = ht),
      (l.SyncActionValue$SyncActionMessageSpec = yt),
      (l.SyncActionValue$SyncActionMessageRangeSpec = Ct),
      (l.SyncActionValue$UnarchiveChatsSettingSpec = bt),
      (l.SyncActionValue$DeleteChatActionSpec = vt),
      (l.SyncActionValue$ClearChatActionSpec = St),
      (l.SyncActionValue$MarkChatAsReadActionSpec = Rt),
      (l.SyncActionValue$DeleteMessageForMeActionSpec = Lt),
      (l.SyncActionValue$ArchiveChatActionSpec = Et),
      (l.SyncActionValue$RecentEmojiWeightsActionSpec = kt),
      (l.SyncActionValue$LabelEditActionSpec = It),
      (l.SyncActionValue$LabelSublistActionSpec = Tt),
      (l.SyncActionValue$LabelAssociationActionSpec = Dt),
      (l.SyncActionValue$QuickReplyActionSpec = xt),
      (l.SyncActionValue$LocaleSettingSpec = $t),
      (l.SyncActionValue$PushNameSettingSpec = Pt),
      (l.SyncActionValue$PinActionSpec = Nt),
      (l.SyncActionValue$MuteActionSpec = Mt),
      (l.SyncActionValue$SharedDeviceSecretActionSpec = wt),
      (l.SyncActionValue$SharedDeviceAllowlistActionSpec = At),
      (l.SyncActionValue$ContactActionSpec = Ft),
      (l.SyncActionValue$StarActionSpec = Ot),
      (l.SyncActionDataSpec = Bt),
      (l.PatchDebugDataSpec = Wt));
  },
  98,
);
