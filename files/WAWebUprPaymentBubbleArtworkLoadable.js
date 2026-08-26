__d(
  "WAWebUprPaymentBubbleArtworkLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebUprPaymentBubbleArtwork.react",
          )
            .__setRef("WAWebUprPaymentBubbleArtworkLoadable")
            .load();
          return e;
        }),
        "WAWebUprPaymentBubbleArtwork",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function () {
          return s.jsx(s.Fragment, {});
        },
      });
    l.WAWebUprPaymentBubbleArtworkLoadable = c;
  },
  98,
);
