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
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o("WAWebTPThumbnailUtils").renderWebTPThumbnailIfEnabled(
              e,
              "",
              {
                width: o("WAWebMediaConstants").DOC_THUMB_MAX_EDGE,
                height: o("WAWebMediaConstants").DOC_THUMB_MAX_EDGE,
              },
            ),
            a = n.numPages,
            i = n.thumbnail,
            l = new Uint8Array(i.buffer, i.byteOffset, i.byteLength),
            u = new Blob([l], { type: "image/jpeg" }),
            c = URL.createObjectURL(u),
            d = yield s(c),
            m = document.createElement("canvas");
          ((m.width = d.naturalWidth), (m.height = d.naturalHeight));
          var p = m.getContext("2d");
          p.drawImage(d, 0, 0);
          var _ = yield (t = o("WAWebImageUtils")).rotateAndResize(
              m,
              o("WAWebMediaConstants").DOC_THUMB_MAX_EDGE,
              t.DATA_URL | t.CANVAS | t.BLOB,
            ),
            f = _.height,
            g = _.images,
            h = _.width;
          ((m.width = 0), (m.height = 0));
          var y = g.blob,
            C = g.canvas,
            b = g.dataUrl;
          if (C == null || y == null || b == null)
            throw new (o("WAWebMiscErrors").MediaFileFailedLoad)();
          var v = o("WAWebABProps").getABPropConfigValue(
              "upload_document_thumb_mms_enabled",
            )
              ? yield o("WAWebCanvasUtils").generateMicroThumb(
                  C,
                  o("WAWebABProps").getABPropConfigValue(
                    "web_pdf_thumbnail_size_in_bytes",
                  ),
                  { mimetype: "image/jpeg", maxAttempts: 10 },
                )
              : null,
            S = yield r("WAWebMediaOpaqueData").createFromData(y, "image/jpeg");
          return {
            url: c,
            thumbUrl: b,
            width: h,
            height: f,
            fullPreviewData: S,
            fullPreviewSize: { width: h, height: f },
            pdfPages: a,
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
