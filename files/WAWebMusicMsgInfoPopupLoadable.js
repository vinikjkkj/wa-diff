__d(
  "WAWebMusicMsgInfoPopupLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWebLazyLoadedRetriable")(
      n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        var e = yield r("JSResourceForInteraction")(
          "WAWebMusicMsgInfoPopup.react",
        )
          .__setRef("WAWebMusicMsgInfoPopupLoadable")
          .load();
        return e.showMusicMsgInfoPopup;
      }),
      "MusicMsgInfoPopup",
    );
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = yield e();
          r(t, n);
        })),
        u.apply(this, arguments)
      );
    }
    l.showMusicMsgInfoPopupLoadable = s;
  },
  98,
);
