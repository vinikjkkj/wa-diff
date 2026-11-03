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
          yield L(e);
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Set(),
            a = new Set(
              e.map(function (e) {
                return e.revokeMsgKey.toString();
              }),
            ),
            i = [],
            l = [],
            b = new Map(),
            S = new Map(),
            R = [],
            L = [],
            E = [],
            D = [],
            x = [],
            $ = e.filter(function (e) {
              var t = e.newMsgKey,
                n = e.revokeMsgKey,
                o = e.subtype,
                a = !0;
              return (
                o === "admin_revoke"
                  ? !r("WAWebWid").isGroup(n.remote) &&
                    !r("WAWebWid").isNewsletter(n.remote)
                    ? ((a = !1), E.length < 3 && E.push(String(n)))
                    : r("WAWebWid").equals(n.remote, t.remote) ||
                      ((a = !1), D.length < 3 && D.push(String(n)))
                  : ((a = k(e)),
                    a ||
                      (x.length < 3 &&
                        x.push({
                          revokeMsgKey: String(n),
                          newMsgKey: String(t),
                        }),
                      S.set(e.revokeMsgKey.id, e))),
                a
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
            D.length > 0 &&
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "processRevokeMsgs: ",
                    " revokes skipped (diff group) => ",
                    "",
                  ])),
                D.length,
                D,
              ),
              o("WALogger")
                .WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "processRevokeMsgs: admin revoke group != orig msg group",
                    ])),
                )
                .sendLogs("process-admin-revoke-message")),
            x.length > 0 &&
              (o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "processRevokeMsgs: ",
                    " invalid revoke requests => ",
                    "",
                  ])),
                x.length,
                x.map(function (e) {
                  return e.revokeMsgKey;
                }),
              ),
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "processRevokeMsgs: retry invalid revokes as bot invoker",
                  ])),
              )),
            S.size > 0)
          )
            try {
              var P,
                N = Array.from(S.entries()),
                M = N.map(function (e) {
                  return e[1].revokeMsgKey.toString();
                }),
                w = N.map(function (e) {
                  var t;
                  return (t = o("WAWebLidMigrationUtils").getAlternateMsgKey(
                    e[1].revokeMsgKey,
                  )) == null
                    ? void 0
                    : t.toString();
                }),
                A = yield o("WAWebSchemaMessage")
                  .getMessageTable()
                  .bulkGet([].concat(M, w), !1);
              (A.forEach(function (e) {
                var t = !1;
                if (e != null) {
                  var n = r("WAWebMsgKey").from(e.id),
                    a = S.get(n.id);
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
                (P = $).push.apply(P, R));
            } catch (e) {
              var F = r("getErrorSafe")(e);
              o("WALogger")
                .ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "Store Revoked Msg: re-validate bot revoke failed",
                    ])),
                )
                .catching(F)
                .sendLogs("Re-validate revoke failed");
            }
          var O = new Set($),
            B = yield o(
              "WAWebCoexV2StoredRevokeAuthorization",
            ).authorizeCoexV2RevokeMsgInfos(e);
          $ = B.filterAuthorizedRevokeMsgInfos(O);
          var W = yield B.deferEarlyRevokes(O, a);
          W.length > 0 &&
            (yield o("WAWebApiOrphanRevoke").addOrphanRevokes(
              W.map(function (e) {
                var t = e[0],
                  n = e[1];
                return babelHelpers.extends({}, T(t, n), {
                  requiresTargetAuthorization: !0,
                });
              }),
            ));
          var q = yield o(
              "WAWebCoexV2RevokeRetention",
            ).retainCoexV2BotSecretsForAuthorizedRevokes(
              $,
              B.resolvedTargetMsgKeys,
            ),
            U = L.filter(function (e) {
              var t = e[0];
              return !B.coexV2RevokeMsgInfos.has(t);
            }).map(function (e) {
              var t = e[1];
              return t;
            });
          if (U.length > 0)
            try {
              yield o(
                "WAWebDBStoreRevokeMsgs",
              ).findAndDeleteAssociatedPluginMsg(U);
            } catch (e) {
              var V = r("getErrorSafe")(e);
              o("WALogger")
                .ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "Store Revoked Msg: delete associated carousel revoke failed",
                    ])),
                )
                .catching(V)
                .sendLogs("Plugin carousel delete revoke failed");
            }
          var H = [],
            G = new Set(),
            z = yield (C || (C = n("Promise"))).all([
              o("WAWebModelStorageUtils")
                .getStorage()
                .lock(
                  ["message", "message-association"],
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var a = e[0],
                          s = e[1],
                          u = $.map(function (e) {
                            var t;
                            return (t = B.resolvedTargetMsgKeys.get(
                              e.revokeMsgKey.toString(),
                            )) != null
                              ? t
                              : e.revokeMsgKey;
                          }),
                          c = u.map(
                            o("WAWebLidMigrationUtils").getAlternateMsgKey,
                          ),
                          d = [].concat(
                            u,
                            c,
                            $.map(function (e) {
                              return e.newMsgKey;
                            }),
                          ),
                          m = yield o(
                            "WAWebDBAssociatedMsgsAttachDetachAPI",
                          ).getAssociatedMsgsByParentMsgKeyFromAssociationTable(
                            d.filter(Boolean),
                          ),
                          p = o(
                            "WAWebDBAssociatedMsgsAttachDetachAPI",
                          ).getValidAssociatedMsgs(
                            m,
                            o("WAWebDBAssociatedMsgsAttachDetachAPI")
                              .ViewModeUpdateType.Detach,
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
                          v = yield a.bulkGet(f, !1),
                          S = [],
                          R = $.length,
                          L = v.slice(0, R),
                          E = v.slice(R, R * 2),
                          k = v.slice(R * 2, R * 3),
                          T = v.slice(R * 3).filter(Boolean),
                          D = [],
                          x = [],
                          P = [];
                        if (
                          ($.forEach(function (e, n) {
                            var a,
                              s,
                              u = (a = L[n]) != null ? a : E[n],
                              c = k[n];
                            if (u == null) {
                              (x.length < 3 && x.push(String(e.revokeMsgKey)),
                                S.push(e));
                              return;
                            }
                            if (
                              e.skipRevokeWindow !== !0 &&
                              !o("WAWebRevoke").isWithinRevokeWindow({
                                revokedMsgKey: r("WAWebMsgKey").fromString(
                                  u.id,
                                ),
                                revokedMsgTimestamp: u.t,
                                revokeTimestamp: e.revokeTimestamp,
                              })
                            ) {
                              (B.recordRejectedRevoke(e),
                                P.length < 3 && P.push(String(e.revokeMsgKey)));
                              return;
                            }
                            (B.recordAcceptedRevoke(e),
                              t.add(u.id),
                              l.push(String(u.rowId)),
                              u.associationType != null &&
                                H.push([u.id, u.associationType]));
                            var d = o("WAWebRevoke").getMsgKeyAfterRevoke({
                                originalKey: r("WAWebMsgKey").from(u.id),
                                revokeKey: e.newMsgKey,
                              }),
                              m = {
                                id: d.toString(),
                                ack: u.ack,
                                to: u.to,
                                author: u.author,
                                type: o("WAWebMsgType").MSG_TYPE.REVOKED,
                                subtype:
                                  e.subtype === "admin_revoke"
                                    ? "admin"
                                    : "sender",
                                revokeSender: e.sender,
                                protocolMessageKey: u.id,
                                protocolMessageRowId:
                                  c == null ? void 0 : c.rowId,
                                from: u.from,
                                t: u.t,
                                rowId: u.rowId,
                                internalId: u.internalId,
                                messageRangeIndex: u.messageRangeIndex,
                                revokeTimestamp: e.revokeTimestamp,
                                disappearingModeInitiator:
                                  u.disappearingModeInitiator,
                                ephemeralDuration: u.ephemeralDuration,
                                ephemeralSettingTimestamp:
                                  u.ephemeralSettingTimestamp,
                                viewMode: o(
                                  "WAWebViewModeUtils",
                                ).getRevokedViewMode(
                                  u.viewMode,
                                  u.associationType,
                                  (s = e.viewMode) != null ? s : u.viewMode,
                                ),
                              };
                            if (
                              (i.push(m),
                              o("WAWebMsgGetters").getIsImportantMessage(u))
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
                          x.length > 0 &&
                            o("WALogger").LOG(
                              g ||
                                (g = babelHelpers.taggedTemplateLiteralLoose([
                                  "processRevokeMsg: ",
                                  " revokes are orphan or addon => ",
                                  "",
                                ])),
                              S.length,
                              x,
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
                          var N = I(t),
                            M = T.filter(function (e) {
                              return !o(
                                "WAWebAssociationProcessor",
                              ).isChildDeletedOnParentRevoke(e.associationType);
                            }),
                            w = T.filter(function (e) {
                              return (
                                o(
                                  "WAWebAssociationProcessor",
                                ).isChildDeletedOnParentRevoke(
                                  e.associationType,
                                ) &&
                                e.parentMsgKey != null &&
                                N.has(e.parentMsgKey)
                              );
                            });
                          w.forEach(function (e) {
                            (t.add(e.id),
                              G.add(e.id),
                              e.rowId != null && l.push(String(e.rowId)));
                          });
                          var A = o("WAWebDBAssociatedMsgsAttachDetachAPI")
                            .getDetachedForeverAssociatedMsgs(M)
                            .filter(Boolean);
                          (A.forEach(function (e) {
                            e != null && !t.has(e.id) && D.push(e);
                          }),
                            [].concat(M, w).forEach(function (e) {
                              H.push([e.id, e.associationType]);
                            }),
                            o("WAWebBackendApi").frontendFireAndForget(
                              "detachAssociatedMsgsForever",
                              {
                                msgIds: A.map(function (e) {
                                  return e.id;
                                }),
                              },
                            ));
                        }
                        var F = i.filter(function (e) {
                            return (
                              e.protocolMessageKey == null ||
                              !G.has(e.protocolMessageKey)
                            );
                          }),
                          O = [],
                          W = [];
                        return (
                          t.size > 0 &&
                            O.push(
                              a.bulkRemove(Array.from(t)).catch(function (e) {
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
                          H.length > 0 && O.push(s.bulkRemove(H)),
                          yield (C || (C = n("Promise"))).all(O),
                          (F.length > 0 || D.length > 0) &&
                            W.push(
                              a.bulkCreateOrReplace_ALREADY_ENCRYPTED_RECORDS_ONLY(
                                [].concat(F, D),
                              ),
                            ),
                          yield C.all(W),
                          S
                        );
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                ),
              o("WAWebAddonProcessRevoke").processRevokeMsgs($),
            ]),
            j = z[0],
            K = z[1];
          if (
            (o(
              "WAWebCoexV2RevokeRetention",
            ).evictCoexV2RawSecretsForCommittedRevokes(t, q),
            G.forEach(function (e) {
              o("WAWebBackendApi").frontendFireAndForget(
                "deleteMessageFromCollectionForSync",
                { msgKey: e },
              );
            }),
            j.length > 0)
          ) {
            var Q = j
              .filter(function (e) {
                return K.has(e.revokeMsgKey);
              })
              .map(function (e) {
                return T(e, e.revokeMsgKey);
              });
            Q.length > 0 &&
              (yield o("WAWebApiOrphanRevoke").addOrphanRevokes(Q));
          }
          return (
            v == null || v.purge(l).catch(r("WAWebNoop")),
            o("WAWebDBReportingTokenUtils").handleDeleteReportingInfos(
              t ? Array.from(t) : [],
              { removeWholeRow: !1 },
            ),
            b.size > 0 &&
              o("WAWebApiChatUnreadMention").removeUnreadMentionChat(b),
            B.getCleanupMsgKeys(a)
          );
        })),
        E.apply(this, arguments)
      );
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
    ((l.processRevokeMsgs = S),
      (l.processRevokeMsgsAndGetCleanupEligibleKeys = L));
  },
  98,
);
