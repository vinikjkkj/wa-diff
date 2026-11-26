__d(
  "WAWebTPIframeUtils",
  [
    "WAWebPonyfillsIdleCallback",
    "WAWebTPFrameUrlBuilder",
    "WAWebTPPdfViewerGatingUtils",
    "WAWebTPThumbnailUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 3e4,
      s = !1,
      u = null,
      c = null;
    function d(e) {
      !o("WAWebTPPdfViewerGatingUtils").isWebTPThumbnailRendererEnabled() ||
        s ||
        ((s = !0),
        o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
          var e = o("WAWebTPFrameUrlBuilder").getWAWebTPThumbnailUrl(),
            t = o("WAWebTPThumbnailUtils").getSandboxIframe(
              e,
              o("WAWebTPThumbnailUtils").WEBTP_THUMBNAIL_IFRAME_ID,
            );
          o("WAWebTPThumbnailUtils").appendToDocumentBody(t);
        }));
    }
    function m() {
      if (u != null) {
        (o("WAWebPonyfillsIdleCallback").cancelIdleCallback(u), (u = null));
        return;
      }
      var e = document.getElementById(
        o("WAWebTPThumbnailUtils").WEBTP_VIEWER_IFRAME_ID,
      );
      e instanceof HTMLIFrameElement && e.remove();
    }
    function p(e, t) {
      o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabledForMimeType(e) &&
        (c = o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
          c = null;
          var e = o("WAWebTPFrameUrlBuilder").getWAWebTPPdfInlineSharerUrl(),
            t = o("WAWebTPThumbnailUtils").getSandboxIframe(
              e,
              o("WAWebTPThumbnailUtils").WEBTP_INLINE_SHARER_IFRAME_ID,
            );
          o("WAWebTPThumbnailUtils").appendToDocumentBody(t);
        }));
    }
    function _() {
      if (c != null) {
        (o("WAWebPonyfillsIdleCallback").cancelIdleCallback(c), (c = null));
        return;
      }
      var e = document.getElementById(
        o("WAWebTPThumbnailUtils").WEBTP_INLINE_SHARER_IFRAME_ID,
      );
      e instanceof HTMLIFrameElement && e.remove();
    }
    function f(t, n) {
      o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabledForMimeType(t) &&
        (u = o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
          u = null;
          var t = o("WAWebTPFrameUrlBuilder").getWAWebTPPdfViewerUrl();
          if (!o("WAWebTPPdfViewerGatingUtils").isWebTPLocalPdfSdkEnabled()) {
            o("WAWebTPThumbnailUtils").appendToDocumentBody(
              o("WAWebTPThumbnailUtils").getSandboxIframe(
                t,
                o("WAWebTPThumbnailUtils").WEBTP_VIEWER_IFRAME_ID,
              ),
            );
            return;
          }
          var n = o(
            "WAWebTPPdfViewerGatingUtils",
          ).isWebTPPdfAnnotationsEnabled()
            ? "annotations"
            : "view";
          o("WAWebTPThumbnailUtils").appendToDocumentBody(
            o("WAWebTPThumbnailUtils").getSandboxIframe(
              t + "&prewarm=" + n,
              o("WAWebTPThumbnailUtils").WEBTP_VIEWER_IFRAME_ID,
            ),
            e,
          );
        }));
    }
    ((l.getSandboxIframe = o("WAWebTPThumbnailUtils").getSandboxIframe),
      (l.renderWebTPThumbnailIfEnabled = o(
        "WAWebTPThumbnailUtils",
      ).renderWebTPThumbnailIfEnabled),
      (l.preloadWebTPThumbnailRendererIfEnabled = d),
      (l.removePreloadedIframe = m),
      (l.preloadWebTPInlineSharerIframeIfEnabled = p),
      (l.removePreloadedInlineSharerIframe = _),
      (l.preloadWebTPIframeIfEnabled = f));
  },
  98,
);
