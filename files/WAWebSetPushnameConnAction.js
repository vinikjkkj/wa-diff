__d(
  "WAWebSetPushnameConnAction",
  [
    "fbt",
    "WAFilteredCatch",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebBackendErrors",
    "WAWebConnModel",
    "WAWebPushNameBridge",
    "WAWebSetPushnameLocallyAction",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(e, t) {
      return m(e, t);
    }
    async function m(t, n, a, i) {
      (a === void 0 && (a = o("WAWebActionToast.react").genId()),
        i === void 0 && (i = !1));
      var l = r("WAWebPushNameBridge")(t),
        u = new (o("WAWebActionToast.react").ActionType)(
          s._(/*BTDS*/ "Changing your name"),
        ),
        d = o("WAWebConnModel").Conn.pushname,
        p = l
          .then(function () {
            var e;
            return (
              !i &&
                d != null &&
                (e = {
                  actionText: s._(/*BTDS*/ "Undo"),
                  actionHandler: function () {
                    return m(d, n, a, !0);
                  },
                }),
              new (o("WAWebActionToast.react").ActionType)(
                s._(/*BTDS*/ "Your name changed"),
                e,
              )
            );
          })
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (e) {
                if (e.status >= 400)
                  return new (o("WAWebActionToast.react").ActionType)(
                    s._(/*BTDS*/ "Couldn't change your name."),
                  );
              },
            ),
          )
          .catch(function (t) {
            throw (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "models:conn:setPushname dropped",
                  ])),
              ),
              new (o("WAWebActionToast.react").ActionType)(
                s._(/*BTDS*/ "Couldn't change your name."),
                {
                  actionText: s._(/*BTDS*/ "Try again."),
                  actionHandler: function () {
                    return m(t.status, n, a);
                  },
                },
              )
            );
          });
      (o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebActionToast.react").ActionToast, {
          id: a,
          initialAction: u,
          onDismiss: n,
          pendingAction: p,
        }),
      ),
        await l,
        o("WAWebSetPushnameLocallyAction").setPushnameLocally(t));
    }
    l.setPushname = d;
  },
  226,
);
