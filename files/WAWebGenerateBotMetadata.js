__d(
  "WAWebGenerateBotMetadata",
  [
    "WAWebABProps",
    "WAWebAiThreadTypeUtils",
    "WAWebBotBaseGating",
    "WAWebBotGating",
    "WAWebBotGroupGatingUtils",
    "WAWebBotModeSelectionProtoUtils",
    "WAWebBotUnifiedResponseGating",
    "WAWebBotUnifiedResponseMutationUtils",
    "WAWebBotUtils",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebHatchBackendGating",
    "WAWebLidMigrationUtils",
    "WAWebMetaAiWaffleAuthTokenCache",
    "WAWebMsgType",
    "WAWebProtobufsAICommon.pb",
    "WAWebSubscriptionAgeGating",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.aiThreadInfo;
      if (t != null) {
        var n = o("WAWebAiThreadTypeUtils").getProtoTypeFromAiThreadType(
          t.aiThreadType,
        );
        return { clientInfo: { type: n } };
      }
    }
    function s(e) {
      var t = e.botMetricsMetadata;
      if (t != null)
        return {
          destinationId: t.destinationId,
          destinationEntryPoint: t.destinationEntryPoint,
        };
    }
    function u(e) {
      var t,
        n,
        r,
        o = (t = e.aiMediaCollectionInfo) == null ? void 0 : t.collectionId;
      if (!(o == null || e.subtype === "ai_media_collection"))
        return {
          collectionId: o,
          uploadOrderIndex:
            (n =
              (r = e.aiMediaCollectionInfo) == null
                ? void 0
                : r.uploadOrderIndex) != null
              ? n
              : void 0,
        };
    }
    function c(e) {
      var t, n;
      if (
        o("WAWebBotBaseGating").isBotEnabled() ||
        ((t = e.id) == null || (t = t.remote) == null
          ? void 0
          : t.isSupportAgentBot()) === !0 ||
        C((n = e.id) == null ? void 0 : n.remote, e.subtype)
      )
        return d(e);
      if (e.botGroupParticipant != null) return f(e);
    }
    function d(t) {
      var n,
        r = t.botPersonaId != null ? t.botPersonaId : void 0,
        a = h(t),
        i = t.aiThreadInfo != null ? e(t) : void 0,
        l = E(t.botModeSelection, t.botModeOverride),
        c = s(t),
        d = L(t.type),
        p = u(t),
        _ =
          t.unifiedResponseMutationMediaList != null
            ? o(
                "WAWebBotUnifiedResponseMutationUtils",
              ).generateUnifiedResponseMutation(
                t.unifiedResponseMutationMediaList,
              )
            : void 0,
        f = m(t);
      if (
        !y(
          [t.botGroupParticipant, r, a, l, c, d, p, _, f],
          (n = t.id) == null ? void 0 : n.remote,
          t.subtype,
        )
      )
        return {
          personaId: r,
          invokerJid: a,
          capabilityMetadata: t.id ? R(t.id.remote, t.subtype) : void 0,
          botThreadInfo: i,
          botGroupMetadata: g(t.botGroupParticipant),
          botModeSelectionMetadata: l,
          botMetricsMetadata: c,
          botDocumentMessageMetadata: d,
          aiMediaCollectionMetadata: p,
          unifiedResponseMutation: _,
          botLinkedAccountsMetadata: f,
        };
    }
    function m(e) {
      if (
        !(
          e.id == null ||
          !o("WAWebBotUtils").isMetaAiBot(e.id.remote) ||
          !o("WAWebBotBaseGating").isAiAccountLinkingEnabled() ||
          e.subtype === "bot_feedback" ||
          e.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL
        )
      ) {
        var t = o(
          "WAWebMetaAiWaffleAuthTokenCache",
        ).getCachedMetaAiWaffleAuthTokenBlob();
        if (!(t == null || t === ""))
          return {
            accounts: [],
            acAuthTokens: new TextEncoder().encode(t).buffer,
          };
      }
    }
    function p(e, t) {
      return e == null
        ? t != null
          ? t
          : void 0
        : t == null
          ? e
          : babelHelpers.extends({}, e, t);
    }
    function _(e, t) {
      var n, r, o;
      if (t.length === 0) return e;
      var a = (n = e.messageContextInfo) == null ? void 0 : n.botMetadata,
        i =
          (r =
            a == null || (o = a.botGroupMetadata) == null
              ? void 0
              : o.participantsMetadata) != null
            ? r
            : [],
        l = [],
        s = new Set();
      return (
        i.forEach(function (e) {
          var t = e.botFbid;
          t != null && t !== "" && !s.has(t) && (l.push(e), s.add(t));
        }),
        t.forEach(function (e) {
          e.user !== "" &&
            !s.has(e.user) &&
            (l.push({ botFbid: e.user }), s.add(e.user));
        }),
        l.length === 0
          ? e
          : babelHelpers.extends({}, e, {
              messageContextInfo: babelHelpers.extends(
                {},
                e.messageContextInfo,
                {
                  botMetadata: p(a, {
                    botGroupMetadata: { participantsMetadata: l },
                  }),
                },
              ),
            })
      );
    }
    function f(e) {
      var t = g(e.botGroupParticipant);
      return t != null ? { botGroupMetadata: t } : void 0;
    }
    function g(e) {
      if (
        !(
          e == null ||
          !o("WAWebBotGroupGatingUtils").isGroupBotParticipantEnabled(e)
        )
      )
        return { participantsMetadata: [{ botFbid: e.user }] };
    }
    function h(e) {
      if (e.subtype === "bot_feedback") {
        var t;
        return (t = e.botTargetSenderJid) == null ? void 0 : t.toJid();
      }
      if (e.botTargetSenderJid != null) {
        var n;
        return (n = o("WAWebLidMigrationUtils").toLid(e.botTargetSenderJid)) ==
          null
          ? void 0
          : n.toJid();
      }
    }
    function y(e, t, n) {
      return (
        e.every(function (e) {
          return e == null;
        }) && !C(t, n)
      );
    }
    function C(e, t) {
      return (
        e != null &&
        o("WAWebBotUtils").isHatchBot(e) &&
        t !== o("WAWebCommonMsgSubtypeTypes").MsgSubtype.BotRequestWelcome &&
        o("WAWebHatchBackendGating").isHatchIntegrationEnabledOnBackend()
      );
    }
    function b(e, t) {
      return (
        e != null &&
        o("WAWebBotUtils").isHatchBot(e) &&
        t !== o("WAWebCommonMsgSubtypeTypes").MsgSubtype.BotRequestWelcome &&
        o(
          "WAWebHatchBackendGating",
        ).isHatchApprovalNotificationEnabledOnBackend()
      );
    }
    function v(e, t) {
      return !C(e, t) ||
        !o("WAWebHatchBackendGating").isHatchConnectorsEnabledOnBackend()
        ? []
        : [
            o("WAWebProtobufsAICommon.pb")
              .BotCapabilityMetadata$BotCapabilityType
              .HATCH_CONNECTOR_ACTION_CARD_ENABLED,
          ];
    }
    function S(e, t) {
      return (
        e != null &&
        o("WAWebBotUtils").isHatchBot(e) &&
        t !== o("WAWebCommonMsgSubtypeTypes").MsgSubtype.BotRequestWelcome &&
        o("WAWebHatchBackendGating").isHatchSecureCredentialsEnabledOnBackend()
      );
    }
    function R(e, t) {
      var n,
        r = [
          (n = o("WAWebProtobufsAICommon.pb"))
            .BotCapabilityMetadata$BotCapabilityType
            .RICH_RESPONSE_STRUCTURED_RESPONSE,
          n.BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_HEADING,
          n.BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_SUB_HEADING,
          n.BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_TABLE,
          n.BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_INLINE_REELS,
        ].concat(
          o("WAWebBotUnifiedResponseGating").isUnifiedResponseSendingEnabled()
            ? [
                o("WAWebProtobufsAICommon.pb")
                  .BotCapabilityMetadata$BotCapabilityType
                  .RICH_RESPONSE_UNIFIED_RESPONSE,
                o("WAWebProtobufsAICommon.pb")
                  .BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_LATEX,
                o("WAWebProtobufsAICommon.pb")
                  .BotCapabilityMetadata$BotCapabilityType
                  .RICH_RESPONSE_LATEX_INLINE,
                o("WAWebProtobufsAICommon.pb")
                  .BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_CODE,
                o("WAWebProtobufsAICommon.pb")
                  .BotCapabilityMetadata$BotCapabilityType
                  .RICH_RESPONSE_NESTED_LIST,
                o("WAWebProtobufsAICommon.pb")
                  .BotCapabilityMetadata$BotCapabilityType
                  .RICH_RESPONSE_SOURCES_IN_MESSAGE,
                o("WAWebProtobufsAICommon.pb")
                  .BotCapabilityMetadata$BotCapabilityType
                  .RICH_RESPONSE_UNIFIED_SOURCES,
                o("WAWebProtobufsAICommon.pb")
                  .BotCapabilityMetadata$BotCapabilityType
                  .RICH_RESPONSE_UNIFIED_TEXT_COMPONENT,
                o("WAWebProtobufsAICommon.pb")
                  .BotCapabilityMetadata$BotCapabilityType
                  .RICH_RESPONSE_UNIFIED_DOMAIN_CITATIONS,
                o("WAWebProtobufsAICommon.pb")
                  .BotCapabilityMetadata$BotCapabilityType
                  .RICH_RESPONSE_UR_INLINE_REELS_ENABLED,
              ].concat(
                o("WAWebABProps").getABPropConfigValue(
                  "wa_web_imagine_ur_enabled",
                )
                  ? [
                      o("WAWebProtobufsAICommon.pb")
                        .BotCapabilityMetadata$BotCapabilityType
                        .RICH_RESPONSE_UR_IMAGINE,
                    ]
                  : [],
                o("WAWebABProps").getABPropConfigValue(
                  "wa_web_ur_imagine_video_enabled",
                )
                  ? [
                      o("WAWebProtobufsAICommon.pb")
                        .BotCapabilityMetadata$BotCapabilityType
                        .RICH_RESPONSE_UR_IMAGINE_VIDEO,
                    ]
                  : [],
                o("WAWebABProps").getABPropConfigValue(
                  "ai_rich_response_grid_image_enabled",
                )
                  ? [
                      o("WAWebProtobufsAICommon.pb")
                        .BotCapabilityMetadata$BotCapabilityType
                        .RICH_RESPONSE_GRID_IMAGE,
                      o("WAWebProtobufsAICommon.pb")
                        .BotCapabilityMetadata$BotCapabilityType
                        .RICH_RESPONSE_GRID_IMAGE_3P,
                    ]
                  : [],
                o("WAWebABProps").getABPropConfigValue(
                  "wa_web_ur_bloks_enabled",
                )
                  ? [
                      o("WAWebProtobufsAICommon.pb")
                        .BotCapabilityMetadata$BotCapabilityType
                        .RICH_RESPONSE_UR_BLOKS_ENABLED,
                    ]
                  : [],
                o(
                  "WAWebBotUnifiedResponseGating",
                ).isUrZeitgeistCitationsEnabled()
                  ? [
                      o("WAWebProtobufsAICommon.pb")
                        .BotCapabilityMetadata$BotCapabilityType
                        .RICH_RESPONSE_UR_ZEITGEIST_CITATIONS,
                    ]
                  : [],
                o(
                  "WAWebBotUnifiedResponseGating",
                ).isUrZeitgeistCarouselEnabled()
                  ? [
                      o("WAWebProtobufsAICommon.pb")
                        .BotCapabilityMetadata$BotCapabilityType
                        .RICH_RESPONSE_UR_ZEITGEIST_CAROUSEL,
                    ]
                  : [],
                o("WAWebABProps").getABPropConfigValue(
                  "ai_rich_response_inline_links_enabled",
                )
                  ? [
                      o("WAWebProtobufsAICommon.pb")
                        .BotCapabilityMetadata$BotCapabilityType
                        .RICH_RESPONSE_INLINE_LINKS_ENABLED,
                    ]
                  : [],
                o("WAWebABProps").getABPropConfigValue(
                  "ai_rich_response_ur_media_grid_enabled",
                )
                  ? [
                      o("WAWebProtobufsAICommon.pb")
                        .BotCapabilityMetadata$BotCapabilityType
                        .RICH_RESPONSE_UR_MEDIA_GRID_ENABLED,
                    ]
                  : [],
                o("WAWebABProps").getABPropConfigValue(
                  "meta_ai_in_app_survey_enabled",
                )
                  ? [
                      o("WAWebProtobufsAICommon.pb")
                        .BotCapabilityMetadata$BotCapabilityType
                        .RICH_RESPONSE_IN_APP_SURVEY,
                    ]
                  : [],
                o("WAWebABProps").getABPropConfigValue(
                  "ai_rich_response_side_by_side_survey_enabled",
                )
                  ? [
                      o("WAWebProtobufsAICommon.pb")
                        .BotCapabilityMetadata$BotCapabilityType
                        .RICH_RESPONSE_SIDE_BY_SIDE_SURVEY,
                    ]
                  : [],
                [
                  o("WAWebProtobufsAICommon.pb")
                    .BotCapabilityMetadata$BotCapabilityType
                    .RICH_RESPONSE_UR_REASONING,
                ],
              )
            : [],
          [
            o("WAWebProtobufsAICommon.pb")
              .BotCapabilityMetadata$BotCapabilityType
              .SESSION_TRANSPARENCY_SYSTEM_MESSAGE,
          ],
          o("WAWebBotBaseGating").isAiSubscriptionMeteringEnabled()
            ? [
                o("WAWebProtobufsAICommon.pb")
                  .BotCapabilityMetadata$BotCapabilityType
                  .AI_SUBSCRIPTION_METERING_ENABLED,
              ]
            : [],
          o("WAWebBotBaseGating").isAiSubscriptionEnabled() &&
            o("WAWebSubscriptionAgeGating").isEligibleForSubscriptionsByAge()
            ? [
                o("WAWebProtobufsAICommon.pb")
                  .BotCapabilityMetadata$BotCapabilityType
                  .AI_SUBSCRIPTION_ENABLED,
              ]
            : [],
          b(e, t)
            ? [
                o("WAWebProtobufsAICommon.pb")
                  .BotCapabilityMetadata$BotCapabilityType
                  .HATCH_NOTIFICATION_METADATA_EVENT_ENABLED,
              ]
            : [],
          v(e, t),
          S(e, t)
            ? [
                o("WAWebProtobufsAICommon.pb")
                  .BotCapabilityMetadata$BotCapabilityType
                  .HATCH_SECURE_CREDENTIAL_CARD_ENABLED,
              ]
            : [],
        );
      return r.length === 0 ? void 0 : { capabilities: r };
    }
    function L(e) {
      if (e === o("WAWebMsgType").MSG_TYPE.DOCUMENT) {
        var t = o("WAWebBotGating").isMetaAiDocumentOcrImageConversionEnabled()
          ? o("WAWebProtobufsAICommon.pb")
              .BotDocumentMessageMetadata$DocumentPluginType.OCR_AND_IMAGES
          : o("WAWebProtobufsAICommon.pb")
              .BotDocumentMessageMetadata$DocumentPluginType.TEXT_EXTRACTION;
        return { pluginType: t };
      }
    }
    function E(e, t) {
      if (
        !(e == null || e.length === 0) &&
        o("WAWebBotBaseGating").isAiModeSelectorMessagingEnabled()
      )
        return {
          mode: e.map(
            o("WAWebBotModeSelectionProtoUtils")
              .getProtoModeFromBotSelectionMode,
          ),
          overrideMode: t != null ? [].concat(t) : [],
        };
    }
    ((l.generateAiThreadInfo = e),
      (l.generateBotMetricsMetadata = s),
      (l.generateAiMediaCollectionMetadata = u),
      (l.generateBotMetadata = c),
      (l.mergeBotMetadata = p),
      (l.addGroupAgentBotMetadata = _),
      (l.generateBotCapabilityMetadata = R),
      (l.generateBotModeSelectionMetadata = E));
  },
  98,
);
