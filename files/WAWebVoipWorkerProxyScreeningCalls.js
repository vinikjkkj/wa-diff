__d(
  "WAWebVoipWorkerProxyScreeningCalls",
  ["WAWebVoipCallIdProvider", "WAWebVoipScreeningRecordingInfo"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return {
        screenCall: async function (n) {
          return Number(await e("screenCall", { isAutomatic: n }));
        },
        acceptMediaOnly: async function () {
          return Number(await e("acceptMediaOnly", {}));
        },
        commitAccept: async function () {
          return (
            o("WAWebVoipCallIdProvider").resetPendingCallId(),
            Number(await e("commitAccept", {}))
          );
        },
        screeningPromptFinished: async function () {
          return Number(await e("screeningPromptFinished", {}));
        },
        getScreeningRecordingInfo: async function () {
          try {
            var t;
            return o(
              "WAWebVoipScreeningRecordingInfo",
            ).parseScreeningRecordingInfo(
              String(
                (t = await e("getScreeningRecordingInfo", {})) != null ? t : "",
              ),
            );
          } catch (e) {
            return null;
          }
        },
      };
    }
    l.createWorkerProxyScreeningCalls = e;
  },
  98,
);
