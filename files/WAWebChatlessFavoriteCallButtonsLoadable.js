__d(
  "WAWebChatlessFavoriteCallButtonsLoadable",
  [
    "JSResourceForInteraction",
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
            "WAWebChatlessFavoriteCallButtons.react",
          )
            .__setRef("WAWebChatlessFavoriteCallButtonsLoadable")
            .load();
          return e;
        }),
        "ChatlessFavoriteCallButtons",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function () {
          return s.jsx(s.Fragment, {});
        },
      });
    l.WAWebChatlessFavoriteCallButtonsLoadable = c;
  },
  98,
);
