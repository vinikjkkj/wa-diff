__d(
  "WAWebSetArchiveChatAction",
  [
    "fbt",
    "Promise",
    "WAAbortError",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebChatArchiveBridge",
    "WAWebMiscErrors",
    "WAWebNoop",
    "WAWebStateUtils",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react"));
    function m(e, t, n) {
      return _({
        archive: t,
        chat: o("WAWebStateUtils").unproxy(e),
        showToast: n,
      });
    }
    function p(e) {
      return e
        ? s._(/*BTDS*/ "Couldn't archive chat.")
        : s._(/*BTDS*/ "Couldn't unarchive chat.");
    }
    function _(t) {
      var a = t.archive,
        i = t.chat,
        l = t.showToast,
        c = t.toastId,
        m = c === void 0 ? o("WAWebActionToast.react").genId() : c;
      if (i.archive === a)
        return (u || (u = n("Promise"))).reject(
          new (o("WAWebMiscErrors").ActionError)(),
        );
      var f = i.promises;
      if (f.setArchive) return f.setArchive.promise;
      var g = i.getLastMsgKeyForAction(),
        h = new AbortController(),
        y = h.signal,
        C = o("WAWebChatArchiveBridge").sendConversationArchive(i.id, a, g),
        b = a
          ? new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Archiving chat"),
            )
          : new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Unarchiving chat"),
            ),
        v = C.then(function (e) {
          if (y.aborted) throw new (o("WAAbortError").AbortError)();
          var t;
          if (e.status === 200)
            return (
              (t = a
                ? s._(/*BTDS*/ "Chat archived")
                : s._(/*BTDS*/ "Chat unarchived")),
              new (o("WAWebActionToast.react").ActionType)(t, {
                actionText: s._(/*BTDS*/ "Undo"),
                actionHandler: function () {
                  return _({ archive: !a, chat: i, showToast: l, toastId: m });
                },
              })
            );
          if (e.status >= 400)
            return new (o("WAWebActionToast.react").ActionType)(p(a));
        })
          .catch(o("WAAbortError").catchAbort(r("WAWebNoop")))
          .catch(function (t) {
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "models:chat:setArchive dropped",
                  ])),
              ),
              new (o("WAWebActionToast.react").ActionType)(p(a), {
                actionText: s._(/*BTDS*/ "Try again."),
                actionHandler: function () {
                  return _({ archive: a, chat: i, showToast: l, toastId: m });
                },
              })
            );
          });
      l &&
        o("WAWebToastManager").ToastManager.open(
          d.jsx(o("WAWebActionToast.react").ActionToast, {
            id: m,
            initialAction: b,
            pendingAction: v,
          }),
        );
      var S = C.then(function (e) {
          e.status === 200 && ((i.archive = a), a && (i.pin = void 0));
        }).finally(function () {
          delete f.setArchive;
        }),
        R = { promise: S, abortController: h, archive: a };
      return ((f.setArchive = R), S);
    }
    l.setArchive = m;
  },
  226,
);
