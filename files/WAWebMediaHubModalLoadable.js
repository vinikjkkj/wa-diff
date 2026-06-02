__d(
  "WAWebMediaHubModalLoadable",
  [
    "fbt",
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingModal.react",
    "WAWebModal.react",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")("WAWebMediaHubModal.react")
          .__setRef("WAWebMediaHubModalLoadable")
          .load();
        return e;
      }, "WAWebMediaHubModal"),
      d = r("react-loadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingModal.react"), {
            theme: o("WAWebModal.react").ModalTheme.MediaHub,
            title: s._(/*BTDS*/ "Media"),
            error: !!t.error,
          });
        },
      });
    l.MediaHubModalLoadable = d;
  },
  226,
);
