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
    "WAWebODS",
    "WAWebVoipBatteryDiagnostics",
    "WAWebVoipBrowserMetrics",
    "WAWebVoipCallRatingStore",
    "WAWebVoipDeviceClassUtils",
    "WAWebVoipGatingUtils",
    "WAWebVoipJsonParsersWeb",
    "WAWebVoipMainThreadLockArm",
    "WAWebVoipMainThreadLockFixes",
    "WAWebVoipMainThreadLockMarker",
    "WAWebVoipMainThreadLockODS",
    "WAWebVoipPersistentFS",
    "WAWebWamEnumAppExitReason",
    "getErrorSafe",
    "justknobx",
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
      D = "wa_voip_call_state",
      x = "wa_voip_web_transport_used",
      $ = "wa_voip_call_random_id",
      P = "wa_voip_call_id",
      N = "active",
      M = "closing",
      w = {
        callId: null,
        callRandomId: null,
        callState: null,
        webTransportUsed: null,
      },
      A = 0,
      F = !1,
      O = null,
      B = null;
    function W() {
      return (
        o("WAWebABProps").getABPropConfigValue("app_exit_reason_version") > 0
      );
    }
    function q(t) {
      var n = t.callState;
      return n === M
        ? (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[voip:recovery] exit=USER_REQUESTED (tab close)",
              ])),
          ),
          o("WAWebWamEnumAppExitReason").APP_EXIT_REASON.USER_REQUESTED)
        : n === N
          ? (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:recovery] exit=CRASH (no beforeunload)",
                ])),
            ),
            o("WAWebWamEnumAppExitReason").APP_EXIT_REASON.CRASH)
          : o("WAWebWamEnumAppExitReason").APP_EXIT_REASON.UNKNOWN;
    }
    function U() {
      if (r("WAWebLocalStorage") == null) return w;
      try {
        var e;
        return {
          callId: (e = r("WAWebLocalStorage")).getItem(P),
          callRandomId: e.getItem($),
          callState: e.getItem(D),
          webTransportUsed: e.getItem(x),
        };
      } catch (e) {
        return w;
      }
    }
    function V(e) {
      if (r("WAWebLocalStorage") != null)
        try {
          var t = U();
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
          (r("WAWebLocalStorage").removeItem(D),
            r("WAWebLocalStorage").removeItem(x),
            r("WAWebLocalStorage").removeItem($),
            r("WAWebLocalStorage").removeItem(P));
        } catch (e) {}
    }
    function H(e, t, n) {
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
    function G(e, t) {
      var n = t.callRandomId;
      (n != null && (e.callRandomId = n),
        o("WAWebCallUserJourneyGating").isCallUserJourneyLoggingEnabled() &&
          (delete e.micPermission, delete e.cameraPermission));
    }
    async function z(e, t, n) {
      o("WAWebVoipMainThreadLockODS").logMainThreadLockReached(
        "fs_recovery_cleanup",
        o("WAWebVoipMainThreadLockArm").getMainThreadLockArm(),
      );
      try {
        if (!n) {
          var a = o("WAWebVoipMainThreadLockMarker").startMainThreadLockMarker(
            "fs_recovery_cleanup",
            "main",
          );
          try {
            e.cleanupUnfinishedCallStats();
          } finally {
            o("WAWebVoipMainThreadLockODS").logMainThreadLockCallDuration(
              "fs_recovery_cleanup",
              o("WAWebVoipMainThreadLockMarker").finishMainThreadLockMarker(a),
            );
          }
        }
        (await o("WAWebVoipPersistentFS").syncPersistentFS(e),
          V(t),
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[voip:recovery] cleaned up fieldstats",
              ])),
          ));
      } catch (e) {
        (r("WAWebODS").incr("web.call.fieldstats.recovery_cleanup_failed"),
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
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
    }
    function j(e) {
      var t = babelHelpers.extends(
        {},
        r("WAWebVoipJsonParsersWeb").parseFieldstatsData(e).stats,
      );
      return (
        t.callTermReason === A && delete t.callTermReason,
        delete t.callResult,
        t
      );
    }
    function K(e, t, n) {
      var r = j(e);
      return (
        H(r, t, n),
        G(r, n),
        new (o("WAWebCallWamEvent").CallWamEvent)(r)
      );
    }
    function Q(e) {
      e: {
        var t = o("WAWebVoipPersistentFS").checkForPersistedFieldstatsFiles(e);
        if (t === "found") return !0;
        if (t === "none") {
          return (
            o("WAWebVoipMainThreadLockODS").logMainThreadLockRecoveryPrecheck(
              "no_file",
            ),
            !1
          );
          break e;
        }
        if (t === "failed") {
          return (
            o("WAWebVoipMainThreadLockODS").logMainThreadLockRecoveryPrecheck(
              "failed",
            ),
            !0
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    async function X(e, t, n) {
      if (F) {
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:recovery] already attempted, skip",
            ])),
        );
        return;
      }
      F = !0;
      var a = !1;
      try {
        var i = o("WAWebVoipPersistentFS").getVoipPersistentDirectoryPath();
        if (i === "") {
          o("WALogger").WARN(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[voip:recovery] no cache dir, skip",
              ])),
          );
          return;
        }
        if (
          (await o("WAWebVoipPersistentFS").initPersistentFS(e),
          o("WAWebVoipMainThreadLockODS").logMainThreadLockReached(
            "fs_recovery_read",
            o("WAWebVoipMainThreadLockArm").getMainThreadLockArm(),
          ),
          n && !Q(e))
        ) {
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[voip:recovery] no fieldstats file, skip",
              ])),
          );
          return;
        }
        var l,
          s = o("WAWebVoipMainThreadLockMarker").startMainThreadLockMarker(
            "fs_recovery_read",
            "main",
          );
        try {
          l = e.getUnfinishedCallFieldstats(i);
        } finally {
          o("WAWebVoipMainThreadLockODS").logMainThreadLockCallDuration(
            "fs_recovery_read",
            o("WAWebVoipMainThreadLockMarker").finishMainThreadLockMarker(s),
          );
        }
        if (l == null || l.length === 0) {
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "[voip:recovery] no unfinished fieldstats",
              ])),
          );
          return;
        }
        if (
          (o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "[voip:recovery] found fieldstats len=",
                "",
              ])),
            l.length,
          ),
          (a = !0),
          o("WAWebCoreActionsODS").logCallErrorTerminal(),
          r("WAWebODS").incr("web.call.fieldstats.recovery_found"),
          o("WAWebVoipCallRatingStore").werePersistedFieldstatsHandedOff(l))
        ) {
          (r("WAWebODS").incr(
            "web.call.fieldstats.recovery_duplicate_suppressed",
          ),
            o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:recovery] skipping fieldstats already handed to WAM",
                ])),
            ),
            await z(e, t, n));
          return;
        }
        var u = q(t),
          c;
        try {
          c = K(l, u, t);
        } catch (a) {
          (r("WAWebODS").incr("web.call.fieldstats.recovery_parse_failed"),
            o("WALogger")
              .ERROR(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:recovery] invalid persisted fieldstats",
                  ])),
              )
              .catching(r("getErrorSafe")(a))
              .sendLogs("voip-fieldstats-recovery-parse-failed", {
                employeeSampling: 1,
                sampling: 0.01,
                sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
              }),
            await z(e, t, n));
          return;
        }
        (u === o("WAWebWamEnumAppExitReason").APP_EXIT_REASON.CRASH &&
          r("WAWebODS").incr("web.call.wasm_crash"),
          await c.commitAndWaitForFlush(),
          o("WAWebVoipCallRatingStore").markPersistedFieldstatsHandedOff(l),
          o("WALogger").LOG(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "[voip:recovery] uploaded fieldstats exit=",
                "",
              ])),
            u,
          ),
          r("WAWebODS").incr("web.call.fieldstats.recovery_completed"),
          await z(e, t, n));
      } catch (e) {
        ((F = !1),
          a
            ? (r("WAWebODS").incr("web.call.fieldstats.recovery_failed"),
              o("WALogger")
                .ERROR(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "[voip:recovery] fieldstats recovery failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("voip-fieldstats-recovery-failed", {
                  employeeSampling: 1,
                  sampling: 0.01,
                  sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
                }))
            : (r("WAWebODS").incr("web.call.fieldstats.recovery_init_failed"),
              o("WALogger")
                .ERROR(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
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
    }
    async function Y() {
      if (!W()) {
        o("WALogger").LOG(
          S ||
            (S = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:recovery] exit reason feature disabled, skip",
            ])),
        );
        return;
      }
      B == null && (B = U());
      var e = B;
      try {
        o("WALogger").LOG(
          R ||
            (R = babelHelpers.taggedTemplateLiteralLoose([
              "[voip:recovery] init fieldstats recovery",
            ])),
        );
        var t =
            o("WAWebVoipMainThreadLockFixes").readMainThreadLockFix() &&
            !r("justknobx")._("7006"),
          n =
            await o("WAWebBackendApi").frontendSendAndReceive(
              "initializeVoipWasm",
            );
        await X(n, e, t);
      } catch (e) {
        o("WALogger")
          .ERROR(
            L ||
              (L = babelHelpers.taggedTemplateLiteralLoose([
                "[voip:recovery] init failed",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      }
    }
    function J(e) {
      if (r("WAWebLocalStorage") != null)
        try {
          (r("WAWebLocalStorage").setItem(P, e),
            r("WAWebLocalStorage").setItem(D, N),
            r("WAWebLocalStorage").setItem(
              x,
              o("WAWebVoipGatingUtils").isWebTransportEnabled() ? "1" : "0",
            ));
          var t = o("WAWebCallRandomIdStore").getCurrentCallRandomId();
          (t != null
            ? r("WAWebLocalStorage").setItem($, t)
            : r("WAWebLocalStorage").removeItem($),
            o("WALogger").LOG(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:recovery] call active: ",
                  "",
                ])),
              e,
            ));
        } catch (e) {}
    }
    function Z(e) {
      if (r("WAWebLocalStorage") != null)
        try {
          var t = r("WAWebLocalStorage").getItem(D);
          t === N &&
            (r("WAWebLocalStorage").setItem(D, M),
            o("WALogger").LOG(
              k ||
                (k = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:recovery] graceful exit marked: ",
                  "",
                ])),
              e,
            ));
        } catch (e) {}
    }
    function ee(e) {
      if (r("WAWebLocalStorage") != null)
        try {
          var t = r("WAWebLocalStorage").getItem(D);
          t === M &&
            (r("WAWebLocalStorage").setItem(D, N),
            o("WALogger").LOG(
              I ||
                (I = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:recovery] graceful exit cancelled: ",
                  "",
                ])),
              e,
            ));
        } catch (e) {}
    }
    function te(e) {
      if (r("WAWebLocalStorage") != null)
        try {
          (r("WAWebLocalStorage").removeItem(D),
            r("WAWebLocalStorage").removeItem(x),
            r("WAWebLocalStorage").removeItem(P),
            o("WALogger").LOG(
              T ||
                (T = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip:recovery] state cleared (call end): ",
                  "",
                ])),
              e,
            ));
        } catch (e) {}
    }
    function ne(e) {
      if (!(r("WAWebLocalStorage") == null || e == null))
        try {
          r("WAWebLocalStorage").getItem($) === e &&
            r("WAWebLocalStorage").removeItem($);
        } catch (e) {}
    }
    function re(e) {
      if ((oe(), typeof window != "undefined")) {
        var t = null,
          n = function () {
            t != null && (window.clearTimeout(t), (t = null));
          },
          r = function () {
            (Z(e),
              n(),
              (t = window.setTimeout(function () {
                ((t = null), ee(e));
              }, 0)));
          },
          o = function () {
            (n(), Z(e));
          };
        (window.addEventListener("beforeunload", r),
          window.addEventListener("pagehide", o),
          (O = function () {
            (n(),
              window.removeEventListener("beforeunload", r),
              window.removeEventListener("pagehide", o));
          }));
      }
    }
    function oe() {
      O != null && (O(), (O = null));
    }
    ((l.initCrashRecovery = Y),
      (l.markCallActive = J),
      (l.clearExitMarkers = te),
      (l.clearCallRandomIdMarker = ne),
      (l.registerGracefulExitHandler = re),
      (l.unregisterGracefulExitHandler = oe));
  },
  98,
);
