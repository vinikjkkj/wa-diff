__d(
  "useWAWebVoipCameraAvailability",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebVoipStackInterface",
    "asyncToGeneratorRuntime",
    "err",
    "nullthrows",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useEffect,
      d = u.useRef,
      m = u.useState;
    function p() {
      var t =
          o("WAWebABProps").getABPropConfigValue(
            "enable_web_voip_virtual_video_capture_driver",
          ) === !0,
        a = m(!0),
        i = a[0],
        l = a[1];
      c(
        function () {
          if (t) return;
          function e() {
            return r.apply(this, arguments);
          }
          function r() {
            return (
              (r = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  var e;
                  if (
                    !(
                      (e = navigator.mediaDevices) != null && e.enumerateDevices
                    )
                  ) {
                    l(!1);
                    return;
                  }
                  var t = yield navigator.mediaDevices.enumerateDevices(),
                    n = t.some(function (e) {
                      return e.kind === "videoinput";
                    });
                  l(n);
                } catch (e) {
                  l(!1);
                }
              })),
              r.apply(this, arguments)
            );
          }
          e();
          var o = navigator.mediaDevices;
          if (o)
            return (
              o.addEventListener("devicechange", e),
              function () {
                o.removeEventListener("devicechange", e);
              }
            );
        },
        [t],
      );
      var s = d(i);
      return (
        c(
          function () {
            if (!t) {
              var a = s.current;
              ((s.current = i),
                a &&
                  !i &&
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    var t = r("nullthrows")(
                      yield o(
                        "WAWebVoipStackInterface",
                      ).getVoipStackInterface(),
                    );
                    if (t.type === "web") {
                      var n = yield t.setCallVideoMute(!0);
                      n !== 0 &&
                        o("WALogger").WARN(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: setCallVideoMute failed (camera unavailable) status=",
                              "",
                            ])),
                          n,
                        );
                    } else
                      throw r("err")(
                        "voip: UI: accept click: Unexpected voip stack type: " +
                          t.type,
                      );
                  })());
            }
          },
          [i, t],
        ),
        i
      );
    }
    l.default = p;
  },
  98,
);
