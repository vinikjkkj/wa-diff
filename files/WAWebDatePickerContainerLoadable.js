__d(
  "WAWebDatePickerContainerLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWebLazyLoadedRetriable")(
      n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        var e = yield r("JSResourceForInteraction")(
          "WAWebDatePickerContainer.react",
        )
          .__setRef("WAWebDatePickerContainerLoadable")
          .load();
        return e;
      }),
      "DatePickerContainer",
    );
    l.requireBundle = e;
  },
  98,
);
