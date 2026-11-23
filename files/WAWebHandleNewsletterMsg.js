__d(
  "WAWebHandleNewsletterMsg",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebHandleMsgTypes",
    "WAWebHandleNewsletterMsgAddOns",
    "WAWebHandleNewsletterMsgLogger",
    "WAWebHandleNewsletterQuestionResponseFanout",
    "WAWebLogReceivedMessages",
    "WAWebMessageProcessorCache",
    "WAWebMessageQueue",
    "WAWebMessageQueueImpl",
    "WAWebMessageQueueTimeout",
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
          u = i.offline != null;
        (u &&
          (o(
            "WAWebOfflineHandler",
          ).OfflineMessageHandler.addOfflinePendingMessage(),
          o(
            "WAWebOfflineHandler",
          ).OfflineMessageHandler.offlineStanzaReceivedAfterComplete()),
          o(
            "WAWebOfflineHandler",
          ).OfflineMessageHandler.isResumeFromRestartComplete() &&
            ((i.offline = null), (u = !1)));
        var c = !o("WAWebNewsletterMsgProcessor").isAddOnType(i.type);
        return await o("WAWebMessageQueue")
          .onMessageQueue({
            chatWid: i.from,
            isOffline: u,
            msgCategory: null,
            action: async function () {
              if (
                i.type === "NewsletterQuestionResponse" ||
                i.type === "NewsletterQuestionResponseRevokeFanout"
              )
                return (
                  await o(
                    "WAWebHandleNewsletterQuestionResponseFanout",
                  ).handleNewsletterQuestionResponseFanout(i),
                  d({ ack: a, from: i.from, id: i.id, isOffline: u })
                );
              var t = o("WATimeUtils").unixTimeMs(),
                n = await o(
                  "WAWebNewsletterMsgProcessor",
                ).preprocessNewsletterMsg(i),
                r = n.isOrphan,
                s = n.msgData,
                m = c
                  ? o("WAWebMessageProcessorCache")
                      .messageProcessorCache.addMessages(
                        [{ msg: s }],
                        o(
                          "WAWebMessageQueueImpl",
                        ).shouldFlushMessageImmediately(
                          u,
                          o("WAWebBackendEventBus").BackendEventBus
                            .isOfflineDeliveryEnd,
                        ),
                      )
                      .then(function () {
                        (o(
                          "WAWebWamWorkerOfflineProcessReporter",
                        ).WorkerOfflineResumeReporter.updateProcessedMessageCount(),
                          o(
                            "WAWebLogReceivedMessages",
                          ).logReceivedMessagesInWAM({
                            msgs: [s],
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
                ).maybeHandleNewsletterMsgAddOns(s, { pollVotes: i.pollVote }),
                o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd &&
                  (o("WAWebBackendEventBus").BackendEventBus
                    .isOfflineDeliveryEnd && (await m),
                  o("WAWebBackendApi").frontendFireAndForget(
                    "updateNewsletterMessageUI",
                    { chatID: i.from, msg: s, isOrphan: r },
                  )),
                d({ ack: a, from: i.from, id: i.id, isOffline: u })
              );
            },
          })
          .catch(function (e) {
            return o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(
              e,
              "newsletter_msg",
            );
          });
      } catch (e) {
        var m = r("getErrorSafe")(e);
        throw (
          o("WAWebHandleNewsletterMsgLogger").handleNewsletterMsgError(m, {
            stanza: t,
          }),
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
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
    function d(e) {
      var t = e.ack,
        n = e.from,
        a = e.id,
        i = e.isOffline;
      return i
        ? (o(
            "WAWebOfflineHandler",
          ).OfflineMessageHandler.processMessageDecryptResult(
            o("WAWebHandleMsgTypes").E2EProcessResult.SUCCESS,
          ),
          o("WAWebMessageProcessorCache")
            .messageProcessorCache.addMessages([
              { receiptInfo: { externalId: a, from: n, author: n } },
            ])
            .catch(function (e) {
              var t = r("getErrorSafe")(e);
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter] Failed to handle newsletter offline ack",
                    ])),
                )
                .catching(t)
                .tags("newsletter")
                .sendLogs("newsletter-failed-to-store-offline-ack");
            }),
          null)
        : t;
    }
    l.default = c;
  },
  98,
);
