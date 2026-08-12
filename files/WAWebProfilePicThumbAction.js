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
      return f({
        full: n,
        onDismiss: r,
        profilePicThumb: o("WAWebStateUtils").unproxy(e),
        thumb: t,
      });
    }
    function _(e, t) {
      return g({
        onDismiss: t,
        profilePicThumb: o("WAWebStateUtils").unproxy(e),
      });
    }
    function f(t) {
      var r = t.full,
        a = t.onDismiss,
        i = t.profilePicThumb,
        l = t.thumb,
        u = t.toastId,
        d = u === void 0 ? o("WAWebActionToast.react").genId() : u,
        p = i.id;
      if (!i.canSet())
        return (c || (c = n("Promise"))).reject(
          new (o("WAWebMiscErrors").ActionError)(),
        );
      var _ = o("WAWebContactProfilePicThumbBridge").sendSetPicture(p, l, r);
      i.pendingPic = l;
      var g = o("WAWebUserPrefsMeUser").isMeAccount(p),
        h = g
          ? new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Setting profile picture"),
            )
          : new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Setting group icon"),
            ),
        y = _.catch(function (t) {
          throw (
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "models:ProfilePicThumb:setPicture dropped",
                ])),
            ),
            g
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
                  var t = g
                    ? s._(/*BTDS*/ "Couldn't set profile picture.")
                    : s._(/*BTDS*/ "Couldn't set group icon.");
                  return new (o("WAWebActionToast.react").ActionType)(t, {
                    actionText: s._(/*BTDS*/ "Try again."),
                    actionHandler: function () {
                      return f({
                        full: r,
                        onDismiss: a,
                        profilePicThumb: i,
                        thumb: l,
                        toastId: d,
                      });
                    },
                  });
                }
              },
            ),
          )
          .then(function () {
            return g
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
            id: d,
            initialAction: h,
            pendingAction: y,
            onDismiss: a,
          }),
        ),
        _.then(function (e) {
          i.set({ tag: e.tag, eurl: e.eurl });
        }).finally(function () {
          i.pendingPic = void 0;
        })
      );
    }
    function g(e) {
      var t = e.onDismiss,
        r = e.profilePicThumb,
        a = e.toastId,
        i = a === void 0 ? o("WAWebActionToast.react").genId() : a,
        l = r.id;
      if (!r.canDelete())
        return (c || (c = n("Promise"))).reject(
          new (o("WAWebMiscErrors").ActionError)(),
        );
      var d = o("WAWebContactProfilePicThumbBridge").requestDeletePicture(l);
      r.pendingPic = r.fallbackType;
      var p = o("WAWebUserPrefsMeUser").isMeAccount(l),
        _ = p
          ? new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Removing profile picture"),
            )
          : new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Removing group icon"),
            ),
        f = d
          .catch(function (e) {
            throw (
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "models:ProfilePicThumb:deletePicture dropped",
                  ])),
              ),
              p
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
              function (e) {
                if (e.status >= 400) {
                  var n = p
                    ? s._(/*BTDS*/ "Couldn't remove profile picture.")
                    : s._(/*BTDS*/ "Couldn't remove group icon.");
                  return new (o("WAWebActionToast.react").ActionType)(n, {
                    actionText: s._(/*BTDS*/ "Try again."),
                    actionHandler: function () {
                      return g({
                        onDismiss: t,
                        profilePicThumb: r,
                        toastId: i,
                      });
                    },
                  });
                }
              },
            ),
          )
          .then(function () {
            return p
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
            id: i,
            initialAction: _,
            pendingAction: f,
            onDismiss: t,
          }),
        ),
        d
          .then(function () {
            r.set({ tag: void 0, eurl: void 0 });
          })
          .finally(function () {
            r.pendingPic = void 0;
          })
      );
    }
    ((l.setProfilePic = p), (l.deleteProfilePic = _));
  },
  226,
);
