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
      k = "wa_voip_call_state",
      I = "wa_voip_web_transport_used",
      T = "active",
      D = "closing",
      x = !1,
      $ = null;
    function P() {
      return (
        o("WAWebABProps").getABPropConfigValue("app_exit_reason_version") > 0
      );
    }
    function N() {
      if (r("WAWebLocalStorage") == null)
        return o("WAWebWamEnumAppExitReason").APP_EXIT_REASON.UNKNOWN;
      try {
        var t = r("WAWebLocalStorage").getItem(k);
        return t === D
          ? (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:recovery] exit=USER_REQUESTED (tab close)",
                ])),
            ),
            o("WAWebWamEnumAppExitReason").APP_EXIT_REASON.USER_REQUESTED)
          : t === T
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
    function M() {
      if (r("WAWebLocalStorage") != null)
        try {
          (r("WAWebLocalStorage").removeItem(k),
            r("WAWebLocalStorage").removeItem(I));
        } catch (e) {}
    }
    function w() {
      if (r("WAWebLocalStorage") == null) return !1;
      try {
        return r("WAWebLocalStorage").getItem(I) === "1";
      } catch (e) {
        return !1;
      }
    }
    function A(e, t) {
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
        (e.webTransportUsed = w()));
    }
    function F(e) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            (e.cleanupUnfinishedCallStats(),
              yield o("WAWebVoipPersistentFS").syncPersistentFS(e),
              M(),
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:recovery] cleaned up fieldstats",
                  ])),
              ));
          } catch (e) {
            (o("WAWebCoreActionsODS").logCallFieldstatsRecoveryCleanupFailed(),
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
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
        O.apply(this, arguments)
      );
    }
    function B(e) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (x) {
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:recovery] already attempted, skip",
                ])),
            );
            return;
          }
          x = !0;
          var t = !1;
          try {
            var n = o("WAWebVoipPersistentFS").getVoipPersistentDirectoryPath();
            if (n === "") {
              o("WALogger").WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:recovery] no cache dir, skip",
                  ])),
              );
              return;
            }
            yield o("WAWebVoipPersistentFS").initPersistentFS(e);
            var a = e.getUnfinishedCallFieldstats(n);
            if (a == null || a.length === 0) {
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:recovery] no unfinished fieldstats",
                  ])),
              );
              return;
            }
            if (
              (o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
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
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "[voip:recovery] skipping fieldstats already handed to WAM",
                    ])),
                ),
                yield F(e));
              return;
            }
            var i;
            try {
              i = JSON.parse(a);
            } catch (t) {
              (o("WAWebCoreActionsODS").logCallFieldstatsRecoveryParseFailed(),
                o("WALogger")
                  .ERROR(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip:recovery] invalid persisted fieldstats",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t))
                  .sendLogs("voip-fieldstats-recovery-parse-failed", {
                    employeeSampling: 1,
                    sampling: 0.01,
                    sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
                  }),
                yield F(e));
              return;
            }
            var l = N();
            (l === o("WAWebWamEnumAppExitReason").APP_EXIT_REASON.CRASH &&
              o("WAWebCoreActionsODS").logCallWasmCrash(),
              A(i, l));
            var s = new (o("WAWebCallWamEvent").CallWamEvent)(i);
            (yield s.commitAndWaitForFlush(),
              o("WAWebVoipCallRatingStore").markPersistedFieldstatsHandedOff(a),
              o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:recovery] uploaded fieldstats exit=",
                    "",
                  ])),
                l,
              ),
              o("WAWebCoreActionsODS").logCallFieldstatsRecoveryCompleted(),
              yield F(e));
          } catch (e) {
            ((x = !1),
              t
                ? (o("WAWebCoreActionsODS").logCallFieldstatsRecoveryFailed(),
                  o("WALogger")
                    .ERROR(
                      v ||
                        (v = babelHelpers.taggedTemplateLiteralLoose([
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
                      S ||
                        (S = babelHelpers.taggedTemplateLiteralLoose([
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
        W.apply(this, arguments)
      );
    }
    function q() {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!P()) {
            o("WALogger").LOG(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:recovery] exit reason feature disabled, skip",
                ])),
            );
            return;
          }
          try {
            o("WALogger").LOG(
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:recovery] init fieldstats recovery",
                ])),
            );
            var e =
              yield o("WAWebBackendApi").frontendSendAndReceive(
                "initializeVoipWasm",
              );
            yield B(e);
          } catch (e) {
            o("WALogger")
              .ERROR(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:recovery] init failed",
                  ])),
              )
              .catching(e);
          }
        })),
        U.apply(this, arguments)
      );
    }
    function V(e) {
      if (r("WAWebLocalStorage") != null)
        try {
          (r("WAWebLocalStorage").setItem(k, T),
            r("WAWebLocalStorage").setItem(
              I,
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
    function H(e) {
      if (r("WAWebLocalStorage") != null)
        try {
          var t = r("WAWebLocalStorage").getItem(k);
          t === T &&
            (r("WAWebLocalStorage").setItem(k, D),
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
    function G(e) {
      if (r("WAWebLocalStorage") != null)
        try {
          (r("WAWebLocalStorage").removeItem(k),
            r("WAWebLocalStorage").removeItem(I),
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
    function z(e) {
      if ((j(), typeof window != "undefined")) {
        var t = function () {
          H(e);
        };
        (window.addEventListener("beforeunload", t),
          ($ = function () {
            window.removeEventListener("beforeunload", t);
          }));
      }
    }
    function j() {
      $ != null && ($(), ($ = null));
    }
    ((l.initCrashRecovery = q),
      (l.markCallActive = V),
      (l.clearExitMarkers = G),
      (l.registerGracefulExitHandler = z),
      (l.unregisterGracefulExitHandler = j));
  },
  98,
);
