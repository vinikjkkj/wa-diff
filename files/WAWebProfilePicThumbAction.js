__d(
  "WAWebProfilePicThumbAction",
  [
    "fbt",
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebBackendErrors",
    "WAWebBackendRuntime",
    "WAWebContactProfilePicThumbBridge",
    "WAWebMiscErrors",
    "WAWebProfilePicThumbGetters",
    "WAWebProfilePictureService",
    "WAWebStateUtils",
    "WAWebToastManager",
    "WAWebUserUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = d || (d = o("react"));
    function p(e) {
      var t = e.full,
        n = e.profilePicThumb,
        r = e.thumb;
      return f({
        full: t,
        profilePicThumb: o("WAWebStateUtils").unproxy(n),
        thumb: r,
      });
    }
    function _(e) {
      return g({ profilePicThumb: o("WAWebStateUtils").unproxy(e) });
    }
    function f(t) {
      var r = t.full,
        a = t.profilePicThumb,
        i = t.thumb,
        l = t.toastId,
        u = l === void 0 ? o("WAWebActionToast.react").genId() : l,
        d = a.id;
      if (!a.canSet())
        return (c || (c = n("Promise"))).reject(
          new (o("WAWebMiscErrors").ActionError)(),
        );
      var p = (
        o("WAWebBackendRuntime").isWebDiBackendEnabled()
          ? o("WAWebBackendRuntime").runtime(
              o("WAWebProfilePictureService").ProfilePictureService,
            ).sendSetPicture
          : o("WAWebContactProfilePicThumbBridge").sendSetPicture
      )(d, i, r);
      a.pendingPic = i;
      var _ = o("WAWebUserUtils").isMeAccount(d),
        g = _
          ? new (o("WAWebActionToast.react").ActionType)(s._(/*BTDS*/ ""))
          : new (o("WAWebActionToast.react").ActionType)(s._(/*BTDS*/ "")),
        h = p
          .catch(function (t) {
            throw (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "models:ProfilePicThumb:setPicture dropped",
                  ])),
              ),
              _
                ? new (o("WAWebActionToast.react").ActionType)(s._(/*BTDS*/ ""))
                : new (o("WAWebActionToast.react").ActionType)(s._(/*BTDS*/ ""))
            );
          })
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (e) {
                if (e.status >= 400) {
                  var t = _ ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
                  return new (o("WAWebActionToast.react").ActionType)(t, {
                    actionText: s._(/*BTDS*/ ""),
                    actionHandler: function () {
                      return f({
                        full: r,
                        profilePicThumb: a,
                        thumb: i,
                        toastId: u,
                      });
                    },
                  });
                }
              },
            ),
          )
          .then(function () {
            return _
              ? new (o("WAWebActionToast.react").ActionType)(s._(/*BTDS*/ ""))
              : new (o("WAWebActionToast.react").ActionType)(s._(/*BTDS*/ ""));
          });
      return (
        o("WAWebToastManager").ToastManager.open(
          m.jsx(o("WAWebActionToast.react").ActionToast, {
            id: u,
            initialAction: g,
            pendingAction: h,
          }),
        ),
        p
          .then(function (e) {
            a.set({ tag: e.tag, eurl: e.eurl });
          })
          .finally(function () {
            a.pendingPic = void 0;
          })
      );
    }
    function g(e) {
      var t = e.profilePicThumb,
        r = e.toastId,
        a = r === void 0 ? o("WAWebActionToast.react").genId() : r,
        i = t.id;
      if (!t.canDelete())
        return (c || (c = n("Promise"))).reject(
          new (o("WAWebMiscErrors").ActionError)(),
        );
      var l = (
        o("WAWebBackendRuntime").isWebDiBackendEnabled()
          ? o("WAWebBackendRuntime").runtime(
              o("WAWebProfilePictureService").ProfilePictureService,
            ).requestDeletePicture
          : o("WAWebContactProfilePicThumbBridge").requestDeletePicture
      )(i);
      t.pendingPic = o("WAWebProfilePicThumbGetters").getFallbackType(t);
      var d = o("WAWebUserUtils").isMeAccount(i),
        p = d
          ? new (o("WAWebActionToast.react").ActionType)(s._(/*BTDS*/ ""))
          : new (o("WAWebActionToast.react").ActionType)(s._(/*BTDS*/ "")),
        _ = l
          .catch(function (e) {
            throw (
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "models:ProfilePicThumb:deletePicture dropped",
                  ])),
              ),
              d
                ? new (o("WAWebActionToast.react").ActionType)(s._(/*BTDS*/ ""))
                : new (o("WAWebActionToast.react").ActionType)(s._(/*BTDS*/ ""))
            );
          })
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (e) {
                if (e.status >= 400) {
                  var n = d ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
                  return new (o("WAWebActionToast.react").ActionType)(n, {
                    actionText: s._(/*BTDS*/ ""),
                    actionHandler: function () {
                      return g({ profilePicThumb: t, toastId: a });
                    },
                  });
                }
              },
            ),
          )
          .then(function () {
            return d
              ? new (o("WAWebActionToast.react").ActionType)(s._(/*BTDS*/ ""))
              : new (o("WAWebActionToast.react").ActionType)(s._(/*BTDS*/ ""));
          });
      return (
        o("WAWebToastManager").ToastManager.open(
          m.jsx(o("WAWebActionToast.react").ActionToast, {
            id: a,
            initialAction: p,
            pendingAction: _,
          }),
        ),
        l
          .then(function () {
            t.set({ tag: void 0, eurl: void 0 });
          })
          .finally(function () {
            t.pendingPic = void 0;
          })
      );
    }
    ((l.setProfilePic = p), (l.deleteProfilePic = _));
  },
  226,
);
