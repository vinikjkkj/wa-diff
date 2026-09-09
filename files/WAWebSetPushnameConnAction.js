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
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(e, t) {
      return m({ onDismiss: t, pushname: e });
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.isUndoAction,
            a = n === void 0 ? !1 : n,
            i = t.onDismiss,
            l = t.pushname,
            u = t.toastId,
            d = u === void 0 ? o("WAWebActionToast.react").genId() : u,
            p = r("WAWebPushNameBridge")(l),
            _ = new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Changing your name"),
            ),
            f = o("WAWebConnModel").Conn.pushname,
            g = p
              .then(function () {
                var e;
                return (
                  !a &&
                    f != null &&
                    (e = {
                      actionText: s._(/*BTDS*/ "Undo"),
                      actionHandler: function () {
                        return m({
                          isUndoAction: !0,
                          onDismiss: i,
                          pushname: f,
                          toastId: d,
                        });
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
                        return m({
                          onDismiss: i,
                          pushname: t.status,
                          toastId: d,
                        });
                      },
                    },
                  )
                );
              });
          (o("WAWebToastManager").ToastManager.open(
            c.jsx(o("WAWebActionToast.react").ActionToast, {
              id: d,
              initialAction: _,
              onDismiss: i,
              pendingAction: g,
            }),
          ),
            yield p,
            o("WAWebSetPushnameLocallyAction").setPushnameLocally(l));
        })),
        p.apply(this, arguments)
      );
    }
    l.setPushname = d;
  },
  226,
);
