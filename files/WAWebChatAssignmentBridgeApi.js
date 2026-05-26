__d(
  "WAWebChatAssignmentBridgeApi",
  [
    "WAWebBizChatAssignmentAction",
    "WAWebChatAssignmentCollection",
    "WAWebChatAssignmentGatingUtils",
    "WAWebSchemaChatAssignment",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      checkOrphanAssignments: function () {
        o("WAWebBizChatAssignmentAction").checkOrphanAssignments();
      },
      restoreChatAssignments: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (o("WAWebChatAssignmentGatingUtils").chatAssignmentEnabled()) {
            var e = yield o("WAWebSchemaChatAssignment")
              .getChatAssignmentTable()
              .all();
            o(
              "WAWebChatAssignmentCollection",
            ).ChatAssignmentCollection.initializeFromCache(e);
          }
        });
        function t() {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      removeChatAssignmentsFromCollection: function (t) {
        var e = t.assignmentIds;
        o("WAWebChatAssignmentCollection").ChatAssignmentCollection.remove(e);
      },
    };
    l.ChatAssignmentBridgeApi = e;
  },
  98,
);
