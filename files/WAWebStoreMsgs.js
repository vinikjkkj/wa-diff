__d(
  "WAWebStoreMsgs",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "compactMap",
    "getErrorSafe",
    "gkx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g;
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebSchemaMessage")
            .getMessageTable()
            .bulkRemove(
              e.map(function (e) {
                return e.id.toString();
              }),
            );
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (t.length !== 0)
            try {
              var a = yield R(t),
                i = r("compactMap")(Object.entries(a), function (e) {
                  var t = e[0],
                    n = e[1];
                  if (Array.isArray(n) && n.length > 0)
                    return t + ": " + n.length;
                  if (n instanceof Map && n.size > 0) return t + ": " + n.size;
                }).join(", ");
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[store-msgs] start: ",
                    "",
                  ])),
                i,
              );
              var l = [],
                m = a.botInvokeSystemMsgs,
                p = a.chatsWithNewOfflineMsg,
                _ = a.editProtocolMsgs,
                f = a.groupInviteMsgs,
                y = a.keepInChatMessages,
                C = a.newAssociatedMsgs,
                b = a.newMsgsMap,
                L = a.newsletterMsgs,
                E = a.paymentMsgs,
                k = a.pollUpdateMsgs,
                I = a.reactionMsgs,
                T = a.removedPlaceholders,
                D = a.replaceCommentMsgs,
                x = a.replaceMsgs,
                $ = a.replyMsgs,
                P = a.revokeMsgs,
                N = a.unifiedAddons,
                M = yield o(
                  "WAWebProcessMessageAssociationMessages",
                ).classifyAssociatedMsgsUsingExistingParentsCache(C, b),
                w = Array.from(b.values());
              if (M != null && M.orphanAssociatedMsgs.length) {
                var A;
                l = l.concat(
                  (A = M == null ? void 0 : M.orphanAssociatedMsgs) != null
                    ? A
                    : [],
                );
              }
              var F;
              M &&
                (F = o("WAWebApiFilterAndReplaceMessages").validateMsgFn(
                  M == null ? void 0 : M.validAssociatedMsgs,
                ));
              var O = yield o(
                  "WAWebApiFilterAndReplaceMessages",
                ).filterAndReplaceMessages(w, F),
                B = O.newMsgs;
              (yield o("WAWebDBMessageBulkHelper").persistNewMessagesInBulk(
                B,
                p,
              ),
                yield o(
                  "WAWebDBMessageBulkHelper",
                ).persistNewNewsletterMessagesInBulk(L),
                yield o(
                  "WAWebDBThreadMetadataBulkHelper",
                ).persistNewMessagesThreadMetadataInBulk(B));
              var W = [
                  o("WAWebSchemaMessage")
                    .getMessageTable()
                    .bulkCreateOrReplace(x),
                ],
                q = [];
              (x.forEach(function (e) {
                e.associationType != null &&
                  e.parentMsgKey != null &&
                  e.internalId != null &&
                  q.push({
                    msgKey: e.id,
                    parentMsgKey: e.parentMsgKey,
                    associationType: e.associationType,
                    msgKeyInternalId: e.internalId,
                  });
              }),
                q.length > 0 &&
                  o(
                    "WAWebMessageAssociationGatingUtils",
                  ).isMessageAssociationInfraEnabled() &&
                  W.push.apply(
                    W,
                    o(
                      "WAWebDBReplaceUnknownAssociations",
                    ).replaceUnknownAssociations(q),
                  ),
                yield (g || (g = n("Promise"))).all(W),
                yield h(D));
              var U = yield o("WAWebAddonProcessMsgs").processMsgsAndGetOrphans(
                  N,
                ),
                V = U.orphans;
              (V.length && (l = l.concat(V)),
                l.length !== 0 &&
                  (yield o("WAWebStoreOrphans").storeOrphans(l)));
              var H = yield o("WAWebApiOrphanRevoke").applyAddonRevokes(N);
              if (H.length > 0) for (var G of H) P.push(G);
              if (
                (yield S(P),
                yield o("WAWebDBProcessPaymentMessages").processPaymentMessages(
                  E,
                ),
                yield o("WAWebDBProcessReactionsMsgs").processReactionMsgs(I),
                yield o(
                  "WAWebDBProcessGroupInviteMsgs",
                ).processGroupInviteMessages(f),
                M != null &&
                  M.detachedAssociatedMsgs.length &&
                  o(
                    "WAWebMessageAssociationUIUpdateFromStorage",
                  ).updateAssociatedMsgsUIFromStorage(
                    M == null ? void 0 : M.detachedAssociatedMsgs,
                  ),
                yield o("WAWebBackendApi").frontendSendAndReceive(
                  "processKeepInChatMessages",
                  { keepInChatMessages: y, allowNotification: !1 },
                ),
                yield o(
                  "WAWebDBProcessEditProtocolMsgs",
                ).processEditProtocolMsgs(_),
                yield o("WAWebDBProcessReplyMsgs").processReplyMsgs($),
                yield o(
                  "WAWebDeriveViewRepliesThreadIdForIncomingMsgs",
                ).maybeGenerateViewRepliesThreadIdsForIncomingMsgs($),
                yield o("WAWebDBProcessPollUpdateMsgs").processPollUpdateMsgs(
                  k,
                ),
                yield o(
                  "WAWebHandleForMessageRange",
                ).handleOfflineForMessageRange(t),
                m.length > 0)
              ) {
                var z = new Set();
                m.forEach(function (e) {
                  z.has(e.id.remote.toString()) ||
                    (z.add(e.id.remote.toString()),
                    o("WAWebBackendApi").frontendFireAndForget(
                      "updateBotInvokeSystemMsgCreated",
                      { chatId: e.id.remote },
                    ));
                });
              }
              var j = t.map(function (e) {
                return e.id.toString();
              });
              try {
                var K = t.flatMap(function (e) {
                  var t;
                  return ((t = e.threadIds) != null ? t : []).map(function (e) {
                    return e.toString();
                  });
                });
                (yield o("WAWebBackendApi").frontendSendAndReceive(
                  "checkOrphanMutations",
                  { msgIds: j, chatIds: p, threadIds: K },
                ),
                  yield o(
                    "WAWebCheckUpdateOrphanReactions",
                  ).checkUpdateForOrphanReactions(j));
              } catch (e) {
                var Q = r("getErrorSafe")(e);
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "storeMsgs: checkOrphanMutations failed during handleSingleMsg for: ",
                        " chat: ",
                        "",
                      ])),
                    String(j.join(" ")),
                    String(t[0].id.remote),
                  )
                  .catching(Q);
              }
              (v(w, T),
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[store-msgs] done: ",
                      "",
                    ])),
                  i,
                ));
            } catch (e) {
              var X = r("getErrorSafe")(e);
              r("gkx")("26258")
                ? o("WALogger")
                    .ERROR(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[store-msgs] error",
                        ])),
                    )
                    .catching(X)
                    .sendLogs("storeMsgs-error", { sampling: 0.01 })
                : o("WALogger")
                    .ERROR(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "[store-msgs] error",
                        ])),
                    )
                    .catching(X)
                    .sendLogs("storeMsgs-error");
            }
        })),
        b.apply(this, arguments)
      );
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
          .then(
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  if (t.length > 0) {
                    var n = [],
                      r = new Set();
                    (t.forEach(function (e) {
                      n.push(e.revokeMsgKey.toString());
                      var t = e.revokeMsgKey.remote.toString();
                      r.add(t);
                    }),
                      yield o("WAWebPersistedJobManagerWorkerCompatible")
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
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          )
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSchemaMessage")
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
            L = [],
            I = [];
          return (
            e.forEach(function (e, _) {
              var f = e,
                T = String(e.id),
                D = t[_];
              if (D != null && k(e, D)) {
                if (e.type === o("WAWebMsgType").MSG_TYPE.COMMENT) {
                  var x = o("WAWebAddonProcessMsgsUtils").castToAddonMsgData(f);
                  (o("WAWebAddonGatingUtils").isUnifiedInfraEnabled(e) &&
                    x != null &&
                    y.push(x),
                    R.push(e));
                } else {
                  var $,
                    P,
                    N = o("WAWebDBMessageSerialization").dbRowFromMessage(f);
                  ((N.t = D.t),
                    (N.internalId = D.internalId),
                    (N.rowId = D.rowId),
                    (N.pendingReadReceipt = D.pendingReadReceipt),
                    o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
                      D.placeholderCreatedWhenAccountIsHosted === !1 &&
                      N.senderOrRecipientAccountTypeHosted === !0 &&
                      ($ = e.id) != null &&
                      ($ = $.remote) != null &&
                      $.isUser() &&
                      ((N.hostedBizEncStateMismatch = !0),
                      o(
                        "WAWebBackendEventBusWorkerCompatible",
                      ).getBackendEventBus().isMainStreamReadyMd &&
                        o("WAWebBackendApi").frontendFireAndForget(
                          "updateMsgModelHostedBizEncStateMismatchFlagToTrue",
                          { msgId: e.id },
                        )),
                    o("WAWebCommonMsgUtils").isPlaceholderMsg(D.type) &&
                      D.ack >
                        ((P = N.ack) != null ? P : o("WAWebAck").ACK.CLOCK) &&
                      (N.ack = D.ack));
                  var M = o("WAWebDBStoreMessage").isPendingUnreadReceipt(
                      f.id,
                      f,
                    ),
                    w = o("WAWebDBStoreMessage").addMsgMetadataToMsgRow({
                      msg: N,
                      chatId: f.id.remote.toString(),
                      hasLink: o("WAWebLinkify").hasHttpLink(f),
                      pendingReadReceipt: M,
                    });
                  r.push(w);
                }
                o("WAWebCommonMsgUtils").isPlaceholderMsg(D.type) &&
                  v.set(T, f);
              } else if (
                D &&
                !(o("WAWebCommonMsgUtils").isFutureproofMsg(D.type) && E(e))
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
                    String(D.type),
                    String(e.type),
                    String(o("WAWebCommonMsgUtils").isFutureproofMsg(D.type)),
                    String(o("WAWebCommonMsgUtils").isFutureproofMsg(e.type)),
                    e.id.id,
                  ),
                  n.push(e.id.id));
              else {
                var A = b.get(T),
                  F =
                    A != null &&
                    !o("WAWebCommonMsgUtils").isPlaceholderMsg(A.type);
                if (F) n.push(e.id.id);
                else if (
                  (e.type ===
                    o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE &&
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
                  var O = o("WAWebAddonProcessMsgsUtils").castToAddonMsgData(f);
                  O != null && y.push(O);
                } else
                  e.type === o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT
                    ? u.push(f)
                    : o("WAWebCastToReactionMsg").castToReactionMsgData(f) !=
                        null
                      ? i.push(
                          o("WAWebCastToReactionMsg").assertReactionMsgData(f),
                        )
                      : e.kind === o("WAWebMsgType").MsgKind.PollVoteEncrypted
                        ? s.push(e)
                        : e.kind === o("WAWebMsgType").MsgKind.ProtocolRevoke
                          ? a.push(e)
                          : ["sender_revoke", "admin_revoke"].includes(
                                e.subtype,
                              )
                            ? (a.push(e),
                              o("WALogger")
                                .ERROR(
                                  p ||
                                    (p =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "storeMsgs: receive a protocol message with a type ",
                                        "",
                                      ])),
                                  e.type,
                                )
                                .tags("messaging")
                                .sendLogs("storeMsgs-protocol", {
                                  sampling: 0.01,
                                }))
                            : (e.type === o("WAWebMsgType").MSG_TYPE.PAYMENT &&
                                  e.subtype === "send") ||
                                e.subtype ===
                                  "payment_action_request_declined" ||
                                e.subtype ===
                                  "payment_transaction_request_cancelled"
                              ? (l.push(f),
                                b.set(T, f),
                                C.add(String(e.id.remote)))
                              : e.type ===
                                  o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE
                                ? (c.push(f),
                                  b.set(T, f),
                                  C.add(String(e.id.remote)))
                                : e.type ===
                                      o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
                                    e.subtype === "message_edit"
                                  ? d.push(f)
                                  : e.quotedMsg || e.quotedStanzaID != null
                                    ? (g.push(f),
                                      b.set(T, f),
                                      C.add(String(e.id.remote)))
                                    : e.associationType != null
                                      ? (b.set(T, f),
                                        L.push(e),
                                        C.add(String(e.id.remote)))
                                      : (e.type ===
                                            o("WAWebMsgType").MSG_TYPE
                                              .PROTOCOL &&
                                            e.subtype ===
                                              "ephemeral_setting") ||
                                          e.type !==
                                            o("WAWebMsgType").MSG_TYPE.PROTOCOL
                                        ? (b.set(T, f),
                                          C.add(String(e.id.remote)))
                                        : I.length < 3 &&
                                          I.push({
                                            type: e.type,
                                            subtype: e.subtype,
                                          });
              }
            }),
            I.length > 0 &&
              o("WALogger").WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "storeMsgs: skipped ",
                    " unhandled messages => ",
                    "",
                  ])),
                I.length,
                I.map(function (e) {
                  return (
                    "type: " +
                    String(e.type) +
                    ", subtype: " +
                    String(e.subtype)
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
              newAssociatedMsgs: L,
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
        })),
        L.apply(this, arguments)
      );
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
          o("WAWebCommonMsgUtils").isSomewhatParsedRichResponseMsg(e))
      );
    }
    ((l.storeMsgs = C), (l.classifyMsgs = R));
  },
  98,
);
