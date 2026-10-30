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
    function d(e) {
      return m({ pushname: e });
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.isUndoAction,
            a = n === void 0 ? !1 : n,
            i = t.pushname,
            l = t.toastId,
            u = l === void 0 ? o("WAWebActionToast.react").genId() : l,
            d = r("WAWebPushNameBridge")(i),
            p = new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Changing your name"),
            ),
            _ = o("WAWebConnModel").Conn.pushname,
            f = d
              .then(function () {
                var e;
                return (
                  !a &&
                    _ != null &&
                    (e = {
                      actionText: s._(/*BTDS*/ "Undo"),
                      actionHandler: function () {
                        return m({ isUndoAction: !0, pushname: _, toastId: u });
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
                        return m({ pushname: i, toastId: u });
                      },
                    },
                  )
                );
              });
          (o("WAWebToastManager").ToastManager.open(
            c.jsx(o("WAWebActionToast.react").ActionToast, {
              id: u,
              initialAction: p,
              pendingAction: f,
            }),
          ),
            yield d,
            o("WAWebSetPushnameLocallyAction").setPushnameLocally(i));
        })),
        p.apply(this, arguments)
      );
    }
    l.setPushname = d;
  },
  226,
);
