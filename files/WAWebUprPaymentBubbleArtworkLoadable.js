__d(
  "WAWebUprPaymentBubbleArtworkLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebUprPaymentBubbleArtwork.react",
        )
          .__setRef("WAWebUprPaymentBubbleArtworkLoadable")
          .load();
        return e;
      }, "WAWebUprPaymentBubbleArtwork"),
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
