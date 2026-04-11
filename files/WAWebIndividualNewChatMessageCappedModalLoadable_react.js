__d(
  "WAWebIndividualNewChatMessageCappedModalLoadable.react",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingModal.react",
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
            "WAWebIndividualNewChatMessageCappedModal.react",
          )
            .__setRef("WAWebIndividualNewChatMessageCappedModalLoadable.react")
            .load();
          return e.IndividualNewChatMessageCappedModal;
        }),
        "IndividualNewChatMessageCappedModal",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebLoadingModal.react"), { error: !!t.error });
        },
      });
    l.IndividualNewChatMessageCappedModalLoadable = c;
  },
  98,
);
