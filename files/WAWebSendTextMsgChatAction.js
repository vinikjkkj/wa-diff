__d(
  "WAWebSendTextMsgChatAction",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebABProps",
    "WAWebAppTracker",
    "WAWebBackendRuntime",
    "WAWebBizAgentAction",
    "WAWebBizBotTosUtils",
    "WAWebBotBaseGating",
    "WAWebBotFrontendLoggingUtils",
    "WAWebBotGroupGatingUtils",
    "WAWebBotLoggingUtils",
    "WAWebBotMessageSecret",
    "WAWebBotProfileCollection",
    "WAWebChatGetters",
    "WAWebCoexV2RelayEligibility",
    "WAWebDBProcessMessage",
    "WAWebDBThreadMetadataBulkHelper",
    "WAWebEmptyChatSystemMsg",
    "WAWebGetEphemeralFieldsMsgActionsUtils",
    "WAWebGroupMetadataGetters",
    "WAWebHatchCommandMetadataUtils",
    "WAWebLidMigrationFrontendUtils",
    "WAWebLimitSharingPropMappingUtils",
    "WAWebMaybeGetAppendedAiThreadAttributes",
    "WAWebMaybeGetAppendedViewRepliesThreadId",
    "WAWebMaybeGetBotModeSelection",
    "WAWebMessagePluginGenerateReportingTokenContent",
    "WAWebMessageSendPerfReporter",
    "WAWebMessageSendReporter",
    "WAWebMessageSendReporterFrontendDeps",
    "WAWebMessageSendService",
    "WAWebMessagingGatingUtils",
    "WAWebMsgDataUtils",
    "WAWebMsgInfoUtils",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebNonJidMentionType",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebPresenceChatAction",
    "WAWebPrivacyMode_WORKER_INCOMPATIBLE",
    "WAWebQbmMessageReplyLogEventLazy",
    "WAWebQuestionsGatingUtils",
    "WAWebRichTextFormatMessageSendLogger",
    "WAWebSendMsgChatActionUtils",
    "WAWebSendMsgRecordAction",
    "WAWebSendMsgResultAction",
    "WAWebSpoilerFormatRegex",
    "WAWebStateUtils",
    "WAWebThreadMsgUtils",
    "WAWebThreadWriteThroughAction",
    "WAWebUserPrefsMeUser",
    "WAWebWamMsgUtils",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "isEmptyObject",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["initiatedBy"],
      s,
      u,
      c,
      d,
      m = r("requireDeferred")("WAWebProductCatalogLogEvents").__setRef(
        "WAWebSendTextMsgChatAction",
      );
    function p(e, t) {
      return o(
        "WAWebRichTextFormatMessageSendLogger",
      ).maybeCreateRichTextFormatMessageSendCommit(e, t);
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          n === void 0 && (n = {});
          var r = o("WAWebStateUtils").unproxy(e),
            a = yield g(r, t, n);
          if (a) {
            yield o("WAWebBizBotTosUtils").maybeShowBizBot1pTos(r);
            var i = yield o(
                "WAWebSendMsgChatActionUtils",
              ).maybeDisableEphemeralityForMsg(r, a),
              l = i.msgData,
              s = i.systemMsgs;
            return y(r, l, s, {
              skipRichTextFormatLogging: n.skipRichTextFormatLogging,
            });
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i, l, d, p, _, f;
          a === void 0 && (a = {});
          var g = (n || "").trim();
          if (g === "") return null;
          var h = a,
            y = h.aiMediaCollectionInfo,
            C = h.aiThreadInfo,
            v = h.ctwaContext,
            S = h.encryptedCommentFields,
            R = h.groupMentions,
            L = h.isQuestion,
            E = h.isWamoSub,
            k = h.linkPreview,
            I = h.mentionedJidList,
            T = h.paymentLinkMetadata,
            D = h.questionReplyQuotedMessage,
            x = h.quotedMsg,
            $ = h.quotedMsgAdminGroupJid,
            P = h.quotedMsgAdminGroupSubject,
            N = h.quotedMsgAdminParentGroupJid,
            M = h.selectedCarouselCardIndex,
            w = h.selectedId,
            A = h.selectedIndex,
            F = h.threadIds;
          o("WAWebPresenceChatAction").clearPresence(t);
          var O;
          if (x) O = x.msgContextInfo(t.id);
          else if ($ != null && P != null && N != null)
            O = {
              quotedRemoteJid: $,
              quotedGroupSubject: P,
              quotedParentGroupJid: N,
            };
          else if ($ != null) O = { quotedRemoteJid: $ };
          else if (L === !0)
            if (
              o("WAWebQuestionsGatingUtils").isQuestionSenderEnabledForMsgType(
                o("WAWebMsgType").MSG_TYPE.CHAT,
              )
            )
              O = { isQuestion: !0 };
            else
              return (
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[questions] Unsupported question message type: ",
                        "",
                      ])),
                    o("WAWebMsgType").MSG_TYPE.CHAT,
                  )
                  .tags("questions")
                  .sendLogs(
                    "questions-unsupported-message-type-" +
                      o("WAWebMsgType").MSG_TYPE.CHAT,
                  ),
                null
              );
          else if (D)
            if (
              o(
                "WAWebQuestionsGatingUtils",
              ).isQuestionReplySenderEnabledForMsgType(
                o("WAWebMsgType").MSG_TYPE.CHAT,
              )
            )
              O = { questionReplyQuotedMessage: D };
            else
              return (
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[questions] Unsupported question reply message type: ",
                        "",
                      ])),
                    o("WAWebMsgType").MSG_TYPE.CHAT,
                  )
                  .tags("questions")
                  .sendLogs(
                    "questions-unsupported-reply-message-type-" +
                      o("WAWebMsgType").MSG_TYPE.CHAT,
                  ),
                null
              );
          var B;
          if (t.limitSharing != null) {
            var W = t.limitSharing,
              q = W.initiatedBy,
              U = babelHelpers.objectWithoutPropertiesLoose(W, e);
            ((B = babelHelpers.extends({}, U, {
              initiatedByMe: o("WAWebUserPrefsMeUser").isMeAccount(q),
            })),
              r("WAWebWid").isGroup(t.id) &&
                typeof B.trigger == "string" &&
                (B.trigger = o(
                  "WAWebLimitSharingPropMappingUtils",
                ).getLimitSharingTriggerFromGroupSettingsChange(B.trigger)));
          }
          var V = babelHelpers.extends({}, k),
            H = babelHelpers.extends(
              {},
              V,
              O,
              {
                mentionedJidList: I,
                groupMentions: R,
                ctwaContext: v,
                body: g,
                isSpoiler:
                  o("WAWebSpoilerFormatRegex").hasSpoilerMarkup(g) &&
                  o("WAWebABProps").getABPropConfigValue(
                    "is_spoiler_rich_format_sender_enabled",
                  ),
                subtype: r("isEmptyObject")(V) ? null : "url",
                urlText: t.urlText,
                urlNumber: t.urlNumber,
                botMsgBodyType: a.botMsgBodyType,
              },
              yield o("WAWebMsgDataUtils").genOutgoingMsgData(t, "chat"),
              {
                paymentLinkMetadata: T,
                limitSharing: B,
                threadIds: F,
                aiThreadInfo: C,
                aiMediaCollectionInfo: y,
              },
              o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(t),
            ),
            G = yield o(
              "WAWebMaybeGetAppendedAiThreadAttributes",
            ).maybeGetAppendedAiThreadAttributes(H),
            z = G[0],
            j = G[1];
          (o("WAWebBotFrontendLoggingUtils").maybeLogFirstPromptSentInAiThread(
            t,
            babelHelpers.extends({}, H, { threadIds: z }),
          ),
            (H.threadIds = z),
            (H.aiThreadInfo = j),
            (H.threadIds =
              (i = o(
                "WAWebMaybeGetAppendedViewRepliesThreadId",
              ).maybeGetAppendedViewRepliesThreadId(H)) != null
                ? i
                : H.threadIds),
            (H.botModeSelection =
              (l = H.botModeSelection) != null
                ? l
                : o("WAWebMaybeGetBotModeSelection").maybeGetBotModeSelection(
                    t,
                    H,
                  )),
            (H.botModeOverride =
              (d = H.botModeOverride) != null
                ? d
                : o(
                    "WAWebMaybeGetBotModeSelection",
                  ).maybeGetBotDynamicModeSelection(t, H)),
            t.urlText && (t.urlText = void 0),
            t.urlNumber && (t.urlNumber = void 0),
            A != null &&
              ((H.type = "template_button_reply"),
              (H.selectedId = w),
              (H.selectedIndex = A),
              (H.selectedCarouselCardIndex = M)));
          var K = o(
            "WAWebPrivacyMode_WORKER_INCOMPATIBLE",
          ).getPrivacyModeFromModel(t.id);
          if (
            (K != null && (H.privacyModeWhenSent = K),
            (H.agentId = o("WAWebBizAgentAction").getAgentId(H)),
            o("WAWebBotBaseGating").isBotEnabled() &&
              (!o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() ||
                ((p = t.groupMetadata) == null ? void 0 : p.isOpenBotGroup) !==
                  !0))
          ) {
            var Q = b(t, I);
            if (Q != null) {
              H.invokedBotWid = Q;
              var X = x == null ? void 0 : x.botTargetSenderJid;
              X != null &&
                !o("WAWebUserPrefsMeUser").isMeAccount(X) &&
                (H.botTargetSenderJid =
                  x == null ? void 0 : x.botTargetSenderJid);
            }
          }
          var Y = t.isCAGAdmin(),
            J = H.subtype === "url",
            Z = !!(
              o("WAWebBotBaseGating").isBotEnabled() &&
              (_ = H.invokedBotWid) != null &&
              _.isBot()
            ),
            ee = !!(
              H.to.isBot() &&
              (o("WAWebBotBaseGating").isBotEnabled() ||
                H.to.isSupportAgentBot())
            ),
            te =
              o("WAWebMessagingGatingUtils").isReportingTokenSendingEnabled() &&
              o(
                "WAWebMessagePluginGenerateReportingTokenContent",
              ).isMsgTypeReportingTokenCompatible(H.type, H.subtype),
            ne =
              H.messageSecret == null &&
              (yield o(
                "WAWebCoexV2RelayEligibility",
              ).genIsCoexV2RelayEligibleSend(H.to));
          ((Y || J || Z || ee || te || ne) &&
            (H.messageSecret = self.crypto.getRandomValues(new Uint8Array(32))),
            (Z ||
              (o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() &&
                ((f = t.groupMetadata) == null ? void 0 : f.isOpenBotGroup) ===
                  !0)) &&
              (H.botMessageSecret = yield o(
                "WAWebBotMessageSecret",
              ).genBotMsgSecretFromMsgSecret(H.messageSecret)));
          var re = o("WAWebBotGroupGatingUtils").getSendGroupBotParticipant(
            t.groupMetadata,
          );
          if ((re != null && (H.botGroupParticipant = re), Z || ee)) {
            var oe;
            if ((Z ? (oe = H.invokedBotWid) : ee && (oe = H.to), oe != null)) {
              var ae,
                ie =
                  (ae = o("WAWebBotProfileCollection").BotProfileCollection.get(
                    oe,
                  )) == null
                    ? void 0
                    : ae.personaId;
              ie != null && (H.botPersonaId = ie);
            }
          }
          var le = o("WAWebBotLoggingUtils").maybeGetBotMetricsMetadata(H);
          H.botMetricsMetadata = le;
          var se = o(
            "WAWebHatchCommandMetadataUtils",
          ).resolveHatchCommandMetadata(g, t.id);
          (se != null && (H.botCommandMetadata = se),
            x &&
              x.type === o("WAWebMsgType").MSG_TYPE.PRODUCT &&
              m
                .load()
                .then(function (e) {
                  return e.logProductMessageBusinessSend(x, x.sessionId);
                })
                .catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[send-text-msg] failed to load catalog log events: ",
                          "",
                        ])),
                      e,
                    )
                    .sendLogs("send-text-msg-catalog-log-load-failed");
                }),
            S &&
              ((H.type = o("WAWebMsgType").MSG_TYPE.COMMENT),
              (H.encIv = S == null ? void 0 : S.encIv),
              (H.encPayload = S == null ? void 0 : S.encPayload),
              (H.targetMessageKey = S == null ? void 0 : S.targetMessageKey)),
            E === !0 &&
              o("WAWebChatGetters").getIsNewsletter(t) &&
              o(
                "WAWebNewsletterGatingUtils",
              ).isWamoSubCreatorExperienceSupported() &&
              (H.isWamoSub = !0));
          var ue = 0;
          return (
            a.maybeNonJidMentioned === !0 &&
              /@all\b/g.test(g) &&
              (ue |= r("WAWebNonJidMentionType").MENTION_ALL),
            ue > 0 && (H.nonJidMentions = ue),
            a.hatchRequest != null &&
              (H.hatchMetadataSync = {
                type: "req",
                requestId: H.id.id,
                request: a.hatchRequest,
              }),
            H
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n, r) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i) {
            var l, s, u, c;
            (i === void 0 && (i = {}),
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "addAndSendTextMsg chat: ",
                    "",
                  ])),
                e.id.toLogString(),
              ),
              yield o(
                "WAWebLidMigrationFrontendUtils",
              ).validateMissingAccountLid(e, t, "addAndSendTextMsg"));
            var m = new (o("WAWebMsgModel").Msg)(t),
              p =
                i.skipRichTextFormatLogging === !0
                  ? null
                  : o(
                      "WAWebRichTextFormatMessageSendLogger",
                    ).maybeCreateRichTextFormatMessageSendCommit(m, e.id),
              _ = o("WAWebSendMsgChatActionUtils").maybeGetOpusSystemMsg(
                e,
                "opus-send-text-fail",
              ),
              f = []
                .concat(
                  _ ? [_] : [],
                  (l = yield r("WAWebEmptyChatSystemMsg")(m, e)) != null
                    ? l
                    : [],
                  a != null ? a : [],
                )
                .filter(Boolean),
              g = !!((s = e.groupMetadata) != null && s.isLidAddressingMode),
              h = o("WAWebMsgInfoUtils").getGroupMessageSendReporterOptions(
                e.id,
                o("WAWebWamMsgUtils").msgIsLid(t, e.id, g),
              );
            ((m.wamMessageSendReporter = new (o(
              "WAWebMessageSendReporter",
            ).MessageSendReporter)(
              m,
              babelHelpers.extends({}, h, {
                frontendDeps: o("WAWebMessageSendReporterFrontendDeps")
                  .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
              }),
            )),
              (m.wamMessageSendPerfReporter = new (o(
                "WAWebMessageSendPerfReporter",
              ).MessageSendPerfReporter)({
                chatWid: m.to,
                mediaType: o("WAWebWamMsgUtils").getWamMediaType(m),
                messageType: o("WAWebWamMsgUtils").getWamMessageType(m),
              })),
              o("WAWebAppTracker").AppTracker.start(
                o("WAWebAppTracker").AppTrackerType.SendMessage,
              ),
              (u = m.wamMessageSendPerfReporter) == null ||
                u.startRenderedStage(),
              f.length > 0 && e.msgs.add(f),
              e.msgs.add(m),
              o("WAWebThreadWriteThroughAction").writeThroughToLiveThreads(e, [
                m,
              ]),
              (c = m.wamMessageSendPerfReporter) == null ||
                c.postRenderedStage(),
              o("WAWebQbmMessageReplyLogEventLazy").logQbmMessageReply({
                chat: e,
                replyMessageType: m.type,
                replyMsg: m,
              }),
              (e.createdLocally = !1));
            var y = f.length > 0 ? [].concat(f, [t]) : [t],
              C = yield o("WAWebOrchestratorNonPersistedJob")
                .createNonPersistedJob(
                  "sendMessage",
                  o("WAWebBackendRuntime").isWebDiBackendEnabled()
                    ? function () {
                        return o("WAWebBackendRuntime")
                          .runtime(
                            o("WAWebMessageSendService").MessageSendService,
                          )
                          .storeAndSend(m, y, e.id);
                      }
                    : n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* () {
                          var n, r;
                          ((n = m.wamMessageSendPerfReporter) == null ||
                            n.startSavedStage(),
                            yield o("WAWebDBProcessMessage").storeMessages(
                              y,
                              e.id,
                            ),
                            (r = m.wamMessageSendPerfReporter) == null ||
                              r.postSavedStage(),
                            o("WAWebThreadMsgUtils").isThreadMsg(t) &&
                              (yield o(
                                "WAWebDBThreadMetadataBulkHelper",
                              ).persistNewMessagesThreadMetadataInBulk([t])));
                          var a = yield o(
                            "WAWebSendMsgRecordAction",
                          ).sendMsgRecord(m);
                          return a;
                        },
                      ),
                  {
                    priority: o("WAJobOrchestratorTypes").JOB_PRIORITY
                      .UI_ACTION,
                  },
                )
                .waitUntilCompleted();
            return (
              (C == null ? void 0 : C.messageSendResult) ===
                o("WAWebSendMsgResultAction").SendMsgResult.OK &&
                (p == null || p()),
              C
            );
          },
        )),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return t == null
        ? void 0
        : t.find(function (t) {
            return t.isBot() && v(e, t);
          });
    }
    function v(e, t) {
      if (!e.id.isGroup()) return !0;
      var n = e.groupMetadata;
      return o("WAWebBotGroupGatingUtils").isGroupBotInvokeAllowed(
        t,
        n == null ||
          n.announce === !0 ||
          o("WAWebGroupMetadataGetters").getIsCag(n),
      );
    }
    ((l.maybeCreateTextMsgRichTextFormatSendCommit = p),
      (l.sendTextMsgToChat = _),
      (l.createTextMsgData = g),
      (l.addAndSendTextMsg = y),
      (l.getInvokedBotWid = b));
  },
  98,
);
