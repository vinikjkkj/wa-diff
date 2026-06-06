__d(
  "WAWebDBStoreRevokeMsgs",
  [
    "Promise",
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
      v = b.ftsLightClient,
      S = 20;
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Set(),
            a = [],
            i = [],
            l = new Map(),
            b = new Map(),
            S = [],
            R = [],
            L = [],
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
                    ? ((i = !1), L.length < 3 && L.push(String(n)))
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
            (L.length > 0 &&
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "processRevokeMsgs: ",
                    " revokeMsgKeys have not been revoked => ",
                    "",
                  ])),
                L.length,
                L,
              ),
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "processRevokeMsgs: admin revoke has to be sent to a group or newsletter chat",
                    ])),
                )
                .sendLogs("process-admin-revoke-message")),
            k.length > 0 &&
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "processRevokeMsgs: ",
                    " revokeMsgKeys have not been revoked (different group) => ",
                    "",
                  ])),
                k.length,
                k,
              ),
              o("WALogger")
                .WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "processRevokeMsgs: admin revoke came for the different group than the original message was in",
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
                    "processRevokeMsgs: sending invalid revokes for secondary validation as bot invoker revoke",
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
              yield E(R);
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
            A = yield (C || (C = n("Promise"))).all([
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
                          d = [];
                        if (
                          o(
                            "WAWebMessageAssociationGatingUtils",
                          ).isMessageAssociationInfraEnabled()
                        ) {
                          var m = yield o(
                              "WAWebDBAssociatedMsgsAttachDetachAPI",
                            ).getAssociatedMsgsByParentMsgKeyFromAssociationTable(
                              c.filter(Boolean),
                            ),
                            p = o(
                              "WAWebDBAssociatedMsgsAttachDetachAPI",
                            ).getValidAssociatedMsgs(
                              m,
                              o("WAWebDBAssociatedMsgsAttachDetachAPI")
                                .ViewModeUpdateType.Detach,
                            );
                          d = p.map(function (e) {
                            return e.msgKey;
                          });
                        }
                        var _ = [].concat(
                            c.map(function (e) {
                              return e ? e.toString() : "";
                            }),
                            d,
                          ),
                          f = yield s.bulkGet(_, !1),
                          b = [],
                          v = T.length,
                          S = f.slice(0, v),
                          R = f.slice(v, v * 2),
                          L = f.slice(v * 2, v * 3),
                          E = f.slice(v * 3).filter(Boolean),
                          k = [],
                          I = [],
                          D = [];
                        if (
                          (T.forEach(function (e, n) {
                            var s,
                              u,
                              c = (s = S[n]) != null ? s : R[n],
                              d = L[n];
                            if (c == null) {
                              (I.length < 3 && I.push(String(e.revokeMsgKey)),
                                b.push(e));
                              return;
                            }
                            if (
                              !o("WAWebRevoke").isWithinRevokeWindow({
                                revokedMsgKey: r("WAWebMsgKey").fromString(
                                  c.id,
                                ),
                                revokedMsgTimestamp: c.t,
                                revokeTimestamp: e.revokeTimestamp,
                              })
                            ) {
                              D.length < 3 && D.push(String(e.revokeMsgKey));
                              return;
                            }
                            (t.add(c.id),
                              i.push(String(c.rowId)),
                              o(
                                "WAWebMessageAssociationGatingUtils",
                              ).isMessageAssociationInfraEnabled() &&
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
                                viewMode:
                                  (u = e.viewMode) != null ? u : c.viewMode,
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
                          I.length > 0 &&
                            o("WALogger").LOG(
                              g ||
                                (g = babelHelpers.taggedTemplateLiteralLoose([
                                  "processRevokeMsg: ",
                                  " revokes are orphan or addon => ",
                                  "",
                                ])),
                              b.length,
                              I,
                            ),
                          D.length > 0 &&
                            o("WALogger").LOG(
                              h ||
                                (h = babelHelpers.taggedTemplateLiteralLoose([
                                  "processRevokeMsgs: ",
                                  " revokeMsgKeys are outside revoke window => ",
                                  "",
                                ])),
                              D.length,
                              D,
                            ),
                          E != null && E.length)
                        ) {
                          var x = o("WAWebDBAssociatedMsgsAttachDetachAPI")
                            .getDetachedForeverAssociatedMsgs(E)
                            .filter(Boolean);
                          (x.forEach(function (e) {
                            e != null && !t.has(e.id) && k.push(e);
                          }),
                            E.forEach(function (e) {
                              w.push([e.id, e.associationType]);
                            }),
                            o("WAWebBackendApi").frontendFireAndForget(
                              "detachAssociatedMsgsForever",
                              {
                                msgIds: x.map(function (e) {
                                  return e.id;
                                }),
                              },
                            ));
                        }
                        var $ = [],
                          P = [];
                        return (
                          t.size > 0 &&
                            $.push(
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
                          w.length > 0 && $.push(u.bulkRemove(w)),
                          yield (C || (C = n("Promise"))).all($),
                          (a.length > 0 || k.length > 0) &&
                            P.push(
                              s.bulkCreateOrReplace_ALREADY_ENCRYPTED_RECORDS_ONLY(
                                [].concat(a, k),
                              ),
                            ),
                          yield C.all(P),
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
            F = A[0],
            O = A[1];
          if (F.length > 0) {
            var B = F.filter(function (e) {
              return O.has(e.revokeMsgKey);
            }).map(function (e) {
              var t;
              return {
                msgKey: e.revokeMsgKey.toString(),
                sender: e.sender,
                timestamp: e.timestamp,
                subtype: (t = e.subtype) != null ? t : "sender_revoke",
              };
            });
            B.length > 0 &&
              (yield o("WAWebApiOrphanRevoke").addOrphanRevokes(B));
          }
          (v == null || v.purge(i).catch(r("WAWebNoop")),
            o("WAWebDBReportingTokenUtils").handleDeleteReportingInfos(
              t ? Array.from(t) : [],
              { removeWholeRow: !1 },
            ),
            l.size > 0 &&
              o("WAWebApiChatUnreadMention").removeUnreadMentionChat(l));
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = [],
            a = [],
            i = e.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var n = yield I(e),
                      r = n.pluginLinkMsgIds,
                      i = n.pluginLinkMsgIdsRowIds;
                    ((t = [].concat(t, r)),
                      (a = [].concat(a, i)),
                      yield o("WAWebSchemaMessage")
                        .getMessageTable()
                        .bulkRemove(t));
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            );
          (yield (C || (C = n("Promise"))).all(i),
            v == null || v.purge(a).catch(r("WAWebNoop")),
            o("WAWebBackendApi").frontendFireAndForget(
              "deleteAssociatedBotCarouselMsgs",
              { msgKeys: t },
            ));
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = [],
            n = [],
            r = e.internalId,
            a = e.targetId,
            i = r.split("_")[0];
          return (
            yield o("WAWebSchemaMessage")
              .getMessageTable()
              .between(
                ["internalId"],
                r,
                i + "_g",
                { reverse: !1, limit: S, shouldDecrypt: !1 },
                function (e) {
                  if (e.botResponseTargetId === a)
                    (t.push(e.id), n.push(String(e.rowId)));
                  else return !0;
                  return !1;
                },
              ),
            { pluginLinkMsgIds: t, pluginLinkMsgIdsRowIds: n }
          );
        })),
        T.apply(this, arguments)
      );
    }
    ((l.processRevokeMsgs = R),
      (l.findAndDeleteAssociatedPluginMsg = E),
      (l.findAssociatedPluginMsgs = I));
  },
  98,
);
