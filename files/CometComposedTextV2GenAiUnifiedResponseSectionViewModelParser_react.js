__d(
  "CometComposedTextV2GenAiUnifiedResponseSectionViewModelParser.react",
  [
    "CometComposedTextV2GenAIGridLayoutViewModelParser.react",
    "CometComposedTextV2GenAIHScrollLayoutViewModelParser.react",
    "CometComposedTextV2GenAISingleLayoutViewModelParser.react",
    "CometComposedTextV2GenAIVStackLayoutViewModelParser.react",
    "CometComposedTextV2UnsupportedURType.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = r("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.viewModel;
      if (n.__typename === "GenAISingleLayoutViewModel") {
        var a;
        return (
          t[0] !== n
            ? ((a = s.jsx(
                r("CometComposedTextV2GenAISingleLayoutViewModelParser.react"),
                { viewModel: n },
              )),
              (t[0] = n),
              (t[1] = a))
            : (a = t[1]),
          a
        );
      }
      if (n.__typename === "GenAIHScrollLayoutViewModel") {
        var i;
        return (
          t[2] !== n
            ? ((i = s.jsx(
                r("CometComposedTextV2GenAIHScrollLayoutViewModelParser.react"),
                { viewModel: n },
              )),
              (t[2] = n),
              (t[3] = i))
            : (i = t[3]),
          i
        );
      }
      if (n.__typename === "GenAIGridLayoutViewModel") {
        var l;
        return (
          t[4] !== n
            ? ((l = s.jsx(
                r("CometComposedTextV2GenAIGridLayoutViewModelParser.react"),
                { viewModel: n },
              )),
              (t[4] = n),
              (t[5] = l))
            : (l = t[5]),
          l
        );
      }
      if (n.__typename === "GenAIVStackLayoutViewModel") {
        var u;
        return (
          t[6] !== n
            ? ((u = s.jsx(
                r("CometComposedTextV2GenAIVStackLayoutViewModelParser.react"),
                { viewModel: n },
              )),
              (t[6] = n),
              (t[7] = u))
            : (u = t[7]),
          u
        );
      }
      var c;
      return (
        t[8] !== n.__typename
          ? ((c = s.jsx(
              o("CometComposedTextV2UnsupportedURType.react")
                .CometComposedTextV2UnsupportedURType,
              { typename: n.__typename },
            )),
            (t[8] = n.__typename),
            (t[9] = c))
          : (c = t[9]),
        c
      );
    }
    l.default = u;
  },
  98,
);
