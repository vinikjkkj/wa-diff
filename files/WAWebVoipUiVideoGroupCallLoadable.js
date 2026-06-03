__d(
  "WAWebVoipUiVideoGroupCallLoadable",
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
            "WAWebVoipUiVideoGroupCall.react",
          )
            .__setRef("WAWebVoipUiVideoGroupCallLoadable")
            .load();
          return e;
        }),
        "WAWebVoipUiVideoGroupCallLoadable",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(s.Fragment, {});
        },
      });
    l.WAWebVoipUiVideoGroupCallLoadable = c;
  },
  98,
);
