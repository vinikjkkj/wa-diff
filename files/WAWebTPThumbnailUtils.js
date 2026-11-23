__d(
  "WAWebTPThumbnailUtils",
  [
    "WAAbortError",
    "WAWebCryptoCalculateFilehash",
    "WAWebTPFrameUrlBuilder",
    "WAWebTPLoggingUtils",
    "WAWebTPPdfViewerGatingUtils",
    "WAWebTPPdfViewerQpl",
    "WAWebTPThumbnailRenderer",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "webtp-iframe-thumbnail",
      s = "webtp-iframe-pdf-viewer",
      u = "webtp-iframe-inline-sharer";
    function c(e, t) {
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
    function d(t) {
      t.parentElement ||
        (document.body.appendChild(t),
        (t.onerror = function () {
          t.remove();
        }),
        (t.onload = function () {
          ((t.id === s || t.id === u) && t.remove(),
            t.id === e && p.getReferenceNumber() <= 0 && t.remove());
        }));
    }
    var m = (function () {
        function t() {
          this.$1 = 0;
        }
        var n = t.prototype;
        return (
          (n.getReferenceNumber = function () {
            return this.$1;
          }),
          (n.getIframe = function () {
            var t = this;
            this.$1++;
            var n = document.getElementById(e);
            if (n instanceof HTMLIFrameElement) return n;
            var r = o("WAWebTPFrameUrlBuilder").getWAWebTPThumbnailUrl(),
              a = c(r, e);
            return (
              d(a),
              (a.onerror = function () {
                (a.remove(), (t.$1 = 0));
              }),
              (a.onload = function () {
                t.$1 <= 0 && a.remove();
              }),
              a
            );
          }),
          (n.release = function () {
            if (!(this.$1 <= 0) && (this.$1--, this.$1 === 0)) {
              var t = document.getElementById(e);
              t instanceof HTMLIFrameElement && t.remove();
            }
          }),
          t
        );
      })(),
      p = new m();
    async function _(e) {
      var t = e.file,
        n = e.fileName,
        a = e.options,
        i = e.signal;
      if (!o("WAWebTPPdfViewerGatingUtils").isWebTPThumbnailRendererEnabled())
        return Promise.reject(
          r("err")("WebTP PDF thumbnail renderer is not enabled"),
        );
      var l = await o("WAWebCryptoCalculateFilehash").calculateFilehashFromBlob(
        t,
      );
      o("WAWebTPLoggingUtils").logThumbnailRenderAttemptEvent(l, t.size);
      var s = new (o("WAWebTPPdfViewerQpl").WebTPPdfViewerQpl)();
      (s.initialize("thumbnail"), s.renderThumbnailStart());
      var u = p.getIframe(),
        c = new (o("WAWebTPThumbnailRenderer").WAWebTPThumbnailRenderer)(u),
        d = null,
        m = new Promise(function (e, t) {
          d = t;
        }),
        _ = function () {
          d != null &&
            d(new (o("WAAbortError").AbortError)("Render thumbnail aborted"));
        };
      (i != null && (i.aborted ? _() : i.addEventListener("abort", _)),
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
        var f = await Promise.race([
          c.getThumbnail({
            file: t,
            fileName: n,
            width: a.width,
            height: a.height,
          }),
          m,
        ]);
        return (
          o("WAWebTPLoggingUtils").logThumbnailTelemetryDataEvent(
            f.perfData,
            l,
            t.size,
            f.sdkVersion,
          ),
          s.renderThumbnailEnd(),
          { thumbnail: f.thumbnail, numPages: f.numPages, perfData: f.perfData }
        );
      } catch (e) {
        throw (
          o("WAWebTPLoggingUtils").logThumbnailRenderErrorEvent(e, l, t.size),
          s.renderThumbnailError(),
          e
        );
      } finally {
        (i == null || i.removeEventListener("abort", _),
          c.destroy(),
          p.release());
      }
    }
    ((l.WEBTP_THUMBNAIL_IFRAME_ID = e),
      (l.WEBTP_VIEWER_IFRAME_ID = s),
      (l.WEBTP_INLINE_SHARER_IFRAME_ID = u),
      (l.getSandboxIframe = c),
      (l.appendToDocumentBody = d),
      (l.renderWebTPThumbnailIfEnabled = _));
  },
  98,
);
