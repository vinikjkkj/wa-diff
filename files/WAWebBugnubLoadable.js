__d(
  "WAWebBugnubLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWebLazyLoadedRetriable")(
      n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        var e = yield r("JSResourceForInteraction")("WAWebBugnub.react")
          .__setRef("WAWebBugnubLoadable")
          .load();
        return e.openBugnubPopup;
      }),
      "bugnub",
    );
    function s() {
      e().then(function (e) {
        e();
      });
    }
    l.default = s;
  },
  98,
);
