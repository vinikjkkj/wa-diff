__d(
  "WAWebMessageProcessPlaceholder",
  [
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
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t, n) {
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
          p,
          g = [];
        if (
          i.isUser() &&
          (t.placeholderType === o("WAWebHandleMsgTypes").PlaceholderType.E2E ||
            t.placeholderType ===
              o("WAWebHandleMsgTypes").PlaceholderType.FANOUT)
        ) {
          var h,
            y =
              o("WAWebUserPrefsMultiDevice").getHaveProcessedCoexAdv() === !0
                ? await o("WAWebApiDeviceList").getDeviceRecord(a.author)
                : null;
          if (
            ((a.placeholderCreatedWhenAccountIsHosted =
              (y == null ? void 0 : y.advAccountType) ===
              o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED),
            (y == null ? void 0 : y.advAccountType) ===
              o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED &&
              (a == null || (h = a.chat) == null ? void 0 : h.isUser()) === !0)
          ) {
            var C = await o(
              "WAWebBizCoexUtils",
            ).shouldCreateFallbackHostedAdvSystemMsgOnPlaceholder(
              o("WAWebWidFactory")
                .asUserWidOrThrow(a == null ? void 0 : a.author)
                .toString(),
            );
            C &&
              !o("WAWebBizCoexUtils").shouldDedupInitialHostedSystemMsg(
                o("WAWebWidFactory").asUserWidOrThrow(
                  a == null ? void 0 : a.author,
                ),
              ) &&
              (g = [
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
        var b = [];
        if (t.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT) {
          var v = o("WAWebMsgProcessingApiUtils").generatePlaceholder(t);
          if (
            v == null ||
            (v.realType != null,
            a.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.PEER_BROADCAST
              ? (await _(v),
                a.bclParticipants != null &&
                  a.edit !== o("WAWebAck").EDIT_ATTR.SENDER_REVOKE &&
                  (b = await o("WAWebMsgProcessingApiUtils").generateBclMsgs(
                    v,
                    a.bclParticipants,
                  )))
              : (b = [v]),
            b.length === 0)
          )
            return null;
          g.length > 0 &&
            a.placeholderCreatedWhenAccountIsHosted === !0 &&
            (b = [].concat(g, b));
        } else
          b = [
            o("WAWebMsgProcessingApiUtils").genDebugPlaceholderMsg(
              a,
              t.nackReason,
            ),
          ];
        var S = b;
        if (S.length === 0) return null;
        if (t.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT) {
          var R = await o(
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
            await o("WAWebCheckChatExistsOrCreate").checkChatExistsOrCreate({
              destinationChat: E,
              msgMeta: t.msgMeta,
              options: { firstIncomingMsg: L },
              chatOriginType: "createChatOnNewMsg",
            });
          }
        } else t.type;
        var k = f(
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
          (n == null || (p = n.callerHandles) == null
            ? void 0
            : p.has("ui")) === !0
        ) {
          var T = m(S, i);
          return { rendered: T != null, uiUpdate: T, written: I };
        }
        return { rendered: await d(S, i, I, k.awaited), written: I };
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
            .sendLogs("handle_msg: error storing/processing single message"),
          u == null &&
            (n == null || (D = n.callerHandles) == null
              ? void 0
              : D.has("errors")) === !0)
        )
          throw e;
        return u == null ? null : babelHelpers.extends({}, u, { rendered: !1 });
      }
    }
    async function c(e) {
      var t = e.msgInfo;
      if (
        t.category === o("WAWebHandleMsgCommon").MSG_CATEGORY.peer ||
        !o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd
      )
        return !1;
      if (e.type === o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER)
        return p(
          o("WAWebMsgProcessingApiUtils").genDebugPlaceholderMsg(
            t,
            e.nackReason,
          ),
          t.chat,
        );
      var n = o("WAWebMsgProcessingApiUtils").generatePlaceholder(e);
      return n == null || !p(n, t.chat)
        ? !1
        : t.type === o("WAWebHandleMsgTypes").MESSAGE_TYPE.PEER_BROADCAST
          ? t.edit !== o("WAWebAck").EDIT_ATTR.SENDER_REVOKE &&
            t.bclParticipants != null &&
            t.bclParticipants.length > 0
          : !(await o(
              "WAWebLimitSharingAcp2HideReceivedMsgs",
            ).wouldHideMsgInAcp2RestrictedChat({
              chatWid: n.id.remote,
              messageType: t.type,
            }));
    }
    async function d(e, t, n, r) {
      r && (await n);
      var a = !1;
      return (
        await Promise.all(
          e.map(async function (e) {
            if (p(e, t)) {
              a = !0;
              var n = e.id.remote;
              await o("WAWebBackendApi").frontendSendAndReceive(
                "updateMessageUI",
                { chatId: n, msg: e },
              );
            }
          }),
        ),
        a
      );
    }
    function m(e, t) {
      var n = e.filter(function (e) {
        return p(e, t);
      });
      return n.length > 0 ? { kind: "placeholder", msgs: n } : null;
    }
    function p(e, t) {
      return (
        e.kind !== o("WAWebMsgType").MsgKind.PlaceholderAddon &&
        (!t.isStatus() || o("WAWebCurrentUser").isEmployee())
      );
    }
    async function _(e) {
      try {
        await o("WAWebDBProcessMessage").storeMessages([e], e.id.remote);
      } catch (e) {
        if (!(e instanceof o("WAWebDBProcessMessage").DuplicateMessageError))
          throw e;
      }
    }
    function f(e, t) {
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
    ((l.processPlaceholderMessage = u), (l.wouldRenderPlaceholder = c));
  },
  98,
);
