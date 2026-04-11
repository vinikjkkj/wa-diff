__d(
  "WAWebExitGroupAction",
  [
    "fbt",
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebApiContact",
    "WAWebBackendErrors",
    "WAWebBoolFunc",
    "WAWebChatGetters",
    "WAWebGroupExitJob",
    "WAWebInvalidateEventsAction",
    "WAWebMiscErrors",
    "WAWebPollsInvalidateChatPollMsgsAction",
    "WAWebSchemaChat",
    "WAWebStateUtils",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
    "err",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = d || (d = o("react"));
    function p(e) {
      return _(o("WAWebStateUtils").unproxy(e));
    }
    function _(t) {
      var r = t.promises;
      if (!o("WAWebChatGetters").getIsGroup(t))
        return (c || (c = n("Promise"))).reject(
          new (o("WAWebMiscErrors").ActionError)(),
        );
      if (r.sendExit) return r.sendExit;
      var a = (r.sendExit = o("WAWebGroupExitJob")
          .leaveGroup(t.id)
          .then(function (e) {
            if (e.code !== 200)
              throw new (o("WAWebBackendErrors").ServerStatusCodeError)(e.code);
          })),
        i = new (o("WAWebActionToast.react").ActionType)(
          s._(/*BTDS*/ "Exiting group"),
        ),
        l = a
          .then(function () {
            return new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Exited group"),
            );
          })
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (e) {
                if (e.status >= 400)
                  return new (o("WAWebActionToast.react").ActionType)(
                    s._(/*BTDS*/ "Couldn't exit group."),
                  );
              },
            ),
          )
          .catch(function (n) {
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "actions:chat:sendExit dropped",
                  ])),
              ),
              new (o("WAWebActionToast.react").ActionType)(
                s._(/*BTDS*/ "Couldn't exit group."),
                {
                  actionText: s._(/*BTDS*/ "Try again."),
                  actionHandler: function () {
                    return _(t);
                  },
                },
              )
            );
          });
      return (
        o("WAWebToastManager").ToastManager.open(
          m.jsx(o("WAWebActionToast.react").ActionToast, {
            initialAction: i,
            pendingAction: l,
          }),
        ),
        a
          .then(function () {
            return f(t);
          })
          .finally(function () {
            r.sendExit = null;
          })
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              o("WAWebBoolFunc").returnFalse,
            ),
          )
      );
    }
    function f(e) {
      var t;
      if (!o("WAWebChatGetters").getIsGroup(e))
        return (c || (c = n("Promise"))).resolve(!0);
      var a = o("WAWebUserPrefsMeUser").getMeUser(),
        i = o("WAWebApiContact").getAlternateUserWid(a);
      if (
        ((t = e.groupMetadata) == null || t.participants.remove(a), i != null)
      ) {
        var l;
        (l = e.groupMetadata) == null || l.participants.remove(i);
      }
      return o("WAWebSchemaChat")
        .getChatTable()
        .merge(e.id.toString(), { isReadOnly: !0 })
        .then(function () {
          return (
            (e.isReadOnly = !0),
            o("WAWebPollsInvalidateChatPollMsgsAction").invalidateChatPollMsgs(
              e,
            ),
            o("WAWebInvalidateEventsAction").invalidateEventMsgsForChat(e),
            !0
          );
        })
        .catch(function (e) {
          throw (
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "failed to merge chat table",
                  ])),
              )
              .verbose()
              .sendLogs("failed to merge chat table when exiting group: " + e),
            r("err")("failed to merge chat table")
          );
        });
    }
    l.sendExitGroup = p;
  },
  226,
);
