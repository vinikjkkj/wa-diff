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
    var e, s, u;
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          n === void 0 && (n = {});
          var r = o("WAWebStateUtils").unproxy(e),
            a = yield m(r, t, n);
          if (a) {
            yield o("WAWebBizBotTosUtils").maybeShowBizBot1pTos(r);
            var i = yield o(
                "WAWebSendMsgChatActionUtils",
              ).maybeDisableEphemeralityForMsg(r, a),
              l = i.msgData,
              s = i.systemMsgs;
            return _(r, l, s);
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i, l, u, c, d, m, p, _;
          a === void 0 && (a = {});
          var f = (n || "").trim();
          if (f === "") return null;
          var g = a,
            h = g.aiThreadInfo,
            y = g.ctwaContext,
            C = g.encryptedCommentFields,
            b = g.groupMentions,
            v = g.isQuestion,
            S = g.isWamoSub,
            R = g.linkPreview,
            L = g.mentionedJidList,
            E = g.paymentLinkMetadata,
            k = g.questionReplyQuotedMessage,
            I = g.quotedMsg,
            T = g.quotedMsgAdminGroupJid,
            D = g.quotedMsgAdminGroupSubject,
            x = g.quotedMsgAdminParentGroupJid,
            $ = g.selectedCarouselCardIndex,
            P = g.selectedId,
            N = g.selectedIndex,
            M = g.threadIds;
          o("WAWebPresenceChatAction").clearPresence(t);
          var w;
          if (I) w = I.msgContextInfo(t.id);
          else if (T != null && D != null && x != null)
            w = {
              quotedRemoteJid: T,
              quotedGroupSubject: D,
              quotedParentGroupJid: x,
            };
          else if (T != null) w = { quotedRemoteJid: T };
          else if (v === !0)
            if (
              o("WAWebQuestionsGatingUtils").isQuestionSenderEnabledForMsgType(
                o("WAWebMsgType").MSG_TYPE.CHAT,
              )
            )
              w = { isQuestion: !0 };
            else
              return (
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
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
          else if (k)
            if (
              o(
                "WAWebQuestionsGatingUtils",
              ).isQuestionReplySenderEnabledForMsgType(
                o("WAWebMsgType").MSG_TYPE.CHAT,
              )
            )
              w = { questionReplyQuotedMessage: k };
            else
              return (
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
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
          var A;
          t.limitSharing != null &&
            ((A = t.limitSharing),
            (A.initiatedByMe = o("WAWebUserPrefsMeUser").isMeAccount(
              A.initiatedBy,
            )),
            r("WAWebWid").isGroup(t.id) &&
              typeof A.trigger == "string" &&
              (A.trigger = o(
                "WAWebLimitSharingPropMappingUtils",
              ).getLimitSharingTriggerFromGroupSettingsChange(A.trigger)),
            delete A.initiatedBy);
          var F = babelHelpers.extends({}, R),
            O = babelHelpers.extends(
              {},
              F,
              w,
              {
                mentionedJidList: L,
                groupMentions: b,
                ctwaContext: y,
                body: f,
                subtype: r("isEmptyObject")(F) ? null : "url",
                urlText: t.urlText,
                urlNumber: t.urlNumber,
                botMsgBodyType: a.botMsgBodyType,
              },
              yield o("WAWebMsgDataUtils").genOutgoingMsgData(t, "chat"),
              {
                paymentLinkMetadata: E,
                limitSharing: A,
                threadIds: M,
                aiThreadInfo: h,
              },
              o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(t),
            ),
            B = yield o(
              "WAWebMaybeGetAppendedAiThreadAttributes",
            ).maybeGetAppendedAiThreadAttributes(O),
            W = B[0],
            q = B[1];
          (o("WAWebBotFrontendLoggingUtils").maybeLogFirstPromptSentInAiThread(
            t,
            babelHelpers.extends({}, O, { threadIds: W }),
          ),
            (O.threadIds = W),
            (O.aiThreadInfo = q),
            (O.threadIds =
              (i = o(
                "WAWebMaybeGetAppendedViewRepliesThreadId",
              ).maybeGetAppendedViewRepliesThreadId(O)) != null
                ? i
                : O.threadIds),
            (O.botModeSelection =
              (l = O.botModeSelection) != null
                ? l
                : o("WAWebMaybeGetBotModeSelection").maybeGetBotModeSelection(
                    t,
                    O,
                  )),
            (O.botModeOverride =
              (u = O.botModeOverride) != null
                ? u
                : o(
                    "WAWebMaybeGetBotModeSelection",
                  ).maybeGetBotDynamicModeSelection(t, O)),
            t.urlText && (t.urlText = void 0),
            t.urlNumber && (t.urlNumber = void 0),
            N != null &&
              ((O.type = "template_button_reply"),
              (O.selectedId = P),
              (O.selectedIndex = N),
              (O.selectedCarouselCardIndex = $)));
          var U = o(
            "WAWebPrivacyMode_WORKER_INCOMPATIBLE",
          ).getPrivacyModeFromModel(t.id);
          if (
            (U != null && (O.privacyModeWhenSent = U),
            (O.agentId = o("WAWebBizAgentAction").getAgentId(O)),
            o("WAWebBotBaseGating").isBotEnabled() &&
              (!o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() ||
                ((c = t.groupMetadata) == null ? void 0 : c.isOpenBotGroup) !==
                  !0))
          ) {
            var V =
              L == null
                ? void 0
                : L.find(function (e) {
                    return e.isBot();
                  });
            if (V != null && V.isBot()) {
              O.invokedBotWid = V;
              var H = I == null ? void 0 : I.botTargetSenderJid;
              H != null &&
                !o("WAWebUserPrefsMeUser").isMeAccount(H) &&
                (O.botTargetSenderJid =
                  I == null ? void 0 : I.botTargetSenderJid);
            }
          }
          var G = t.isCAGAdmin(),
            z = O.subtype === "url",
            j = !!(
              o("WAWebBotBaseGating").isBotEnabled() &&
              (d = O.invokedBotWid) != null &&
              d.isBot()
            ),
            K = !!(o("WAWebBotBaseGating").isBotEnabled() && O.to.isBot()),
            Q =
              o("WAWebMessagingGatingUtils").isReportingTokenSendingEnabled() &&
              o(
                "WAWebMessagePluginGenerateReportingTokenContent",
              ).isMsgTypeReportingTokenCompatible(O.type, O.subtype);
          if (
            ((G || z || j || K || Q) &&
              (O.messageSecret = self.crypto.getRandomValues(
                new Uint8Array(32),
              )),
            (j ||
              (o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() &&
                ((m = t.groupMetadata) == null ? void 0 : m.isOpenBotGroup) ===
                  !0)) &&
              (O.botMessageSecret = yield o(
                "WAWebBotMessageSecret",
              ).genBotMsgSecretFromMsgSecret(O.messageSecret)),
            o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() &&
            ((p = t.groupMetadata) == null ? void 0 : p.isOpenBotGroup) === !0
              ? (O.botGroupParticipant = o("WAWebBotUtils").META_BOT_FBID_WID)
              : o(
                  "WAWebBotGroupGatingUtils",
                ).isTEEGroupBotParticipantAddEnabled() &&
                ((_ = t.groupMetadata) == null ? void 0 : _.isTeeBotGroup) ===
                  !0 &&
                (O.botGroupParticipant =
                  o("WAWebBotUtils").META_BOT_TEE_FBID_WID),
            j || K)
          ) {
            var X;
            if ((j ? (X = O.invokedBotWid) : K && (X = O.to), X != null)) {
              var Y,
                J =
                  (Y = o("WAWebBotProfileCollection").BotProfileCollection.get(
                    X,
                  )) == null
                    ? void 0
                    : Y.personaId;
              J != null && (O.botPersonaId = J);
            }
          }
          var Z = o("WAWebBotLoggingUtils").maybeGetBotMetricsMetadata(O);
          O.botMetricsMetadata = Z;
          var ee = o(
            "WAWebHatchCommandMetadataUtils",
          ).resolveHatchCommandMetadata(f, t.id);
          (ee != null && (O.botCommandMetadata = ee),
            I &&
              I.type === o("WAWebMsgType").MSG_TYPE.PRODUCT &&
              o("WAWebProductCatalogLogEvents").logProductMessageBusinessSend(
                I,
                I.sessionId,
              ),
            C &&
              ((O.type = o("WAWebMsgType").MSG_TYPE.COMMENT),
              (O.encIv = C == null ? void 0 : C.encIv),
              (O.encPayload = C == null ? void 0 : C.encPayload),
              (O.targetMessageKey = C == null ? void 0 : C.targetMessageKey)),
            S === !0 &&
              o("WAWebChatGetters").getIsNewsletter(t) &&
              o(
                "WAWebNewsletterGatingUtils",
              ).isWamoSubCreatorExperienceSupported() &&
              (O.isWamoSub = !0));
          var te = 0;
          return (
            a.maybeNonJidMentioned === !0 &&
              /@all\b/g.test(f) &&
              (te |= r("WAWebNonJidMentionType").MENTION_ALL),
            te > 0 && (O.nonJidMentions = te),
            O
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i, l, s, c;
          (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
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
            p = []
              .concat(
                (i = yield r("WAWebEmptyChatSystemMsg")(d, e)) != null ? i : [],
                [m],
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
          ).MessageSendReporter)(d, f)),
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
            p.length > 0 && e.msgs.add(p),
            e.msgs.add(d),
            o("WAWebThreadWriteThroughAction").writeThroughToLiveThreads(e, [
              d,
            ]),
            (c = d.wamMessageSendPerfReporter) == null || c.postRenderedStage(),
            (e.createdLocally = !1));
          var g = p.length > 0 ? [].concat(p, [t]) : [t];
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
                    yield o("WAWebDBProcessMessage").storeMessages(g, e.id),
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
        f.apply(this, arguments)
      );
    }
    ((l.sendTextMsgToChat = c),
      (l.createTextMsgData = m),
      (l.addAndSendTextMsg = _));
  },
  98,
);
