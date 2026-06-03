__d(
  "WAWebSendMessageEditAction",
  [
    "PaymentLink",
    "Promise",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WANullthrows",
    "WATimeUtils",
    "WAWebBizCoexGatingUtils",
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
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          o("WAWebMessageEditUtils").isParentWithinEditProcessingWindow({
            parentTsInSeconds: e.t,
            editTsInSeconds: n,
            msgKey: e.id,
          })
            ? yield t.updateErrorCode(
                o("WAWebErrorType").SendFailureErrorCode.NoError,
              )
            : (yield e.updateErrorCode(
                o("WAWebErrorType").SendFailureErrorCode.EditWindowExpired,
              ),
              yield t.updateErrorCode(
                o("WAWebErrorType").SendFailureErrorCode.EditWindowExpired,
              ));
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t != null &&
            (yield o("WAWebDBUpdateMessageTable").updateMessageTable(e.id, {
              count: t,
            }));
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      var t = o("WAWebMsgGetters").getLatestEditMsgKey(e);
      return t == null || !o("WAWebMsgActionCapability").canEditText(e)
        ? (c || (c = n("Promise"))).resolve()
        : o("WAWebDBMsgUtils")
            .getMsgByMsgKey(t)
            .then(function (t) {
              if (t)
                return b(
                  o("WAWebStateUtils").unproxy(e),
                  o("WAWebMsgModelFromData").msgModelFromMsgData(t),
                );
            })
            .catch(function (e) {});
    }
    function g(e, t, a) {
      var i, l, s;
      if (
        !o("WAWebMsgActionCapability").canEditText(e) &&
        !o("WAWebMsgActionCapability").canEditCaption(e)
      )
        return (c || (c = n("Promise"))).reject(
          r("err")("Cannot edit message"),
        );
      var u = h(o("WAWebStateUtils").unproxy(e), t, a),
        d = o("WAWebFrontendMsgGetters").getChat(e),
        m =
          (i = d == null || (l = d.id) == null ? void 0 : l.toString()) != null
            ? i
            : "",
        p = (d == null || (s = d.contact) == null ? void 0 : s.isHosted) === !0,
        _ =
          o(
            "WAWebUserPrefsMultiDevice",
          ).getIsHostedMeAccountFromLocalStorage() === !0;
      return S(o("WAWebStateUtils").unproxy(e), u).then(function () {
        o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
          o("WAWebCoexEditDeleteAlertUtils").shouldShowCoexEditAlert(m, p) &&
          (o("WAWebCoexEditDeleteAlertUtils").markCoexEditAlertShown(m),
          o("WAWebOpenCoexEditDeleteAlertModal").openCoexEditAlertModal(_));
      });
    }
    function h(e, t, n) {
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
    function y(e, t, n, r, o) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, a, i) {
            t.latestEditMsgKey &&
              (yield o("WAWebDBMessageDelete").removeMessagesFromHistory([
                t.latestEditMsgKey.toString(),
              ]));
            try {
              (i.startSavedStage(),
                yield o("WAWebDBProcessMessage").storeMessages(
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
              yield o("WAWebProcessAddonsJob").processEditProtocolMsgsJob([n]),
              i.postRenderedStage());
          },
        )),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebMsgGetters").getIsNewsletterMsg(e)
              ? yield o("WAWebNewsletterSendMsgAction").sendNewsletterEditMsg(
                  e,
                  t,
                )
              : yield o("WAWebSendMsgRecordAction").sendMsgRecord(t),
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
          (yield d(e, t, i),
            yield p(e, r),
            e.updateAck(t.ack),
            (e.isSendFailure =
              t.isSendFailure === !0 ||
              t.errorCode ===
                o("WAWebErrorType").SendFailureErrorCode.EditWindowExpired));
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a,
            i = o("WAWebFrontendMsgGetters").getChat(e),
            l = !!((a = i.groupMetadata) != null && a.isLidAddressingMode),
            s = o("WAWebWamMsgUtils").msgIsLid(e, i.id, l),
            c = o("WAWebMsgInfoUtils").getGroupMessageSendReporterOptions(
              i.id,
              s,
            );
          c.originalMessage = e;
          var d =
              e.messageSecret != null &&
              o(
                "WAWebMessageEditGatingUtils",
              ).isMessageEditToMessageSecretSenderEnabled(),
            m = t;
          if (d)
            try {
              m = yield o(
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
          var p = new (o("WAWebMsgModel").Msg)(m != null ? m : t);
          ((p.wamMessageSendReporter = new (o(
            "WAWebMessageSendReporter",
          ).MessageSendReporter)(
            p,
            babelHelpers.extends({}, c, {
              frontendDeps: o("WAWebMessageSendReporterFrontendDeps")
                .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
            }),
          )),
            (p.wamMessageSendPerfReporter = new (o(
              "WAWebMessageSendPerfReporter",
            ).MessageSendPerfReporter)({
              chatWid: p.to,
              mediaType: o("WAWebWamMsgUtils").getWamMediaType(p),
              messageType: o("WAWebWamMsgUtils").getWamMessageType(p),
            })));
          var _ = p.wamMessageSendPerfReporter;
          yield o("WAWebOrchestratorNonPersistedJob")
            .createNonPersistedJob(
              "sendMessageEdit",
              (function () {
                var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (n) {
                    var r = n.chatId,
                      o = n.msgData;
                    (yield y(o, t, m, r, _), yield b(e, p));
                  },
                );
                return function (e) {
                  return r.apply(this, arguments);
                };
              })(),
              { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
            )
            .waitUntilCompleted({
              msgData: o("WAWebMsgDataFromModel").msgDataFromMsgModel(e),
              chatId: o("WAWebFrontendMsgGetters").getChat(e).id,
            });
        })),
        R.apply(this, arguments)
      );
    }
    ((l.resendLatestEdit = f),
      (l.sendMessageEdit = g),
      (l.createEditMsgData = h),
      (l.addAndSendMessageEdit = S));
  },
  98,
);
