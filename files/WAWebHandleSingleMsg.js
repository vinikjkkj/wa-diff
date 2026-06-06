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
    "WAWebDBStoreRevokeMsgs",
    "WAWebHandleForMessageRange",
    "WAWebHandleForMessageRangeEnums",
    "WAWebHandleMsgTypes.flow",
    "WAWebHandlePlaceholderWam",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
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
            ? o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.NO_OVERWRITE
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
          C !==
          o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.NO_OVERWRITE,
        R =
          C ===
          o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.VOIP_CALL_LOG,
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
          o("WAWebHandleForMessageRangeEnums").ActiveRangeHandlerAction.SkipUI,
        );
        try {
          (o("WAWebMsgGetters").getIsStatus(a) &&
            (await o("WAWebBackendApi").frontendSendAndReceive(
              "handleStatusUpdate",
              { rawMsg: k, checksum: null, isMsgUpdate: !1 },
            )),
            await o("WAPromiseLoop").promiseLoop(async function (e, t, a) {
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
                    var p = r("nullthrows")(k.t, "revoke timestamp is null");
                    (await o("WAWebDBStoreRevokeMsgs").processRevokeMsgs([
                      {
                        revokeMsgKey: k.protocolMessageKey,
                        newMsgKey: k.id,
                        timestamp: p,
                        subtype: k.subtype,
                        sender: k.author,
                        revokeTimestamp: p,
                      },
                    ]),
                      o("WAWebBackendApi").frontendFireAndForget(
                        "deleteModelsForLastAddOnPreview",
                        { messagesIds: [k.protocolMessageKey.toString()] },
                      ),
                      await o("WAWebPersistedJobManagerWorkerCompatible")
                        .getJobManager()
                        .waitUntilPersisted(
                          o(
                            "WAWebPersistedJobDefinitions",
                          ).jobSerializers.deleteAddOns(n.toString(), [
                            k.protocolMessageKey.toString(),
                          ]),
                        ));
                  } else
                    try {
                      (await o("WAWebDBProcessMessage").storeMessages([k], n),
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
                            (k = await o("WAWebDBProcessMessage").updateMessage(
                              k,
                            )),
                            (L.update = !0));
                      else throw e;
                    }
                if (k.type === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE) {
                  var _ = k.id.toString();
                  await o("WAWebApiGroupInviteV4Store").persistGroupInviteV4Msg(
                    _,
                    {
                      id: _,
                      from: k.from.toString(),
                      to: k.to.toString(),
                      groupId: k.inviteGrp,
                      expiration: parseInt(k.inviteCodeExp, 10),
                      expired:
                        o("WATimeUtils").unixTime() >=
                        parseInt(k.inviteCodeExp, 10),
                    },
                  );
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
            }),
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
            var P,
              N = ((P = k.threadIds) != null ? P : []).map(function (e) {
                return e.toString();
              });
            (await o("WAWebBackendApi").frontendSendAndReceive(
              "checkOrphanMutations",
              {
                msgIds: [k.id.toString()],
                chatIds: [n.toString()],
                threadIds: N,
              },
            ),
              await o(
                "WAWebCheckUpdateOrphanReactions",
              ).checkUpdateForOrphanReactions([k.id.toString()]));
          } catch (e) {
            var M = r("getErrorSafe")(e);
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
              .catching(M);
          }
          var w = !1;
          if (
            i === "createChat" &&
            k.type !== o("WAWebMsgType").MSG_TYPE.CHAT &&
            n.isRegularUser()
          ) {
            var A = await o("WAWebApiChatCommon").getChatRecord(n);
            A == null &&
              ((w = !0),
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
            !w &&
            (await o("WAWebBackendApi").frontendSendAndReceive(
              "processMultipleMessages",
              {
                chatId: n,
                msgObjs: [
                  babelHelpers.extends({}, k, { recvFresh: !0, isNewMsg: !0 }),
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
          var F = r("getErrorSafe")(e);
          r("gkx")("26258")
            ? o("WALogger")
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
                  F.name,
                  F.message,
                  F.stack,
                )
                .tags("messaging")
            : o("WALogger")
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
                  F.name,
                  F.message,
                  F.stack,
                )
                .tags("messaging")
                .sendLogs(
                  "msg_handler: error storing/processing single message",
                );
        }
      }
    }
    l.handleSingleMsgImpl = C;
  },
  98,
);
