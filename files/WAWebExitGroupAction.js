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
      return f(o("WAWebStateUtils").unproxy(e), !0).catch(
        o("WAFilteredCatch").filteredCatch(
          o("WAWebBackendErrors").ServerStatusCodeError,
          o("WAWebBoolFunc").returnFalse,
        ),
      );
    }
    function _(e) {
      return f(o("WAWebStateUtils").unproxy(e), !1);
    }
    function f(e, t) {
      var r = e.promises;
      if (!o("WAWebChatGetters").getIsGroup(e))
        return (c || (c = n("Promise"))).reject(
          new (o("WAWebMiscErrors").ActionError)(),
        );
      if (r.sendExit) return r.sendExit;
      var a = (r.sendExit = o("WAWebGroupExitJob")
        .leaveGroup(e.id)
        .then(function (e) {
          if (e.code !== 200)
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(e.code);
        }));
      return (
        t && g(e, a),
        a
          .then(function () {
            return h(e);
          })
          .finally(function () {
            r.sendExit = null;
          })
      );
    }
    function g(t, n) {
      var r = new (o("WAWebActionToast.react").ActionType)(
          s._(/*BTDS*/ "Exiting group"),
        ),
        a = n
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
                    return p(t);
                  },
                },
              )
            );
          });
      o("WAWebToastManager").ToastManager.open(
        m.jsx(o("WAWebActionToast.react").ActionToast, {
          initialAction: r,
          pendingAction: a,
        }),
      );
    }
    function h(e) {
      var t;
      if (!o("WAWebChatGetters").getIsGroup(e))
        return (c || (c = n("Promise"))).resolve(!0);
      var a = o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
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
              .sendLogs(
                "failed to merge chat table when exiting group: " + String(e),
              ),
            r("err")("failed to merge chat table")
          );
        });
    }
    ((l.sendExitGroup = p), (l.sendExitGroupWithoutToast = _));
  },
  226,
);
