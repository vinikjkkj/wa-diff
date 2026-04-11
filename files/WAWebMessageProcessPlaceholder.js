__d(
  "WAWebMessageProcessPlaceholder",
  [
    "Promise",
    "WALogger",
    "WANullthrows",
    "WAWebAck",
    "WAWebAdvHostedAccountTypeSystemMsg",
    "WAWebApiDeviceList",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBizCoexGatingUtils",
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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.msgInfo,
            i = a.chat;
          if (a.category === o("WAWebHandleMsgCommon").MSG_CATEGORY.peer) {
            o("WALogger")
              .LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[processPlaceHolderMessage] skip peer msg, id=",
                    "",
                  ])),
                a.externalId,
              )
              .tags("messaging");
            return;
          }
          var l = a.offline != null;
          try {
            var c = [];
            if (
              o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
              i.isUser() &&
              (t.placeholderType ===
                o("WAWebHandleMsgTypes.flow").PlaceholderType.E2E ||
                t.placeholderType ===
                  o("WAWebHandleMsgTypes.flow").PlaceholderType.FANOUT)
            ) {
              var d,
                m =
                  o("WAWebUserPrefsMultiDevice").getHaveProcessedCoexAdv() ===
                  !0
                    ? yield o("WAWebApiDeviceList").getDeviceRecord(a.author)
                    : null;
              if (
                ((a.placeholderCreatedWhenAccountIsHosted =
                  (m == null ? void 0 : m.advAccountType) ===
                  o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED),
                (m == null ? void 0 : m.advAccountType) ===
                  o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
                  (a == null || (d = a.chat) == null ? void 0 : d.isUser()) ===
                    !0)
              ) {
                var p = yield o(
                  "WAWebBizCoexUtils",
                ).shouldCreateFallbackHostedAdvSystemMsgOnPlaceholder(
                  o("WAWebWidFactory")
                    .asUserWidOrThrow(a == null ? void 0 : a.author)
                    .toString(),
                );
                p &&
                  !o("WAWebBizCoexUtils").shouldDedupInitialHostedSystemMsg(
                    o("WAWebWidFactory").asUserWidOrThrow(
                      a == null ? void 0 : a.author,
                    ),
                  ) &&
                  (c = [
                    r("WANullthrows")(
                      o(
                        "WAWebAdvHostedAccountTypeSystemMsg",
                      ).genAdvAccountTypeInitialSysMsg(
                        o("WAWebWidFactory").asUserWidOrThrow(
                          a == null ? void 0 : a.author,
                        ),
                        o("WAWebWidFactory").asUserWidOrThrow(
                          a == null ? void 0 : a.author,
                        ),
                      ),
                    ),
                  ]);
              }
            }
            var _ = [];
            if (t.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT) {
              var f = o("WAWebMsgProcessingApiUtils").generatePlaceholder(t);
              if (
                f == null ||
                (f.realType != null,
                a.type ===
                o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.PEER_BROADCAST
                  ? (yield o("WAWebDBProcessMessage").storeMessages(
                      [f],
                      f.id.remote,
                    ),
                    a.bclParticipants != null &&
                      a.edit !== o("WAWebAck").EDIT_ATTR.SENDER_REVOKE &&
                      (_ = yield o(
                        "WAWebMsgProcessingApiUtils",
                      ).generateBclMsgs(f, a.bclParticipants)))
                  : (_ = [f]),
                _.length === 0)
              )
                return;
              o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
                c.length > 0 &&
                a.placeholderCreatedWhenAccountIsHosted === !0 &&
                (_ = [].concat(c, _));
            } else
              _ = [
                o("WAWebMsgProcessingApiUtils").genDebugPlaceholderMsg(
                  a,
                  t.nackReason,
                ),
              ];
            var g = _;
            if (g.length === 0) return;
            if (t.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT) {
              if (i.isUser()) {
                var h = g[0],
                  y = o(
                    "WAWebMessageDestinationChat",
                  ).determineDestinationChatForIncomingMessage({
                    chat: i,
                    msg: h,
                    msgInfo: a,
                  });
                yield o("WAWebCheckChatExistsOrCreate").checkChatExistsOrCreate(
                  {
                    destinationChat: y,
                    msgMeta: t.msgMeta,
                    options: { firstIncomingMsg: h },
                    chatOriginType: "createChatOnNewMsg",
                  },
                );
              }
            } else t.type;
            var C = o("WAWebMessageProcessorCache")
              .messageProcessorCache.addMessages(
                g.map(function (e) {
                  return { msg: e };
                }),
                !l,
              )
              .then(function () {
                o(
                  "WAWebWamWorkerOfflineProcessReporter",
                ).WorkerOfflineResumeReporter.updateProcessedMessageCount();
              });
            o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd &&
              (o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd &&
                (yield C),
              yield (u || (u = n("Promise"))).all(
                g.map(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var t =
                          e.kind !==
                            o("WAWebMsgType").MsgKind.PlaceholderAddon &&
                          (!i.isStatus() || o("WAWebCurrentUser").isEmployee());
                        if (t) {
                          var n = e.id.remote;
                          yield o("WAWebBackendApi").frontendSendAndReceive(
                            "updateMessageUI",
                            { chatId: n, msg: e },
                          );
                        }
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                ),
              ));
          } catch (e) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "processPlaceholderMsg: msgId::",
                    ", failed with error: ",
                    "",
                  ])),
                a.externalId,
                e,
              )
              .tags("messaging")
              .sendLogs("handle_msg: error storing/processing single message");
          }
        })),
        d.apply(this, arguments)
      );
    }
    l.processPlaceholderMessage = c;
  },
  98,
);
