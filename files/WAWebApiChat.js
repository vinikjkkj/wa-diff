__d(
  "WAWebApiChat",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWeb-dexie",
    "WAWebABProps",
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
    "WAWebDbErrors",
    "WAWebEphemeralKeepInChatUtils",
    "WAWebEphemeralityUtils",
    "WAWebGetChatRecordByAccountLid",
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
      x,
      $ = (function (e) {
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
    function P(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
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
            throw n instanceof o("WAWebDbErrors").DbOnLogoutAbort
              ? n
              : (o("WALogger")
                  .ERROR(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "createChatRecord: create chat table failed",
                      ])),
                  )
                  .verbose(),
                n instanceof r("WAWeb-dexie").ConstraintError
                  ? (yield J(e, t), new $())
                  : r("err")("create chat table failed"));
          }
        })),
        N.apply(this, arguments)
      );
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSchemaChat")
            .getChatTable()
            .get(e.toString(), !1);
          return t
            ? { unreadCount: t.unreadCount, timestamp: t.t }
            : (o("WALogger").ERROR(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "chat with id ",
                    " is not found",
                  ])),
                e.toString(),
              ),
              (x || (x = n("Promise"))).reject(
                r("err")("Failed to find row in chat table"),
              ));
        })),
        w.apply(this, arguments)
      );
    }
    function A(t) {
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
    function F(e) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatId,
            a = e.keepChatUnread,
            i = e.lastReadRowId,
            l = e.readAt,
            s = e.threadId;
          o("WALogger").LOG(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "markMessageAndChatAsRead: ",
              ])),
          );
          var u = o("WAWebWidFactory").createWid(t),
            c = o("WAWebBotUtils").isMetaAiBot(u),
            d = c
              ? ["message", "chat", "thread-metadata"]
              : ["message", "chat"],
            m =
              u.isNewsletter() &&
              o("WAWebABProps").getABPropConfigValue(
                "thread_interactions_channel_reads_aligned_web_enabled",
              ) === !0,
            p = m && (yield W(t));
          return o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              d,
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var u,
                      d = e[0],
                      _ = e[1],
                      f = e[2],
                      g = yield o(
                        "WAWebDBPendingReadReceiptQueries",
                      ).queryPendingReadReceiptMsgRowsWithTable(
                        d,
                        t,
                        c ? s : void 0,
                      ),
                      h = m
                        ? B(
                            p,
                            (u = yield _.get(t)) == null
                              ? void 0
                              : u.unreadCount,
                          )
                        : null,
                      y = [],
                      C = [],
                      b = 0,
                      R = [],
                      L = new Set(),
                      E = [],
                      k = 0;
                    (g.forEach(function (e) {
                      e.hsmTag ===
                        o("WAWebBusinessHSMTypes").HSM_TAG_TYPE
                          .AUTHENTICATION &&
                        o("WAWebBackendApi").frontendFireAndForget(
                          "logOTPMessageReadActions",
                          { msgRow: e },
                        );
                      var t = i == null || (e.rowId != null && e.rowId > i);
                      if (t) {
                        if (
                          (b++, o("WAWebMsgGetters").getIsImportantMessage(e))
                        ) {
                          var n = { id: e.id, timestamp: e.t };
                          R.push(n);
                        }
                        return;
                      }
                      var r = e.ack;
                      y.push({
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
                          (C.push({ id: e.id, expiredTimestamp: u + a }),
                          k++,
                          E.length < 3)
                        ) {
                          var d;
                          E.push(
                            e == null || (d = e.id) == null
                              ? void 0
                              : d.toString(),
                          );
                        }
                      }
                      if (c)
                        for (var m of o(
                          "WAWebDBMessageUtils",
                        ).getThreadIdsFromMessage(e))
                          (s == null || m.equals(s)) && L.add(m.toString());
                    }),
                      k > 0 &&
                        o("WALogger")
                          .LOG(
                            v ||
                              (v = babelHelpers.taggedTemplateLiteralLoose([
                                "[markMessageAndChatAsRead] expiry set ",
                                " msgs => ",
                                " (source: ",
                                ")",
                              ])),
                            k,
                            E,
                            l != null ? "peer-read" : "local-read",
                          )
                          .tags("after-read"));
                    var I = [],
                      T = null,
                      D = c && s != null;
                    if (D) {
                      if (y.length > 0) {
                        var $ = r("WAWebCompactSet")(y, function (e) {
                          return e.id;
                        });
                        T = yield o(
                          "WAWebDBPendingReadReceiptQueries",
                        ).updateChatUnreadCountForReadMessages(_, t, $);
                      }
                    } else {
                      var P = b === 0 && a ? -1 : b;
                      I.push(
                        _.merge(t, {
                          id: t,
                          unreadCount: P,
                          unreadDividerOffset: 0,
                          unreadMentionsOfMe: R,
                          unreadMentionCount: 0,
                        }),
                      );
                    }
                    if (
                      (y.length > 0 &&
                        (o("WALogger")
                          .LOG(
                            S ||
                              (S = babelHelpers.taggedTemplateLiteralLoose([
                                "markMessageAndChatAsRead: bulkCreateOrMerge",
                              ])),
                          )
                          .tags("missing-lid"),
                        I.push(
                          d.bulkCreateOrMerge(y).then(function () {
                            return o(
                              "WAWebChatThreadLogging",
                            ).handleActivitiesForChatThreadLogging([
                              {
                                activityType: "msgRead",
                                ts: o("WATimeUtils").unixTime(),
                                chatId: o("WAWebWidFactory").createWid(t),
                                readCount:
                                  h == null ? y.length : Math.min(y.length, h),
                              },
                            ]);
                          }),
                        ),
                        C.length > 0 &&
                          I.push(
                            d.bulkCreateOrMerge(C).then(function () {
                              var e = C.map(function (e) {
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
                      yield (x || (x = n("Promise"))).all(I),
                      c && s != null && L.add(s.toString()),
                      L.size === 0)
                    )
                      return { fullyReadThreadIds: [] };
                    var N = Array.from(L).map(function (e) {
                      return r("WAWebThreadId").from(e);
                    });
                    return (
                      yield o(
                        "WAWebThreadMetadataBulkJob",
                      ).bulkUpdateThreadUnreadCountWithTable(
                        f,
                        N.map(function (e) {
                          return { threadId: e, unreadCount: 0 };
                        }),
                      ),
                      {
                        fullyReadThreadIds: N,
                        chatUnreadUpdate: T != null ? T : void 0,
                      }
                    );
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            );
        })),
        O.apply(this, arguments)
      );
    }
    function B(e, t) {
      return e ? 0 : Math.max(t != null ? t : 0, 0);
    }
    function W(e) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            return yield o("WAWebNewsletterDBUtils").isPreviewNewsletter(
              o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(e),
            );
          } catch (e) {
            return (
              o("WALogger").WARN(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "markMessageAndChatAsRead: newsletter membership lookup failed",
                  ])),
              ),
              !1
            );
          }
        })),
        q.apply(this, arguments)
      );
    }
    function U(e) {
      var t = e.chatId,
        a = e.readMsgKeys,
        i = e.threadId,
        l = t.toString();
      o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "markEditedMessageAndChatAsRead: ",
          ])),
      );
      var s = new Set(
          a.map(function (e) {
            return e.id;
          }),
        ),
        u = o("WAWebBotUtils").isMetaAiBot(t),
        m = u ? ["message", "chat", "thread-metadata"] : ["message"];
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          m,
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e[0],
                  n = e[1],
                  a = e[2],
                  c = yield o(
                    "WAWebDBPendingReadReceiptQueries",
                  ).queryUnreadEditedMsgRowsWithTable(t, l, u ? i : void 0),
                  m = c.filter(function (e) {
                    var t = r("WAWebMsgKey").fromString(e.latestEditMsgKey).id;
                    return s.has(t);
                  });
                if (m.length === 0) return { fullyReadThreadIds: [] };
                var p = new Set();
                if (u)
                  for (var _ of m)
                    for (var f of o(
                      "WAWebDBMessageUtils",
                    ).getThreadIdsFromMessage(_))
                      (i == null || f.equals(i)) && p.add(f.toString());
                var g = m.map(function (e) {
                  return { id: e.id, pendingReadReceipt: null };
                });
                (o("WALogger")
                  .LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
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
                if ((u && i != null && p.add(i.toString()), p.size === 0))
                  return { fullyReadThreadIds: [] };
                var C = Array.from(p).map(function (e) {
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
    function V(e) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                              L ||
                                (L = babelHelpers.taggedTemplateLiteralLoose([
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
        H.apply(this, arguments)
      );
    }
    function G(e) {
      return (
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "updateChatArchiveDrawer",
            ])),
        ),
        o("WAWebModelStorageUtils")
          .getStorage()
          .lock(["chat"], function (t) {
            var r = t[0],
              a = Array.from(e.keys());
            if (a.length === 0) return (x || (x = n("Promise"))).resolve();
            var i = a.map(function (t) {
              var n,
                r = (n = e.get(t)) != null ? n : !1;
              return { id: t, archiveAtMentionViewedInDrawer: r };
            });
            return (
              o("WALogger")
                .LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "updateChatArchiveDrawer: bulkCreateOrMerge",
                    ])),
                )
                .tags("missing-lid"),
              r.bulkCreateOrMerge(i)
            );
          })
      );
    }
    function z(e, t, r) {
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
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
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
    function j() {
      o("WALogger").LOG(
        f ||
          (f = babelHelpers.taggedTemplateLiteralLoose([
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
                        g ||
                          (g = babelHelpers.taggedTemplateLiteralLoose([
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
    function K() {
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
    function Q() {
      return o("WAWebSchemaChat")
        .getChatTable()
        .all()
        .then(function (e) {
          return e.map(function (e) {
            return o("WAWebDBChatSerialization").deserializeChat(e);
          });
        });
    }
    function X(e) {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        Y.apply(this, arguments)
      );
    }
    function J(e, t) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            if (o("WAWebLidMigrationUtils").shouldHaveAccountLid(e)) {
              if (
                (o("WALogger")
                  .LOG(
                    E ||
                      (E = babelHelpers.taggedTemplateLiteralLoose([
                        "createChatRecord: tried to create chat ",
                        "",
                      ])),
                    e.toLogString(),
                  )
                  .tags("missing-lid"),
                t.accountLid != null)
              ) {
                var n = o("WAWebWidFactory").createUserLidOrThrow(t.accountLid),
                  r = yield o(
                    "WAWebGetChatRecordByAccountLid",
                  ).getChatRecordByAccountLid(n);
                if (r.length === 0)
                  o("WALogger")
                    .LOG(
                      k ||
                        (k = babelHelpers.taggedTemplateLiteralLoose([
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
                      I ||
                        (I = babelHelpers.taggedTemplateLiteralLoose([
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
                  T ||
                    (T = babelHelpers.taggedTemplateLiteralLoose([
                      "createChatRecord: no account lid provided",
                    ])),
                )
                .tags("missing-lid");
          } catch (e) {
            o("WALogger")
              .LOG(
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
                    "createChatRecord: failed debugging duplicate record",
                  ])),
              )
              .tags("missing-lid");
          }
        })),
        Z.apply(this, arguments)
      );
    }
    ((l.CreateChatDuplicateError = $),
      (l.createChatRecord = P),
      (l.getChatMeta = M),
      (l.updateChatForMarkAsReadSync = A),
      (l.markMessageAndChatAsRead = F),
      (l.markEditedMessageAndChatAsRead = U),
      (l.tightenAfterReadExpirationFromPeerReceipt = V),
      (l.updateChatArchiveDrawer = G),
      (l.reduceChatUnreadCount = z),
      (l.pruneExpiredTcTokens = j),
      (l.pruneExpiredOrphanTcTokens = K),
      (l.getAllChatsDeserialized = Q),
      (l.injectAdditionalEphemeralInfoFromDB = X));
  },
  98,
);
