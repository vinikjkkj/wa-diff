__d(
  "WAWebSendMsgJob",
  [
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
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t, n, a) {
      var i = t.data,
        l = i.id,
        u = i.to,
        c = t.data.to;
      (await o("WAWebPnlessStanzaMigration").maybeReplaceWidWithAccountLid(t),
        o(
          "WAWebSimpleSignalPNToFBIDMigration",
        ).maybeReplaceWidWithFbIdForBotSend(t),
        o("WAWebMaibaWASSMigration").maybeReplaceMaibaAiHubLidWithFbidForSend(
          t,
        ),
        o(
          "WAWebSimpleSignalPNToFBIDMigration",
        ).maybeReplaceWidWithFbIdForInvoke(t, "invokedBotWid"),
        o(
          "WAWebSimpleSignalPNToFBIDMigration",
        ).maybeReplaceWidWithFbIdForInvoke(
          t,
          "botRespOrInvocationRevokeBotWid",
        ));
      var d = o("WAWebQueuedSendGate").holdQueuedSend(t);
      try {
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
          ).waitForOfflineDeliveryEnd());
      } finally {
        await d(
          o("WAWebEventsWaitForOfflineDeliveryEnd").isOfflineDeliveryEnd(),
        ).catch(function (e) {
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[messaging] queued send release failed ",
                  "",
                ])),
              l,
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("queued-send-release-failed");
        });
      }
      if (!l || !l.id)
        return Promise.reject(
          r("err")("[messaging] sending message without an id"),
        );
      if (!u)
        return Promise.reject(
          r("err")("[messaging] sending message without an remote id"),
        );
      var m = o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(
          o("WAWebOutgoingMessage").OutgoingMessageOriginType.Chat,
          t,
        ),
        p = await o(
          "WAWebScheduledMsgSenderJob",
        ).maybeWrapScheduledMessageForSend({
          msgProtobuf: m,
          msgRecord: t,
          remoteWid: u,
          scheduledMsgMetadata: a,
        }),
        _ = p.msgProtobuf,
        f = p.scheduledMsgMetadata;
      if (u.isUser()) {
        r("WAWebWid").isCAPISupportAccount(u) &&
          o("WAWebABPropsSaga").getIsSagaV1Enabled() &&
          o("WAWebABPropsSaga").getIsSagaV1ReengagementEnabled() &&
          (await o("WAWebE2EProtoGenerator").addDebugInfoSupportPayload(_));
        var g = o("WAWebSendUserMsgJob").encryptAndSendUserMsg({
          chatId: c,
          metricReporter: n,
          msgProtobuf: _,
          msgRecord: t,
          scheduledMsgMetadata: f,
        });
        return (
          t.data.type !== "protocol" &&
            o("WAWebSendTcTokenChatAction").sendTcToken(u),
          g
        );
      } else if (u.isGroup())
        return o("WAWebEncryptAndSendGroupMsg").encryptAndSendGroupMsg({
          metricReporter: n,
          msgProtobuf: _,
          msgRecord: t,
          scheduledMsgMetadata: f,
        });
      return Promise.reject(
        r("err")("[messaging] unsupported remote jid type"),
      );
    }
    l.encryptAndSendMsg = u;
  },
  98,
);
