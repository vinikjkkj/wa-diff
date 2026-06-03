__d(
  "WAWebTPThumbnailUtils",
  [
    "Promise",
    "WAAbortError",
    "WAWebCryptoCalculateFilehash",
    "WAWebTPFrameUrlBuilder",
    "WAWebTPLoggingUtils",
    "WAWebTPPdfViewerGatingUtils",
    "WAWebTPPdfViewerQpl",
    "WAWebTPThumbnailRenderer",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "webtp-iframe-thumbnail",
      u = "webtp-iframe-pdf-viewer",
      c = "webtp-iframe-inline-sharer";
    function d(e, t) {
      var n,
        r = document.getElementById(t);
      if (r instanceof HTMLIFrameElement) return r;
      var o = document.createElement("iframe");
      return (
        o.setAttribute("id", t),
        o.setAttribute("data-testid", t),
        o.removeAttribute("sandbox"),
        o.removeAttribute("credentialless"),
        (o.src = e),
        (n = o.sandbox).add.apply(n, ["allow-scripts", "allow-same-origin"]),
        (o.style.display = "none"),
        o
      );
    }
    function m(e) {
      e.parentElement ||
        (document.body.appendChild(e),
        (e.onerror = function () {
          e.remove();
        }),
        (e.onload = function () {
          ((e.id === u || e.id === c) && e.remove(),
            e.id === s && _.getReferenceNumber() <= 0 && e.remove());
        }));
    }
    var p = (function () {
        function e() {
          this.$1 = 0;
        }
        var t = e.prototype;
        return (
          (t.getReferenceNumber = function () {
            return this.$1;
          }),
          (t.getIframe = function () {
            var e = this;
            this.$1++;
            var t = document.getElementById(s);
            if (t instanceof HTMLIFrameElement) return t;
            var n = o("WAWebTPFrameUrlBuilder").getWAWebTPThumbnailUrl(),
              r = d(n, s);
            return (
              m(r),
              (r.onerror = function () {
                (r.remove(), (e.$1 = 0));
              }),
              (r.onload = function () {
                e.$1 <= 0 && r.remove();
              }),
              r
            );
          }),
          (t.release = function () {
            if (!(this.$1 <= 0) && (this.$1--, this.$1 === 0)) {
              var e = document.getElementById(s);
              e instanceof HTMLIFrameElement && e.remove();
            }
          }),
          e
        );
      })(),
      _ = new p();
    function f(e, t, n, r) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l) {
            if (
              !o(
                "WAWebTPPdfViewerGatingUtils",
              ).isWebTPThumbnailRendererEnabled()
            )
              return (e || (e = n("Promise"))).reject(
                r("err")("WebTP PDF thumbnail renderer is not enabled"),
              );
            var s = new (o("WAWebTPPdfViewerQpl").WebTPPdfViewerQpl)();
            (s.initialize("thumbnail"), s.renderThumbnailStart());
            var u = _.getIframe(),
              c = new (o("WAWebTPThumbnailRenderer").WAWebTPThumbnailRenderer)(
                u,
              ),
              d = null,
              m = new (e || (e = n("Promise")))(function (e, t) {
                d = t;
              }),
              p = function () {
                d != null &&
                  d(
                    new (o("WAAbortError").AbortError)(
                      "Render thumbnail aborted",
                    ),
                  );
              };
            (l != null && (l.aborted ? p() : l.addEventListener("abort", p)),
              c.listen("QPL", function (e) {
                e.forEach(function (e) {
                  var t = e.data,
                    n = e.pointName,
                    r = e.timestamp;
                  s.addIframePoint(n, r, t);
                });
              }),
              c.listen("APP_READY", function () {
                s.appReady();
              }),
              c.listen("APP_ERROR", function () {
                s.appError();
              }));
            try {
              var f = yield (e || (e = n("Promise"))).race([
                  c.getThumbnail({
                    file: t,
                    fileName: a,
                    width: i.width,
                    height: i.height,
                  }),
                  m,
                ]),
                g = yield o(
                  "WAWebCryptoCalculateFilehash",
                ).calculateFilehashFromBlob(t);
              return (
                o("WAWebTPLoggingUtils").logThumbnailTelemetryDataEvent(
                  f.perfData,
                  g,
                  t.size,
                  f.sdkVersion,
                ),
                s.renderThumbnailEnd(),
                {
                  thumbnail: f.thumbnail,
                  numPages: f.numPages,
                  perfData: f.perfData,
                }
              );
            } catch (e) {
              var h = yield o(
                "WAWebCryptoCalculateFilehash",
              ).calculateFilehashFromBlob(t);
              throw (
                o("WAWebTPLoggingUtils").logThumbnailRenderErrorEvent(
                  e,
                  h,
                  t.size,
                ),
                s.renderThumbnailError(),
                e
              );
            } finally {
              (l == null || l.removeEventListener("abort", p),
                c.destroy(),
                _.release());
            }
          },
        )),
        g.apply(this, arguments)
      );
    }
    ((l.WEBTP_THUMBNAIL_IFRAME_ID = s),
      (l.WEBTP_VIEWER_IFRAME_ID = u),
      (l.WEBTP_INLINE_SHARER_IFRAME_ID = c),
      (l.getSandboxIframe = d),
      (l.appendToDocumentBody = m),
      (l.renderWebTPThumbnailIfEnabled = f));
  },
  98,
);
