__d(
  "WAWebMusicMsgInfoPopupLoadable",
  ["JSResourceForInteraction", "WAWebLazyLoadedRetriable"],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWebLazyLoadedRetriable")(async function () {
      var e = await r("JSResourceForInteraction")(
        "WAWebMusicMsgInfoPopup.react",
      )
        .__setRef("WAWebMusicMsgInfoPopupLoadable")
        .load();
      return e.showMusicMsgInfoPopup;
    }, "MusicMsgInfoPopup");
    async function s(t, n) {
      var r = await e();
      r(t, n);
    }
    l.showMusicMsgInfoPopupLoadable = s;
  },
  98,
);
