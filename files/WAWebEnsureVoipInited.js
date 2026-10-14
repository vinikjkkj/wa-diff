__d(
  "WAWebEnsureVoipInited",
  [
    "Promise",
    "WALogger",
    "WAWebCoreActionsODS",
    "WAWebVoipBackendLoadable",
    "WAWebVoipCallBlockedModals",
    "WAWebVoipDeferredBootLogging",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipInitReloadRecovery",
    "asyncToGeneratorRuntime",
    "err",
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
      f = (function (e) {
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
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
            function () {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [deferred-boot] intent init_start trigger=",
                    "",
                  ])),
                t,
              );
            },
          );
          var n = self.performance.now(),
            a = yield o("WAWebVoipBackendLoadable").requireVoipJsBackend(),
            i = a.WAWebVoipInit;
          if (
            (o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] intent backend_ready trigger=",
                      "",
                    ])),
                  t,
                );
              },
            ),
            yield i.initWAWebVoip(
              t,
              void 0,
              void 0,
              Math.round(self.performance.now() - n),
            ),
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited())
          )
            return !1;
          var l = !1;
          if (
            (o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getDidVoipInitError() &&
              ((l = !0),
              o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
                function () {
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] intent retry_requested trigger=",
                        "",
                      ])),
                    t,
                  );
                },
              ),
              yield i.retryWAWebVoipInitAfterFailure()),
            !o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited())
          )
            throw r("err")("VoIP initialization did not complete");
          return l;
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = (function (e) {
            if (e === "cancelled") return null;
            if (e === "artifact_unavailable") return "artifact_unavailable";
            if (e === "unavailable") return "stuck";
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          })(yield e);
          if (n != null) throw new f(n);
          return yield t;
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
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] intent blocked trigger=",
                        " reason=stack_unresponsive",
                      ])),
                    e,
                  );
                },
              ),
              o("WAWebCoreActionsODS").logCallInitBlockedStackUnresponsive(),
              o("WAWebVoipCallBlockedModals").showVoipInitUnavailableModal(),
              new f("stack_unresponsive")
            );
          if (
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited()
          ) {
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [deferred-boot] intent init_skip trigger=",
                      " reason=already_inited",
                    ])),
                  e,
                );
              },
            );
            return;
          }
          var r =
            e === "call"
              ? o(
                  "WAWebVoipInitReloadRecovery",
                ).beginOutgoingVoipInitReloadRecovery(t)
              : null;
          try {
            var a = g(e),
              i =
                r == null
                  ? yield a
                  : yield (_ || (_ = n("Promise"))).race([a, y(r.result, a)]);
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
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
            var l = t instanceof f ? "reload_required" : "failed";
            throw (
              o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
                function () {
                  o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] intent init_failed trigger=",
                        " outcome=",
                        "",
                      ])),
                    e,
                    l,
                  );
                },
              ),
              t
            );
          } finally {
            r == null || r.finish();
          }
        })),
        v.apply(this, arguments)
      );
    }
    ((l.VoipInitUnavailableError = f), (l.ensureVoipInitialized = b));
  },
  98,
);
