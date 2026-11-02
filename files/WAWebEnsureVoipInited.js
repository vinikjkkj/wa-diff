__d(
  "WAWebEnsureVoipInited",
  [
    "Promise",
    "WALogger",
    "WAWebCoreActionsODS",
    "WAWebPageVisibilityRecency",
    "WAWebVoipBackendLoadable",
    "WAWebVoipCallBlockedModals",
    "WAWebVoipCappedVisibleClock",
    "WAWebVoipChunkLoadFailFast",
    "WAWebVoipColdPathEarlyStart",
    "WAWebVoipDeferredBootLogging",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipInitReliabilityGates",
    "WAWebVoipInitReloadRecovery",
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
      g = 6e4,
      h = (function (e) {
        function t(t) {
          var n;
          return (
            (n =
              e.call(this, "VoIP initialization requires a page reload") ||
              this),
            (n.name = "VoipInitUnavailableError"),
            (n.reason = t),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebPageVisibilityRecency").snapshotPageVisibility();
          (e === "call" &&
            o("WAWebVoipColdPathEarlyStart").startVoipColdPathEarly("call", t),
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] intent init_start trigger=",
                      "",
                    ])),
                  e,
                );
              },
            ));
          var n = yield o("WAWebVoipBackendLoadable")
              .requireVoipJsBackendForCall()
              .catch(function (e) {
                throw T(e);
              }),
            a = n.WAWebVoipInit;
          if (
            (o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] intent backend_ready trigger=",
                      "",
                    ])),
                  e,
                );
              },
            ),
            yield a.initWAWebVoip(
              e,
              void 0,
              void 0,
              Math.round(self.performance.now() - t.atMs),
              t,
            ),
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited())
          )
            return !1;
          var i = !1;
          if (
            (o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getDidVoipInitError() &&
              ((i = !0),
              o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
                function () {
                  o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] intent retry_requested trigger=",
                        "",
                      ])),
                    e,
                  );
                },
              ),
              yield a.retryWAWebVoipInitAfterFailure()),
            !o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited())
          )
            throw r("err")("VoIP initialization did not complete");
          return i;
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = (function (e) {
            if (e === "cancelled") return null;
            if (e === "artifact_unavailable") return "artifact_unavailable";
            if (e === "unavailable") return "stuck";
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          })(yield e);
          if (n != null) throw new h(n);
          return yield t;
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            (e === void 0 && (e = "call"),
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipStackUnresponsive())
          )
            throw (
              o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
                function () {
                  o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] intent blocked trigger=",
                        " reason=stack_unresponsive",
                      ])),
                    e,
                  );
                },
              ),
              o("WAWebCoreActionsODS").logCallInitBlockedStackUnresponsive(),
              o("WAWebVoipCallBlockedModals").showVoipInitUnavailableModal(),
              new h("stack_unresponsive")
            );
          if (
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited()
          ) {
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] intent init_skip trigger=",
                      " reason=already_inited",
                    ])),
                  e,
                );
              },
            );
            return;
          }
          var n =
              e === "call"
                ? o(
                    "WAWebVoipInitReloadRecovery",
                  ).beginOutgoingVoipInitReloadRecovery(t)
                : null,
            r = null;
          try {
            r = E(n != null, t);
            var a = y(e),
              i = n == null ? yield a : yield L(a, n.result, r);
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] intent init_ready trigger=",
                      " retry_requested=",
                      "",
                    ])),
                  e,
                  i,
                );
              },
            );
          } catch (t) {
            var l = D(t),
              s = l instanceof h ? "reload_required" : "failed";
            throw (
              o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
                function () {
                  o("WALogger").LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] intent init_failed trigger=",
                        " outcome=",
                        "",
                      ])),
                    e,
                    s,
                  );
                },
              ),
              l
            );
          } finally {
            var u;
            ((u = r) == null || u.cancel(), n == null || n.finish());
          }
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t, r) {
      var o = [e, b(t, e)];
      return (
        r != null && o.push(r.promise),
        (f || (f = n("Promise"))).race(o)
      );
    }
    function E(e, t) {
      return e &&
        (t == null ? void 0 : t.aborted) !== !0 &&
        o("WAWebVoipInitReliabilityGates").isVoipInitChunkFixEnabled()
        ? k(t)
        : null;
    }
    function k(e) {
      var t = null,
        r = function () {
          var e;
          return (e = t) == null ? void 0 : e.cancel();
        },
        a = new (f || (f = n("Promise")))(function (e, n) {
          var r = function () {
            t = o("WAWebVoipCappedVisibleClock").startCappedVisibleTimer(
              g,
              function () {
                navigator.onLine === !1
                  ? r()
                  : I() &&
                    n(
                      new (o(
                        "WAWebVoipChunkLoadFailFast",
                      ).VoipChunkLoadError)(),
                    );
              },
            );
          };
          r();
        });
      return (
        e == null || e.addEventListener("abort", r, { once: !0 }),
        { cancel: r, promise: a }
      );
    }
    function I() {
      return (
        !o("WAWebVoipBackendLoadable").isVoipJsBackendRequired() ||
        o(
          "WAWebVoipInitEventEmitter",
        ).VoipInitEventEmitter.getVoipWebStackCreatedAtMs() == null
      );
    }
    function T(t) {
      return t instanceof o("WAWebVoipChunkLoadFailFast").VoipChunkLoadError ||
        navigator.onLine === !1 ||
        !o("WAWebVoipInitReliabilityGates").isVoipInitChunkFixEnabled()
        ? t
        : (o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: backend load failed online, treating it as a missing chunk",
                ])),
            )
            .catching(r("getErrorSafe")(t)),
          new (o("WAWebVoipChunkLoadFailFast").VoipChunkLoadError)());
    }
    function D(e) {
      return e instanceof o("WAWebVoipChunkLoadFailFast").VoipChunkLoadError
        ? (o("WAWebVoipInitReloadRecovery").markVoipChunkUnavailable(),
          new h("chunk_load_failed"))
        : e;
    }
    ((l.VoipInitUnavailableError = h), (l.ensureVoipInitialized = S));
  },
  98,
);
