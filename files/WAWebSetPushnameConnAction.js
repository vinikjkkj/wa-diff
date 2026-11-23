__d(
  "WAWebSetPushnameConnAction",
  [
    "fbt",
    "WAFilteredCatch",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebBackendErrors",
    "WAWebBackendRuntime",
    "WAWebConnModel",
    "WAWebProfileService",
    "WAWebPushNameBridge",
    "WAWebSetPushnameLocallyAction",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(e) {
      return m({ pushname: e });
    }
    async function m(t) {
      var n = t.isUndoAction,
        a = n === void 0 ? !1 : n,
        i = t.pushname,
        l = t.toastId,
        u = l === void 0 ? o("WAWebActionToast.react").genId() : l,
        d = (
          o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebProfileService").ProfileService,
              ).setPushName
            : r("WAWebPushNameBridge")
        )(i),
        p = new (o("WAWebActionToast.react").ActionType)(s._(/*BTDS*/ "")),
        _ = o("WAWebConnModel").Conn.pushname,
        f = d
          .then(function () {
            var e;
            return (
              !a &&
                _ != null &&
                (e = {
                  actionText: s._(/*BTDS*/ ""),
                  actionHandler: function () {
                    return m({ isUndoAction: !0, pushname: _, toastId: u });
                  },
                }),
              new (o("WAWebActionToast.react").ActionType)(s._(/*BTDS*/ ""), e)
            );
          })
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (e) {
                if (e.status >= 400)
                  return new (o("WAWebActionToast.react").ActionType)(
                    s._(/*BTDS*/ ""),
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
              new (o("WAWebActionToast.react").ActionType)(s._(/*BTDS*/ ""), {
                actionText: s._(/*BTDS*/ ""),
                actionHandler: function () {
                  return m({ pushname: i, toastId: u });
                },
              })
            );
          });
      (o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebActionToast.react").ActionToast, {
          id: u,
          initialAction: p,
          pendingAction: f,
        }),
      ),
        await d,
        o("WAWebSetPushnameLocallyAction").setPushnameLocally(i));
    }
    l.setPushname = d;
  },
  226,
);
