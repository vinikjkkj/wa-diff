__d(
  "WAWebClearSelectedChatsAction",
  [
    "fbt",
    "WALogger",
    "WAPromiseEach",
    "WAWebActionToast.react",
    "WAWebChatGetters",
    "WAWebClearChatUtils",
    "WAWebToastManager",
    "WAWebWamChatActionEventsLogger",
    "WAWebWamChatPSALogger",
    "WAWebWamEnumChatActionEntryPoint",
    "WAWebWamEnumChatActionType",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react"));
    async function m(t, n) {
      var r = n.keepStarred,
        a = n.entryPoint,
        i =
          a === void 0
            ? o("WAWebWamEnumChatActionEntryPoint").CHAT_ACTION_ENTRY_POINT
                .CONVERSATION_LIST_BULK_EDIT
            : a;
      t.forEach(function (e) {
        if (
          (e.set({ createdLocally: !1 }), o("WAWebChatGetters").getIsPSA(e))
        ) {
          var t = e.msgs.last();
          o("WAWebWamChatPSALogger").logChatPSARemove(t, 5, 14);
        }
      });
      var l = await o("WAPromiseEach").promiseEach(t, async function (t) {
          try {
            var n = o("WAWebClearChatUtils").initClearChat(t, r),
              a = o("WAWebClearChatUtils").finalizeClearChat(t, n);
            return (
              t.addPendingAction(a),
              await a,
              o("WAWebWamChatActionEventsLogger").logChatActionEvent({
                chatActionEntryPoint: i,
                chatActionType: o("WAWebWamEnumChatActionType").CHAT_ACTION_TYPE
                  .CLEAR,
              }),
              { chat: t, success: !0 }
            );
          } catch (n) {
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Error clearing chat - ",
                    "",
                  ])),
                String(n),
              ),
              { chat: t, success: !1, error: n }
            );
          }
        }),
        s = [],
        c = [];
      return (
        l.forEach(function (e) {
          e.success ? s.push(e.chat) : c.push({ chat: e.chat, error: e.error });
        }),
        s.length > 0 && p(s.length),
        c.length > 0 &&
          (_(c.length),
          o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to clear ",
                " out of ",
                " chats",
              ])),
            c.length,
            t.length,
          )),
        { successes: s, failures: c }
      );
    }
    function p(e) {
      var t = s._(
          /*BTDS*/ '_j{"*":"{number} selected chats cleared","_1":"1 selected chat cleared"}',
          [s._plural(e, "number")],
        ),
        n = new (o("WAWebActionToast.react").ActionType)(t),
        r = Promise.resolve(n);
      o("WAWebToastManager").ToastManager.open(
        d.jsx(o("WAWebActionToast.react").ActionToast, {
          initialAction: n,
          pendingAction: r,
        }),
      );
    }
    function _(e) {
      var t = s._(
          /*BTDS*/ '_j{"*":"{number} selected chats couldn\'t be cleared","_1":"1 selected chat couldn\'t be cleared"}',
          [s._plural(e, "number")],
        ),
        n = new (o("WAWebActionToast.react").ActionType)(t),
        r = Promise.resolve(n);
      o("WAWebToastManager").ToastManager.open(
        d.jsx(o("WAWebActionToast.react").ActionToast, {
          initialAction: n,
          pendingAction: r,
        }),
      );
    }
    l.clearSelectedChats = m;
  },
  226,
);
