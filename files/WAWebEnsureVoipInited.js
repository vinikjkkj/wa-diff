__d(
  "WAWebEnsureVoipInited",
  [
    "WAWebVoipBackendLoadable",
    "WAWebVoipInitEventEmitter",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            !o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited()
          ) {
            var e = yield o("WAWebVoipBackendLoadable").requireVoipJsBackend(),
              t = e.WAWebVoipInit;
            if (
              (yield t.initWAWebVoip(),
              !o(
                "WAWebVoipInitEventEmitter",
              ).VoipInitEventEmitter.getIsVoipInited() &&
                (o(
                  "WAWebVoipInitEventEmitter",
                ).VoipInitEventEmitter.getDidVoipInitError() &&
                  (yield t.retryWAWebVoipInitAfterFailure()),
                !o(
                  "WAWebVoipInitEventEmitter",
                ).VoipInitEventEmitter.getIsVoipInited()))
            )
              throw r("err")("VoIP initialization did not complete");
          }
        })),
        s.apply(this, arguments)
      );
    }
    l.ensureVoipInitialized = e;
  },
  98,
);
