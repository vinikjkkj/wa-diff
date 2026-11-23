__d(
  "WAWebChatlessFavoriteCallButtonsLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebChatlessFavoriteCallButtons.react",
        )
          .__setRef("WAWebChatlessFavoriteCallButtonsLoadable")
          .load();
        return e;
      }, "ChatlessFavoriteCallButtons"),
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
