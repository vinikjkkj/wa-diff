__d(
  "WAWebWindowsScalingControlActions",
  [
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebWindowsHybridBridgeFactory",
    "WAWebWindowsScalingControlConstants",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E,
      k,
      I,
      T,
      D,
      x,
      $,
      P,
      N,
      M,
      w = function () {
        var t = o("WAWebWindowsHybridBridgeFactory").getWindowsBridge(),
          n = t == null ? void 0 : t.browserExtensionsBridge;
        return (
          n == null &&
            o("WALogger")
              .LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[scaling control] ext bridge unavailable",
                  ])),
              )
              .tags("hybrid")
              .sendLogs(
                "hybrid-scaling-control-extension-bridge-not-available",
              ),
          n
        );
      },
      A = async function () {
        var e = w();
        if (e == null) return !1;
        try {
          var t = await o("WAPromiseTimeout").promiseTimeout(
            e.hasBootstrappedSuccessfully(),
            o("WAWebWindowsScalingControlConstants").BRIDGE_MESSAGE_TIMEOUT,
            "[scaling control] hasBootstrappedSuccessfully timeout " +
              o("WAWebWindowsScalingControlConstants").BRIDGE_MESSAGE_TIMEOUT +
              "ms",
          );
          if (!t)
            return (
              o("WALogger")
                .LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[scaling control] ext not bootstrapped",
                    ])),
                )
                .tags("hybrid")
                .sendLogs("hybrid-scaling-control-extension-not-bootstrapped"),
              !1
            );
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[scaling control] ext bootstrapped +",
              ])),
          );
        } catch (e) {
          if (e instanceof o("WACustomError").TimeoutError)
            return (
              o("WALogger")
                .LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[scaling control] hasBootstrappedSuccessfully timeout",
                    ])),
                )
                .tags("hybrid"),
              !1
            );
          throw e;
        }
        var n = await e.getBrowserExtensionsInfoAsync();
        if (n == null || !Array.isArray(n))
          return (
            o("WALogger")
              .LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[scaling control] ext info unavailable",
                  ])),
              )
              .tags("hybrid")
              .sendLogs("hybrid-scaling-control-extension-info-not-available"),
            !1
          );
        var r = n.find(function (e) {
          return (
            e.id ===
            o("WAWebWindowsScalingControlConstants").ZOOM_BROWSER_EXTENSION_ID
          );
        });
        if (r == null)
          return (
            o("WALogger")
              .LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[scaling control] zoom ext data missing",
                  ])),
              )
              .tags("hybrid")
              .sendLogs("hybrid-scaling-control-zoom-extension-data-missing"),
            !1
          );
        var a = r.isEnabled === !0;
        return (
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[debug][scaling control] Zoom extension enabled: ",
                "",
              ])),
            a,
          ),
          a
        );
      },
      F = async function () {
        var e = await A();
        if (e) return !0;
        o("WALogger").LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "[scaling control] Font size extension is not enabled",
            ])),
        );
        var t = await O();
        if (!t)
          return (
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[scaling control] Could not reload the extension",
                ])),
            ),
            !1
          );
        var n = await A();
        return n
          ? !0
          : (o("WALogger")
              .LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[scaling control] ext not enabled after reload",
                  ])),
              )
              .tags("hybrid")
              .sendLogs(
                "hybrid-scaling-control-extension-not-enabled-after-reload",
              ),
            !1);
      },
      O = async function () {
        var e = w();
        if (e == null) return !1;
        try {
          (await e.removeBrowserExtensionAsync(
            o("WAWebWindowsScalingControlConstants").ZOOM_BROWSER_EXTENSION_ID,
          ),
            o("WALogger")
              .LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[debug][scaling control] Zoom extension is removed",
                  ])),
              )
              .tags("hybrid"));
        } catch (e) {
          o("WALogger")
            .LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "[debug][scaling control] Error while removing Zoom extension",
                ])),
            )
            .tags("hybrid")
            .sendLogs(
              "hybrid-scaling-control-extension-error-while-removing-extension",
            );
        }
        try {
          (await e.installZoomBrowserExtensionAsync(),
            o("WALogger")
              .LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[debug][scaling control] Zoom extension is installed",
                  ])),
              )
              .tags("hybrid"));
        } catch (e) {
          return (
            o("WALogger")
              .LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[scaling control] zoom ext install error",
                  ])),
              )
              .tags("hybrid")
              .sendLogs(
                "hybrid-scaling-control-extension-error-while-installing-extension",
              ),
            !1
          );
        }
        try {
          (await e.enableBrowserExtensionAsync(
            o("WAWebWindowsScalingControlConstants").ZOOM_BROWSER_EXTENSION_ID,
            !0,
          ),
            o("WALogger")
              .LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[debug][scaling control] Zoom extension is enabled",
                  ])),
              )
              .tags("hybrid"));
        } catch (e) {
          return (
            o("WALogger")
              .LOG(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "[debug][scaling control] Error while enabling Zoom extension",
                  ])),
              )
              .tags("hybrid")
              .sendLogs(
                "hybrid-scaling-control-extension-error-while-enabling-extension",
              ),
            !1
          );
        }
        return !0;
      },
      B = async function (t, n) {
        o("WALogger").LOG(
          R ||
            (R = babelHelpers.taggedTemplateLiteralLoose([
              "[scaling control] Starting zoom operation retry - ",
              "",
            ])),
          n,
        );
        var e = w();
        if (e == null)
          return (
            o("WALogger").LOG(
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
                  "[scaling control] Browser Extension Bridge is not available",
                ])),
            ),
            null
          );
        try {
          (await e.enableBrowserExtensionAsync(
            o("WAWebWindowsScalingControlConstants").ZOOM_BROWSER_EXTENSION_ID,
            !1,
          ),
            o("WALogger").LOG(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "[scaling control] Zoom extension is disabled successfully",
                ])),
            ));
        } catch (e) {
          return (
            o("WALogger")
              .LOG(
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
                    "[scaling control] Error while disabling Zoom extension ",
                  ])),
              )
              .tags("hybrid")
              .sendLogs(
                "hybrid-scaling-control-extension-error-while-disabling-extension-in-retry",
              ),
            null
          );
        }
        try {
          (await e.enableBrowserExtensionAsync(
            o("WAWebWindowsScalingControlConstants").ZOOM_BROWSER_EXTENSION_ID,
            !0,
          ),
            o("WALogger").LOG(
              I ||
                (I = babelHelpers.taggedTemplateLiteralLoose([
                  "[scaling control] Zoom extension is enabled successfully",
                ])),
            ));
        } catch (e) {
          return (
            o("WALogger")
              .LOG(
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
                    "[scaling control] Error while enabling Zoom extension",
                  ])),
              )
              .tags("hybrid")
              .sendLogs(
                "hybrid-scaling-control-extension-error-while-enabling-extension-in-retry",
              ),
            null
          );
        }
        try {
          var r = await o("WAPromiseTimeout").promiseTimeout(
            t(),
            o("WAWebWindowsScalingControlConstants")
              .BRIDGE_MESSAGE_TIMEOUT_RETRY,
            "[scaling control] zoom op timeout after ext restart",
          );
          return (
            r != null &&
              r.zoom != null &&
              o("WALogger")
                .LOG(
                  D ||
                    (D = babelHelpers.taggedTemplateLiteralLoose([
                      "[scaling control] Zoom success after extension restart",
                    ])),
                )
                .tags("hybrid"),
            r
          );
        } catch (e) {
          throw (
            e instanceof o("WACustomError").TimeoutError
              ? o("WALogger")
                  .ERROR(
                    x ||
                      (x = babelHelpers.taggedTemplateLiteralLoose([
                        "[scaling control] zoom ext timeout after restart",
                      ])),
                  )
                  .tags("hybrid")
                  .sendLogs("hybrid-scaling-control-timeout-error-after-retry")
              : o("WALogger")
                  .ERROR(
                    $ ||
                      ($ = babelHelpers.taggedTemplateLiteralLoose([
                        "[scaling control] zoom ext error: ",
                        "",
                      ])),
                    e,
                  )
                  .tags("hybrid")
                  .sendLogs(
                    "hybrid-scaling-control-unknown-error-after-retry",
                    { sampling: 0.01 },
                  ),
            e
          );
        }
      },
      W = async function (t, n) {
        try {
          o("WALogger").LOG(
            P ||
              (P = babelHelpers.taggedTemplateLiteralLoose([
                "[scaling control] Starting to fetch Zoom level",
              ])),
          );
          var e = await F();
          if (!e) return null;
          var r = await o("WAPromiseTimeout").promiseTimeout(
            t(),
            o("WAWebWindowsScalingControlConstants").BRIDGE_MESSAGE_TIMEOUT,
            "[hybrid][scaling control] Zoom operation timed out",
          );
          return r;
        } catch (e) {
          if (e instanceof o("WACustomError").TimeoutError) {
            o("WALogger")
              .LOG(
                N ||
                  (N = babelHelpers.taggedTemplateLiteralLoose([
                    "[scaling control] zoom ext response timeout",
                  ])),
              )
              .tags("hybrid");
            var a = await B(t, n);
            return a;
          }
          throw (
            o("WALogger")
              .ERROR(
                M ||
                  (M = babelHelpers.taggedTemplateLiteralLoose([
                    "[scaling control] zoom ext unknown error",
                  ])),
              )
              .tags("hybrid")
              .sendLogs("hybrid-scaling-control-" + n + "-unknown-error"),
            e
          );
        }
      };
    l.doZoomOperationWithExtensionCheckAndRestart = W;
  },
  98,
);
