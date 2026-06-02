__d(
  "WAWebFileSaver",
  [
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
      p = m || (m = o("react")),
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
          (n.downloadAsync = async function (t, n) {
            n === void 0 && (n = async function () {});
            var e = t;
            if (!o("WAWebModernizr").getModernizr().adownload) {
              (o("WAWebModalManager").ModalManager.open(
                p.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                  tsNavigationData: {
                    surface: "unknown",
                    viewName: "file-saver",
                  },
                  onOK: function () {
                    return o("WAWebModalManager").ModalManager.close();
                  },
                  okText: r("WAWebFbtCommon")("OK"),
                  children: p.jsx(
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
              var a,
                i,
                l,
                m = await o(
                  "WAWebFileSaverDownloadData",
                ).getMultiMsgDownloadData(e);
              if (r("isStringNullOrEmpty")(m.url) && !m.blob) {
                var _ = e;
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
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
                (a = m.url) != null ? a : window.URL.createObjectURL(m.blob);
              [].concat(e).forEach(function (e) {
                if (r("WAWebMediaGatingShouldClearDownloadedBlobs")(e)) {
                  var t;
                  (t = e.mediaObject) == null || t.clearBlob({ reset: !0 });
                }
              });
              var g = o("WAWebDataLink").createDataLink(f);
              if (
                ((g.download = m.name),
                (g.style.display = "none"),
                Array.isArray(e) && e.length === 1 && (e = e[0]),
                !g.href)
              ) {
                var h = e;
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
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
              (await n(
                g.href,
                g.download,
                Array.isArray(e)
                  ? ""
                  : (i = (l = e.mediaData) == null ? void 0 : l.filehash) !=
                      null
                    ? i
                    : "",
              ),
                document.body && document.body.appendChild(g),
                g.click(),
                document.body && document.body.removeChild(g),
                r("isStringNullOrEmpty")(m.url) &&
                  (await o("WAPromiseDelays").delayMs(100),
                  window.URL.revokeObjectURL(g.href)));
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
          }),
          (n.initDownload = function (t, n) {
            (n === void 0 && (n = async function () {}),
              this.downloadAsync(t, n).catch(r("WAWebNoop")));
          }),
          t
        );
      })(),
      f = new _();
    l.FileSaver = f;
  },
  98,
);
