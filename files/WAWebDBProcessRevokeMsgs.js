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
    "WAWebDBReportingTokenUtils",
    "WAWebDBStoreRevokeMsgs",
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
      C = (e = n("cr:375")) != null ? e : {},
      b = C.ftsLightClient;
    async function v(e) {
      await S(e);
    }
    async function S(e) {
      var t = new Set(),
        n = new Set(
          e.map(function (e) {
            return e.revokeMsgKey.toString();
          }),
        ),
        a = [],
        i = [],
        l = new Map(),
        C = new Map(),
        v = [],
        S = [],
        k = [],
        I = [],
        T = [],
        D = e.filter(function (e) {
          var t = e.newMsgKey,
            n = e.revokeMsgKey,
            o = e.subtype,
            a = !0;
          return (
            o === "admin_revoke"
              ? !r("WAWebWid").isGroup(n.remote) &&
                !r("WAWebWid").isNewsletter(n.remote)
                ? ((a = !1), k.length < 3 && k.push(String(n)))
                : r("WAWebWid").equals(n.remote, t.remote) ||
                  ((a = !1), I.length < 3 && I.push(String(n)))
              : ((a = R(e)),
                a ||
                  (T.length < 3 &&
                    T.push({ revokeMsgKey: String(n), newMsgKey: String(t) }),
                  C.set(e.revokeMsgKey.id, e))),
            a
          );
        });
      if (
        (k.length > 0 &&
          (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "processRevokeMsgs: ",
                " revokeMsgKeys have not been revoked => ",
                "",
              ])),
            k.length,
            k,
          ),
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "processRevokeMsgs: admin revoke needs group/newsletter chat",
                ])),
            )
            .sendLogs("process-admin-revoke-message")),
        I.length > 0 &&
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "processRevokeMsgs: ",
                " revokes skipped (diff group) => ",
                "",
              ])),
            I.length,
            I,
          ),
          o("WALogger")
            .WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "processRevokeMsgs: admin revoke group != orig msg group",
                ])),
            )
            .sendLogs("process-admin-revoke-message")),
        T.length > 0 &&
          (o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "processRevokeMsgs: ",
                " invalid revoke requests => ",
                "",
              ])),
            T.length,
            T.map(function (e) {
              return e.revokeMsgKey;
            }),
          ),
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "processRevokeMsgs: retry invalid revokes as bot invoker",
              ])),
          )),
        C.size > 0)
      )
        try {
          var x,
            $ = Array.from(C.entries()),
            P = $.map(function (e) {
              return e[1].revokeMsgKey.toString();
            }),
            N = $.map(function (e) {
              var t;
              return (t = o("WAWebLidMigrationUtils").getAlternateMsgKey(
                e[1].revokeMsgKey,
              )) == null
                ? void 0
                : t.toString();
            }),
            M = await o("WAWebSchemaMessage")
              .getMessageTable()
              .bulkGet([].concat(P, N), !1);
          (M.forEach(function (e) {
            var t = !1;
            if (e != null) {
              var n = r("WAWebMsgKey").from(e.id),
                a = C.get(n.id);
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
                      v.push(a);
                      var p = e.botResponseTargetId,
                        _ = e.internalId;
                      (d || m) &&
                        _ != null &&
                        p != null &&
                        S.push([a, { internalId: _, targetId: p }]);
                    }
                  }
                }
              }
            }
          }),
            (x = D).push.apply(x, v));
        } catch (e) {
          var w = r("getErrorSafe")(e);
          o("WALogger")
            .ERROR(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "Store Revoked Msg: re-validate bot revoke failed",
                ])),
            )
            .catching(w)
            .sendLogs("Re-validate revoke failed");
        }
      var A = new Set(D),
        F = await o(
          "WAWebCoexV2StoredRevokeAuthorization",
        ).authorizeCoexV2RevokeMsgInfos(e);
      D = F.filterAuthorizedRevokeMsgInfos(A);
      var O = await F.deferEarlyRevokes(A, n);
      O.length > 0 &&
        (await o("WAWebApiOrphanRevoke").addOrphanRevokes(
          O.map(function (e) {
            var t = e[0],
              n = e[1];
            return babelHelpers.extends({}, E(t, n), {
              requiresTargetAuthorization: !0,
            });
          }),
        ));
      var B = await o(
          "WAWebCoexV2RevokeRetention",
        ).retainCoexV2BotSecretsForAuthorizedRevokes(
          D,
          F.resolvedTargetMsgKeys,
        ),
        W = S.filter(function (e) {
          var t = e[0];
          return !F.coexV2RevokeMsgInfos.has(t);
        }).map(function (e) {
          var t = e[1];
          return t;
        });
      if (W.length > 0)
        try {
          await o("WAWebDBStoreRevokeMsgs").findAndDeleteAssociatedPluginMsg(W);
        } catch (e) {
          var q = r("getErrorSafe")(e);
          o("WALogger")
            .ERROR(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "Store Revoked Msg: delete associated carousel revoke failed",
                ])),
            )
            .catching(q)
            .sendLogs("Plugin carousel delete revoke failed");
        }
      var U = [],
        V = new Set(),
        H = await Promise.all([
          o("WAWebModelStorageUtils")
            .getStorage()
            .lock(["message", "message-association"], async function (e) {
              var n = e[0],
                s = e[1],
                u = D.map(function (e) {
                  var t;
                  return (t = F.resolvedTargetMsgKeys.get(
                    e.revokeMsgKey.toString(),
                  )) != null
                    ? t
                    : e.revokeMsgKey;
                }),
                c = u.map(o("WAWebLidMigrationUtils").getAlternateMsgKey),
                d = [].concat(
                  u,
                  c,
                  D.map(function (e) {
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
                C = await n.bulkGet(f, !1),
                b = [],
                v = D.length,
                S = C.slice(0, v),
                R = C.slice(v, v * 2),
                E = C.slice(v * 2, v * 3),
                k = C.slice(v * 3).filter(Boolean),
                I = [],
                T = [],
                x = [];
              if (
                (D.forEach(function (e, n) {
                  var s,
                    u,
                    c = (s = S[n]) != null ? s : R[n],
                    d = E[n];
                  if (c == null) {
                    (T.length < 3 && T.push(String(e.revokeMsgKey)), b.push(e));
                    return;
                  }
                  var m = r("WAWebMsgKey").fromString(c.id);
                  if (
                    e.skipRevokeWindow !== !0 &&
                    !o("WAWebRevoke").canRevokeOutsideWindow({
                      associationType: c.associationType,
                      revokedMsgKey: m,
                      subtype: e.subtype,
                    }) &&
                    !o("WAWebRevoke").isWithinRevokeWindow({
                      revokedMsgKey: m,
                      revokedMsgTimestamp: c.t,
                      revokeTimestamp: e.revokeTimestamp,
                    })
                  ) {
                    (F.recordRejectedRevoke(e),
                      x.length < 3 && x.push(String(e.revokeMsgKey)));
                    return;
                  }
                  (F.recordAcceptedRevoke(e),
                    t.add(c.id),
                    i.push(String(c.rowId)),
                    c.associationType != null &&
                      U.push([c.id, c.associationType]));
                  var p = o("WAWebRevoke").getMsgKeyAfterRevoke({
                      originalKey: r("WAWebMsgKey").from(c.id),
                      revokeKey: e.newMsgKey,
                    }),
                    _ = {
                      id: p.toString(),
                      ack: c.ack,
                      to: c.to,
                      author: c.author,
                      type: o("WAWebMsgType").MSG_TYPE.REVOKED,
                      subtype:
                        e.subtype === "admin_revoke" ? "admin" : "sender",
                      revokeSender: e.sender,
                      protocolMessageKey: c.id,
                      protocolMessageRowId: d == null ? void 0 : d.rowId,
                      from: c.from,
                      t: c.t,
                      rowId: c.rowId,
                      internalId: c.internalId,
                      messageRangeIndex: c.messageRangeIndex,
                      revokeTimestamp: e.revokeTimestamp,
                      disappearingModeInitiator: c.disappearingModeInitiator,
                      ephemeralDuration: c.ephemeralDuration,
                      ephemeralSettingTimestamp: c.ephemeralSettingTimestamp,
                      viewMode: o("WAWebViewModeUtils").getRevokedViewMode(
                        c.viewMode,
                        c.associationType,
                        (u = e.viewMode) != null ? u : c.viewMode,
                      ),
                    };
                  if (
                    (a.push(_), o("WAWebMsgGetters").getIsImportantMessage(c))
                  ) {
                    var f = r("WAWebMsgKey").fromString(c.id),
                      g = f.remote.toString();
                    if (l.has(g)) {
                      var h,
                        y = (h = l.get(g)) != null ? h : [];
                      l.set(g, [].concat(y, [c.id]));
                    } else l.set(g, [c.id]);
                  }
                }),
                T.length > 0 &&
                  o("WALogger").LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "processRevokeMsg: ",
                        " revokes are orphan or addon => ",
                        "",
                      ])),
                    b.length,
                    T,
                  ),
                x.length > 0 &&
                  o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "processRevokeMsgs: ",
                        " revokes outside window => ",
                        "",
                      ])),
                    x.length,
                    x,
                  ),
                k != null && k.length)
              ) {
                var $ = L(t),
                  P = k.filter(function (e) {
                    return !o(
                      "WAWebAssociationProcessor",
                    ).isChildDeletedOnParentRevoke(e.associationType);
                  }),
                  N = k.filter(function (e) {
                    return (
                      o(
                        "WAWebAssociationProcessor",
                      ).isChildDeletedOnParentRevoke(e.associationType) &&
                      e.parentMsgKey != null &&
                      $.has(e.parentMsgKey)
                    );
                  });
                N.forEach(function (e) {
                  (t.add(e.id),
                    V.add(e.id),
                    e.rowId != null && i.push(String(e.rowId)));
                });
                var M = o("WAWebDBAssociatedMsgsAttachDetachAPI")
                  .getDetachedForeverAssociatedMsgs(P)
                  .filter(Boolean);
                (M.forEach(function (e) {
                  e != null && !t.has(e.id) && I.push(e);
                }),
                  [].concat(P, N).forEach(function (e) {
                    U.push([e.id, e.associationType]);
                  }),
                  o("WAWebBackendApi").frontendFireAndForget(
                    "detachAssociatedMsgsForever",
                    {
                      msgIds: M.map(function (e) {
                        return e.id;
                      }),
                    },
                  ));
              }
              var w = a.filter(function (e) {
                  return (
                    e.protocolMessageKey == null || !V.has(e.protocolMessageKey)
                  );
                }),
                A = [],
                O = [];
              return (
                t.size > 0 &&
                  A.push(
                    n.bulkRemove(Array.from(t)).catch(function (e) {
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
                U.length > 0 && A.push(s.bulkRemove(U)),
                await Promise.all(A),
                (w.length > 0 || I.length > 0) &&
                  O.push(
                    n.bulkCreateOrReplace_ALREADY_ENCRYPTED_RECORDS_ONLY(
                      [].concat(w, I),
                    ),
                  ),
                await Promise.all(O),
                b
              );
            }),
          o("WAWebAddonProcessRevoke").processRevokeMsgs(D),
        ]),
        G = H[0],
        z = H[1];
      if (
        (o(
          "WAWebCoexV2RevokeRetention",
        ).evictCoexV2RawSecretsForCommittedRevokes(t, B),
        V.forEach(function (e) {
          o("WAWebBackendApi").frontendFireAndForget(
            "deleteMessageFromCollectionForSync",
            { msgKey: e },
          );
        }),
        G.length > 0)
      ) {
        var j = G.filter(function (e) {
          return z.has(e.revokeMsgKey);
        }).map(function (e) {
          return E(e, e.revokeMsgKey);
        });
        j.length > 0 && (await o("WAWebApiOrphanRevoke").addOrphanRevokes(j));
      }
      return (
        b == null || b.purge(i).catch(r("WAWebNoop")),
        o("WAWebDBReportingTokenUtils").handleDeleteReportingInfos(
          t ? Array.from(t) : [],
          { removeWholeRow: !1 },
        ),
        l.size > 0 && o("WAWebApiChatUnreadMention").removeUnreadMentionChat(l),
        F.getCleanupMsgKeys(n)
      );
    }
    function R(e) {
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
    function L(e) {
      var t = new Set(e);
      for (var n of e) {
        var a = o("WAWebLidMigrationUtils").getAlternateMsgKey(
          r("WAWebMsgKey").fromString(n),
        );
        a != null && t.add(a.toString());
      }
      return t;
    }
    function E(e, t) {
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
    ((l.processRevokeMsgs = v),
      (l.processRevokeMsgsAndGetCleanupEligibleKeys = S));
  },
  98,
);
