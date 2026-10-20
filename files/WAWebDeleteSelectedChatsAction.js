__d(
  "WAWebDeleteSelectedChatsAction",
  [
    "fbt",
    "WAWebBulkChatAction",
    "WAWebDeleteChatAction",
    "WAWebMetaAiChatActionLogger",
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
            var t = o(
                "WAWebMetaAiChatActionLogger",
              ).captureMetaAiChatActionFields(e.id),
              n = o("WAWebDeleteChatAction").sendDeleteWithStatus(e, !1);
            e.addPendingAction(n.then(r("WAWebNoop")));
            var a = yield n;
            if (a) {
              var l = yield t.resolve();
              l != null &&
                o("WAWebWamChatActionEventsLogger").logChatActionEvent(
                  babelHelpers.extends(
                    {
                      chatActionEntryPoint: i,
                      chatActionType: o("WAWebWamEnumChatActionType")
                        .CHAT_ACTION_TYPE.DELETE,
                    },
                    l,
                  ),
                );
            }
            return a;
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
