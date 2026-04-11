__d(
  "WAWebLottieAnimationLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WDSSpinner.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = s.jsx(r("WDSSpinner.react"), { size: 50, stroke: 4 })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
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
