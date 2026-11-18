__d(
  "WAWebFileSaver",
  [
    "Promise",
    "WAAbortError",
    "WALogger",
    "WAPromiseDelays",
    "WAPromiseEach",
    "WAWebDataLink",
    "WAWebDualUploadsPreferredMsg",
    "WAWebFileSaverDownloadData",
    "WAWebHarmfulFileWarningGate",
    "WAWebMediaGatingShouldClearDownloadedBlobs",
    "WAWebMiscBrowserUtils",
    "WAWebNoop",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "isStringNullOrEmpty",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
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
              (_ || (_ = n("Promise"))).resolve()
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
                  m = e.onWarningDeclined,
                  p = m === void 0 ? r("WAWebNoop") : m,
                  _ = e.shouldThrowAbortError,
                  f = _ === void 0 ? !1 : _;
                if (!r("justknobx")._("8497"))
                  return y({
                    isPreResolved: a,
                    msg: i,
                    onBeforeDownload: d,
                    shouldThrowAbortError: f,
                  });
                r("WAWebMiscBrowserUtils").startDownloading();
                try {
                  var h = yield g(
                      Array.isArray(i) && i.length === 1 ? i[0] : i,
                      a,
                      f,
                    ),
                    C = h.messages.length === 1 ? h.messages[0] : h.messages;
                  try {
                    yield o("WAPromiseEach").promiseEach(
                      h.messages,
                      o("WAWebHarmfulFileWarningGate")
                        .confirmHarmfulFileIfNeeded,
                    );
                  } catch (e) {
                    if (!o("WAAbortError").isAbortError(e) || (p(), f)) throw e;
                    return;
                  }
                  if (!h.blob) {
                    var b = C;
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
                  var v = window.URL.createObjectURL(h.blob);
                  try {
                    var S, R, L;
                    h.messages.forEach(function (e) {
                      if (r("WAWebMediaGatingShouldClearDownloadedBlobs")(e)) {
                        var t;
                        (t = e.mediaObject) == null ||
                          t.clearBlob({ reset: !0 });
                      }
                    });
                    var E = o("WAWebDataLink").createDataLink(v);
                    if (
                      ((E.download = h.name),
                      (E.style.display = "none"),
                      !E.href)
                    ) {
                      var k = C;
                      o("WALogger")
                        .ERROR(
                          u ||
                            (u = babelHelpers.taggedTemplateLiteralLoose([
                              "Assertion failed! ",
                              "",
                            ])),
                          Array.isArray(k)
                            ? "download a zip file"
                            : "download " +
                                k.id.toString() +
                                " type " +
                                k.type +
                                " with state " +
                                (k.mediaData && k.mediaData.mediaStage),
                        )
                        .sendLogs("no-download-url");
                    }
                    (yield d(
                      E.href,
                      E.download,
                      Array.isArray(C)
                        ? ""
                        : (S =
                              (R = C.mediaData) == null
                                ? void 0
                                : R.filehash) != null
                          ? S
                          : "",
                    ),
                      (L = document.body) == null || L.appendChild(E));
                    try {
                      E.click();
                    } finally {
                      E.remove();
                    }
                  } finally {
                    (yield o("WAPromiseDelays").delayMs(100),
                      window.URL.revokeObjectURL(v));
                  }
                } catch (e) {
                  var I = r("getErrorSafe")(e);
                  if (f && o("WAAbortError").isAbortError(I)) throw I;
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
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = function (t, n) {
            return o("WAWebFileSaverDownloadData").getMultiMsgDownloadData(
              t,
              r,
              n,
            );
          };
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
                      : o("WAWebFileSaverDownloadData").getMsgDownloadData(
                          t,
                          r,
                        );
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
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.isPreResolved,
            n = e.msg,
            a = e.onBeforeDownload,
            i = e.shouldThrowAbortError;
          r("WAWebMiscBrowserUtils").startDownloading();
          try {
            var l,
              s,
              u,
              c = yield b(Array.isArray(n) && n.length === 1 ? n[0] : n, t, i),
              _ = c.data,
              f = c.msg;
            if (r("isStringNullOrEmpty")(_.url) && !_.blob) {
              var g = f;
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
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
              (l = _.url) != null ? l : window.URL.createObjectURL(_.blob);
            [].concat(f).forEach(function (e) {
              if (r("WAWebMediaGatingShouldClearDownloadedBlobs")(e)) {
                var t;
                (t = e.mediaObject) == null || t.clearBlob({ reset: !0 });
              }
            });
            var y = o("WAWebDataLink").createDataLink(h);
            if (
              ((y.download = _.name),
              (y.style.display = "none"),
              Array.isArray(f) && f.length === 1 && (f = f[0]),
              !y.href)
            ) {
              var C = f;
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
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
            (yield a(
              y.href,
              y.download,
              Array.isArray(f)
                ? ""
                : (s = (u = f.mediaData) == null ? void 0 : u.filehash) != null
                  ? s
                  : "",
            ),
              document.body && document.body.appendChild(y),
              y.click(),
              document.body && document.body.removeChild(y),
              r("isStringNullOrEmpty")(_.url) &&
                (yield o("WAPromiseDelays").delayMs(100),
                window.URL.revokeObjectURL(y.href)));
          } catch (e) {
            var v = r("getErrorSafe")(e);
            if (i && v.name === o("WAAbortError").ABORT_ERROR) throw v;
            o("WALogger").WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "Download failed, error: ",
                  "",
                ])),
              String(e),
            );
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t, n) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
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
        v.apply(this, arguments)
      );
    }
    var S = new f();
    l.FileSaver = S;
  },
  98,
);
