__d(
  "WAWebMediaViewerShortcuts.react",
  [
    "fbt",
    "WALogger",
    "WAWebEnvironment",
    "WAWebFileSaver",
    "WAWebStateUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "cr:7565",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useEffect,
      _ = d.useMemo;
    function f(t) {
      var a = m(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            n("cr:7565") &&
              n("cr:7565")
                .copyMediaFile(o("WAWebStateUtils").unproxy(t))
                .then(function (e) {
                  o("WAWebToastManager").ToastManager.open(
                    c.jsx(o("WAWebToast.react").Toast, {
                      msg: s._(/*BTDS*/ "Image copied: {fileName}", [
                        s._param("fileName", e),
                      ]),
                    }),
                  );
                })
                .catch(function (t) {
                  o("WALogger").ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Error while copying image: ",
                        "",
                      ])),
                    t,
                  );
                });
          }),
          [t],
        ),
        i = _(
          function () {
            return {
              s: function () {
                o("WAWebFileSaver").FileSaver.initDownload(
                  o("WAWebStateUtils").unproxy(t),
                );
              },
              c: function () {
                a();
              },
            };
          },
          [a, t],
        ),
        l = m(
          function (e) {
            if (e.ctrlKey) {
              var t = e.key,
                n = i[t];
              n != null && (e.preventDefault(), n(e));
            }
          },
          [i],
        );
      p(
        function () {
          var e = r("WAWebEnvironment").isWindows;
          if (e)
            return (
              window.addEventListener("keydown", l),
              function () {
                window.removeEventListener("keydown", l);
              }
            );
        },
        [l, t],
      );
    }
    l.useMediaViewerShortcuts = f;
  },
  226,
);
