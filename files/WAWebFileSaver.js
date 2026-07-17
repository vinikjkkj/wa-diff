__d(
  "WAWebFileSaver",
  [
    "Promise",
    "WAAbortError",
    "WALogger",
    "WAPromiseDelays",
    "WAWebDataLink",
    "WAWebFileSaverDownloadData",
    "WAWebMediaGatingShouldClearDownloadedBlobs",
    "WAWebMiscBrowserUtils",
    "WAWebNoop",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
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
              function* (e, t, a) {
                (t === void 0 &&
                  (t = (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* () {},
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  a === void 0 && (a = !1));
                var i = e;
                r("WAWebMiscBrowserUtils").startDownloading();
                try {
                  var l,
                    d,
                    m,
                    p = yield o(
                      "WAWebFileSaverDownloadData",
                    ).getMultiMsgDownloadData(i, a);
                  if (r("isStringNullOrEmpty")(p.url) && !p.blob) {
                    var _ = i;
                    o("WALogger")
                      .ERROR(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "Assertion failed! ",
                            "",
                          ])),
                        Array.isArray(_)
                          ? "download a zip file"
                          : "download " +
                              _.id.toString() +
                              " type " +
                              _.type +
                              " with state " +
                              (_.mediaData && _.mediaData.mediaStage),
                      )
                      .sendLogs("download-url-creation-error");
                  }
                  var f =
                    (l = p.url) != null
                      ? l
                      : window.URL.createObjectURL(p.blob);
                  [].concat(i).forEach(function (e) {
                    if (r("WAWebMediaGatingShouldClearDownloadedBlobs")(e)) {
                      var t;
                      (t = e.mediaObject) == null || t.clearBlob({ reset: !0 });
                    }
                  });
                  var g = o("WAWebDataLink").createDataLink(f);
                  if (
                    ((g.download = p.name),
                    (g.style.display = "none"),
                    Array.isArray(i) && i.length === 1 && (i = i[0]),
                    !g.href)
                  ) {
                    var h = i;
                    o("WALogger")
                      .ERROR(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "Assertion failed! ",
                            "",
                          ])),
                        Array.isArray(h)
                          ? "download a zip file"
                          : "download " +
                              h.id.toString() +
                              " type " +
                              h.type +
                              " with state " +
                              (h.mediaData && h.mediaData.mediaStage),
                      )
                      .sendLogs("no-download-url");
                  }
                  (yield t(
                    g.href,
                    g.download,
                    Array.isArray(i)
                      ? ""
                      : (d = (m = i.mediaData) == null ? void 0 : m.filehash) !=
                          null
                        ? d
                        : "",
                  ),
                    document.body && document.body.appendChild(g),
                    g.click(),
                    document.body && document.body.removeChild(g),
                    r("isStringNullOrEmpty")(p.url) &&
                      (yield o("WAPromiseDelays").delayMs(100),
                      window.URL.revokeObjectURL(g.href)));
                } catch (e) {
                  var y = r("getErrorSafe")(e);
                  if (a && y.name === o("WAAbortError").ABORT_ERROR) throw y;
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
            function t(t, n, r) {
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
