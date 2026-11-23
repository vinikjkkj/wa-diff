__d(
  "WAWebDeleteSelectedChatsAction",
  [
    "fbt",
    "WAWebBulkChatAction",
    "WAWebDeleteChatAction",
    "WAWebMetaAiChatActionLogger",
    "WAWebNoop",
    "WAWebQbmThreadLevelActionLogEventLazy",
    "WAWebWamChatActionEventsLogger",
    "WAWebWamEnumChatActionEntryPoint",
    "WAWebWamEnumChatActionType",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      var n = t.entryPoint,
        a =
          n === void 0
            ? o("WAWebWamEnumChatActionEntryPoint").CHAT_ACTION_ENTRY_POINT
                .CONVERSATION_LIST_BULK_EDIT
            : n;
      return o("WAWebBulkChatAction").runBulkChatAction(e, {
        operation: async function (t) {
          o("WAWebQbmThreadLevelActionLogEventLazy").logBulkThreadAction(
            t,
            "DELETE",
          );
          var e = o(
              "WAWebMetaAiChatActionLogger",
            ).captureMetaAiChatActionFields(t.id),
            n = o("WAWebDeleteChatAction").sendDeleteWithStatus(t, !1);
          t.addPendingAction(n.then(r("WAWebNoop")));
          var i = await n;
          if (i) {
            var l = await e.resolve();
            l != null &&
              o("WAWebWamChatActionEventsLogger").logChatActionEvent(
                babelHelpers.extends(
                  {
                    chatActionEntryPoint: a,
                    chatActionType: o("WAWebWamEnumChatActionType")
                      .CHAT_ACTION_TYPE.DELETE,
                  },
                  l,
                ),
              );
          }
          return i;
        },
        successToast: function (t) {
          return s._(/*BTDS*/ "", [s._plural(t, "number")]);
        },
        failureToast: function (t) {
          return s._(/*BTDS*/ "", [s._plural(t, "number")]);
        },
        itemFailedLogTag: "delete-selected-chats-item-failed",
        partialFailureLogTag: "delete-selected-chats-partial-failure",
      });
    }
    l.deleteSelectedChats = e;
  },
  226,
);
