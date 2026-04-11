__d(
  "WAWebTPIframeUtils",
  [
    "WAWebTPFrameUrlBuilder",
    "WAWebTPPdfViewerGatingUtils",
    "WAWebTPThumbnailUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = !1;
    function s(t) {
      if (
        !(
          !o("WAWebTPPdfViewerGatingUtils").isWebTPThumbnailRendererEnabled() ||
          e
        )
      ) {
        var n = o("WAWebTPFrameUrlBuilder").getWAWebTPThumbnailUrl(),
          r = o("WAWebTPThumbnailUtils").getSandboxIframe(
            n,
            o("WAWebTPThumbnailUtils").WEBTP_THUMBNAIL_IFRAME_ID,
          );
        (o("WAWebTPThumbnailUtils").appendToDocumentBody(r), (e = !0));
      }
    }
    function u() {
      var e = document.getElementById(
        o("WAWebTPThumbnailUtils").WEBTP_VIEWER_IFRAME_ID,
      );
      e instanceof HTMLIFrameElement && e.remove();
    }
    function c(e, t) {
      if (
        o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabledForMimeType(e)
      ) {
        var n = o("WAWebTPFrameUrlBuilder").getWAWebTPPdfInlineSharerUrl(),
          r = o("WAWebTPThumbnailUtils").getSandboxIframe(
            n,
            o("WAWebTPThumbnailUtils").WEBTP_INLINE_SHARER_IFRAME_ID,
          );
        o("WAWebTPThumbnailUtils").appendToDocumentBody(r);
      }
    }
    function d() {
      var e = document.getElementById(
        o("WAWebTPThumbnailUtils").WEBTP_INLINE_SHARER_IFRAME_ID,
      );
      e instanceof HTMLIFrameElement && e.remove();
    }
    function m(e, t) {
      if (
        o("WAWebTPPdfViewerGatingUtils").isWebTPPdfViewerEnabledForMimeType(e)
      ) {
        var n = o("WAWebTPFrameUrlBuilder").getWAWebTPPdfViewerUrl(),
          r = o("WAWebTPThumbnailUtils").getSandboxIframe(
            n,
            o("WAWebTPThumbnailUtils").WEBTP_VIEWER_IFRAME_ID,
          );
        o("WAWebTPThumbnailUtils").appendToDocumentBody(r);
      }
    }
    ((l.getSandboxIframe = o("WAWebTPThumbnailUtils").getSandboxIframe),
      (l.renderWebTPThumbnailIfEnabled = o(
        "WAWebTPThumbnailUtils",
      ).renderWebTPThumbnailIfEnabled),
      (l.preloadWebTPThumbnailRendererIfEnabled = s),
      (l.removePreloadedIframe = u),
      (l.preloadWebTPInlineSharerIframeIfEnabled = c),
      (l.removePreloadedInlineSharerIframe = d),
      (l.preloadWebTPIframeIfEnabled = m));
  },
  98,
);
