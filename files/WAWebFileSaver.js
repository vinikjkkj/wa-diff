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
                  _ = m === void 0 ? !1 : m;
                r("WAWebMiscBrowserUtils").startDownloading();
                try {
                  var f,
                    g,
                    h,
                    y = yield p(
                      Array.isArray(i) && i.length === 1 ? i[0] : i,
                      a,
                      _,
                    ),
                    C = y.data,
                    b = y.msg;
                  if (r("isStringNullOrEmpty")(C.url) && !C.blob) {
                    var v = b;
                    o("WALogger")
                      .ERROR(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "Assertion failed! ",
                            "",
                          ])),
                        Array.isArray(v)
                          ? "download a zip file"
                          : "download " +
                              v.id.toString() +
                              " type " +
                              v.type +
                              " with state " +
                              (v.mediaData && v.mediaData.mediaStage),
                      )
                      .sendLogs("download-url-creation-error");
                  }
                  var S =
                    (f = C.url) != null
                      ? f
                      : window.URL.createObjectURL(C.blob);
                  [].concat(b).forEach(function (e) {
                    if (r("WAWebMediaGatingShouldClearDownloadedBlobs")(e)) {
                      var t;
                      (t = e.mediaObject) == null || t.clearBlob({ reset: !0 });
                    }
                  });
                  var R = o("WAWebDataLink").createDataLink(S);
                  if (
                    ((R.download = C.name),
                    (R.style.display = "none"),
                    Array.isArray(b) && b.length === 1 && (b = b[0]),
                    !R.href)
                  ) {
                    var L = b;
                    o("WALogger")
                      .ERROR(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "Assertion failed! ",
                            "",
                          ])),
                        Array.isArray(L)
                          ? "download a zip file"
                          : "download " +
                              L.id.toString() +
                              " type " +
                              L.type +
                              " with state " +
                              (L.mediaData && L.mediaData.mediaStage),
                      )
                      .sendLogs("no-download-url");
                  }
                  (yield d(
                    R.href,
                    R.download,
                    Array.isArray(b)
                      ? ""
                      : (g = (h = b.mediaData) == null ? void 0 : h.filehash) !=
                          null
                        ? g
                        : "",
                  ),
                    document.body && document.body.appendChild(R),
                    R.click(),
                    document.body && document.body.removeChild(R),
                    r("isStringNullOrEmpty")(C.url) &&
                      (yield o("WAPromiseDelays").delayMs(100),
                      window.URL.revokeObjectURL(R.href)));
                } catch (e) {
                  var E = r("getErrorSafe")(e);
                  if (_ && E.name === o("WAAbortError").ABORT_ERROR) throw E;
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
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                return {
                  data: yield o(
                    "WAWebFileSaverDownloadData",
                  ).getMultiMsgDownloadData(e, r, t),
                  msg: e,
                };
              },
            );
            return function (n, r) {
              return e.apply(this, arguments);
            };
          })();
          if (t) return a(e);
          if (!Array.isArray(e))
            return o("WAWebFileSaverDownloadData").withSdLegFallback(
              o("WAWebDualUploadsPreferredMsg").getPreferredMediaMsg(e),
              e,
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    return t === e
                      ? a(t)
                      : {
                          data: yield o(
                            "WAWebFileSaverDownloadData",
                          ).getMsgDownloadData(t, r),
                          msg: t,
                        };
                  },
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            );
          var i = new Map();
          for (var l of e) {
            var s = o("WAWebDualUploadsPreferredMsg").getPreferredMediaMsg(l);
            s !== l && i.set(s, l);
          }
          return a(
            o("WAWebDualUploadsPreferredMsg").getPreferredMediaMsgs(e),
            i,
          );
        })),
        _.apply(this, arguments)
      );
    }
    var f = new m();
    l.FileSaver = f;
  },
  98,
);
