__d(
  "WAWebDeleteSelectedChatsAction",
  [
    "fbt",
    "WAWebBulkChatAction",
    "WAWebDeleteChatAction",
    "WAWebNoop",
    "WAWebWamChatActionEventsLogger",
    "WAWebWamEnumChatActionEntryPoint",
    "WAWebWamEnumChatActionType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      var a = t.entryPoint,
        i =
          a === void 0
            ? o("WAWebWamEnumChatActionEntryPoint").CHAT_ACTION_ENTRY_POINT
                .CONVERSATION_LIST_BULK_EDIT
            : a;
      return o("WAWebBulkChatAction").runBulkChatAction(e, {
        operation: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = o("WAWebDeleteChatAction").sendDeleteWithStatus(e, !1);
            e.addPendingAction(t.then(r("WAWebNoop")));
            var n = yield t;
            return (
              n &&
                o("WAWebWamChatActionEventsLogger").logChatActionEvent({
                  chatActionEntryPoint: i,
                  chatActionType: o("WAWebWamEnumChatActionType")
                    .CHAT_ACTION_TYPE.DELETE,
                }),
              n
            );
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        successToast: function (t) {
          return s._(
            /*BTDS*/ '_j{"*":"{number} selected chats deleted","_1":"1 selected chat deleted"}',
            [s._plural(t, "number")],
          );
        },
        failureToast: function (t) {
          return s._(
            /*BTDS*/ '_j{"*":"{number} selected chats couldn\'t be deleted","_1":"1 selected chat couldn\'t be deleted"}',
            [s._plural(t, "number")],
          );
        },
        itemFailedLogTag: "delete-selected-chats-item-failed",
        partialFailureLogTag: "delete-selected-chats-partial-failure",
      });
    }
    l.deleteSelectedChats = e;
  },
  226,
);
