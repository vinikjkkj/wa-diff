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
    "WAWebNewsletterStatusUtils",
    "WAWebOfflineHandler",
    "asyncToGeneratorRuntime",
    "err",
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
            var t,
              a = o(
                "WASmaxStatusDeliverIncomingNewsletterStatusRPC",
              ).receiveIncomingNewsletterStatusRPC(e),
              i = a.makeIncomingNewsletterStatusResponseSuccess,
              l = a.parsedRequest,
              d = i(),
              m = o("WAWebJidToWid").jidWithTypeToWid({
                jidType: "newsletter",
                newsletterJid: l.from,
              }),
              f = l.newsletterStatusContentTypeMixins;
            switch (f.name) {
              case "StatusNewsletterReaction":
              case "StatusNewsletterReactionRevoke":
                return d;
              default:
                break;
            }
            var g = ((t = l.offlineMixin) == null ? void 0 : t.offline) != null;
            return (
              g &&
                (o(
                  "WAWebOfflineHandler",
                ).OfflineMessageHandler.addOfflinePendingMessage(),
                o(
                  "WAWebOfflineHandler",
                ).OfflineMessageHandler.offlineStanzaReceivedAfterComplete()),
              o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.isResumeFromRestartComplete() && (g = !1),
              yield o("WAWebMessageQueue").onMessageQueue({
                chatWid: m,
                isOffline: g,
                msgCategory: null,
                action: (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* () {
                      var e;
                      try {
                        e = p(f, l, m, g);
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
                          _({ ack: d, from: m, isOffline: g, parsedRequest: l })
                        );
                      }
                      try {
                        (yield o(
                          "WAWebHandleSingleMsgWorkerCompatible",
                        ).handleSingleMsg({
                          chatId: m,
                          newMsg: e,
                          handleSingleMsgOrigin: "addStatusMessages",
                        }),
                          l.serverId != null &&
                            o("WAWebBackendApi").frontendFireAndForget(
                              "fillGapFromIncomingStanza",
                              {
                                newsletterJid: l.from,
                                incomingServerId: l.serverId,
                                sentTime: l.t,
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
                        ack: d,
                        from: m,
                        isOffline: g,
                        parsedRequest: l,
                      });
                    },
                  );
                  function t() {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              })
            );
          } catch (e) {
            var h = r("getErrorSafe")(e);
            throw (
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter][status] Failed to handle newsletter status",
                    ])),
                )
                .catching(h)
                .tags("newsletter", "status")
                .sendLogs("failed-handle-newsletter-status"),
              h
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n, a) {
      switch (e.name) {
        case "StatusNewsletterText":
        case "StatusNewsletterMedia": {
          var i = e.value.plaintextNewsletterPlaintextPayloadMixin.elementValue,
            l = o("WAWebNewsletterStatusUtils").mapStatusStanzaToMsgData(
              t,
              n,
              i,
            );
          return babelHelpers.extends({}, l, {
            isNewsletterStatus: !0,
            author: n,
            isNewMsg: !a,
          });
        }
        case "StatusNewsletterRevoke": {
          var s = o("WAWebNewsletterStatusUtils").mapStatusRevokeToMsgData(
            t,
            n,
          );
          return babelHelpers.extends({}, s, {
            isNewsletterStatus: !0,
            author: n,
            isNewMsg: !a,
          });
        }
        case "StatusNewsletterReaction":
        case "StatusNewsletterReactionRevoke":
          throw r("err")(
            "[newsletter][status] Unexpected addon status content type: " +
              e.name,
          );
        default:
          throw (
            e.name,
            r("err")(
              "[newsletter][status] Unhandled status content type: " + e.name,
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
              { receiptInfo: { externalId: l.id, from: a, author: a } },
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
