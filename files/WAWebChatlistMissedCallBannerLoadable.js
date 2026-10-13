__d(
  "WAWebChatlistMissedCallBannerLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebNullFunc",
    "asyncToGeneratorRuntime",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebChatlistMissedCallBannerContainer.react",
          )
            .__setRef("WAWebChatlistMissedCallBannerLoadable")
            .load();
          return e;
        }),
        "ChatlistMissedCallBannerContainer",
      ),
      s = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebChatlistMissedCallBanner.react",
          )
            .__setRef("WAWebChatlistMissedCallBannerLoadable")
            .load();
          return e;
        }),
        "ChatlistMissedCallBanner",
      ),
      u = r("react-loadable")({
        loader: e,
        loading: o("WAWebNullFunc").returnNull,
      }),
      c = r("react-loadable")({
        loader: s,
        loading: o("WAWebNullFunc").returnNull,
      });
    ((l.ChatlistMissedCallBannerContainerLoadable = u),
      (l.ChatlistMissedCallBannerLoadable = c));
  },
  98,
);
