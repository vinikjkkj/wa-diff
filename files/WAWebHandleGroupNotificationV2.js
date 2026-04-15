__d(
  "WAWebHandleGroupNotificationV2",
  [
    "Promise",
    "WALogger",
    "WAWap",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebCommsWapMd",
    "WAWebGetMessageCache",
    "WAWebGroupDatabaseJob",
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
    var e, s, u, c;
    function d(e, t) {
      return f(e, t) != null;
    }
    function m(e) {
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
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          (yield o(
            "WAWebLidMappingUsernameLearnUtils",
          ).processParsedGroupNotificationForLidMappingAndUsernames({
            notification: t,
            flushImmediately: !r,
          }),
            yield (c || (c = n("Promise"))).all(
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
          var a = f(t, r);
          return a == null
            ? (o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "no handler for group notification ",
                    "",
                  ])),
                t.chatId.toLogString(),
              ),
              m(t))
            : (yield c.all([
                a.writeSystemMessages(),
                a.writeGroupInfoUpdates(),
              ]),
              m(t));
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      var r = [];
      for (var a of e.actions) {
        var i = l(e, a);
        if (i == null) return null;
        r.push(i);
      }
      return {
        writeSystemMessages: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            yield (c || (c = n("Promise"))).all(
              r.map(function (e) {
                return e.writeSystemMessages();
              }),
            );
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        writeGroupInfoUpdates: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            yield (c || (c = n("Promise"))).all(
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
      function l(e, r) {
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
                      o("WAWebGroupDatabaseJob").markGroupParticipantStaleJob(
                        e.chatId,
                      );
                      return;
                    }
                    (yield o(
                      "WAWebUpdateDbForGroupActionApi",
                    ).updateDBForGroupAction(e, r, t),
                      o("WAWebBackendApi").frontendFireAndForget(
                        "updateModelForGroupAction",
                        { groupMeta: e, groupAction: r },
                      ));
                  },
                );
                function i() {
                  return a.apply(this, arguments);
                }
                return i;
              })(),
              writeSystemMessages: (function () {
                var a = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    return y(e.chatId, yield g(e, r), t, function () {
                      return o(
                        "WAWebHandleGroupNotificationConst",
                      ).shouldSkipGenMsg(e, r);
                    });
                  },
                );
                function i() {
                  return a.apply(this, arguments);
                }
                return i;
              })(),
            };
      }
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = [];
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
            var r = yield o(
                "WAWebHandleGroupNotificationConst",
              ).notAlreadyInGroup(e.chatId, t.participants),
              a = r.filter(function (e) {
                var t = e.id,
                  n = e.phoneNumber;
                return !t.isLid() || n != null;
              });
            if (a.length > 0) {
              if (
                (o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[system message][v2] eligibleParticipants = ",
                      " - ADD",
                    ])),
                  a.length,
                ),
                (n = [
                  yield o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                    meta: e,
                    action: babelHelpers.extends({}, t, { participants: a }),
                    dbIsStale: !0,
                  }),
                ]),
                o(
                  "WAWebBotGroupGatingUtils",
                ).isOpenGroupBotParticipantAddEnabled() &&
                  o("WAWebBotUtils").participantListIncludOpenOrTeeGroupBotWid(
                    a,
                  ).includeOpenMetabot)
              ) {
                var i = yield o(
                  "WAWebGroupSystemMsg",
                ).genGroupTransitionToBotGroupNotificationMsg(e.chatId);
                n.push(i);
              }
              if (
                o(
                  "WAWebBotGroupGatingUtils",
                ).isTEEGroupBotParticipantAddEnabled() &&
                o("WAWebBotUtils").participantListIncludOpenOrTeeGroupBotWid(a)
                  .includeTeeMetabot
              ) {
                var l = yield o(
                  "WAWebGroupSystemMsg",
                ).genGroupTransitionToTeeBotGroupNotificationMsg(e.chatId);
                n.push(l);
              }
            }
          } else if (
            t.actionType !==
              o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                .CREATE &&
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[system msg][v2] genSystemNotificationsImpl ",
                  "",
                ])),
              t.actionType,
            ),
            (n = [
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
            var c = o(
              "WAWebBotUtils",
            ).participantListIncludOpenOrTeeGroupBotWid(t.participants);
            (c.includeOpenMetabot || c.includeTeeMetabot) &&
              o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
                id: e.chatId,
                actionType: o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.REMOVE,
              });
          }
          return n.filter(Boolean);
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t, r, a) {
      var i = function () {},
        l = new (c || (c = n("Promise")))(function (e) {
          return (i = e);
        });
      return (
        o("WAWebMessageQueue").onMessageQueue({
          chatWid: e,
          isOffline: r,
          msgCategory: null,
          action: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (yield a()) {
                i();
                return;
              }
              var e = s(t).then(function () {
                i();
              });
              return r ? (c || (c = n("Promise"))).resolve() : e;
            });
            function o() {
              return e.apply(this, arguments);
            }
            return o;
          })(),
        }),
        l
      );
      function s(e) {
        return u.apply(this, arguments);
      }
      function u() {
        return (
          (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              yield (c || (c = n("Promise"))).all(
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
          u.apply(this, arguments)
        );
      }
    }
    ((l.isGroupNotificationOptimizationEligible = d),
      (l.handleGroupNotificationV2 = p));
  },
  98,
);
