__d(
  "WAWebHandleNewsletterStatus",
  [
    "WALogger",
    "WASmaxStatusDeliverIncomingNewsletterStatusRPC",
    "WAWebBackendApi",
    "WAWebHandleMsgTypes.flow",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebJidToWid",
    "WAWebMessageProcessorCache",
    "WAWebMessageQueue",
    "WAWebNewsletterStatusUtils",
    "WAWebOfflineHandler",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var a,
              i = o(
                "WASmaxStatusDeliverIncomingNewsletterStatusRPC",
              ).receiveIncomingNewsletterStatusRPC(t),
              l = i.makeIncomingNewsletterStatusResponseSuccess,
              c = i.parsedRequest,
              d = l(),
              m = o("WAWebJidToWid").jidWithTypeToWid({
                jidType: "newsletter",
                newsletterJid: c.from,
              }),
              p = c.newsletterStatusContentTypeMixins;
            switch (p.name) {
              case "StatusNewsletterReaction":
              case "StatusNewsletterReactionRevoke":
                return d;
              default:
                break;
            }
            var _ = ((a = c.offlineMixin) == null ? void 0 : a.offline) != null;
            return (
              _ &&
                (o(
                  "WAWebOfflineHandler",
                ).OfflineMessageHandler.addOfflinePendingMessage(),
                o(
                  "WAWebOfflineHandler",
                ).OfflineMessageHandler.offlineStanzaReceivedAfterComplete()),
              o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.isResumeFromRestartComplete() && (_ = !1),
              yield o("WAWebMessageQueue").onMessageQueue({
                chatWid: m,
                isOffline: _,
                msgCategory: null,
                action: (function () {
                  var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* () {
                      var t;
                      switch (p.name) {
                        case "StatusNewsletterText":
                        case "StatusNewsletterMedia": {
                          var n =
                              p.value.plaintextNewsletterPlaintextPayloadMixin
                                .elementValue,
                            a = o(
                              "WAWebNewsletterStatusUtils",
                            ).mapStatusStanzaToMsgData(c, m, n);
                          t = babelHelpers.extends({}, a, {
                            isNewsletterStatus: !0,
                            author: m,
                            isNewMsg: !_,
                          });
                          break;
                        }
                        case "StatusNewsletterRevoke": {
                          var i = o(
                            "WAWebNewsletterStatusUtils",
                          ).mapStatusRevokeToMsgData(c, m);
                          t = babelHelpers.extends({}, i, {
                            isNewsletterStatus: !0,
                            author: m,
                            isNewMsg: !_,
                          });
                          break;
                        }
                        default:
                          throw (
                            p.name,
                            r("err")(
                              "[newsletter][status] Unhandled status content type: " +
                                p.name,
                            )
                          );
                      }
                      try {
                        (yield o(
                          "WAWebHandleSingleMsgWorkerCompatible",
                        ).handleSingleMsg({
                          chatId: m,
                          newMsg: t,
                          handleSingleMsgOrigin: "addStatusMessages",
                        }),
                          c.serverId != null &&
                            o("WAWebBackendApi").frontendFireAndForget(
                              "fillGapFromIncomingStanza",
                              {
                                newsletterJid: c.from,
                                incomingServerId: c.serverId,
                                sentTime: c.t,
                              },
                            ));
                      } catch (t) {
                        o("WALogger")
                          .ERROR(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[newsletter][status] Failed to process status stanza",
                              ])),
                          )
                          .catching(r("getErrorSafe")(t))
                          .tags("newsletter", "status")
                          .sendLogs(
                            "newsletter-status-failed-to-process-status-stanza",
                          );
                      }
                      return _
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
                                  externalId: c.id,
                                  from: m,
                                  author: m,
                                },
                              },
                            ])
                            .catch(function (e) {
                              o("WALogger")
                                .ERROR(
                                  s ||
                                    (s =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "[newsletter][status] Failed to store offline ack",
                                      ])),
                                )
                                .catching(r("getErrorSafe")(e))
                                .tags("newsletter", "status")
                                .sendLogs(
                                  "newsletter-status-failed-offline-ack",
                                );
                            }),
                          null)
                        : d;
                    },
                  );
                  function a() {
                    return t.apply(this, arguments);
                  }
                  return a;
                })(),
              })
            );
          } catch (e) {
            var f = r("getErrorSafe")(e);
            throw (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter][status] Failed to handle newsletter status",
                    ])),
                )
                .catching(f)
                .tags("newsletter", "status")
                .sendLogs("failed-handle-newsletter-status"),
              f
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    l.default = c;
  },
  98,
);
