__d(
  "WAWebMessagePostprocessRenderable",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebBizUpdateVerifiedInfoAction",
    "WAWebContactSyncLogger",
    "WAWebMessagePostProcessBatcher",
    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
    "WAWebUserPrefsMeUser",
    "WAWebWorkerSafeBackendApi",
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
        (l || n != null) && c(e),
        await o("WAWebBackendApi").frontendSendAndReceive(
          "updateUnattributedMessages",
          { messageInfo: a, messages: i },
        ),
        s == null || s());
    }
    function c(t) {
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
    l.postprocessRenderableMessages = u;
  },
  98,
);
