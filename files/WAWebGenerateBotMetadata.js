__d(
  "WAWebGenerateBotMetadata",
  [
    "WAWebAiThreadTypeUtils",
    "WAWebBotBaseGating",
    "WAWebBotGating",
    "WAWebBotGroupGatingUtils",
    "WAWebBotModeSelectionProtoUtils",
    "WAWebBotUnifiedResponseGating",
    "WAWebBotUnifiedResponseMutationUtils",
    "WAWebBotUtils",
    "WAWebLidMigrationUtils",
    "WAWebMetaAiWaffleAuthTokenCache",
    "WAWebMsgType",
    "WAWebProtobufsAICommon.pb",
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
      if (o("WAWebBotBaseGating").isBotEnabled()) return d(e);
      if (e.botGroupParticipant != null) return _(e);
    }
    function d(t) {
      var n = t.botPersonaId != null ? t.botPersonaId : void 0,
        r = g(t),
        a = t.aiThreadInfo != null ? e(t) : void 0,
        i = C(t.botModeSelection, t.botModeOverride),
        l = s(t),
        c = y(t.type),
        d = u(t),
        p =
          t.unifiedResponseMutationMediaList != null
            ? o(
                "WAWebBotUnifiedResponseMutationUtils",
              ).generateUnifiedResponseMutation(
                t.unifiedResponseMutationMediaList,
              )
            : void 0,
        _ = m(t);
      if (
        !(
          t.botGroupParticipant == null &&
          n == null &&
          r == null &&
          i == null &&
          l == null &&
          c == null &&
          d == null &&
          p == null &&
          _ == null
        )
      )
        return {
          personaId: n,
          invokerJid: r,
          capabilityMetadata: t.id ? h(t.id.remote) : void 0,
          botThreadInfo: a,
          botGroupMetadata: f(t.botGroupParticipant),
          botModeSelectionMetadata: i,
          botMetricsMetadata: l,
          botDocumentMessageMetadata: c,
          aiMediaCollectionMetadata: d,
          unifiedResponseMutation: p,
          botLinkedAccountsMetadata: _,
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
    function _(e) {
      var t = f(e.botGroupParticipant);
      return t != null ? { botGroupMetadata: t } : void 0;
    }
    function f(e) {
      if (
        !(
          !(
            o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled() ||
            o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled()
          ) || e == null
        )
      )
        return {
          participantsMetadata: [{ botFbid: e == null ? void 0 : e.user }],
        };
    }
    function g(e) {
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
    function h(e) {
      var t,
        n = [
          (t = o("WAWebProtobufsAICommon.pb"))
            .BotCapabilityMetadata$BotCapabilityType
            .RICH_RESPONSE_STRUCTURED_RESPONSE,
          t.BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_HEADING,
          t.BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_SUB_HEADING,
          t.BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_TABLE,
          t.BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_INLINE_REELS,
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
                o("WAWebBotUnifiedResponseGating").isImagineUrEnabled()
                  ? [
                      o("WAWebProtobufsAICommon.pb")
                        .BotCapabilityMetadata$BotCapabilityType
                        .RICH_RESPONSE_UR_IMAGINE,
                    ]
                  : [],
                o("WAWebBotUnifiedResponseGating").isUrImagineVideoEnabled()
                  ? [
                      o("WAWebProtobufsAICommon.pb")
                        .BotCapabilityMetadata$BotCapabilityType
                        .RICH_RESPONSE_UR_IMAGINE_VIDEO,
                    ]
                  : [],
                o(
                  "WAWebBotUnifiedResponseGating",
                ).isRichResponseGridImageEnabled()
                  ? [
                      o("WAWebProtobufsAICommon.pb")
                        .BotCapabilityMetadata$BotCapabilityType
                        .RICH_RESPONSE_GRID_IMAGE,
                      o("WAWebProtobufsAICommon.pb")
                        .BotCapabilityMetadata$BotCapabilityType
                        .RICH_RESPONSE_GRID_IMAGE_3P,
                    ]
                  : [],
                o("WAWebBotUnifiedResponseGating").isUrBloksEnabled()
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
                o(
                  "WAWebBotUnifiedResponseGating",
                ).isRichResponseInlineLinksEnabled()
                  ? [
                      o("WAWebProtobufsAICommon.pb")
                        .BotCapabilityMetadata$BotCapabilityType
                        .RICH_RESPONSE_INLINE_LINKS_ENABLED,
                    ]
                  : [],
                o("WAWebBotUnifiedResponseGating").isUrMediaGridEnabled()
                  ? [
                      o("WAWebProtobufsAICommon.pb")
                        .BotCapabilityMetadata$BotCapabilityType
                        .RICH_RESPONSE_UR_MEDIA_GRID_ENABLED,
                    ]
                  : [],
                o(
                  "WAWebBotUnifiedResponseGating",
                ).isRichResponseInAppSurveyEnabled()
                  ? [
                      o("WAWebProtobufsAICommon.pb")
                        .BotCapabilityMetadata$BotCapabilityType
                        .RICH_RESPONSE_IN_APP_SURVEY,
                    ]
                  : [],
                o(
                  "WAWebBotUnifiedResponseGating",
                ).isRichResponseSideBySideSurveyEnabled()
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
          o(
            "WAWebBotBaseGating",
          ).isAiContinuousSessionTransparencyNoticeEnabled(e)
            ? [
                o("WAWebProtobufsAICommon.pb")
                  .BotCapabilityMetadata$BotCapabilityType
                  .SESSION_TRANSPARENCY_SYSTEM_MESSAGE,
              ]
            : [],
          o("WAWebBotBaseGating").isAiSubscriptionMeteringEnabled()
            ? [
                o("WAWebProtobufsAICommon.pb")
                  .BotCapabilityMetadata$BotCapabilityType
                  .AI_SUBSCRIPTION_METERING_ENABLED,
              ]
            : [],
          o("WAWebBotBaseGating").isAiSubscriptionEnabled()
            ? [
                o("WAWebProtobufsAICommon.pb")
                  .BotCapabilityMetadata$BotCapabilityType
                  .AI_SUBSCRIPTION_ENABLED,
              ]
            : [],
        );
      return n.length === 0 ? void 0 : { capabilities: n };
    }
    function y(e) {
      if (e === o("WAWebMsgType").MSG_TYPE.DOCUMENT) {
        var t = o("WAWebBotGating").isMetaAiDocumentOcrImageConversionEnabled()
          ? o("WAWebProtobufsAICommon.pb")
              .BotDocumentMessageMetadata$DocumentPluginType.OCR_AND_IMAGES
          : o("WAWebProtobufsAICommon.pb")
              .BotDocumentMessageMetadata$DocumentPluginType.TEXT_EXTRACTION;
        return { pluginType: t };
      }
    }
    function C(e, t) {
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
      (l.generateBotCapabilityMetadata = h),
      (l.generateBotModeSelectionMetadata = C));
  },
  98,
);
