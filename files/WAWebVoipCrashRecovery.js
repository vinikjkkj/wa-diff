__d(
  "WAWebVoipCrashRecovery",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebBrowserApi",
    "WAWebCallWamEvent",
    "WAWebCoreActionsODS",
    "WAWebLocalStorage",
    "WAWebVoipBatteryDiagnostics",
    "WAWebVoipBrowserMetrics",
    "WAWebVoipDeviceClassUtils",
    "WAWebVoipPersistentFS",
    "WAWebWamEnumAppExitReason",
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
      S = "wa_voip_call_state",
      R = "active",
      L = "closing",
      E = !1,
      k = null;
    function I() {
      return (
        o("WAWebABProps").getABPropConfigValue("app_exit_reason_version") > 0
      );
    }
    function T() {
      if (r("WAWebLocalStorage") == null)
        return o("WAWebWamEnumAppExitReason").APP_EXIT_REASON.UNKNOWN;
      try {
        var t = r("WAWebLocalStorage").getItem(S);
        return t === L
          ? (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:recovery] exit=USER_REQUESTED (tab close)",
                ])),
            ),
            o("WAWebWamEnumAppExitReason").APP_EXIT_REASON.USER_REQUESTED)
          : t === R
            ? (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:recovery] exit=CRASH (no beforeunload)",
                  ])),
              ),
              o("WAWebWamEnumAppExitReason").APP_EXIT_REASON.CRASH)
            : o("WAWebWamEnumAppExitReason").APP_EXIT_REASON.UNKNOWN;
      } catch (e) {
        return o("WAWebWamEnumAppExitReason").APP_EXIT_REASON.UNKNOWN;
      }
    }
    function D() {
      if (r("WAWebLocalStorage") != null)
        try {
          r("WAWebLocalStorage").removeItem(S);
        } catch (e) {}
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (E) {
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:recovery] already attempted, skip",
                ])),
            );
            return;
          }
          E = !0;
          try {
            var t = o("WAWebVoipPersistentFS").getVoipPersistentDirectoryPath();
            if (t === "") {
              o("WALogger").WARN(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:recovery] no cache dir, skip",
                  ])),
              );
              return;
            }
            yield o("WAWebVoipPersistentFS").initPersistentFS(e);
            var n = e.getUnfinishedCallFieldstats(t);
            if (n == null || n.length === 0) {
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:recovery] no unfinished fieldstats",
                  ])),
              );
              return;
            }
            (o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:recovery] found fieldstats len=",
                  "",
                ])),
              n.length,
            ),
              o("WAWebCoreActionsODS").logCallErrorTerminal());
            try {
              var r = JSON.parse(n),
                a = T();
              r.appExitReason = a;
              var i = o("WAWebBrowserApi").getNumCpu(),
                l = o("WAWebBrowserApi").getMemClass();
              (i != null && (r.numCpuCores = i),
                l != null && (r.totalMemoryGb = Math.round(l / 1e3)));
              var s = l != null ? Math.round(l / 1e3) : null,
                u = o("WAWebVoipDeviceClassUtils").computeDeviceClass(i, s);
              u != null && (r.deviceClass = u);
              var c = o(
                "WAWebVoipBrowserMetrics",
              ).getBrowserMetricsCapabilities();
              ((r.browserCpuPressureSupported = c.browserCpuPressureSupported),
                (r.browserMemorySupported = c.browserMemorySupported));
              var d = o(
                "WAWebVoipBatteryDiagnostics",
              ).getBatteryDiagnosticsCapabilities();
              r.browserBatterySupported = d.browserBatterySupported;
              var C = new (o("WAWebCallWamEvent").CallWamEvent)(r);
              (yield C.commitAndWaitForFlush(),
                o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "[voip:recovery] uploaded fieldstats exit=",
                      "",
                    ])),
                  a,
                ));
            } finally {
              (D(),
                e.cleanupUnfinishedCallStats(),
                yield o("WAWebVoipPersistentFS").syncPersistentFS(e),
                o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "[voip:recovery] cleaned up fieldstats",
                    ])),
                ));
            }
          } catch (e) {
            o("WALogger")
              .ERROR(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:recovery] fieldstats recovery failed",
                  ])),
              )
              .catching(e);
          }
        })),
        $.apply(this, arguments)
      );
    }
    function P() {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!I()) {
            o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:recovery] exit reason feature disabled, skip",
                ])),
            );
            return;
          }
          try {
            o("WALogger").LOG(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:recovery] init fieldstats recovery",
                ])),
            );
            var e =
              yield o("WAWebBackendApi").frontendSendAndReceive(
                "initializeVoipWasm",
              );
            yield x(e);
          } catch (e) {
            o("WALogger")
              .ERROR(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:recovery] init failed",
                  ])),
              )
              .catching(e);
          }
        })),
        N.apply(this, arguments)
      );
    }
    function M(e) {
      if (r("WAWebLocalStorage") != null)
        try {
          (r("WAWebLocalStorage").setItem(S, R),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:recovery] call active: ",
                  "",
                ])),
              e,
            ));
        } catch (e) {}
    }
    function w(e) {
      if (r("WAWebLocalStorage") != null)
        try {
          var t = r("WAWebLocalStorage").getItem(S);
          t === R &&
            (r("WAWebLocalStorage").setItem(S, L),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:recovery] graceful exit marked: ",
                  "",
                ])),
              e,
            ));
        } catch (e) {}
    }
    function A(e) {
      if (r("WAWebLocalStorage") != null)
        try {
          (r("WAWebLocalStorage").removeItem(S),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:recovery] state cleared (call end): ",
                  "",
                ])),
              e,
            ));
        } catch (e) {}
    }
    function F(e) {
      if ((O(), typeof window != "undefined")) {
        var t = function () {
          w(e);
        };
        (window.addEventListener("beforeunload", t),
          (k = function () {
            window.removeEventListener("beforeunload", t);
          }));
      }
    }
    function O() {
      k != null && (k(), (k = null));
    }
    ((l.initCrashRecovery = P),
      (l.markCallActive = M),
      (l.clearExitMarkers = A),
      (l.registerGracefulExitHandler = F),
      (l.unregisterGracefulExitHandler = O));
  },
  98,
);
