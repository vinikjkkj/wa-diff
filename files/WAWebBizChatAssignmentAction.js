__d(
  "WAWebBizChatAssignmentAction",
  [
    "WATimeUtils",
    "WAWebAgentCollection",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBizChatAssignmentOpenedAction",
    "WAWebChatAssignmentCollection",
    "WAWebChatAssignmentGatingUtils",
    "WAWebChatAssignmentLogEvents",
    "WAWebChatAssignmentLogEvents.flow",
    "WAWebChatAssignmentModel",
    "WAWebChatAssignmentSync",
    "WAWebChatAssignmentSystemMsg",
    "WAWebChatAssignmentUtils",
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebMobilePlatforms",
    "WAWebNotificationController",
    "WAWebNotificationsChatAssignmentNotification",
    "WAWebSchemaChatAssignment",
    "WAWebSyncdCoreApi",
    "WAWebSyncdOrphan",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsStore",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      if (o("WAWebChatAssignmentUtils").canAssignChats()) {
        var n = o("WAWebUserPrefsMeUser")
            .getMeDevicePnOrThrow_DO_NOT_USE()
            .getDeviceId(),
          a = e.map(function (e) {
            var r = e.chat.id.toString({ legacy: !0 }),
              a = e.agentId,
              i = o("WAWebAgentCollection").AgentCollection.getByDeviceId(n),
              l =
                (i == null ? void 0 : i.deviceId) === n &&
                t !==
                  o("WAWebChatAssignmentLogEvents.flow")
                    .ChatAssignmentEntryPointType.MULTI_SELECT &&
                t !==
                  o("WAWebChatAssignmentLogEvents.flow")
                    .ChatAssignmentEntryPointType.CONTACT_INFO_SCREEN;
            return {
              id: r + "_" + (a || ""),
              chatId: r,
              agentId: a != null ? a : "",
              chatOpenedByAgent: l,
            };
          }),
          i = e.map(function (e) {
            return e.chat.assignedAgent != null;
          });
        (await o("WAWebSyncdCoreApi").lockForSync(
          ["chat-assignment"],
          await r("WAWebChatAssignmentSync").createChatAssignmentMutations(a),
          function () {
            return u(a);
          },
        ),
          e.forEach(function (n, r) {
            var a;
            o("WAWebChatAssignmentLogEvents").logChatAssignment(
              n.chat,
              (a = n.agentId) != null ? a : "",
              i[r],
              t,
              e.length,
            );
          }),
          c(
            e.map(function (e) {
              var t = e.agentId,
                n = e.chat,
                r = o("WAWebAgentCollection").AgentCollection.get(
                  t != null ? t : "",
                );
              return {
                chatId: n.id,
                agent: r,
                timestamp: o("WATimeUtils").unixTime(),
              };
            }),
          ),
          r("WAWebUserPrefsStore").setUser(
            "chat_assignment_agent_has_assigned_chats",
            !0,
          ),
          a
            .filter(function (e) {
              var t = e.chatOpenedByAgent;
              return t === !0;
            })
            .forEach(function (e) {
              var t = o("WAWebChatCollection").ChatCollection.get(e.chatId);
              t != null &&
                o("WAWebBizChatAssignmentOpenedAction").markChatAsOpened(t, !0);
            }));
      }
    }
    function s(e) {
      return o("WAWebChatAssignmentCollection")
        .ChatAssignmentCollection.getModelsArray()
        .filter(function (t) {
          var n = t.chatId;
          return e.includes(n);
        })
        .map(function (e) {
          return e.id;
        });
    }
    async function u(e) {
      var t = s(
          e.map(function (e) {
            var t = e.chatId;
            return t;
          }),
        ),
        n = e.map(function (e) {
          var t = e.agentId,
            n = e.chatId,
            r = e.chatOpenedByAgent,
            a = e.id;
          return new (o("WAWebChatAssignmentModel").ChatAssignment)({
            id: a,
            chatId: n,
            agentId: t,
            chatOpenedByAgent: r,
            agent: o("WAWebAgentCollection").AgentCollection.get(t),
          });
        });
      (o("WAWebChatAssignmentCollection").ChatAssignmentCollection.remove(t),
        o("WAWebChatAssignmentCollection").ChatAssignmentCollection.add(n));
      var r = o("WAWebSchemaChatAssignment").getChatAssignmentTable();
      await Promise.all([r.bulkRemove(t), r.bulkCreateOrMerge(e)]);
    }
    function c(e) {
      o("WAWebChatAssignmentGatingUtils").chatAssignmentEnabled() &&
        e.forEach(function (e) {
          var t = e.agent,
            n = e.chatId,
            r = e.timestamp,
            a = o("WAWebChatCollection").ChatCollection.get(n);
          (a != null && o("WAWebBizAiAgentStatusUtils").isChatAiEnabled(a)) ||
            o("WAWebHandleSingleMsgWorkerCompatible")
              .handleSingleMsg({
                chatId: n,
                newMsg: o(
                  "WAWebChatAssignmentSystemMsg",
                ).genChatAssignmentNotificationTemplateMsg(n, t, r),
                handleSingleMsgOrigin: "chatAssignmentSystemMsg",
              })
              .then(function () {
                a != null &&
                  o(
                    "WAWebChatAssignmentLogEvents",
                  ).logSystemMessageGeneratedFromCompanion(a);
              })
              .catch(function () {
                a != null &&
                  o(
                    "WAWebChatAssignmentLogEvents",
                  ).logSystemMessageFailedToGenerate(a);
              });
        });
    }
    async function d(e) {
      if (o("WAWebMobilePlatforms").isSMB()) {
        var t = s([e.toString({ legacy: !0 })]);
        (await o("WAWebSchemaChatAssignment")
          .getChatAssignmentTable()
          .bulkRemove(t),
          o("WAWebChatAssignmentCollection").ChatAssignmentCollection.remove(
            t,
          ));
      }
    }
    function m() {
      o("WAWebCmd").Cmd.once(
        "app_state_sync_completed_from_bridge",
        function () {
          (o("WAWebSyncdOrphan").checkOrphanAgents(
            o("WAWebAgentCollection")
              .AgentCollection.getModelsArray()
              .map(function (e) {
                var t = e.id;
                return t;
              }),
          ),
            o("WAWebSyncdOrphan").checkOrphanChatAssignments(
              o("WAWebChatAssignmentCollection")
                .ChatAssignmentCollection.getModelsArray()
                .map(function (e) {
                  var t = e.id;
                  return t;
                }),
            ));
        },
      );
    }
    function p(e, t) {
      if (
        !(
          !o(
            "WAWebChatAssignmentGatingUtils",
          ).chatAssignmentNotificationsEnabled() ||
          !o("WAWebChatAssignmentUtils").canAssignChats()
        )
      ) {
        var n = o("WAWebUserPrefsMeUser")
            .getMeDevicePnOrThrow_DO_NOT_USE()
            .getDeviceId(),
          r = e.filter(function (e) {
            var t = o("WAWebAgentCollection").AgentCollection.get(e.agentId);
            return (t == null ? void 0 : t.deviceId) === n;
          });
        r.length !== 0 &&
          o(
            "WAWebNotificationController",
          ).WANotificationController.triggerNotification(
            new (o(
              "WAWebNotificationsChatAssignmentNotification",
            ).WAWebNotificationsChatAssignmentNotification)({
              chats: r.map(function (e) {
                return o("WAWebWidFactory").createWid(e.chatId);
              }),
              assignmentTimestamps: t,
            }),
          );
      }
    }
    ((l.changeChatAssignment = e),
      (l.createChatAssignmentSystemMsgs = c),
      (l.removeChatAssignmentsForChat = d),
      (l.checkOrphanAssignments = m),
      (l.triggerChatAssignmentNotification = p));
  },
  98,
);
