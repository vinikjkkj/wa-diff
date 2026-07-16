__d(
  "WAWebBizCoverPhotoAction",
  [
    "fbt",
    "WAFilteredCatch",
    "WALogger",
    "WAWebABProps",
    "WAWebActionToast.react",
    "WAWebBackendErrors",
    "WAWebBusinessProfileJob",
    "WAWebNoop",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = d || (d = o("react"));
    function p(t) {
      var n = t.id,
        a = t.metaHmac,
        i = t.toastId,
        l = i === void 0 ? o("WAWebActionToast.react").genId() : i,
        c = t.ts,
        d = new (o("WAWebActionToast.react").ActionType)(
          s._(/*BTDS*/ "Setting cover photo"),
        ),
        _ = s._(/*BTDS*/ "Couldn't set cover photo"),
        f = o("WAWebBusinessProfileJob")
          .sendCoverPhoto(n, c, a)
          .catch(function (t) {
            throw (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "action:setCoverPhoto dropped",
                  ])),
              ),
              new (o("WAWebActionToast.react").ActionType)(_)
            );
          })
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (e) {
                if (
                  (o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "action:setCoverPhoto server error",
                      ])),
                  ),
                  e.status >= 400)
                )
                  return new (o("WAWebActionToast.react").ActionType)(_, {
                    actionText: s._(/*BTDS*/ "Try again"),
                    actionHandler: function () {
                      return p({ id: n, metaHmac: a, toastId: l, ts: c });
                    },
                  });
              },
            ),
          )
          .then(function () {
            var e;
            return (
              o("WAWebABProps").getABPropConfigValue(
                "smb_temp_cover_photo_privacy_messaging",
              )
                ? (e = s._(/*BTDS*/ "Your cover photo is now public"))
                : (e = s._(/*BTDS*/ "Cover photo set")),
              new (o("WAWebActionToast.react").ActionType)(e)
            );
          });
      return (
        o("WAWebToastManager").ToastManager.open(
          m.jsx(o("WAWebActionToast.react").ActionToast, {
            id: l,
            initialAction: d,
            pendingAction: f,
          }),
        ),
        f.then(r("WAWebNoop"))
      );
    }
    function _(e, t) {
      t === void 0 && (t = o("WAWebActionToast.react").genId());
      var n = o("WAWebBusinessProfileJob").deleteCoverPhoto(e),
        a = new (o("WAWebActionToast.react").ActionType)(
          s._(/*BTDS*/ "Removing cover photo"),
        ),
        i = s._(/*BTDS*/ "Couldn't remove cover photo"),
        l = n
          .catch(function (e) {
            throw (
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "actions:deleteCoverPhoto dropped",
                  ])),
              ),
              new (o("WAWebActionToast.react").ActionType)(i)
            );
          })
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (n) {
                if (n.status >= 400)
                  return new (o("WAWebActionToast.react").ActionType)(i, {
                    actionText: s._(/*BTDS*/ "Try again"),
                    actionHandler: function () {
                      return _(e, t);
                    },
                  });
              },
            ),
          )
          .then(function () {
            return new (o("WAWebActionToast.react").ActionType)(
              s._(/*BTDS*/ "Cover photo removed"),
            );
          });
      return (
        o("WAWebToastManager").ToastManager.open(
          m.jsx(o("WAWebActionToast.react").ActionToast, {
            id: t,
            initialAction: a,
            pendingAction: l,
          }),
        ),
        n.then(r("WAWebNoop"))
      );
    }
    ((l.setCoverPhoto = p), (l.deleteCoverPhoto = _));
  },
  226,
);
