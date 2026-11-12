__d(
  "WAWebHandleNewsletterMsg",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = r("WAWebNewsletterMsgParser")(e),
              a = t.ack,
              i = t.msg;
            if (!o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled())
              return a;
            var l = o("WATimeUtils").unixTimeMs(),
              d = i.offline != null;
            (d &&
              (o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.addOfflinePendingMessage(),
              o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.offlineStanzaReceivedAfterComplete()),
              o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.isResumeFromRestartComplete() &&
                ((i.offline = null), (d = !1)));
            var m = !o("WAWebNewsletterMsgProcessor").isAddOnType(i.type);
            return yield o("WAWebMessageQueue")
              .onMessageQueue({
                chatWid: i.from,
                isOffline: d,
                msgCategory: null,
                action: (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* () {
                      if (
                        i.type === "NewsletterQuestionResponse" ||
                        i.type === "NewsletterQuestionResponseRevokeFanout"
                      )
                        return (
                          yield o(
                            "WAWebHandleNewsletterQuestionResponseFanout",
                          ).handleNewsletterQuestionResponseFanout(i),
                          p({ ack: a, from: i.from, id: i.id, isOffline: d })
                        );
                      var e = o("WATimeUtils").unixTimeMs(),
                        t = yield o(
                          "WAWebNewsletterMsgProcessor",
                        ).preprocessNewsletterMsg(i),
                        r = t.isOrphan,
                        u = t.msgData,
                        _ = m
                          ? o("WAWebMessageProcessorCache")
                              .messageProcessorCache.addMessages(
                                [{ msg: u }],
                                o(
                                  "WAWebMessageQueueImpl",
                                ).shouldFlushMessageImmediately(
                                  d,
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
                                    msgs: [u],
                                    offline: i.offline,
                                    tsMillis: i.t * 1e3,
                                    clientReceivedTsMillis: l,
                                    msgProcessStartTsMillis: e,
                                    serverAddressingMode: null,
                                    localAddressingMode: null,
                                  }));
                              })
                              .catch(function (e) {
                                o("WALogger")
                                  .ERROR(
                                    s ||
                                      (s =
                                        babelHelpers.taggedTemplateLiteralLoose(
                                          [
                                            "[newsletter] Failed to handle newsletter message",
                                          ],
                                        )),
                                  )
                                  .tags("newsletter")
                                  .sendLogs(
                                    "newsletter-failed-to-store-incoming-message",
                                  );
                              })
                          : (c || (c = n("Promise"))).resolve();
                      return (
                        yield o(
                          "WAWebHandleNewsletterMsgAddOns",
                        ).maybeHandleNewsletterMsgAddOns(u, {
                          pollVotes: i.pollVote,
                        }),
                        o("WAWebBackendEventBus").BackendEventBus
                          .isMainStreamReadyMd &&
                          (o("WAWebBackendEventBus").BackendEventBus
                            .isOfflineDeliveryEnd && (yield _),
                          o("WAWebBackendApi").frontendFireAndForget(
                            "updateNewsletterMessageUI",
                            { chatID: i.from, msg: u, isOrphan: r },
                          )),
                        p({ ack: a, from: i.from, id: i.id, isOffline: d })
                      );
                    },
                  );
                  function t() {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              })
              .catch(function (e) {
                return o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(
                  e,
                  "newsletter_msg",
                );
              });
          } catch (t) {
            var _ = r("getErrorSafe")(t);
            throw (
              o("WAWebHandleNewsletterMsgLogger").handleNewsletterMsgError(_, {
                stanza: e,
              }),
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter] Failed to handle newsletter message",
                    ])),
                )
                .catching(_)
                .tags("newsletter")
                .sendLogs("failed-handle-newsletter-message"),
              _
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(t) {
      var n = t.ack,
        a = t.from,
        i = t.id,
        l = t.isOffline;
      return l
        ? (o(
            "WAWebOfflineHandler",
          ).OfflineMessageHandler.processMessageDecryptResult(
            o("WAWebHandleMsgTypes").E2EProcessResult.SUCCESS,
          ),
          o("WAWebMessageProcessorCache")
            .messageProcessorCache.addMessages([
              { receiptInfo: { externalId: i, from: a, author: a } },
            ])
            .catch(function (t) {
              var n = r("getErrorSafe")(t);
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter] Failed to handle newsletter offline ack",
                    ])),
                )
                .catching(n)
                .tags("newsletter")
                .sendLogs("newsletter-failed-to-store-offline-ack");
            }),
          null)
        : n;
    }
    l.default = d;
  },
  98,
);
