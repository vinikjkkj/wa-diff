__d(
  "WAWebTPExtensionDetection",
  [
    "WAWebEnvironment",
    "WAWebMiscBrowserUtils",
    "WAWebTP3PPDFExtensionFetchDetection",
    "WAWebTPPdfViewerGatingUtils",
    "WAWebUA",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { extensionDetected: !1, extensionViewerUrl: null };
    function s(e) {
      if (r("WAWebEnvironment").isWindows) return null;
      var t = r("WAWebMiscBrowserUtils").info().name.toLowerCase();
      return t === o("WAWebUA").BROWSER_TYPE.CHROME &&
        e.chromeExtensionId != null
        ? "chrome-extension://" + e.chromeExtensionId
        : t === o("WAWebUA").BROWSER_TYPE.EDGE && e.edgeExtensionId != null
          ? "chrome-extension://" + e.edgeExtensionId
          : null;
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (
            !o("WAWebTPPdfViewerGatingUtils").isWebTP3PExtensionSharingEnabled()
          )
            return e;
          var n = t.extensionKey;
          if (n == null) return e;
          var r = s(t);
          if (r == null) return e;
          var a = r + "/extension-detection.html";
          return (yield o(
            "WAWebTP3PPDFExtensionFetchDetection",
          ).hasWebTP3PPDFExtensionFetch(a))
            ? { extensionDetected: !0, extensionViewerUrl: r }
            : e;
        })),
        c.apply(this, arguments)
      );
    }
    ((l.getExtensionViewerUrl = s), (l.detectBrowserExtension = u));
  },
  98,
);
