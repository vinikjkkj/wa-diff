__d(
  "WAWebSendUnstarAllChatAction",
  [
    "fbt",
    "WAFilteredCatch",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebBackendErrors",
    "WAWebChatCollection",
    "WAWebChatSendStarMsgsBridge",
    "WAWebStarredMsgCollection",
    "WAWebStateUtils",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(e, t) {
      return m(e, t && o("WAWebStateUtils").unproxy(t));
    }
    function m(t, n) {
      var r = n ? n.promises : o("WAWebChatCollection").ChatCollection.promises,
        a = n ? n.id : void 0;
      if (r.sendUnstarAll) return r.sendUnstarAll;
      var i = (r.sendUnstarAll = o("WAWebChatSendStarMsgsBridge").sendUnstarAll(
          t,
          a,
        )),
        l = new (o("WAWebActionToast.react").ActionType)(
          s._(/*BTDS*/ "Unstarring all messages"),
        ),
        u = i
          .then(function () {
            return new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "All messages unstarred"),
            );
          })
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (e) {
                if (e.statusCode >= 400)
                  return new (o("WAWebActionToast.react").ActionType)(
                    s._(/*BTDS*/ "Couldn't unstar all messages"),
                  );
              },
            ),
          )
          .catch(function (r) {
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "models:chat:sendUnstarAll dropped",
                  ])),
              ),
              new (o("WAWebActionToast.react").ActionType)(
                s._(/*BTDS*/ "Couldn't unstar all messages"),
                {
                  actionText: s._(/*BTDS*/ "Try again."),
                  actionHandler: function () {
                    return m(t, n);
                  },
                },
              )
            );
          });
      return (
        o("WAWebToastManager").ToastManager.open(
          c.jsx(o("WAWebActionToast.react").ActionToast, {
            initialAction: l,
            pendingAction: u,
          }),
        ),
        i
          .then(function () {
            (t.forEach(function (e) {
              e.set("star", !1);
            }),
              n
                ? o("WAWebStarredMsgCollection").removeStarredMsgs(t)
                : (o(
                    "WAWebStarredMsgCollection",
                  ).AllStarredMsgsCollection.reset(),
                  o("WAWebChatCollection").ChatCollection.forEach(function (e) {
                    e.starredMsgs && e.starredMsgs.reset();
                  })));
          })
          .finally(function () {
            r.sendUnstarAll = null;
          })
      );
    }
    l.unstarAllMessages = d;
  },
  226,
);
