__d(
  "WAWebUpdaterUpdateApp",
  [
    "fbt",
    "WALogger",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUpdater",
    "WAWebUpdaterDownloadStateType",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react"));
    window.updater = o("WAWebUpdater").Updater;
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WAWebToastManager").ToastManager.open(
            d.jsx(o("WAWebToast.react").Toast, {
              msg: s._(/*BTDS*/ "Updating WhatsApp"),
            }),
          );
          var t = yield o("WAWebUpdater").Updater.update();
          t ===
          o("WAWebUpdaterDownloadStateType").DownloadState.UPDATE_NOT_AVAILABLE
            ? (o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Got unsupported message but no newer release found",
                  ])),
              ),
              o("WAWebToastManager").ToastManager.open(
                d.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "No update found"),
                }),
              ))
            : t ===
                o("WAWebUpdaterDownloadStateType").DownloadState
                  .UPDATE_DOWNLOADED
              ? yield o("WAWebUpdater").Updater.restart()
              : o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Got unsupported message but updater errored",
                    ])),
                );
        })),
        p.apply(this, arguments)
      );
    }
    l.updateApp = m;
  },
  226,
);
