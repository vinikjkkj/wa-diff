__d(
  "WAWebMusicAttributionModalLoadable.react",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadLoading.react",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebMusicStatusAttribution.react",
          )
            .__setRef("WAWebMusicAttributionModalLoadable.react")
            .load();
          return e.showMusicStatusAttributionModal;
        }),
        "MusicStatusAttributionModal",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLazyLoadLoading.react"), { error: !!t.error });
        },
      });
    function d(e, t, n, r, o, a) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, o, a) {
            var i = yield u();
            return i(e, t, n, r, o, a);
          },
        )),
        m.apply(this, arguments)
      );
    }
    ((l.MusicAttributionModalLoadable = c),
      (l.showMusicStatusAttributionModalLoadable = d));
  },
  98,
);
