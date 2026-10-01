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
      _ = s({
        GROUP_HISTORY_TOGGLE_MODE_UNKNOWN: 0,
        GROUP_HISTORY_TOGGLE_MODE_ON: 1,
        GROUP_HISTORY_TOGGLE_MODE_OFF: 2,
      }),
      f = s({ INACTIVE: 0, ACTIVE: 1 }),
      g = s({ MEDIA_QUALITY_UNKNOWN: 0, STANDARD: 1, HD: 2 }),
      h = s({
        DISPLAY_MODE_UNKNOWN: 0,
        ALWAYS: 1,
        NEVER: 2,
        ONLY_WHEN_APP_IS_OPEN: 3,
      }),
      y = s({
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
      }),
      C = s({ PLATFORM_UNKNOWN: 0, WEB: 1, HYBRID: 2, WINDOWS: 3, MAC: 4 }),
      b = s({ DISABLE_CTA: 1 }),
      v = s({ UNDEFINED: 0, ENABLED: 1, DISABLED: 2 }),
      S = s({ UPDATED: 0, CREATED: 1, DELETED: 2 }),
      R = s({
        UNKNOWN: 0,
        INSTRUCTIONS: 1,
        RESPONSE_SETTINGS: 2,
        EXAMPLE_RESPONSES: 3,
        KNOWLEDGE: 4,
        LEAD_GEN: 5,
        HANDOFF_REMOVAL_TIMING: 6,
      }),
      L = s({ MUTED: 0, AI_AGENT: 1, SUGGESTIONS: 2 }),
      E = s({ ENABLED: 0, ENABLED_HAS_LEARNING: 1, DISABLED: 2 }),
      k = s({
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
      I = s({ DRAFT: 1, SCHEDULED: 2, PROCESSING: 3, FAILED: 4, SENT: 5 }),
      T = s({ BR_PAY_PRIVACY_POLICY: 0 }),
      D = s({
        DEFAULT_ALL_MESSAGES: 0,
        ALL_MESSAGES: 1,
        HIGHLIGHTS: 2,
        DEFAULT_HIGHLIGHTS: 3,
      }),
      x = s({ ACTIVE: 0, PAUSED: 1, UNLINKED: 2 }),
      $ = s({ ACTIVE: 0, INACTIVE: 1 }),
      P = s({ UNSTRUCTURED: 1, STRUCTURED: 2 }),
      N = s({
        ALLOW_LIST: 0,
        DENY_LIST: 1,
        CONTACTS: 2,
        CLOSE_FRIENDS: 3,
        CUSTOM_LIST: 4,
      }),
      M = s({ PERSONALIZED: 0 }),
      w = s({ LID: 1, PN: 2 }),
      A = s({
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
      }),
      F = s({
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
      O = s({
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
        SHARE_OWN_PN: "shareOwnPn",
        BUSINESS_BROADCAST_ACTION: "broadcast",
        AI_THREAD_DELETE_ACTION: "ai_thread_delete",
      });
    function B(e) {
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
                                                                                                                          c.BB_PRO_PENDING_CUSTOMER_BASE_ACTION
                                                                                                                      ? u.REGULAR_LOW
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
    var W = s({
        REGULAR: "regular",
        REGULAR_LOW: "regular_low",
        REGULAR_HIGH: "regular_high",
        CRITICAL_BLOCK: "critical_block",
        CRITICAL_UNBLOCK_LOW: "critical_unblock_low",
      }),
      q = {},
      U = {},
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
      wt = {};
    ((q.name = "RecentEmojiWeight"),
      (q.internalSpec = {
        emoji: [1, (e = o("WAProtoConst")).TYPES.STRING],
        weight: [2, e.TYPES.FLOAT],
      }),
      (U.name = "CallLogRecord"),
      (U.internalSpec = {
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
        participants: [14, e.FLAGS.REPEATED | e.TYPES.MESSAGE, V],
        callType: [15, e.TYPES.ENUM, d],
      }),
      (V.name = "CallLogRecord$ParticipantInfo"),
      (V.internalSpec = {
        userJid: [1, e.TYPES.STRING],
        callResult: [2, e.TYPES.ENUM, p],
        guestInfo: [3, e.TYPES.MESSAGE, H],
      }),
      (H.name = "CallLogRecord$GuestInfo"),
      (H.internalSpec = { pushName: [1, e.TYPES.STRING] }),
      (G.name = "SyncActionValue"),
      (G.internalSpec = {
        timestamp: [1, e.TYPES.INT64],
        starAction: [2, e.TYPES.MESSAGE, Nt],
        contactAction: [3, e.TYPES.MESSAGE, Pt],
        muteAction: [4, e.TYPES.MESSAGE, xt],
        pinAction: [5, e.TYPES.MESSAGE, Dt],
        pushNameSetting: [7, e.TYPES.MESSAGE, Tt],
        quickReplyAction: [8, e.TYPES.MESSAGE, kt],
        recentEmojiWeightsAction: [11, e.TYPES.MESSAGE, St],
        labelEditAction: [14, e.TYPES.MESSAGE, Rt],
        labelAssociationAction: [15, e.TYPES.MESSAGE, Et],
        localeSetting: [16, e.TYPES.MESSAGE, It],
        archiveChatAction: [17, e.TYPES.MESSAGE, vt],
        deleteMessageForMeAction: [18, e.TYPES.MESSAGE, bt],
        keyExpiration: [19, e.TYPES.MESSAGE, pt],
        markChatAsReadAction: [20, e.TYPES.MESSAGE, Ct],
        clearChatAction: [21, e.TYPES.MESSAGE, yt],
        deleteChatAction: [22, e.TYPES.MESSAGE, ht],
        unarchiveChatsSetting: [23, e.TYPES.MESSAGE, gt],
        primaryFeature: [24, e.TYPES.MESSAGE, mt],
        androidUnsupportedActions: [26, e.TYPES.MESSAGE, dt],
        agentAction: [27, e.TYPES.MESSAGE, ct],
        subscriptionAction: [28, e.TYPES.MESSAGE, ut],
        userStatusMuteAction: [29, e.TYPES.MESSAGE, st],
        timeFormatAction: [30, e.TYPES.MESSAGE, lt],
        nuxAction: [31, e.TYPES.MESSAGE, it],
        primaryVersionAction: [32, e.TYPES.MESSAGE, at],
        stickerAction: [33, e.TYPES.MESSAGE, rt],
        removeRecentStickerAction: [34, e.TYPES.MESSAGE, ot],
        chatAssignment: [35, e.TYPES.MESSAGE, nt],
        chatAssignmentOpenedStatus: [36, e.TYPES.MESSAGE, tt],
        pnForLidChatAction: [37, e.TYPES.MESSAGE, et],
        marketingMessageAction: [38, e.TYPES.MESSAGE, Je],
        marketingMessageBroadcastAction: [39, e.TYPES.MESSAGE, Ye],
        externalWebBetaAction: [40, e.TYPES.MESSAGE, Xe],
        privacySettingRelayAllCalls: [41, e.TYPES.MESSAGE, Ke],
        callLogAction: [42, e.TYPES.MESSAGE, je],
        ugcBot: [43, e.TYPES.MESSAGE, ze],
        statusPrivacy: [44, e.TYPES.MESSAGE, He],
        botWelcomeRequestAction: [45, e.TYPES.MESSAGE, qe],
        deleteIndividualCallLog: [46, e.TYPES.MESSAGE, We],
        labelReorderingAction: [47, e.TYPES.MESSAGE, Be],
        paymentInfoAction: [48, e.TYPES.MESSAGE, Oe],
        customPaymentMethodsAction: [49, e.TYPES.MESSAGE, we],
        lockChatAction: [50, e.TYPES.MESSAGE, Me],
        chatLockSettings: [
          51,
          e.TYPES.MESSAGE,
          o("WAWebProtobufsChatLockSettings.pb").ChatLockSettingsSpec,
        ],
        wamoUserIdentifierAction: [52, e.TYPES.MESSAGE, Pe],
        privacySettingDisableLinkPreviewsAction: [53, e.TYPES.MESSAGE, $e],
        deviceCapabilities: [
          54,
          e.TYPES.MESSAGE,
          o("WAWebProtobufsDeviceCapabilities.pb").DeviceCapabilitiesSpec,
        ],
        noteEditAction: [55, e.TYPES.MESSAGE, De],
        favoritesAction: [56, e.TYPES.MESSAGE, Ie],
        merchantPaymentPartnerAction: [57, e.TYPES.MESSAGE, ke],
        waffleAccountLinkStateAction: [58, e.TYPES.MESSAGE, Ee],
        usernameChatStartMode: [59, e.TYPES.MESSAGE, Ze],
        notificationActivitySettingAction: [60, e.TYPES.MESSAGE, Le],
        lidContactAction: [61, e.TYPES.MESSAGE, Re],
        ctwaPerCustomerDataSharingAction: [62, e.TYPES.MESSAGE, ve],
        paymentTosAction: [63, e.TYPES.MESSAGE, be],
        privacySettingChannelsPersonalisedRecommendationAction: [
          64,
          e.TYPES.MESSAGE,
          xe,
        ],
        detectedOutcomesStatusAction: [66, e.TYPES.MESSAGE, Qe],
        maibaAiFeaturesControlAction: [68, e.TYPES.MESSAGE, fe],
        businessBroadcastListAction: [69, e.TYPES.MESSAGE, ye],
        musicUserIdAction: [70, e.TYPES.MESSAGE, Ve],
        statusPostOptInNotificationPreferencesAction: [71, e.TYPES.MESSAGE, pe],
        avatarUpdatedAction: [72, e.TYPES.MESSAGE, me],
        privateProcessingSettingAction: [74, e.TYPES.MESSAGE, de],
        newsletterSavedInterestsAction: [75, e.TYPES.MESSAGE, Ue],
        aiThreadRenameAction: [76, e.TYPES.MESSAGE, ce],
        interactiveMessageAction: [77, e.TYPES.MESSAGE, se],
        settingsSyncAction: [78, e.TYPES.MESSAGE, ae],
        outContactAction: [79, e.TYPES.MESSAGE, Se],
        nctSaltSyncAction: [80, e.TYPES.MESSAGE, le],
        businessBroadcastCampaignAction: [81, e.TYPES.MESSAGE, he],
        businessBroadcastInsightsAction: [82, e.TYPES.MESSAGE, oe],
        customerDataAction: [83, e.TYPES.MESSAGE, re],
        subscriptionsSyncV2Action: [84, e.TYPES.MESSAGE, Z],
        threadPinAction: [85, e.TYPES.MESSAGE, ue],
        autoOrganizeBusinessChatSetting: [86, e.TYPES.MESSAGE, ie],
        bizAiSettingsNudgeAction: [87, e.TYPES.MESSAGE, _e],
        coexV2VersionAction: [88, e.TYPES.MESSAGE, J],
        wasaRootSecretAction: [89, e.TYPES.MESSAGE, X],
        bubbleLockMessageAction: [90, e.TYPES.MESSAGE, Ne],
        labelSublistAction: [91, e.TYPES.MESSAGE, Lt],
        deviceCapabilitiesV2: [
          92,
          e.TYPES.MESSAGE,
          o("WAWebProtobufsDeviceCapabilities.pb").DeviceCapabilitiesSpec,
        ],
        ctwaMessageReceivedAction: [93, e.TYPES.MESSAGE, Q],
        sharedDeviceAllowlistAction: [94, e.TYPES.MESSAGE, $t],
        contactManagerMetadataAction: [95, e.TYPES.MESSAGE, ne],
        businessFolderActivationAction: [96, e.TYPES.MESSAGE, K],
        groupHistoryToggleAction: [97, e.TYPES.MESSAGE, j],
        bbProPendingCustomerBaseAction: [98, e.TYPES.MESSAGE, z],
      }),
      (z.name = "SyncActionValue$BBProPendingCustomerBaseAction"),
      (z.internalSpec = { pending: [1, e.TYPES.BOOL] }),
      (j.name = "SyncActionValue$GroupHistoryToggleAction"),
      (j.internalSpec = { groupHistoryToggleMode: [1, e.TYPES.ENUM, _] }),
      (K.name = "SyncActionValue$BusinessFolderActivationAction"),
      (K.internalSpec = { activated: [1, e.TYPES.BOOL] }),
      (Q.name = "SyncActionValue$CtwaMessageReceivedAction"),
      (Q.internalSpec = { isCtwaMessageReceived: [1, e.TYPES.BOOL] }),
      (X.name = "SyncActionValue$WASARootSecretAction"),
      (X.internalSpec = {
        secrets: [1, e.FLAGS.REPEATED | e.TYPES.MESSAGE, Y],
      }),
      (Y.name = "SyncActionValue$WASARootSecretAction$RootSecretEntry"),
      (Y.internalSpec = {
        id: [1, e.TYPES.STRING],
        rootSecret: [2, e.TYPES.BYTES],
        epoch: [3, e.TYPES.INT64],
        status: [4, e.TYPES.ENUM, f],
      }),
      (J.name = "SyncActionValue$CoexV2VersionAction"),
      (J.internalSpec = { version: [1, e.TYPES.UINT64] }),
      (Z.name = "SyncActionValue$SubscriptionsSyncV2Action"),
      (Z.internalSpec = {
        subscriptions: [1, e.FLAGS.REPEATED | e.TYPES.MESSAGE, te],
        paidFeature: [2, e.FLAGS.REPEATED | e.TYPES.MESSAGE, ee],
      }),
      (ee.name = "SyncActionValue$SubscriptionsSyncV2Action$PaidFeature"),
      (ee.internalSpec = {
        name: [1, e.TYPES.STRING],
        enabled: [2, e.TYPES.BOOL],
        limit: [3, e.TYPES.INT32],
        expirationTime: [4, e.TYPES.INT64],
      }),
      (te.name = "SyncActionValue$SubscriptionsSyncV2Action$SubscriptionInfo"),
      (te.internalSpec = {
        id: [1, e.TYPES.STRING],
        tier: [2, e.TYPES.INT32],
        status: [3, e.TYPES.STRING],
        startTime: [4, e.TYPES.INT64],
        endTime: [5, e.TYPES.INT64],
        isPlatformChanged: [6, e.TYPES.BOOL],
        source: [7, e.TYPES.STRING],
        creationTime: [8, e.TYPES.INT64],
      }),
      (ne.name = "SyncActionValue$ContactManagerMetadataAction"),
      (ne.internalSpec = { isHidden: [1, e.TYPES.BOOL] }),
      (re.name = "SyncActionValue$CustomerDataAction"),
      (re.internalSpec = {
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
      (oe.name = "SyncActionValue$BusinessBroadcastInsightsAction"),
      (oe.internalSpec = {
        recipientCount: [1, e.TYPES.INT32],
        deliveredCount: [2, e.TYPES.INT32],
        readCount: [3, e.TYPES.INT32],
        repliedCount: [4, e.TYPES.INT32],
        quickReplyCount: [5, e.TYPES.INT32],
      }),
      (ae.name = "SyncActionValue$SettingsSyncAction"),
      (ae.internalSpec = {
        startAtLogin: [1, e.TYPES.BOOL],
        minimizeToTray: [2, e.TYPES.BOOL],
        language: [3, e.TYPES.STRING],
        replaceTextWithEmoji: [4, e.TYPES.BOOL],
        bannerNotificationDisplayMode: [5, e.TYPES.ENUM, h],
        unreadCounterBadgeDisplayMode: [6, e.TYPES.ENUM, h],
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
        mediaUploadQuality: [24, e.TYPES.ENUM, g],
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
      }),
      (ie.name = "SyncActionValue$AutoOrganizeBusinessChatSetting"),
      (ie.internalSpec = { autoOrganize: [1, e.TYPES.BOOL] }),
      (le.name = "SyncActionValue$NctSaltSyncAction"),
      (le.internalSpec = { salt: [1, e.TYPES.BYTES] }),
      (se.name = "SyncActionValue$InteractiveMessageAction"),
      (se.internalSpec = {
        type: [1, e.FLAGS.REQUIRED | e.TYPES.ENUM, b],
        agmId: [2, e.TYPES.STRING],
      }),
      (ue.name = "SyncActionValue$ThreadPinAction"),
      (ue.internalSpec = { pinned: [1, e.TYPES.BOOL] }),
      (ce.name = "SyncActionValue$AiThreadRenameAction"),
      (ce.internalSpec = { newTitle: [1, e.TYPES.STRING] }),
      (de.name = "SyncActionValue$PrivateProcessingSettingAction"),
      (de.internalSpec = { privateProcessingStatus: [1, e.TYPES.ENUM, v] }),
      (me.name = "SyncActionValue$AvatarUpdatedAction"),
      (me.internalSpec = {
        eventType: [1, e.TYPES.ENUM, S],
        recentAvatarStickers: [2, e.FLAGS.REPEATED | e.TYPES.MESSAGE, rt],
      }),
      (pe.name =
        "SyncActionValue$StatusPostOptInNotificationPreferencesAction"),
      (pe.internalSpec = { enabled: [1, e.TYPES.BOOL] }),
      (_e.name = "SyncActionValue$BizAISettingsNudgeAction"),
      (_e.internalSpec = {
        category: [1, e.TYPES.ENUM, R],
        version: [2, e.TYPES.INT64],
        updatedAtMs: [3, e.TYPES.INT64],
      }),
      (fe.name = "SyncActionValue$MaibaAIFeaturesControlAction"),
      (fe.internalSpec = {
        aiFeatureStatus: [1, e.TYPES.ENUM, E],
        aiReplyMode: [2, e.TYPES.ENUM, L],
      }),
      (ge.name = "SyncActionValue$BroadcastListParticipant"),
      (ge.internalSpec = {
        lidJid: [1, e.FLAGS.REQUIRED | e.TYPES.STRING],
        pnJid: [2, e.TYPES.STRING],
      }),
      (he.name = "SyncActionValue$BusinessBroadcastCampaignAction"),
      (he.internalSpec = {
        deviceId: [1, e.TYPES.INT32],
        adId: [2, e.TYPES.STRING],
        name: [3, e.TYPES.STRING],
        msgId: [4, e.TYPES.STRING],
        broadcastJid: [5, e.TYPES.STRING],
        reservedQuota: [6, e.TYPES.INT32],
        scheduledTimestamp: [7, e.TYPES.INT64],
        createTimestamp: [8, e.TYPES.INT64],
        status: [9, e.TYPES.ENUM, I],
        bbProStatus: [10, e.TYPES.ENUM, k],
        customAudienceFbid: [11, e.TYPES.STRING],
      }),
      (ye.name = "SyncActionValue$BusinessBroadcastListAction"),
      (ye.internalSpec = {
        deleted: [1, e.TYPES.BOOL],
        participants: [2, e.FLAGS.REPEATED | e.TYPES.MESSAGE, ge],
        listName: [3, e.TYPES.STRING],
        labelIds: [4, e.FLAGS.REPEATED | e.TYPES.STRING],
        audienceExpression: [5, e.TYPES.STRING],
        customAudienceFbid: [6, e.TYPES.STRING],
      }),
      (Ce.name = "SyncActionValue$BusinessBroadcastAssociationAction"),
      (Ce.internalSpec = { deleted: [1, e.TYPES.BOOL] }),
      (be.name = "SyncActionValue$PaymentTosAction"),
      (be.internalSpec = {
        paymentNotice: [1, e.FLAGS.REQUIRED | e.TYPES.ENUM, T],
        accepted: [2, e.FLAGS.REQUIRED | e.TYPES.BOOL],
      }),
      (ve.name = "SyncActionValue$CtwaPerCustomerDataSharingAction"),
      (ve.internalSpec = {
        isCtwaPerCustomerDataSharingEnabled: [1, e.TYPES.BOOL],
      }),
      (Se.name = "SyncActionValue$OutContactAction"),
      (Se.internalSpec = {
        fullName: [1, e.TYPES.STRING],
        firstName: [2, e.TYPES.STRING],
      }),
      (Re.name = "SyncActionValue$LidContactAction"),
      (Re.internalSpec = {
        fullName: [1, e.TYPES.STRING],
        firstName: [2, e.TYPES.STRING],
        username: [3, e.TYPES.STRING],
      }),
      (Le.name = "SyncActionValue$NotificationActivitySettingAction"),
      (Le.internalSpec = { notificationActivitySetting: [1, e.TYPES.ENUM, D] }),
      (Ee.name = "SyncActionValue$WaffleAccountLinkStateAction"),
      (Ee.internalSpec = { linkState: [2, e.TYPES.ENUM, x] }),
      (ke.name = "SyncActionValue$MerchantPaymentPartnerAction"),
      (ke.internalSpec = {
        status: [1, e.FLAGS.REQUIRED | e.TYPES.ENUM, $],
        country: [2, e.FLAGS.REQUIRED | e.TYPES.STRING],
        gatewayName: [3, e.TYPES.STRING],
        credentialId: [4, e.TYPES.STRING],
      }),
      (Ie.name = "SyncActionValue$FavoritesAction"),
      (Ie.internalSpec = {
        favorites: [1, e.FLAGS.REPEATED | e.TYPES.MESSAGE, Te],
      }),
      (Te.name = "SyncActionValue$FavoritesAction$Favorite"),
      (Te.internalSpec = { id: [1, e.TYPES.STRING] }),
      (De.name = "SyncActionValue$NoteEditAction"),
      (De.internalSpec = {
        type: [1, e.TYPES.ENUM, P],
        chatJid: [2, e.TYPES.STRING],
        createdAt: [3, e.TYPES.INT64],
        deleted: [4, e.TYPES.BOOL],
        unstructuredContent: [5, e.TYPES.STRING],
      }),
      (xe.name =
        "SyncActionValue$PrivacySettingChannelsPersonalisedRecommendationAction"),
      (xe.internalSpec = { isUserOptedOut: [1, e.TYPES.BOOL] }),
      ($e.name = "SyncActionValue$PrivacySettingDisableLinkPreviewsAction"),
      ($e.internalSpec = { isPreviewsDisabled: [1, e.TYPES.BOOL] }),
      (Pe.name = "SyncActionValue$WamoUserIdentifierAction"),
      (Pe.internalSpec = { identifier: [1, e.TYPES.STRING] }),
      (Ne.name = "SyncActionValue$BubbleLockMessageAction"),
      (Ne.internalSpec = { locked: [1, e.TYPES.BOOL] }),
      (Me.name = "SyncActionValue$LockChatAction"),
      (Me.internalSpec = { locked: [1, e.TYPES.BOOL] }),
      (we.name = "SyncActionValue$CustomPaymentMethodsAction"),
      (we.internalSpec = {
        customPaymentMethods: [1, e.FLAGS.REPEATED | e.TYPES.MESSAGE, Ae],
      }),
      (Ae.name = "SyncActionValue$CustomPaymentMethod"),
      (Ae.internalSpec = {
        credentialId: [1, e.FLAGS.REQUIRED | e.TYPES.STRING],
        country: [2, e.FLAGS.REQUIRED | e.TYPES.STRING],
        type: [3, e.FLAGS.REQUIRED | e.TYPES.STRING],
        metadata: [4, e.FLAGS.REPEATED | e.TYPES.MESSAGE, Fe],
      }),
      (Fe.name = "SyncActionValue$CustomPaymentMethodMetadata"),
      (Fe.internalSpec = {
        key: [1, e.FLAGS.REQUIRED | e.TYPES.STRING],
        value: [2, e.FLAGS.REQUIRED | e.TYPES.STRING],
      }),
      (Oe.name = "SyncActionValue$PaymentInfoAction"),
      (Oe.internalSpec = { cpi: [1, e.TYPES.STRING] }),
      (Be.name = "SyncActionValue$LabelReorderingAction"),
      (Be.internalSpec = {
        sortedLabelIds: [1, e.FLAGS.REPEATED | e.TYPES.INT32],
      }),
      (We.name = "SyncActionValue$DeleteIndividualCallLogAction"),
      (We.internalSpec = {
        peerJid: [1, e.TYPES.STRING],
        isIncoming: [2, e.TYPES.BOOL],
      }),
      (qe.name = "SyncActionValue$BotWelcomeRequestAction"),
      (qe.internalSpec = { isSent: [1, e.TYPES.BOOL] }),
      (Ue.name = "SyncActionValue$NewsletterSavedInterestsAction"),
      (Ue.internalSpec = { newsletterSavedInterests: [1, e.TYPES.STRING] }),
      (Ve.name = "SyncActionValue$MusicUserIdAction"),
      (Ve.internalSpec = {
        musicUserId: [1, e.TYPES.STRING],
        music_user_id_map: [2, e.TYPES.MAP, [e.TYPES.STRING, e.TYPES.STRING]],
      }),
      (He.name = "SyncActionValue$StatusPrivacyAction"),
      (He.internalSpec = {
        mode: [1, e.TYPES.ENUM, N],
        userJid: [2, e.FLAGS.REPEATED | e.TYPES.STRING],
        shareToFb: [3, e.TYPES.BOOL],
        shareToIg: [4, e.TYPES.BOOL],
        customLists: [5, e.FLAGS.REPEATED | e.TYPES.MESSAGE, Ge],
        modes: [6, e.FLAGS.REPEATED | e.TYPES.ENUM, N],
      }),
      (Ge.name = "SyncActionValue$StatusPrivacyAction$CustomList"),
      (Ge.internalSpec = {
        listId: [1, e.TYPES.STRING],
        name: [2, e.TYPES.STRING],
        emoji: [3, e.TYPES.STRING],
        isSelected: [4, e.TYPES.BOOL],
        userJid: [5, e.FLAGS.REPEATED | e.TYPES.STRING],
      }),
      (ze.name = "SyncActionValue$UGCBot"),
      (ze.internalSpec = { definition: [1, e.TYPES.BYTES] }),
      (je.name = "SyncActionValue$CallLogAction"),
      (je.internalSpec = { callLogRecord: [1, e.TYPES.MESSAGE, U] }),
      (Ke.name = "SyncActionValue$PrivacySettingRelayAllCalls"),
      (Ke.internalSpec = { isEnabled: [1, e.TYPES.BOOL] }),
      (Qe.name = "SyncActionValue$DetectedOutcomesStatusAction"),
      (Qe.internalSpec = { isEnabled: [1, e.TYPES.BOOL] }),
      (Xe.name = "SyncActionValue$ExternalWebBetaAction"),
      (Xe.internalSpec = { isOptIn: [1, e.TYPES.BOOL] }),
      (Ye.name = "SyncActionValue$MarketingMessageBroadcastAction"),
      (Ye.internalSpec = { repliedCount: [1, e.TYPES.INT32] }),
      (Je.name = "SyncActionValue$MarketingMessageAction"),
      (Je.internalSpec = {
        name: [1, e.TYPES.STRING],
        message: [2, e.TYPES.STRING],
        type: [3, e.TYPES.ENUM, M],
        createdAt: [4, e.TYPES.INT64],
        lastSentAt: [5, e.TYPES.INT64],
        isDeleted: [6, e.TYPES.BOOL],
        mediaId: [7, e.TYPES.STRING],
      }),
      (Ze.name = "SyncActionValue$UsernameChatStartModeAction"),
      (Ze.internalSpec = { chatStartMode: [1, e.TYPES.ENUM, w] }),
      (et.name = "SyncActionValue$PnForLidChatAction"),
      (et.internalSpec = { pnJid: [1, e.TYPES.STRING] }),
      (tt.name = "SyncActionValue$ChatAssignmentOpenedStatusAction"),
      (tt.internalSpec = { chatOpened: [1, e.TYPES.BOOL] }),
      (nt.name = "SyncActionValue$ChatAssignmentAction"),
      (nt.internalSpec = { deviceAgentId: [1, e.TYPES.STRING] }),
      (rt.name = "SyncActionValue$StickerAction"),
      (rt.internalSpec = {
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
      (ot.name = "SyncActionValue$RemoveRecentStickerAction"),
      (ot.internalSpec = { lastStickerSentTs: [1, e.TYPES.INT64] }),
      (at.name = "SyncActionValue$PrimaryVersionAction"),
      (at.internalSpec = { version: [1, e.TYPES.STRING] }),
      (it.name = "SyncActionValue$NuxAction"),
      (it.internalSpec = { acknowledged: [1, e.TYPES.BOOL] }),
      (lt.name = "SyncActionValue$TimeFormatAction"),
      (lt.internalSpec = { isTwentyFourHourFormatEnabled: [1, e.TYPES.BOOL] }),
      (st.name = "SyncActionValue$UserStatusMuteAction"),
      (st.internalSpec = { muted: [1, e.TYPES.BOOL] }),
      (ut.name = "SyncActionValue$SubscriptionAction"),
      (ut.internalSpec = {
        isDeactivated: [1, e.TYPES.BOOL],
        isAutoRenewing: [2, e.TYPES.BOOL],
        expirationDate: [3, e.TYPES.INT64],
      }),
      (ct.name = "SyncActionValue$AgentAction"),
      (ct.internalSpec = {
        name: [1, e.TYPES.STRING],
        deviceId: [2, e.TYPES.INT32],
        isDeleted: [3, e.TYPES.BOOL],
      }),
      (dt.name = "SyncActionValue$AndroidUnsupportedActions"),
      (dt.internalSpec = { allowed: [1, e.TYPES.BOOL] }),
      (mt.name = "SyncActionValue$PrimaryFeature"),
      (mt.internalSpec = { flags: [1, e.FLAGS.REPEATED | e.TYPES.STRING] }),
      (pt.name = "SyncActionValue$KeyExpiration"),
      (pt.internalSpec = { expiredKeyEpoch: [1, e.TYPES.INT32] }),
      (_t.name = "SyncActionValue$SyncActionMessage"),
      (_t.internalSpec = {
        key: [
          1,
          e.TYPES.MESSAGE,
          o("WAWebProtobufsProtocol.pb").MessageKeySpec,
        ],
        timestamp: [2, e.TYPES.INT64],
      }),
      (ft.name = "SyncActionValue$SyncActionMessageRange"),
      (ft.internalSpec = {
        lastMessageTimestamp: [1, e.TYPES.INT64],
        lastSystemMessageTimestamp: [2, e.TYPES.INT64],
        messages: [3, e.FLAGS.REPEATED | e.TYPES.MESSAGE, _t],
      }),
      (gt.name = "SyncActionValue$UnarchiveChatsSetting"),
      (gt.internalSpec = { unarchiveChats: [1, e.TYPES.BOOL] }),
      (ht.name = "SyncActionValue$DeleteChatAction"),
      (ht.internalSpec = { messageRange: [1, e.TYPES.MESSAGE, ft] }),
      (yt.name = "SyncActionValue$ClearChatAction"),
      (yt.internalSpec = { messageRange: [1, e.TYPES.MESSAGE, ft] }),
      (Ct.name = "SyncActionValue$MarkChatAsReadAction"),
      (Ct.internalSpec = {
        read: [1, e.TYPES.BOOL],
        messageRange: [2, e.TYPES.MESSAGE, ft],
      }),
      (bt.name = "SyncActionValue$DeleteMessageForMeAction"),
      (bt.internalSpec = {
        deleteMedia: [1, e.TYPES.BOOL],
        messageTimestamp: [2, e.TYPES.INT64],
      }),
      (vt.name = "SyncActionValue$ArchiveChatAction"),
      (vt.internalSpec = {
        archived: [1, e.TYPES.BOOL],
        messageRange: [2, e.TYPES.MESSAGE, ft],
      }),
      (St.name = "SyncActionValue$RecentEmojiWeightsAction"),
      (St.internalSpec = {
        weights: [1, e.FLAGS.REPEATED | e.TYPES.MESSAGE, q],
      }),
      (Rt.name = "SyncActionValue$LabelEditAction"),
      (Rt.internalSpec = {
        name: [1, e.TYPES.STRING],
        color: [2, e.TYPES.INT32],
        predefinedId: [3, e.TYPES.INT32],
        deleted: [4, e.TYPES.BOOL],
        orderIndex: [5, e.TYPES.INT32],
        isActive: [6, e.TYPES.BOOL],
        type: [7, e.TYPES.ENUM, A],
        isImmutable: [8, e.TYPES.BOOL],
        muteEndTimeMs: [9, e.TYPES.INT64],
      }),
      (Lt.name = "SyncActionValue$LabelSublistAction"),
      (Lt.internalSpec = { subListId: [1, e.TYPES.INT32] }),
      (Et.name = "SyncActionValue$LabelAssociationAction"),
      (Et.internalSpec = {
        labeled: [1, e.TYPES.BOOL],
        modelMetaData: [2, e.TYPES.STRING],
      }),
      (kt.name = "SyncActionValue$QuickReplyAction"),
      (kt.internalSpec = {
        shortcut: [1, e.TYPES.STRING],
        message: [2, e.TYPES.STRING],
        keywords: [3, e.FLAGS.REPEATED | e.TYPES.STRING],
        count: [4, e.TYPES.INT32],
        deleted: [5, e.TYPES.BOOL],
        associatedLabelIds: [6, e.FLAGS.REPEATED | e.TYPES.STRING],
      }),
      (It.name = "SyncActionValue$LocaleSetting"),
      (It.internalSpec = { locale: [1, e.TYPES.STRING] }),
      (Tt.name = "SyncActionValue$PushNameSetting"),
      (Tt.internalSpec = { name: [1, e.TYPES.STRING] }),
      (Dt.name = "SyncActionValue$PinAction"),
      (Dt.internalSpec = { pinned: [1, e.TYPES.BOOL] }),
      (xt.name = "SyncActionValue$MuteAction"),
      (xt.internalSpec = {
        muted: [1, e.TYPES.BOOL],
        muteEndTimestamp: [2, e.TYPES.INT64],
        autoMuted: [3, e.TYPES.BOOL],
        muteEveryoneMentionEndTimestamp: [4, e.TYPES.INT64],
      }),
      ($t.name = "SyncActionValue$SharedDeviceAllowlistAction"),
      ($t.internalSpec = { allowed: [1, e.TYPES.BOOL] }),
      (Pt.name = "SyncActionValue$ContactAction"),
      (Pt.internalSpec = {
        fullName: [1, e.TYPES.STRING],
        firstName: [2, e.TYPES.STRING],
        lidJid: [3, e.TYPES.STRING],
        saveOnPrimaryAddressbook: [4, e.TYPES.BOOL],
        pnJid: [5, e.TYPES.STRING],
        username: [6, e.TYPES.STRING],
      }),
      (Nt.name = "SyncActionValue$StarAction"),
      (Nt.internalSpec = { starred: [1, e.TYPES.BOOL] }),
      (Mt.name = "SyncActionData"),
      (Mt.internalSpec = {
        index: [1, e.TYPES.BYTES],
        value: [2, e.TYPES.MESSAGE, G],
        padding: [3, e.TYPES.BYTES],
        version: [4, e.TYPES.INT32],
      }),
      (wt.name = "PatchDebugData"),
      (wt.internalSpec = {
        currentLthash: [1, e.TYPES.BYTES],
        newLthash: [2, e.TYPES.BYTES],
        patchVersion: [3, e.TYPES.BYTES],
        collectionName: [4, e.TYPES.BYTES],
        firstFourBytesFromAHashOfSnapshotMacKey: [5, e.TYPES.BYTES],
        newLthashSubtract: [6, e.TYPES.BYTES],
        numberAdd: [7, e.TYPES.INT32],
        numberRemove: [8, e.TYPES.INT32],
        numberOverride: [9, e.TYPES.INT32],
        senderPlatform: [10, e.TYPES.ENUM, F],
        isSenderPrimary: [11, e.TYPES.BOOL],
      }),
      (l.CollectionName = u),
      (l.MutationProps = c),
      (l.CallLogRecord$CallType = d),
      (l.CallLogRecord$SilenceReason = m),
      (l.CallLogRecord$CallResult = p),
      (l.SyncActionValue$GroupHistoryToggleAction$GroupHistoryToggleMode = _),
      (l.SyncActionValue$WASARootSecretAction$RootSecretEntry$Status = f),
      (l.SyncActionValue$SettingsSyncAction$MediaQualitySetting = g),
      (l.SyncActionValue$SettingsSyncAction$DisplayMode = h),
      (l.SyncActionValue$SettingsSyncAction$SettingKey = y),
      (l.SyncActionValue$SettingsSyncAction$SettingPlatform = C),
      (l.SyncActionValue$InteractiveMessageAction$InteractiveMessageActionMode =
        b),
      (l.SyncActionValue$PrivateProcessingSettingAction$PrivateProcessingStatus =
        v),
      (l.SyncActionValue$AvatarUpdatedAction$AvatarEventType = S),
      (l.SyncActionValue$BizAISettingsNudgeAction$BizAISettingsCategory = R),
      (l.SyncActionValue$MaibaAIFeaturesControlAction$MaibaAIReplyMode = L),
      (l.SyncActionValue$MaibaAIFeaturesControlAction$MaibaAIFeatureStatus = E),
      (l.SyncActionValue$BusinessBroadcastCampaignBBProStatus = k),
      (l.SyncActionValue$BusinessBroadcastCampaignStatus = I),
      (l.SyncActionValue$PaymentTosAction$PaymentNotice = T),
      (l.SyncActionValue$NotificationActivitySettingAction$NotificationActivitySetting =
        D),
      (l.SyncActionValue$WaffleAccountLinkStateAction$AccountLinkState = x),
      (l.SyncActionValue$MerchantPaymentPartnerAction$Status = $),
      (l.SyncActionValue$NoteEditAction$NoteType = P),
      (l.SyncActionValue$StatusPrivacyAction$StatusDistributionMode = N),
      (l.SyncActionValue$MarketingMessageAction$MarketingMessagePrototypeType =
        M),
      (l.SyncActionValue$UsernameChatStartModeAction$ChatStartMode = w),
      (l.SyncActionValue$LabelEditAction$ListType = A),
      (l.PatchDebugData$Platform = F),
      (l.MutationProps$MutationName = O),
      (l.getMutationProps$CollectionName = B),
      (l.CollectionName$CollectionNameStr = W),
      (l.RecentEmojiWeightSpec = q),
      (l.CallLogRecordSpec = U),
      (l.CallLogRecord$ParticipantInfoSpec = V),
      (l.CallLogRecord$GuestInfoSpec = H),
      (l.SyncActionValueSpec = G),
      (l.SyncActionValue$BBProPendingCustomerBaseActionSpec = z),
      (l.SyncActionValue$GroupHistoryToggleActionSpec = j),
      (l.SyncActionValue$BusinessFolderActivationActionSpec = K),
      (l.SyncActionValue$CtwaMessageReceivedActionSpec = Q),
      (l.SyncActionValue$WASARootSecretActionSpec = X),
      (l.SyncActionValue$WASARootSecretAction$RootSecretEntrySpec = Y),
      (l.SyncActionValue$CoexV2VersionActionSpec = J),
      (l.SyncActionValue$SubscriptionsSyncV2ActionSpec = Z),
      (l.SyncActionValue$SubscriptionsSyncV2Action$PaidFeatureSpec = ee),
      (l.SyncActionValue$SubscriptionsSyncV2Action$SubscriptionInfoSpec = te),
      (l.SyncActionValue$ContactManagerMetadataActionSpec = ne),
      (l.SyncActionValue$CustomerDataActionSpec = re),
      (l.SyncActionValue$BusinessBroadcastInsightsActionSpec = oe),
      (l.SyncActionValue$SettingsSyncActionSpec = ae),
      (l.SyncActionValue$AutoOrganizeBusinessChatSettingSpec = ie),
      (l.SyncActionValue$NctSaltSyncActionSpec = le),
      (l.SyncActionValue$InteractiveMessageActionSpec = se),
      (l.SyncActionValue$ThreadPinActionSpec = ue),
      (l.SyncActionValue$AiThreadRenameActionSpec = ce),
      (l.SyncActionValue$PrivateProcessingSettingActionSpec = de),
      (l.SyncActionValue$AvatarUpdatedActionSpec = me),
      (l.SyncActionValue$StatusPostOptInNotificationPreferencesActionSpec = pe),
      (l.SyncActionValue$BizAISettingsNudgeActionSpec = _e),
      (l.SyncActionValue$MaibaAIFeaturesControlActionSpec = fe),
      (l.SyncActionValue$BroadcastListParticipantSpec = ge),
      (l.SyncActionValue$BusinessBroadcastCampaignActionSpec = he),
      (l.SyncActionValue$BusinessBroadcastListActionSpec = ye),
      (l.SyncActionValue$BusinessBroadcastAssociationActionSpec = Ce),
      (l.SyncActionValue$PaymentTosActionSpec = be),
      (l.SyncActionValue$CtwaPerCustomerDataSharingActionSpec = ve),
      (l.SyncActionValue$OutContactActionSpec = Se),
      (l.SyncActionValue$LidContactActionSpec = Re),
      (l.SyncActionValue$NotificationActivitySettingActionSpec = Le),
      (l.SyncActionValue$WaffleAccountLinkStateActionSpec = Ee),
      (l.SyncActionValue$MerchantPaymentPartnerActionSpec = ke),
      (l.SyncActionValue$FavoritesActionSpec = Ie),
      (l.SyncActionValue$FavoritesAction$FavoriteSpec = Te),
      (l.SyncActionValue$NoteEditActionSpec = De),
      (l.SyncActionValue$PrivacySettingChannelsPersonalisedRecommendationActionSpec =
        xe),
      (l.SyncActionValue$PrivacySettingDisableLinkPreviewsActionSpec = $e),
      (l.SyncActionValue$WamoUserIdentifierActionSpec = Pe),
      (l.SyncActionValue$BubbleLockMessageActionSpec = Ne),
      (l.SyncActionValue$LockChatActionSpec = Me),
      (l.SyncActionValue$CustomPaymentMethodsActionSpec = we),
      (l.SyncActionValue$CustomPaymentMethodSpec = Ae),
      (l.SyncActionValue$CustomPaymentMethodMetadataSpec = Fe),
      (l.SyncActionValue$PaymentInfoActionSpec = Oe),
      (l.SyncActionValue$LabelReorderingActionSpec = Be),
      (l.SyncActionValue$DeleteIndividualCallLogActionSpec = We),
      (l.SyncActionValue$BotWelcomeRequestActionSpec = qe),
      (l.SyncActionValue$NewsletterSavedInterestsActionSpec = Ue),
      (l.SyncActionValue$MusicUserIdActionSpec = Ve),
      (l.SyncActionValue$StatusPrivacyActionSpec = He),
      (l.SyncActionValue$StatusPrivacyAction$CustomListSpec = Ge),
      (l.SyncActionValue$UGCBotSpec = ze),
      (l.SyncActionValue$CallLogActionSpec = je),
      (l.SyncActionValue$PrivacySettingRelayAllCallsSpec = Ke),
      (l.SyncActionValue$DetectedOutcomesStatusActionSpec = Qe),
      (l.SyncActionValue$ExternalWebBetaActionSpec = Xe),
      (l.SyncActionValue$MarketingMessageBroadcastActionSpec = Ye),
      (l.SyncActionValue$MarketingMessageActionSpec = Je),
      (l.SyncActionValue$UsernameChatStartModeActionSpec = Ze),
      (l.SyncActionValue$PnForLidChatActionSpec = et),
      (l.SyncActionValue$ChatAssignmentOpenedStatusActionSpec = tt),
      (l.SyncActionValue$ChatAssignmentActionSpec = nt),
      (l.SyncActionValue$StickerActionSpec = rt),
      (l.SyncActionValue$RemoveRecentStickerActionSpec = ot),
      (l.SyncActionValue$PrimaryVersionActionSpec = at),
      (l.SyncActionValue$NuxActionSpec = it),
      (l.SyncActionValue$TimeFormatActionSpec = lt),
      (l.SyncActionValue$UserStatusMuteActionSpec = st),
      (l.SyncActionValue$SubscriptionActionSpec = ut),
      (l.SyncActionValue$AgentActionSpec = ct),
      (l.SyncActionValue$AndroidUnsupportedActionsSpec = dt),
      (l.SyncActionValue$PrimaryFeatureSpec = mt),
      (l.SyncActionValue$KeyExpirationSpec = pt),
      (l.SyncActionValue$SyncActionMessageSpec = _t),
      (l.SyncActionValue$SyncActionMessageRangeSpec = ft),
      (l.SyncActionValue$UnarchiveChatsSettingSpec = gt),
      (l.SyncActionValue$DeleteChatActionSpec = ht),
      (l.SyncActionValue$ClearChatActionSpec = yt),
      (l.SyncActionValue$MarkChatAsReadActionSpec = Ct),
      (l.SyncActionValue$DeleteMessageForMeActionSpec = bt),
      (l.SyncActionValue$ArchiveChatActionSpec = vt),
      (l.SyncActionValue$RecentEmojiWeightsActionSpec = St),
      (l.SyncActionValue$LabelEditActionSpec = Rt),
      (l.SyncActionValue$LabelSublistActionSpec = Lt),
      (l.SyncActionValue$LabelAssociationActionSpec = Et),
      (l.SyncActionValue$QuickReplyActionSpec = kt),
      (l.SyncActionValue$LocaleSettingSpec = It),
      (l.SyncActionValue$PushNameSettingSpec = Tt),
      (l.SyncActionValue$PinActionSpec = Dt),
      (l.SyncActionValue$MuteActionSpec = xt),
      (l.SyncActionValue$SharedDeviceAllowlistActionSpec = $t),
      (l.SyncActionValue$ContactActionSpec = Pt),
      (l.SyncActionValue$StarActionSpec = Nt),
      (l.SyncActionDataSpec = Mt),
      (l.PatchDebugDataSpec = wt));
  },
  98,
);
