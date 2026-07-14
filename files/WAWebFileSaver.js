__d(
  "WAWebFileSaver",
  [
    "Promise",
    "WALogger",
    "WAPromiseDelays",
    "WAWebDataLink",
    "WAWebFileSaverDownloadData",
    "WAWebMediaGatingShouldClearDownloadedBlobs",
    "WAWebMiscBrowserUtils",
    "WAWebNoop",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = (function () {
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
              (d || (d = n("Promise"))).resolve()
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
                r("WAWebMiscBrowserUtils").startDownloading();
                try {
                  var i,
                    l,
                    d,
                    m = yield o(
                      "WAWebFileSaverDownloadData",
                    ).getMultiMsgDownloadData(a);
                  if (r("isStringNullOrEmpty")(m.url) && !m.blob) {
                    var p = a;
                    o("WALogger")
                      .ERROR(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "Assertion failed! ",
                            "",
                          ])),
                        Array.isArray(p)
                          ? "download a zip file"
                          : "download " +
                              p.id.toString() +
                              " type " +
                              p.type +
                              " with state " +
                              (p.mediaData && p.mediaData.mediaStage),
                      )
                      .sendLogs("download-url-creation-error");
                  }
                  var _ =
                    (i = m.url) != null
                      ? i
                      : window.URL.createObjectURL(m.blob);
                  [].concat(a).forEach(function (e) {
                    if (r("WAWebMediaGatingShouldClearDownloadedBlobs")(e)) {
                      var t;
                      (t = e.mediaObject) == null || t.clearBlob({ reset: !0 });
                    }
                  });
                  var f = o("WAWebDataLink").createDataLink(_);
                  if (
                    ((f.download = m.name),
                    (f.style.display = "none"),
                    Array.isArray(a) && a.length === 1 && (a = a[0]),
                    !f.href)
                  ) {
                    var g = a;
                    o("WALogger")
                      .ERROR(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "Assertion failed! ",
                            "",
                          ])),
                        Array.isArray(g)
                          ? "download a zip file"
                          : "download " +
                              g.id.toString() +
                              " type " +
                              g.type +
                              " with state " +
                              (g.mediaData && g.mediaData.mediaStage),
                      )
                      .sendLogs("no-download-url");
                  }
                  (yield t(
                    f.href,
                    f.download,
                    Array.isArray(a)
                      ? ""
                      : (l = (d = a.mediaData) == null ? void 0 : d.filehash) !=
                          null
                        ? l
                        : "",
                  ),
                    document.body && document.body.appendChild(f),
                    f.click(),
                    document.body && document.body.removeChild(f),
                    r("isStringNullOrEmpty")(m.url) &&
                      (yield o("WAPromiseDelays").delayMs(100),
                      window.URL.revokeObjectURL(f.href)));
                } catch (e) {
                  o("WALogger").WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
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
      p = new m();
    l.FileSaver = p;
  },
  98,
);
