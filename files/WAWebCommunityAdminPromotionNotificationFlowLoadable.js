__d(
  "WAWebCommunityAdminPromotionNotificationFlowLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingModal.react",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebCommunityAdminPromotionNotificationFlow.react",
        )
          .__setRef("WAWebCommunityAdminPromotionNotificationFlowLoadable")
          .load();
        return e;
      }, "CommunityAdminPromotionNotificationFlow"),
      c = r("react-loadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingModal.react"), { error: !!t.error });
        },
      });
    ((l.requireBundle = u),
      (l.CommunityAdminPromotionNotificationFlowLoadable = c));
  },
  98,
);
