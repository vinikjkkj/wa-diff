__d(
  "WAWebWindowsScalingControlActions",
  [
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebWindowsHybridBridgeFactory",
    "WAWebWindowsScalingControlConstants",
    "asyncToGeneratorRuntime",
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
      A = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = w();
          if (e == null) return !1;
          try {
            var t = yield o("WAPromiseTimeout").promiseTimeout(
              e.hasBootstrappedSuccessfully(),
              o("WAWebWindowsScalingControlConstants").BRIDGE_MESSAGE_TIMEOUT,
              "[scaling control] hasBootstrappedSuccessfully timeout " +
                o("WAWebWindowsScalingControlConstants")
                  .BRIDGE_MESSAGE_TIMEOUT +
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
                  .sendLogs(
                    "hybrid-scaling-control-extension-not-bootstrapped",
                  ),
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
          var n = yield e.getBrowserExtensionsInfoAsync();
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
                .sendLogs(
                  "hybrid-scaling-control-extension-info-not-available",
                ),
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
        });
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      F = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield A();
          if (e) return !0;
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[scaling control] Font size extension is not enabled",
              ])),
          );
          var t = yield O();
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
          var n = yield A();
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
        });
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      O = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = w();
          if (e == null) return !1;
          try {
            (yield e.removeBrowserExtensionAsync(
              o("WAWebWindowsScalingControlConstants")
                .ZOOM_BROWSER_EXTENSION_ID,
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
            (yield e.installZoomBrowserExtensionAsync(),
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
            (yield e.enableBrowserExtensionAsync(
              o("WAWebWindowsScalingControlConstants")
                .ZOOM_BROWSER_EXTENSION_ID,
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
        });
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      B = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          o("WALogger").LOG(
            R ||
              (R = babelHelpers.taggedTemplateLiteralLoose([
                "[scaling control] Starting zoom operation retry - ",
                "",
              ])),
            t,
          );
          var n = w();
          if (n == null)
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
            (yield n.enableBrowserExtensionAsync(
              o("WAWebWindowsScalingControlConstants")
                .ZOOM_BROWSER_EXTENSION_ID,
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
            (yield n.enableBrowserExtensionAsync(
              o("WAWebWindowsScalingControlConstants")
                .ZOOM_BROWSER_EXTENSION_ID,
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
            var r = yield o("WAPromiseTimeout").promiseTimeout(
              e(),
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
                    .sendLogs(
                      "hybrid-scaling-control-timeout-error-after-retry",
                    )
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
        });
        return function (n, r) {
          return e.apply(this, arguments);
        };
      })(),
      W = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            o("WALogger").LOG(
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
                  "[scaling control] Starting to fetch Zoom level",
                ])),
            );
            var n = yield F();
            if (!n) return null;
            var r = yield o("WAPromiseTimeout").promiseTimeout(
              e(),
              o("WAWebWindowsScalingControlConstants").BRIDGE_MESSAGE_TIMEOUT,
              "[hybrid][scaling control] Zoom operation timed out",
            );
            return r;
          } catch (n) {
            if (n instanceof o("WACustomError").TimeoutError) {
              o("WALogger")
                .LOG(
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
                      "[scaling control] zoom ext response timeout",
                    ])),
                )
                .tags("hybrid");
              var a = yield B(e, t);
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
                .sendLogs("hybrid-scaling-control-" + t + "-unknown-error"),
              n
            );
          }
        });
        return function (n, r) {
          return e.apply(this, arguments);
        };
      })();
    l.doZoomOperationWithExtensionCheckAndRestart = W;
  },
  98,
);
