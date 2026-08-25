__d(
  "WAWebSendMessageEditAction",
  [
    "Promise",
    "WAJobOrchestratorTypes",
    "WALogger",
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
    "WAWebLidMeUserForChat",
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
    "asyncToGeneratorRuntime",
    "err",
    "nullthrows",
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
            ? yield L(t, o("WAWebErrorType").SendFailureErrorCode.NoError)
            : (yield L(
                e,
                o("WAWebErrorType").SendFailureErrorCode.EditWindowExpired,
              ),
              yield L(
                t,
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
      var u = h({ msg: o("WAWebStateUtils").unproxy(e), options: a, text: t }),
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
        o("WAWebCoexEditDeleteAlertUtils").shouldShowCoexEditAlert(m, p) &&
          (o("WAWebCoexEditDeleteAlertUtils").markCoexEditAlertShown(m),
          o("WAWebOpenCoexEditDeleteAlertModal").openCoexEditAlertModal(_));
      });
    }
    function h(e) {
      var t,
        n = e.msg,
        a = e.options,
        i = e.text,
        l = o("WAWebFrontendMsgGetters").getChat(n),
        s = o("WAWebLidMeUserForChat").getMeUserLidOrJidForChat(
          l,
          o("WAWebMsgKeyUtils").TranslateMsgKeyType.EditMessage,
        ),
        u = o("WAWebChatGetters").getIsGroup(l)
          ? o("WAWebWidFactory").asUserWidOrThrow(s)
          : void 0,
        c = new (r("WAWebMsgKey"))({
          id: r("WAWebMsgKey").newId_DEPRECATED(),
          remote: n.id.remote,
          fromMe: !0,
          participant: u,
        }),
        d = a.groupMentions,
        m = a.linkPreview,
        p = a.mentionedJidList,
        _ = {
          id: c,
          from: s,
          to: n.id.remote,
          type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
          kind: o("WAWebMsgType").MsgKind.Protocol,
          subtype: "message_edit",
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          protocolMessageKey: n.id,
          local: !0,
          t: o("WATimeUtils").unixTime(),
          mentionedJidList: p,
          groupMentions: d,
          latestEditMsgKey: c,
          latestEditSenderTimestampMs: o("WATimeUtils").unixTimeMs(),
          editMsgType: n.type,
          errorCode: o("WAWebErrorType").SendFailureErrorCode.NoError,
          messageSecret: o(
            "WAWebMessagingGatingUtils",
          ).isReportingTokenSendingEnabled()
            ? n.messageSecret
            : null,
          aiProvenance:
            o("WAWebMsgGetters").getIsNewsletterMsg(n) &&
            o("WAWebNewsletterGatingUtils").isChannelSGISenderEnabled() &&
            (t = n.aiProvenance) != null
              ? t
              : void 0,
        };
      switch (
        r("nullthrows")(o("WAWebMessageEditUtils").getMsgEditType(n.type))
      ) {
        case o("WAWebMessageEditUtils").MsgEditType.TextEdit: {
          var f,
            g,
            h,
            y,
            C,
            b,
            v = i.trim();
          _ = babelHelpers.extends({}, _, {
            body: v,
            isSpoiler:
              o("WAWebSpoilerFormatRegex").hasSpoilerMarkup(v) &&
              o("WAWebSpoilerGating").isSpoilerSenderEnabled(),
            title: (f = m == null ? void 0 : m.title) != null ? f : void 0,
            matchedText:
              (g = m == null ? void 0 : m.matchedText) != null ? g : void 0,
            description: m == null ? void 0 : m.description,
            thumbnail:
              (h = m == null ? void 0 : m.thumbnail) != null ? h : void 0,
            richPreviewType: m == null ? void 0 : m.richPreviewType,
            doNotPlayInline: m == null ? void 0 : m.doNotPlayInline,
            inviteGrpType: m == null ? void 0 : m.inviteGrpType,
            thumbnailDirectPath: m == null ? void 0 : m.thumbnailDirectPath,
            thumbnailSha256: m == null ? void 0 : m.thumbnailSha256,
            thumbnailEncSha256: m == null ? void 0 : m.thumbnailEncSha256,
            thumbnailHeight: m == null ? void 0 : m.thumbnailHeight,
            thumbnailWidth: m == null ? void 0 : m.thumbnailWidth,
            mediaKey:
              (y = m == null ? void 0 : m.mediaKey) != null ? y : void 0,
            mediaKeyTimestamp:
              (C = m == null ? void 0 : m.mediaKeyTimestamp) != null
                ? C
                : void 0,
            paymentLinkMetadata:
              (b = o("WAWebPaymentLink").getPaymentLinkMessageMetadata(
                m,
                o("WAWebCodeFormatMutator").removeCodeBlocks(i),
              )) != null
                ? b
                : void 0,
          });
          break;
        }
        case o("WAWebMessageEditUtils").MsgEditType.CaptionEdit: {
          var S = i.trim();
          _ = babelHelpers.extends({}, _, {
            caption: S,
            isSpoiler:
              o("WAWebSpoilerFormatRegex").hasSpoilerMarkup(S) &&
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
      return _;
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
          var d = e.messageSecret != null,
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
    function L(e, t) {
      return (
        (e.errorCode = t),
        o("WAWebDBUpdateMessageTable").updateMessageTable(e.id, {
          errorCode: t,
        })
      );
    }
    ((l.resendLatestEdit = f),
      (l.sendMessageEdit = g),
      (l.createEditMsgData = h),
      (l.addAndSendMessageEdit = S));
  },
  98,
);
