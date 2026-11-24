__d(
  "WAWebHandleSingleMsg",
  [
    "WABackoffUtils",
    "WALogger",
    "WAPromiseDelays",
    "WAPromiseLoop",
    "WATimeUtils",
    "WAWebApiChatCommon",
    "WAWebApiFilterAndReplaceMessages",
    "WAWebApiGroupInviteV4Store",
    "WAWebBackendApi",
    "WAWebBackendErrors",
    "WAWebCheckUpdateOrphanReactions",
    "WAWebDBProcessMessage",
    "WAWebDBProcessRevokeMsgs",
    "WAWebHandleForMessageRange",
    "WAWebHandleForMessageRangeEnums",
    "WAWebHandleMsgTypes",
    "WAWebHandlePlaceholderWam",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebReactionUiService",
    "WAWebRequestDeleteAddOns",
    "WAWebUiRuntime",
    "getErrorSafe",
    "gkx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y;
    async function C(t) {
      var n = t.chatId,
        a = t.newMsg,
        i = t.handleSingleMsgOrigin,
        l = t.messageOverwriteOption,
        C =
          l === void 0
            ? o("WAWebHandleMsgTypes").MessageOverwriteOption.NO_OVERWRITE
            : l,
        b = t.preserveOrder,
        v = b === void 0 ? !0 : b;
      o("WALogger")
        .LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "handleSingleMsg: called with msgId::",
              ", chat id::",
              " type::",
              ",",
              "",
            ])),
          a.id.id,
          n.toLogString(),
          a.type,
          a.subtype,
        )
        .tags("messaging");
      var S =
          C !== o("WAWebHandleMsgTypes").MessageOverwriteOption.NO_OVERWRITE,
        R = C === o("WAWebHandleMsgTypes").MessageOverwriteOption.VOIP_CALL_LOG,
        L = { add: "after", update: S, isHistory: !1 },
        E =
          a.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
          ["sender_revoke", "admin_revoke"].includes(a.subtype),
        k = a;
      if (!E) {
        var I = await o(
            "WAWebApiFilterAndReplaceMessages",
          ).filterAndReplaceMessages([k]),
          T = I.newMsgs;
        if (T.length === 0) return;
        k = T[0];
      }
      var D = await o("WAWebHandleForMessageRange").handleForActiveMessageRange(
          n,
          k,
        ),
        x = i === "scheduledMsgReveal";
      if (
        !(
          !x &&
          D.has(
            o("WAWebHandleForMessageRangeEnums").ActiveRangeHandlerAction
              .DropMessage,
          )
        )
      ) {
        var $ = D.has(
            o("WAWebHandleForMessageRangeEnums").ActiveRangeHandlerAction
              .SkipUI,
          ),
          P = !1;
        try {
          (o("WAWebMsgGetters").getIsStatus(a) &&
            (await o("WAWebBackendApi").frontendSendAndReceive(
              "handleStatusUpdate",
              { rawMsg: k, checksum: null, isMsgUpdate: !1 },
            )),
            await o("WAPromiseLoop").promiseLoop(
              async function (e, t, a) {
                var i = o("WAPromiseDelays").delayMs(
                  o("WABackoffUtils").expBackoff(a, 12e4, 1e3, 0.1),
                );
                try {
                  var l;
                  if (S)
                    try {
                      ((k = await o("WAWebDBProcessMessage").updateMessage(k)),
                        (l = !1));
                    } catch (e) {
                      if (
                        e instanceof
                          o("WAWebDBProcessMessage").NoMessageToUpdateError &&
                        R
                      )
                        ((l = !0),
                          o("WALogger").LOG(
                            s ||
                              (s = babelHelpers.taggedTemplateLiteralLoose([
                                "Msg overwrite failed, will fall back to creation",
                              ])),
                          ));
                      else throw e;
                    }
                  if (!S || l === !0)
                    if (E) {
                      var p,
                        _ = r("nullthrows")(k.t, "revoke timestamp is null"),
                        f = r("nullthrows")(
                          k.protocolMessageKey,
                          "revoke target is null",
                        ),
                        g = await o(
                          "WAWebDBProcessRevokeMsgs",
                        ).processRevokeMsgsAndGetCleanupEligibleKeys([
                          {
                            revokeMsgKey: f,
                            newMsgKey: k.id,
                            timestamp: _,
                            subtype: k.subtype,
                            authenticatedSender:
                              (p = k.senderWithDevice) != null
                                ? p
                                : o("WAWebMsgGetters").getSender(k),
                            sender: k.author,
                            revokeTimestamp: _,
                          },
                        ]),
                        h = g.get(f.toString());
                      h != null &&
                        (o("WAWebUiRuntime").isWebDiUiEnabled()
                          ? o("WAWebUiRuntime")
                              .uiRuntime(
                                o("WAWebReactionUiService").ReactionUiService,
                              )
                              .deleteModelsForLastAddOnPreview([h])
                          : o("WAWebBackendApi").frontendFireAndForget(
                              "deleteModelsForLastAddOnPreview",
                              { messagesIds: [h] },
                            ),
                        await o("WAWebRequestDeleteAddOns").requestDeleteAddOns(
                          n.toString(),
                          [h],
                        ));
                    } else
                      try {
                        (await o("WAWebDBProcessMessage").storeMessages([k], n),
                          (P = !0),
                          k.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT &&
                            o(
                              "WAWebHandlePlaceholderWam",
                            ).postPlaceholderActivityAddEvent([k]));
                      } catch (e) {
                        if (
                          e instanceof
                          o("WAWebDBProcessMessage").DuplicateMessageError
                        )
                          k.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT
                            ? o("WALogger").LOG(
                                u ||
                                  (u = babelHelpers.taggedTemplateLiteralLoose([
                                    "processPlaceholderMsg: skip creating duplicate placeholder",
                                  ])),
                              )
                            : (o("WALogger").LOG(
                                c ||
                                  (c = babelHelpers.taggedTemplateLiteralLoose([
                                    "storeMessages loop: detect resend message",
                                  ])),
                              ),
                              (k = await o(
                                "WAWebDBProcessMessage",
                              ).updateMessage(k)),
                              (L.update = !0));
                        else throw e;
                      }
                  if (k.type === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE) {
                    var y = k.id.toString();
                    await o(
                      "WAWebApiGroupInviteV4Store",
                    ).persistGroupInviteV4Msg(y, {
                      id: y,
                      from: k.from.toString(),
                      to: k.to.toString(),
                      groupId: k.inviteGrp,
                      expiration: parseInt(String(k.inviteCodeExp), 10),
                      expired:
                        o("WATimeUtils").unixTime() >=
                        parseInt(String(k.inviteCodeExp), 10),
                    });
                  }
                  e();
                } catch (e) {
                  return (
                    o("WALogger")
                      .LOG(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "storeMessages loop: failed with error ",
                            ".",
                          ])),
                        e,
                      )
                      .tags("handleSingleMsg"),
                    a > 3
                      ? (o("WALogger").WARN(
                          m ||
                            (m = babelHelpers.taggedTemplateLiteralLoose([
                              "storeMessages loop: Gave up after ",
                              " tries",
                            ])),
                          a,
                        ),
                        Promise.reject(e))
                      : i
                  );
                }
              },
              void 0,
            ),
            o("WALogger")
              .LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "handleSingleMsg: msgId=",
                    " chatId=",
                    " type=",
                    ",",
                    " db+ overwrite=",
                    " skipUI=",
                    "",
                  ])),
                k.id.id,
                n.toLogString(),
                k.type,
                k.subtype,
                S,
                $,
              )
              .tags("messaging"));
          try {
            var N,
              M = ((N = k.threadIds) != null ? N : []).map(function (e) {
                return e.toString();
              });
            (await o("WAWebBackendApi").frontendSendAndReceive(
              "checkOrphanMutations",
              {
                msgIds: [k.id.toString()],
                chatIds: [n.toString()],
                threadIds: M,
              },
            ),
              await o(
                "WAWebCheckUpdateOrphanReactions",
              ).checkUpdateForOrphanReactions([k.id.toString()]));
          } catch (e) {
            var w = r("getErrorSafe")(e);
            o("WALogger")
              .ERROR(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "handleSingleMsg: checkOrphanMutations failed msg=",
                    " chat=",
                    "",
                  ])),
                String(k.id),
                String(n),
              )
              .catching(w);
          }
          var A = !1;
          if (
            i === "createChat" &&
            k.type !== o("WAWebMsgType").MSG_TYPE.CHAT &&
            n.isRegularUser()
          ) {
            var F = await o("WAWebApiChatCommon").getChatRecord(n);
            F == null &&
              ((A = !0),
              o("WALogger").WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "handleSingleMsg: no chat for system msg chatId=",
                    "",
                  ])),
                n.toLogString(),
              ));
          }
          !$ &&
            !A &&
            (await o("WAWebBackendApi").frontendSendAndReceive(
              "processMultipleMessages",
              {
                chatId: n,
                msgObjs: [
                  babelHelpers.extends({}, k, {
                    recvFresh: !0,
                    isNewMsg: !0,
                    isNewlyStored: P,
                  }),
                ],
                meta: L,
                processMessagesOrigin: i,
                chatMsgsCollection: null,
                preserveOrder: v,
              },
            ));
        } catch (e) {
          if (e instanceof o("WAWebBackendErrors").LogoutDrop) return;
          if (
            e instanceof o("WAWebDBProcessMessage").PreviousMsgNotUpdatableError
          ) {
            o("WALogger").WARN(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "Msg: ",
                  " chat: ",
                  " Error: PreviousMsgNotUpdatableError",
                ])),
              String(k.id),
              String(n),
            );
            return;
          }
          var O = r("getErrorSafe")(e);
          r("gkx")("9092")
            ? o("WALogger")
                .WARN(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "Msg: ",
                      " chat: ",
                      " Error: ",
                      ", message: ",
                      ", stack: ",
                      "",
                    ])),
                  String(k.id),
                  String(n),
                  O.name,
                  O.message,
                  O.stack,
                )
                .tags("messaging")
                .sendLogs(
                  "msg_handler: error storing/processing single message",
                )
            : o("WALogger")
                .WARN(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "Msg: ",
                      " chat: ",
                      " Error: ",
                      ", message: ",
                      ", stack: ",
                      "",
                    ])),
                  String(k.id),
                  String(n),
                  O.name,
                  O.message,
                  O.stack,
                )
                .tags("messaging");
        }
      }
    }
    l.handleSingleMsgImpl = C;
  },
  98,
);
