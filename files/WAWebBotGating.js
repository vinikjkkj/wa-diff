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
    "WAWebCommonMsgUtils",
    "WAWebImplicitThreadRoutingStrategy",
    "WAWebMobilePlatforms",
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
        P() &&
        o("WAWebABProps").getABPropConfigValue(
          "bonsai_chat_list_entry_point_enabled",
        )
      );
    }
    function m() {
      return P() && !d();
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
    function b() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_rich_response_main_gate_enabled",
      );
    }
    function v() {
      return b() ? !o("WAWebMobilePlatforms").isSMB() : !1;
    }
    function S(e) {
      return (
        e.richResponse.parseState !==
          o("WAWebRichResponse.flow").RichResponseParseState.Unparsed &&
        o("WAWebBotBaseGating").isRichStructuredResponseReceiverEnabled()
      );
    }
    function R(e) {
      return !(
        e.type === o("WAWebMsgType").MSG_TYPE.REVOKED ||
        !o("WAWebMsgGetters").getIsBotSearchResponse(e) ||
        (o("WAWebCommonMsgUtils").isRichResponseMsg(e.type) &&
          !o("WAWebBotBaseGating").isRichStructuredResponseReceiverEnabled())
      );
    }
    function L() {
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
    function E() {
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
    function k() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_pdfn_tos_master_notice_id",
      );
      if (e.trim() === "") return null;
      var t = Number(e);
      return isNaN(t) ? null : t;
    }
    function I() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_migrate_away_from_inline_tos_enabled",
      );
    }
    function T() {
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
    function D() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "ai_search_null_state_update_interval",
        ) * 1e3
      );
    }
    function x() {
      return o("WATimeUtils").DAY_MILLISECONDS;
    }
    function $() {
      return 1e3;
    }
    function P() {
      return !(
        !o("WAWebBotBaseGating").isBotEnabled() ||
        (!o("WAWebBotTos").hasSeenShortcutTos() &&
          !o("WAWebBotTos").canShowBotTos(
            o("WAWebBotTosIds").getBotShortcutTosId(),
          ))
      );
    }
    function N() {
      return (
        P() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_search_experience_web_enabled",
        )
      );
    }
    function M() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_search_null_state_row_count",
      );
    }
    function w() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_search_max_num_suggestions",
      );
    }
    function A(e) {
      return e.trimmed().length >= 3 && !e.hasFilter();
    }
    function F() {
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
    function O() {
      return (
        F() &&
        o("WAWebABProps").getABPropConfigValue("ai_chat_threads_web_enabled")
      );
    }
    function B() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_chat_thread_capability_enabled",
      );
    }
    function W() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_chat_threads_web_msgs_load_limit",
      );
    }
    function q() {
      return (
        P() &&
        o("WAWebABProps").getABPropConfigValue("ai_web_ask_meta_ai_enabled")
      );
    }
    function U() {
      return (
        o("WAWebBotBaseGating").isAiModeSelectorMessagingEnabled() &&
        o("WAWebABProps").getABPropConfigValue("is_ai_mode_selector_visible")
      );
    }
    function V() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_rich_response_reasoning_enabled",
      );
    }
    function H() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_dynamic_mode_selector_ttl_seconds",
      );
    }
    function G() {
      return (
        o("WAWebBotBaseGating").isBotEnabled() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_chat_threads_historical_messages_migration_enabled",
        )
      );
    }
    function z() {
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
    function j() {
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
    var K = "pdf";
    function Q() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_file_upload_supported_file_types",
      );
      return e !== "" ? e : K;
    }
    function X() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_file_upload_count_limit",
      );
    }
    function Y() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_metabot_send_image_limit",
      );
    }
    function J() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_metabot_document_ocr_image_conversion_enabled",
      );
    }
    function Z(e, t) {
      return t != null && o("WAWebBotUtils").isMetaAiBot(e) && O();
    }
    function ee(e) {
      return o("WAWebBotUtils").isMetaAiBot(e) && O();
    }
    function te() {
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
    function ne() {
      return (
        te() !==
        o("WAWebImplicitThreadRoutingStrategy").ImplicitThreadRoutingStrategy
          .NewThread
      );
    }
    function re() {
      return (
        te() ===
        o("WAWebImplicitThreadRoutingStrategy").ImplicitThreadRoutingStrategy
          .DefaultThread
      );
    }
    function oe() {
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
    function ae() {
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
    function ie() {
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
    function le() {
      return (
        O() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_chat_threads_pin_enabled",
        ) === !0
      );
    }
    function se() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_chat_threads_pin_max_count",
      );
    }
    function ue() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_hatch_commands_enabled",
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
      (l.isRichStructuredResponseEnabled = v),
      (l.shouldRenderStructuredRichResponseMsg = S),
      (l.showBotSearchPlugin = R),
      (l.getNonBlockingBotNoticeIds = L),
      (l.getInlineBotNoticeIds = E),
      (l.getMasterBotNoticeId = k),
      (l.isMigrateAwayFromInlineBotTosEnabled = I),
      (l.getAiExperimentGraphqlConfig = T),
      (l.getMetaAISearchNullStateSuggestionsUpdateIntervalMs = D),
      (l.getMetaAISearchTypeAheadSuggestionsUpdateIntervalMs = x),
      (l.getMetaAISearchTypeAheadSuggestionsLRUCacheCapacity = $),
      (l.isMetaAIChatInteractionEnabled = P),
      (l.isMetaAISearchExperienceEnabled = N),
      (l.getMetaAISearchNullStateRowCount = M),
      (l.getMetaAISearchTypeAheadMaxSuggestionsCount = w),
      (l.canSearchMetaAiSuggestions = A),
      (l.isAiChatThreadsEnabled = O),
      (l.isAiThreadCapabilityEnabled = B),
      (l.getAiThreadMsgsLoadLimit = W),
      (l.isAskMetaAiEnabled = q),
      (l.isAiModeSelectorInteractive = U),
      (l.isRichResponseReasoningEnabled = V),
      (l.getAiDynamicModeSelectorTtlSeconds = H),
      (l.isAiChatThreadsHistoricalMessageMigrationEnabled = G),
      (l.isMetaAiImageInputEnabled = z),
      (l.isMetaAiDocUploadEnabled = j),
      (l.META_AI_DEFAULT_SUPPORTED_FILE_TYPES = K),
      (l.getMetaAiSupportedFileTypes = Q),
      (l.getMetaAiFileUploadCountLimit = X),
      (l.getMetaAiImageSendLimit = Y),
      (l.isMetaAiDocumentOcrImageConversionEnabled = J),
      (l.shouldSkipMetaAiChatlistHighlight = Z),
      (l.isMetaAiChatInThreadsMode = ee),
      (l.getImplicitThreadRoutingStrategy = te),
      (l.isImplicitThreadRoutingEnabled = ne),
      (l.isDefaultThreadRoutingEnabled = re),
      (l.getManusBotName = oe),
      (l.getManusBotProfileThumb = ae),
      (l.getHatchBotName = ie),
      (l.isAiThreadPinEnabled = le),
      (l.getAiThreadPinMaxCount = se),
      (l.isHatchCommandsEnabled = ue),
      (l.isHatchVideoUploadEnabled = ce),
      (l.getHatchDocumentUploadSizeLimitBytes = de),
      (l.getMetaAiDocumentUploadSizeLimitBytes = me),
      (l.getHatchBotProfileThumb = pe));
  },
  98,
);
