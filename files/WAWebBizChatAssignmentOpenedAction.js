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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e.forEach(function (e) {
            var t = e.chatOpenedByAgent,
              n = e.id,
              r = o(
                "WAWebChatAssignmentCollection",
              ).ChatAssignmentCollection.get(n);
            r && r.set("chatOpenedByAgent", t);
          });
          var t = o("WAWebSchemaChatAssignment").getChatAssignmentTable();
          yield t.bulkCreateOrMerge(e);
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n;
          if (o("WAWebChatAssignmentUtils").canAssignChats()) {
            var a = o("WAWebUserPrefsMeUser")
                .getMeDevicePnOrThrow_DO_NOT_USE()
                .getDeviceId(),
              i = t.id,
              l =
                (n = o("WAWebAgentCollection").AgentCollection.getByDeviceId(
                  a,
                )) == null
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
              yield o("WAWebSyncdCoreApi").lockForSync(
                ["chat-assignment"],
                yield r(
                  "WAWebChatAssignmentOpenedStatusSync",
                ).createChatOpenedMutations(u),
                function () {
                  return e(u);
                },
              );
            }
          }
        })),
        c.apply(this, arguments)
      );
    }
    ((l.updateLocalOpenedState = e), (l.markChatAsOpened = u));
  },
  98,
);
