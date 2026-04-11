__d(
  "WAWebPDFUtils",
  [
    "JSResourceForInteraction",
    "Promise",
    "WABackoffUtils",
    "WAPromiseDelays",
    "WAPromiseLoop",
    "WAPromiseProps",
    "WAWebABProps",
    "WAWebCanvasUtils",
    "WAWebImageUtils",
    "WAWebMediaConstants",
    "WAWebMediaOpaqueData",
    "WAWebMiscErrors",
    "WAWebPDFWorkerSrc",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return o("WAPromiseLoop").promiseLoop(function (e, t, n) {
        var a = o("WAPromiseDelays").delayMs(
          o("WABackoffUtils").expBackoff(n, 12e4, 0, 0),
        );
        return r("JSResourceForInteraction")("pdfjs-dist")
          .__setRef("WAWebPDFUtils")
          .load()
          .then(function (t) {
            ((t.GlobalWorkerOptions.workerSrc =
              o("WAWebPDFWorkerSrc").getWorkerSrc()),
              e({
                GlobalWorkerOptions: t.GlobalWorkerOptions,
                getDocument: t.getDocument,
              }));
          })
          .catch(function () {
            return a;
          });
      });
    }
    function u(e) {
      var t = URL.createObjectURL(e);
      return s().then(function (e) {
        return e.getDocument({ url: t, isEvalSupported: !1 }).promise;
      });
    }
    function c(e) {
      return e.destroy();
    }
    function d(t, a) {
      var i = document.createElement("canvas");
      return t
        .getPage(a)
        .then(function (e) {
          var t = e.getViewport({ scale: 1 }),
            n = i.getContext("2d");
          ((i.height = t.height), (i.width = t.width));
          var r = { canvasContext: n, viewport: t };
          return e.render(r).promise;
        })
        .then(function () {
          var t;
          return o("WAPromiseProps").promiseProps({
            blob: o("WAWebCanvasUtils").canvasToBlob(i),
            thumbnail: (t = o("WAWebImageUtils")).rotateAndResize(
              i,
              o("WAWebMediaConstants").DOC_THUMB_MAX_EDGE,
              t.DATA_URL | t.CANVAS | t.BLOB,
            ),
            microThumbnail: o("WAWebABProps").getABPropConfigValue(
              "upload_document_thumb_mms_enabled",
            )
              ? o("WAWebCanvasUtils").generateMicroThumb(
                  i,
                  o("WAWebABProps").getABPropConfigValue(
                    "web_pdf_thumbnail_size_in_bytes",
                  ),
                  { mimetype: "image/jpeg", maxAttempts: 10 },
                )
              : (e || (e = n("Promise"))).resolve(null),
          });
        })
        .then(function (e) {
          return e;
        })
        .then(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var n = e.blob,
                  a = e.microThumbnail,
                  i = e.thumbnail,
                  l = i.images,
                  s = l.blob,
                  u = l.canvas,
                  c = l.dataUrl;
                if (u == null || s == null || c == null)
                  throw new (o("WAWebMiscErrors").MediaFileFailedLoad)();
                return {
                  url: URL.createObjectURL(n),
                  thumbUrl: c,
                  width: u.width,
                  height: u.height,
                  fullPreviewData: yield r(
                    "WAWebMediaOpaqueData",
                  ).createFromData(s, "image/jpeg"),
                  fullPreviewSize: { width: u.width, height: u.height },
                  pdfPages: t.numPages,
                  microThumbnail: a,
                };
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        );
    }
    ((l.fileToPdf = u), (l.releasePdf = c), (l.pdfToImg = d));
  },
  98,
);
