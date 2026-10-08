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
              function* (e) {
                var t = e.isPreResolved,
                  a = t === void 0 ? !1 : t,
                  i = e.msg,
                  l = e.onBeforeDownload,
                  d =
                    l === void 0
                      ? n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* () {},
                        )
                      : l,
                  m = e.shouldThrowAbortError,
                  _ = m === void 0 ? !1 : m,
                  f = a ? i : p(i);
                r("WAWebMiscBrowserUtils").startDownloading();
                try {
                  var g,
                    h,
                    y,
                    C = yield o(
                      "WAWebFileSaverDownloadData",
                    ).getMultiMsgDownloadData(f, _);
                  if (r("isStringNullOrEmpty")(C.url) && !C.blob) {
                    var b = f;
                    o("WALogger")
                      .ERROR(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "Assertion failed! ",
                            "",
                          ])),
                        Array.isArray(b)
                          ? "download a zip file"
                          : "download " +
                              b.id.toString() +
                              " type " +
                              b.type +
                              " with state " +
                              (b.mediaData && b.mediaData.mediaStage),
                      )
                      .sendLogs("download-url-creation-error");
                  }
                  var v =
                    (g = C.url) != null
                      ? g
                      : window.URL.createObjectURL(C.blob);
                  [].concat(f).forEach(function (e) {
                    if (r("WAWebMediaGatingShouldClearDownloadedBlobs")(e)) {
                      var t;
                      (t = e.mediaObject) == null || t.clearBlob({ reset: !0 });
                    }
                  });
                  var S = o("WAWebDataLink").createDataLink(v);
                  if (
                    ((S.download = C.name),
                    (S.style.display = "none"),
                    Array.isArray(f) && f.length === 1 && (f = f[0]),
                    !S.href)
                  ) {
                    var R = f;
                    o("WALogger")
                      .ERROR(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "Assertion failed! ",
                            "",
                          ])),
                        Array.isArray(R)
                          ? "download a zip file"
                          : "download " +
                              R.id.toString() +
                              " type " +
                              R.type +
                              " with state " +
                              (R.mediaData && R.mediaData.mediaStage),
                      )
                      .sendLogs("no-download-url");
                  }
                  (yield d(
                    S.href,
                    S.download,
                    Array.isArray(f)
                      ? ""
                      : (h = (y = f.mediaData) == null ? void 0 : y.filehash) !=
                          null
                        ? h
                        : "",
                  ),
                    document.body && document.body.appendChild(S),
                    S.click(),
                    document.body && document.body.removeChild(S),
                    r("isStringNullOrEmpty")(C.url) &&
                      (yield o("WAPromiseDelays").delayMs(100),
                      window.URL.revokeObjectURL(S.href)));
                } catch (e) {
                  var L = r("getErrorSafe")(e);
                  if (_ && L.name === o("WAAbortError").ABORT_ERROR) throw L;
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
            function t(t) {
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
              this.downloadAsync({ msg: t, onBeforeDownload: o }).catch(
                r("WAWebNoop"),
              ));
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
