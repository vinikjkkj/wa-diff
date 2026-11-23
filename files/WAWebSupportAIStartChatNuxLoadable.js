__d(
  "WAWebSupportAIStartChatNuxLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingConfirmPopup.react",
    "WAWebSupportChatStrings",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebSupportAIStartChatNux.react",
        )
          .__setRef("WAWebSupportAIStartChatNuxLoadable")
          .load();
        return e;
      }, "SupportAIStartChatNux"),
      c = r("react-loadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingConfirmPopup.react"), {
            okText: o("WAWebSupportChatStrings").SupportChatStartButtonText(),
            error: !!t.error,
          });
        },
      });
    l.SupportAIStartChatNuxLoadable = c;
  },
  98,
);
