__d(
  "WAWebChatAssignmentBridgeApi",
  [
    "WAWebBizChatAssignmentAction",
    "WAWebChatAssignmentCollection",
    "WAWebChatAssignmentGatingUtils",
    "WAWebSchemaChatAssignment",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      checkOrphanAssignments: function () {
        o("WAWebBizChatAssignmentAction").checkOrphanAssignments();
      },
      restoreChatAssignments: async function () {
        if (o("WAWebChatAssignmentGatingUtils").chatAssignmentEnabled()) {
          var e = await o("WAWebSchemaChatAssignment")
            .getChatAssignmentTable()
            .all();
          o(
            "WAWebChatAssignmentCollection",
          ).ChatAssignmentCollection.initializeFromCache(e);
        }
      },
      removeChatAssignmentsFromCollection: function (t) {
        var e = t.assignmentIds;
        o("WAWebChatAssignmentCollection").ChatAssignmentCollection.remove(e);
      },
    };
    l.ChatAssignmentBridgeApi = e;
  },
  98,
);
