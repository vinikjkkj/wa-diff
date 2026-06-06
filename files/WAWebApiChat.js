__d(
  "WAWebApiChat",
  [
    "WALogger",
    "WATimeUtils",
    "WAWeb-dexie",
    "WAWebAck",
    "WAWebBackendApi",
    "WAWebBotUtils",
    "WAWebBusinessHSMTypes",
    "WAWebChatThreadLogging",
    "WAWebCompactSet",
    "WAWebDBChatSerialization",
    "WAWebDBChatValidation",
    "WAWebDBMessageUtils",
    "WAWebDBPendingReadReceiptQueries",
    "WAWebEphemeralKeepInChatUtils",
    "WAWebEphemeralityUtils",
    "WAWebLidMigrationUtils",
    "WAWebMiscErrors",
    "WAWebModelStorageUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebSchemaChat",
    "WAWebThreadId",
    "WAWebThreadMetadataBulkJob",
    "WAWebTrustedContactsUtils",
    "WAWebWidFactory",
    "err",
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
      v,
      S,
      R,
      L,
      E,
      k,
      I,
      T,
      D = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "CreateChatDuplicateError"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    async function x(t, n) {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "createChatRecord ",
            "",
          ])),
        t.toLogString(),
      ),
        o("WAWebDBChatValidation").validateAccountLidInChatRow(
          n,
          "createChatRecord",
        ));
      try {
        await o("WAWebSchemaChat")
          .getChatTable()
          .create(babelHelpers.extends({ id: t.toString() }, n));
      } catch (e) {
        throw e instanceof o("WAWebMiscErrors").DbOnLogoutAbort
          ? e
          : (o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "createChatRecord: create chat table failed",
                  ])),
              )
              .verbose(),
            e instanceof r("WAWeb-dexie").ConstraintError
              ? (await V(t, n), new D())
              : r("err")("create chat table failed"));
      }
    }
    async function $(e) {
      var t = await o("WAWebSchemaChat").getChatTable().get(e.toString(), !1);
      return t
        ? { unreadCount: t.unreadCount, timestamp: t.t }
        : (o("WALogger").ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "chat with id ",
                " is not found",
              ])),
            e.toString(),
          ),
          Promise.reject(r("err")("Failed to find row in chat table")));
    }
    function P(e) {
      return (
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "updateChatForMarkAsReadSync",
            ])),
        ),
        o("WAWebModelStorageUtils")
          .getStorage()
          .lock(["chat"], async function (t) {
            var n = t[0],
              r = await n.get(e);
            if (r == null) {
              o("WALogger").ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "updateMarkChatAsReadSync: could not find chat with id ",
                    "",
                  ])),
                e,
              );
              return;
            }
            if (r.unreadCount === -1)
              return (
                o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "updateMarkChatAsReadSync: createOrMerge",
                    ])),
                ),
                n.createOrMerge(e, {
                  id: e,
                  unreadCount: 0,
                  unreadMentionsOfMe: [],
                  unreadMentionCount: 0,
                })
              );
          })
      );
    }
    function N(e) {
      var t = e.chatId,
        n = e.keepChatUnread,
        a = e.lastReadRowId,
        i = e.readAt,
        l = e.threadId;
      o("WALogger").LOG(
        p ||
          (p = babelHelpers.taggedTemplateLiteralLoose([
            "markMessageAndChatAsRead: ",
          ])),
      );
      var s = o("WAWebWidFactory").createWid(t),
        u = o("WAWebBotUtils").isMetaAiBot(s),
        c = u ? ["message", "chat", "thread-metadata"] : ["message", "chat"];
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(c, async function (e) {
          var s = e[0],
            c = e[1],
            d = e[2],
            m = await o(
              "WAWebDBPendingReadReceiptQueries",
            ).queryPendingReadReceiptMsgRowsWithTable(s, t, u ? l : void 0),
            p = [],
            g = [],
            h = 0,
            y = [],
            C = new Set(),
            b = [],
            v = 0;
          (m.forEach(function (e) {
            e.hsmTag ===
              o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.AUTHENTICATION &&
              o("WAWebBackendApi").frontendFireAndForget(
                "logOTPMessageReadActions",
                { msgRow: e },
              );
            var t = a == null || (e.rowId != null && e.rowId > a);
            if (t) {
              if ((h++, o("WAWebMsgGetters").getIsImportantMessage(e))) {
                var n = { id: e.id, timestamp: e.t };
                y.push(n);
              }
              return;
            }
            var r = e.ack;
            p.push({
              id: e.id,
              ack: Math.max(r, o("WAWebAck").ACK.READ),
              pendingReadReceipt: null,
            });
            var s = e.afterReadDuration;
            if (
              s != null &&
              s > 0 &&
              (r == null || r < o("WAWebAck").ACK.READ) &&
              !o("WAWebEphemeralKeepInChatUtils").isKept(e.kicState)
            ) {
              var c = i != null ? i : o("WATimeUtils").unixTime();
              if (
                (g.push({ id: e.id, expiredTimestamp: c + s }),
                v++,
                b.length < 3)
              ) {
                var d;
                b.push(e == null || (d = e.id) == null ? void 0 : d.toString());
              }
            }
            if (u)
              for (var m of o("WAWebDBMessageUtils").getThreadIdsFromMessage(e))
                (l == null || m.equals(l)) && C.add(m.toString());
          }),
            v > 0 &&
              o("WALogger")
                .LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[markMessageAndChatAsRead] expiry set ",
                      " msgs => ",
                      " (source: ",
                      ")",
                    ])),
                  v,
                  b,
                  i != null ? "peer-read" : "local-read",
                )
                .tags("after-read"));
          var S = [],
            R = null,
            L = u && l != null;
          if (L) {
            if (p.length > 0) {
              var E = r("WAWebCompactSet")(p, function (e) {
                return e.id;
              });
              R = await o(
                "WAWebDBPendingReadReceiptQueries",
              ).updateChatUnreadCountForReadMessages(c, t, E);
            }
          } else {
            var k = h === 0 && n ? -1 : h;
            S.push(
              c.merge(t, {
                id: t,
                unreadCount: k,
                unreadDividerOffset: 0,
                unreadMentionsOfMe: y,
                unreadMentionCount: 0,
              }),
            );
          }
          if (
            (p.length > 0 &&
              (o("WALogger")
                .LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "markMessageAndChatAsRead: bulkCreateOrMerge",
                    ])),
                )
                .tags("missing-lid"),
              S.push(
                s.bulkCreateOrMerge(p).then(function () {
                  return o(
                    "WAWebChatThreadLogging",
                  ).handleActivitiesForChatThreadLogging([
                    {
                      activityType: "msgRead",
                      ts: o("WATimeUtils").unixTime(),
                      chatId: o("WAWebWidFactory").createWid(t),
                      readCount: p.length,
                    },
                  ]);
                }),
              ),
              g.length > 0 &&
                S.push(
                  s.bulkCreateOrMerge(g).then(function () {
                    var e = g.map(function (e) {
                      return {
                        id: r("WAWebMsgKey").fromString(e.id),
                        expiredTimestamp: e.expiredTimestamp,
                      };
                    });
                    o("WAWebBackendApi").frontendFireAndForget(
                      "updateMsgExpiredTimestamps",
                      { updates: e },
                    );
                  }),
                )),
            await Promise.all(S),
            u && l != null && C.add(l.toString()),
            C.size === 0)
          )
            return { fullyReadThreadIds: [] };
          var I = Array.from(C).map(function (e) {
            return r("WAWebThreadId").from(e);
          });
          return (
            await o(
              "WAWebThreadMetadataBulkJob",
            ).bulkUpdateThreadUnreadCountWithTable(
              d,
              I.map(function (e) {
                return { threadId: e, unreadCount: 0 };
              }),
            ),
            { fullyReadThreadIds: I, chatUnreadUpdate: R != null ? R : void 0 }
          );
        });
    }
    function M(e) {
      var t = e.chatId,
        n = e.readMsgKeys,
        a = e.threadId,
        i = t.toString();
      o("WALogger").LOG(
        g ||
          (g = babelHelpers.taggedTemplateLiteralLoose([
            "markEditedMessageAndChatAsRead: ",
          ])),
      );
      var l = new Set(
          n.map(function (e) {
            return e.id;
          }),
        ),
        s = o("WAWebBotUtils").isMetaAiBot(t),
        u = s ? ["message", "chat", "thread-metadata"] : ["message"];
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(u, async function (e) {
          var t = e[0],
            n = e[1],
            u = e[2],
            c = await o(
              "WAWebDBPendingReadReceiptQueries",
            ).queryUnreadEditedMsgRowsWithTable(t, i, s ? a : void 0),
            d = c.filter(function (e) {
              var t = r("WAWebMsgKey").fromString(e.latestEditMsgKey).id;
              return l.has(t);
            });
          if (d.length === 0) return { fullyReadThreadIds: [] };
          var m = new Set();
          if (s)
            for (var p of d)
              for (var _ of o("WAWebDBMessageUtils").getThreadIdsFromMessage(p))
                (a == null || _.equals(a)) && m.add(_.toString());
          var f = d.map(function (e) {
            return { id: e.id, pendingReadReceipt: null };
          });
          (o("WALogger")
            .LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "markEditedMessageAndChatAsRead: bulkCreateOrMerge",
                ])),
            )
            .tags("missing-lid"),
            await t.bulkCreateOrMerge(f));
          var g = null;
          if (s && a != null && f.length > 0) {
            var y = r("WAWebCompactSet")(f, function (e) {
              return e.id;
            });
            g = await o(
              "WAWebDBPendingReadReceiptQueries",
            ).updateChatUnreadCountForReadMessages(n, i, y);
          }
          if ((s && a != null && m.add(a.toString()), m.size === 0))
            return { fullyReadThreadIds: [] };
          var C = Array.from(m).map(function (e) {
            return r("WAWebThreadId").from(e);
          });
          return (
            await o(
              "WAWebThreadMetadataBulkJob",
            ).bulkUpdateThreadUnreadCountWithTable(
              u,
              C.map(function (e) {
                return { threadId: e, unreadCount: 0 };
              }),
            ),
            await o(
              "WAWebThreadMetadataBulkJob",
            ).bulkUpdateThreadUnreadEditTimestampWithTable(
              u,
              C.map(function (e) {
                return { threadId: e, unreadEditTimestampMs: null };
              }),
            ),
            { fullyReadThreadIds: C, chatUnreadUpdate: g != null ? g : void 0 }
          );
        });
    }
    async function w(e) {
      var t = e.msgKeys,
        n = e.readAt,
        a = await o("WAWebModelStorageUtils")
          .getStorage()
          .lock(["message"], async function (e) {
            var r = e[0],
              a = await r.bulkGet(
                t.map(function (e) {
                  return e.toString();
                }),
              ),
              i = [];
            for (var l of a)
              if (l != null) {
                var s = l.afterReadDuration;
                if (!(s == null || s <= 0) && l.expiredTimestamp != null) {
                  var u = n + s;
                  u >= l.expiredTimestamp ||
                    i.push({ id: l.id, expiredTimestamp: u });
                }
              }
            return (
              i.length === 0 ||
                (o("WALogger")
                  .LOG(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "[tightenAfterReadExpirationFromPeerReceipt] ",
                        " msgs tightened",
                      ])),
                    i.length,
                  )
                  .tags("after-read"),
                await r.bulkMergeOnly(i)),
              i
            );
          });
      if (a.length !== 0) {
        var i = a.map(function (e) {
          return {
            id: r("WAWebMsgKey").fromString(e.id),
            expiredTimestamp: e.expiredTimestamp,
          };
        });
        o("WAWebBackendApi").frontendFireAndForget(
          "updateMsgExpiredTimestamps",
          { updates: i },
        );
      }
    }
    function A(e) {
      return (
        o("WALogger").LOG(
          C ||
            (C = babelHelpers.taggedTemplateLiteralLoose([
              "updateChatArchiveDrawer",
            ])),
        ),
        o("WAWebModelStorageUtils")
          .getStorage()
          .lock(["chat"], function (t) {
            var n = t[0],
              r = Array.from(e.keys());
            if (r.length === 0) return Promise.resolve();
            var a = r.map(function (t) {
              var n,
                r = (n = e.get(t)) != null ? n : !1;
              return { id: t, archiveAtMentionViewedInDrawer: r };
            });
            return (
              o("WALogger")
                .LOG(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "updateChatArchiveDrawer: bulkCreateOrMerge",
                    ])),
                )
                .tags("missing-lid"),
              n.bulkCreateOrMerge(a)
            );
          })
      );
    }
    function F(e, t, n) {
      return (
        t === void 0 && (t = 1),
        n === void 0 && (n = !0),
        o("WAWebModelStorageUtils")
          .getStorage()
          .lock(["chat"], async function (r) {
            var a,
              i = r[0],
              l = await i.get(e);
            if (l == null) {
              o("WALogger").ERROR(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "reduceChatUnreadCount: could not find chat with id ",
                    "",
                  ])),
                e,
              );
              return;
            }
            var s = Math.max(l.unreadCount - t, 0),
              u = (a = l.unreadDividerOffset) != null ? a : 0;
            return (
              n && (u += t),
              i.merge(e, { unreadCount: s, unreadDividerOffset: u })
            );
          })
      );
    }
    function O() {
      o("WALogger").LOG(
        S ||
          (S = babelHelpers.taggedTemplateLiteralLoose([
            "pruneExpiredTcTokens",
          ])),
      );
      var e = o("WAWebTrustedContactsUtils").tokenExpirationCutoff(
        o("WAWebTrustedContactsUtils").TcTokenMode.Receiver,
      );
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["chat"], async function (t) {
          var n = t[0],
            r = await n.lessThan(["tcTokenTimestamp"], e);
          if (!(!r || r.length === 0)) {
            var a = r.map(function (e) {
              return { id: e.id, tcToken: null, tcTokenTimestamp: null };
            });
            return (
              o("WALogger")
                .LOG(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "pruneExpiredTcTokens: bulkCreateOrMerge",
                    ])),
                )
                .tags("missing-lid"),
              n.bulkCreateOrMerge(a)
            );
          }
        });
    }
    function B() {
      var e = o("WAWebTrustedContactsUtils").tokenExpirationCutoff(
          o("WAWebTrustedContactsUtils").TcTokenMode.Receiver,
        ),
        t = [];
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["orphan-tc-token"], async function (n) {
          var r = n[0],
            o = await r.all();
          return (
            o.forEach(function (n) {
              var r = n.tcTokenTimestamp;
              r != null && r < e && t.push(n.chatId);
            }),
            r.bulkRemove(t)
          );
        });
    }
    function W(e) {
      return o("WAWebSchemaChat")
        .getChatTable()
        .anyOf(["accountLid"], [e.toString()]);
    }
    function q() {
      return o("WAWebSchemaChat")
        .getChatTable()
        .all()
        .then(function (e) {
          return e.map(function (e) {
            return o("WAWebDBChatSerialization").deserializeChat(e);
          });
        });
    }
    async function U(e) {
      var t = e.map(function (e) {
          return e.id.toString();
        }),
        n = await o("WAWebSchemaChat").getChatTable().bulkGet(t),
        r = e.map(function (e, t) {
          var r = e;
          if (n[t] != null) {
            var a = n[t],
              i = a.disappearingModeInitiatedByMe,
              l = a.disappearingModeTrigger;
            (i != null &&
              (r = babelHelpers.extends({}, r, {
                disappearingModeInitiatedByMe: i,
              })),
              l != null &&
                (r = babelHelpers.extends({}, r, {
                  disappearingModeTrigger: o(
                    "WAWebEphemeralityUtils",
                  ).getDisappearingModeTriggerFromString(l),
                })));
          }
          return r;
        });
      return r;
    }
    async function V(e, t) {
      try {
        if (o("WAWebLidMigrationUtils").shouldHaveAccountLid(e)) {
          if (
            (o("WALogger")
              .LOG(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "createChatRecord: tried to create chat ",
                    "",
                  ])),
                e.toLogString(),
              )
              .tags("missing-lid"),
            t.accountLid != null)
          ) {
            var n = o("WAWebWidFactory").createUserLidOrThrow(t.accountLid),
              r = await W(n);
            if (r.length === 0)
              o("WALogger")
                .LOG(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "createChatRecord: no chat with the same accountLid ",
                      "",
                    ])),
                  n.toLogString(),
                )
                .tags("missing-lid");
            else {
              var a = o("WAWebWidFactory").createWid(r[0].id).toLogString();
              o("WALogger")
                .LOG(
                  k ||
                    (k = babelHelpers.taggedTemplateLiteralLoose([
                      "createChatRecord: dup accountLid ",
                      " chatId=",
                      "",
                    ])),
                  n.toLogString(),
                  a,
                )
                .tags("missing-lid");
            }
          }
        } else
          o("WALogger")
            .LOG(
              I ||
                (I = babelHelpers.taggedTemplateLiteralLoose([
                  "createChatRecord: no account lid provided",
                ])),
            )
            .tags("missing-lid");
      } catch (e) {
        o("WALogger")
          .LOG(
            T ||
              (T = babelHelpers.taggedTemplateLiteralLoose([
                "createChatRecord: failed debugging duplicate record",
              ])),
          )
          .tags("missing-lid");
      }
    }
    ((l.CreateChatDuplicateError = D),
      (l.createChatRecord = x),
      (l.getChatMeta = $),
      (l.updateChatForMarkAsReadSync = P),
      (l.markMessageAndChatAsRead = N),
      (l.markEditedMessageAndChatAsRead = M),
      (l.tightenAfterReadExpirationFromPeerReceipt = w),
      (l.updateChatArchiveDrawer = A),
      (l.reduceChatUnreadCount = F),
      (l.pruneExpiredTcTokens = O),
      (l.pruneExpiredOrphanTcTokens = B),
      (l.getChatRecordByAccountLid = W),
      (l.getAllChatsDeserialized = q),
      (l.injectAdditionalEphemeralInfoFromDB = U));
  },
  98,
);
