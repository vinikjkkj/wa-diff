__d(
  "WAWebTPDocumentEnrichment",
  [
    "WAWebABProps",
    "WAWebCanvasUtils",
    "WAWebImageUtils",
    "WAWebMediaConstants",
    "WAWebMediaFileErrors",
    "WAWebMediaOpaqueData",
    "WAWebTPThumbnailUtils",
    "nullthrows",
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
            return n(new (o("WAWebMediaFileErrors").MediaFileFailedLoad)(e));
          }),
          (r.src = e));
      });
    }
    async function s(t, n) {
      var a,
        i = await o("WAWebTPThumbnailUtils").renderWebTPThumbnailIfEnabled({
          file: t,
          fileName: "",
          options: {
            width: o("WAWebMediaConstants").DOC_THUMB_MAX_EDGE,
            height: o("WAWebMediaConstants").DOC_THUMB_MAX_EDGE,
          },
          signal: n,
        }),
        l = i.numPages,
        s = i.thumbnail,
        u = new Blob([s.slice()], { type: "image/jpeg" }),
        c = URL.createObjectURL(u),
        d = await e(c),
        m = document.createElement("canvas");
      ((m.width = d.naturalWidth), (m.height = d.naturalHeight));
      var p = r("nullthrows")(m.getContext("2d"));
      p.drawImage(d, 0, 0);
      var _ = await (a = o("WAWebImageUtils")).rotateAndResize(
          m,
          o("WAWebMediaConstants").DOC_THUMB_MAX_EDGE,
          a.DATA_URL | a.CANVAS | a.BLOB,
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
      var v = await o("WAWebCanvasUtils").generateMicroThumb(
          C,
          o("WAWebABProps").getABPropConfigValue(
            "web_pdf_thumbnail_size_in_bytes",
          ),
          { mimetype: "image/jpeg", maxAttempts: 10 },
        ),
        S = await r("WAWebMediaOpaqueData").createFromData(y, "image/jpeg");
      return {
        url: c,
        thumbUrl: b,
        width: h,
        height: f,
        fullPreviewData: S,
        fullPreviewSize: { width: h, height: f },
        pdfPages: l,
        microThumbnail: v,
      };
    }
    l.enrichPdfViaWebTP = s;
  },
  98,
);
