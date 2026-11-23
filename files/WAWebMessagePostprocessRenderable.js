__d(
  "WAWebMessagePostprocessRenderable",
  [
    "WALogger",
    "WAPromiseReduce",
    "WAWebBackendApi",
    "WAWebCoexV2MessageAckProjection",
    "WAWebContactSyncLogger",
    "WAWebHandleMsgTypes",
    "WAWebMessagePostProcessBatcher",
    "WAWebMsgGetters",
    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
    "WAWebUserUtils",
    "WAWebWorkerSafeBackendApi",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(e) {
      var t = e.isOffline,
        n = e.latestPrivacyMode,
        r = e.messageOverwriteOption,
        a = e.msgInfo,
        i = e.msgs,
        l = e.shouldQueryContactInfo,
        s = o(
          "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
        ).msgProcessReporter.startMarker(
          o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
            .msgProcessReporter.stage.PostProcessing,
        );
      (await Promise.all(
        i.map(async function (e) {
          (await o("WAWebBackendApi").frontendSendAndReceive(
            "updateMessageUI",
            {
              chatId: e.id.remote,
              msg: e,
              messageOverwriteOption: r,
              preserveOrder: !0,
              isOffline: t,
            },
          ),
            o(
              "WAWebMessagePostProcessBatcher",
            ).messagePostProcessBatcher.acceptMessage(e),
            t ||
              o(
                "WAWebMessagePostProcessBatcher",
              ).messagePostProcessBatcher.runActiveBatches());
        }),
      ),
        (l || n != null) && p(e),
        await o("WAWebBackendApi").frontendSendAndReceive(
          "updateUnattributedMessages",
          { messageInfo: a, messages: i },
        ),
        s == null || s());
    }
    async function c(e) {
      if (e.length !== 0) {
        var t = o(
            "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
          ).msgProcessReporter.startMarker(
            o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
              .msgProcessReporter.stage.PostProcessing,
          ),
          n = await Promise.allSettled(
            d(e).map(function (e) {
              return o("WAPromiseReduce").promiseReduce(
                e,
                function (e, t) {
                  var n = t.chatId,
                    r = t.isOffline,
                    a = t.messageOverwriteOption,
                    i = t.msgs;
                  return o("WAWebBackendApi").frontendSendAndReceive(
                    "updateMessagesUI",
                    {
                      chatId: n,
                      isOffline: r,
                      messageOverwriteOption: a,
                      msgs: i,
                      preserveOrder: !0,
                    },
                  );
                },
                void 0,
              );
            }),
          ),
          a = e.flatMap(function (e) {
            return e.kind === "renderable" ? [e.params] : [];
          });
        (a.forEach(function (e) {
          (e.msgs.forEach(function (e) {
            o(
              "WAWebMessagePostProcessBatcher",
            ).messagePostProcessBatcher.acceptMessage(e);
          }),
            (e.shouldQueryContactInfo || e.latestPrivacyMode != null) && p(e),
            o(
              "WAWebCoexV2MessageAckProjection",
            ).reconcileCoexV2ReceiptAcksAfterMessagePersisted(
              e.msgs,
              Promise.resolve(),
              Promise.resolve(),
              { deferUntilMessagePersisted: !0 },
            ));
        }),
          a.some(function (e) {
            var t = e.isOffline;
            return !t;
          }) &&
            o(
              "WAWebMessagePostProcessBatcher",
            ).messagePostProcessBatcher.runActiveBatches(),
          await Promise.all(
            a.map(function (e) {
              var t = e.msgInfo,
                n = e.msgs;
              return o("WAWebBackendApi").frontendSendAndReceive(
                "updateUnattributedMessages",
                { messageInfo: t, messages: n },
              );
            }),
          ),
          t == null || t());
        var i = n.find(function (e) {
          var t = e.status;
          return t === "rejected";
        });
        if ((i == null ? void 0 : i.status) === "rejected")
          throw r("getErrorSafe")(i.reason);
      }
    }
    function d(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          var n =
              e.kind === "renderable"
                ? e.params
                : {
                    isOffline: !1,
                    messageOverwriteOption: o("WAWebHandleMsgTypes")
                      .MessageOverwriteOption.NO_OVERWRITE,
                    msgs: e.msgs,
                  },
            r = n.isOffline,
            a = n.messageOverwriteOption,
            i = n.msgs;
          i.forEach(function (e) {
            var n,
              o = e.id.remote,
              i = m(e),
              l = (n = t.get(i)) != null ? n : [];
            t.set(i, l);
            var s = l[l.length - 1];
            s != null && s.isOffline === r && s.messageOverwriteOption === a
              ? s.msgs.push(e)
              : l.push({
                  chatId: o,
                  isOffline: r,
                  messageOverwriteOption: a,
                  msgs: [e],
                });
          });
        }),
        Array.from(t.values())
      );
    }
    function m(e) {
      var t,
        n = e.id.remote.toString();
      return o("WAWebMsgGetters").getIsStatus(e)
        ? e.id.remote.isStatus()
          ? n + " status " + (e.id.fromMe ? "me" : String(e.author))
          : n +
            " status " +
            String((t = o("WAWebMsgGetters").getSender(e)) != null ? t : e.from)
        : n;
    }
    function p(t) {
      var n = t.latestPrivacyMode,
        r = t.msgInfo,
        a = t.msgs,
        i = t.shouldQueryContactInfo,
        l = r.chat;
      (i &&
        o("WAWebBackendApi")
          .frontendSendAndReceive("queryAndUpdateContactPropertiesOnNewChat", {
            contactInfoId: l.toString(),
            requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
              .PRIVACY_MODE_CHANGE,
          })
          .catch(function (t) {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "query contact info on new chat failed",
                ])),
            );
          }),
        !o("WAWebUserUtils").isMeAccount(r.author) &&
          n != null &&
          o("WAWebWorkerSafeBackendApi")
            .workerSafeSendAndReceive("updateBizPrivacyStatus", {
              msgIds: a.map(function (e) {
                return e.id;
              }),
              privacyMode: n,
            })
            .catch(function (e) {
              o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[handlePrivacyModeChange] biz privacy update failed ",
                    "",
                  ])),
                e,
              );
            }));
    }
    ((l.postprocessRenderableMessages = u), (l.postprocessMessagesOfBatch = c));
  },
  98,
);
