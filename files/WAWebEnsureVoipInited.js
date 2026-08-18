__d(
  "WAWebEnsureVoipInited",
  [
    "Promise",
    "WALogger",
    "WAWebVoipBackendLoadable",
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
      _ = (function (e) {
        function t() {
          var t;
          return (
            (t =
              e.call(this, "VoIP initialization requires a page reload") ||
              this),
            (t.name = "VoipInitUnavailableError"),
            t
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
          var n = yield o("WAWebVoipBackendLoadable").requireVoipJsBackend(),
            a = n.WAWebVoipInit;
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
            yield a.initWAWebVoip(t),
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
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [deferred-boot] intent retry_requested trigger=",
                        "",
                      ])),
                    t,
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
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if ((yield e) !== "cancelled") throw new _();
          return yield t;
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            (e === void 0 && (e = "call"),
            o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited())
          ) {
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
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
            var a = f(e),
              i =
                r == null
                  ? yield a
                  : yield (p || (p = n("Promise"))).race([a, h(r.result, a)]);
            o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
              function () {
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
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
            var l = t instanceof _ ? "reload_required" : "failed";
            throw (
              o("WAWebVoipDeferredBootLogging").safelyLogVoipDeferredBootEvent(
                function () {
                  o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
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
        b.apply(this, arguments)
      );
    }
    ((l.VoipInitUnavailableError = _), (l.ensureVoipInitialized = C));
  },
  98,
);
