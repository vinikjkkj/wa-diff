__d(
  "WAWebRestoreChatsAndMessages",
  [
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
      g = 20,
      h = 5,
      y = 100;
    function C(e, t) {
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
    async function b() {
      return (
        o("WAWebWamOfflineResumeReporter").OfflineResumeReporter.qpl.addPoint(
          "RestoreChatsAndMessages_start",
        ),
        await o("WAWebDbEncryptionKey").DbEncKeyStore.waitForFinalDbMsgEncKey(),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[init-from-storage] load DbEncKeyStore key",
            ])),
        ),
        o("WAWebModelStorageInitialize")
          .initializeWithoutGKs()
          .then(async function () {
            var e;
            ((e = o(
              "WAWebWamOfflineResumeReporter",
            )).OfflineResumeReporter.qpl.addPoint("RestoreChats_start"),
              e.OfflineResumeReporter.qpl.addPoint("RCMGetChats_start"));
            var t = await o("WAWebApiChat").getAllChatsDeserialized();
            (e.OfflineResumeReporter.qpl.addPoint("RCMGetChats_end"),
              e.OfflineResumeReporter.qpl.addPoint("RCMPopulateMatCache_start"),
              e.OfflineResumeReporter.qpl.addPoint("RCMPopulateMatCache_end"),
              e.OfflineResumeReporter.qpl.addPoint("RCMFilterChats_start"));
            var n = o("WAWebThreadMetadata").getOfflineThreadMetaPreview(),
              a = C(t, n),
              i = a.chats,
              l = a.newsletters;
            (e.OfflineResumeReporter.logOfflineChatThreadCount(t.length),
              i.sort(r("WAWebChatComparator")),
              o("WAWebChatCollection").ChatCollection.add(i, { merge: !0 }),
              e.OfflineResumeReporter.qpl.addPoint("RCMFilterChats_end"),
              e.OfflineResumeReporter.qpl.addPoint("RestoreChats_end"),
              e.OfflineResumeReporter.qpl.addPoint(
                "RestoreChatsAndMessagesFirstChunk_start",
              ));
            var s =
              o("WAWebABProps").getABPropConfigValue(
                "web_init_chat_batch_size",
              ) || y;
            (o(
              "WAWebWamOfflineResumeReporter",
            ).OfflineResumeReporter.qpl.addAnnotations({
              int: { web_init_chat_batch_size: s },
            }),
              o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
                (l.sort(r("WAWebChatComparator")),
                r("WAWebNewsletterCollection") == null ||
                  r("WAWebNewsletterCollection").add(l, { merge: !0 }),
                v(P(l), s)));
            var u = await v(P(i), s);
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
          })
          .then(o("WAWebRestoreBusinessInfo").restoreBusinessInfo)
          .then(function () {
            o(
              "WAWebWamOfflineResumeReporter",
            ).OfflineResumeReporter.qpl.addPoint("RestoreChatsAndMessages_end");
          })
          .catch(function (e) {
            throw (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "restoreChatsAndMessages: failed with error",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              e
            );
          })
      );
    }
    function v(e, t) {
      for (
        var n = Promise.resolve(),
          a = new (o("WAWebPromiseQueue").PromiseQueue)(),
          i = function (l) {
            var i = e.slice(l, l + t),
              s = async function () {
                var e = self.performance.now();
                l === 0 &&
                  o(
                    "WAWebWamOfflineResumeReporter",
                  ).OfflineResumeReporter.qpl.addPoint("RCMChatMetadata_start");
                var t = await S(i);
                (l === 0 &&
                  o(
                    "WAWebWamOfflineResumeReporter",
                  ).OfflineResumeReporter.qpl.addPoint("RCMChatMetadata_end"),
                  l === 0 &&
                    o(
                      "WAWebWamOfflineResumeReporter",
                    ).OfflineResumeReporter.qpl.addPoint(
                      "RCMRestoreMessages_start",
                    ),
                  await R(t),
                  l === 0 &&
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
                  await o(
                    "WAWebRestoreGroupParticipantsAction",
                  ).restoreGroupParticipantsForChats(n));
              };
            l === 0
              ? (n = a.enqueue(function () {
                  return o("WAWebOrchestratorNonPersistedJob")
                    .createNonPersistedJob("initialChatLoad", s, {
                      priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.SKIP,
                    })
                    .waitUntilCompleted();
                }))
              : a.enqueue(async function () {
                  return (
                    await o(
                      "WAWebEventsWaitForOfflineDeliveryEnd",
                    ).waitForOfflineDeliveryEnd(),
                    o("WAWebOrchestratorNonPersistedJob")
                      .createNonPersistedJob("initialChatLoad", s)
                      .waitUntilCompleted()
                  );
                });
          },
          l = 0;
        l < e.length;
        l += t
      )
        i(l);
      return n;
    }
    function S(e) {
      return Promise.all(
        e.map(function (e) {
          var t = L(e);
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
    function R(e) {
      var t = E(e),
        n = t.lastMessageKeys,
        r = t.missingAnchorCount,
        a = t.missingAnchorIds,
        i = t.tasks;
      return (
        i.push(D(n)),
        Promise.all(i).then(function () {
          r > 0 &&
            o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
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
    function L(e) {
      return (
        (e.t != null &&
          o("WATimeUtils").happenedWithin(
            o("WATimeUtils").castToUnixTime(e.t),
            o("WATimeUtils").DAY_SECONDS,
          )) ||
        (e.pin != null && e.pin > 0)
      );
    }
    function E(e) {
      var t = [],
        n = [],
        a = [],
        i = 0;
      return (
        e.forEach(function (e) {
          var l = e.chat,
            s = e.lastReceivedKey,
            u = e.previewMsg;
          if (L(l) || (u && u.id !== s)) {
            var c = self.performance.now();
            t.push(
              k(l, u).then(function () {
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
    async function k(e, t) {
      if (!L(e) || e.unreadCount === 0) return I(e, t);
      if (e.unreadCount >= g) return (await I(e, t), T(e));
      o("WALogger").LOG(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose([
            "restoreMessagesForChat: restoring last ",
            " messages.",
          ])),
        e.unreadCount + h,
      );
      var n = [];
      if (t) {
        var r = o("WAWebDBMessageSerialization").messageFromDbRow(t),
          a = o("WAWebDBAddOnProviders").getAddOnProviderForFutureproofMsg(r);
        a != null && a.canRenderInUi(r) && n.push(t.id.toString());
      }
      var i = await o("WAWebDBMessageStoreUtils").queryChatVisibleMessageHelper(
        {
          lowerBound: e.id + "_/",
          upperBound: e.id + "_g",
          options: { reverse: !0 },
          count: e.unreadCount + h,
          addOnReparseExclusionList: n,
        },
      );
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
    async function I(e, t) {
      var n,
        r = [];
      if (t != null && t.internalId != null) {
        var a = t.internalId,
          i = o("WAWebDBMessageSerialization").messageFromDbRow(t),
          l = o("WAWebDBAddOnProviders").getAddOnProviderForFutureproofMsg(i);
        (t && l != null && l.canRenderInUi(i) && r.push(t.id.toString()),
          (n = await o(
            "WAWebDBMessageStoreUtils",
          ).queryChatVisibleMessageHelper({
            lowerBound: a,
            upperBound: e.id + "_g",
            options: { lowerInclusive: !0 },
            addOnReparseExclusionList: r,
          })));
      } else {
        var s = 1;
        n = await o("WAWebDBMessageStoreUtils").queryChatVisibleMessageHelper({
          lowerBound: e.id + "_/",
          upperBound: e.id + "_g",
          options: { reverse: !0 },
          count: s,
        });
      }
      (o("WALogger").LOG(
        m ||
          (m = babelHelpers.taggedTemplateLiteralLoose([
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
    }
    async function T(e) {
      var t = e.unreadMsgAnchorId;
      if (r("isStringNullOrEmpty")(t))
        return (
          o("WALogger").WARN(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
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
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "Unread anchor message does not exist in message table",
                ])),
            );
            return;
          }
          var n = o("WAWebDBMessageUtils").getInChatMsgId(
              t[0].internalId || "",
            ),
            a = x(e, n, h),
            i = $(e, n, h),
            l = Promise.all([a, i]).then(function (e) {
              var t = e[0],
                n = e[1];
              return [].concat(t, n);
            });
          return l.then(function (t) {
            var n = t.length - h;
            if (!(n < 0)) {
              var a = t[t.length - h].id,
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
    function D(e) {
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
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "loadLastMessagesFromDB: failed with error",
                  ])),
              )
              .catching(r("getErrorSafe")(e)),
            e
          );
        });
    }
    function x(e, t, n) {
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
          count: h,
        })
        .then(function (e) {
          return e.reverse();
        });
    }
    function $(e, t, n) {
      var r = { lowerInclusive: !0, upperInclusive: !1 };
      return o("WAWebDBMessageStoreUtils").queryChatVisibleMessageHelper({
        lowerBound: o("WAWebDBMessageUtils").craftInternalId(e.id, t),
        upperBound: o("WAWebDBMessageUtils").endOfChat(
          o("WAWebWidFactory").createWid(e.id),
        ),
        options: r,
        count: h,
      });
    }
    function P(t) {
      return t.map(function (t) {
        var n = t.id,
          r = babelHelpers.objectWithoutPropertiesLoose(t, e);
        return babelHelpers.extends({}, r, { id: n.toString() });
      });
    }
    l.restoreChatsAndMessages = b;
  },
  98,
);
