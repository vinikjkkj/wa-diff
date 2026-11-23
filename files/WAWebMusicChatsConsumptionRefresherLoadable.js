__d(
  "WAWebMusicChatsConsumptionRefresherLoadable",
  ["JSResourceForInteraction", "WAWebLazyLoadedRetriable"],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebMusicChatsConsumptionRefresher",
        )
          .__setRef("WAWebMusicChatsConsumptionRefresherLoadable")
          .load();
        return e.refreshMusicChatsConsumption;
      }, "MusicChatsConsumptionRefresher"),
      s = async function () {
        var t = await e();
        return t.apply(void 0, arguments);
      };
    l.refreshMusicChatsConsumptionLoadable = s;
  },
  98,
);
