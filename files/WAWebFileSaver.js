__d(
  "WAWebFileSaver",
  [
    "Promise",
    "WALogger",
    "WAPromiseDelays",
    "WAWebConfirmPopup.react",
    "WAWebDataLink",
    "WAWebFbtCommon",
    "WAWebFileSaverDownloadData",
    "WAWebMediaGatingShouldClearDownloadedBlobs",
    "WAWebMiscBrowserUtils",
    "WAWebModalManager",
    "WAWebModernizr",
    "WAWebNoop",
    "WAWebSafariLimited",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = p || (p = o("react")),
      f = (function () {
        function t() {}
        var a = t.prototype;
        return (
          (a.downloadData = function (r, a, i) {
            var t = window.URL.createObjectURL(r),
              l = o("WAWebDataLink").createDataLink(t);
            return (
              (l.style.display = "none"),
              (l.download = "" + a + i),
              document.body && document.body.appendChild(l),
              l.click(),
              document.body && document.body.removeChild(l),
              o("WAPromiseDelays")
                .delayMs(100)
                .then(function () {
                  window.URL.revokeObjectURL(l.href);
                })
                .catch(function (t) {
                  o("WALogger").ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[file-saver] downloadData: revokeObjectURL failed, ",
                        "",
                      ])),
                    t,
                  );
                }),
              (m || (m = n("Promise"))).resolve()
            );
          }),
          (a.downloadAsync = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                t === void 0 &&
                  (t = (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* () {},
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })());
                var a = e;
                if (!o("WAWebModernizr").getModernizr().adownload) {
                  (o("WAWebModalManager").ModalManager.open(
                    _.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                      tsNavigationData: {
                        surface: "unknown",
                        viewName: "file-saver",
                      },
                      onOK: function () {
                        return o("WAWebModalManager").ModalManager.close();
                      },
                      okText: r("WAWebFbtCommon")("OK"),
                      children: _.jsx(
                        o("WAWebSafariLimited").SafariLimitedText,
                        {},
                      ),
                    }),
                  ),
                    o("WALogger")
                      .ERROR(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "Assertion failed!",
                          ])),
                      )
                      .sendLogs("safari, adownload is false in download mgr"));
                  return;
                }
                r("WAWebMiscBrowserUtils").startDownloading();
                try {
                  var i,
                    l,
                    m,
                    p = yield o(
                      "WAWebFileSaverDownloadData",
                    ).getMultiMsgDownloadData(a);
                  if (r("isStringNullOrEmpty")(p.url) && !p.blob) {
                    var f = a;
                    o("WALogger")
                      .ERROR(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "Assertion failed! ",
                            "",
                          ])),
                        Array.isArray(f)
                          ? "download a zip file"
                          : "download " +
                              f.id.toString() +
                              " type " +
                              f.type +
                              " with state " +
                              (f.mediaData && f.mediaData.mediaStage),
                      )
                      .sendLogs("download-url-creation-error");
                  }
                  var g =
                    (i = p.url) != null
                      ? i
                      : window.URL.createObjectURL(p.blob);
                  [].concat(a).forEach(function (e) {
                    if (r("WAWebMediaGatingShouldClearDownloadedBlobs")(e)) {
                      var t;
                      (t = e.mediaObject) == null || t.clearBlob({ reset: !0 });
                    }
                  });
                  var h = o("WAWebDataLink").createDataLink(g);
                  if (
                    ((h.download = p.name),
                    (h.style.display = "none"),
                    Array.isArray(a) && a.length === 1 && (a = a[0]),
                    !h.href)
                  ) {
                    var y = a;
                    o("WALogger")
                      .ERROR(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "Assertion failed! ",
                            "",
                          ])),
                        Array.isArray(y)
                          ? "download a zip file"
                          : "download " +
                              y.id.toString() +
                              " type " +
                              y.type +
                              " with state " +
                              (y.mediaData && y.mediaData.mediaStage),
                      )
                      .sendLogs("no-download-url");
                  }
                  (yield t(
                    h.href,
                    h.download,
                    Array.isArray(a)
                      ? ""
                      : (l = (m = a.mediaData) == null ? void 0 : m.filehash) !=
                          null
                        ? l
                        : "",
                  ),
                    document.body && document.body.appendChild(h),
                    h.click(),
                    document.body && document.body.removeChild(h),
                    r("isStringNullOrEmpty")(p.url) &&
                      (yield o("WAPromiseDelays").delayMs(100),
                      window.URL.revokeObjectURL(h.href)));
                } catch (e) {
                  o("WALogger").WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "Download failed, error: ",
                        "",
                      ])),
                    String(e),
                  );
                }
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.initDownload = function (t, o) {
            (o === void 0 &&
              (o = (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {},
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              this.downloadAsync(t, o).catch(r("WAWebNoop")));
          }),
          t
        );
      })(),
      g = new f();
    l.FileSaver = g;
  },
  98,
);
