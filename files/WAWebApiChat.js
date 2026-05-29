__d(
  "WAWebApiChat",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
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
    function $(e, t) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (o("WALogger").LOG(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "createChatRecord ",
                "",
              ])),
            e.toLogString(),
          ),
            o("WAWebDBChatValidation").validateAccountLidInChatRow(
              t,
              "createChatRecord",
            ));
          try {
            yield o("WAWebSchemaChat")
              .getChatTable()
              .create(babelHelpers.extends({ id: e.toString() }, t));
          } catch (n) {
            throw n instanceof o("WAWebMiscErrors").DbOnLogoutAbort
              ? n
              : (o("WALogger")
                  .ERROR(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
                        "createChatRecord: create chat table failed",
                      ])),
                  )
                  .verbose(),
                n instanceof r("WAWeb-dexie").ConstraintError
                  ? (yield K(e, t), new x())
                  : r("err")("create chat table failed"));
          }
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSchemaChat")
            .getChatTable()
            .get(e.toString(), !1);
          return t
            ? { unreadCount: t.unreadCount, timestamp: t.t }
            : (o("WALogger").ERROR(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "chat with id ",
                    " is not found",
                  ])),
                e.toString(),
              ),
              (D || (D = n("Promise"))).reject(
                r("err")("Failed to find row in chat table"),
              ));
        })),
        M.apply(this, arguments)
      );
    }
    function w(t) {
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "updateChatForMarkAsReadSync",
            ])),
        ),
        o("WAWebModelStorageUtils")
          .getStorage()
          .lock(
            ["chat"],
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var n = e[0],
                    r = yield n.get(t);
                  if (r == null) {
                    o("WALogger").ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "updateMarkChatAsReadSync: could not find chat with id ",
                          "",
                        ])),
                      t,
                    );
                    return;
                  }
                  if (r.unreadCount === -1)
                    return (
                      o("WALogger").LOG(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "updateMarkChatAsReadSync: createOrMerge",
                          ])),
                      ),
                      n.createOrMerge(t, {
                        id: t,
                        unreadCount: 0,
                        unreadMentionsOfMe: [],
                        unreadMentionCount: 0,
                      })
                    );
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          )
      );
    }
    function A(e) {
      var t = e.chatId,
        a = e.keepChatUnread,
        i = e.lastReadRowId,
        l = e.readAt,
        s = e.threadId;
      o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "markMessageAndChatAsRead: ",
          ])),
      );
      var u = o("WAWebWidFactory").createWid(t),
        p = o("WAWebBotUtils").isMetaAiBot(u),
        _ = p ? ["message", "chat", "thread-metadata"] : ["message", "chat"];
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          _,
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var u = e[0],
                  c = e[1],
                  _ = e[2],
                  f = yield o(
                    "WAWebDBPendingReadReceiptQueries",
                  ).queryPendingReadReceiptMsgRowsWithTable(
                    u,
                    t,
                    p ? s : void 0,
                  ),
                  g = [],
                  h = [],
                  y = 0,
                  C = [],
                  b = new Set(),
                  v = [],
                  S = 0;
                (f.forEach(function (e) {
                  e.hsmTag ===
                    o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.AUTHENTICATION &&
                    o("WAWebBackendApi").frontendFireAndForget(
                      "logOTPMessageReadActions",
                      { msgRow: e },
                    );
                  var t = i == null || (e.rowId != null && e.rowId > i);
                  if (t) {
                    if ((y++, o("WAWebMsgGetters").getIsImportantMessage(e))) {
                      var n = { id: e.id, timestamp: e.t };
                      C.push(n);
                    }
                    return;
                  }
                  var r = e.ack;
                  g.push({
                    id: e.id,
                    ack: Math.max(r, o("WAWebAck").ACK.READ),
                    pendingReadReceipt: null,
                  });
                  var a = e.afterReadDuration;
                  if (
                    a != null &&
                    a > 0 &&
                    (r == null || r < o("WAWebAck").ACK.READ) &&
                    !o("WAWebEphemeralKeepInChatUtils").isKept(e.kicState)
                  ) {
                    var u = l != null ? l : o("WATimeUtils").unixTime();
                    if (
                      (h.push({ id: e.id, expiredTimestamp: u + a }),
                      S++,
                      v.length < 3)
                    ) {
                      var c;
                      v.push(
                        e == null || (c = e.id) == null ? void 0 : c.toString(),
                      );
                    }
                  }
                  if (p)
                    for (var d of o(
                      "WAWebDBMessageUtils",
                    ).getThreadIdsFromMessage(e))
                      (s == null || d.equals(s)) && b.add(d.toString());
                }),
                  S > 0 &&
                    o("WALogger")
                      .LOG(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[markMessageAndChatAsRead] expiry set ",
                            " msgs => ",
                            " (source: ",
                            ")",
                          ])),
                        S,
                        v,
                        l != null ? "peer-read" : "local-read",
                      )
                      .tags("after-read"));
                var R = [],
                  L = null,
                  E = p && s != null;
                if (E) {
                  if (g.length > 0) {
                    var k = r("WAWebCompactSet")(g, function (e) {
                      return e.id;
                    });
                    L = yield o(
                      "WAWebDBPendingReadReceiptQueries",
                    ).updateChatUnreadCountForReadMessages(c, t, k);
                  }
                } else {
                  var I = y === 0 && a ? -1 : y;
                  R.push(
                    c.merge(t, {
                      id: t,
                      unreadCount: I,
                      unreadDividerOffset: 0,
                      unreadMentionsOfMe: C,
                      unreadMentionCount: 0,
                    }),
                  );
                }
                if (
                  (g.length > 0 &&
                    (o("WALogger")
                      .LOG(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "markMessageAndChatAsRead: bulkCreateOrMerge",
                          ])),
                      )
                      .tags("missing-lid"),
                    R.push(
                      u.bulkCreateOrMerge(g).then(function () {
                        return o(
                          "WAWebChatThreadLogging",
                        ).handleActivitiesForChatThreadLogging([
                          {
                            activityType: "msgRead",
                            ts: o("WATimeUtils").unixTime(),
                            chatId: o("WAWebWidFactory").createWid(t),
                            readCount: g.length,
                          },
                        ]);
                      }),
                    ),
                    h.length > 0 &&
                      R.push(
                        u.bulkCreateOrMerge(h).then(function () {
                          var e = h.map(function (e) {
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
                  yield (D || (D = n("Promise"))).all(R),
                  p && s != null && b.add(s.toString()),
                  b.size === 0)
                )
                  return { fullyReadThreadIds: [] };
                var T = Array.from(b).map(function (e) {
                  return r("WAWebThreadId").from(e);
                });
                return (
                  yield o(
                    "WAWebThreadMetadataBulkJob",
                  ).bulkUpdateThreadUnreadCountWithTable(
                    _,
                    T.map(function (e) {
                      return { threadId: e, unreadCount: 0 };
                    }),
                  ),
                  {
                    fullyReadThreadIds: T,
                    chatUnreadUpdate: L != null ? L : void 0,
                  }
                );
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        );
    }
    function F(e) {
      var t = e.chatId,
        a = e.readMsgKeys,
        i = e.threadId,
        l = t.toString();
      o("WALogger").LOG(
        p ||
          (p = babelHelpers.taggedTemplateLiteralLoose([
            "markEditedMessageAndChatAsRead: ",
          ])),
      );
      var s = new Set(
          a.map(function (e) {
            return e.id;
          }),
        ),
        u = o("WAWebBotUtils").isMetaAiBot(t),
        c = u ? ["message", "chat", "thread-metadata"] : ["message"];
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          c,
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e[0],
                  n = e[1],
                  a = e[2],
                  c = yield o(
                    "WAWebDBPendingReadReceiptQueries",
                  ).queryUnreadEditedMsgRowsWithTable(t, l, u ? i : void 0),
                  d = c.filter(function (e) {
                    var t = r("WAWebMsgKey").fromString(e.latestEditMsgKey).id;
                    return s.has(t);
                  });
                if (d.length === 0) return { fullyReadThreadIds: [] };
                var m = new Set();
                if (u)
                  for (var p of d)
                    for (var f of o(
                      "WAWebDBMessageUtils",
                    ).getThreadIdsFromMessage(p))
                      (i == null || f.equals(i)) && m.add(f.toString());
                var g = d.map(function (e) {
                  return { id: e.id, pendingReadReceipt: null };
                });
                (o("WALogger")
                  .LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "markEditedMessageAndChatAsRead: bulkCreateOrMerge",
                      ])),
                  )
                  .tags("missing-lid"),
                  yield t.bulkCreateOrMerge(g));
                var h = null;
                if (u && i != null && g.length > 0) {
                  var y = r("WAWebCompactSet")(g, function (e) {
                    return e.id;
                  });
                  h = yield o(
                    "WAWebDBPendingReadReceiptQueries",
                  ).updateChatUnreadCountForReadMessages(n, l, y);
                }
                if ((u && i != null && m.add(i.toString()), m.size === 0))
                  return { fullyReadThreadIds: [] };
                var C = Array.from(m).map(function (e) {
                  return r("WAWebThreadId").from(e);
                });
                return (
                  yield o(
                    "WAWebThreadMetadataBulkJob",
                  ).bulkUpdateThreadUnreadCountWithTable(
                    a,
                    C.map(function (e) {
                      return { threadId: e, unreadCount: 0 };
                    }),
                  ),
                  yield o(
                    "WAWebThreadMetadataBulkJob",
                  ).bulkUpdateThreadUnreadEditTimestampWithTable(
                    a,
                    C.map(function (e) {
                      return { threadId: e, unreadEditTimestampMs: null };
                    }),
                  ),
                  {
                    fullyReadThreadIds: C,
                    chatUnreadUpdate: h != null ? h : void 0,
                  }
                );
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        );
    }
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.msgKeys,
            a = e.readAt,
            i = yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                ["message"],
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var n = e[0],
                        r = yield n.bulkGet(
                          t.map(function (e) {
                            return e.toString();
                          }),
                        ),
                        i = [];
                      for (var l of r)
                        if (l != null) {
                          var s = l.afterReadDuration;
                          if (
                            !(s == null || s <= 0) &&
                            l.expiredTimestamp != null
                          ) {
                            var u = a + s;
                            u >= l.expiredTimestamp ||
                              i.push({ id: l.id, expiredTimestamp: u });
                          }
                        }
                      return (
                        i.length === 0 ||
                          (o("WALogger")
                            .LOG(
                              R ||
                                (R = babelHelpers.taggedTemplateLiteralLoose([
                                  "[tightenAfterReadExpirationFromPeerReceipt] ",
                                  " msgs tightened",
                                ])),
                              i.length,
                            )
                            .tags("after-read"),
                          yield n.bulkMergeOnly(i)),
                        i
                      );
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              );
          if (i.length !== 0) {
            var l = i.map(function (e) {
              return {
                id: r("WAWebMsgKey").fromString(e.id),
                expiredTimestamp: e.expiredTimestamp,
              };
            });
            o("WAWebBackendApi").frontendFireAndForget(
              "updateMsgExpiredTimestamps",
              { updates: l },
            );
          }
        })),
        B.apply(this, arguments)
      );
    }
    function W(e) {
      return (
        o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "updateChatArchiveDrawer",
            ])),
        ),
        o("WAWebModelStorageUtils")
          .getStorage()
          .lock(["chat"], function (t) {
            var r = t[0],
              a = Array.from(e.keys());
            if (a.length === 0) return (D || (D = n("Promise"))).resolve();
            var i = a.map(function (t) {
              var n,
                r = (n = e.get(t)) != null ? n : !1;
              return { id: t, archiveAtMentionViewedInDrawer: r };
            });
            return (
              o("WALogger")
                .LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "updateChatArchiveDrawer: bulkCreateOrMerge",
                    ])),
                )
                .tags("missing-lid"),
              r.bulkCreateOrMerge(i)
            );
          })
      );
    }
    function q(e, t, r) {
      return (
        t === void 0 && (t = 1),
        r === void 0 && (r = !0),
        o("WAWebModelStorageUtils")
          .getStorage()
          .lock(
            ["chat"],
            (function () {
              var a = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (n) {
                  var a,
                    i = n[0],
                    l = yield i.get(e);
                  if (l == null) {
                    o("WALogger").ERROR(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
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
                    r && (u += t),
                    i.merge(e, { unreadCount: s, unreadDividerOffset: u })
                  );
                },
              );
              return function (e) {
                return a.apply(this, arguments);
              };
            })(),
          )
      );
    }
    function U() {
      o("WALogger").LOG(
        y ||
          (y = babelHelpers.taggedTemplateLiteralLoose([
            "pruneExpiredTcTokens",
          ])),
      );
      var e = o("WAWebTrustedContactsUtils").tokenExpirationCutoff(
        o("WAWebTrustedContactsUtils").TcTokenMode.Receiver,
      );
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          ["chat"],
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = t[0],
                  r = yield n.lessThan(["tcTokenTimestamp"], e);
                if (!(!r || r.length === 0)) {
                  var a = r.map(function (e) {
                    return { id: e.id, tcToken: null, tcTokenTimestamp: null };
                  });
                  return (
                    o("WALogger")
                      .LOG(
                        C ||
                          (C = babelHelpers.taggedTemplateLiteralLoose([
                            "pruneExpiredTcTokens: bulkCreateOrMerge",
                          ])),
                      )
                      .tags("missing-lid"),
                    n.bulkCreateOrMerge(a)
                  );
                }
              },
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
        );
    }
    function V() {
      var e = o("WAWebTrustedContactsUtils").tokenExpirationCutoff(
          o("WAWebTrustedContactsUtils").TcTokenMode.Receiver,
        ),
        t = [];
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          ["orphan-tc-token"],
          (function () {
            var r = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (n) {
                var r = n[0],
                  o = yield r.all();
                return (
                  o.forEach(function (n) {
                    var r = n.tcTokenTimestamp;
                    r != null && r < e && t.push(n.chatId);
                  }),
                  r.bulkRemove(t)
                );
              },
            );
            return function (e) {
              return r.apply(this, arguments);
            };
          })(),
        );
    }
    function H(e) {
      return o("WAWebSchemaChat")
        .getChatTable()
        .anyOf(["accountLid"], [e.toString()]);
    }
    function G() {
      return o("WAWebSchemaChat")
        .getChatTable()
        .all()
        .then(function (e) {
          return e.map(function (e) {
            return o("WAWebDBChatSerialization").deserializeChat(e);
          });
        });
    }
    function z(e) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.map(function (e) {
              return e.id.toString();
            }),
            n = yield o("WAWebSchemaChat").getChatTable().bulkGet(t),
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
        })),
        j.apply(this, arguments)
      );
    }
    function K(e, t) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
                  r = yield H(n);
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
        })),
        Q.apply(this, arguments)
      );
    }
    ((l.CreateChatDuplicateError = x),
      (l.createChatRecord = $),
      (l.getChatMeta = N),
      (l.updateChatForMarkAsReadSync = w),
      (l.markMessageAndChatAsRead = A),
      (l.markEditedMessageAndChatAsRead = F),
      (l.tightenAfterReadExpirationFromPeerReceipt = O),
      (l.updateChatArchiveDrawer = W),
      (l.reduceChatUnreadCount = q),
      (l.pruneExpiredTcTokens = U),
      (l.pruneExpiredOrphanTcTokens = V),
      (l.getChatRecordByAccountLid = H),
      (l.getAllChatsDeserialized = G),
      (l.injectAdditionalEphemeralInfoFromDB = z));
  },
  98,
);
