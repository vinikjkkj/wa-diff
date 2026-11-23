__d(
  "WAWebChatlistMissedCallCallbackButtonLoadable",
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
          "WAWebChatlistMissedCallCallbackButton.react",
        )
          .__setRef("WAWebChatlistMissedCallCallbackButtonLoadable")
          .load();
        return e;
      }, "WAWebChatlistMissedCallCallbackButtonLoadable"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(s.Fragment, {});
        },
      });
    l.WAWebChatlistMissedCallCallbackButtonLoadable = c;
  },
  98,
);
