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
    "WAWebChatViewMode.flow",
    "WAWebCmd",
    "WAWebCommunityGatingUtils",
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
    "WAWebRestoreGroupsAndContacts",
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
      y,
      C,
      b,
      v = 20,
      S = 5,
      R = 100;
    function L(e, t) {
      return e.reduce(
        function (e, n) {
          var r,
            a,
            i = o("WAWebApiHydrateWidsUtil").hydrateWids(
              babelHelpers.extends({}, n, {
                pendingInitialLoading: !0,
                isReadOnly: (r = n.isReadOnly) != null ? r : !1,
                chatViewMode:
                  (a = n.chatViewMode) != null
                    ? a
                    : o("WAWebChatViewMode.flow").ChatViewModeType.VISIBLE,
              }),
            ),
            l = o("WAWebThreadMetadataUtil").getOfflineMetaPreviewForChat({
              chatTimestamp: t,
              chatId: i.id,
              accountLid: i.accountLid,
            });
          return (
            l != null && (i.previewT = l),
            i.id.isNewsletter() ? e.newsletters.push(i) : e.chats.push(i),
            e
          );
        },
        { chats: [], newsletters: [] },
      );
    }
    function E() {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebApiChat").getAllChatsDeserialized();
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t) {
      var n = L(e, t),
        a = n.chats,
        i = n.newsletters;
      return (
        a.sort(r("WAWebChatComparator")),
        o("WAWebChatCollection").ChatCollection.add(a, { merge: !0 }),
        { chats: a, newsletters: i }
      );
    }
    function T() {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebChatCollection").ChatCollection.filter(
              o("WAWebFrontendChatGetters").getShouldAppearInList,
            ).length,
            t = e > 0;
          (o("WAWebRegionReadinessSignals").markChatlistRowsReady(t),
            yield o("WAWebRegionReadinessSignals").waitForChatlistRowsPaint(
              t && (n("cr:11133") == null ? void 0 : n("cr:11133")()) === !0,
            ));
        })),
        D.apply(this, arguments)
      );
    }
    var x = null,
      $ = !1,
      P = null,
      N = !1;
    function M(e) {
      return (n("cr:11133") == null ? void 0 : n("cr:11133")()) !== !0 ||
        N ||
        $ ||
        o("WAWebCmd").Cmd.isMainStreamReadyMd
        ? (b || (b = n("Promise"))).resolve()
        : ((P = e),
          x != null ||
            (x = n("asyncToGeneratorRuntime")
              .asyncToGenerator(function* () {
                if (
                  (yield o(
                    "WAWebDbEncryptionKey",
                  ).DbEncKeyStore.waitForFinalDbMsgEncKey(),
                  yield o("WAWebModelStorageInitialize").initializeWithoutGKs(),
                  !(N || $ || o("WAWebCmd").Cmd.isMainStreamReadyMd))
                ) {
                  var e = yield E();
                  (I(e, P), ($ = !0), yield T());
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
                x = null;
              })),
          x);
    }
    function w() {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          N = !0;
          var e = !1;
          try {
            return (
              x != null && (yield x),
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
                    var t = yield E();
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
                      a = I(t, n == null ? void 0 : n.chatTimestamp),
                      i = a.chats,
                      l = a.newsletters;
                    (o(
                      "WAWebWamOfflineResumeReporter",
                    ).OfflineResumeReporter.logOfflineChatThreadCount(t.length),
                      yield T(),
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
                      ) || R;
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
                        F(Z(l), s).catch(function (e) {
                          o("WALogger")
                            .ERROR(
                              m ||
                                (m = babelHelpers.taggedTemplateLiteralLoose([
                                  "[init-from-storage] newsletter chunked restore failed",
                                ])),
                            )
                            .catching(r("getErrorSafe")(e))
                            .sendLogs("newsletter-chunked-restore-failed");
                        })));
                    var u = yield F(Z(i), s);
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
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
                            "restoreChatsAndMessages: failed with error",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e)),
                    e
                  );
                })
            );
          } finally {
            ((N = !1),
              e &&
                o("WAWebAppTracker").AppTracker.stop(
                  o("WAWebAppTracker").AppTrackerType.InitialChatLoad,
                ));
          }
        })),
        A.apply(this, arguments)
      );
    }
    function F(e, t) {
      for (
        var r = (b || (b = n("Promise"))).resolve(),
          a = new (o("WAWebPromiseQueue").PromiseQueue)(),
          i = function (l) {
            var i = e.slice(l, l + t),
              s = (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    var e = self.performance.now();
                    l === 0 &&
                      o(
                        "WAWebWamOfflineResumeReporter",
                      ).OfflineResumeReporter.qpl.addPoint(
                        "RCMChatMetadata_start",
                      );
                    var t = yield W(i);
                    (l === 0 &&
                      o(
                        "WAWebWamOfflineResumeReporter",
                      ).OfflineResumeReporter.qpl.addPoint(
                        "RCMChatMetadata_end",
                      ),
                      l === 0 &&
                        o(
                          "WAWebWamOfflineResumeReporter",
                        ).OfflineResumeReporter.qpl.addPoint(
                          "RCMRestoreMessages_start",
                        ),
                      yield q(t),
                      l === 0 &&
                        o(
                          "WAWebWamOfflineResumeReporter",
                        ).OfflineResumeReporter.qpl.addPoint(
                          "RCMRestoreMessages_end",
                        ),
                      yield O(
                        t.map(function (e) {
                          var t = e.chat;
                          return t;
                        }),
                      ));
                  },
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
            l === 0
              ? (r = a.enqueue(function () {
                  return o("WAWebOrchestratorNonPersistedJob")
                    .createNonPersistedJob("initialChatLoad", s, {
                      priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP,
                    })
                    .waitUntilCompleted();
                }))
              : a.enqueue(
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    return (
                      yield o(
                        "WAWebEventsWaitForOfflineDeliveryEnd",
                      ).waitForOfflineDeliveryEnd(),
                      o("WAWebOrchestratorNonPersistedJob")
                        .createNonPersistedJob("initialChatLoad", s)
                        .waitUntilCompleted()
                    );
                  }),
                );
          },
          l = 0;
        l < e.length;
        l += t
      )
        i(l);
      return r;
    }
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e
              .map(function (e) {
                var t;
                return o(
                  "WAWebNewsletterCommonGatingUtils",
                ).isNewsletterEnabled()
                  ? (t = o("WAWebChatCollection").ChatCollection.get(e.id)) !=
                    null
                    ? t
                    : r("WAWebNewsletterCollection") == null
                      ? void 0
                      : r("WAWebNewsletterCollection").get(e.id)
                  : o("WAWebChatCollection").ChatCollection.get(e.id);
              })
              .filter(Boolean),
            n = t.filter(o("WAWebChatGetters").getIsGroup).map(function (e) {
              return e.id.toString();
            });
          if (
            (t.forEach(function (e) {
              return e.set({ pendingInitialLoading: !1 });
            }),
            o("WAWebCommunityGatingUtils").fetchMissingParentGroupsEnabled() &&
              n.length > 0)
          ) {
            try {
              yield o(
                "WAWebRestoreGroupsAndContacts",
              ).waitForGroupMetadataRestore();
            } catch (e) {
              (o("WALogger")
                .ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[init-from-storage] parent participant restore falling back after metadata failure",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("restore-cag-parent-metadata-failed"),
                yield o(
                  "WAWebRestoreGroupParticipantsAction",
                ).restoreGroupParticipantsForChats(n));
              return;
            }
            yield o(
              "WAWebRestoreGroupParticipantsAction",
            ).restoreGroupParticipantsForChatsWithParents(n);
          } else
            yield o(
              "WAWebRestoreGroupParticipantsAction",
            ).restoreGroupParticipantsForChats(n);
        })),
        B.apply(this, arguments)
      );
    }
    function W(e) {
      return (b || (b = n("Promise"))).all(
        e.map(function (e) {
          var t = U(e);
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
    function q(e) {
      var t = V(e),
        r = t.lastMessageKeys,
        a = t.missingAnchorCount,
        i = t.missingAnchorIds,
        l = t.tasks;
      return (
        l.push(X(r)),
        (b || (b = n("Promise"))).all(l).then(function () {
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
    function U(e) {
      return (
        (e.t != null &&
          o("WATimeUtils").happenedWithin(
            o("WATimeUtils").castToUnixTime(e.t),
            o("WATimeUtils").DAY_SECONDS,
          )) ||
        (e.pin != null && e.pin > 0)
      );
    }
    function V(e) {
      var t = [],
        n = [],
        a = [],
        i = 0;
      return (
        e.forEach(function (e) {
          var l = e.chat,
            s = e.lastReceivedKey,
            u = e.previewMsg;
          if (U(l) || (u && u.id !== s)) {
            var c = self.performance.now();
            t.push(
              H(l, u).then(function () {
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
    function H(e, t) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!U(e) || e.unreadCount === 0) return z(e, t);
          if (e.unreadCount >= v) return (yield z(e, t), K(e));
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "restoreMessagesForChat: restoring last ",
                " messages.",
              ])),
            e.unreadCount + S,
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
            count: e.unreadCount + S,
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
        G.apply(this, arguments)
      );
    }
    function z(e, t) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a = [];
          if (t != null && t.internalId != null) {
            var i = t.internalId,
              l = o("WAWebDBMessageSerialization").messageFromDbRow(t),
              s = o("WAWebDBAddOnProviders").getAddOnProviderForFutureproofMsg(
                l,
              );
            (t && s != null && s.canRenderInUi(l) && a.push(t.id.toString()),
              (n = yield o(
                "WAWebDBQueryChatVisibleMessageHelper",
              ).queryChatVisibleMessageHelper({
                lowerBound: i,
                upperBound: e.id + "_g",
                options: { lowerInclusive: !0 },
                addOnReparseExclusionList: a,
              })));
          } else {
            var u = 1;
            n = yield o(
              "WAWebDBQueryChatVisibleMessageHelper",
            ).queryChatVisibleMessageHelper({
              lowerBound: e.id + "_/",
              upperBound: e.id + "_g",
              options: { reverse: !0 },
              count: u,
            });
          }
          (o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "processPreviewMessageInChat: restoring ",
                " message.",
              ])),
            n.length,
          ),
            o("WAWebMsgCollection")
              .MsgCollection.processMultipleMessages(
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
              )
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "processPreviewMessageInChat: processMultipleMessages failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("restore-preview-msg-process-failed");
              }));
        })),
        j.apply(this, arguments)
      );
    }
    function K(e) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.unreadMsgAnchorId;
          if (r("isStringNullOrEmpty")(t))
            return (
              o("WALogger").WARN(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "unreadMsgAnchorId is not defined",
                  ])),
              ),
              (b || (b = n("Promise"))).resolve()
            );
          yield o("WAWebSchemaMessage")
            .getMessageTable()
            .equals(["id"], t)
            .then(function (t) {
              if (t.length === 0) {
                o("WALogger").WARN(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "Unread anchor message does not exist in message table",
                    ])),
                );
                return;
              }
              var a = o("WAWebDBMessageUtils").getInChatMsgId(
                  t[0].internalId || "",
                ),
                i = Y(e, a, S),
                l = J(e, a, S),
                s = (b || (b = n("Promise"))).all([i, l]).then(function (e) {
                  var t = e[0],
                    n = e[1];
                  return [].concat(t, n);
                });
              return s.then(function (t) {
                var n = t.length - S;
                if (!(n < 0)) {
                  var a = t[t.length - S].id,
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
        Q.apply(this, arguments)
      );
    }
    function X(e) {
      var t = self.performance.now();
      return o("WAWebSchemaMessage")
        .getMessageTable()
        .bulkGet(e)
        .then(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                yield (b || (b = n("Promise"))).all(
                  e.map(function (e) {
                    if (!e) return (b || (b = n("Promise"))).resolve();
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
    function Y(e, t, n) {
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
          count: S,
        })
        .then(function (e) {
          return e.reverse();
        });
    }
    function J(e, t, n) {
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
        count: S,
      });
    }
    function Z(t) {
      return t.map(function (t) {
        var n = t.id,
          r = babelHelpers.objectWithoutPropertiesLoose(t, e);
        return babelHelpers.extends({}, r, { id: n.toString() });
      });
    }
    ((l.restoreChatRowsForDisplay = M), (l.restoreChatsAndMessages = w));
  },
  98,
);
