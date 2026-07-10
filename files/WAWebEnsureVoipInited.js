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
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            (e === void 0 && (e = "call"),
            !o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited())
          ) {
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
          }
        })),
        s.apply(this, arguments)
      );
    }
    l.ensureVoipInitialized = e;
  },
  98,
);
