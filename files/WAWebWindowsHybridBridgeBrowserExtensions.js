__d(
  "WAWebWindowsHybridBridgeBrowserExtensions",
  ["WAWebODS", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.getBrowserExtensionsInfoAsync = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            r("WAWebODS").incr(
              "web.hybrid.bridge.browser_extensions.send.get_browser_extensions_info_async",
            );
            var e = yield this.$1.getBrowserExtensionsInfoAsync();
            return JSON.parse(e);
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.enableBrowserExtensionAsync = function (t, n) {
          return (
            r("WAWebODS").incr(
              "web.hybrid.bridge.browser_extensions.send.enable_browser_extension_async",
            ),
            this.$1.enableBrowserExtensionAsync(t, n)
          );
        }),
        (t.removeBrowserExtensionAsync = function (t) {
          return (
            r("WAWebODS").incr(
              "web.hybrid.bridge.browser_extensions.send.remove_browser_extension_async",
            ),
            this.$1.removeBrowserExtensionAsync(t)
          );
        }),
        (t.hasBootstrappedSuccessfully = function () {
          return (
            r("WAWebODS").incr(
              "web.hybrid.bridge.browser_extensions.send.has_bootstrapped_successfully",
            ),
            this.$1.hasBootstrappedSuccessfully()
          );
        }),
        (t.getZoomBrowserExtensionInfoAsync = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            r("WAWebODS").incr(
              "web.hybrid.bridge.browser_extensions.send.get_zoom_browser_extension_info_async",
            );
            var e = yield this.$1.getZoomBrowserExtensionInfoAsync();
            return JSON.parse(e);
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.enableZoomBrowserExtensionAsync = function (t) {
          return (
            r("WAWebODS").incr(
              "web.hybrid.bridge.browser_extensions.send.enable_zoom_browser_extension_async",
            ),
            this.$1.enableZoomBrowserExtensionAsync(t)
          );
        }),
        (t.removeZoomBrowserExtensionAsync = function () {
          return (
            r("WAWebODS").incr(
              "web.hybrid.bridge.browser_extensions.send.remove_zoom_browser_extension_async",
            ),
            this.$1.removeZoomBrowserExtensionAsync()
          );
        }),
        (t.installZoomBrowserExtensionAsync = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            r("WAWebODS").incr(
              "web.hybrid.bridge.browser_extensions.send.install_zoom_browser_extension_async",
            );
            var e = yield this.$1.installZoomBrowserExtensionAsync();
            return JSON.parse(e);
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        e
      );
    })();
    l.WindowsHybridBridgeBrowserExtensions = e;
  },
  98,
);
