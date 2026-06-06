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
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(t) {
      try {
        var n,
          a = o(
            "WASmaxStatusDeliverIncomingNewsletterStatusRPC",
          ).receiveIncomingNewsletterStatusRPC(t),
          i = a.makeIncomingNewsletterStatusResponseSuccess,
          l = a.parsedRequest,
          c = i(),
          d = o("WAWebJidToWid").jidWithTypeToWid({
            jidType: "newsletter",
            newsletterJid: l.from,
          }),
          m = l.newsletterStatusContentTypeMixins;
        switch (m.name) {
          case "StatusNewsletterReaction":
          case "StatusNewsletterReactionRevoke":
            return c;
          default:
            break;
        }
        var p = ((n = l.offlineMixin) == null ? void 0 : n.offline) != null;
        return (
          p &&
            (o(
              "WAWebOfflineHandler",
            ).OfflineMessageHandler.addOfflinePendingMessage(),
            o(
              "WAWebOfflineHandler",
            ).OfflineMessageHandler.offlineStanzaReceivedAfterComplete()),
          o(
            "WAWebOfflineHandler",
          ).OfflineMessageHandler.isResumeFromRestartComplete() && (p = !1),
          await o("WAWebMessageQueue").onMessageQueue({
            chatWid: d,
            isOffline: p,
            msgCategory: null,
            action: async function () {
              var t;
              switch (m.name) {
                case "StatusNewsletterText":
                case "StatusNewsletterMedia": {
                  var n =
                      m.value.plaintextNewsletterPlaintextPayloadMixin
                        .elementValue,
                    a = o(
                      "WAWebNewsletterStatusUtils",
                    ).mapStatusStanzaToMsgData(l, d, n);
                  t = babelHelpers.extends({}, a, {
                    isNewsletterStatus: !0,
                    author: d,
                    isNewMsg: !p,
                  });
                  break;
                }
                case "StatusNewsletterRevoke": {
                  var i = o(
                    "WAWebNewsletterStatusUtils",
                  ).mapStatusRevokeToMsgData(l, d);
                  t = babelHelpers.extends({}, i, {
                    isNewsletterStatus: !0,
                    author: d,
                    isNewMsg: !p,
                  });
                  break;
                }
                default:
                  throw (
                    m.name,
                    r("err")(
                      "[newsletter][status] Unhandled status content type: " +
                        m.name,
                    )
                  );
              }
              try {
                (await o(
                  "WAWebHandleSingleMsgWorkerCompatible",
                ).handleSingleMsg({
                  chatId: d,
                  newMsg: t,
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
              return p
                ? (o(
                    "WAWebOfflineHandler",
                  ).OfflineMessageHandler.processMessageDecryptResult(
                    o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS,
                  ),
                  o("WAWebMessageProcessorCache")
                    .messageProcessorCache.addMessages([
                      { receiptInfo: { externalId: l.id, from: d, author: d } },
                    ])
                    .catch(function (e) {
                      o("WALogger")
                        .ERROR(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "[newsletter][status] Failed to store offline ack",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e))
                        .tags("newsletter", "status")
                        .sendLogs("newsletter-status-failed-offline-ack");
                    }),
                  null)
                : c;
            },
          })
        );
      } catch (e) {
        var _ = r("getErrorSafe")(e);
        throw (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter][status] Failed to handle newsletter status",
                ])),
            )
            .catching(_)
            .tags("newsletter", "status")
            .sendLogs("failed-handle-newsletter-status"),
          _
        );
      }
    }
    l.default = c;
  },
  98,
);
