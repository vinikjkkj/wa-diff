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
    var p = { pdfImg: null, isPasswordProtected: void 0 };
    function _(e, t, r) {
      if (
        o("WAWebMimeTypes").previewType(t) !== "pdf" ||
        (r == null ? void 0 : r.aborted) === !0
      )
        return (d || (d = n("Promise"))).resolve(p);
      var a = f(e, r);
      return r == null
        ? a
        : new (d || (d = n("Promise")))(function (e) {
            var t = function () {
              (r.removeEventListener("abort", t), e(p));
            };
            (r.addEventListener("abort", t),
              a
                .then(function (n) {
                  (r.removeEventListener("abort", t), e(n));
                })
                .catch(function () {
                  (r.removeEventListener("abort", t), e(p));
                }));
          });
    }
    function f(t, n) {
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
                .enrichPdfViaWebTP(t, n)
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
                    m(e) ? { pdfImg: null, isPasswordProtected: !0 } : p
                  );
                }),
              o("WAWebTPThumbnailRenderer").getPdfThumbnailTimeoutMs(),
              "Document enrichment timeout",
            )
            .catch(function () {
              return p;
            })
        );
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "[webtp] Using default PDF.js renderer for PDF thumbnail",
          ])),
      );
      var r = new (o("WAWebTPPdfViewerQpl").WebTPPdfViewerQpl)();
      return (
        r.initialize("pdfjs"),
        r.renderThumbnailStart(),
        o("WAPromiseTimeout")
          .promiseTimeout(
            g(t, n),
            o("WAWebTPThumbnailRenderer").getPdfThumbnailTimeoutMs(),
            "Document enrichment timeout",
          )
          .then(function (e) {
            return (
              r.renderThumbnailEnd(),
              { pdfImg: e, isPasswordProtected: void 0 }
            );
          })
          .catch(function () {
            return (r.renderThumbnailError(), p);
          })
      );
    }
    function g(e, t) {
      var n;
      return o("WAWebPDFUtils")
        .fileToPdf(e)
        .then(function (e) {
          return (
            (n = e),
            (t == null ? void 0 : t.aborted) === !0
              ? null
              : o("WAWebPDFUtils").pdfToImg(e, 1)
          );
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
          n && o("WAWebPDFUtils").releasePdf(n);
        });
    }
    l.enrich = _;
  },
  98,
);
