__d(
  "WAWebVoipInitReloadRecovery",
  [
    "Promise",
    "WALogger",
    "WAResolvable",
    "WAWebNoop",
    "WAWebVoipCallBlockedModals",
    "WAWebVoipInitEventEmitter",
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
            (this.$5 = new Set()),
            (this.$6 = null),
            (this.$7 = new Map()));
        }
        var t = e.prototype;
        return (
          (t.$8 = function () {
            this.$6 != null &&
              (this.$1.cancelTimeout(this.$6), (this.$6 = null));
          }),
          (t.$9 = function (t) {
            var e = Array.from(this.$7.values());
            this.$7.clear();
            for (var n of e) n.completion.resolve(t);
          }),
          (t.$10 = function () {
            var e = null;
            for (var t of this.$7.values())
              (e == null || t.deadlineMs < e.deadlineMs) && (e = t);
            return e;
          }),
          (t.$11 = function (t) {
            this.$3 ||
              ((this.$3 = !0),
              this.$8(),
              this.$5.clear(),
              this.$9("unavailable"),
              this.$1.onUnavailable(t));
          }),
          (t.$12 = function () {
            return (
              this.$5.size > 0 &&
              !this.$1.getIsVoipInited() &&
              !this.$1.getDidVoipInitError() &&
              this.$1.getIsOnline()
            );
          }),
          (t.$13 = function () {
            this.$6 = null;
            var e = this.$10(),
              t = this.$1.getNowMs();
            if (e == null || e.deadlineMs > t) {
              this.$14();
              return;
            }
            if (this.$12()) {
              this.$11(e.source);
              return;
            }
            this.$14(d);
          }),
          (t.$14 = function (t) {
            var e = this;
            if (
              (t === void 0 && (t = 0),
              this.$8(),
              !(this.$3 || this.$5.size === 0))
            ) {
              var n = this.$10();
              n != null &&
                (this.$6 = this.$1.scheduleTimeout(
                  function () {
                    return e.$13();
                  },
                  Math.max(t, n.deadlineMs - this.$1.getNowMs()),
                ));
            }
          }),
          (t.$15 = function (t, r) {
            if (this.$3)
              return (
                this.$1.showUnavailableModal(),
                (u || (u = n("Promise"))).resolve(
                  this.$2 ? "artifact_unavailable" : "unavailable",
                )
              );
            var e = this.$7.get(t);
            if (e != null) return e.completion.promise;
            var a = new (o("WAResolvable").Resolvable)();
            return (
              this.$7.set(t, {
                completion: a,
                deadlineMs: this.$1.getNowMs() + c,
                source: r,
              }),
              this.$14(),
              a.promise
            );
          }),
          (t.$16 = function (t) {
            var e = this.$7.get(t);
            e != null &&
              (this.$7.delete(t),
              e.completion.resolve("cancelled"),
              this.$14());
          }),
          (t.observeWasmLoaderPromise = function (t) {
            var e = this;
            if (this.$3) return t;
            if (!this.$5.has(t)) {
              this.$5.add(t);
              var n = function () {
                (e.$5.delete(t), e.$14());
              };
              t.then(n, n);
            }
            return (this.$14(), t);
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
                  e.$16(o));
              },
              l = this.$15(o, "outgoing");
            return (
              t == null || t.addEventListener("abort", i, { once: !0 }),
              { finish: i, result: l }
            );
          }),
          (t.finishIncoming = function (t) {
            this.$16("incoming:" + t);
          }),
          (t.handleVoipInitSuccess = function () {
            if (this.$2) ((this.$2 = !1), (this.$3 = !1));
            else if (this.$3) return;
            (this.$8(), this.$5.clear(), this.$9("cancelled"));
          }),
          (t.isUnavailable = function () {
            return this.$3;
          }),
          (t.markArtifactUnavailable = function () {
            if (!this.$3) {
              ((this.$2 = !0), (this.$3 = !0), this.$8(), this.$5.clear());
              var e = this.$10();
              (this.$9("artifact_unavailable"),
                this.$1.onArtifactUnavailable(e == null ? void 0 : e.source));
            }
          }),
          (t.startIncoming = function (t) {
            return this.$15("incoming:" + t, "incoming");
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
          (o("WAWebVoipQplHelpers").endVoipInitQplFail(
            "wasm_load_timeout_user_reload_required",
            { string: { trigger_source: t } },
          ),
            o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: WASM init stuck; user reload required source=",
                    "",
                  ])),
                t,
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
    function y(e) {
      return (g(), _.observeWasmLoaderPromise(e));
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
    ((l.createVoipInitReloadRecovery = p),
      (l.markVoipWasmArtifactUnavailable = h),
      (l.observeVoipWasmLoaderPromise = y),
      (l.beginOutgoingVoipInitReloadRecovery = C),
      (l.startIncomingVoipInitReloadRecovery = b),
      (l.finishIncomingVoipInitReloadRecovery = v));
  },
  98,
);
