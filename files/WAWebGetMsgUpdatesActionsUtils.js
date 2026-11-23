__d(
  "WAWebGetMsgUpdatesActionsUtils",
  [
    "WALogger",
    "WATypeUtils",
    "WAWebAck",
    "WAWebBroadcastFanoutKeys",
    "WAWebButtonCollection",
    "WAWebButtonModel",
    "WAWebChatCollection",
    "WAWebCoexV2RevokeAuthorization",
    "WAWebCoexV2RevokeTarget",
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
    "WAWebMsgType",
    "WAWebNewsletterCollection",
    "WAWebPaymentRequestMsgAction",
    "WAWebPollsInvalidateChatPollMsgsAction",
    "WAWebRevoke",
    "WAWebRevokeMsgAction",
    "WAWebTemplateButtonCollection",
    "WAWebTemplateButtonModel",
    "WAWebViewMode.flow",
    "WAWebWid",
    "gkx",
    "nullthrows",
    "omit",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L;
    async function E(t) {
      var n = t.chatId,
        a = t.chatMsgsCollection,
        i = t.meta,
        l = t.msgObjs,
        L = [],
        E = [],
        x = [],
        $ = 0,
        P = 0,
        N = 0,
        M = [],
        w = 0,
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
        Q = [],
        X = 0,
        Y = self.performance.now();
      (await Promise.all(
        l.map(async function (t) {
          var l, s;
          (t.id instanceof r("WAWebMsgKey") ||
            (t.self != null,
            X++,
            (t.id = new (r("WAWebMsgKey"))({
              from: t.from,
              to: t.to,
              id: t.id,
              participant: t.participant,
              selfDir: t.self,
            }))),
            ((l = t.groupHistoryIndividualMessageInfo) == null
              ? void 0
              : l.bundleMessageKey) != null &&
              !(
                t.groupHistoryIndividualMessageInfo.bundleMessageKey instanceof
                r("WAWebMsgKey")
              ) &&
              (t.groupHistoryIndividualMessageInfo.bundleMessageKey = r(
                "WAWebMsgKey",
              ).from(t.groupHistoryIndividualMessageInfo.bundleMessageKey)),
            o("WATypeUtils").isString(n) &&
              r("WAWebWid").isBroadcast(n) &&
              delete t.broadcast,
            t.type === "ptt" &&
              !t.id.fromMe &&
              t.ack < o("WAWebAck").ACK.CLOCK &&
              (t.ack = o("WAWebAck").ACK.CLOCK),
            r("WAWebWid").isNewsletter(t.id.remote) ||
              (t.hydratedButtons != null && I(t),
              t.dynamicReplyButtons != null && T(t)),
            (s = o("WAWebInvisiblePlaceholderViewModeProcessor")
              .InvisiblePlaceholderViewModeProcessor.compatibleMessageTypes) !=
              null &&
              s.includes(t.type) &&
              o("WAWebMessageAssociationUIUtils").shouldHideParentMessage({
                parentMsg: t,
              }) &&
              (t.viewMode =
                o("WAWebViewMode.flow").ViewModeType.INVISIBLE_PLACEHOLDER));
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
                    $++;
                  else if (!r("WAWebWid").equals(u.id.remote, t.id.remote)) P++;
                  else {
                    (N++, M.length < 3 && M.push(u.id.toString()));
                    var f = new (o("WAWebMsgModel").Msg)(t),
                      g = r("nullthrows")(p);
                    if (o("WAWebMsgGetters").getIsGroupMsg(u)) {
                      var h = r("nullthrows")(
                          o("WAWebFrontendMsgGetters").getChat(u).groupMetadata,
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
                            actionType: o("WAWebGroupType").GROUP_ACTIONS.ADD,
                            participants: [
                              { id: y, isAdmin: !0, isSuperAdmin: !1 },
                            ],
                            reason: null,
                          };
                          w++;
                          var v = await o(
                            "WAWebGroupSystemMsg",
                          ).genGroupNotificationMsg({
                            meta: {
                              author: void 0,
                              chatId: o("WAWebFrontendMsgGetters").getChat(u)
                                .id,
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
                              handleSingleMsgOrigin: "handleGroupAction",
                            });
                        }
                        o("WAWebDBGroupParticipant")
                          .markGroupParticipantStale({
                            group: o("WAWebFrontendMsgGetters").getChat(u).id,
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
                  R,
                  Y = o("WAWebLidMigrationUtils").getAlternateMsgKey(
                    t.protocolMessageKey,
                  );
                if (
                  ((u =
                    (S =
                      (R = o("WAWebMsgCollection").MsgCollection.get(
                        t.protocolMessageKey,
                      )) != null
                        ? R
                        : Y != null
                          ? o("WAWebMsgCollection").MsgCollection.get(Y)
                          : null) != null
                      ? S
                      : o("WAWebCoexV2RevokeTarget").getCoexV2ReplyForRevokeKey(
                          t.protocolMessageKey,
                        )),
                  u)
                ) {
                  var J,
                    Z,
                    ee,
                    te = new (o("WAWebMsgModel").Msg)(t),
                    ne = (J = u) == null ? void 0 : J.botTargetSenderJid,
                    re = o("WAWebMsgGetters").getSender(te),
                    oe = o(
                      "WAWebCoexV2RevokeAuthorization",
                    ).getCoexV2RevokeAuthorization(
                      u.senderWithDevice,
                      u.metaFrom,
                      (Z = te.senderWithDevice) != null ? Z : re,
                      !1,
                    );
                  if (
                    oe == null &&
                    ne != null &&
                    (ee = u.id.participant) != null &&
                    ee.isBot() &&
                    r("WAWebWid").equals.apply(
                      r("WAWebWid"),
                      o("WAWebLidMigrationUtils").toCommonAddressingMode(
                        ne,
                        re,
                      ),
                    ) &&
                    re != null
                  )
                    (A++,
                      F.length < 3 && F.push(u.id.toString()),
                      o("WAWebRevokeMsgAction").revoke(u, {
                        msgKey: te.id,
                        subtype: te.subtype,
                        sender: re,
                        revokeTimestamp: te.t,
                      }));
                  else if (
                    re != null &&
                    (oe === !0 || (oe == null && k(u, te, re)))
                  ) {
                    if (
                      (O++,
                      B.length < 3 && B.push(u.id.toString()),
                      o("WAWebMsgGetters").getIsStatus(u))
                    ) {
                      var ae = u.getMsgChunk();
                      ae && ae.remove(u);
                    }
                    o("WAWebRevokeMsgAction").revoke(u, {
                      msgKey: te.id,
                      subtype: te.subtype,
                      sender: re,
                      revokeTimestamp: te.t,
                    });
                  } else
                    (W++,
                      q.length < 3 &&
                        q.push(te.id.toString() + " <> " + u.id.toString()));
                }
                break;
              }
              case "bot_request_welcome":
              case "bot_memu_onboarding":
              case "member_label":
              case "ai_media_collection":
              case "hatch_metadata_sync":
              case "biz_ai_metadata_sync":
                break;
              default:
                (U++, V.length < 3 && V.push(t.id.toString()));
                break;
            }
          else if (u && !o("WAWebFrontendMsgGetters").getAsRevoked(u)) {
            t.ack < u.ack && delete t.ack;
            for (var ie in t)
              Object.hasOwn(t, ie) &&
                typeof t[ie] == "undefined" &&
                delete t[ie];
            (u.type !== t.type && (t.subtype = t.subtype || void 0),
              i.isHistory === !0 && (t.isNewMsg = !1));
            var le = u.t ? r("omit")(t, ["t", "id", "from", "to"]) : t,
              se = u.applyUpdate(le).then(function () {
                return u;
              });
            if ((x.push(se), r("WAWebWid").isBroadcast(u.id.remote))) {
              var ue = o("WAWebBroadcastFanoutKeys").getBroadcastFanoutKeys(u);
              ue &&
                ue.forEach(function (e) {
                  var t = o("WAWebMsgCollection").MsgCollection.get(e);
                  t &&
                    x.push(
                      t.applyUpdate(le).then(function () {
                        return u;
                      }),
                    );
                });
            }
            i.isHistory === !0 && (u.recvFresh || a) && !u.search
              ? (H++,
                G.length < 3 &&
                  G.push((u.recvFresh ? "dup:" : "overlap:") + String(u.id)),
                E.push(u))
              : i.isHistory === !0 && u.search
                ? ((u.search = !1),
                  z++,
                  j.length < 3 && j.push(String(u.id)),
                  L.push({ id: u.id }))
                : i.add === "search" && L.push({ id: u.id });
          } else {
            var ce;
            t.subtype === "payment_action_request_declined" ||
            t.subtype === "payment_transaction_request_cancelled"
              ? x.push(
                  o(
                    "WAWebPaymentRequestMsgAction",
                  ).cancelOrDeclinePaymentRequest(t),
                )
              : t.type === o("WAWebMsgType").MSG_TYPE.PAYMENT &&
                t.subtype === "send" &&
                x.push(
                  o("WAWebPaymentRequestMsgAction").fulfillPaymentRequest(t),
                );
            var de =
              (ce = o("WAWebChatCollection").ChatCollection.get(t.id.remote)) !=
              null
                ? ce
                : r("WAWebNewsletterCollection").get(t.id.remote);
            if (
              (i.add === "search" && (t.search = !0),
              o("WAWebMsgGetters").getIsUnreadType(t) &&
                t.id.fromMe &&
                t.ack === o("WAWebAck").ACK.CLOCK &&
                (t.isSendFailure = !0),
              t.errorCode ===
                o("WAWebErrorType").SendFailureErrorCode.EditWindowExpired &&
                (t.isSendFailure = !0),
              i.update !== !0 && L.push(t),
              i.isHistory !== !0 &&
                i.add !== "search" &&
                de &&
                x.push(D(t, de)),
              t.ephemeralOutOfSync && (K++, Q.length < 3))
            ) {
              var me;
              Q.push(
                "msgId=" +
                  t.id.toString() +
                  " chatId=" +
                  ((me = de == null ? void 0 : de.id.toString()) != null
                    ? me
                    : "unknown"),
              );
            }
          }
        }),
      ),
        $ > 0 &&
          (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "getMsgUpdates: ",
                " messages not revoked (non-group)",
              ])),
            $,
          ),
          o("WALogger").ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "getMsgUpdates: admin revoke was sent to ",
                " non-group chats",
              ])),
            $,
          )),
        P > 0 &&
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "getMsgUpdates: ",
                " messages not revoked (remote mismatch)",
              ])),
            P,
          ),
          o("WALogger").ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "getMsgUpdates: admin revoke group mismatch cnt=",
                "",
              ])),
            P,
          )),
        N > 0 &&
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "getMsgUpdates: admin revoked ",
                " messages => ",
                "",
              ])),
            N,
            M,
          ),
        w > 0 &&
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[system message] msg updates - ADD - ADMIN: ",
                " messages",
              ])),
            w,
          ),
        A > 0 &&
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "getMsgUpdates: bot invoker revoked ",
                " bot responses => ",
                "",
              ])),
            A,
            F,
          ),
        O > 0 &&
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "getMsgUpdates: sender revoked ",
                " messages => ",
                "",
              ])),
            O,
            B,
          ),
        W > 0 &&
          o("WALogger").WARN(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "getMsgUpdates: sender revoke: ",
                " sender mismatches => ",
                "",
              ])),
            W,
            q,
          ),
        U > 0 &&
          o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "unknown protocolMessage: ",
                " messages => ",
                "",
              ])),
            U,
            V,
          ),
        H > 0 &&
          o("WALogger").WARN(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "model:Msg:handle:processMM: ",
                " dup/overlap messages => ",
                "",
              ])),
            H,
            G,
          ),
        z > 0 &&
          o("WALogger").WARN(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "processMM: search->history ",
                " msgs => ",
                "",
              ])),
            z,
            j,
          ),
        K > 0 &&
          o("WALogger").LOG(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "ephemeralOutOfSync: ",
                " messages => ",
                "",
              ])),
            K,
            Q,
          ),
        X > 0 &&
          (o("WALogger").LOG(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "getMsgUpdates: el.id is not a MsgKey: ",
                " of ",
                " messages",
              ])),
            X,
            l.length,
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
      var J = self.performance.now() - Y;
      return (
        J >= 500 &&
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
            l.length,
            Math.round(J),
            L.length,
            E.length,
            x.length,
            K,
          ),
        { filteredRecs: L, reorderRecs: E, updates: x }
      );
    }
    function k(e, t, n) {
      var a;
      return (
        r("WAWebWid").equals.apply(
          r("WAWebWid"),
          o("WAWebLidMigrationUtils").toCommonAddressingMode(
            o("WAWebMsgGetters").getIsGroupStatus(e)
              ? e.id.participant
              : o("WAWebMsgGetters").getSender(e),
            n,
          ),
        ) ||
        o("WAWebRevoke").isMyRevokeOfHatchAgentReply({
          revokeKey: t.id,
          revoker: (a = t.senderWithDevice) != null ? a : n,
          targetKey: e.id,
        })
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
      ((e.replyButtons = new (r("WAWebButtonCollection"))()),
        e.replyButtons.add(e.dynamicReplyButtons.map(t)));
    }
    async function D(e, t) {
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
