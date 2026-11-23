__d(
  "WAWebSendClearChatAction",
  [
    "fbt",
    "WAAbortError",
    "WAFilteredCatch",
    "WALogger",
    "WAPromiseDelays",
    "WAWebActionListenerHelpers",
    "WAWebActionToast.react",
    "WAWebBackendErrors",
    "WAWebChatConstants",
    "WAWebClearChatUtils",
    "WAWebNoop",
    "WAWebNullFunc",
    "WAWebQbmThreadLevelActionLogEventLazy",
    "WAWebStateUtils",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(e, t) {
      return m(o("WAWebStateUtils").unproxy(e), t);
    }
    function m(t, n) {
      var a = new AbortController(),
        i = a.signal,
        l = new (o("WAWebActionToast.react").ActionType)(s._(/*BTDS*/ ""), {
          actionText: s._(/*BTDS*/ ""),
          actionHandler: async function () {
            (a.abort(),
              o("WAWebToastManager").ToastManager.open(
                c.jsx(o("WAWebActionToast.react").ActionToast, {
                  initialAction: new (o("WAWebActionToast.react").ActionType)(
                    s._(/*BTDS*/ ""),
                  ),
                  pendingAction: Promise.resolve(null),
                }),
              ));
          },
        }),
        u = o("WAPromiseDelays")
          .delayMs(
            o("WAWebActionListenerHelpers").MESSAGE_DELETE_DELAY_DURATION,
          )
          .then(function () {
            if (i.aborted) throw new (o("WAAbortError").AbortError)();
            o("WAWebQbmThreadLevelActionLogEventLazy").logQbmThreadLevelAction({
              chat: t,
              threadActionEntryPoint: "OTHER",
              threadLevelAction: "CLEAR",
            });
            var e = t.unreadCount,
              r = o("WAWebClearChatUtils").initClearChat(t, n);
            return r.then(async function () {
              ((t.endOfHistoryTransferType =
                o(
                  "WAWebChatConstants",
                ).ConversationEndOfHistoryTransferModelPropType.COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY),
                await o("WAWebClearChatUtils").finalizeClearChat(t, r, e));
            });
          })
          .then(function () {
            return new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ ""),
            );
          })
          .catch(o("WAAbortError").catchAbort(o("WAWebNullFunc").returnNull))
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (e) {
                if (e.status >= 400)
                  return new (o("WAWebActionToast.react").ActionType)(
                    s._(/*BTDS*/ ""),
                  );
              },
            ),
          )
          .catch(function (r) {
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "models:chat:sendClear dropped",
                  ])),
              ),
              new (o("WAWebActionToast.react").ActionType)(s._(/*BTDS*/ ""), {
                actionText: s._(/*BTDS*/ ""),
                actionHandler: async function () {
                  await m(t, n);
                },
              })
            );
          });
      return (
        o("WAWebToastManager").ToastManager.open(
          c.jsx(o("WAWebActionToast.react").ActionToast, {
            initialAction: l,
            pendingAction: u,
          }),
        ),
        u.then(r("WAWebNoop"))
      );
    }
    l.sendClear = d;
  },
  226,
);
