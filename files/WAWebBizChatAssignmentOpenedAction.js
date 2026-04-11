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
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a;
          if (o("WAWebChatAssignmentUtils").canAssignChats()) {
            var i = o("WAWebUserPrefsMeUser")
                .getMeDevicePnOrThrow_DO_NOT_USE()
                .getDeviceId(),
              l = t.id,
              s =
                (a = o("WAWebAgentCollection").AgentCollection.getByDeviceId(
                  i,
                )) == null
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
              yield o("WAWebSyncdCoreApi").lockForSync(
                ["chat-assignment"],
                yield r(
                  "WAWebChatAssignmentOpenedStatusSync",
                ).createChatOpenedMutations(c),
                function () {
                  return e(c);
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
