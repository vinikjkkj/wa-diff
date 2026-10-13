__d(
  "WAWebHandleNewsletterStatus",
  [
    "WALogger",
    "WASmaxStatusDeliverIncomingNewsletterStatusRPC",
    "WAWebBackendApi",
    "WAWebHandleMsgError",
    "WAWebHandleMsgTypes.flow",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebJidToWid",
    "WAWebMessageProcessorCache",
    "WAWebMessageQueue",
    "WAWebMessageQueueTimeout",
    "WAWebNewsletterStatusUtils",
    "WAWebOfflineHandler",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = !1;
          try {
            var a,
              i = o(
                "WASmaxStatusDeliverIncomingNewsletterStatusRPC",
              ).receiveIncomingNewsletterStatusRPC(e),
              l = i.makeIncomingNewsletterStatusResponseSuccess,
              d = i.parsedRequest,
              m = l(),
              f = o("WAWebJidToWid").jidWithTypeToWid({
                jidType: "newsletter",
                newsletterJid: d.from,
              }),
              g = d.newsletterStatusContentTypeMixins;
            switch (g.name) {
              case "StatusNewsletterReaction":
              case "StatusNewsletterReactionRevoke":
                return m;
              default:
                break;
            }
            var h = ((a = d.offlineMixin) == null ? void 0 : a.offline) != null;
            return (
              h &&
                (o(
                  "WAWebOfflineHandler",
                ).OfflineMessageHandler.addOfflinePendingMessage(),
                o(
                  "WAWebOfflineHandler",
                ).OfflineMessageHandler.offlineStanzaReceivedAfterComplete()),
              o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.isResumeFromRestartComplete() && (h = !1),
              (t = h),
              yield o("WAWebMessageQueue")
                .onMessageQueue({
                  chatWid: f,
                  isOffline: h,
                  msgCategory: null,
                  action: (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* () {
                        var e;
                        try {
                          e = p({
                            content: g,
                            from: f,
                            isOffline: h,
                            parsedRequest: d,
                          });
                        } catch (e) {
                          if (
                            !(
                              e instanceof
                              o("WAWebHandleMsgError").MessageValidationError
                            )
                          )
                            throw e;
                          return (
                            o("WALogger")
                              .ERROR(
                                s ||
                                  (s = babelHelpers.taggedTemplateLiteralLoose([
                                    "[newsletter][status] Invalid status content, skipping",
                                  ])),
                              )
                              .catching(r("getErrorSafe")(e))
                              .tags("newsletter", "status")
                              .sendLogs(
                                "newsletter-status-invalid-content-skipped",
                              ),
                            _({
                              ack: m,
                              from: f,
                              isOffline: h,
                              parsedRequest: d,
                            })
                          );
                        }
                        try {
                          (yield o(
                            "WAWebHandleSingleMsgWorkerCompatible",
                          ).handleSingleMsg({
                            chatId: f,
                            newMsg: e,
                            handleSingleMsgOrigin: "addStatusMessages",
                          }),
                            d.serverId != null &&
                              o("WAWebBackendApi").frontendFireAndForget(
                                "fillGapFromIncomingStanza",
                                {
                                  newsletterJid: d.from,
                                  incomingServerId: d.serverId,
                                  sentTime: d.t,
                                },
                              ));
                        } catch (e) {
                          o("WALogger")
                            .ERROR(
                              u ||
                                (u = babelHelpers.taggedTemplateLiteralLoose([
                                  "[newsletter][status] Failed to process status stanza",
                                ])),
                            )
                            .catching(r("getErrorSafe")(e))
                            .tags("newsletter", "status")
                            .sendLogs(
                              "newsletter-status-failed-to-process-status-stanza",
                            );
                        }
                        return _({
                          ack: m,
                          from: f,
                          isOffline: h,
                          parsedRequest: d,
                        });
                      },
                    );
                    function t() {
                      return e.apply(this, arguments);
                    }
                    return t;
                  })(),
                })
                .catch(function (e) {
                  return o(
                    "WAWebMessageQueueTimeout",
                  ).handleMessageQueueTimeout(e, "newsletter_status");
                })
            );
          } catch (e) {
            t &&
              o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.processMessageDecryptResult(
                o("WAWebHandleMsgTypes.flow").E2EProcessResult.PARSE_ERROR,
              );
            var y = r("getErrorSafe")(e);
            throw (
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter][status] Failed to handle newsletter status",
                    ])),
                )
                .catching(y)
                .tags("newsletter", "status")
                .sendLogs("failed-handle-newsletter-status"),
              y
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      var t = e.content,
        n = e.from,
        a = e.isOffline,
        i = e.parsedRequest;
      switch (t.name) {
        case "StatusNewsletterText":
        case "StatusNewsletterMedia": {
          var l = t.value.plaintextNewsletterPlaintextPayloadMixin.elementValue,
            s = o("WAWebNewsletterStatusUtils").mapStatusStanzaToMsgData(
              i,
              n,
              l,
            );
          return babelHelpers.extends({}, s, {
            isNewsletterStatus: !0,
            author: n,
            isNewMsg: !a,
          });
        }
        case "StatusNewsletterRevoke": {
          var u = o("WAWebNewsletterStatusUtils").mapStatusRevokeToMsgData(
            i,
            n,
          );
          return babelHelpers.extends({}, u, {
            isNewsletterStatus: !0,
            author: n,
            isNewMsg: !a,
          });
        }
        case "StatusNewsletterReaction":
        case "StatusNewsletterReactionRevoke":
          throw r("err")(
            "[newsletter][status] Unexpected addon status content type: " +
              t.name,
          );
        default:
          throw (
            t.name,
            r("err")(
              "[newsletter][status] Unhandled status content type: " + t.name,
            )
          );
      }
    }
    function _(t) {
      var n = t.ack,
        a = t.from,
        i = t.isOffline,
        l = t.parsedRequest;
      return i
        ? (o(
            "WAWebOfflineHandler",
          ).OfflineMessageHandler.processMessageDecryptResult(
            o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS,
          ),
          o("WAWebMessageProcessorCache")
            .messageProcessorCache.addMessages([
              {
                receiptInfo: {
                  externalId: l.id,
                  from: a,
                  author: a,
                  statusAckType: r("nullthrows")(n.attrs.type).toString(),
                },
              },
            ])
            .catch(function (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter][status] Failed to store offline ack",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .tags("newsletter", "status")
                .sendLogs("newsletter-status-failed-offline-ack");
            }),
          null)
        : n;
    }
    l.default = d;
  },
  98,
);
