__d(
  "WAWebPostCallNotificationsUpsellBannerLoadable",
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
          "WAWebPostCallNotificationsUpsellBanner.react",
        )
          .__setRef("WAWebPostCallNotificationsUpsellBannerLoadable")
          .load();
        return e;
      }, "WAWebPostCallNotificationsUpsellBannerLoadable"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(s.Fragment, {});
        },
      });
    l.WAWebPostCallNotificationsUpsellBannerLoadable = c;
  },
  98,
);
