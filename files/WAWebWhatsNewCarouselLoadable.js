__d(
  "WAWebWhatsNewCarouselLoadable",
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
        var e = await r("JSResourceForInteraction")(
          "WAWebWhatsNewCarousel.react",
        )
          .__setRef("WAWebWhatsNewCarouselLoadable")
          .load();
        return e;
      }, "WhatsNewCarousel"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function () {
          return s.jsx(s.Fragment, {});
        },
      });
    l.WAWebWhatsNewCarouselLoadable = c;
  },
  98,
);
