__d(
  "WAWebMusicResendMsgLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")("WAWebMusicResendMsg")
            .__setRef("WAWebMusicResendMsgLoadable")
            .load();
          return e.resendMusicMsg;
        }),
        "MusicResendMsg",
      ),
      s = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield e();
          return t.apply(void 0, arguments);
        });
        return function () {
          return t.apply(this, arguments);
        };
      })();
    l.resendMusicMsgLoadable = s;
  },
  98,
);
