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
        n = e.updateActiveNavBarItem;
      return o("WAWebVoipGatingUtils").isGroupCallingEnabled()
        ? u.jsx(d, { activeNavBarItem: t, updateActiveNavBarItem: n })
        : null;
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.CallsNavBarItemLoadable = m));
  },
  98,
);
