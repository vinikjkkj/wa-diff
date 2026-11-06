__d(
  "WAWebSendMsgJob",
  [
    "Promise",
    "WALogger",
    "WAWebABPropsSaga",
    "WAWebE2EProtoGenerator",
    "WAWebEncryptAndSendGroupMsg",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebMaibaWASSMigration",
    "WAWebOutgoingMessage",
    "WAWebPnlessStanzaMigration",
    "WAWebQueuedSendGate",
    "WAWebScheduledMsgSenderJob",
    "WAWebSendTcTokenChatAction",
    "WAWebSendUserMsgJob",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          var l = t.data,
            c = l.id,
            d = l.to,
            m = t.data.to;
          (yield o("WAWebPnlessStanzaMigration").maybeReplaceWidWithAccountLid(
            t,
          ),
            o(
              "WAWebSimpleSignalPNToFBIDMigration",
            ).maybeReplaceWidWithFbIdForBotSend(t),
            o(
              "WAWebMaibaWASSMigration",
            ).maybeReplaceMaibaAiHubLidWithFbidForSend(t),
            o(
              "WAWebSimpleSignalPNToFBIDMigration",
            ).maybeReplaceWidWithFbIdForInvoke(t, "invokedBotWid"),
            o(
              "WAWebSimpleSignalPNToFBIDMigration",
            ).maybeReplaceWidWithFbIdForInvoke(
              t,
              "botRespOrInvocationRevokeBotWid",
            ));
          var p = o("WAWebQueuedSendGate").holdQueuedSend(t);
          try {
            o("WAWebEventsWaitForOfflineDeliveryEnd").isOfflineDeliveryEnd() ||
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[messaging] waiting for offline delivery end ",
                    "",
                  ])),
                c,
              ),
              yield o(
                "WAWebEventsWaitForOfflineDeliveryEnd",
              ).waitForOfflineDeliveryEnd());
          } finally {
            yield p(
              o("WAWebEventsWaitForOfflineDeliveryEnd").isOfflineDeliveryEnd(),
            ).catch(function (e) {
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[messaging] queued send release failed ",
                      "",
                    ])),
                  c,
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("queued-send-release-failed");
            });
          }
          if (!c || !c.id)
            return (u || (u = n("Promise"))).reject(
              r("err")("[messaging] sending message without an id"),
            );
          if (!d)
            return (u || (u = n("Promise"))).reject(
              r("err")("[messaging] sending message without an remote id"),
            );
          var _ = o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(
              o("WAWebOutgoingMessage").OutgoingMessageOriginType.Chat,
              t,
            ),
            f = yield o(
              "WAWebScheduledMsgSenderJob",
            ).maybeWrapScheduledMessageForSend({
              msgProtobuf: _,
              msgRecord: t,
              remoteWid: d,
              scheduledMsgMetadata: i,
            }),
            g = f.msgProtobuf,
            h = f.scheduledMsgMetadata;
          if (d.isUser()) {
            r("WAWebWid").isCAPISupportAccount(d) &&
              o("WAWebABPropsSaga").getIsSagaV1Enabled() &&
              o("WAWebABPropsSaga").getIsSagaV1ReengagementEnabled() &&
              (yield o("WAWebE2EProtoGenerator").addDebugInfoSupportPayload(g));
            var y = o("WAWebSendUserMsgJob").encryptAndSendUserMsg({
              chatId: m,
              metricReporter: a,
              msgProtobuf: g,
              msgRecord: t,
              scheduledMsgMetadata: h,
            });
            return (
              t.data.type !== "protocol" &&
                o("WAWebSendTcTokenChatAction").sendTcToken(d),
              y
            );
          } else if (d.isGroup())
            return o("WAWebEncryptAndSendGroupMsg").encryptAndSendGroupMsg({
              metricReporter: a,
              msgProtobuf: g,
              msgRecord: t,
              scheduledMsgMetadata: h,
            });
          return (u || (u = n("Promise"))).reject(
            r("err")("[messaging] unsupported remote jid type"),
          );
        })),
        d.apply(this, arguments)
      );
    }
    l.encryptAndSendMsg = c;
  },
  98,
);
