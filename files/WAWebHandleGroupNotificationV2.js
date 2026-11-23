__d(
  "WAWebHandleGroupNotificationV2",
  [
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
    "WAWebGroupType",
    "WAWebHandleGroupNotificationAction",
    "WAWebHandleGroupNotificationConst",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebLidMappingUsernameLearnUtils",
    "WAWebMemberLabelGroupRemoveHandler",
    "WAWebMessageQueue",
    "WAWebMessageQueueTimeout",
    "WAWebShouldTriggerQueryGroupInfo",
    "WAWebUpdateDbForGroupActionApi",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e, t) {
      return b(e, t) != null;
    }
    function p(e) {
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
    p.displayName = p.name + " [from " + i.id + "]";
    async function _(e, t) {
      var n = await h(e, function () {
          return f(e, t);
        }),
        r = n.written;
      return (await r, p(e));
    }
    async function f(t, n) {
      (await o(
        "WAWebLidMappingUsernameLearnUtils",
      ).processParsedGroupNotificationForLidMappingAndUsernames({
        notification: t,
        flushImmediately: !n,
      }),
        await Promise.all(
          t.actions.map(async function (e) {
            e.actionType ===
              o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                .REMOVE &&
              (await o(
                "WAWebMemberLabelGroupRemoveHandler",
              ).handleMemberLabelUpdatesOnGroupParticipantRemoval(t, e));
          }),
        ));
      var r = b(t, n);
      return r == null
        ? (o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "no handler for group notification ",
                "",
              ])),
            t.chatId.toLogString(),
          ),
          { written: Promise.resolve() })
        : C(t, r);
    }
    var g = new Map();
    function h(e, t) {
      var n;
      if (
        !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled() ||
        !e.actions.some(y)
      )
        return t();
      var r = e.chatId.toString(),
        a = ((n = g.get(r)) != null ? n : Promise.resolve()).then(t),
        i = a.then(
          function () {},
          function () {},
        );
      return (
        g.set(r, i),
        i.then(function () {
          g.get(r) === i && g.delete(r);
        }),
        a
      );
    }
    function y(e) {
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
    async function C(e, t) {
      var n = await o(
          "WAWebGroupAgentDeletedChat",
        ).isAgentChangeInDeletedGroupChatForActions(e.chatId, e.actions),
        r = null;
      try {
        r = n
          ? null
          : await o(
              "WAWebBotGroupBackendUtils",
            ).genE2EENoticeMsgAfterLastAgentRemoved({
              meta: e,
              actions: e.actions,
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
      var a = await Promise.all([
          t.writeSystemMessages(r, n),
          t.writeGroupInfoUpdates(),
        ]),
        i = a[0];
      return i;
    }
    function b(e, t) {
      var n = [],
        r = !1;
      for (var a of e.actions) {
        var i = l(e, a);
        if (i == null) return null;
        n.push(i);
      }
      return {
        writeSystemMessages: async function (a, i) {
          var o = await Promise.all(
              n.map(function (e) {
                return e.writeSystemMessages(i);
              }),
            ),
            l = r && a != null ? await v(e, t, a) : null;
          return {
            written: Promise.all(
              [].concat(
                o.map(function (e) {
                  var t = e.written;
                  return t;
                }),
                [l == null ? void 0 : l.written],
              ),
            ).then(function () {}),
          };
        },
        writeGroupInfoUpdates: async function () {
          await Promise.all(
            n.map(function (e) {
              return e.writeGroupInfoUpdates();
            }),
          );
        },
      };
      function l(e, n) {
        return n.actionType ===
          o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
            .CREATE ||
          n.actionType ===
            o("WAWebGroupType").GROUP_ACTIONS.GROUP_REACTION_SETTINGS
          ? null
          : {
              writeGroupInfoUpdates: async function () {
                if (
                  (n.actionType ===
                    o("WAWebHandleGroupNotificationConst")
                      .GROUP_NOTIFICATION_TAG.ADD ||
                    n.actionType ===
                      o("WAWebHandleGroupNotificationConst")
                        .GROUP_NOTIFICATION_TAG.REMOVE) &&
                  (await o(
                    "WAWebShouldTriggerQueryGroupInfo",
                  ).shouldTriggerQueryGroupInfo({
                    groupWid: e.chatId,
                    action: n,
                  }))
                ) {
                  await o("WAWebGroupDatabaseJob").markGroupParticipantStaleJob(
                    e.chatId,
                  );
                  return;
                }
                await o(
                  "WAWebUpdateDbForGroupActionApi",
                ).updateDBForGroupAction(e, n, t);
                var r = await o(
                  "WAWebGroupHistoryParticipantJob",
                ).enrichGroupActionWithStoredHistoryState(e.chatId, n);
                o("WAWebBackendApi").frontendFireAndForget(
                  "updateModelForGroupAction",
                  { groupMeta: e, groupAction: r },
                );
              },
              writeSystemMessages: async function (i) {
                var a = await R(e, n, i),
                  l = await k({
                    chatId: e.chatId,
                    shouldProcessOffline: t,
                    shouldSkip: function () {
                      return o(
                        "WAWebHandleGroupNotificationConst",
                      ).shouldSkipGenMsg(e, n);
                    },
                    systemMessages: a,
                  });
                return (
                  l.inserted &&
                    n.actionType ===
                      o("WAWebHandleGroupNotificationConst")
                        .GROUP_NOTIFICATION_TAG.REMOVE &&
                    (r = !0),
                  l
                );
              },
            };
      }
    }
    async function v(e, t, n) {
      try {
        var r = await k({
            chatId: e.chatId,
            shouldProcessOffline: t,
            shouldSkip: function () {
              return Promise.resolve(!1);
            },
            systemMessages: [n],
          }),
          o = r.written;
        return { written: o.catch(S) };
      } catch (e) {
        return (S(e), { written: Promise.resolve() });
      }
    }
    function S(e) {
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
    async function R(e, t, n) {
      var r = [];
      if (
        (t.actionType ===
          o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.ADD ||
          t.actionType ===
            o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
              .REMOVE) &&
        (await o(
          "WAWebShouldTriggerQueryGroupInfo",
        ).shouldTriggerQueryGroupInfo({ groupWid: e.chatId, action: t }))
      )
        return [];
      if (
        t.actionType ===
        o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.ADD
      ) {
        var a = await o("WAWebHandleGroupNotificationConst").notAlreadyInGroup(
            e.chatId,
            t.participants,
          ),
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
          (r = await L(e, t, n ? [] : i)),
          o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() ||
            o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled())
        ) {
          var l =
            o("WAWebBotUtils").participantListIncludeOpenOrTeeGroupBotWid(i);
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
            o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.REMOVE
              ? await E(e, t)
              : [
                  await o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                    meta: e,
                    action: t,
                    dbIsStale: !0,
                  }),
                ]),
        (o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() ||
          o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled()) &&
          t.actionType ===
            o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
              .REMOVE)
      ) {
        var s = o("WAWebBotUtils").participantListIncludeOpenOrTeeGroupBotWid(
          t.participants,
        );
        (s.includeOpenMetabot || s.includeTeeMetabot) &&
          o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
            id: e.chatId,
            actionType: o("WAWebHandleGroupNotificationConst")
              .GROUP_NOTIFICATION_TAG.REMOVE,
          });
      }
      return r.filter(Boolean);
    }
    async function L(e, t, n) {
      if (n.length === 0) return [];
      var r = await o(
          "WAWebGroupAgentPrivacyNotice",
        ).genGroupAgentPrivacyNoticeMsgsForAdd({
          chatId: e.chatId,
          addedParticipantIds: n.map(function (e) {
            var t = e.id;
            return t;
          }),
          meta: e,
        }),
        a = await o("WAWebGroupAgentAddSystemMsgs").genGroupAddNotificationMsgs(
          {
            meta: e,
            action: babelHelpers.extends({}, t, { participants: n }),
            dbIsStale: !0,
          },
        );
      return o("WAWebGroupAgentPrivacyNotice").orderGroupAgentNoticesAndRows(
        [].concat(
          r,
          await o(
            "WAWebGroupAgentPrivacyNotice",
          ).genMetaAiGroupNoticeMsgsForAdd({ addedParticipants: n, meta: e }),
        ),
        a,
      );
    }
    async function E(e, t) {
      var n = await o(
        "WAWebGroupAgentRemovalSystemMsgs",
      ).genGroupAgentRemovalMsgs({ meta: e, action: t, dbIsStale: !0 });
      return [].concat(
        n != null
          ? n
          : [
              await o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                meta: e,
                action: t,
                dbIsStale: !0,
              }),
            ],
      );
    }
    function k(e) {
      var t = e.chatId,
        n = e.shouldProcessOffline,
        a = e.shouldSkip,
        i = e.systemMessages,
        l = function () {},
        s = function () {},
        u = new Promise(function (e, t) {
          ((l = e), (s = t));
        });
      return (
        o("WAWebMessageQueue")
          .onMessageQueue({
            chatWid: t,
            isOffline: n,
            msgCategory: null,
            action: async function () {
              var e;
              try {
                if (await a()) {
                  l({ inserted: !1, written: Promise.resolve() });
                  return;
                }
                e = c(i);
              } catch (e) {
                s(e);
                return;
              }
              return (
                l({ inserted: i.length > 0, written: e }),
                n ? Promise.resolve() : e
              );
            },
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
          ? Promise.resolve()
          : n
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
            : r("justknobx")._("6733")
              ? o(
                  "WAWebHandleGroupNotificationAction",
                ).writeOnlineSystemNotifications(e)
              : Promise.all(
                  e.map(function (e) {
                    return o(
                      "WAWebHandleSingleMsgWorkerCompatible",
                    ).handleSingleMsg({
                      chatId: e.from,
                      newMsg: e,
                      handleSingleMsgOrigin: "handleGroupNotificationV2",
                    });
                  }),
                ).then(function () {});
      }
    }
    ((l.isGroupNotificationOptimizationEligible = m),
      (l.handleGroupNotificationV2 = _));
  },
  98,
);
