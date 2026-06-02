__d(
  "WAWebHandleGroupNotificationV2",
  [
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
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t) {
      return p(e, t) != null;
    }
    function d(e) {
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
    async function m(t, n) {
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
      var r = p(t, n);
      return r == null
        ? (o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "no handler for group notification ",
                "",
              ])),
            t.chatId.toLogString(),
          ),
          d(t))
        : (await Promise.all([
            r.writeSystemMessages(),
            r.writeGroupInfoUpdates(),
          ]),
          d(t));
    }
    function p(e, t) {
      var n = [];
      for (var r of e.actions) {
        var a = i(e, r);
        if (a == null) return null;
        n.push(a);
      }
      return {
        writeSystemMessages: async function () {
          await Promise.all(
            n.map(function (e) {
              return e.writeSystemMessages();
            }),
          );
        },
        writeGroupInfoUpdates: async function () {
          await Promise.all(
            n.map(function (e) {
              return e.writeGroupInfoUpdates();
            }),
          );
        },
      };
      function i(e, n) {
        return n.actionType ===
          o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG.CREATE
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
                  o("WAWebGroupDatabaseJob").markGroupParticipantStaleJob(
                    e.chatId,
                  );
                  return;
                }
                (await o(
                  "WAWebUpdateDbForGroupActionApi",
                ).updateDBForGroupAction(e, n, t),
                  o("WAWebBackendApi").frontendFireAndForget(
                    "updateModelForGroupAction",
                    { groupMeta: e, groupAction: n },
                  ));
              },
              writeSystemMessages: async function () {
                return f({
                  chatId: e.chatId,
                  shouldProcessOffline: t,
                  shouldSkip: function () {
                    return o(
                      "WAWebHandleGroupNotificationConst",
                    ).shouldSkipGenMsg(e, n);
                  },
                  systemMessages: await _(e, n),
                });
              },
            };
      }
    }
    async function _(e, t) {
      var n = [];
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
        var r = await o("WAWebHandleGroupNotificationConst").notAlreadyInGroup(
            e.chatId,
            t.participants,
          ),
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
              await o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                meta: e,
                action: babelHelpers.extends({}, t, { participants: a }),
                dbIsStale: !0,
              }),
            ]),
            o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled() &&
              o("WAWebBotUtils").participantListIncludOpenOrTeeGroupBotWid(a)
                .includeOpenMetabot)
          ) {
            var i = await o(
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
            var l = await o(
              "WAWebGroupSystemMsg",
            ).genGroupTransitionToTeeBotGroupNotificationMsg(e.chatId);
            n.push(l);
          }
          if (
            o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled() ||
            o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled()
          ) {
            var c =
              o("WAWebBotUtils").participantListIncludOpenOrTeeGroupBotWid(a);
            (c.includeOpenMetabot || c.includeTeeMetabot) &&
              o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
                id: e.chatId,
                actionType: o("WAWebHandleGroupNotificationConst")
                  .GROUP_NOTIFICATION_TAG.ADD,
              });
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
        var d = o("WAWebBotUtils").participantListIncludOpenOrTeeGroupBotWid(
          t.participants,
        );
        (d.includeOpenMetabot || d.includeTeeMetabot) &&
          o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
            id: e.chatId,
            actionType: o("WAWebHandleGroupNotificationConst")
              .GROUP_NOTIFICATION_TAG.REMOVE,
          });
      }
      return n.filter(Boolean);
    }
    function f(e) {
      var t = e.chatId,
        n = e.shouldProcessOffline,
        r = e.shouldSkip,
        a = e.systemMessages,
        i = function () {},
        l = new Promise(function (e) {
          return (i = e);
        });
      return (
        o("WAWebMessageQueue").onMessageQueue({
          chatWid: t,
          isOffline: n,
          msgCategory: null,
          action: async function () {
            if (await r()) {
              i();
              return;
            }
            var e = s(a).then(function () {
              i();
            });
            return n ? Promise.resolve() : e;
          },
        }),
        l
      );
      async function s(e) {
        if (e.length !== 0) {
          if (n)
            return (
              o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd &&
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
          await Promise.all(
            e.map(function (e) {
              return o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                chatId: e.from,
                newMsg: e,
                handleSingleMsgOrigin: "handleGroupNotificationV2",
              });
            }),
          );
        }
      }
    }
    ((l.isGroupNotificationOptimizationEligible = c),
      (l.handleGroupNotificationV2 = m));
  },
  98,
);
