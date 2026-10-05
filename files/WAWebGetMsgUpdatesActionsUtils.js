__d(
  "WAWebGetMsgUpdatesActionsUtils",
  [
    "Promise",
    "WALogger",
    "WATypeUtils",
    "WAWebAck",
    "WAWebButtonCollection",
    "WAWebButtonModel",
    "WAWebChatCollection",
    "WAWebCoexV2RevokeAuthorization",
    "WAWebDBGroupParticipant",
    "WAWebEphemeralSyncResponse",
    "WAWebErrorType",
    "WAWebFrontendMsgGetters",
    "WAWebGroupSystemMsg",
    "WAWebGroupType",
    "WAWebHandleSingleMsgWorkerCompatible",
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
    "nullthrows",
    "omit",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E;
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.chatId,
            i = t.chatMsgsCollection,
            l = t.meta,
            L = t.msgObjs,
            k = [],
            I = [],
            $ = [],
            P = 0,
            N = 0,
            M = 0,
            w = [],
            A = 0,
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
            Q = 0,
            X = [],
            Y = 0,
            J = self.performance.now();
          (yield (E || (E = n("Promise"))).all(
            L.map(
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    var n, s;
                    (t.id instanceof r("WAWebMsgKey") ||
                      (t.self != null,
                      Y++,
                      (t.id = new (r("WAWebMsgKey"))({
                        from: t.from,
                        to: t.to,
                        id: t.id,
                        participant: t.participant,
                        selfDir: t.self,
                      }))),
                      ((n = t.groupHistoryIndividualMessageInfo) == null
                        ? void 0
                        : n.bundleMessageKey) != null &&
                        !(
                          t.groupHistoryIndividualMessageInfo
                            .bundleMessageKey instanceof r("WAWebMsgKey")
                        ) &&
                        (t.groupHistoryIndividualMessageInfo.bundleMessageKey =
                          r("WAWebMsgKey").from(
                            t.groupHistoryIndividualMessageInfo
                              .bundleMessageKey,
                          )),
                      o("WATypeUtils").isString(a) &&
                        r("WAWebWid").isBroadcast(a) &&
                        delete t.broadcast,
                      t.type === "ptt" &&
                        !t.id.fromMe &&
                        t.ack < o("WAWebAck").ACK.CLOCK &&
                        (t.ack = o("WAWebAck").ACK.CLOCK),
                      r("WAWebWid").isNewsletter(t.id.remote) ||
                        (t.hydratedButtons != null && T(t),
                        t.dynamicReplyButtons != null && D(t)),
                      (s = o("WAWebInvisiblePlaceholderViewModeProcessor")
                        .InvisiblePlaceholderViewModeProcessor
                        .compatibleMessageTypes) != null &&
                        s.includes(t.type) &&
                        o(
                          "WAWebMessageAssociationUIUtils",
                        ).shouldHideParentMessage({ parentMsg: t }) &&
                        (t.viewMode =
                          o(
                            "WAWebViewMode.flow",
                          ).ViewModeType.INVISIBLE_PLACEHOLDER));
                    var u = o("WAWebMsgCollection").MsgCollection.get(t.id);
                    if (
                      t.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
                      t.subtype !== "ephemeral_setting" &&
                      t.subtype !== "share_phone_number" &&
                      t.subtype !== "event_edit_decrypted" &&
                      t.subtype !== "status_mention_message" &&
                      t.subtype !== "status_group_mention_message"
                    )
                      switch (t.subtype) {
                        case "admin_revoke": {
                          var c,
                            d = o("WAWebLidMigrationUtils").getAlternateMsgKey(
                              t.protocolMessageKey,
                            );
                          if (
                            ((u =
                              (c = o("WAWebMsgCollection").MsgCollection.get(
                                t.protocolMessageKey,
                              )) != null
                                ? c
                                : d != null
                                  ? o("WAWebMsgCollection").MsgCollection.get(d)
                                  : null),
                            u)
                          ) {
                            var m,
                              p = o("WAWebMsgGetters").getSender(t),
                              _ = o(
                                "WAWebCoexV2RevokeAuthorization",
                              ).getCoexV2RevokeAuthorization(
                                u.senderWithDevice,
                                u.metaFrom,
                                (m = t.senderWithDevice) != null ? m : p,
                                !0,
                              );
                            if (
                              _ === !1 ||
                              (!o("WAWebMsgGetters").getIsGroupMsg(u) &&
                                !o("WAWebMsgGetters").getIsNewsletterMsg(u))
                            )
                              P++;
                            else if (
                              !r("WAWebWid").equals(u.id.remote, t.id.remote)
                            )
                              N++;
                            else {
                              (M++, w.length < 3 && w.push(u.id.toString()));
                              var f = new (o("WAWebMsgModel").Msg)(t),
                                g = r("nullthrows")(p);
                              if (o("WAWebMsgGetters").getIsGroupMsg(u)) {
                                var h = r("nullthrows")(
                                    o("WAWebFrontendMsgGetters").getChat(u)
                                      .groupMetadata,
                                  ),
                                  y =
                                    h.isLidAddressingMode === !0
                                      ? o("WAWebLidMigrationUtils").toLid(g)
                                      : o("WAWebLidMigrationUtils").toPn(g),
                                  C = y != null ? h.participants.get(y) : null;
                                if ((!C || !C.isAdmin) && y != null) {
                                  if (
                                    (h.participants.add(
                                      { id: y, isAdmin: !0 },
                                      { merge: !0 },
                                    ),
                                    !C)
                                  ) {
                                    var b = {
                                      actionType:
                                        o("WAWebGroupType").GROUP_ACTIONS.ADD,
                                      participants: [
                                        {
                                          id: y,
                                          isAdmin: !0,
                                          isSuperAdmin: !1,
                                        },
                                      ],
                                      reason: null,
                                    };
                                    A++;
                                    var v = yield o(
                                      "WAWebGroupSystemMsg",
                                    ).genGroupNotificationMsg({
                                      meta: {
                                        author: void 0,
                                        chatId: o(
                                          "WAWebFrontendMsgGetters",
                                        ).getChat(u).id,
                                        ts: f.t,
                                      },
                                      action: b,
                                      dbIsStale: !0,
                                    });
                                    v &&
                                      o(
                                        "WAWebHandleSingleMsgWorkerCompatible",
                                      ).handleSingleMsg({
                                        chatId: v.from,
                                        newMsg: v,
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
                                msgKey: f.id,
                                subtype: f.subtype,
                                sender: g,
                                revokeTimestamp: f.t,
                                viewMode: f.viewMode,
                              });
                            }
                          }
                          break;
                        }
                        case "sender_revoke": {
                          var S,
                            R = o("WAWebLidMigrationUtils").getAlternateMsgKey(
                              t.protocolMessageKey,
                            );
                          if (
                            ((u =
                              (S = o("WAWebMsgCollection").MsgCollection.get(
                                t.protocolMessageKey,
                              )) != null
                                ? S
                                : R != null
                                  ? o("WAWebMsgCollection").MsgCollection.get(R)
                                  : null),
                            u)
                          ) {
                            var L,
                              E,
                              J,
                              Z = new (o("WAWebMsgModel").Msg)(t),
                              ee =
                                (L = u) == null ? void 0 : L.botTargetSenderJid,
                              te = o("WAWebMsgGetters").getSender(Z),
                              ne = o(
                                "WAWebCoexV2RevokeAuthorization",
                              ).getCoexV2RevokeAuthorization(
                                u.senderWithDevice,
                                u.metaFrom,
                                (E = Z.senderWithDevice) != null ? E : te,
                                !1,
                              );
                            if (
                              ne == null &&
                              ee != null &&
                              (J = u.id.participant) != null &&
                              J.isBot() &&
                              r("WAWebWid").equals.apply(
                                r("WAWebWid"),
                                o(
                                  "WAWebLidMigrationUtils",
                                ).toCommonAddressingMode(ee, te),
                              ) &&
                              te != null
                            )
                              (F++,
                                O.length < 3 && O.push(u.id.toString()),
                                o("WAWebRevokeMsgAction").revoke(u, {
                                  msgKey: Z.id,
                                  subtype: Z.subtype,
                                  sender: te,
                                  revokeTimestamp: Z.t,
                                }));
                            else if (
                              te != null &&
                              (ne === !0 ||
                                (ne == null &&
                                  r("WAWebWid").equals.apply(
                                    r("WAWebWid"),
                                    o(
                                      "WAWebLidMigrationUtils",
                                    ).toCommonAddressingMode(
                                      o("WAWebMsgGetters").getIsGroupStatus(u)
                                        ? u.id.participant
                                        : o("WAWebMsgGetters").getSender(u),
                                      te,
                                    ),
                                  )))
                            ) {
                              if (
                                (B++,
                                W.length < 3 && W.push(u.id.toString()),
                                o("WAWebMsgGetters").getIsStatus(u))
                              ) {
                                var re = u.getMsgChunk();
                                re && re.remove(u);
                              }
                              o("WAWebRevokeMsgAction").revoke(u, {
                                msgKey: Z.id,
                                subtype: Z.subtype,
                                sender: te,
                                revokeTimestamp: Z.t,
                              });
                            } else
                              (q++,
                                U.length < 3 &&
                                  U.push(
                                    Z.id.toString() + " <> " + u.id.toString(),
                                  ));
                          }
                          break;
                        }
                        case "bot_request_welcome":
                        case "bot_memu_onboarding":
                        case "member_label":
                        case "ai_media_collection":
                        case "hatch_metadata_sync":
                          break;
                        default:
                          (V++, H.length < 3 && H.push(t.id.toString()));
                          break;
                      }
                    else if (
                      u &&
                      !o("WAWebFrontendMsgGetters").getAsRevoked(u)
                    ) {
                      t.ack < u.ack && delete t.ack;
                      for (var oe in t)
                        Object.hasOwn(t, oe) &&
                          typeof t[oe] == "undefined" &&
                          delete t[oe];
                      (u.type !== t.type && (t.subtype = t.subtype || void 0),
                        l.isHistory === !0 && (t.isNewMsg = !1));
                      var ae = u.t
                          ? r("omit")(t, ["t", "id", "from", "to"])
                          : t,
                        ie = u.applyUpdate(ae).then(function () {
                          return u;
                        });
                      if (
                        ($.push(ie), r("WAWebWid").isBroadcast(u.id.remote))
                      ) {
                        var le =
                          o("WAWebMsgModelUtils").getBroadcastFanoutKeys(u);
                        le &&
                          le.forEach(function (e) {
                            var t =
                              o("WAWebMsgCollection").MsgCollection.get(e);
                            t &&
                              $.push(
                                t.applyUpdate(ae).then(function () {
                                  return u;
                                }),
                              );
                          });
                      }
                      l.isHistory === !0 && (u.recvFresh || i) && !u.search
                        ? (G++,
                          z.length < 3 &&
                            z.push(
                              (u.recvFresh ? "dup:" : "overlap:") +
                                String(u.id),
                            ),
                          I.push(u))
                        : l.isHistory === !0 && u.search
                          ? ((u.search = !1),
                            j++,
                            K.length < 3 && K.push(String(u.id)),
                            k.push({ id: u.id }))
                          : l.add === "search" && k.push({ id: u.id });
                    } else {
                      var se;
                      t.subtype === "payment_action_request_declined" ||
                      t.subtype === "payment_transaction_request_cancelled"
                        ? $.push(
                            o(
                              "WAWebPaymentRequestMsgAction",
                            ).cancelOrDeclinePaymentRequest(t),
                          )
                        : t.type === o("WAWebMsgType").MSG_TYPE.PAYMENT &&
                          t.subtype === "send" &&
                          $.push(
                            o(
                              "WAWebPaymentRequestMsgAction",
                            ).fulfillPaymentRequest(t),
                          );
                      var ue =
                        (se = o("WAWebChatCollection").ChatCollection.get(
                          t.id.remote,
                        )) != null
                          ? se
                          : r("WAWebNewsletterCollection").get(t.id.remote);
                      if (
                        (l.add === "search" && (t.search = !0),
                        o("WAWebMsgGetters").getIsUnreadType(t) &&
                          t.id.fromMe &&
                          t.ack === o("WAWebAck").ACK.CLOCK &&
                          (t.isSendFailure = !0),
                        t.errorCode ===
                          o("WAWebErrorType").SendFailureErrorCode
                            .EditWindowExpired && (t.isSendFailure = !0),
                        l.update !== !0 && k.push(t),
                        l.isHistory !== !0 &&
                          l.add !== "search" &&
                          ue &&
                          $.push(x(t, ue)),
                        t.ephemeralOutOfSync && (Q++, X.length < 3))
                      ) {
                        var ce;
                        X.push(
                          "msgId=" +
                            t.id.toString() +
                            " chatId=" +
                            ((ce = ue == null ? void 0 : ue.id.toString()) !=
                            null
                              ? ce
                              : "unknown"),
                        );
                      }
                    }
                  },
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            ),
          ),
            P > 0 &&
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "getMsgUpdates: ",
                    " messages not revoked (non-group)",
                  ])),
                P,
              ),
              o("WALogger").ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "getMsgUpdates: admin revoke was sent to ",
                    " non-group chats",
                  ])),
                P,
              )),
            N > 0 &&
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "getMsgUpdates: ",
                    " messages not revoked (remote mismatch)",
                  ])),
                N,
              ),
              o("WALogger").ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "getMsgUpdates: admin revoke group mismatch cnt=",
                    "",
                  ])),
                N,
              )),
            M > 0 &&
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "getMsgUpdates: admin revoked ",
                    " messages => ",
                    "",
                  ])),
                M,
                w,
              ),
            A > 0 &&
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[system message] msg updates - ADD - ADMIN: ",
                    " messages",
                  ])),
                A,
              ),
            F > 0 &&
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "getMsgUpdates: bot invoker revoked ",
                    " bot responses => ",
                    "",
                  ])),
                F,
                O,
              ),
            B > 0 &&
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "getMsgUpdates: sender revoked ",
                    " messages => ",
                    "",
                  ])),
                B,
                W,
              ),
            q > 0 &&
              o("WALogger").WARN(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "getMsgUpdates: sender revoke: ",
                    " sender mismatches => ",
                    "",
                  ])),
                q,
                U,
              ),
            V > 0 &&
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "unknown protocolMessage: ",
                    " messages => ",
                    "",
                  ])),
                V,
                H,
              ),
            G > 0 &&
              o("WALogger").WARN(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "model:Msg:handle:processMM: ",
                    " dup/overlap messages => ",
                    "",
                  ])),
                G,
                z,
              ),
            j > 0 &&
              o("WALogger").WARN(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "processMM: search->history ",
                    " msgs => ",
                    "",
                  ])),
                j,
                K,
              ),
            Q > 0 &&
              o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "ephemeralOutOfSync: ",
                    " messages => ",
                    "",
                  ])),
                Q,
                X,
              ),
            Y > 0 &&
              (o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "getMsgUpdates: el.id is not a MsgKey: ",
                    " of ",
                    " messages",
                  ])),
                Y,
                L.length,
              ),
              r("gkx")("26258") ||
                o("WALogger")
                  .ERROR(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "getMsgUpdates: el.id is not a MsgKey",
                      ])),
                  )
                  .sendLogs("forgot-to-create-msgkey")));
          var Z = self.performance.now() - J;
          return (
            Z >= 500 &&
              o("WALogger").LOG(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "[getMsgUpdates] ",
                    " msgs ",
                    "ms filt=",
                    " reord=",
                    " upd=",
                    " oos=",
                    "",
                  ])),
                L.length,
                Math.round(Z),
                k.length,
                I.length,
                $.length,
                Q,
              ),
            { filteredRecs: k, reorderRecs: I, updates: $ }
          );
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
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
    function D(e) {
      var t = function (t) {
        var e = t.buttonId,
          n = t.buttonText;
        return new (r("WAWebButtonModel"))({
          id: e,
          displayText: n == null ? void 0 : n.displayText,
        });
      };
      ((e.replyButtons = new (r("WAWebButtonCollection"))()),
        e.replyButtons.add(e.dynamicReplyButtons.map(t)));
    }
    function x(e, t) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!e.isNewMsg || !e.recvFresh)
            return (
              o("WALogger")
                .WARN(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
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
              (E || (E = n("Promise"))).resolve()
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
        $.apply(this, arguments)
      );
    }
    l.default = k;
  },
  98,
);
