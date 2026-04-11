__d(
  "WAWebClearSelectedChatsAction",
  [
    "fbt",
    "Promise",
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
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = d || (d = o("react"));
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = r.keepStarred,
            i = r.entryPoint,
            l =
              i === void 0
                ? o("WAWebWamEnumChatActionEntryPoint").CHAT_ACTION_ENTRY_POINT
                    .CONVERSATION_LIST_BULK_EDIT
                : i;
          t.forEach(function (e) {
            if (
              (e.set({ createdLocally: !1 }), o("WAWebChatGetters").getIsPSA(e))
            ) {
              var t = e.msgs.last();
              o("WAWebWamChatPSALogger").logChatPSARemove(t, 5, 14);
            }
          });
          var s = yield o("WAPromiseEach").promiseEach(
              t,
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    try {
                      var n = o("WAWebClearChatUtils").initClearChat(t, a),
                        r = o("WAWebClearChatUtils").finalizeClearChat(t, n);
                      return (
                        t.addPendingAction(r),
                        yield r,
                        o("WAWebWamChatActionEventsLogger").logChatActionEvent({
                          chatActionEntryPoint: l,
                          chatActionType: o("WAWebWamEnumChatActionType")
                            .CHAT_ACTION_TYPE.CLEAR,
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
                  },
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            ),
            c = [],
            d = [];
          return (
            s.forEach(function (e) {
              e.success
                ? c.push(e.chat)
                : d.push({ chat: e.chat, error: e.error });
            }),
            c.length > 0 && f(c.length),
            d.length > 0 &&
              (g(d.length),
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to clear ",
                    " out of ",
                    " chats",
                  ])),
                d.length,
                t.length,
              )),
            { successes: c, failures: d }
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      var t = s._(
          /*BTDS*/ '_j{"*":"{number} selected chats cleared","_1":"1 selected chat cleared"}',
          [s._plural(e, "number")],
        ),
        r = new (o("WAWebActionToast.react").ActionType)(t),
        a = (c || (c = n("Promise"))).resolve(r);
      o("WAWebToastManager").ToastManager.open(
        m.jsx(o("WAWebActionToast.react").ActionToast, {
          initialAction: r,
          pendingAction: a,
        }),
      );
    }
    function g(e) {
      var t = s._(
          /*BTDS*/ '_j{"*":"{number} selected chats couldn\'t be cleared","_1":"1 selected chat couldn\'t be cleared"}',
          [s._plural(e, "number")],
        ),
        r = new (o("WAWebActionToast.react").ActionType)(t),
        a = (c || (c = n("Promise"))).resolve(r);
      o("WAWebToastManager").ToastManager.open(
        m.jsx(o("WAWebActionToast.react").ActionToast, {
          initialAction: r,
          pendingAction: a,
        }),
      );
    }
    l.clearSelectedChats = p;
  },
  226,
);
