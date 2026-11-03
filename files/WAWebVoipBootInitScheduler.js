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
      if ((t === void 0 && (t = !1), !V())) {
        var n;
        try {
          n = o("WAWebVoipBootInitDecision").isDeferredVoipBootInitEnabled();
        } catch (e) {
          (F(e), q());
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
            B());
          return;
        }
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          o("WAWebVoipInitABPropExposure").logVoipInitABPropExposures,
        );
        try {
          var r = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(!1);
          if (r == null) {
            (U(),
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
          if (x !== "idle" && N(I, r)) {
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
          (M(),
            k++,
            (I = r),
            (x = "waiting_offline"),
            (D = Y()),
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
          ee(a, r).catch(function (e) {
            (F(e), j(a, r));
          });
        } catch (e) {
          (F(e), q());
        }
      }
    }
    function N(e, t) {
      return e == null || t == null ? e == null && t == null : e.equals(t);
    }
    function M() {
      (w(), A());
    }
    function w() {
      T != null && (self.clearTimeout(T), (T = null));
    }
    function A() {
      var e = $;
      (($ = null), e == null || e());
    }
    function F(e) {
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
    async function O(e, t) {
      var n = e == null ? "fail_open" : "deferred";
      o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [deferred-boot] backend_load_start source=",
                "",
              ])),
            n,
          );
        },
      );
      var r = await o("WAWebVoipBackendLoadable").requireVoipJsBackend(),
        a = r.WAWebVoipInit;
      if (e != null && !G(e.generation, e.lid)) {
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [deferred-boot] backend_ready ignored reason=stale_schedule",
                ])),
            );
          },
        );
        return;
      }
      if (!(e != null && H()) && !V()) {
        var i = a.VoipInitEventEmitter.getIsVoipInited();
        (o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [deferred-boot] init_dispatch trigger=prewarm source=",
                  " already_inited=",
                  "",
                ])),
              n,
              i,
            );
          },
        ),
          await a.initWAWebVoip("prewarm", t),
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
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
    }
    function B(e, t) {
      (e === void 0 && (e = null),
        O(e, t).catch(function (t) {
          (W(e), F(t));
        }));
    }
    function W(e) {
      if (!(e == null || e.generation !== k || I == null || !e.lid.equals(I)))
        try {
          U();
        } catch (e) {
          F(e);
        }
    }
    function q() {
      var e = Q("scheduler_error");
      try {
        U();
      } catch (e) {
        F(e);
      }
      (o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          o("WAWebCoreActionsODS").logCallVoipBootInitFireAttempt(
            "scheduler_error",
          );
        },
      ),
        B(null, e));
    }
    function U() {
      try {
        M();
      } finally {
        (k++, (I = null), (D = null), (x = "idle"));
      }
    }
    function V() {
      var e = !0;
      try {
        e = o("WAWebVoipGatingUtils").isVoipDownloadEnabled();
      } catch (e) {
        F(e);
      }
      if (e) return !1;
      o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [deferred-boot] schedule_abandon reason=download_disabled state=",
                "",
              ])),
            x,
          );
        },
      );
      try {
        U();
      } catch (e) {
        F(e);
      }
      return !0;
    }
    function H() {
      var e = !0;
      try {
        e = o("WAWebVoipBootInitDecision").isDeferredVoipBootInitEnabled();
      } catch (e) {
        F(e);
      }
      if (e) return !1;
      o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
        function () {
          o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [deferred-boot] schedule_abandon reason=deferred_gate_disabled state=",
                "",
              ])),
            x,
          );
        },
      );
      try {
        U();
      } catch (e) {
        F(e);
      }
      return !0;
    }
    function G(e, t) {
      if (e !== k || I == null || !t.equals(I)) return !1;
      var n = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(!1);
      return n == null || !t.equals(n)
        ? (o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] schedule_abandon reason=identity_changed state=",
                    "",
                  ])),
                x,
              );
            },
          ),
          U(),
          !1)
        : !0;
    }
    function z(e, t, n) {
      x === "idle" ||
        x === "fired" ||
        !G(t, n) ||
        K(e, { generation: t, lid: n });
    }
    function j(e, t) {
      x === "idle" ||
        x === "fired" ||
        e !== k ||
        I == null ||
        !t.equals(I) ||
        K("scheduler_error", { generation: e, lid: t });
    }
    function K(e, t) {
      if (!(t != null && H()) && !V()) {
        ((x = "fired"),
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WAWebCoreActionsODS").logCallVoipBootInitFireAttempt(e);
            },
          ));
        var n = Q(e);
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            var t;
            o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
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
          M();
        } catch (e) {
          F(e);
        }
        B(t, n);
      }
    }
    function Q(e) {
      var t = X();
      return t == null ? { reason: e } : { reason: e, waitMs: t };
    }
    function X() {
      var e = D;
      if (e == null) return null;
      var t = Y();
      return t == null ? null : Math.round(Math.max(0, t - e));
    }
    function Y() {
      try {
        return self.performance.now();
      } catch (e) {
        return (F(e), null);
      }
    }
    function J(e, t) {
      if (G(e, t)) {
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
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] armed mode=lazy",
                    ])),
                ));
            },
          ),
            Z(e, t));
          return;
        }
        (o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            (o("WAWebCoreActionsODS").logCallVoipBootInitArmed("deadline"),
              o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] armed mode=deadline max_delay_ms=",
                    "",
                  ])),
                n,
              ));
          },
        ),
          (T = self.setTimeout(
            function () {
              ((T = null), z("deadline", e, t));
            },
            Math.min(n, E),
          )));
      }
    }
    function Z(e, t) {
      try {
        $ = o("WAWebVoipBootHiddenPrewarm").watchForHiddenVoipPrewarm(
          function () {
            z("hidden_prewarm", e, t);
          },
        );
      } catch (e) {
        o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
          function () {
            o("WALogger")
              .WARN(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] hidden_prewarm watch_failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          },
        );
      }
    }
    async function ee(e, t) {
      var n = "complete";
      try {
        await o("WAPromiseTimeout").promiseTimeout(
          o("WAWebEventsWaitForOfflineDeliveryEnd").waitForOfflineDeliveryEnd({
            ignoreInit: !0,
          }),
          L,
        );
      } catch (r) {
        if (!G(e, t)) return;
        if (!(r instanceof o("WACustomError").TimeoutError)) {
          (F(r), j(e, t));
          return;
        }
        n = "timeout";
      }
      if (G(e, t)) {
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
          J(e, t);
        } catch (n) {
          (F(n), j(e, t));
        }
      }
    }
    l.scheduleDeferredVoipBootInit = P;
  },
  98,
);
