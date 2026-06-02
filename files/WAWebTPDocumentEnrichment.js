__d(
  "WAWebTPDocumentEnrichment",
  [
    "WAWebABProps",
    "WAWebCanvasUtils",
    "WAWebImageUtils",
    "WAWebMediaConstants",
    "WAWebMediaOpaqueData",
    "WAWebMiscErrors",
    "WAWebTPThumbnailUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return new Promise(function (t, n) {
        var r = new Image();
        ((r.onload = function () {
          return t(r);
        }),
          (r.onerror = function () {
            return n(new (o("WAWebMiscErrors").MediaFileFailedLoad)(e));
          }),
          (r.src = e));
      });
    }
    async function s(t, n) {
      var a,
        i = await o("WAWebTPThumbnailUtils").renderWebTPThumbnailIfEnabled(
          t,
          "",
          {
            width: o("WAWebMediaConstants").DOC_THUMB_MAX_EDGE,
            height: o("WAWebMediaConstants").DOC_THUMB_MAX_EDGE,
          },
          n,
        ),
        l = i.numPages,
        s = i.thumbnail,
        u = new Uint8Array(s.buffer, s.byteOffset, s.byteLength),
        c = new Blob([u], { type: "image/jpeg" }),
        d = URL.createObjectURL(c),
        m = await e(d),
        p = document.createElement("canvas");
      ((p.width = m.naturalWidth), (p.height = m.naturalHeight));
      var _ = p.getContext("2d");
      _.drawImage(m, 0, 0);
      var f = await (a = o("WAWebImageUtils")).rotateAndResize(
          p,
          o("WAWebMediaConstants").DOC_THUMB_MAX_EDGE,
          a.DATA_URL | a.CANVAS | a.BLOB,
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
      var S = o("WAWebABProps").getABPropConfigValue(
          "upload_document_thumb_mms_enabled",
        )
          ? await o("WAWebCanvasUtils").generateMicroThumb(
              b,
              o("WAWebABProps").getABPropConfigValue(
                "web_pdf_thumbnail_size_in_bytes",
              ),
              { mimetype: "image/jpeg", maxAttempts: 10 },
            )
          : null,
        R = await r("WAWebMediaOpaqueData").createFromData(C, "image/jpeg");
      return {
        url: d,
        thumbUrl: v,
        width: y,
        height: g,
        fullPreviewData: R,
        fullPreviewSize: { width: y, height: g },
        pdfPages: l,
        microThumbnail: S,
      };
    }
    l.enrichPdfViaWebTP = s;
  },
  98,
);
