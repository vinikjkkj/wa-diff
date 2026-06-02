__d(
  "WAWebHandleNewsletterMsg",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebHandleMsgTypes.flow",
    "WAWebHandleNewsletterMsgAddOns",
    "WAWebHandleNewsletterMsgLogger",
    "WAWebLogReceivedMessages",
    "WAWebMessageProcessorCache",
    "WAWebMessageQueue",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterMsgParser",
    "WAWebNewsletterMsgProcessor",
    "WAWebOfflineHandler",
    "WAWebWamWorkerOfflineProcessReporter",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(t) {
      try {
        var n = r("WAWebNewsletterMsgParser")(t),
          a = n.ack,
          i = n.msg;
        if (!o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled())
          return a;
        var l = o("WATimeUtils").unixTimeMs(),
          c = i.offline != null;
        (c &&
          (o(
            "WAWebOfflineHandler",
          ).OfflineMessageHandler.addOfflinePendingMessage(),
          o(
            "WAWebOfflineHandler",
          ).OfflineMessageHandler.offlineStanzaReceivedAfterComplete()),
          o(
            "WAWebOfflineHandler",
          ).OfflineMessageHandler.isResumeFromRestartComplete() &&
            ((i.offline = null), (c = !1)));
        var d = !o("WAWebNewsletterMsgProcessor").isAddOnType(i.type);
        return await o("WAWebMessageQueue").onMessageQueue({
          chatWid: i.from,
          isOffline: c,
          msgCategory: null,
          action: async function () {
            var t = o("WATimeUtils").unixTimeMs(),
              n = await o(
                "WAWebNewsletterMsgProcessor",
              ).preprocessNewsletterMsg(i),
              u = n.isOrphan,
              m = n.msgData,
              p = d
                ? o("WAWebMessageProcessorCache")
                    .messageProcessorCache.addMessages([{ msg: m }], !c)
                    .then(function () {
                      (o(
                        "WAWebWamWorkerOfflineProcessReporter",
                      ).WorkerOfflineResumeReporter.updateProcessedMessageCount(),
                        o("WAWebLogReceivedMessages").logReceivedMessagesInWAM({
                          msgs: [m],
                          offline: i.offline,
                          tsMillis: i.t * 1e3,
                          clientReceivedTsMillis: l,
                          msgProcessStartTsMillis: t,
                          serverAddressingMode: null,
                          localAddressingMode: null,
                        }));
                    })
                    .catch(function (t) {
                      o("WALogger")
                        .ERROR(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "[newsletter] Failed to handle newsletter message",
                            ])),
                        )
                        .tags("newsletter")
                        .sendLogs(
                          "newsletter-failed-to-store-incoming-message",
                        );
                    })
                : Promise.resolve();
            return (
              await o(
                "WAWebHandleNewsletterMsgAddOns",
              ).maybeHandleNewsletterMsgAddOns(m, { pollVotes: i.pollVote }),
              o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd &&
                (o("WAWebBackendEventBus").BackendEventBus
                  .isOfflineDeliveryEnd && (await p),
                o("WAWebBackendApi").frontendFireAndForget(
                  "updateNewsletterMessageUI",
                  { chatID: i.from, msg: m, isOrphan: u },
                )),
              c
                ? (o(
                    "WAWebOfflineHandler",
                  ).OfflineMessageHandler.processMessageDecryptResult(
                    o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS,
                  ),
                  o("WAWebMessageProcessorCache")
                    .messageProcessorCache.addMessages([
                      {
                        receiptInfo: {
                          externalId: i.id,
                          from: i.from,
                          author: i.from,
                        },
                      },
                    ])
                    .catch(function (e) {
                      var t = r("getErrorSafe")(e);
                      o("WALogger")
                        .ERROR(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "[newsletter] Failed to handle newsletter offline ack",
                            ])),
                        )
                        .catching(t)
                        .tags("newsletter")
                        .sendLogs("newsletter-failed-to-store-offline-ack");
                    }),
                  null)
                : a
            );
          },
        });
      } catch (e) {
        var m = r("getErrorSafe")(e);
        throw (
          o("WAWebHandleNewsletterMsgLogger").handleNewsletterMsgError(m, {
            stanza: t,
          }),
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter] Failed to handle newsletter message",
                ])),
            )
            .catching(m)
            .tags("newsletter")
            .sendLogs("failed-handle-newsletter-message"),
          m
        );
      }
    }
    l.default = c;
  },
  98,
);
