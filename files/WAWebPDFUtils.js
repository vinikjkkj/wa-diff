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
    "WAWebMediaOpaqueData",
    "WAWebMiscErrors",
    "WAWebPDFWorkerSrc",
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
      var n = document.createElement("canvas");
      return e
        .getPage(t)
        .then(function (e) {
          var t = e.getViewport({ scale: 1 }),
            r = n.getContext("2d");
          ((n.height = t.height), (n.width = t.width));
          var o = { canvasContext: r, viewport: t };
          return e.render(o).promise;
        })
        .then(function () {
          var e;
          return o("WAPromiseProps").promiseProps({
            blob: o("WAWebCanvasUtils").canvasToBlob(n),
            thumbnail: (e = o("WAWebImageUtils")).rotateAndResize(
              n,
              o("WAWebMediaConstants").DOC_THUMB_MAX_EDGE,
              e.DATA_URL | e.CANVAS | e.BLOB,
            ),
            microThumbnail: o("WAWebABProps").getABPropConfigValue(
              "upload_document_thumb_mms_enabled",
            )
              ? o("WAWebCanvasUtils").generateMicroThumb(
                  n,
                  o("WAWebABProps").getABPropConfigValue(
                    "web_pdf_thumbnail_size_in_bytes",
                  ),
                  { mimetype: "image/jpeg", maxAttempts: 10 },
                )
              : Promise.resolve(null),
          });
        })
        .then(function (e) {
          return e;
        })
        .then(async function (t) {
          var n = t.blob,
            a = t.microThumbnail,
            i = t.thumbnail,
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
            fullPreviewData: await r("WAWebMediaOpaqueData").createFromData(
              s,
              "image/jpeg",
            ),
            fullPreviewSize: { width: u.width, height: u.height },
            pdfPages: e.numPages,
            microThumbnail: a,
          };
        });
    }
    ((l.fileToPdf = s), (l.releasePdf = u), (l.pdfToImg = c));
  },
  98,
);
