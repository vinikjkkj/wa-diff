__d(
  "WAWebFileSaver",
  [
    "Promise",
    "WAAbortError",
    "WALogger",
    "WAPromiseDelays",
    "WAWebDataLink",
    "WAWebDualUploadsPreferredMsg",
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
              function* (e, t, a, i) {
                (t === void 0 &&
                  (t = (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* () {},
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  a === void 0 && (a = !1),
                  i === void 0 && (i = !1));
                var l = i ? e : p(e);
                r("WAWebMiscBrowserUtils").startDownloading();
                try {
                  var d,
                    m,
                    _,
                    f = yield o(
                      "WAWebFileSaverDownloadData",
                    ).getMultiMsgDownloadData(l, a);
                  if (r("isStringNullOrEmpty")(f.url) && !f.blob) {
                    var g = l;
                    o("WALogger")
                      .ERROR(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
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
                      .sendLogs("download-url-creation-error");
                  }
                  var h =
                    (d = f.url) != null
                      ? d
                      : window.URL.createObjectURL(f.blob);
                  [].concat(l).forEach(function (e) {
                    if (r("WAWebMediaGatingShouldClearDownloadedBlobs")(e)) {
                      var t;
                      (t = e.mediaObject) == null || t.clearBlob({ reset: !0 });
                    }
                  });
                  var y = o("WAWebDataLink").createDataLink(h);
                  if (
                    ((y.download = f.name),
                    (y.style.display = "none"),
                    Array.isArray(l) && l.length === 1 && (l = l[0]),
                    !y.href)
                  ) {
                    var C = l;
                    o("WALogger")
                      .ERROR(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "Assertion failed! ",
                            "",
                          ])),
                        Array.isArray(C)
                          ? "download a zip file"
                          : "download " +
                              C.id.toString() +
                              " type " +
                              C.type +
                              " with state " +
                              (C.mediaData && C.mediaData.mediaStage),
                      )
                      .sendLogs("no-download-url");
                  }
                  (yield t(
                    y.href,
                    y.download,
                    Array.isArray(l)
                      ? ""
                      : (m = (_ = l.mediaData) == null ? void 0 : _.filehash) !=
                          null
                        ? m
                        : "",
                  ),
                    document.body && document.body.appendChild(y),
                    y.click(),
                    document.body && document.body.removeChild(y),
                    r("isStringNullOrEmpty")(f.url) &&
                      (yield o("WAPromiseDelays").delayMs(100),
                      window.URL.revokeObjectURL(y.href)));
                } catch (e) {
                  var b = r("getErrorSafe")(e);
                  if (a && b.name === o("WAAbortError").ABORT_ERROR) throw b;
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
            function t(t, n, r, o) {
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
      })();
    function p(e) {
      return Array.isArray(e)
        ? o("WAWebDualUploadsPreferredMsg").getPreferredMediaMsgs(e)
        : o("WAWebDualUploadsPreferredMsg").getPreferredMediaMsg(e);
    }
    var _ = new m();
    l.FileSaver = _;
  },
  98,
);
