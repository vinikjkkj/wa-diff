__d(
  "WAWebHandleNewsletterMsg",
  [
    "Promise",
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
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var a = r("WAWebNewsletterMsgParser")(t),
              i = a.ack,
              l = a.msg;
            if (!o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled())
              return i;
            var d = o("WATimeUtils").unixTimeMs(),
              m = l.offline != null;
            (m &&
              (o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.addOfflinePendingMessage(),
              o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.offlineStanzaReceivedAfterComplete()),
              o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.isResumeFromRestartComplete() &&
                ((l.offline = null), (m = !1)));
            var p = !o("WAWebNewsletterMsgProcessor").isAddOnType(l.type);
            return yield o("WAWebMessageQueue").onMessageQueue({
              chatWid: l.from,
              isOffline: m,
              msgCategory: null,
              action: (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    var t = o("WATimeUtils").unixTimeMs(),
                      a = yield o(
                        "WAWebNewsletterMsgProcessor",
                      ).preprocessNewsletterMsg(l),
                      u = a.isOrphan,
                      _ = a.msgData,
                      f = p
                        ? o("WAWebMessageProcessorCache")
                            .messageProcessorCache.addMessages([{ msg: _ }], !m)
                            .then(function () {
                              (o(
                                "WAWebWamWorkerOfflineProcessReporter",
                              ).WorkerOfflineResumeReporter.updateProcessedMessageCount(),
                                o(
                                  "WAWebLogReceivedMessages",
                                ).logReceivedMessagesInWAM({
                                  msgs: [_],
                                  offline: l.offline,
                                  tsMillis: l.t * 1e3,
                                  clientReceivedTsMillis: d,
                                  msgProcessStartTsMillis: t,
                                  serverAddressingMode: null,
                                  localAddressingMode: null,
                                }));
                            })
                            .catch(function (t) {
                              o("WALogger")
                                .ERROR(
                                  e ||
                                    (e =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "[newsletter] Failed to handle newsletter message",
                                      ])),
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
                      ).maybeHandleNewsletterMsgAddOns(_, {
                        pollVotes: l.pollVote,
                      }),
                      o("WAWebBackendEventBus").BackendEventBus
                        .isMainStreamReadyMd &&
                        (o("WAWebBackendEventBus").BackendEventBus
                          .isOfflineDeliveryEnd && (yield f),
                        o("WAWebBackendApi").frontendFireAndForget(
                          "updateNewsletterMessageUI",
                          { chatID: l.from, msg: _, isOrphan: u },
                        )),
                      m
                        ? (o(
                            "WAWebOfflineHandler",
                          ).OfflineMessageHandler.processMessageDecryptResult(
                            o("WAWebHandleMsgTypes.flow").E2EProcessResult
                              .SUCCESS,
                          ),
                          o("WAWebMessageProcessorCache")
                            .messageProcessorCache.addMessages([
                              {
                                receiptInfo: {
                                  externalId: l.id,
                                  from: l.from,
                                  author: l.from,
                                },
                              },
                            ])
                            .catch(function (e) {
                              var t = r("getErrorSafe")(e);
                              o("WALogger")
                                .ERROR(
                                  s ||
                                    (s =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "[newsletter] Failed to handle newsletter offline ack",
                                      ])),
                                )
                                .catching(t)
                                .tags("newsletter")
                                .sendLogs(
                                  "newsletter-failed-to-store-offline-ack",
                                );
                            }),
                          null)
                        : i
                    );
                  },
                );
                function a() {
                  return t.apply(this, arguments);
                }
                return a;
              })(),
            });
          } catch (e) {
            var _ = r("getErrorSafe")(e);
            throw (
              o("WAWebHandleNewsletterMsgLogger").handleNewsletterMsgError(_, {
                stanza: t,
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
    l.default = d;
  },
  98,
);
