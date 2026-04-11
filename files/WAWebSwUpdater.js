__d(
  "WAWebSwUpdater",
  [
    "Promise",
    "WALogger",
    "WAWebBuildConstants",
    "WAWebUpdaterDownloadStateType",
    "WAWebUpdaterVersion",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p() {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[sw] update starts. Current app version: ",
            "",
          ])),
        String(
          new (o("WAWebUpdaterVersion").Version)(
            o("WAWebBuildConstants").VERSION_BASE,
          ),
        ),
      );
      var t = navigator.serviceWorker;
      return t
        ? t.ready
            .then(function (e) {
              return new (m || (m = n("Promise")))(function (n) {
                var r;
                function a(e) {
                  (l(),
                    o("WALogger")
                      .ERROR(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "Unable to update service worker to version. Error: ",
                            "",
                          ])),
                        String(e),
                      )
                      .sendLogs("[sw] sw-update-failed: " + String(e), {
                        sampling: 0.1,
                      }));
                }
                function i() {
                  (o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[sw] updated",
                      ])),
                  ),
                    l(),
                    n(
                      o("WAWebUpdaterDownloadStateType").DownloadState
                        .UPDATE_DOWNLOADED,
                    ));
                }
                function l() {
                  (t.removeEventListener("error", a),
                    t.removeEventListener("controllerchange", i));
                }
                (t.addEventListener("error", a),
                  t.addEventListener("controllerchange", i),
                  (r = e.active) != null &&
                  (r = r.scriptURL) != null &&
                  r.includes("serviceworker.js")
                    ? e.unregister()
                    : e
                        .update()
                        .then(function () {
                          e.installing ||
                            (o("WALogger").LOG(
                              c ||
                                (c = babelHelpers.taggedTemplateLiteralLoose([
                                  "[sw] update is not available",
                                ])),
                            ),
                            n(
                              o("WAWebUpdaterDownloadStateType").DownloadState
                                .UPDATE_NOT_AVAILABLE,
                            ));
                        })
                        .catch(function (e) {
                          (a(e),
                            n(
                              o("WAWebUpdaterDownloadStateType").DownloadState
                                .ERROR,
                            ));
                        }));
              });
            })
            .catch(function (e) {
              return (
                o("WALogger")
                  .ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "Unable to update serviceworker, error: ",
                        "",
                      ])),
                    e,
                  )
                  .sendLogs("sw-update-failed"),
                o("WAWebUpdaterDownloadStateType").DownloadState.ERROR
              );
            })
        : (m || (m = n("Promise"))).resolve(
            o("WAWebUpdaterDownloadStateType").DownloadState.ERROR,
          );
    }
    l.updateSw = p;
  },
  98,
);
