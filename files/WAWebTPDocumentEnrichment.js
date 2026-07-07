__d(
  "WAWebTPDocumentEnrichment",
  [
    "Promise",
    "WAWebABProps",
    "WAWebCanvasUtils",
    "WAWebImageUtils",
    "WAWebMediaConstants",
    "WAWebMediaOpaqueData",
    "WAWebMiscErrors",
    "WAWebTPThumbnailUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      return new (e || (e = n("Promise")))(function (e, n) {
        var r = new Image();
        ((r.onload = function () {
          return e(r);
        }),
          (r.onerror = function () {
            return n(new (o("WAWebMiscErrors").MediaFileFailedLoad)(t));
          }),
          (r.src = t));
      });
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a = yield o("WAWebTPThumbnailUtils").renderWebTPThumbnailIfEnabled({
              file: e,
              fileName: "",
              options: {
                width: o("WAWebMediaConstants").DOC_THUMB_MAX_EDGE,
                height: o("WAWebMediaConstants").DOC_THUMB_MAX_EDGE,
              },
              signal: t,
            }),
            i = a.numPages,
            l = a.thumbnail,
            u = new Uint8Array(l.buffer, l.byteOffset, l.byteLength),
            c = new Blob([u], { type: "image/jpeg" }),
            d = URL.createObjectURL(c),
            m = yield s(d),
            p = document.createElement("canvas");
          ((p.width = m.naturalWidth), (p.height = m.naturalHeight));
          var _ = p.getContext("2d");
          _.drawImage(m, 0, 0);
          var f = yield (n = o("WAWebImageUtils")).rotateAndResize(
              p,
              o("WAWebMediaConstants").DOC_THUMB_MAX_EDGE,
              n.DATA_URL | n.CANVAS | n.BLOB,
            ),
            g = f.height,
            h = f.images,
            y = f.width;
          ((p.width = 0), (p.height = 0));
          var C = h.blob,
            b = h.canvas,
            v = h.dataUrl;
          if (b == null || C == null || v == null)
            throw new (o("WAWebMiscErrors").MediaFileFailedLoad)();
          var S = yield o("WAWebCanvasUtils").generateMicroThumb(
              b,
              o("WAWebABProps").getABPropConfigValue(
                "web_pdf_thumbnail_size_in_bytes",
              ),
              { mimetype: "image/jpeg", maxAttempts: 10 },
            ),
            R = yield r("WAWebMediaOpaqueData").createFromData(C, "image/jpeg");
          return {
            url: d,
            thumbUrl: v,
            width: y,
            height: g,
            fullPreviewData: R,
            fullPreviewSize: { width: y, height: g },
            pdfPages: i,
            microThumbnail: S,
          };
        })),
        c.apply(this, arguments)
      );
    }
    l.enrichPdfViaWebTP = u;
  },
  98,
);
