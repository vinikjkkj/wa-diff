__d(
  "WAWebBizChatAssignmentOpenedAction",
  [
    "WAWebAgentCollection",
    "WAWebChatAssignmentCollection",
    "WAWebChatAssignmentOpenedStatusSync",
    "WAWebChatAssignmentUtils",
    "WAWebSchemaChatAssignment",
    "WAWebSyncdCoreApi",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      e.forEach(function (e) {
        var t = e.chatOpenedByAgent,
          n = e.id,
          r = o("WAWebChatAssignmentCollection").ChatAssignmentCollection.get(
            n,
          );
        r && r.set("chatOpenedByAgent", t);
      });
      var t = o("WAWebSchemaChatAssignment").getChatAssignmentTable();
      await t.bulkCreateOrMerge(e);
    }
    async function s(t, n) {
      var a;
      if (o("WAWebChatAssignmentUtils").canAssignChats()) {
        var i = o("WAWebUserPrefsMeUser")
            .getMeDevicePnOrThrow_DO_NOT_USE()
            .getDeviceId(),
          l = t.id,
          s =
            (a = o("WAWebAgentCollection").AgentCollection.getByDeviceId(i)) ==
            null
              ? void 0
              : a.id;
        if (s != null) {
          var u = [{ chatId: l, agentId: s, chatOpened: n }],
            c = u.map(function (e) {
              var t = e.chatId.toString({ legacy: !0 });
              return {
                id: t + "_" + s,
                chatId: t,
                agentId: s,
                chatOpenedByAgent: n,
              };
            });
          await o("WAWebSyncdCoreApi").lockForSync(
            ["chat-assignment"],
            await r(
              "WAWebChatAssignmentOpenedStatusSync",
            ).createChatOpenedMutations(c),
            function () {
              return e(c);
            },
          );
        }
      }
    }
    ((l.updateLocalOpenedState = e), (l.markChatAsOpened = s));
  },
  98,
);
