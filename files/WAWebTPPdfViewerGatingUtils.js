__d(
  "WAWebTPPdfViewerGatingUtils",
  [
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
    function s() {
      return e() && r("justknobx")._("2389");
    }
    function u() {
      return e() && r("justknobx")._("3867");
    }
    function c(e) {
      return o("WAWebMimeTypes").isPdfDocument(e) && u();
    }
    function d() {
      return r("justknobx")._("8602") && r("gkx")("30020");
    }
    function m() {
      return r("WAWebEnvironment").isWindows
        ? o("WAWebABProps").getABPropConfigValue(
            "wa_win_webtp_pdf_viewer_preload_enabled",
          )
        : !0;
    }
    function p() {
      return e() && r("justknobx")._("1130");
    }
    function _(t) {
      return (
        e() &&
        r("justknobx")._("1130") &&
        (t == null || o("WAWebMimeTypes").isPdfDocument(t))
      );
    }
    function f() {
      return e() && r("justknobx")._("1228");
    }
    var g = 137;
    function h() {
      var e = o("WAWebUA").UA.isChrome,
        t = o("WAWebUA").UA.browser === o("WAWebUA").BROWSER_TYPE.EDGE;
      return !e && !t
        ? null
        : parseInt(o("WAWebUA").UA.browserVersion.split(".")[0], 10);
    }
    function y() {
      var e = h();
      return e != null && e >= g
        ? "supported"
        : e != null && e < g
          ? "upgrade_browser"
          : "unsupported";
    }
    function C() {
      return (
        e() &&
        o("WAWebABProps").getABPropConfigValue("wa_webtp_use_pdf_annotations")
      );
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_webtp_use_async_pdf_send",
      );
    }
    function v() {
      return r("justknobx")._("2723");
    }
    function S() {
      return e();
    }
    function R() {
      return !S() || y() !== "supported"
        ? "control"
        : (function (e) {
            return e === 1
              ? "open_in_acrobat"
              : e === 2
                ? "edit_in_acrobat"
                : e === 3
                  ? "edit_text_in_acrobat"
                  : "control";
          })(
            o("WAWebABProps").getABPropConfigValue(
              "wa_webtp_skip_sharer_confirmation_variant",
            ),
          );
    }
    ((l.isWebTPThumbnailRendererEnabled = s),
      (l.isWebTPPdfViewerEnabled = u),
      (l.isWebTPPdfViewerEnabledForMimeType = c),
      (l.isWebTPLocalPdfSdkEnabled = d),
      (l.isWebTPPdfViewerPreloadEnabled = m),
      (l.isWebTP3PSharingEnabled = p),
      (l.isWebTPPdfEditAndShareEnabled = _),
      (l.isWebTP3PExtensionSharingEnabled = f),
      (l.getWebTPBrowserCompatibility = y),
      (l.isWebTPPdfAnnotationsEnabled = C),
      (l.isAsyncPdfSendEnabled = b),
      (l.isPdfPreviewBeforeSendEnabled = v),
      (l.isWebTPSharerSavePreferenceEnabled = S),
      (l.getWebTPSkipSharerConfirmationVariant = R));
  },
  98,
);
