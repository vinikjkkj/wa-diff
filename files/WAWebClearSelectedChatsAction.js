__d(
  "WAWebClearSelectedChatsAction",
  [
    "fbt",
    "WAWebBulkChatAction",
    "WAWebChatGetters",
    "WAWebClearChatUtils",
    "WAWebMetaAiChatActionLogger",
    "WAWebQbmThreadLevelActionLogEventLazy",
    "WAWebWamChatActionEventsLogger",
    "WAWebWamChatPSALogger",
    "WAWebWamEnumChatActionEntryPoint",
    "WAWebWamEnumChatActionType",
  ],
  function (t, n, r, o, a, i, l, s) {
    async function e(e, t) {
      var n = t.keepStarred,
        r = t.entryPoint,
        a =
          r === void 0
            ? o("WAWebWamEnumChatActionEntryPoint").CHAT_ACTION_ENTRY_POINT
                .CONVERSATION_LIST_BULK_EDIT
            : r,
        i = Array.from(new Set(e));
      return (
        i.forEach(function (e) {
          if (o("WAWebChatGetters").getIsPSA(e)) {
            var t = e.msgs.last();
            o("WAWebWamChatPSALogger").logChatPSARemove(t, 5, 14);
          }
        }),
        o("WAWebBulkChatAction").runBulkChatAction(i, {
          operation: async function (t) {
            o("WAWebQbmThreadLevelActionLogEventLazy").logBulkThreadAction(
              t,
              "CLEAR",
            );
            var e = o(
                "WAWebMetaAiChatActionLogger",
              ).captureMetaAiChatActionFields(t.id),
              r = t.unreadCount,
              i = o("WAWebClearChatUtils").initClearChat(t, n),
              l = o("WAWebClearChatUtils").finalizeClearChat(t, i, r);
            (t.addPendingAction(l), await l);
            var s = await e.resolve();
            return (
              s != null &&
                o("WAWebWamChatActionEventsLogger").logChatActionEvent(
                  babelHelpers.extends(
                    {
                      chatActionEntryPoint: a,
                      chatActionType: o("WAWebWamEnumChatActionType")
                        .CHAT_ACTION_TYPE.CLEAR,
                    },
                    s,
                  ),
                ),
              !0
            );
          },
          successToast: function (t) {
            return s._(/*BTDS*/ "", [s._plural(t, "number")]);
          },
          failureToast: function (t) {
            return s._(/*BTDS*/ "", [s._plural(t, "number")]);
          },
          itemFailedLogTag: "clear-selected-chats-item-failed",
          partialFailureLogTag: "clear-selected-chats-partial-failure",
        })
      );
    }
    l.clearSelectedChats = e;
  },
  226,
);
