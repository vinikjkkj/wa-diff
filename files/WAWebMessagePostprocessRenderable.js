__d(
  "WAWebMessagePostprocessRenderable",
  [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebBizUpdateVerifiedInfoAction",
    "WAWebContactSyncLogger",
    "WAWebMessagePostProcessBatcher",
    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
    "WAWebUserPrefsMeUser",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
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
            (s || r != null) && m(e),
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "updateUnattributedMessages",
              { messageInfo: i, messages: l },
            ),
            c == null || c());
        })),
        d.apply(this, arguments)
      );
    }
    function m(t) {
      var n = t.latestPrivacyMode,
        r = t.msgInfo,
        a = t.msgs,
        i = t.shouldQueryContactInfo,
        l = r.chat;
      (i &&
        o("WAWebBizUpdateVerifiedInfoAction")
          .queryAndUpdateContactPropertiesOnNewChat(
            l,
            o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.PRIVACY_MODE_CHANGE,
          )
          .catch(function (t) {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "query contact info on new chat failed",
                ])),
            );
          }),
        !o("WAWebUserPrefsMeUser").isMeAccount(r.author) &&
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
    l.postprocessRenderableMessages = c;
  },
  98,
);
