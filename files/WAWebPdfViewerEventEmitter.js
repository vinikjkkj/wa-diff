__d(
  "WAWebPdfViewerEventEmitter",
  ["WAWebTypedEventEmitter"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (r("WAWebTypedEventEmitter"))();
    function s(t, n) {
      t != null &&
        e.trigger("annotation:command", {
          type: "updateToolConfig",
          annotationType: t,
          config: n,
        });
    }
    ((l.pdfViewerEventEmitter = e), (l.updateAnnotationToolConfig = s));
  },
  98,
);
