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
    "WAWebPathfinderMessageSent",
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
    "WAWebUserUtils",
    "WAWebWamMsgUtils",
    "WAWebWid",
    "isEmptyObject",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["initiatedBy"],
      s,
      u,
      c,
      d,
      m,
      p = r("requireDeferred")("WAWebProductCatalogLogEvents").__setRef(
        "WAWebSendTextMsgChatAction",
      );
    function _(e, t) {
      return o(
        "WAWebRichTextFormatMessageSendLogger",
      ).maybeCreateRichTextFormatMessageSendCommit(e, t);
    }
    async function f(e, t, n) {
      n === void 0 && (n = {});
      var r = o("WAWebStateUtils").unproxy(e),
        a = await g(r, t, n);
      if (a) {
        await o("WAWebBizBotTosUtils").maybeShowBizBot1pTos(r);
        var i = await o(
            "WAWebSendMsgChatActionUtils",
          ).maybeDisableEphemeralityForMsg(r, a),
          l = i.msgData,
          s = i.systemMsgs;
        return h(r, l, s, {
          skipRichTextFormatLogging: n.skipRichTextFormatLogging,
          onMsgKeyCreated: n.onMsgKeyCreated,
        });
      }
    }
    async function g(t, n, a) {
      var i, l, d, m, _, f;
      a === void 0 && (a = {});
      var g = (n || "").trim();
      if (g === "") return null;
      var h = a,
        C = h.aiMediaCollectionInfo,
        b = h.aiThreadInfo,
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
          o("WAWebQuestionsGatingUtils").isQuestionReplySenderEnabledForMsgType(
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
          initiatedByMe: o("WAWebUserUtils").isMeAccount(q),
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
          await o("WAWebMsgDataUtils").genOutgoingMsgData(t, "chat"),
          {
            paymentLinkMetadata: T,
            limitSharing: B,
            threadIds: F,
            aiThreadInfo: b,
            aiMediaCollectionInfo: C,
          },
          o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(t),
        ),
        G = await o(
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
      var K = o("WAWebPrivacyMode_WORKER_INCOMPATIBLE").getPrivacyModeFromModel(
        t.id,
      );
      if (
        (K != null && (H.privacyModeWhenSent = K),
        (H.agentId = o("WAWebBizAgentAction").getAgentId(H)),
        o("WAWebBotBaseGating").isBotEnabled() &&
          (!o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() ||
            ((m = t.groupMetadata) == null ? void 0 : m.isOpenBotGroup) !== !0))
      ) {
        var Q = y(t, I);
        if (Q != null) {
          H.invokedBotWid = Q;
          var X = x == null ? void 0 : x.botTargetSenderJid;
          X != null &&
            !o("WAWebUserUtils").isMeAccount(X) &&
            (H.botTargetSenderJid = x == null ? void 0 : x.botTargetSenderJid);
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
          (o("WAWebBotBaseGating").isBotEnabled() || H.to.isSupportAgentBot())
        ),
        te =
          o("WAWebMessagingGatingUtils").isReportingTokenSendingEnabled() &&
          o(
            "WAWebMessagePluginGenerateReportingTokenContent",
          ).isMsgTypeReportingTokenCompatible(H.type, H.subtype),
        ne =
          H.messageSecret == null &&
          (await o("WAWebCoexV2RelayEligibility").genIsCoexV2RelayEligibleSend(
            H.to,
          ));
      ((Y || J || Z || ee || te || ne) &&
        (H.messageSecret = self.crypto.getRandomValues(new Uint8Array(32))),
        (Z ||
          (o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() &&
            ((f = t.groupMetadata) == null ? void 0 : f.isOpenBotGroup) ===
              !0)) &&
          (H.botMessageSecret = await o(
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
      var se = o("WAWebHatchCommandMetadataUtils").resolveHatchCommandMetadata(
        g,
        t.id,
      );
      (se != null && (H.botCommandMetadata = se),
        x &&
          x.type === o("WAWebMsgType").MSG_TYPE.PRODUCT &&
          p
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
    }
    async function h(e, t, n, a) {
      var i, l, s, u;
      (a === void 0 && (a = {}),
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "addAndSendTextMsg chat: ",
              "",
            ])),
          e.id.toLogString(),
        ),
        await o("WAWebLidMigrationFrontendUtils").validateMissingAccountLid(
          e,
          t,
          "addAndSendTextMsg",
        ));
      var c = new (o("WAWebMsgModel").Msg)(t);
      b(a.onMsgKeyCreated, c.id);
      var m =
          a.skipRichTextFormatLogging === !0
            ? null
            : o(
                "WAWebRichTextFormatMessageSendLogger",
              ).maybeCreateRichTextFormatMessageSendCommit(c, e.id),
        p = o("WAWebSendMsgChatActionUtils").maybeGetOpusSystemMsg(
          e,
          "opus-send-text-fail",
        ),
        _ = []
          .concat(
            p ? [p] : [],
            (i = await r("WAWebEmptyChatSystemMsg")(c, e)) != null ? i : [],
            n != null ? n : [],
          )
          .filter(Boolean),
        f = !!((l = e.groupMetadata) != null && l.isLidAddressingMode),
        g = o("WAWebMsgInfoUtils").getGroupMessageSendReporterOptions(
          e.id,
          o("WAWebWamMsgUtils").msgIsLid(t, e.id, f),
        );
      ((c.wamMessageSendReporter = new (o(
        "WAWebMessageSendReporter",
      ).MessageSendReporter)(
        c,
        babelHelpers.extends({}, g, {
          frontendDeps: o("WAWebMessageSendReporterFrontendDeps")
            .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
        }),
      )),
        (c.wamMessageSendPerfReporter = new (o(
          "WAWebMessageSendPerfReporter",
        ).MessageSendPerfReporter)({
          chatWid: c.to,
          mediaType: o("WAWebWamMsgUtils").getWamMediaType(c),
          messageType: o("WAWebWamMsgUtils").getWamMessageType(c),
        })),
        o("WAWebAppTracker").AppTracker.start(
          o("WAWebAppTracker").AppTrackerType.SendMessage,
        ),
        (s = c.wamMessageSendPerfReporter) == null || s.startRenderedStage(),
        _.length > 0 && e.msgs.add(_),
        e.msgs.add(c),
        o("WAWebThreadWriteThroughAction").writeThroughToLiveThreads(e, [c]),
        (u = c.wamMessageSendPerfReporter) == null || u.postRenderedStage(),
        o("WAWebQbmMessageReplyLogEventLazy").logQbmMessageReply({
          chat: e,
          replyMessageType: c.type,
          replyMsg: c,
        }),
        (e.createdLocally = !1));
      var h = _.length > 0 ? [].concat(_, [t]) : [t],
        y = await o("WAWebOrchestratorNonPersistedJob")
          .createNonPersistedJob(
            "sendMessage",
            o("WAWebBackendRuntime").isWebDiBackendEnabled()
              ? function () {
                  return o("WAWebBackendRuntime")
                    .runtime(o("WAWebMessageSendService").MessageSendService)
                    .storeAndSend(c, h, e.id);
                }
              : async function () {
                  var n, r;
                  ((n = c.wamMessageSendPerfReporter) == null ||
                    n.startSavedStage(),
                    await o("WAWebDBProcessMessage").storeMessages(h, e.id),
                    (r = c.wamMessageSendPerfReporter) == null ||
                      r.postSavedStage(),
                    o(
                      "WAWebPathfinderMessageSent",
                    ).recordPathfinderMessageSentAfterCommit(c),
                    o("WAWebThreadMsgUtils").isThreadMsg(t) &&
                      (await o(
                        "WAWebDBThreadMetadataBulkHelper",
                      ).persistNewMessagesThreadMetadataInBulk([t])));
                  var a = await o("WAWebSendMsgRecordAction").sendMsgRecord(c);
                  return a;
                },
            { priority: o("WAJobOrchestratorTypes").JobPriority.UI_ACTION },
          )
          .waitUntilCompleted();
      return (
        (y == null ? void 0 : y.messageSendResult) ===
          o("WAWebSendMsgResultAction").SendMsgResult.OK &&
          (m == null || m()),
        y
      );
    }
    function y(e, t) {
      return t == null
        ? void 0
        : t.find(function (t) {
            return t.isBot() && C(e, t);
          });
    }
    function C(e, t) {
      if (!e.id.isGroup()) return !0;
      var n = e.groupMetadata;
      return o("WAWebBotGroupGatingUtils").isGroupBotInvokeAllowed(
        t,
        n == null ||
          n.announce === !0 ||
          o("WAWebGroupMetadataGetters").getIsCag(n),
      );
    }
    function b(e, t) {
      try {
        e == null || e(t);
      } catch (e) {
        o("WALogger")
          .WARN(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "addAndSendTextMsg: onMsgKeyCreated failed (",
                ")",
              ])),
            e instanceof Error ? e.name : typeof e,
          )
          .sendLogs("send-text-on-msg-key-created-failed");
      }
    }
    ((l.maybeCreateTextMsgRichTextFormatSendCommit = _),
      (l.sendTextMsgToChat = f),
      (l.createTextMsgData = g),
      (l.addAndSendTextMsg = h),
      (l.getInvokedBotWid = y));
  },
  98,
);
