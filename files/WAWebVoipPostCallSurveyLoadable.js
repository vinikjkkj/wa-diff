__d(
  "WAWebVoipPostCallSurveyLoadable",
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
          "WAWebVoipPostCallSurvey.react",
        )
          .__setRef("WAWebVoipPostCallSurveyLoadable")
          .load();
        return e;
      }, "WAWebVoipPostCallSurveyLoadable"),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(s.Fragment, {});
        },
      });
    l.WAWebVoipPostCallSurveyLoadable = c;
  },
  98,
);
