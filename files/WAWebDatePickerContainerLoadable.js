__d(
  "WAWebDatePickerContainerLoadable",
  ["JSResourceForInteraction", "WAWebLazyLoadedRetriable"],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWebLazyLoadedRetriable")(async function () {
      var e = await r("JSResourceForInteraction")(
        "WAWebDatePickerContainer.react",
      )
        .__setRef("WAWebDatePickerContainerLoadable")
        .load();
      return e;
    }, "DatePickerContainer");
    l.requireBundle = e;
  },
  98,
);
