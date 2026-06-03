__d(
  "WAWebHandleSingleMsg",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "gkx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C;
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.chatId,
            i = t.newMsg,
            l = t.handleSingleMsgOrigin,
            b = t.messageOverwriteOption,
            v =
              b === void 0
                ? o("WAWebHandleMsgTypes.flow").MessageOverwriteOption
                    .NO_OVERWRITE
                : b,
            S = t.preserveOrder,
            R = S === void 0 ? !0 : S;
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
              i.id.id,
              a.toLogString(),
              i.type,
              i.subtype,
            )
            .tags("messaging");
          var L =
              v !==
              o("WAWebHandleMsgTypes.flow").MessageOverwriteOption.NO_OVERWRITE,
            E =
              v ===
              o("WAWebHandleMsgTypes.flow").MessageOverwriteOption
                .VOIP_CALL_LOG,
            k = { add: "after", update: L, isHistory: !1 },
            I =
              i.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
              ["sender_revoke", "admin_revoke"].includes(i.subtype),
            T = i;
          if (!I) {
            var D = yield o(
                "WAWebApiFilterAndReplaceMessages",
              ).filterAndReplaceMessages([T]),
              x = D.newMsgs;
            if (x.length === 0) return;
            T = x[0];
          }
          var $ = yield o(
            "WAWebHandleForMessageRange",
          ).handleForActiveMessageRange(a, T);
          if (
            !$.has(
              o("WAWebHandleForMessageRangeEnums").ActiveRangeHandlerAction
                .DropMessage,
            )
          ) {
            var P = $.has(
              o("WAWebHandleForMessageRangeEnums").ActiveRangeHandlerAction
                .SkipUI,
            );
            try {
              (o("WAWebMsgGetters").getIsStatus(i) &&
                (yield o("WAWebBackendApi").frontendSendAndReceive(
                  "handleStatusUpdate",
                  { rawMsg: T, checksum: null, isMsgUpdate: !1 },
                )),
                yield o("WAPromiseLoop").promiseLoop(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e, t, i) {
                        var l = o("WAPromiseDelays").delayMs(
                          o("WABackoffUtils").expBackoff(i, 12e4, 1e3, 0.1),
                        );
                        try {
                          var p;
                          if (L)
                            try {
                              ((T = yield o(
                                "WAWebDBProcessMessage",
                              ).updateMessage(T)),
                                (p = !1));
                            } catch (e) {
                              if (
                                e instanceof
                                  o("WAWebDBProcessMessage")
                                    .NoMessageToUpdateError &&
                                E
                              )
                                ((p = !0),
                                  o("WALogger").LOG(
                                    s ||
                                      (s =
                                        babelHelpers.taggedTemplateLiteralLoose(
                                          [
                                            "Msg overwrite failed, will fall back to creation",
                                          ],
                                        )),
                                  ));
                              else throw e;
                            }
                          if (!L || p === !0)
                            if (I) {
                              var _ = r("nullthrows")(
                                T.t,
                                "revoke timestamp is null",
                              );
                              (yield o(
                                "WAWebDBStoreRevokeMsgs",
                              ).processRevokeMsgs([
                                {
                                  revokeMsgKey: T.protocolMessageKey,
                                  newMsgKey: T.id,
                                  timestamp: _,
                                  subtype: T.subtype,
                                  sender: T.author,
                                  revokeTimestamp: _,
                                },
                              ]),
                                o("WAWebBackendApi").frontendFireAndForget(
                                  "deleteModelsForLastAddOnPreview",
                                  {
                                    messagesIds: [
                                      T.protocolMessageKey.toString(),
                                    ],
                                  },
                                ),
                                yield o(
                                  "WAWebPersistedJobManagerWorkerCompatible",
                                )
                                  .getJobManager()
                                  .waitUntilPersisted(
                                    o(
                                      "WAWebPersistedJobDefinitions",
                                    ).jobSerializers.deleteAddOns(
                                      a.toString(),
                                      [T.protocolMessageKey.toString()],
                                    ),
                                  ));
                            } else
                              try {
                                (yield o("WAWebDBProcessMessage").storeMessages(
                                  [T],
                                  a,
                                ),
                                  T.type ===
                                    o("WAWebMsgType").MSG_TYPE.CIPHERTEXT &&
                                    o(
                                      "WAWebHandlePlaceholderWam",
                                    ).postPlaceholderActivityAddEvent([T]));
                              } catch (e) {
                                if (
                                  e instanceof
                                  o("WAWebDBProcessMessage")
                                    .DuplicateMessageError
                                )
                                  T.type ===
                                  o("WAWebMsgType").MSG_TYPE.CIPHERTEXT
                                    ? o("WALogger").LOG(
                                        u ||
                                          (u =
                                            babelHelpers.taggedTemplateLiteralLoose(
                                              [
                                                "processPlaceholderMsg: skip creating duplicate placeholder",
                                              ],
                                            )),
                                      )
                                    : (o("WALogger").LOG(
                                        c ||
                                          (c =
                                            babelHelpers.taggedTemplateLiteralLoose(
                                              [
                                                "storeMessages loop: detect resend message",
                                              ],
                                            )),
                                      ),
                                      (T = yield o(
                                        "WAWebDBProcessMessage",
                                      ).updateMessage(T)),
                                      (k.update = !0));
                                else throw e;
                              }
                          if (
                            T.type ===
                            o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE
                          ) {
                            var f = T.id.toString();
                            yield o(
                              "WAWebApiGroupInviteV4Store",
                            ).persistGroupInviteV4Msg(f, {
                              id: f,
                              from: T.from.toString(),
                              to: T.to.toString(),
                              groupId: T.inviteGrp,
                              expiration: parseInt(T.inviteCodeExp, 10),
                              expired:
                                o("WATimeUtils").unixTime() >=
                                parseInt(T.inviteCodeExp, 10),
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
                            i > 3
                              ? (o("WALogger").WARN(
                                  m ||
                                    (m =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "storeMessages loop: Gave up after ",
                                        " tries",
                                      ])),
                                  i,
                                ),
                                (C || (C = n("Promise"))).reject(e))
                              : l
                          );
                        }
                      },
                    );
                    return function (t, n, r) {
                      return e.apply(this, arguments);
                    };
                  })(),
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
                    T.id.id,
                    a.toLogString(),
                    T.type,
                    T.subtype,
                    L,
                    P,
                  )
                  .tags("messaging"));
              try {
                var N,
                  M = ((N = T.threadIds) != null ? N : []).map(function (e) {
                    return e.toString();
                  });
                (yield o("WAWebBackendApi").frontendSendAndReceive(
                  "checkOrphanMutations",
                  {
                    msgIds: [T.id.toString()],
                    chatIds: [a.toString()],
                    threadIds: M,
                  },
                ),
                  yield o(
                    "WAWebCheckUpdateOrphanReactions",
                  ).checkUpdateForOrphanReactions([T.id.toString()]));
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
                    String(T.id),
                    String(a),
                  )
                  .catching(w);
              }
              var A = !1;
              if (
                l === "createChat" &&
                T.type !== o("WAWebMsgType").MSG_TYPE.CHAT &&
                a.isRegularUser()
              ) {
                var F = yield o("WAWebApiChatCommon").getChatRecord(a);
                F == null &&
                  ((A = !0),
                  o("WALogger").WARN(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "handleSingleMsg: no chat for system msg chatId=",
                        "",
                      ])),
                    a.toLogString(),
                  ));
              }
              !P &&
                !A &&
                (yield o("WAWebBackendApi").frontendSendAndReceive(
                  "processMultipleMessages",
                  {
                    chatId: a,
                    msgObjs: [
                      babelHelpers.extends({}, T, {
                        recvFresh: !0,
                        isNewMsg: !0,
                      }),
                    ],
                    meta: k,
                    processMessagesOrigin: l,
                    chatMsgsCollection: null,
                    preserveOrder: R,
                  },
                ));
            } catch (e) {
              if (e instanceof o("WAWebBackendErrors").LogoutDrop) return;
              if (
                e instanceof
                o("WAWebDBProcessMessage").PreviousMsgNotUpdatableError
              ) {
                o("WALogger").WARN(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "Msg: ",
                      " chat: ",
                      " Error: PreviousMsgNotUpdatableError",
                    ])),
                  String(T.id),
                  String(a),
                );
                return;
              }
              var O = r("getErrorSafe")(e);
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
                      String(T.id),
                      String(a),
                      O.name,
                      O.message,
                      O.stack,
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
                      String(T.id),
                      String(a),
                      O.name,
                      O.message,
                      O.stack,
                    )
                    .tags("messaging")
                    .sendLogs(
                      "msg_handler: error storing/processing single message",
                    );
            }
          }
        })),
        v.apply(this, arguments)
      );
    }
    l.handleSingleMsgImpl = b;
  },
  98,
);
