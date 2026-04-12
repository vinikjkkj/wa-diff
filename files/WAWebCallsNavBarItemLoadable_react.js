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
      var t = e.activeNavBarItem,
        n = e.updateActiveNavBarItem,
        a = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "enable_web_calls_tab",
        );
      return !r("WAWebEnvironment").isWindows && !a
        ? null
        : u.jsx(d, { activeNavBarItem: t, updateActiveNavBarItem: n });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.CallsNavBarItemLoadable = m));
  },
  98,
);
