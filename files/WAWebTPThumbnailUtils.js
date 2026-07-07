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
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.file,
            i = t.fileName,
            l = t.options,
            s = t.signal;
          if (
            !o("WAWebTPPdfViewerGatingUtils").isWebTPThumbnailRendererEnabled()
          )
            return (e || (e = n("Promise"))).reject(
              r("err")("WebTP PDF thumbnail renderer is not enabled"),
            );
          var u = new (o("WAWebTPPdfViewerQpl").WebTPPdfViewerQpl)();
          (u.initialize("thumbnail"), u.renderThumbnailStart());
          var c = _.getIframe(),
            d = new (o("WAWebTPThumbnailRenderer").WAWebTPThumbnailRenderer)(c),
            m = null,
            p = new (e || (e = n("Promise")))(function (e, t) {
              m = t;
            }),
            f = function () {
              m != null &&
                m(
                  new (o("WAAbortError").AbortError)(
                    "Render thumbnail aborted",
                  ),
                );
            };
          (s != null && (s.aborted ? f() : s.addEventListener("abort", f)),
            d.listen("QPL", function (e) {
              e.forEach(function (e) {
                var t = e.data,
                  n = e.pointName,
                  r = e.timestamp;
                u.addIframePoint(n, r, t);
              });
            }),
            d.listen("APP_READY", function () {
              u.appReady();
            }),
            d.listen("APP_ERROR", function () {
              u.appError();
            }));
          try {
            var g = yield (e || (e = n("Promise"))).race([
                d.getThumbnail({
                  file: a,
                  fileName: i,
                  width: l.width,
                  height: l.height,
                }),
                p,
              ]),
              h = yield o(
                "WAWebCryptoCalculateFilehash",
              ).calculateFilehashFromBlob(a);
            return (
              o("WAWebTPLoggingUtils").logThumbnailTelemetryDataEvent(
                g.perfData,
                h,
                a.size,
                g.sdkVersion,
              ),
              u.renderThumbnailEnd(),
              {
                thumbnail: g.thumbnail,
                numPages: g.numPages,
                perfData: g.perfData,
              }
            );
          } catch (e) {
            var y = yield o(
              "WAWebCryptoCalculateFilehash",
            ).calculateFilehashFromBlob(a);
            throw (
              o("WAWebTPLoggingUtils").logThumbnailRenderErrorEvent(
                e,
                y,
                a.size,
              ),
              u.renderThumbnailError(),
              e
            );
          } finally {
            (s == null || s.removeEventListener("abort", f),
              d.destroy(),
              _.release());
          }
        })),
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
