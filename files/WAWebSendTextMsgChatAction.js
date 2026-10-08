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
          var i, l, c, d, m, p;
          a === void 0 && (a = {});
          var _ = (n || "").trim();
          if (_ === "") return null;
          var f = a,
            g = f.aiMediaCollectionInfo,
            y = f.aiThreadInfo,
            C = f.ctwaContext,
            b = f.encryptedCommentFields,
            v = f.groupMentions,
            S = f.isQuestion,
            R = f.isWamoSub,
            L = f.linkPreview,
            E = f.mentionedJidList,
            k = f.paymentLinkMetadata,
            I = f.questionReplyQuotedMessage,
            T = f.quotedMsg,
            D = f.quotedMsgAdminGroupJid,
            x = f.quotedMsgAdminGroupSubject,
            $ = f.quotedMsgAdminParentGroupJid,
            P = f.selectedCarouselCardIndex,
            N = f.selectedId,
            M = f.selectedIndex,
            w = f.threadIds;
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
                body: _,
                isSpoiler:
                  o("WAWebSpoilerFormatRegex").hasSpoilerMarkup(_) &&
                  o("WAWebABProps").getABPropConfigValue(
                    "is_spoiler_rich_format_sender_enabled",
                  ),
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
                aiMediaCollectionInfo: g,
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
            var j = h(t, E);
            if (j != null) {
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
            J = !!(
              U.to.isBot() &&
              (o("WAWebBotBaseGating").isBotEnabled() ||
                U.to.isSupportAgentBot())
            ),
            Z =
              o("WAWebMessagingGatingUtils").isReportingTokenSendingEnabled() &&
              o(
                "WAWebMessagePluginGenerateReportingTokenContent",
              ).isMsgTypeReportingTokenCompatible(U.type, U.subtype),
            ee =
              U.messageSecret == null &&
              (yield o(
                "WAWebCoexV2RelayEligibility",
              ).genIsCoexV2RelayEligibleSend(U.to));
          ((Q || X || Y || J || Z || ee) &&
            (U.messageSecret = self.crypto.getRandomValues(new Uint8Array(32))),
            (Y ||
              (o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() &&
                ((p = t.groupMetadata) == null ? void 0 : p.isOpenBotGroup) ===
                  !0)) &&
              (U.botMessageSecret = yield o(
                "WAWebBotMessageSecret",
              ).genBotMsgSecretFromMsgSecret(U.messageSecret)));
          var te = o("WAWebBotGroupGatingUtils").getSendGroupBotParticipant(
            t.groupMetadata,
          );
          if ((te != null && (U.botGroupParticipant = te), Y || J)) {
            var ne;
            if ((Y ? (ne = U.invokedBotWid) : J && (ne = U.to), ne != null)) {
              var re,
                oe =
                  (re = o("WAWebBotProfileCollection").BotProfileCollection.get(
                    ne,
                  )) == null
                    ? void 0
                    : re.personaId;
              oe != null && (U.botPersonaId = oe);
            }
          }
          var ae = o("WAWebBotLoggingUtils").maybeGetBotMetricsMetadata(U);
          U.botMetricsMetadata = ae;
          var ie = o(
            "WAWebHatchCommandMetadataUtils",
          ).resolveHatchCommandMetadata(_, t.id);
          (ie != null && (U.botCommandMetadata = ie),
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
          var le = 0;
          return (
            a.maybeNonJidMentioned === !0 &&
              /@all\b/g.test(_) &&
              (le |= r("WAWebNonJidMentionType").MENTION_ALL),
            le > 0 && (U.nonJidMentions = le),
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
