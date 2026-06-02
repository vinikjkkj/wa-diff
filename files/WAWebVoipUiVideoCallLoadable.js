__d(
  "WAWebVoipUiVideoCallLoadable",
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
          "WAWebVoipUiVideoCall.react",
        )
          .__setRef("WAWebVoipUiVideoCallLoadable")
          .load();
        return e;
      }, "WAWebVoipUiVideoCallLoadable"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(s.Fragment, {});
        },
      });
    l.WAWebVoipUiVideoCallLoadable = c;
  },
  98,
);
