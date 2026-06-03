__d(
  "WAWebIndividualNewChatCappedComposeBarLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadLoading.react",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebIndividualNewChatCappedComposeBar.react",
          )
            .__setRef("WAWebIndividualNewChatCappedComposeBarLoadable")
            .load();
          return e.IndividualNewChatMessageCappedComposeBar;
        }),
        "IndividualNewChatMessageCappedComposeBar",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLazyLoadLoading.react"), { error: !!t.error });
        },
      });
    l.IndividualNewChatMessageCappedComposeBarLoadable = c;
  },
  98,
);
