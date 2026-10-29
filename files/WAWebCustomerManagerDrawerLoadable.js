__d(
  "WAWebCustomerManagerDrawerLoadable",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebCustomerManagerOpenQpl",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebCustomerManagerDrawer.react",
          )
            .__setRef("WAWebCustomerManagerDrawerLoadable")
            .load();
          return e;
        }),
        "ContactManagerDrawer",
        {
          onFinalFailure: function (n, r) {
            o("WAWebCustomerManagerOpenQpl").endCustomerManagerOpenBundleFailed(
              n.name,
              r,
            );
            var t = r > 1 ? "s" : "";
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to load a component",
                  ])),
              )
              .sendLogs(
                "loadable:ContactManagerDrawer failed to load after [" +
                  r +
                  "] attempt" +
                  t,
              );
          },
        },
      ),
      d = r("WAWebLoadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingDrawer.react"), { error: !!t.error });
        },
      });
    l.WAWebCustomerManagerDrawerLoadable = d;
  },
  98,
);
