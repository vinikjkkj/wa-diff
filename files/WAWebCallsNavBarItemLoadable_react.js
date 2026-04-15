__d(
  "WAWebCallsNavBarItemLoadable.react",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebVoipGatingUtils",
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
        r = e.updateActiveNavBarItem;
      if (!o("WAWebVoipGatingUtils").isGroupCallingEnabled()) return null;
      var a;
      return (
        t[0] !== n || t[1] !== r
          ? ((a = u.jsx(d, { activeNavBarItem: n, updateActiveNavBarItem: r })),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    l.CallsNavBarItemLoadable = m;
  },
  98,
);
