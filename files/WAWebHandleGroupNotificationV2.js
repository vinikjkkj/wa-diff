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
    "WAWebShouldTriggerQueryGroupInfo",
    "WAWebUpdateDbForGroupActionApi",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e, t) {
      return h(e, t) != null;
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
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          (yield o(
            "WAWebLidMappingUsernameLearnUtils",
          ).processParsedGroupNotificationForLidMappingAndUsernames({
            notification: t,
            flushImmediately: !r,
          }),
            yield (m || (m = n("Promise"))).all(
              t.actions.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      e.actionType ===
                        o("WAWebHandleGroupNotificationConst")
                          .GROUP_NOTIFICATION_TAG.REMOVE &&
                        (yield o(
                          "WAWebMemberLabelGroupRemoveHandler",
                        ).handleMemberLabelUpdatesOnGroupParticipantRemoval(
                          t,
                          e,
                        ));
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ));
          var a = h(t, r);
          if (a == null)
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "no handler for group notification ",
                    "",
                  ])),
                t.chatId.toLogString(),
              ),
              _(t)
            );
          var i = yield o(
              "WAWebGroupAgentDeletedChat",
            ).isAgentChangeInDeletedGroupChatForActions(t.chatId, t.actions),
            l = null;
          try {
            l = i
              ? null
              : yield o(
                  "WAWebBotGroupBackendUtils",
                ).genE2EENoticeMsgAfterLastAgentRemoved({
                  meta: t,
                  actions: t.actions,
                });
          } catch (e) {
            o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[system msg][v2] end-to-end encryption notice generation failed with ",
                    "",
                  ])),
                e,
              )
              .sendLogs("group-notification-v2-e2ee-notice-generation-error");
          }
          return (
            yield m.all([
              a.writeSystemMessages(l, i),
              a.writeGroupInfoUpdates(),
            ]),
            _(t)
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
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
              (yield (m || (m = n("Promise"))).all(
                r.map(function (e) {
                  return e.writeSystemMessages(i);
                }),
              ),
                a && o != null && (yield y(e, t, o)));
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
                    var i = yield b(e, r, n),
                      l = yield k({
                        chatId: e.chatId,
                        shouldProcessOffline: t,
                        shouldSkip: function () {
                          return o(
                            "WAWebHandleGroupNotificationConst",
                          ).shouldSkipGenMsg(e, r);
                        },
                        systemMessages: i,
                      });
                    l &&
                      r.actionType ===
                        o("WAWebHandleGroupNotificationConst")
                          .GROUP_NOTIFICATION_TAG.REMOVE &&
                      (a = !0);
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
    function y(e, t, n) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          try {
            yield k({
              chatId: e.chatId,
              shouldProcessOffline: t,
              shouldSkip: (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    return !1;
                  },
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
              systemMessages: [r],
            });
          } catch (e) {
            o("WALogger")
              .LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[system msg][v2] end-to-end encryption notice write failed with ",
                    "",
                  ])),
                e,
              )
              .sendLogs("group-notification-v2-e2ee-notice-write-error");
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t, n) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
              (r = yield S(e, t, n ? [] : i)),
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
                  ? yield L(e, t)
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
        v.apply(this, arguments)
      );
    }
    function S(e, t, n) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        E.apply(this, arguments)
      );
    }
    function k(e) {
      var t = e.chatId,
        r = e.shouldProcessOffline,
        a = e.shouldSkip,
        i = e.systemMessages,
        l = function () {},
        s = new (m || (m = n("Promise")))(function (e) {
          return (l = e);
        });
      return (
        o("WAWebMessageQueue").onMessageQueue({
          chatWid: t,
          isOffline: r,
          msgCategory: null,
          action: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (yield a()) {
                l(!1);
                return;
              }
              var e = u(i).then(function () {
                l(i.length > 0);
              });
              return r ? (m || (m = n("Promise"))).resolve() : e;
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })(),
        }),
        s
      );
      function u(e) {
        return c.apply(this, arguments);
      }
      function c() {
        return (
          (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            if (e.length !== 0) {
              if (r)
                return (
                  o("WAWebBackendEventBus").BackendEventBus
                    .isMainStreamReadyMd &&
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
                    )
                );
              yield (m || (m = n("Promise"))).all(
                e.map(function (e) {
                  return o(
                    "WAWebHandleSingleMsgWorkerCompatible",
                  ).handleSingleMsg({
                    chatId: e.from,
                    newMsg: e,
                    handleSingleMsgOrigin: "handleGroupNotificationV2",
                  });
                }),
              );
            }
          })),
          c.apply(this, arguments)
        );
      }
    }
    ((l.isGroupNotificationOptimizationEligible = p),
      (l.handleGroupNotificationV2 = f));
  },
  98,
);
