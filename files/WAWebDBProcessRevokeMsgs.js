__d(
  "WAWebDBProcessRevokeMsgs",
  [
    "WALogger",
    "WAWebAddonProcessRevoke",
    "WAWebApiChatUnreadMention",
    "WAWebApiOrphanRevoke",
    "WAWebAssociationProcessor",
    "WAWebBackendApi",
    "WAWebCoexV2RevokeRetention",
    "WAWebCoexV2StoredRevokeAuthorization",
    "WAWebDBAssociatedMsgsAttachDetachAPI",
    "WAWebDBRemoveMsgsAndUpdateChats",
    "WAWebDBReportingTokenUtils",
    "WAWebDBStoreRevokeMsgs",
    "WAWebInstantMsgTypes",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebRevoke",
    "WAWebSchemaMessage",
    "WAWebViewModeUtils",
    "WAWebWid",
    "WAWebWidFactory",
    "cr:375",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v = (e = n("cr:375")) != null ? e : {},
      S = v.ftsLightClient;
    async function R(e) {
      await L(e);
    }
    async function L(e) {
      var t = new Set(),
        n = new Set(),
        a = [],
        i = new Set(
          e.map(function (e) {
            return e.revokeMsgKey.toString();
          }),
        ),
        l = [],
        C = [],
        b = new Map(),
        v = new Map(),
        R = [],
        L = [],
        x = [],
        $ = [],
        P = [],
        N = e.filter(function (e) {
          var t = e.newMsgKey,
            n = e.revokeMsgKey,
            o = e.subtype,
            a = !0;
          return (
            o === "admin_revoke"
              ? !r("WAWebWid").isGroup(n.remote) &&
                !r("WAWebWid").isNewsletter(n.remote)
                ? ((a = !1), x.length < 3 && x.push(String(n)))
                : r("WAWebWid").equals(n.remote, t.remote) ||
                  ((a = !1), $.length < 3 && $.push(String(n)))
              : ((a = k(e)),
                a ||
                  (P.length < 3 &&
                    P.push({ revokeMsgKey: String(n), newMsgKey: String(t) }),
                  v.set(e.revokeMsgKey.id, e))),
            a
          );
        });
      if (
        (x.length > 0 &&
          (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "processRevokeMsgs: ",
                " revokeMsgKeys have not been revoked => ",
                "",
              ])),
            x.length,
            x,
          ),
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "processRevokeMsgs: admin revoke needs group/newsletter chat",
                ])),
            )
            .sendLogs("process-admin-revoke-message")),
        $.length > 0 &&
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "processRevokeMsgs: ",
                " revokes skipped (diff group) => ",
                "",
              ])),
            $.length,
            $,
          ),
          o("WALogger")
            .WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "processRevokeMsgs: admin revoke group != orig msg group",
                ])),
            )
            .sendLogs("process-admin-revoke-message")),
        P.length > 0 &&
          (o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "processRevokeMsgs: ",
                " invalid revoke requests => ",
                "",
              ])),
            P.length,
            P.map(function (e) {
              return e.revokeMsgKey;
            }),
          ),
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "processRevokeMsgs: retry invalid revokes as bot invoker",
              ])),
          )),
        v.size > 0)
      )
        try {
          var M,
            w = Array.from(v.entries()),
            A = w.map(function (e) {
              return e[1].revokeMsgKey.toString();
            }),
            F = w.map(function (e) {
              var t;
              return (t = o("WAWebLidMigrationUtils").getAlternateMsgKey(
                e[1].revokeMsgKey,
              )) == null
                ? void 0
                : t.toString();
            }),
            O = await o("WAWebSchemaMessage")
              .getMessageTable()
              .bulkGet([].concat(A, F), !1);
          (O.forEach(function (e) {
            var t = !1;
            if (e != null) {
              var n = r("WAWebMsgKey").from(e.id),
                a = v.get(n.id);
              if (a != null) {
                var i = a.newMsgKey,
                  l = a.sender,
                  s = a.subtype;
                if (s !== "admin_revoke") {
                  var u = n.remote,
                    c = e.botTargetSenderJid
                      ? o("WAWebWidFactory").createWidFromWidLike(
                          e.botTargetSenderJid,
                        )
                      : null;
                  if (!(c == null || u == null)) {
                    var d =
                        e.botPluginSearchUrl != null &&
                        e.botResponseTargetId != null,
                      m = !d && e.botPluginMaybeParent === !0;
                    if (
                      (u.isGroup()
                        ? r("WAWebWid").equals.apply(
                            r("WAWebWid"),
                            o("WAWebLidMigrationUtils").toCommonAddressingMode(
                              c,
                              i.participant,
                            ),
                          ) && (t = !0)
                        : u.isBot() ||
                          (r("WAWebWid").equals.apply(
                            r("WAWebWid"),
                            o("WAWebLidMigrationUtils").toCommonAddressingMode(
                              c,
                              l,
                            ),
                          ) &&
                            (t = !0)),
                      t)
                    ) {
                      R.push(a);
                      var p = e.botResponseTargetId,
                        _ = e.internalId;
                      (d || m) &&
                        _ != null &&
                        p != null &&
                        L.push([a, { internalId: _, targetId: p }]);
                    }
                  }
                }
              }
            }
          }),
            (M = N).push.apply(M, R));
        } catch (e) {
          var B = r("getErrorSafe")(e);
          o("WALogger")
            .ERROR(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "Store Revoked Msg: re-validate bot revoke failed",
                ])),
            )
            .catching(B)
            .sendLogs("Re-validate revoke failed");
        }
      var W = new Set(N),
        q = await o(
          "WAWebCoexV2StoredRevokeAuthorization",
        ).authorizeCoexV2RevokeMsgInfos(e);
      N = q.filterAuthorizedRevokeMsgInfos(W);
      var U = await q.deferEarlyRevokes(W, i);
      U.length > 0 &&
        (await o("WAWebApiOrphanRevoke").addOrphanRevokes(
          U.map(function (e) {
            var t = e[0],
              n = e[1];
            return babelHelpers.extends({}, T(t, n), {
              requiresTargetAuthorization: !0,
            });
          }),
        ));
      var V = await o(
          "WAWebCoexV2RevokeRetention",
        ).retainCoexV2BotSecretsForAuthorizedRevokes(
          N,
          q.resolvedTargetMsgKeys,
        ),
        H = L.filter(function (e) {
          var t = e[0];
          return !q.coexV2RevokeMsgInfos.has(t);
        }).map(function (e) {
          var t = e[1];
          return t;
        });
      if (H.length > 0)
        try {
          await o("WAWebDBStoreRevokeMsgs").findAndDeleteAssociatedPluginMsg(H);
        } catch (e) {
          var G = r("getErrorSafe")(e);
          o("WALogger")
            .ERROR(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "Store Revoked Msg: delete associated carousel revoke failed",
                ])),
            )
            .catching(G)
            .sendLogs("Plugin carousel delete revoke failed");
        }
      var z = [],
        j = new Set(),
        K = o("WAWebModelStorageUtils")
          .getStorage()
          .lock(["message", "message-association"], async function (e) {
            var i = e[0],
              s = e[1],
              u = N.map(function (e) {
                var t;
                return (t = q.resolvedTargetMsgKeys.get(
                  e.revokeMsgKey.toString(),
                )) != null
                  ? t
                  : e.revokeMsgKey;
              }),
              c = u.map(o("WAWebLidMigrationUtils").getAlternateMsgKey),
              d = [].concat(
                u,
                c,
                N.map(function (e) {
                  return e.newMsgKey;
                }),
              ),
              m = await o(
                "WAWebDBAssociatedMsgsAttachDetachAPI",
              ).getAssociatedMsgsByParentMsgKeyFromAssociationTable(
                d.filter(Boolean),
              ),
              p = o(
                "WAWebDBAssociatedMsgsAttachDetachAPI",
              ).getValidAssociatedMsgs(
                m,
                o("WAWebDBAssociatedMsgsAttachDetachAPI").ViewModeUpdateType
                  .Detach,
              ),
              _ = p.map(function (e) {
                return e.msgKey;
              }),
              f = [].concat(
                d.map(function (e) {
                  return e ? e.toString() : "";
                }),
                _,
              ),
              v = await i.bulkGet(f, !1),
              S = [],
              R = N.length,
              L = v.slice(0, R),
              E = v.slice(R, R * 2),
              k = v.slice(R * 2, R * 3),
              T = v.slice(R * 3).filter(Boolean),
              x = [],
              $ = [],
              P = [];
            if (
              (N.forEach(function (e, i) {
                var s,
                  u = (s = L[i]) != null ? s : E[i],
                  c = k[i];
                if (u == null) {
                  ($.length < 3 && $.push(String(e.revokeMsgKey)), S.push(e));
                  return;
                }
                var d = r("WAWebMsgKey").fromString(u.id);
                if (
                  e.skipRevokeWindow !== !0 &&
                  !o("WAWebRevoke").canRevokeOutsideWindow({
                    associationType: u.associationType,
                    revokedMsgKey: d,
                    subtype: e.subtype,
                  }) &&
                  !o("WAWebRevoke").isWithinRevokeWindow({
                    revokedMsgKey: d,
                    revokedMsgTimestamp: u.t,
                    revokeTimestamp: e.revokeTimestamp,
                  })
                ) {
                  (q.recordRejectedRevoke(e),
                    P.length < 3 && P.push(String(e.revokeMsgKey)));
                  return;
                }
                if (
                  (q.recordAcceptedRevoke(e),
                  o("WAWebInstantMsgTypes").isInstantMsgType(u.type))
                ) {
                  (n.add(u.id), a.push(D(u, e, c)));
                  return;
                }
                (t.add(u.id),
                  C.push(String(u.rowId)),
                  u.associationType != null &&
                    z.push([u.id, u.associationType]));
                var m = D(u, e, c);
                if (
                  (l.push(m), o("WAWebMsgGetters").getIsImportantMessage(u))
                ) {
                  var p = r("WAWebMsgKey").fromString(u.id),
                    _ = p.remote.toString();
                  if (b.has(_)) {
                    var f,
                      g = (f = b.get(_)) != null ? f : [];
                    b.set(_, [].concat(g, [u.id]));
                  } else b.set(_, [u.id]);
                }
              }),
              $.length > 0 &&
                o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "processRevokeMsg: ",
                      " revokes are orphan or addon => ",
                      "",
                    ])),
                  S.length,
                  $,
                ),
              P.length > 0 &&
                o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "processRevokeMsgs: ",
                      " revokes outside window => ",
                      "",
                    ])),
                  P.length,
                  P,
                ),
              T != null && T.length)
            ) {
              var M = I(t),
                w = T.filter(function (e) {
                  return !o(
                    "WAWebAssociationProcessor",
                  ).isChildDeletedOnParentRevoke(e.associationType);
                }),
                A = T.filter(function (e) {
                  return (
                    o("WAWebAssociationProcessor").isChildDeletedOnParentRevoke(
                      e.associationType,
                    ) &&
                    e.parentMsgKey != null &&
                    M.has(e.parentMsgKey)
                  );
                });
              A.forEach(function (e) {
                (t.add(e.id),
                  j.add(e.id),
                  e.rowId != null && C.push(String(e.rowId)));
              });
              var F = o("WAWebDBAssociatedMsgsAttachDetachAPI")
                .getDetachedForeverAssociatedMsgs(w)
                .filter(Boolean);
              (F.forEach(function (e) {
                e != null && !t.has(e.id) && x.push(e);
              }),
                [].concat(w, A).forEach(function (e) {
                  z.push([e.id, e.associationType]);
                }),
                o("WAWebBackendApi").frontendFireAndForget(
                  "detachAssociatedMsgsForever",
                  {
                    msgIds: F.map(function (e) {
                      return e.id;
                    }),
                  },
                ));
            }
            var O = l.filter(function (e) {
                return (
                  e.protocolMessageKey == null || !j.has(e.protocolMessageKey)
                );
              }),
              B = [],
              W = [];
            return (
              t.size > 0 &&
                B.push(
                  i.bulkRemove(Array.from(t)).catch(function (e) {
                    var n = r("getErrorSafe")(e);
                    throw (
                      o("WALogger")
                        .ERROR(
                          y ||
                            (y = babelHelpers.taggedTemplateLiteralLoose([
                              "Store Revoked Msg: failed to remove ",
                              " revoked messages",
                            ])),
                          t.size,
                        )
                        .catching(n)
                        .sendLogs(
                          "store-revoked-msg-failed-to-remove-revoked-messages",
                        ),
                      e
                    );
                  }),
                ),
              z.length > 0 && B.push(s.bulkRemove(z)),
              await Promise.all(B),
              (O.length > 0 || x.length > 0) &&
                W.push(
                  i.bulkCreateOrReplace_ALREADY_ENCRYPTED_RECORDS_ONLY(
                    [].concat(O, x),
                  ),
                ),
              await Promise.all(W),
              S
            );
          }),
        Q = K.then(function () {
          return E(n, a);
        }, r("WAWebNoop")),
        X = await Promise.all([
          K,
          o("WAWebAddonProcessRevoke").processRevokeMsgs(N),
        ]),
        Y = X[0],
        J = X[1];
      if (
        (o(
          "WAWebCoexV2RevokeRetention",
        ).evictCoexV2RawSecretsForCommittedRevokes(
          new Set([].concat(Array.from(t), Array.from(n))),
          V,
        ),
        j.forEach(function (e) {
          o("WAWebBackendApi").frontendFireAndForget(
            "deleteMessageFromCollectionForSync",
            { msgKey: e },
          );
        }),
        Y.length > 0)
      ) {
        var Z = Y.filter(function (e) {
          return J.has(e.revokeMsgKey);
        }).map(function (e) {
          return T(e, e.revokeMsgKey);
        });
        Z.length > 0 && (await o("WAWebApiOrphanRevoke").addOrphanRevokes(Z));
      }
      return (
        S == null || S.purge(C).catch(r("WAWebNoop")),
        o("WAWebDBReportingTokenUtils").handleDeleteReportingInfos(
          t ? Array.from(t) : [],
          { removeWholeRow: !1 },
        ),
        b.size > 0 && o("WAWebApiChatUnreadMention").removeUnreadMentionChat(b),
        await Q,
        q.getCleanupMsgKeys(i)
      );
    }
    async function E(e, t) {
      e.size !== 0 &&
        (await o("WAWebDBRemoveMsgsAndUpdateChats")
          .removeMessagesAndUpdateChats(Array.from(e), function (e) {
            return o("WAWebInstantMsgTypes").isInstantMsgType(e.type);
          })
          .catch(function (e) {
            return (
              o("WALogger")
                .ERROR(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "processRevokeMsgs: deleting revoked messages failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("delete-on-revoke-failed"),
              x(t)
            );
          }));
    }
    function k(e) {
      var t = e.authenticatedSender,
        n = e.newMsgKey,
        a = e.revokeMsgKey,
        i = e.sender;
      return (
        (r("WAWebWid").equals.apply(
          r("WAWebWid"),
          o("WAWebLidMigrationUtils").toCommonAddressingMode(
            a.remote,
            n.remote,
          ),
        ) &&
          r("WAWebWid").equals.apply(
            r("WAWebWid"),
            o("WAWebLidMigrationUtils").toCommonAddressingMode(
              a.participant,
              n.participant,
            ),
          ) &&
          a.fromMe === n.fromMe) ||
        o("WAWebRevoke").isMyRevokeOfHatchAgentReply({
          revokeKey: n,
          revoker: t != null ? t : i,
          targetKey: a,
        })
      );
    }
    function I(e) {
      var t = new Set(e);
      for (var n of e) {
        var a = o("WAWebLidMigrationUtils").getAlternateMsgKey(
          r("WAWebMsgKey").fromString(n),
        );
        a != null && t.add(a.toString());
      }
      return t;
    }
    function T(e, t) {
      var n, r, o;
      return {
        msgKey: t.toString(),
        sender: e.sender,
        authenticatedSender:
          (n =
            (r =
              e.authenticatedSender === void 0
                ? e.sender
                : e.authenticatedSender) == null
              ? void 0
              : r.toString()) != null
            ? n
            : null,
        timestamp: e.timestamp,
        subtype: (o = e.subtype) != null ? o : "sender_revoke",
      };
    }
    function D(e, t, n) {
      var a,
        i = o("WAWebRevoke").getMsgKeyAfterRevoke({
          originalKey: r("WAWebMsgKey").from(e.id),
          revokeKey: t.newMsgKey,
        });
      return {
        id: i.toString(),
        ack: e.ack,
        to: e.to,
        author: e.author,
        type: o("WAWebMsgType").MSG_TYPE.REVOKED,
        subtype: t.subtype === "admin_revoke" ? "admin" : "sender",
        revokeSender: t.sender,
        protocolMessageKey: e.id,
        protocolMessageRowId: n == null ? void 0 : n.rowId,
        from: e.from,
        t: e.t,
        rowId: e.rowId,
        internalId: e.internalId,
        messageRangeIndex: e.messageRangeIndex,
        revokeTimestamp: t.revokeTimestamp,
        disappearingModeInitiator: e.disappearingModeInitiator,
        ephemeralDuration: e.ephemeralDuration,
        ephemeralSettingTimestamp: e.ephemeralSettingTimestamp,
        viewMode: o("WAWebViewModeUtils").getRevokedViewMode({
          associationType: e.associationType,
          incomingViewMode: (a = t.viewMode) != null ? a : e.viewMode,
          msgType: e.type,
          storedViewMode: e.viewMode,
        }),
      };
    }
    async function x(e) {
      if (e.length !== 0) {
        var t = Array.from(
          new Set(
            e
              .map(function (e) {
                return e.protocolMessageKey;
              })
              .filter(Boolean)
              .map(String),
          ),
        );
        try {
          await o("WAWebModelStorageUtils")
            .getStorage()
            .lock(["message"], async function () {
              var n = new Set(
                (await o("WAWebSchemaMessage").getMessageTable().bulkGet(t, !1))
                  .filter(Boolean)
                  .map(function (e) {
                    return e.id;
                  }),
              );
              (await o("WAWebSchemaMessage")
                .getMessageTable()
                .bulkRemove(Array.from(n)),
                await o("WAWebSchemaMessage")
                  .getMessageTable()
                  .bulkCreateOrReplace(
                    e.filter(function (e) {
                      return n.has(String(e.protocolMessageKey));
                    }),
                  ));
            });
        } catch (e) {
          o("WALogger")
            .ERROR(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "processRevokeMsgs: storing tombstones for revoked messages failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("delete-on-revoke-tombstone-failed");
        }
        var n = new Map();
        (t.forEach(function (e) {
          var t,
            o = r("WAWebMsgKey").fromString(e).remote.toString();
          n.set(o, [].concat((t = n.get(o)) != null ? t : [], [e]));
        }),
          n.forEach(function (e, t) {
            o("WAWebBackendApi").frontendFireAndForget("chatDeleteMessages", {
              chatId: t,
              messageIds: e,
              removeLoaded: !0,
            });
          }));
      }
    }
    ((l.processRevokeMsgs = R),
      (l.processRevokeMsgsAndGetCleanupEligibleKeys = L));
  },
  98,
);
