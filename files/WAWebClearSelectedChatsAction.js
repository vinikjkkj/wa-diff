__d(
  "WAWebClearSelectedChatsAction",
  [
    "fbt",
    "WAWebBulkChatAction",
    "WAWebChatGetters",
    "WAWebClearChatUtils",
    "WAWebWamChatActionEventsLogger",
    "WAWebWamChatPSALogger",
    "WAWebWamEnumChatActionEntryPoint",
    "WAWebWamEnumChatActionType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = t.keepStarred,
            a = t.entryPoint,
            i =
              a === void 0
                ? o("WAWebWamEnumChatActionEntryPoint").CHAT_ACTION_ENTRY_POINT
                    .CONVERSATION_LIST_BULK_EDIT
                : a,
            l = Array.from(new Set(e));
          return (
            l.forEach(function (e) {
              if (o("WAWebChatGetters").getIsPSA(e)) {
                var t = e.msgs.last();
                o("WAWebWamChatPSALogger").logChatPSARemove(t, 5, 14);
              }
            }),
            o("WAWebBulkChatAction").runBulkChatAction(l, {
              operation: (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = o("WAWebClearChatUtils").initClearChat(e, r),
                      n = o("WAWebClearChatUtils").finalizeClearChat(e, t);
                    return (
                      e.addPendingAction(n),
                      yield n,
                      o("WAWebWamChatActionEventsLogger").logChatActionEvent({
                        chatActionEntryPoint: i,
                        chatActionType: o("WAWebWamEnumChatActionType")
                          .CHAT_ACTION_TYPE.CLEAR,
                      }),
                      !0
                    );
                  },
                );
                function t(t) {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
              successToast: function (t) {
                return s._(
                  /*BTDS*/ '_j{"*":"{number} selected chats cleared","_1":"1 selected chat cleared"}',
                  [s._plural(t, "number")],
                );
              },
              failureToast: function (t) {
                return s._(
                  /*BTDS*/ '_j{"*":"{number} selected chats couldn\'t be cleared","_1":"1 selected chat couldn\'t be cleared"}',
                  [s._plural(t, "number")],
                );
              },
              itemFailedLogTag: "clear-selected-chats-item-failed",
              partialFailureLogTag: "clear-selected-chats-partial-failure",
            })
          );
        })),
        u.apply(this, arguments)
      );
    }
    l.clearSelectedChats = e;
  },
  226,
);
