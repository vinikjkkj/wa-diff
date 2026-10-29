__d(
  "WAWebVoipWorkerProxyScreeningCalls",
  [
    "WAWebVoipCallIdProvider",
    "WAWebVoipScreeningRecordingInfo",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return {
        screenCall: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            return Number(yield e("screenCall", { isAutomatic: t }));
          });
          function r(e) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
        acceptMediaOnly: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return Number(yield e("acceptMediaOnly", {}));
          });
          function r() {
            return t.apply(this, arguments);
          }
          return r;
        })(),
        commitAccept: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return (
              o("WAWebVoipCallIdProvider").resetPendingCallId(),
              Number(yield e("commitAccept", {}))
            );
          });
          function r() {
            return t.apply(this, arguments);
          }
          return r;
        })(),
        screeningPromptFinished: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return Number(yield e("screeningPromptFinished", {}));
          });
          function r() {
            return t.apply(this, arguments);
          }
          return r;
        })(),
        getScreeningRecordingInfo: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              var t;
              return o(
                "WAWebVoipScreeningRecordingInfo",
              ).parseScreeningRecordingInfo(
                String(
                  (t = yield e("getScreeningRecordingInfo", {})) != null
                    ? t
                    : "",
                ),
              );
            } catch (e) {
              return null;
            }
          });
          function r() {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      };
    }
    l.createWorkerProxyScreeningCalls = e;
  },
  98,
);
