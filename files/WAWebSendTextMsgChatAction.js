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
    "WAWebReleaseToEventLoop",
    "WAWebSendMsgChatActionUtils",
    "WAWebSendMsgRecordAction",
    "WAWebStateUtils",
    "WAWebThreadMsgUtils",
    "WAWebThreadWriteThroughAction",
    "WAWebUserPrefsMeUser",
    "WAWebWamMsgUtils",
    "WAWebWid",
    "isEmptyObject",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["initiatedBy"],
      s,
      u,
      c;
    async function d(e, t, n) {
      n === void 0 && (n = {});
      var r = o("WAWebStateUtils").unproxy(e),
        a = await m(r, t, n);
      if (a) {
        await o("WAWebBizBotTosUtils").maybeShowBizBot1pTos(r);
        var i = await o(
            "WAWebSendMsgChatActionUtils",
          ).maybeDisableEphemeralityForMsg(r, a),
          l = i.msgData,
          s = i.systemMsgs;
        return p(r, l, s);
      }
    }
    async function m(t, n, a) {
      var i, l, c, d, m, p, _, f;
      a === void 0 && (a = {});
      var g = (n || "").trim();
      if (g === "") return null;
      var h = a,
        y = h.aiMediaCollectionInfo,
        C = h.aiThreadInfo,
        b = h.ctwaContext,
        v = h.encryptedCommentFields,
        S = h.groupMentions,
        R = h.isQuestion,
        L = h.isWamoSub,
        E = h.linkPreview,
        k = h.mentionedJidList,
        I = h.paymentLinkMetadata,
        T = h.questionReplyQuotedMessage,
        D = h.quotedMsg,
        x = h.quotedMsgAdminGroupJid,
        $ = h.quotedMsgAdminGroupSubject,
        P = h.quotedMsgAdminParentGroupJid,
        N = h.selectedCarouselCardIndex,
        M = h.selectedId,
        w = h.selectedIndex,
        A = h.threadIds;
      o("WAWebPresenceChatAction").clearPresence(t);
      var F;
      if (D) F = D.msgContextInfo(t.id);
      else if (x != null && $ != null && P != null)
        F = {
          quotedRemoteJid: x,
          quotedGroupSubject: $,
          quotedParentGroupJid: P,
        };
      else if (x != null) F = { quotedRemoteJid: x };
      else if (R === !0)
        if (
          o("WAWebQuestionsGatingUtils").isQuestionSenderEnabledForMsgType(
            o("WAWebMsgType").MSG_TYPE.CHAT,
          )
        )
          F = { isQuestion: !0 };
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
      else if (T)
        if (
          o("WAWebQuestionsGatingUtils").isQuestionReplySenderEnabledForMsgType(
            o("WAWebMsgType").MSG_TYPE.CHAT,
          )
        )
          F = { questionReplyQuotedMessage: T };
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
      var O;
      if (t.limitSharing != null) {
        var B = t.limitSharing,
          W = B.initiatedBy,
          q = babelHelpers.objectWithoutPropertiesLoose(B, e);
        ((O = babelHelpers.extends({}, q, {
          initiatedByMe: o("WAWebUserPrefsMeUser").isMeAccount(W),
        })),
          r("WAWebWid").isGroup(t.id) &&
            typeof O.trigger == "string" &&
            (O.trigger = o(
              "WAWebLimitSharingPropMappingUtils",
            ).getLimitSharingTriggerFromGroupSettingsChange(O.trigger)));
      }
      var U = babelHelpers.extends({}, E),
        V = babelHelpers.extends(
          {},
          U,
          F,
          {
            mentionedJidList: k,
            groupMentions: S,
            ctwaContext: b,
            body: g,
            subtype: r("isEmptyObject")(U) ? null : "url",
            urlText: t.urlText,
            urlNumber: t.urlNumber,
            botMsgBodyType: a.botMsgBodyType,
          },
          await o("WAWebMsgDataUtils").genOutgoingMsgData(t, "chat"),
          {
            paymentLinkMetadata: I,
            limitSharing: O,
            threadIds: A,
            aiThreadInfo: C,
            aiMediaCollectionInfo: y,
          },
          o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(t),
        ),
        H = await o(
          "WAWebMaybeGetAppendedAiThreadAttributes",
        ).maybeGetAppendedAiThreadAttributes(V),
        G = H[0],
        z = H[1];
      (o("WAWebBotFrontendLoggingUtils").maybeLogFirstPromptSentInAiThread(
        t,
        babelHelpers.extends({}, V, { threadIds: G }),
      ),
        (V.threadIds = G),
        (V.aiThreadInfo = z),
        (V.threadIds =
          (i = o(
            "WAWebMaybeGetAppendedViewRepliesThreadId",
          ).maybeGetAppendedViewRepliesThreadId(V)) != null
            ? i
            : V.threadIds),
        (V.botModeSelection =
          (l = V.botModeSelection) != null
            ? l
            : o("WAWebMaybeGetBotModeSelection").maybeGetBotModeSelection(
                t,
                V,
              )),
        (V.botModeOverride =
          (c = V.botModeOverride) != null
            ? c
            : o(
                "WAWebMaybeGetBotModeSelection",
              ).maybeGetBotDynamicModeSelection(t, V)),
        t.urlText && (t.urlText = void 0),
        t.urlNumber && (t.urlNumber = void 0),
        w != null &&
          ((V.type = "template_button_reply"),
          (V.selectedId = M),
          (V.selectedIndex = w),
          (V.selectedCarouselCardIndex = N)));
      var j = o("WAWebPrivacyMode_WORKER_INCOMPATIBLE").getPrivacyModeFromModel(
        t.id,
      );
      if (
        (j != null && (V.privacyModeWhenSent = j),
        (V.agentId = o("WAWebBizAgentAction").getAgentId(V)),
        o("WAWebBotBaseGating").isBotEnabled() &&
          (!o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() ||
            ((d = t.groupMetadata) == null ? void 0 : d.isOpenBotGroup) !== !0))
      ) {
        var K =
          k == null
            ? void 0
            : k.find(function (e) {
                return e.isBot();
              });
        if (K != null && K.isBot()) {
          V.invokedBotWid = K;
          var Q = D == null ? void 0 : D.botTargetSenderJid;
          Q != null &&
            !o("WAWebUserPrefsMeUser").isMeAccount(Q) &&
            (V.botTargetSenderJid = D == null ? void 0 : D.botTargetSenderJid);
        }
      }
      var X = t.isCAGAdmin(),
        Y = V.subtype === "url",
        J = !!(
          o("WAWebBotBaseGating").isBotEnabled() &&
          (m = V.invokedBotWid) != null &&
          m.isBot()
        ),
        Z = !!(o("WAWebBotBaseGating").isBotEnabled() && V.to.isBot()),
        ee =
          o("WAWebMessagingGatingUtils").isReportingTokenSendingEnabled() &&
          o(
            "WAWebMessagePluginGenerateReportingTokenContent",
          ).isMsgTypeReportingTokenCompatible(V.type, V.subtype);
      if (
        ((X || Y || J || Z || ee) &&
          (V.messageSecret = self.crypto.getRandomValues(new Uint8Array(32))),
        (J ||
          (o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() &&
            ((p = t.groupMetadata) == null ? void 0 : p.isOpenBotGroup) ===
              !0)) &&
          (V.botMessageSecret = await o(
            "WAWebBotMessageSecret",
          ).genBotMsgSecretFromMsgSecret(V.messageSecret)),
        o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() &&
        ((_ = t.groupMetadata) == null ? void 0 : _.isOpenBotGroup) === !0
          ? (V.botGroupParticipant = o("WAWebBotUtils").META_BOT_FBID_WID)
          : o(
              "WAWebBotGroupGatingUtils",
            ).isTEEGroupBotParticipantAddEnabled() &&
            ((f = t.groupMetadata) == null ? void 0 : f.isTeeBotGroup) === !0 &&
            (V.botGroupParticipant = o("WAWebBotUtils").META_BOT_TEE_FBID_WID),
        J || Z)
      ) {
        var te;
        if ((J ? (te = V.invokedBotWid) : Z && (te = V.to), te != null)) {
          var ne,
            re =
              (ne = o("WAWebBotProfileCollection").BotProfileCollection.get(
                te,
              )) == null
                ? void 0
                : ne.personaId;
          re != null && (V.botPersonaId = re);
        }
      }
      var oe = o("WAWebBotLoggingUtils").maybeGetBotMetricsMetadata(V);
      V.botMetricsMetadata = oe;
      var ae = o("WAWebHatchCommandMetadataUtils").resolveHatchCommandMetadata(
        g,
        t.id,
      );
      (ae != null && (V.botCommandMetadata = ae),
        D &&
          D.type === o("WAWebMsgType").MSG_TYPE.PRODUCT &&
          o("WAWebProductCatalogLogEvents").logProductMessageBusinessSend(
            D,
            D.sessionId,
          ),
        v &&
          ((V.type = o("WAWebMsgType").MSG_TYPE.COMMENT),
          (V.encIv = v == null ? void 0 : v.encIv),
          (V.encPayload = v == null ? void 0 : v.encPayload),
          (V.targetMessageKey = v == null ? void 0 : v.targetMessageKey)),
        L === !0 &&
          o("WAWebChatGetters").getIsNewsletter(t) &&
          o(
            "WAWebNewsletterGatingUtils",
          ).isWamoSubCreatorExperienceSupported() &&
          (V.isWamoSub = !0));
      var ie = 0;
      return (
        a.maybeNonJidMentioned === !0 &&
          /@all\b/g.test(g) &&
          (ie |= r("WAWebNonJidMentionType").MENTION_ALL),
        ie > 0 && (V.nonJidMentions = ie),
        V
      );
    }
    async function p(e, t, n) {
      var a, i, l, s;
      (o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
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
      var u = new (o("WAWebMsgModel").Msg)(t),
        d = o("WAWebBotSystemMsg").getMaybeSysMsgForBotInvoke(u, e),
        m = o("WAWebSendMsgChatActionUtils").maybeGetOpusSystemMsg(
          e,
          "opus-send-text-fail",
        ),
        p = []
          .concat(
            m ? [m] : [],
            (a = await r("WAWebEmptyChatSystemMsg")(u, e)) != null ? a : [],
            [d],
            n != null ? n : [],
          )
          .filter(Boolean),
        _ = !!((i = e.groupMetadata) != null && i.isLidAddressingMode),
        f = o("WAWebMsgInfoUtils").getGroupMessageSendReporterOptions(
          e.id,
          o("WAWebWamMsgUtils").msgIsLid(t, e.id, _),
        );
      ((u.wamMessageSendReporter = new (o(
        "WAWebMessageSendReporter",
      ).MessageSendReporter)(
        u,
        babelHelpers.extends({}, f, {
          frontendDeps: o("WAWebMessageSendReporterFrontendDeps")
            .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
        }),
      )),
        (u.wamMessageSendPerfReporter = new (o(
          "WAWebMessageSendPerfReporter",
        ).MessageSendPerfReporter)({
          chatWid: u.to,
          mediaType: o("WAWebWamMsgUtils").getWamMediaType(u),
          messageType: o("WAWebWamMsgUtils").getWamMessageType(u),
        })),
        o("WAWebAppTracker").AppTracker.start(
          o("WAWebAppTracker").AppTrackerType.SendMessage,
        ),
        o("WAWebABProps").getABPropConfigValue(
          "web_anr_async_msg_send_handler",
        ) && (await o("WAWebReleaseToEventLoop").releaseToEventLoop()),
        (l = u.wamMessageSendPerfReporter) == null || l.startRenderedStage(),
        p.length > 0 && e.msgs.add(p),
        e.msgs.add(u),
        o("WAWebThreadWriteThroughAction").writeThroughToLiveThreads(e, [u]),
        (s = u.wamMessageSendPerfReporter) == null || s.postRenderedStage(),
        (e.createdLocally = !1));
      var g = p.length > 0 ? [].concat(p, [t]) : [t];
      return (
        o("WAWebABProps").getABPropConfigValue(
          "web_anr_async_msg_send_handler",
        ) && (await o("WAWebReleaseToEventLoop").releaseToEventLoop()),
        o("WAWebOrchestratorNonPersistedJob")
          .createNonPersistedJob(
            "sendMessage",
            async function () {
              var n, r;
              ((n = u.wamMessageSendPerfReporter) == null ||
                n.startSavedStage(),
                await o("WAWebDBProcessMessage").storeMessages(g, e.id),
                d && (await e.updateBotInvokeSystemMsgCreated()),
                (r = u.wamMessageSendPerfReporter) == null ||
                  r.postSavedStage(),
                o("WAWebThreadMsgUtils").isThreadMsg(t) &&
                  (await o(
                    "WAWebDBThreadMetadataBulkHelper",
                  ).persistNewMessagesThreadMetadataInBulk([t])));
              var a = await o("WAWebSendMsgRecordAction").sendMsgRecord(u);
              return a;
            },
            { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
          )
          .waitUntilCompleted()
      );
    }
    ((l.sendTextMsgToChat = d),
      (l.createTextMsgData = m),
      (l.addAndSendTextMsg = p));
  },
  98,
);
