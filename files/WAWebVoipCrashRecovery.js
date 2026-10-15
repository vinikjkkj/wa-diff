__d(
  "WAWebVoipCrashRecovery",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebBrowserApi",
    "WAWebCallRandomIdStore",
    "WAWebCallUserJourneyGating",
    "WAWebCallWamEvent",
    "WAWebCoreActionsODS",
    "WAWebLocalStorage",
    "WAWebVoipBatteryDiagnostics",
    "WAWebVoipBrowserMetrics",
    "WAWebVoipCallRatingStore",
    "WAWebVoipDeviceClassUtils",
    "WAWebVoipGatingUtils",
    "WAWebVoipJsonParsersWeb",
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
      I,
      T = "wa_voip_call_state",
      D = "wa_voip_web_transport_used",
      x = "wa_voip_call_random_id",
      $ = "wa_voip_call_id",
      P = "active",
      N = "closing",
      M = {
        callId: null,
        callRandomId: null,
        callState: null,
        webTransportUsed: null,
      },
      w = 0,
      A = !1,
      F = null,
      O = null;
    function B() {
      return (
        o("WAWebABProps").getABPropConfigValue("app_exit_reason_version") > 0
      );
    }
    function W(t) {
      var n = t.callState;
      return n === N
        ? (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[voip:recovery] exit=USER_REQUESTED (tab close)",
              ])),
          ),
          o("WAWebWamEnumAppExitReason").APP_EXIT_REASON.USER_REQUESTED)
        : n === P
          ? (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:recovery] exit=CRASH (no beforeunload)",
                ])),
            ),
            o("WAWebWamEnumAppExitReason").APP_EXIT_REASON.CRASH)
          : o("WAWebWamEnumAppExitReason").APP_EXIT_REASON.UNKNOWN;
    }
    function q() {
      if (r("WAWebLocalStorage") == null) return M;
      try {
        var e;
        return {
          callId: (e = r("WAWebLocalStorage")).getItem($),
          callRandomId: e.getItem(x),
          callState: e.getItem(T),
          webTransportUsed: e.getItem(D),
        };
      } catch (e) {
        return M;
      }
    }
    function U(e) {
      if (r("WAWebLocalStorage") != null)
        try {
          var t = q();
          if (
            t.callId !== e.callId ||
            t.callRandomId !== e.callRandomId ||
            t.callState !== e.callState ||
            t.webTransportUsed !== e.webTransportUsed
          ) {
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:recovery] markers changed since recovery started, keep",
                ])),
            );
            return;
          }
          (r("WAWebLocalStorage").removeItem(T),
            r("WAWebLocalStorage").removeItem(D),
            r("WAWebLocalStorage").removeItem(x),
            r("WAWebLocalStorage").removeItem($));
        } catch (e) {}
    }
    function V(e, t, n) {
      e.appExitReason = t;
      var r = o("WAWebBrowserApi").getNumCpu(),
        a = o("WAWebBrowserApi").getMemClass();
      (r != null && (e.numCpuCores = r),
        a != null && (e.totalMemoryGb = Math.round(a / 1e3)));
      var i = a != null ? Math.round(a / 1e3) : null,
        l = o("WAWebVoipDeviceClassUtils").computeDeviceClass(r, i);
      l != null && (e.deviceClass = l);
      var s = o("WAWebVoipBrowserMetrics").getBrowserMetricsCapabilities();
      ((e.browserCpuPressureSupported = s.browserCpuPressureSupported),
        (e.browserMemorySupported = s.browserMemorySupported));
      var u = o(
        "WAWebVoipBatteryDiagnostics",
      ).getBatteryDiagnosticsCapabilities();
      ((e.browserBatterySupported = u.browserBatterySupported),
        (e.webTransportUsed = n.webTransportUsed === "1"));
    }
    function H(e, t) {
      var n = t.callRandomId;
      (n != null && (e.callRandomId = n),
        o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled() &&
          (delete e.micPermission, delete e.cameraPermission));
    }
    function G(e, t) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            (e.cleanupUnfinishedCallStats(),
              yield o("WAWebVoipPersistentFS").syncPersistentFS(e),
              U(t),
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:recovery] cleaned up fieldstats",
                  ])),
              ));
          } catch (e) {
            (o("WAWebCoreActionsODS").logCallFieldstatsRecoveryCleanupFailed(),
              o("WALogger")
                .ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
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
        z.apply(this, arguments)
      );
    }
    function j(e) {
      var t = babelHelpers.extends(
        {},
        r("WAWebVoipJsonParsersWeb").parseFieldstatsData(e).stats,
      );
      return (
        t.callTermReason === w && delete t.callTermReason,
        delete t.callResult,
        t
      );
    }
    function K(e, t, n) {
      var r = j(e);
      return (
        V(r, t, n),
        H(r, n),
        new (o("WAWebCallWamEvent").CallWamEvent)(r)
      );
    }
    function Q(e, t) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (A) {
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:recovery] already attempted, skip",
                ])),
            );
            return;
          }
          A = !0;
          var n = !1;
          try {
            var a = o("WAWebVoipPersistentFS").getVoipPersistentDirectoryPath();
            if (a === "") {
              o("WALogger").WARN(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:recovery] no cache dir, skip",
                  ])),
              );
              return;
            }
            yield o("WAWebVoipPersistentFS").initPersistentFS(e);
            var i = e.getUnfinishedCallFieldstats(a);
            if (i == null || i.length === 0) {
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:recovery] no unfinished fieldstats",
                  ])),
              );
              return;
            }
            if (
              (o("WALogger").LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:recovery] found fieldstats len=",
                    "",
                  ])),
                i.length,
              ),
              (n = !0),
              o("WAWebCoreActionsODS").logCallErrorTerminal(),
              o("WAWebCoreActionsODS").logCallFieldstatsRecoveryFound(),
              o("WAWebVoipCallRatingStore").werePersistedFieldstatsHandedOff(i))
            ) {
              (o(
                "WAWebCoreActionsODS",
              ).logCallFieldstatsRecoveryDuplicateSuppressed(),
                o("WALogger").LOG(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "[voip:recovery] skipping fieldstats already handed to WAM",
                    ])),
                ),
                yield G(e, t));
              return;
            }
            var l = W(t),
              s;
            try {
              s = K(i, l, t);
            } catch (n) {
              (o("WAWebCoreActionsODS").logCallFieldstatsRecoveryParseFailed(),
                o("WALogger")
                  .ERROR(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
                        "[voip:recovery] invalid persisted fieldstats",
                      ])),
                  )
                  .catching(r("getErrorSafe")(n))
                  .sendLogs("voip-fieldstats-recovery-parse-failed", {
                    employeeSampling: 1,
                    sampling: 0.01,
                    sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
                  }),
                yield G(e, t));
              return;
            }
            (l === o("WAWebWamEnumAppExitReason").APP_EXIT_REASON.CRASH &&
              o("WAWebCoreActionsODS").logCallWasmCrash(),
              yield s.commitAndWaitForFlush(),
              o("WAWebVoipCallRatingStore").markPersistedFieldstatsHandedOff(i),
              o("WALogger").LOG(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:recovery] uploaded fieldstats exit=",
                    "",
                  ])),
                l,
              ),
              o("WAWebCoreActionsODS").logCallFieldstatsRecoveryCompleted(),
              yield G(e, t));
          } catch (e) {
            ((A = !1),
              n
                ? (o("WAWebCoreActionsODS").logCallFieldstatsRecoveryFailed(),
                  o("WALogger")
                    .ERROR(
                      R ||
                        (R = babelHelpers.taggedTemplateLiteralLoose([
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
                      L ||
                        (L = babelHelpers.taggedTemplateLiteralLoose([
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
        X.apply(this, arguments)
      );
    }
    function Y() {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!B()) {
            o("WALogger").LOG(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:recovery] exit reason feature disabled, skip",
                ])),
            );
            return;
          }
          O == null && (O = q());
          var e = O;
          try {
            o("WALogger").LOG(
              k ||
                (k = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:recovery] init fieldstats recovery",
                ])),
            );
            var t =
              yield o("WAWebBackendApi").frontendSendAndReceive(
                "initializeVoipWasm",
              );
            yield Q(t, e);
          } catch (e) {
            o("WALogger")
              .ERROR(
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:recovery] init failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }
        })),
        J.apply(this, arguments)
      );
    }
    function Z(e) {
      if (r("WAWebLocalStorage") != null)
        try {
          (r("WAWebLocalStorage").setItem($, e),
            r("WAWebLocalStorage").setItem(T, P),
            r("WAWebLocalStorage").setItem(
              D,
              o("WAWebVoipGatingUtils").isWebTransportEnabled() ? "1" : "0",
            ));
          var t = o("WAWebCallRandomIdStore").getCurrentCallRandomId();
          (t != null
            ? r("WAWebLocalStorage").setItem(x, t)
            : r("WAWebLocalStorage").removeItem(x),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:recovery] call active: ",
                  "",
                ])),
              e,
            ));
        } catch (e) {}
    }
    function ee(e) {
      if (r("WAWebLocalStorage") != null)
        try {
          var t = r("WAWebLocalStorage").getItem(T);
          t === P &&
            (r("WAWebLocalStorage").setItem(T, N),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:recovery] graceful exit marked: ",
                  "",
                ])),
              e,
            ));
        } catch (e) {}
    }
    function te(e) {
      if (r("WAWebLocalStorage") != null)
        try {
          var t = r("WAWebLocalStorage").getItem(T);
          t === N &&
            (r("WAWebLocalStorage").setItem(T, P),
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:recovery] graceful exit cancelled: ",
                  "",
                ])),
              e,
            ));
        } catch (e) {}
    }
    function ne(e) {
      if (r("WAWebLocalStorage") != null)
        try {
          (r("WAWebLocalStorage").removeItem(T),
            r("WAWebLocalStorage").removeItem(D),
            r("WAWebLocalStorage").removeItem($),
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:recovery] state cleared (call end): ",
                  "",
                ])),
              e,
            ));
        } catch (e) {}
    }
    function re(e) {
      if (!(r("WAWebLocalStorage") == null || e == null))
        try {
          r("WAWebLocalStorage").getItem(x) === e &&
            r("WAWebLocalStorage").removeItem(x);
        } catch (e) {}
    }
    function oe(e) {
      if ((ae(), typeof window != "undefined")) {
        var t = null,
          n = function () {
            t != null && (window.clearTimeout(t), (t = null));
          },
          r = function () {
            (ee(e),
              n(),
              (t = window.setTimeout(function () {
                ((t = null), te(e));
              }, 0)));
          },
          o = function () {
            (n(), ee(e));
          };
        (window.addEventListener("beforeunload", r),
          window.addEventListener("pagehide", o),
          (F = function () {
            (n(),
              window.removeEventListener("beforeunload", r),
              window.removeEventListener("pagehide", o));
          }));
      }
    }
    function ae() {
      F != null && (F(), (F = null));
    }
    ((l.initCrashRecovery = Y),
      (l.markCallActive = Z),
      (l.clearExitMarkers = ne),
      (l.clearCallRandomIdMarker = re),
      (l.registerGracefulExitHandler = oe),
      (l.unregisterGracefulExitHandler = ae));
  },
  98,
);
