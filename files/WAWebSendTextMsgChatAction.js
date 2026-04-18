__d(
  "WAWebSendTextMsgChatAction",
  [
    "WACommonTaskScheduler",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAPromiseDelays",
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
    "WAWebBotSystemMsg",
    "WAWebBotUtils",
    "WAWebChatGetters",
    "WAWebDBProcessMessage",
    "WAWebDBThreadMetadataBulkHelper",
    "WAWebEmptyChatSystemMsg",
    "WAWebGetEphemeralFieldsMsgActionsUtils",
    "WAWebHatchCommandMetadataUtils",
    "WAWebLidMigrationFrontendUtils",
    "WAWebLimitSharingPropMappingUtils",
    "WAWebMaybeGetAppendedAiThreadAttributes",
    "WAWebMaybeGetAppendedViewRepliesThreadId",
    "WAWebMaybeGetBotModeSelection",
    "WAWebMessagePluginGenerateReportingTokenContent",
    "WAWebMessageSendPerfReporter",
    "WAWebMessageSendReporter",
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
          var h = a,
            y = h.aiThreadInfo,
            C = h.ctwaContext,
            b = h.encryptedCommentFields,
            v = h.groupMentions,
            S = h.isQuestion,
            R = h.isWamoSub,
            L = h.linkPreview,
            E = h.mentionedJidList,
            k = h.paymentLinkMetadata,
            I = h.questionReplyQuotedMessage,
            T = h.quotedMsg,
            D = h.quotedMsgAdminGroupJid,
            x = h.quotedMsgAdminGroupSubject,
            $ = h.quotedMsgAdminParentGroupJid,
            P = h.selectedCarouselCardIndex,
            N = h.selectedId,
            M = h.selectedIndex,
            w = h.threadIds;
          o("WAWebPresenceChatAction").clearPresence(t);
          var A;
          if (T) A = T.msgContextInfo(t.id);
          else if (D != null && x != null && $ != null)
            A = {
              quotedRemoteJid: D,
              quotedGroupSubject: x,
              quotedParentGroupJid: $,
            };
          else if (D != null) A = { quotedRemoteJid: D };
          else if (S === !0)
            if (
              o("WAWebQuestionsGatingUtils").isQuestionSenderEnabledForMsgType(
                o("WAWebMsgType").MSG_TYPE.CHAT,
              )
            )
              A = { isQuestion: !0 };
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
          else if (I)
            if (
              o(
                "WAWebQuestionsGatingUtils",
              ).isQuestionReplySenderEnabledForMsgType(
                o("WAWebMsgType").MSG_TYPE.CHAT,
              )
            )
              A = { questionReplyQuotedMessage: I };
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
          var F;
          if (t.limitSharing != null) {
            var O = t.limitSharing,
              B = O.initiatedBy,
              W = babelHelpers.objectWithoutPropertiesLoose(O, e);
            ((F = babelHelpers.extends({}, W, {
              initiatedByMe: o("WAWebUserPrefsMeUser").isMeAccount(B),
            })),
              r("WAWebWid").isGroup(t.id) &&
                typeof F.trigger == "string" &&
                (F.trigger = o(
                  "WAWebLimitSharingPropMappingUtils",
                ).getLimitSharingTriggerFromGroupSettingsChange(F.trigger)));
          }
          var q = babelHelpers.extends({}, L),
            U = babelHelpers.extends(
              {},
              q,
              A,
              {
                mentionedJidList: E,
                groupMentions: v,
                ctwaContext: C,
                body: g,
                subtype: r("isEmptyObject")(q) ? null : "url",
                urlText: t.urlText,
                urlNumber: t.urlNumber,
                botMsgBodyType: a.botMsgBodyType,
              },
              yield o("WAWebMsgDataUtils").genOutgoingMsgData(t, "chat"),
              {
                paymentLinkMetadata: k,
                limitSharing: F,
                threadIds: w,
                aiThreadInfo: y,
              },
              o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(t),
            ),
            V = yield o(
              "WAWebMaybeGetAppendedAiThreadAttributes",
            ).maybeGetAppendedAiThreadAttributes(U),
            H = V[0],
            G = V[1];
          (o("WAWebBotFrontendLoggingUtils").maybeLogFirstPromptSentInAiThread(
            t,
            babelHelpers.extends({}, U, { threadIds: H }),
          ),
            (U.threadIds = H),
            (U.aiThreadInfo = G),
            (U.threadIds =
              (i = o(
                "WAWebMaybeGetAppendedViewRepliesThreadId",
              ).maybeGetAppendedViewRepliesThreadId(U)) != null
                ? i
                : U.threadIds),
            (U.botModeSelection =
              (l = U.botModeSelection) != null
                ? l
                : o("WAWebMaybeGetBotModeSelection").maybeGetBotModeSelection(
                    t,
                    U,
                  )),
            (U.botModeOverride =
              (c = U.botModeOverride) != null
                ? c
                : o(
                    "WAWebMaybeGetBotModeSelection",
                  ).maybeGetBotDynamicModeSelection(t, U)),
            t.urlText && (t.urlText = void 0),
            t.urlNumber && (t.urlNumber = void 0),
            M != null &&
              ((U.type = "template_button_reply"),
              (U.selectedId = N),
              (U.selectedIndex = M),
              (U.selectedCarouselCardIndex = P)));
          var z = o(
            "WAWebPrivacyMode_WORKER_INCOMPATIBLE",
          ).getPrivacyModeFromModel(t.id);
          if (
            (z != null && (U.privacyModeWhenSent = z),
            (U.agentId = o("WAWebBizAgentAction").getAgentId(U)),
            o("WAWebBotBaseGating").isBotEnabled() &&
              (!o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() ||
                ((d = t.groupMetadata) == null ? void 0 : d.isOpenBotGroup) !==
                  !0))
          ) {
            var j =
              E == null
                ? void 0
                : E.find(function (e) {
                    return e.isBot();
                  });
            if (j != null && j.isBot()) {
              U.invokedBotWid = j;
              var K = T == null ? void 0 : T.botTargetSenderJid;
              K != null &&
                !o("WAWebUserPrefsMeUser").isMeAccount(K) &&
                (U.botTargetSenderJid =
                  T == null ? void 0 : T.botTargetSenderJid);
            }
          }
          var Q = t.isCAGAdmin(),
            X = U.subtype === "url",
            Y = !!(
              o("WAWebBotBaseGating").isBotEnabled() &&
              (m = U.invokedBotWid) != null &&
              m.isBot()
            ),
            J = !!(o("WAWebBotBaseGating").isBotEnabled() && U.to.isBot()),
            Z =
              o("WAWebMessagingGatingUtils").isReportingTokenSendingEnabled() &&
              o(
                "WAWebMessagePluginGenerateReportingTokenContent",
              ).isMsgTypeReportingTokenCompatible(U.type, U.subtype);
          if (
            ((Q || X || Y || J || Z) &&
              (U.messageSecret = self.crypto.getRandomValues(
                new Uint8Array(32),
              )),
            (Y ||
              (o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() &&
                ((p = t.groupMetadata) == null ? void 0 : p.isOpenBotGroup) ===
                  !0)) &&
              (U.botMessageSecret = yield o(
                "WAWebBotMessageSecret",
              ).genBotMsgSecretFromMsgSecret(U.messageSecret)),
            o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() &&
            ((_ = t.groupMetadata) == null ? void 0 : _.isOpenBotGroup) === !0
              ? (U.botGroupParticipant = o("WAWebBotUtils").META_BOT_FBID_WID)
              : o(
                  "WAWebBotGroupGatingUtils",
                ).isTEEGroupBotParticipantAddEnabled() &&
                ((f = t.groupMetadata) == null ? void 0 : f.isTeeBotGroup) ===
                  !0 &&
                (U.botGroupParticipant =
                  o("WAWebBotUtils").META_BOT_TEE_FBID_WID),
            Y || J)
          ) {
            var ee;
            if ((Y ? (ee = U.invokedBotWid) : J && (ee = U.to), ee != null)) {
              var te,
                ne =
                  (te = o("WAWebBotProfileCollection").BotProfileCollection.get(
                    ee,
                  )) == null
                    ? void 0
                    : te.personaId;
              ne != null && (U.botPersonaId = ne);
            }
          }
          var re = o("WAWebBotLoggingUtils").maybeGetBotMetricsMetadata(U);
          U.botMetricsMetadata = re;
          var oe = o(
            "WAWebHatchCommandMetadataUtils",
          ).resolveHatchCommandMetadata(g, t.id);
          (oe != null && (U.botCommandMetadata = oe),
            T &&
              T.type === o("WAWebMsgType").MSG_TYPE.PRODUCT &&
              o("WAWebProductCatalogLogEvents").logProductMessageBusinessSend(
                T,
                T.sessionId,
              ),
            b &&
              ((U.type = o("WAWebMsgType").MSG_TYPE.COMMENT),
              (U.encIv = b == null ? void 0 : b.encIv),
              (U.encPayload = b == null ? void 0 : b.encPayload),
              (U.targetMessageKey = b == null ? void 0 : b.targetMessageKey)),
            R === !0 &&
              o("WAWebChatGetters").getIsNewsletter(t) &&
              o(
                "WAWebNewsletterGatingUtils",
              ).isWamoSubCreatorExperienceSupported() &&
              (U.isWamoSub = !0));
          var ae = 0;
          return (
            a.maybeNonJidMentioned === !0 &&
              /@all\b/g.test(g) &&
              (ae |= r("WAWebNonJidMentionType").MENTION_ALL),
            ae > 0 && (U.nonJidMentions = ae),
            U
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
            m = o("WAWebBotSystemMsg").getMaybeSysMsgForBotInvoke(d, e),
            p = o("WAWebSendMsgChatActionUtils").maybeGetOpusSystemMsg(
              e,
              "opus-send-text-fail",
            ),
            _ = []
              .concat(
                p ? [p] : [],
                (i = yield r("WAWebEmptyChatSystemMsg")(d, e)) != null ? i : [],
                [m],
                a != null ? a : [],
              )
              .filter(Boolean),
            f = !!((l = e.groupMetadata) != null && l.isLidAddressingMode),
            g = o("WAWebMsgInfoUtils").getGroupMessageSendReporterOptions(
              e.id,
              o("WAWebWamMsgUtils").msgIsLid(t, e.id, f),
            );
          ((d.wamMessageSendReporter = new (o(
            "WAWebMessageSendReporter",
          ).MessageSendReporter)(d, g)),
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
            o("WAWebABProps").getABPropConfigValue(
              "web_anr_async_msg_send_handler",
            ) &&
              (o("WAWebABProps").getABPropConfigValue(
                "wmi_worker_scheduler_web",
              )
                ? yield r("WACommonTaskScheduler").yield()
                : yield o("WAPromiseDelays").releaseToEventLoop()),
            (s = d.wamMessageSendPerfReporter) == null ||
              s.startRenderedStage(),
            _.length > 0 && e.msgs.add(_),
            e.msgs.add(d),
            o("WAWebThreadWriteThroughAction").writeThroughToLiveThreads(e, [
              d,
            ]),
            (u = d.wamMessageSendPerfReporter) == null || u.postRenderedStage(),
            (e.createdLocally = !1));
          var h = _.length > 0 ? [].concat(_, [t]) : [t];
          return (
            o("WAWebABProps").getABPropConfigValue(
              "web_anr_async_msg_send_handler",
            ) &&
              (o("WAWebABProps").getABPropConfigValue(
                "wmi_worker_scheduler_web",
              )
                ? yield r("WACommonTaskScheduler").yield()
                : yield o("WAPromiseDelays").releaseToEventLoop()),
            o("WAWebOrchestratorNonPersistedJob")
              .createNonPersistedJob(
                "sendMessage",
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  var n, r;
                  ((n = d.wamMessageSendPerfReporter) == null ||
                    n.startSavedStage(),
                    yield o("WAWebDBProcessMessage").storeMessages(h, e.id),
                    m && (yield e.updateBotInvokeSystemMsgCreated()),
                    (r = d.wamMessageSendPerfReporter) == null ||
                      r.postSavedStage(),
                    o("WAWebThreadMsgUtils").isThreadMsg(t) &&
                      (yield o(
                        "WAWebDBThreadMetadataBulkHelper",
                      ).persistNewMessagesThreadMetadataInBulk([t])));
                  var a = yield o("WAWebSendMsgRecordAction").sendMsgRecord(d);
                  return a;
                }),
                {
                  priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION,
                },
              )
              .waitUntilCompleted()
          );
        })),
        g.apply(this, arguments)
      );
    }
    ((l.sendTextMsgToChat = d),
      (l.createTextMsgData = p),
      (l.addAndSendTextMsg = f));
  },
  98,
);
