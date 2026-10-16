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
    "WAWebProductFeature",
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
      if (!o("WAWebBotBaseGating").isBotEnabled()) return !1;
      var t = o("WAWebMsgGetters").getSender(e);
      return (e.id.remote.isGroup() &&
        t != null &&
        t.isBot() &&
        !o("WAWebBotUtils").isAnyMetaAiBot(t)) ||
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
      return o("WAWebABProps").getABPropConfigValue("bot_3p_status") === 2;
    }
    function c() {
      return (
        !o("WAWebProductFeature").isInternalProduct() &&
        v() &&
        o("WAWebABProps").getABPropConfigValue(
          "bonsai_chat_list_entry_point_enabled",
        )
      );
    }
    function d() {
      return !o("WAWebProductFeature").isInternalProduct() && v() && !c();
    }
    function m() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "ai_home_bot_profile_sync_interval_sec",
        ) * 1e3
      );
    }
    function p(e) {
      return o("WAWebUnifiedResponseUtils").isUnifiedResponseVisible(e.unsafe())
        ? !0
        : e.richResponse.parseState !==
            o("WAWebRichResponse.flow").RichResponseParseState.Unparsed;
    }
    function _(e) {
      return f(e.type, o("WAWebMsgGetters").getIsBotSearchResponse(e));
    }
    function f(e, t) {
      return e !== o("WAWebMsgType").MSG_TYPE.REVOKED && t;
    }
    function g() {
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
    function h() {
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
    function y() {
      if (o("WAWebMobilePlatforms").isSMB()) {
        var e = C(
          o("WAWebABProps").getABPropConfigValue(
            "smb_web_ai_tos_master_notice_id",
          ),
        );
        if (e != null) return e;
      }
      return C(
        o("WAWebABProps").getABPropConfigValue("ai_pdfn_tos_master_notice_id"),
      );
    }
    function C(e) {
      if (e.trim() === "") return null;
      var t = Number(e);
      return isNaN(t) ? null : t;
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_migrate_away_from_inline_tos_enabled",
      );
    }
    function v() {
      return !(
        o("WAWebMobilePlatforms").isSMB() ||
        !o("WAWebBotBaseGating").isBotEnabled() ||
        (!o("WAWebBotTos").hasSeenShortcutTos() &&
          !o("WAWebBotTos").canShowBotTos(
            o("WAWebBotTosIds").getBotShortcutTosId(),
          ))
      );
    }
    function S() {
      return (
        !o("WAWebProductFeature").isInternalProduct() &&
        v() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_search_ask_button_web_enabled",
        )
      );
    }
    function R() {
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
    function L() {
      return (
        R() &&
        o("WAWebABProps").getABPropConfigValue("ai_chat_threads_web_enabled")
      );
    }
    function E() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_meta_ai_thread_rendering_enabled",
      );
    }
    function k() {
      return (
        v() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_web_ask_meta_ai_improvement_enabled",
        )
      );
    }
    function I() {
      return o("WAWebABProps").getABPropConfigValue(
        "is_ai_mode_selector_visible",
      );
    }
    function T() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_search_null_state_convo_starter_gql_enabled",
      );
    }
    function D() {
      return (
        o("WAWebBotBaseGating").isBotEnabled() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_chat_threads_historical_messages_migration_enabled",
        )
      );
    }
    function x() {
      var e;
      return o("WAWebBotBaseGating").isBotEnabled()
        ? o("WAWebBotBaseGating").isDeviceLanguageInLanguages(
            (e = o("WAWebABProps").getABPropConfigValue(
              "ai_metabot_image_input_languages",
            )) != null
              ? e
              : "en",
          )
        : !1;
    }
    function $() {
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
    function P(e) {
      return o("WAWebBotUtils").isMetaAiBot(e)
        ? A()
        : o("WAWebBotUtils").isBusinessAssistantBot(e)
          ? $()
          : !1;
    }
    function N() {
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
    function M() {
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
    function w() {
      return x() || N();
    }
    function A() {
      return w() || M();
    }
    var F = "pdf";
    function O() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_file_upload_supported_file_types",
      );
      return e !== "" ? e : F;
    }
    function B() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_file_upload_count_limit",
      );
    }
    function W() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_metabot_send_image_limit",
      );
    }
    function q() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_metabot_document_ocr_image_conversion_enabled",
      );
    }
    function U(e, t) {
      return t != null && o("WAWebBotUtils").isMetaAiBot(e) && L();
    }
    function V(e) {
      return o("WAWebBotUtils").isMetaAiBot(e) && L();
    }
    function H() {
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
    function G() {
      return (
        H() !==
        o("WAWebImplicitThreadRoutingStrategy").ImplicitThreadRoutingStrategy
          .NewThread
      );
    }
    function z() {
      return (
        H() ===
        o("WAWebImplicitThreadRoutingStrategy").ImplicitThreadRoutingStrategy
          .DefaultThread
      );
    }
    function j() {
      return (
        L() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_chat_threads_pin_enabled",
        ) === !0
      );
    }
    function K() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_chat_threads_pin_max_count",
      );
    }
    function Q() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_bot_orphan_logic_enabled",
      );
    }
    function X() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_file_upload_size_limit_mb",
      );
      return e * 1024 * 1024;
    }
    function Y() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_video_upload_size_limit_mb",
      );
      return e * 1024 * 1024;
    }
    ((l.isBotPttEnabled = e),
      (l.shouldAnimateAsBotStream = s),
      (l.isBizBot3pAvailable = u),
      (l.isBotShortcutEntryPointEnabled = c),
      (l.isBotNewChatEntryPointEnabled = d),
      (l.ugcBotProfileSyncInterval = m),
      (l.shouldRenderStructuredRichResponseMsg = p),
      (l.showBotSearchPlugin = _),
      (l.showBotSearchPluginFor = f),
      (l.getNonBlockingBotNoticeIds = g),
      (l.getInlineBotNoticeIds = h),
      (l.getMasterBotNoticeId = y),
      (l.isMigrateAwayFromInlineBotTosEnabled = b),
      (l.isMetaAIChatInteractionEnabled = v),
      (l.isAiSearchAskButtonEnabled = S),
      (l.isAiChatThreadsEnabled = L),
      (l.isMetaAiThreadRenderingEnabled = E),
      (l.isAskMetaAiImprovementEnabled = k),
      (l.isAiModeSelectorInteractive = I),
      (l.isMetaAiNullStatePromptsGqlFetchEnabled = T),
      (l.isAiChatThreadsHistoricalMessageMigrationEnabled = D),
      (l.isMetaAiImageInputEnabled = x),
      (l.isBusinessAssistantImageInputEnabled = $),
      (l.isMediaInputEnabledForAssistantBotChat = P),
      (l.isMetaAiVideoInputEnabled = N),
      (l.isMetaAiDocUploadEnabled = M),
      (l.isAnyMetaAiMediaInputEnabled = w),
      (l.isAnyMetaAiAttachmentInputEnabled = A),
      (l.META_AI_DEFAULT_SUPPORTED_FILE_TYPES = F),
      (l.getMetaAiSupportedFileTypes = O),
      (l.getMetaAiFileUploadCountLimit = B),
      (l.getMetaAiImageSendLimit = W),
      (l.isMetaAiDocumentOcrImageConversionEnabled = q),
      (l.shouldSkipMetaAiChatlistHighlight = U),
      (l.isMetaAiChatInThreadsMode = V),
      (l.getImplicitThreadRoutingStrategy = H),
      (l.isImplicitThreadRoutingEnabled = G),
      (l.isDefaultThreadRoutingEnabled = z),
      (l.isAiThreadPinEnabled = j),
      (l.getAiThreadPinMaxCount = K),
      (l.isBotOrphanMsgEnabled = Q),
      (l.getMetaAiDocumentUploadSizeLimitBytes = X),
      (l.getMetaAiVideoUploadSizeLimitBytes = Y));
  },
  98,
);
