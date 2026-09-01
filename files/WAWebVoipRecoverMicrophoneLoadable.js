__d(
  "WAWebVoipRecoverMicrophoneLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("WAWebLazyLoadedRetriable")(
      n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        var e = yield r("JSResourceForInteraction")(
          "WAWebVoipRecoverMicrophone",
        )
          .__setRef("WAWebVoipRecoverMicrophoneLoadable")
          .load();
        return e.prepareMicrophoneForUnmute;
      }),
      "WAWebVoipRecoverMicrophone",
    );
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield e();
          return n(t);
        })),
        u.apply(this, arguments)
      );
    }
    l.prepareMicrophoneForUnmuteLoadable = s;
  },
  98,
);
