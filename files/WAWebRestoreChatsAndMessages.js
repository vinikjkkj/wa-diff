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
    "WAWebAppTracker",
    "WAWebChatCollection",
    "WAWebChatComparator",
    "WAWebChatGetters",
    "WAWebChatMsgsCollection",
    "WAWebCmd",
    "WAWebDBAddOnProviders",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageStoreUtils",
    "WAWebDBMessageUtils",
    "WAWebDBQueryChatVisibleMessageHelper",
    "WAWebDbEncryptionKey",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebFrontendChatGetters",
    "WAWebModelStorageInitialize",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebNewsletterCollection",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebPromiseQueue",
    "WAWebRegionReadinessSignals",
    "WAWebRestoreBusinessInfo",
    "WAWebRestoreGroupParticipantsAction",
    "WAWebSchemaMessage",
    "WAWebThreadMetadata",
    "WAWebThreadMetadataUtil",
    "WAWebWamOfflineResumeReporter",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "cr:11133",
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
      h,
      y = 20,
      C = 5,
      b = 100;
    function v(e, t) {
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
              chatTimestamp: t,
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
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebApiChat").getAllChatsDeserialized();
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      var n = v(e, t),
        a = n.chats,
        i = n.newsletters;
      return (
        a.sort(r("WAWebChatComparator")),
        o("WAWebChatCollection").ChatCollection.add(a, { merge: !0 }),
        { chats: a, newsletters: i }
      );
    }
    function E() {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebChatCollection").ChatCollection.filter(
              o("WAWebFrontendChatGetters").getShouldAppearInList,
            ).length,
            t = e > 0;
          (o("WAWebRegionReadinessSignals").markChatlistRowsReady(t),
            yield o("WAWebRegionReadinessSignals").waitForChatlistRowsPaint(
              t && (n("cr:11133") == null ? void 0 : n("cr:11133")()) === !0,
            ));
        })),
        k.apply(this, arguments)
      );
    }
    var I = null,
      T = !1,
      D = null,
      x = !1;
    function $(e) {
      return (n("cr:11133") == null ? void 0 : n("cr:11133")()) !== !0 ||
        x ||
        T ||
        o("WAWebCmd").Cmd.isMainStreamReadyMd
        ? (h || (h = n("Promise"))).resolve()
        : ((D = e),
          I != null ||
            (I = n("asyncToGeneratorRuntime")
              .asyncToGenerator(function* () {
                if (
                  (yield o(
                    "WAWebDbEncryptionKey",
                  ).DbEncKeyStore.waitForFinalDbMsgEncKey(),
                  yield o("WAWebModelStorageInitialize").initializeWithoutGKs(),
                  !(x || T || o("WAWebCmd").Cmd.isMainStreamReadyMd))
                ) {
                  var e = yield S();
                  (L(e, D), (T = !0), yield E());
                }
              })()
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[offline-resume] provisional chat row restore failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("provisional-chat-row-restore-failed");
              })
              .finally(function () {
                I = null;
              })),
          I);
    }
    function P() {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          x = !0;
          var e = !1;
          try {
            return (
              I != null && (yield I),
              o(
                "WAWebWamOfflineResumeReporter",
              ).OfflineResumeReporter.qpl.addPoint(
                "RestoreChatsAndMessages_start",
              ),
              yield o(
                "WAWebDbEncryptionKey",
              ).DbEncKeyStore.waitForFinalDbMsgEncKey(),
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[init-from-storage] load DbEncKeyStore key",
                  ])),
              ),
              o("WAWebAppTracker").AppTracker.start(
                o("WAWebAppTracker").AppTrackerType.InitialChatLoad,
              ),
              (e = !0),
              yield o("WAWebModelStorageInitialize")
                .initializeWithoutGKs()
                .then(
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    var e;
                    ((e = o(
                      "WAWebWamOfflineResumeReporter",
                    )).OfflineResumeReporter.qpl.addPoint("RestoreChats_start"),
                      e.OfflineResumeReporter.qpl.addPoint(
                        "RCMGetChats_start",
                      ));
                    var t = yield S();
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
                      a = L(t, n == null ? void 0 : n.chatTimestamp),
                      i = a.chats,
                      l = a.newsletters;
                    (o(
                      "WAWebWamOfflineResumeReporter",
                    ).OfflineResumeReporter.logOfflineChatThreadCount(t.length),
                      yield E(),
                      o(
                        "WAWebWamOfflineResumeReporter",
                      ).OfflineResumeReporter.qpl.addPoint(
                        "RCMFilterChats_end",
                      ),
                      o(
                        "WAWebWamOfflineResumeReporter",
                      ).OfflineResumeReporter.qpl.addPoint("RestoreChats_end"),
                      o(
                        "WAWebWamOfflineResumeReporter",
                      ).OfflineResumeReporter.qpl.addPoint(
                        "RestoreChatsAndMessagesFirstChunk_start",
                      ));
                    var s =
                      o("WAWebABProps").getABPropConfigValue(
                        "web_init_chat_batch_size",
                      ) || b;
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
                        M(K(l), s)));
                    var u = yield M(K(i), s);
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
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "restoreChatsAndMessages: failed with error",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e)),
                    e
                  );
                })
            );
          } finally {
            ((x = !1),
              e &&
                o("WAWebAppTracker").AppTracker.stop(
                  o("WAWebAppTracker").AppTrackerType.InitialChatLoad,
                ));
          }
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t) {
      for (
        var a = (h || (h = n("Promise"))).resolve(),
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
                    var t = yield w(l);
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
                      yield A(t),
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
    function w(e) {
      return (h || (h = n("Promise"))).all(
        e.map(function (e) {
          var t = F(e);
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
    function A(e) {
      var t = O(e),
        r = t.lastMessageKeys,
        a = t.missingAnchorCount,
        i = t.missingAnchorIds,
        l = t.tasks;
      return (
        l.push(G(r)),
        (h || (h = n("Promise"))).all(l).then(function () {
          a > 0 &&
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
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
    function F(e) {
      return (
        (e.t != null &&
          o("WATimeUtils").happenedWithin(
            o("WATimeUtils").castToUnixTime(e.t),
            o("WATimeUtils").DAY_SECONDS,
          )) ||
        (e.pin != null && e.pin > 0)
      );
    }
    function O(e) {
      var t = [],
        n = [],
        a = [],
        i = 0;
      return (
        e.forEach(function (e) {
          var l = e.chat,
            s = e.lastReceivedKey,
            u = e.previewMsg;
          if (F(l) || (u && u.id !== s)) {
            var c = self.performance.now();
            t.push(
              B(l, u).then(function () {
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
    function B(e, t) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!F(e) || e.unreadCount === 0) return q(e, t);
          if (e.unreadCount >= y) return (yield q(e, t), V(e));
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "restoreMessagesForChat: restoring last ",
                " messages.",
              ])),
            e.unreadCount + C,
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
            "WAWebDBQueryChatVisibleMessageHelper",
          ).queryChatVisibleMessageHelper({
            lowerBound: e.id + "_/",
            upperBound: e.id + "_g",
            options: { reverse: !0 },
            count: e.unreadCount + C,
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
        W.apply(this, arguments)
      );
    }
    function q(e, t) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
                "WAWebDBQueryChatVisibleMessageHelper",
              ).queryChatVisibleMessageHelper({
                lowerBound: a,
                upperBound: e.id + "_g",
                options: { lowerInclusive: !0 },
                addOnReparseExclusionList: r,
              })));
          } else {
            var s = 1;
            n = yield o(
              "WAWebDBQueryChatVisibleMessageHelper",
            ).queryChatVisibleMessageHelper({
              lowerBound: e.id + "_/",
              upperBound: e.id + "_g",
              options: { reverse: !0 },
              count: s,
            });
          }
          (o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
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
        U.apply(this, arguments)
      );
    }
    function V(e) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.unreadMsgAnchorId;
          if (r("isStringNullOrEmpty")(t))
            return (
              o("WALogger").WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "unreadMsgAnchorId is not defined",
                  ])),
              ),
              (h || (h = n("Promise"))).resolve()
            );
          yield o("WAWebSchemaMessage")
            .getMessageTable()
            .equals(["id"], t)
            .then(function (t) {
              if (t.length === 0) {
                o("WALogger").WARN(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "Unread anchor message does not exist in message table",
                    ])),
                );
                return;
              }
              var a = o("WAWebDBMessageUtils").getInChatMsgId(
                  t[0].internalId || "",
                ),
                i = z(e, a, C),
                l = j(e, a, C),
                s = (h || (h = n("Promise"))).all([i, l]).then(function (e) {
                  var t = e[0],
                    n = e[1];
                  return [].concat(t, n);
                });
              return s.then(function (t) {
                var n = t.length - C;
                if (!(n < 0)) {
                  var a = t[t.length - C].id,
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
        H.apply(this, arguments)
      );
    }
    function G(e) {
      var t = self.performance.now();
      return o("WAWebSchemaMessage")
        .getMessageTable()
        .bulkGet(e)
        .then(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                yield (h || (h = n("Promise"))).all(
                  e.map(function (e) {
                    if (!e) return (h || (h = n("Promise"))).resolve();
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
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "loadLastMessagesFromDB: failed with error",
                  ])),
              )
              .catching(r("getErrorSafe")(e)),
            e
          );
        });
    }
    function z(e, t, n) {
      var r = { lowerInclusive: !0, upperInclusive: !1 },
        a = o("WAWebDBMessageUtils").beginningOfChat(
          o("WAWebWidFactory").createWid(e.id),
        ),
        i = o("WAWebDBMessageUtils").craftInternalId({
          chatId: e.id,
          inChatMsgId: t,
        });
      return o("WAWebDBQueryChatVisibleMessageHelper")
        .queryChatVisibleMessageHelper({
          lowerBound: a,
          upperBound: i,
          options: babelHelpers.extends({}, r, { reverse: !0 }),
          count: C,
        })
        .then(function (e) {
          return e.reverse();
        });
    }
    function j(e, t, n) {
      var r = { lowerInclusive: !0, upperInclusive: !1 };
      return o(
        "WAWebDBQueryChatVisibleMessageHelper",
      ).queryChatVisibleMessageHelper({
        lowerBound: o("WAWebDBMessageUtils").craftInternalId({
          chatId: e.id,
          inChatMsgId: t,
        }),
        upperBound: o("WAWebDBMessageUtils").endOfChat(
          o("WAWebWidFactory").createWid(e.id),
        ),
        options: r,
        count: C,
      });
    }
    function K(t) {
      return t.map(function (t) {
        var n = t.id,
          r = babelHelpers.objectWithoutPropertiesLoose(t, e);
        return babelHelpers.extends({}, r, { id: n.toString() });
      });
    }
    ((l.restoreChatRowsForDisplay = $), (l.restoreChatsAndMessages = P));
  },
  98,
);
