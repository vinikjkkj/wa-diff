__d(
  "WAWebDBProcessRevokeMsgs",
  [
    "Promise",
    "WALogger",
    "WAWebAddonProcessRevoke",
    "WAWebApiChatUnreadMention",
    "WAWebApiOrphanRevoke",
    "WAWebAssociationProcessor",
    "WAWebBackendApi",
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
    "asyncToGeneratorRuntime",
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
      b = (e = n("cr:375")) != null ? e : {},
      v = b.ftsLightClient;
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Set(),
            a = [],
            i = [],
            l = new Map(),
            b = new Map(),
            S = [],
            R = [],
            E = [],
            k = [],
            I = [],
            T = e.filter(function (e) {
              var t = e.newMsgKey,
                n = e.revokeMsgKey,
                a = e.subtype,
                i = !0;
              return (
                a === "admin_revoke"
                  ? !r("WAWebWid").isGroup(n.remote) &&
                    !r("WAWebWid").isNewsletter(n.remote)
                    ? ((i = !1), E.length < 3 && E.push(String(n)))
                    : r("WAWebWid").equals(n.remote, t.remote) ||
                      ((i = !1), k.length < 3 && k.push(String(n)))
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
                      (I.length < 3 &&
                        I.push({
                          revokeMsgKey: String(n),
                          newMsgKey: String(t),
                        }),
                      b.set(e.revokeMsgKey.id, e))),
                i
              );
            });
          if (
            (E.length > 0 &&
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "processRevokeMsgs: ",
                    " revokeMsgKeys have not been revoked => ",
                    "",
                  ])),
                E.length,
                E,
              ),
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "processRevokeMsgs: admin revoke needs group/newsletter chat",
                    ])),
                )
                .sendLogs("process-admin-revoke-message")),
            k.length > 0 &&
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "processRevokeMsgs: ",
                    " revokes skipped (diff group) => ",
                    "",
                  ])),
                k.length,
                k,
              ),
              o("WALogger")
                .WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "processRevokeMsgs: admin revoke group != orig msg group",
                    ])),
                )
                .sendLogs("process-admin-revoke-message")),
            I.length > 0 &&
              (o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "processRevokeMsgs: ",
                    " invalid revoke requests => ",
                    "",
                  ])),
                I.length,
                I.map(function (e) {
                  return e.revokeMsgKey;
                }),
              ),
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "processRevokeMsgs: retry invalid revokes as bot invoker",
                  ])),
              )),
            b.size > 0)
          )
            try {
              var D = Array.from(b.entries()),
                x = D.map(function (e) {
                  return e[1].revokeMsgKey.toString();
                }),
                $ = D.map(function (e) {
                  var t;
                  return (t = o("WAWebLidMigrationUtils").getAlternateMsgKey(
                    e[1].revokeMsgKey,
                  )) == null
                    ? void 0
                    : t.toString();
                }),
                P = yield o("WAWebSchemaMessage")
                  .getMessageTable()
                  .bulkGet([].concat(x, $), !1);
              (P.forEach(function (e) {
                var t = !1;
                if (e != null) {
                  var n = r("WAWebMsgKey").from(e.id),
                    a = b.get(n.id);
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
                                o(
                                  "WAWebLidMigrationUtils",
                                ).toCommonAddressingMode(c, i.participant),
                              ) && (t = !0)
                            : u.isBot() ||
                              (r("WAWebWid").equals.apply(
                                r("WAWebWid"),
                                o(
                                  "WAWebLidMigrationUtils",
                                ).toCommonAddressingMode(c, l),
                              ) &&
                                (t = !0)),
                          t)
                        ) {
                          S.push(a);
                          var p = e.botResponseTargetId,
                            _ = e.internalId;
                          (d || m) &&
                            _ != null &&
                            p != null &&
                            R.push({ internalId: _, targetId: p });
                        }
                      }
                    }
                  }
                }
              }),
                T.push.apply(T, S));
            } catch (e) {
              var N = r("getErrorSafe")(e);
              o("WALogger")
                .ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "Store Revoked Msg: re-validate bot revoke failed",
                    ])),
                )
                .catching(N)
                .sendLogs("Re-validate revoke failed");
            }
          if (R.length > 0)
            try {
              yield o(
                "WAWebDBStoreRevokeMsgs",
              ).findAndDeleteAssociatedPluginMsg(R);
            } catch (e) {
              var M = r("getErrorSafe")(e);
              o("WALogger")
                .ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "Store Revoked Msg: delete associated carousel revoke failed",
                    ])),
                )
                .catching(M)
                .sendLogs("Plugin carousel delete revoke failed");
            }
          var w = [],
            A = new Set(),
            F = yield (C || (C = n("Promise"))).all([
              o("WAWebModelStorageUtils")
                .getStorage()
                .lock(
                  ["message", "message-association"],
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var s = e[0],
                          u = e[1],
                          c = [].concat(
                            T.map(function (e) {
                              return e.revokeMsgKey;
                            }),
                            T.map(function (e) {
                              return o(
                                "WAWebLidMigrationUtils",
                              ).getAlternateMsgKey(e.revokeMsgKey);
                            }),
                            T.map(function (e) {
                              return e.newMsgKey;
                            }),
                          ),
                          d = yield o(
                            "WAWebDBAssociatedMsgsAttachDetachAPI",
                          ).getAssociatedMsgsByParentMsgKeyFromAssociationTable(
                            c.filter(Boolean),
                          ),
                          m = o(
                            "WAWebDBAssociatedMsgsAttachDetachAPI",
                          ).getValidAssociatedMsgs(
                            d,
                            o("WAWebDBAssociatedMsgsAttachDetachAPI")
                              .ViewModeUpdateType.Detach,
                          ),
                          p = m.map(function (e) {
                            return e.msgKey;
                          }),
                          _ = [].concat(
                            c.map(function (e) {
                              return e ? e.toString() : "";
                            }),
                            p,
                          ),
                          f = yield s.bulkGet(_, !1),
                          b = [],
                          v = T.length,
                          S = f.slice(0, v),
                          R = f.slice(v, v * 2),
                          E = f.slice(v * 2, v * 3),
                          k = f.slice(v * 3).filter(Boolean),
                          I = [],
                          D = [],
                          x = [];
                        if (
                          (T.forEach(function (e, n) {
                            var s,
                              u,
                              c = (s = S[n]) != null ? s : R[n],
                              d = E[n];
                            if (c == null) {
                              (D.length < 3 && D.push(String(e.revokeMsgKey)),
                                b.push(e));
                              return;
                            }
                            if (
                              e.skipRevokeWindow !== !0 &&
                              !o("WAWebRevoke").isWithinRevokeWindow({
                                revokedMsgKey: r("WAWebMsgKey").fromString(
                                  c.id,
                                ),
                                revokedMsgTimestamp: c.t,
                                revokeTimestamp: e.revokeTimestamp,
                              })
                            ) {
                              x.length < 3 && x.push(String(e.revokeMsgKey));
                              return;
                            }
                            (t.add(c.id),
                              i.push(String(c.rowId)),
                              c.associationType != null &&
                                w.push([c.id, c.associationType]));
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
                                  e.subtype === "admin_revoke"
                                    ? "admin"
                                    : "sender",
                                revokeSender: e.sender,
                                protocolMessageKey: c.id,
                                protocolMessageRowId:
                                  d == null ? void 0 : d.rowId,
                                from: c.from,
                                t: c.t,
                                rowId: c.rowId,
                                internalId: c.internalId,
                                messageRangeIndex: c.messageRangeIndex,
                                revokeTimestamp: e.revokeTimestamp,
                                disappearingModeInitiator:
                                  c.disappearingModeInitiator,
                                ephemeralDuration: c.ephemeralDuration,
                                ephemeralSettingTimestamp:
                                  c.ephemeralSettingTimestamp,
                                viewMode: o(
                                  "WAWebViewModeUtils",
                                ).getRevokedViewMode(
                                  c.viewMode,
                                  c.associationType,
                                  (u = e.viewMode) != null ? u : c.viewMode,
                                ),
                              };
                            if (
                              (a.push(p),
                              o("WAWebMsgGetters").getIsImportantMessage(c))
                            ) {
                              var _ = r("WAWebMsgKey").fromString(c.id),
                                f = _.remote.toString();
                              if (l.has(f)) {
                                var g,
                                  h = (g = l.get(f)) != null ? g : [];
                                l.set(f, [].concat(h, [c.id]));
                              } else l.set(f, [c.id]);
                            }
                          }),
                          D.length > 0 &&
                            o("WALogger").LOG(
                              g ||
                                (g = babelHelpers.taggedTemplateLiteralLoose([
                                  "processRevokeMsg: ",
                                  " revokes are orphan or addon => ",
                                  "",
                                ])),
                              b.length,
                              D,
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
                                ).isChildDeletedOnParentRevoke(
                                  e.associationType,
                                ) &&
                                e.parentMsgKey != null &&
                                $.has(e.parentMsgKey)
                              );
                            });
                          N.forEach(function (e) {
                            (t.add(e.id),
                              A.add(e.id),
                              e.rowId != null && i.push(String(e.rowId)));
                          });
                          var M = o("WAWebDBAssociatedMsgsAttachDetachAPI")
                            .getDetachedForeverAssociatedMsgs(P)
                            .filter(Boolean);
                          (M.forEach(function (e) {
                            e != null && !t.has(e.id) && I.push(e);
                          }),
                            [].concat(P, N).forEach(function (e) {
                              w.push([e.id, e.associationType]);
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
                        var F = a.filter(function (e) {
                            return (
                              e.protocolMessageKey == null ||
                              !A.has(e.protocolMessageKey)
                            );
                          }),
                          O = [],
                          B = [];
                        return (
                          t.size > 0 &&
                            O.push(
                              s.bulkRemove(Array.from(t)).catch(function (e) {
                                var n = r("getErrorSafe")(e);
                                throw (
                                  o("WALogger")
                                    .ERROR(
                                      y ||
                                        (y =
                                          babelHelpers.taggedTemplateLiteralLoose(
                                            [
                                              "Store Revoked Msg: failed to remove ",
                                              " revoked messages",
                                            ],
                                          )),
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
                          w.length > 0 && O.push(u.bulkRemove(w)),
                          yield (C || (C = n("Promise"))).all(O),
                          (F.length > 0 || I.length > 0) &&
                            B.push(
                              s.bulkCreateOrReplace_ALREADY_ENCRYPTED_RECORDS_ONLY(
                                [].concat(F, I),
                              ),
                            ),
                          yield C.all(B),
                          b
                        );
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                ),
              o("WAWebAddonProcessRevoke").processRevokeMsgs(T),
            ]),
            O = F[0],
            B = F[1];
          if (
            (A.forEach(function (e) {
              o("WAWebBackendApi").frontendFireAndForget(
                "deleteMessageFromCollectionForSync",
                { msgKey: e },
              );
            }),
            O.length > 0)
          ) {
            var W = O.filter(function (e) {
              return B.has(e.revokeMsgKey);
            }).map(function (e) {
              var t;
              return {
                msgKey: e.revokeMsgKey.toString(),
                sender: e.sender,
                timestamp: e.timestamp,
                subtype: (t = e.subtype) != null ? t : "sender_revoke",
              };
            });
            W.length > 0 &&
              (yield o("WAWebApiOrphanRevoke").addOrphanRevokes(W));
          }
          (v == null || v.purge(i).catch(r("WAWebNoop")),
            o("WAWebDBReportingTokenUtils").handleDeleteReportingInfos(
              t ? Array.from(t) : [],
              { removeWholeRow: !1 },
            ),
            l.size > 0 &&
              o("WAWebApiChatUnreadMention").removeUnreadMentionChat(l));
        })),
        R.apply(this, arguments)
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
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return (
            yield S(e),
            new Set(
              e.map(function (e) {
                return e.revokeMsgKey.toString();
              }),
            )
          );
        })),
        k.apply(this, arguments)
      );
    }
    ((l.processRevokeMsgs = S),
      (l.processRevokeMsgsAndGetCleanupEligibleKeys = E));
  },
  98,
);
