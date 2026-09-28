__d(
  "WAWebVoipInitReloadRecovery",
  [
    "Promise",
    "WALogger",
    "WAResolvable",
    "WAWebNoop",
    "WAWebVoipCallBlockedModals",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipPthreadHardening",
    "WAWebVoipQplHelpers",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 3e4,
      d = 1e3,
      m = (function () {
        function e(e) {
          ((this.$1 = e),
            (this.$2 = !1),
            (this.$3 = !1),
            (this.$4 = 0),
            (this.$5 = 0),
            (this.$6 = new Map()),
            (this.$7 = null),
            (this.$8 = new Map()));
        }
        var t = e.prototype;
        return (
          (t.$9 = function () {
            this.$7 != null &&
              (this.$1.cancelTimeout(this.$7), (this.$7 = null));
          }),
          (t.$10 = function (t) {
            var e = Array.from(this.$8.values());
            this.$8.clear();
            for (var n of e) n.completion.resolve(t);
          }),
          (t.$11 = function () {
            var e = null;
            for (var t of this.$8.values())
              (e == null || t.deadlineMs < e.deadlineMs) && (e = t);
            return e;
          }),
          (t.$12 = function (t) {
            var e,
              n = this.$1.getNowMs(),
              r = this.$6.values().next().value;
            return {
              details: S(r),
              loadAgeMs: r == null ? 0 : n - r.startedAtMs,
              loadIndex: (e = r == null ? void 0 : r.index) != null ? e : 0,
              pendingLoads: this.$6.size,
              source: t.source,
              urgencyAgeMs: n - t.startedAtMs,
              waitingCalls: this.$8.size,
            };
          }),
          (t.$13 = function (t) {
            if (!this.$3) {
              var e = this.$12(t);
              ((this.$3 = !0),
                this.$9(),
                this.$6.clear(),
                this.$10("unavailable"),
                this.$1.onUnavailable(e));
            }
          }),
          (t.$14 = function () {
            return (
              this.$6.size > 0 &&
              !this.$1.getIsVoipInited() &&
              !this.$1.getDidVoipInitError() &&
              this.$1.getIsOnline()
            );
          }),
          (t.$15 = function () {
            this.$7 = null;
            var e = this.$11(),
              t = this.$1.getNowMs();
            if (e == null || e.deadlineMs > t) {
              this.$16();
              return;
            }
            if (this.$14()) {
              this.$13(e);
              return;
            }
            this.$16(d);
          }),
          (t.$16 = function (t) {
            var e = this;
            if (
              (t === void 0 && (t = 0),
              this.$9(),
              !(this.$3 || this.$6.size === 0))
            ) {
              var n = this.$11();
              n != null &&
                (this.$7 = this.$1.scheduleTimeout(
                  function () {
                    return e.$15();
                  },
                  Math.max(t, n.deadlineMs - this.$1.getNowMs()),
                ));
            }
          }),
          (t.$17 = function (t, r) {
            if (this.$3)
              return (
                this.$1.showUnavailableModal(),
                (u || (u = n("Promise"))).resolve(
                  this.$2 ? "artifact_unavailable" : "unavailable",
                )
              );
            var e = this.$8.get(t);
            if (e != null) return e.completion.promise;
            var a = new (o("WAResolvable").Resolvable)(),
              i = this.$1.getNowMs();
            return (
              this.$8.set(t, {
                completion: a,
                deadlineMs: i + c,
                source: r,
                startedAtMs: i,
              }),
              this.$16(),
              a.promise
            );
          }),
          (t.$18 = function (t) {
            var e = this.$8.get(t);
            e != null &&
              (this.$8.delete(t),
              e.completion.resolve("cancelled"),
              this.$16());
          }),
          (t.observeWasmLoaderPromise = function (t, n) {
            var e = this;
            if (this.$3) return t;
            if (!this.$6.has(t)) {
              this.$6.set(t, {
                describe: n,
                index: ++this.$5,
                startedAtMs: this.$1.getNowMs(),
              });
              var r = function () {
                (e.$6.delete(t), e.$16());
              };
              t.then(r, r);
            }
            return (this.$16(), t);
          }),
          (t.beginOutgoing = function (t) {
            var e = this;
            if ((t == null ? void 0 : t.aborted) === !0)
              return {
                finish: r("WAWebNoop"),
                result: (u || (u = n("Promise"))).resolve("cancelled"),
              };
            var o = "outgoing:" + ++this.$4,
              a = !1,
              i = function () {
                a ||
                  ((a = !0),
                  t == null || t.removeEventListener("abort", i),
                  e.$18(o));
              },
              l = this.$17(o, "outgoing");
            return (
              t == null || t.addEventListener("abort", i, { once: !0 }),
              { finish: i, result: l }
            );
          }),
          (t.finishIncoming = function (t) {
            this.$18("incoming:" + t);
          }),
          (t.handleVoipInitSuccess = function () {
            if (this.$2) ((this.$2 = !1), (this.$3 = !1));
            else if (this.$3) return;
            (this.$9(), this.$6.clear(), this.$10("cancelled"));
          }),
          (t.isUnavailable = function () {
            return this.$3;
          }),
          (t.markArtifactUnavailable = function () {
            if (!this.$3) {
              ((this.$2 = !0), (this.$3 = !0), this.$9(), this.$6.clear());
              var e = this.$11();
              (this.$10("artifact_unavailable"),
                this.$1.onArtifactUnavailable(e == null ? void 0 : e.source));
            }
          }),
          (t.startIncoming = function (t) {
            return this.$17("incoming:" + t, "incoming");
          }),
          e
        );
      })();
    function p(e) {
      return new m(e);
    }
    var _ = p({
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
        getIsVoipInited: function () {
          return o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getIsVoipInited();
        },
        getNowMs: function () {
          return Date.now();
        },
        onArtifactUnavailable: function (n) {
          var t = n != null ? n : "prewarm";
          (o("WAWebVoipQplHelpers").endVoipInitQplFail(
            "wasm_artifact_terminal",
            { string: { trigger_source: t } },
          ),
            o("WALogger")
              .LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: WASM artifact unresolvable on this page; user reload required source=",
                    "",
                  ])),
                t,
              )
              .sendLogs("voip-wasm-artifact-unavailable", {
                sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
              }),
            n != null &&
              o("WAWebVoipCallBlockedModals").showVoipInitUnavailableModal());
        },
        onUnavailable: function (t) {
          var e = R(t),
            n = e.annotations,
            r = e.fields;
          (o("WAWebVoipQplHelpers").endVoipInitQplFail(
            "wasm_load_timeout_user_reload_required",
            n,
          ),
            o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
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
      f = !1;
    function g() {
      f ||
        ((f = !0),
        o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.on(
          "voipInitSuccess",
          function () {
            return _.handleVoipInitSuccess();
          },
        ));
    }
    function h() {
      (g(), _.markArtifactUnavailable());
    }
    function y(e, t) {
      return (g(), _.observeWasmLoaderPromise(e, t));
    }
    function C(e) {
      return (g(), _.beginOutgoing(e));
    }
    function b(e) {
      return (g(), _.startIncoming(e));
    }
    function v(e) {
      _.finishIncoming(e);
    }
    function S(e) {
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
    function R(e) {
      try {
        var t = document.visibilityState;
        return { annotations: k(e, t), fields: " " + L(e, t) };
      } catch (t) {
        return {
          annotations: { string: { trigger_source: e.source } },
          fields: "",
        };
      }
    }
    function L(e, t) {
      var n = e.details,
        r = [
          "level=" +
            o("WAWebVoipPthreadHardening").getVoipPthreadHardeningLevel(),
        ];
      return (
        n != null &&
          r.push(
            "pin=" + E(n.pinWorkerGlue),
            "unpinned=" + E(n.isPinnedGlueUnpinned),
            "loader=" + E(n.isLoaderModuleLoaded),
            "wasm=" + n.wasmFetchState,
          ),
        r.push(
          "wait_ms=" + e.urgencyAgeMs,
          "load_ms=" + e.loadAgeMs,
          "load_idx=" + e.loadIndex,
          "loads=" + e.pendingLoads,
          "calls=" + e.waitingCalls,
          "vis=" + t,
        ),
        n != null &&
          r.push(
            "vis_start=" + n.startVisibility,
            "ca=" + E(n.isContentAddressed),
            "webkit=" + E(n.isWebKit),
          ),
        r.push("age_s=" + Math.round(self.performance.now() / 1e3)),
        r.join(" ")
      );
    }
    function E(e) {
      return e ? "1" : "0";
    }
    function k(e, t) {
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
          urgency_age_ms: e.urgencyAgeMs,
          waiting_calls: e.waitingCalls,
          wasm_load_age_ms: e.loadAgeMs,
          wasm_load_index: e.loadIndex,
        },
        string: {
          load_start_visibility: n == null ? void 0 : n.startVisibility,
          page_visibility: t,
          trigger_source: e.source,
          wasm_fetch_state: n == null ? void 0 : n.wasmFetchState,
        },
      };
    }
    ((l.createVoipInitReloadRecovery = p),
      (l.markVoipWasmArtifactUnavailable = h),
      (l.observeVoipWasmLoaderPromise = y),
      (l.beginOutgoingVoipInitReloadRecovery = C),
      (l.startIncomingVoipInitReloadRecovery = b),
      (l.finishIncomingVoipInitReloadRecovery = v));
  },
  98,
);
