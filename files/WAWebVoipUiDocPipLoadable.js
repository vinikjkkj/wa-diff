__d(
  "WAWebVoipUiDocPipLoadable",
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
        var e = await r("JSResourceForInteraction")("WAWebVoipUiDocPip.react")
          .__setRef("WAWebVoipUiDocPipLoadable")
          .load();
        return e.WAWebVoipUiDocPip;
      }, "WAWebVoipUiDocPip"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(s.Fragment, {});
        },
      });
    ((l.requireBundle = u), (l.WAWebVoipUiDocPipLoadable = c));
  },
  98,
);
