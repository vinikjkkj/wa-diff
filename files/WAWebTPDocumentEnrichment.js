__d(
  "WAWebTPDocumentEnrichment",
  [
    "Promise",
    "WAWebABProps",
    "WAWebCanvasUtils",
    "WAWebImageUtils",
    "WAWebMediaConstants",
    "WAWebMediaFileErrors",
    "WAWebMediaOpaqueData",
    "WAWebTPThumbnailUtils",
    "asyncToGeneratorRuntime",
    "nullthrows",
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
            return n(new (o("WAWebMediaFileErrors").MediaFileFailedLoad)(t));
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
            u = new Blob([l.slice()], { type: "image/jpeg" }),
            c = URL.createObjectURL(u),
            d = yield s(c),
            m = document.createElement("canvas");
          ((m.width = d.naturalWidth), (m.height = d.naturalHeight));
          var p = r("nullthrows")(m.getContext("2d"));
          p.drawImage(d, 0, 0);
          var _ = yield (n = o("WAWebImageUtils")).rotateAndResize(
              m,
              o("WAWebMediaConstants").DOC_THUMB_MAX_EDGE,
              n.DATA_URL | n.CANVAS | n.BLOB,
            ),
            f = _.height,
            g = _.images,
            h = _.width;
          ((m.width = 0), (m.height = 0));
          var y = g.blob,
            C = g.canvas,
            b = g.dataUrl;
          if (C == null || y == null || b == null)
            throw new (o("WAWebMediaFileErrors").MediaFileFailedLoad)();
          var v = yield o("WAWebCanvasUtils").generateMicroThumb(
              C,
              o("WAWebABProps").getABPropConfigValue(
                "web_pdf_thumbnail_size_in_bytes",
              ),
              { mimetype: "image/jpeg", maxAttempts: 10 },
            ),
            S = yield r("WAWebMediaOpaqueData").createFromData(y, "image/jpeg");
          return {
            url: c,
            thumbUrl: b,
            width: h,
            height: f,
            fullPreviewData: S,
            fullPreviewSize: { width: h, height: f },
            pdfPages: i,
            microThumbnail: v,
          };
        })),
        c.apply(this, arguments)
      );
    }
    l.enrichPdfViaWebTP = u;
  },
  98,
);
