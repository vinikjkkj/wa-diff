__d(
  "WAWebForwardMessageModalLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWebLazyLoadedRetriable")(
      n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        var e = yield r("JSResourceForInteraction")(
          "WAWebForwardMessageModal.react",
        )
          .__setRef("WAWebForwardMessageModalLoadable")
          .load();
        return e;
      }),
      "ForwardMessageModal",
    );
    l.requireBundle = e;
  },
  98,
);
