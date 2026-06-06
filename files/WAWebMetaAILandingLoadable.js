__d(
  "WAWebMetaAILandingLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")("WAWebMetaAILanding.react")
          .__setRef("WAWebMetaAILandingLoadable")
          .load();
        return e;
      }, "MetaAILanding"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function () {
          return s.jsx(s.Fragment, {});
        },
      });
    l.WAWebMetaAILandingLoadable = c;
  },
  98,
);
