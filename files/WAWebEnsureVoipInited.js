__d(
  "WAWebEnsureVoipInited",
  [
    "Promise",
    "WAWebVoipBackendLoadable",
    "WAWebVoipInitEventEmitter",
    "WAWebVoipInitReloadRecovery",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (e) {
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
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebVoipBackendLoadable").requireVoipJsBackend(),
            n = t.WAWebVoipInit;
          if (
            (yield n.initWAWebVoip(e),
            !o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited() &&
              (o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.getDidVoipInitError() &&
                (yield n.retryWAWebVoipInitAfterFailure()),
              !o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.getIsVoipInited()))
          )
            throw r("err")("VoIP initialization did not complete");
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if ((yield e) !== "cancelled") throw new s();
          yield t;
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          if (
            (t === void 0 && (t = "call"),
            !o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited())
          ) {
            var a =
              t === "call"
                ? o(
                    "WAWebVoipInitReloadRecovery",
                  ).beginOutgoingVoipInitReloadRecovery(r)
                : null;
            try {
              var i = u(t);
              if (a == null) {
                yield i;
                return;
              }
              yield (e || (e = n("Promise"))).race([i, d(a.result, i)]);
            } finally {
              a == null || a.finish();
            }
          }
        })),
        _.apply(this, arguments)
      );
    }
    ((l.VoipInitUnavailableError = s), (l.ensureVoipInitialized = p));
  },
  98,
);
