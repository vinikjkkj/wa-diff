__d(
  "WAWebDBStoreRevokeMsgs",
  [
    "WALogger",
    "WAWebAddonProcessRevoke",
    "WAWebApiChatUnreadMention",
    "WAWebApiOrphanRevoke",
    "WAWebBackendApi",
    "WAWebDBAssociatedMsgsAttachDetachAPI",
    "WAWebDBReportingTokenUtils",
    "WAWebLidMigrationUtils",
    "WAWebMessageAssociationGatingUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebRevoke",
    "WAWebSchemaMessage",
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
      b = C.ftsLightClient,
      v = 20;
    async function S(e) {
      var t = new Set(),
        n = [],
        a = [],
        i = new Map(),
        l = new Map(),
        C = [],
        v = [],
        S = [],
        L = [],
        E = [],
        k = e.filter(function (e) {
          var t = e.newMsgKey,
            n = e.revokeMsgKey,
            a = e.subtype,
            i = !0;
          return (
            a === "admin_revoke"
              ? !r("WAWebWid").isGroup(n.remote) &&
                !r("WAWebWid").isNewsletter(n.remote)
                ? ((i = !1), S.length < 3 && S.push(String(n)))
                : r("WAWebWid").equals(n.remote, t.remote) ||
                  ((i = !1), L.length < 3 && L.push(String(n)))
              : ((i =
                  r("WAWebWid").equals.apply(
                    r("WAWebWid"),
                    o("WAWebLidMigrationUtils").toCommonAddressingMode(
                      n.remote,
                      t.remote,
                    ),
                  ) &&
                  r("WAWebWid").equals.apply(
                    r("WAWebWid"),
                    o("WAWebLidMigrationUtils").toCommonAddressingMode(
                      n.participant,
                      t.participant,
                    ),
                  ) &&
                  n.fromMe === t.fromMe),
                i ||
                  (E.length < 3 &&
                    E.push({ revokeMsgKey: String(n), newMsgKey: String(t) }),
                  l.set(e.revokeMsgKey.id, e))),
            i
          );
        });
      if (
        (S.length > 0 &&
          (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "processRevokeMsgs: ",
                " revokeMsgKeys have not been revoked => ",
                "",
              ])),
            S.length,
            S,
          ),
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "processRevokeMsgs: admin revoke has to be sent to a group or newsletter chat",
                ])),
            )
            .sendLogs("process-admin-revoke-message")),
        L.length > 0 &&
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "processRevokeMsgs: ",
                " revokeMsgKeys have not been revoked (different group) => ",
                "",
              ])),
            L.length,
            L,
          ),
          o("WALogger")
            .WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "processRevokeMsgs: admin revoke came for the different group than the original message was in",
                ])),
            )
            .sendLogs("process-admin-revoke-message")),
        E.length > 0 &&
          (o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "processRevokeMsgs: ",
                " invalid revoke requests => ",
                "",
              ])),
            E.length,
            E.map(function (e) {
              return e.revokeMsgKey;
            }),
          ),
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "processRevokeMsgs: sending invalid revokes for secondary validation as bot invoker revoke",
              ])),
          )),
        l.size > 0)
      )
        try {
          var I = Array.from(l.entries()),
            T = I.map(function (e) {
              return e[1].revokeMsgKey.toString();
            }),
            D = I.map(function (e) {
              var t;
              return (t = o("WAWebLidMigrationUtils").getAlternateMsgKey(
                e[1].revokeMsgKey,
              )) == null
                ? void 0
                : t.toString();
            }),
            x = await o("WAWebSchemaMessage")
              .getMessageTable()
              .bulkGet([].concat(T, D), !1);
          (x.forEach(function (e) {
            var t = !1;
            if (e != null) {
              var n = r("WAWebMsgKey").from(e.id),
                a = l.get(n.id);
              if (a != null) {
                var i = a.newMsgKey,
                  s = a.sender,
                  u = a.subtype;
                if (u !== "admin_revoke") {
                  var c = n.remote,
                    d = e.botTargetSenderJid
                      ? o("WAWebWidFactory").createWidFromWidLike(
                          e.botTargetSenderJid,
                        )
                      : null;
                  if (!(d == null || c == null)) {
                    var m =
                        e.botPluginSearchUrl != null &&
                        e.botResponseTargetId != null,
                      p = !m && e.botPluginMaybeParent === !0;
                    if (
                      (c.isGroup()
                        ? r("WAWebWid").equals.apply(
                            r("WAWebWid"),
                            o("WAWebLidMigrationUtils").toCommonAddressingMode(
                              d,
                              i.participant,
                            ),
                          ) && (t = !0)
                        : c.isBot() ||
                          (r("WAWebWid").equals.apply(
                            r("WAWebWid"),
                            o("WAWebLidMigrationUtils").toCommonAddressingMode(
                              d,
                              s,
                            ),
                          ) &&
                            (t = !0)),
                      t)
                    ) {
                      C.push(a);
                      var _ = e.botResponseTargetId,
                        f = e.internalId;
                      (m || p) &&
                        f != null &&
                        _ != null &&
                        v.push({ internalId: f, targetId: _ });
                    }
                  }
                }
              }
            }
          }),
            k.push.apply(k, C));
        } catch (e) {
          var $ = r("getErrorSafe")(e);
          o("WALogger")
            .ERROR(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "Store Revoked Msg: re-validate bot revoke failed",
                ])),
            )
            .catching($)
            .sendLogs("Re-validate revoke failed");
        }
      if (v.length > 0)
        try {
          await R(v);
        } catch (e) {
          var P = r("getErrorSafe")(e);
          o("WALogger")
            .ERROR(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "Store Revoked Msg: delete associated carousel revoke failed",
                ])),
            )
            .catching(P)
            .sendLogs("Plugin carousel delete revoke failed");
        }
      var N = [],
        M = await Promise.all([
          o("WAWebModelStorageUtils")
            .getStorage()
            .lock(["message", "message-association"], async function (e) {
              var l = e[0],
                s = e[1],
                u = [].concat(
                  k.map(function (e) {
                    return e.revokeMsgKey;
                  }),
                  k.map(function (e) {
                    return o("WAWebLidMigrationUtils").getAlternateMsgKey(
                      e.revokeMsgKey,
                    );
                  }),
                  k.map(function (e) {
                    return e.newMsgKey;
                  }),
                ),
                c = [];
              if (
                o(
                  "WAWebMessageAssociationGatingUtils",
                ).isMessageAssociationInfraEnabled()
              ) {
                var d = await o(
                    "WAWebDBAssociatedMsgsAttachDetachAPI",
                  ).getAssociatedMsgsByParentMsgKeyFromAssociationTable(
                    u.filter(Boolean),
                  ),
                  m = o(
                    "WAWebDBAssociatedMsgsAttachDetachAPI",
                  ).getValidAssociatedMsgs(
                    d,
                    o("WAWebDBAssociatedMsgsAttachDetachAPI").ViewModeUpdateType
                      .Detach,
                  );
                c = m.map(function (e) {
                  return e.msgKey;
                });
              }
              var p = [].concat(
                  u.map(function (e) {
                    return e ? e.toString() : "";
                  }),
                  c,
                ),
                _ = await l.bulkGet(p, !1),
                f = [],
                C = k.length,
                b = _.slice(0, C),
                v = _.slice(C, C * 2),
                S = _.slice(C * 2, C * 3),
                R = _.slice(C * 3).filter(Boolean),
                L = [],
                E = [],
                I = [];
              if (
                (k.forEach(function (e, l) {
                  var s,
                    u,
                    c = (s = b[l]) != null ? s : v[l],
                    d = S[l];
                  if (c == null) {
                    (E.length < 3 && E.push(String(e.revokeMsgKey)), f.push(e));
                    return;
                  }
                  if (
                    !o("WAWebRevoke").isWithinRevokeWindow({
                      revokedMsgKey: r("WAWebMsgKey").fromString(c.id),
                      revokedMsgTimestamp: c.t,
                      revokeTimestamp: e.revokeTimestamp,
                    })
                  ) {
                    I.length < 3 && I.push(String(e.revokeMsgKey));
                    return;
                  }
                  (t.add(c.id),
                    a.push(String(c.rowId)),
                    o(
                      "WAWebMessageAssociationGatingUtils",
                    ).isMessageAssociationInfraEnabled() &&
                      c.associationType != null &&
                      N.push([c.id, c.associationType]));
                  var m = o("WAWebRevoke").getMsgKeyAfterRevoke({
                      originalKey: r("WAWebMsgKey").from(c.id),
                      revokeKey: e.newMsgKey,
                    }),
                    p = {
                      id: m.toString(),
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
                      viewMode: (u = e.viewMode) != null ? u : c.viewMode,
                    };
                  if (
                    (n.push(p), o("WAWebMsgGetters").getIsImportantMessage(c))
                  ) {
                    var _ = r("WAWebMsgKey").fromString(c.id),
                      g = _.remote.toString();
                    if (i.has(g)) {
                      var h,
                        y = (h = i.get(g)) != null ? h : [];
                      i.set(g, [].concat(y, [c.id]));
                    } else i.set(g, [c.id]);
                  }
                }),
                E.length > 0 &&
                  o("WALogger").LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "processRevokeMsg: ",
                        " revokes are orphan or addon => ",
                        "",
                      ])),
                    f.length,
                    E,
                  ),
                I.length > 0 &&
                  o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "processRevokeMsgs: ",
                        " revokeMsgKeys are outside revoke window => ",
                        "",
                      ])),
                    I.length,
                    I,
                  ),
                R != null && R.length)
              ) {
                var T = o("WAWebDBAssociatedMsgsAttachDetachAPI")
                  .getDetachedForeverAssociatedMsgs(R)
                  .filter(Boolean);
                (T.forEach(function (e) {
                  e != null && !t.has(e.id) && L.push(e);
                }),
                  R.forEach(function (e) {
                    N.push([e.id, e.associationType]);
                  }),
                  o("WAWebBackendApi").frontendFireAndForget(
                    "detachAssociatedMsgsForever",
                    {
                      msgIds: T.map(function (e) {
                        return e.id;
                      }),
                    },
                  ));
              }
              var D = [],
                x = [];
              return (
                t.size > 0 &&
                  D.push(
                    l.bulkRemove(Array.from(t)).catch(function (e) {
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
                N.length > 0 && D.push(s.bulkRemove(N)),
                await Promise.all(D),
                (n.length > 0 || L.length > 0) &&
                  x.push(
                    l.bulkCreateOrReplace_ALREADY_ENCRYPTED_RECORDS_ONLY(
                      [].concat(n, L),
                    ),
                  ),
                await Promise.all(x),
                f
              );
            }),
          o("WAWebAddonProcessRevoke").processRevokeMsgs(k),
        ]),
        w = M[0],
        A = M[1];
      if (w.length > 0) {
        var F = w
          .filter(function (e) {
            return A.has(e.revokeMsgKey);
          })
          .map(function (e) {
            var t;
            return {
              msgKey: e.revokeMsgKey.toString(),
              sender: e.sender,
              timestamp: e.timestamp,
              subtype: (t = e.subtype) != null ? t : "sender_revoke",
            };
          });
        F.length > 0 && (await o("WAWebApiOrphanRevoke").addOrphanRevokes(F));
      }
      (b == null || b.purge(a).catch(r("WAWebNoop")),
        o("WAWebDBReportingTokenUtils").handleDeleteReportingInfos(
          t ? Array.from(t) : [],
          { removeWholeRow: !1 },
        ),
        i.size > 0 &&
          o("WAWebApiChatUnreadMention").removeUnreadMentionChat(i));
    }
    async function R(e) {
      var t = [],
        n = [],
        a = e.map(async function (e) {
          var r = await L(e),
            a = r.pluginLinkMsgIds,
            i = r.pluginLinkMsgIdsRowIds;
          ((t = [].concat(t, a)),
            (n = [].concat(n, i)),
            await o("WAWebSchemaMessage").getMessageTable().bulkRemove(t));
        });
      (await Promise.all(a),
        b == null || b.purge(n).catch(r("WAWebNoop")),
        o("WAWebBackendApi").frontendFireAndForget(
          "deleteAssociatedBotCarouselMsgs",
          { msgKeys: t },
        ));
    }
    async function L(e) {
      var t = [],
        n = [],
        r = e.internalId,
        a = e.targetId,
        i = r.split("_")[0];
      return (
        await o("WAWebSchemaMessage")
          .getMessageTable()
          .between(
            ["internalId"],
            r,
            i + "_g",
            { reverse: !1, limit: v, shouldDecrypt: !1 },
            function (e) {
              if (e.botResponseTargetId === a)
                (t.push(e.id), n.push(String(e.rowId)));
              else return !0;
              return !1;
            },
          ),
        { pluginLinkMsgIds: t, pluginLinkMsgIdsRowIds: n }
      );
    }
    ((l.processRevokeMsgs = S),
      (l.findAndDeleteAssociatedPluginMsg = R),
      (l.findAssociatedPluginMsgs = L));
  },
  98,
);
