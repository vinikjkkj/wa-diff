__d(
  "WAWebGetMsgUpdatesActionsUtils",
  [
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
    "gkx",
    "omit",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L;
    async function E(t, n, a, i) {
      var l = [],
        L = [],
        E = [],
        D = 0,
        x = 0,
        $ = 0,
        P = [],
        N = 0,
        M = 0,
        w = [],
        A = 0,
        F = [],
        O = 0,
        B = [],
        W = 0,
        q = [],
        U = 0,
        V = [],
        H = 0,
        G = [],
        z = 0,
        j = [],
        K = 0,
        Q = self.performance.now();
      (await Promise.all(
        n.map(async function (n) {
          var s, u;
          (n.id instanceof r("WAWebMsgKey") ||
            (n.self != null && r("vulture")("X8gT5EynTHw_I5RNAG6VZDmVN0Q="),
            K++,
            (n.id = new (r("WAWebMsgKey"))({
              from: n.from,
              to: n.to,
              id: n.id,
              participant: n.participant,
              selfDir: n.self,
            }))),
            ((s = n.groupHistoryIndividualMessageInfo) == null
              ? void 0
              : s.bundleMessageKey) != null &&
              !(
                n.groupHistoryIndividualMessageInfo.bundleMessageKey instanceof
                r("WAWebMsgKey")
              ) &&
              (n.groupHistoryIndividualMessageInfo.bundleMessageKey = r(
                "WAWebMsgKey",
              ).from(n.groupHistoryIndividualMessageInfo.bundleMessageKey)),
            o("WATypeUtils").isString(t) &&
              r("WAWebWid").isBroadcast(t) &&
              delete n.broadcast,
            n.type === "ptt" &&
              !n.id.fromMe &&
              n.ack < o("WAWebAck").ACK.CLOCK &&
              (n.ack = o("WAWebAck").ACK.CLOCK),
            n.hydratedButtons != null && k(n),
            n.dynamicReplyButtons != null && I(n),
            (u = o("WAWebInvisiblePlaceholderViewModeProcessor")
              .InvisiblePlaceholderViewModeProcessor.compatibleMessageTypes) !=
              null &&
              u.includes(n.type) &&
              o("WAWebMessageAssociationUIUtils").shouldHideParentMessage({
                parentMsg: n,
              }) &&
              (n.viewMode =
                o("WAWebViewMode.flow").ViewModeType.INVISIBLE_PLACEHOLDER));
          var c = o("WAWebMsgCollection").MsgCollection.get(n.id);
          if (
            n.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
            n.subtype !== "ephemeral_setting" &&
            n.subtype !== "share_phone_number" &&
            n.subtype !== "event_edit_decrypted" &&
            n.subtype !== "status_mention_message" &&
            n.subtype !== "status_group_mention_message"
          )
            switch (n.subtype) {
              case "admin_revoke": {
                var d,
                  m = o("WAWebLidMigrationUtils").getAlternateMsgKey(
                    n.protocolMessageKey,
                  );
                if (
                  ((c =
                    (d = o("WAWebMsgCollection").MsgCollection.get(
                      n.protocolMessageKey,
                    )) != null
                      ? d
                      : m != null
                        ? o("WAWebMsgCollection").MsgCollection.get(m)
                        : null),
                  c)
                )
                  if (
                    !o("WAWebMsgGetters").getIsGroupMsg(c) &&
                    !o("WAWebMsgGetters").getIsNewsletterMsg(c)
                  )
                    D++;
                  else if (!r("WAWebWid").equals(c.id.remote, n.id.remote)) x++;
                  else {
                    ($++, P.length < 3 && P.push(c.id.toString()));
                    var p = new (o("WAWebMsgModel").Msg)(n),
                      _ = r("WANullthrows")(o("WAWebMsgGetters").getSender(p));
                    if (o("WAWebMsgGetters").getIsGroupMsg(c)) {
                      var f = r("WANullthrows")(
                          o("WAWebFrontendMsgGetters").getChat(c).groupMetadata,
                        ),
                        g =
                          f.isLidAddressingMode === !0
                            ? o("WAWebLidMigrationUtils").toLid(_)
                            : o("WAWebLidMigrationUtils").toPn(_),
                        h = g != null ? f.participants.get(g) : null;
                      if ((!h || !h.isAdmin) && g != null) {
                        if (
                          (f.participants.add(
                            { id: g, isAdmin: !0 },
                            { merge: !0 },
                          ),
                          !h)
                        ) {
                          var y = {
                            actionType: o("WAWebGroupType").GROUP_ACTIONS.ADD,
                            participants: [
                              { id: g, isAdmin: !0, isSuperAdmin: !1 },
                            ],
                            reason: null,
                          };
                          N++;
                          var C = await o(
                            "WAWebGroupSystemMsg",
                          ).genGroupNotificationMsg({
                            meta: {
                              author: void 0,
                              chatId: o("WAWebFrontendMsgGetters").getChat(c)
                                .id,
                              ts: p.t,
                            },
                            action: y,
                            dbIsStale: !0,
                          });
                          C &&
                            o(
                              "WAWebHandleSingleMsgWorkerCompatible",
                            ).handleSingleMsg({
                              chatId: C.from,
                              newMsg: C,
                              handleSingleMsgOrigin: "handleGroupAction",
                            });
                        }
                        o("WAWebDBGroupParticipant")
                          .markGroupParticipantStale({
                            group: o("WAWebFrontendMsgGetters").getChat(c).id,
                          })
                          .catch(function () {
                            o("WALogger")
                              .ERROR(
                                e ||
                                  (e = babelHelpers.taggedTemplateLiteralLoose([
                                    "getMsgUpdates: failed to mark group participant as stale",
                                  ])),
                              )
                              .sendLogs(
                                "failed-to-mark-group-participant-as-stale",
                              );
                          });
                      }
                    }
                    o("WAWebRevokeMsgAction").revoke(c, {
                      msgKey: p.id,
                      subtype: p.subtype,
                      sender: _,
                      revokeTimestamp: p.t,
                    });
                  }
                break;
              }
              case "sender_revoke": {
                var b,
                  v = o("WAWebLidMigrationUtils").getAlternateMsgKey(
                    n.protocolMessageKey,
                  );
                if (
                  ((c =
                    (b = o("WAWebMsgCollection").MsgCollection.get(
                      n.protocolMessageKey,
                    )) != null
                      ? b
                      : v != null
                        ? o("WAWebMsgCollection").MsgCollection.get(v)
                        : null),
                  c)
                ) {
                  var S,
                    R,
                    Q = new (o("WAWebMsgModel").Msg)(n),
                    X = (S = c) == null ? void 0 : S.botTargetSenderJid,
                    Y = o("WAWebMsgGetters").getSender(Q);
                  if (
                    X != null &&
                    (R = c.id.participant) != null &&
                    R.isBot() &&
                    r("WAWebWid").equals.apply(
                      r("WAWebWid"),
                      o("WAWebLidMigrationUtils").toCommonAddressingMode(X, Y),
                    ) &&
                    Y != null
                  )
                    (M++,
                      w.length < 3 && w.push(c.id.toString()),
                      o("WAWebRevokeMsgAction").revoke(c, {
                        msgKey: Q.id,
                        subtype: Q.subtype,
                        sender: Y,
                        revokeTimestamp: Q.t,
                      }));
                  else if (
                    r("WAWebWid").equals.apply(
                      r("WAWebWid"),
                      o("WAWebLidMigrationUtils").toCommonAddressingMode(
                        o("WAWebMsgGetters").getIsGroupStatus(c)
                          ? c.id.participant
                          : o("WAWebMsgGetters").getSender(c),
                        Y,
                      ),
                    ) &&
                    Y != null
                  ) {
                    if (
                      (A++,
                      F.length < 3 && F.push(c.id.toString()),
                      o("WAWebMsgGetters").getIsStatus(c))
                    ) {
                      var J = c.getMsgChunk();
                      J && J.remove(c);
                    }
                    o("WAWebRevokeMsgAction").revoke(c, {
                      msgKey: Q.id,
                      subtype: Q.subtype,
                      sender: Y,
                      revokeTimestamp: Q.t,
                    });
                  } else
                    (O++,
                      B.length < 3 &&
                        B.push(Q.id.toString() + " <> " + c.id.toString()));
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
                (W++, q.length < 3 && q.push(n.id.toString()));
                break;
            }
          else if (c && !o("WAWebFrontendMsgGetters").getAsRevoked(c)) {
            n.ack < c.ack && delete n.ack;
            for (var Z in n)
              Object.prototype.hasOwnProperty.call(n, Z) &&
                typeof n[Z] == "undefined" &&
                delete n[Z];
            (c.type !== n.type && (n.subtype = n.subtype || void 0),
              a.isHistory === !0 && (n.isNewMsg = !1));
            var ee = c.t ? r("omit")(n, ["t", "id", "from", "to"]) : n,
              te = c.applyUpdate(ee).then(function () {
                return c;
              });
            if ((E.push(te), r("WAWebWid").isBroadcast(c.id.remote))) {
              var ne = o("WAWebMsgModelUtils").getBroadcastFanoutKeys(c);
              ne &&
                ne.forEach(function (e) {
                  var t = o("WAWebMsgCollection").MsgCollection.get(e);
                  t &&
                    E.push(
                      t.applyUpdate(ee).then(function () {
                        return c;
                      }),
                    );
                });
            }
            a.isHistory === !0 && (c.recvFresh || i) && !c.search
              ? (U++,
                V.length < 3 &&
                  V.push((c.recvFresh ? "dup:" : "overlap:") + String(c.id)),
                L.push(c))
              : a.isHistory === !0 && c.search
                ? ((c.search = !1),
                  H++,
                  G.length < 3 && G.push(String(c.id)),
                  l.push({ id: c.id }))
                : a.add === "search" && l.push({ id: c.id });
          } else {
            var re;
            n.subtype === "payment_action_request_declined" ||
            n.subtype === "payment_transaction_request_cancelled"
              ? E.push(
                  o(
                    "WAWebPaymentRequestMsgAction",
                  ).cancelOrDeclinePaymentRequest(n),
                )
              : n.type === o("WAWebMsgType").MSG_TYPE.PAYMENT &&
                n.subtype === "send" &&
                E.push(
                  o("WAWebPaymentRequestMsgAction").fulfillPaymentRequest(n),
                );
            var oe =
              (re = o("WAWebChatCollection").ChatCollection.get(n.id.remote)) !=
              null
                ? re
                : r("WAWebNewsletterCollection").get(n.id.remote);
            if (
              (a.add === "search" && (n.search = !0),
              o("WAWebMsgGetters").getIsUnreadType(n) &&
                n.id.fromMe &&
                n.ack === o("WAWebAck").ACK.CLOCK &&
                (n.isSendFailure = !0),
              n.errorCode ===
                o("WAWebErrorType").SendFailureErrorCode.EditWindowExpired &&
                (n.isSendFailure = !0),
              a.update !== !0 && l.push(n),
              a.isHistory !== !0 &&
                a.add !== "search" &&
                oe &&
                E.push(T(n, oe)),
              n.ephemeralOutOfSync && (z++, j.length < 3))
            ) {
              var ae;
              j.push(
                "msgId=" +
                  n.id.toString() +
                  " chatId=" +
                  ((ae = oe == null ? void 0 : oe.id.toString()) != null
                    ? ae
                    : "unknown"),
              );
            }
          }
        }),
      ),
        D > 0 &&
          (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "getMsgUpdates: ",
                " messages not revoked (non-group)",
              ])),
            D,
          ),
          o("WALogger").ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "getMsgUpdates: admin revoke was sent to ",
                " non-group chats",
              ])),
            D,
          )),
        x > 0 &&
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "getMsgUpdates: ",
                " messages not revoked (remote mismatch)",
              ])),
            x,
          ),
          o("WALogger").ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "getMsgUpdates: admin revoke group mismatch cnt=",
                "",
              ])),
            x,
          )),
        $ > 0 &&
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "getMsgUpdates: admin revoked ",
                " messages => ",
                "",
              ])),
            $,
            P,
          ),
        N > 0 &&
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[system message] msg updates - ADD - ADMIN: ",
                " messages",
              ])),
            N,
          ),
        M > 0 &&
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "getMsgUpdates: bot invoker revoked ",
                " bot responses => ",
                "",
              ])),
            M,
            w,
          ),
        A > 0 &&
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "getMsgUpdates: sender revoked ",
                " messages => ",
                "",
              ])),
            A,
            F,
          ),
        O > 0 &&
          o("WALogger").WARN(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "getMsgUpdates: sender revoke: ",
                " sender mismatches => ",
                "",
              ])),
            O,
            B,
          ),
        W > 0 &&
          o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "unknown protocolMessage: ",
                " messages => ",
                "",
              ])),
            W,
            q,
          ),
        U > 0 &&
          o("WALogger").WARN(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "model:Msg:handle:processMM: ",
                " dup/overlap messages => ",
                "",
              ])),
            U,
            V,
          ),
        H > 0 &&
          o("WALogger").WARN(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "processMM: search->history ",
                " msgs => ",
                "",
              ])),
            H,
            G,
          ),
        z > 0 &&
          o("WALogger").LOG(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "ephemeralOutOfSync: ",
                " messages => ",
                "",
              ])),
            z,
            j,
          ),
        K > 0 &&
          (o("WALogger").LOG(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "getMsgUpdates: el.id is not a MsgKey: ",
                " of ",
                " messages",
              ])),
            K,
            n.length,
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
      var X = self.performance.now() - Q;
      return (
        X >= 500 &&
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
            n.length,
            Math.round(X),
            l.length,
            L.length,
            E.length,
            z,
          ),
        { filteredRecs: l, reorderRecs: L, updates: E }
      );
    }
    function k(e) {
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
    function I(e) {
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
    async function T(e, t) {
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
          Promise.resolve()
        );
      (e.type === o("WAWebMsgType").MSG_TYPE.GP2 &&
        e.subtype === "delete" &&
        ((t.isReadOnly = !0),
        o("WAWebPollsInvalidateChatPollMsgsAction").invalidateChatPollMsgs(t),
        o("WAWebInvalidateEventsAction").invalidateEventMsgsForChat(t)),
        await o("WAWebEphemeralSyncResponse").syncEphemeralSetting(e, t));
    }
    l.default = E;
  },
  98,
);
