__d(
  "WAWebBotGating",
  [
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBotBaseGating",
    "WAWebBotGenTypingIndicatorMsg",
    "WAWebBotTos",
    "WAWebBotTosIds",
    "WAWebBotUnifiedResponseGating",
    "WAWebBotUtils",
    "WAWebImplicitThreadRoutingStrategy",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebProtobufsDeviceCapabilities.pb",
    "WAWebRichResponse.flow",
    "WAWebUserPrefsBot",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t;
      return o("WAWebBotUtils").isManusBot(e) ||
        o("WAWebBotUtils").isHatchBot(e)
        ? !0
        : !o("WAWebBotBaseGating").isBotEnabled() ||
            !o("WAWebBotBaseGating").isDeviceLanguageInLanguages(
              (t = o("WAWebABProps").getABPropConfigValue(
                "ai_ptt_main_gate_supported_languages",
              )) != null
                ? t
                : "en",
            )
          ? !1
          : o("WAWebABProps").getABPropConfigValue("bonsai_ptt_enabled") === !0;
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
        x() &&
        o("WAWebABProps").getABPropConfigValue(
          "bonsai_chat_list_entry_point_enabled",
        )
      );
    }
    function m() {
      return x() && !d();
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue("wabai_consent_cooldown");
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue("wabai_consent_required");
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue("bonsai_fp_ugc_sender");
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_ugc_not_an_expert_enabled",
      );
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_bot_profile_gql_migration_enabled",
      );
    }
    function y() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "ai_home_bot_profile_sync_interval_sec",
        ) * 1e3
      );
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_forward_flow_surface_meta_ai_as_contact_enabled",
      );
    }
    function b(e) {
      return (
        e.richResponse.parseState !==
        o("WAWebRichResponse.flow").RichResponseParseState.Unparsed
      );
    }
    function v(e) {
      return !(
        e.type === o("WAWebMsgType").MSG_TYPE.REVOKED ||
        !o("WAWebMsgGetters").getIsBotSearchResponse(e)
      );
    }
    function S() {
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
    function R() {
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
    function L() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_pdfn_tos_master_notice_id",
      );
      if (e.trim() === "") return null;
      var t = Number(e);
      return isNaN(t) ? null : t;
    }
    function E() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_migrate_away_from_inline_tos_enabled",
      );
    }
    function k() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_experiment_graphql_config",
      );
      if (e.trim() !== "") {
        var t = e
          .split(",")
          .map(function (e) {
            return parseInt(e, 10);
          })
          .filter(function (e) {
            return !isNaN(e);
          });
        if (t.length !== 0) return t;
      }
    }
    function I() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "ai_search_null_state_update_interval",
        ) * 1e3
      );
    }
    function T() {
      return o("WATimeUtils").DAY_MILLISECONDS;
    }
    function D() {
      return 1e3;
    }
    function x() {
      return !(
        !o("WAWebBotBaseGating").isBotEnabled() ||
        (!o("WAWebBotTos").hasSeenShortcutTos() &&
          !o("WAWebBotTos").canShowBotTos(
            o("WAWebBotTosIds").getBotShortcutTosId(),
          ))
      );
    }
    function $() {
      return (
        x() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_search_experience_web_enabled",
        )
      );
    }
    function P() {
      return (
        x() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_search_ask_button_web_enabled",
        )
      );
    }
    function N() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_search_null_state_row_count",
      );
    }
    function M() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_search_max_num_suggestions",
      );
    }
    function w(e) {
      return e.trimmed().length >= 3 && !e.hasFilter();
    }
    function A() {
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
    function F() {
      return (
        A() &&
        o("WAWebABProps").getABPropConfigValue("ai_chat_threads_web_enabled")
      );
    }
    function O() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_chat_thread_capability_enabled",
      );
    }
    function B() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_chat_threads_web_msgs_load_limit",
      );
    }
    function W() {
      return (
        x() &&
        o("WAWebABProps").getABPropConfigValue("ai_web_ask_meta_ai_enabled")
      );
    }
    function q() {
      return (
        o("WAWebBotBaseGating").isAiModeSelectorMessagingEnabled() &&
        o("WAWebABProps").getABPropConfigValue("is_ai_mode_selector_visible")
      );
    }
    function U() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_rich_response_reasoning_enabled",
      );
    }
    function V() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_dynamic_mode_selector_ttl_seconds",
      );
    }
    function H() {
      return (
        o("WAWebBotBaseGating").isBotEnabled() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_chat_threads_historical_messages_migration_enabled",
        )
      );
    }
    function G() {
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
    function z() {
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
    var j = "pdf";
    function K() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_file_upload_supported_file_types",
      );
      return e !== "" ? e : j;
    }
    function Q() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_file_upload_count_limit",
      );
    }
    function X() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_metabot_send_image_limit",
      );
    }
    function Y() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_metabot_document_ocr_image_conversion_enabled",
      );
    }
    function J(e, t) {
      return t != null && o("WAWebBotUtils").isMetaAiBot(e) && F();
    }
    function Z(e) {
      return o("WAWebBotUtils").isMetaAiBot(e) && F();
    }
    function ee() {
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
    function te() {
      return (
        ee() !==
        o("WAWebImplicitThreadRoutingStrategy").ImplicitThreadRoutingStrategy
          .NewThread
      );
    }
    function ne() {
      return (
        ee() ===
        o("WAWebImplicitThreadRoutingStrategy").ImplicitThreadRoutingStrategy
          .DefaultThread
      );
    }
    function re() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_bot_integration_bot_profile",
      );
      if (e !== "")
        try {
          var t = JSON.parse(e);
          if (typeof t.name == "string") return t.name;
        } catch (e) {
          return "";
        }
      return "";
    }
    function oe() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_bot_integration_bot_profile",
      );
      if (e !== "")
        try {
          var t = JSON.parse(e);
          if (typeof t.profile_thumb == "string") return t.profile_thumb;
        } catch (e) {
          return "";
        }
      return "";
    }
    function ae() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_hatch_integration_bot_profile",
      );
      if (e !== "")
        try {
          var t = JSON.parse(e);
          if (typeof t.name == "string") return t.name;
        } catch (e) {
          return "";
        }
      return "";
    }
    function ie() {
      return (
        F() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_chat_threads_pin_enabled",
        ) === !0
      );
    }
    function le() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_chat_threads_pin_max_count",
      );
    }
    function se() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_hatch_commands_enabled",
      );
    }
    function ue() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_bot_orphan_logic_enabled",
      );
    }
    function ce() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_hatch_video_upload_enabled",
      );
    }
    function de() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_hatch_document_upload_size_limit_mb",
      );
      return e * 1024 * 1024;
    }
    function me() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_file_upload_size_limit_mb",
      );
      return e * 1024 * 1024;
    }
    function pe() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_hatch_integration_bot_profile",
      );
      if (e !== "")
        try {
          var t = JSON.parse(e);
          if (typeof t.profile_thumb == "string") return t.profile_thumb;
        } catch (e) {
          return "";
        }
      return "";
    }
    ((l.isBotPttEnabled = e),
      (l.shouldAnimateAsBotStream = s),
      (l.isBizBot1pFeedbackEnabled = u),
      (l.isBizBot3pAvailable = c),
      (l.isBotShortcutEntryPointEnabled = d),
      (l.isBotNewChatEntryPointEnabled = m),
      (l.bizBotConsentDismissalCooldown = p),
      (l.isBizBotConsentRequired = _),
      (l.isFbidBotEnabled = f),
      (l.isUgcNotExpertEnabled = g),
      (l.isBotProfileGqlMigrationEnabled = h),
      (l.ugcBotProfileSyncInterval = y),
      (l.isAiAsContactEnabled = C),
      (l.shouldRenderStructuredRichResponseMsg = b),
      (l.showBotSearchPlugin = v),
      (l.getNonBlockingBotNoticeIds = S),
      (l.getInlineBotNoticeIds = R),
      (l.getMasterBotNoticeId = L),
      (l.isMigrateAwayFromInlineBotTosEnabled = E),
      (l.getAiExperimentGraphqlConfig = k),
      (l.getMetaAISearchNullStateSuggestionsUpdateIntervalMs = I),
      (l.getMetaAISearchTypeAheadSuggestionsUpdateIntervalMs = T),
      (l.getMetaAISearchTypeAheadSuggestionsLRUCacheCapacity = D),
      (l.isMetaAIChatInteractionEnabled = x),
      (l.isMetaAISearchExperienceEnabled = $),
      (l.isAiSearchAskButtonEnabled = P),
      (l.getMetaAISearchNullStateRowCount = N),
      (l.getMetaAISearchTypeAheadMaxSuggestionsCount = M),
      (l.canSearchMetaAiSuggestions = w),
      (l.isAiChatThreadsEnabled = F),
      (l.isAiThreadCapabilityEnabled = O),
      (l.getAiThreadMsgsLoadLimit = B),
      (l.isAskMetaAiEnabled = W),
      (l.isAiModeSelectorInteractive = q),
      (l.isRichResponseReasoningEnabled = U),
      (l.getAiDynamicModeSelectorTtlSeconds = V),
      (l.isAiChatThreadsHistoricalMessageMigrationEnabled = H),
      (l.isMetaAiImageInputEnabled = G),
      (l.isMetaAiDocUploadEnabled = z),
      (l.META_AI_DEFAULT_SUPPORTED_FILE_TYPES = j),
      (l.getMetaAiSupportedFileTypes = K),
      (l.getMetaAiFileUploadCountLimit = Q),
      (l.getMetaAiImageSendLimit = X),
      (l.isMetaAiDocumentOcrImageConversionEnabled = Y),
      (l.shouldSkipMetaAiChatlistHighlight = J),
      (l.isMetaAiChatInThreadsMode = Z),
      (l.getImplicitThreadRoutingStrategy = ee),
      (l.isImplicitThreadRoutingEnabled = te),
      (l.isDefaultThreadRoutingEnabled = ne),
      (l.getManusBotName = re),
      (l.getManusBotProfileThumb = oe),
      (l.getHatchBotName = ae),
      (l.isAiThreadPinEnabled = ie),
      (l.getAiThreadPinMaxCount = le),
      (l.isHatchCommandsEnabled = se),
      (l.isBotOrphanMsgEnabled = ue),
      (l.isHatchVideoUploadEnabled = ce),
      (l.getHatchDocumentUploadSizeLimitBytes = de),
      (l.getMetaAiDocumentUploadSizeLimitBytes = me),
      (l.getHatchBotProfileThumb = pe));
  },
  98,
);
