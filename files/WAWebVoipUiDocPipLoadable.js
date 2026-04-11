__d(
  "WAWebVoipUiDocPipLoadable",
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
          var e = yield r("JSResourceForInteraction")("WAWebVoipUiDocPip.react")
            .__setRef("WAWebVoipUiDocPipLoadable")
            .load();
          return e.WAWebVoipUiDocPip;
        }),
        "WAWebVoipUiDocPip",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(s.Fragment, {});
        },
      });
    l.WAWebVoipUiDocPipLoadable = c;
  },
  98,
);
