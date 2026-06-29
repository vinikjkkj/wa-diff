__d(
  "WAWebTPFetchAnnotatedPdfBuffer",
  ["Promise", "WALogger", "WAWebPdfViewerEventEmitter"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 6e4;
    function c() {
      return new (s || (s = n("Promise")))(function (t) {
        var n = null;
        function r(e) {
          (n != null && (window.clearTimeout(n), (n = null)),
            o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.off(
              "pdf:updatedBuffer",
              a,
            ),
            t(e));
        }
        var a = function (t) {
          r(t);
        };
        (o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.on(
          "pdf:updatedBuffer",
          a,
        ),
          (n = window.setTimeout(function () {
            (o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Timed out waiting for annotated PDF buffer",
                  ])),
              )
              .sendLogs("edit-pdf-buffer-timeout"),
              r(null));
          }, u)),
          o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger(
            "pdf:getUpdatedBuffer",
          ));
      });
    }
    l.fetchAnnotatedPdfBuffer = c;
  },
  98,
);
