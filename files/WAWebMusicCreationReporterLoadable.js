__d(
  "WAWebMusicCreationReporterLoadable",
  ["JSResourceForInteraction", "WAWebLazyLoadedRetriable"],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebMusicCreationReporter",
        )
          .__setRef("WAWebMusicCreationReporterLoadable")
          .load();
        return e.reportMusicCreation;
      }, "MusicCreationReporter"),
      s = async function () {
        var t = await e();
        return t.apply(void 0, arguments);
      };
    l.reportMusicCreationLoadable = s;
  },
  98,
);
