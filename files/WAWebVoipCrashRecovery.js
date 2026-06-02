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
    "WAWebVoipGatingUtils",
    "WAWebVoipPersistentFS",
    "WAWebWamEnumAppExitReason",
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
      R = "wa_voip_web_transport_used",
      L = "active",
      E = "closing",
      k = !1,
      I = null;
    function T() {
      return (
        o("WAWebABProps").getABPropConfigValue("app_exit_reason_version") > 0
      );
    }
    function D() {
      if (r("WAWebLocalStorage") == null)
        return o("WAWebWamEnumAppExitReason").APP_EXIT_REASON.UNKNOWN;
      try {
        var t = r("WAWebLocalStorage").getItem(S);
        return t === E
          ? (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:recovery] exit=USER_REQUESTED (tab close)",
                ])),
            ),
            o("WAWebWamEnumAppExitReason").APP_EXIT_REASON.USER_REQUESTED)
          : t === L
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
    function x() {
      if (r("WAWebLocalStorage") != null)
        try {
          (r("WAWebLocalStorage").removeItem(S),
            r("WAWebLocalStorage").removeItem(R));
        } catch (e) {}
    }
    function $() {
      if (r("WAWebLocalStorage") == null) return !1;
      try {
        return r("WAWebLocalStorage").getItem(R) === "1";
      } catch (e) {
        return !1;
      }
    }
    async function P(e) {
      if (k) {
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:recovery] already attempted, skip",
            ])),
        );
        return;
      }
      k = !0;
      try {
        var t = o("WAWebVoipPersistentFS").getVoipPersistentDirectoryPath();
        if (t === "") {
          o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[voip:recovery] no cache dir, skip",
              ])),
          );
          return;
        }
        await o("WAWebVoipPersistentFS").initPersistentFS(e);
        var n = e.getUnfinishedCallFieldstats(t);
        if (n == null || n.length === 0) {
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[voip:recovery] no unfinished fieldstats",
              ])),
          );
          return;
        }
        (o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:recovery] found fieldstats len=",
              "",
            ])),
          n.length,
        ),
          o("WAWebCoreActionsODS").logCallErrorTerminal());
        try {
          var r = JSON.parse(n),
            a = D();
          (a === o("WAWebWamEnumAppExitReason").APP_EXIT_REASON.CRASH &&
            o("WAWebCoreActionsODS").logCallWasmCrash(),
            (r.appExitReason = a));
          var i = o("WAWebBrowserApi").getNumCpu(),
            l = o("WAWebBrowserApi").getMemClass();
          (i != null && (r.numCpuCores = i),
            l != null && (r.totalMemoryGb = Math.round(l / 1e3)));
          var s = l != null ? Math.round(l / 1e3) : null,
            g = o("WAWebVoipDeviceClassUtils").computeDeviceClass(i, s);
          g != null && (r.deviceClass = g);
          var h = o("WAWebVoipBrowserMetrics").getBrowserMetricsCapabilities();
          ((r.browserCpuPressureSupported = h.browserCpuPressureSupported),
            (r.browserMemorySupported = h.browserMemorySupported));
          var y = o(
            "WAWebVoipBatteryDiagnostics",
          ).getBatteryDiagnosticsCapabilities();
          ((r.browserBatterySupported = y.browserBatterySupported),
            (r.webTransportUsed = $()));
          var C = new (o("WAWebCallWamEvent").CallWamEvent)(r);
          (await C.commitAndWaitForFlush(),
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:recovery] uploaded fieldstats exit=",
                  "",
                ])),
              a,
            ));
        } finally {
          (x(),
            e.cleanupUnfinishedCallStats(),
            await o("WAWebVoipPersistentFS").syncPersistentFS(e),
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:recovery] cleaned up fieldstats",
                ])),
            ));
        }
      } catch (e) {
        o("WALogger")
          .ERROR(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "[voip:recovery] fieldstats recovery failed",
              ])),
          )
          .catching(e);
      }
    }
    async function N() {
      if (!T()) {
        o("WALogger").LOG(
          g ||
            (g = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:recovery] exit reason feature disabled, skip",
            ])),
        );
        return;
      }
      try {
        o("WALogger").LOG(
          h ||
            (h = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:recovery] init fieldstats recovery",
            ])),
        );
        var e =
          await o("WAWebBackendApi").frontendSendAndReceive(
            "initializeVoipWasm",
          );
        await P(e);
      } catch (e) {
        o("WALogger")
          .ERROR(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "[voip:recovery] init failed",
              ])),
          )
          .catching(e);
      }
    }
    function M(e) {
      if (r("WAWebLocalStorage") != null)
        try {
          (r("WAWebLocalStorage").setItem(S, L),
            r("WAWebLocalStorage").setItem(
              R,
              o("WAWebVoipGatingUtils").isWebTransportEnabled() ? "1" : "0",
            ),
            o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
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
          t === L &&
            (r("WAWebLocalStorage").setItem(S, E),
            o("WALogger").LOG(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
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
            r("WAWebLocalStorage").removeItem(R),
            o("WALogger").LOG(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
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
          (I = function () {
            window.removeEventListener("beforeunload", t);
          }));
      }
    }
    function O() {
      I != null && (I(), (I = null));
    }
    ((l.initCrashRecovery = N),
      (l.markCallActive = M),
      (l.clearExitMarkers = A),
      (l.registerGracefulExitHandler = F),
      (l.unregisterGracefulExitHandler = O));
  },
  98,
);
