__d(
  "WAWebVoipBootInitScheduler",
  [
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebABProps",
    "WAWebCoreActionsODS",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebUserPrefsMeUser",
    "WAWebVoipBackendLoadable",
    "WAWebVoipBootInitDecision",
    "WAWebVoipDeferredBootLogging",
    "WAWebVoipGatingUtils",
    "WAWebVoipInitABPropExposure",
    "asyncToGeneratorRuntime",
    "err",
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
      R = 5e3,
      L = 2147483647,
      E = 0,
      k = null,
      I = null,
      T = null,
      D = "idle";
    function x(t) {
      if ((t === void 0 && (t = !1), !q())) {
        var n;
        try {
          n = o("WAWebVoipBootInitDecision").isDeferredVoipBootInitEnabled();
        } catch (e) {
          (M(e), B());
          return;
        }
        if (!n) {
          t &&
            (o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] schedule_fail_open reason=deferred_gate_disabled",
                    ])),
                );
              },
            ),
            F());
          return;
        }
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          o("WAWebVoipInitABPropExposure").logVoipInitABPropExposures,
        );
        try {
          var r = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(!1);
          if (r == null) {
            (W(),
              o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
                function () {
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] schedule_ignored reason=self_lid_unavailable",
                      ])),
                  );
                },
              ));
            return;
          }
          if (D !== "idle" && P(k, r)) {
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] schedule_ignored reason=already_scheduled state=",
                      "",
                    ])),
                  D,
                );
              },
            );
            return;
          }
          (N(),
            E++,
            (k = r),
            (D = "waiting_offline"),
            (T = Q()),
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WAWebCoreActionsODS").logCallVoipBootInitDeferred();
              },
            ),
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] scheduled phase=offline_delivery generation=",
                      "",
                    ])),
                  E,
                );
              },
            ));
          var a = E;
          Y(a, r).catch(function (e) {
            (M(e), G(a, r));
          });
        } catch (e) {
          (M(e), B());
        }
      }
    }
    function $() {
      W();
    }
    function P(e, t) {
      return e == null || t == null ? e == null && t == null : e.equals(t);
    }
    function N() {
      I != null && (self.clearTimeout(I), (I = null));
    }
    function M(e) {
      o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: deferred boot init scheduler failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("voip-deferred-boot-init-scheduler-error");
        },
      );
    }
    function w(e, t) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e == null ? "fail_open" : "deferred";
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] backend_load_start source=",
                    "",
                  ])),
                n,
              );
            },
          );
          var r = yield o("WAWebVoipBackendLoadable").requireVoipJsBackend(),
            a = r.WAWebVoipInit;
          if (e != null && !V(e.generation, e.lid)) {
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] backend_ready ignored reason=stale_schedule",
                    ])),
                );
              },
            );
            return;
          }
          if (!(e != null && U()) && !q()) {
            var i = a.VoipInitEventEmitter.getIsVoipInited();
            (o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] init_dispatch trigger=prewarm source=",
                      " already_inited=",
                      "",
                    ])),
                  n,
                  i,
                );
              },
            ),
              yield a.initWAWebVoip("prewarm", t),
              o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
                function () {
                  o("WALogger").LOG(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] init_complete trigger=prewarm source=",
                        " inited=",
                        "",
                      ])),
                    n,
                    a.VoipInitEventEmitter.getIsVoipInited(),
                  );
                },
              ));
          }
        })),
        A.apply(this, arguments)
      );
    }
    function F(e, t) {
      (e === void 0 && (e = null),
        w(e, t).catch(function (t) {
          (O(e), M(t));
        }));
    }
    function O(e) {
      if (!(e == null || e.generation !== E || k == null || !e.lid.equals(k)))
        try {
          W();
        } catch (e) {
          M(e);
        }
    }
    function B() {
      var e = j("scheduler_error");
      try {
        W();
      } catch (e) {
        M(e);
      }
      (o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          o("WAWebCoreActionsODS").logCallVoipBootInitFireAttempt(
            "scheduler_error",
          );
        },
      ),
        F(null, e));
    }
    function W() {
      try {
        N();
      } finally {
        (E++, (k = null), (T = null), (D = "idle"));
      }
    }
    function q() {
      var e = !0;
      try {
        e = o("WAWebVoipGatingUtils").isVoipDownloadEnabled();
      } catch (e) {
        M(e);
      }
      if (e) return !1;
      o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [deferred-boot] schedule_abandon reason=download_disabled state=",
                "",
              ])),
            D,
          );
        },
      );
      try {
        W();
      } catch (e) {
        M(e);
      }
      return !0;
    }
    function U() {
      var e = !0;
      try {
        e = o("WAWebVoipBootInitDecision").isDeferredVoipBootInitEnabled();
      } catch (e) {
        M(e);
      }
      if (e) return !1;
      o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [deferred-boot] schedule_abandon reason=deferred_gate_disabled state=",
                "",
              ])),
            D,
          );
        },
      );
      try {
        W();
      } catch (e) {
        M(e);
      }
      return !0;
    }
    function V(e, t) {
      if (e !== E || k == null || !t.equals(k)) return !1;
      var n = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(!1);
      return n == null || !t.equals(n)
        ? (o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] schedule_abandon reason=identity_changed state=",
                    "",
                  ])),
                D,
              );
            },
          ),
          W(),
          !1)
        : !0;
    }
    function H(e, t, n) {
      D === "idle" ||
        D === "fired" ||
        !V(t, n) ||
        z(e, { generation: t, lid: n });
    }
    function G(e, t) {
      D === "idle" ||
        D === "fired" ||
        e !== E ||
        k == null ||
        !t.equals(k) ||
        z("scheduler_error", { generation: e, lid: t });
    }
    function z(e, t) {
      if (!(t != null && U()) && !q()) {
        ((D = "fired"),
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WAWebCoreActionsODS").logCallVoipBootInitFireAttempt(e);
            },
          ));
        var n = j(e);
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            var t;
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [deferred-boot] fire reason=",
                  " wait_ms=",
                  "",
                ])),
              e,
              String((t = n.waitMs) != null ? t : "unavailable"),
            );
          },
        );
        try {
          N();
        } catch (e) {
          M(e);
        }
        F(t, n);
      }
    }
    function j(e) {
      var t = K();
      return t == null ? { reason: e } : { reason: e, waitMs: t };
    }
    function K() {
      var e = T;
      if (e == null) return null;
      var t = Q();
      return t == null ? null : Math.round(Math.max(0, t - e));
    }
    function Q() {
      try {
        return self.performance.now();
      } catch (e) {
        return (M(e), null);
      }
    }
    function X(e, t) {
      if (V(e, t)) {
        var n = o("WAWebABProps").getABPropConfigValue(
          "web_voip_deferred_boot_init_max_delay_ms",
        );
        if (!Number.isFinite(n))
          throw r("err")("invalid deferred boot max delay");
        if (((D = "armed"), n <= 0)) {
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              (o("WAWebCoreActionsODS").logCallVoipBootInitArmed("lazy"),
                o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] armed mode=lazy",
                    ])),
                ));
            },
          );
          return;
        }
        (o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            (o("WAWebCoreActionsODS").logCallVoipBootInitArmed("deadline"),
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] armed mode=deadline max_delay_ms=",
                    "",
                  ])),
                n,
              ));
          },
        ),
          (I = self.setTimeout(
            function () {
              ((I = null), H("deadline", e, t));
            },
            Math.min(n, L),
          )));
      }
    }
    function Y(e, t) {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = "complete";
          try {
            yield o("WAPromiseTimeout").promiseTimeout(
              o(
                "WAWebEventsWaitForOfflineDeliveryEnd",
              ).waitForOfflineDeliveryEnd({ ignoreInit: !0 }),
              R,
            );
          } catch (r) {
            if (!V(e, t)) return;
            if (!(r instanceof o("WACustomError").TimeoutError)) {
              (M(r), G(e, t));
              return;
            }
            n = "timeout";
          }
          if (V(e, t)) {
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] offline_delivery_wait_done outcome=",
                      "",
                    ])),
                  n,
                );
              },
            );
            try {
              X(e, t);
            } catch (n) {
              (M(n), G(e, t));
            }
          }
        })),
        J.apply(this, arguments)
      );
    }
    ((l.scheduleDeferredVoipBootInit = x),
      (l.resetVoipBootInitSchedulerForTesting = $));
  },
  98,
);
