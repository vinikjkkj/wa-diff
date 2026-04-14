__d(
  "WAWebLottieAnimationLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WDSSpinner.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u() {
      return s.jsx(r("WDSSpinner.react"), { size: 50, stroke: 4 });
    }
    u.displayName = u.name + " [from " + i.id + "]";
    var c = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebLottieAnimation.react",
          )
            .__setRef("WAWebLottieAnimationLoadable")
            .load();
          return e;
        }),
        "LottieAnimation",
      ),
      d = r("WAWebLoadable")({
        loader: c,
        loading: function () {
          return s.jsx(u, {});
        },
      });
    ((l.requireBundle = c), (l.LottieAnimation = d));
  },
  98,
);
