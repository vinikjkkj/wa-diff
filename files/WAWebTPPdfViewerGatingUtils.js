__d(
  "WAWebTPPdfViewerGatingUtils",
  [
    "$InternalEnum",
    "WAWebABProps",
    "WAWebEnvironment",
    "WAWebMimeTypes",
    "WAWebUA",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return !r("WAWebEnvironment").isWindows;
    }
    var s = n("$InternalEnum")({
      PdfJSThumbnailOnly: 0,
      WebTP: 1,
      WebTPThumbnailOnly: 2,
    });
    function u() {
      if (!e()) return s.PdfJSThumbnailOnly;
      var t = o("WAWebABProps").getABPropConfigValue(
        "wa_webtp_pdf_renderer_mode_no_exposure",
      );
      return t === 2
        ? s.WebTPThumbnailOnly
        : t === 1
          ? s.WebTP
          : s.PdfJSThumbnailOnly;
    }
    function c() {
      if (!e() || !r("justknobx")._("2389")) return !1;
      var t = u();
      return t === s.WebTP || t === s.WebTPThumbnailOnly
        ? !0
        : o("WAWebABProps").getABPropConfigValue(
            "wa_webtp_use_thumbnail_renderer",
          );
    }
    function d() {
      var e = u();
      return e !== s.WebTPThumbnailOnly;
    }
    function m() {
      if (!e()) return !1;
      var t = u();
      return t === s.WebTP
        ? !0
        : o("WAWebABProps").getABPropConfigValue("wa_webtp_use_pdf_renderer");
    }
    function p() {
      if (!e()) return !1;
      var t = u();
      return t === s.WebTP
        ? !0
        : o("WAWebABProps").getABPropConfigValue("wa_webtp_use_pdf_editor");
    }
    function _(e) {
      return o("WAWebMimeTypes").isPdfDocument(e) && p();
    }
    function f(e) {
      return o("WAWebMimeTypes").isPdfDocument(e) && m();
    }
    function g() {
      return e() && r("justknobx")._("1130");
    }
    function h(t) {
      return (
        e() &&
        r("justknobx")._("1130") &&
        (t == null || o("WAWebMimeTypes").isPdfDocument(t)) &&
        p()
      );
    }
    function y() {
      return e() && r("justknobx")._("1228");
    }
    var C = 137;
    function b() {
      var e = o("WAWebUA").UA.isChrome,
        t = o("WAWebUA").UA.browser === o("WAWebUA").BROWSER_TYPE.EDGE;
      return !e && !t
        ? null
        : parseInt(o("WAWebUA").UA.browserVersion.split(".")[0], 10);
    }
    function v() {
      var e = b();
      return e != null && e >= C;
    }
    function S() {
      var e = b();
      return e != null && e >= C
        ? "supported"
        : e != null && e < C
          ? "upgrade_browser"
          : "unsupported";
    }
    function R() {
      return (
        e() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_webtp_edit_pdf_in_whatsapp_enabled",
        )
      );
    }
    function L() {
      return r("justknobx")._("2723");
    }
    function E() {
      return e() && r("justknobx")._("3269");
    }
    ((l.isWebTPPlatformSupported = e),
      (l.getWebTPPdfRendererMode = u),
      (l.isWebTPThumbnailRendererEnabled = c),
      (l.isWebTPThumbnailAttributionEnabled = d),
      (l.isWebTPPdfViewerEnabled = m),
      (l.isWebTPPdfEditorEnabled = p),
      (l.isWebTPPdfEditorEnabledForMimeType = _),
      (l.isWebTPPdfViewerEnabledForMimeType = f),
      (l.isWebTP3PSharingEnabled = g),
      (l.isWebTPPdfEditAndShareEnabled = h),
      (l.isWebTP3PExtensionSharingEnabled = y),
      (l.isWebTPDIPSupported = v),
      (l.getWebTPBrowserCompatibility = S),
      (l.isWebTPEditPdfInWhatsappEnabled = R),
      (l.isPdfPreviewBeforeSendEnabled = L),
      (l.isWebTPSharerSavePreferenceEnabled = E));
  },
  98,
);
