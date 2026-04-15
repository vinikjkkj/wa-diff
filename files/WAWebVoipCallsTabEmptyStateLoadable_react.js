__d(
  "WAWebVoipCallsTabEmptyStateLoadable.react",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var t = yield r("JSResourceForInteraction")(
              "WAWebVoipCallsTabEmptyState.react",
            )
              .__setRef("WAWebVoipCallsTabEmptyStateLoadable.react")
              .load();
            return t;
          } catch (t) {
            throw (
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to load WAWebVoipCallsTabEmptyState bundle: ",
                    "",
                  ])),
                t,
              ),
              t
            );
          }
        }),
        "WAWebVoipCallsTabEmptyStateLoadable",
      ),
      d = r("WAWebLoadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(u.Fragment, {});
        },
      });
    function m() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = u.jsx(d, {})), (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    l.VoipCallsTabEmptyStateLoadable = m;
  },
  98,
);
