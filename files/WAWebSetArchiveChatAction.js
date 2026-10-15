__d(
  "WAWebSetArchiveChatAction",
  [
    "fbt",
    "Promise",
    "WAAbortError",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebChatArchiveBridge",
    "WAWebChatGetters",
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
      return f({
        archive: t,
        chat: o("WAWebStateUtils").unproxy(e),
        showToast: n,
      });
    }
    function p(e, t) {
      return o("WAWebChatGetters").getIsNewsletter(e)
        ? t
          ? {
              inProgress: s._(/*BTDS*/ "Archiving channel"),
              done: s._(/*BTDS*/ "Channel archived"),
              failed: s._(/*BTDS*/ "Couldn't archive channel."),
            }
          : {
              inProgress: s._(/*BTDS*/ "Unarchiving channel"),
              done: s._(/*BTDS*/ "Channel unarchived"),
              failed: s._(/*BTDS*/ "Couldn't unarchive channel."),
            }
        : null;
    }
    function _(e) {
      return e
        ? s._(/*BTDS*/ "Couldn't archive chat.")
        : s._(/*BTDS*/ "Couldn't unarchive chat.");
    }
    function f(t) {
      var a,
        i,
        l = t.archive,
        c = t.chat,
        m = t.showToast,
        g = t.toastId,
        h = g === void 0 ? o("WAWebActionToast.react").genId() : g;
      if (c.archive === l)
        return (u || (u = n("Promise"))).reject(
          new (o("WAWebMiscErrors").ActionError)(),
        );
      var y = c.promises;
      if (y.setArchive) return y.setArchive.promise;
      var C = c.getLastMsgKeyForAction(),
        b = new AbortController(),
        v = b.signal,
        S = o("WAWebChatArchiveBridge").sendConversationArchive(c.id, l, C),
        R = p(c, l),
        L = (a = R == null ? void 0 : R.failed) != null ? a : _(l),
        E = new (o("WAWebActionToast.react").ActionType)(
          (i = R == null ? void 0 : R.inProgress) != null
            ? i
            : l
              ? s._(/*BTDS*/ "Archiving chat")
              : s._(/*BTDS*/ "Unarchiving chat"),
        ),
        k = S.then(function (e) {
          if (v.aborted) throw new (o("WAAbortError").AbortError)();
          var t;
          if (e.status === 200) {
            var n;
            return (
              (t = l
                ? s._(/*BTDS*/ "Chat archived")
                : s._(/*BTDS*/ "Chat unarchived")),
              new (o("WAWebActionToast.react").ActionType)(
                (n = R == null ? void 0 : R.done) != null ? n : t,
                {
                  actionText: s._(/*BTDS*/ "Undo"),
                  actionHandler: function () {
                    return f({
                      archive: !l,
                      chat: c,
                      showToast: m,
                      toastId: h,
                    });
                  },
                },
              )
            );
          } else if (e.status >= 400)
            return new (o("WAWebActionToast.react").ActionType)(L);
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
              new (o("WAWebActionToast.react").ActionType)(L, {
                actionText: s._(/*BTDS*/ "Try again."),
                actionHandler: function () {
                  return f({ archive: l, chat: c, showToast: m, toastId: h });
                },
              })
            );
          });
      m &&
        o("WAWebToastManager").ToastManager.open(
          d.jsx(o("WAWebActionToast.react").ActionToast, {
            id: h,
            initialAction: E,
            pendingAction: k,
          }),
        );
      var I = S.then(function (e) {
          e.status === 200 && ((c.archive = l), l && (c.pin = void 0));
        }).finally(function () {
          delete y.setArchive;
        }),
        T = { promise: I, abortController: b, archive: l };
      return ((y.setArchive = T), I);
    }
    l.setArchive = m;
  },
  226,
);
