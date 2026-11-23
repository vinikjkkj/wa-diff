__d(
  "WAWebChatlistOngoingGroupCallJoinButtonLoadable",
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
          "WAWebChatlistOngoingGroupCallJoinButton.react",
        )
          .__setRef("WAWebChatlistOngoingGroupCallJoinButtonLoadable")
          .load();
        return e;
      }, "WAWebChatlistOngoingGroupCallJoinButtonLoadable"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(s.Fragment, {});
        },
      });
    l.WAWebChatlistOngoingGroupCallJoinButtonLoadable = c;
  },
  98,
);
