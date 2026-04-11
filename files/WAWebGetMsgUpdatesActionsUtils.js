__d(
  "WAWebGetMsgUpdatesActionsUtils",
  [
    "Promise",
    "WALogger",
    "WANullthrows",
    "WATypeUtils",
    "WAWebAck",
    "WAWebButtonCollection",
    "WAWebButtonModel",
    "WAWebChatCollection",
    "WAWebDBGroupParticipant",
    "WAWebEphemeralSyncResponse",
    "WAWebErrorType",
    "WAWebFrontendMsgGetters",
    "WAWebGroupSystemMsg",
    "WAWebGroupType",
    "WAWebHandleSingleMsgFactory",
    "WAWebInvalidateEventsAction",
    "WAWebInvisiblePlaceholderViewModeProcessor",
    "WAWebLidMigrationUtils",
    "WAWebMessageAssociationUIUtils",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgModelUtils",
    "WAWebMsgType",
    "WAWebNewsletterCollection",
    "WAWebPaymentRequestMsgAction",
    "WAWebPollsInvalidateChatPollMsgsAction",
    "WAWebRevokeMsgAction",
    "WAWebTemplateButtonCollection",
    "WAWebTemplateButtonModel",
    "WAWebViewMode.flow",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "gkx",
    "lodash",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L;
    function E(e, t, n, r) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l) {
            var R = [],
              E = [],
              k = [],
              x = 0,
              $ = 0,
              P = 0,
              N = [],
              M = 0,
              w = 0,
              A = [],
              F = 0,
              O = [],
              B = 0,
              W = [],
              q = 0,
              U = [],
              V = 0,
              H = [],
              G = 0,
              z = [],
              j = 0,
              K = [],
              Q = 0;
            return (
              yield (L || (L = n("Promise"))).all(
                a.map(
                  (function () {
                    var a = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (n) {
                        var a, s;
                        (n.id instanceof r("WAWebMsgKey") ||
                          (n.self != null &&
                            r("vulture")("X8gT5EynTHw_I5RNAG6VZDmVN0Q="),
                          Q++,
                          (n.id = new (r("WAWebMsgKey"))({
                            from: n.from,
                            to: n.to,
                            id: n.id,
                            participant: n.participant,
                            selfDir: n.self,
                          }))),
                          ((a = n.groupHistoryIndividualMessageInfo) == null
                            ? void 0
                            : a.bundleMessageKey) != null &&
                            !(
                              n.groupHistoryIndividualMessageInfo
                                .bundleMessageKey instanceof r("WAWebMsgKey")
                            ) &&
                            (n.groupHistoryIndividualMessageInfo.bundleMessageKey =
                              r("WAWebMsgKey").from(
                                n.groupHistoryIndividualMessageInfo
                                  .bundleMessageKey,
                              )),
                          o("WATypeUtils").isString(t) &&
                            r("WAWebWid").isBroadcast(t) &&
                            delete n.broadcast,
                          n.type === "ptt" &&
                            !n.id.fromMe &&
                            n.ack < o("WAWebAck").ACK.CLOCK &&
                            (n.ack = o("WAWebAck").ACK.CLOCK),
                          n.hydratedButtons != null && I(n),
                          n.dynamicReplyButtons != null && T(n),
                          (s = o("WAWebInvisiblePlaceholderViewModeProcessor")
                            .InvisiblePlaceholderViewModeProcessor
                            .compatibleMessageTypes) != null &&
                            s.includes(n.type) &&
                            o(
                              "WAWebMessageAssociationUIUtils",
                            ).shouldHideParentMessage({ parentMsg: n }) &&
                            (n.viewMode =
                              o(
                                "WAWebViewMode.flow",
                              ).ViewModeType.INVISIBLE_PLACEHOLDER));
                        var u = o("WAWebMsgCollection").MsgCollection.get(n.id);
                        if (
                          n.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
                          n.subtype !== "ephemeral_setting" &&
                          n.subtype !== "share_phone_number" &&
                          n.subtype !== "event_edit_decrypted"
                        )
                          switch (n.subtype) {
                            case "admin_revoke": {
                              var c,
                                d = o(
                                  "WAWebLidMigrationUtils",
                                ).getAlternateMsgKey(n.protocolMessageKey);
                              if (
                                ((u =
                                  (c = o(
                                    "WAWebMsgCollection",
                                  ).MsgCollection.get(n.protocolMessageKey)) !=
                                  null
                                    ? c
                                    : d != null
                                      ? o(
                                          "WAWebMsgCollection",
                                        ).MsgCollection.get(d)
                                      : null),
                                u)
                              )
                                if (
                                  !o("WAWebMsgGetters").getIsGroupMsg(u) &&
                                  !o("WAWebMsgGetters").getIsNewsletterMsg(u)
                                )
                                  x++;
                                else if (
                                  !r("WAWebWid").equals(
                                    u.id.remote,
                                    n.id.remote,
                                  )
                                )
                                  $++;
                                else {
                                  (P++,
                                    N.length < 3 && N.push(u.id.toString()));
                                  var m = new (o("WAWebMsgModel").Msg)(n),
                                    p = r("WANullthrows")(
                                      o("WAWebMsgGetters").getSender(m),
                                    );
                                  if (o("WAWebMsgGetters").getIsGroupMsg(u)) {
                                    var _ = r("WANullthrows")(
                                        o("WAWebFrontendMsgGetters").getChat(u)
                                          .groupMetadata,
                                      ),
                                      f =
                                        _.isLidAddressingMode === !0
                                          ? o("WAWebLidMigrationUtils").toLid(p)
                                          : o("WAWebLidMigrationUtils").toPn(p),
                                      g =
                                        f != null
                                          ? _.participants.get(f)
                                          : null;
                                    if ((!g || !g.isAdmin) && f != null) {
                                      if (
                                        (_.participants.add(
                                          { id: f, isAdmin: !0 },
                                          { merge: !0 },
                                        ),
                                        !g)
                                      ) {
                                        var h = {
                                          actionType:
                                            o("WAWebGroupType").GROUP_ACTIONS
                                              .ADD,
                                          participants: [
                                            {
                                              id: f,
                                              isAdmin: !0,
                                              isSuperAdmin: !1,
                                            },
                                          ],
                                          reason: null,
                                        };
                                        M++;
                                        var y = yield o(
                                          "WAWebGroupSystemMsg",
                                        ).genGroupNotificationMsg({
                                          meta: {
                                            author: void 0,
                                            chatId: o(
                                              "WAWebFrontendMsgGetters",
                                            ).getChat(u).id,
                                            ts: m.t,
                                          },
                                          action: h,
                                          dbIsStale: !0,
                                        });
                                        y &&
                                          o(
                                            "WAWebHandleSingleMsgFactory",
                                          ).handleSingleMsg({
                                            chatId: y.from,
                                            newMsg: y,
                                            handleSingleMsgOrigin:
                                              "handleGroupAction",
                                          });
                                      }
                                      o("WAWebDBGroupParticipant")
                                        .markGroupParticipantStale({
                                          group: o(
                                            "WAWebFrontendMsgGetters",
                                          ).getChat(u).id,
                                        })
                                        .catch(function () {
                                          o("WALogger")
                                            .ERROR(
                                              e ||
                                                (e =
                                                  babelHelpers.taggedTemplateLiteralLoose(
                                                    [
                                                      "getMsgUpdates: failed to mark group participant as stale",
                                                    ],
                                                  )),
                                            )
                                            .sendLogs(
                                              "failed-to-mark-group-participant-as-stale",
                                            );
                                        });
                                    }
                                  }
                                  o("WAWebRevokeMsgAction").revoke(u, {
                                    msgKey: m.id,
                                    subtype: m.subtype,
                                    sender: p,
                                    revokeTimestamp: m.t,
                                  });
                                }
                              break;
                            }
                            case "sender_revoke": {
                              var C,
                                b = o(
                                  "WAWebLidMigrationUtils",
                                ).getAlternateMsgKey(n.protocolMessageKey);
                              if (
                                ((u =
                                  (C = o(
                                    "WAWebMsgCollection",
                                  ).MsgCollection.get(n.protocolMessageKey)) !=
                                  null
                                    ? C
                                    : b != null
                                      ? o(
                                          "WAWebMsgCollection",
                                        ).MsgCollection.get(b)
                                      : null),
                                u)
                              ) {
                                var v,
                                  S,
                                  L = new (o("WAWebMsgModel").Msg)(n),
                                  X =
                                    (v = u) == null
                                      ? void 0
                                      : v.botTargetSenderJid,
                                  Y = o("WAWebMsgGetters").getSender(L);
                                if (
                                  X != null &&
                                  (S = u.id.participant) != null &&
                                  S.isBot() &&
                                  r("WAWebWid").equals.apply(
                                    r("WAWebWid"),
                                    o(
                                      "WAWebLidMigrationUtils",
                                    ).toCommonAddressingMode(X, Y),
                                  ) &&
                                  Y != null
                                )
                                  (w++,
                                    A.length < 3 && A.push(u.id.toString()),
                                    o("WAWebRevokeMsgAction").revoke(u, {
                                      msgKey: L.id,
                                      subtype: L.subtype,
                                      sender: Y,
                                      revokeTimestamp: L.t,
                                    }));
                                else if (
                                  r("WAWebWid").equals.apply(
                                    r("WAWebWid"),
                                    o(
                                      "WAWebLidMigrationUtils",
                                    ).toCommonAddressingMode(
                                      o("WAWebMsgGetters").getIsGroupStatus(u)
                                        ? u.id.participant
                                        : o("WAWebMsgGetters").getSender(u),
                                      Y,
                                    ),
                                  ) &&
                                  Y != null
                                ) {
                                  if (
                                    (F++,
                                    O.length < 3 && O.push(u.id.toString()),
                                    o("WAWebMsgGetters").getIsStatus(u))
                                  ) {
                                    var J = u.getMsgChunk();
                                    J && J.remove(u);
                                  }
                                  o("WAWebRevokeMsgAction").revoke(u, {
                                    msgKey: L.id,
                                    subtype: L.subtype,
                                    sender: Y,
                                    revokeTimestamp: L.t,
                                  });
                                } else
                                  (B++,
                                    W.length < 3 &&
                                      W.push(
                                        L.id.toString() +
                                          " <> " +
                                          u.id.toString(),
                                      ));
                              }
                              break;
                            }
                            case "bot_request_welcome":
                            case "bot_memu_onboarding":
                            case "member_label":
                              break;
                            default:
                              (q++, U.length < 3 && U.push(n.id.toString()));
                              break;
                          }
                        else if (
                          u &&
                          !o("WAWebFrontendMsgGetters").getAsRevoked(u)
                        ) {
                          n.ack < u.ack && delete n.ack;
                          for (var Z in n)
                            Object.prototype.hasOwnProperty.call(n, Z) &&
                              typeof n[Z] == "undefined" &&
                              delete n[Z];
                          (u.type !== n.type &&
                            (n.subtype = n.subtype || void 0),
                            i.isHistory === !0 && (n.isNewMsg = !1));
                          var ee = ["t", "id", "from", "to"],
                            te = u.t ? r("lodash").omit(n, ee) : n,
                            ne = u.applyUpdate(te).then(function () {
                              return u;
                            });
                          if (
                            (k.push(ne), r("WAWebWid").isBroadcast(u.id.remote))
                          ) {
                            var re =
                              o("WAWebMsgModelUtils").getBroadcastFanoutKeys(u);
                            re &&
                              re.forEach(function (e) {
                                var t =
                                  o("WAWebMsgCollection").MsgCollection.get(e);
                                t &&
                                  k.push(
                                    t.applyUpdate(te).then(function () {
                                      return u;
                                    }),
                                  );
                              });
                          }
                          i.isHistory === !0 && (u.recvFresh || l) && !u.search
                            ? (V++,
                              H.length < 3 &&
                                H.push(
                                  (u.recvFresh ? "dup:" : "overlap:") +
                                    String(u.id),
                                ),
                              E.push(u))
                            : i.isHistory === !0 && u.search
                              ? ((u.search = !1),
                                G++,
                                z.length < 3 && z.push(String(u.id)),
                                R.push({ id: u.id }))
                              : i.add === "search" && R.push({ id: u.id });
                        } else {
                          var oe;
                          n.subtype === "payment_action_request_declined" ||
                          n.subtype === "payment_transaction_request_cancelled"
                            ? k.push(
                                o(
                                  "WAWebPaymentRequestMsgAction",
                                ).cancelOrDeclinePaymentRequest(n),
                              )
                            : n.type === o("WAWebMsgType").MSG_TYPE.PAYMENT &&
                              n.subtype === "send" &&
                              k.push(
                                o(
                                  "WAWebPaymentRequestMsgAction",
                                ).fulfillPaymentRequest(n),
                              );
                          var ae =
                            (oe = o("WAWebChatCollection").ChatCollection.get(
                              n.id.remote,
                            )) != null
                              ? oe
                              : r("WAWebNewsletterCollection").get(n.id.remote);
                          if (
                            (i.add === "search" && (n.search = !0),
                            o("WAWebMsgGetters").getIsUnreadType(n) &&
                              n.id.fromMe &&
                              n.ack === o("WAWebAck").ACK.CLOCK &&
                              (n.isSendFailure = !0),
                            n.errorCode ===
                              o("WAWebErrorType").SendFailureErrorCode
                                .EditWindowExpired && (n.isSendFailure = !0),
                            i.update !== !0 && R.push(n),
                            i.isHistory !== !0 &&
                              i.add !== "search" &&
                              ae &&
                              k.push(D(n, ae)),
                            n.ephemeralOutOfSync && (j++, K.length < 3))
                          ) {
                            var ie;
                            K.push(
                              "msgId=" +
                                n.id.toString() +
                                " chatId=" +
                                ((ie =
                                  ae == null ? void 0 : ae.id.toString()) !=
                                null
                                  ? ie
                                  : "unknown"),
                            );
                          }
                        }
                      },
                    );
                    return function (e) {
                      return a.apply(this, arguments);
                    };
                  })(),
                ),
              ),
              x > 0 &&
                (o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "getMsgUpdates: ",
                      " messages not revoked (non-group)",
                    ])),
                  x,
                ),
                o("WALogger").ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "getMsgUpdates: admin revoke was sent to ",
                      " non-group chats",
                    ])),
                  x,
                )),
              $ > 0 &&
                (o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "getMsgUpdates: ",
                      " messages not revoked (remote mismatch)",
                    ])),
                  $,
                ),
                o("WALogger").ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "getMsgUpdates: admin revoke group mismatch cnt=",
                      "",
                    ])),
                  $,
                )),
              P > 0 &&
                o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "getMsgUpdates: admin revoked ",
                      " messages => ",
                      "",
                    ])),
                  P,
                  N,
                ),
              M > 0 &&
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[system message] msg updates - ADD - ADMIN: ",
                      " messages",
                    ])),
                  M,
                ),
              w > 0 &&
                o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "getMsgUpdates: bot invoker revoked ",
                      " bot responses => ",
                      "",
                    ])),
                  w,
                  A,
                ),
              F > 0 &&
                o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "getMsgUpdates: sender revoked ",
                      " messages => ",
                      "",
                    ])),
                  F,
                  O,
                ),
              B > 0 &&
                o("WALogger").WARN(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "getMsgUpdates: sender revoke: ",
                      " sender mismatches => ",
                      "",
                    ])),
                  B,
                  W,
                ),
              q > 0 &&
                o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "unknown protocolMessage: ",
                      " messages => ",
                      "",
                    ])),
                  q,
                  U,
                ),
              V > 0 &&
                o("WALogger").WARN(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "model:Msg:handle:processMM: ",
                      " dup/overlap messages => ",
                      "",
                    ])),
                  V,
                  H,
                ),
              G > 0 &&
                o("WALogger").WARN(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "processMM: search->history ",
                      " msgs => ",
                      "",
                    ])),
                  G,
                  z,
                ),
              j > 0 &&
                o("WALogger").LOG(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "ephemeralOutOfSync: ",
                      " messages => ",
                      "",
                    ])),
                  j,
                  K,
                ),
              Q > 0 &&
                (o("WALogger").LOG(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "getMsgUpdates: el.id is not a MsgKey: ",
                      " of ",
                      " messages",
                    ])),
                  Q,
                  a.length,
                ),
                r("gkx")("26258") ||
                  o("WALogger")
                    .ERROR(
                      S ||
                        (S = babelHelpers.taggedTemplateLiteralLoose([
                          "getMsgUpdates: el.id is not a MsgKey",
                        ])),
                    )
                    .sendLogs("forgot-to-create-msgkey")),
              { filteredRecs: R, reorderRecs: E, updates: k }
            );
          },
        )),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      var t = function (t, n) {
        var e,
          o,
          a = t.index != null ? t.index : n,
          i = "" + a;
        return t.quickReplyButton
          ? new (r("WAWebTemplateButtonModel"))({
              id: i,
              displayText: t.quickReplyButton.displayText,
              selectionId: t.quickReplyButton.id,
              subtype: "quick_reply",
            })
          : t.callButton
            ? new (r("WAWebTemplateButtonModel"))({
                id: i,
                displayText: t.callButton.displayText,
                phoneNumber: t.callButton.phoneNumber,
                subtype: "call",
              })
            : new (r("WAWebTemplateButtonModel"))({
                id: i,
                displayText: (e = t.urlButton) == null ? void 0 : e.displayText,
                url: (o = t.urlButton) == null ? void 0 : o.url,
                subtype: "url",
              });
      };
      ((e.buttons = new (o(
        "WAWebTemplateButtonCollection",
      ).TemplateButtonCollection)()),
        e.buttons.add(e.hydratedButtons.map(t)));
    }
    function T(e) {
      var t = function (t) {
        var e = t.buttonId,
          n = t.buttonText;
        return new (r("WAWebButtonModel"))({
          id: e,
          displayText: n == null ? void 0 : n.displayText,
        });
      };
      ((e.replyButtons = new (o("WAWebButtonCollection").ButtonCollection)()),
        e.replyButtons.add(e.dynamicReplyButtons.map(t)));
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!e.isNewMsg || !e.recvFresh)
            return (
              o("WALogger")
                .WARN(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "[processLiveMessage] bad history msg ",
                      " t=",
                      " st=",
                      " new=",
                      " fresh=",
                      "",
                    ])),
                  e.id.toString(),
                  e.type,
                  e.subtype,
                  e.isNewMsg,
                  e.recvFresh,
                )
                .sendLogs("bad-process-live-message-call", { sampling: 0.001 }),
              (L || (L = n("Promise"))).resolve()
            );
          (e.type === o("WAWebMsgType").MSG_TYPE.GP2 &&
            e.subtype === "delete" &&
            ((t.isReadOnly = !0),
            o("WAWebPollsInvalidateChatPollMsgsAction").invalidateChatPollMsgs(
              t,
            ),
            o("WAWebInvalidateEventsAction").invalidateEventMsgsForChat(t)),
            yield o("WAWebEphemeralSyncResponse").syncEphemeralSetting(e, t));
        })),
        x.apply(this, arguments)
      );
    }
    l.default = E;
  },
  98,
);
