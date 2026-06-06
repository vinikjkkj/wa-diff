__d(
  "WAWebWindowsHybridBridgeBrowserExtensions.v2622",
  ["WAWebODS", "WAWebWindowsHybridBridgeTrace"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.getBrowserExtensionsInfoAsync = async function () {
          var e = this;
          r("WAWebODS").incr(
            "web.hybrid.bridge.browser_extensions.send.get_browser_extensions_info_async",
          );
          var t = await o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
            {
              bridge: "browserExtensionsBridge",
              method: "getBrowserExtensionsInfoAsync",
              type: "async",
            },
            function () {
              return e.$1.getBrowserExtensionsInfoAsync();
            },
          );
          return JSON.parse(t);
        }),
        (t.enableBrowserExtensionAsync = function (t, n) {
          var e = this;
          return (
            r("WAWebODS").incr(
              "web.hybrid.bridge.browser_extensions.send.enable_browser_extension_async",
            ),
            o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
              {
                bridge: "browserExtensionsBridge",
                method: "enableBrowserExtensionAsync",
                type: "async",
              },
              function () {
                return e.$1.enableBrowserExtensionAsync(t, n);
              },
            )
          );
        }),
        (t.removeBrowserExtensionAsync = function (t) {
          var e = this;
          return (
            r("WAWebODS").incr(
              "web.hybrid.bridge.browser_extensions.send.remove_browser_extension_async",
            ),
            o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
              {
                bridge: "browserExtensionsBridge",
                method: "removeBrowserExtensionAsync",
                type: "async",
              },
              function () {
                return e.$1.removeBrowserExtensionAsync(t);
              },
            )
          );
        }),
        (t.hasBootstrappedSuccessfully = function () {
          var e = this;
          return (
            r("WAWebODS").incr(
              "web.hybrid.bridge.browser_extensions.send.has_bootstrapped_successfully",
            ),
            o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
              {
                bridge: "browserExtensionsBridge",
                method: "hasBootstrappedSuccessfully",
                type: "sync",
              },
              function () {
                return e.$1.hasBootstrappedSuccessfully();
              },
            )
          );
        }),
        (t.getZoomBrowserExtensionInfoAsync = async function () {
          var e = this;
          r("WAWebODS").incr(
            "web.hybrid.bridge.browser_extensions.send.get_zoom_browser_extension_info_async",
          );
          var t = await o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
            {
              bridge: "browserExtensionsBridge",
              method: "getZoomBrowserExtensionInfoAsync",
              type: "async",
            },
            function () {
              return e.$1.getZoomBrowserExtensionInfoAsync();
            },
          );
          return JSON.parse(t);
        }),
        (t.enableZoomBrowserExtensionAsync = function (t) {
          var e = this;
          return (
            r("WAWebODS").incr(
              "web.hybrid.bridge.browser_extensions.send.enable_zoom_browser_extension_async",
            ),
            o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
              {
                bridge: "browserExtensionsBridge",
                method: "enableZoomBrowserExtensionAsync",
                type: "async",
              },
              function () {
                return e.$1.enableZoomBrowserExtensionAsync(t);
              },
            )
          );
        }),
        (t.removeZoomBrowserExtensionAsync = function () {
          var e = this;
          return (
            r("WAWebODS").incr(
              "web.hybrid.bridge.browser_extensions.send.remove_zoom_browser_extension_async",
            ),
            o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
              {
                bridge: "browserExtensionsBridge",
                method: "removeZoomBrowserExtensionAsync",
                type: "async",
              },
              function () {
                return e.$1.removeZoomBrowserExtensionAsync();
              },
            )
          );
        }),
        (t.installZoomBrowserExtensionAsync = async function () {
          var e = this;
          r("WAWebODS").incr(
            "web.hybrid.bridge.browser_extensions.send.install_zoom_browser_extension_async",
          );
          var t = await o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
            {
              bridge: "browserExtensionsBridge",
              method: "installZoomBrowserExtensionAsync",
              type: "async",
            },
            function () {
              return e.$1.installZoomBrowserExtensionAsync();
            },
          );
          return JSON.parse(t);
        }),
        e
      );
    })();
    l.WindowsHybridBridgeBrowserExtensions_v2622 = e;
  },
  98,
);
