__d(
  "WAWebTPAnnotatedBufferUtils",
  ["Promise", "WALogger", "WAPromiseDelays", "WAWebPdfViewerEventEmitter"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 5e3;
    function c(t) {
      return t
        ? new (s || (s = n("Promise")))(function (t) {
            var n = !1,
              r = function (a) {
                n ||
                  ((n = !0),
                  o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.off(
                    "pdf:updatedBuffer",
                    r,
                  ),
                  t(a));
              };
            (o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.on(
              "pdf:updatedBuffer",
              r,
            ),
              o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.trigger(
                "pdf:getUpdatedBuffer",
              ),
              o("WAPromiseDelays")
                .delayMs(u)
                .then(function () {
                  n ||
                    ((n = !0),
                    o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.off(
                      "pdf:updatedBuffer",
                      r,
                    ),
                    o("WALogger")
                      .ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "Timed out waiting for annotated PDF buffer in Edit in Acrobat handoff",
                          ])),
                      )
                      .sendLogs("edit-in-acrobat-annotated-buffer-timeout"),
                    t(null));
                }));
          })
        : (s || (s = n("Promise"))).resolve(null);
    }
    l.getAnnotatedPdfBuffer = c;
  },
  98,
);
