__d(
  "useWAWebVoipCameraHealthCheck",
  [
    "fbt",
    "WALogger",
    "WAWebConfirmPopup.react",
    "WAWebVoipStackInterface",
    "WAWebVoipVideoCameraCapture",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebVoipModalManager",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useCallback,
      _ = m.useEffect,
      f = m.useRef;
    function g(t) {
      var a = r("useWAWebVoipModalManager")(),
        i = a.closeModal,
        l = a.openModal,
        c = f(t);
      _(
        function () {
          c.current = t;
        },
        [t],
      );
      var m = p(
        function () {
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [CameraHealthCheck] showing camera not working modal",
              ])),
          ),
            l(
              d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                onOverlayClick: i,
                onOK: i,
                onCancel: function () {
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    try {
                      var e = yield o(
                        "WAWebVoipStackInterface",
                      ).getVoipStackInterface();
                      (e == null ? void 0 : e.type) === "web" &&
                        (yield e.setCallVideoMute(!0));
                    } finally {
                      i();
                    }
                  })();
                },
                cancelText: s._(/*BTDS*/ "Turn off video"),
                title: s._(/*BTDS*/ "Camera isn't working"),
                children: d.jsx(r("WDSText.react"), {
                  colorName: "contentDefault",
                  type: "Body2",
                  children: s._(
                    /*BTDS*/ "Your camera was detected but isn't producing video. Try switching to a different camera or closing other apps that might be using it.",
                  ),
                }),
              }),
            ));
        },
        [l, i],
      );
      _(
        function () {
          var e = function () {
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [CameraHealthCheck] health check failed (isCallActive=",
                  ")",
                ])),
              String(c.current),
            ),
              c.current && m());
          };
          return (
            o("WAWebVoipVideoCameraCapture").VideoDeviceEvents.on(
              "cameraHealthCheckFailed",
              e,
            ),
            function () {
              o("WAWebVoipVideoCameraCapture").VideoDeviceEvents.off(
                "cameraHealthCheckFailed",
                e,
              );
            }
          );
        },
        [m],
      );
    }
    l.default = g;
  },
  226,
);
