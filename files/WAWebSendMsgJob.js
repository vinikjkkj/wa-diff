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
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i = t.data,
            l = i.id,
            u = i.to,
            c = t.data.to;
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
                l,
              ),
              yield o(
                "WAWebEventsWaitForOfflineDeliveryEnd",
              ).waitForOfflineDeliveryEnd()),
            !l || !l.id)
          )
            return (s || (s = n("Promise"))).reject(
              r("err")("[messaging] sending message without an id"),
            );
          if (!u)
            return (s || (s = n("Promise"))).reject(
              r("err")("[messaging] sending message without an remote id"),
            );
          var d = o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(
            o("WAWebOutgoingMessage").OutgoingMessageOriginType.Chat,
            t,
          );
          if (u.isUser()) {
            r("WAWebWid").isCAPISupportAccount(u) &&
              o("WAWebABPropsSaga").getIsSagaV1Enabled() &&
              o("WAWebABPropsSaga").getIsSagaV1ReengagementEnabled() &&
              (yield o("WAWebE2EProtoGenerator").addDebugInfoSupportPayload(d));
            var m = o("WAWebSendUserMsgJob").encryptAndSendUserMsg(t, d, a, c);
            return (
              t.data.type !== "protocol" &&
                o("WAWebSendTcTokenChatAction").sendTcToken(u),
              m
            );
          } else if (u.isGroup())
            return o("WAWebSendGroupMsgJob").encryptAndSendGroupMsg(t, d, a);
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
