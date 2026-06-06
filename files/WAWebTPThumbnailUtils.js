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
    async function _(e, t, n, a) {
      if (!o("WAWebTPPdfViewerGatingUtils").isWebTPThumbnailRendererEnabled())
        return Promise.reject(
          r("err")("WebTP PDF thumbnail renderer is not enabled"),
        );
      var i = new (o("WAWebTPPdfViewerQpl").WebTPPdfViewerQpl)();
      (i.initialize("thumbnail"), i.renderThumbnailStart());
      var l = p.getIframe(),
        s = new (o("WAWebTPThumbnailRenderer").WAWebTPThumbnailRenderer)(l),
        u = null,
        c = new Promise(function (e, t) {
          u = t;
        }),
        d = function () {
          u != null &&
            u(new (o("WAAbortError").AbortError)("Render thumbnail aborted"));
        };
      (a != null && (a.aborted ? d() : a.addEventListener("abort", d)),
        s.listen("QPL", function (e) {
          e.forEach(function (e) {
            var t = e.data,
              n = e.pointName,
              r = e.timestamp;
            i.addIframePoint(n, r, t);
          });
        }),
        s.listen("APP_READY", function () {
          i.appReady();
        }),
        s.listen("APP_ERROR", function () {
          i.appError();
        }));
      try {
        var m = await Promise.race([
            s.getThumbnail({
              file: e,
              fileName: t,
              width: n.width,
              height: n.height,
            }),
            c,
          ]),
          _ = await o("WAWebCryptoCalculateFilehash").calculateFilehashFromBlob(
            e,
          );
        return (
          o("WAWebTPLoggingUtils").logThumbnailTelemetryDataEvent(
            m.perfData,
            _,
            e.size,
            m.sdkVersion,
          ),
          i.renderThumbnailEnd(),
          { thumbnail: m.thumbnail, numPages: m.numPages, perfData: m.perfData }
        );
      } catch (t) {
        var f = await o(
          "WAWebCryptoCalculateFilehash",
        ).calculateFilehashFromBlob(e);
        throw (
          o("WAWebTPLoggingUtils").logThumbnailRenderErrorEvent(t, f, e.size),
          i.renderThumbnailError(),
          t
        );
      } finally {
        (a == null || a.removeEventListener("abort", d),
          s.destroy(),
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
