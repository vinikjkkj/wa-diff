__d(
  "WAWebSendMessageEditAction",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WATimeUtils",
    "WAWebBackendRuntime",
    "WAWebBotGroupGatingUtils",
    "WAWebChatGetters",
    "WAWebCodeFormatMutator",
    "WAWebCoexEditDeleteAlertUtils",
    "WAWebCreateEncryptedMessageEditMsgData",
    "WAWebDBMessageDelete",
    "WAWebDBMsgUtils",
    "WAWebDBProcessMessage",
    "WAWebDBUpdateMessageTable",
    "WAWebErrorType",
    "WAWebFrontendMsgGetters",
    "WAWebLidMeUserForChat",
    "WAWebMessageEditUtils",
    "WAWebMessageSendPerfReporter",
    "WAWebMessageSendReporter",
    "WAWebMessageSendReporterFrontendDeps",
    "WAWebMessageSendService",
    "WAWebMessageStoreService",
    "WAWebMessagingGatingUtils",
    "WAWebMsgActionCapability",
    "WAWebMsgDataFromModel",
    "WAWebMsgGetters",
    "WAWebMsgInfoUtils",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgModel",
    "WAWebMsgModelFromData",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterSendMsgAction",
    "WAWebOpenCoexEditDeleteAlertModal",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebPaymentLink",
    "WAWebProcessAddonsJob",
    "WAWebSendMsgRecordAction",
    "WAWebSendMsgResultAction",
    "WAWebSerializeError",
    "WAWebSpoilerFormatRegex",
    "WAWebSpoilerGating",
    "WAWebStateUtils",
    "WAWebUserPrefsMultiDevice",
    "WAWebViewMode.flow",
    "WAWebWamMsgUtils",
    "WAWebWidFactory",
    "err",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(e) {
      var t = e.editedMsg,
        n = e.parent,
        r = e.timestamp;
      o("WAWebMessageEditUtils").isParentWithinEditProcessingWindow({
        parentTsInSeconds: n.t,
        editTsInSeconds: r,
        msgKey: n.id,
      }) ||
      o("WAWebMessageEditUtils").isMessageYourselfEditExempt({
        msgKey: n.id,
        msgType: n.type,
      })
        ? await y(t, o("WAWebErrorType").SendFailureErrorCode.NoError)
        : (await y(
            n,
            o("WAWebErrorType").SendFailureErrorCode.EditWindowExpired,
          ),
          await y(
            t,
            o("WAWebErrorType").SendFailureErrorCode.EditWindowExpired,
          ));
    }
    async function d(e, t) {
      t != null &&
        (await (
          o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebMessageStoreService").MessageStoreService,
              ).updateMessageTable
            : o("WAWebDBUpdateMessageTable").updateMessageTable
        )(e.id, { count: t }));
    }
    function m(e) {
      var t = o("WAWebMsgGetters").getLatestEditMsgKey(e);
      return t == null || !o("WAWebMsgActionCapability").canEditText(e)
        ? Promise.resolve(void 0)
        : o("WAWebDBMsgUtils")
            .getMsgByMsgKey(t)
            .then(function (t) {
              if (t)
                return g(
                  o("WAWebStateUtils").unproxy(e),
                  o("WAWebMsgModelFromData").msgModelFromMsgData(t),
                );
            })
            .catch(function (e) {});
    }
    function p(e, t, n) {
      var a, i, l;
      if (
        !o("WAWebMsgActionCapability").canEditText(e) &&
        !o("WAWebMsgActionCapability").canEditCaption(e)
      )
        return Promise.reject(r("err")("Cannot edit message"));
      var s = _({ msg: o("WAWebStateUtils").unproxy(e), options: n, text: t }),
        u = o("WAWebFrontendMsgGetters").getChat(e),
        c =
          (a = u == null || (i = u.id) == null ? void 0 : i.toString()) != null
            ? a
            : "",
        d = (u == null || (l = u.contact) == null ? void 0 : l.isHosted) === !0,
        m =
          o(
            "WAWebUserPrefsMultiDevice",
          ).getIsHostedMeAccountFromLocalStorage() === !0;
      return h(o("WAWebStateUtils").unproxy(e), s).then(function () {
        o("WAWebCoexEditDeleteAlertUtils").shouldShowCoexEditAlert(c, d) &&
          (o("WAWebCoexEditDeleteAlertUtils").markCoexEditAlertShown(c),
          o("WAWebOpenCoexEditDeleteAlertModal").openCoexEditAlertModal(m));
      });
    }
    function _(e) {
      var t,
        n,
        a = e.msg,
        i = e.options,
        l = e.text,
        s = o("WAWebFrontendMsgGetters").getChat(a),
        u = o("WAWebLidMeUserForChat").getMeUserLidOrJidForChat(
          s,
          o("WAWebMsgKeyUtils").TranslateMsgKeyType.EditMessage,
        ),
        c = o("WAWebChatGetters").getIsGroup(s)
          ? o("WAWebWidFactory").asUserWidOrThrow(u)
          : void 0,
        d = new (r("WAWebMsgKey"))({
          id: r("WAWebMsgKey").newId_DEPRECATED(),
          remote: a.id.remote,
          fromMe: !0,
          participant: c,
        }),
        m = i.groupMentions,
        p = i.linkPreview,
        _ = i.mentionedJidList,
        f = {
          id: d,
          from: u,
          to: a.id.remote,
          type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
          kind: o("WAWebMsgType").MsgKind.Protocol,
          subtype: "message_edit",
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          protocolMessageKey: a.id,
          local: !0,
          t: o("WATimeUtils").unixTime(),
          mentionedJidList: _,
          groupMentions: m,
          latestEditMsgKey: d,
          latestEditSenderTimestampMs: o("WATimeUtils").unixTimeMs(),
          editMsgType: a.type,
          errorCode: o("WAWebErrorType").SendFailureErrorCode.NoError,
          messageSecret: o(
            "WAWebMessagingGatingUtils",
          ).isReportingTokenSendingEnabled()
            ? a.messageSecret
            : null,
          botGroupParticipant:
            o("WAWebChatGetters").getIsGroup(s) &&
            (t = o("WAWebBotGroupGatingUtils").getSendGroupBotParticipant(
              s.groupMetadata,
            )) != null
              ? t
              : void 0,
          aiProvenance:
            o("WAWebMsgGetters").getIsNewsletterMsg(a) &&
            o("WAWebNewsletterGatingUtils").isChannelSGISenderEnabled() &&
            (n = a.aiProvenance) != null
              ? n
              : void 0,
        };
      switch (
        r("nullthrows")(o("WAWebMessageEditUtils").getMsgEditType(a.type))
      ) {
        case o("WAWebMessageEditUtils").MsgEditType.TextEdit: {
          var g,
            h,
            y,
            C,
            b,
            v,
            S = l.trim();
          f = babelHelpers.extends({}, f, {
            body: S,
            isSpoiler:
              o("WAWebSpoilerFormatRegex").hasSpoilerMarkup(S) &&
              o("WAWebSpoilerGating").isSpoilerSenderEnabled(),
            title: (g = p == null ? void 0 : p.title) != null ? g : void 0,
            matchedText:
              (h = p == null ? void 0 : p.matchedText) != null ? h : void 0,
            description: p == null ? void 0 : p.description,
            thumbnail:
              (y = p == null ? void 0 : p.thumbnail) != null ? y : void 0,
            richPreviewType: p == null ? void 0 : p.richPreviewType,
            doNotPlayInline: p == null ? void 0 : p.doNotPlayInline,
            inviteGrpType: p == null ? void 0 : p.inviteGrpType,
            thumbnailDirectPath: p == null ? void 0 : p.thumbnailDirectPath,
            thumbnailSha256: p == null ? void 0 : p.thumbnailSha256,
            thumbnailEncSha256: p == null ? void 0 : p.thumbnailEncSha256,
            thumbnailHeight: p == null ? void 0 : p.thumbnailHeight,
            thumbnailWidth: p == null ? void 0 : p.thumbnailWidth,
            mediaKey:
              (C = p == null ? void 0 : p.mediaKey) != null ? C : void 0,
            mediaKeyTimestamp:
              (b = p == null ? void 0 : p.mediaKeyTimestamp) != null
                ? b
                : void 0,
            paymentLinkMetadata:
              (v = o("WAWebPaymentLink").getPaymentLinkMessageMetadata(
                p,
                o("WAWebCodeFormatMutator").removeCodeBlocks(l),
              )) != null
                ? v
                : void 0,
          });
          break;
        }
        case o("WAWebMessageEditUtils").MsgEditType.CaptionEdit: {
          var R = l.trim();
          f = babelHelpers.extends({}, f, {
            caption: R,
            isSpoiler:
              o("WAWebSpoilerFormatRegex").hasSpoilerMarkup(R) &&
              o("WAWebSpoilerGating").isSpoilerSenderEnabled(),
          });
          break;
        }
        case o("WAWebMessageEditUtils").MsgEditType.EventEdit:
        case o("WAWebMessageEditUtils").MsgEditType.PollEdit:
        case o("WAWebMessageEditUtils").MsgEditType.RichResponseEdit:
        case o("WAWebMessageEditUtils").MsgEditType.LoadingMediaEdit:
          break;
      }
      return f;
    }
    async function f(t, n, r, a, i) {
      t.latestEditMsgKey &&
        (await o("WAWebDBMessageDelete").removeMessagesFromHistory([
          t.latestEditMsgKey.toString(),
        ]));
      try {
        (i.startSavedStage(),
          await (
            o("WAWebBackendRuntime").isWebDiBackendEnabled()
              ? o("WAWebBackendRuntime").runtime(
                  o("WAWebMessageStoreService").MessageStoreService,
                ).storeMessages
              : o("WAWebDBProcessMessage").storeMessages
          )([r != null ? r : n], a),
          i.postSavedStage());
      } catch (t) {
        throw (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[message-edit][sendMessageEdit] store protocol msg failed",
                ])),
            )
            .verbose()
            .sendLogs("storeSentMessageEdit failed"),
          t
        );
      }
      (i.startRenderedStage(),
        await o("WAWebProcessAddonsJob").processEditProtocolMsgsJob([n]),
        i.postRenderedStage());
    }
    async function g(e, t) {
      var n = o("WAWebMsgGetters").getIsNewsletterMsg(e)
          ? await o("WAWebNewsletterSendMsgAction").sendNewsletterEditMsg(e, t)
          : await (
              o("WAWebBackendRuntime").isWebDiBackendEnabled()
                ? o("WAWebBackendRuntime").runtime(
                    o("WAWebMessageSendService").MessageSendService,
                  ).sendMsgRecord
                : o("WAWebSendMsgRecordAction").sendMsgRecord
            )(t),
        r = n.count,
        a = n.messageSendResult,
        i = n.t;
      if (a !== o("WAWebSendMsgResultAction").SendMsgResult.OK) {
        (o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[message-edit][sendMsgEditRecord] send failed",
              ])),
          )
          .sendLogs("message-edit-send-fail"),
          (e.isSendFailure = !0));
        return;
      }
      (await c({ editedMsg: t, parent: e, timestamp: i }),
        await d(e, r),
        e.updateAck(t.ack),
        (e.isSendFailure =
          t.isSendFailure === !0 ||
          t.errorCode ===
            o("WAWebErrorType").SendFailureErrorCode.EditWindowExpired));
    }
    async function h(e, t) {
      var n,
        a = o("WAWebFrontendMsgGetters").getChat(e),
        i = !!((n = a.groupMetadata) != null && n.isLidAddressingMode),
        l = o("WAWebWamMsgUtils").msgIsLid(e, a.id, i),
        s = o("WAWebMsgInfoUtils").getGroupMessageSendReporterOptions(a.id, l);
      s.originalMessage = e;
      var c = e.messageSecret != null,
        d = t;
      if (c)
        try {
          d = await o(
            "WAWebCreateEncryptedMessageEditMsgData",
          ).createEncryptedMessageEditMsgData(t, e);
        } catch (e) {
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[message-edit] Failed to create encrypted message edit ",
                  "",
                ])),
              r("WAWebSerializeError")(e),
            )
            .sendLogs("encrypted-message-edit-failed");
        }
      var m = new (o("WAWebMsgModel").Msg)(d != null ? d : t);
      ((m.wamMessageSendReporter = new (o(
        "WAWebMessageSendReporter",
      ).MessageSendReporter)(
        m,
        babelHelpers.extends({}, s, {
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
        })));
      var p = m.wamMessageSendPerfReporter;
      await o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "sendMessageEdit",
          async function (n) {
            var r = n.chatId,
              o = n.msgData;
            (await f(o, t, d, r, p), await g(e, m));
          },
          { priority: o("WAJobOrchestratorTypes").JobPriority.UI_ACTION },
        )
        .waitUntilCompleted({
          msgData: o("WAWebMsgDataFromModel").msgDataFromMsgModel(e),
          chatId: o("WAWebFrontendMsgGetters").getChat(e).id,
        });
    }
    function y(e, t) {
      return (
        (e.errorCode = t),
        (o("WAWebBackendRuntime").isWebDiBackendEnabled()
          ? o("WAWebBackendRuntime").runtime(
              o("WAWebMessageStoreService").MessageStoreService,
            ).updateMessageTable
          : o("WAWebDBUpdateMessageTable").updateMessageTable)(e.id, {
          errorCode: t,
        })
      );
    }
    ((l.resendLatestEdit = m),
      (l.sendMessageEdit = p),
      (l.createEditMsgData = _),
      (l.addAndSendMessageEdit = h));
  },
  98,
);
