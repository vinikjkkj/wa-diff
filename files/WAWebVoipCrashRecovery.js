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
    "WAWebVoipCallRatingStore",
    "WAWebVoipDeviceClassUtils",
    "WAWebVoipGatingUtils",
    "WAWebVoipPersistentFS",
    "WAWebWamEnumAppExitReason",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
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
      I = "wa_voip_call_state",
      T = "wa_voip_web_transport_used",
      D = "active",
      x = "closing",
      $ = !1,
      P = null;
    function N() {
      return (
        o("WAWebABProps").getABPropConfigValue("app_exit_reason_version") > 0
      );
    }
    function M() {
      if (r("WAWebLocalStorage") == null)
        return o("WAWebWamEnumAppExitReason").APP_EXIT_REASON.UNKNOWN;
      try {
        var t = r("WAWebLocalStorage").getItem(I);
        return t === x
          ? (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:recovery] exit=USER_REQUESTED (tab close)",
                ])),
            ),
            o("WAWebWamEnumAppExitReason").APP_EXIT_REASON.USER_REQUESTED)
          : t === D
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
    function w() {
      if (r("WAWebLocalStorage") != null)
        try {
          (r("WAWebLocalStorage").removeItem(I),
            r("WAWebLocalStorage").removeItem(T));
        } catch (e) {}
    }
    function A() {
      if (r("WAWebLocalStorage") == null) return !1;
      try {
        return r("WAWebLocalStorage").getItem(T) === "1";
      } catch (e) {
        return !1;
      }
    }
    function F(e, t) {
      e.appExitReason = t;
      var n = o("WAWebBrowserApi").getNumCpu(),
        r = o("WAWebBrowserApi").getMemClass();
      (n != null && (e.numCpuCores = n),
        r != null && (e.totalMemoryGb = Math.round(r / 1e3)));
      var a = r != null ? Math.round(r / 1e3) : null,
        i = o("WAWebVoipDeviceClassUtils").computeDeviceClass(n, a);
      i != null && (e.deviceClass = i);
      var l = o("WAWebVoipBrowserMetrics").getBrowserMetricsCapabilities();
      ((e.browserCpuPressureSupported = l.browserCpuPressureSupported),
        (e.browserMemorySupported = l.browserMemorySupported));
      var s = o(
        "WAWebVoipBatteryDiagnostics",
      ).getBatteryDiagnosticsCapabilities();
      ((e.browserBatterySupported = s.browserBatterySupported),
        (e.webTransportUsed = A()));
    }
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            (e.cleanupUnfinishedCallStats(),
              yield o("WAWebVoipPersistentFS").syncPersistentFS(e),
              w(),
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:recovery] cleaned up fieldstats",
                  ])),
              ));
          } catch (e) {
            (o("WAWebCoreActionsODS").logCallFieldstatsRecoveryCleanupFailed(),
              o("WALogger")
                .ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[voip:recovery] fieldstats cleanup failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("voip-fieldstats-recovery-cleanup-failed", {
                  employeeSampling: 1,
                  sampling: 0.01,
                  sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
                }));
          }
        })),
        B.apply(this, arguments)
      );
    }
    function W(e) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if ($) {
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:recovery] already attempted, skip",
                ])),
            );
            return;
          }
          $ = !0;
          var t = !1;
          try {
            var n = o("WAWebVoipPersistentFS").getVoipPersistentDirectoryPath();
            if (n === "") {
              o("WALogger").WARN(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:recovery] no cache dir, skip",
                  ])),
              );
              return;
            }
            yield o("WAWebVoipPersistentFS").initPersistentFS(e);
            var a = e.getUnfinishedCallFieldstats(n);
            if (a == null || a.length === 0) {
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:recovery] no unfinished fieldstats",
                  ])),
              );
              return;
            }
            if (
              (o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:recovery] found fieldstats len=",
                    "",
                  ])),
                a.length,
              ),
              (t = !0),
              o("WAWebCoreActionsODS").logCallErrorTerminal(),
              o("WAWebCoreActionsODS").logCallFieldstatsRecoveryFound(),
              o("WAWebVoipCallRatingStore").werePersistedFieldstatsHandedOff(a))
            ) {
              (o(
                "WAWebCoreActionsODS",
              ).logCallFieldstatsRecoveryDuplicateSuppressed(),
                o("WALogger").LOG(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "[voip:recovery] skipping fieldstats already handed to WAM",
                    ])),
                ),
                yield O(e));
              return;
            }
            var i;
            try {
              i = JSON.parse(a);
            } catch (t) {
              (o("WAWebCoreActionsODS").logCallFieldstatsRecoveryParseFailed(),
                o("WALogger")
                  .ERROR(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip:recovery] invalid persisted fieldstats",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t))
                  .sendLogs("voip-fieldstats-recovery-parse-failed", {
                    employeeSampling: 1,
                    sampling: 0.01,
                    sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
                  }),
                yield O(e));
              return;
            }
            var l = M();
            (l === o("WAWebWamEnumAppExitReason").APP_EXIT_REASON.CRASH &&
              o("WAWebCoreActionsODS").logCallWasmCrash(),
              F(i, l));
            var s = new (o("WAWebCallWamEvent").CallWamEvent)(i);
            (yield s.commitAndWaitForFlush(),
              o("WAWebVoipCallRatingStore").markPersistedFieldstatsHandedOff(a),
              o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:recovery] uploaded fieldstats exit=",
                    "",
                  ])),
                l,
              ),
              o("WAWebCoreActionsODS").logCallFieldstatsRecoveryCompleted(),
              yield O(e));
          } catch (e) {
            (($ = !1),
              t
                ? (o("WAWebCoreActionsODS").logCallFieldstatsRecoveryFailed(),
                  o("WALogger")
                    .ERROR(
                      S ||
                        (S = babelHelpers.taggedTemplateLiteralLoose([
                          "[voip:recovery] fieldstats recovery failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("voip-fieldstats-recovery-failed", {
                      employeeSampling: 1,
                      sampling: 0.01,
                      sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
                    }))
                : (o(
                    "WAWebCoreActionsODS",
                  ).logCallFieldstatsRecoveryInitFailed(),
                  o("WALogger")
                    .ERROR(
                      R ||
                        (R = babelHelpers.taggedTemplateLiteralLoose([
                          "[voip:recovery] fieldstats discovery failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("voip-fieldstats-recovery-init-failed", {
                      employeeSampling: 1,
                      sampling: 0.01,
                      sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
                    })));
          }
        })),
        q.apply(this, arguments)
      );
    }
    function U() {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!N()) {
            o("WALogger").LOG(
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:recovery] exit reason feature disabled, skip",
                ])),
            );
            return;
          }
          try {
            o("WALogger").LOG(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:recovery] init fieldstats recovery",
                ])),
            );
            var e =
              yield o("WAWebBackendApi").frontendSendAndReceive(
                "initializeVoipWasm",
              );
            yield W(e);
          } catch (e) {
            o("WALogger")
              .ERROR(
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:recovery] init failed",
                  ])),
              )
              .catching(e);
          }
        })),
        V.apply(this, arguments)
      );
    }
    function H(e) {
      if (r("WAWebLocalStorage") != null)
        try {
          (r("WAWebLocalStorage").setItem(I, D),
            r("WAWebLocalStorage").setItem(
              T,
              o("WAWebVoipGatingUtils").isWebTransportEnabled() ? "1" : "0",
            ),
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
    function G(e) {
      if (r("WAWebLocalStorage") != null)
        try {
          var t = r("WAWebLocalStorage").getItem(I);
          t === D &&
            (r("WAWebLocalStorage").setItem(I, x),
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
    function z(e) {
      if (r("WAWebLocalStorage") != null)
        try {
          var t = r("WAWebLocalStorage").getItem(I);
          t === x &&
            (r("WAWebLocalStorage").setItem(I, D),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:recovery] graceful exit cancelled: ",
                  "",
                ])),
              e,
            ));
        } catch (e) {}
    }
    function j(e) {
      if (r("WAWebLocalStorage") != null)
        try {
          (r("WAWebLocalStorage").removeItem(I),
            r("WAWebLocalStorage").removeItem(T),
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:recovery] state cleared (call end): ",
                  "",
                ])),
              e,
            ));
        } catch (e) {}
    }
    function K(e) {
      if ((Q(), typeof window != "undefined")) {
        var t = null,
          n = function () {
            t != null && (window.clearTimeout(t), (t = null));
          },
          r = function () {
            (G(e),
              n(),
              (t = window.setTimeout(function () {
                ((t = null), z(e));
              }, 0)));
          },
          o = function () {
            (n(), G(e));
          };
        (window.addEventListener("beforeunload", r),
          window.addEventListener("pagehide", o),
          (P = function () {
            (n(),
              window.removeEventListener("beforeunload", r),
              window.removeEventListener("pagehide", o));
          }));
      }
    }
    function Q() {
      P != null && (P(), (P = null));
    }
    ((l.initCrashRecovery = U),
      (l.markCallActive = H),
      (l.clearExitMarkers = j),
      (l.registerGracefulExitHandler = K),
      (l.unregisterGracefulExitHandler = Q));
  },
  98,
);
