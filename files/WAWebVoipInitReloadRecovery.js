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
      u = 3e4,
      c = 1e3,
      d = (function () {
        function e(e) {
          ((this.$1 = e),
            (this.$2 = !1),
            (this.$3 = 0),
            (this.$4 = new Set()),
            (this.$5 = null),
            (this.$6 = new Map()));
        }
        var t = e.prototype;
        return (
          (t.$7 = function () {
            this.$5 != null &&
              (this.$1.cancelTimeout(this.$5), (this.$5 = null));
          }),
          (t.$8 = function (t) {
            var e = Array.from(this.$6.values());
            this.$6.clear();
            for (var n of e) n.completion.resolve(t);
          }),
          (t.$9 = function () {
            var e = null;
            for (var t of this.$6.values())
              (e == null || t.deadlineMs < e.deadlineMs) && (e = t);
            return e;
          }),
          (t.$10 = function (t) {
            this.$2 ||
              ((this.$2 = !0),
              this.$7(),
              this.$4.clear(),
              this.$8("unavailable"),
              this.$1.onUnavailable(t));
          }),
          (t.$11 = function () {
            return (
              this.$4.size > 0 &&
              !this.$1.getIsVoipInited() &&
              !this.$1.getDidVoipInitError() &&
              this.$1.getIsOnline()
            );
          }),
          (t.$12 = function () {
            this.$5 = null;
            var e = this.$9(),
              t = this.$1.getNowMs();
            if (e == null || e.deadlineMs > t) {
              this.$13();
              return;
            }
            if (this.$11()) {
              this.$10(e.source);
              return;
            }
            this.$13(c);
          }),
          (t.$13 = function (t) {
            var e = this;
            if (
              (t === void 0 && (t = 0),
              this.$7(),
              !(this.$2 || this.$4.size === 0))
            ) {
              var n = this.$9();
              n != null &&
                (this.$5 = this.$1.scheduleTimeout(
                  function () {
                    return e.$12();
                  },
                  Math.max(t, n.deadlineMs - this.$1.getNowMs()),
                ));
            }
          }),
          (t.$14 = function (t, r) {
            if (this.$2)
              return (
                this.$1.showUnavailableModal(),
                (s || (s = n("Promise"))).resolve("unavailable")
              );
            var e = this.$6.get(t);
            if (e != null) return e.completion.promise;
            var a = new (o("WAResolvable").Resolvable)();
            return (
              this.$6.set(t, {
                completion: a,
                deadlineMs: this.$1.getNowMs() + u,
                source: r,
              }),
              this.$13(),
              a.promise
            );
          }),
          (t.$15 = function (t) {
            var e = this.$6.get(t);
            e != null &&
              (this.$6.delete(t),
              e.completion.resolve("cancelled"),
              this.$13());
          }),
          (t.observeWasmLoaderPromise = function (t) {
            var e = this;
            if (this.$2) return t;
            if (!this.$4.has(t)) {
              this.$4.add(t);
              var n = function () {
                (e.$4.delete(t), e.$13());
              };
              t.then(n, n);
            }
            return (this.$13(), t);
          }),
          (t.beginOutgoing = function (t) {
            var e = this;
            if ((t == null ? void 0 : t.aborted) === !0)
              return {
                finish: r("WAWebNoop"),
                result: (s || (s = n("Promise"))).resolve("cancelled"),
              };
            var o = "outgoing:" + ++this.$3,
              a = !1,
              i = function () {
                a ||
                  ((a = !0),
                  t == null || t.removeEventListener("abort", i),
                  e.$15(o));
              },
              l = this.$14(o, "outgoing");
            return (
              t == null || t.addEventListener("abort", i, { once: !0 }),
              { finish: i, result: l }
            );
          }),
          (t.finishIncoming = function (t) {
            this.$15("incoming:" + t);
          }),
          (t.handleVoipInitSuccess = function () {
            this.$2 || (this.$7(), this.$4.clear(), this.$8("cancelled"));
          }),
          (t.isUnavailable = function () {
            return this.$2;
          }),
          (t.startIncoming = function (t) {
            return this.$14("incoming:" + t, "incoming");
          }),
          e
        );
      })();
    function m(e) {
      return new d(e);
    }
    var p = m({
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
        onUnavailable: function (n) {
          (o("WAWebVoipQplHelpers").endVoipInitQplFail(
            "wasm_load_timeout_user_reload_required",
            { string: { trigger_source: n } },
          ),
            o("WALogger")
              .LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: WASM init stuck; user reload required source=",
                    "",
                  ])),
                n,
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
      _ = !1;
    function f() {
      _ ||
        ((_ = !0),
        o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.on(
          "voipInitSuccess",
          function () {
            return p.handleVoipInitSuccess();
          },
        ));
    }
    function g(e) {
      return (f(), p.observeWasmLoaderPromise(e));
    }
    function h(e) {
      return (f(), p.beginOutgoing(e));
    }
    function y(e) {
      return (f(), p.startIncoming(e));
    }
    function C(e) {
      p.finishIncoming(e);
    }
    ((l.createVoipInitReloadRecovery = m),
      (l.observeVoipWasmLoaderPromise = g),
      (l.beginOutgoingVoipInitReloadRecovery = h),
      (l.startIncomingVoipInitReloadRecovery = y),
      (l.finishIncomingVoipInitReloadRecovery = C));
  },
  98,
);
