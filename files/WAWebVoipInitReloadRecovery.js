__d(
  "WAWebVoipInitReloadRecovery",
  [
    "Promise",
    "WALogger",
    "WAResolvable",
    "WAWebCoreActionsODS",
    "WAWebNoop",
    "WAWebVoipCallBlockedModals",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipPthreadHardening",
    "WAWebVoipQplHelpers",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = 3e4,
      m = 9e4,
      p = 6e4,
      _ = 1e3,
      f = (function () {
        function e(e) {
          ((this.$1 = null),
            (this.$2 = e),
            (this.$3 = !1),
            (this.$4 = !1),
            (this.$5 = 0),
            (this.$6 = 0),
            (this.$7 = new Map()),
            (this.$8 = null),
            (this.$9 = new Map()));
        }
        var t = e.prototype;
        return (
          (t.$10 = function () {
            this.$8 != null &&
              (this.$2.cancelTimeout(this.$8), (this.$8 = null));
          }),
          (t.$11 = function (t) {
            var e = Array.from(this.$9.values());
            this.$9.clear();
            for (var n of e) n.completion.resolve(t);
          }),
          (t.$12 = function (t) {
            t === void 0 &&
              (t = function () {
                return !0;
              });
            var e = null;
            for (var n of this.$9.values())
              t(n) && (e == null || n.deadlineMs < e.deadlineMs) && (e = n);
            return e;
          }),
          (t.$13 = function (t) {
            var e,
              n = this.$2.getNowMs(),
              r = this.$7.values().next().value;
            return {
              details: k(r),
              loadAgeMs: r == null ? 0 : n - r.startedAtMs,
              loadIndex: (e = r == null ? void 0 : r.index) != null ? e : 0,
              pendingLoads: this.$7.size,
              ringableCalls: Array.from(this.$9.values()).filter(function (e) {
                var t = e.canRing;
                return t;
              }).length,
              source: t.source,
              urgencyAgeMs: n - t.startedAtMs,
              waitingCalls: this.$9.size,
            };
          }),
          (t.$14 = function (t) {
            var e,
              n = this.$2.getNowMs();
            return {
              source: t.source,
              urgencyAgeMs: n - t.startedAtMs,
              waitingCalls: this.$9.size,
              webStackAgeMs:
                n - ((e = this.$2.getWebStackCreatedAtMs()) != null ? e : n),
            };
          }),
          (t.$15 = function (t) {
            if (!this.$4)
              e: {
                if (t.rule === "wasm") {
                  var e = this.$13(t.urgency);
                  (this.$16(), this.$2.onUnavailable(e));
                  break e;
                }
                if (t.rule === "pre_wasm") {
                  var n = this.$14(t.urgency);
                  (this.$16(), this.$2.onPreWasmUnavailable(n));
                  break e;
                }
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    t.rule,
                );
              }
          }),
          (t.$16 = function () {
            ((this.$4 = !0),
              this.$10(),
              this.$7.clear(),
              this.$11("unavailable"));
          }),
          (t.$17 = function (t) {
            return this.$2.getIsVoipInited() || !this.$2.getIsOnline()
              ? !1
              : t.rule === "wasm"
                ? !this.$2.getDidVoipInitError() ||
                  (this.$2.getIsVoipInitAttemptInFlight() &&
                    !this.$2.isExtendedStuckLatchDisabled())
                : t.rule === "pre_wasm"
                  ? this.$2.getIsPrewarmVoipInitAttemptInFlight()
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          t.rule,
                      );
                    })();
          }),
          (t.$18 = function () {
            return this.$7.size > 0 ? this.$19() : this.$20();
          }),
          (t.$19 = function () {
            var e = this.$12();
            if (e == null) return null;
            var t = this.$7.values().next().value;
            return {
              deadlineMs:
                t == null
                  ? e.deadlineMs
                  : Math.max(e.deadlineMs, t.startedAtMs + m),
              rule: "wasm",
              urgency: e,
            };
          }),
          (t.$20 = function () {
            if (this.$2.isExtendedStuckLatchDisabled()) return null;
            var e = this.$6 === 0 ? this.$2.getWebStackCreatedAtMs() : null;
            if (e == null) return null;
            var t = this.$12(function (e) {
              var t = e.canRing,
                n = e.startedAfterWebStack;
              return t && n;
            });
            return t == null
              ? null
              : {
                  deadlineMs: Math.max(t.deadlineMs, e + p),
                  rule: "pre_wasm",
                  urgency: t,
                };
          }),
          (t.$21 = function () {
            this.$8 = null;
            var e = this.$18();
            if (e != null) {
              if (e.deadlineMs > this.$2.getNowMs()) {
                this.$22();
                return;
              }
              if (this.$17(e)) {
                this.$15(e);
                return;
              }
              this.$22(_);
            }
          }),
          (t.$22 = function (t) {
            var e = this;
            if ((t === void 0 && (t = 0), this.$10(), !this.$4)) {
              var n = this.$18();
              n != null &&
                (this.$8 = this.$2.scheduleTimeout(
                  function () {
                    return e.$21();
                  },
                  Math.max(t, n.deadlineMs - this.$2.getNowMs()),
                ));
            }
          }),
          (t.$23 = function (t, r, a) {
            if (this.$4)
              return (
                this.$2.showUnavailableModal(),
                (c || (c = n("Promise"))).resolve(
                  this.$3 ? "artifact_unavailable" : "unavailable",
                )
              );
            var e = this.$9.get(t);
            if (e != null) return e.completion.promise;
            var i = new (o("WAResolvable").Resolvable)(),
              l = this.$2.getNowMs();
            if (
              (this.$9.set(t, {
                canRing: a,
                completion: i,
                deadlineMs: l + d,
                source: r,
                startedAfterWebStack: this.$2.getWebStackCreatedAtMs() != null,
                startedAtMs: l,
              }),
              a)
            ) {
              var s;
              ((s = this.$1) == null || s.resolve(), (this.$1 = null));
            }
            return (this.$22(), i.promise);
          }),
          (t.$24 = function (t) {
            var e = this.$9.get(t);
            e != null &&
              (this.$9.delete(t),
              e.completion.resolve("cancelled"),
              this.$22());
          }),
          (t.observeWasmLoaderPromise = function (t, n) {
            var e = this;
            if (this.$4) return t;
            if (!this.$7.has(t)) {
              this.$7.set(t, {
                describe: n,
                index: ++this.$6,
                startedAtMs: this.$2.getNowMs(),
              });
              var r = function () {
                (e.$7.delete(t), e.$22());
              };
              t.then(r, r);
            }
            return (this.$22(), t);
          }),
          (t.beginOutgoing = function (t) {
            var e = this;
            if ((t == null ? void 0 : t.aborted) === !0)
              return {
                finish: r("WAWebNoop"),
                result: (c || (c = n("Promise"))).resolve("cancelled"),
              };
            var o = "outgoing:" + ++this.$5,
              a = !1,
              i = function () {
                a ||
                  ((a = !0),
                  t == null || t.removeEventListener("abort", i),
                  e.$24(o));
              },
              l = this.$23(o, "outgoing", !0);
            return (
              t == null || t.addEventListener("abort", i, { once: !0 }),
              { finish: i, result: l }
            );
          }),
          (t.finishIncoming = function (t) {
            this.$24("incoming:" + t);
          }),
          (t.handleVoipInitSuccess = function () {
            if (this.$3) ((this.$3 = !1), (this.$4 = !1));
            else if (this.$4) return;
            (this.$10(), this.$7.clear(), this.$11("cancelled"));
          }),
          (t.isUnavailable = function () {
            return this.$4;
          }),
          (t.markArtifactUnavailable = function () {
            if (!this.$4) {
              ((this.$3 = !0), (this.$4 = !0), this.$10(), this.$7.clear());
              var e = this.$12();
              (this.$11("artifact_unavailable"),
                this.$2.onArtifactUnavailable(e == null ? void 0 : e.source));
            }
          }),
          (t.startIncoming = function (t, n) {
            return this.$23("incoming:" + t, "incoming", n);
          }),
          (t.whenCallWaits = function () {
            var e;
            for (var t of this.$9.values())
              if (t.canRing) return (c || (c = n("Promise"))).resolve();
            return (
              (e = this.$1) != null ||
                (this.$1 = new (o("WAResolvable").Resolvable)()),
              this.$1.promise
            );
          }),
          e
        );
      })();
    function g(e) {
      return new f(e);
    }
    var h = g({
        cancelTimeout: function (t) {
          return self.clearTimeout(t);
        },
        getDidVoipInitError: function () {
          return o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getDidVoipInitError();
        },
        getIsOnline: function () {
          return navigator.onLine;
        },
        getIsPrewarmVoipInitAttemptInFlight: function () {
          return o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getIsPrewarmVoipInitAttemptInFlight();
        },
        getIsVoipInitAttemptInFlight: function () {
          return o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getIsVoipInitAttemptInFlight();
        },
        getIsVoipInited: function () {
          return o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getIsVoipInited();
        },
        getNowMs: function () {
          return Date.now();
        },
        getWebStackCreatedAtMs: function () {
          return o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getVoipWebStackCreatedAtMs();
        },
        isExtendedStuckLatchDisabled: function () {
          return r("justknobx")._("2449");
        },
        onArtifactUnavailable: function (n) {
          (o("WAWebVoipQplHelpers").endVoipInitQplFail(
            "wasm_artifact_terminal",
            { string: { waiting_call_source: n != null ? n : "none" } },
          ),
            o("WALogger")
              .LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: WASM artifact unresolvable on this page; user reload required source=",
                    "",
                  ])),
                n != null ? n : "prewarm",
              )
              .sendLogs("voip-wasm-artifact-unavailable", {
                sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
              }),
            n != null &&
              o("WAWebVoipCallBlockedModals").showVoipInitUnavailableModal());
        },
        onPreWasmUnavailable: function (t) {
          o("WAWebCoreActionsODS").logCallVoipInitPreWasmReloadRequired();
          var e = T(t),
            n = e.annotations,
            r = e.fields;
          (o("WAWebVoipQplHelpers").endVoipInitQplFail(
            "pre_wasm_load_timeout_user_reload_required",
            n,
          ),
            o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: VoIP init stuck before the WASM load; user reload required source=",
                    "",
                    "",
                  ])),
                t.source,
                r,
              )
              .sendLogs("voip-init-stuck-pre-wasm-reload-required", {
                sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
              }),
            o("WAWebVoipCallBlockedModals").showVoipInitUnavailableModal());
        },
        onUnavailable: function (t) {
          var e = I(t),
            n = e.annotations,
            r = e.fields;
          (o("WAWebVoipQplHelpers").endVoipInitQplFail(
            "wasm_load_timeout_user_reload_required",
            n,
          ),
            o("WALogger")
              .LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: WASM init stuck; user reload required source=",
                    "",
                    "",
                  ])),
                t.source,
                r,
              )
              .sendLogs("voip-init-stuck-reload-required", {
                sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
              }),
            o("WAWebVoipCallBlockedModals").showVoipInitUnavailableModal());
        },
        scheduleTimeout: function (t, n) {
          return self.setTimeout(t, n);
        },
        showUnavailableModal: o("WAWebVoipCallBlockedModals")
          .showVoipInitUnavailableModal,
      }),
      y = !1;
    function C() {
      y ||
        ((y = !0),
        o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.on(
          "voipInitSuccess",
          function () {
            return h.handleVoipInitSuccess();
          },
        ));
    }
    function b() {
      (C(), h.markArtifactUnavailable());
    }
    function v(e, t) {
      return (C(), h.observeWasmLoaderPromise(e, t));
    }
    function S(e) {
      return (C(), h.beginOutgoing(e));
    }
    function R(e, t) {
      return (C(), h.startIncoming(e, t));
    }
    function L(e) {
      h.finishIncoming(e);
    }
    function E() {
      return h.whenCallWaits();
    }
    function k(e) {
      try {
        var t;
        return (t = e == null || e.describe == null ? void 0 : e.describe()) !=
          null
          ? t
          : null;
      } catch (e) {
        return null;
      }
    }
    function I(e) {
      try {
        var t = document.visibilityState;
        return { annotations: $(e, t), fields: " " + D(e, t) };
      } catch (t) {
        return {
          annotations: { string: { waiting_call_source: e.source } },
          fields: "",
        };
      }
    }
    function T(e) {
      try {
        var t = document.visibilityState;
        return {
          annotations: {
            int: {
              urgency_age_ms: e.urgencyAgeMs,
              waiting_calls: e.waitingCalls,
              web_stack_age_ms: e.webStackAgeMs,
            },
            string: { page_visibility: t, waiting_call_source: e.source },
          },
          fields:
            " wait_ms=" +
            e.urgencyAgeMs +
            " stack_ms=" +
            e.webStackAgeMs +
            " calls=" +
            e.waitingCalls +
            " vis=" +
            t +
            " age_s=" +
            Math.round(self.performance.now() / 1e3),
        };
      } catch (t) {
        return {
          annotations: { string: { waiting_call_source: e.source } },
          fields: "",
        };
      }
    }
    function D(e, t) {
      var n = e.details,
        r = [
          "level=" +
            o("WAWebVoipPthreadHardening").getVoipPthreadHardeningLevel(),
        ];
      return (
        n != null &&
          r.push(
            "pin=" + x(n.pinWorkerGlue),
            "unpinned=" + x(n.isPinnedGlueUnpinned),
            "loader=" + x(n.isLoaderModuleLoaded),
            "wasm=" + n.wasmFetchState,
          ),
        r.push(
          "wait_ms=" + e.urgencyAgeMs,
          "load_ms=" + e.loadAgeMs,
          "load_idx=" + e.loadIndex,
          "loads=" + e.pendingLoads,
          "calls=" + e.waitingCalls,
          "ring=" + e.ringableCalls,
          "vis=" + t,
        ),
        n != null &&
          r.push(
            "vis_start=" + n.startVisibility,
            "ca=" + x(n.isContentAddressed),
            "webkit=" + x(n.isWebKit),
          ),
        r.push("age_s=" + Math.round(self.performance.now() / 1e3)),
        r.join(" ")
      );
    }
    function x(e) {
      return e ? "1" : "0";
    }
    function $(e, t) {
      var n = e.details;
      return {
        bool:
          n == null
            ? null
            : {
                loader_module_loaded: n.isLoaderModuleLoaded,
                pinned_glue_unpinned: n.isPinnedGlueUnpinned,
              },
        int: {
          pending_wasm_loads: e.pendingLoads,
          ringable_waiting_calls: e.ringableCalls,
          urgency_age_ms: e.urgencyAgeMs,
          waiting_calls: e.waitingCalls,
          wasm_load_age_ms: e.loadAgeMs,
          wasm_load_index: e.loadIndex,
        },
        string: {
          load_start_visibility: n == null ? void 0 : n.startVisibility,
          page_visibility: t,
          waiting_call_source: e.source,
          wasm_fetch_state: n == null ? void 0 : n.wasmFetchState,
        },
      };
    }
    ((l.createVoipInitReloadRecovery = g),
      (l.markVoipWasmArtifactUnavailable = b),
      (l.observeVoipWasmLoaderPromise = v),
      (l.beginOutgoingVoipInitReloadRecovery = S),
      (l.startIncomingVoipInitReloadRecovery = R),
      (l.finishIncomingVoipInitReloadRecovery = L),
      (l.whenCallWaitsOnVoipInit = E));
  },
  98,
);
