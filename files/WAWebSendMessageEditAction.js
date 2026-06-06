__d(
  "WAWebSendMessageEditAction",
  [
    "PaymentLink",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WANullthrows",
    "WATimeUtils",
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
    "WAWebLidMigrationUtils",
    "WAWebMessageEditGatingUtils",
    "WAWebMessageEditUtils",
    "WAWebMessageSendPerfReporter",
    "WAWebMessageSendReporter",
    "WAWebMessageSendReporterFrontendDeps",
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
    "WAWebNewsletterSendMsgAction",
    "WAWebOpenCoexEditDeleteAlertModal",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebProcessAddonsJob",
    "WAWebSendMsgRecordAction",
    "WAWebSendMsgResultAction",
    "WAWebSerializeError",
    "WAWebStateUtils",
    "WAWebUserPrefsMultiDevice",
    "WAWebViewMode.flow",
    "WAWebWamMsgUtils",
    "WAWebWidFactory",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(e, t, n) {
      o("WAWebMessageEditUtils").isParentWithinEditProcessingWindow({
        parentTsInSeconds: e.t,
        editTsInSeconds: n,
        msgKey: e.id,
      })
        ? await t.updateErrorCode(
            o("WAWebErrorType").SendFailureErrorCode.NoError,
          )
        : (await e.updateErrorCode(
            o("WAWebErrorType").SendFailureErrorCode.EditWindowExpired,
          ),
          await t.updateErrorCode(
            o("WAWebErrorType").SendFailureErrorCode.EditWindowExpired,
          ));
    }
    async function d(e, t) {
      t != null &&
        (await o("WAWebDBUpdateMessageTable").updateMessageTable(e.id, {
          count: t,
        }));
    }
    function m(e) {
      var t = o("WAWebMsgGetters").getLatestEditMsgKey(e);
      return t == null || !o("WAWebMsgActionCapability").canEditText(e)
        ? Promise.resolve()
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
      var s = _(o("WAWebStateUtils").unproxy(e), t, n),
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
    function _(e, t, n) {
      var a,
        i,
        l,
        s,
        u,
        c,
        d = o("WAWebFrontendMsgGetters").getChat(e),
        m = o("WAWebLidMigrationUtils").getMeUserLidOrJidForChat(
          d,
          o("WAWebMsgKeyUtils").TranslateMsgKeyType.EditMessage,
        ),
        p = o("WAWebChatGetters").getIsGroup(d)
          ? o("WAWebWidFactory").asUserWidOrThrow(m)
          : void 0,
        _ = new (r("WAWebMsgKey"))({
          id: r("WAWebMsgKey").newId_DEPRECATED(),
          remote: e.id.remote,
          fromMe: !0,
          participant: p,
        }),
        f = n.groupMentions,
        g = n.linkPreview,
        h = n.mentionedJidList,
        y = {
          id: _,
          from: m,
          to: e.id.remote,
          type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
          kind: o("WAWebMsgType").MsgKind.Protocol,
          subtype: "message_edit",
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          protocolMessageKey: e.id,
          local: !0,
          t: o("WATimeUtils").unixTime(),
          mentionedJidList: h,
          groupMentions: f,
          latestEditMsgKey: _,
          latestEditSenderTimestampMs: o("WATimeUtils").unixTimeMs(),
          editMsgType: e.type,
          errorCode: o("WAWebErrorType").SendFailureErrorCode.NoError,
          messageSecret: o(
            "WAWebMessagingGatingUtils",
          ).isReportingTokenSendingEnabled()
            ? e.messageSecret
            : null,
        };
      switch (
        r("WANullthrows")(o("WAWebMessageEditUtils").getMsgEditType(e.type))
      ) {
        case o("WAWebMessageEditUtils").MsgEditType.TextEdit:
          y = babelHelpers.extends({}, y, {
            body: t.trim(),
            title: (a = g == null ? void 0 : g.title) != null ? a : void 0,
            matchedText:
              (i = g == null ? void 0 : g.matchedText) != null ? i : void 0,
            description: g == null ? void 0 : g.description,
            thumbnail:
              (l = g == null ? void 0 : g.thumbnail) != null ? l : void 0,
            richPreviewType: g == null ? void 0 : g.richPreviewType,
            doNotPlayInline: g == null ? void 0 : g.doNotPlayInline,
            inviteGrpType: g == null ? void 0 : g.inviteGrpType,
            thumbnailDirectPath: g == null ? void 0 : g.thumbnailDirectPath,
            thumbnailSha256: g == null ? void 0 : g.thumbnailSha256,
            thumbnailEncSha256: g == null ? void 0 : g.thumbnailEncSha256,
            thumbnailHeight: g == null ? void 0 : g.thumbnailHeight,
            thumbnailWidth: g == null ? void 0 : g.thumbnailWidth,
            mediaKey:
              (s = g == null ? void 0 : g.mediaKey) != null ? s : void 0,
            mediaKeyTimestamp:
              (u = g == null ? void 0 : g.mediaKeyTimestamp) != null
                ? u
                : void 0,
            paymentLinkMetadata:
              (c = o("PaymentLink").getPaymentLinkMessageMetadata(
                g,
                o("WAWebCodeFormatMutator").removeCodeBlocks(t),
              )) != null
                ? c
                : void 0,
          });
          break;
        case o("WAWebMessageEditUtils").MsgEditType.CaptionEdit:
          y = babelHelpers.extends({}, y, { caption: t.trim() });
          break;
        case o("WAWebMessageEditUtils").MsgEditType.EventEdit:
        case o("WAWebMessageEditUtils").MsgEditType.PollEdit:
        case o("WAWebMessageEditUtils").MsgEditType.RichResponseEdit:
        case o("WAWebMessageEditUtils").MsgEditType.LoadingMediaEdit:
          break;
      }
      return y;
    }
    async function f(t, n, r, a, i) {
      t.latestEditMsgKey &&
        (await o("WAWebDBMessageDelete").removeMessagesFromHistory([
          t.latestEditMsgKey.toString(),
        ]));
      try {
        (i.startSavedStage(),
          await o("WAWebDBProcessMessage").storeMessages(
            [r != null ? r : n],
            a,
          ),
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
          : await o("WAWebSendMsgRecordAction").sendMsgRecord(t),
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
      (await c(e, t, i),
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
      var c =
          e.messageSecret != null &&
          o(
            "WAWebMessageEditGatingUtils",
          ).isMessageEditToMessageSecretSenderEnabled(),
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
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted({
          msgData: o("WAWebMsgDataFromModel").msgDataFromMsgModel(e),
          chatId: o("WAWebFrontendMsgGetters").getChat(e).id,
        });
    }
    ((l.resendLatestEdit = m),
      (l.sendMessageEdit = p),
      (l.createEditMsgData = _),
      (l.addAndSendMessageEdit = h));
  },
  98,
);
