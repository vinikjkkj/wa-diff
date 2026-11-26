__d(
  "WAWebChatlistCallTransferJoinHereButtonLoadable",
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
          "WAWebChatlistCallTransferJoinHereButton.react",
        )
          .__setRef("WAWebChatlistCallTransferJoinHereButtonLoadable")
          .load();
        return e;
      }, "WAWebChatlistCallTransferJoinHereButtonLoadable"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(s.Fragment, {});
        },
      });
    l.WAWebChatlistCallTransferJoinHereButtonLoadable = c;
  },
  98,
);
