__d(
  "MAWDbSchema.dexie",
  [
    "FBLogger",
    "MAWDbMsg",
    "MAWDbParticipant",
    "MAWDbThread",
    "MAWDbVersionList",
    "MAWDexie",
    "MAWDexieTable",
    "MAWFolderTypes",
    "MAWLocalizationType",
    "MAWODSProxy",
    "MAWTimeUtils",
    "WAJids",
    "WALogger",
    "WAMsg",
    "WAMsgType",
    "WAOdsEnums",
    "WAStanzaUtils",
    "WATimeUtils",
    "emptyFunction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = function (t) {
        var e = function (t) {
          var e,
            n = (e = t.quote) == null ? void 0 : e.content;
          return (
            t.quoteExternalId != null && (n == null ? void 0 : n.media) != null
          );
        };
        return t.messages
          .where("quoteExternalId")
          .between(
            o("WAStanzaUtils").toStanzaId("0"),
            o("WAStanzaUtils").toStanzaId("["),
            !0,
            !0,
          )
          .filter(e)
          .toArray()
          .catch(function () {
            return t.messages.filter(e).toArray();
          })
          .then(function (e) {
            var n = new Set(
                e
                  .map(function (e) {
                    var t,
                      n,
                      r = (t = e.quote) == null ? void 0 : t.content;
                    return r == null || (n = r.media) == null
                      ? void 0
                      : n.plaintextHash;
                  })
                  .filter(Boolean),
              ),
              r = e.map(function (e) {
                var t = e.msgId;
                return t;
              });
            return t.media
              .filter(function (e) {
                var t = e.plaintextHash;
                return n.has(t);
              })
              .toArray()
              .then(function (e) {
                var n = new Map(
                  e.map(function (e) {
                    var t = e.mediaId,
                      n = e.plaintextHash;
                    return [n, t];
                  }),
                );
                return t.messages
                  .where("msgId")
                  .anyOf(r)
                  .modify(function (e) {
                    var t = e.quote;
                    if (t != null && t.content != null) {
                      var r = t.content;
                      ((r.mediaId = n.get(r.media.plaintextHash)),
                        delete r.media);
                    }
                  });
              });
          });
      },
      c = function (t) {
        return t.groupInfo.toCollection().modify(function (e) {
          typeof e.inviter == "number" && delete e.inviter;
        });
      },
      d = function () {
        return o("MAWDexieTable").dexieResolve();
      },
      m = function (t) {
        return t.threads
          .filter(function (e) {
            return o("WAJids").switchOnMsgrChatJidType(e.jid, {
              group: function () {
                return !1;
              },
              user: function () {
                return e.oldestMsg != null;
              },
            });
          })
          .toArray()
          .then(function (e) {
            var n = [];
            return (
              e.forEach(function (e) {
                (n.push(e.oldestMsg),
                  n.push(
                    o("MAWDbMsg").toMsgId__UNSAFE_DO_NOT_USE(e.newestMsg),
                  ));
              }),
              t.messages
                .where("msgId")
                .anyOf(n.filter(Boolean))
                .toArray()
                .then(function (n) {
                  var r = new Map(),
                    a = [],
                    i = [];
                  (n.forEach(function (e) {
                    r.set(e.msgId, e);
                  }),
                    e.forEach(function (e) {
                      var n = r.get(e.oldestMsg),
                        l = r.get(e.newestMsg);
                      return (
                        (n == null ? void 0 : n.type) === "Admin" &&
                          (l == null ? void 0 : l.type) === "Admin" &&
                          (n.msgId === l.msgId ? i.push(e.chatId) : a.push(e)),
                        o("MAWDexieTable")
                          .dexieAll(
                            a.map(function (e) {
                              return t.messages
                                .where("thread")
                                .equals(e.chatId)
                                .toArray();
                            }),
                          )
                          .then(function (e) {
                            return (
                              e.forEach(function (e) {
                                if (e.length !== 0) {
                                  var t = e[0].thread,
                                    n = e.filter(function (e) {
                                      return e.type !== "Admin";
                                    });
                                  n.length > 0 || i.push(t);
                                }
                              }),
                              o("MAWDexieTable").dexieAll([
                                t.threads.bulkDelete(i),
                                t.messages.where("thread").anyOf(i).delete(),
                              ])
                            );
                          })
                      );
                    }));
                })
            );
          });
      },
      p = function (t) {
        return t.unrenderedMessages.toCollection().modify(function (e) {
          if (e.type === o("WAMsgType").MSG_TYPE.DELETE_FOR_ME) {
            var t = e.messageDeleteForMeTs;
            e.messageDeleteForMeTs = t;
          }
        });
      },
      _ = function (t) {
        var e = 0,
          n = 0,
          a = r("MAWDexie").currentTransaction;
        if (a == null)
          throw r("FBLogger")("maw_db").mustfixThrow(
            "transaction does not exist",
          );
        return (
          a.on("complete", function () {
            (e > 0 &&
              o("MAWODSProxy").odsBumpEntityKey({
                amount: e,
                entity: o("WAOdsEnums").Entity.MESSAGE_MISSING_THREAD_JID,
                key: "fail",
              }),
              n > 0 &&
                o("MAWODSProxy").odsBumpEntityKey({
                  amount: n,
                  entity: o("WAOdsEnums").Entity.MESSAGE_MISSING,
                  key: "fail",
                }));
          }),
          t.threads.toArray().then(function (r) {
            var a = r.reduce(function (e, t) {
              return (t != null && e.set(t.chatId, t), e);
            }, new Map());
            return o("MAWDexieTable").dexieAll([
              t.messages.toCollection().modify(function (t) {
                if (t != null) {
                  var r = a.get(t.thread);
                  r != null ? (t.threadJid = r.jid) : (e += 1);
                } else n += 1;
              }),
              t.unrenderedMessages.toCollection().modify(function (t) {
                if (t != null) {
                  var r = a.get(t.thread);
                  r != null ? (t.threadJid = r.jid) : (e += 1);
                } else n += 1;
              }),
            ]);
          })
        );
      },
      f = function (t) {
        return t.isDualSend.toCollection().modify(function (e) {
          e.version == null && (e.version = 1);
        });
      },
      g = function (t) {
        return t.messages.toCollection().modify(function (e) {
          e.type === o("WAMsgType").MSG_TYPE.ADMIN &&
            e.msgContent.adminType ===
              o("MAWLocalizationType").LOCALIZATION_TYPE
                .E2EE_THREAD_DESCRIPTION &&
            (e.altIndex = o("MAWDbMsg").craftE2eeAdminMsgAltIndex(e.thread));
        });
      },
      h = function (t) {
        return t.messages.toCollection().modify(function (e) {
          e.sortOrderMs = o("MAWDbMsg").getSortOrderWithFallback(e);
        });
      },
      y = function (t) {
        return t.threads.toCollection().modify(function (e) {
          e.folder == null && (e.folder = o("MAWFolderTypes").FOLDER_ID.INBOX);
        });
      },
      C = function (t) {
        return t.messages.toCollection().modify(function (e) {
          e.sortOrderMs = o("MAWDbMsg").getSortOrderWithFallback(e);
        });
      },
      b = function (t) {
        return t.personalSenderKeyStatuses.toCollection().modify(function (e) {
          ((e.rotateSenderKey = !0), (e.hasSenderKey = new Set()));
        });
      },
      v = function (t) {
        return t.messages.toCollection().modify(function (e) {
          e.type === o("WAMsgType").MSG_TYPE.ADMIN &&
            e.msgContent.adminType ===
              o("MAWLocalizationType").LOCALIZATION_TYPE
                .CUTOVER_THREAD_ADMIN_MESSAGE &&
            e.sortOrderMs != null &&
            e.sortOrderMs > 0 &&
            (e.sortOrderMs = 0);
        });
      },
      S = function (t) {
        return t.messages.toCollection().modify(function (e) {
          !(
            e.type === o("WAMsgType").MSG_TYPE.ADMIN &&
            (e.msgContent.adminType ===
              o("MAWLocalizationType").LOCALIZATION_TYPE
                .CUTOVER_THREAD_ADMIN_MESSAGE ||
              e.msgContent.adminType ===
                o("MAWLocalizationType").LOCALIZATION_TYPE
                  .E2EE_THREAD_DESCRIPTION)
          ) &&
            e.sortOrderMs != null &&
            e.sortOrderMs < 1661204086 &&
            (e.sortOrderMs = o("MAWDbMsg").getCanonicalTsFromMsg(e) * 1e3);
        });
      },
      R = function (t) {
        return t.threads
          .filter(function (e) {
            return e.isMigratedLocally === !0 && e.newestMsg != null;
          })
          .toArray()
          .then(function (e) {
            var n = e.map(function (e) {
                return e.chatId;
              }),
              r = new Map();
            return o("MAWDexieTable")
              .dexieAll(
                e.map(function (e) {
                  return t.messages
                    .where(["thread", "sortOrderMs"])
                    .between([e.chatId, 0], [e.chatId, Number.MAX_VALUE])
                    .last()
                    .then(function (e) {
                      e != null && r.set(e.thread, e.msgId);
                    });
                }),
              )
              .then(function () {
                return t.threads.where("chatId").anyOf(n);
              });
          });
      },
      L = function () {
        return o("MAWDexieTable").dexieResolve();
      },
      E = function (t) {
        return t.threads.toCollection().modify(function (e) {
          if (
            (e.lastReadMsgTs != null &&
              e.lastReadMsgTs < o("WATimeUtils").MAX_INT &&
              (e.lastReadMsgTs = o("MAWTimeUtils").ensureValidMillisTime(
                e.lastReadMsgTs,
              )),
            e.newestMsgTs != null && e.newestMsgTs < o("WATimeUtils").MAX_INT)
          ) {
            var t = o("MAWTimeUtils").ensureValidMillisTime(e.newestMsgTs);
            ((e.newestMsgTs = t),
              t != null &&
                (e.threadOrder = o("MAWDbThread").craftThreadOrder(t, e.jid)));
          }
        });
      },
      k = function (t) {
        return t.messages.toCollection().modify(function (e) {
          e.type === o("WAMsgType").MSG_TYPE.ADMIN &&
            e.msgContent.adminType ===
              o("MAWLocalizationType").LOCALIZATION_TYPE
                .CUTOVER_THREAD_ADMIN_MESSAGE &&
            (e.altIndex = o("MAWDbMsg").craftCutoverAdminMsgAltIndex(e.thread));
        });
      },
      I = function () {
        return o("MAWDexieTable").dexieResolve();
      },
      T = function () {
        return o("MAWDexieTable").dexieResolve();
      },
      D = function () {
        return o("MAWDexieTable").dexieResolve();
      },
      x = function (t) {
        return t.participants
          .toCollection()
          .modify(function (e) {
            var t;
            e == null ||
              !((t = e.userJid) != null && t.includes("@msgr@msgr")) ||
              ((e.id = e.id.replace("@msgr@msgr", "@msgr")),
              (e.userJid = e.userJid.replace("@msgr@msgr", "@msgr")));
          })
          .then(r("emptyFunction"));
      },
      $ = function (t) {
        var e = t.threads.filter(function (e) {
          return e.snippetMsg != null && e.snippetMsgTs == null;
        });
        return e.toArray().then(function (n) {
          var r = n.reduce(function (e, t) {
              return (
                t != null && t.snippetMsg != null && e.set(t.jid, t.snippetMsg),
                e
              );
            }, new Map()),
            a = Array.from(r.values());
          return t.messages
            .where("msgId")
            .anyOf(a)
            .toArray()
            .then(function (t) {
              var n = t.reduce(function (e, t) {
                return (
                  t != null && t.serverTs != null && e.set(t.msgId, t.serverTs),
                  e
                );
              }, new Map());
              e.modify(function (e) {
                var t = r.get(e.jid);
                if (t != null) {
                  var a = n.get(t);
                  a != null &&
                    (e.snippetMsgTs =
                      o("WATimeUtils").castUnixTimeToMillisTime(a));
                }
              });
            });
        });
      },
      P = function (t) {
        return t.threads.toArray().then(function (e) {
          return o("MAWDexieTable").dexieAll(
            e.map(function (e) {
              return t.participants
                .where("threadId")
                .equals(e.chatId)
                .modify(function (t) {
                  var n;
                  t.threadJid = (n = t.threadJid) != null ? n : e.jid;
                });
            }),
          );
        });
      },
      N = P,
      M = function (t) {
        var e = [];
        return t.groupInvites
          .toArray()
          .then(function (n) {
            var r = n.map(function (e) {
              return e.invitedParticipantId;
            });
            return t.participants.bulkGet(r).then(function (r) {
              r.forEach(function (t, r) {
                if (t == null) {
                  var o = n[r];
                  e.push(o);
                }
              });
              var o = r.filter(Boolean);
              return t.groupInvites.bulkPut(
                n.map(function (t) {
                  var n = o.find(function (e) {
                    return e.id === t.invitedParticipantId;
                  });
                  return n != null
                    ? ((t.inviteeJid = n.userJid),
                      (t.threadJid = n.threadJid),
                      babelHelpers.extends({}, t, {
                        inviteeJid: n.userJid,
                        threadJid: n.threadJid,
                      }))
                    : (e.push(t), t);
                }),
              );
            });
          })
          .then(function () {
            return t.groupInvites.bulkDelete(
              e.map(function (e) {
                return [e.invitedParticipantId, e.inviterJid];
              }),
            );
          });
      },
      w = function (n) {
        var t = new Map();
        return n.receipts.toArray().then(function (a) {
          return o("MAWDexieTable").dexieAll(
            a.map(function (a) {
              return n.messages.get({ msgId: a.msgId }).then(function (i) {
                if (i == null)
                  return n.receipts.delete(a.msgId).then(r("emptyFunction"));
                var l = o("WAMsg").craftWAMsgIdString({
                  author: i.author,
                  chat: i.threadJid,
                  externalId: i.externalId,
                });
                if (t.has(l)) {
                  var s,
                    u = (s = t.get(l)) != null ? s : 1;
                  return (
                    t.set(l, u),
                    o("WALogger").ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "Duplicate waMsgId found for receipt, number of duplicates: ",
                          "",
                        ])),
                      u,
                    ),
                    n.receipts.delete(a.msgId).then(r("emptyFunction"))
                  );
                } else
                  return (
                    t.set(l, 1),
                    n.receipts
                      .where("msgId")
                      .equals(i.msgId)
                      .modify(function (e) {
                        e.waMsgId = l;
                      })
                      .then(r("emptyFunction"))
                  );
              });
            }),
          );
        });
      },
      A = function () {
        return o("MAWDexieTable").dexieResolve();
      },
      F = function (t) {
        return t.participants.toArray().then(function (e) {
          var n = e.map(function (e) {
              return babelHelpers.extends({}, e, {
                id: o("MAWDbParticipant").craftParticipantId(
                  e.threadJid,
                  e.userJid,
                ),
              });
            }),
            r = e.map(function (e) {
              return e.id;
            });
          return t.participants.bulkDelete(r).then(function () {
            t.participants.bulkPut(n);
          });
        });
      },
      O = function (t) {
        return t.reactions.toCollection().modify(function (e) {
          e.ts = e.ts;
        });
      },
      B = new Map([
        [(s = o("MAWDbVersionList")).VERSION.V26, u],
        [s.VERSION.V27, c],
        [s.VERSION.V28, d],
        [s.VERSION.V29, m],
        [s.VERSION.V30, p],
        [s.VERSION.V31, _],
        [s.VERSION.V43, f],
        [s.VERSION.V44, g],
        [s.VERSION.V45, h],
        [s.VERSION.V46, y],
        [s.VERSION.V47, C],
        [s.VERSION.V53, b],
        [s.VERSION.V54, v],
        [s.VERSION.V55, S],
        [s.VERSION.V56, R],
        [s.VERSION.V57, L],
        [s.VERSION.V58, E],
        [s.VERSION.V60, k],
        [s.VERSION.V66, I],
        [s.VERSION.V68, T],
        [s.VERSION.V71, D],
        [s.VERSION.V72, x],
        [s.VERSION.V82, $],
        [s.VERSION.V85, P],
        [s.VERSION.V87, N],
        [s.VERSION.V90, M],
        [s.VERSION.V91, w],
        [s.VERSION.V101, A],
        [s.VERSION.V104, F],
        [s.VERSION.V116, O],
      ]);
    l.dbUpgrades = B;
  },
  98,
);
