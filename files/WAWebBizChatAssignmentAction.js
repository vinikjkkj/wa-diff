__d(
  "WAWebBizChatAssignmentAction",
  [
    "Promise",
    "WATimeUtils",
    "WAWebAgentCollection",
    "WAWebBizChatAssignmentOpenedAction",
    "WAWebBizGatingUtils",
    "WAWebChatAssignmentCollection",
    "WAWebChatAssignmentLogEvents",
    "WAWebChatAssignmentLogEvents.flow",
    "WAWebChatAssignmentModel",
    "WAWebChatAssignmentSync",
    "WAWebChatAssignmentSystemMsg",
    "WAWebChatAssignmentUtils",
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebHandleSingleMsgFactory",
    "WAWebMobilePlatforms",
    "WAWebNotificationController",
    "WAWebNotificationsChatAssignmentNotification",
    "WAWebSchemaChatAssignment",
    "WAWebSyncdCoreApi",
    "WAWebSyncdOrphan",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsStore",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (o("WAWebChatAssignmentUtils").canAssignChats()) {
            var n = o("WAWebUserPrefsMeUser")
                .getMeDevicePnOrThrow_DO_NOT_USE()
                .getDeviceId(),
              a = e.map(function (e) {
                var r = e.chat.id.toString({ legacy: !0 }),
                  a = e.agentId,
                  i = o("WAWebAgentCollection").AgentCollection.getByDeviceId(
                    n,
                  ),
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
            (yield o("WAWebSyncdCoreApi").lockForSync(
              ["chat-assignment"],
              yield r("WAWebChatAssignmentSync").createChatAssignmentMutations(
                a,
              ),
              function () {
                return d(a);
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
              p(
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
                    o("WAWebBizChatAssignmentOpenedAction").markChatAsOpened(
                      t,
                      !0,
                    );
                }));
          }
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
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
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = c(
              t.map(function (e) {
                var t = e.chatId;
                return t;
              }),
            ),
            a = t.map(function (e) {
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
          (o("WAWebChatAssignmentCollection").ChatAssignmentCollection.remove(
            r,
          ),
            o("WAWebChatAssignmentCollection").ChatAssignmentCollection.add(a));
          var i = o("WAWebSchemaChatAssignment").getChatAssignmentTable();
          yield (e || (e = n("Promise"))).all([
            i.bulkRemove(r),
            i.bulkCreateOrMerge(t),
          ]);
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      o("WAWebBizGatingUtils").chatAssignmentEnabled() &&
        e.forEach(function (e) {
          var t = e.agent,
            n = e.chatId,
            r = e.timestamp,
            a = o("WAWebChatCollection").ChatCollection.get(n);
          o("WAWebHandleSingleMsgFactory")
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
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (o("WAWebMobilePlatforms").isSMB()) {
            var t = c([e.toString({ legacy: !0 })]);
            (yield o("WAWebSchemaChatAssignment")
              .getChatAssignmentTable()
              .bulkRemove(t),
              o(
                "WAWebChatAssignmentCollection",
              ).ChatAssignmentCollection.remove(t));
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g() {
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
    function h(e, t) {
      if (
        !(
          !o("WAWebBizGatingUtils").chatAssignmentNotificationsEnabled() ||
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
    ((l.changeChatAssignment = s),
      (l.createChatAssignmentSystemMsgs = p),
      (l.removeChatAssignmentsForChat = _),
      (l.checkOrphanAssignments = g),
      (l.triggerChatAssignmentNotification = h));
  },
  98,
);
