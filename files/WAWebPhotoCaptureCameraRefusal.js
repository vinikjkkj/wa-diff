__d(
  "WAWebPhotoCaptureCameraRefusal",
  [
    "WALogger",
    "WAWebMediaPermissionRefusal",
    "WAWebPhotoCaptureCameraPermissionODS",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t, n) {
      c(t, n).catch(function (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "photo capture: could not tell why the camera was refused",
              ])),
          )
          .catching(r("getErrorSafe")(t));
      });
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o(
            "WAWebMediaPermissionRefusal",
          ).getMediaPermissionRefusal(e, "camera");
          return (
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "photo capture: camera refused from ",
                  ": ",
                  "",
                ])),
              t,
              n,
            ),
            o(
              "WAWebPhotoCaptureCameraPermissionODS",
            ).logPhotoCaptureCameraRefusal(t, n),
            n
          );
        })),
        d.apply(this, arguments)
      );
    }
    ((l.countPhotoCaptureCameraRefusal = u),
      (l.reportPhotoCaptureCameraRefusal = c));
  },
  98,
);
