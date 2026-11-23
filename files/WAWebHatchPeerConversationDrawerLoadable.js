__d(
  "WAWebHatchPeerConversationDrawerLoadable",
  [
    "JSResourceForInteraction",
    "WAWebHatchLoadingDrawer.react",
    "WAWebLazyLoadedRetriable",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebHatchPeerConversationDrawer.react",
        )
          .__setRef("WAWebHatchPeerConversationDrawerLoadable")
          .load();
        return e;
      }, "WAWebHatchPeerConversationDrawer"),
      c = r("react-loadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebHatchLoadingDrawer.react"), {
            error: !!t.error,
          });
        },
      });
    l.WAWebHatchPeerConversationDrawerLoadable = c;
  },
  98,
);
