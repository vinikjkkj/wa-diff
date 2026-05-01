__d(
  "WAWebSendMsgJob",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          var l = t.data,
            u = l.id,
            c = l.to,
            d = t.data.to;
          if (
            (yield o(
              "WAWebPnlessStanzaMigration",
            ).maybeReplaceWidWithAccountLid(t),
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
                u,
              ),
              yield o(
                "WAWebEventsWaitForOfflineDeliveryEnd",
              ).waitForOfflineDeliveryEnd()),
            !u || !u.id)
          )
            return (s || (s = n("Promise"))).reject(
              r("err")("[messaging] sending message without an id"),
            );
          if (!c)
            return (s || (s = n("Promise"))).reject(
              r("err")("[messaging] sending message without an remote id"),
            );
          var m = o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(
              o("WAWebOutgoingMessage").OutgoingMessageOriginType.Chat,
              t,
            ),
            p = yield o(
              "WAWebScheduledMsgSenderJob",
            ).maybeWrapScheduledMessageForSend(t, m, c, i),
            _ = p.msgProtobuf,
            f = p.scheduledMsgMetadata;
          if (c.isUser()) {
            r("WAWebWid").isCAPISupportAccount(c) &&
              o("WAWebABPropsSaga").getIsSagaV1Enabled() &&
              o("WAWebABPropsSaga").getIsSagaV1ReengagementEnabled() &&
              (yield o("WAWebE2EProtoGenerator").addDebugInfoSupportPayload(_));
            var g = o("WAWebSendUserMsgJob").encryptAndSendUserMsg(
              t,
              _,
              a,
              d,
              f,
            );
            return (
              t.data.type !== "protocol" &&
                o("WAWebSendTcTokenChatAction").sendTcToken(c),
              g
            );
          } else if (c.isGroup())
            return o("WAWebSendGroupMsgJob").encryptAndSendGroupMsg(t, _, a);
          return (s || (s = n("Promise"))).reject(
            r("err")("[messaging] unsupported remote jid type"),
          );
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            (yield o(
              "WAWebEventsWaitForOfflineDeliveryEnd",
            ).waitForOfflineDeliveryEnd(),
            e.id)
          ) {
            if (!e.remote)
              return (s || (s = n("Promise"))).reject(
                r("err")("[messaging] sending message without an remote id"),
              );
          } else
            return (s || (s = n("Promise"))).reject(
              r("err")("[messaging] sending message without an id"),
            );
          if (e.remote.isGroup()) {
            var t = o(
                "WAWebMessageSendReporter",
              ).createMessageSendMetricReporter({ messageIsInvisible: !0 }),
              a = new (o(
                "WAWebMessageSendPerfReporter",
              ).MessageSendPerfReporter)({
                chatWid: e.remote,
                mediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE,
                messageType: o("WAWebWamEnumMessageType").MESSAGE_TYPE.GROUP,
              });
            return (
              a.setMessageIsInvisible(!0),
              o("WAWebSendGroupKeyDistributionMsgJob")
                .encryptAndSendGroupKeyDistributionMsg(e, t)
                .then(function () {
                  (a.postWrittenWireStage(), t.post());
                })
            );
          }
          return (s || (s = n("Promise"))).reject(
            r("err")("[messaging] unsupported remote jid type"),
          );
        })),
        m.apply(this, arguments)
      );
    }
    ((l.encryptAndSendMsg = u), (l.encryptAndSendKeyDistributionMsg = d));
  },
  98,
);
