__d(
  "WAWebPdfViewerEventEmitter",
  ["WAWebEventEmitter"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (r("WAWebEventEmitter"))();
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
