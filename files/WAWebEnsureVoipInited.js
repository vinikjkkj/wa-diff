__d(
  "WAWebEnsureVoipInited",
  ["WAWebVoipBackendLoadable", "WAWebVoipInitEventEmitter", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e() {
      if (
        !o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited()
      ) {
        var e = await o("WAWebVoipBackendLoadable").requireVoipJsBackend(),
          t = e.WAWebVoipInit;
        if (
          (await t.initWAWebVoip(),
          !o(
            "WAWebVoipInitEventEmitter",
          ).VoipInitEventEmitter.getIsVoipInited() &&
            (o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getDidVoipInitError() &&
              (await t.retryWAWebVoipInitAfterFailure()),
            !o(
              "WAWebVoipInitEventEmitter",
            ).VoipInitEventEmitter.getIsVoipInited()))
        )
          throw r("err")("VoIP initialization did not complete");
      }
    }
    l.ensureVoipInitialized = e;
  },
  98,
);
