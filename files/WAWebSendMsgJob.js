__d(
  "WAWebSendMsgJob",
  [
    "WALogger",
    "WAWebABPropsSaga",
    "WAWebE2EProtoGenerator",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebMessageSendPerfReporter",
    "WAWebMessageSendReporter",
    "WAWebOutgoingMessage",
    "WAWebPnlessStanzaMigration",
    "WAWebScheduledMsgSenderJob",
    "WAWebSendGroupKeyDistributionMsgJob",
    "WAWebSendGroupMsgJob",
    "WAWebSendTcTokenChatAction",
    "WAWebSendUserMsgJob",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumMessageType",
    "WAWebWid",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, n, a) {
      var i = t.data,
        l = i.id,
        s = i.to,
        u = t.data.to;
      if (
        (await o("WAWebPnlessStanzaMigration").maybeReplaceWidWithAccountLid(t),
        o(
          "WAWebSimpleSignalPNToFBIDMigration",
        ).maybeReplaceWidWithFbIdForBotSend(t),
        o(
          "WAWebSimpleSignalPNToFBIDMigration",
        ).maybeReplaceWidWithFbIdForInvoke(t, "invokedBotWid"),
        o(
          "WAWebSimpleSignalPNToFBIDMigration",
        ).maybeReplaceWidWithFbIdForInvoke(
          t,
          "botRespOrInvocationRevokeBotWid",
        ),
        o("WAWebEventsWaitForOfflineDeliveryEnd").isOfflineDeliveryEnd() ||
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[messaging] waiting for offline delivery end ",
                "",
              ])),
            l,
          ),
          await o(
            "WAWebEventsWaitForOfflineDeliveryEnd",
          ).waitForOfflineDeliveryEnd()),
        !l || !l.id)
      )
        return Promise.reject(
          r("err")("[messaging] sending message without an id"),
        );
      if (!s)
        return Promise.reject(
          r("err")("[messaging] sending message without an remote id"),
        );
      var c = o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(
          o("WAWebOutgoingMessage").OutgoingMessageOriginType.Chat,
          t,
        ),
        d = await o(
          "WAWebScheduledMsgSenderJob",
        ).maybeWrapScheduledMessageForSend(t, c, s, a),
        m = d.msgProtobuf,
        p = d.scheduledMsgMetadata;
      if (s.isUser()) {
        r("WAWebWid").isCAPISupportAccount(s) &&
          o("WAWebABPropsSaga").getIsSagaV1Enabled() &&
          o("WAWebABPropsSaga").getIsSagaV1ReengagementEnabled() &&
          (await o("WAWebE2EProtoGenerator").addDebugInfoSupportPayload(m));
        var _ = o("WAWebSendUserMsgJob").encryptAndSendUserMsg({
          chatId: u,
          metricReporter: n,
          msgProtobuf: m,
          msgRecord: t,
          scheduledMsgMetadata: p,
        });
        return (
          t.data.type !== "protocol" &&
            o("WAWebSendTcTokenChatAction").sendTcToken(s),
          _
        );
      } else if (s.isGroup())
        return o("WAWebSendGroupMsgJob").encryptAndSendGroupMsg({
          metricReporter: n,
          msgProtobuf: m,
          msgRecord: t,
          scheduledMsgMetadata: p,
        });
      return Promise.reject(
        r("err")("[messaging] unsupported remote jid type"),
      );
    }
    async function u(e) {
      if (
        (await o(
          "WAWebEventsWaitForOfflineDeliveryEnd",
        ).waitForOfflineDeliveryEnd(),
        e.id)
      ) {
        if (!e.remote)
          return Promise.reject(
            r("err")("[messaging] sending message without an remote id"),
          );
      } else
        return Promise.reject(
          r("err")("[messaging] sending message without an id"),
        );
      if (e.remote.isGroup()) {
        var t = o("WAWebMessageSendReporter").createMessageSendMetricReporter({
            messageIsInvisible: !0,
          }),
          n = new (o("WAWebMessageSendPerfReporter").MessageSendPerfReporter)({
            chatWid: e.remote,
            mediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE,
            messageType: o("WAWebWamEnumMessageType").MESSAGE_TYPE.GROUP,
          });
        return (
          n.setMessageIsInvisible(!0),
          o("WAWebSendGroupKeyDistributionMsgJob")
            .encryptAndSendGroupKeyDistributionMsg(e, t)
            .then(function () {
              (n.postWrittenWireStage(), t.post());
            })
        );
      }
      return Promise.reject(
        r("err")("[messaging] unsupported remote jid type"),
      );
    }
    ((l.encryptAndSendMsg = s), (l.encryptAndSendKeyDistributionMsg = u));
  },
  98,
);
