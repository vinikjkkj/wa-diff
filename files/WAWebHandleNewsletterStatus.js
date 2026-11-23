__d(
  "WAWebHandleNewsletterStatus",
  [
    "WALogger",
    "WASmaxStatusDeliverIncomingNewsletterStatusRPC",
    "WAWebBackendApi",
    "WAWebHandleMsgError",
    "WAWebHandleMsgTypes",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebJidToWid",
    "WAWebMessageProcessorCache",
    "WAWebMessageQueue",
    "WAWebMessageQueueTimeout",
    "WAWebNewsletterStatusUtils",
    "WAWebOfflineHandler",
    "err",
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    async function d(t) {
      var n = !1;
      try {
        var a,
          i = o(
            "WASmaxStatusDeliverIncomingNewsletterStatusRPC",
          ).receiveIncomingNewsletterStatusRPC(t),
          l = i.makeIncomingNewsletterStatusResponseSuccess,
          c = i.parsedRequest,
          d = l(),
          _ = o("WAWebJidToWid").jidWithTypeToWid({
            jidType: "newsletter",
            newsletterJid: c.from,
          }),
          f = c.newsletterStatusContentTypeMixins;
        switch (f.name) {
          case "StatusNewsletterReaction":
          case "StatusNewsletterReactionRevoke":
            return d;
          default:
            break;
        }
        var g = ((a = c.offlineMixin) == null ? void 0 : a.offline) != null;
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
          (n = g),
          await o("WAWebMessageQueue")
            .onMessageQueue({
              chatWid: _,
              isOffline: g,
              msgCategory: null,
              action: async function () {
                var t;
                try {
                  t = m({
                    content: f,
                    from: _,
                    isOffline: g,
                    parsedRequest: c,
                  });
                } catch (t) {
                  if (
                    !(
                      t instanceof
                      o("WAWebHandleMsgError").MessageValidationError
                    )
                  )
                    throw t;
                  return (
                    o("WALogger")
                      .ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[newsletter][status] Invalid status content, skipping",
                          ])),
                      )
                      .catching(r("getErrorSafe")(t))
                      .tags("newsletter", "status")
                      .sendLogs("newsletter-status-invalid-content-skipped"),
                    p({ ack: d, from: _, isOffline: g, parsedRequest: c })
                  );
                }
                try {
                  (await o(
                    "WAWebHandleSingleMsgWorkerCompatible",
                  ).handleSingleMsg({
                    chatId: _,
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
                } catch (e) {
                  o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[newsletter][status] Failed to process status stanza",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .tags("newsletter", "status")
                    .sendLogs(
                      "newsletter-status-failed-to-process-status-stanza",
                    );
                }
                return p({ ack: d, from: _, isOffline: g, parsedRequest: c });
              },
            })
            .catch(function (e) {
              return o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(
                e,
                "newsletter_status",
              );
            })
        );
      } catch (e) {
        n &&
          o(
            "WAWebOfflineHandler",
          ).OfflineMessageHandler.processMessageDecryptResult(
            o("WAWebHandleMsgTypes").E2EProcessResult.PARSE_ERROR,
          );
        var h = r("getErrorSafe")(e);
        throw (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter][status] Failed to handle newsletter status",
                ])),
            )
            .catching(h)
            .tags("newsletter", "status")
            .sendLogs("failed-handle-newsletter-status"),
          h
        );
      }
    }
    function m(e) {
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
    function p(e) {
      var t = e.ack,
        n = e.from,
        a = e.isOffline,
        i = e.parsedRequest;
      return a
        ? (o(
            "WAWebOfflineHandler",
          ).OfflineMessageHandler.processMessageDecryptResult(
            o("WAWebHandleMsgTypes").E2EProcessResult.SUCCESS,
          ),
          o("WAWebMessageProcessorCache")
            .messageProcessorCache.addMessages([
              {
                receiptInfo: {
                  externalId: i.id,
                  from: n,
                  author: n,
                  statusAckType: r("nullthrows")(t.attrs.type).toString(),
                },
              },
            ])
            .catch(function (e) {
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter][status] Failed to store offline ack",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .tags("newsletter", "status")
                .sendLogs("newsletter-status-failed-offline-ack");
            }),
          null)
        : t;
    }
    l.default = d;
  },
  98,
);
