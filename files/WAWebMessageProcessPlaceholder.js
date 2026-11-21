__d(
  "WAWebMessageProcessPlaceholder",
  [
    "Promise",
    "WALogger",
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
    "WAWebHandleMsgTypes",
    "WAWebLimitSharingAcp2HideReceivedMsgs",
    "WAWebMessageDestinationChat",
    "WAWebMessageProcessorCache",
    "WAWebMessageQueueImpl",
    "WAWebMsgProcessingApiUtils",
    "WAWebMsgType",
    "WAWebProtobufsAdv.pb",
    "WAWebUserPrefsMultiDevice",
    "WAWebWamWorkerOfflineProcessReporter",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = t.msgInfo,
            i = a.chat;
          if (a.category === o("WAWebHandleMsgCommon").MSG_CATEGORY.peer)
            return (
              o("WALogger")
                .LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[processPlaceHolderMessage] skip peer msg, id=",
                      "",
                    ])),
                  a.externalId,
                )
                .tags("messaging"),
              null
            );
          var l = a.offline != null,
            u = null;
          try {
            var c,
              d,
              m = [];
            if (
              i.isUser() &&
              (t.placeholderType ===
                o("WAWebHandleMsgTypes").PlaceholderType.E2E ||
                t.placeholderType ===
                  o("WAWebHandleMsgTypes").PlaceholderType.FANOUT)
            ) {
              var p,
                f =
                  o("WAWebUserPrefsMultiDevice").getHaveProcessedCoexAdv() ===
                  !0
                    ? yield o("WAWebApiDeviceList").getDeviceRecord(a.author)
                    : null;
              if (
                ((a.placeholderCreatedWhenAccountIsHosted =
                  (f == null ? void 0 : f.advAccountType) ===
                  o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED),
                (f == null ? void 0 : f.advAccountType) ===
                  o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
                  (a == null || (p = a.chat) == null ? void 0 : p.isUser()) ===
                    !0)
              ) {
                var h = yield o(
                  "WAWebBizCoexUtils",
                ).shouldCreateFallbackHostedAdvSystemMsgOnPlaceholder(
                  o("WAWebWidFactory")
                    .asUserWidOrThrow(a == null ? void 0 : a.author)
                    .toString(),
                );
                h &&
                  !o("WAWebBizCoexUtils").shouldDedupInitialHostedSystemMsg(
                    o("WAWebWidFactory").asUserWidOrThrow(
                      a == null ? void 0 : a.author,
                    ),
                  ) &&
                  (m = [
                    r("nullthrows")(
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
            var C = [];
            if (t.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT) {
              var v = o("WAWebMsgProcessingApiUtils").generatePlaceholder(t);
              if (
                v == null ||
                (v.realType != null,
                a.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.PEER_BROADCAST
                  ? (yield y(v),
                    a.bclParticipants != null &&
                      a.edit !== o("WAWebAck").EDIT_ATTR.SENDER_REVOKE &&
                      (C = yield o(
                        "WAWebMsgProcessingApiUtils",
                      ).generateBclMsgs(v, a.bclParticipants)))
                  : (C = [v]),
                C.length === 0)
              )
                return null;
              m.length > 0 &&
                a.placeholderCreatedWhenAccountIsHosted === !0 &&
                (C = [].concat(m, C));
            } else
              C = [
                o("WAWebMsgProcessingApiUtils").genDebugPlaceholderMsg(
                  a,
                  t.nackReason,
                ),
              ];
            var S = C;
            if (S.length === 0) return null;
            if (t.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT) {
              var R = yield o(
                "WAWebLimitSharingAcp2HideReceivedMsgs",
              ).hideMsgsReceivedInAcp2RestrictedChat({
                messageType: a.type,
                msgs: S,
              });
              if (R.length === 0) return null;
            }
            if (t.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT) {
              if (i.isUser()) {
                var L = S[0],
                  E = o(
                    "WAWebMessageDestinationChat",
                  ).determineDestinationChatForIncomingMessage({
                    chat: i,
                    msg: L,
                    msgInfo: a,
                  });
                yield o("WAWebCheckChatExistsOrCreate").checkChatExistsOrCreate(
                  {
                    destinationChat: E,
                    msgMeta: t.msgMeta,
                    options: { firstIncomingMsg: L },
                    chatOriginType: "createChatOnNewMsg",
                  },
                );
              }
            } else t.type;
            var k = b(
                (n == null || (c = n.callerHandles) == null
                  ? void 0
                  : c.has("flush")) === !0,
                l,
              ),
              I = o("WAWebMessageProcessorCache")
                .messageProcessorCache.addMessages(
                  S.map(function (e) {
                    return { msg: e };
                  }),
                  k.flushImmediately,
                )
                .then(function () {
                  o(
                    "WAWebWamWorkerOfflineProcessReporter",
                  ).WorkerOfflineResumeReporter.updateProcessedMessageCount();
                });
            if (
              ((u = { written: I }),
              !o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd)
            )
              return { rendered: !1, written: I };
            if (
              (n == null || (d = n.callerHandles) == null
                ? void 0
                : d.has("ui")) === !0
            ) {
              var T = g(S, i);
              return { rendered: T != null, uiUpdate: T, written: I };
            }
            return { rendered: yield _(S, i, I, k.awaited), written: I };
          } catch (e) {
            var D;
            if (
              (o("WALogger")
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
                .sendLogs(
                  "handle_msg: error storing/processing single message",
                ),
              u == null &&
                (n == null || (D = n.callerHandles) == null
                  ? void 0
                  : D.has("errors")) === !0)
            )
              throw e;
            return u == null
              ? null
              : babelHelpers.extends({}, u, { rendered: !1 });
          }
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
          var t = e.msgInfo;
          if (
            t.category === o("WAWebHandleMsgCommon").MSG_CATEGORY.peer ||
            !o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd
          )
            return !1;
          if (e.type === o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER)
            return h(
              o("WAWebMsgProcessingApiUtils").genDebugPlaceholderMsg(
                t,
                e.nackReason,
              ),
              t.chat,
            );
          var n = o("WAWebMsgProcessingApiUtils").generatePlaceholder(e);
          return n == null || !h(n, t.chat)
            ? !1
            : t.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.PEER_BROADCAST
              ? t.edit !== o("WAWebAck").EDIT_ATTR.SENDER_REVOKE &&
                t.bclParticipants != null &&
                t.bclParticipants.length > 0
              : !(yield o(
                  "WAWebLimitSharingAcp2HideReceivedMsgs",
                ).wouldHideMsgInAcp2RestrictedChat({
                  chatWid: n.id.remote,
                  messageType: t.type,
                }));
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n, r) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a) {
            a && (yield r);
            var i = !1;
            return (
              yield (u || (u = n("Promise"))).all(
                e.map(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        if (h(e, t)) {
                          i = !0;
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
              ),
              i
            );
          },
        )),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      var n = e.filter(function (e) {
        return h(e, t);
      });
      return n.length > 0 ? { kind: "placeholder", msgs: n } : null;
    }
    function h(e, t) {
      return (
        e.kind !== o("WAWebMsgType").MsgKind.PlaceholderAddon &&
        (!t.isStatus() || o("WAWebCurrentUser").isEmployee())
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            yield o("WAWebDBProcessMessage").storeMessages([e], e.id.remote);
          } catch (e) {
            if (
              !(e instanceof o("WAWebDBProcessMessage").DuplicateMessageError)
            )
              throw e;
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      var n = o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd;
      return e
        ? { awaited: !1, flushImmediately: !1 }
        : {
            awaited: n,
            flushImmediately: o(
              "WAWebMessageQueueImpl",
            ).shouldFlushMessageImmediately(t, n),
          };
    }
    ((l.processPlaceholderMessage = c), (l.wouldRenderPlaceholder = m));
  },
  98,
);
