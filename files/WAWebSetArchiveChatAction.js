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
      return _(o("WAWebStateUtils").unproxy(e), t, n);
    }
    function p(e) {
      return e
        ? s._(/*BTDS*/ "Couldn't archive chat.")
        : s._(/*BTDS*/ "Couldn't unarchive chat.");
    }
    function _(t, a, i, l) {
      if (
        (l === void 0 && (l = o("WAWebActionToast.react").genId()),
        t.archive === a)
      )
        return (u || (u = n("Promise"))).reject(
          new (o("WAWebMiscErrors").ActionError)(),
        );
      var c = t.promises;
      if (c.setArchive) return c.setArchive.promise;
      var m = t.getLastMsgKeyForAction(),
        f = new AbortController(),
        g = f.signal,
        h = o("WAWebChatArchiveBridge").sendConversationArchive(t.id, a, m),
        y = a
          ? new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Archiving chat"),
            )
          : new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Unarchiving chat"),
            ),
        C = h
          .then(function (e) {
            if (g.aborted) throw new (o("WAAbortError").AbortError)();
            var n;
            if (e.status === 200)
              return (
                (n = a
                  ? s._(/*BTDS*/ "Chat archived")
                  : s._(/*BTDS*/ "Chat unarchived")),
                new (o("WAWebActionToast.react").ActionType)(n, {
                  actionText: s._(/*BTDS*/ "Undo"),
                  actionHandler: function () {
                    return _(t, !a, i, l);
                  },
                })
              );
            if (e.status >= 400)
              return new (o("WAWebActionToast.react").ActionType)(p(a));
          })
          .catch(o("WAAbortError").catchAbort(r("WAWebNoop")))
          .catch(function (n) {
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
                  return _(t, a, i, l);
                },
              })
            );
          });
      i &&
        o("WAWebToastManager").ToastManager.open(
          d.jsx(o("WAWebActionToast.react").ActionToast, {
            id: l,
            initialAction: y,
            pendingAction: C,
          }),
        );
      var b = h
          .then(function (e) {
            e.status === 200 && ((t.archive = a), a && (t.pin = void 0));
          })
          .finally(function () {
            delete c.setArchive;
          }),
        v = { promise: b, abortController: f, archive: a };
      return ((c.setArchive = v), b);
    }
    l.setArchive = m;
  },
  226,
);
