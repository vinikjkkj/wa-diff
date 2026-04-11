__d(
  "WAWebDocumentUploadEnrichment",
  [
    "Promise",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebMimeTypes",
    "WAWebPDFUtils",
    "WAWebTPDocumentEnrichment",
    "WAWebTPPdfViewerGatingUtils",
    "WAWebTPPdfViewerQpl",
    "WAWebTPThumbnailRenderer",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e) {
      return (
        e != null &&
        typeof e == "object" &&
        "type" in e &&
        typeof e.type == "string" &&
        e.type === "PDFSecurityError"
      );
    }
    function p(t, r) {
      if (o("WAWebMimeTypes").previewType(r) !== "pdf")
        return (d || (d = n("Promise"))).resolve({
          pdfImg: null,
          isPasswordProtected: void 0,
        });
      if (o("WAWebTPPdfViewerGatingUtils").isWebTPThumbnailRendererEnabled())
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[webtp] Using WebTP renderer for PDF thumbnail",
              ])),
          ),
          o("WAPromiseTimeout")
            .promiseTimeout(
              o("WAWebTPDocumentEnrichment")
                .enrichPdfViaWebTP(t)
                .then(function (e) {
                  return { pdfImg: e, isPasswordProtected: !1 };
                })
                .catch(function (e) {
                  return (
                    o("WALogger").LOG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "WebTP pdf thumbnail failed, falling back to PDF.js",
                        ])),
                    ),
                    m(e)
                      ? { pdfImg: null, isPasswordProtected: !0 }
                      : { pdfImg: null, isPasswordProtected: void 0 }
                  );
                }),
              o("WAWebTPThumbnailRenderer").PDF_RENDER_THUMBNAIL_TIMEOUT_MS,
              "Document enrichment timeout",
            )
            .catch(function () {
              return { pdfImg: null, isPasswordProtected: void 0 };
            })
        );
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "[webtp] Using default PDF.js renderer for PDF thumbnail",
          ])),
      );
      var a = new (o("WAWebTPPdfViewerQpl").WebTPPdfViewerQpl)();
      return (
        a.initialize("pdfjs"),
        a.renderThumbnailStart(),
        o("WAPromiseTimeout")
          .promiseTimeout(_(t), 3e3, "Document enrichment timeout")
          .then(function (e) {
            return (
              a.renderThumbnailEnd(),
              { pdfImg: e, isPasswordProtected: void 0 }
            );
          })
          .catch(function () {
            return (
              a.renderThumbnailError(),
              { pdfImg: null, isPasswordProtected: void 0 }
            );
          })
      );
    }
    function _(e) {
      var t;
      return o("WAWebPDFUtils")
        .fileToPdf(e)
        .then(function (e) {
          return ((t = e), o("WAWebPDFUtils").pdfToImg(e, 1));
        })
        .catch(function (e) {
          return (
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "pdf preview generation failed",
                ])),
            ),
            null
          );
        })
        .finally(function () {
          t && o("WAWebPDFUtils").releasePdf(t);
        });
    }
    l.enrich = p;
  },
  98,
);
