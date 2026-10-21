__d(
  "WAWebVoipBlockedCameraDialog",
  [
    "WALogger",
    "WAWebCallCollection",
    "WAWebVoipBrowserPermissionButtonGating",
    "WAWebVoipCameraTapAllowState",
    "WAWebVoipDevicePermissionDialogLoader.react",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 1e3,
      u = null;
    function c(t, n) {
      var a = n.isDocPip,
        i = n.showGuide,
        l = n.turnCameraOn,
        c = r("WAWebCallCollection").activeCall;
      if (
        a ||
        c == null ||
        !o(
          "WAWebVoipBrowserPermissionButtonGating",
        ).isBrowserPermissionButtonEnabled("camera")
      ) {
        i();
        return;
      }
      u !== c.id &&
        ((u = c.id),
        o("WAWebVoipDevicePermissionDialogLoader.react")
          .loadDevicePermissionDialog()
          .then(function (n) {
            if (((u = null), r("WAWebCallCollection").activeCall === c)) {
              if (n == null) {
                i();
                return;
              }
              var a = function () {
                return o("WAWebVoipCameraTapAllowState").endCameraTapAllow(
                  c.id,
                );
              };
              o(
                "WAWebVoipDevicePermissionDialogLoader.react",
              ).openDevicePermissionDialog(t, n, {
                action: "camera",
                call: c,
                isBlocked: !0,
                onAllowed: function () {
                  l()
                    .catch(function (t) {
                      o("WALogger")
                        .WARN(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [camera permission] turning the camera on after the allow failed",
                            ])),
                        )
                        .catching(r("getErrorSafe")(t));
                    })
                    .finally(function () {
                      window.setTimeout(a, s);
                    });
                },
                onDismissed: a,
                onShown: function () {
                  return o("WAWebVoipCameraTapAllowState").beginCameraTapAllow(
                    c.id,
                  );
                },
              });
            }
          }));
    }
    l.showBlockedCameraDialog = c;
  },
  98,
);
