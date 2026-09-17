__d(
  "WAWebBotGating",
  [
    "WAWebABProps",
    "WAWebBotBaseGating",
    "WAWebBotGenTypingIndicatorMsg",
    "WAWebBotTos",
    "WAWebBotTosIds",
    "WAWebBotUnifiedResponseGating",
    "WAWebBotUtils",
    "WAWebImplicitThreadRoutingStrategy",
    "WAWebMobilePlatforms",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebProtobufsDeviceCapabilities.pb",
    "WAWebRichResponse.flow",
    "WAWebUnifiedResponseUtils",
    "WAWebUserPrefsBot",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t;
      return o("WAWebBotUtils").isHatchBot(e)
        ? !0
        : o("WAWebBotBaseGating").isBotEnabled()
          ? o("WAWebBotBaseGating").isDeviceLanguageInLanguages(
              (t = o("WAWebABProps").getABPropConfigValue(
                "ai_ptt_main_gate_supported_languages",
              )) != null
                ? t
                : "en",
            )
          : !1;
    }
    function s(e) {
      return !o("WAWebBotBaseGating").isBotEnabled() ||
        (o("WAWebMsgGetters").getUnifiedResponse(e) != null &&
          o("WAWebBotUnifiedResponseGating").isUnifiedResponseReceiverEnabled(
            e.t,
          ))
        ? !1
        : !!o("WAWebMsgGetters").getIsMetaBotResponse(e) ||
            e.subtype ===
              o("WAWebBotGenTypingIndicatorMsg")
                .BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE;
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "wabai_message_feedback_enabled",
      );
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue("bot_3p_status") === 2;
    }
    function d() {
      return (
        E() &&
        o("WAWebABProps").getABPropConfigValue(
          "bonsai_chat_list_entry_point_enabled",
        )
      );
    }
    function m() {
      return E() && !d();
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue("wabai_consent_cooldown");
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue("wabai_consent_required");
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_bot_profile_gql_migration_enabled",
      );
    }
    function g() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "ai_home_bot_profile_sync_interval_sec",
        ) * 1e3
      );
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_forward_flow_surface_meta_ai_as_contact_enabled",
      );
    }
    function y(e) {
      return o("WAWebUnifiedResponseUtils").isUnifiedResponseVisible(e.unsafe())
        ? !0
        : e.richResponse.parseState !==
            o("WAWebRichResponse.flow").RichResponseParseState.Unparsed;
    }
    function C(e) {
      return !(
        e.type === o("WAWebMsgType").MSG_TYPE.REVOKED ||
        !o("WAWebMsgGetters").getIsBotSearchResponse(e)
      );
    }
    function b() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_pdfn_tos_non_blocking_notices",
      );
      return e
        .split(",")
        .map(function (e) {
          return e.trim();
        })
        .filter(function (e) {
          return !isNaN(e) && e !== "";
        })
        .map(Number);
    }
    function v() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_pdfn_tos_inline_notices",
      );
      return e
        .split(",")
        .map(function (e) {
          return e.trim();
        })
        .filter(function (e) {
          return !isNaN(e) && e !== "";
        })
        .map(Number);
    }
    function S() {
      if (o("WAWebMobilePlatforms").isSMB()) {
        var e = R(
          o("WAWebABProps").getABPropConfigValue(
            "smb_web_ai_tos_master_notice_id",
          ),
        );
        if (e != null) return e;
      }
      return R(
        o("WAWebABProps").getABPropConfigValue("ai_pdfn_tos_master_notice_id"),
      );
    }
    function R(e) {
      if (e.trim() === "") return null;
      var t = Number(e);
      return isNaN(t) ? null : t;
    }
    function L() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_migrate_away_from_inline_tos_enabled",
      );
    }
    function E() {
      return !(
        o("WAWebMobilePlatforms").isSMB() ||
        !o("WAWebBotBaseGating").isBotEnabled() ||
        (!o("WAWebBotTos").hasSeenShortcutTos() &&
          !o("WAWebBotTos").canShowBotTos(
            o("WAWebBotTosIds").getBotShortcutTosId(),
          ))
      );
    }
    function k() {
      return (
        E() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_search_ask_button_web_enabled",
        )
      );
    }
    function I() {
      var e =
        o("WAWebUserPrefsBot").getPrimaryAiThreadSupportLevelFromLocalStorage();
      return (
        e ===
          o("WAWebProtobufsDeviceCapabilities.pb")
            .DeviceCapabilities$AiThread$SupportLevel.INFRA ||
        e ===
          o("WAWebProtobufsDeviceCapabilities.pb")
            .DeviceCapabilities$AiThread$SupportLevel.FULL
      );
    }
    function T() {
      return (
        I() &&
        o("WAWebABProps").getABPropConfigValue("ai_chat_threads_web_enabled")
      );
    }
    function D() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_meta_ai_thread_rendering_enabled",
      );
    }
    function x() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_chat_thread_capability_enabled",
      );
    }
    function $() {
      return (
        E() &&
        o("WAWebABProps").getABPropConfigValue("ai_web_ask_meta_ai_enabled")
      );
    }
    function P() {
      return (
        $() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_web_ask_meta_ai_improvement_enabled",
        )
      );
    }
    function N() {
      return (
        o("WAWebBotBaseGating").isAiModeSelectorMessagingEnabled() &&
        o("WAWebABProps").getABPropConfigValue("is_ai_mode_selector_visible")
      );
    }
    function M() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_dynamic_mode_selector_ttl_seconds",
      );
    }
    function w() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_search_null_state_convo_starter_suggestions_update_interval",
      );
    }
    function A() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_search_null_state_convo_starter_gql_enabled",
      );
    }
    function F() {
      return (
        o("WAWebBotBaseGating").isBotEnabled() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_chat_threads_historical_messages_migration_enabled",
        )
      );
    }
    function O() {
      var e;
      return !o("WAWebBotBaseGating").isBotEnabled() ||
        !o("WAWebBotBaseGating").isDeviceLanguageInLanguages(
          (e = o("WAWebABProps").getABPropConfigValue(
            "ai_metabot_image_input_languages",
          )) != null
            ? e
            : "en",
        )
        ? !1
        : o("WAWebABProps").getABPropConfigValue(
            "ai_web_meta_ai_image_input_enabled",
          );
    }
    function B() {
      var e;
      return !o("WAWebMobilePlatforms").isSMB() ||
        !o("WAWebBotBaseGating").isBotEnabled()
        ? !1
        : o("WAWebBotBaseGating").isDeviceLanguageInLanguages(
            (e = o("WAWebABProps").getABPropConfigValue(
              "smb_web_meta_ai_image_input_languages",
            )) != null
              ? e
              : "",
          );
    }
    function W(e) {
      return o("WAWebBotUtils").isMetaAiBot(e)
        ? O() || q() || U()
        : o("WAWebBotUtils").isBusinessAssistantBot(e)
          ? B()
          : !1;
    }
    function q() {
      var e;
      return o("WAWebBotBaseGating").isBotEnabled()
        ? o("WAWebBotBaseGating").isDeviceLanguageInLanguages(
            (e = o("WAWebABProps").getABPropConfigValue(
              "ai_video_upload_support_languages",
            )) != null
              ? e
              : "",
          ) &&
            o("WAWebABProps").getABPropConfigValue(
              "ai_video_upload_web_enabled",
            )
        : !1;
    }
    function U() {
      var e;
      return !o("WAWebBotBaseGating").isBotEnabled() ||
        !o("WAWebBotBaseGating").isDeviceLanguageInLanguages(
          (e = o("WAWebABProps").getABPropConfigValue(
            "ai_metabot_document_upload_enabled",
          )) != null
            ? e
            : "en",
        )
        ? !1
        : o("WAWebABProps").getABPropConfigValue(
            "ai_web_meta_ai_pdf_document_input_enabled",
          );
    }
    function V() {
      return O() || q();
    }
    var H = "pdf";
    function G() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_file_upload_supported_file_types",
      );
      return e !== "" ? e : H;
    }
    function z() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_file_upload_count_limit",
      );
    }
    function j() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_metabot_send_image_limit",
      );
    }
    function K() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_metabot_document_ocr_image_conversion_enabled",
      );
    }
    function Q(e, t) {
      return t != null && o("WAWebBotUtils").isMetaAiBot(e) && T();
    }
    function X(e) {
      return o("WAWebBotUtils").isMetaAiBot(e) && T();
    }
    function Y() {
      var e,
        t = o("WAWebABProps").getABPropConfigValue(
          "ai_chat_threads_implicit_routing_strategy",
        );
      return (e = o(
        "WAWebImplicitThreadRoutingStrategy",
      ).ImplicitThreadRoutingStrategy.cast(t)) != null
        ? e
        : o("WAWebImplicitThreadRoutingStrategy").ImplicitThreadRoutingStrategy
            .NewThread;
    }
    function J() {
      return (
        Y() !==
        o("WAWebImplicitThreadRoutingStrategy").ImplicitThreadRoutingStrategy
          .NewThread
      );
    }
    function Z() {
      return (
        Y() ===
        o("WAWebImplicitThreadRoutingStrategy").ImplicitThreadRoutingStrategy
          .DefaultThread
      );
    }
    function ee() {
      return (
        T() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_chat_threads_pin_enabled",
        ) === !0
      );
    }
    function te() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_chat_threads_pin_max_count",
      );
    }
    function ne() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_bot_orphan_logic_enabled",
      );
    }
    function re() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_file_upload_size_limit_mb",
      );
      return e * 1024 * 1024;
    }
    function oe() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_video_upload_size_limit_mb",
      );
      return e * 1024 * 1024;
    }
    ((l.isBotPttEnabled = e),
      (l.shouldAnimateAsBotStream = s),
      (l.isBizBot1pFeedbackEnabled = u),
      (l.isBizBot3pAvailable = c),
      (l.isBotShortcutEntryPointEnabled = d),
      (l.isBotNewChatEntryPointEnabled = m),
      (l.bizBotConsentDismissalCooldown = p),
      (l.isBizBotConsentRequired = _),
      (l.isBotProfileGqlMigrationEnabled = f),
      (l.ugcBotProfileSyncInterval = g),
      (l.isAiAsContactEnabled = h),
      (l.shouldRenderStructuredRichResponseMsg = y),
      (l.showBotSearchPlugin = C),
      (l.getNonBlockingBotNoticeIds = b),
      (l.getInlineBotNoticeIds = v),
      (l.getMasterBotNoticeId = S),
      (l.isMigrateAwayFromInlineBotTosEnabled = L),
      (l.isMetaAIChatInteractionEnabled = E),
      (l.isAiSearchAskButtonEnabled = k),
      (l.isAiChatThreadsEnabled = T),
      (l.isMetaAiThreadRenderingEnabled = D),
      (l.isAiThreadCapabilityEnabled = x),
      (l.isAskMetaAiEnabled = $),
      (l.isAskMetaAiImprovementEnabled = P),
      (l.isAiModeSelectorInteractive = N),
      (l.getAiDynamicModeSelectorTtlSeconds = M),
      (l.getMetaAiNullStatePromptsUpdateIntervalSeconds = w),
      (l.isMetaAiNullStatePromptsGqlFetchEnabled = A),
      (l.isAiChatThreadsHistoricalMessageMigrationEnabled = F),
      (l.isMetaAiImageInputEnabled = O),
      (l.isBusinessAssistantImageInputEnabled = B),
      (l.isMediaInputEnabledForAssistantBotChat = W),
      (l.isMetaAiVideoInputEnabled = q),
      (l.isMetaAiDocUploadEnabled = U),
      (l.isAnyMetaAiMediaInputEnabled = V),
      (l.META_AI_DEFAULT_SUPPORTED_FILE_TYPES = H),
      (l.getMetaAiSupportedFileTypes = G),
      (l.getMetaAiFileUploadCountLimit = z),
      (l.getMetaAiImageSendLimit = j),
      (l.isMetaAiDocumentOcrImageConversionEnabled = K),
      (l.shouldSkipMetaAiChatlistHighlight = Q),
      (l.isMetaAiChatInThreadsMode = X),
      (l.getImplicitThreadRoutingStrategy = Y),
      (l.isImplicitThreadRoutingEnabled = J),
      (l.isDefaultThreadRoutingEnabled = Z),
      (l.isAiThreadPinEnabled = ee),
      (l.getAiThreadPinMaxCount = te),
      (l.isBotOrphanMsgEnabled = ne),
      (l.getMetaAiDocumentUploadSizeLimitBytes = re),
      (l.getMetaAiVideoUploadSizeLimitBytes = oe));
  },
  98,
);
