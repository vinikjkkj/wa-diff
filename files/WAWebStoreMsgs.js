__d(
  "WAWebStoreMsgs",
  [
    "WALogger",
    "WAWebAck",
    "WAWebAddonGatingUtils",
    "WAWebAddonProcessMsgs",
    "WAWebAddonProcessMsgsUtils",
    "WAWebApiFilterAndReplaceMessages",
    "WAWebApiOrphanRevoke",
    "WAWebBackendApi",
    "WAWebBackendEventBusWorkerCompatible",
    "WAWebBizCoexGatingUtils",
    "WAWebCastToReactionMsg",
    "WAWebCheckUpdateOrphanReactions",
    "WAWebCommonMsgUtils",
    "WAWebCurrentUser",
    "WAWebDBAddOnProviders",
    "WAWebDBMessageBulkHelper",
    "WAWebDBMessageSerialization",
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebDBProcessGroupInviteMsgs",
    "WAWebDBProcessPaymentMessages",
    "WAWebDBProcessPollUpdateMsgs",
    "WAWebDBProcessReactionsMsgs",
    "WAWebDBProcessReplyMsgs",
    "WAWebDBReplaceUnknownAssociations",
    "WAWebDBStoreMessage",
    "WAWebDBStoreRevokeMsgs",
    "WAWebDBThreadMetadataBulkHelper",
    "WAWebDeriveViewRepliesThreadIdForIncomingMsgs",
    "WAWebHandleForMessageRange",
    "WAWebHandlePlaceholderWam",
    "WAWebLinkify",
    "WAWebMessageAssociationGatingUtils",
    "WAWebMessageAssociationUIUpdateFromStorage",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebProcessMessageAssociationMessages",
    "WAWebSchemaMessage",
    "WAWebStoreOrphans",
    "compactMap",
    "getErrorSafe",
    "gkx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f;
    async function g(e) {
      await o("WAWebSchemaMessage")
        .getMessageTable()
        .bulkRemove(
          e.map(function (e) {
            return e.id.toString();
          }),
        );
    }
    async function h(t) {
      if (t.length !== 0)
        try {
          var n = await b(t),
            a = r("compactMap")(Object.entries(n), function (e) {
              var t = e[0],
                n = e[1];
              if (Array.isArray(n) && n.length > 0) return t + ": " + n.length;
              if (n instanceof Map && n.size > 0) return t + ": " + n.size;
            }).join(", ");
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[store-msgs] start: ",
                "",
              ])),
            a,
          );
          var i = [],
            l = n.botInvokeSystemMsgs,
            m = n.chatsWithNewOfflineMsg,
            p = n.editProtocolMsgs,
            _ = n.groupInviteMsgs,
            f = n.keepInChatMessages,
            h = n.newAssociatedMsgs,
            v = n.newMsgsMap,
            S = n.newsletterMsgs,
            R = n.paymentMsgs,
            L = n.pollUpdateMsgs,
            E = n.reactionMsgs,
            k = n.removedPlaceholders,
            I = n.replaceCommentMsgs,
            T = n.replaceMsgs,
            D = n.replyMsgs,
            x = n.revokeMsgs,
            $ = n.unifiedAddons,
            P = await o(
              "WAWebProcessMessageAssociationMessages",
            ).classifyAssociatedMsgsUsingExistingParentsCache(h, v),
            N = Array.from(v.values());
          if (P != null && P.orphanAssociatedMsgs.length) {
            var M;
            i = i.concat(
              (M = P == null ? void 0 : P.orphanAssociatedMsgs) != null
                ? M
                : [],
            );
          }
          var w;
          P &&
            (w = o("WAWebApiFilterAndReplaceMessages").validateMsgFn(
              P == null ? void 0 : P.validAssociatedMsgs,
            ));
          var A = await o(
              "WAWebApiFilterAndReplaceMessages",
            ).filterAndReplaceMessages(N, w),
            F = A.newMsgs;
          (await o("WAWebDBMessageBulkHelper").persistNewMessagesInBulk(F, m),
            await o(
              "WAWebDBMessageBulkHelper",
            ).persistNewNewsletterMessagesInBulk(S),
            await o(
              "WAWebDBThreadMetadataBulkHelper",
            ).persistNewMessagesThreadMetadataInBulk(F));
          var O = [
              o("WAWebSchemaMessage").getMessageTable().bulkCreateOrReplace(T),
            ],
            B = [];
          (T.forEach(function (e) {
            e.associationType != null &&
              e.parentMsgKey != null &&
              e.internalId != null &&
              B.push({
                msgKey: e.id,
                parentMsgKey: e.parentMsgKey,
                associationType: e.associationType,
                msgKeyInternalId: e.internalId,
              });
          }),
            B.length > 0 &&
              o(
                "WAWebMessageAssociationGatingUtils",
              ).isMessageAssociationInfraEnabled() &&
              O.push.apply(
                O,
                o(
                  "WAWebDBReplaceUnknownAssociations",
                ).replaceUnknownAssociations(B),
              ),
            await Promise.all(O),
            await g(I));
          var W = await o("WAWebAddonProcessMsgs").processMsgsAndGetOrphans($),
            q = W.orphans;
          (q.length && (i = i.concat(q)),
            i.length !== 0 && (await o("WAWebStoreOrphans").storeOrphans(i)));
          var U = await o("WAWebApiOrphanRevoke").applyAddonRevokes($);
          if (U.length > 0) for (var V of U) x.push(V);
          if (
            (await C(x),
            await o("WAWebDBProcessPaymentMessages").processPaymentMessages(R),
            await o("WAWebDBProcessReactionsMsgs").processReactionMsgs(E),
            await o("WAWebDBProcessGroupInviteMsgs").processGroupInviteMessages(
              _,
            ),
            P != null &&
              P.detachedAssociatedMsgs.length &&
              o(
                "WAWebMessageAssociationUIUpdateFromStorage",
              ).updateAssociatedMsgsUIFromStorage(
                P == null ? void 0 : P.detachedAssociatedMsgs,
              ),
            await o("WAWebBackendApi").frontendSendAndReceive(
              "processKeepInChatMessages",
              { keepInChatMessages: f, allowNotification: !1 },
            ),
            await o("WAWebDBProcessEditProtocolMsgs").processEditProtocolMsgs(
              p,
            ),
            await o("WAWebDBProcessReplyMsgs").processReplyMsgs(D),
            await o(
              "WAWebDeriveViewRepliesThreadIdForIncomingMsgs",
            ).maybeGenerateViewRepliesThreadIdsForIncomingMsgs(D),
            await o("WAWebDBProcessPollUpdateMsgs").processPollUpdateMsgs(L),
            await o("WAWebHandleForMessageRange").handleOfflineForMessageRange(
              t,
            ),
            l.length > 0)
          ) {
            var H = new Set();
            l.forEach(function (e) {
              H.has(e.id.remote.toString()) ||
                (H.add(e.id.remote.toString()),
                o("WAWebBackendApi").frontendFireAndForget(
                  "updateBotInvokeSystemMsgCreated",
                  { chatId: e.id.remote },
                ));
            });
          }
          var G = t.map(function (e) {
            return e.id.toString();
          });
          try {
            var z = t.flatMap(function (e) {
              var t;
              return ((t = e.threadIds) != null ? t : []).map(function (e) {
                return e.toString();
              });
            });
            (await o("WAWebBackendApi").frontendSendAndReceive(
              "checkOrphanMutations",
              { msgIds: G, chatIds: m, threadIds: z },
            ),
              await o(
                "WAWebCheckUpdateOrphanReactions",
              ).checkUpdateForOrphanReactions(G));
          } catch (e) {
            var j = r("getErrorSafe")(e);
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "storeMsgs: checkOrphanMutations failed during handleSingleMsg for: ",
                    " chat: ",
                    "",
                  ])),
                String(G.join(" ")),
                String(t[0].id.remote),
              )
              .catching(j);
          }
          (y(N, k),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[store-msgs] done: ",
                  "",
                ])),
              a,
            ));
        } catch (e) {
          var K = r("getErrorSafe")(e);
          r("gkx")("26258")
            ? o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[store-msgs] error",
                    ])),
                )
                .catching(K)
                .sendLogs("storeMsgs-error", { sampling: 0.01 })
            : o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[store-msgs] error",
                    ])),
                )
                .catching(K)
                .sendLogs("storeMsgs-error");
        }
    }
    function y(e, t) {
      var n = e.filter(function (e) {
        return (
          o("WAWebCommonMsgUtils").isPlaceholderMsg(e.type) &&
          e.type !== o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER
        );
      });
      (n.length > 0 &&
        o("WAWebHandlePlaceholderWam").postPlaceholderActivityAddEvent(n),
        t.length > 0 &&
          o("WAWebHandlePlaceholderWam").postPlaceholderActivityPopulateEvent(
            t,
          ));
    }
    function C(e) {
      var t = [];
      return (
        e.forEach(function (e) {
          if (e.protocolMessageKey) {
            var n = r("nullthrows")(e.t, "revoke timestamp is null");
            t.push({
              revokeMsgKey: e.protocolMessageKey,
              newMsgKey: e.id,
              timestamp: n,
              subtype: e.subtype,
              sender: o("WAWebMsgGetters").getSender(e),
              revokeTimestamp: n,
              viewMode: e.viewMode,
            });
          }
        }),
        o("WAWebDBStoreRevokeMsgs")
          .processRevokeMsgs(t)
          .then(async function (e) {
            if (t.length > 0) {
              var n = [],
                r = new Set();
              (t.forEach(function (e) {
                n.push(e.revokeMsgKey.toString());
                var t = e.revokeMsgKey.remote.toString();
                r.add(t);
              }),
                await o("WAWebPersistedJobManagerWorkerCompatible")
                  .getJobManager()
                  .waitUntilPersisted(
                    o(
                      "WAWebPersistedJobDefinitions",
                    ).jobSerializers.deleteAddOns(
                      Array.from(r.values()).join(","),
                      n,
                    ),
                  ));
            }
            return e;
          })
      );
    }
    async function b(e) {
      var t = await o("WAWebSchemaMessage")
          .getMessageTable()
          .bulkGet(
            e.map(function (e) {
              return String(e.id);
            }),
            !1,
          ),
        n = [],
        r = [],
        a = [],
        i = [],
        l = [],
        s = [],
        u = [],
        c = [],
        d = [],
        g = [],
        h = [],
        y = [],
        C = new Set(),
        b = new Map(),
        L = new Map(),
        E = [],
        k = [],
        I = [],
        T = [];
      return (
        e.forEach(function (e, _) {
          var f = e,
            D = String(e.id),
            x = t[_];
          if (x != null && R(e, x)) {
            if (e.type === o("WAWebMsgType").MSG_TYPE.COMMENT) {
              var $ = o("WAWebAddonProcessMsgsUtils").castToAddonMsgData(f);
              (o("WAWebAddonGatingUtils").isUnifiedInfraEnabled(e) &&
                $ != null &&
                y.push($),
                k.push(e));
            } else r.push(v(e, f, x));
            o("WAWebCommonMsgUtils").isPlaceholderMsg(x.type) && L.set(D, f);
          } else if (
            x &&
            !(o("WAWebCommonMsgUtils").isFutureproofMsg(x.type) && S(e))
          )
            (o("WAWebCurrentUser").isEmployee() &&
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[store-msgs] [classify-msgs]: duplicate skip detail: existingType=",
                    " incomingType=",
                    " isExistingFutureproof=",
                    " isIncomingFutureproof=",
                    " id=",
                    "",
                  ])),
                String(x.type),
                String(e.type),
                String(o("WAWebCommonMsgUtils").isFutureproofMsg(x.type)),
                String(o("WAWebCommonMsgUtils").isFutureproofMsg(e.type)),
                e.id.id,
              ),
              n.push(e.id.id));
          else {
            var P = b.get(D),
              N =
                P != null && !o("WAWebCommonMsgUtils").isPlaceholderMsg(P.type);
            if (N) n.push(e.id.id);
            else if (
              (e.type === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE &&
                e.subtype === "bot_invoke_disclaimer" &&
                E.push(f),
              o("WAWebMsgGetters").getIsNewsletterMsg(e) &&
                e.type !== o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
                e.subtype !== "admin_revoke")
            )
              h.push(f);
            else if (
              o("WAWebAddonGatingUtils").isUnifiedInfraEnabled(e) &&
              o("WAWebAddonProcessMsgsUtils").castToAddonMsgData(f) != null
            ) {
              var M = o("WAWebAddonProcessMsgsUtils").castToAddonMsgData(f);
              M != null && y.push(M);
            } else
              e.type === o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT
                ? u.push(f)
                : o("WAWebCastToReactionMsg").castToReactionMsgData(f) != null
                  ? i.push(o("WAWebCastToReactionMsg").assertReactionMsgData(f))
                  : e.kind === o("WAWebMsgType").MsgKind.PollVoteEncrypted
                    ? s.push(e)
                    : e.kind === o("WAWebMsgType").MsgKind.ProtocolRevoke
                      ? a.push(e)
                      : ["sender_revoke", "admin_revoke"].includes(e.subtype)
                        ? (a.push(e),
                          o("WALogger")
                            .ERROR(
                              p ||
                                (p = babelHelpers.taggedTemplateLiteralLoose([
                                  "storeMsgs: receive a protocol message with a type ",
                                  "",
                                ])),
                              e.type,
                            )
                            .tags("messaging")
                            .sendLogs("storeMsgs-protocol", { sampling: 0.01 }))
                        : (e.type === o("WAWebMsgType").MSG_TYPE.PAYMENT &&
                              e.subtype === "send") ||
                            e.subtype === "payment_action_request_declined" ||
                            e.subtype ===
                              "payment_transaction_request_cancelled"
                          ? (l.push(f), b.set(D, f), C.add(String(e.id.remote)))
                          : e.type ===
                              o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE
                            ? (c.push(f),
                              b.set(D, f),
                              C.add(String(e.id.remote)))
                            : e.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
                                e.subtype === "message_edit"
                              ? d.push(f)
                              : e.quotedMsg || e.quotedStanzaID != null
                                ? (g.push(f),
                                  b.set(D, f),
                                  C.add(String(e.id.remote)))
                                : e.associationType != null
                                  ? (b.set(D, f),
                                    I.push(e),
                                    C.add(String(e.id.remote)))
                                  : (e.type ===
                                        o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
                                        e.subtype === "ephemeral_setting") ||
                                      e.type !==
                                        o("WAWebMsgType").MSG_TYPE.PROTOCOL
                                    ? (b.set(D, f), C.add(String(e.id.remote)))
                                    : T.length < 3 &&
                                      T.push({
                                        type: e.type,
                                        subtype: e.subtype,
                                      });
          }
        }),
        T.length > 0 &&
          o("WALogger").WARN(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "storeMsgs: skipped ",
                " unhandled messages => ",
                "",
              ])),
            T.length,
            T.map(function (e) {
              return (
                "type: " + String(e.type) + ", subtype: " + String(e.subtype)
              );
            }),
          ),
        n.length > 0 &&
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "[store-msgs] [classify-msgs]: skip for ",
                " duplicate messages, with id ",
                "",
              ])),
            n.length,
            n,
          ),
        {
          newMsgsMap: b,
          newAssociatedMsgs: I,
          chatsWithNewOfflineMsg: Array.from(C),
          removedPlaceholders: Array.from(L.values()),
          replaceMsgs: r,
          revokeMsgs: a,
          paymentMsgs: l,
          reactionMsgs: i,
          pollUpdateMsgs: s,
          keepInChatMessages: u,
          groupInviteMsgs: c,
          editProtocolMsgs: d,
          replyMsgs: g,
          newsletterMsgs: h,
          unifiedAddons: y,
          botInvokeSystemMsgs: E,
          replaceCommentMsgs: k,
        }
      );
    }
    function v(e, t, n) {
      var r,
        a,
        i = o("WAWebDBMessageSerialization").dbRowFromMessage(t);
      ((i.t = n.t),
        (i.internalId = n.internalId),
        (i.rowId = n.rowId),
        (i.pendingReadReceipt = n.pendingReadReceipt),
        o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
          n.placeholderCreatedWhenAccountIsHosted === !1 &&
          i.senderOrRecipientAccountTypeHosted === !0 &&
          (r = e.id) != null &&
          (r = r.remote) != null &&
          r.isUser() &&
          ((i.hostedBizEncStateMismatch = !0),
          o("WAWebBackendEventBusWorkerCompatible").getBackendEventBus()
            .isMainStreamReadyMd &&
            o("WAWebBackendApi").frontendFireAndForget(
              "updateMsgModelHostedBizEncStateMismatchFlagToTrue",
              { msgId: e.id },
            )),
        o("WAWebCommonMsgUtils").isPlaceholderMsg(n.type) &&
          n.ack > ((a = i.ack) != null ? a : o("WAWebAck").ACK.CLOCK) &&
          (i.ack = n.ack));
      var l = o("WAWebDBStoreMessage").isPendingUnreadReceipt(t.id, t);
      return o("WAWebDBStoreMessage").addMsgMetadataToMsgRow({
        msg: i,
        chatId: t.id.remote.toString(),
        hasLink: o("WAWebLinkify").hasHttpLink(t),
        pendingReadReceipt: l,
      });
    }
    function S(e) {
      return o("WAWebAddonGatingUtils").isUnifiedInfraEnabled(e)
        ? !0
        : !!o("WAWebDBAddOnProviders").getAddOnProviderForMsg(e);
    }
    function R(e, t) {
      return (
        (o("WAWebCommonMsgUtils").isPlaceholderMsg(t.type) &&
          !o("WAWebCommonMsgUtils").isPlaceholderMsg(e.type)) ||
        (o("WAWebCommonMsgUtils").isFutureproofMsg(t.type) &&
          !o("WAWebCommonMsgUtils").isFutureproofMsg(e.type) &&
          !S(e)) ||
        (o("WAWebCommonMsgUtils").isRichResponseMsg(t.type) &&
          o("WAWebCommonMsgUtils").isSomewhatParsedRichResponseMsg(e))
      );
    }
    ((l.storeMsgs = h), (l.classifyMsgs = b));
  },
  98,
);
