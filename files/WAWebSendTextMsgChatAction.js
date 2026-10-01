__d(
  "WAWebSendTextMsgChatAction",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebABProps",
    "WAWebAppTracker",
    "WAWebBizAgentAction",
    "WAWebBizBotTosUtils",
    "WAWebBotBaseGating",
    "WAWebBotFrontendLoggingUtils",
    "WAWebBotGroupGatingUtils",
    "WAWebBotLoggingUtils",
    "WAWebBotMessageSecret",
    "WAWebBotProfileCollection",
    "WAWebBotUtils",
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
    "WAWebProductCatalogLogEvents",
    "WAWebQuestionsGatingUtils",
    "WAWebSendMsgChatActionUtils",
    "WAWebSendMsgRecordAction",
    "WAWebSpoilerFormatRegex",
    "WAWebStateUtils",
    "WAWebThreadMsgUtils",
    "WAWebThreadWriteThroughAction",
    "WAWebUserPrefsMeUser",
    "WAWebWamMsgUtils",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "isEmptyObject",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["initiatedBy"],
      s,
      u,
      c;
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          n === void 0 && (n = {});
          var r = o("WAWebStateUtils").unproxy(e),
            a = yield p(r, t, n);
          if (a) {
            yield o("WAWebBizBotTosUtils").maybeShowBizBot1pTos(r);
            var i = yield o(
                "WAWebSendMsgChatActionUtils",
              ).maybeDisableEphemeralityForMsg(r, a),
              l = i.msgData,
              s = i.systemMsgs;
            return f(r, l, s);
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i, l, c, d, m, p, _, f;
          a === void 0 && (a = {});
          var g = (n || "").trim();
          if (g === "") return null;
          var y = a,
            C = y.aiMediaCollectionInfo,
            b = y.aiThreadInfo,
            v = y.ctwaContext,
            S = y.encryptedCommentFields,
            R = y.groupMentions,
            L = y.isQuestion,
            E = y.isWamoSub,
            k = y.linkPreview,
            I = y.mentionedJidList,
            T = y.paymentLinkMetadata,
            D = y.questionReplyQuotedMessage,
            x = y.quotedMsg,
            $ = y.quotedMsgAdminGroupJid,
            P = y.quotedMsgAdminGroupSubject,
            N = y.quotedMsgAdminParentGroupJid,
            M = y.selectedCarouselCardIndex,
            w = y.selectedId,
            A = y.selectedIndex,
            F = y.threadIds;
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
                aiThreadInfo: b,
                aiMediaCollectionInfo: C,
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
              (c = H.botModeOverride) != null
                ? c
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
                ((d = t.groupMetadata) == null ? void 0 : d.isOpenBotGroup) !==
                  !0))
          ) {
            var Q = h(t, I);
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
              (m = H.invokedBotWid) != null &&
              m.isBot()
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
          if (
            ((Y || J || Z || ee || te || ne) &&
              (H.messageSecret = self.crypto.getRandomValues(
                new Uint8Array(32),
              )),
            (Z ||
              (o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() &&
                ((p = t.groupMetadata) == null ? void 0 : p.isOpenBotGroup) ===
                  !0)) &&
              (H.botMessageSecret = yield o(
                "WAWebBotMessageSecret",
              ).genBotMsgSecretFromMsgSecret(H.messageSecret)),
            o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() &&
            ((_ = t.groupMetadata) == null ? void 0 : _.isOpenBotGroup) === !0
              ? (H.botGroupParticipant = o("WAWebBotUtils").META_BOT_FBID_WID)
              : o(
                  "WAWebBotGroupGatingUtils",
                ).isTEEGroupBotParticipantAddEnabled() &&
                ((f = t.groupMetadata) == null ? void 0 : f.isTeeBotGroup) ===
                  !0 &&
                (H.botGroupParticipant =
                  o("WAWebBotUtils").META_BOT_TEE_FBID_WID),
            Z || ee)
          ) {
            var re;
            if ((Z ? (re = H.invokedBotWid) : ee && (re = H.to), re != null)) {
              var oe,
                ae =
                  (oe = o("WAWebBotProfileCollection").BotProfileCollection.get(
                    re,
                  )) == null
                    ? void 0
                    : oe.personaId;
              ae != null && (H.botPersonaId = ae);
            }
          }
          var ie = o("WAWebBotLoggingUtils").maybeGetBotMetricsMetadata(H);
          H.botMetricsMetadata = ie;
          var le = o(
            "WAWebHatchCommandMetadataUtils",
          ).resolveHatchCommandMetadata(g, t.id);
          (le != null && (H.botCommandMetadata = le),
            x &&
              x.type === o("WAWebMsgType").MSG_TYPE.PRODUCT &&
              o("WAWebProductCatalogLogEvents").logProductMessageBusinessSend(
                x,
                x.sessionId,
              ),
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
          var se = 0;
          return (
            a.maybeNonJidMentioned === !0 &&
              /@all\b/g.test(g) &&
              (se |= r("WAWebNonJidMentionType").MENTION_ALL),
            se > 0 && (H.nonJidMentions = se),
            H
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i, l, s, u;
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "addAndSendTextMsg chat: ",
                "",
              ])),
            e.id.toLogString(),
          ),
            yield o("WAWebLidMigrationFrontendUtils").validateMissingAccountLid(
              e,
              t,
              "addAndSendTextMsg",
            ));
          var d = new (o("WAWebMsgModel").Msg)(t),
            m = o("WAWebSendMsgChatActionUtils").maybeGetOpusSystemMsg(
              e,
              "opus-send-text-fail",
            ),
            p = []
              .concat(
                m ? [m] : [],
                (i = yield r("WAWebEmptyChatSystemMsg")(d, e)) != null ? i : [],
                a != null ? a : [],
              )
              .filter(Boolean),
            _ = !!((l = e.groupMetadata) != null && l.isLidAddressingMode),
            f = o("WAWebMsgInfoUtils").getGroupMessageSendReporterOptions(
              e.id,
              o("WAWebWamMsgUtils").msgIsLid(t, e.id, _),
            );
          ((d.wamMessageSendReporter = new (o(
            "WAWebMessageSendReporter",
          ).MessageSendReporter)(
            d,
            babelHelpers.extends({}, f, {
              frontendDeps: o("WAWebMessageSendReporterFrontendDeps")
                .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
            }),
          )),
            (d.wamMessageSendPerfReporter = new (o(
              "WAWebMessageSendPerfReporter",
            ).MessageSendPerfReporter)({
              chatWid: d.to,
              mediaType: o("WAWebWamMsgUtils").getWamMediaType(d),
              messageType: o("WAWebWamMsgUtils").getWamMessageType(d),
            })),
            o("WAWebAppTracker").AppTracker.start(
              o("WAWebAppTracker").AppTrackerType.SendMessage,
            ),
            (s = d.wamMessageSendPerfReporter) == null ||
              s.startRenderedStage(),
            p.length > 0 && e.msgs.add(p),
            e.msgs.add(d),
            o("WAWebThreadWriteThroughAction").writeThroughToLiveThreads(e, [
              d,
            ]),
            (u = d.wamMessageSendPerfReporter) == null || u.postRenderedStage(),
            (e.createdLocally = !1));
          var g = p.length > 0 ? [].concat(p, [t]) : [t];
          return o("WAWebOrchestratorNonPersistedJob")
            .createNonPersistedJob(
              "sendMessage",
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var n, r;
                ((n = d.wamMessageSendPerfReporter) == null ||
                  n.startSavedStage(),
                  yield o("WAWebDBProcessMessage").storeMessages(g, e.id),
                  (r = d.wamMessageSendPerfReporter) == null ||
                    r.postSavedStage(),
                  o("WAWebThreadMsgUtils").isThreadMsg(t) &&
                    (yield o(
                      "WAWebDBThreadMetadataBulkHelper",
                    ).persistNewMessagesThreadMetadataInBulk([t])));
                var a = yield o("WAWebSendMsgRecordAction").sendMsgRecord(d);
                return a;
              }),
              { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
            )
            .waitUntilCompleted();
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return t == null
        ? void 0
        : t.find(function (t) {
            return t.isBot() && y(e, t);
          });
    }
    function y(e, t) {
      if (!e.id.isGroup()) return !0;
      var n = e.groupMetadata;
      return o("WAWebBotGroupGatingUtils").isGroupBotInvokeAllowed(
        t,
        n == null ||
          n.announce === !0 ||
          o("WAWebGroupMetadataGetters").getIsCag(n),
      );
    }
    ((l.sendTextMsgToChat = d),
      (l.createTextMsgData = p),
      (l.addAndSendTextMsg = f),
      (l.getInvokedBotWid = h));
  },
  98,
);
