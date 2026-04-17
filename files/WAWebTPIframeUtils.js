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
    var e = !1,
      s = null,
      u = null;
    function c(t) {
      !o("WAWebTPPdfViewerGatingUtils").isWebTPThumbnailRendererEnabled() ||
        e ||
        ((e = !0),
        o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
          var e = o("WAWebTPFrameUrlBuilder").getWAWebTPThumbnailUrl(),
            t = o("WAWebTPThumbnailUtils").getSandboxIframe(
              e,
              o("WAWebTPThumbnailUtils").WEBTP_THUMBNAIL_IFRAME_ID,
            );
          o("WAWebTPThumbnailUtils").appendToDocumentBody(t);
        }));
    }
    function d() {
      if (s != null) {
        (o("WAWebPonyfillsIdleCallback").cancelIdleCallback(s), (s = null));
        return;
      }
      var e = document.getElementById(
        o("WAWebTPThumbnailUtils").WEBTP_VIEWER_IFRAME_ID,
      );
      e instanceof HTMLIFrameElement && e.remove();
    }
    function m(e, t) {
      o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabledForMimeType(e) &&
        (u = o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
          u = null;
          var e = o("WAWebTPFrameUrlBuilder").getWAWebTPPdfInlineSharerUrl(),
            t = o("WAWebTPThumbnailUtils").getSandboxIframe(
              e,
              o("WAWebTPThumbnailUtils").WEBTP_INLINE_SHARER_IFRAME_ID,
            );
          o("WAWebTPThumbnailUtils").appendToDocumentBody(t);
        }));
    }
    function p() {
      if (u != null) {
        (o("WAWebPonyfillsIdleCallback").cancelIdleCallback(u), (u = null));
        return;
      }
      var e = document.getElementById(
        o("WAWebTPThumbnailUtils").WEBTP_INLINE_SHARER_IFRAME_ID,
      );
      e instanceof HTMLIFrameElement && e.remove();
    }
    function _(e, t) {
      o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabledForMimeType(e) &&
        (s = o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
          s = null;
          var e = o("WAWebTPFrameUrlBuilder").getWAWebTPPdfViewerUrl(),
            t = o("WAWebTPThumbnailUtils").getSandboxIframe(
              e,
              o("WAWebTPThumbnailUtils").WEBTP_VIEWER_IFRAME_ID,
            );
          o("WAWebTPThumbnailUtils").appendToDocumentBody(t);
        }));
    }
    ((l.getSandboxIframe = o("WAWebTPThumbnailUtils").getSandboxIframe),
      (l.renderWebTPThumbnailIfEnabled = o(
        "WAWebTPThumbnailUtils",
      ).renderWebTPThumbnailIfEnabled),
      (l.preloadWebTPThumbnailRendererIfEnabled = c),
      (l.removePreloadedIframe = d),
      (l.preloadWebTPInlineSharerIframeIfEnabled = m),
      (l.removePreloadedInlineSharerIframe = p),
      (l.preloadWebTPIframeIfEnabled = _));
  },
  98,
);
