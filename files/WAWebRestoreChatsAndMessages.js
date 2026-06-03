__d(
  "WAWebRestoreChatsAndMessages",
  [
    "Promise",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebApiChat",
    "WAWebApiHydrateWidsUtil",
    "WAWebChatCollection",
    "WAWebChatComparator",
    "WAWebChatGetters",
    "WAWebChatMsgsCollection",
    "WAWebDBAddOnProviders",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageStoreUtils",
    "WAWebDBMessageUtils",
    "WAWebDbEncryptionKey",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebModelStorageInitialize",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebNewsletterCollection",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebPromiseQueue",
    "WAWebRestoreBusinessInfo",
    "WAWebRestoreGroupParticipantsAction",
    "WAWebSchemaMessage",
    "WAWebThreadMetadata",
    "WAWebThreadMetadataUtil",
    "WAWebWamOfflineResumeReporter",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["id"],
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h = 20,
      y = 5,
      C = 100;
    function b(e, t) {
      return e.reduce(
        function (e, n) {
          var r,
            a = o("WAWebApiHydrateWidsUtil").hydrateWids(
              babelHelpers.extends({}, n, {
                pendingInitialLoading: !0,
                isReadOnly: (r = n.isReadOnly) != null ? r : !1,
              }),
            ),
            i = o("WAWebThreadMetadataUtil").getOfflineMetaPreviewForChat({
              chatTimestamp: t == null ? void 0 : t.chatTimestamp,
              chatId: a.id,
              accountLid: a.accountLid,
            });
          return (
            i != null && (a.previewT = i),
            a.id.isNewsletter() ? e.newsletters.push(a) : e.chats.push(a),
            e
          );
        },
        { chats: [], newsletters: [] },
      );
    }
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (
            o(
              "WAWebWamOfflineResumeReporter",
            ).OfflineResumeReporter.qpl.addPoint(
              "RestoreChatsAndMessages_start",
            ),
            yield o(
              "WAWebDbEncryptionKey",
            ).DbEncKeyStore.waitForFinalDbMsgEncKey(),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[init-from-storage] load DbEncKeyStore key",
                ])),
            ),
            o("WAWebModelStorageInitialize")
              .initializeWithoutGKs()
              .then(
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  var e;
                  ((e = o(
                    "WAWebWamOfflineResumeReporter",
                  )).OfflineResumeReporter.qpl.addPoint("RestoreChats_start"),
                    e.OfflineResumeReporter.qpl.addPoint("RCMGetChats_start"));
                  var t = yield o("WAWebApiChat").getAllChatsDeserialized();
                  (e.OfflineResumeReporter.qpl.addPoint("RCMGetChats_end"),
                    e.OfflineResumeReporter.qpl.addPoint(
                      "RCMPopulateMatCache_start",
                    ),
                    e.OfflineResumeReporter.qpl.addPoint(
                      "RCMPopulateMatCache_end",
                    ),
                    e.OfflineResumeReporter.qpl.addPoint(
                      "RCMFilterChats_start",
                    ));
                  var n = o(
                      "WAWebThreadMetadata",
                    ).getOfflineThreadMetaPreview(),
                    a = b(t, n),
                    i = a.chats,
                    l = a.newsletters;
                  (e.OfflineResumeReporter.logOfflineChatThreadCount(t.length),
                    i.sort(r("WAWebChatComparator")),
                    o("WAWebChatCollection").ChatCollection.add(i, {
                      merge: !0,
                    }),
                    e.OfflineResumeReporter.qpl.addPoint("RCMFilterChats_end"),
                    e.OfflineResumeReporter.qpl.addPoint("RestoreChats_end"),
                    e.OfflineResumeReporter.qpl.addPoint(
                      "RestoreChatsAndMessagesFirstChunk_start",
                    ));
                  var s =
                    o("WAWebABProps").getABPropConfigValue(
                      "web_init_chat_batch_size",
                    ) || C;
                  (o(
                    "WAWebWamOfflineResumeReporter",
                  ).OfflineResumeReporter.qpl.addAnnotations({
                    int: { web_init_chat_batch_size: s },
                  }),
                    o(
                      "WAWebNewsletterCommonGatingUtils",
                    ).isNewsletterEnabled() &&
                      (l.sort(r("WAWebChatComparator")),
                      r("WAWebNewsletterCollection") == null ||
                        r("WAWebNewsletterCollection").add(l, { merge: !0 }),
                      R(F(l), s)));
                  var u = yield R(F(i), s);
                  return (
                    o(
                      "WAWebWamOfflineResumeReporter",
                    ).OfflineResumeReporter.qpl.addPoint(
                      "RestoreChatsAndMessagesFirstChunk_end",
                    ),
                    o(
                      "WAWebWamOfflineResumeReporter",
                    ).OfflineResumeReporter.qpl.addPoint(
                      "RCMUpdateDuplicatedLidThread_start",
                    ),
                    o(
                      "WAWebWamOfflineResumeReporter",
                    ).OfflineResumeReporter.qpl.addPoint(
                      "RCMUpdateDuplicatedLidThread_end",
                    ),
                    u
                  );
                }),
              )
              .then(o("WAWebRestoreBusinessInfo").restoreBusinessInfo)
              .then(function () {
                o(
                  "WAWebWamOfflineResumeReporter",
                ).OfflineResumeReporter.qpl.addPoint(
                  "RestoreChatsAndMessages_end",
                );
              })
              .catch(function (e) {
                throw (
                  o("WALogger")
                    .ERROR(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "restoreChatsAndMessages: failed with error",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e)),
                  e
                );
              })
          );
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      for (
        var a = (g || (g = n("Promise"))).resolve(),
          i = new (o("WAWebPromiseQueue").PromiseQueue)(),
          l = function (s) {
            var l = e.slice(s, s + t),
              u = (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    var e = self.performance.now();
                    s === 0 &&
                      o(
                        "WAWebWamOfflineResumeReporter",
                      ).OfflineResumeReporter.qpl.addPoint(
                        "RCMChatMetadata_start",
                      );
                    var t = yield L(l);
                    (s === 0 &&
                      o(
                        "WAWebWamOfflineResumeReporter",
                      ).OfflineResumeReporter.qpl.addPoint(
                        "RCMChatMetadata_end",
                      ),
                      s === 0 &&
                        o(
                          "WAWebWamOfflineResumeReporter",
                        ).OfflineResumeReporter.qpl.addPoint(
                          "RCMRestoreMessages_start",
                        ),
                      yield E(t),
                      s === 0 &&
                        o(
                          "WAWebWamOfflineResumeReporter",
                        ).OfflineResumeReporter.qpl.addPoint(
                          "RCMRestoreMessages_end",
                        ));
                    var n = [];
                    (t.forEach(function (e) {
                      var t,
                        a = e.chat,
                        i =
                          o("WAWebNewsletterCommonGatingUtils")
                            .isNewsletterEnabled != null &&
                          o(
                            "WAWebNewsletterCommonGatingUtils",
                          ).isNewsletterEnabled()
                            ? (t = o("WAWebChatCollection").ChatCollection.get(
                                a.id,
                              )) != null
                              ? t
                              : r("WAWebNewsletterCollection") == null
                                ? void 0
                                : r("WAWebNewsletterCollection").get(a.id)
                            : o("WAWebChatCollection").ChatCollection.get(a.id);
                      i &&
                        (i.set({ pendingInitialLoading: !1 }),
                        o("WAWebChatGetters").getIsGroup(i) &&
                          n.push(String(a.id)));
                    }),
                      yield o(
                        "WAWebRestoreGroupParticipantsAction",
                      ).restoreGroupParticipantsForChats(n));
                  },
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
            s === 0
              ? (a = i.enqueue(function () {
                  return o("WAWebOrchestratorNonPersistedJob")
                    .createNonPersistedJob("initialChatLoad", u, {
                      priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP,
                    })
                    .waitUntilCompleted();
                }))
              : i.enqueue(
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    return (
                      yield o(
                        "WAWebEventsWaitForOfflineDeliveryEnd",
                      ).waitForOfflineDeliveryEnd(),
                      o("WAWebOrchestratorNonPersistedJob")
                        .createNonPersistedJob("initialChatLoad", u)
                        .waitUntilCompleted()
                    );
                  }),
                );
          },
          s = 0;
        s < e.length;
        s += t
      )
        l(s);
      return a;
    }
    function L(e) {
      return (g || (g = n("Promise"))).all(
        e.map(function (e) {
          var t = k(e);
          return o("WAWebDBMessageStoreUtils")
            .getKeyMsgsFromChatHistory(e, t)
            .then(function (n) {
              var r = n.anchor,
                o = n.lastReceivedKey,
                a = n.previewMsg,
                i = babelHelpers.extends({}, e, {
                  unreadMsgAnchorId: t ? r : void 0,
                });
              return { chat: i, previewMsg: a, lastReceivedKey: o };
            });
        }),
      );
    }
    function E(e) {
      var t = I(e),
        r = t.lastMessageKeys,
        a = t.missingAnchorCount,
        i = t.missingAnchorIds,
        l = t.tasks;
      return (
        l.push(M(r)),
        (g || (g = n("Promise"))).all(l).then(function () {
          a > 0 &&
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " unread anchor messages not in message collection => ",
                  "",
                ])),
              a,
              i,
            );
        })
      );
    }
    function k(e) {
      return (
        (e.t != null &&
          o("WATimeUtils").happenedWithin(
            o("WATimeUtils").castToUnixTime(e.t),
            o("WATimeUtils").DAY_SECONDS,
          )) ||
        (e.pin != null && e.pin > 0)
      );
    }
    function I(e) {
      var t = [],
        n = [],
        a = [],
        i = 0;
      return (
        e.forEach(function (e) {
          var l = e.chat,
            s = e.lastReceivedKey,
            u = e.previewMsg;
          if (k(l) || (u && u.id !== s)) {
            var c = self.performance.now();
            t.push(
              T(l, u).then(function () {
                var e = l.unreadMsgAnchorId;
                if (!r("isStringNullOrEmpty")(e)) {
                  var t = r("WAWebMsgKey").fromString(e),
                    n = o("WAWebMsgCollection").MsgCollection.get(t);
                  if (!n) {
                    (i++, a.length < 3 && a.push(e));
                    return;
                  }
                  var s = o("WAWebChatCollection").ChatCollection.get(
                    o("WAWebWidFactory").createWidFromWidLike(l.id),
                  );
                  s && (s.unreadMsgAnchor = n);
                }
              }),
            );
          } else n.push(String(s));
        }),
        {
          tasks: t,
          lastMessageKeys: n,
          missingAnchorIds: a,
          missingAnchorCount: i,
        }
      );
    }
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!k(e) || e.unreadCount === 0) return x(e, t);
          if (e.unreadCount >= h) return (yield x(e, t), P(e));
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "restoreMessagesForChat: restoring last ",
                " messages.",
              ])),
            e.unreadCount + y,
          );
          var n = [];
          if (t) {
            var r = o("WAWebDBMessageSerialization").messageFromDbRow(t),
              a = o("WAWebDBAddOnProviders").getAddOnProviderForFutureproofMsg(
                r,
              );
            a != null && a.canRenderInUi(r) && n.push(t.id.toString());
          }
          var i = yield o(
            "WAWebDBMessageStoreUtils",
          ).queryChatVisibleMessageHelper({
            lowerBound: e.id + "_/",
            upperBound: e.id + "_g",
            options: { reverse: !0 },
            count: e.unreadCount + y,
            addOnReparseExclusionList: n,
          });
          yield o("WAWebMsgCollection").MsgCollection.processMultipleMessages(
            o("WAWebWidFactory").createWidFromWidLike(e.id),
            i
              .map(function (e) {
                return o("WAWebDBMessageSerialization").messageFromDbRow(e);
              })
              .reverse(),
            { pendingMsgsDone: !0, resume: !1, add: "last", isHistory: !0 },
            "restoreMessagesForChat",
          );
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = [];
          if (t != null && t.internalId != null) {
            var a = t.internalId,
              i = o("WAWebDBMessageSerialization").messageFromDbRow(t),
              l = o("WAWebDBAddOnProviders").getAddOnProviderForFutureproofMsg(
                i,
              );
            (t && l != null && l.canRenderInUi(i) && r.push(t.id.toString()),
              (n = yield o(
                "WAWebDBMessageStoreUtils",
              ).queryChatVisibleMessageHelper({
                lowerBound: a,
                upperBound: e.id + "_g",
                options: { lowerInclusive: !0 },
                addOnReparseExclusionList: r,
              })));
          } else {
            var s = 1;
            n = yield o(
              "WAWebDBMessageStoreUtils",
            ).queryChatVisibleMessageHelper({
              lowerBound: e.id + "_/",
              upperBound: e.id + "_g",
              options: { reverse: !0 },
              count: s,
            });
          }
          (o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "processPreviewMessageInChat: restoring ",
                " message.",
              ])),
            n.length,
          ),
            o("WAWebMsgCollection").MsgCollection.processMultipleMessages(
              o("WAWebWidFactory").createWidFromWidLike(e.id),
              n.map(function (e) {
                return o("WAWebDBMessageSerialization").messageFromDbRow(
                  e,
                  function (e) {
                    e.invis = !0;
                  },
                );
              }),
              { pendingMsgsDone: !1, resume: !1, add: "last", isHistory: !0 },
              "processPreviewMessageInChat",
            ));
        })),
        $.apply(this, arguments)
      );
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.unreadMsgAnchorId;
          if (r("isStringNullOrEmpty")(t))
            return (
              o("WALogger").WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "unreadMsgAnchorId is not defined",
                  ])),
              ),
              (g || (g = n("Promise"))).resolve()
            );
          yield o("WAWebSchemaMessage")
            .getMessageTable()
            .equals(["id"], t)
            .then(function (t) {
              if (t.length === 0) {
                o("WALogger").WARN(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "Unread anchor message does not exist in message table",
                    ])),
                );
                return;
              }
              var a = o("WAWebDBMessageUtils").getInChatMsgId(
                  t[0].internalId || "",
                ),
                i = w(e, a, y),
                l = A(e, a, y),
                s = (g || (g = n("Promise"))).all([i, l]).then(function (e) {
                  var t = e[0],
                    n = e[1];
                  return [].concat(t, n);
                });
              return s.then(function (t) {
                var n = t.length - y;
                if (!(n < 0)) {
                  var a = t[t.length - y].id,
                    i = t.map(function (e) {
                      return o("WAWebDBMessageSerialization").messageFromDbRow(
                        e,
                        function (e) {
                          e.invis = !0;
                        },
                      );
                    });
                  return o(
                    "WAWebMsgCollection",
                  ).MsgCollection.processMultipleMessages(
                    o("WAWebWidFactory").createWidFromWidLike(e.id),
                    i,
                    {
                      pendingMsgsDone: !0,
                      resume: !1,
                      add: "unread",
                      isHistory: !0,
                      firstUnreadKey: r("WAWebMsgKey").fromString(a),
                    },
                    "processUnreadMessage",
                    new (o("WAWebChatMsgsCollection").ChatMsgsCollection)(),
                  );
                }
              });
            });
        })),
        N.apply(this, arguments)
      );
    }
    function M(e) {
      var t = self.performance.now();
      return o("WAWebSchemaMessage")
        .getMessageTable()
        .bulkGet(e)
        .then(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                yield (g || (g = n("Promise"))).all(
                  e.map(function (e) {
                    if (!e) return (g || (g = n("Promise"))).resolve();
                    var t = o("WAWebDBMessageSerialization").messageFromDbRow(
                      e,
                      function (e) {
                        e.invis = !0;
                      },
                    );
                    return o(
                      "WAWebMsgCollection",
                    ).MsgCollection.processMultipleMessages(
                      t.id.remote,
                      [t],
                      {
                        pendingMsgsDone: !1,
                        resume: !1,
                        add: "last",
                        isHistory: !0,
                      },
                      "loadLastMessagesFromDb",
                    );
                  }),
                );
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        )
        .catch(function (e) {
          throw (
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "loadLastMessagesFromDB: failed with error",
                  ])),
              )
              .catching(r("getErrorSafe")(e)),
            e
          );
        });
    }
    function w(e, t, n) {
      var r = { lowerInclusive: !0, upperInclusive: !1 },
        a = o("WAWebDBMessageUtils").beginningOfChat(
          o("WAWebWidFactory").createWid(e.id),
        ),
        i = o("WAWebDBMessageUtils").craftInternalId(e.id, t);
      return o("WAWebDBMessageStoreUtils")
        .queryChatVisibleMessageHelper({
          lowerBound: a,
          upperBound: i,
          options: babelHelpers.extends({}, r, { reverse: !0 }),
          count: y,
        })
        .then(function (e) {
          return e.reverse();
        });
    }
    function A(e, t, n) {
      var r = { lowerInclusive: !0, upperInclusive: !1 };
      return o("WAWebDBMessageStoreUtils").queryChatVisibleMessageHelper({
        lowerBound: o("WAWebDBMessageUtils").craftInternalId(e.id, t),
        upperBound: o("WAWebDBMessageUtils").endOfChat(
          o("WAWebWidFactory").createWid(e.id),
        ),
        options: r,
        count: y,
      });
    }
    function F(t) {
      return t.map(function (t) {
        var n = t.id,
          r = babelHelpers.objectWithoutPropertiesLoose(t, e);
        return babelHelpers.extends({}, r, { id: n.toString() });
      });
    }
    l.restoreChatsAndMessages = v;
  },
  98,
);
