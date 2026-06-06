__d(
  "WAWebMessageProcessPlaceholder",
  [
    "WALogger",
    "WANullthrows",
    "WAWebAck",
    "WAWebAdvHostedAccountTypeSystemMsg",
    "WAWebApiDeviceList",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBizCoexUtils",
    "WAWebCheckChatExistsOrCreate",
    "WAWebCurrentUser",
    "WAWebDBProcessMessage",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgTypes.flow",
    "WAWebMessageDestinationChat",
    "WAWebMessageProcessorCache",
    "WAWebMsgProcessingApiUtils",
    "WAWebMsgType",
    "WAWebProtobufsAdv.pb",
    "WAWebUserPrefsMultiDevice",
    "WAWebWamWorkerOfflineProcessReporter",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t) {
      var n = t.msgInfo,
        a = n.chat;
      if (n.category === o("WAWebHandleMsgCommon").MSG_CATEGORY.peer)
        return (
          o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[processPlaceHolderMessage] skip peer msg, id=",
                  "",
                ])),
              n.externalId,
            )
            .tags("messaging"),
          !1
        );
      var i = n.offline != null;
      try {
        var l = [];
        if (
          a.isUser() &&
          (t.placeholderType ===
            o("WAWebHandleMsgTypes.flow").PlaceholderType.E2E ||
            t.placeholderType ===
              o("WAWebHandleMsgTypes.flow").PlaceholderType.FANOUT)
        ) {
          var u,
            c =
              o("WAWebUserPrefsMultiDevice").getHaveProcessedCoexAdv() === !0
                ? await o("WAWebApiDeviceList").getDeviceRecord(n.author)
                : null;
          if (
            ((n.placeholderCreatedWhenAccountIsHosted =
              (c == null ? void 0 : c.advAccountType) ===
              o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED),
            (c == null ? void 0 : c.advAccountType) ===
              o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
              (n == null || (u = n.chat) == null ? void 0 : u.isUser()) === !0)
          ) {
            var d = await o(
              "WAWebBizCoexUtils",
            ).shouldCreateFallbackHostedAdvSystemMsgOnPlaceholder(
              o("WAWebWidFactory")
                .asUserWidOrThrow(n == null ? void 0 : n.author)
                .toString(),
            );
            d &&
              !o("WAWebBizCoexUtils").shouldDedupInitialHostedSystemMsg(
                o("WAWebWidFactory").asUserWidOrThrow(
                  n == null ? void 0 : n.author,
                ),
              ) &&
              (l = [
                r("WANullthrows")(
                  o(
                    "WAWebAdvHostedAccountTypeSystemMsg",
                  ).genAdvAccountTypeInitialSysMsg(
                    o("WAWebWidFactory").asUserWidOrThrow(
                      n == null ? void 0 : n.author,
                    ),
                    o("WAWebWidFactory").asUserWidOrThrow(
                      n == null ? void 0 : n.author,
                    ),
                  ),
                ),
              ]);
          }
        }
        var m = [];
        if (t.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT) {
          var p = o("WAWebMsgProcessingApiUtils").generatePlaceholder(t);
          if (
            p == null ||
            (p.realType != null,
            n.type === o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST
              ? (await o("WAWebDBProcessMessage").storeMessages(
                  [p],
                  p.id.remote,
                ),
                n.bclParticipants != null &&
                  n.edit !== o("WAWebAck").EDIT_ATTR.SENDER_REVOKE &&
                  (m = await o("WAWebMsgProcessingApiUtils").generateBclMsgs(
                    p,
                    n.bclParticipants,
                  )))
              : (m = [p]),
            m.length === 0)
          )
            return !1;
          l.length > 0 &&
            n.placeholderCreatedWhenAccountIsHosted === !0 &&
            (m = [].concat(l, m));
        } else
          m = [
            o("WAWebMsgProcessingApiUtils").genDebugPlaceholderMsg(
              n,
              t.nackReason,
            ),
          ];
        var _ = m;
        if (_.length === 0) return !1;
        if (t.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT) {
          if (a.isUser()) {
            var f = _[0],
              g = o(
                "WAWebMessageDestinationChat",
              ).determineDestinationChatForIncomingMessage({
                chat: a,
                msg: f,
                msgInfo: n,
              });
            await o("WAWebCheckChatExistsOrCreate").checkChatExistsOrCreate({
              destinationChat: g,
              msgMeta: t.msgMeta,
              options: { firstIncomingMsg: f },
              chatOriginType: "createChatOnNewMsg",
            });
          }
        } else t.type;
        var h = o("WAWebMessageProcessorCache")
            .messageProcessorCache.addMessages(
              _.map(function (e) {
                return { msg: e };
              }),
              !i,
            )
            .then(function () {
              o(
                "WAWebWamWorkerOfflineProcessReporter",
              ).WorkerOfflineResumeReporter.updateProcessedMessageCount();
            }),
          y = !1;
        return (
          o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd &&
            (o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd &&
              (await h),
            await Promise.all(
              _.map(async function (e) {
                var t =
                  e.kind !== o("WAWebMsgType").MsgKind.PlaceholderAddon &&
                  (!a.isStatus() || o("WAWebCurrentUser").isEmployee());
                if (t) {
                  y = !0;
                  var n = e.id.remote;
                  await o("WAWebBackendApi").frontendSendAndReceive(
                    "updateMessageUI",
                    { chatId: n, msg: e },
                  );
                }
              }),
            )),
          y
        );
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "processPlaceholderMsg: msgId::",
                  ", failed with error: ",
                  "",
                ])),
              n.externalId,
              e,
            )
            .tags("messaging")
            .sendLogs("handle_msg: error storing/processing single message"),
          !1
        );
      }
    }
    l.processPlaceholderMessage = u;
  },
  98,
);
