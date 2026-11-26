__d(
  "WAWebApiChat",
  [
    "WALogger",
    "WATimeUtils",
    "WAWeb-dexie",
    "WAWebABProps",
    "WAWebAck",
    "WAWebBackendApi",
    "WAWebBotUtils",
    "WAWebBusinessHSMTypes",
    "WAWebChatThreadLogging",
    "WAWebDBChatSerialization",
    "WAWebDBChatValidation",
    "WAWebDBMessageUtils",
    "WAWebDBPendingReadReceiptQueries",
    "WAWebDbErrors",
    "WAWebEphemeralKeepInChatUtils",
    "WAWebEphemeralityUtils",
    "WAWebGetChatRecordByAccountLid",
    "WAWebInstantsExpiry",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterValidationUtils",
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
      D,
      x = (function (e) {
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
    async function $(t, n) {
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
        throw e instanceof o("WAWebDbErrors").DbOnLogoutAbort
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
              ? (await G(t, n), new x())
              : r("err")("create chat table failed"));
      }
    }
    async function P(e) {
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
    function N(e) {
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
    async function M(e) {
      var t = e.chatId,
        n = e.keepChatUnread,
        a = e.lastReadRowId,
        i = e.readAt,
        l = e.readMsgRows,
        s = e.threadId;
      o("WALogger").LOG(
        p ||
          (p = babelHelpers.taggedTemplateLiteralLoose([
            "markMessageAndChatAsRead: ",
          ])),
      );
      var u = o("WAWebWidFactory").createWid(t),
        c = o("WAWebBotUtils").isMetaAiBot(u),
        d = c ? ["message", "chat", "thread-metadata"] : ["message", "chat"],
        m =
          u.isNewsletter() &&
          o("WAWebABProps").getABPropConfigValue(
            "thread_interactions_channel_reads_aligned_web_enabled",
          ) === !0,
        _ = m && (await A(t)),
        f =
          l != null
            ? new Map(
                l.map(function (e) {
                  return [e.id, e];
                }),
              )
            : null;
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(d, async function (e) {
          var l,
            u = e[0],
            d = e[1],
            p = e[2],
            g = await o(
              "WAWebDBPendingReadReceiptQueries",
            ).queryPendingReadReceiptMsgRowsWithTable(u, t, c ? s : void 0),
            h = m
              ? w(_, (l = await d.get(t)) == null ? void 0 : l.unreadCount)
              : null,
            y = Q({
              pendingMessages: g,
              lastReadRowId: a,
              readMsgRowsById: f,
              readAt: i,
              shouldProcessThreads: c,
              threadId: s,
            }),
            C = y.ackUpdates,
            b = y.expirationSetMsgIdCount,
            v = y.expirationSetMsgIds,
            S = y.expiredTimestampUpdates,
            R = y.fullyReadThreadIds,
            L = y.newlyReadIds,
            E = y.newUnreadCount,
            k = y.updatedUnreadMentions;
          Y(b, v, i);
          var I = [],
            T = null,
            D = c && s != null;
          if (D)
            C.length > 0 &&
              (T = await o(
                "WAWebDBPendingReadReceiptQueries",
              ).updateChatUnreadCountForReadMessages(
                d,
                t,
                L,
                new Set(
                  C.flatMap(function (e) {
                    var t;
                    return (t = e.id) != null ? t : [];
                  }),
                ),
              ));
          else {
            var x = E === 0 && n ? -1 : E;
            I.push(
              d.merge(t, {
                id: t,
                unreadCount: x,
                unreadDividerOffset: 0,
                unreadMentionsOfMe: k,
                unreadMentionCount: 0,
              }),
            );
          }
          if (
            (I.push(
              J(
                u,
                t,
                { ackUpdates: C, newlyReadIds: L, expiredTimestampUpdates: S },
                h,
              ),
            ),
            await Promise.all(I),
            c && s != null && R.add(s.toString()),
            R.size === 0)
          )
            return { fullyReadThreadIds: [] };
          var $ = Array.from(R).map(function (e) {
            return r("WAWebThreadId").from(e);
          });
          return (
            await o(
              "WAWebThreadMetadataBulkJob",
            ).bulkUpdateThreadUnreadCountWithTable(
              p,
              $.map(function (e) {
                return { threadId: e, unreadCount: 0 };
              }),
            ),
            { fullyReadThreadIds: $, chatUnreadUpdate: T != null ? T : void 0 }
          );
        });
    }
    function w(e, t) {
      return e ? 0 : Math.max(t != null ? t : 0, 0);
    }
    async function A(e) {
      try {
        return await o("WAWebNewsletterDBUtils").isPreviewNewsletter(
          o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(e),
        );
      } catch (e) {
        return (
          o("WALogger").WARN(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "markMessageAndChatAsRead: newsletter membership lookup failed",
              ])),
          ),
          !1
        );
      }
    }
    function F(e) {
      var t = e.chatId,
        n = e.readMsgKeys,
        a = e.threadId,
        i = t.toString();
      o("WALogger").LOG(
        f ||
          (f = babelHelpers.taggedTemplateLiteralLoose([
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
          for (var p of d) j(p, s, a, m);
          var _ = d.map(function (e) {
              return {
                id: e.id,
                pendingReadReceipt: null,
                pendingReadReceiptOrigin: null,
              };
            }),
            f = new Set(
              d.map(function (e) {
                return e.id;
              }),
            );
          (o("WALogger")
            .LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "markEditedMessageAndChatAsRead: bulkCreateOrMerge",
                ])),
            )
            .tags("missing-lid"),
            await t.bulkCreateOrMerge(_));
          var h = null;
          if (
            (s &&
              a != null &&
              _.length > 0 &&
              (h = await o(
                "WAWebDBPendingReadReceiptQueries",
              ).updateChatUnreadCountForReadMessages(n, i, f)),
            s && a != null && m.add(a.toString()),
            z(c, l, s, a, m),
            m.size === 0)
          )
            return {
              fullyReadThreadIds: [],
              chatUnreadUpdate: h != null ? h : void 0,
            };
          var y = Array.from(m).map(function (e) {
            return r("WAWebThreadId").from(e);
          });
          return (
            await o(
              "WAWebThreadMetadataBulkJob",
            ).bulkUpdateThreadUnreadCountWithTable(
              u,
              y.map(function (e) {
                return { threadId: e, unreadCount: 0 };
              }),
            ),
            await o(
              "WAWebThreadMetadataBulkJob",
            ).bulkUpdateThreadUnreadEditTimestampWithTable(
              u,
              y.map(function (e) {
                return { threadId: e, unreadEditTimestampMs: null };
              }),
            ),
            { fullyReadThreadIds: y, chatUnreadUpdate: h != null ? h : void 0 }
          );
        });
    }
    async function O(e) {
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
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
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
    function B(e) {
      return (
        o("WALogger").LOG(
          y ||
            (y = babelHelpers.taggedTemplateLiteralLoose([
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
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "updateChatArchiveDrawer: bulkCreateOrMerge",
                    ])),
                )
                .tags("missing-lid"),
              n.bulkCreateOrMerge(a)
            );
          })
      );
    }
    function W(e, t, n) {
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
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
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
    function q() {
      o("WALogger").LOG(
        v ||
          (v = babelHelpers.taggedTemplateLiteralLoose([
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
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "pruneExpiredTcTokens: bulkCreateOrMerge",
                    ])),
                )
                .tags("missing-lid"),
              n.bulkCreateOrMerge(a)
            );
          }
        });
    }
    function U() {
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
    function V() {
      return o("WAWebSchemaChat")
        .getChatTable()
        .all()
        .then(function (e) {
          return e.map(function (e) {
            return o("WAWebDBChatSerialization").deserializeChat(e);
          });
        });
    }
    async function H(e) {
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
    async function G(e, t) {
      try {
        if (o("WAWebLidMigrationUtils").shouldHaveAccountLid(e)) {
          if (
            (o("WALogger")
              .LOG(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "createChatRecord: tried to create chat ",
                    "",
                  ])),
                e.toLogString(),
              )
              .tags("missing-lid"),
            t.accountLid != null)
          ) {
            var n = o("WAWebWidFactory").createUserLidOrThrow(t.accountLid),
              r = await o(
                "WAWebGetChatRecordByAccountLid",
              ).getChatRecordByAccountLid(n);
            if (r.length === 0)
              o("WALogger")
                .LOG(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
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
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
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
              k ||
                (k = babelHelpers.taggedTemplateLiteralLoose([
                  "createChatRecord: no account lid provided",
                ])),
            )
            .tags("missing-lid");
      } catch (e) {
        o("WALogger")
          .LOG(
            I ||
              (I = babelHelpers.taggedTemplateLiteralLoose([
                "createChatRecord: failed debugging duplicate record",
              ])),
          )
          .tags("missing-lid");
      }
    }
    function z(e, t, n, o, a) {
      var i = new Set();
      for (var l of e)
        t.has(r("WAWebMsgKey").fromString(l.latestEditMsgKey).id) ||
          j(l, n, o, i);
      i.forEach(function (e) {
        return a.delete(e);
      });
    }
    function j(e, t, n, r) {
      if (t)
        for (var a of o("WAWebDBMessageUtils").getThreadIdsFromMessage(e))
          (n == null || a.equals(n)) && r.add(a.toString());
    }
    function K(e, t) {
      var n,
        r = e.afterReadDuration,
        a = (n = e.ack) != null ? n : o("WAWebAck").ACK.CLOCK;
      if (
        r != null &&
        r > 0 &&
        a < o("WAWebAck").ACK.READ &&
        !o("WAWebEphemeralKeepInChatUtils").isKept(e.kicState)
      ) {
        var i = t != null ? t : o("WATimeUtils").unixTime();
        return {
          id: e.id,
          expiredTimestamp: o(
            "WAWebInstantsExpiry",
          ).capAfterReadDeadlineForInstant(e, i + r),
        };
      }
      return null;
    }
    function Q(e) {
      var t = e.lastReadRowId,
        n = e.pendingMessages,
        r = e.readAt,
        a = e.readMsgRowsById,
        i = e.shouldProcessThreads,
        l = e.threadId,
        s = [],
        u = new Set(),
        c = [],
        d = 0,
        m = [],
        p = new Set(),
        _ = [],
        f = 0;
      return (
        n.forEach(function (e) {
          var n;
          e.hsmTag === o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.AUTHENTICATION &&
            o("WAWebBackendApi").frontendFireAndForget(
              "logOTPMessageReadActions",
              { msgRow: e },
            );
          var g = X(e, t, a),
            h = e.ack === o("WAWebAck").ACK.READ;
          if (g) {
            if (h) return;
            if ((d++, o("WAWebMsgGetters").getIsImportantMessage(e))) {
              var y = { id: e.id, timestamp: e.t };
              m.push(y);
            }
            return;
          }
          h || u.add(e.id);
          var C = (n = e.ack) != null ? n : o("WAWebAck").ACK.CLOCK;
          s.push({
            id: e.id,
            ack: Math.max(C, o("WAWebAck").ACK.READ),
            pendingReadReceipt: null,
            pendingReadReceiptOrigin: null,
          });
          var b = K(e, r);
          if (b != null && (c.push(b), f++, _.length < 3)) {
            var v;
            _.push(e == null || (v = e.id) == null ? void 0 : v.toString());
          }
          j(e, i, l, p);
        }),
        {
          ackUpdates: s,
          newlyReadIds: u,
          expiredTimestampUpdates: c,
          newUnreadCount: d,
          updatedUnreadMentions: m,
          fullyReadThreadIds: p,
          expirationSetMsgIds: _,
          expirationSetMsgIdCount: f,
        }
      );
    }
    function X(e, t, n) {
      return t == null || (e.rowId != null && e.rowId > t)
        ? !0
        : n != null &&
            !o(
              "WAWebDBPendingReadReceiptQueries",
            ).isPendingReadReceiptTargetUnchanged(e, n.get(e.id));
    }
    function Y(e, t, n) {
      e > 0 &&
        o("WALogger")
          .LOG(
            T ||
              (T = babelHelpers.taggedTemplateLiteralLoose([
                "[markMessageAndChatAsRead] expiry set ",
                " msgs => ",
                " (source: ",
                ")",
              ])),
            e,
            t,
            n != null ? "peer-read" : "local-read",
          )
          .tags("after-read");
    }
    async function J(e, t, n, a) {
      var i = n.ackUpdates,
        l = n.expiredTimestampUpdates,
        s = n.newlyReadIds,
        u = [];
      (i.length > 0 &&
        (o("WALogger")
          .LOG(
            D ||
              (D = babelHelpers.taggedTemplateLiteralLoose([
                "markMessageAndChatAsRead: bulkCreateOrMerge",
              ])),
          )
          .tags("missing-lid"),
        u.push(
          e.bulkCreateOrMerge(i).then(function () {
            if (s.size !== 0)
              return o(
                "WAWebChatThreadLogging",
              ).handleActivitiesForChatThreadLogging([
                {
                  activityType: "msgRead",
                  ts: o("WATimeUtils").unixTime(),
                  chatId: o("WAWebWidFactory").createWid(t),
                  readCount: a == null ? s.size : Math.min(s.size, a),
                },
              ]);
          }),
        ),
        l.length > 0 &&
          u.push(
            e.bulkCreateOrMerge(l).then(function () {
              var e = l.map(function (e) {
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
        await Promise.all(u));
    }
    ((l.CreateChatDuplicateError = x),
      (l.createChatRecord = $),
      (l.getChatMeta = P),
      (l.updateChatForMarkAsReadSync = N),
      (l.markMessageAndChatAsRead = M),
      (l.markEditedMessageAndChatAsRead = F),
      (l.tightenAfterReadExpirationFromPeerReceipt = O),
      (l.updateChatArchiveDrawer = B),
      (l.reduceChatUnreadCount = W),
      (l.pruneExpiredTcTokens = q),
      (l.pruneExpiredOrphanTcTokens = U),
      (l.getAllChatsDeserialized = V),
      (l.injectAdditionalEphemeralInfoFromDB = H));
  },
  98,
);
