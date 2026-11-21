__d(
  "WAWebMessagePostprocessRenderable",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.isOffline,
            r = e.latestPrivacyMode,
            a = e.messageOverwriteOption,
            i = e.msgInfo,
            l = e.msgs,
            s = e.shouldQueryContactInfo,
            c = o(
              "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
            ).msgProcessReporter.startMarker(
              o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                .msgProcessReporter.stage.PostProcessing,
            );
          (yield (u || (u = n("Promise"))).all(
            l.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    (yield o("WAWebBackendApi").frontendSendAndReceive(
                      "updateMessageUI",
                      {
                        chatId: e.id.remote,
                        msg: e,
                        messageOverwriteOption: a,
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
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          ),
            (s || r != null) && g(e),
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "updateUnattributedMessages",
              { messageInfo: i, messages: l },
            ),
            c == null || c());
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length !== 0) {
            var t = o(
                "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
              ).msgProcessReporter.startMarker(
                o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                  .msgProcessReporter.stage.PostProcessing,
              ),
              a = yield (u || (u = n("Promise"))).allSettled(
                _(e).map(function (e) {
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
              i = e.flatMap(function (e) {
                return e.kind === "renderable" ? [e.params] : [];
              });
            (i.forEach(function (e) {
              (e.msgs.forEach(function (e) {
                o(
                  "WAWebMessagePostProcessBatcher",
                ).messagePostProcessBatcher.acceptMessage(e);
              }),
                (e.shouldQueryContactInfo || e.latestPrivacyMode != null) &&
                  g(e),
                o(
                  "WAWebCoexV2MessageAckProjection",
                ).reconcileCoexV2ReceiptAcksAfterMessagePersisted(
                  e.msgs,
                  (u || (u = n("Promise"))).resolve(),
                  u.resolve(),
                  { deferUntilMessagePersisted: !0 },
                ));
            }),
              i.some(function (e) {
                var t = e.isOffline;
                return !t;
              }) &&
                o(
                  "WAWebMessagePostProcessBatcher",
                ).messagePostProcessBatcher.runActiveBatches(),
              yield u.all(
                i.map(function (e) {
                  var t = e.msgInfo,
                    n = e.msgs;
                  return o("WAWebBackendApi").frontendSendAndReceive(
                    "updateUnattributedMessages",
                    { messageInfo: t, messages: n },
                  );
                }),
              ),
              t == null || t());
            var l = a.find(function (e) {
              var t = e.status;
              return t === "rejected";
            });
            if ((l == null ? void 0 : l.status) === "rejected")
              throw r("getErrorSafe")(l.reason);
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
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
              i = f(e),
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
    function f(e) {
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
    function g(t) {
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
    ((l.postprocessRenderableMessages = c), (l.postprocessMessagesOfBatch = m));
  },
  98,
);
