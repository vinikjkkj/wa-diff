__d(
  "WAWebSendClearChatAction",
  [
    "fbt",
    "Promise",
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
    "WAWebStateUtils",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react"));
    function m(e, t) {
      return p(o("WAWebStateUtils").unproxy(e), t);
    }
    function p(t, a) {
      var i = new AbortController(),
        l = i.signal,
        c = new (o("WAWebActionToast.react").ActionType)(
          s._(/*BTDS*/ "Clearing chat"),
          {
            actionText: s._(/*BTDS*/ "Undo"),
            actionHandler: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  (i.abort(),
                    o("WAWebToastManager").ToastManager.open(
                      d.jsx(o("WAWebActionToast.react").ActionToast, {
                        initialAction: new (o(
                          "WAWebActionToast.react",
                        ).ActionType)(s._(/*BTDS*/ "Chat clear cancelled")),
                        pendingAction: (u || (u = n("Promise"))).resolve(null),
                      }),
                    ));
                },
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          },
        ),
        m = o("WAPromiseDelays")
          .delayMs(
            o("WAWebActionListenerHelpers").MESSAGE_DELETE_DELAY_DURATION,
          )
          .then(function () {
            if (l.aborted) throw new (o("WAAbortError").AbortError)();
            var e = o("WAWebClearChatUtils").initClearChat(t, a);
            return e.then(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                ((t.endOfHistoryTransferType =
                  o(
                    "WAWebChatConstants",
                  ).ConversationEndOfHistoryTransferModelPropType.COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY),
                  yield o("WAWebClearChatUtils").finalizeClearChat(t, e));
              }),
            );
          })
          .then(function () {
            return new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Chat cleared"),
            );
          })
          .catch(o("WAAbortError").catchAbort(o("WAWebNullFunc").returnNull))
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (e) {
                if (e.status >= 400)
                  return new (o("WAWebActionToast.react").ActionType)(
                    s._(/*BTDS*/ "Couldn't clear chat."),
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
              new (o("WAWebActionToast.react").ActionType)(
                s._(/*BTDS*/ "Couldn't clear chat."),
                {
                  actionText: s._(/*BTDS*/ "Try again."),
                  actionHandler: (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* () {
                        yield p(t, a);
                      },
                    );
                    function r() {
                      return e.apply(this, arguments);
                    }
                    return r;
                  })(),
                },
              )
            );
          });
      return (
        o("WAWebToastManager").ToastManager.open(
          d.jsx(o("WAWebActionToast.react").ActionToast, {
            initialAction: c,
            pendingAction: m,
          }),
        ),
        m.then(r("WAWebNoop"))
      );
    }
    l.sendClear = m;
  },
  226,
);
