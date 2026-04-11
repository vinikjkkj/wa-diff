__d(
  "WAWebTPFrameUrlBuilder",
  [
    "WAWebL10nGetRenderedLocale",
    "WAXWhatsAppWebTPPdfSharerControllerRouteBuilder",
    "WAXWhatsAppWebTPPdfThumbnailControllerRouteBuilder",
    "WAXWhatsAppWebTPPdfViewerControllerRouteBuilder",
    "WhatsAppWebTPUrlBuilder",
    "err",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = r("WhatsAppWebTPUrlBuilder").url;
      if (r("isStringNullOrEmpty")(e))
        throw r("err")("Failed to get webtp pdf thumbnail url");
      var t =
          e +
          r("WAXWhatsAppWebTPPdfThumbnailControllerRouteBuilder").buildURL({}),
        n = o("WAWebL10nGetRenderedLocale").WAWebL10nGetRenderedLocale();
      return t + "?locale=" + n;
    }
    function s() {
      var e = r("WhatsAppWebTPUrlBuilder").url;
      if (r("isStringNullOrEmpty")(e))
        throw r("err")("Failed to get webtp pdf viewer url");
      var t =
          e + r("WAXWhatsAppWebTPPdfViewerControllerRouteBuilder").buildURL({}),
        n = o("WAWebL10nGetRenderedLocale").WAWebL10nGetRenderedLocale();
      return t + "?locale=" + n;
    }
    function u() {
      var e = r("WhatsAppWebTPUrlBuilder").url;
      if (r("isStringNullOrEmpty")(e))
        throw r("err")("Failed to get webtp pdf sharer url");
      var t =
          e + r("WAXWhatsAppWebTPPdfSharerControllerRouteBuilder").buildURL({}),
        n = o("WAWebL10nGetRenderedLocale").WAWebL10nGetRenderedLocale();
      return t + "?locale=" + n;
    }
    function c() {
      return u() + "&mode=inline";
    }
    ((l.getWAWebTPThumbnailUrl = e),
      (l.getWAWebTPPdfViewerUrl = s),
      (l.getWAWebTPPdfSharerUrl = u),
      (l.getWAWebTPPdfInlineSharerUrl = c));
  },
  98,
);
