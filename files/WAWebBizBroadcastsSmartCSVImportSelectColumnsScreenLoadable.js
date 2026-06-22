__d(
  "WAWebBizBroadcastsSmartCSVImportSelectColumnsScreenLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebModalManager",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebBizBroadcastsSmartCSVImportSelectColumnsScreen.react",
          )
            .__setRef(
              "WAWebBizBroadcastsSmartCSVImportSelectColumnsScreenLoadable",
            )
            .load();
          return e;
        }),
        "BusinessBroadcastSmartCSVImportSelectColumnsScreen",
      );
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield u();
          o("WAWebModalManager").ModalManager.open(
            s.jsx(t, babelHelpers.extends({}, e)),
          );
        })),
        d.apply(this, arguments)
      );
    }
    l.openSmartCSVImportSelectColumnsScreenLoadable = c;
  },
  98,
);
