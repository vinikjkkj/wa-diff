__d(
  "WAWebChatlistOngoingGroupCallJoinButtonLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebChatlistOngoingGroupCallJoinButton.react",
          )
            .__setRef("WAWebChatlistOngoingGroupCallJoinButtonLoadable")
            .load();
          return e;
        }),
        "WAWebChatlistOngoingGroupCallJoinButtonLoadable",
      ),
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
