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
    "WAWebVoipBootHiddenPrewarm",
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
      R,
      L = 5e3,
      E = 2147483647,
      k = 0,
      I = null,
      T = null,
      D = null,
      x = "idle",
      $ = null;
    function P(t) {
      if ((t === void 0 && (t = !1), !G())) {
        var n;
        try {
          n = o("WAWebVoipBootInitDecision").isDeferredVoipBootInitEnabled();
        } catch (e) {
          (O(e), V());
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
            q());
          return;
        }
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          o("WAWebVoipInitABPropExposure").logVoipInitABPropExposures,
        );
        try {
          var r = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(!1);
          if (r == null) {
            (H(),
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
          if (x !== "idle" && M(I, r)) {
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] schedule_ignored reason=already_scheduled state=",
                      "",
                    ])),
                  x,
                );
              },
            );
            return;
          }
          (w(),
            k++,
            (I = r),
            (x = "waiting_offline"),
            (D = Z()),
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
                  k,
                );
              },
            ));
          var a = k;
          ne(a, r).catch(function (e) {
            (O(e), Q(a, r));
          });
        } catch (e) {
          (O(e), V());
        }
      }
    }
    function N() {
      H();
    }
    function M(e, t) {
      return e == null || t == null ? e == null && t == null : e.equals(t);
    }
    function w() {
      (A(), F());
    }
    function A() {
      T != null && (self.clearTimeout(T), (T = null));
    }
    function F() {
      var e = $;
      (($ = null), e == null || e());
    }
    function O(e) {
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
    function B(e, t) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e == null ? "fail_open" : "deferred";
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WALogger").LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] backend_load_start source=",
                    "",
                  ])),
                n,
              );
            },
          );
          var r = yield o("WAWebVoipBackendLoadable").requireVoipJsBackend(),
            a = r.WAWebVoipInit;
          if (e != null && !j(e.generation, e.lid)) {
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] backend_ready ignored reason=stale_schedule",
                    ])),
                );
              },
            );
            return;
          }
          if (!(e != null && z()) && !G()) {
            var i = a.VoipInitEventEmitter.getIsVoipInited();
            (o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
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
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
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
        W.apply(this, arguments)
      );
    }
    function q(e, t) {
      (e === void 0 && (e = null),
        B(e, t).catch(function (t) {
          (U(e), O(t));
        }));
    }
    function U(e) {
      if (!(e == null || e.generation !== k || I == null || !e.lid.equals(I)))
        try {
          H();
        } catch (e) {
          O(e);
        }
    }
    function V() {
      var e = Y("scheduler_error");
      try {
        H();
      } catch (e) {
        O(e);
      }
      (o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          o("WAWebCoreActionsODS").logCallVoipBootInitFireAttempt(
            "scheduler_error",
          );
        },
      ),
        q(null, e));
    }
    function H() {
      try {
        w();
      } finally {
        (k++, (I = null), (D = null), (x = "idle"));
      }
    }
    function G() {
      var e = !0;
      try {
        e = o("WAWebVoipGatingUtils").isVoipDownloadEnabled();
      } catch (e) {
        O(e);
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
            x,
          );
        },
      );
      try {
        H();
      } catch (e) {
        O(e);
      }
      return !0;
    }
    function z() {
      var e = !0;
      try {
        e = o("WAWebVoipBootInitDecision").isDeferredVoipBootInitEnabled();
      } catch (e) {
        O(e);
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
            x,
          );
        },
      );
      try {
        H();
      } catch (e) {
        O(e);
      }
      return !0;
    }
    function j(e, t) {
      if (e !== k || I == null || !t.equals(I)) return !1;
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
                x,
              );
            },
          ),
          H(),
          !1)
        : !0;
    }
    function K(e, t, n) {
      x === "idle" ||
        x === "fired" ||
        !j(t, n) ||
        X(e, { generation: t, lid: n });
    }
    function Q(e, t) {
      x === "idle" ||
        x === "fired" ||
        e !== k ||
        I == null ||
        !t.equals(I) ||
        X("scheduler_error", { generation: e, lid: t });
    }
    function X(e, t) {
      if (!(t != null && z()) && !G()) {
        ((x = "fired"),
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WAWebCoreActionsODS").logCallVoipBootInitFireAttempt(e);
            },
          ));
        var n = Y(e);
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
          w();
        } catch (e) {
          O(e);
        }
        q(t, n);
      }
    }
    function Y(e) {
      var t = J();
      return t == null ? { reason: e } : { reason: e, waitMs: t };
    }
    function J() {
      var e = D;
      if (e == null) return null;
      var t = Z();
      return t == null ? null : Math.round(Math.max(0, t - e));
    }
    function Z() {
      try {
        return self.performance.now();
      } catch (e) {
        return (O(e), null);
      }
    }
    function ee(e, t) {
      if (j(e, t)) {
        var n = o("WAWebABProps").getABPropConfigValue(
          "web_voip_deferred_boot_init_max_delay_ms",
        );
        if (!Number.isFinite(n))
          throw r("err")("invalid deferred boot max delay");
        if (((x = "armed"), n <= 0)) {
          (o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              (o("WAWebCoreActionsODS").logCallVoipBootInitArmed("lazy"),
                o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] armed mode=lazy",
                    ])),
                ));
            },
          ),
            te(e, t));
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
          (T = self.setTimeout(
            function () {
              ((T = null), K("deadline", e, t));
            },
            Math.min(n, E),
          )));
      }
    }
    function te(e, t) {
      try {
        $ = o("WAWebVoipBootHiddenPrewarm").watchForHiddenVoipPrewarm(
          function () {
            K("hidden_prewarm", e, t);
          },
        );
      } catch (e) {
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            o("WALogger")
              .WARN(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] hidden_prewarm watch_failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          },
        );
      }
    }
    function ne(e, t) {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = "complete";
          try {
            yield o("WAPromiseTimeout").promiseTimeout(
              o(
                "WAWebEventsWaitForOfflineDeliveryEnd",
              ).waitForOfflineDeliveryEnd({ ignoreInit: !0 }),
              L,
            );
          } catch (r) {
            if (!j(e, t)) return;
            if (!(r instanceof o("WACustomError").TimeoutError)) {
              (O(r), Q(e, t));
              return;
            }
            n = "timeout";
          }
          if (j(e, t)) {
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] offline_delivery_wait_done outcome=",
                      "",
                    ])),
                  n,
                );
              },
            );
            try {
              ee(e, t);
            } catch (n) {
              (O(n), Q(e, t));
            }
          }
        })),
        re.apply(this, arguments)
      );
    }
    ((l.scheduleDeferredVoipBootInit = P),
      (l.resetVoipBootInitSchedulerForTesting = N));
  },
  98,
);
