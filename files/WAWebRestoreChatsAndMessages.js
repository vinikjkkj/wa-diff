__d(
  "WAWebRestoreChatsAndMessages",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebApiChat",
    "WAWebApiHydrateWidsUtil",
    "WAWebAppTracker",
    "WAWebBoolFunc",
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
      R = 25,
      L = 1e3;
    function E(e, t) {
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
    async function k() {
      return o("WAWebApiChat").getAllChatsDeserialized();
    }
    function I(e, t) {
      var n = E(e, t),
        a = n.chats,
        i = n.newsletters;
      return (
        a.sort(r("WAWebChatComparator")),
        o("WAWebChatCollection").ChatCollection.add(a, { merge: !0 }),
        { chats: a, newsletters: i }
      );
    }
    async function T() {
      var e = o("WAWebChatCollection").ChatCollection.filter(
          o("WAWebFrontendChatGetters").getShouldAppearInList,
        ).length,
        t = e > 0,
        r = t && (n("cr:11133") == null ? void 0 : n("cr:11133")()) === !0;
      (r && (await D()),
        o("WAWebRegionReadinessSignals").markChatlistRowsReady(t),
        await o("WAWebRegionReadinessSignals").waitForChatlistRowsPaint(r));
    }
    async function D() {
      var e = await o("WAPromiseDelays").withTimeout(
        o("WAWebRestoreGroupsAndContacts")
          .waitForRestoredContacts()
          .then(o("WAWebBoolFunc").returnTrue),
        L,
        o("WAWebBoolFunc").returnFalse,
      );
      e ||
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[init-from-storage] revealing chat rows before contacts restored",
            ])),
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
        ? Promise.resolve()
        : ((P = e),
          x != null ||
            (x = (async function () {
              if (
                (await o(
                  "WAWebDbEncryptionKey",
                ).DbEncKeyStore.waitForFinalDbMsgEncKey(),
                await o("WAWebModelStorageInitialize").initializeWithoutGKs(),
                !(N || $ || o("WAWebCmd").Cmd.isMainStreamReadyMd))
              ) {
                o(
                  "WAWebRestoreGroupsAndContacts",
                ).startRestoreGroupsAndContactsEarly();
                var e = await k();
                (I(e, P), ($ = !0), await T());
              }
            })()
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
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
    async function w() {
      N = !0;
      var e = !1;
      try {
        return (
          x != null && (await x),
          o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint(
            "RestoreChatsAndMessages_start",
          ),
          await o(
            "WAWebDbEncryptionKey",
          ).DbEncKeyStore.waitForFinalDbMsgEncKey(),
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[init-from-storage] load DbEncKeyStore key",
              ])),
          ),
          o("WAWebAppTracker").AppTracker.start(
            o("WAWebAppTracker").AppTrackerType.InitialChatLoad,
          ),
          (e = !0),
          await o("WAWebModelStorageInitialize")
            .initializeWithoutGKs()
            .then(async function () {
              var e;
              ((e = o(
                "WAWebWamOfflineResumeReporter",
              )).OfflineResumeReporter.qpl.addPoint("RestoreChats_start"),
                e.OfflineResumeReporter.qpl.addPoint("RCMGetChats_start"));
              var t = await k();
              (e.OfflineResumeReporter.qpl.addPoint("RCMGetChats_end"),
                e.OfflineResumeReporter.qpl.addPoint(
                  "RCMPopulateMatCache_start",
                ),
                e.OfflineResumeReporter.qpl.addPoint("RCMPopulateMatCache_end"),
                e.OfflineResumeReporter.qpl.addPoint("RCMFilterChats_start"));
              var n = o("WAWebThreadMetadata").getOfflineThreadMetaPreview(),
                a = I(t, n == null ? void 0 : n.chatTimestamp),
                i = a.chats,
                l = a.newsletters;
              (o(
                "WAWebWamOfflineResumeReporter",
              ).OfflineResumeReporter.logOfflineChatThreadCount(t.length),
                await T(),
                o(
                  "WAWebWamOfflineResumeReporter",
                ).OfflineResumeReporter.qpl.addPoint("RCMFilterChats_end"),
                o(
                  "WAWebWamOfflineResumeReporter",
                ).OfflineResumeReporter.qpl.addPoint("RestoreChats_end"),
                o(
                  "WAWebWamOfflineResumeReporter",
                ).OfflineResumeReporter.qpl.addPoint(
                  "RestoreChatsAndMessagesFirstChunk_start",
                ),
                o(
                  "WAWebWamOfflineResumeReporter",
                ).OfflineResumeReporter.qpl.addAnnotations({
                  int: { web_init_chat_batch_size: R },
                }),
                o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
                  (l.sort(r("WAWebChatComparator")),
                  r("WAWebNewsletterCollection") == null ||
                    r("WAWebNewsletterCollection").add(l, { merge: !0 }),
                  A(K(l), R).catch(function (e) {
                    o("WALogger")
                      .ERROR(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[init-from-storage] newsletter chunked restore failed",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e))
                      .sendLogs("newsletter-chunked-restore-failed");
                  })));
              var s = await A(K(i), R);
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
                s
              );
            })
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
        ((N = !1),
          e &&
            o("WAWebAppTracker").AppTracker.stop(
              o("WAWebAppTracker").AppTrackerType.InitialChatLoad,
            ));
      }
    }
    function A(e, t) {
      for (
        var n = Promise.resolve(),
          r = new (o("WAWebPromiseQueue").PromiseQueue)(),
          a = function (i) {
            var a = e.slice(i, i + t),
              l = async function () {
                var e = self.performance.now();
                i === 0 &&
                  o(
                    "WAWebWamOfflineResumeReporter",
                  ).OfflineResumeReporter.qpl.addPoint("RCMChatMetadata_start");
                var t = await O(a);
                (i === 0 &&
                  o(
                    "WAWebWamOfflineResumeReporter",
                  ).OfflineResumeReporter.qpl.addPoint("RCMChatMetadata_end"),
                  i === 0 &&
                    o(
                      "WAWebWamOfflineResumeReporter",
                    ).OfflineResumeReporter.qpl.addPoint(
                      "RCMRestoreMessages_start",
                    ),
                  await B(t),
                  i === 0 &&
                    o(
                      "WAWebWamOfflineResumeReporter",
                    ).OfflineResumeReporter.qpl.addPoint(
                      "RCMRestoreMessages_end",
                    ),
                  await F(
                    t.map(function (e) {
                      var t = e.chat;
                      return t;
                    }),
                  ));
              };
            i === 0
              ? (n = r.enqueue(function () {
                  return o("WAWebOrchestratorNonPersistedJob")
                    .createNonPersistedJob("initialChatLoad", l, {
                      priority: o("WAJobOrchestratorTypes").JobPriority.SKIP,
                    })
                    .waitUntilCompleted();
                }))
              : r.enqueue(async function () {
                  return (
                    await o(
                      "WAWebEventsWaitForOfflineDeliveryEnd",
                    ).waitForOfflineDeliveryEnd(),
                    o("WAWebOrchestratorNonPersistedJob")
                      .createNonPersistedJob("initialChatLoad", l)
                      .waitUntilCompleted()
                  );
                });
          },
          i = 0;
        i < e.length;
        i += t
      )
        a(i);
      return n;
    }
    async function F(e) {
      var t = e
          .map(function (e) {
            var t;
            return o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()
              ? (t = o("WAWebChatCollection").ChatCollection.get(e.id)) != null
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
          await o(
            "WAWebRestoreGroupsAndContacts",
          ).waitForGroupMetadataRestore();
        } catch (e) {
          (o("WALogger")
            .ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[init-from-storage] parent participant restore falling back after metadata failure",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("restore-cag-parent-metadata-failed"),
            await o(
              "WAWebRestoreGroupParticipantsAction",
            ).restoreGroupParticipantsForChats(n));
          return;
        }
        await o(
          "WAWebRestoreGroupParticipantsAction",
        ).restoreGroupParticipantsForChatsWithParents(n);
      } else
        await o(
          "WAWebRestoreGroupParticipantsAction",
        ).restoreGroupParticipantsForChats(n);
    }
    function O(e) {
      return Promise.all(
        e.map(function (e) {
          var t = W(e);
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
    function B(e) {
      var t = q(e),
        n = t.lastMessageKeys,
        r = t.missingAnchorCount,
        a = t.missingAnchorIds,
        i = t.tasks;
      return (
        i.push(G(n)),
        Promise.all(i).then(function () {
          r > 0 &&
            o("WALogger").WARN(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " unread anchor messages not in message collection => ",
                  "",
                ])),
              r,
              a,
            );
        })
      );
    }
    function W(e) {
      return (
        (e.t != null &&
          o("WATimeUtils").happenedWithin(
            o("WATimeUtils").castToUnixTime(e.t),
            o("WATimeUtils").DAY_SECONDS,
          )) ||
        (e.pin != null && e.pin > 0)
      );
    }
    function q(e) {
      var t = [],
        n = [],
        a = [],
        i = 0;
      return (
        e.forEach(function (e) {
          var l = e.chat,
            s = e.lastReceivedKey,
            u = e.previewMsg;
          if (W(l) || (u && u.id !== s)) {
            var c = self.performance.now();
            t.push(
              U(l, u).then(function () {
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
    async function U(e, t) {
      if (!W(e) || e.unreadCount === 0) return V(e, t);
      if (e.unreadCount >= v) return (await V(e, t), H(e));
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
          a = o("WAWebDBAddOnProviders").getAddOnProviderForFutureproofMsg(r);
        a != null && a.canRenderInUi(r) && n.push(t.id.toString());
      }
      var i = await o(
        "WAWebDBQueryChatVisibleMessageHelper",
      ).queryChatVisibleMessageHelper({
        lowerBound: e.id + "_/",
        upperBound: e.id + "_g",
        options: { reverse: !0 },
        count: e.unreadCount + S,
        addOnReparseExclusionList: n,
      });
      await o("WAWebMsgCollection").MsgCollection.processMultipleMessages(
        o("WAWebWidFactory").createWidFromWidLike(e.id),
        i
          .map(function (e) {
            return o("WAWebDBMessageSerialization").messageFromDbRow(e);
          })
          .reverse(),
        { pendingMsgsDone: !0, resume: !1, add: "last", isHistory: !0 },
        "restoreMessagesForChat",
      );
    }
    async function V(e, t) {
      var n,
        a = [];
      if (t != null && t.internalId != null) {
        var i = t.internalId,
          l = o("WAWebDBMessageSerialization").messageFromDbRow(t),
          s = o("WAWebDBAddOnProviders").getAddOnProviderForFutureproofMsg(l);
        (t && s != null && s.canRenderInUi(l) && a.push(t.id.toString()),
          (n = await o(
            "WAWebDBQueryChatVisibleMessageHelper",
          ).queryChatVisibleMessageHelper({
            lowerBound: i,
            upperBound: e.id + "_g",
            options: { lowerInclusive: !0 },
            addOnReparseExclusionList: a,
          })));
      } else {
        var u = 1;
        n = await o(
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
    }
    async function H(e) {
      var t = e.unreadMsgAnchorId;
      if (r("isStringNullOrEmpty")(t))
        return (
          o("WALogger").WARN(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "unreadMsgAnchorId is not defined",
              ])),
          ),
          Promise.resolve()
        );
      await o("WAWebSchemaMessage")
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
          var n = o("WAWebDBMessageUtils").getInChatMsgId(
              t[0].internalId || "",
            ),
            a = z(e, n, S),
            i = j(e, n, S),
            l = Promise.all([a, i]).then(function (e) {
              var t = e[0],
                n = e[1];
              return [].concat(t, n);
            });
          return l.then(function (t) {
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
    }
    function G(e) {
      var t = self.performance.now();
      return o("WAWebSchemaMessage")
        .getMessageTable()
        .bulkGet(e)
        .then(async function (e) {
          await Promise.all(
            e.map(function (e) {
              if (!e) return Promise.resolve();
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
                { pendingMsgsDone: !1, resume: !1, add: "last", isHistory: !0 },
                "loadLastMessagesFromDb",
              );
            }),
          );
        })
        .catch(function (e) {
          throw (
            o("WALogger")
              .ERROR(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
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
          count: S,
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
        count: S,
      });
    }
    function K(t) {
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
