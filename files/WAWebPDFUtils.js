__d(
  "WAWebPDFUtils",
  [
    "JSResourceForInteraction",
    "WABackoffUtils",
    "WAPromiseDelays",
    "WAPromiseLoop",
    "WAPromiseProps",
    "WAWebABProps",
    "WAWebCanvasUtils",
    "WAWebImageUtils",
    "WAWebMediaConstants",
    "WAWebMediaFileErrors",
    "WAWebMediaOpaqueData",
    "WAWebPDFWorkerSrc",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
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
    function s(t) {
      var n = URL.createObjectURL(t);
      return e().then(function (e) {
        return e.getDocument({ url: n, isEvalSupported: !1 }).promise;
      });
    }
    function u(e) {
      return e.destroy();
    }
    function c(e, t) {
      var a = document.createElement("canvas");
      return e
        .getPage(t)
        .then(function (e) {
          var t = e.getViewport({ scale: 1 }),
            n = a.getContext("2d");
          ((a.height = t.height), (a.width = t.width));
          var r = { canvasContext: n, viewport: t };
          return e.render(r).promise;
        })
        .then(function () {
          var e;
          return o("WAPromiseProps").promiseProps({
            blob: o("WAWebCanvasUtils").canvasToBlob(a),
            thumbnail: (e = o("WAWebImageUtils")).rotateAndResize(
              a,
              o("WAWebMediaConstants").DOC_THUMB_MAX_EDGE,
              e.DATA_URL | e.CANVAS | e.BLOB,
            ),
            microThumbnail: o("WAWebCanvasUtils").generateMicroThumb(
              a,
              o("WAWebABProps").getABPropConfigValue(
                "web_pdf_thumbnail_size_in_bytes",
              ),
              { mimetype: "image/jpeg", maxAttempts: 10 },
            ),
          });
        })
        .then(function (e) {
          return e;
        })
        .then(
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = t.blob,
                  a = t.microThumbnail,
                  i = t.thumbnail,
                  l = i.images,
                  s = l.blob,
                  u = l.canvas,
                  c = l.dataUrl;
                if (u == null || s == null || c == null)
                  throw new (o("WAWebMediaFileErrors").MediaFileFailedLoad)();
                return {
                  url: URL.createObjectURL(n),
                  thumbUrl: c,
                  width: u.width,
                  height: u.height,
                  fullPreviewData: yield r(
                    "WAWebMediaOpaqueData",
                  ).createFromData(s, "image/jpeg"),
                  fullPreviewSize: { width: u.width, height: u.height },
                  pdfPages: e.numPages,
                  microThumbnail: a,
                };
              },
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
        );
    }
    ((l.fileToPdf = s), (l.releasePdf = u), (l.pdfToImg = c));
  },
  98,
);
