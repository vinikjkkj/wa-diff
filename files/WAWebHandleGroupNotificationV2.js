__d(
  "WAWebHandleGroupNotificationV2",
  [
    "Promise",
    "WALogger",
    "WAWap",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBotGroupBackendUtils",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebCommsWapMd",
    "WAWebGetMessageCache",
    "WAWebGroupAgentAddSystemMsgs",
    "WAWebGroupAgentDeletedChat",
    "WAWebGroupAgentPrivacyNotice",
    "WAWebGroupAgentRemovalSystemMsgs",
    "WAWebGroupDatabaseJob",
    "WAWebGroupHistoryParticipantJob",
    "WAWebGroupQueryJob",
    "WAWebGroupSystemMsg",
    "WAWebHandleGroupNotificationConst",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebLidMappingUsernameLearnUtils",
    "WAWebMemberLabelGroupRemoveHandler",
    "WAWebMessageQueue",
    "WAWebMessageQueueTimeout",
    "WAWebShouldTriggerQueryGroupInfo",
    "WAWebUpdateDbForGroupActionApi",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e, t) {
      return L(e, t) != null;
    }
    function _(e) {
      return o("WAWap").wap("ack", {
        to: o("WAWebCommsWapMd").GROUP_JID(e.chatId),
        id: o("WAWap").CUSTOM_STRING(e.externalId),
        class: "notification",
        type: "w:gp2",
        participant: e.author
          ? o("WAWebCommsWapMd").USER_JID(e.author)
          : o("WAWap").DROP_ATTR,
      });
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield b(e, function () {
              return h(e, t);
            }),
            r = n.written;
          return (yield r, _(e));
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (yield o(
            "WAWebLidMappingUsernameLearnUtils",
          ).processParsedGroupNotificationForLidMappingAndUsernames({
            notification: e,
            flushImmediately: !t,
          }),
            yield (m || (m = n("Promise"))).all(
              e.actions.map(
                (function () {
                  var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (t) {
                      t.actionType ===
                        o("WAWebHandleGroupNotificationConst")
                          .GROUP_NOTIFICATION_TAG.REMOVE &&
                        (yield o(
                          "WAWebMemberLabelGroupRemoveHandler",
                        ).handleMemberLabelUpdatesOnGroupParticipantRemoval(
                          e,
                          t,
                        ));
                    },
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              ),
            ));
          var r = L(e, t);
          return r == null
            ? (o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "no handler for group notification ",
                    "",
                  ])),
                e.chatId.toLogString(),
              ),
              { written: (m || (m = n("Promise"))).resolve() })
            : S(e, r);
        })),
        y.apply(this, arguments)
      );
    }
    var C = new Map();
    function b(e, t) {
      var r;
      if (
        !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled() ||
        !e.actions.some(v)
      )
        return t();
      var a = e.chatId.toString(),
        i = (
          (r = C.get(a)) != null ? r : (m || (m = n("Promise"))).resolve()
        ).then(t),
        l = i.then(
          function () {},
          function () {},
        );
      return (
        C.set(a, l),
        l.then(function () {
          C.get(a) === l && C.delete(a);
        }),
        i
      );
    }
    function v(e) {
      return (
        (e.actionType ===
          o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.ADD ||
          e.actionType ===
            o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
              .REMOVE) &&
        e.participants.some(function (e) {
          var t = e.id;
          return o("WAWebBotUtils").isWidGroupAgentFbidWid(t);
        })
      );
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = yield o(
              "WAWebGroupAgentDeletedChat",
            ).isAgentChangeInDeletedGroupChatForActions(e.chatId, e.actions),
            a = null;
          try {
            a = r
              ? null
              : yield o(
                  "WAWebBotGroupBackendUtils",
                ).genE2EENoticeMsgAfterLastAgentRemoved({
                  meta: e,
                  actions: e.actions,
                });
          } catch (e) {
            o("WALogger")
              .LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[system msg][v2] end-to-end encryption notice generation failed with ",
                    "",
                  ])),
                e,
              )
              .sendLogs("group-notification-v2-e2ee-notice-generation-error");
          }
          var i = yield (m || (m = n("Promise"))).all([
              t.writeSystemMessages(a, r),
              t.writeGroupInfoUpdates(),
            ]),
            l = i[0];
          return l;
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      var r = [],
        a = !1;
      for (var i of e.actions) {
        var l = s(e, i);
        if (l == null) return null;
        r.push(l);
      }
      return {
        writeSystemMessages: (function () {
          var o = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (o, i) {
              var l = yield (m || (m = n("Promise"))).all(
                  r.map(function (e) {
                    return e.writeSystemMessages(i);
                  }),
                ),
                s = a && o != null ? yield E(e, t, o) : null;
              return {
                written: m
                  .all(
                    [].concat(
                      l.map(function (e) {
                        var t = e.written;
                        return t;
                      }),
                      [s == null ? void 0 : s.written],
                    ),
                  )
                  .then(function () {}),
              };
            },
          );
          function i(e, t) {
            return o.apply(this, arguments);
          }
          return i;
        })(),
        writeGroupInfoUpdates: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            yield (m || (m = n("Promise"))).all(
              r.map(function (e) {
                return e.writeGroupInfoUpdates();
              }),
            );
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
      };
      function s(e, r) {
        return r.actionType ===
          o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.CREATE
          ? null
          : {
              writeGroupInfoUpdates: (function () {
                var a = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    if (
                      (r.actionType ===
                        o("WAWebHandleGroupNotificationConst")
                          .GROUP_NOTIFICATION_TAG.ADD ||
                        r.actionType ===
                          o("WAWebHandleGroupNotificationConst")
                            .GROUP_NOTIFICATION_TAG.REMOVE) &&
                      (yield o(
                        "WAWebShouldTriggerQueryGroupInfo",
                      ).shouldTriggerQueryGroupInfo({
                        groupWid: e.chatId,
                        action: r,
                      }))
                    ) {
                      yield o(
                        "WAWebGroupDatabaseJob",
                      ).markGroupParticipantStaleJob(e.chatId);
                      return;
                    }
                    yield o(
                      "WAWebUpdateDbForGroupActionApi",
                    ).updateDBForGroupAction(e, r, t);
                    var n = yield o(
                      "WAWebGroupHistoryParticipantJob",
                    ).enrichGroupActionWithStoredHistoryState(e.chatId, r);
                    o("WAWebBackendApi").frontendFireAndForget(
                      "updateModelForGroupAction",
                      { groupMeta: e, groupAction: n },
                    );
                  },
                );
                function i() {
                  return a.apply(this, arguments);
                }
                return i;
              })(),
              writeSystemMessages: (function () {
                var i = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (n) {
                    var i = yield T(e, r, n),
                      l = yield M({
                        chatId: e.chatId,
                        shouldProcessOffline: t,
                        shouldSkip: function () {
                          return o(
                            "WAWebHandleGroupNotificationConst",
                          ).shouldSkipGenMsg(e, r);
                        },
                        systemMessages: i,
                      });
                    return (
                      l.inserted &&
                        r.actionType ===
                          o("WAWebHandleGroupNotificationConst")
                            .GROUP_NOTIFICATION_TAG.REMOVE &&
                        (a = !0),
                      l
                    );
                  },
                );
                function l(e) {
                  return i.apply(this, arguments);
                }
                return l;
              })(),
            };
      }
    }
    function E(e, t, n) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          try {
            var o = yield M({
                chatId: e.chatId,
                shouldProcessOffline: t,
                shouldSkip: function () {
                  return (m || (m = n("Promise"))).resolve(!1);
                },
                systemMessages: [r],
              }),
              a = o.written;
            return { written: a.catch(I) };
          } catch (e) {
            return (I(e), { written: (m || (m = n("Promise"))).resolve() });
          }
        })),
        k.apply(this, arguments)
      );
    }
    function I(t) {
      o("WALogger")
        .LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[system msg][v2] end-to-end encryption notice write failed with ",
              "",
            ])),
          t,
        )
        .sendLogs("group-notification-v2-e2ee-notice-write-error");
    }
    function T(e, t, n) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = [];
          if (
            (t.actionType ===
              o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                .ADD ||
              t.actionType ===
                o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                  .REMOVE) &&
            (yield o(
              "WAWebShouldTriggerQueryGroupInfo",
            ).shouldTriggerQueryGroupInfo({ groupWid: e.chatId, action: t }))
          )
            return [];
          if (
            t.actionType ===
            o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.ADD
          ) {
            var a = yield o(
                "WAWebHandleGroupNotificationConst",
              ).notAlreadyInGroup(e.chatId, t.participants),
              i = a.filter(function (e) {
                var t = e.id,
                  n = e.phoneNumber;
                return !t.isLid() || n != null;
              });
            if (
              i.length > 0 &&
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[system message][v2] eligibleParticipants = ",
                    " - ADD",
                  ])),
                i.length,
              ),
              (r = yield x(e, t, n ? [] : i)),
              o(
                "WAWebBotGroupGatingUtils",
              ).isOpenGroupBotParticipantAddEnabled() ||
                o(
                  "WAWebBotGroupGatingUtils",
                ).isTEEGroupBotParticipantAddEnabled())
            ) {
              var l =
                o("WAWebBotUtils").participantListIncludeOpenOrTeeGroupBotWid(
                  i,
                );
              (l.includeOpenMetabot || l.includeTeeMetabot) &&
                o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
                  id: e.chatId,
                  actionType: o("WAWebHandleGroupNotificationConst")
                    .GROUP_NOTIFICATION_TAG.ADD,
                });
            }
          } else if (
            t.actionType !==
              o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                .CREATE &&
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[system msg][v2] genSystemNotificationsImpl ",
                  "",
                ])),
              t.actionType,
            ),
            n ||
              (r =
                t.actionType ===
                o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                  .REMOVE
                  ? yield P(e, t)
                  : [
                      yield o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                        meta: e,
                        action: t,
                        dbIsStale: !0,
                      }),
                    ]),
            (o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled() ||
              o(
                "WAWebBotGroupGatingUtils",
              ).isTEEGroupBotParticipantAddEnabled()) &&
              t.actionType ===
                o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                  .REMOVE)
          ) {
            var s = o(
              "WAWebBotUtils",
            ).participantListIncludeOpenOrTeeGroupBotWid(t.participants);
            (s.includeOpenMetabot || s.includeTeeMetabot) &&
              o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
                id: e.chatId,
                actionType: o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.REMOVE,
              });
          }
          return r.filter(Boolean);
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t, n) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (n.length === 0) return [];
          var r = yield o(
              "WAWebGroupAgentPrivacyNotice",
            ).genGroupAgentPrivacyNoticeMsgsForAdd({
              chatId: e.chatId,
              addedParticipantIds: n.map(function (e) {
                var t = e.id;
                return t;
              }),
              meta: e,
            }),
            a = yield o(
              "WAWebGroupAgentAddSystemMsgs",
            ).genGroupAddNotificationMsgs({
              meta: e,
              action: babelHelpers.extends({}, t, { participants: n }),
              dbIsStale: !0,
            });
          return o(
            "WAWebGroupAgentPrivacyNotice",
          ).orderGroupAgentNoticesAndRows(
            [].concat(
              r,
              yield o(
                "WAWebGroupAgentPrivacyNotice",
              ).genMetaAiGroupNoticeMsgsForAdd({
                addedParticipants: n,
                meta: e,
              }),
            ),
            a,
          );
        })),
        $.apply(this, arguments)
      );
    }
    function P(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o(
            "WAWebGroupAgentRemovalSystemMsgs",
          ).genGroupAgentRemovalMsgs({ meta: e, action: t, dbIsStale: !0 });
          return [].concat(
            n != null
              ? n
              : [
                  yield o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                    meta: e,
                    action: t,
                    dbIsStale: !0,
                  }),
                ],
          );
        })),
        N.apply(this, arguments)
      );
    }
    function M(e) {
      var t = e.chatId,
        r = e.shouldProcessOffline,
        a = e.shouldSkip,
        i = e.systemMessages,
        l = function () {},
        s = function () {},
        u = new (m || (m = n("Promise")))(function (e, t) {
          ((l = e), (s = t));
        });
      return (
        o("WAWebMessageQueue")
          .onMessageQueue({
            chatWid: t,
            isOffline: r,
            msgCategory: null,
            action: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  var e;
                  try {
                    if (yield a()) {
                      l({
                        inserted: !1,
                        written: (m || (m = n("Promise"))).resolve(),
                      });
                      return;
                    }
                    e = c(i);
                  } catch (e) {
                    s(e);
                    return;
                  }
                  return (
                    l({ inserted: i.length > 0, written: e }),
                    r ? (m || (m = n("Promise"))).resolve() : e
                  );
                },
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          })
          .catch(function (e) {
            return o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(
              e,
              "group_notification_v2",
            );
          }),
        u
      );
      function c(e) {
        return e.length === 0
          ? (m || (m = n("Promise"))).resolve()
          : r
            ? (o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd &&
                e.forEach(function (e) {
                  o("WAWebBackendApi").frontendFireAndForget(
                    "updateMessageUI",
                    { chatId: e.id.remote, msg: e },
                  );
                }),
              o("WAWebGetMessageCache")
                .getMessageCache()
                .addMessages(
                  e.map(function (e) {
                    return { msg: e };
                  }),
                  !1,
                ))
            : (m || (m = n("Promise")))
                .all(
                  e.map(function (e) {
                    return o(
                      "WAWebHandleSingleMsgWorkerCompatible",
                    ).handleSingleMsg({
                      chatId: e.from,
                      newMsg: e,
                      handleSingleMsgOrigin: "handleGroupNotificationV2",
                    });
                  }),
                )
                .then(function () {});
      }
    }
    ((l.isGroupNotificationOptimizationEligible = p),
      (l.handleGroupNotificationV2 = f));
  },
  98,
);
