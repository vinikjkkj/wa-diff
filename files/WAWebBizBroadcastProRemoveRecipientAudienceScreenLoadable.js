__d(
  "WAWebBizBroadcastProRemoveRecipientAudienceScreenLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebBizBroadcastProRemoveRecipientAudienceScreen.react",
        )
          .__setRef("WAWebBizBroadcastProRemoveRecipientAudienceScreenLoadable")
          .load();
        return e;
      }, "BizBroadcastProRemoveRecipientAudienceScreen"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    ((l.requireBundle = u),
      (l.WAWebBizBroadcastProRemoveRecipientAudienceScreenLoadable = c));
  },
  98,
);
