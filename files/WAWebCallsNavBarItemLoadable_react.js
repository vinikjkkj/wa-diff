__d(
  "WAWebCallsNavBarItemLoadable.react",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebEnvironment",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebABPropConfigValue",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var t = yield r("JSResourceForInteraction")(
              "WAWebCallsNavBarItem.react",
            )
              .__setRef("WAWebCallsNavBarItemLoadable.react")
              .load();
            return t;
          } catch (t) {
            throw (
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to load WAWebCallsNavBarItem bundle: ",
                    "",
                  ])),
                t,
              ),
              t
            );
          }
        }),
        "WAWebCallsNavBarItemLoadable",
      ),
      d = r("WAWebLoadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(u.Fragment, {});
        },
      });
    function m(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.activeNavBarItem,
        a = e.updateActiveNavBarItem,
        i = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "enable_web_calls_tab",
        );
      if (!r("WAWebEnvironment").isWindows && !i) return null;
      var l;
      return (
        t[0] !== n || t[1] !== a
          ? ((l = u.jsx(d, { activeNavBarItem: n, updateActiveNavBarItem: a })),
            (t[0] = n),
            (t[1] = a),
            (t[2] = l))
          : (l = t[2]),
        l
      );
    }
    l.CallsNavBarItemLoadable = m;
  },
  98,
);
