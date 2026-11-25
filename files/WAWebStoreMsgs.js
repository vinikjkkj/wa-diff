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
    "WAWebCastToReactionMsg",
    "WAWebCheckUpdateOrphanReactions",
    "WAWebCommonMsgUtils",
    "WAWebCurrentUser",
    "WAWebDBAddOnProviders",
    "WAWebDBExperienceIdStore",
    "WAWebDBMessageBulkHelper",
    "WAWebDBMessageSerialization",
    "WAWebDBMsgUtils",
    "WAWebDBProcessEditProtocolMsgs",
    "WAWebDBProcessGroupInviteMsgs",
    "WAWebDBProcessMessage",
    "WAWebDBProcessPaymentMessages",
    "WAWebDBProcessPollUpdateMsgs",
    "WAWebDBProcessReactionsMsgs",
    "WAWebDBProcessReplyMsgs",
    "WAWebDBProcessRevokeMsgs",
    "WAWebDBReadReceiptOriginBindings",
    "WAWebDBReplaceUnknownAssociations",
    "WAWebDBStoreMessage",
    "WAWebDBThreadMetadataBulkHelper",
    "WAWebDeriveViewRepliesThreadIdForIncomingMsgs",
    "WAWebHandleForMessageRange",
    "WAWebHandlePlaceholderWam",
    "WAWebHatchBrowserTaskMessageData",
    "WAWebLinkify",
    "WAWebMessageAssociationUIUpdateFromStorage",
    "WAWebMmSignalSharingExpirationWindowWorker",
    "WAWebModelStorageUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebProcessMessageAssociationMessages",
    "WAWebQuarantineDataStore",
    "WAWebRequestDeleteAddOns",
    "WAWebSchemaMessage",
    "WAWebStoreOrphans",
    "compactMap",
    "getErrorSafe",
    "gkx",
    "justknobx",
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
          var n = await R(t),
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
            C = n.newMsgsMap,
            b = n.newsletterMsgs,
            L = n.paymentMsgs,
            E = n.pollUpdateMsgs,
            k = n.reactionMsgs,
            I = n.removedPlaceholders,
            T = n.replaceCommentMsgs,
            D = n.replaceMsgs,
            x = n.replyMsgs,
            $ = n.revokeMsgs,
            P = n.unifiedAddons,
            N = await o(
              "WAWebProcessMessageAssociationMessages",
            ).classifyAssociatedMsgsUsingExistingParentsCache(h, C),
            M = Array.from(C.values());
          if (N != null && N.orphanAssociatedMsgs.length) {
            var w;
            i = i.concat(
              (w = N == null ? void 0 : N.orphanAssociatedMsgs) != null
                ? w
                : [],
            );
          }
          var A;
          N &&
            (A = o("WAWebApiFilterAndReplaceMessages").validateMsgFn(
              N == null ? void 0 : N.validAssociatedMsgs,
            ));
          var F = await o(
              "WAWebApiFilterAndReplaceMessages",
            ).filterAndReplaceMessages(M, A),
            O = F.newMsgs;
          (await o("WAWebDBMessageBulkHelper").persistNewMessagesInBulk(O, m),
            await o(
              "WAWebDBMessageBulkHelper",
            ).persistNewNewsletterMessagesInBulk(b),
            await o(
              "WAWebDBThreadMetadataBulkHelper",
            ).persistNewMessagesThreadMetadataInBulk(O));
          var B = [y(D, t)],
            W = [];
          (D.forEach(function (e) {
            e.associationType != null &&
              e.parentMsgKey != null &&
              e.internalId != null &&
              W.push({
                msgKey: e.id,
                parentMsgKey: e.parentMsgKey,
                associationType: e.associationType,
                msgKeyInternalId: e.internalId,
              });
          }),
            W.length > 0 &&
              B.push.apply(
                B,
                o(
                  "WAWebDBReplaceUnknownAssociations",
                ).replaceUnknownAssociations(W),
              ),
            await Promise.all(B),
            await o(
              "WAWebMmSignalSharingExpirationWindowWorker",
            ).persistPendingMmSignalSharingExpirationWindows(
              t.map(function (e) {
                var t = e.id;
                return t.toString();
              }),
              [].concat(O, b, D).map(function (e) {
                var t = e.id;
                return t.toString();
              }),
            ),
            await g(T));
          var q = await o("WAWebAddonProcessMsgs").processMsgsAndGetOrphans(P),
            U = q.orphans;
          (U.length && (i = i.concat(U)),
            i.length !== 0 && (await o("WAWebStoreOrphans").storeOrphans(i)));
          var V = await o("WAWebApiOrphanRevoke").applyAddonRevokes(P);
          if (V.length > 0) for (var H of V) $.push(H);
          if (
            (await S($),
            await o("WAWebDBProcessPaymentMessages").processPaymentMessages(L),
            await o("WAWebDBProcessReactionsMsgs").processReactionMsgs(k),
            await o("WAWebDBProcessGroupInviteMsgs").processGroupInviteMessages(
              _,
            ),
            N != null &&
              N.detachedAssociatedMsgs.length &&
              o(
                "WAWebMessageAssociationUIUpdateFromStorage",
              ).updateAssociatedMsgsUIFromStorage(
                N == null ? void 0 : N.detachedAssociatedMsgs,
              ),
            await o("WAWebBackendApi").frontendSendAndReceive(
              "processKeepInChatMessages",
              { keepInChatMessages: f, allowNotification: !1 },
            ),
            await o("WAWebDBProcessEditProtocolMsgs").processEditProtocolMsgs(
              p,
            ),
            await o("WAWebDBProcessReplyMsgs").processReplyMsgs(x),
            await o(
              "WAWebDeriveViewRepliesThreadIdForIncomingMsgs",
            ).maybeGenerateViewRepliesThreadIdsForIncomingMsgs(x),
            await o("WAWebDBProcessPollUpdateMsgs").processPollUpdateMsgs(E),
            await o("WAWebHandleForMessageRange").handleOfflineForMessageRange(
              t,
            ),
            l.length > 0)
          ) {
            var G = new Set();
            l.forEach(function (e) {
              G.has(e.id.remote.toString()) ||
                (G.add(e.id.remote.toString()),
                o("WAWebBackendApi").frontendFireAndForget(
                  "updateBotInvokeSystemMsgCreated",
                  { chatId: e.id.remote },
                ));
            });
          }
          var z = t.map(function (e) {
            return e.id.toString();
          });
          try {
            var j = t.flatMap(function (e) {
              var t;
              return ((t = e.threadIds) != null ? t : []).map(function (e) {
                return e.toString();
              });
            });
            (await o("WAWebBackendApi").frontendSendAndReceive(
              "checkOrphanMutations",
              { msgIds: z, chatIds: m, threadIds: j },
            ),
              await o(
                "WAWebCheckUpdateOrphanReactions",
              ).checkUpdateForOrphanReactions(z));
          } catch (e) {
            var K = r("getErrorSafe")(e);
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "storeMsgs: checkOrphanMutations failed during handleSingleMsg for: ",
                    " chat: ",
                    "",
                  ])),
                String(z.join(" ")),
                String(t[0].id.remote),
              )
              .catching(K);
          }
          (v(M, I),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[store-msgs] done: ",
                  "",
                ])),
              a,
            ));
        } catch (e) {
          var Q = r("getErrorSafe")(e);
          r("gkx")("26258")
            ? o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[store-msgs] error",
                    ])),
                )
                .catching(Q)
                .sendLogs("storeMsgs-error", { sampling: 0.01 })
            : o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[store-msgs] error",
                    ])),
                )
                .catching(Q)
                .sendLogs("storeMsgs-error");
        }
    }
    async function y(e, t) {
      var n = new Set(
          e.map(function (e) {
            return e.id;
          }),
        ),
        a = t.filter(function (e) {
          return n.has(e.id.toString());
        }),
        i = o("WAWebQuarantineDataStore").extractQuarantineDataFromMessages(a),
        l = new Set(
          r("compactMap")(a, function (e) {
            return o("WAWebDBStoreMessage").isPendingUnreadReceipt(e.id, e)
              ? e.id.toString()
              : null;
          }),
        ),
        s = ["message"];
      (i.length > 0 && s.push("quarantine-data"),
        o("WAWebDBExperienceIdStore").shouldLockExperienceIdTable(e) &&
          s.push("experience-id"),
        await o("WAWebModelStorageUtils")
          .getStorage()
          .lock(s, async function (t) {
            var n = t[0],
              a = t[1],
              s = await n.bulkGet(
                e.map(function (e) {
                  return e.id;
                }),
                !1,
              );
            (e.forEach(function (e, t) {
              var n = s[t];
              n != null &&
                o("WAWebDBProcessMessage").keepUserStateOfPrevRow(e, n);
            }),
              await n.bulkCreateOrReplace(
                r("justknobx")._("90")
                  ? e.map(function (e, t) {
                      return C(e, s[t], l.has(e.id));
                    })
                  : e,
              ),
              await o(
                "WAWebQuarantineDataStore",
              ).bulkCreateOrReplaceQuarantineData(i, a),
              await o("WAWebDBExperienceIdStore").recordReceivedExperienceIds(
                e,
              ));
          }));
    }
    function C(e, t, n) {
      var r, a;
      if (t == null) return e;
      var i = babelHelpers.extends({}, e, {
          ack: Math.max(
            (r = e.ack) != null ? r : o("WAWebAck").ACK.CLOCK,
            (a = t.ack) != null ? a : o("WAWebAck").ACK.CLOCK,
          ),
          pendingReadReceipt: b(e, t, n),
        }),
        l = o(
          "WAWebDBReadReceiptOriginBindings",
        ).getCarriedPendingReadReceiptOrigin(t, i);
      return (
        (i.pendingReadReceiptOrigin =
          l == null &&
          o("WAWebCommonMsgUtils").isPlaceholderMsg(t.type) &&
          i.ack >= o("WAWebAck").ACK.READ &&
          i.pendingReadReceipt ===
            o("WAWebDBMsgUtils").PendingReadReceiptType.Message
            ? {
                origin: null,
                pendingType:
                  o("WAWebDBMsgUtils").PendingReadReceiptType.Message,
                latestEditMsgKey: null,
              }
            : l),
        i
      );
    }
    function b(e, t, n) {
      var r;
      return n && o("WAWebCommonMsgUtils").isPlaceholderMsg(t.type)
        ? o("WAWebDBMsgUtils").PendingReadReceiptType.Message
        : t.pendingReadReceipt !== void 0 &&
            (t.pendingReadReceipt !==
              o("WAWebDBMsgUtils").PendingReadReceiptType.MessageEdit ||
              e.latestEditMsgKey != null)
          ? t.pendingReadReceipt
          : n &&
              ((r = t.ack) != null ? r : o("WAWebAck").ACK.CLOCK) <
                o("WAWebAck").ACK.READ
            ? o("WAWebDBMsgUtils").PendingReadReceiptType.Message
            : void 0;
    }
    function v(e, t) {
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
    function S(e) {
      var t = [];
      return (
        e.forEach(function (e) {
          if (e.protocolMessageKey) {
            var n,
              a = r("nullthrows")(e.t, "revoke timestamp is null");
            t.push({
              revokeMsgKey: e.protocolMessageKey,
              newMsgKey: e.id,
              timestamp: a,
              subtype: e.subtype,
              authenticatedSender:
                (n = e.senderWithDevice) != null
                  ? n
                  : o("WAWebMsgGetters").getSender(e),
              sender: o("WAWebMsgGetters").getSender(e),
              revokeTimestamp: a,
              viewMode: e.viewMode,
            });
          }
        }),
        o("WAWebDBProcessRevokeMsgs")
          .processRevokeMsgsAndGetCleanupEligibleKeys(t)
          .then(async function (e) {
            var n = t.filter(function (t) {
              return e.has(t.revokeMsgKey.toString());
            });
            if (n.length > 0) {
              var r = [],
                a = new Set();
              (n.forEach(function (t) {
                var n,
                  o = t.revokeMsgKey.toString();
                r.push((n = e.get(o)) != null ? n : o);
                var i = t.revokeMsgKey.remote.toString();
                a.add(i);
              }),
                await o("WAWebRequestDeleteAddOns").requestDeleteAddOns(
                  Array.from(a.values()).join(","),
                  r,
                ));
            }
            return e;
          })
      );
    }
    async function R(e) {
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
        v = new Map(),
        S = [],
        R = [],
        I = [],
        T = [];
      return (
        e.forEach(function (e, _) {
          var f = e,
            D = String(e.id),
            x = t[_];
          if (x != null && k(e, x)) {
            if (e.type === o("WAWebMsgType").MSG_TYPE.COMMENT) {
              var $ = o("WAWebAddonProcessMsgsUtils").castToAddonMsgData(f);
              (o("WAWebAddonGatingUtils").isUnifiedInfraEnabled(e) &&
                $ != null &&
                y.push($),
                R.push(e));
            } else r.push(L(e, f, x));
            o("WAWebCommonMsgUtils").isPlaceholderMsg(x.type) &&
              !o("WAWebCommonMsgUtils").isPlaceholderMsg(e.type) &&
              v.set(D, f);
          } else if (
            x &&
            !(o("WAWebCommonMsgUtils").isFutureproofMsg(x.type) && E(e))
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
                S.push(f),
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
          removedPlaceholders: Array.from(v.values()),
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
          botInvokeSystemMsgs: S,
          replaceCommentMsgs: R,
        }
      );
    }
    function L(e, t, n) {
      var r,
        a,
        i = o("WAWebDBMessageSerialization").dbRowFromMessage(t);
      ((i.unifiedResponse = o(
        "WAWebHatchBrowserTaskMessageData",
      ).preserveBrowserTaskMessageResponse(i, n)),
        (i.t = n.t),
        (i.internalId = n.internalId),
        (i.rowId = n.rowId),
        (i.pendingReadReceipt = n.pendingReadReceipt),
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
    function E(e) {
      return o("WAWebAddonGatingUtils").isUnifiedInfraEnabled(e)
        ? !0
        : !!o("WAWebDBAddOnProviders").getAddOnProviderForMsg(e);
    }
    function k(e, t) {
      return (
        (o("WAWebCommonMsgUtils").isPlaceholderMsg(t.type) &&
          !o("WAWebCommonMsgUtils").isPlaceholderMsg(e.type)) ||
        (o("WAWebCommonMsgUtils").isFutureproofMsg(t.type) &&
          !o("WAWebCommonMsgUtils").isFutureproofMsg(e.type) &&
          !E(e)) ||
        (o("WAWebCommonMsgUtils").isRichResponseMsg(t.type) &&
          o("WAWebCommonMsgUtils").isSomewhatParsedRichResponseMsg(e)) ||
        o("WAWebCommonMsgUtils").isPlaceholderSubtypeUpgrade(
          e.subtype,
          t.subtype,
        )
      );
    }
    ((l.storeMsgs = h), (l.processOfflineRevokes = S), (l.classifyMsgs = R));
  },
  98,
);
