__d(
  "WAWebProfilePicThumbAction",
  [
    "fbt",
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebBackendErrors",
    "WAWebContactProfilePicThumbBridge",
    "WAWebMiscErrors",
    "WAWebStateUtils",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = d || (d = o("react"));
    function p(e, t, n, r) {
      return f(o("WAWebStateUtils").unproxy(e), t, n, r);
    }
    function _(e, t) {
      return g(o("WAWebStateUtils").unproxy(e), t);
    }
    function f(t, r, a, i, l) {
      l === void 0 && (l = o("WAWebActionToast.react").genId());
      var u = t.id;
      if (!t.canSet())
        return (c || (c = n("Promise"))).reject(
          new (o("WAWebMiscErrors").ActionError)(),
        );
      var d = o("WAWebContactProfilePicThumbBridge").sendSetPicture(u, r, a);
      t.pendingPic = r;
      var p = o("WAWebUserPrefsMeUser").isMeAccount(u),
        _ = p
          ? new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Setting profile picture"),
            )
          : new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Setting group icon"),
            ),
        g = d
          .catch(function (t) {
            throw (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "models:ProfilePicThumb:setPicture dropped",
                  ])),
              ),
              p
                ? new (o("WAWebActionToast.react").ActionType)(
                    s._(/*BTDS*/ "Couldn't set profile picture."),
                  )
                : new (o("WAWebActionToast.react").ActionType)(
                    s._(/*BTDS*/ "Couldn't set group icon."),
                  )
            );
          })
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (e) {
                if (e.status >= 400) {
                  var n = p
                    ? s._(/*BTDS*/ "Couldn't set profile picture.")
                    : s._(/*BTDS*/ "Couldn't set group icon.");
                  return new (o("WAWebActionToast.react").ActionType)(n, {
                    actionText: s._(/*BTDS*/ "Try again."),
                    actionHandler: function () {
                      return f(t, r, a, i, l);
                    },
                  });
                }
              },
            ),
          )
          .then(function () {
            return p
              ? new (o("WAWebActionToast.react").ActionType)(
                  s._(/*BTDS*/ "Profile picture set"),
                )
              : new (o("WAWebActionToast.react").ActionType)(
                  s._(/*BTDS*/ "Group icon set"),
                );
          });
      return (
        o("WAWebToastManager").ToastManager.open(
          m.jsx(o("WAWebActionToast.react").ActionToast, {
            id: l,
            initialAction: _,
            pendingAction: g,
            onDismiss: i,
          }),
        ),
        d
          .then(function (e) {
            t.set({ tag: e.tag, eurl: e.eurl });
          })
          .finally(function () {
            t.pendingPic = void 0;
          })
      );
    }
    function g(e, t, r) {
      r === void 0 && (r = o("WAWebActionToast.react").genId());
      var a = e.id;
      if (!e.canDelete())
        return (c || (c = n("Promise"))).reject(
          new (o("WAWebMiscErrors").ActionError)(),
        );
      var i = o("WAWebContactProfilePicThumbBridge").requestDeletePicture(a);
      e.pendingPic = e.fallbackType;
      var l = o("WAWebUserPrefsMeUser").isMeAccount(a),
        d = l
          ? new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Removing profile picture"),
            )
          : new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Removing group icon"),
            ),
        p = i
          .catch(function (e) {
            throw (
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "models:ProfilePicThumb:deletePicture dropped",
                  ])),
              ),
              l
                ? new (o("WAWebActionToast.react").ActionType)(
                    s._(/*BTDS*/ "Couldn't remove profile picture."),
                  )
                : new (o("WAWebActionToast.react").ActionType)(
                    s._(/*BTDS*/ "Couldn't remove group icon."),
                  )
            );
          })
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (n) {
                if (n.status >= 400) {
                  var a = l
                    ? s._(/*BTDS*/ "Couldn't remove profile picture.")
                    : s._(/*BTDS*/ "Couldn't remove group icon.");
                  return new (o("WAWebActionToast.react").ActionType)(a, {
                    actionText: s._(/*BTDS*/ "Try again."),
                    actionHandler: function () {
                      return g(e, t, r);
                    },
                  });
                }
              },
            ),
          )
          .then(function () {
            return l
              ? new (o("WAWebActionToast.react").ActionType)(
                  s._(/*BTDS*/ "Profile picture removed"),
                )
              : new (o("WAWebActionToast.react").ActionType)(
                  s._(/*BTDS*/ "Group icon removed"),
                );
          });
      return (
        o("WAWebToastManager").ToastManager.open(
          m.jsx(o("WAWebActionToast.react").ActionToast, {
            id: r,
            initialAction: d,
            pendingAction: p,
            onDismiss: t,
          }),
        ),
        i
          .then(function () {
            e.set({ tag: void 0, eurl: void 0 });
          })
          .finally(function () {
            e.pendingPic = void 0;
          })
      );
    }
    ((l.setProfilePic = p), (l.deleteProfilePic = _));
  },
  226,
);
