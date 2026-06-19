__d(
  "WAWebTPPdfViewerGatingUtils",
  [
    "$InternalEnum",
    "WAWebABProps",
    "WAWebEnvironment",
    "WAWebMimeTypes",
    "WAWebUA",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return (
        !r("WAWebEnvironment").isWindows ||
        o("WAWebABProps").getABPropConfigValue("wa_win_pdf_rendering_enabled")
      );
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
      if (!e() || !r("justknobx")._("3867")) return !1;
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
      return o("WAWebMimeTypes").isPdfDocument(e) && m();
    }
    function f() {
      return e() && r("justknobx")._("1130");
    }
    function g(t) {
      return (
        e() &&
        r("justknobx")._("1130") &&
        (t == null || o("WAWebMimeTypes").isPdfDocument(t)) &&
        p()
      );
    }
    function h() {
      return e() && r("justknobx")._("1228");
    }
    var y = 137;
    function C() {
      var e = o("WAWebUA").UA.isChrome,
        t = o("WAWebUA").UA.browser === o("WAWebUA").BROWSER_TYPE.EDGE;
      return !e && !t
        ? null
        : parseInt(o("WAWebUA").UA.browserVersion.split(".")[0], 10);
    }
    function b() {
      var e = C();
      return e != null && e >= y
        ? "supported"
        : e != null && e < y
          ? "upgrade_browser"
          : "unsupported";
    }
    function v() {
      return (
        e() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_webtp_edit_pdf_in_whatsapp_enabled",
        )
      );
    }
    function S() {
      return (
        e() &&
        o("WAWebABProps").getABPropConfigValue("wa_webtp_use_pdf_annotations")
      );
    }
    function R() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_webtp_use_async_pdf_send",
      );
    }
    function L() {
      return r("justknobx")._("2723");
    }
    function E() {
      return r("gkx")("25214");
    }
    function k() {
      return e() && r("justknobx")._("3269");
    }
    function I() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_webtp_pdf_sharer_consent_copy_v2",
      );
    }
    ((l.isWebTPThumbnailRendererEnabled = c),
      (l.isWebTPThumbnailAttributionEnabled = d),
      (l.isWebTPPdfViewerEnabled = m),
      (l.isWebTPPdfViewerEnabledForMimeType = _),
      (l.isWebTP3PSharingEnabled = f),
      (l.isWebTPPdfEditAndShareEnabled = g),
      (l.isWebTP3PExtensionSharingEnabled = h),
      (l.getWebTPBrowserCompatibility = b),
      (l.isWebTPEditPdfInWhatsappEnabled = v),
      (l.isWebTPPdfAnnotationsEnabled = S),
      (l.isAsyncPdfSendEnabled = R),
      (l.isPdfPreviewBeforeSendEnabled = L),
      (l.isWebTPAnnotationsEnabled = E),
      (l.isWebTPSharerSavePreferenceEnabled = k),
      (l.isWebTPPdfSharerConsentCopyV2Enabled = I));
  },
  98,
);
