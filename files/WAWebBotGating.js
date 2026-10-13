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
        R() &&
        o("WAWebABProps").getABPropConfigValue(
          "bonsai_chat_list_entry_point_enabled",
        )
      );
    }
    function d() {
      return R() && !c();
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue("wabai_consent_cooldown");
    }
    function p() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "ai_home_bot_profile_sync_interval_sec",
        ) * 1e3
      );
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_forward_flow_surface_meta_ai_as_contact_enabled",
      );
    }
    function f(e) {
      return o("WAWebUnifiedResponseUtils").isUnifiedResponseVisible(e.unsafe())
        ? !0
        : e.richResponse.parseState !==
            o("WAWebRichResponse.flow").RichResponseParseState.Unparsed;
    }
    function g(e) {
      return h(e.type, o("WAWebMsgGetters").getIsBotSearchResponse(e));
    }
    function h(e, t) {
      return e !== o("WAWebMsgType").MSG_TYPE.REVOKED && t;
    }
    function y() {
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
    function C() {
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
    function b() {
      if (o("WAWebMobilePlatforms").isSMB()) {
        var e = v(
          o("WAWebABProps").getABPropConfigValue(
            "smb_web_ai_tos_master_notice_id",
          ),
        );
        if (e != null) return e;
      }
      return v(
        o("WAWebABProps").getABPropConfigValue("ai_pdfn_tos_master_notice_id"),
      );
    }
    function v(e) {
      if (e.trim() === "") return null;
      var t = Number(e);
      return isNaN(t) ? null : t;
    }
    function S() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_migrate_away_from_inline_tos_enabled",
      );
    }
    function R() {
      return !(
        o("WAWebMobilePlatforms").isSMB() ||
        !o("WAWebBotBaseGating").isBotEnabled() ||
        (!o("WAWebBotTos").hasSeenShortcutTos() &&
          !o("WAWebBotTos").canShowBotTos(
            o("WAWebBotTosIds").getBotShortcutTosId(),
          ))
      );
    }
    function L() {
      return (
        R() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_search_ask_button_web_enabled",
        )
      );
    }
    function E() {
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
    function k() {
      return (
        E() &&
        o("WAWebABProps").getABPropConfigValue("ai_chat_threads_web_enabled")
      );
    }
    function I() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_meta_ai_thread_rendering_enabled",
      );
    }
    function T() {
      return (
        R() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_web_ask_meta_ai_improvement_enabled",
        )
      );
    }
    function D() {
      return o("WAWebABProps").getABPropConfigValue(
        "is_ai_mode_selector_visible",
      );
    }
    function x() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_search_null_state_convo_starter_gql_enabled",
      );
    }
    function $() {
      return (
        o("WAWebBotBaseGating").isBotEnabled() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_chat_threads_historical_messages_migration_enabled",
        )
      );
    }
    function P() {
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
    function N() {
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
    function M(e) {
      return o("WAWebBotUtils").isMetaAiBot(e)
        ? O()
        : o("WAWebBotUtils").isBusinessAssistantBot(e)
          ? N()
          : !1;
    }
    function w() {
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
    function A() {
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
    function F() {
      return P() || w();
    }
    function O() {
      return F() || A();
    }
    var B = "pdf";
    function W() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_file_upload_supported_file_types",
      );
      return e !== "" ? e : B;
    }
    function q() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_file_upload_count_limit",
      );
    }
    function U() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_metabot_send_image_limit",
      );
    }
    function V() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_metabot_document_ocr_image_conversion_enabled",
      );
    }
    function H(e, t) {
      return t != null && o("WAWebBotUtils").isMetaAiBot(e) && k();
    }
    function G(e) {
      return o("WAWebBotUtils").isMetaAiBot(e) && k();
    }
    function z() {
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
    function j() {
      return (
        z() !==
        o("WAWebImplicitThreadRoutingStrategy").ImplicitThreadRoutingStrategy
          .NewThread
      );
    }
    function K() {
      return (
        z() ===
        o("WAWebImplicitThreadRoutingStrategy").ImplicitThreadRoutingStrategy
          .DefaultThread
      );
    }
    function Q() {
      return (
        k() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_chat_threads_pin_enabled",
        ) === !0
      );
    }
    function X() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_chat_threads_pin_max_count",
      );
    }
    function Y() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_bot_orphan_logic_enabled",
      );
    }
    function J() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_file_upload_size_limit_mb",
      );
      return e * 1024 * 1024;
    }
    function Z() {
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
      (l.bizBotConsentDismissalCooldown = m),
      (l.ugcBotProfileSyncInterval = p),
      (l.isAiAsContactEnabled = _),
      (l.shouldRenderStructuredRichResponseMsg = f),
      (l.showBotSearchPlugin = g),
      (l.showBotSearchPluginFor = h),
      (l.getNonBlockingBotNoticeIds = y),
      (l.getInlineBotNoticeIds = C),
      (l.getMasterBotNoticeId = b),
      (l.isMigrateAwayFromInlineBotTosEnabled = S),
      (l.isMetaAIChatInteractionEnabled = R),
      (l.isAiSearchAskButtonEnabled = L),
      (l.isAiChatThreadsEnabled = k),
      (l.isMetaAiThreadRenderingEnabled = I),
      (l.isAskMetaAiImprovementEnabled = T),
      (l.isAiModeSelectorInteractive = D),
      (l.isMetaAiNullStatePromptsGqlFetchEnabled = x),
      (l.isAiChatThreadsHistoricalMessageMigrationEnabled = $),
      (l.isMetaAiImageInputEnabled = P),
      (l.isBusinessAssistantImageInputEnabled = N),
      (l.isMediaInputEnabledForAssistantBotChat = M),
      (l.isMetaAiVideoInputEnabled = w),
      (l.isMetaAiDocUploadEnabled = A),
      (l.isAnyMetaAiMediaInputEnabled = F),
      (l.isAnyMetaAiAttachmentInputEnabled = O),
      (l.META_AI_DEFAULT_SUPPORTED_FILE_TYPES = B),
      (l.getMetaAiSupportedFileTypes = W),
      (l.getMetaAiFileUploadCountLimit = q),
      (l.getMetaAiImageSendLimit = U),
      (l.isMetaAiDocumentOcrImageConversionEnabled = V),
      (l.shouldSkipMetaAiChatlistHighlight = H),
      (l.isMetaAiChatInThreadsMode = G),
      (l.getImplicitThreadRoutingStrategy = z),
      (l.isImplicitThreadRoutingEnabled = j),
      (l.isDefaultThreadRoutingEnabled = K),
      (l.isAiThreadPinEnabled = Q),
      (l.getAiThreadPinMaxCount = X),
      (l.isBotOrphanMsgEnabled = Y),
      (l.getMetaAiDocumentUploadSizeLimitBytes = J),
      (l.getMetaAiVideoUploadSizeLimitBytes = Z));
  },
  98,
);
