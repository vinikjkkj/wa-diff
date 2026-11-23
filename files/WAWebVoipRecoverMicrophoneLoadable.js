__d(
  "WAWebVoipRecoverMicrophoneLoadable",
  ["JSResourceForInteraction", "WAWebLazyLoadedRetriable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("WAWebLazyLoadedRetriable")(async function () {
      var e = await r("JSResourceForInteraction")("WAWebVoipRecoverMicrophone")
        .__setRef("WAWebVoipRecoverMicrophoneLoadable")
        .load();
      return e.prepareMicrophoneForUnmute;
    }, "WAWebVoipRecoverMicrophone");
    async function s(t) {
      var n = await e();
      return n(t);
    }
    l.prepareMicrophoneForUnmuteLoadable = s;
  },
  98,
);
