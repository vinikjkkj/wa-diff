__d(
  "WAWebVoipCallButtonsLoadable",
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
        var e = await r("JSResourceForInteraction")("WAWebCallButtons.react")
          .__setRef("WAWebVoipCallButtonsLoadable")
          .load();
        return e.WAWebCallButtons;
      }, "WAWebCallButtonsLoadable"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(s.Fragment, {});
        },
      });
    ((l.requireBundle = u), (l.WAWebCallButtonsLoadable = c));
  },
  98,
);
