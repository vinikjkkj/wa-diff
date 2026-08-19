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
    "WAWebVoipDeferredBootLogging",
    "WAWebVoipGatingUtils",
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
      R,
      L,
      E,
      k = 5e3,
      I = 1e4,
      T = 0,
      D = null,
      x = null,
      $ = null,
      P = !1,
      N = 0,
      M = null,
      w = "idle",
      A = 0,
      F = null,
      O = 0;
    function B(t) {
      if ((t === void 0 && (t = !1), !ee())) {
        var n;
        try {
          n = o("WAWebVoipGatingUtils").isDeferredVoipBootInitEnabled();
        } catch (e) {
          (j(e), J());
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
            X());
          return;
        }
        try {
          var r = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(!1);
          if (r == null) {
            (Z(),
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
          if (w !== "idle" && q(D, r)) {
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] schedule_ignored reason=already_scheduled state=",
                      "",
                    ])),
                  w,
                );
              },
            );
            return;
          }
          (z(),
            T++,
            (D = r),
            (w = "waiting_offline"),
            (A = 0),
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
                  T,
                );
              },
            ));
          var a = T;
          ge(a, r).catch(function (e) {
            (j(e), oe(a, r));
          });
        } catch (e) {
          (j(e), J());
        }
      }
    }
    function W() {
      (Z(), (N = 0));
    }
    function q(e, t) {
      return e == null || t == null ? e == null && t == null : e.equals(t);
    }
    function U() {
      x != null && (self.clearTimeout(x), (x = null));
    }
    function V() {
      if ($ != null) {
        var e = Reflect.get(window, "cancelIdleCallback");
        (typeof e == "function" && e.call(window, $), ($ = null));
      }
    }
    function H() {
      M != null && (self.clearTimeout(M), (M = null));
    }
    function G() {
      P && (document.removeEventListener("visibilitychange", _e), (P = !1));
    }
    function z() {
      (U(), V(), H(), G(), (F = null));
    }
    function j(e) {
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
    function K(e, t) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e == null ? "fail_open" : "deferred";
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] backend_load_start source=",
                    "",
                  ])),
                n,
              );
            },
          );
          var r = yield o("WAWebVoipBackendLoadable").requireVoipJsBackend(),
            a = r.WAWebVoipInit;
          if (e != null && !ne(e.generation, e.lid)) {
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] backend_ready ignored reason=stale_schedule",
                    ])),
                );
              },
            );
            return;
          }
          if (!(e != null && te()) && !ee()) {
            var i = a.VoipInitEventEmitter.getIsVoipInited();
            (o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
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
                    L ||
                      (L = babelHelpers.taggedTemplateLiteralLoose([
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
        Q.apply(this, arguments)
      );
    }
    function X(e, t) {
      (e === void 0 && (e = null),
        K(e, t).catch(function (t) {
          (Y(e), j(t));
        }));
    }
    function Y(e) {
      if (!(e == null || e.generation !== T || D == null || !e.lid.equals(D)))
        try {
          Z();
        } catch (e) {
          j(e);
        }
    }
    function J() {
      var e = se("scheduler_error");
      try {
        Z();
      } catch (e) {
        j(e);
      }
      (o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          o("WAWebCoreActionsODS").logCallVoipBootInitFireAttempt(
            "scheduler_error",
          );
        },
      ),
        X(null, e));
    }
    function Z() {
      try {
        z();
      } finally {
        (T++, (D = null), (w = "idle"), (A = 0));
      }
    }
    function ee() {
      var e = !0;
      try {
        e = o("WAWebVoipGatingUtils").isVoipDownloadEnabled();
      } catch (e) {
        j(e);
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
            w,
          );
        },
      );
      try {
        Z();
      } catch (e) {
        j(e);
      }
      return !0;
    }
    function te() {
      var e = !0;
      try {
        e = o("WAWebVoipGatingUtils").isDeferredVoipBootInitEnabled();
      } catch (e) {
        j(e);
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
            w,
          );
        },
      );
      try {
        Z();
      } catch (e) {
        j(e);
      }
      return !0;
    }
    function ne(e, t) {
      if (e !== T || D == null || !t.equals(D)) return !1;
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
                w,
              );
            },
          ),
          Z(),
          !1)
        : !0;
    }
    function re(e, t, n) {
      w === "idle" ||
        w === "fired" ||
        !ne(t, n) ||
        ae(e, { generation: t, lid: n });
    }
    function oe(e, t) {
      w === "idle" ||
        w === "fired" ||
        e !== T ||
        D == null ||
        !t.equals(D) ||
        ae("scheduler_error", { generation: e, lid: t });
    }
    function ae(e, t) {
      if (!(t != null && te()) && !ee()) {
        ((w = "fired"),
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WAWebCoreActionsODS").logCallVoipBootInitFireAttempt(e);
            },
          ));
        var n = se(e);
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            var t;
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [deferred-boot] fire reason=",
                  " visible_wait_ms=",
                  "",
                ])),
              e,
              String((t = n.visibleWaitMs) != null ? t : "unavailable"),
            );
          },
        );
        try {
          z();
        } catch (e) {
          j(e);
        }
        X(t, n);
      }
    }
    function ie() {
      return Math.max(0, N - A);
    }
    function le() {
      var e = F;
      return A + (e == null ? 0 : Math.max(0, self.performance.now() - e));
    }
    function se(e) {
      var t = ue();
      return t == null ? { reason: e } : { reason: e, visibleWaitMs: t };
    }
    function ue() {
      try {
        return Math.round(le());
      } catch (e) {
        return (j(e), null);
      }
    }
    function ce(e, t) {
      var n = ie();
      if (n === 0) {
        re("deadline", e, t);
        return;
      }
      x = self.setTimeout(function () {
        ((x = null), re("deadline", e, t));
      }, n);
    }
    function de(e, t, n) {
      var r = Reflect.get(window, "requestIdleCallback");
      if (typeof r == "function") {
        var a = function (o) {
          n === O &&
            (($ = null),
            !(o.didTimeout || document.hidden || w !== "armed" || !ne(e, t)) &&
              re("quiet", e, t));
        };
        (o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [deferred-boot] quiet_gate_wait min_continuous_visible_ms=",
                  "",
                ])),
              I,
            );
          },
        ),
          (M = self.setTimeout(function () {
            if (n === O) {
              M = null;
              try {
                var i = F;
                if (document.hidden || w !== "armed" || i == null || !ne(e, t))
                  return;
                (o(
                  "WAWebVoipDeferredBootLogging",
                ).safelyLogVoipDeferredBootEvent(function () {
                  o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] quiet_gate_armed continuous_visible_ms=",
                        "",
                      ])),
                    Math.round(Math.max(0, self.performance.now() - i)),
                  );
                }),
                  ($ = r.call(window, a)));
              } catch (n) {
                (j(n), oe(e, t));
              }
            }
          }, I)));
      }
    }
    function me(e, t) {
      if (!(w !== "armed" || document.hidden)) {
        ((F = self.performance.now()), O++);
        var n = O;
        (o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [deferred-boot] visible_window_start remaining_ms=",
                  "",
                ])),
              Math.round(ie()),
            );
          },
        ),
          ce(e, t),
          w === "armed" && de(e, t, n));
      }
    }
    function pe() {
      var e = F;
      e != null &&
        ((A += Math.max(0, self.performance.now() - e)),
        (F = null),
        U(),
        V(),
        H(),
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [deferred-boot] visibility hidden visible_wait_ms=",
                  " remaining_ms=",
                  "",
                ])),
              Math.round(A),
              Math.round(ie()),
            );
          },
        ));
    }
    function _e() {
      var e = D,
        t = T;
      if (!(w !== "armed" || e == null))
        try {
          if (!ne(t, e)) return;
          document.hidden ? pe() : F == null && me(t, e);
        } catch (n) {
          (j(n), oe(t, e));
        }
    }
    function fe(e, t) {
      if (ne(e, t)) {
        var n = o("WAWebABProps").getABPropConfigValue(
          "web_voip_deferred_boot_init_max_delay_ms",
        );
        if (!Number.isFinite(n))
          throw r("err")("invalid deferred boot max visible delay");
        if (
          ((N = Math.max(0, n)),
          (A = 0),
          (w = "armed"),
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] armed max_visible_delay_ms=",
                    " visibility=",
                    "",
                  ])),
                N,
                document.hidden ? "hidden" : "visible",
              );
            },
          ),
          document.addEventListener("visibilitychange", _e),
          (P = !0),
          ie() === 0)
        ) {
          re("deadline", e, t);
          return;
        }
        me(e, t);
      }
    }
    function ge(e, t) {
      return he.apply(this, arguments);
    }
    function he() {
      return (
        (he = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = "complete";
          try {
            yield o("WAPromiseTimeout").promiseTimeout(
              o(
                "WAWebEventsWaitForOfflineDeliveryEnd",
              ).waitForOfflineDeliveryEnd({ ignoreInit: !0 }),
              k,
            );
          } catch (r) {
            if (!ne(e, t)) return;
            if (!(r instanceof o("WACustomError").TimeoutError)) {
              (j(r), oe(e, t));
              return;
            }
            n = "timeout";
          }
          if (ne(e, t)) {
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] offline_delivery_wait_done outcome=",
                      "",
                    ])),
                  n,
                );
              },
            );
            try {
              fe(e, t);
            } catch (n) {
              (j(n), oe(e, t));
            }
          }
        })),
        he.apply(this, arguments)
      );
    }
    ((l.scheduleDeferredVoipBootInit = B),
      (l.resetVoipBootInitSchedulerForTesting = W));
  },
  98,
);
