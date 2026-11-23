__d(
  "MAIBAIGBudgetBoostEditor.entrypoint",
  ["JSResourceForInteraction", "MAIBAIGBudgetBoostForecastQuery$Parameters"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        return {
          queries: {
            forecast: {
              parameters: r("MAIBAIGBudgetBoostForecastQuery$Parameters"),
              variables: babelHelpers.extends({}, t),
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "MAIBAIGBudgetBoostEditorRoot.react",
      ).__setRef("MAIBAIGBudgetBoostEditor.entrypoint"),
    };
    l.default = e;
  },
  98,
);
