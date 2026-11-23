__d(
  "WAWebBizChatAssignmentOpenedAction",
  [
    "WAWebAgentCollection",
    "WAWebChatAssignmentCollection",
    "WAWebChatAssignmentOpenedStatusSync",
    "WAWebChatAssignmentUtils",
    "WAWebSchemaChatAssignment",
    "WAWebSyncdCoreApi",
    "WAWebUserUtils",
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
    async function s(t) {
      var n;
      if (o("WAWebChatAssignmentUtils").canAssignChats()) {
        var a = o("WAWebUserUtils")
            .getMeDevicePnOrThrow_DO_NOT_USE()
            .getDeviceId(),
          i = t.id,
          l =
            (n = o("WAWebAgentCollection").AgentCollection.getByDeviceId(a)) ==
            null
              ? void 0
              : n.id;
        if (l != null) {
          var s = [{ chatId: i, agentId: l }],
            u = s.map(function (e) {
              var t = e.chatId.toString({ legacy: !0 });
              return {
                id: t + "_" + l,
                chatId: t,
                agentId: l,
                chatOpenedByAgent: !0,
              };
            });
          await o("WAWebSyncdCoreApi").lockForSync(
            ["chat-assignment"],
            await r(
              "WAWebChatAssignmentOpenedStatusSync",
            ).createChatOpenedMutations(u),
            function () {
              return e(u);
            },
          );
        }
      }
    }
    ((l.updateLocalOpenedState = e), (l.markChatAsOpened = s));
  },
  98,
);
