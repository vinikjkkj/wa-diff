__d(
  "WAWebFileSaver",
  [
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
      _ = (function () {
        function t() {}
        var n = t.prototype;
        return (
          (n.downloadData = function (n, r, a) {
            var t = window.URL.createObjectURL(n),
              i = o("WAWebDataLink").createDataLink(t);
            return (
              (i.style.display = "none"),
              (i.download = "" + r + a),
              document.body && document.body.appendChild(i),
              i.click(),
              document.body && document.body.removeChild(i),
              o("WAPromiseDelays")
                .delayMs(100)
                .then(function () {
                  window.URL.revokeObjectURL(i.href);
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
              Promise.resolve()
            );
          }),
          (n.downloadAsync = async function (t) {
            var e = t.isPreResolved,
              n = e === void 0 ? !1 : e,
              a = t.msg,
              i = t.onBeforeDownload,
              l = i === void 0 ? async function () {} : i,
              d = t.onWarningDeclined,
              m = d === void 0 ? r("WAWebNoop") : d,
              p = t.shouldThrowAbortError,
              _ = p === void 0 ? !1 : p;
            if (!r("justknobx")._("8497"))
              return g({
                isPreResolved: n,
                msg: a,
                onBeforeDownload: l,
                shouldThrowAbortError: _,
              });
            r("WAWebMiscBrowserUtils").startDownloading();
            try {
              var h = await f(
                  Array.isArray(a) && a.length === 1 ? a[0] : a,
                  n,
                  _,
                ),
                y = h.messages.length === 1 ? h.messages[0] : h.messages;
              try {
                await o("WAPromiseEach").promiseEach(
                  h.messages,
                  o("WAWebHarmfulFileWarningGate").confirmHarmfulFileIfNeeded,
                );
              } catch (e) {
                if (!o("WAAbortError").isAbortError(e) || (m(), _)) throw e;
                return;
              }
              if (!h.blob) {
                var C = y;
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
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
                  .sendLogs("download-url-creation-error");
              }
              var b = window.URL.createObjectURL(h.blob);
              try {
                var v, S, R;
                h.messages.forEach(function (e) {
                  if (r("WAWebMediaGatingShouldClearDownloadedBlobs")(e)) {
                    var t;
                    (t = e.mediaObject) == null || t.clearBlob({ reset: !0 });
                  }
                });
                var L = o("WAWebDataLink").createDataLink(b);
                if (
                  ((L.download = h.name), (L.style.display = "none"), !L.href)
                ) {
                  var E = y;
                  o("WALogger")
                    .ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "Assertion failed! ",
                          "",
                        ])),
                      Array.isArray(E)
                        ? "download a zip file"
                        : "download " +
                            E.id.toString() +
                            " type " +
                            E.type +
                            " with state " +
                            (E.mediaData && E.mediaData.mediaStage),
                    )
                    .sendLogs("no-download-url");
                }
                (await l(
                  L.href,
                  L.download,
                  Array.isArray(y)
                    ? ""
                    : (v = (S = y.mediaData) == null ? void 0 : S.filehash) !=
                        null
                      ? v
                      : "",
                ),
                  (R = document.body) == null || R.appendChild(L));
                try {
                  L.click();
                } finally {
                  L.remove();
                }
              } finally {
                (await o("WAPromiseDelays").delayMs(100),
                  window.URL.revokeObjectURL(b));
              }
            } catch (e) {
              var k = r("getErrorSafe")(e);
              if (_ && o("WAAbortError").isAbortError(k)) throw k;
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "Download failed, error: ",
                    "",
                  ])),
                String(e),
              );
            }
          }),
          (n.initDownload = function (t, n) {
            (n === void 0 && (n = async function () {}),
              this.downloadAsync({ msg: t, onBeforeDownload: n }).catch(
                r("WAWebNoop"),
              ));
          }),
          t
        );
      })();
    async function f(e, t, n) {
      var r = function (t, r) {
        return o("WAWebFileSaverDownloadData").getMultiMsgDownloadData(t, n, r);
      };
      if (t) return r(e);
      if (!Array.isArray(e))
        return o("WAWebFileSaverDownloadData").withSdLegFallback(
          o("WAWebDualUploadsPreferredMsg").getPreferredMediaMsg(e),
          e,
          async function (t) {
            return t === e
              ? r(t)
              : o("WAWebFileSaverDownloadData").getMsgDownloadData(t, n);
          },
        );
      var a = new Map();
      for (var i of e) {
        var l = o("WAWebDualUploadsPreferredMsg").getPreferredMediaMsg(i);
        l !== i && a.set(l, i);
      }
      return r(o("WAWebDualUploadsPreferredMsg").getPreferredMediaMsgs(e), a);
    }
    async function g(e) {
      var t = e.isPreResolved,
        n = e.msg,
        a = e.onBeforeDownload,
        i = e.shouldThrowAbortError;
      r("WAWebMiscBrowserUtils").startDownloading();
      try {
        var l,
          s,
          u,
          c = await h(Array.isArray(n) && n.length === 1 ? n[0] : n, t, i),
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
        var y = (l = _.url) != null ? l : window.URL.createObjectURL(_.blob);
        [].concat(f).forEach(function (e) {
          if (r("WAWebMediaGatingShouldClearDownloadedBlobs")(e)) {
            var t;
            (t = e.mediaObject) == null || t.clearBlob({ reset: !0 });
          }
        });
        var C = o("WAWebDataLink").createDataLink(y);
        if (
          ((C.download = _.name),
          (C.style.display = "none"),
          Array.isArray(f) && f.length === 1 && (f = f[0]),
          !C.href)
        ) {
          var b = f;
          o("WALogger")
            .ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
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
            .sendLogs("no-download-url");
        }
        (await a(
          C.href,
          C.download,
          Array.isArray(f)
            ? ""
            : (s = (u = f.mediaData) == null ? void 0 : u.filehash) != null
              ? s
              : "",
        ),
          document.body && document.body.appendChild(C),
          C.click(),
          document.body && document.body.removeChild(C),
          r("isStringNullOrEmpty")(_.url) &&
            (await o("WAPromiseDelays").delayMs(100),
            window.URL.revokeObjectURL(C.href)));
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
    }
    async function h(e, t, n) {
      var r = async function (t, r) {
        return {
          data: await o("WAWebFileSaverDownloadData").getMultiMsgDownloadData(
            t,
            n,
            r,
          ),
          msg: t,
        };
      };
      if (t) return r(e);
      if (!Array.isArray(e))
        return o("WAWebFileSaverDownloadData").withSdLegFallback(
          o("WAWebDualUploadsPreferredMsg").getPreferredMediaMsg(e),
          e,
          async function (t) {
            return t === e
              ? r(t)
              : {
                  data: await o(
                    "WAWebFileSaverDownloadData",
                  ).getMsgDownloadData(t, n),
                  msg: t,
                };
          },
        );
      var a = new Map();
      for (var i of e) {
        var l = o("WAWebDualUploadsPreferredMsg").getPreferredMediaMsg(i);
        l !== i && a.set(l, i);
      }
      return r(o("WAWebDualUploadsPreferredMsg").getPreferredMediaMsgs(e), a);
    }
    var y = new _();
    l.FileSaver = y;
  },
  98,
);
