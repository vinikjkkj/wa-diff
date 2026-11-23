__d(
  "WAWebVoipUiPopoutWindowLoadable",
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
          "WAWebVoipUiPopoutWindow.react",
        )
          .__setRef("WAWebVoipUiPopoutWindowLoadable")
          .load();
        return e.WAWebVoipUiPopoutWindow;
      }, "WAWebVoipUiPopoutWindow"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(s.Fragment, {});
        },
      });
    ((l.requireBundle = u), (l.WAWebVoipUiPopoutWindowLoadable = c));
  },
  98,
);
